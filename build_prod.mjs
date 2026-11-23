// ============================================================================
// ARCHIVO: build_prod.mjs (v8.3 • 78 Cartas SEO Estáticas + 0 Render-Blocking)
// Compilador de Producción para Oráculo del Velo Astral
// - Elimina @babel/standalone (-2.8 MB) y cdn.tailwindcss.com (-410 KB JIT)
// - Incrusta styles.min.css inline en cada HTML (0 ms de CSS bloqueante)
// - Carga Google Fonts (Cinzel + Lora + Plus Jakarta Sans) de forma asíncrona
// - Separa core.bundle (~45 KB) de grimorio.bundle (diferido en index.html)
// - Empaqueta los 4 palos menores editoriales (Bastos, Copas, Espadas, Oros)
// - Pre-renderiza 78 páginas HTML estáticas en dist/cartas/<slug>.html con
//   <h1>, Luz y Sombra, 5 Dominios, Psicomagia, FAQs, Concilio y JSON-LD completo
// - Genera automáticamente dist/sitemap.xml con las 82 URLs canónicas
// ============================================================================

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import zlib from "node:zlib";
import { execFileSync } from "node:child_process";
import esbuild from "esbuild";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const ASSETS = path.join(DIST, "assets");
const DIST_CARDS = path.join(DIST, "cartas");
const SITE_URL = "https://emibaio.github.io/oraculo-v5/";
const TODAY_ISO = new Date().toISOString().slice(0, 10);

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";

function shortHash(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 8);
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

function readUtf8(relPath) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) {
    throw new Error("Falta el archivo requerido: " + relPath);
  }
  return fs.readFileSync(full, "utf8");
}

function resolveDataFile(relPath) {
  if (fs.existsSync(path.join(ROOT, relPath))) return relPath;
  const baseName = path.basename(relPath);
  if (fs.existsSync(path.join(ROOT, baseName))) return baseName;
  return null;
}

function escHtml(val) {
  return String(val == null ? "" : val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeJsonLd(obj) {
  return JSON.stringify(obj).replace(/<\//g, "<\\/");
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function extractBabelJsx(relPath, rawCode) {
  const captured = [];
  const sandbox = {
    window: { ARCANA_REGISTRY: {} },
    globalThis: null,
    console: { log() {}, warn() {}, error() {} },
    Babel: {
      transform(code) {
        captured.push(String(code || ""));
        return { code: "" };
      }
    }
  };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(rawCode, sandbox, { filename: relPath });
  if (captured.length === 0) return null;
  return captured.join("\n;\n");
}

async function compileJsxFile(relPath) {
  const raw = readUtf8(relPath);
  const jsxCode = extractBabelJsx(relPath, raw);
  if (jsxCode !== null) {
    const res = await esbuild.transform(jsxCode, {
      loader: "jsx",
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      target: "es2019",
      minify: true,
      legalComments: "none",
      sourcefile: relPath
    });
    return res.code;
  }
  const res = await esbuild.transform(raw, {
    loader: "js",
    target: "es2019",
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: false,
    legalComments: "none"
  });
  return res.code;
}

async function minifyPlainJs(rawCode, label) {
  const res = await esbuild.transform(rawCode, {
    loader: "js",
    target: "es2019",
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: false,
    legalComments: "none",
    sourcefile: label
  });
  return res.code;
}

function writeAssetAndReport(filename, contentStr, reportRows) {
  const fullPath = path.join(ASSETS, filename);
  fs.writeFileSync(fullPath, contentStr, "utf8");
  const buf = Buffer.from(contentStr, "utf8");
  const gz = zlib.gzipSync(buf, { level: 9 });
  const hash = shortHash(buf);

  if (filename.endsWith(".js")) {
    try {
      new vm.Script(contentStr, { filename });
    } catch (err) {
      throw new Error("Error de sintaxis en bundle generado " + filename + ": " + err.message);
    }
  }

  reportRows.push({
    file: "assets/" + filename,
    raw: kb(buf.length),
    gzip: kb(gz.length),
    hash
  });
  return { filename, hash, path: "assets/" + filename + "?v=" + hash };
}

function makeGoogleFontsNonBlocking(html) {
  return html.replace(
    /<link\s+href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"]+)"\s+rel="stylesheet"\s*\/?>/i,
    function (_, rawHref) {
      return (
        '<link rel="preload" as="style" href="' + rawHref + '" />\n' +
        '  <link rel="stylesheet" href="' + rawHref + '" media="print" onload="this.media=\'all\'" />\n' +
        '  <noscript><link rel="stylesheet" href="' + rawHref + '" /></noscript>'
      );
    }
  );
}

function addMetricFontFallback(html) {
  return html.replace(
    /font-family:\s*'Cormorant Garamond',\s*Georgia,\s*serif;/g,
    "font-family: 'Lora', 'Lora Fallback', Georgia, serif;"
  );
}

// Carga los 78 Arcanos normalizados y el Concilio en un sandbox Node para pre-renderizar SEO
function loadFullTarotCatalog() {
  const win = {
    location: { search: "", pathname: "/", protocol: "https:", href: SITE_URL },
    history: { pushState() {} },
    dispatchEvent() {},
    scrollTo() {},
    localStorage: { getItem() { return null; }, setItem() {} }
  };
  const sandbox = {
    window: win,
    self: win,
    globalThis: win,
    localStorage: win.localStorage,
    URLSearchParams,
    navigator: { userAgent: 'node-build' },
    document: { body: null },
    console: { log() {}, warn() {}, error() {} }
  };
  win.window = win;
  const ctx = vm.createContext(sandbox);

  const loadList = [
    "datos_cartas.js",
    "datos_cartas/datos_sol_1.js",
    "datos_cartas/datos_sol_2.js",
    "datos_cartas/datos_sol_3.js",
    "datos_cartas/datos_sol_4.js",
    "datos_cartas/datos_sol_5.js",
    "datos_cartas/datos_sol_6.js",
    "datos_cartas/datos_luna_1.js",
    "datos_cartas/datos_luna_2.js",
    "datos_cartas/datos_luna_3.js",
    "datos_cartas/datos_luna_4.js",
    "datos_cartas/datos_luna_5.js",
    "datos_cartas/datos_luna_6.js",
    "datos_cartas/datos_menores_bastos.js",
    "datos_cartas/datos_menores_copas.js",
    "datos_cartas/datos_menores_espadas.js",
    "datos_cartas/datos_menores_oros.js",
    "datos_cartas_menores.js",
    "concilio_tarotistas.js",
    "motor_tarot.js"
  ];

  for (const rel of loadList) {
    const actualRel = resolveDataFile(rel);
    if (!actualRel) continue;
    const code = readUtf8(actualRel);
    vm.runInContext(code, ctx, { filename: actualRel });
    if (rel === "datos_cartas.js") {
      vm.runInContext(
        'if(typeof MAJOR_ARCANA!=="undefined")window.MAJOR_ARCANA=MAJOR_ARCANA;' +
        'if(typeof REVERSED_DATA!=="undefined")window.REVERSED_DATA=REVERSED_DATA;',
        ctx
      );
    }
  }
  vm.runInContext("if(window.TAROT_DB&&window.TAROT_DB.syncExtendedData)window.TAROT_DB.syncExtendedData();", ctx);

  const allCards = win.TAROT_DB.getAllCards();
  if (!Array.isArray(allCards) || allCards.length !== 78) {
    throw new Error("Se esperaban 78 cartas en TAROT_DB, se obtuvieron: " + (allCards ? allCards.length : 0) + ". Verificá que los 4 archivos datos_menores_*.js estén en datos_cartas/ o en la raíz.");
  }

  return {
    cards: allCards,
    router: win.TarotRouter,
    db: win.TAROT_DB,
    concilio: win.ConcilioEditorial
  };
}

// Reemplaza enlaces carta.html?arcano=ID en landings estáticas hacia cartas/<slug>.html
function rewriteStaticCardLinks(html, slugById) {
  return html.replace(
    /href="carta\.html\?arcano=([a-z0-9_]+)(?:(?:&amp;|&)modo=sombra)?"/gi,
    function (match, idKey) {
      const slug = slugById[String(idKey).toLowerCase()];
      if (!slug) return match;
      const isShadow = /modo=sombra/i.test(match);
      return 'href="cartas/' + slug + '.html' + (isShadow ? '?modo=sombra' : '') + '"';
    }
  );
}

// Genera una página HTML estática completa e hidratable en dist/cartas/<slug>.html
function renderStaticCardHtml({ card, neighbors, author, reviewer, slug, inlineCssBlock, coreAsset, grimorioAsset, cartaAsset }) {
  const isMajor = card.type === "major" || card.arcanaType === "major" || Number(card.id) <= 21;
  const canonicalUrl = SITE_URL + "cartas/" + slug + ".html";
  const corr = card.correspondences || {};
  const rev = card.reversed || {};
  const revCorr = rev.correspondences || {};
  const domains = card.domains || {};
  const revDomains = rev.domains || {};
  const action = card.theAlchemy || card.actionOracle || null;

  const pageTitle = isMajor
    ? card.name + " (" + card.numeral + ") en el Tarot: Significado en Amor, Trabajo y Sombra | Oráculo del Velo Astral"
    : card.name + " en el Tarot (" + card.suitName + "): Significado en Amor, Dinero y Sombra | Oráculo del Velo Astral";

  const rawDesc =
    "Significado completo de " + card.name + " al derecho e invertida: amor, trabajo, dinero, salud, respuesta Sí o No (" +
    (corr.yesNo || "consultar") + ") y consejo práctico. " + String(card.meaning || "");
  const metaDesc = rawDesc.replace(/\s+/g, " ").trim().slice(0, 158).replace(/\s+\S*$/, "") + ".";

  const faqs = [
    {
      question: "¿Qué responde " + card.name + " en una tirada de Tarot Sí o No?",
      answer:
        "Al derecho (En Luz), la respuesta oracular de " + card.name + " es: “" + (corr.yesNo || "Sí") +
        "”. En polaridad invertida (En Sombra), señala: “" +
        (revCorr.yesNo || rev.yesNo || "Pausa o revisión previa antes de avanzar") + "”."
    },
    {
      question: isMajor
        ? "¿Cuál es la correspondencia cabalística y alquímica de " + card.name + "?"
        : "¿Cuál es el elemento, decanato astrológico y tiempo de " + card.name + "?",
      answer:
        (corr.hebrewLetter
          ? "Está regida por la letra hebrea " + corr.hebrewLetter + (corr.treeOfLifePath ? " (" + corr.treeOfLifePath + ")" : "") + ". "
          : "Pertenece al elemento " + (corr.element || "") + " (" + (corr.astro || "") + "). ") +
        (corr.alchemy ? "En alquimia representa: " + corr.alchemy + ". " : "") +
        (corr.tarotTiming ? "Tiempo orientativo: " + corr.tarotTiming + "." : "")
    },
    {
      question: "¿Qué significa " + card.name + " en el amor, el trabajo y el dinero?",
      answer:
        "En el amor: " + (domains.love || "") +
        " En el trabajo: " + (domains.work || "") +
        (domains.money ? " En el dinero: " + domains.money : "")
    },
    {
      question: "¿Qué consejo práctico o acto simbólico propone " + card.name + "?",
      answer:
        (action && action.psychomagicAct
          ? action.psychomagicAct + (action.talismanPhrase ? " Mantra: “" + action.talismanPhrase + "”. " : " ")
          : "") +
        "Consejo: “" + (card.counsel || "") + "”."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": pageTitle.replace(" | Oráculo del Velo Astral", ""),
        "description": metaDesc,
        "inLanguage": "es",
        "mainEntityOfPage": canonicalUrl,
        "image": SITE_URL + "img/og-cover.jpg",
        "dateModified": TODAY_ISO,
        "author": {
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.role,
          "image": SITE_URL + author.image,
          "url": SITE_URL + "sobre-nosotros.html#" + author.id,
          "knowsAbout": author.focusTags || []
        },
        "reviewedBy": {
          "@type": "Person",
          "name": reviewer.name,
          "jobTitle": reviewer.role,
          "image": SITE_URL + reviewer.image,
          "url": SITE_URL + "sobre-nosotros.html#" + reviewer.id,
          "knowsAbout": reviewer.focusTags || []
        },
        "publisher": {
          "@type": "Organization",
          "name": "Oráculo del Velo Astral",
          "url": SITE_URL
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Oráculo", "item": SITE_URL },
          {
            "@type": "ListItem",
            "position": 2,
            "name": isMajor ? "Arcanos Mayores" : "Palo de " + card.suitName,
            "item": SITE_URL + "tarot-si-o-no.html"
          },
          { "@type": "ListItem", "position": 3, "name": card.name, "item": canonicalUrl }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(function (f) {
          return {
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          };
        })
      }
    ]
  };

  const prevLink = neighbors && neighbors.prev
    ? '<a href="' + escHtml(neighbors.prev.slug) + '.html" class="p-4 rounded-xl bg-[#0c0717]/95 border border-amber-500/35 hover:border-amber-300 transition flex items-center gap-4">' +
      '<span class="font-display text-amber-300 font-bold">' + escHtml(neighbors.prev.numeral) + '</span>' +
      '<span><span class="block font-ui text-xs uppercase text-amber-300/95">← Carta Anterior</span><strong class="font-display text-lg text-amber-100">' + escHtml(neighbors.prev.name) + '</strong></span></a>'
    : "";

  const nextLink = neighbors && neighbors.next
    ? '<a href="' + escHtml(neighbors.next.slug) + '.html" class="p-4 rounded-xl bg-[#0c0717]/95 border border-amber-500/35 hover:border-amber-300 transition flex items-center justify-end gap-4 text-right">' +
      '<span><span class="block font-ui text-xs uppercase text-amber-300/95">Carta Siguiente →</span><strong class="font-display text-lg text-amber-100">' + escHtml(neighbors.next.name) + '</strong></span>' +
      '<span class="font-display text-amber-300 font-bold">' + escHtml(neighbors.next.numeral) + '</span></a>'
    : "";

  const relatedLinks = ((neighbors && neighbors.related) || []).map(function (rel) {
    return (
      '<a href="' + escHtml(rel.slug) + '.html" class="p-3 rounded-xl bg-[#0c0717]/95 border border-purple-500/30 hover:border-amber-300 transition text-center">' +
      '<span class="font-display text-xs text-amber-300 block">' + escHtml(rel.numeral) + '</span>' +
      '<span class="font-ui text-sm font-bold text-amber-100">' + escHtml(rel.name) + '</span></a>'
    );
  }).join("");

  const faqHtml = faqs.map(function (f) {
    return (
      '<details class="p-4 rounded-2xl bg-[#0c0717]/95 border border-amber-500/30" open>' +
      '<summary class="font-ui cursor-pointer font-bold text-amber-200">' + escHtml(f.question) + '</summary>' +
      '<p class="mt-3 text-base text-amber-50/95 leading-relaxed">' + escHtml(f.answer) + '</p>' +
      '</details>'
    );
  }).join("\n        ");

  const nodesHtml = (card.nodes || []).map(function (n) {
    return (
      '<li class="p-4 rounded-xl bg-white/[0.03] border border-amber-400/30">' +
      '<strong class="font-ui text-sm text-amber-200 block">' + escHtml(n.title) + '</strong>' +
      '<p class="text-base text-amber-50/95 mt-1">' + escHtml(n.secret) + '</p></li>'
    );
  }).join("");

  return (
    '<!DOCTYPE html>\n' +
    '<html lang="es">\n' +
    '<head>\n' +
    '  <meta charset="UTF-8" />\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />\n' +
    '  <meta name="theme-color" content="#040207" />\n' +
    '  <title>' + escHtml(pageTitle) + '</title>\n' +
    '  <meta name="description" content="' + escHtml(metaDesc) + '" />\n' +
    '  <meta name="robots" content="index, follow" />\n' +
    '  <link rel="icon" type="image/svg+xml" href="../favicon.svg" />\n' +
    '  <link rel="canonical" href="' + escHtml(canonicalUrl) + '" />\n' +
    '  <meta property="og:type" content="article" />\n' +
    '  <meta property="og:locale" content="es_AR" />\n' +
    '  <meta property="og:site_name" content="Oráculo del Velo Astral" />\n' +
    '  <meta property="og:title" content="' + escHtml(pageTitle) + '" />\n' +
    '  <meta property="og:description" content="' + escHtml(metaDesc) + '" />\n' +
    '  <meta property="og:url" content="' + escHtml(canonicalUrl) + '" />\n' +
    '  <meta property="og:image" content="' + SITE_URL + 'img/og-cover.jpg" />\n' +
    '  <meta name="twitter:card" content="summary_large_image" />\n' +
    '  <meta name="twitter:title" content="' + escHtml(pageTitle) + '" />\n' +
    '  <meta name="twitter:description" content="' + escHtml(metaDesc) + '" />\n' +
    '  <meta name="twitter:image" content="' + SITE_URL + 'img/og-cover.jpg" />\n\n' +
    '  <script type="application/ld+json">' + safeJsonLd(jsonLd) + '</script>\n\n' +
    '  <link rel="preconnect" href="https://unpkg.com" crossorigin />\n' +
    '  <link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
    '  <link rel="preload" as="style" href="' + GOOGLE_FONTS_URL + '" />\n' +
    '  <link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" media="print" onload="this.media=\'all\'" />\n' +
    '  <noscript><link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" /></noscript>\n' +
    '  ' + inlineCssBlock + '\n\n' +
    '  <script>window.__VELO_STATIC_CARDS__=true;window.__VELO_STATIC_CARD_ID__=' + JSON.stringify(String(card.id)) + ';window.__VELO_BASE_PREFIX__="../";</script>\n' +
    '  <script defer crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>\n' +
    '  <script defer crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>\n' +
    '  <script defer crossorigin src="https://unpkg.com/framer-motion@10.18.0/dist/framer-motion.js"></script>\n' +
    '  <script defer src="../' + coreAsset.path + '"></script>\n' +
    '  <script defer src="../' + grimorioAsset.path + '"></script>\n' +
    '  <script defer src="../' + cartaAsset.path + '"></script>\n\n' +
    '  <style>\n' +
    '    * { box-sizing: border-box; }\n' +
    '    html, body { margin: 0; padding: 0; min-height: 100%; background-color: #040207; color: #fffbeb; font-family: \'Lora\', \'Lora Fallback\', Georgia, serif; font-size: 16px; line-height: 1.65; overflow-x: hidden; -webkit-font-smoothing: antialiased; }\n' +
    '    .font-ui { font-family: \'Plus Jakarta Sans\', \'Jakarta Fallback\', system-ui, -apple-system, sans-serif; }\n' +
    '    .font-body { font-family: \'Lora\', \'Lora Fallback\', Georgia, serif; }\n' +
    '    .font-display, .font-cinzel, .font-cinzel-dec { font-family: \'Cinzel\', Georgia, serif; }\n' +
    '  </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '  <div id="root">\n' +
    '    <div style="background:radial-gradient(ellipse at 50% 25%, #190e30 0%, #090510 55%, #040207 100%)" class="min-h-screen text-amber-50 pb-24">\n' +
    '      <header class="sticky top-0 z-50 bg-[#040207] border-b border-[#d4af37]/35 px-4 py-3">\n' +
    '        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">\n' +
    '          <nav aria-label="Breadcrumb" class="font-ui text-xs sm:text-[13px] uppercase tracking-[0.08em] text-amber-200/95 flex items-center gap-2">\n' +
    '            <a href="../index.html" class="hover:text-amber-300">Oráculo</a>\n' +
    '            <span class="text-amber-500">›</span>\n' +
    '            <span>' + escHtml(isMajor ? "Arcanos Mayores" : "Palo de " + card.suitName) + '</span>\n' +
    '            <span class="text-amber-500">›</span>\n' +
    '            <span class="text-amber-300 font-bold">' + escHtml(card.name) + '</span>\n' +
    '          </nav>\n' +
    '          <a href="../index.html" class="font-ui px-4 py-1.5 rounded-full bg-amber-400 text-[#09050e] text-xs font-bold uppercase tracking-wider">✦ Consultar Altar</a>\n' +
    '        </div>\n' +
    '      </header>\n\n' +
    '      <main class="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 space-y-12">\n' +
    '        <header class="text-center space-y-4">\n' +
    '          <span class="font-ui inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-xs uppercase tracking-[0.12em] text-amber-300">' +
    escHtml(isMajor ? "Arcano Mayor " + card.numeral : "Arcano Menor • Palo de " + card.suitName + " (" + card.numeral + ")") + '</span>\n' +
    '          <h1 class="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-amber-200">' + escHtml(card.name) + '</h1>\n' +
    '          <p class="font-ui text-sm sm:text-base uppercase tracking-[0.08em] text-amber-400">“' + escHtml(card.subtitle) + '”</p>\n' +
    '          <div class="flex flex-wrap justify-center gap-2 pt-2 text-xs font-ui">\n' +
    '            <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200">Elemento: <strong>' + escHtml(corr.element || card.rootElement) + '</strong></span>\n' +
    '            <span class="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-200">Regente: <strong>' + escHtml(corr.astro || "") + '</strong></span>\n' +
    '            <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-200">Tarot Sí/No: <strong>' + escHtml(corr.yesNo || "") + '</strong></span>\n' +
    (corr.tarotTiming ? '            <span class="px-3 py-1 rounded-full bg-white/[0.05] border border-amber-400/30 text-amber-100">Tiempo: <strong>' + escHtml(corr.tarotTiming) + '</strong></span>\n' : "") +
    '          </div>\n' +
    '        </header>\n\n' +
    (card.oracleVoice
      ? '        <section class="p-6 sm:p-8 rounded-3xl bg-[#0c0717]/95 border-2 border-[#d4af37]/60 space-y-3">\n' +
        '          <span class="font-ui text-xs uppercase tracking-[0.12em] font-bold text-amber-300 block">☉ La Voz de ' + escHtml(card.name) + ' en Luz</span>\n' +
        '          <blockquote class="text-xl sm:text-2xl italic text-amber-50 leading-relaxed">“' + escHtml(card.oracleVoice) + '”</blockquote>\n' +
        (corr.hermeticAxiom ? '          <p class="text-sm text-amber-200/95 pt-2 border-t border-white/10"><strong>Axioma:</strong> ' + escHtml(corr.hermeticAxiom) + '</p>\n' : "") +
        '        </section>\n\n'
      : "") +
    '        <section class="p-6 sm:p-8 rounded-3xl bg-[#0c0717]/95 border border-amber-400/35 space-y-5">\n' +
    '          <h2 class="font-display text-2xl sm:text-3xl text-amber-200">Significado de ' + escHtml(card.name) + ' al Derecho (En Luz)</h2>\n' +
    '          <p class="text-lg text-amber-50/95 leading-relaxed">' + escHtml(card.meaning) + '</p>\n' +
    (card.psyche ? '          <div class="p-5 rounded-2xl bg-purple-950/30 border border-purple-400/30"><h3 class="font-ui text-xs uppercase tracking-wider text-purple-300 font-bold mb-2">Espejo Psicológico</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(card.psyche) + '</p></div>\n' : "") +
    (nodesHtml ? '          <div><h3 class="font-ui text-xs uppercase tracking-wider text-amber-300 font-bold mb-3">Claves Simbólicas de la Carta</h3><ul class="grid grid-cols-1 md:grid-cols-3 gap-4">' + nodesHtml + '</ul></div>\n' : "") +
    '        </section>\n\n' +
    '        <section class="space-y-5">\n' +
    '          <h2 class="font-display text-2xl sm:text-3xl text-amber-200">Los 5 Dominios de ' + escHtml(card.name) + '</h2>\n' +
    '          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">\n' +
    '            <article class="p-6 rounded-2xl bg-[#0c0717]/95 border border-rose-500/40 space-y-2"><h3 class="font-ui text-sm uppercase tracking-wider text-rose-300 font-bold">♥ Amor y Vínculos</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(domains.love || "") + '</p></article>\n' +
    '            <article class="p-6 rounded-2xl bg-[#0c0717]/95 border border-amber-500/30 space-y-2"><h3 class="font-ui text-sm uppercase tracking-wider text-amber-300 font-bold">✦ Trabajo y Vocación</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(domains.work || "") + '</p></article>\n' +
    (domains.money ? '            <article class="p-6 rounded-2xl bg-[#0c0717]/95 border border-emerald-400/40 space-y-2"><h3 class="font-ui text-sm uppercase tracking-wider text-emerald-300 font-bold">◈ Dinero y Recursos</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(domains.money) + '</p></article>\n' : "") +
    '            <article class="p-6 rounded-2xl bg-[#0c0717]/95 border border-purple-500/30 space-y-2"><h3 class="font-ui text-sm uppercase tracking-wider text-purple-300 font-bold">☾ Espíritu y Propósito</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(domains.spirit || "") + '</p></article>\n' +
    (domains.healthAndEnergy ? '            <article class="p-6 rounded-2xl bg-[#0c0717]/95 border border-sky-500/40 space-y-2"><h3 class="font-ui text-sm uppercase tracking-wider text-sky-300 font-bold">✧ Cuerpo y Energía</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(domains.healthAndEnergy) + '</p></article>\n' : "") +
    '          </div>\n' +
    '        </section>\n\n' +
    '        <section class="p-6 sm:p-8 rounded-3xl bg-[#0c0717]/95 border border-purple-400/45 space-y-5">\n' +
    '          <h2 class="font-display text-2xl sm:text-3xl text-purple-200">' + escHtml(card.name) + ' Invertida (En Sombra)</h2>\n' +
    (rev.subtitle ? '          <p class="font-ui text-sm uppercase tracking-wider text-purple-300">“' + escHtml(rev.subtitle) + '”</p>\n' : "") +
    '          <p class="text-lg text-amber-50/95 leading-relaxed">' + escHtml(rev.meaning || card.lightAndShadow || "") + '</p>\n' +
    (rev.theWound || rev.theIllusion
      ? '          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
        (rev.theWound ? '<div class="p-5 rounded-2xl bg-white/[0.03] border border-purple-400/35"><h3 class="font-ui text-xs uppercase tracking-wider text-purple-300 font-bold mb-2">✦ La Herida Raíz</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(rev.theWound) + '</p></div>' : "") +
        (rev.theIllusion ? '<div class="p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-400/35"><h3 class="font-ui text-xs uppercase tracking-wider text-amber-300 font-bold mb-2">✦ El Espejismo del Ego</h3><p class="text-base text-amber-50/95 leading-relaxed">' + escHtml(rev.theIllusion) + '</p></div>' : "") +
        '</div>\n'
      : "") +
    (revDomains.love || revDomains.work
      ? '          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
        (revDomains.love ? '<div class="p-4 rounded-xl bg-white/[0.02] border border-white/10"><strong class="font-ui text-xs uppercase text-rose-300 block mb-1">Amor en Sombra</strong><p class="text-base text-amber-50/95">' + escHtml(revDomains.love) + '</p></div>' : "") +
        (revDomains.work ? '<div class="p-4 rounded-xl bg-white/[0.02] border border-white/10"><strong class="font-ui text-xs uppercase text-amber-300 block mb-1">Trabajo en Sombra</strong><p class="text-base text-amber-50/95">' + escHtml(revDomains.work) + '</p></div>' : "") +
        '</div>\n'
      : "") +
    '        </section>\n\n' +
    (action
      ? '        <section class="p-6 sm:p-8 rounded-3xl bg-[#0c0717]/95 border border-amber-400/45 space-y-4">\n' +
        '          <h2 class="font-display text-2xl sm:text-3xl text-amber-200">Oráculo de Acción y Psicomagia</h2>\n' +
        '          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\n' +
        '            <div class="p-5 rounded-2xl bg-emerald-950/35 border border-emerald-400/40"><h3 class="font-ui text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1">✦ Decreto Ejecutivo</h3><p class="text-base text-amber-50/95">' + escHtml(action.command || "") + '</p></div>\n' +
        '            <div class="p-5 rounded-2xl bg-rose-950/35 border border-rose-400/40"><h3 class="font-ui text-xs uppercase tracking-wider text-rose-300 font-bold mb-1">⊘ Prohibición Iniciática</h3><p class="text-base text-amber-50/95">' + escHtml(action.prohibition || "") + '</p></div>\n' +
        '          </div>\n' +
        '          <div class="p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-400/45"><h3 class="font-ui text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">⚗ Acto Simbólico</h3><p class="text-base text-amber-100">' + escHtml(action.psychomagicAct || "") + '</p></div>\n' +
        (action.talismanPhrase ? '          <p class="text-center text-xl italic text-amber-200 font-semibold pt-2">“' + escHtml(action.talismanPhrase) + '”</p>\n' : "") +
        '        </section>\n\n'
      : "") +
    '        <section class="space-y-4">\n' +
    '          <h2 class="font-display text-2xl sm:text-3xl text-amber-200">Preguntas Frecuentes sobre ' + escHtml(card.name) + '</h2>\n' +
    '          ' + faqHtml + '\n' +
    '        </section>\n\n' +
    '        <section class="p-6 rounded-3xl bg-[#0c0717]/95 border border-amber-500/35 space-y-3">\n' +
    '          <span class="font-ui text-xs uppercase tracking-wider text-amber-300 font-bold block">✦ Autoría y Revisión del Concilio del Velo Astral</span>\n' +
    '          <p class="text-base text-amber-50/95">Redacción: <a href="../sobre-nosotros.html#' + escHtml(author.id) + '" class="text-amber-200 underline">' + escHtml(author.name) + '</a> (' + escHtml(author.role) + ') • Revisión simbólica: <a href="../sobre-nosotros.html#' + escHtml(reviewer.id) + '" class="text-emerald-300 underline">' + escHtml(reviewer.name) + '</a>.</p>\n' +
    '        </section>\n\n' +
    '        <footer class="pt-8 border-t border-amber-500/30 space-y-6">\n' +
    '          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">' + prevLink + nextLink + '</div>\n' +
    (relatedLinks ? '          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">' + relatedLinks + '</div>\n' : "") +
    '          <div class="pt-6 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3 text-xs font-ui text-amber-200/90">\n' +
    '            <span>✦ Oráculo del Velo Astral</span>\n' +
    '            <div class="flex flex-wrap gap-4"><a href="../index.html">Altar</a><a href="../tarot-si-o-no.html">Tarot Sí o No</a><a href="../sobre-nosotros.html">Sobre Nosotros</a><a href="../privacidad.html">Privacidad</a></div>\n' +
    '          </div>\n' +
    '        </footer>\n' +
    '      </main>\n' +
    '    </div>\n' +
    '  </div>\n\n' +
    '  <script>\n' +
    '    document.addEventListener("DOMContentLoaded", function mountStaticCard() {\n' +
    '      if (!window.React || !window.ReactDOM || !window.ArcanaPageLayout || !window.TarotRouter) return;\n' +
    '      const { useState, useEffect } = React;\n' +
    '      function StaticCardApp() {\n' +
    '        const [routeData, setRouteData] = useState(function () { return window.TarotRouter.resolveCurrentUrl(' + JSON.stringify(String(card.id)) + '); });\n' +
    '        useEffect(function () {\n' +
    '          function onPop() { setRouteData(window.TarotRouter.resolveCurrentUrl(' + JSON.stringify(String(card.id)) + ')); }\n' +
    '          window.addEventListener("popstate", onPop);\n' +
    '          return function () { window.removeEventListener("popstate", onPop); };\n' +
    '        }, []);\n' +
    '        if (!routeData || !routeData.card) return null;\n' +
    '        return React.createElement(window.ArcanaPageLayout, { card: routeData.card, neighbors: routeData.neighbors });\n' +
    '      }\n' +
    '      const rootEl = document.getElementById("root");\n' +
    '      if (rootEl) {\n' +
    '        ReactDOM.createRoot(rootEl).render(React.createElement(StaticCardApp));\n' +
    '      }\n' +
    '    });\n' +
    '  </script>\n' +
    '</body>\n' +
    '</html>\n'
  );
}

function buildSitemapXml(cards) {
  const entries = [
    { loc: SITE_URL, changefreq: "weekly", priority: "1.0" },
    { loc: SITE_URL + "tarot-si-o-no.html", changefreq: "weekly", priority: "0.9" },
    { loc: SITE_URL + "sobre-nosotros.html", changefreq: "monthly", priority: "0.7" },
    { loc: SITE_URL + "privacidad.html", changefreq: "yearly", priority: "0.4" }
  ];
  for (const c of cards) {
    const isMajor = c.type === "major" || c.arcanaType === "major" || Number(c.id) <= 21;
    entries.push({
      loc: SITE_URL + "cartas/" + c.slug + ".html",
      changefreq: "monthly",
      priority: isMajor ? "0.85" : "0.75"
    });
  }
  const body = entries.map(function (e) {
    return (
      "  <url>\n" +
      "    <loc>" + escHtml(e.loc) + "</loc>\n" +
      "    <lastmod>" + TODAY_ISO + "</lastmod>\n" +
      "    <changefreq>" + e.changefreq + "</changefreq>\n" +
      "    <priority>" + e.priority + "</priority>\n" +
      "  </url>"
    );
  }).join("\n");

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body + "\n" +
    "</urlset>\n"
  );
}

async function main() {
  const t0 = Date.now();
  console.log("✦ Iniciando build de producción v8.3 (78 Cartas SEO Estáticas + 0 Render-Blocking)...\n");

  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(ASSETS, { recursive: true });
  fs.mkdirSync(DIST_CARDS, { recursive: true });
  fs.writeFileSync(path.join(DIST, ".nojekyll"), "", "utf8");

  copyDirRecursive(path.join(ROOT, "img"), path.join(DIST, "img"));
  for (const staticFile of ["favicon.svg", "robots.txt", "oraculo.html", "CNAME"]) {
    const src = path.join(ROOT, staticFile);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, staticFile));
    }
  }

  const reportRows = [];

  // --------------------------------------------------------------------------
  // 1. Compilar Tailwind CSS v3 estático -> assets/styles.min.css (inline)
  // --------------------------------------------------------------------------
  const twBin = path.join(ROOT, "node_modules", "tailwindcss", "lib", "cli.js");
  if (!fs.existsSync(twBin)) {
    throw new Error("No se encontró tailwindcss en node_modules. Ejecutá primero: npm install");
  }
  const cssOutPath = path.join(ASSETS, "styles.min.css");
  execFileSync(
    process.execPath,
    [
      twBin,
      "-c", path.join(ROOT, "tailwind.config.cjs"),
      "-i", path.join(ROOT, "tailwind.input.css"),
      "-o", cssOutPath,
      "--minify"
    ],
    { stdio: "inherit" }
  );
  const cssStr = fs.readFileSync(cssOutPath, "utf8").replace(/<\/style/gi, "<\\/style");
  const cssBuf = Buffer.from(cssStr, "utf8");
  const cssGz = zlib.gzipSync(cssBuf, { level: 9 });
  const cssHash = shortHash(cssBuf);
  reportRows.push({ file: "assets/styles.min.css (inline)", raw: kb(cssBuf.length), gzip: kb(cssGz.length), hash: cssHash });
  const inlineCssBlock = '<style id="velo-tw-css">' + cssStr + "</style>";

  // --------------------------------------------------------------------------
  // 2. Bundle Crítico 1: assets/core.bundle.min.js (~45 KB gzip)
  // --------------------------------------------------------------------------
  const coreParts = [];
  coreParts.push("window.ARCANA_REGISTRY=window.ARCANA_REGISTRY||{};");
  coreParts.push(await minifyPlainJs(readUtf8("datos_cartas.js"), "datos_cartas.js"));
  coreParts.push(
    'if(typeof MAJOR_ARCANA!=="undefined"&&!window.MAJOR_ARCANA)window.MAJOR_ARCANA=MAJOR_ARCANA;' +
    'if(typeof REVERSED_DATA!=="undefined"&&!window.REVERSED_DATA)window.REVERSED_DATA=REVERSED_DATA;'
  );
  coreParts.push(await minifyPlainJs(readUtf8("motor_tarot.js"), "motor_tarot.js"));
  coreParts.push(await minifyPlainJs(readUtf8("motor_audio.js"), "motor_audio.js"));
  coreParts.push(await compileJsxFile("tarot_diorama_renderer.js"));
  const coreAsset = writeAssetAndReport("core.bundle.min.js", coreParts.join(";\n"), reportRows);

  // --------------------------------------------------------------------------
  // 3. Bundle Diferido: assets/grimorio.bundle.min.js
  //    Incluye los 4 palos menores editoriales + 12 volúmenes + Trina + Sí/No + Concilio + 22 Dioramas
  // --------------------------------------------------------------------------
  const grimorioParts = [];
  grimorioParts.push("window.ARCANA_REGISTRY=window.ARCANA_REGISTRY||{};");
  for (const mf of [
    "datos_cartas/datos_menores_bastos.js",
    "datos_cartas/datos_menores_copas.js",
    "datos_cartas/datos_menores_espadas.js",
    "datos_cartas/datos_menores_oros.js"
  ]) {
    const actualMf = resolveDataFile(mf);
    if (actualMf) {
      grimorioParts.push(await minifyPlainJs(readUtf8(actualMf), actualMf));
    }
  }
  grimorioParts.push(await minifyPlainJs(readUtf8("datos_cartas_menores.js"), "datos_cartas_menores.js"));
  grimorioParts.push('if(typeof MINOR_ARCANA!=="undefined"&&!window.MINOR_ARCANA)window.MINOR_ARCANA=MINOR_ARCANA;');

  const grimoireFiles = [
    "datos_cartas/datos_sol_1.js",
    "datos_cartas/datos_sol_2.js",
    "datos_cartas/datos_sol_3.js",
    "datos_cartas/datos_sol_4.js",
    "datos_cartas/datos_sol_5.js",
    "datos_cartas/datos_sol_6.js",
    "datos_cartas/datos_luna_1.js",
    "datos_cartas/datos_luna_2.js",
    "datos_cartas/datos_luna_3.js",
    "datos_cartas/datos_luna_4.js",
    "datos_cartas/datos_luna_5.js",
    "datos_cartas/datos_luna_6.js",
    "datos_cartas/datos_trina.js",
    "datos_cartas/datos_sino.js"
  ];
  for (const gf of grimoireFiles) {
    if (fs.existsSync(path.join(ROOT, gf))) {
      grimorioParts.push(await minifyPlainJs(readUtf8(gf), gf));
    }
  }
  if (fs.existsSync(path.join(ROOT, "concilio_tarotistas.js"))) {
    grimorioParts.push(await minifyPlainJs(readUtf8("concilio_tarotistas.js"), "concilio_tarotistas.js"));
  }

  const majorCardFiles = [
    "cartas/el_loco.js",
    "cartas/el_mago.js",
    "cartas/la_sacerdotisa.js",
    "cartas/la_emperatriz.js",
    "cartas/el_emperador.js",
    "cartas/el_hierofante.js",
    "cartas/los_enamorados.js",
    "cartas/el_carro.js",
    "cartas/la_fuerza.js",
    "cartas/el_ermitano.js",
    fs.existsSync(path.join(ROOT, "cartas/la_rueda.js")) ? "cartas/la_rueda.js" : "cartas/la_rueda_de_la_fortuna.js",
    "cartas/la_justicia.js",
    "cartas/el_colgado.js",
    "cartas/la_muerte.js",
    "cartas/la_templanza.js",
    "cartas/el_diablo.js",
    "cartas/la_torre.js",
    "cartas/la_estrella.js",
    "cartas/la_luna.js",
    "cartas/el_sol.js",
    "cartas/el_juicio.js",
    "cartas/el_mundo.js"
  ];
  for (const cf of majorCardFiles) {
    grimorioParts.push(await compileJsxFile(cf));
  }

  const aliasAndSync = await minifyPlainJs(`
    (function finalizeExtendedGrimorio() {
      var reg = window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};
      var aliasGroups = [
        ["fool", "el_loco", "loco", "0", "00", "major_0", "maj_0"],
        ["magician", "el_mago", "la_maga", "mago", "I", "1", "major_1", "maj_1"],
        ["priestess", "high_priestess", "la_sacerdotisa", "la_papisa", "II", "2", "major_2", "maj_2"],
        ["empress", "la_emperatriz", "III", "3", "major_3", "maj_3"],
        ["emperor", "el_emperador", "IV", "4", "major_4", "maj_4"],
        ["hierophant", "el_hierofante", "el_papa", "pope", "V", "5", "major_5", "maj_5"],
        ["lovers", "los_enamorados", "los_amantes", "VI", "6", "major_6", "maj_6"],
        ["chariot", "el_carro", "VII", "7", "major_7", "maj_7"],
        ["strength", "fortitude", "la_fuerza", "VIII", "8", "major_8", "maj_8"],
        ["hermit", "el_ermitano", "el_ermitaño", "IX", "9", "major_9", "maj_9"],
        ["wheel", "wheel_of_fortune", "fortune", "la_rueda", "la_rueda_de_la_fortuna", "X", "10", "major_10", "maj_10"],
        ["justice", "la_justicia", "XI", "11", "major_11", "maj_11"],
        ["hanged", "hanged_man", "el_colgado", "XII", "12", "major_12", "maj_12"],
        ["death", "la_muerte", "XIII", "13", "major_13", "maj_13"],
        ["temperance", "la_templanza", "XIV", "14", "major_14", "maj_14"],
        ["devil", "el_diablo", "XV", "15", "major_15", "maj_15"],
        ["tower", "la_torre", "XVI", "16", "major_16", "maj_16"],
        ["star", "la_estrella", "XVII", "17", "major_17", "maj_17"],
        ["moon", "la_luna", "XVIII", "18", "major_18", "maj_18"],
        ["sun", "el_sol", "XIX", "19", "major_19", "maj_19"],
        ["judgement", "judgment", "el_juicio", "XX", "20", "major_20", "maj_20"],
        ["world", "el_mundo", "XXI", "21", "major_21", "maj_21"]
      ];
      aliasGroups.forEach(function (group) {
        var found = group.map(function (k) { return reg[k]; }).find(Boolean);
        if (found) group.forEach(function (k) { reg[k] = found; });
      });
      if (window.TAROT_DB && typeof window.TAROT_DB.syncExtendedData === "function") {
        window.TAROT_DB.syncExtendedData();
      }
      window.__veloGrimorioReady = true;
      try { window.dispatchEvent(new CustomEvent("velo-grimorio-ready")); } catch (e) {}
    })();
  `, "finalize_grimorio.js");
  grimorioParts.push(aliasAndSync);

  const grimorioAsset = writeAssetAndReport("grimorio.bundle.min.js", grimorioParts.join(";\n"), reportRows);

  // --------------------------------------------------------------------------
  // 4. Bundle Crítico 2 (index.html): assets/altar.bundle.min.js
  // --------------------------------------------------------------------------
  const altarParts = [];
  for (const af of [
    "rig_sibilia.js",
    "motor_tirada_trina.js",
    "motor_tirada_sino.js",
    "grimorio_personal.js",
    "motor_tirada.js"
  ]) {
    if (fs.existsSync(path.join(ROOT, af))) {
      altarParts.push(await compileJsxFile(af));
    }
  }
  const altarAsset = writeAssetAndReport("altar.bundle.min.js", altarParts.join(";\n"), reportRows);

  // --------------------------------------------------------------------------
  // 5. Bundle Crítico 2 (carta.html y 78 páginas): assets/carta.bundle.min.js
  // --------------------------------------------------------------------------
  const cartaAsset = writeAssetAndReport("carta.bundle.min.js", await compileJsxFile("layout_arcano.js"), reportRows);

  // --------------------------------------------------------------------------
  // 6. Módulos livianos independientes para landings SEO
  // --------------------------------------------------------------------------
  const sinoMiniAsset = writeAssetAndReport(
    "datos_sino.min.js",
    await minifyPlainJs(readUtf8("datos_cartas/datos_sino.js"), "datos_sino.js"),
    reportRows
  );
  const concilioMiniAsset = writeAssetAndReport(
    "concilio.min.js",
    await minifyPlainJs(readUtf8("concilio_tarotistas.js"), "concilio_tarotistas.js"),
    reportRows
  );

  // --------------------------------------------------------------------------
  // 7. Cargar catálogo unificado de 78 Arcanos para SEO estático + mapa de slugs
  // --------------------------------------------------------------------------
  const catalog = loadFullTarotCatalog();
  const slugById = {};
  for (const c of catalog.cards) {
    slugById[String(c.id).toLowerCase()] = c.slug;
  }

  // --------------------------------------------------------------------------
  // 8. Reescritura optimizada de las 5 páginas principales hacia dist/
  // --------------------------------------------------------------------------
  // 8A. index.html
  {
    let html = readUtf8("index.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="preconnect" href="https://unpkg.com" crossorigin />\n  ' + inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = rewriteStaticCardLinks(html, slugById);
    html = html.replace(/^\s*<script[^>]*@babel\/standalone[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /<script(\s+crossorigin)?\s+src="(https:\/\/unpkg\.com\/(?:react|react-dom|framer-motion)[^"]+)"><\/script>/gi,
      '<script defer crossorigin src="$2"></script>'
    );

    const lazyLoaderInline =
      '<script>' +
      'window.__VELO_STATIC_CARDS__=true;' +
      '(function(){' +
      'var url="' + grimorioAsset.path + '";' +
      'var p=null;' +
      'window.__veloGrimorioReady=false;' +
      'window.__veloEnsureGrimorio=function(){' +
        'if(window.__veloGrimorioReady)return Promise.resolve(true);' +
        'if(p)return p;' +
        'p=new Promise(function(res){' +
          'var s=document.createElement("script");' +
          's.src=url;s.async=true;' +
          's.onload=function(){window.__veloGrimorioReady=true;res(true);};' +
          's.onerror=function(){res(false);};' +
          'document.head.appendChild(s);' +
        '});' +
        'return p;' +
      '};' +
      'function kick(){window.__veloEnsureGrimorio();}' +
      'if(window.location.search.indexOf("modo=sino")!==-1){kick();}' +
      'else{' +
        '["pointerdown","touchstart","keydown"].forEach(function(ev){window.addEventListener(ev,kick,{once:true,passive:true});});' +
        'window.addEventListener("load",function(){setTimeout(kick,3800);},{once:true});' +
      '}' +
      '})();' +
      '</script>';

    html = html.replace(
      /<!--\s*1\.\s*Bases de datos[\s\S]*?<script\s+src="motor_tirada\.js[^"]*"><\/script>/i,
      '<!-- Bundles críticos de producción (0 Babel, 0 Tailwind CDN, Grimorio 78 cartas diferido) -->\n' +
      '  ' + lazyLoaderInline + '\n' +
      '  <script defer src="' + coreAsset.path + '"></script>\n' +
      '  <script defer src="' + altarAsset.path + '"></script>'
    );

    html = html.replace(
      /\(function mountOraculoApp\(\) \{([\s\S]*?)\}\)\(\);/,
      'document.addEventListener("DOMContentLoaded", function mountOraculoApp() {$1});'
    );
    fs.writeFileSync(path.join(DIST, "index.html"), html, "utf8");
  }

  // 8B. carta.html (respaldo retrocompatible para URLs ?arcano=...; noindex para evitar duplicado con /cartas/*.html)
  {
    let html = readUtf8("carta.html");
    html = html.replace(
      /<meta\s+name="robots"\s+content="index,\s*follow"\s*\/?>/i,
      '<meta name="robots" content="noindex, follow" />'
    );
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="preconnect" href="https://unpkg.com" crossorigin />\n  ' + inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = html.replace(/^\s*<script[^>]*@babel\/standalone[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /<script(\s+crossorigin)?\s+src="(https:\/\/unpkg\.com\/(?:react|react-dom|framer-motion)[^"]+)"><\/script>/gi,
      '<script defer crossorigin src="$2"></script>'
    );
    html = html.replace(
      /(\s*<style>)/i,
      '\n  <script>window.__VELO_STATIC_CARDS__=true;</script>\n' +
      '  <script defer src="' + coreAsset.path + '"></script>\n' +
      '  <script defer src="' + grimorioAsset.path + '"></script>\n' +
      '  <script defer src="' + cartaAsset.path + '"></script>\n$1'
    );
    html = html.replace(
      /<!--\s*1\.\s*Bases de datos[\s\S]*?<script\s+src="layout_arcano\.js[^"]*"><\/script>/i,
      '<!-- Scripts locales empaquetados en assets/*.bundle.min.js -->'
    );
    html = html.replace(
      /\(function mountCartaApp\(\) \{([\s\S]*?)\}\)\(\);/,
      'document.addEventListener("DOMContentLoaded", function mountCartaApp() {$1});'
    );
    fs.writeFileSync(path.join(DIST, "carta.html"), html, "utf8");
  }

  // 8C. tarot-si-o-no.html (con enlaces estáticos hacia cartas/<slug>.html)
  {
    let html = readUtf8("tarot-si-o-no.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = rewriteStaticCardLinks(html, slugById);
    html = html.replace(
      /href="carta\.html\?arcano='\s*\+\s*encodeURIComponent\(([^)]+)\)\s*\+\s*\(([^?]+)\?\s*"&modo=sombra"\s*:\s*""\)\s*\+\s*'"/g,
      function (_, idExpr, revExpr) {
        return (
          'href="cartas/\' + ((window.__VELO_SLUG_MAP__ && window.__VELO_SLUG_MAP__[String(' +
          idExpr.trim() +
          ').toLowerCase()]) || "el-loco") + \'.html\' + (' +
          revExpr.trim() +
          ' ? "?modo=sombra" : "") + \'"'
        );
      }
    );
    html = html.replace(
      /(<script>\s*\(function initTarotSiNoLanding)/i,
      '<script>window.__VELO_SLUG_MAP__=' + JSON.stringify(slugById) + ';</script>\n  $1'
    );
    html = html.replace(/\s*<script>\s*window\.__loadSiNoFallback[\s\S]*?<\/script>/i, "");
    html = html.replace(/^\s*<script\s+src="datos_cartas\/datos_sino\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function initTarotSiNoLanding)/i,
      '<script src="' + sinoMiniAsset.path + '"></script>\n  <script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "tarot-si-o-no.html"), html, "utf8");
  }

  // 8D. sobre-nosotros.html (con enlaces estáticos hacia cartas/<slug>.html)
  {
    let html = readUtf8("sobre-nosotros.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = rewriteStaticCardLinks(html, slugById);
    html = html.replace(
      /href="carta\.html\?arcano='\s*\+\s*encodeURIComponent\(([^)]+)\)\s*\+\s*'"/g,
      function (_, idExpr) {
        return (
          'href="cartas/\' + ((window.__VELO_SLUG_MAP__ && window.__VELO_SLUG_MAP__[String(' +
          idExpr.trim() +
          ').toLowerCase()]) || "el-loco") + \'.html"'
        );
      }
    );
    html = html.replace(
      /(<script>\s*\(function hydrateConcilioPage)/i,
      '<script>window.__VELO_SLUG_MAP__=' + JSON.stringify(slugById) + ';</script>\n  $1'
    );
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function hydrateConcilioPage)/i,
      '<script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "sobre-nosotros.html"), html, "utf8");
  }

  // 8E. privacidad.html
  {
    let html = readUtf8("privacidad.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = rewriteStaticCardLinks(html, slugById);
    fs.writeFileSync(path.join(DIST, "privacidad.html"), html, "utf8");
  }

  // --------------------------------------------------------------------------
  // 9. PASO 3 SEO: Generar las 78 páginas HTML estáticas en dist/cartas/<slug>.html
  // --------------------------------------------------------------------------
  let totalStaticBytes = 0;
  for (const card of catalog.cards) {
    const neighbors = catalog.router.getNeighbors(card);
    const pair = catalog.concilio.getPairForCard(card.id);
    const pageHtml = renderStaticCardHtml({
      card,
      neighbors,
      author: pair.author,
      reviewer: pair.reviewer,
      slug: card.slug,
      inlineCssBlock,
      coreAsset,
      grimorioAsset,
      cartaAsset
    });
    const outPath = path.join(DIST_CARDS, card.slug + ".html");
    fs.writeFileSync(outPath, pageHtml, "utf8");
    totalStaticBytes += Buffer.byteLength(pageHtml, "utf8");
  }

  // --------------------------------------------------------------------------
  // 10. Generar dist/sitemap.xml con las 82 URLs canónicas (4 principales + 78 arcanos)
  // --------------------------------------------------------------------------
  const sitemapXml = buildSitemapXml(catalog.cards);
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemapXml, "utf8");

  // --------------------------------------------------------------------------
  // 11. Auditoría automática post-build (5 principales + 78 cartas + sitemap)
  // --------------------------------------------------------------------------
  const htmlPages = ["index.html", "carta.html", "tarot-si-o-no.html", "sobre-nosotros.html", "privacidad.html"];
  for (const page of htmlPages) {
    const content = fs.readFileSync(path.join(DIST, page), "utf8");
    if (content.includes("@babel/standalone")) throw new Error(page + " aún contiene @babel/standalone");
    if (content.includes("cdn.tailwindcss.com")) throw new Error(page + " aún contiene cdn.tailwindcss.com");
    if (!content.includes('id="velo-tw-css"')) throw new Error(page + " no recibió CSS inline");
    if (!content.includes('media="print" onload="this.media=\'all\'"')) throw new Error(page + " aún tiene Google Fonts bloqueante");
    const refs = [...content.matchAll(/(?:src|href)="(assets\/[^"?]+)(?:\?[^"]*)?"/g)].map((m) => m[1]);
    for (const ref of refs) {
      if (!fs.existsSync(path.join(DIST, ref))) throw new Error(page + " referencia asset inexistente: " + ref);
    }
  }

  const generatedCardFiles = fs.readdirSync(DIST_CARDS).filter((f) => f.endsWith(".html"));
  if (generatedCardFiles.length !== 78) {
    throw new Error("Se esperaban 78 páginas en dist/cartas/, se generaron: " + generatedCardFiles.length);
  }
  for (const cf of generatedCardFiles) {
    const content = fs.readFileSync(path.join(DIST_CARDS, cf), "utf8");
    if (!content.includes("<h1")) throw new Error("dist/cartas/" + cf + " no tiene <h1>");
    if (!content.includes("application/ld+json")) throw new Error("dist/cartas/" + cf + " no tiene JSON-LD");
    if (!content.includes('id="velo-tw-css"')) throw new Error("dist/cartas/" + cf + " no tiene CSS inline");
  }
  const urlCount = (sitemapXml.match(/<url>/g) || []).length;
  if (urlCount !== 82) {
    throw new Error("sitemap.xml debería tener 82 URLs, tiene: " + urlCount);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(2);
  console.log("\n✔ BUILD v8.3 COMPLETADO EN " + elapsed + " s (78 Cartas SEO Estáticas + Sitemap 82 URLs)\n");
  console.table(reportRows);
  console.log("✦ Páginas SEO pre-renderizadas en dist/cartas/: " + generatedCardFiles.length + " (" + kb(totalStaticBytes) + " totales)");
  console.log("✦ dist/sitemap.xml actualizado automáticamente con " + urlCount + " URLs canónicas.\n");
}

main().catch((err) => {
  console.error("\n✖ ERROR EN BUILD DE PRODUCCIÓN:\n", err);
  process.exit(1);
});

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
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap";

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
    /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"\s+rel="stylesheet"\s*\/?>/i,
    function () {
      return (
        '<link rel="preload" as="style" href="' + GOOGLE_FONTS_URL + '" />\n' +
        '  <link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" media="print" onload="this.media=\'all\'" />\n' +
        '  <noscript><link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" /></noscript>'
      );
    }
  );
}

function addMetricFontFallback(html) {
  return html
    .replace(
      /font-family:\s*'Cormorant Garamond',\s*Georgia,\s*serif;/g,
      "font-family: 'Lora', 'Lora Fallback', Georgia, serif;"
    )
    .replace(
      /font-family:\s*'Cinzel',\s*Georgia,\s*serif;/g,
      "font-family: 'Cinzel', 'Cinzel Fallback', Georgia, serif;"
    );
}

function buildFastCardBackSvg() {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 768" width="512" height="768">' +
    '<defs>' +
    '<linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff7d3"/><stop offset=".14" stop-color="#c88b2c"/><stop offset=".3" stop-color="#ffe88d"/><stop offset=".52" stop-color="#8f5019"/><stop offset=".72" stop-color="#ffd45c"/><stop offset=".88" stop-color="#b87924"/><stop offset="1" stop-color="#fff4c3"/></linearGradient>' +
    '<linearGradient id="amethyst" x1="0" y1="0" x2=".85" y2="1"><stop stop-color="#48215e"/><stop offset=".42" stop-color="#21112f"/><stop offset="1" stop-color="#110d20"/></linearGradient>' +
    '<radialGradient id="heart" cx="50%" cy="42%" r="68%"><stop stop-color="#552278"/><stop offset=".58" stop-color="#291338"/><stop offset="1" stop-color="#130e20"/></radialGradient>' +
    '<linearGradient id="gold" x1="0" y1="0" x2=".85" y2="1"><stop stop-color="#fff8d7"/><stop offset=".18" stop-color="#ffdb65"/><stop offset=".36" stop-color="#d99a25"/><stop offset=".54" stop-color="#98551a"/><stop offset=".72" stop-color="#ffd85e"/><stop offset=".88" stop-color="#fff0a8"/><stop offset="1" stop-color="#a8611b"/></linearGradient>' +
    '<radialGradient id="moon" cx="34%" cy="27%" r="78%"><stop stop-color="#fff4bf"/><stop offset=".22" stop-color="#f9d760"/><stop offset=".52" stop-color="#bd8027"/><stop offset=".82" stop-color="#72401f"/><stop offset="1" stop-color="#3b2030"/></radialGradient>' +
    '<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffbe6" stop-opacity=".68"/><stop offset=".32" stop-color="#fff0b8" stop-opacity=".12"/><stop offset=".7" stop-color="#fff0b8" stop-opacity="0"/><stop offset="1" stop-color="#ffe071" stop-opacity=".18"/></linearGradient>' +
    '<pattern id="grain" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 15H30M15 0V30" stroke="#bb8a48" stroke-opacity=".045" stroke-width=".65"/><circle cx="15" cy="15" r="1" fill="#f5d78c" fill-opacity=".11"/></pattern>' +
    '<g id="corner" fill="none" stroke="url(#gold)" stroke-linecap="round" stroke-linejoin="round"><path d="M0 52V12Q0 0 12 0h40M7 39V14q0-7 7-7h25" stroke-width="2.1"/><path d="M13 27C24 27 26 17 26 10c9 4 12 12 10 19-2 8-10 12-18 10 9-1 13-7 13-12M6 48c9 0 13-4 14-12" stroke-width="1.5"/><path d="M16 5l3-5 3 5-3 5zM5 16l-5 3 5 3 5-3z" fill="#dbb35f" stroke-width=".8"/><circle cx="13" cy="13" r="1.4" fill="#f4d98f" stroke="none"/></g>' +
    '<g id="star" fill="url(#gold)"><path d="M0-9 1.7-1.7 9 0 1.7 1.7 0 9-1.7 1.7-9 0-1.7-1.7Z"/><circle r="1.2" fill="#fff1ba"/></g>' +
    '</defs>' +
    '<rect x="16" y="23" width="480" height="740" rx="32" fill="#07060c" stroke="#5b351d" stroke-width="4"/>' +
    '<rect x="12" y="12" width="488" height="744" rx="31" fill="#090811" stroke="#1c1424" stroke-width="8"/>' +
    '<rect x="20" y="20" width="472" height="728" rx="25" fill="url(#edge)" stroke="#fff0b0" stroke-opacity=".74" stroke-width="1.5"/>' +
    '<rect x="27" y="27" width="458" height="714" rx="21" fill="#17111f" stroke="#38243b" stroke-width="2"/>' +
    '<rect x="30" y="30" width="452" height="708" rx="19" fill="none" stroke="#f5d989" stroke-opacity=".52" stroke-width="1"/>' +
    '<rect x="34" y="34" width="444" height="700" rx="18" fill="url(#amethyst)" stroke="#ffd96a" stroke-opacity=".85" stroke-width="2"/>' +
    '<rect x="39" y="39" width="434" height="690" rx="15" fill="url(#sheen)" opacity=".23"/>' +
    '<path d="M256 59 Q276 84 321 84 H415 Q451 84 451 120 V660 Q451 696 415 696 H321 Q276 696 256 721 Q236 696 191 696 H97 Q61 696 61 660 V120 Q61 84 97 84 H191 Q236 84 256 59Z" fill="#05030b" opacity=".68"/>' +
    '<path d="M256 53 Q276 78 321 78 H415 Q451 78 451 114 V654 Q451 690 415 690 H321 Q276 690 256 715 Q236 690 191 690 H97 Q61 690 61 654 V114 Q61 78 97 78 H191 Q236 78 256 53Z" fill="url(#heart)" stroke="url(#gold)" stroke-width="4.5"/>' +
    '<rect x="34" y="34" width="444" height="700" rx="18" fill="url(#grain)"/>' +
    '<g transform="translate(49 51)"><use href="#corner" xlink:href="#corner"/></g>' +
    '<g transform="translate(463 51) scale(-1 1)"><use href="#corner" xlink:href="#corner"/></g>' +
    '<g transform="translate(49 717) scale(1 -1)"><use href="#corner" xlink:href="#corner"/></g>' +
    '<g transform="translate(463 717) scale(-1 -1)"><use href="#corner" xlink:href="#corner"/></g>' +
    '<g fill="none" stroke="url(#gold)" stroke-width="1.4" opacity=".82">' +
    '<ellipse cx="256" cy="384" rx="137" ry="239"/>' +
    '<ellipse cx="256" cy="384" rx="118" ry="214" stroke-opacity=".5"/>' +
    '<path d="M256 131v94M256 543v94M104 384h89M319 384h89" stroke-dasharray="2 7"/>' +
    '<path d="M165 208q24 18 47 10M347 208q-24 18-47 10M165 560q24-18 47-10M347 560q-24-18-47-10" stroke-opacity=".7"/>' +
    '</g>' +
    '<g transform="translate(256 144) scale(.8)"><use href="#star" xlink:href="#star"/></g>' +
    '<g transform="translate(256 624) scale(.8)"><use href="#star" xlink:href="#star"/></g>' +
    '<g transform="translate(0 8)" opacity=".9"><path d="M256 235 289 276 339 267 346 318 391 344 368 389 391 434 346 460 339 511 289 502 256 543 223 502 173 511 166 460 121 434 144 389 121 344 166 318 173 267 223 276Z" fill="#100b17" stroke="#663915" stroke-width="11" stroke-linejoin="round"/></g>' +
    '<path d="M256 235 289 276 339 267 346 318 391 344 368 389 391 434 346 460 339 511 289 502 256 543 223 502 173 511 166 460 121 434 144 389 121 344 166 318 173 267 223 276Z" fill="#160e1c" stroke="#70451f" stroke-width="9" stroke-linejoin="round"/>' +
    '<path d="M256 245 286 283 333 275 339 323 381 347 360 389 381 431 339 455 333 503 286 495 256 533 226 495 179 503 173 455 131 431 152 389 131 347 173 323 179 275 226 283Z" fill="url(#gold)" stroke="#fff1a2" stroke-width="2.5" stroke-linejoin="round"/>' +
    '<path d="M256 267 278 294 313 288 318 324 349 342 333 374 349 406 318 424 313 460 278 454 256 481 234 454 199 460 194 424 163 406 179 374 163 342 194 324 199 288 234 294Z" fill="#281431" stroke="#54311d" stroke-width="5" stroke-linejoin="round"/>' +
    '<circle cx="256" cy="374" r="72" fill="url(#moon)" stroke="#fff0a1" stroke-width="3"/>' +
    '<circle cx="256" cy="374" r="62" fill="none" stroke="#643a20" stroke-opacity=".8" stroke-width="1.5"/>' +
    '<path d="M270 323c-27 7-44 32-41 59 3 30 31 52 61 49 12-1 22-6 30-14-7 22-28 38-52 39-35 1-64-27-64-62 0-36 29-65 65-65 7 0 14 1 21 4-6-6-13-9-20-10Z" fill="#1d102b" stroke="#f5d987" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M280 353 286 368 301 374 286 380 280 395 274 380 259 374 274 368Z" fill="#f6dfa1"/>' +
    '<circle cx="256" cy="374" r="4" fill="#fffbe1"/>' +
    '</svg>'
  );
}

function buildAltarPrepaintShell(cardBackPath) {
  return (
    '<div style="background:radial-gradient(ellipse at 50% 25%, #190e30 0%, #090510 55%, #040207 100%)" class="fixed inset-0 overflow-hidden select-none text-amber-50">' +
    '<div class="absolute inset-0 flex flex-col justify-start z-10 pt-2 sm:pt-3 lg:pt-4 pb-8 lg:pb-10 overflow-y-auto overflow-x-hidden">' +
    '<header class="flex items-center justify-between px-4 sm:px-6 lg:px-10 z-40 flex-shrink-0 h-11 lg:h-12">' +
    '<div class="font-ui flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-[#130b24]/95 border border-[#d4af37]/60 text-xs sm:text-sm font-semibold text-amber-100">' +
    '<span>Grimorio: <strong class="text-amber-300">0/22</strong> Arcanos</span>' +
    '</div>' +
    '<div aria-hidden="true" class="w-10 h-10 rounded-full bg-[#120a22]/90 border border-[#d4af37]/50"></div>' +
    '</header>' +
    '<section class="relative z-10 flex flex-col items-center justify-start flex-shrink-0 w-full">' +
    '<div class="velo-shell-oracle relative flex items-center justify-center w-full">' +
    '<div aria-hidden="true" class="rounded-full" style="width:7.5rem;height:7.5rem;background:radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(147,51,234,0.12) 48%, transparent 72%)"></div>' +
    '</div>' +
    '<div class="relative w-[94%] max-w-3xl lg:max-w-4xl mt-1.5 lg:mt-2.5 px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-2xl bg-[#0c0717]/95 border border-[#d4af37]/55 shadow-[0_14px_38px_rgba(0,0,0,0.88)]">' +
    '<div class="flex items-center justify-between gap-2 mb-1">' +
    '<span class="font-ui text-xs sm:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-amber-400 font-bold">Sibilia del Velo • Oráculo</span>' +
    '<span class="text-xs uppercase tracking-wider text-purple-200/95 font-semibold">Altar en Calma</span>' +
    '</div>' +
    '<div class="grid text-[15px] sm:text-lg md:text-[19px] lg:text-xl text-amber-50 italic leading-relaxed min-h-[6.25rem] sm:min-h-[5.25rem] lg:min-h-[5.5rem]">' +
    '<p class="col-start-1 row-start-1">“Las hebras del destino aguardan tu toque. Mi mirada sigue tu pulso... cuando tu mente esté en calma, barajá el mazo.”</p>' +
    '</div>' +
    '</div>' +
    '</section>' +
    '<main class="relative z-30 flex-1 flex flex-col items-center justify-start lg:justify-center w-full">' +
    '<div class="relative z-20 flex flex-col items-center gap-3.5 sm:gap-6 lg:gap-7 mt-1 mb-6">' +
    '<div class="relative w-28 h-40 sm:w-40 sm:h-60 lg:w-[186px] lg:h-[280px] xl:w-[214px] xl:h-[324px]">' +
    '<div aria-hidden="true" class="absolute -inset-10 lg:-inset-14 rounded-full pointer-events-none" style="background:radial-gradient(circle, rgba(245,158,11,0.24) 0%, rgba(168,85,247,0.12) 45%, transparent 72%)"></div>' +
    '<img src="' + cardBackPath + '" width="512" height="768" alt="Mazo del Oráculo del Velo Astral" fetchpriority="high" decoding="async" class="relative block w-full h-full object-contain rounded-xl shadow-xl" />' +
    '</div>' +
    '<div class="flex flex-col items-center gap-3 sm:gap-3.5 z-50 px-4 w-full max-w-3xl">' +
    '<div class="font-display px-8 sm:px-11 lg:px-14 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#b88920] via-[#f3d06b] to-[#b88920] text-[#09050e] font-bold tracking-[0.12em] uppercase text-sm sm:text-base shadow-xl">✦ Barajar el Destino</div>' +
    '</div>' +
    '</div>' +
    '</main>' +
    '</div>' +
    '</div>'
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
function renderStaticCardHtml({ card, neighbors, author, reviewer, slug, inlineCssBlock, vendorAsset, coreAsset, grimorioAsset, cartaAsset }) {
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
    '  <link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
    '  <link rel="preload" as="style" href="' + GOOGLE_FONTS_URL + '" />\n' +
    '  <link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" media="print" onload="this.media=\'all\'" />\n' +
    '  <noscript><link rel="stylesheet" href="' + GOOGLE_FONTS_URL + '" /></noscript>\n' +
    '  ' + inlineCssBlock + '\n\n' +
    '  <script>window.__VELO_STATIC_CARDS__=true;window.__VELO_STATIC_CARD_ID__=' + JSON.stringify(String(card.id)) + ';window.__VELO_BASE_PREFIX__="../";</script>\n' +
    '  <script defer src="../' + vendorAsset.path + '"></script>\n' +
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
  console.log("✦ Iniciando build de producción v8.4 (Vendor Local + LCP Instantáneo + 78 Cartas SEO)...\n");

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
  // 1B. Dorso Vectorial Ultrarrápido (0 filtros GaussianBlur) -> assets/card-back.svg
  // --------------------------------------------------------------------------
  const cardBackSvg = buildFastCardBackSvg();
  const cardBackAsset = writeAssetAndReport("card-back.svg", cardBackSvg, reportRows);

  // --------------------------------------------------------------------------
  // 1C. Bundle Vendor Autónomo Local (React 18.3.1 + ReactDOM + Framer Motion 10.18.0)
  //     Elimina redirecciones HTTP 302 de unpkg.com y habilita modo 100% offline en file:///
  // --------------------------------------------------------------------------
  const vendorSources = [
    "node_modules/react/umd/react.production.min.js",
    "node_modules/react-dom/umd/react-dom.production.min.js",
    "node_modules/framer-motion/dist/framer-motion.js"
  ];
  const vendorParts = vendorSources.map((rel) => {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) {
      throw new Error("Falta dependencia vendor: " + rel + ". Ejecutá primero: npm install");
    }
    return fs.readFileSync(full, "utf8").replace(/^\/\/#\s*sourceMappingURL=.*$/gm, "").trim();
  });
  const vendorAsset = writeAssetAndReport("vendor.bundle.min.js", vendorParts.join(";\n"), reportRows);

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
  // 8A. index.html (0 unpkg, 0 timer prematuro de Grimorio, LCP pre-pintado instantáneo)
  {
    let html = readUtf8("index.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="preload" as="image" href="' + cardBackAsset.path + '" fetchpriority="high" />\n  ' + inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = rewriteStaticCardLinks(html, slugById);
    html = html.replace(/^[ \t]*<script[^>]*unpkg\.com[^>]*><\/script>[ \t]*\r?\n?/gim, "");

    const lazyLoaderInline =
      '<script>' +
      'window.__VELO_STATIC_CARDS__=true;' +
      'window.__VELO_CARD_BACK_URL__="' + cardBackAsset.path + '";' +
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
      '}' +
      '})();' +
      '</script>';

    html = html.replace(
      /<!--\s*1\.\s*Bases de datos[\s\S]*?<script\s+src="motor_tirada\.js[^"]*"><\/script>/i,
      '<!-- Bundles críticos locales (0 unpkg, 0 Babel, 0 Tailwind CDN, Grimorio 78 cartas bajo demanda real) -->\n' +
      '  ' + lazyLoaderInline + '\n' +
      '  <script defer src="' + vendorAsset.path + '"></script>\n' +
      '  <script defer src="' + coreAsset.path + '"></script>\n' +
      '  <script defer src="' + altarAsset.path + '"></script>'
    );

    html = html.replace(
      '<div id="root"></div>',
      '<div id="root">' + buildAltarPrepaintShell(cardBackAsset.path) + '</div>'
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
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = html.replace(/^[ \t]*<script[^>]*unpkg\.com[^>]*><\/script>[ \t]*\r?\n?/gim, "");
    html = html.replace(
      /(\s*<style>)/i,
      '\n  <script>window.__VELO_STATIC_CARDS__=true;</script>\n' +
      '  <script defer src="' + vendorAsset.path + '"></script>\n' +
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
      vendorAsset,
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
    if (content.includes("unpkg.com")) throw new Error(page + " aún contiene unpkg.com");
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
    if (content.includes("unpkg.com")) throw new Error("dist/cartas/" + cf + " aún contiene unpkg.com");
  }
  const urlCount = (sitemapXml.match(/<url>/g) || []).length;
  if (urlCount !== 82) {
    throw new Error("sitemap.xml debería tener 82 URLs, tiene: " + urlCount);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(2);
  console.log("\n✔ BUILD v8.4 COMPLETADO EN " + elapsed + " s (Vendor Local + LCP Pre-pintado + 78 Cartas SEO + Sitemap 82 URLs)\n");
  console.table(reportRows);
  console.log("✦ Páginas SEO pre-renderizadas en dist/cartas/: " + generatedCardFiles.length + " (" + kb(totalStaticBytes) + " totales)");
  console.log("✦ dist/sitemap.xml actualizado automáticamente con " + urlCount + " URLs canónicas.\n");
}

main().catch((err) => {
  console.error("\n✖ ERROR EN BUILD DE PRODUCCIÓN:\n", err);
  process.exit(1);
});

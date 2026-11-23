// ============================================================================
// ARCHIVO: build_prod.mjs (v8.2 • Optimizado para PageSpeed 95+ en Móvil 4G)
// Compilador de Producción para Oráculo del Velo Astral
// - Elimina @babel/standalone (-2.8 MB) y cdn.tailwindcss.com (-410 KB JIT)
// - Incrusta styles.min.css inline en cada HTML (0 ms de CSS bloqueante)
// - Convierte Google Fonts a carga asíncrona no bloqueante (ahorra ~750 ms en 4G)
// - Separa core.bundle (~45 KB) de grimorio.bundle (~400 KB diferido en index.html)
// - Mantiene 100% intactos los archivos fuente y compatibilidad con file:/// y GitHub Pages
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
      legalComments: "none"
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

// Convierte Google Fonts en no bloqueante (Cinzel + Lora + Plus Jakarta Sans, 0 ms render-blocking)
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

// Mantiene el fallback métricamente calibrado para minimizar CLS al cargar Lora
function addMetricFontFallback(html) {
  return html.replace(
    /font-family:\s*'Cormorant Garamond',\s*Georgia,\s*serif;/g,
    "font-family: 'Lora', 'Lora Fallback', Georgia, serif;"
  );
}

async function main() {
  const t0 = Date.now();
  console.log("✦ Iniciando build de producción v8.2 (Core Diferido + 0 Render-Blocking)...\n");

  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(ASSETS, { recursive: true });
  fs.writeFileSync(path.join(DIST, ".nojekyll"), "", "utf8");

  copyDirRecursive(path.join(ROOT, "img"), path.join(DIST, "img"));
  for (const staticFile of ["favicon.svg", "robots.txt", "sitemap.xml", "oraculo.html", "CNAME"]) {
    const src = path.join(ROOT, staticFile);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, staticFile));
    }
  }

  const reportRows = [];

  // --------------------------------------------------------------------------
  // 1. Compilar Tailwind CSS v3 estático -> assets/styles.min.css (también inline)
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
  //    Solo lo necesario para pintar Sibilia, el mazo y los 3 botones al instante
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
  // 3. Bundle Diferido: assets/grimorio.bundle.min.js (~400 KB gzip)
  //    12 volúmenes Solar/Lunar + 56 Menores + Trina + Sí/No + Concilio + 22 Dioramas
  //    En index.html se descarga en segundo plano SIN frenar el FCP/LCP inicial.
  //    En carta.html se descarga con defer y reutiliza la misma caché.
  // --------------------------------------------------------------------------
  const grimorioParts = [];
  grimorioParts.push("window.ARCANA_REGISTRY=window.ARCANA_REGISTRY||{};");
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
  // 4. Bundle Crítico 2 (index.html): assets/altar.bundle.min.js (~54 KB gzip)
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
  // 5. Bundle Crítico 2 (carta.html): assets/carta.bundle.min.js
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
  // 7. Reescritura optimizada de las 5 páginas HTML hacia dist/
  // --------------------------------------------------------------------------

  // 7A. index.html (Carga crítica ultraliviana + grimorio diferido en segundo plano)
  {
    let html = readUtf8("index.html");
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

    const lazyLoaderInline =
      '<script>' +
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
      '<!-- Bundles críticos de producción (0 Babel, 0 Tailwind CDN, Grimorio diferido) -->\n' +
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

  // 7B. carta.html (Carga core + grimorio + carta con defer y CSS inline)
  {
    let html = readUtf8("carta.html");
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
      '\n  <!-- Bundles de producción pre-compilados compartidos con index.html -->\n' +
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

  // 7C. tarot-si-o-no.html (0 render-blocking, 0 JS en <head>)
  {
    let html = readUtf8("tarot-si-o-no.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = html.replace(/\s*<script>\s*window\.__loadSiNoFallback[\s\S]*?<\/script>/i, "");
    html = html.replace(/^\s*<script\s+src="datos_cartas\/datos_sino\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function initTarotSiNoLanding)/i,
      '<script src="' + sinoMiniAsset.path + '"></script>\n  <script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "tarot-si-o-no.html"), html, "utf8");
  }

  // 7D. sobre-nosotros.html (0 render-blocking, 0 JS en <head>)
  {
    let html = readUtf8("sobre-nosotros.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function hydrateConcilioPage)/i,
      '<script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "sobre-nosotros.html"), html, "utf8");
  }

  // 7E. privacidad.html (0 render-blocking, 0 JS en <head>)
  {
    let html = readUtf8("privacidad.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      inlineCssBlock
    );
    html = makeGoogleFontsNonBlocking(html);
    html = addMetricFontFallback(html);
    fs.writeFileSync(path.join(DIST, "privacidad.html"), html, "utf8");
  }

  // --------------------------------------------------------------------------
  // 8. Auditoría automática post-build
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

  const elapsed = ((Date.now() - t0) / 1000).toFixed(2);
  console.log("\n✔ BUILD v8.2 COMPLETADO EN " + elapsed + " s (0 Render-Blocking • Core Diferido)\n");
  console.table(reportRows);
  console.log("✦ Carga crítica inicial de index.html: solo core.bundle + altar.bundle (~99 KB gzip vs 496 KB antes)");
  console.log("✦ grimorio.bundle (~400 KB) se precarga en segundo plano sin afectar FCP ni LCP.\n");
}

main().catch((err) => {
  console.error("\n✖ ERROR EN BUILD DE PRODUCCIÓN:\n", err);
  process.exit(1);
});

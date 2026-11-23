// ============================================================================
// ARCHIVO: build_prod.mjs
// Compilador de Producción para Oráculo del Velo Astral (v8)
// - Elimina @babel/standalone (-2.8 MB) pre-compilando los 29 archivos JSX con esbuild
// - Elimina cdn.tailwindcss.com (-410 KB JIT) generando assets/styles.min.css estático
// - Reduce 51 peticiones de scripts en index.html (y 46 en carta.html) a 3 bundles cacheados
// - Mantiene 100% intactos tus archivos fuente y compatibilidad con file:/// y GitHub Pages
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

// ----------------------------------------------------------------------------
// Extractor exacto de JSX mediante sandbox V8 (intercepta Babel.transform)
// Evita expresiones regulares frágiles y respeta el 100% de escapes JS nativos
// ----------------------------------------------------------------------------
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
  // Si por algún motivo ya es JS puro (sin Babel), minificar conservando globales
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

  // Validar sintaxis JS con V8 antes de continuar
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

// ----------------------------------------------------------------------------
// 1. Limpieza de dist/ y copia de activos estáticos
// ----------------------------------------------------------------------------
async function main() {
  const t0 = Date.now();
  console.log("✦ Iniciando compilación de producción para Oráculo del Velo Astral...\n");

  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(ASSETS, { recursive: true });

  // Evitar que GitHub Pages ejecute Jekyll sobre dist/
  fs.writeFileSync(path.join(DIST, ".nojekyll"), "", "utf8");

  // Copiar imágenes y archivos estáticos raíz
  copyDirRecursive(path.join(ROOT, "img"), path.join(DIST, "img"));
  for (const staticFile of ["favicon.svg", "robots.txt", "sitemap.xml", "oraculo.html", "CNAME"]) {
    const src = path.join(ROOT, staticFile);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, staticFile));
    }
  }

  const reportRows = [];

  // --------------------------------------------------------------------------
  // 2. Compilar Tailwind CSS v3 estático -> dist/assets/styles.min.css
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
  const cssBuf = fs.readFileSync(cssOutPath);
  const cssGz = zlib.gzipSync(cssBuf, { level: 9 });
  const cssHash = shortHash(cssBuf);
  const cssRef = "assets/styles.min.css?v=" + cssHash;
  reportRows.push({ file: "assets/styles.min.css", raw: kb(cssBuf.length), gzip: kb(cssGz.length), hash: cssHash });

  // --------------------------------------------------------------------------
  // 3. Bundle 1: assets/datos.bundle.min.js (Compartido entre index.html y carta.html)
  // --------------------------------------------------------------------------
  const datosParts = [];
  datosParts.push(await minifyPlainJs(readUtf8("datos_cartas.js"), "datos_cartas.js"));
  datosParts.push(await minifyPlainJs(readUtf8("datos_cartas_menores.js"), "datos_cartas_menores.js"));
  datosParts.push(
    'if(typeof MAJOR_ARCANA!=="undefined"&&!window.MAJOR_ARCANA)window.MAJOR_ARCANA=MAJOR_ARCANA;' +
    'if(typeof REVERSED_DATA!=="undefined"&&!window.REVERSED_DATA)window.REVERSED_DATA=REVERSED_DATA;' +
    'if(typeof MINOR_ARCANA!=="undefined"&&!window.MINOR_ARCANA)window.MINOR_ARCANA=MINOR_ARCANA;'
  );

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
      datosParts.push(await minifyPlainJs(readUtf8(gf), gf));
    } else {
      console.warn("⚠ Aviso: no se encontró " + gf + " (se omite del bundle).");
    }
  }
  datosParts.push(await minifyPlainJs(readUtf8("motor_tarot.js"), "motor_tarot.js"));
  if (fs.existsSync(path.join(ROOT, "concilio_tarotistas.js"))) {
    datosParts.push(await minifyPlainJs(readUtf8("concilio_tarotistas.js"), "concilio_tarotistas.js"));
  }
  const datosAsset = writeAssetAndReport("datos.bundle.min.js", datosParts.join(";\n"), reportRows);

  // --------------------------------------------------------------------------
  // 4. Bundle 2: assets/diorama.bundle.min.js (Audio + Renderer + 22 Arcanos JSX pre-compilados)
  // --------------------------------------------------------------------------
  const dioramaParts = [];
  dioramaParts.push("window.ARCANA_REGISTRY=window.ARCANA_REGISTRY||{};");
  dioramaParts.push(await minifyPlainJs(readUtf8("motor_audio.js"), "motor_audio.js"));
  dioramaParts.push(await compileJsxFile("tarot_diorama_renderer.js"));

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
    dioramaParts.push(await compileJsxFile(cf));
  }

  // Puente unificado de alias para los 22 Arcanos
  const aliasBridge = await minifyPlainJs(`
    (function verifyAndMapArcanaRegistry() {
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
    })();
  `, "alias_bridge.js");
  dioramaParts.push(aliasBridge);

  const dioramaAsset = writeAssetAndReport("diorama.bundle.min.js", dioramaParts.join(";\n"), reportRows);

  // --------------------------------------------------------------------------
  // 5. Bundle 3A: assets/altar.bundle.min.js (Solo index.html: Sibilia + Trina + Sí/No + Grimorio + Motor)
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
  // 6. Bundle 3B: assets/carta.bundle.min.js (Solo carta.html: Layout Maestro del Códice)
  // --------------------------------------------------------------------------
  const cartaCode = await compileJsxFile("layout_arcano.js");
  const cartaAsset = writeAssetAndReport("carta.bundle.min.js", cartaCode, reportRows);

  // --------------------------------------------------------------------------
  // 7. Módulos livianos independientes para landings SEO instantáneas
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
  // 8. Reescritura limpia de los 5 HTML hacia dist/ (Cero Babel, Cero Tailwind CDN)
  // --------------------------------------------------------------------------

  // 8A. index.html
  {
    let html = readUtf8("index.html");
    // Reemplazar Tailwind CDN por CSS estático + preconnect a unpkg
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="preconnect" href="https://unpkg.com" crossorigin />\n  <link rel="stylesheet" href="' + cssRef + '" />'
    );
    // Eliminar @babel/standalone
    html = html.replace(/^\s*<script[^>]*@babel\/standalone[^>]*><\/script>\s*\r?\n?/gim, "");
    // Agregar defer a React, ReactDOM y Framer Motion
    html = html.replace(
      /<script(\s+crossorigin)?\s+src="(https:\/\/unpkg\.com\/(?:react|react-dom|framer-motion)[^"]+)"><\/script>/gi,
      '<script defer crossorigin src="$2"></script>'
    );
    // Quitar los bloques locales antiguos de <head> (desde <!-- 1. Bases... hasta motor_tirada.js)
    html = html.replace(
      /<!--\s*1\.\s*Bases de datos[\s\S]*?<script\s+src="motor_tirada\.js[^"]*"><\/script>/i,
      '<!-- Bundles de producción pre-compilados (0 Babel, 3 peticiones cacheadas) -->\n' +
      '  <script defer src="' + datosAsset.path + '"></script>\n' +
      '  <script defer src="' + dioramaAsset.path + '"></script>\n' +
      '  <script defer src="' + altarAsset.path + '"></script>'
    );
    // Asegurar montaje seguro tras scripts defer (DOMContentLoaded)
    html = html.replace(
      /\(function mountOraculoApp\(\) \{([\s\S]*?)\}\)\(\);/,
      'document.addEventListener("DOMContentLoaded", function mountOraculoApp() {$1});'
    );
    fs.writeFileSync(path.join(DIST, "index.html"), html, "utf8");
  }

  // 8B. carta.html
  {
    let html = readUtf8("carta.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="preconnect" href="https://unpkg.com" crossorigin />\n  <link rel="stylesheet" href="' + cssRef + '" />'
    );
    html = html.replace(/^\s*<script[^>]*@babel\/standalone[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /<script(\s+crossorigin)?\s+src="(https:\/\/unpkg\.com\/(?:react|react-dom|framer-motion)[^"]+)"><\/script>/gi,
      '<script defer crossorigin src="$2"></script>'
    );
    // Inyectar los 3 bundles defer en <head> justo antes de <style>
    html = html.replace(
      /(\s*<style>)/i,
      '\n  <!-- Bundles de producción pre-compilados (datos y diorama compartidos con caché de index.html) -->\n' +
      '  <script defer src="' + datosAsset.path + '"></script>\n' +
      '  <script defer src="' + dioramaAsset.path + '"></script>\n' +
      '  <script defer src="' + cartaAsset.path + '"></script>\n$1'
    );
    // Remover los 45 <script> locales del <body> (desde <!-- 1. Bases... hasta layout_arcano.js)
    html = html.replace(
      /<!--\s*1\.\s*Bases de datos[\s\S]*?<script\s+src="layout_arcano\.js[^"]*"><\/script>/i,
      '<!-- Scripts locales empaquetados en assets/*.bundle.min.js -->'
    );
    // Montar AppCarta en DOMContentLoaded para garantizar que todos los defer terminaron
    html = html.replace(
      /\(function mountCartaApp\(\) \{([\s\S]*?)\}\)\(\);/,
      'document.addEventListener("DOMContentLoaded", function mountCartaApp() {$1});'
    );
    fs.writeFileSync(path.join(DIST, "carta.html"), html, "utf8");
  }

  // 8C. tarot-si-o-no.html (Landing SEO ultrarrápida: 0 JS en <head>)
  {
    let html = readUtf8("tarot-si-o-no.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="stylesheet" href="' + cssRef + '" />'
    );
    // Eliminar fallback + scripts del <head> y mover sus versiones minificadas antes del script final del <body>
    html = html.replace(/\s*<script>\s*window\.__loadSiNoFallback[\s\S]*?<\/script>/i, "");
    html = html.replace(/^\s*<script\s+src="datos_cartas\/datos_sino\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function initTarotSiNoLanding)/i,
      '<script src="' + sinoMiniAsset.path + '"></script>\n  <script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "tarot-si-o-no.html"), html, "utf8");
  }

  // 8D. sobre-nosotros.html (Landing editorial ultrarrápida: 0 JS en <head>)
  {
    let html = readUtf8("sobre-nosotros.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="stylesheet" href="' + cssRef + '" />'
    );
    html = html.replace(/^\s*<script\s+src="concilio_tarotistas\.js[^"]*"[^>]*><\/script>\s*\r?\n?/gim, "");
    html = html.replace(
      /(<script>\s*\(function hydrateConcilioPage)/i,
      '<script src="' + concilioMiniAsset.path + '"></script>\n  $1'
    );
    fs.writeFileSync(path.join(DIST, "sobre-nosotros.html"), html, "utf8");
  }

  // 8E. privacidad.html (HTML + CSS estático puro)
  {
    let html = readUtf8("privacidad.html");
    html = html.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/i,
      '<link rel="stylesheet" href="' + cssRef + '" />'
    );
    fs.writeFileSync(path.join(DIST, "privacidad.html"), html, "utf8");
  }

  // --------------------------------------------------------------------------
  // 9. Auditoría automática post-build de dist/
  // --------------------------------------------------------------------------
  const htmlPages = ["index.html", "carta.html", "tarot-si-o-no.html", "sobre-nosotros.html", "privacidad.html"];
  for (const page of htmlPages) {
    const content = fs.readFileSync(path.join(DIST, page), "utf8");
    if (content.includes("@babel/standalone")) {
      throw new Error("Fallo de auditoría: " + page + " todavía referencia @babel/standalone");
    }
    if (content.includes("cdn.tailwindcss.com")) {
      throw new Error("Fallo de auditoría: " + page + " todavía referencia cdn.tailwindcss.com");
    }
    const refs = [...content.matchAll(/(?:src|href)="(assets\/[^"?]+)(?:\?[^"]*)?"/g)].map((m) => m[1]);
    for (const ref of refs) {
      if (!fs.existsSync(path.join(DIST, ref))) {
        throw new Error("Fallo de auditoría: " + page + " apunta a " + ref + " que no existe en dist/");
      }
    }
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(2);
  console.log("\n✔ COMPILACIÓN COMPLETADA EN " + elapsed + " s (0 Babel, 0 Tailwind CDN)\n");
  console.table(reportRows);
  console.log("✦ Peticiones de scripts en index.html: 51 -> 6 (3 CDN defer + 3 bundles locales cacheados)");
  console.log("✦ Peticiones de scripts en carta.html: 46 -> 6 (datos y diorama reutilizan caché de index.html)");
  console.log("✦ Carpeta lista para publicar: dist/\n");
}

main().catch((err) => {
  console.error("\n✖ ERROR EN BUILD DE PRODUCCIÓN:\n", err);
  process.exit(1);
});

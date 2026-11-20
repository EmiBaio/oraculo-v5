// ============================================================================
// ARCHIVO: tarot_diorama_renderer.js
// ORQUESTADOR VISUAL AAA OPTIMIZADO (60+ FPS • CERO RE-RENDERS EN rAF)
// Incluye Pre-Rasterizador PNG del Dorso (CardBackSprite) + Keyframes GPU Puros
// Compatible con protocolo local file:/// (Sin bloqueo CORS de Babel y Scope Aislado)
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

const TAROT_DIORAMA_RENDERER_SOURCE = `
const { useState, useEffect, useMemo, memo } = React;

// --- 0. INYECCIÓN ÚNICA DE KEYFRAMES GPU (CERO RE-RENDERS DE REACT EN rAF) ---
(function injectDioramaGpuStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("velo-diorama-gpu-styles")) return;
  const style = document.createElement("style");
  style.id = "velo-diorama-gpu-styles";
  style.textContent =
    "@keyframes veloSpinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } " +
    "@keyframes veloSpinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } } " +
    ".velo-gpu-spin-slow { transform-origin: 0px 0px; animation: veloSpinCW 55s linear infinite; will-change: transform; } " +
    ".velo-gpu-spin-core { transform-origin: 0px 0px; animation: veloSpinCW 30s linear infinite; will-change: transform; } " +
    ".velo-gpu-spin-counter { transform-origin: 0px 0px; animation: veloSpinCCW 46s linear infinite; will-change: transform; } " +
    ".velo-gpu-paused { animation-play-state: paused !important; } " +
    "@media (prefers-reduced-motion: reduce) { .velo-gpu-spin-slow, .velo-gpu-spin-core, .velo-gpu-spin-counter { animation: none !important; } }";
  document.head.appendChild(style);
})();

// --- 0B. PRE-RASTERIZADOR DEL DORSO AAA A TEXTURA PNG ÚNICA EN MEMORIA ---
// Hornea todos los gradientes, sombras (#shadow), biseles (#bevel) y textura (#grain)
// UNA sola vez en un <canvas> fuera de pantalla para que barajadas y abanico
// muevan <img> planas en GPU sin re-rasterizar SVGs ni filtros cuadro a cuadro.
const CARD_BACK_BAKED_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 768" width="512" height="768">' +
  '<defs>' +
  '<linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff7d3"/><stop offset=".14" stop-color="#c88b2c"/><stop offset=".3" stop-color="#ffe88d"/><stop offset=".52" stop-color="#8f5019"/><stop offset=".72" stop-color="#ffd45c"/><stop offset=".88" stop-color="#b87924"/><stop offset="1" stop-color="#fff4c3"/></linearGradient>' +
  '<linearGradient id="amethyst" x1="0" y1="0" x2=".85" y2="1"><stop stop-color="#48215e"/><stop offset=".42" stop-color="#21112f"/><stop offset="1" stop-color="#110d20"/></linearGradient>' +
  '<radialGradient id="heart" cx="50%" cy="42%" r="68%"><stop stop-color="#552278"/><stop offset=".58" stop-color="#291338"/><stop offset="1" stop-color="#130e20"/></radialGradient>' +
  '<linearGradient id="gold" x1="0" y1="0" x2=".85" y2="1"><stop stop-color="#fff8d7"/><stop offset=".18" stop-color="#ffdb65"/><stop offset=".36" stop-color="#d99a25"/><stop offset=".54" stop-color="#98551a"/><stop offset=".72" stop-color="#ffd85e"/><stop offset=".88" stop-color="#fff0a8"/><stop offset="1" stop-color="#a8611b"/></linearGradient>' +
  '<radialGradient id="moon" cx="34%" cy="27%" r="78%"><stop stop-color="#fff4bf"/><stop offset=".22" stop-color="#f9d760"/><stop offset=".52" stop-color="#bd8027"/><stop offset=".82" stop-color="#72401f"/><stop offset="1" stop-color="#3b2030"/></radialGradient>' +
  '<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffbe6" stop-opacity=".68"/><stop offset=".32" stop-color="#fff0b8" stop-opacity=".12"/><stop offset=".7" stop-color="#fff0b8" stop-opacity="0"/><stop offset="1" stop-color="#ffe071" stop-opacity=".18"/></linearGradient>' +
  '<filter id="shadow" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur"/><feOffset in="blur" dx="0" dy="9" result="drop"/><feFlood flood-color="#05030b" flood-opacity=".88" result="shade"/><feComposite in="shade" in2="drop" operator="in" result="shadow"/><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="tightBlur"/><feOffset in="tightBlur" dx="0" dy="3" result="tight"/><feFlood flood-color="#d18d2b" flood-opacity=".35" result="warm"/><feComposite in="warm" in2="tight" operator="in" result="rimShadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="rimShadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
  '<filter id="bevel" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="softAlpha"/><feSpecularLighting in="softAlpha" surfaceScale="5" specularConstant=".9" specularExponent="18" lighting-color="#fff0a8" result="spec"><feDistantLight azimuth="225" elevation="55"/></feSpecularLighting><feComposite in="spec" in2="SourceAlpha" operator="in" result="bevelLight"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="bevelLight"/></feMerge></filter>' +
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
  '<path d="M256 53 Q276 78 321 78 H415 Q451 78 451 114 V654 Q451 690 415 690 H321 Q276 690 256 715 Q236 690 191 690 H97 Q61 690 61 654 V114 Q61 78 97 78 H191 Q236 78 256 53Z" fill="url(#heart)" stroke="url(#gold)" stroke-width="4.5" filter="url(#shadow)"/>' +
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
  '<path d="M256 245 286 283 333 275 339 323 381 347 360 389 381 431 339 455 333 503 286 495 256 533 226 495 179 503 173 455 131 431 152 389 131 347 173 323 179 275 226 283Z" fill="url(#gold)" stroke="#fff1a2" stroke-width="2.5" filter="url(#bevel)" stroke-linejoin="round"/>' +
  '<path d="M256 267 278 294 313 288 318 324 349 342 333 374 349 406 318 424 313 460 278 454 256 481 234 454 199 460 194 424 163 406 179 374 163 342 194 324 199 288 234 294Z" fill="#281431" stroke="#54311d" stroke-width="5" stroke-linejoin="round"/>' +
  '<circle cx="256" cy="374" r="72" fill="url(#moon)" stroke="#fff0a1" stroke-width="3"/>' +
  '<circle cx="256" cy="374" r="62" fill="none" stroke="#643a20" stroke-opacity=".8" stroke-width="1.5"/>' +
  '<path d="M270 323c-27 7-44 32-41 59 3 30 31 52 61 49 12-1 22-6 30-14-7 22-28 38-52 39-35 1-64-27-64-62 0-36 29-65 65-65 7 0 14 1 21 4-6-6-13-9-20-10Z" fill="#1d102b" stroke="#f5d987" stroke-width="3" stroke-linejoin="round"/>' +
  '<path d="M280 353 286 368 301 374 286 380 280 395 274 380 259 374 274 368Z" fill="#f6dfa1"/>' +
  '<circle cx="256" cy="374" r="4" fill="#fffbe1"/>' +
  '</svg>';

const CARD_BACK_SVG_DATA_URI = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(CARD_BACK_BAKED_SVG);
let bakedCardBackUrl = null;
let bakingCardBackPromise = null;
const spriteListeners = new Set();

function notifySpriteListeners(url) {
  spriteListeners.forEach(function (fn) {
    try { fn(url); } catch (e) {}
  });
}

function prewarmCardBackSprite(quality) {
  if (bakedCardBackUrl) return Promise.resolve(bakedCardBackUrl);
  if (bakingCardBackPromise) return bakingCardBackPromise;
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.resolve(CARD_BACK_SVG_DATA_URI);
  }

  bakingCardBackPromise = new Promise(function (resolve) {
    const img = new Image();
    img.decoding = "async";
    img.onload = function () {
      try {
        const isSmall = quality === "LOW" || window.innerWidth < 768;
        const w = isSmall ? 340 : 512;
        const h = isSmall ? 510 : 768;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          bakedCardBackUrl = CARD_BACK_SVG_DATA_URI;
          notifySpriteListeners(bakedCardBackUrl);
          resolve(bakedCardBackUrl);
          return;
        }
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, w, h);

        if (typeof canvas.toBlob === "function") {
          canvas.toBlob(function (blob) {
            if (blob) {
              bakedCardBackUrl = URL.createObjectURL(blob);
            } else {
              bakedCardBackUrl = CARD_BACK_SVG_DATA_URI;
            }
            notifySpriteListeners(bakedCardBackUrl);
            resolve(bakedCardBackUrl);
          }, "image/png");
        } else {
          bakedCardBackUrl = canvas.toDataURL("image/png");
          notifySpriteListeners(bakedCardBackUrl);
          resolve(bakedCardBackUrl);
        }
      } catch (e) {
        bakedCardBackUrl = CARD_BACK_SVG_DATA_URI;
        notifySpriteListeners(bakedCardBackUrl);
        resolve(bakedCardBackUrl);
      }
    };
    img.onerror = function () {
      bakedCardBackUrl = CARD_BACK_SVG_DATA_URI;
      notifySpriteListeners(bakedCardBackUrl);
      resolve(bakedCardBackUrl);
    };
    img.src = CARD_BACK_SVG_DATA_URI;
  });

  return bakingCardBackPromise;
}

function getCardBackSpriteUrl(quality) {
  if (!bakedCardBackUrl) {
    prewarmCardBackSprite(quality);
    return CARD_BACK_SVG_DATA_URI;
  }
  return bakedCardBackUrl;
}

function useCardBackSpriteUrl(quality) {
  const [url, setUrl] = useState(function () {
    return bakedCardBackUrl || CARD_BACK_SVG_DATA_URI;
  });

  useEffect(function () {
    if (bakedCardBackUrl) {
      setUrl(bakedCardBackUrl);
      return undefined;
    }
    const handler = function (nextUrl) { setUrl(nextUrl); };
    spriteListeners.add(handler);
    prewarmCardBackSprite(quality);
    return function () { spriteListeners.delete(handler); };
  }, [quality]);

  return url;
}

// Componente de Dorso Pre-Horneado: 1 sola textura GPU (cero filtros SVG en tiempo real)
const CardBackSprite = memo(function CardBackSprite({ quality = "HIGH", className = "" }) {
  const src = useCardBackSpriteUrl(quality);
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
      className={"block w-full h-full object-contain pointer-events-none select-none " + className}
      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    />
  );
});

// Pre-calentar la textura del dorso inmediatamente al cargar el módulo
if (typeof window !== "undefined") {
  setTimeout(function () { prewarmCardBackSprite("HIGH"); }, 0);
}

// --- 1. DEFINICIONES VECTORIALES DE LAS CARTAS REVELADAS (CERO FILTROS BORROSOS) ---
const SharedArtDefs = memo(function SharedArtDefs() {
  return (
    <svg aria-hidden="true" style={{ width: 0, height: 0, position: "absolute", pointerEvents: "none" }}>
      <defs>
        <linearGradient id="v-gold" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#fff9e2" />
          <stop offset="16%" stopColor="#ffe074" />
          <stop offset="36%" stopColor="#d99a26" />
          <stop offset="54%" stopColor="#8c4f19" />
          <stop offset="74%" stopColor="#ffd85e" />
          <stop offset="90%" stopColor="#fff0b5" />
          <stop offset="100%" stopColor="#6e3b12" />
        </linearGradient>

        <linearGradient id="v-gold-3d-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="22%" stopColor="#fff3b0" />
          <stop offset="48%" stopColor="#e0a229" />
          <stop offset="72%" stopColor="#8f4c14" />
          <stop offset="100%" stopColor="#ffe484" />
        </linearGradient>

        <linearGradient id="v-gold-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b87b1e" />
          <stop offset="48%" stopColor="#4f2c15" />
          <stop offset="100%" stopColor="#1c0d06" />
        </linearGradient>

        <linearGradient id="v-bronze-extrude" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c3412" />
          <stop offset="50%" stopColor="#2b1507" />
          <stop offset="100%" stopColor="#0f0603" />
        </linearGradient>

        <linearGradient id="v-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        <linearGradient id="v-amethyst" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#7e22ce" />
          <stop offset="42%" stopColor="#3b0764" />
          <stop offset="100%" stopColor="#0d0517" />
        </linearGradient>

        <linearGradient id="v-amethyst-bright" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="30%" stopColor="#c084fc" />
          <stop offset="70%" stopColor="#6b21a8" />
          <stop offset="100%" stopColor="#1e0836" />
        </linearGradient>

        <linearGradient id="v-obsidian" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#27173a" />
          <stop offset="45%" stopColor="#11091c" />
          <stop offset="100%" stopColor="#050208" />
        </linearGradient>

        <linearGradient id="v-obsidian-deep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#160b28" />
          <stop offset="50%" stopColor="#080410" />
          <stop offset="100%" stopColor="#020105" />
        </linearGradient>

        <radialGradient id="v-astral-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="22%" stopColor="#fef08a" stopOpacity="0.88" />
          <stop offset="55%" stopColor="#c084fc" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="v-amethyst-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#581c87" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#090414" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="v-void-vignette" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#090414" stopOpacity="0" />
          <stop offset="74%" stopColor="#05020a" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#020105" stopOpacity="0.92" />
        </radialGradient>

        <clipPath id="diorama-window-clip">
          <path d="M 18,308 V 86 Q 18,22 120,14 Q 222,22 222,86 V 308 Z" />
        </clipPath>

        <g id="v-corner" fill="none" stroke="url(#v-gold)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 30 V7 Q0 0 7 0 H30 M4 22 V9 Q4 4 9 4 H22" strokeWidth="1.5" />
          <path d="M8 16 C14 16 16 10 16 6 C21 8 23 13 21 18 C19 22 14 24 10 22" strokeWidth="1.1" />
          <circle cx="8" cy="8" r="1.3" fill="#fff4c3" stroke="none" />
        </g>

        <g id="v-corner-3d" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 34 V8 Q0 0 8 0 H34" fill="none" stroke="#040207" strokeWidth="4.2" transform="translate(1, 1.6)" />
          <path d="M0 34 V8 Q0 0 8 0 H34" fill="none" stroke="url(#v-bronze-extrude)" strokeWidth="3.2" transform="translate(0.5, 0.8)" />
          <path d="M0 34 V8 Q0 0 8 0 H34" fill="none" stroke="url(#v-gold)" strokeWidth="2.1" />
          <path d="M5 25 V10 Q5 5 10 5 H25" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
          <polygon points="4,4 11,4 11,11 4,11" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.9" />
          <circle cx="7.5" cy="7.5" r="1.4" fill="#fff8d7" />
          <path d="M11 18 Q18 18 18 11" fill="none" stroke="url(#v-gold)" strokeWidth="1" opacity="0.85" />
        </g>
      </defs>
    </svg>
  );
});

// --- 2. DEFINICIONES DEL DORSO DE LAS CARTAS (COMPATIBILIDAD CON motor_tirada.js) ---
const CardBackDefs = memo(function CardBackDefs() {
  return (
    <svg aria-hidden="true" style={{ width: 0, height: 0, position: "absolute", pointerEvents: "none" }}>
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff7d3" /><stop offset=".14" stopColor="#c88b2c" /><stop offset=".3" stopColor="#ffe88d" /><stop offset=".52" stopColor="#8f5019" /><stop offset=".72" stopColor="#ffd45c" /><stop offset=".88" stopColor="#b87924" /><stop offset="1" stopColor="#fff4c3" /></linearGradient>
        <linearGradient id="amethyst" x1="0" y1="0" x2=".85" y2="1"><stop stopColor="#48215e" /><stop offset=".42" stopColor="#21112f" /><stop offset="1" stopColor="#110d20" /></linearGradient>
        <radialGradient id="heart" cx="50%" cy="42%" r="68%"><stop stopColor="#552278" /><stop offset=".58" stopColor="#291338" /><stop offset="1" stopColor="#130e20" /></radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2=".85" y2="1"><stop stopColor="#fff8d7" /><stop offset=".18" stopColor="#ffdb65" /><stop offset=".36" stopColor="#d99a25" /><stop offset=".54" stopColor="#98551a" /><stop offset=".72" stopColor="#ffd85e" /><stop offset=".88" stopColor="#fff0a8" /><stop offset="1" stopColor="#a8611b" /></linearGradient>
        <radialGradient id="moon" cx="34%" cy="27%" r="78%"><stop stopColor="#fff4bf" /><stop offset=".22" stopColor="#f9d760" /><stop offset=".52" stopColor="#bd8027" /><stop offset=".82" stopColor="#72401f" /><stop offset="1" stopColor="#3b2030" /></radialGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fffbe6" stopOpacity=".68" /><stop offset=".32" stopColor="#fff0b8" stopOpacity=".12" /><stop offset=".7" stopColor="#fff0b8" stopOpacity="0" /><stop offset="1" stopColor="#ffe071" stopOpacity=".18" /></linearGradient>
        <pattern id="grain" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 15H30M15 0V30" stroke="#bb8a48" strokeOpacity=".045" strokeWidth=".65" /><circle cx="15" cy="15" r="1" fill="#f5d78c" fillOpacity=".11" /></pattern>
        <g id="corner" fill="none" stroke="url(#gold)" strokeLinecap="round" strokeLinejoin="round"><path d="M0 52V12Q0 0 12 0h40M7 39V14q0-7 7-7h25" strokeWidth="2.1" /><path d="M13 27C24 27 26 17 26 10c9 4 12 12 10 19-2 8-10 12-18 10 9-1 13-7 13-12M6 48c9 0 13-4 14-12" strokeWidth="1.5" /><path d="M16 5l3-5 3 5-3 5zM5 16l-5 3 5 3 5-3z" fill="#dbb35f" strokeWidth=".8" /><circle cx="13" cy="13" r="1.4" fill="#f4d98f" stroke="none" /></g>
        <g id="star" fill="url(#gold)"><path d="M0-9 1.7-1.7 9 0 1.7 1.7 0 9-1.7 1.7-9 0-1.7-1.7Z" /><circle r="1.2" fill="#fff1ba" /></g>
      </defs>
    </svg>
  );
});

// --- 3. PRIMITIVAS COMPARTIDAS DE ALTA PRECISIÓN ---
const Gold3DText = ({ x, y, children, fontSize = 13, letterSpacing = 0.8, fontFamily = "'Cinzel Decorative', serif" }) => (
  <g style={{ fontFamily, fontSize: fontSize + "px", fontWeight: 900, letterSpacing: letterSpacing + "px" }} textAnchor="middle">
    <text x={x} y={y + 2.4} fill="#020105">{children}</text>
    <text x={x} y={y + 1.4} fill="url(#v-bronze-extrude)" stroke="#1c0d06" strokeWidth="0.9" strokeLinejoin="round">{children}</text>
    <text x={x} y={y + 0.7} fill="#98551a">{children}</text>
    <text x={x} y={y} fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.22">{children}</text>
  </g>
);

const LivingEnergyCore = ({ cx, cy, r = 10, quality = "ULTRA", angle, paused = false }) => {
  const isUltra = quality === "ULTRA";
  const isLow = quality === "LOW";
  const useExternal = typeof angle === "number" && angle !== 0;
  const rot = useExternal && isUltra ? "rotate(" + (angle * 1.8) + ")" : undefined;
  const counterRot = useExternal && isUltra ? "rotate(" + (-angle * 1.2) + ")" : undefined;
  const spinCoreClass = !useExternal && isUltra ? ("velo-gpu-spin-core" + (paused ? " velo-gpu-paused" : "")) : undefined;
  const spinCounterClass = !useExternal && isUltra ? ("velo-gpu-spin-counter" + (paused ? " velo-gpu-paused" : "")) : undefined;

  return (
    <g transform={"translate(" + cx + ", " + cy + ")"}>
      <circle r={r * 2.4} fill="url(#v-astral-core)" />
      {!isLow && (
        <g transform={counterRot} className={spinCounterClass}>
          <circle r={r * 1.35} fill="none" stroke="#c084fc" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.85" />
          <circle r={r * 1.05} fill="none" stroke="#fef08a" strokeWidth="0.45" strokeDasharray="4 2" opacity="0.8" />
        </g>
      )}
      <g transform={rot} className={spinCoreClass}>
        <polygon
          points={
            "0," + (-r * 1.2) + " " +
            (r * 0.32) + "," + (-r * 0.32) + " " +
            (r * 1.2) + ",0 " +
            (r * 0.32) + "," + (r * 0.32) + " " +
            "0," + (r * 1.2) + " " +
            (-r * 0.32) + "," + (r * 0.32) + " " +
            (-r * 1.2) + ",0 " +
            (-r * 0.32) + "," + (-r * 0.32)
          }
          fill="url(#v-gold-3d-face)"
          stroke="#ffffff"
          strokeWidth="0.55"
        />
        {isUltra && (
          <polygon
            points={
              "0," + (-r * 0.85) + " " +
              (r * 0.22) + "," + (-r * 0.22) + " " +
              (r * 0.85) + ",0 " +
              (r * 0.22) + "," + (r * 0.22) + " " +
              "0," + (r * 0.85) + " " +
              (-r * 0.22) + "," + (r * 0.22) + " " +
              (-r * 0.85) + ",0 " +
              (-r * 0.22) + "," + (-r * 0.22)
            }
            fill="#fef08a"
            transform="rotate(45)"
            opacity="0.9"
          />
        )}
      </g>
      <circle r={r * 0.38} fill="#ffffff" />
    </g>
  );
};

const SibiliaArcanaFigure = ({ cy = 128, scale = 1, quality = "ULTRA", crowned = true }) => {
  const isUltra = quality === "ULTRA";
  return (
    <g transform={"translate(120, " + cy + ") scale(" + scale + ") translate(-120, -120)"}>
      <path d="M120,56 C78,58 58,92 61,148 L44,288 L196,288 L179,148 C182,92 162,58 120,56 Z" fill="#020105" transform="translate(0, 4)" opacity="0.85" />
      <path d="M120,56 C78,58 58,92 61,148 L44,288 L196,288 L179,148 C182,92 162,58 120,56 Z" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M120,66 C88,68 72,96 75,144 L66,278 L174,278 L165,144 C168,96 152,68 120,66 Z" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.95" />
      <ellipse cx="120" cy="118" rx="36" ry="44" fill="#030106" stroke="url(#v-gold-dark)" strokeWidth="0.6" />
      <path d="M52,162 C74,142 98,138 120,152 C142,138 166,142 188,162 L178,186 C156,168 138,166 120,178 C102,166 84,168 62,186 Z" fill="#030106" transform="translate(0, 3)" />
      <path d="M52,162 C74,142 98,138 120,152 C142,138 166,142 188,162 L178,186 C156,168 138,166 120,178 C102,166 84,168 62,186 Z" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M64,166 C82,152 100,150 120,162 C140,150 158,152 176,166" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeDasharray="2 3" />
      <path d="M92,156 L120,214 L148,156 L138,286 L102,286 Z" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.2" />
      <polygon points="120,156 131,172 120,190 109,172" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
      <circle cx="120" cy="172" r="6" fill="url(#v-astral-core)" />
      <circle cx="120" cy="172" r="2.2" fill="#fef08a" />
      <circle cx="120" cy="172" r="1.1" fill="#ffffff" />
      <path d="M120,76 C99,76 88,91 89,116 L92,144 C94,160 105,170 120,172 C135,170 146,160 148,144 L151,116 C152,91 141,76 120,76 Z" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.2" />
      <path d="M90,100 L112,88 L120,98 L118,138 L97,151 L87,132 Z" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M150,100 L128,88 L120,98 L122,138 L143,151 L153,132 Z" fill="#180b29" stroke="url(#v-gold)" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M120,95 L113,122 L120,130 L127,122 Z" fill="url(#v-gold-3d-face)" stroke="#fff8d7" strokeWidth="0.8" />
      <path d="M98,144 L120,152 L142,144 L120,169 Z" fill="#07040d" stroke="url(#v-gold)" strokeWidth="1.35" />
      <path d="M96,105 Q106,99 115,103 M144,105 Q134,99 125,103" fill="none" stroke="#fff3b0" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="106" cy="108" r="6" fill="url(#v-astral-core)" />
      <circle cx="134" cy="108" r="6" fill="url(#v-astral-core)" />
      <ellipse cx="106" cy="108" rx="4" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
      <ellipse cx="134" cy="108" rx="4" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
      <circle cx="106" cy="108" r="1.2" fill="#ffffff" />
      <circle cx="134" cy="108" r="1.2" fill="#ffffff" />
      <path d="M106,113 V128 M134,113 V128" stroke="url(#v-gold)" strokeWidth="0.85" strokeDasharray="1.5 1.5" />
      <polygon points="120,82 124,89 120,95 116,89" fill="#1b092e" stroke="url(#v-gold)" strokeWidth="1" />
      <circle cx="120" cy="89" r="2" fill="#c084fc" />
      <circle cx="120" cy="89" r="0.9" fill="#ffffff" />
      {crowned && (
        <g>
          <path d="M86,82 L75,58 L99,72 L120,52 L141,72 L165,58 L154,82 L136,87 L120,75 L104,87 Z" fill="#040207" transform="translate(0, 2)" />
          <path d="M86,82 L75,58 L99,72 L120,52 L141,72 L165,58 L154,82 L136,87 L120,75 L104,87 Z" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" strokeLinejoin="round" />
          <polygon points="120,55 126,68 120,78 114,68" fill="url(#v-amethyst-bright)" stroke="#fff8d7" strokeWidth="0.9" />
          {isUltra && (
            <g fill="#fff9e2">
              <circle cx="75" cy="58" r="1.5" />
              <circle cx="120" cy="51" r="1.8" />
              <circle cx="165" cy="58" r="1.5" />
            </g>
          )}
          <circle cx="97" cy="73" r="2" fill="#c084fc" />
          <circle cx="143" cy="73" r="2" fill="#c084fc" />
        </g>
      )}
    </g>
  );
};

const OracleFacetedBust = ({ cy = 118, scale = 1, pauldrons = true }) => (
  <SibiliaArcanaFigure cy={cy + 14} scale={scale * 0.92} crowned={pauldrons} />
);

// --- 4. MOTOR DE RESPALDO NÍTIDO PARA LAS CARTAS AÚN NO MIGRADAS A /cartas/ ---
const renderCardArt = (card, quality = "HIGH") => {
  if (!card) return <SibiliaArcanaFigure cy={136} scale={0.95} quality={quality} crowned={true} />;
  const primary = (card.palette && card.palette.primary) || "#fef08a";
  const secondary = (card.palette && card.palette.secondary) || "#c084fc";

  if (card.type === "minor") {
    const rankNum = parseInt(String(card.id).split("_")[1] || "1", 10);
    const isCourt = rankNum >= 11;

    const renderSuitSymbol = (scale = 1) => {
      if (card.suit === "wands") {
        return (
          <g transform={"scale(" + scale + ")"}>
            <line x1="0" y1="-26" x2="0" y2="26" stroke="url(#v-gold-3d-face)" strokeWidth="4" strokeLinecap="round" />
            <polygon points="0,-34 7,-18 0,-22 -7,-18" fill={primary} stroke="#ffffff" strokeWidth="0.6" />
          </g>
        );
      }
      if (card.suit === "cups") {
        return (
          <g transform={"scale(" + scale + ")"}>
            <path d="M-14,-16 H14 L9,5 Q0,16 -9,5 Z" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1" />
            <line x1="0" y1="11" x2="0" y2="24" stroke="url(#v-gold)" strokeWidth="3.5" />
            <line x1="-11" y1="24" x2="11" y2="24" stroke="url(#v-gold)" strokeWidth="2.8" />
            <circle cy="-20" r="3.5" fill={secondary} />
          </g>
        );
      }
      if (card.suit === "swords") {
        return (
          <g transform={"scale(" + scale + ")"}>
            <polygon points="0,-34 5,10 0,18 -5,10" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" />
            <path d="M-15,10 H15" stroke="url(#v-gold-3d-face)" strokeWidth="3" strokeLinecap="round" />
            <rect x="-2.5" y="10" width="5" height="14" fill="url(#v-gold-dark)" />
            <circle cy="26" r="3.5" fill="url(#v-gold)" />
          </g>
        );
      }
      return (
        <g transform={"scale(" + scale + ")"}>
          <circle r="18" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2" />
          <polygon points="0,-14 4,-4 15,-4 6,3 9,13 0,7 -9,13 -6,3 -15,-4 -4,-4" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.6" />
        </g>
      );
    };

    if (isCourt) {
      return (
        <g>
          <SibiliaArcanaFigure cy={136} scale={rankNum === 11 ? 0.86 : 0.94} quality={quality} crowned={rankNum >= 13} />
          <g transform="translate(120, 236)">
            <circle r="34" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2" />
            {renderSuitSymbol(1.1)}
          </g>
        </g>
      );
    }

    const pipCoords = {
      1: [[120, 180]],
      2: [[120, 120], [120, 240]],
      3: [[120, 108], [82, 226], [158, 226]],
      4: [[82, 120], [158, 120], [82, 236], [158, 236]],
      5: [[82, 116], [158, 116], [120, 178], [82, 240], [158, 240]],
      6: [[82, 112], [158, 112], [82, 178], [158, 178], [82, 244], [158, 244]],
      7: [[120, 90], [82, 136], [158, 136], [82, 192], [158, 192], [82, 248], [158, 248]],
      8: [[82, 100], [158, 100], [82, 152], [158, 152], [82, 204], [158, 204], [82, 254], [158, 254]],
      9: [[80, 96], [160, 96], [80, 146], [160, 146], [120, 176], [80, 208], [160, 208], [80, 256], [160, 256]],
      10: [[120, 84], [80, 120], [160, 120], [80, 164], [160, 164], [120, 192], [80, 218], [160, 218], [80, 260], [160, 260]]
    }[rankNum] || [[120, 180]];

    return (
      <g>
        {rankNum === 1 && <circle cx="120" cy="180" r="54" fill="url(#v-astral-core)" />}
        {pipCoords.map(([cx, cy], idx) => (
          <g key={idx} transform={"translate(" + cx + ", " + cy + ")"}>
            {renderSuitSymbol(rankNum === 1 ? 1.55 : rankNum <= 4 ? 0.85 : 0.62)}
          </g>
        ))}
      </g>
    );
  }

  switch (card.archetype) {
    case "fool": return (<g><OracleFacetedBust cy={126} scale={0.92} /><g transform="translate(120, 88)"><circle r="24" fill="url(#v-astral-core)" /><polygon points="0,-24 5,-8 22,-12 10,2 22,16 5,10 0,26 -5,10 -22,16 -10,2 -22,-12 -5,-8" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.8" /><circle r="9" fill="#ffffff" stroke={primary} strokeWidth="1.5" /></g><line x1="62" y1="245" x2="178" y2="115" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" strokeLinecap="round" /><g transform="translate(72, 205)"><polygon points="0,-13 9,-4 12,7 0,13 -12,7 -9,-4" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.4" /><polygon points="0,-8 6,0 0,8 -6,0" fill={secondary} stroke="url(#v-gold)" strokeWidth="0.9" /></g><path d="M40,304 L118,268 L163,274 L196,304 Z" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.6" /></g>);
    case "priestess": return (<g><OracleFacetedBust /><g transform="translate(0, 2)"><path d="M88,68 C74,68 66,78 66,90 C66,102 74,112 88,112 C80,106 76,98 76,90 C76,82 80,74 88,68 Z" fill="url(#v-gold-3d-face)" stroke="#fff8d7" strokeWidth="0.8" /><path d="M152,68 C166,68 174,78 174,90 C174,102 166,112 152,112 C160,106 164,98 164,90 C164,82 160,74 152,68 Z" fill="url(#v-gold-3d-face)" stroke="#fff8d7" strokeWidth="0.8" /><circle cx="120" cy="84" r="16" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1" /></g><g transform="translate(58, 213)"><rect x="-14" y="-26" width="28" height="52" rx="3" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.5" /><text y="4" textAnchor="middle" fill="#fef08a" fontSize="11" fontFamily="Cinzel, serif" fontWeight="bold">B</text></g><g transform="translate(182, 213)"><rect x="-14" y="-26" width="28" height="52" rx="3" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.5" /><text y="4" textAnchor="middle" fill="#c084fc" fontSize="11" fontFamily="Cinzel, serif" fontWeight="bold">J</text></g><g transform="translate(120, 278)"><rect x="-38" y="-14" width="76" height="26" rx="4" fill="#190e29" stroke="url(#v-gold)" strokeWidth="1.8" /><circle r="9" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /></g></g>);
    case "empress": return (<g><OracleFacetedBust /><g transform="translate(120, 76)"><ellipse rx="36" ry="14" fill="none" stroke="url(#v-gold)" strokeWidth="1.5" strokeDasharray="3 3" /><polygon points="0,-18 6,-4 20,-8 10,4 0,0 -10,4 -20,-8 -6,-4" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.8" /></g><g transform="translate(163, 190)"><line x1="0" y1="-22" x2="-10" y2="85" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" /><circle cy="-12" r="13" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="2" /><circle cy="-12" r="6" fill={primary} /></g><g transform="translate(84, 282)"><path d="M0,-24 C18,-24 24,-4 0,16 C-24,-4 -18,-24 0,-24 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" /></g></g>);
    case "emperor": return (<g><rect x="64" y="58" width="112" height="236" rx="4" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.8" /><OracleFacetedBust /><g transform="translate(67, 198)"><circle r="14" fill="url(#v-gold-dark)" stroke="url(#v-gold)" strokeWidth="1.8" /><ellipse cx="0" cy="-28" rx="8" ry="11" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" /><path d="M0,-17 V28 M-11,-8 H11" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" /></g><g transform="translate(173, 276)"><rect x="-24" y="-22" width="42" height="36" rx="4" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.6" /><path d="M-4,-8 C-20,-22 -26,6 -10,8 M4,-8 C20,-22 26,6 10,8" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" strokeLinecap="round" /></g></g>);
    case "hierophant": return (<g><OracleFacetedBust /><g transform="translate(168, 182)"><line x1="0" y1="-42" x2="-8" y2="95" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" /><line x1="-10" y1="-28" x2="10" y2="-28" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" /><line x1="-15" y1="-14" x2="15" y2="-14" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" /><line x1="-20" y1="0" x2="20" y2="0" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" /></g><g transform="translate(120, 282)"><circle r="18" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" /><line x1="-10" y1="-10" x2="10" y2="10" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" /><line x1="10" y1="-10" x2="-10" y2="10" stroke="url(#v-silver)" strokeWidth="2.2" /></g></g>);
    case "lovers": return (<g><g transform="translate(-26, 28) scale(0.78)"><OracleFacetedBust pauldrons={false} /></g><g transform="translate(68, 28) scale(0.78)"><OracleFacetedBust pauldrons={false} /></g><g transform="translate(120, 80)"><path d="M-58,-4 Q-28,-24 0,-6 Q28,-24 58,-4 Q32,12 0,4 Q-32,12 -58,-4 Z" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /><circle r="14" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1.2" /></g></g>);
    case "chariot": return (<g><OracleFacetedBust /><g transform="translate(120, 182)"><polygon points="-38,-12 0,-24 38,-12 26,18 0,26 -26,18" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" /><path d="M-32,-4 Q-16,-18 -6,0 Q-18,12 -32,-4 Z M32,-4 Q16,-18 6,0 Q18,12 32,-4 Z" fill="url(#v-gold-3d-face)" /></g><rect x="52" y="246" width="136" height="48" rx="4" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.8" /></g>);
    case "strength": return (<g><OracleFacetedBust /><path d="M120,54 C104,38 86,42 86,54 C86,66 104,70 120,54 C136,38 154,42 154,54 C154,66 136,70 120,54 Z" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="3" /><g transform="translate(149, 209)"><polygon points="0,-28 22,-18 28,6 16,26 0,32 -16,26 -28,6 -22,-18" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" /><polygon points="0,-18 14,-8 12,12 0,20 -12,12 -14,-8" fill="url(#v-gold-3d-face)" /></g></g>);
    case "hermit": return (<g><OracleFacetedBust /><g transform="translate(158, 144)"><circle r="22" fill="url(#v-astral-core)" /><polygon points="-11,-14 11,-14 15,0 11,14 -11,14 -15,0" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" /><circle r="3.5" fill="#fff" /></g><g transform="translate(77, 228)"><path d="M0,-95 L0,68" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" /></g></g>);
    case "wheel": return (<g><g transform="translate(120, 178)"><circle r="68" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="4" /><circle r="54" fill="none" stroke="url(#v-gold)" strokeWidth="1.4" strokeDasharray="6 4" /><circle r="34" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="2" />{[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (<line key={deg} x1="0" y1="0" x2={Math.cos((deg * Math.PI) / 180) * 68} y2={Math.sin((deg * Math.PI) / 180) * 68} stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />))}<circle r="14" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1.2" /></g></g>);
    case "hanged": return (<g><path d="M36,76 H204" stroke="url(#v-gold-dark)" strokeWidth="6" strokeLinecap="round" /><line x1="120" y1="76" x2="120" y2="140" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" /><g transform="translate(120, 190)"><polygon points="-28,12 28,12 36,68 -36,68" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" /><polygon points="0,-10 12,4 0,18 -12,4" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1" /></g><g transform="translate(120, 278)"><circle r="28" fill="url(#v-astral-core)" /><polygon points="-16,-18 16,-18 20,8 0,22 -20,8" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" /></g></g>);
    case "death": return (<g><OracleFacetedBust /><g transform="translate(163, 106)"><line x1="-8" y1="-28" x2="-24" y2="175" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" /><path d="M-8,-22 C-52,-26 -82,-6 -96,24 C-64,6 -36,0 -10,4 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" /></g><g transform="translate(120, 286)"><circle r="20" fill="url(#v-astral-core)" /><circle r="14" fill="#050308" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" /></g></g>);
    case "temperance": return (<g><path d="M120,130 C76,92 42,110 46,168 C68,162 92,158 120,166 C148,158 172,162 194,168 C198,110 164,92 120,130 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" /><OracleFacetedBust /><path d="M72,182 C108,192 122,216 158,224" fill="none" stroke="#c084fc" strokeWidth="3.5" /><path d="M72,182 C108,192 122,216 158,224" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="4 3" /><g transform="translate(72, 182)"><polygon points="-10,-10 10,-10 6,8 -6,8" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /></g><g transform="translate(158, 224)"><polygon points="-10,-10 10,-10 6,8 -6,8" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="0.9" /></g></g>);
    case "devil": return (<g><path d="M96,86 C64,58 46,78 58,104 M144,86 C176,58 194,78 182,104" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" /><OracleFacetedBust /><g transform="translate(120, 62)"><circle r="16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" /><polygon points="0,13 -9,-10 13,4 -13,4 9,-10" fill="#c084fc" stroke="url(#v-gold)" strokeWidth="1" /></g></g>);
    case "star": return (<g><OracleFacetedBust cy={126} scale={0.92} /><g transform="translate(120, 68)"><circle r="28" fill="url(#v-astral-core)" /><polygon points="0,-24 6,-6 24,0 6,6 0,24 -6,6 -24,0 -6,-6" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1" /><circle r="5" fill="#fff" /></g><g transform="translate(120, 278)"><ellipse rx="48" ry="12" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" /></g></g>);
    case "moon": return (<g><g transform="translate(120, 84)"><circle r="32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2" /><path d="M10,-26 C-14,-22 -24,0 -14,22 C-4,32 14,28 20,20 C2,24 -8,10 -6,-8 C-4,-20 6,-24 10,-26 Z" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /></g><g transform="translate(58, 198)"><rect x="-14" y="-42" width="28" height="96" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.6" /><polygon points="-16,-42 0,-58 16,-42" fill="url(#v-gold-3d-face)" /></g><g transform="translate(182, 198)"><rect x="-14" y="-42" width="28" height="96" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.6" /><polygon points="-16,-42 0,-58 16,-42" fill="url(#v-silver)" /></g></g>);
    case "sun": return (<g><OracleFacetedBust cy={138} scale={0.88} /><g transform="translate(120, 84)"><circle r="42" fill="url(#v-astral-core)" /><polygon points="0,-42 8,-18 30,-30 18,-8 42,0 18,8 30,30 8,18 0,42 -8,18 -30,30 -18,8 -42,0 -18,-8 -30,-30 -8,-18" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /><circle r="18" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="1.4" /></g></g>);
    case "judgement": return (<g><path d="M120,88 C68,54 38,76 46,124 C74,116 96,112 120,120 C144,112 166,116 194,124 C202,76 172,54 120,88 Z" fill="url(#v-gold-3d-face)" opacity="0.85" /><OracleFacetedBust cy={104} scale={0.86} /><g transform="translate(120, 282)"><polygon points="-48,-12 48,-12 36,16 -36,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2" /></g></g>);
    case "magician": return (<g><OracleFacetedBust cy={132} scale={0.92} /><path d="M120,56 C104,40 86,44 86,56 C86,68 104,72 120,56 C136,40 154,44 154,56 C154,68 136,72 120,56 Z" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" /><g transform="translate(174, 118)"><line x1="0" y1="-34" x2="0" y2="34" stroke="url(#v-gold-3d-face)" strokeWidth="3.5" strokeLinecap="round" /><circle cy="-36" r="6" fill={primary} stroke="#fff" strokeWidth="1" /></g><g transform="translate(120, 276)"><rect x="-56" y="-12" width="112" height="24" rx="4" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.6" /><circle cx="-30" r="5" fill={primary} /><circle cx="-10" r="5" fill={secondary} /><polygon points="10,-6 16,6 4,6" fill="url(#v-silver)" /><circle cx="32" r="5" fill="url(#v-gold-3d-face)" /></g></g>);
    case "tower": return (<g><g transform="translate(120, 186)"><polygon points="-28,-74 28,-74 36,96 -36,96" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="2" /><polygon points="-32,-74 -18,-94 -4,-78 0,-98 14,-78 28,-94 34,-74" fill="url(#v-gold-3d-face)" stroke="#fff" strokeWidth="0.9" /><path d="M68,-112 L18,-62 L34,-54 L-18,-4" fill="none" stroke={primary} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M68,-112 L18,-62 L34,-54 L-18,-4" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></g></g>);
    case "world": return (<g><g transform="translate(120, 180)"><ellipse rx="54" ry="86" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="4" /><ellipse rx="46" ry="76" fill="none" stroke={secondary} strokeWidth="1.4" strokeDasharray="5 4" /></g><OracleFacetedBust cy={142} scale={0.84} /><circle cx="56" cy="82" r="9" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.4" /><circle cx="184" cy="82" r="9" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.4" /><circle cx="56" cy="278" r="9" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.4" /><circle cx="184" cy="278" r="9" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.4" /></g>);
    case "justice":
    default:
      return (<g><OracleFacetedBust /><g transform="translate(67, 137)"><polygon points="0,-68 6,28 0,36 -6,28" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" /><path d="M-20,28 H20" stroke="url(#v-gold-3d-face)" strokeWidth="3.5" strokeLinecap="round" /></g><g transform="translate(173, 198)"><line x1="-22" y1="-16" x2="22" y2="-16" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" /><line x1="0" y1="-28" x2="0" y2="8" stroke="url(#v-gold-3d-face)" strokeWidth="2" /><path d="M-22,-16 L-30,8 H-14 Z M22,-16 L14,8 H30 Z" fill="none" stroke="url(#v-gold)" strokeWidth="1.2" /></g></g>);
  }
};

// --- 5. FONDO GRABADO EN LÁSER CON ROTACIÓN GPU PURA (CERO RE-RENDERS REACT) ---
const SacredGeometryBackplate = memo(function SacredGeometryBackplate({
  card,
  quality = "ULTRA",
  angle,
  offsetX = 0,
  offsetY = 0,
  paused = false
}) {
  const isUltra = quality === "ULTRA";
  const isLow = quality === "LOW";
  const hasExternalAngle = typeof angle === "number" && angle !== 0;

  const gridLinesX = useMemo(() => Array.from({ length: 11 }, (_, i) => (i + 1) * 20), []);
  const gridLinesY = useMemo(() => Array.from({ length: 18 }, (_, i) => (i + 1) * 20), []);
  const ticks = useMemo(() => Array.from({ length: 48 }, (_, i) => i * 7.5), []);
  const hexAngles = [0, 60, 120, 180, 240, 300];

  const outerPos = "translate(" + (120 + offsetX) + ", " + (165 + offsetY) + ")";
  const innerRot = hasExternalAngle && !isLow ? "rotate(" + angle + ")" : undefined;
  const spinClass = !hasExternalAngle && !isLow ? ("velo-gpu-spin-slow" + (paused ? " velo-gpu-paused" : "")) : undefined;

  return (
    <svg viewBox="0 0 240 380" className="w-full h-full pointer-events-none">
      <g clipPath="url(#diorama-window-clip)">
        <rect width="240" height="380" fill="url(#v-obsidian-deep)" />

        <g transform={"translate(" + (offsetX * 0.4) + ", " + (offsetY * 0.4) + ")"} opacity="0.16">
          {gridLinesX.map((x) => (
            <line key={"gx-" + x} x1={x} y1="-20" x2={x} y2="400" stroke="#d99a26" strokeWidth="0.25" />
          ))}
          {gridLinesY.map((y) => (
            <line key={"gy-" + y} x1="-20" y1={y} x2="260" y2={y} stroke="#d99a26" strokeWidth="0.25" />
          ))}
        </g>

        <circle cx={120 + offsetX * 0.6} cy={155 + offsetY * 0.6} r="135" fill="url(#v-amethyst-halo)" />

        <g transform={outerPos} opacity="0.54">
          <g transform={innerRot} className={spinClass}>
            <circle cx="0" cy="0" r="98" fill="none" stroke="url(#v-gold)" strokeWidth="0.45" />
            <circle cx="0" cy="0" r="92" fill="none" stroke="url(#v-gold)" strokeWidth="0.28" strokeDasharray="1.5 3" />
            <circle cx="0" cy="0" r="76" fill="none" stroke="url(#v-gold)" strokeWidth="0.38" />
            {ticks.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const r1 = deg % 30 === 0 ? 83 : 88.5;
              const r2 = 97.5;
              return (
                <line
                  key={deg}
                  x1={Math.cos(rad) * r1}
                  y1={Math.sin(rad) * r1}
                  x2={Math.cos(rad) * r2}
                  y2={Math.sin(rad) * r2}
                  stroke="#ffe074"
                  strokeWidth={deg % 30 === 0 ? "0.6" : "0.24"}
                />
              );
            })}
            {hexAngles.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={Math.cos(rad) * 32}
                  cy={Math.sin(rad) * 32}
                  r="32"
                  fill="none"
                  stroke="url(#v-gold)"
                  strokeWidth="0.28"
                />
              );
            })}
            {isUltra && (
              <g opacity="0.75">
                <circle cx="0" cy="0" r="64" fill="none" stroke="#c084fc" strokeWidth="0.25" strokeDasharray="2 4" />
                <polygon points="0,-92 80,46 -80,46" fill="none" stroke="url(#v-gold)" strokeWidth="0.25" />
                <polygon points="0,92 80,-46 -80,-46" fill="none" stroke="url(#v-gold)" strokeWidth="0.25" />
              </g>
            )}
            <polygon points="0,-76 66,38 -66,38" fill="none" stroke="url(#v-gold)" strokeWidth="0.38" />
            <polygon points="0,76 66,-38 -66,-38" fill="none" stroke="url(#v-gold)" strokeWidth="0.38" />
          </g>
        </g>

        <g
          transform={"translate(" + (offsetX * 0.5) + ", " + (offsetY * 0.5) + ")"}
          stroke="#fff8d7"
          strokeWidth="0.3"
          opacity="0.42"
          fill="#fff8d7"
        >
          <circle cx="42" cy="68" r="1" /><circle cx="64" cy="52" r="0.7" /><line x1="42" y1="68" x2="64" y2="52" />
          <circle cx="198" cy="68" r="1" /><circle cx="176" cy="52" r="0.7" /><line x1="198" y1="68" x2="176" y2="52" />
          <circle cx="38" cy="248" r="0.9" /><circle cx="202" cy="248" r="0.9" />
        </g>
      </g>
    </svg>
  );
});

// --- 6. RESOLUCIÓN DE CARTAS MODULARES (/cartas/*.js) ---
function resolveRegisteredCard(card) {
  if (!card) return null;
  const reg = window.ARCANA_REGISTRY || {};
  return (
    reg[card.archetype] ||
    reg[card.id] ||
    reg[String(card.id)] ||
    reg[card.numeral] ||
    null
  );
}

const MidgroundArchitecture = memo(function MidgroundArchitecture({
  card,
  quality = "ULTRA",
  angle = 0,
  offsetX = 0,
  offsetY = 0
}) {
  const entry = resolveRegisteredCard(card);
  const MidgroundComp = entry && entry.Midground ? entry.Midground : null;

  return (
    <svg viewBox="0 0 240 380" className="w-full h-full pointer-events-none">
      <g clipPath="url(#diorama-window-clip)">
        <g transform={"translate(" + offsetX + ", " + offsetY + ")"}>
          {MidgroundComp ? (
            <MidgroundComp card={card} quality={quality} angle={angle} />
          ) : (
            <path
              d="M32,306 V98 Q32,38 120,28 Q208,38 208,98 V306"
              fill="none"
              stroke="url(#v-gold)"
              strokeWidth="0.75"
              strokeDasharray="4 2"
              opacity="0.55"
            />
          )}
        </g>
      </g>
    </svg>
  );
});

const CharacterPrimaryLayer = memo(function CharacterPrimaryLayer({
  card,
  quality = "ULTRA",
  angle = 0,
  offsetX = 0,
  offsetY = 0,
  fgOffsetX = 0,
  fgOffsetY = 0
}) {
  const entry = resolveRegisteredCard(card);
  const PrimaryComp = entry && entry.Primary ? entry.Primary : null;
  const ForegroundComp = entry && entry.Foreground ? entry.Foreground : null;

  return (
    <svg viewBox="0 0 240 380" className="w-full h-full pointer-events-none">
      <g clipPath="url(#diorama-window-clip)">
        <g transform={"translate(" + offsetX + ", " + offsetY + ")"}>
          {PrimaryComp ? (
            <PrimaryComp card={card} quality={quality} angle={angle} />
          ) : (
            renderCardArt(card, quality)
          )}
        </g>

        {ForegroundComp && (
          <g transform={"translate(" + fgOffsetX + ", " + fgOffsetY + ")"}>
            <ForegroundComp card={card} quality={quality} angle={angle} />
          </g>
        )}

        <rect width="240" height="380" fill="url(#v-void-vignette)" />
      </g>
    </svg>
  );
});

// --- 7. MARCO RELICARIO AAA EN RELIEVE Y TIPOGRAFÍA 3D ---
const ReliquaryFrame3D = memo(function ReliquaryFrame3D({ card }) {
  const entry = resolveRegisteredCard(card);
  const safeCard = {
    numeral: (entry && entry.numeral) || (card && card.numeral) || "I",
    name: (entry && entry.name) || (card && card.name) || "Arcano",
    subtitle: (card && card.subtitle) || (entry && entry.subtitle) || "Oráculo del Velo"
  };

  return (
    <svg viewBox="0 0 240 380" className="w-full h-full pointer-events-none">
      <path d="M 18,310 V 88 Q 18,24 120,16 Q 222,24 222,88 V 310" fill="none" stroke="#020105" strokeWidth="7.5" opacity="0.88" />
      <path d="M 6,6 H 234 V 374 H 6 Z M 18,308 V 86 Q 18,22 120,14 Q 222,22 222,86 V 308 Z" fill="url(#v-obsidian-deep)" fillRule="evenodd" />
      <path d="M 16,52 Q 38,24 74,16" fill="none" stroke="url(#v-gold)" strokeWidth="0.9" opacity="0.75" />
      <path d="M 224,52 Q 202,24 166,16" fill="none" stroke="url(#v-gold)" strokeWidth="0.9" opacity="0.75" />
      <rect x="6" y="6" width="228" height="368" rx="14" fill="none" stroke="#1c0d06" strokeWidth="4.5" />
      <rect x="6" y="6" width="228" height="368" rx="14" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />
      <rect x="10" y="10" width="220" height="360" rx="11" fill="none" stroke="url(#v-gold)" strokeWidth="0.8" opacity="0.75" />
      <path d="M 18,308 V 86 Q 18,22 120,14 Q 222,22 222,86 V 308" fill="none" stroke="#1c0d06" strokeWidth="5" />
      <path d="M 18,308 V 86 Q 18,22 120,14 Q 222,22 222,86 V 308" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />
      <path d="M 21.5,306 V 87 Q 21.5,26 120,18 Q 218.5,26 218.5,87 V 306" fill="none" stroke="#fff9e2" strokeWidth="0.6" opacity="0.75" />

      <g transform="translate(18, 185)"><polygon points="0,-12 6,0 0,12 -6,0" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" /><circle r="2" fill="#fef08a" /></g>
      <g transform="translate(222, 185)"><polygon points="0,-12 6,0 0,12 -6,0" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" /><circle r="2" fill="#fef08a" /></g>

      <g transform="translate(12, 12)"><use href="#v-corner-3d" /></g>
      <g transform="translate(228, 12) scale(-1, 1)"><use href="#v-corner-3d" /></g>
      <g transform="translate(12, 368) scale(1, -1)"><use href="#v-corner-3d" /></g>
      <g transform="translate(228, 368) scale(-1, -1)"><use href="#v-corner-3d" /></g>

      <g transform="translate(120, 23)">
        <path d="M-34,2.5 L-20,-5.5 H20 L34,2.5 L20,10.5 H-20 Z" fill="#020105" opacity="0.9" />
        <path d="M-34,0 L-20,-8 H20 L34,0 L20,8 H-20 Z" fill="url(#v-bronze-extrude)" stroke="url(#v-gold)" strokeWidth="1.1" />
        <polygon points="-18,-9.5 18,-9.5 25,2.5 18,14.5 -18,14.5 -25,2.5" fill="#020105" opacity="0.9" />
        <polygon points="-18,-12 18,-12 25,0 18,12 -18,12 -25,0" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2" />
        <polygon points="-15,-9 15,-9 21,0 15,9 -15,9 -21,0" fill="none" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.8" />
        <circle cx="-20" cy="0" r="1.4" fill="#fff9e2" />
        <circle cx="20" cy="0" r="1.4" fill="#fff9e2" />
        <Gold3DText x={0} y={4} fontSize={10.5} letterSpacing={1.2}>
          {safeCard.numeral}
        </Gold3DText>
      </g>

      <g>
        <path d="M 14,315 L 26,303 H 214 L 226,315 L 216,361 H 24 Z" fill="#020105" opacity="0.95" />
        <path d="M 14,312 L 26,300 H 214 L 226,312 L 216,358 H 24 Z" fill="url(#v-bronze-extrude)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="22,313 30,304 210,304 218,313 210,353 30,353" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
        <path d="M 46,335 H 194" stroke="url(#v-gold)" strokeWidth="0.7" opacity="0.75" />
        <polygon points="120,332.5 125,335 120,337.5 115,335" fill="url(#v-gold-3d-face)" />
        <circle cx="26" cy="328" r="2" fill="url(#v-gold-3d-face)" />
        <circle cx="214" cy="328" r="2" fill="url(#v-gold-3d-face)" />

        <Gold3DText x={120} y={326} fontSize={14} letterSpacing={1.4}>
          {(safeCard.name || "").toUpperCase()}
        </Gold3DText>

        <text x="120" y="347" textAnchor="middle" fill="#e9d5ff" fontSize="6.6" fontFamily="'Cinzel', serif" fontWeight="700" letterSpacing="1.8">
          {(safeCard.subtitle || "").toUpperCase()}
        </text>
      </g>
    </svg>
  );
});

// --- 8. COMPONENTE UNIFICADO ArcanaDioramaArt (CERO RE-RENDERS POR SEGUNDO) ---
const ArcanaDioramaArt = memo(function ArcanaDioramaArt({
  card,
  quality = "ULTRA",
  layer = "all",
  angle: externalAngle,
  offsetX = 0,
  offsetY = 0,
  paused = false
}) {
  const activeAngle = externalAngle !== undefined ? externalAngle : 0;

  if (layer === "backplate" || layer === "background") {
    return (
      <SacredGeometryBackplate
        card={card}
        quality={quality}
        angle={externalAngle}
        offsetX={offsetX}
        offsetY={offsetY}
        paused={paused}
      />
    );
  }
  if (layer === "midground") {
    return <MidgroundArchitecture card={card} quality={quality} angle={activeAngle} offsetX={offsetX} offsetY={offsetY} />;
  }
  if (layer === "character" || layer === "primary") {
    return (
      <CharacterPrimaryLayer
        card={card}
        quality={quality}
        angle={activeAngle}
        offsetX={offsetX}
        offsetY={offsetY}
        fgOffsetX={offsetX * 1.65}
        fgOffsetY={offsetY * 1.65}
      />
    );
  }
  if (layer === "frame") {
    return <ReliquaryFrame3D card={card} quality={quality} />;
  }

  return (
    <div className="relative w-full h-full select-none pointer-events-none">
      <div className="absolute inset-0">
        <SacredGeometryBackplate card={card} quality={quality} angle={externalAngle} offsetX={offsetX * -14} offsetY={offsetY * -14} paused={paused} />
      </div>
      <div className="absolute inset-0">
        <MidgroundArchitecture card={card} quality={quality} angle={activeAngle} offsetX={offsetX * -7} offsetY={offsetY * -7} />
      </div>
      <div className="absolute inset-0">
        <CharacterPrimaryLayer
          card={card}
          quality={quality}
          angle={activeAngle}
          offsetX={offsetX * 4}
          offsetY={offsetY * 4}
          fgOffsetX={offsetX * 7.5}
          fgOffsetY={offsetY * 7.5}
        />
      </div>
      <div className="absolute inset-0">
        <ReliquaryFrame3D card={card} quality={quality} />
      </div>
    </div>
  );
});

window.SharedArtDefs = SharedArtDefs;
window.CardBackDefs = CardBackDefs;
window.CardBackSprite = CardBackSprite;
window.prewarmCardBackSprite = prewarmCardBackSprite;
window.getCardBackSpriteUrl = getCardBackSpriteUrl;
window.useCardBackSpriteUrl = useCardBackSpriteUrl;
window.Gold3DText = Gold3DText;
window.LivingEnergyCore = LivingEnergyCore;
window.SibiliaArcanaFigure = SibiliaArcanaFigure;
window.OracleFacetedBust = OracleFacetedBust;
window.renderCardArt = renderCardArt;
window.SacredGeometryBackplate = SacredGeometryBackplate;
window.MidgroundArchitecture = MidgroundArchitecture;
window.CharacterPrimaryLayer = CharacterPrimaryLayer;
window.ReliquaryFrame3D = ReliquaryFrame3D;
window.ArcanaDioramaArt = ArcanaDioramaArt;
window.ArtV1B = ArcanaDioramaArt;
`;

(function compileTarotDioramaRenderer() {
  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + TAROT_DIORAMA_RENDERER_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Orquestador Diorama AAA + Sprite de Dorso GPU inicializados.", "color: #fde047; font-weight: bold;");
  } else {
    console.error("Babel no está cargado antes de tarot_diorama_renderer.js");
  }
})();
// --- FIN DEL ARCHIVO ---

// ============================================================================
// ARCHIVO: motor_tirada_trina.js
// Motor Ritual OPTIMIZADO de la Tirada Trina ("El Hilo de las Tres Lunas")
// GPU Sprite PNG • Cometas CSS • Sin backdrop-blur pesado • Cero Layout Shifts
// Compatible 100% con protocolo local file:/// (Sin bloqueo CORS de Babel y Scope Aislado)
// ============================================================================

const MOTOR_TIRADA_TRINA_SOURCE = `
const { useState, useEffect, useRef, useMemo, useCallback, memo } = React;
const Motion = window.Motion || {};
const { motion, useSpring, useMotionValue } = Motion;

const sound = window.sound;
const ArtV1B = window.ArcanaDioramaArt;
const TAU = Math.PI * 2;
const GOLDEN_ANGLE = 2.399963229728653;

// Copia segura al portapapeles: delega en window.copyTextSafe (motor_tarot.js)
function copyTextSafe(text) {
  if (!text) return Promise.resolve(false);
  if (typeof window.copyTextSafe === "function") {
    return window.copyTextSafe(text);
  }
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    return navigator.clipboard.writeText(text).then(function () { return true; }).catch(function () { return false; });
  }
  return Promise.resolve(false);
}

// --- Inyección única de keyframes GPU para el Hilo de Oro Astral (Cero loops JS) ---
(function injectTrinaGpuStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("velo-trina-gpu-styles")) return;
  const style = document.createElement("style");
  style.id = "velo-trina-gpu-styles";
  style.textContent =
    "@keyframes trinaCometSlide { 0% { transform: translate3d(0, 2px, 0); opacity: 0; } 18% { opacity: 1; } 82% { opacity: 1; } 100% { transform: translate3d(0, 62px, 0); opacity: 0; } } " +
    "@keyframes trinaArrowFloat { 0%, 100% { transform: translate3d(0, 0px, 0); } 50% { transform: translate3d(0, 3px, 0); } } " +
    ".trina-comet { animation: trinaCometSlide 2.1s ease-in-out infinite; will-change: transform, opacity; } " +
    ".trina-comet-delay { animation: trinaCometSlide 1.95s ease-in-out 0.45s infinite; will-change: transform, opacity; } " +
    ".trina-arrow-float { animation: trinaArrowFloat 1.6s ease-in-out infinite; will-change: transform; } " +
    "@media (prefers-reduced-motion: reduce) { .trina-comet, .trina-comet-delay, .trina-arrow-float { animation: none !important; } }";
  document.head.appendChild(style);
})();

// --- Íconos SVG locales (aislados del scope de motor_tirada.js) ---
const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);
const SunIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const MoonIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const FlameIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);
const CompassIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const RotateCcwIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);
const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

// --- Dorso GPU: usa directamente el PNG pre-horneado de tarot_diorama_renderer.js ---
const FallbackCardBack = memo(function FallbackCardBack({ quality = "HIGH" }) {
  const BakedSprite = window.CardBackSprite;
  if (BakedSprite) {
    return (
      <div className="relative w-full h-full select-none rounded-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
        <BakedSprite quality={quality} />
      </div>
    );
  }
  return (
    <div className="relative w-full h-full select-none rounded-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
      <svg viewBox="0 0 512 768" className="w-full h-full">
        <rect x="16" y="16" width="480" height="736" rx="28" fill="#17111f" stroke="#d4af37" strokeWidth="6" />
        <rect x="34" y="34" width="444" height="700" rx="18" fill="#21112f" stroke="#ffd96a" strokeOpacity="0.65" strokeWidth="2" />
        <ellipse cx="256" cy="384" rx="118" ry="214" fill="none" stroke="#d4af37" strokeOpacity="0.55" strokeWidth="2" />
        <circle cx="256" cy="374" r="56" fill="#281431" stroke="#ffd85e" strokeWidth="3" />
      </svg>
    </div>
  );
});

// ============================================================================
// 1. GUION DE SIBILIA Y AUDIO RITUAL PARA LOS 3 ACTOS
// ============================================================================
const ACT_LABELS = [
  { key: "past", numeral: "I", name: "Pasado", ritual: "La Raíz del Hilo", shuffleName: "Barajada Clásica del Origen" },
  { key: "present", numeral: "II", name: "Presente", ritual: "El Pulso Vivo", shuffleName: "Corte Alquímico en Doble Hélice" },
  { key: "future", numeral: "III", name: "Futuro", ritual: "El Horizonte que se Abre", shuffleName: "Vórtice de Singularidad Áurea" }
];

function getTrinaDialogue(phase, actIndex, pickedCards) {
  if (phase === "SHUFFLING") {
    if (actIndex === 0) {
      return "Acto I • El Pasado. Dejá que el mazo despierte la raíz invisible de lo que hoy te trae hasta este altar...";
    }
    if (actIndex === 1) {
      return "La primera carta ya descansa sellada. Ahora las fuerzas se cruzan en doble hélice para revelar tu Presente...";
    }
    return "Dos lunas custodian tu camino. El mazo gira en vórtice áureo para condensar el horizonte de tu Futuro...";
  }

  if (phase === "SPREAD") {
    if (actIndex === 0) {
      return "Elegí tu primera carta: la raíz del Pasado que todavía respira debajo de tu historia actual.";
    }
    if (actIndex === 1) {
      return "Pasado sellado. Deslizá tu mano y elegí la segunda carta: el pulso exacto de tu Presente.";
    }
    return "Último umbral. Elegí la tercera carta del abanico para cerrar el Hilo de las Tres Lunas y abrir el Futuro.";
  }

  if (phase === "CRACKING") {
    return "¡Las tres lunas convergen en un solo hilo dorado! Sostené la mirada mientras se rasga el velo del tiempo...";
  }

  if (phase === "REVEAL") {
    const names = (pickedCards || []).map(function (c) { return c.name; }).join(" → ");
    return names
      ? ("El Hilo de las Tres Lunas se ha revelado: " + names + ". Descendé siguiendo la luz para leer tu crónica completa.")
      : "El Hilo de las Tres Lunas está abierto ante vos.";
  }

  return "El Hilo de las Tres Lunas aguarda tu intención.";
}

function playTrinaShuffleAudio(actIndex) {
  if (!sound) return [];
  const timers = [];
  const schedule = function (ms, fn) {
    timers.push(setTimeout(fn, ms));
  };

  sound.init && sound.init();

  if (actIndex === 1) {
    sound.playHeavyCardThud && sound.playHeavyCardThud(0.95);
    [220, 340, 460, 580, 720, 860, 1000, 1140, 1280, 1440, 1620, 1820, 2050].forEach(function (ms, idx) {
      schedule(ms, function () {
        sound.playHeavyCardThud && sound.playHeavyCardThud(idx % 2 === 0 ? 0.85 : 1.12);
        if (idx % 3 === 0) sound.playHarpNote && sound.playHarpNote((idx / 3) % 6);
      });
    });
  } else if (actIndex === 2) {
    sound.playHeavyCardThud && sound.playHeavyCardThud(1.1);
    [160, 360, 540, 700, 840, 960, 1070, 1170, 1260, 1340, 1420, 1520, 1680, 1920, 2180].forEach(function (ms, idx) {
      schedule(ms, function () {
        sound.playHeavyCardThud && sound.playHeavyCardThud(0.75 + Math.min(0.65, idx * 0.045));
        if (idx === 6 || idx === 11 || idx === 14) {
          sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(idx % 3);
        }
      });
    });
  } else {
    sound.playHeavyCardThud && sound.playHeavyCardThud(1);
    [180, 380, 590, 820, 1060, 1320, 1580, 1860, 2150].forEach(function (ms, i) {
      schedule(ms, function () {
        sound.playHeavyCardThud && sound.playHeavyCardThud(0.8 + (i % 5) * 0.08);
      });
    });
  }

  return timers;
}

// ============================================================================
// 2. LAS DOS NUEVAS ANIMACIONES DE BARAJADO (GPU PURA CON SPRITE PNG)
// ============================================================================
const TrinaShuffleDeck = memo(function TrinaShuffleDeck({
  actIndex,
  shuffleCards,
  quality,
  isMobile,
  isDesktop,
  isWideDesktop,
  CardBackComponent
}) {
  const CardBack = CardBackComponent || FallbackCardBack;
  const total = shuffleCards.length || 12;
  const isUltra = quality === "ULTRA";

  const cardSizeClass = "absolute w-28 h-44 sm:w-36 sm:h-56 lg:w-[180px] lg:h-[276px] xl:w-[208px] xl:h-[320px]";

  // ACTO II: CORTE ALQUÍMICO EN DOBLE HÉLICE (CERO filter: blur)
  if (actIndex === 1) {
    const splitX = isMobile ? 92 : isWideDesktop ? 245 : isDesktop ? 200 : 148;
    const waveY = isMobile ? 36 : isDesktop ? 64 : 48;

    return (
      <div className="relative z-20 w-full h-64 sm:h-76 lg:h-[340px] xl:h-[390px] flex items-center justify-center mt-2 mb-6" style={{ perspective: "1200px", contain: "layout style" }}>
        {/* Halo central suave en radial-gradient puro (0 filter blur) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: [0, 0.72, 0.38, 0.85, 0], scale: [0.55, 1.15, 0.92, 1.28, 0.7] }}
          transition={{ duration: 2.35, ease: "easeInOut" }}
          className="absolute w-56 h-56 lg:w-80 lg:h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(192,132,252,0.42) 0%, rgba(251,191,36,0.2) 42%, rgba(168,85,247,0.06) 66%, transparent 78%)",
            willChange: "transform, opacity"
          }}
        />

        {shuffleCards.map(function (card, i) {
          const side = i % 2 === 0 ? -1 : 1;
          const pairIndex = Math.floor(i / 2);
          const normPos = (pairIndex / Math.max(1, total / 2 - 1)) * 2 - 1;
          const helixAngle = (i / total) * TAU * 1.5;

          return (
            <motion.div
              key={card.id + "-helix-" + i}
              initial={{ x: 0, y: -i * 1.2, rotateZ: 0, rotateY: 0, scale: 1 }}
              animate={{
                x: [
                  0,
                  side * splitX,
                  side * Math.cos(helixAngle) * (splitX * 0.72),
                  side * 16,
                  0
                ],
                y: [
                  -i * 1.2,
                  normPos * (waveY * 0.45) - 10,
                  Math.sin(helixAngle) * waveY - 14,
                  -pairIndex * (isDesktop ? 4.2 : 3) - 18,
                  -i * (isDesktop ? 1.5 : 1.1)
                ],
                rotateZ: [
                  0,
                  side * -14,
                  side * 22 * Math.sin(helixAngle),
                  side * 6,
                  0
                ],
                rotateY: isUltra ? [0, side * 28, side * -38, side * 12, 0] : [0, side * 14, side * -18, 0, 0],
                scale: [1, 0.96, 1.06, 1.02, 1]
              }}
              transition={{
                duration: 2.25,
                times: [0, 0.24, 0.56, 0.82, 1],
                ease: "easeInOut",
                delay: pairIndex * 0.032 + (side === 1 ? 0.015 : 0)
              }}
              style={{ zIndex: 10 + i, willChange: "transform" }}
              className={cardSizeClass}
            >
              <CardBack isCracking={false} quality={quality} fastMotion={true} />
            </motion.div>
          );
        })}
      </div>
    );
  }

  // ACTO III: VÓRTICE DE SINGULARIDAD ÁUREA
  const maxRadius = isMobile ? 115 : isWideDesktop ? 295 : isDesktop ? 240 : 180;
  const maxRadiusY = isMobile ? 62 : isWideDesktop ? 132 : isDesktop ? 110 : 88;

  return (
    <div className="relative z-20 w-full h-64 sm:h-76 lg:h-[340px] xl:h-[390px] flex items-center justify-center mt-2 mb-6" style={{ perspective: "1300px", contain: "layout style" }}>
      {/* Núcleo de Singularidad Áurea */}
      <motion.div
        initial={{ opacity: 0, scale: 0.25, rotate: 0 }}
        animate={{ opacity: [0, 0.85, 1, 0.4, 0], scale: [0.25, 1.25, 0.65, 1.5, 0.3], rotate: [0, 180, 360] }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        className="absolute w-52 h-52 lg:w-76 lg:h-76 rounded-full pointer-events-none border border-amber-300/35"
        style={{
          background: "radial-gradient(circle, rgba(254,240,138,0.62) 0%, rgba(245,158,11,0.26) 38%, rgba(168,85,247,0.14) 65%, transparent 78%)",
          willChange: "transform, opacity"
        }}
      />

      {shuffleCards.map(function (card, i) {
        const theta1 = i * GOLDEN_ANGLE;
        const theta2 = theta1 + Math.PI * 1.65;
        const rFactor = 0.45 + 0.55 * Math.sqrt((i + 1) / total);

        const x1 = Math.cos(theta1) * maxRadius * rFactor;
        const y1 = Math.sin(theta1) * maxRadiusY * rFactor;
        const x2 = Math.cos(theta2) * (maxRadius * 0.42) * rFactor;
        const y2 = Math.sin(theta2) * (maxRadiusY * 0.42) * rFactor;

        return (
          <motion.div
            key={card.id + "-vortex-" + i}
            initial={{ x: 0, y: 0, rotateZ: 0, scale: 0.92 }}
            animate={{
              x: [0, x1, x2, Math.cos(theta2 + 1.4) * 18, 0],
              y: [0, y1, y2, Math.sin(theta2 + 1.4) * 12 - 14, -i * (isDesktop ? 1.5 : 1.1)],
              rotateZ: [
                0,
                (theta1 * 180) / Math.PI + 90,
                (theta2 * 180) / Math.PI + 270,
                (i - total / 2) * 4,
                0
              ],
              rotateY: isUltra ? [0, 32, -26, 180, 0] : [0, 18, -14, 0, 0],
              scale: [0.95, 0.84, 0.72, 1.09, 1]
            }}
            transition={{
              duration: 2.3,
              times: [0, 0.28, 0.62, 0.86, 1],
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.018
            }}
            style={{ zIndex: 10 + i, willChange: "transform" }}
            className={cardSizeClass}
          >
            <CardBack isCracking={false} quality={quality} fastMotion={true} />
          </motion.div>
        );
      })}
    </div>
  );
});

// ============================================================================
// 3. ALTAR DE CUSTODIA (POSICIÓN ABSOLUTA = CERO LAYOUT SHIFTS)
// ============================================================================
const TrinaAltarTray = memo(function TrinaAltarTray({ pickedCards, currentAct, phase }) {
  const isConverging = phase === "CRACKING";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28 }}
      className="relative z-30 flex items-center justify-center gap-2.5 sm:gap-5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-[#090514]/94 border border-[#d4af37]/45 shadow-[0_10px_28px_rgba(0,0,0,0.82)]"
      style={{ contain: "layout style" }}
    >
      <div
        aria-hidden
        className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1.5px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(253,224,71,0.15) 0%, rgba(253,224,71,0.65) 50%, rgba(192,132,252,0.55) 100%)"
        }}
      />

      {ACT_LABELS.map(function (slot, idx) {
        const isSealed = Boolean(pickedCards && pickedCards[idx]);
        const isCurrent = !isSealed && idx === currentAct && phase !== "CRACKING";

        return (
          <motion.div
            key={slot.key}
            animate={
              isConverging
                ? { scale: 1.06, x: (1 - idx) * 16 }
                : { scale: isCurrent ? 1.04 : 1, x: 0 }
            }
            transition={{ duration: 0.4 }}
            className={
              "relative z-10 flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl border transition-colors duration-300 " +
              (isSealed
                ? "bg-gradient-to-r from-[#261606] via-[#1b0f2d] to-[#261606] border-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.38)]"
                : isCurrent
                ? "bg-[#160b2a] border-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.24)]"
                : "bg-[#080410]/95 border-white/15 opacity-65")
            }
          >
            <div
              className={
                "w-5 h-7 sm:w-6 sm:h-9 rounded-[4px] border flex items-center justify-center flex-shrink-0 " +
                (isSealed
                  ? "bg-gradient-to-b from-amber-400 via-amber-600 to-purple-900 border-amber-100 text-black"
                  : isCurrent
                  ? "bg-amber-500/15 border-amber-400/80 border-dashed text-amber-300"
                  : "bg-white/[0.03] border-white/20 border-dashed text-white/30")
              }
            >
              {isSealed ? (
                <SparklesIcon className="w-3 h-3 text-[#090512]" />
              ) : (
                <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[9px] font-bold">{slot.numeral}</span>
              )}
            </div>

            <div className="flex flex-col text-left leading-tight w-[66px] sm:w-[78px]">
              <span
                style={{ fontFamily: "'Cinzel', serif" }}
                className={
                  "text-[9px] sm:text-[10px] uppercase tracking-[0.14em] font-bold truncate " +
                  (isSealed ? "text-amber-300" : isCurrent ? "text-amber-200" : "text-purple-200/55")
                }
              >
                {slot.numeral}. {slot.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-100/70 truncate">
                {isSealed ? "✦ Sellada" : isCurrent ? (phase === "SHUFFLING" ? "Barajando..." : "Elegí carta") : "En espera"}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
});

// ============================================================================
// 4. DIORAMA 2.5D OPTIMIZADO (BRILLO ESPECULAR POR TRANSFORM GPU, 0 REPAINT)
// ============================================================================
const TrinaDiorama25D = memo(function TrinaDiorama25D({
  card,
  activeNode,
  onSelectNode,
  quality,
  isVisible,
  onTogglePolarity
}) {
  const cardRef = useRef(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glareOffsetX = useMotionValue(0);
  const glareOffsetY = useMotionValue(0);
  const smoothRotX = useSpring(rotX, { stiffness: 150, damping: 18 });
  const smoothRotY = useSpring(rotY, { stiffness: 150, damping: 18 });
  const smoothGlareX = useSpring(glareOffsetX, { stiffness: 150, damping: 20 });
  const smoothGlareY = useSpring(glareOffsetY, { stiffness: 150, damping: 20 });

  const updateTilt = function (clientX, clientY) {
    if (!cardRef.current || quality === "LOW" || !isVisible) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    rotY.set((px - 0.5) * 30);
    rotX.set((0.5 - py) * 26);
    glareOffsetX.set((px - 0.5) * rect.width * 0.72);
    glareOffsetY.set((py - 0.5) * rect.height * 0.72);
  };

  const resetTilt = function () {
    rotX.set(0);
    rotY.set(0);
    glareOffsetX.set(0);
    glareOffsetY.set(0);
  };

  const isRev = Boolean(card && card.isReversed);

  return (
    <div style={{ perspective: "1200px" }} className="relative select-none flex flex-col items-center gap-3">
      <motion.div
        ref={cardRef}
        onMouseMove={function (e) { updateTilt(e.clientX, e.clientY); }}
        onMouseLeave={resetTilt}
        onTouchMove={function (e) { if (e.touches && e.touches[0]) updateTilt(e.touches[0].clientX, e.touches[0].clientY); }}
        onTouchEnd={resetTilt}
        style={{
          rotateX: smoothRotX,
          rotateY: smoothRotY,
          transformStyle: "preserve-3d",
          boxShadow: isRev
            ? "0 22px 52px -12px rgba(0,0,0,0.92), 0 0 34px rgba(168,85,247,0.42)"
            : "0 22px 52px -12px rgba(0,0,0,0.92), 0 0 32px " + ((card.palette && card.palette.glow) || "rgba(251,191,36,0.42)"),
          willChange: isVisible ? "transform" : "auto"
        }}
        className={
          "relative w-[228px] h-[362px] sm:w-[258px] sm:h-[410px] lg:w-[282px] lg:h-[448px] rounded-2xl bg-[#07050a] border-2 cursor-grab active:cursor-grabbing transition-colors duration-500 " +
          (isRev ? "border-purple-400" : "border-[#d4af37]")
        }
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: isRev ? "rotateZ(180deg)" : "none",
            transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <div className="absolute inset-1 rounded-xl overflow-hidden" style={{ transform: "translateZ(-32px)" }}>
            <ArtV1B card={card} layer="background" quality={quality} paused={!isVisible} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(10px)" }}>
            <ArtV1B card={card} layer="midground" quality={quality} />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(30px)", opacity: activeNode ? 0.85 : 1, transition: "opacity 0.25s" }}>
            <ArtV1B card={card} layer="character" quality={quality} />
          </div>

          <div className="absolute inset-0" style={{ transform: "translateZ(46px)" }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full pointer-events-none">
              <polyline
                points={(card.nodes || []).map(function (n) { return n.x + "," + n.y; }).join(" ")}
                fill="none"
                stroke={isRev ? "#c084fc" : "#fde047"}
                strokeWidth="0.65"
                strokeDasharray="2 1.5"
                opacity={activeNode ? "0.95" : "0.45"}
              />
            </svg>
            {(card.nodes || []).map(function (node, idx) {
              const isSelected = activeNode && activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={function () { sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  onClick={function () { sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  style={{ left: node.x + "%", top: node.y + "%" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none pointer-events-auto cursor-pointer"
                >
                  <span
                    className={
                      "absolute -inset-2 rounded-full transition-transform duration-300 " +
                      (isSelected
                        ? (isRev ? "bg-purple-400/35 scale-125" : "bg-amber-400/30 scale-125")
                        : "bg-amber-300/15 group-hover:scale-125")
                    }
                  />
                  <span
                    className={
                      "relative flex items-center justify-center w-6 h-6 rounded-full border transition-transform duration-200 " +
                      (isSelected
                        ? (isRev ? "bg-purple-300 border-white text-black scale-125 shadow-[0_0_14px_#c084fc]" : "bg-amber-300 border-white text-black scale-125 shadow-[0_0_14px_#fde047]")
                        : "bg-[#0f081d]/95 border-amber-400 text-amber-300")
                    }
                  >
                    <SparklesIcon className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(56px)" }}>
            <ArtV1B card={card} layer="frame" quality={quality} />
          </div>
        </div>

        {/* Brillo especular GPU por transform (0 repaint) */}
        {quality !== "LOW" && isVisible && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none mix-blend-screen" style={{ transform: "translateZ(60px)" }}>
            <motion.div
              style={{
                x: smoothGlareX,
                y: smoothGlareY,
                background: "radial-gradient(circle at 50% 50%, rgba(254, 240, 138, 0.32) 0%, rgba(192, 132, 252, 0.11) 36%, transparent 66%)",
                willChange: "transform"
              }}
              className="absolute -inset-1/2 pointer-events-none"
            />
          </div>
        )}
      </motion.div>

      {onTogglePolarity && (
        <button
          type="button"
          onClick={onTogglePolarity}
          style={{ fontFamily: "'Cinzel', serif" }}
          className={
            "flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer " +
            (isRev
              ? "bg-gradient-to-r from-[#241038] via-[#581c87] to-[#241038] border-purple-300/80 text-purple-100 hover:border-amber-300 hover:text-amber-200"
              : "bg-[#120924]/95 border-amber-400/50 text-amber-200 hover:bg-amber-500/20")
          }
        >
          {isRev ? <SunIcon className="w-3.5 h-3.5 text-amber-300" /> : <MoonIcon className="w-3.5 h-3.5 text-purple-300" />}
          <span>{isRev ? "✦ Transmutar en Luz" : "☽ Ver en Sombra"}</span>
        </button>
      )}
    </div>
  );
});

// ============================================================================
// 5. NODO PUENTE DEL HILO DE ORO ASTRAL (COMETAS EN CSS GPU PURO)
// ============================================================================
const AstralThreadBridge = memo(function AstralThreadBridge({ bridge, targetId, onJumpTo }) {
  if (!bridge) return null;
  const gradId = "thread-grad-" + bridge.step;

  return (
    <div className="relative flex flex-col items-center py-2 sm:py-3 my-1" style={{ contain: "layout style" }}>
      {/* Tramo superior del Hilo SVG + cometa GPU CSS */}
      <div className="relative w-12 h-16 sm:h-20 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg viewBox="0 0 40 80" className="w-full h-full">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={bridge.fromColor} stopOpacity="0.95" />
              <stop offset="100%" stopColor={bridge.toColor} stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <line x1="20" y1="0" x2="20" y2="80" stroke={"url(#" + gradId + ")"} strokeWidth="2.2" strokeDasharray="4 4" opacity="0.85" />
          <line x1="20" y1="0" x2="20" y2="80" stroke={"url(#" + gradId + ")"} strokeWidth="7" opacity="0.2" />
        </svg>
        <span
          aria-hidden
          className="trina-comet absolute top-0 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-[#fffbe1] shadow-[0_0_10px_#fde047]"
        />
      </div>

      {/* Medallón Alquímico Puente (sin backdrop-blur pesado) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 w-full max-w-2xl px-5 sm:px-7 py-4 sm:py-5 rounded-2xl bg-[#0b0618]/96 border text-center shadow-[0_14px_36px_rgba(0,0,0,0.85)]"
        style={{
          borderColor: bridge.fromPolarity !== bridge.toPolarity ? "rgba(216,180,254,0.55)" : "rgba(212,175,55,0.55)"
        }}
      >
        <div
          aria-hidden
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45 bg-[#090513] border border-amber-300/80 flex items-center justify-center"
        >
          <span className="w-2 h-2 bg-amber-300 rounded-full" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-amber-300 font-bold">
            ✦ {bridge.stepLabel}
          </span>
          <span className="text-amber-500/50">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-amber-400/35 text-[10px] sm:text-xs text-amber-100 font-semibold">
            {bridge.fromElement} → {bridge.toElement}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-[10px] sm:text-xs text-purple-200 font-semibold">
            {bridge.tag}
          </span>
        </div>

        <p className="text-sm sm:text-base lg:text-lg text-amber-100/95 italic leading-relaxed">
          “{bridge.text}”
        </p>

        <button
          type="button"
          onClick={function () { onJumpTo && onJumpTo(targetId); }}
          style={{ fontFamily: "'Cinzel', serif" }}
          className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/12 hover:bg-amber-500/25 border border-amber-400/45 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-amber-200 transition-colors cursor-pointer"
        >
          <span>{bridge.ctaText}</span>
          <ChevronDownIcon className="w-3.5 h-3.5 trina-arrow-float" />
        </button>
      </motion.div>

      {/* Tramo inferior del Hilo SVG + cometa GPU CSS */}
      <div className="relative w-12 h-14 sm:h-18 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg viewBox="0 0 40 70" className="w-full h-full">
          <line x1="20" y1="0" x2="20" y2="70" stroke={bridge.toColor} strokeWidth="2.2" strokeDasharray="4 4" opacity="0.85" />
          <line x1="20" y1="0" x2="20" y2="70" stroke={bridge.toColor} strokeWidth="7" opacity="0.18" />
        </svg>
        <span
          aria-hidden
          className="trina-comet-delay absolute top-0 left-1/2 -ml-1 w-2.5 h-2.5 rounded-full bg-[#fffbe1] shadow-[0_0_8px_#fde047]"
        />
      </div>
    </div>
  );
});

// ============================================================================
// 6. ESTACIÓN INDIVIDUAL DE CARTA DENTRO DE LA CRÓNICA VERTICAL
// ============================================================================
const TrinaCardStation = memo(function TrinaCardStation({
  stationId,
  stationIndex,
  card,
  posData,
  quality,
  scrollRootRef,
  onTogglePolarity,
  onSealBurst
}) {
  const stationRef = useRef(null);
  const hasChimedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(stationIndex === 0);
  const [activeNode, setActiveNode] = useState(function () {
    return (card && card.nodes && card.nodes[0]) || null;
  });
  const [deepTab, setDeepTab] = useState(null);
  const [actSealed, setActSealed] = useState(function () {
    return window.TAROT_DB && window.TAROT_DB.isPsychomagicActSealed
      ? window.TAROT_DB.isPsychomagicActSealed(card.id, card.isReversed)
      : false;
  });

  useEffect(function () {
    setActiveNode((card && card.nodes && card.nodes[0]) || null);
    setActSealed(
      window.TAROT_DB && window.TAROT_DB.isPsychomagicActSealed
        ? window.TAROT_DB.isPsychomagicActSealed(card.id, card.isReversed)
        : false
    );
  }, [card.id, card.isReversed]);

  useEffect(function () {
    const el = stationRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasChimedRef.current) {
          hasChimedRef.current = true;
          if (stationIndex > 0) {
            sound && sound.playHarpNote && sound.playHarpNote(stationIndex * 2 + 1);
          }
        }
      },
      {
        root: scrollRootRef ? scrollRootRef.current : null,
        threshold: 0.14
      }
    );

    observer.observe(el);
    return function () { observer.disconnect(); };
  }, [stationIndex, scrollRootRef]);

  const isRev = Boolean(card && card.isReversed);
  const activeAction = card.theAlchemy || card.actionOracle;
  const activeDomains = card.domains || {};
  const reverseLayout = stationIndex === 1;

  const handleSeal = function (e) {
    const rect = e.currentTarget.getBoundingClientRect();
    if (window.TAROT_DB && window.TAROT_DB.sealPsychomagicAct && activeAction) {
      window.TAROT_DB.sealPsychomagicAct(card.id, isRev, activeAction.talismanPhrase, activeAction.command);
    }
    if (activeAction && activeAction.talismanPhrase) {
      copyTextSafe(activeAction.talismanPhrase);
    }
    sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(2);
    sound && sound.playHarpNote && sound.playHarpNote(6);
    onSealBurst && onSealBurst({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: 120, h: 60 });
    setActSealed(true);
  };

  return (
    <motion.section
      id={stationId}
      ref={stationRef}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      style={{ contain: "layout style paint" }}
      className={
        "relative w-full max-w-5xl mx-auto rounded-3xl bg-[#090513]/96 border p-4 sm:p-6 lg:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.88)] " +
        (isRev ? "border-purple-400/65" : "border-[#d4af37]/70")
      }
    >
      {/* Cabecera de Posición Temporal */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/25 pb-3.5 mb-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
            className={
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border " +
              (isRev
                ? "bg-purple-950/90 border-purple-300 text-purple-200 shadow-[0_0_12px_rgba(192,132,252,0.4)]"
                : "bg-amber-400 border-amber-100 text-[#090512] shadow-[0_0_12px_rgba(251,191,36,0.45)]")
            }
          >
            {posData.numeral}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span style={{ fontFamily: "'Cinzel', serif" }} className="text-xs sm:text-sm uppercase tracking-[0.22em] text-amber-300 font-bold">
                {posData.label} • {posData.esotericTitle}
              </span>
              <span
                className={
                  "px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border " +
                  (isRev
                    ? "bg-purple-950/90 border-purple-400/70 text-purple-200"
                    : "bg-emerald-950/90 border-emerald-500/60 text-emerald-300")
                }
              >
                {isRev ? "En Sombra (Invertida)" : "En Luz (Al Derecho)"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/75 italic">{posData.subtitle}</p>
          </div>
        </div>

        <a
          href={"carta.html?arcano=" + card.id + (isRev ? "&modo=sombra" : "")}
          style={{ fontFamily: "'Cinzel', serif" }}
          className="px-3.5 py-1.5 rounded-full bg-purple-500/18 hover:bg-purple-500/35 border border-purple-400/55 text-purple-200 text-[11px] sm:text-xs uppercase tracking-wider transition-colors"
        >
          ✦ Códice Completo
        </a>
      </div>

      {/* Cuerpo Principal: Diorama 2.5D + Lectura Temporal y Nodos */}
      <div className={"flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 " + (reverseLayout ? "lg:flex-row-reverse" : "")}>
        <div className="flex-shrink-0 flex flex-col items-center gap-2.5">
          <TrinaDiorama25D
            card={card}
            activeNode={activeNode}
            onSelectNode={setActiveNode}
            quality={quality}
            isVisible={isVisible}
            onTogglePolarity={onTogglePolarity}
          />
          <div className="flex flex-wrap justify-center gap-1.5 max-w-[260px]">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-500/12 border border-amber-400/35 text-[11px] text-amber-200">
              {posData.element}
            </span>
            {card.correspondences && card.correspondences.astro && (
              <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-400/35 text-[11px] text-purple-200">
                {card.correspondences.astro}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 w-full space-y-4">
          <div>
            <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[11px] uppercase tracking-[0.22em] text-amber-400/90 font-bold">
              Arcano Mayor {card.numeral}
            </span>
            <h3 style={{ fontFamily: "'Cinzel Decorative', serif" }} className="text-2xl sm:text-3xl text-amber-200 font-bold leading-tight">
              {card.name}: <span className={isRev ? "text-purple-300" : "text-amber-300"}>{card.subtitle}</span>
            </h3>
          </div>

          <div
            className={
              "p-4 sm:p-5 rounded-2xl border-l-4 shadow-md space-y-1.5 " +
              (isRev
                ? "bg-gradient-to-r from-purple-950/60 via-[#150a26] to-transparent border-purple-400"
                : "bg-gradient-to-r from-amber-500/18 via-[#190e26] to-transparent border-amber-400")
            }
          >
            <div style={{ fontFamily: "'Cinzel', serif" }} className="text-[11px] uppercase tracking-[0.22em] font-bold text-amber-300 flex items-center gap-1.5">
              {isRev ? <MoonIcon className="w-3.5 h-3.5 text-purple-300" /> : <SunIcon className="w-3.5 h-3.5 text-amber-300" />}
              <span>Lectura en tu {posData.label}</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-amber-50 leading-relaxed">
              {posData.text}
            </p>
          </div>

          {card.oracleVoice && (
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[10px] uppercase tracking-[0.22em] text-amber-400/85 block mb-1">
                {isRev ? "☽ Voz en Sombra" : "☉ Voz del Arquetipo"}
              </span>
              <p className="text-sm sm:text-base lg:text-lg italic text-amber-100/90 leading-relaxed">
                “{card.oracleVoice}”
              </p>
            </div>
          )}

          {card.nodes && card.nodes.length > 0 && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {card.nodes.map(function (node, i) {
                  const sel = activeNode && activeNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={function () { sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(i); setActiveNode(node); }}
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className={
                        "px-2.5 py-1 rounded-full text-[11px] border transition-colors cursor-pointer " +
                        (sel
                          ? (isRev ? "bg-purple-300 text-black border-white font-bold" : "bg-amber-400 text-black border-white font-bold")
                          : "bg-[#120924] border-amber-500/35 text-amber-200/90 hover:border-amber-300")
                      }
                    >
                      ✦ {node.title}
                    </button>
                  );
                })}
              </div>

              {activeNode && (
                <div className="p-3 rounded-xl bg-black/35 border border-amber-500/25 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                      Secreto del Relicario: {activeNode.title}
                    </span>
                    {activeNode.esotericFormula && (
                      <span className="px-2 py-0.5 rounded bg-black/60 border border-amber-400/30 font-mono text-[10px] text-amber-300">
                        {activeNode.esotericFormula}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-amber-100/90 leading-snug">{activeNode.secret}</p>
                </div>
              )}
            </div>
          )}

          {/* Desplegable de Profundidad (Sin animar height para evitar reflows) */}
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "psyche", label: isRev ? "La Herida (Jung)" : "Espejo Psicológico", icon: EyeIcon },
                { id: "domains", label: "5 Dominios", icon: CompassIcon },
                { id: "alchemy", label: "Psicomagia", icon: FlameIcon }
              ].map(function (tab) {
                const IconComp = tab.icon;
                const open = deepTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={function () {
                      sound && sound.playHarpNote && sound.playHarpNote(open ? 0 : 3);
                      setDeepTab(open ? null : tab.id);
                    }}
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className={
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] sm:text-[11px] uppercase tracking-wider font-bold transition-colors cursor-pointer " +
                      (open
                        ? (isRev ? "bg-purple-600 border-purple-300 text-white" : "bg-amber-400 border-amber-200 text-black")
                        : "bg-white/[0.04] border-white/15 text-amber-200/80 hover:border-amber-400/50 hover:text-amber-200")
                    }
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {deepTab && (
              <motion.div
                key={deepTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3"
              >
                {deepTab === "psyche" && (
                  <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-400/35 space-y-2 text-sm sm:text-base">
                    {isRev && card.theWound ? (
                      <React.Fragment>
                        <p className="text-amber-50/95"><strong className="text-purple-300">Herida Raíz: </strong>{card.theWound}</p>
                        {card.theIllusion && <p className="text-amber-100/90"><strong className="text-amber-300">Espejismo del Ego: </strong>{card.theIllusion}</p>}
                      </React.Fragment>
                    ) : (
                      <p className="text-amber-50/95">{card.psyche || card.lightAndShadow}</p>
                    )}
                  </div>
                )}

                {deepTab === "domains" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                    {activeDomains.love && <div className="p-3 rounded-xl bg-pink-500/[0.07] border border-pink-400/25"><strong className="text-pink-300 block mb-0.5">♥ Amor</strong>{activeDomains.love}</div>}
                    {activeDomains.work && <div className="p-3 rounded-xl bg-amber-500/[0.07] border border-amber-400/25"><strong className="text-amber-300 block mb-0.5">✦ Trabajo</strong>{activeDomains.work}</div>}
                    {activeDomains.money && <div className="p-3 rounded-xl bg-emerald-500/[0.07] border border-emerald-400/25"><strong className="text-emerald-300 block mb-0.5">◈ Dinero</strong>{activeDomains.money}</div>}
                    {activeDomains.spirit && <div className="p-3 rounded-xl bg-indigo-500/[0.08] border border-indigo-400/25"><strong className="text-indigo-300 block mb-0.5">❂ Espíritu</strong>{activeDomains.spirit}</div>}
                  </div>
                )}

                {deepTab === "alchemy" && activeAction && (
                  <div className="p-3.5 rounded-xl bg-amber-500/[0.08] border border-amber-400/40 space-y-2.5 text-sm">
                    {activeAction.command && <p><strong className="text-emerald-300">✦ Decreto: </strong>{activeAction.command}</p>}
                    {activeAction.psychomagicAct && <p><strong className="text-amber-300">⚗ Acto Psicomágico: </strong>{activeAction.psychomagicAct}</p>}
                    {activeAction.talismanPhrase && (
                      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <span className="italic text-amber-200 font-semibold">“{activeAction.talismanPhrase}”</span>
                        <button
                          type="button"
                          onClick={handleSeal}
                          style={{ fontFamily: "'Cinzel', serif" }}
                          className={
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold cursor-pointer transition-colors " +
                            (actSealed
                              ? "bg-emerald-500/25 border border-emerald-400 text-emerald-200"
                              : "bg-amber-400 text-black hover:bg-amber-300")
                          }
                        >
                          {actSealed ? <React.Fragment><CheckCircleIcon className="w-3.5 h-3.5" /> Sellado</React.Fragment> : "✦ Sellar Talismán"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

// ============================================================================
// 7. LIENZO VERTICAL COMPLETO: EL HILO DE LAS TRES LUNAS
// ============================================================================
const TrinaVerticalReveal = memo(function TrinaVerticalReveal({
  cards,
  quality,
  onToggleCardPolarity,
  onReset,
  onSealBurst,
  onOpenGrimoire
}) {
  const scrollContainerRef = useRef(null);
  const recordedOnceRef = useRef(false);
  const copyTimerRef = useRef(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(function () {
    return function () {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const pastCard = cards && cards[0];
  const presentCard = cards && cards[1];
  const futureCard = cards && cards[2];

  const synthesis = useMemo(function () {
    if (!pastCard || !presentCard || !futureCard) return null;
    const shouldRecord = !recordedOnceRef.current;
    recordedOnceRef.current = true;
    if (window.TrinaOracleEngine && typeof window.TrinaOracleEngine.buildTriadSynthesis === "function") {
      return window.TrinaOracleEngine.buildTriadSynthesis(pastCard, presentCard, futureCard, shouldRecord);
    }
    return null;
  }, [
    pastCard && pastCard.id,
    pastCard && pastCard.isReversed,
    presentCard && presentCard.id,
    presentCard && presentCard.isReversed,
    futureCard && futureCard.id,
    futureCard && futureCard.isReversed
  ]);

  const scrollToElement = useCallback(function (targetId) {
    sound && sound.playHarpNote && sound.playHarpNote(4);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleCopyChronicle = useCallback(function () {
    if (!synthesis || !pastCard || !presentCard || !futureCard) return;
    const text = [
      "✦ EL HILO DE LAS TRES LUNAS • ORÁCULO DEL VELO ASTRAL ✦",
      "",
      "I. PASADO — " + pastCard.name + (pastCard.isReversed ? " (En Sombra)" : " (En Luz)"),
      synthesis.positions.past.text,
      "",
      "II. PRESENTE — " + presentCard.name + (presentCard.isReversed ? " (En Sombra)" : " (En Luz)"),
      synthesis.positions.present.text,
      "",
      "III. FUTURO — " + futureCard.name + (futureCard.isReversed ? " (En Sombra)" : " (En Luz)"),
      synthesis.positions.future.text,
      "",
      "✦ VEREDICTO: " + synthesis.verdict.arcTitle + " (" + synthesis.verdict.arcBadge + ")",
      synthesis.verdict.narrativeSynthesis,
      "Consejo: " + synthesis.verdict.closingAdvice
    ].join(String.fromCharCode(10));

    copyTextSafe(text).then(function (ok) {
      if (!ok) return;
      sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(1);
      setCopiedSummary(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(function () { setCopiedSummary(false); }, 2500);
    });
  }, [synthesis, pastCard, presentCard, futureCard]);

  if (!pastCard || !presentCard || !futureCard || !synthesis) return null;

  const verdict = synthesis.verdict;
  const triadArr = [
    { id: "trina-past", card: pastCard, pos: synthesis.positions.past, idx: 0 },
    { id: "trina-present", card: presentCard, pos: synthesis.positions.present, idx: 1 },
    { id: "trina-future", card: futureCard, pos: synthesis.positions.future, idx: 2 }
  ];

  return (
    <motion.div
      ref={scrollContainerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 z-50 overflow-y-auto overflow-x-hidden px-3 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-20"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, rgba(28, 15, 52, 0.94) 0%, rgba(9, 5, 16, 0.97) 58%, rgba(4, 2, 7, 0.99) 100%)",
        WebkitOverflowScrolling: "touch"
      }}
    >
      {/* Barra flotante superior (sin backdrop-blur pesado) */}
      <div className="sticky top-2 z-40 max-w-5xl mx-auto mb-6 px-3 sm:px-5 py-2.5 rounded-2xl bg-[#07040f]/96 border border-[#d4af37]/50 shadow-[0_12px_30px_rgba(0,0,0,0.85)] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span style={{ fontFamily: "'Cinzel Decorative', serif" }} className="text-xs sm:text-sm text-amber-300 font-bold mr-1 hidden md:inline">
            ✦ El Hilo de las Tres Lunas
          </span>
          {triadArr.map(function (item) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={function () { scrollToElement(item.id); }}
                style={{ fontFamily: "'Cinzel', serif" }}
                className={
                  "px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider border transition-colors cursor-pointer " +
                  (item.card.isReversed
                    ? "bg-purple-950/60 border-purple-400/50 text-purple-200 hover:bg-purple-900/70"
                    : "bg-amber-500/12 border-amber-400/45 text-amber-200 hover:bg-amber-500/25")
                }
              >
                {item.pos.numeral}. {item.pos.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={function () { scrollToElement("trina-verdict"); }}
            style={{ fontFamily: "'Cinzel', serif" }}
            className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500/25 to-purple-500/25 border border-amber-300/60 text-amber-100 hover:brightness-125 transition-colors cursor-pointer"
          >
            ✦ Veredicto
          </button>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {onOpenGrimoire && (
            <button
              type="button"
              onClick={function () { onOpenGrimoire("diary"); }}
              style={{ fontFamily: "'Cinzel', serif" }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#140b26] hover:bg-purple-500/25 border border-purple-400/50 text-purple-200 text-[10px] sm:text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              ✦ Grimorio
            </button>
          )}
          <button
            type="button"
            onClick={onReset}
            style={{ fontFamily: "'Cinzel', serif" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/30 border border-[#d4af37] text-amber-200 text-[11px] sm:text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <RotateCcwIcon className="w-3.5 h-3.5" /> Nueva Tirada
          </button>
        </div>
      </div>

      {/* Cabecera Ceremonial de Apertura */}
      <header className="max-w-3xl mx-auto text-center mb-6 space-y-2">
        <span style={{ fontFamily: "'Cinzel', serif" }} className="inline-block px-4 py-1 rounded-full bg-amber-500/12 border border-amber-400/40 text-[10px] sm:text-xs uppercase tracking-[0.26em] text-amber-300 font-bold">
          ✦ {verdict.arcBadge} • {verdict.elementBalance.label}
        </span>
        <h2 style={{ fontFamily: "'Cinzel Decorative', serif" }} className="text-2xl sm:text-3xl md:text-4xl text-amber-200 font-bold">
          {verdict.arcTitle}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-purple-200/85 italic">
          Descendé siguiendo el Hilo de Oro Astral para recorrer tu Pasado, tu Presente y tu Futuro como una sola crónica.
        </p>
      </header>

      <TrinaCardStation
        stationId="trina-past"
        stationIndex={0}
        card={pastCard}
        posData={synthesis.positions.past}
        quality={quality}
        scrollRootRef={scrollContainerRef}
        onTogglePolarity={function () { onToggleCardPolarity && onToggleCardPolarity(0); }}
        onSealBurst={onSealBurst}
      />

      <AstralThreadBridge
        bridge={synthesis.bridges.pastToPresent}
        targetId="trina-present"
        onJumpTo={scrollToElement}
      />

      <TrinaCardStation
        stationId="trina-present"
        stationIndex={1}
        card={presentCard}
        posData={synthesis.positions.present}
        quality={quality}
        scrollRootRef={scrollContainerRef}
        onTogglePolarity={function () { onToggleCardPolarity && onToggleCardPolarity(1); }}
        onSealBurst={onSealBurst}
      />

      <AstralThreadBridge
        bridge={synthesis.bridges.presentToFuture}
        targetId="trina-future"
        onJumpTo={scrollToElement}
      />

      <TrinaCardStation
        stationId="trina-future"
        stationIndex={2}
        card={futureCard}
        posData={synthesis.positions.future}
        quality={quality}
        scrollRootRef={scrollContainerRef}
        onTogglePolarity={function () { onToggleCardPolarity && onToggleCardPolarity(2); }}
        onSealBurst={onSealBurst}
      />

      {/* Hilo final convergente (CSS GPU puro) */}
      <div className="flex flex-col items-center py-2">
        <div className="relative w-12 h-16 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg viewBox="0 0 40 70" className="w-full h-full">
            <line x1="20" y1="0" x2="20" y2="70" stroke="#fde047" strokeWidth="2.5" strokeDasharray="3 4" opacity="0.9" />
          </svg>
          <span
            aria-hidden
            className="trina-comet absolute top-0 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-[#fde047] shadow-[0_0_10px_#fde047]"
          />
        </div>
      </div>

      {/* SELLO DE SÍNTESIS FINAL: VEREDICTO DE LA TRÍADA */}
      <motion.section
        id="trina-verdict"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.5 }}
        style={{ contain: "layout style paint" }}
        className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#170c2c] via-[#0c0618] to-[#06030c] border-2 border-[#d4af37] p-6 sm:p-8 lg:p-10 text-center shadow-[0_0_55px_rgba(212,175,55,0.2)] space-y-6"
      >
        <div className="space-y-2">
          <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-amber-400 font-bold block">
            ✦ Sello de Síntesis • Veredicto de la Tríada ✦
          </span>
          <h3 style={{ fontFamily: "'Cinzel Decorative', serif" }} className="text-2xl sm:text-3xl md:text-4xl text-amber-200 font-bold">
            {verdict.arcTitle}
          </h3>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto py-2">
          {triadArr.map(function (item, idx) {
            return (
              <React.Fragment key={item.id + "-mini"}>
                <button
                  type="button"
                  onClick={function () { scrollToElement(item.id); }}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <span
                    className={
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 " +
                      (item.card.isReversed
                        ? "bg-purple-950/90 border-purple-300 text-purple-200 shadow-[0_0_16px_rgba(192,132,252,0.45)]"
                        : "bg-amber-400/20 border-amber-300 text-amber-200 shadow-[0_0_16px_rgba(251,191,36,0.42)]")
                    }
                  >
                    {item.card.isReversed ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                  </span>
                  <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[10px] sm:text-xs text-amber-300 font-bold">
                    {item.card.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-purple-200/70">
                    {item.pos.label}
                  </span>
                </button>
                {idx < 2 && (
                  <div className="flex-1 h-[2px] max-w-[90px] bg-gradient-to-r from-amber-300/60 via-purple-300/70 to-amber-300/60 -mt-5" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <blockquote className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-black/45 border border-amber-400/45 text-lg sm:text-xl md:text-2xl italic text-amber-100 leading-relaxed shadow-inner">
          “{verdict.narrativeSynthesis}”
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-amber-400/25 space-y-1.5">
            <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xs uppercase tracking-widest text-amber-300 font-bold">
              ✦ Dinámica del Arco ({verdict.arcBadge})
            </h4>
            <p className="text-sm sm:text-base text-amber-50/90 leading-relaxed">{verdict.arcTone}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-400/30 space-y-1.5">
            <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xs uppercase tracking-widest text-purple-300 font-bold">
              ✦ Alquimia Elemental ({verdict.elementBalance.label})
            </h4>
            <p className="text-sm sm:text-base text-amber-50/90 leading-relaxed">{verdict.elementBalance.description}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/12 border border-amber-400/45">
          <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[11px] uppercase tracking-[0.24em] text-amber-300 font-bold block mb-1">
            ✦ Sentencia de Cierre de Sibilia
          </span>
          <p className="text-base sm:text-lg lg:text-xl text-amber-100 font-semibold italic">
            “{verdict.closingAdvice}”
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleCopyChronicle}
            style={{ fontFamily: "'Cinzel', serif" }}
            className={
              "inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-bold border transition-colors cursor-pointer " +
              (copiedSummary
                ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                : "bg-[#140a24] border-amber-400/60 text-amber-200 hover:bg-amber-500/20")
            }
          >
            {copiedSummary ? (
              <React.Fragment><CheckCircleIcon className="w-4 h-4" /> Crónica Copiada</React.Fragment>
            ) : (
              <React.Fragment><CopyIcon className="w-4 h-4" /> Copiar Crónica Completa</React.Fragment>
            )}
          </button>

          <button
            type="button"
            onClick={onReset}
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-[#07050a] font-black text-xs sm:text-sm uppercase tracking-[0.18em] border-2 border-amber-200 shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform cursor-pointer"
          >
            <RotateCcwIcon className="w-4 h-4" /> Consultar Otra Vez
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
});

window.TrinaSpreadEngine = {
  ACT_LABELS: ACT_LABELS,
  getTrinaDialogue: getTrinaDialogue,
  playTrinaShuffleAudio: playTrinaShuffleAudio,
  TrinaShuffleDeck: TrinaShuffleDeck,
  TrinaAltarTray: TrinaAltarTray,
  TrinaVerticalReveal: TrinaVerticalReveal
};
`;

(function compileMotorTiradaTrina() {
  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + MOTOR_TIRADA_TRINA_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Motor de Tirada Trina (Modo GPU 60 FPS) compilado y activo.", "color: #c084fc; font-weight: bold;");
  } else {
    console.error("Babel no está cargado antes de motor_tirada_trina.js");
  }
})();
// --- FIN DEL ARCHIVO ---

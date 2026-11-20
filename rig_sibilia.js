// ============================================================================
// ARCHIVO: rig_sibilia.js
// Rig Interactivo 3D OPTIMIZADO del Avatar del Oráculo (Sibilia del Velo)
// Hibernación real en REVEAL • Keyframes GPU • Cero feDropShadow/feGaussianBlur
// Compatible con protocolo local file:/// (Sin bloqueo CORS de Babel y Scope Aislado)
// ============================================================================

const RIG_SIBILIA_SOURCE = `
const { useState, useEffect, useRef, useMemo, useId, memo } = React;
const Motion = window.Motion || {};
const { motion, useReducedMotion = () => false, useSpring, useTransform, useMotionValue, useAnimationControls } = Motion;

const randomBetween = (min, max) => min + Math.random() * (max - min);

// --- INYECCIÓN ÚNICA DE KEYFRAMES GPU PARA SIBILIA (CERO LOOPS JS EN REPOSO) ---
(function injectSibiliaGpuStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("velo-sibilia-gpu-styles")) return;
  const style = document.createElement("style");
  style.id = "velo-sibilia-gpu-styles";
  style.textContent =
    "@keyframes sibiliaSpinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } " +
    "@keyframes sibiliaSpinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } } " +
    "@keyframes sibiliaBreathe { 0%, 100% { transform: scaleY(1) rotate(0deg); } 50% { transform: scaleY(1.024) rotate(0.35deg); } } " +
    "@keyframes sibiliaBreatheIntense { 0%, 100% { transform: scaleY(1) rotate(0deg); } 50% { transform: scaleY(1.04) rotate(0.6deg); } } " +
    "@keyframes sibiliaCrownFloat { 0%, 100% { transform: translate3d(0, 0px, 0); } 50% { transform: translate3d(0, -2.5px, 0); } } " +
    "@keyframes sibiliaHandLeft { 0%, 100% { transform: translate3d(0, 0px, 0) rotate(-2deg); } 50% { transform: translate3d(0, -4px, 0) rotate(2deg); } } " +
    "@keyframes sibiliaHandLeftIntense { 0%, 100% { transform: translate3d(0, 0px, 0) rotate(-6deg); } 50% { transform: translate3d(0, -7px, 0) rotate(7deg); } } " +
    "@keyframes sibiliaHandRight { 0%, 100% { transform: scaleX(-1) translate3d(0, 0px, 0) rotate(2deg); } 50% { transform: scaleX(-1) translate3d(0, 4px, 0) rotate(-2deg); } } " +
    "@keyframes sibiliaHandRightIntense { 0%, 100% { transform: scaleX(-1) translate3d(0, 0px, 0) rotate(6deg); } 50% { transform: scaleX(-1) translate3d(0, 7px, 0) rotate(-7deg); } } " +
    "@keyframes sibiliaBlink { 0%, 92%, 96%, 100% { transform: scaleY(1); } 94% { transform: scaleY(0.08); } } " +
    "@keyframes sibiliaMoteFloat { 0%, 100% { opacity: 0.14; transform: translate3d(0, 0px, 0) scale(0.85); } 50% { opacity: 0.72; transform: translate3d(0, -14px, 0) scale(1.15); } } " +
    "@keyframes sibiliaThreadPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.85; } } " +
    ".sibilia-spin-cw { transform-origin: 50% 50%; animation: sibiliaSpinCW 68s linear infinite; will-change: transform; } " +
    ".sibilia-spin-cw-fast { transform-origin: 50% 50%; animation: sibiliaSpinCW 24s linear infinite; will-change: transform; } " +
    ".sibilia-spin-ccw { transform-origin: 50% 50%; animation: sibiliaSpinCCW 54s linear infinite; will-change: transform; } " +
    ".sibilia-spin-ccw-fast { transform-origin: 50% 50%; animation: sibiliaSpinCCW 19s linear infinite; will-change: transform; } " +
    ".sibilia-breathe { transform-origin: 50% 100%; animation: sibiliaBreathe 4.2s ease-in-out infinite; } " +
    ".sibilia-breathe-fast { transform-origin: 50% 100%; animation: sibiliaBreatheIntense 1.25s ease-in-out infinite; } " +
    ".sibilia-crown-float { animation: sibiliaCrownFloat 3.6s ease-in-out infinite; } " +
    ".sibilia-crown-float-fast { animation: sibiliaCrownFloat 1.1s ease-in-out infinite; } " +
    ".sibilia-hand-l { animation: sibiliaHandLeft 3.8s ease-in-out infinite; } " +
    ".sibilia-hand-l-fast { animation: sibiliaHandLeftIntense 0.72s ease-in-out infinite; } " +
    ".sibilia-hand-r { animation: sibiliaHandRight 3.8s ease-in-out infinite; } " +
    ".sibilia-hand-r-fast { animation: sibiliaHandRightIntense 0.72s ease-in-out infinite; } " +
    ".sibilia-blink { transform-box: fill-box; transform-origin: center; animation: sibiliaBlink 4.6s ease-in-out infinite; } " +
    ".sibilia-mote { transform-box: fill-box; transform-origin: center; animation: sibiliaMoteFloat 3.4s ease-in-out infinite; } " +
    ".sibilia-thread { animation: sibiliaThreadPulse 0.9s ease-in-out infinite; } " +
    ".sibilia-paused, .sibilia-paused * { animation-play-state: paused !important; } " +
    "@media (prefers-reduced-motion: reduce) { .sibilia-spin-cw, .sibilia-spin-cw-fast, .sibilia-spin-ccw, .sibilia-spin-ccw-fast, .sibilia-breathe, .sibilia-breathe-fast, .sibilia-crown-float, .sibilia-crown-float-fast, .sibilia-hand-l, .sibilia-hand-l-fast, .sibilia-hand-r, .sibilia-hand-r-fast, .sibilia-blink, .sibilia-mote, .sibilia-thread { animation: none !important; } }";
  document.head.appendChild(style);
})();

// Detección inteligente de hardware
function detectHardwareTier(explicitQuality) {
  if (explicitQuality) return explicitQuality;
  if (typeof window === "undefined") return "HIGH";
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const w = window.innerWidth || 1024;
  const isMobile = w < 768;
  if (memory <= 3 || cores <= 2) return "LOW";
  if (isMobile && (memory <= 4 || cores <= 4)) return "MEDIUM";
  if (!isMobile && cores >= 8 && memory >= 8) return "ULTRA";
  return "HIGH";
}

const OracleMetaMaskRig = memo(function OracleMetaMaskRig({
  gameState,
  mouseX,
  mouseY,
  reactionSignal = 0,
  revealSignal = 0,
  quality
}) {
  const rawId = useId();
  const id = "oracle-" + rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const reduceMotion = useReducedMotion();

  const [tier, setTier] = useState(() => detectHardwareTier(quality));
  useEffect(() => {
    setTier(detectHardwareTier(quality));
  }, [quality]);

  const isUltra = (tier === "ULTRA" || tier === "HIGH") && !reduceMotion;
  const isLow = tier === "LOW" || reduceMotion;

  const intense = gameState === "CRACKING" || gameState === "SHUFFLING";
  const isCracking = gameState === "CRACKING";
  const isReveal = gameState === "REVEAL";
  // Hibernación real cuando el panel de revelación cubre el escenario
  const isHibernating = isReveal || reduceMotion;

  // --- PUENTE DE PUNTERO CON HIBERNACIÓN (CERO CÁLCULOS DE MUELLES EN REVEAL) ---
  const activeMouseX = useMotionValue(0);
  const activeMouseY = useMotionValue(0);

  useEffect(() => {
    if (isHibernating || isLow || !mouseX || !mouseY) {
      activeMouseX.set(0);
      activeMouseY.set(0);
      return undefined;
    }
    const bindChange = function (mv, target) {
      if (typeof mv.on === "function") return mv.on("change", function (v) { target.set(v); });
      if (typeof mv.onChange === "function") return mv.onChange(function (v) { target.set(v); });
      return function () {};
    };
    const unsubX = bindChange(mouseX, activeMouseX);
    const unsubY = bindChange(mouseY, activeMouseY);
    return () => {
      unsubX && unsubX();
      unsubY && unsubY();
    };
  }, [isHibernating, isLow, mouseX, mouseY, activeMouseX, activeMouseY]);

  // --- MUELLES FÍSICOS DE MIRADA Y PARALLAX ---
  const gazeX = useSpring(activeMouseX, { stiffness: 120, damping: 19, mass: 0.72 });
  const gazeY = useSpring(activeMouseY, { stiffness: 120, damping: 19, mass: 0.72 });
  const eyeX = useSpring(activeMouseX, { stiffness: 265, damping: 23, mass: 0.3 });
  const eyeY = useSpring(activeMouseY, { stiffness: 265, damping: 23, mass: 0.3 });

  const saccadeTargetX = useMotionValue(0);
  const saccadeTargetY = useMotionValue(0);
  const saccadeX = useSpring(saccadeTargetX, { stiffness: 520, damping: 24, mass: 0.2 });
  const saccadeY = useSpring(saccadeTargetY, { stiffness: 520, damping: 24, mass: 0.2 });

  const headReaction = useAnimationControls();
  const haloReaction = useAnimationControls();
  const eyeReaction = useAnimationControls();
  const torsoReaction = useAnimationControls();
  const handsReaction = useAnimationControls();

  const lastReaction = useRef(reactionSignal);
  const lastReveal = useRef(revealSignal);
  const [revealFlash, setRevealFlash] = useState(false);

  // Partículas etéreas deterministas (GPU CSS, desmontadas en REVEAL)
  const astralMotes = useMemo(() => {
    const count = tier === "ULTRA" ? 10 : tier === "HIGH" ? 6 : 0;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / Math.max(1, count)) * Math.PI * 2;
      const radius = 58 + (i % 3) * 26;
      return {
        id: i,
        cx: 150 + Math.cos(angle) * radius,
        cy: 128 + Math.sin(angle) * (radius * 0.78),
        r: i % 3 === 0 ? 2.1 : 1.35,
        dur: 2.8 + (i % 5) * 0.6,
        delay: i * 0.28,
        isGold: i % 2 === 0
      };
    });
  }, [tier]);

  // --- MICRO-SACÁDICOS OCULARES (SE PAUSAN AUTOMÁTICAMENTE EN REVEAL) ---
  useEffect(() => {
    if (isHibernating || isLow) {
      saccadeTargetX.set(0);
      saccadeTargetY.set(0);
      return undefined;
    }
    let moveTimer;
    let returnTimer;
    const scheduleSaccade = () => {
      moveTimer = setTimeout(() => {
        saccadeTargetX.set(randomBetween(-0.85, 0.85));
        saccadeTargetY.set(randomBetween(-0.35, 0.35));
        returnTimer = setTimeout(() => {
          saccadeTargetX.set(0);
          saccadeTargetY.set(0);
          scheduleSaccade();
        }, randomBetween(90, 150));
      }, randomBetween(1600, 3200));
    };
    scheduleSaccade();
    return () => {
      clearTimeout(moveTimer);
      clearTimeout(returnTimer);
      saccadeTargetX.set(0);
      saccadeTargetY.set(0);
    };
  }, [isHibernating, isLow, saccadeTargetX, saccadeTargetY]);

  // --- REACCIÓN AL ELEGIR CARTA ---
  useEffect(() => {
    if (reactionSignal === lastReaction.current) return;
    lastReaction.current = reactionSignal;
    if (reduceMotion) return;
    headReaction.start({
      rotateZ: [0, -2.6, 1.8, -0.6, 0],
      scale: [1, 1.03, 1],
      transition: { duration: 0.72, ease: "easeOut" }
    });
    haloReaction.start({
      scale: [1, 1.08, 1],
      transition: { duration: 0.88, ease: "easeOut" }
    });
    handsReaction.start({
      y: [0, -10, 2, 0],
      transition: { duration: 0.75, ease: "easeOut" }
    });
  }, [reactionSignal, reduceMotion, headReaction, haloReaction, handsReaction]);

  // --- REACCIÓN CLIMÁTICA EN LA REVELACIÓN ---
  useEffect(() => {
    if (revealSignal === lastReveal.current) return undefined;
    lastReveal.current = revealSignal;
    if (!revealSignal) return undefined;
    setRevealFlash(true);
    const flashTimer = setTimeout(() => setRevealFlash(false), 950);
    if (!reduceMotion) {
      torsoReaction.start({
        rotateZ: [0, -3.2, 1, 0],
        y: [7, 2, 7],
        transition: { duration: 1.2, ease: "easeOut" }
      });
      headReaction.start({
        rotateZ: [0, -5.5, 2, 0],
        scale: [1, 1.04, 1],
        transition: { duration: 1.15, ease: "easeOut" }
      });
      haloReaction.start({
        scale: [1, 1.14, 1],
        transition: { duration: 0.95, ease: "easeOut" }
      });
      eyeReaction.start({
        scale: [1, 1.22, 1],
        transition: { duration: 0.85, ease: "easeOut" }
      });
      handsReaction.start({
        y: [0, -14, 2, 0],
        transition: { duration: 0.95, ease: "easeOut" }
      });
    }
    return () => clearTimeout(flashTimer);
  }, [revealSignal, reduceMotion, haloReaction, eyeReaction, headReaction, torsoReaction, handsReaction]);

  // --- MULTIPLICADORES DE PARALLAX 3D ---
  const gain = (gameState === "SHUFFLING" ? 1.38 : gameState === "CRACKING" ? 1.65 : 1.05) * (tier === "ULTRA" ? 1.12 : 1);

  const haloOuterX = useTransform(gazeX, (v) => -v * 11 * gain);
  const haloOuterY = useTransform(gazeY, (v) => -v * 7.5 * gain);
  const haloInnerX = useTransform(gazeX, (v) => -v * 6 * gain);
  const haloInnerY = useTransform(gazeY, (v) => -v * 4 * gain);

  const torsoX = useTransform(gazeX, (v) => v * 4.2 * gain);
  const amuletX = useTransform(gazeX, (v) => v * 6.8 * gain);
  const amuletY = useTransform(gazeY, (v) => v * 3.5 * gain);

  const headX = useTransform(gazeX, (v) => v * 10.5 * gain);
  const headY = useTransform(gazeY, (v) => v * 7.2 * gain);
  const headRotateY = useTransform(gazeX, (v) => v * 13 * gain);
  const headRotateX = useTransform(gazeY, (v) => -v * 8.5 * gain);

  // Brillo especular por transform puro (CERO repintado de radial-gradient al mover el mouse)
  const maskShadowX = useTransform(gazeX, (v) => -v * 5);
  const maskShadowY = useTransform(gazeY, (v) => 4 - v * 3);
  const sheenTranslateX = useTransform(gazeX, (v) => v * 36);
  const sheenTranslateY = useTransform(gazeY, (v) => v * 28);

  const crownX = useTransform(gazeX, (v) => v * 13.5 * gain);
  const crownY = useTransform(gazeY, (v) => v * 7.2 * gain);
  const noseX = useTransform(gazeX, (v) => v * 3.4 * gain);
  const noseY = useTransform(gazeY, (v) => v * 1.8 * gain);

  const handLeftX = useTransform(gazeX, (v) => v * 9 * gain);
  const handLeftY = useTransform(gazeY, (v) => v * 7 * gain);
  const handRightX = useTransform(gazeX, (v) => v * 10 * gain);
  const handRightY = useTransform(gazeY, (v) => v * 7 * gain);

  const pupilX = useTransform([eyeX, saccadeX], ([x, s]) => Math.max(-2.8, Math.min(2.8, x * 3.1 + s * 0.55)));
  const pupilY = useTransform([eyeY, saccadeY], ([y, s]) => Math.max(-1.3, Math.min(1.1, y * 1.1 + s * 0.38)));
  const glintX = useTransform(gazeX, (v) => -v * 0.85);
  const glintY = useTransform(gazeY, (v) => -v * 0.55);

  const gold = intense || revealFlash ? "#ffe48f" : "#d9b866";
  const eyeGlow = isCracking || revealFlash ? "#fff4bd" : intense ? "#f5d0fe" : "#c084fc";
  const thirdEyeOpen = intense || revealFlash || isReveal;

  return (
    <div
      className={"relative isolate flex select-none items-center justify-center overflow-visible pointer-events-none" + (isHibernating ? " sibilia-paused" : "")}
      aria-hidden="true"
      style={{
        width: 300,
        height: 250,
        perspective: 950,
        transformStyle: "preserve-3d",
        contain: "layout style"
      }}
    >
      {/* ====================================================================
          PLANO Z -52 & -34: ASTROLABIO MULTI-CAPA (ROTACIÓN GPU CSS PURA)
          ==================================================================== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x: haloOuterX, y: haloOuterY, z: -52, transformStyle: "preserve-3d" }}
        animate={haloReaction}
      >
        <svg
          viewBox="0 0 260 260"
          className={"h-[256px] w-[256px] overflow-visible " + (reduceMotion ? "" : intense ? "sibilia-spin-cw-fast" : "sibilia-spin-cw")}
        >
          <defs>
            <radialGradient id={id + "-aura"}>
              <stop offset="0%" stopColor={isCracking || revealFlash ? "#fde047" : intense ? "#e879f9" : "#a855f7"} stopOpacity={intense ? ".38" : ".28"} />
              <stop offset="45%" stopColor="#6b21a8" stopOpacity=".16" />
              <stop offset="75%" stopColor="#3b0764" stopOpacity=".06" />
              <stop offset="100%" stopColor="#090512" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={id + "-foil"} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff7d6" />
              <stop offset="22%" stopColor={gold} />
              <stop offset="48%" stopColor="#9c6424" />
              <stop offset="74%" stopColor="#ffe58f" />
              <stop offset="100%" stopColor="#683b16" />
            </linearGradient>
            <radialGradient id={id + "-goldAura"}>
              <stop offset="0%" stopColor="#fff7cc" stopOpacity="0.95" />
              <stop offset="42%" stopColor="#fde047" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="130" cy="130" r="128" fill={"url(#" + id + "-aura)"} />

          <g fill="none" stroke={"url(#" + id + "-foil)"} strokeLinecap="round">
            <circle cx="130" cy="130" r="118" strokeWidth="0.9" strokeDasharray="2 6 12 6" opacity=".68" />
            <circle cx="130" cy="130" r="111" strokeWidth="1.2" strokeDasharray="1 8" opacity=".88" />
            <circle cx="130" cy="130" r="99" strokeWidth="0.85" opacity=".46" />
            <circle cx="130" cy="130" r="87" strokeWidth="1.4" strokeDasharray="37 12 2 12" opacity=".68" />
            <path d="M130 10v28m0 184v28M10 130h28m184 0h28" strokeWidth="1.5" opacity=".85" />
            <path d="M45 45l21 21m128 128 21 21M215 45l-21 21M66 194l-21 21" strokeWidth=".95" opacity=".6" />
            <polygon points="130,28 152,108 232,130 152,152 130,232 108,152 28,130 108,108" strokeWidth="1.25" opacity=".76" />
            <polygon points="130,58 144,116 202,130 144,144 130,202 116,144 58,130 116,116" strokeWidth=".85" opacity=".48" />
          </g>

          {/* Halos radiales en lugar de feGaussianBlur para 60+ FPS */}
          <g>
            <circle cx="130" cy="18" r="12" fill={"url(#" + id + "-goldAura)"} opacity=".55" />
            <circle cx="242" cy="130" r="12" fill={"url(#" + id + "-goldAura)"} opacity=".55" />
            <circle cx="130" cy="242" r="12" fill={"url(#" + id + "-goldAura)"} opacity=".55" />
            <circle cx="18" cy="130" r="12" fill={"url(#" + id + "-goldAura)"} opacity=".55" />
          </g>
          <g fill={gold}>
            <path d="M130 8l3.5 10-3.5 10-3.5-10zM252 130l-10 3.5-10-3.5 10-3.5zM130 252l-3.5-10 3.5-10 3.5 10zM8 130l10-3.5 10 3.5-10 3.5z" />
            <circle cx="130" cy="43" r="2.3" />
            <circle cx="217" cy="130" r="2.3" />
            <circle cx="130" cy="217" r="2.3" />
            <circle cx="43" cy="130" r="2.3" />
          </g>
          <path d="M130 92c-21 5-34 22-34 41 0 23 18 41 41 41 12 0 22-5 30-13-5 19-22 32-42 32-26 0-47-21-47-47 0-28 23-51 52-51Z" fill="none" stroke={gold} strokeWidth="1.6" opacity=".48" />
        </svg>

        {/* Segundo Anillo Sagrado Contra-Rotatorio (GPU CSS) */}
        {isUltra && (
          <motion.div
            className="absolute h-[236px] w-[236px] flex items-center justify-center"
            style={{ x: haloInnerX, y: haloInnerY, z: 14 }}
          >
            <svg
              viewBox="0 0 260 260"
              className={"h-full w-full overflow-visible " + (intense ? "sibilia-spin-ccw-fast" : "sibilia-spin-ccw")}
            >
              <g fill="none" stroke={"url(#" + id + "-foil)"} opacity={intense ? "0.75" : "0.48"}>
                <polygon points="130,38 184,184 76,184" strokeWidth="0.9" />
                <polygon points="130,222 184,76 76,76" strokeWidth="0.9" />
                <circle cx="130" cy="130" r="72" strokeWidth="0.8" strokeDasharray="6 4 1 4" />
                <circle cx="130" cy="38" r="3.2" fill="#fff3be" />
                <circle cx="130" cy="222" r="3.2" fill="#fff3be" />
                <circle cx="184" cy="76" r="2.4" fill="#e9d5ff" />
                <circle cx="76" cy="76" r="2.4" fill="#e9d5ff" />
                <circle cx="184" cy="184" r="2.4" fill="#e9d5ff" />
                <circle cx="76" cy="184" r="2.4" fill="#e9d5ff" />
              </g>
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* ====================================================================
          PLANO Z -8 & +6: TORSO REAL Y RELICARIO FLOTANTE DEL PECHO
          ==================================================================== */}
      <motion.div
        className="absolute bottom-0 h-[114px] w-[274px]"
        style={{ x: torsoX, y: 7, z: -8, transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
        animate={torsoReaction}
        initial={false}
      >
        <svg
          viewBox="0 0 270 120"
          className={"h-full w-full overflow-visible " + (reduceMotion ? "" : intense ? "sibilia-breathe-fast" : "sibilia-breathe")}
        >
          <defs>
            <linearGradient id={id + "-robe"} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4c2666" />
              <stop offset="36%" stopColor="#1d112b" />
              <stop offset="72%" stopColor="#090611" />
              <stop offset="100%" stopColor="#2e163b" />
            </linearGradient>
            <linearGradient id={id + "-robeTrim"} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff4be" />
              <stop offset="35%" stopColor={gold} />
              <stop offset="100%" stopColor="#7c4b19" />
            </linearGradient>
          </defs>
          <path d="M16 119c8-42 37-67 78-79l41-8 41 8c41 12 70 37 78 79Z" fill="#050309" opacity=".88" transform="translate(0 6)" />
          <path d="M16 119c8-42 37-67 78-79l41-8 41 8c41 12 70 37 78 79Z" fill={"url(#" + id + "-robe)"} stroke={"url(#" + id + "-robeTrim)"} strokeWidth="1.8" />
          <path d="M36 92c14-22 38-36 66-42l-12 24c-22 6-38 14-54 18ZM234 92c-14-22-38-36-66-42l12 24c22 6 38 14 54 18Z" fill="#251238" stroke={"url(#" + id + "-robeTrim)"} strokeWidth="1.1" opacity=".86" />
          <path d="M53 119c13-34 38-54 82-61 44 7 69 27 82 61" fill="none" stroke={"url(#" + id + "-robeTrim)"} strokeWidth="1.1" strokeDasharray="2 4" opacity=".76" />
          <path d="M83 119c9-21 25-34 52-43 27 9 43 22 52 43" fill="none" stroke="#e2c178" strokeOpacity=".45" />
        </svg>

        {/* Amuleto Solar del Pecho */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: amuletX, y: amuletY, z: 10 }}
        >
          <svg viewBox="0 0 270 120" className="h-full w-full overflow-visible">
            <path d="M135 69 151 90 135 113 119 90Z" fill="#06030a" opacity=".75" transform="translate(0 3)" />
            <path d="M135 69 151 90 135 113 119 90Z" fill="#2c1340" stroke={"url(#" + id + "-robeTrim)"} strokeWidth="1.8" />
            <polygon points="135,75 145,90 135,105 125,90" fill="none" stroke="#fde68a" strokeWidth="0.8" opacity=".65" />
            <circle cx="135" cy="90" r="14" fill={"url(#" + id + "-goldAura)"} opacity={intense || revealFlash ? "0.9" : "0.55"} />
            <circle cx="135" cy="90" r="5.5" fill={intense || revealFlash ? "#fde047" : "#f5d276"} />
            <circle cx="135" cy="90" r="2.4" fill="#fffbeb" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ====================================================================
          PLANO Z +10 A +34: CABEZA, MÁSCARA METÁLICA, TERCER OJO Y CORONA
          (CERO feDropShadow / feGaussianBlur EN ELEMENTOS 3D MÓVILES)
          ==================================================================== */}
      <motion.div
        className="relative z-10 flex h-[208px] w-[184px] items-center justify-center"
        style={{
          x: headX,
          y: headY,
          rotateY: reduceMotion ? 0 : headRotateY,
          rotateX: reduceMotion ? 0 : headRotateX,
          transformStyle: "preserve-3d",
          willChange: isHibernating ? "auto" : "transform"
        }}
        animate={headReaction}
      >
        <svg viewBox="0 0 200 224" className="h-full w-full overflow-visible">
          <defs>
            <radialGradient id={id + "-headShadowGrad"} cx="50%" cy="54%" r="52%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.82" />
              <stop offset="68%" stopColor="#000000" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={id + "-hood"} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6d4482" />
              <stop offset="22%" stopColor="#2c183e" />
              <stop offset="58%" stopColor="#110b1c" />
              <stop offset="100%" stopColor="#040308" />
            </linearGradient>
            <linearGradient id={id + "-hoodRim"} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff4c2" />
              <stop offset="26%" stopColor={gold} />
              <stop offset="52%" stopColor="#6e4219" />
              <stop offset="78%" stopColor="#e4ab44" />
              <stop offset="100%" stopColor="#fff4c2" />
            </linearGradient>
            <linearGradient id={id + "-amethyst"} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b57ae3" />
              <stop offset="45%" stopColor="#582b7a" />
              <stop offset="100%" stopColor="#1f0f2e" />
            </linearGradient>
            <linearGradient id={id + "-goldFace"} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffbe6" />
              <stop offset="18%" stopColor="#f7d56e" />
              <stop offset="42%" stopColor="#b36e22" />
              <stop offset="68%" stopColor="#ffe694" />
              <stop offset="100%" stopColor="#723e17" />
            </linearGradient>
            <radialGradient id={id + "-faceLight"} cx="35%" cy="25%" r="82%">
              <stop offset="0%" stopColor="#5e3478" />
              <stop offset="52%" stopColor="#22152f" />
              <stop offset="100%" stopColor="#08060f" />
            </radialGradient>
            <radialGradient id={id + "-eyeAura"}>
              <stop offset="0%" stopColor={eyeGlow} stopOpacity="0.95" />
              <stop offset="45%" stopColor={eyeGlow} stopOpacity="0.45" />
              <stop offset="100%" stopColor={eyeGlow} stopOpacity="0" />
            </radialGradient>
            <clipPath id={id + "-faceClip"}>
              <path d="M100 42c-33 0-51 24-49 64l5 47c3 25 21 42 44 44 23-2 41-19 44-44l5-47c2-40-16-64-49-64Z" />
            </clipPath>
            <clipPath id={id + "-eyeSockets"}>
              <ellipse cx="69" cy="85" rx="11.2" ry="6.4" />
              <ellipse cx="131" cy="85" rx="11.2" ry="6.4" />
            </clipPath>
          </defs>

          {/* Sombra ambiental liviana en radialGradient (reemplaza feDropShadow) */}
          <ellipse cx="100" cy="134" rx="92" ry="110" fill={"url(#" + id + "-headShadowGrad)"} />

          {/* Capucha Exterior e Interior con Bordado Astral */}
          <path d="M100 10C43 13 19 55 22 122l5 34c4 37 26 57 73 62 47-5 69-25 73-62l5-34c3-67-21-109-78-112Z" fill="#07050c" stroke="#5c3b69" strokeWidth="7" strokeLinejoin="round" transform="translate(0 4)" />
          <path d="M100 10C43 13 19 55 22 122l5 34c4 37 26 57 73 62 47-5 69-25 73-62l5-34c3-67-21-109-78-112Z" fill={"url(#" + id + "-hood)"} stroke={"url(#" + id + "-hoodRim)"} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M100 22C56 25 37 61 40 119l4 34c3 25 19 41 56 46 37-5 53-21 56-46l4-34c3-58-16-94-60-97Z" fill="#08060e" stroke="#b58654" strokeOpacity=".78" strokeWidth="1.35" />
          <path d="M33 78C40 40 62 21 89 18M167 78c-7-38-29-57-56-60" fill="none" stroke="#e2bef0" strokeOpacity=".26" strokeWidth="2" />
          <path d="M27 133c8 34 23 54 46 64M173 133c-8 34-23 54-46 64" fill="none" stroke="#f5d782" strokeOpacity=".55" strokeWidth="1.2" />

          {isUltra && (
            <motion.ellipse
              cx="100"
              cy="116"
              rx="52"
              ry="74"
              fill="#030106"
              opacity="0.52"
              style={{ x: maskShadowX, y: maskShadowY }}
            />
          )}

          {/* Rostro Base y Facetas Low-Poly */}
          <path d="M100 42c-33 0-51 24-49 64l5 47c3 25 21 42 44 44 23-2 41-19 44-44l5-47c2-40-16-64-49-64Z" fill={"url(#" + id + "-faceLight)"} stroke="#946a49" strokeWidth="1.2" />
          <g clipPath={"url(#" + id + "-faceClip)"} opacity=".78">
            <path d="M44 72 82 57 93 126 62 153Z" fill="#73488c" opacity=".28" />
            <path d="m156 72-38-15-11 69 31 27Z" fill="#b07cc9" opacity=".15" />
            <path d="M54 160q22 14 46 13 24 1 46-13" fill="none" stroke="#deb978" strokeOpacity=".34" />
          </g>

          {/* Placas Pómulos de Amatista y Oro */}
          <path d="m49 78 38-20 13 16-3 66-34 22-17-32Z" fill={"url(#" + id + "-amethyst)"} stroke={"url(#" + id + "-goldFace)"} strokeWidth="1.55" strokeLinejoin="round" />
          <path d="m151 78-38-20-13 16 3 66 34 22 17-32Z" fill="#21132e" stroke={"url(#" + id + "-goldFace)"} strokeWidth="1.55" strokeLinejoin="round" />
          <path d="m52 82 31-16 9 12-3 54-28 18-12-24Z" fill="none" stroke="#e2c2f5" strokeOpacity=".42" strokeWidth="1" />
          <path d="m148 82-31-16-9 12 3 54 28 18 12-24Z" fill="none" stroke="#f7de94" strokeOpacity=".54" strokeWidth="1" />

          {/* Líneas de Lágrimas Astrales bajo los Ojos */}
          <path d="M69 93v22M131 93v22" stroke={"url(#" + id + "-goldFace)"} strokeWidth="0.9" strokeDasharray="2 2" opacity=".65" />
          <circle cx="69" cy="119" r="1.4" fill="#fde68a" opacity=".8" />
          <circle cx="131" cy="119" r="1.4" fill="#fde68a" opacity=".8" />

          {/* Arcos Superciliares */}
          <path d="M50 91q17-14 35-5M150 91q-17-14-35-5" fill="none" stroke="#07050c" strokeWidth="10" strokeLinecap="round" />
          <path d="M51 89q16-10 32-4M149 89q-16-10-32-4" fill="none" stroke="#f5dc98" strokeOpacity=".9" strokeWidth="1.5" strokeLinecap="round" />

          {/* SISTEMA OCULAR VIVO (PARPADEO GPU CSS SIN RE-RENDERS REACT) */}
          <g clipPath={"url(#" + id + "-eyeSockets)"}>
            <rect x="52" y="76" width="96" height="18" fill="#07030d" />
            <motion.g style={{ x: pupilX, y: pupilY }} animate={eyeReaction}>
              <g className={reduceMotion ? "" : "sibilia-blink"}>
                <circle cx="69" cy="85" r={intense || revealFlash ? "10" : "7.5"} fill={"url(#" + id + "-eyeAura)"} />
                <circle cx="131" cy="85" r={intense || revealFlash ? "10" : "7.5"} fill={"url(#" + id + "-eyeAura)"} />
                <ellipse cx="69" cy="85" rx="4.3" ry="4.2" fill={eyeGlow} opacity="0.92" />
                <ellipse cx="131" cy="85" rx="4.3" ry="4.2" fill={eyeGlow} opacity="0.92" />
                <circle cx="69" cy="85" r="2.7" fill="none" stroke="#fef08a" strokeWidth="0.65" opacity={intense || revealFlash ? "0.95" : "0.55"} />
                <circle cx="131" cy="85" r="2.7" fill="none" stroke="#fef08a" strokeWidth="0.65" opacity={intense || revealFlash ? "0.95" : "0.55"} />
                <ellipse cx="69" cy="85" rx="1.15" ry="2.3" fill="#1e0936" />
                <ellipse cx="131" cy="85" rx="1.15" ry="2.3" fill="#1e0936" />
                <motion.g style={{ x: glintX, y: glintY }}>
                  <circle cx="67.6" cy="83.5" r="1.2" fill="#ffffff" />
                  <circle cx="129.6" cy="83.5" r="1.2" fill="#ffffff" />
                  <circle cx="70.4" cy="86.4" r="0.55" fill="#fef08a" />
                  <circle cx="132.4" cy="86.4" r="0.55" fill="#fef08a" />
                </motion.g>
              </g>
            </motion.g>
          </g>
          <path d="M56 85q12-10 25-2M144 85q-12-10-25-2" fill="none" stroke="#fae29c" strokeOpacity=".75" strokeWidth="1.1" />

          {/* Mentón y Barboquejo Real */}
          <path d="m100 72-12 42 12 12 12-12Z" fill={"url(#" + id + "-goldFace)"} stroke="#fff2bd" strokeWidth="1.15" strokeLinejoin="round" />
          <path d="m66 144 34 13 34-13-34 38Z" fill="#09060f" stroke={"url(#" + id + "-goldFace)"} strokeWidth="1.85" strokeLinejoin="round" />
          <path d="m100 157v24m-17-21 7 17m27-17-7 17M55 159q16 31 45 34 29-3 45-34" fill="none" stroke="#f6de96" strokeOpacity=".68" strokeWidth="1.15" />
          <path d="M88 136q12-4 24 0-12 6-24 0Z" fill="#3b1d4e" stroke={"url(#" + id + "-goldFace)"} strokeWidth="0.9" opacity=".88" />
        </svg>

        {/* Brillo Especular por Transform GPU (0 Paint por mousemove) */}
        {isUltra && !isHibernating && (
          <div className="absolute inset-4 rounded-full overflow-hidden pointer-events-none mix-blend-screen" style={{ transform: "translateZ(18px)" }}>
            <motion.div
              className="absolute -inset-12 pointer-events-none"
              style={{
                x: sheenTranslateX,
                y: sheenTranslateY,
                background: "radial-gradient(circle at 50% 42%, rgba(255, 247, 205, 0.30) 0%, rgba(216, 180, 254, 0.11) 34%, transparent 64%)",
                willChange: "transform"
              }}
            />
          </div>
        )}

        {/* PLANO Z +24: PUENTE NASAL Y GEMAS DEL ENTRECEJO (AJNA) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: noseX, y: noseY, z: 24 }}
        >
          <svg viewBox="0 0 200 224" className="h-full w-full overflow-visible">
            <path d="m100 72-7 39 7 8 7-8Z" fill={"url(#" + id + "-goldFace)"} stroke="#fff3c4" strokeWidth=".95" />
            <path d="M100 76v35" stroke="#fff9de" strokeOpacity=".8" strokeWidth="1.1" />
            <polygon points="100,56 106,66 100,74 94,66" fill="#1e0b30" stroke={"url(#" + id + "-goldFace)"} strokeWidth="1.2" />
            <circle cx="100" cy="65" r={thirdEyeOpen ? "10" : "6"} fill={"url(#" + id + "-eyeAura)"} opacity={thirdEyeOpen ? "0.9" : "0.45"} />
            <ellipse
              cx="100"
              cy="65"
              rx={thirdEyeOpen ? "2.8" : "1.8"}
              ry={thirdEyeOpen ? "3.8" : "2.4"}
              fill={thirdEyeOpen ? "#fde047" : "#c084fc"}
            />
            <circle cx="99.5" cy="64" r="0.9" fill="#ffffff" />
          </svg>
        </motion.div>

        {/* PLANO Z +32: CORONA ASTRAL EN RELIEVE */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: crownX, y: crownY, z: 32, transformStyle: "preserve-3d" }}
        >
          <svg
            viewBox="0 0 200 224"
            className={"h-full w-full overflow-visible " + (reduceMotion ? "" : intense ? "sibilia-crown-float-fast" : "sibilia-crown-float")}
          >
            <path d="m48 58-17-39 37 22 32-29 32 29 37-22-17 39-29 8-23-18-23 18Z" fill="#0c0712" opacity=".78" transform="translate(0 5)" />
            <path d="m48 54-17-39 37 22 32-29 32 29 37-22-17 39-29 8-23-18-23 18Z" fill={"url(#" + id + "-goldFace)"} stroke="#fff4c7" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m59 54 9-13 32 19 32-19 9 13-41-6Z" fill="#fff4c4" opacity=".45" />
            <path d="m100 18 10 20-10 16-10-16Z" fill={"url(#" + id + "-amethyst)"} stroke="#ffe9a8" strokeWidth="1.4" />
            <circle cx="100" cy="34" r={intense || revealFlash ? "14" : "9"} fill={"url(#" + id + "-goldAura)"} opacity={intense || revealFlash ? "0.75" : "0.35"} />
            <path d="m100 21 5 15-5 11-5-11Z" fill={intense || revealFlash ? "#fde047" : "#d8b4fe"} opacity={intense || revealFlash ? ".92" : ".55"} />
            <circle cx="64" cy="40" r="2.6" fill="#c084fc" stroke="#fff3c4" strokeWidth="0.8" />
            <circle cx="136" cy="40" r="2.6" fill="#c084fc" stroke="#fff3c4" strokeWidth="0.8" />
            <path d="m67 45-19-21 8 29m77-8 19-21-8 29" fill="none" stroke="#fff2bc" strokeOpacity=".64" strokeWidth="1.15" />
            <circle cx="100" cy="36" r="3.4" fill="#fff9db" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ====================================================================
          PLANO Z +18: MANOS ARTICULADAS (ANIMACIÓN GPU CSS + CERO feDropShadow)
          ==================================================================== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ z: 18, transformStyle: "preserve-3d" }}
        animate={handsReaction}
      >
        {/* Mano Izquierda */}
        <motion.div
          className="absolute bottom-[12px] left-[-4px] h-[84px] w-[58px]"
          style={{ x: handLeftX, y: handLeftY, transformStyle: "preserve-3d" }}
        >
          <svg
            viewBox="0 0 70 100"
            className={"h-full w-full overflow-visible " + (reduceMotion ? "" : intense ? "sibilia-hand-l-fast" : "sibilia-hand-l")}
          >
            {(isUltra || intense) && (
              <g opacity={intense ? "0.92" : "0.45"}>
                <circle cx="42" cy="34" r="18" fill="none" stroke="#fde047" strokeWidth="0.75" strokeDasharray="3 3" />
                <polygon points="42,19 54,42 30,42" fill="none" stroke="#c084fc" strokeWidth="0.7" />
              </g>
            )}
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" transform="translate(2 5)" fill="#040208" opacity="0.65" />
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" transform="translate(2 3)" fill="#08060e" stroke="#583c6b" strokeWidth="4" strokeLinejoin="round" />
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" fill="#20152e" stroke={"url(#" + id + "-hoodRim)"} strokeWidth="1.4" strokeLinejoin="round" />
            <path d="m31 51 6 8m8-7 1 9m9-10-3 9" stroke="#f5de96" strokeOpacity=".62" strokeWidth=".9" />
            <path d="m38 65 6-7 7 7-7 10Z" fill={"url(#" + id + "-goldFace)"} stroke="#fff2b8" strokeWidth="1.1" />
            <circle cx="44" cy="65" r="9" fill={"url(#" + id + "-goldAura)"} opacity={intense ? "0.85" : "0.45"} />
            <circle cx="44" cy="65" r="2.4" fill={intense ? "#fde047" : "#fff6d2"} />
          </svg>
        </motion.div>

        {/* Mano Derecha */}
        <motion.div
          className="absolute bottom-[12px] right-[-4px] h-[84px] w-[58px]"
          style={{ x: handRightX, y: handRightY, transformStyle: "preserve-3d" }}
        >
          <svg
            viewBox="0 0 70 100"
            className={"h-full w-full overflow-visible " + (reduceMotion ? "" : intense ? "sibilia-hand-r-fast" : "sibilia-hand-r")}
            style={reduceMotion ? { transform: "scaleX(-1)" } : undefined}
          >
            {(isUltra || intense) && (
              <g opacity={intense ? "0.92" : "0.45"}>
                <circle cx="42" cy="34" r="18" fill="none" stroke="#fde047" strokeWidth="0.75" strokeDasharray="3 3" />
                <polygon points="42,19 54,42 30,42" fill="none" stroke="#c084fc" strokeWidth="0.7" />
              </g>
            )}
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" transform="translate(2 5)" fill="#040208" opacity="0.65" />
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" transform="translate(2 3)" fill="#08060e" stroke="#583c6b" strokeWidth="4" strokeLinejoin="round" />
            <path d="m48 91-26-25-9-30 9-4 12 22-3-37 9-1 5 34 3-31 9 1-2 34 8-23 8 3-7 35Z" fill="#20152e" stroke={"url(#" + id + "-hoodRim)"} strokeWidth="1.4" strokeLinejoin="round" />
            <path d="m31 51 6 8m8-7 1 9m9-10-3 9" stroke="#f5de96" strokeOpacity=".62" strokeWidth=".9" />
            <path d="m38 65 6-7 7 7-7 10Z" fill={"url(#" + id + "-goldFace)"} stroke="#fff2b8" strokeWidth="1.1" />
            <circle cx="44" cy="65" r="9" fill={"url(#" + id + "-goldAura)"} opacity={intense ? "0.85" : "0.45"} />
            <circle cx="44" cy="65" r="2.4" fill={intense ? "#fde047" : "#fff6d2"} />
          </svg>
        </motion.div>
      </motion.div>

      {/* ====================================================================
          PLANO Z +40: CAMPO DE POLVO ASTRAL (GPU CSS • DESMONTADO EN REVEAL)
          ==================================================================== */}
      {isUltra && !isHibernating && astralMotes.length > 0 && (
        <motion.svg
          viewBox="0 0 300 250"
          className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
          style={{ x: crownX, y: crownY, z: 40 }}
        >
          {intense && (
            <path
              d="M 28 190 Q 150 145 272 190"
              fill="none"
              stroke="#fde047"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              className="sibilia-thread"
            />
          )}
          {astralMotes.map((m) => (
            <circle
              key={m.id}
              cx={m.cx}
              cy={m.cy}
              r={m.r}
              fill={m.isGold ? "#fef08a" : "#e9d5ff"}
              className="sibilia-mote"
              style={{
                animationDuration: (intense ? m.dur * 0.55 : m.dur) + "s",
                animationDelay: m.delay + "s"
              }}
            />
          ))}
        </motion.svg>
      )}
    </div>
  );
});

window.OracleMetaMaskRig = OracleMetaMaskRig;
`;

;(function compileRigSibilia() {
  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + RIG_SIBILIA_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Rig 3D de Sibilia (Modo GPU + Hibernación) activo.", "color: #c084fc; font-weight: bold;");
  } else {
    console.error("Babel no está cargado antes de rig_sibilia.js");
  }
})();
// --- FIN DEL ARCHIVO ---

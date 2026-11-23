// ============================================================================
// ARCHIVO: motor_tirada_sino.js
// Motor Ritual y Visual de "La Balanza Sí o No" (Pulso Único 1 Carta + Balanza Trina 3 Cartas)
// Flex Shell Real (Barra Fija Fuera del Scroll) • 60 FPS GPU • Guardián Anti-Compulsión
// Compatible 100% con protocolo local file:/// (Babel aislado, cero CORS)
// ============================================================================

const MOTOR_TIRADA_SINO_SOURCE = `
const { useState, useEffect, useRef, useMemo, useCallback, memo } = React;
const Motion = window.Motion || {};
const { motion, AnimatePresence } = Motion;

const sound = window.sound;
const ArtV1B = window.ArcanaDioramaArt;

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

// --- Íconos SVG aislados ---
const ScaleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);
const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
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
const FlameIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);
const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const RotateCcwIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);
const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);
const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

// Estilos visuales exactos por sello (solo opacidades válidas Tailwind v3)
const SEAL_STYLES = {
  YES_STRONG: {
    border: "border-emerald-400/80",
    bg: "from-[#06221b] via-[#090d16] to-[#06221b]",
    pill: "bg-emerald-500/20 border-emerald-400/70 text-emerald-200",
    title: "text-emerald-300",
    glow: "0 0 42px rgba(52, 211, 153, 0.25)",
    dot: "bg-emerald-400"
  },
  YES_CONDITIONAL: {
    border: "border-amber-400/80",
    bg: "from-[#261806] via-[#100a18] to-[#261806]",
    pill: "bg-amber-500/20 border-amber-400/70 text-amber-200",
    title: "text-amber-300",
    glow: "0 0 42px rgba(251, 191, 36, 0.24)",
    dot: "bg-amber-400"
  },
  VEILED: {
    border: "border-purple-400/80",
    bg: "from-[#1c0c32] via-[#0c0716] to-[#1c0c32]",
    pill: "bg-purple-500/20 border-purple-400/70 text-purple-200",
    title: "text-purple-200",
    glow: "0 0 42px rgba(192, 132, 252, 0.24)",
    dot: "bg-purple-400"
  },
  NO_YET: {
    border: "border-indigo-400/80",
    bg: "from-[#111232] via-[#0a0818] to-[#111232]",
    pill: "bg-indigo-500/20 border-indigo-400/70 text-indigo-200",
    title: "text-indigo-200",
    glow: "0 0 42px rgba(129, 140, 248, 0.24)",
    dot: "bg-indigo-400"
  },
  NO_STRONG: {
    border: "border-rose-400/80",
    bg: "from-[#280b16] via-[#100612] to-[#280b16]",
    pill: "bg-rose-500/20 border-rose-400/70 text-rose-200",
    title: "text-rose-300",
    glow: "0 0 42px rgba(251, 113, 133, 0.25)",
    dot: "bg-rose-400"
  }
};

const SINO_SLOTS = [
  { key: "impulse", numeral: "I", name: "Impulso" },
  { key: "pivot", numeral: "II", name: "Fiel" },
  { key: "outcome", numeral: "III", name: "Desenlace" }
];

const DOMAINS_LIST = [
  { id: "general", label: "General", sigil: "✦" },
  { id: "love", label: "Amor", sigil: "♥" },
  { id: "work", label: "Trabajo", sigil: "⚔" },
  { id: "money", label: "Dinero", sigil: "◈" },
  { id: "decision", label: "Decisión", sigil: "♎" }
];

// ============================================================================
// 1. DIÁLOGOS DE SIBILIA Y AUDIO ÁGIL PARA LA BALANZA SÍ O NO
// ============================================================================
function getSiNoDialogue(phase, subMode, actIndex, domain) {
  const domObj = DOMAINS_LIST.find(function (d) { return d.id === domain; }) || DOMAINS_LIST[0];
  const domTxt = domain && domain !== "general" ? (" sobre " + domObj.label) : "";

  if (phase === "SHUFFLING") {
    if (subMode === "triad") {
      if (actIndex === 0) return "Balanza Trina" + domTxt + " • Acto I. Mezclando el mazo para medir el Impulso inicial...";
      if (actIndex === 1) return "Impulso sellado. Cruzando las cartas para revelar el Fiel de la Balanza...";
      return "Dos pesos ya descansan en el platillo. Última mezcla para inclinar el Desenlace...";
    }
    return "Sostené tu pregunta" + domTxt + " en mente con serenidad... la Balanza está calibrando el pulso.";
  }

  if (phase === "SPREAD") {
    if (subMode === "triad") {
      if (actIndex === 0) return "Elegí la primera carta: el Impulso que abre o empuja tu consulta" + domTxt + ".";
      if (actIndex === 1) return "Elegí la segunda carta: el Fiel de la Balanza, aquello que inclina o condiciona la respuesta.";
      return "Última elección: tocá la tercera carta para revelar el Desenlace definitivo de la Balanza.";
    }
    return "Concentrate en tu pregunta" + domTxt + " y tocá la carta que atraiga tu mirada para recibir tu veredicto.";
  }

  if (phase === "CRACKING") {
    return "La Balanza del Velo se inclina... el veredicto está emergiendo.";
  }

  return "Formulate una pregunta clara y concreta para consultar la Balanza Sí o No.";
}

function playSiNoShuffleAudio(subMode, actIndex) {
  if (!sound) return [];
  const timers = [];
  sound.init && sound.init();
  sound.playHeavyCardThud && sound.playHeavyCardThud(0.95);
  const beats = subMode === "triad" ? [180, 380, 590, 810, 1020] : [170, 350, 540, 760, 980];
  beats.forEach(function (ms, idx) {
    timers.push(setTimeout(function () {
      sound.playHeavyCardThud && sound.playHeavyCardThud(0.84 + (idx % 4) * 0.08);
      if (idx === beats.length - 1) {
        sound.playHarpNote && sound.playHarpNote(2 + (actIndex || 0) * 2);
      }
    }, ms));
  });
  return timers;
}

// ============================================================================
// 2. BANDEJA DE 3 PLATILLOS (SOLO EN MODO BALANZA TRINA • 0 RECORTE EN 360px)
// ============================================================================
const SiNoAltarTray = memo(function SiNoAltarTray({ pickedCards, currentAct, phase }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative z-30 grid grid-cols-3 items-stretch gap-1.5 sm:gap-3.5 px-2 sm:px-4 py-1.5 sm:py-2 w-[94vw] max-w-[600px] rounded-2xl bg-[#090514] border border-emerald-400/50 shadow-[0_10px_28px_rgba(0,0,0,0.88)]"
      style={{ contain: "layout style" }}
    >
      {SINO_SLOTS.map(function (slot, idx) {
        const isSealed = Boolean(pickedCards && pickedCards[idx]);
        const isCurrent = !isSealed && idx === currentAct && phase !== "CRACKING";
        return (
          <div
            key={slot.key}
            className={
              "relative z-10 min-w-0 flex flex-col items-center justify-center px-1.5 sm:px-3 py-1.5 rounded-xl border transition-colors duration-300 " +
              (isSealed
                ? "bg-gradient-to-r from-[#07231c] via-[#131026] to-[#07231c] border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                : isCurrent
                ? "bg-[#160b2a] border-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.22)]"
                : "bg-[#080410] border-white/15 opacity-75")
            }
          >
            <span
              style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
              className={
                "text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-[0.06em] font-bold whitespace-nowrap truncate max-w-full " +
                (isSealed ? "text-emerald-300" : isCurrent ? "text-amber-200" : "text-purple-100/90")
              }
            >
              {slot.numeral}. {slot.name}
            </span>
            <span className="text-[11px] sm:text-xs text-amber-50/95 whitespace-nowrap truncate max-w-full">
              {isSealed ? "✦ En platillo" : isCurrent ? (phase === "SHUFFLING" ? "Calibrando..." : "Elegí carta") : "En espera"}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
});

// ============================================================================
// 3. MODAL DE ENCUADRE RÁPIDO + GUARDIÁN ANTI-COMPULSIÓN DE SIBILIA
// ============================================================================
const SiNoSetupModal = memo(function SiNoSetupModal({
  isOpen,
  initialSubMode = "single",
  initialDomain = "general",
  initialQuestion = "",
  onClose,
  onStart,
  onStartTrina
}) {
  const [subMode, setSubMode] = useState(initialSubMode);
  const [domain, setDomain] = useState(initialDomain);
  const [question, setQuestion] = useState(initialQuestion);
  const [compulsionAlert, setCompulsionAlert] = useState(null);

  useEffect(function () {
    if (isOpen) {
      setSubMode(initialSubMode || "single");
      setDomain(initialDomain || "general");
      setQuestion(initialQuestion || "");
      if (window.SiNoOracleEngine && typeof window.SiNoOracleEngine.checkCompulsion === "function") {
        const preCheck = window.SiNoOracleEngine.checkCompulsion(initialQuestion || "", initialDomain || "general");
        setCompulsionAlert(preCheck && preCheck.triggered ? preCheck : null);
      } else {
        setCompulsionAlert(null);
      }
    }
  }, [isOpen, initialSubMode, initialDomain, initialQuestion]);

  useEffect(function () {
    if (!isOpen) return undefined;
    const onKey = function (e) {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return function () { window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  const handleLaunch = function (bypassGuardian) {
    if (!bypassGuardian && window.SiNoOracleEngine && typeof window.SiNoOracleEngine.checkCompulsion === "function") {
      const check = window.SiNoOracleEngine.checkCompulsion(question, domain);
      if (check && check.triggered) {
        sound && sound.playHarpNote && sound.playHarpNote(1);
        setCompulsionAlert(check);
        return;
      }
    }
    sound && sound.init && sound.init();
    onStart && onStart({
      subMode: subMode,
      domain: domain,
      question: question.trim()
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sino-setup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={function (e) { if (e.target === e.currentTarget && onClose) onClose(); }}
          className="fixed inset-0 z-[75] flex items-center justify-center p-3 sm:p-5 bg-[#030108]/95 overflow-y-auto"
        >
          <motion.div
            key="sino-setup-panel"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24 }}
            className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col rounded-3xl bg-[#090513] border-2 border-[#d4af37]/75 shadow-[0_24px_70px_rgba(0,0,0,0.95)] overflow-hidden text-amber-50 select-text"
          >
            {/* Cabecera fija */}
            <header className="flex-shrink-0 px-5 sm:px-6 py-4 bg-gradient-to-b from-[#170c2b] to-[#090513] border-b border-amber-500/25 flex items-center justify-between gap-3">
              <div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-emerald-300 font-bold flex items-center gap-1.5">
                  <ScaleIcon className="w-3.5 h-3.5" /> Oráculo de Respuesta Directa
                </span>
                <h2 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-xl sm:text-2xl text-amber-200 font-bold leading-tight mt-0.5">
                  La Balanza Sí o No
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="p-2 rounded-full bg-white/[0.05] hover:bg-amber-500/20 border border-amber-400/40 text-amber-200 cursor-pointer transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </header>

            {/* Cuerpo */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5" style={{ WebkitOverflowScrolling: "touch" }}>
              {/* 1. Selector de precisión: 1 Carta vs 3 Cartas */}
              <div className="space-y-2">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.1em] text-amber-300/90 font-bold block">
                  1. Elegí el nivel de precisión
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={function () { sound && sound.playHarpNote && sound.playHarpNote(2); setSubMode("single"); }}
                    className={
                      "text-left p-3.5 rounded-2xl border transition-colors cursor-pointer " +
                      (subMode === "single"
                        ? "bg-gradient-to-br from-[#231506] to-[#130a22] border-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.22)]"
                        : "bg-[#0d0719] border-white/15 hover:border-amber-400/45")
                    }
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider font-bold text-amber-200">
                        ✦ Pulso Único
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 font-bold">
                        1 Carta
                      </span>
                    </div>
                    <p className="text-sm text-purple-100/95 mt-1.5 leading-relaxed">
                      Respuesta directa al instante con sello de 5 grados, llave de acción y horizonte temporal.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={function () { sound && sound.playHarpNote && sound.playHarpNote(4); setSubMode("triad"); }}
                    className={
                      "text-left p-3.5 rounded-2xl border transition-colors cursor-pointer " +
                      (subMode === "triad"
                        ? "bg-gradient-to-br from-[#07241c] to-[#130a24] border-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.22)]"
                        : "bg-[#0d0719] border-white/15 hover:border-emerald-400/45")
                    }
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider font-bold text-emerald-200">
                        ♎ Balanza Trina
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-xs text-emerald-200 font-bold">
                        3 Cartas
                      </span>
                    </div>
                    <p className="text-sm text-purple-100/95 mt-1.5 leading-relaxed">
                      Pesa Impulso, Fiel y Desenlace para medir fuerzas a favor contra fricciones reales.
                    </p>
                  </button>
                </div>
              </div>

              {/* 2. Área de la pregunta */}
              <div className="space-y-2">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.1em] text-amber-300/90 font-bold block">
                  2. Enfoque de tu consulta
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DOMAINS_LIST.map(function (d) {
                    const active = domain === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={function () { sound && sound.playHarpNote && sound.playHarpNote(3); setDomain(d.id); }}
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                        className={
                          "px-3 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-colors cursor-pointer " +
                          (active
                            ? "bg-amber-400 text-black border-amber-200 font-bold"
                            : "bg-[#120924] border-amber-500/30 text-amber-200/85 hover:border-amber-300")
                        }
                      >
                        <span className="mr-1">{d.sigil}</span>{d.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Pregunta opcional privada */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="sino-question-input" style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.1em] text-amber-300/90 font-bold">
                    3. Tu pregunta (opcional)
                  </label>
                  <span className="text-xs text-emerald-300/95">100% privada en tu equipo</span>
                </div>
                <input
                  id="sino-question-input"
                  type="text"
                  maxLength={160}
                  value={question}
                  onChange={function (e) { setQuestion(e.target.value); }}
                  onKeyDown={function (e) { if (e.key === "Enter") handleLaunch(false); }}
                  placeholder="Ej: ¿Me conviene avanzar con esta propuesta este mes?"
                  style={{ userSelect: "text", WebkitUserSelect: "text" }}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#05020a] border border-amber-500/40 focus:border-amber-300 focus:outline-none text-sm sm:text-base text-amber-50 placeholder:text-amber-200/60 select-text"
                />
              </div>

              {/* Guardián Anti-Compulsión de Sibilia (no bloqueante) */}
              {compulsionAlert && compulsionAlert.triggered && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#220e38] via-[#130824] to-[#220e38] border border-purple-400/65 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <ShieldIcon className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-purple-200 font-bold block">
                        ✦ Consejo de Sibilia antes de volver a tirar
                      </span>
                      <p className="text-sm sm:text-base text-amber-100/90 italic leading-snug">
                        “{compulsionAlert.message}”
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {onStartTrina && (
                      <button
                        type="button"
                        onClick={function () { onClose && onClose(); onStartTrina(); }}
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                        className="px-3.5 py-1.5 rounded-full bg-purple-500/25 hover:bg-purple-500/40 border border-purple-300/70 text-purple-100 text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors"
                      >
                        ☽ Abrir El Hilo de las Tres Lunas
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={function () { handleLaunch(true); }}
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                      className="px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors"
                    >
                      Es otra duda • Consultar igual
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer de acción */}
            <div className="flex-shrink-0 px-5 sm:px-6 py-4 bg-[#07040f] border-t border-amber-500/25 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/15 text-amber-200/80 text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Volver
              </button>
              <button
                type="button"
                onClick={function () { handleLaunch(Boolean(compulsionAlert && compulsionAlert.triggered)); }}
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-[#07050a] font-black text-xs sm:text-sm uppercase tracking-[0.08em] border-2 border-amber-200 shadow-[0_0_24px_rgba(212,175,55,0.45)] hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <ScaleIcon className="w-4 h-4" />
                <span>{subMode === "triad" ? "Barajar 3 Cartas" : "Consultar 1 Carta"}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

// ============================================================================
// 4. MINI DIORAMA 2.5D LIGERO PARA LAS CARTAS DE LA BALANZA SÍ O NO
// ============================================================================
const SiNoMiniCard = memo(function SiNoMiniCard({ card, quality, size = "md", onTogglePolarity }) {
  const isRev = Boolean(card && card.isReversed);
  const sizeCls = size === "lg"
    ? "w-[208px] h-[330px] sm:w-[236px] sm:h-[374px]"
    : "w-[154px] h-[244px] sm:w-[174px] sm:h-[276px]";

  return (
    <div className="flex flex-col items-center gap-2.5 select-none">
      <div
        className={
          "relative rounded-2xl bg-[#07050a] border-2 overflow-hidden transition-colors duration-500 " +
          sizeCls + " " +
          (isRev
            ? "border-purple-400 shadow-[0_18px_40px_rgba(0,0,0,0.88),0_0_26px_rgba(168,85,247,0.36)]"
            : "border-[#d4af37] shadow-[0_18px_40px_rgba(0,0,0,0.88),0_0_26px_rgba(212,175,55,0.34)]")
        }
      >
        <div
          className="absolute inset-0"
          style={{
            transform: isRev ? "rotate(180deg)" : "none",
            transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <div className="absolute inset-1 rounded-xl overflow-hidden">
            {ArtV1B && <ArtV1B card={card} layer="background" quality={quality} />}
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {ArtV1B && <ArtV1B card={card} layer="midground" quality={quality} />}
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {ArtV1B && <ArtV1B card={card} layer="character" quality={quality} />}
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {ArtV1B && <ArtV1B card={card} layer="frame" quality={quality} />}
          </div>
        </div>
      </div>

      {onTogglePolarity && (
        <button
          type="button"
          onClick={onTogglePolarity}
          style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
          className={
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs uppercase tracking-[0.08em] transition-colors cursor-pointer " +
            (isRev
              ? "bg-purple-950/90 border-purple-400/70 text-purple-200 hover:border-amber-300"
              : "bg-[#120924] border-amber-400/50 text-amber-200 hover:bg-amber-500/20")
          }
        >
          {isRev ? <SunIcon className="w-3 h-3 text-amber-300" /> : <MoonIcon className="w-3 h-3 text-purple-300" />}
          <span>{isRev ? "Ver en Luz" : "Ver en Sombra"}</span>
        </button>
      )}
    </div>
  );
});

// ============================================================================
// 5. VISTA DE REVELACIÓN SÍ O NO (FLEX SHELL REAL • 1 Y 3 CARTAS)
// ============================================================================
const SiNoRevealView = memo(function SiNoRevealView({
  result,
  quality,
  onToggleCardPolarity,
  onNewSiNo,
  onSwitchToTrina,
  onReset,
  onOpenGrimoire,
  onSealBurst
}) {
  const scrollRef = useRef(null);
  const copyTimerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [actSealed, setActSealed] = useState(false);

  const primaryCard = result && (result.mode === "triad" ? (result.items && result.items[2] && result.items[2].card) : result.card);

  useEffect(function () {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    return function () {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, [result && result.timestamp]);

  useEffect(function () {
    if (primaryCard && window.TAROT_DB && typeof window.TAROT_DB.isPsychomagicActSealed === "function") {
      setActSealed(window.TAROT_DB.isPsychomagicActSealed(primaryCard.id, Boolean(primaryCard.isReversed)));
    } else {
      setActSealed(false);
    }
  }, [primaryCard && primaryCard.id, primaryCard && primaryCard.isReversed]);

  const handleCopyVerdict = useCallback(function () {
    if (!result) return;
    const lines = [
      "✦ LA BALANZA SÍ O NO • ORÁCULO DEL VELO ASTRAL ✦",
      ""
    ];
    if (result.question) {
      lines.push("Pregunta: “" + result.question + "”");
    }
    lines.push("Enfoque: " + (result.domainMeta ? result.domainMeta.label : "General"));
    lines.push("Veredicto: " + result.seal.label + " (" + result.seal.badge + ")");
    lines.push("");

    if (result.mode === "triad" && Array.isArray(result.items)) {
      result.items.forEach(function (it) {
        lines.push(it.role.numeral + ". " + it.role.label + " • " + it.data.name + (it.data.isReversed ? " (Sombra)" : " (Luz)") + " [" + it.seal.shortLabel + "]");
      });
      lines.push("");
      lines.push(result.synthesisText);
    } else if (result.cardData) {
      lines.push("Arcano: " + result.cardData.name + (result.cardData.isReversed ? " (En Sombra)" : " (En Luz)"));
      lines.push(result.headline);
      lines.push(result.answerText);
    }

    lines.push("");
    lines.push("✦ Llave de acción: " + result.directive);
    if (result.timing) lines.push("✦ Horizonte temporal: " + result.timing);

    copyTextSafe(lines.join(String.fromCharCode(10))).then(function (ok) {
      if (!ok) return;
      sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(1);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(function () { setCopied(false); }, 2400);
    });
  }, [result]);

  const handleSeal = useCallback(function (e) {
    if (!primaryCard || !result) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (window.TAROT_DB && typeof window.TAROT_DB.sealPsychomagicAct === "function") {
      window.TAROT_DB.sealPsychomagicAct(
        primaryCard.id,
        Boolean(primaryCard.isReversed),
        result.talismanPhrase || result.directive,
        result.directive
      );
    }
    if (result.talismanPhrase || result.directive) {
      copyTextSafe(result.talismanPhrase || result.directive);
    }
    sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(2);
    sound && sound.playHarpNote && sound.playHarpNote(5);
    onSealBurst && onSealBurst({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: 120, h: 60 });
    setActSealed(true);
  }, [primaryCard, result, onSealBurst]);

  if (!result || !result.seal) return null;

  const st = SEAL_STYLES[result.seal.code] || SEAL_STYLES.VEILED;
  const isTriad = result.mode === "triad";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 15%, #1c0f34 0%, #090510 58%, #040207 100%)"
      }}
    >
      {/* BARRA SUPERIOR FIJA FUERA DEL SCROLL (0 SOLAPAMIENTO EN MÓVIL Y PC) */}
      <div className="flex-shrink-0 z-50 w-full bg-[#07040f] border-b border-[#d4af37]/50 shadow-[0_10px_28px_rgba(0,0,0,0.92)] px-3 sm:px-6 py-2 sm:py-2.5">
        <div className="max-w-6xl xl:max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-xs sm:text-sm text-amber-300 font-bold truncate">
              ♎ La Balanza Sí o No
            </span>
            <span className={"hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs uppercase tracking-wider font-bold border " + st.pill}>
              {result.seal.label}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {onNewSiNo && (
              <button
                type="button"
                onClick={onNewSiNo}
                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#140b26] hover:bg-emerald-500/20 border border-emerald-400/55 text-emerald-200 text-xs sm:text-[13px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors"
              >
                ♎ Otra Pregunta
              </button>
            )}
            {onOpenGrimoire && (
              <button
                type="button"
                onClick={function () { onOpenGrimoire("diary"); }}
                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#140b26] hover:bg-purple-500/25 border border-purple-400/55 text-purple-200 text-xs sm:text-[13px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors"
              >
                ✦ Grimorio
              </button>
            )}
            <button
              type="button"
              onClick={onReset}
              style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-[#241608] hover:bg-amber-500/30 border border-[#d4af37] text-amber-200 text-xs sm:text-[13px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors"
            >
              <RotateCcwIcon className="w-3.5 h-3.5" /> Altar
            </button>
          </div>
        </div>
      </div>

      {/* CUERPO SCROLLEABLE INDEPENDIENTE */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-3 sm:px-6 lg:px-10 pt-5 sm:pt-7 pb-24"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto space-y-7">
          {/* 1. SELLO DEL VEREDICTO + BARRA DE LA BALANZA */}
          <section
            style={{ boxShadow: st.glow }}
            className={"rounded-3xl bg-gradient-to-r " + st.bg + " border-2 " + st.border + " p-5 sm:p-7 text-center space-y-4"}
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className={"px-3 py-1 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold border " + st.pill}>
                {result.seal.badge}
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="px-3 py-1 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.08em] bg-white/[0.05] border border-amber-400/35 text-amber-200">
                {result.domainMeta ? (result.domainMeta.sigil + " " + result.domainMeta.label) : "✦ General"}
              </span>
              {isTriad && result.balanceLabel && (
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="px-3 py-1 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.08em] bg-black/40 border border-white/15 text-purple-200">
                  {result.balanceLabel}
                </span>
              )}
            </div>

            {result.question && (
              <p className="text-base sm:text-lg italic text-purple-100/90 max-w-2xl mx-auto">
                “{result.question}”
              </p>
            )}

            <h2 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className={"text-3xl sm:text-4xl md:text-5xl font-black tracking-wide " + st.title}>
              {result.seal.label}
            </h2>

            <p className="text-base sm:text-xl text-amber-50/95 max-w-2xl mx-auto leading-relaxed">
              {result.headline}
            </p>

            {/* Barra visual de inclinación de la Balanza */}
            <div className="max-w-lg mx-auto pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em] font-bold" style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}>
                <span className="text-rose-300/90">No</span>
                <span className="text-purple-200/95">Velado</span>
                <span className="text-emerald-300/90">Sí</span>
              </div>
              <div className="relative h-3 rounded-full bg-[#06030c] border border-white/15 overflow-visible">
                <div
                  className="absolute inset-0 rounded-full opacity-75"
                  style={{
                    background: "linear-gradient(90deg, rgba(244,63,94,0.65) 0%, rgba(129,140,248,0.45) 28%, rgba(192,132,252,0.5) 50%, rgba(251,191,36,0.55) 72%, rgba(52,211,153,0.75) 100%)"
                  }}
                />
                <motion.div
                  initial={{ left: "50%" }}
                  animate={{ left: result.barPercent + "%" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#fffbe6] border-2 border-[#090513] shadow-[0_0_14px_#fde047]"
                />
              </div>
            </div>
          </section>

          {/* 2. CARTAS REVELADAS (1 CARTA O 3 CARTAS EN BALANZA) */}
          {!isTriad && result.card && (
            <section className="rounded-3xl bg-[#0c0717]/95 border border-[#d4af37]/55 p-6 sm:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <SiNoMiniCard
                  card={result.card}
                  quality={quality}
                  size="lg"
                  onTogglePolarity={function () { onToggleCardPolarity && onToggleCardPolarity(0); }}
                />
              </div>

              <div className="flex-1 w-full space-y-4">
                <div className="border-b border-amber-500/25 pb-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-amber-400 font-bold">
                      Arcano Mayor {result.cardData.numeral} • {result.cardData.isReversed ? "Faz Lunar (Sombra)" : "Faz Solar (Luz)"}
                    </span>
                    <a
                      href={"carta.html?arcano=" + result.card.id + (result.cardData.isReversed ? "&modo=sombra" : "")}
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                      className="px-3 py-1 rounded-full bg-purple-500/20 hover:bg-purple-500/35 border border-purple-400/50 text-purple-200 text-xs uppercase tracking-wider transition-colors"
                    >
                      ✦ Códice Completo
                    </a>
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-2xl sm:text-3xl text-amber-200 font-bold">
                    {result.cardData.name}
                  </h3>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-amber-400/30 space-y-1.5">
                  <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-amber-300 font-bold block">
                    ✦ Respuesta en {result.domainMeta ? result.domainMeta.label : "General"}
                  </span>
                  <p className="text-base sm:text-lg lg:text-xl text-amber-50/95 leading-relaxed">
                    {result.answerText}
                  </p>
                </div>

                {result.closingCounsel && (
                  <p className="text-base sm:text-lg italic text-purple-200/90 pl-4 border-l-2 border-purple-400/60">
                    “{result.closingCounsel}”
                  </p>
                )}
              </div>
            </section>
          )}

          {isTriad && Array.isArray(result.items) && (
            <section className="space-y-5">
              {/* Síntesis unificada de las 3 cartas */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#090513]/95 border border-[#d4af37]/55 space-y-2.5">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-amber-300 font-bold block">
                  ✦ Lectura Conjunta de los Tres Platillos
                </span>
                <p className="text-base sm:text-lg lg:text-xl text-amber-50/95 leading-relaxed">
                  {result.synthesisText}
                </p>
                {result.domainHighlight && (
                  <p className="text-sm sm:text-base text-purple-200/90 pt-2 border-t border-white/10">
                    <strong className="text-amber-300">En {result.domainMeta ? result.domainMeta.label : "tu consulta"}: </strong>
                    {result.domainHighlight}
                  </p>
                )}
              </div>

              {/* Las 3 cartas en grilla */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {result.items.map(function (it, idx) {
                  const itemStyle = SEAL_STYLES[it.seal.code] || SEAL_STYLES.VEILED;
                  const weightLabel = it.data.weight > 0 ? ("+" + it.data.weight + " a favor") : it.data.weight < 0 ? (it.data.weight + " fricción") : "0 en pausa";
                  return (
                    <article
                      key={it.role.key + "_" + it.card.id}
                      className={"rounded-2xl bg-[#0c0717]/95 border p-5 sm:p-6 flex flex-col items-center text-center gap-3.5 " + itemStyle.border}
                    >
                      <div className="w-full flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                        <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.08em] text-amber-300 font-bold">
                          {it.role.numeral}. {it.role.label}
                        </span>
                        <span className={"px-2 py-0.5 rounded-full text-xs font-bold border " + itemStyle.pill}>
                          {weightLabel}
                        </span>
                      </div>

                      <SiNoMiniCard
                        card={it.card}
                        quality={quality}
                        size="md"
                        onTogglePolarity={function () { onToggleCardPolarity && onToggleCardPolarity(idx); }}
                      />

                      <div className="space-y-1.5 flex-1 flex flex-col justify-between w-full">
                        <div className="space-y-1">
                          <h4 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-lg text-amber-200 font-bold">
                            {it.data.name}
                          </h4>
                          <span className="text-xs uppercase tracking-wider text-purple-200/95 block">
                            {it.data.isReversed ? "☽ En Sombra" : "☉ En Luz"} • {it.seal.shortLabel}
                          </span>
                          <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed text-left pt-1.5">
                            {it.domainAnswer}
                          </p>
                        </div>

                        <a
                          href={"carta.html?arcano=" + it.card.id + (it.data.isReversed ? "&modo=sombra" : "")}
                          style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                          className="mt-2 inline-block text-xs uppercase tracking-[0.08em] text-purple-300 hover:text-amber-300 transition-colors"
                        >
                          Abrir Códice de {it.data.name} ›
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* 3. LA LLAVE DE ACCIÓN + HORIZONTE TEMPORAL */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0b0618] border border-emerald-400/45 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.1em] text-emerald-300 font-bold flex items-center gap-1.5">
                  <FlameIcon className="w-4 h-4" /> La Llave que Mueve la Balanza
                </span>
              </div>
              <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed">
                {result.directive}
              </p>
              {result.prohibition && (
                <p className="text-xs sm:text-sm text-rose-200/90 pt-2 border-t border-white/10">
                  <strong className="text-rose-300">⊘ Evitá hoy: </strong>{result.prohibition}
                </p>
              )}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleSeal}
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                  className={
                    "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-[13px] uppercase tracking-wider font-bold border transition-colors cursor-pointer " +
                    (actSealed
                      ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                      : "bg-amber-400/15 hover:bg-amber-400/30 border-amber-300/60 text-amber-200")
                  }
                >
                  {actSealed ? <React.Fragment><CheckIcon className="w-3.5 h-3.5" /> Decreto Sellado en tu Grimorio</React.Fragment> : <React.Fragment><SparklesIcon className="w-3.5 h-3.5" /> Sellar Decreto en el Grimorio</React.Fragment>}
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b0618] border border-amber-400/40 flex flex-col justify-between gap-4">
              <div className="space-y-2.5">
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.1em] text-amber-300 font-bold flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4" /> Horizonte Temporal
                </span>
                <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed">
                  {result.timing}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/35 border border-purple-400/35 space-y-2">
                <p className="text-xs sm:text-sm text-purple-100/90 italic">
                  ¿Necesitás ver el trasfondo completo (Pasado, Presente y Futuro) de esta situación?
                </p>
                {onSwitchToTrina && (
                  <button
                    type="button"
                    onClick={onSwitchToTrina}
                    style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/25 hover:bg-purple-500/40 border border-purple-300/65 text-purple-100 text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors"
                  >
                    <MoonIcon className="w-3.5 h-3.5" /> Profundizar en Tres Lunas
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* 4. BOTONERA DE CIERRE */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopyVerdict}
              style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
              className={
                "inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.08em] font-bold border transition-colors cursor-pointer " +
                (copied
                  ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                  : "bg-[#140a24] border-amber-400/60 text-amber-200 hover:bg-amber-500/20")
              }
            >
              {copied ? <React.Fragment><CheckIcon className="w-4 h-4" /> Respuesta Copiada</React.Fragment> : <React.Fragment><CopyIcon className="w-4 h-4" /> Copiar Veredicto</React.Fragment>}
            </button>

            {onNewSiNo && (
              <button
                type="button"
                onClick={onNewSiNo}
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-[#07050a] font-black text-xs sm:text-sm uppercase tracking-[0.08em] border-2 border-amber-200 shadow-[0_0_25px_rgba(212,175,55,0.42)] hover:scale-105 transition-transform cursor-pointer"
              >
                <ScaleIcon className="w-4 h-4" /> Nueva Pregunta Sí o No
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

window.SiNoSpreadEngine = {
  SINO_SLOTS: SINO_SLOTS,
  DOMAINS_LIST: DOMAINS_LIST,
  SEAL_STYLES: SEAL_STYLES,
  getSiNoDialogue: getSiNoDialogue,
  playSiNoShuffleAudio: playSiNoShuffleAudio,
  SiNoSetupModal: SiNoSetupModal,
  SiNoAltarTray: SiNoAltarTray,
  SiNoRevealView: SiNoRevealView
};
`;

(function compileMotorTiradaSiNo() {
  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + MOTOR_TIRADA_SINO_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Motor de La Balanza Sí o No (1 y 3 Cartas • 60 FPS GPU) compilado y activo.", "color: #34d399; font-weight: bold;");
  } else {
    console.error("Babel no está cargado antes de motor_tirada_sino.js");
  }
})();
// --- FIN DEL ARCHIVO ---

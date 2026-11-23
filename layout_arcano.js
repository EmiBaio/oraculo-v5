// ============================================================================
// ARCHIVO: layout_arcano.js
// Layout Maestro GIGA SEO + Diorama 2.5D GPU (0 Re-renders) + Grimorio Polimórfico
// Incluye Selector de 5 Octavas, Cábala/Qliphoth, Clínica Junguiana y Psicomagia
// Compatible con protocolo local file:/// (Sin bloqueo CORS de Babel y con Scope Aislado)
// ============================================================================

const LAYOUT_ARCANO_SOURCE = `
const { useState, useEffect, useRef, useMemo, useCallback, memo } = React;
const BASE_PREFIX = (typeof window !== 'undefined' && typeof window.__VELO_BASE_PREFIX__ === 'string') ? window.__VELO_BASE_PREFIX__ : '';
const SITE_ORIGIN = 'https://emibaio.github.io/oraculo-v5/';
const resolveSitePath = (rel) => {
  if (!rel) return BASE_PREFIX;
  if (rel.startsWith('http://') || rel.startsWith('https://') || rel.startsWith('data:') || rel.startsWith('../')) return rel;
  return BASE_PREFIX + rel;
};
const getNeighborHref = (c) => {
  if (typeof window !== 'undefined' && window.TarotRouter && typeof window.TarotRouter.getLink === 'function') {
    return window.TarotRouter.getLink(c);
  }
  return "?arcano=" + encodeURIComponent(c.id);
};
const isStaticMode = () => Boolean(typeof window !== 'undefined' && window.TarotRouter && window.TarotRouter.isStaticCardPage && window.TarotRouter.isStaticCardPage());
const sound = window.sound;
const SharedArtDefs = window.SharedArtDefs;
const ArcanaDioramaArt = window.ArcanaDioramaArt;

// Copia segura al portapapeles: delega en window.copyTextSafe (motor_tarot.js)
function copyTextSafe(text) {
  if (!text) return Promise.resolve(false);
  if (typeof window.copyTextSafe === 'function') {
    return window.copyTextSafe(text);
  }
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  return Promise.resolve(false);
}

// --- ÍCONOS SVG ---
const Sparkles = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);
const Sun = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const Moon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const ArrowLeft = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);
const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
const Eye = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const Flame = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);
const CheckCircle2 = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

// --- CONCILIO DEL VELO ASTRAL (Lee de concilio_tarotistas.js con respaldo local) ---
const FALLBACK_CONCILIO = [
  { id: 'sofia', name: 'Sofía Lindholm', image: 'img/concilio/sofia.webp', sigil: '☉', role: 'Tarot Contemporáneo, Pedagogía Simbólica y Lectura Evolutiva', shortCredential: '7 años de práctica con el mazo Rider-Waite-Smith', cardBio: 'Especializada en traducir la simbología clásica a lecturas directas y aplicables a decisiones cotidianas.' },
  { id: 'miriam', name: 'Miriam Al-Zahra', image: 'img/concilio/miriam.webp', sigil: '✡', role: 'Cábala Hermética, Astrología Tradicional y Revisión Esotérica', shortCredential: '16 años de investigación en cábala y astrología clásica', cardBio: 'Investigadora de correspondencias astrológicas, letras hebreas y senderos del Árbol de la Vida.' },
  { id: 'clara', name: 'Clara del Río', image: 'img/concilio/clara.webp', sigil: '♀', role: 'Tarot Vincular, Lectura Afectiva y Registros Astrales', shortCredential: '11 años en lecturas relacionales y ciclos emocionales', cardBio: 'Especializada en lecturas afectivas, dinámicas de reciprocidad y nudos vinculares.' },
  { id: 'lyra', name: 'Lyra Vane', image: 'img/concilio/lyra.webp', sigil: '☀', role: 'Tarot Vocacional, Estrategia Material y Propósito', shortCredential: '12 años en lectura arquetípica y estrategia laboral', cardBio: 'Enfocada en oficio, acuerdos laborales, patrimonio y criterios concretos de decisión.' },
  { id: 'elena', name: 'Elena Kovács', image: 'img/concilio/elena.webp', sigil: '☿', role: 'Simbología Hermética, Iconografía Histórica y Psicología Arquetípica', shortCredential: '15 años en iconografía histórica y lectura de sombra', cardBio: 'Estudiosa de la iconografía del tarot histórico y la lectura psicológica de cada carta invertida.' }
];

function getAuthorPairForCard(cardId) {
  if (window.ConcilioEditorial && typeof window.ConcilioEditorial.getPairForCard === 'function') {
    return window.ConcilioEditorial.getPairForCard(cardId);
  }
  const pool = (window.CONCILIO_TAROTISTAS && window.CONCILIO_TAROTISTAS.length > 0) ? window.CONCILIO_TAROTISTAS : FALLBACK_CONCILIO;
  const key = String(cardId == null ? '0' : cardId);
  let seed = 0;
  for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) % 997;
  const primaryIdx = seed % pool.length;
  let reviewerIdx = (seed + 2) % pool.length;
  if (reviewerIdx === primaryIdx) reviewerIdx = (primaryIdx + 1) % pool.length;
  return { author: pool[primaryIdx], reviewer: pool[reviewerIdx] };
}

const CouncilPortrait = memo(function CouncilPortrait({ member, accent = 'gold' }) {
  const [imgFailed, setImgFailed] = useState(false);
  useEffect(() => { setImgFailed(false); }, [member?.id, member?.image]);
  const ringCls = accent === 'emerald'
    ? 'border-emerald-400/70 shadow-[0_0_18px_rgba(16,185,129,0.22)]'
    : 'border-[#d4af37]/80 shadow-[0_0_18px_rgba(212,175,55,0.28)]';

  if (!member?.image || imgFailed) {
    return (
      <div className={"w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 bg-[#140b26] border-2 flex items-center justify-center text-2xl text-amber-200 " + ringCls}>
        <span>{member?.sigil || '✦'}</span>
      </div>
    );
  }

  return (
    <img
      src={resolveSitePath(member.image)}
      alt={member.imageAlt || ("Retrato de " + member.name)}
      width="80"
      height="80"
      loading="lazy"
      decoding="async"
      onError={() => setImgFailed(true)}
      className={"w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 object-cover object-top bg-[#140b26] border-2 " + ringCls}
    />
  );
});

// --- DIORAMA 2.5D OPTIMIZADO: TRANSFORMACIONES DIRECTAS EN GPU (0 RE-RENDERS POR PIXEL) ---
const RevealedCardDiorama25D = memo(function RevealedCardDiorama25D({ card, activeNode, onSelectNode, isReversed, setIsReversed }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(0);
  const pendingRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const applyTiltFrame = useCallback(() => {
    rafRef.current = 0;
    const p = pendingRef.current;
    if (!p || !cardRef.current) return;
    cardRef.current.style.transition = p.isReset ? 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s linear';
    cardRef.current.style.transform = "rotateX(" + p.rx.toFixed(2) + "deg) rotateY(" + p.ry.toFixed(2) + "deg)";
    if (glareRef.current) {
      glareRef.current.style.transition = p.isReset ? 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s linear';
      glareRef.current.style.transform = "translate3d(" + p.gx.toFixed(1) + "px, " + p.gy.toFixed(1) + "px, 0)";
    }
  }, []);

  const updateTilt = useCallback((clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    pendingRef.current = {
      ry: (px - 0.5) * 28,
      rx: (0.5 - py) * 26,
      gx: (px - 0.5) * rect.width * 0.72,
      gy: (py - 0.5) * rect.height * 0.72,
      isReset: false
    };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(applyTiltFrame);
    }
  }, [applyTiltFrame]);

  const resetTilt = useCallback(() => {
    pendingRef.current = { rx: 0, ry: 0, gx: 0, gy: 0, isReset: true };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(applyTiltFrame);
    }
  }, [applyTiltFrame]);

  const dynamicAltText = card.imageAlt || "Ilustración esotérica de la carta " + card.name + " (" + card.numeral + ") del Tarot Velo Astral: " + card.subtitle + ". Destacan los símbolos " + (card.nodes || []).map((n) => n.title).join(", ") + ".";

  return (
    <div className="flex flex-col items-center gap-6" style={{ perspective: '1300px' }}>
      <div
        ref={cardRef}
        role="img"
        aria-label={dynamicAltText}
        onMouseMove={(e) => updateTilt(e.clientX, e.clientY)}
        onMouseLeave={resetTilt}
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          boxShadow: isReversed
            ? "0 25px 60px -10px rgba(0,0,0,0.95), 0 0 45px rgba(168, 85, 247, 0.55)"
            : "0 25px 60px -10px rgba(0,0,0,0.95), 0 0 40px " + (card.palette?.glow || "rgba(251,191,36,0.5)")
        }}
        className={"relative w-[236px] h-[374px] sm:w-[265px] sm:h-[420px] rounded-2xl bg-[#07050a] ring-2 ring-offset-4 ring-offset-[#07040e] cursor-grab active:cursor-grabbing select-none transition-shadow duration-500 " + (isReversed ? "ring-purple-400" : "ring-amber-300")}
      >
        <span className="sr-only">{dynamicAltText}</span>

        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: isReversed ? 'rotateZ(180deg)' : 'none',
            transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <div className="absolute inset-1 rounded-xl overflow-hidden" style={{ transform: 'translateZ(-32px)' }}><ArcanaDioramaArt card={card} layer="background" /></div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(10px)' }}><ArcanaDioramaArt card={card} layer="midground" /></div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(28px)' }}><ArcanaDioramaArt card={card} layer="character" /></div>

          <div className="absolute inset-0" style={{ transform: 'translateZ(46px)' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full pointer-events-none">
              <polyline points={(card.nodes || []).map((n) => n.x + "," + n.y).join(' ')} fill="none" stroke={isReversed ? "#c084fc" : "#fde047"} strokeWidth="0.65" strokeDasharray="2 1.5" opacity="0.85" />
            </svg>
            {(card.nodes || []).map((node, idx) => {
              const isSelected = activeNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => { sound?.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  onClick={(e) => { e.stopPropagation(); sound?.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  style={{ left: node.x + "%", top: node.y + "%" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none pointer-events-auto cursor-pointer"
                >
                  <span className={"absolute -inset-2.5 rounded-full transition-transform duration-200 " + (isSelected ? (isReversed ? "bg-purple-400/40 scale-125" : "bg-amber-400/35 scale-125") : "bg-amber-300/15 group-hover:scale-125")} />
                  <span className={"relative flex items-center justify-center w-5 h-5 rounded-full border transition-transform duration-200 " + (isSelected ? (isReversed ? "bg-purple-300 border-white text-black scale-125 shadow-[0_0_16px_#c084fc]" : "bg-amber-300 border-white text-black scale-125 shadow-[0_0_16px_#fde047]") : "bg-[#0f081d]/90 border-amber-400 text-amber-300")}>
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(54px)' }}><ArcanaDioramaArt card={card} layer="frame" /></div>
        </div>

        {/* Brillo especular GPU por translate3d (0 repaint de gradiente) */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none mix-blend-screen" style={{ transform: 'translateZ(60px)' }}>
          <div
            ref={glareRef}
            style={{
              transform: 'translate3d(0px, 0px, 0)',
              willChange: 'transform',
              background: "radial-gradient(circle at 50% 50%, rgba(254, 240, 138, 0.30) 0%, rgba(192, 132, 252, 0.12) 38%, transparent 68%)"
            }}
            className="absolute -inset-1/2 pointer-events-none"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          sound?.playHeavyCardThud(isReversed ? 1.15 : 0.85);
          sound?.playHarpNote(isReversed ? 4 : 1);
          setIsReversed(!isReversed);
        }}
        className={"group flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 shadow-lg cursor-pointer font-ui " + (isReversed ? "bg-gradient-to-r from-[#241038] via-[#6b21a8] to-[#241038] border-purple-300 text-purple-100 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105" : "bg-gradient-to-r from-[#2c1b08] via-[#b45309] to-[#2c1b08] border-amber-300 text-[#07050a] font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105")}
      >
        <svg className={"w-5 h-5 transition-transform duration-500 " + (isReversed ? "rotate-180 text-purple-200" : "text-amber-100")} viewBox="0 0 32 32" fill="none">
          <rect x="4" y="2" width="24" height="28" rx="4" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.45" />
          <path d="M11 19C11 13.5 15 10 21 10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <polygon points="21,6.5 25.5,10 21,13.5" fill="currentColor" />
          <path d="M21 13C21 18.5 17 22 11 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <polygon points="11,18.5 6.5,22 11,25.5" fill="currentColor" />
          <polygon points="16,13.5 18,16 16,18.5 14,16" fill="currentColor" />
        </svg>
        <span className="text-xs uppercase tracking-[0.1em]">
          {isReversed ? 'Enderezar Carta (Modo Luz)' : 'Invertir Arcano (Modo Sombra)'}
        </span>
      </button>
    </div>
  );
});

window.ArcanaPageLayout = function ArcanaPageLayout({ card, neighbors }) {
  const [isReversed, setIsReversed] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('modo') === 'sombra' || params.get('invertida') === '1';
  });
  const [octaveIdx, setOctaveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [actSealed, setActSealed] = useState(false);
  const shareTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
    };
  }, []);

  // Resolver la carta en la octava (0..4) y polaridad (Solar/Lunar) activas
  const activeCard = useMemo(() => {
    if (!card) return null;
    if (window.TAROT_DB && typeof window.TAROT_DB.resolveCardAtOctave === 'function') {
      return window.TAROT_DB.resolveCardAtOctave(card, isReversed, octaveIdx);
    }
    return card;
  }, [card, isReversed, octaveIdx]);

  const [activeNode, setActiveNode] = useState(activeCard?.nodes?.[0] || null);
  const { author, reviewer } = useMemo(() => getAuthorPairForCard(card?.id), [card?.id]);

  // Resetear al cambiar de carta en el enrutador
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const startShadow = params.get('modo') === 'sombra' || params.get('invertida') === '1';
    setIsReversed(startShadow);
    setOctaveIdx(0);
  }, [card?.id]);

  // Actualizar el nodo seleccionado y estado del sello al cambiar polaridad o carta
  useEffect(() => {
    if (!activeCard) return;
    setActiveNode((prev) => {
      const found = (activeCard.nodes || []).find((n) => n.id === prev?.id);
      return found || activeCard.nodes?.[0] || null;
    });
    if (window.TAROT_DB && typeof window.TAROT_DB.isPsychomagicActSealed === 'function') {
      setActSealed(window.TAROT_DB.isPsychomagicActSealed(activeCard.id, isReversed));
    }
  }, [activeCard, isReversed]);

  const handleSealAct = useCallback(() => {
    if (!activeCard) return;
    const actObj = activeCard.theAlchemy || activeCard.actionOracle || {};
    if (window.TAROT_DB && typeof window.TAROT_DB.sealPsychomagicAct === 'function') {
      window.TAROT_DB.sealPsychomagicAct(
        activeCard.id,
        isReversed,
        actObj.talismanPhrase,
        actObj.command
      );
    }
    if (actObj.talismanPhrase) {
      copyTextSafe(actObj.talismanPhrase);
    }
    sound?.playSkyrimNodeChime?.(2);
    sound?.playHarpNote?.(5);
    setActSealed(true);
  }, [activeCard, isReversed]);

  const handleShare = useCallback(() => {
    copyTextSafe(window.location.href).then((ok) => {
      if (!ok) return;
      sound?.playSkyrimNodeChime?.(1);
      setCopied(true);
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
      shareTimerRef.current = setTimeout(() => setCopied(false), 2200);
    });
  }, []);

  if (!activeCard) return null;

  const isMajor = activeCard.type === 'major' || activeCard.arcanaType === 'major' || Number(activeCard.id) <= 21;
  const activeDomains = activeCard.domains || {};
  const activeCounsel = activeCard.counsel;
  const activeYesNo = activeCard.correspondences?.yesNo || activeCard.yesNo;
  const activeAction = activeCard.theAlchemy || activeCard.actionOracle;

  const cardFaqs = activeCard.faqs || [
    {
      question: "¿Qué responde " + activeCard.name + " en una tirada de Tarot Sí o No?",
      answer: "Al derecho (En Luz), la respuesta oracular de " + activeCard.name + " es: “" + (card.correspondences?.yesNo || activeYesNo) + "”. En polaridad invertida (En Sombra), su respuesta es: “" + (card.reversed?.correspondences?.yesNo || card.reversed?.yesNo || "Bloqueo o demora que exige transmutación previa") + "”."
    },
    {
      question: isMajor
        ? ("¿Cuál es la correspondencia cabalística y alquímica de " + activeCard.name + "?")
        : ("¿Cuál es el elemento, decanato astrológico y tiempo de " + activeCard.name + "?"),
      answer: (activeCard.correspondences?.hebrewLetter ? ("Está regida por la letra hebrea " + activeCard.correspondences.hebrewLetter + " (" + (activeCard.correspondences.treeOfLifePath || "") + "). ") : ("Pertenece al elemento " + (activeCard.correspondences?.element || "") + " (" + (activeCard.correspondences?.astro || "") + "). ")) + (activeCard.correspondences?.alchemy ? ("En alquimia representa: " + activeCard.correspondences.alchemy + ". ") : "") + (activeCard.correspondences?.tarotTiming ? ("Tiempo orientativo: " + activeCard.correspondences.tarotTiming + ".") : "")
    },
    {
      question: "¿Qué significa " + activeCard.name + " en el amor, el trabajo y el dinero?",
      answer: "En el amor: " + (activeDomains.love || "") + " En el trabajo y dinero: " + (activeDomains.work || "") + " " + (activeDomains.money || "")
    },
    {
      question: "¿Qué acto de psicomagia o consejo propone " + activeCard.name + "?",
      answer: (activeAction?.psychomagicAct ? (activeAction.psychomagicAct + " Mantra: “" + activeAction.talismanPhrase + "”. ") : "") + "Consejo: “" + activeCounsel + "”."
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": activeCard.seo?.title || activeCard.seoTitle || (activeCard.name + " en el Tarot"),
        "description": activeCard.seo?.description || activeCard.seoDescription || activeCard.meaning,
        "author": {
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.role,
          "image": SITE_ORIGIN + author.image,
          "url": SITE_ORIGIN + "sobre-nosotros.html#" + author.id,
          "knowsAbout": author.focusTags || []
        },
        "reviewedBy": {
          "@type": "Person",
          "name": reviewer.name,
          "jobTitle": reviewer.role,
          "image": SITE_ORIGIN + reviewer.image,
          "url": SITE_ORIGIN + "sobre-nosotros.html#" + reviewer.id,
          "knowsAbout": reviewer.focusTags || []
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Oráculo", "item": SITE_ORIGIN },
          { "@type": "ListItem", "position": 2, "name": activeCard.type === 'minor' ? ("Palo de " + activeCard.suitName) : "Arcanos Mayores" },
          { "@type": "ListItem", "position": 3, "name": activeCard.name }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": cardFaqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };

  return (
    <div style={{ background: 'radial-gradient(ellipse at 50% 25%, #190e30 0%, #090510 55%, #040207 100%)' }} className="min-h-screen text-amber-50 selection:bg-amber-400 selection:text-black">
      {SharedArtDefs && <SharedArtDefs />}
      {!isStaticMode() && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />}

      {/* Cabecera sticky opaca para 60+ FPS al scrollear */}
      <header className="sticky top-0 z-50 bg-[#040207] border-b border-[#d4af37]/35 shadow-[0_8px_24px_rgba(0,0,0,0.85)] px-3 sm:px-8 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <nav aria-label="Breadcrumb" className="font-ui text-xs sm:text-[13px] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-amber-200/95 flex items-center min-w-0">
            <a href={resolveSitePath("index.html")} className="hover:text-amber-300 whitespace-nowrap">Oráculo</a>
            <span className="mx-1.5 sm:mx-2 text-amber-500 hidden sm:inline">›</span>
            <span className="hidden sm:inline whitespace-nowrap">{activeCard.type === 'minor' ? ("Palo de " + activeCard.suitName) : 'Arcanos Mayores'}</span>
            <span className="mx-1.5 sm:mx-2 text-amber-500">›</span>
            <span className="text-amber-300 font-bold truncate">{activeCard.name}</span>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => { sound?.playHarpNote?.(isReversed ? 4 : 1); setIsReversed(!isReversed); }}
              className={"font-ui px-2.5 sm:px-3 py-1 rounded-full border text-xs uppercase tracking-wider cursor-pointer transition whitespace-nowrap " + (isReversed ? "bg-purple-900/60 border-purple-300 text-purple-100" : "bg-amber-500/15 border-amber-400/50 text-amber-200")}
            >
              {isReversed ? "☽ Sombra" : "☉ Luz"}
            </button>
            <button onClick={handleShare} className="font-ui px-3 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/50 text-xs uppercase tracking-wider text-amber-200 hover:bg-amber-500/25 cursor-pointer transition whitespace-nowrap">
              {copied ? '✔ Copiado' : '✦ Compartir'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 space-y-14">
        {/* CABECERA MAGISTRAL DEL ARCANO */}
        <header className="text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-ui inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-xs uppercase tracking-[0.08em] text-amber-300">
              {activeCard.type === 'minor' ? ("Arcano Menor • Palo de " + activeCard.suitName) : ("Arcano Mayor " + activeCard.numeral)}
            </span>
            <span className={"font-ui inline-block px-4 py-1 rounded-full border text-xs uppercase tracking-[0.12em] font-bold " + (isReversed ? "bg-purple-950/80 border-purple-400 text-purple-200" : "bg-emerald-950/80 border-emerald-400/60 text-emerald-300")}>
              {isReversed ? "En Sombra (Invertida)" : "En Luz (Al Derecho)"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-amber-200 break-words">
            {activeCard.name}
          </h1>
          <p className={"font-ui text-sm sm:text-base uppercase tracking-[0.08em] " + (isReversed ? "text-purple-300" : "text-amber-300/90")}>
            “{activeCard.subtitle}”
          </p>

          {/* SELECTOR DE LAS 5 OCTAVAS POLIMÓRFICAS (PARA ARCANOS MAYORES) */}
          {isMajor && (
            <div className="pt-2 flex flex-col items-center gap-2">
              <span className="font-ui text-xs uppercase tracking-[0.12em] text-amber-300/95">
                ✦ Explorar las 5 Octavas de Sabiduría del Grimorio ✦
              </span>
              <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-[#0c0717]/95 border border-amber-500/35">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => { sound?.playHarpNote?.(idx); setOctaveIdx(idx); }}
                    className={"font-ui px-3.5 py-1 rounded-full text-xs uppercase tracking-wider transition cursor-pointer " + (octaveIdx === idx ? (isReversed ? "bg-purple-500 text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.6)]" : "bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.6)]") : "text-amber-200/95 hover:text-amber-200 hover:bg-white/[0.05]")}
                  >
                    Octava {["I", "II", "III", "IV", "V"][idx]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeCard.correspondences && (
            <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200">
                Elemento: <strong>{activeCard.correspondences.element}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200">
                Regente: <strong>{activeCard.correspondences.astro}</strong>
              </span>
              {activeCard.correspondences.hebrewLetter && (
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200">
                  Letra Hebrea: <strong>{activeCard.correspondences.hebrewLetter}</strong>
                </span>
              )}
              <span className={"px-3 py-1 rounded-full border " + (isReversed ? "bg-rose-500/20 border-rose-400/40 text-rose-200" : "bg-emerald-500/20 border-emerald-400/40 text-emerald-200")}>
                Tarot Sí o No: <strong>{activeYesNo}</strong>
              </span>
            </div>
          )}

          {activeCard.correspondences?.keywords?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {activeCard.correspondences.keywords.map((kw) => (
                <span key={kw} className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-100/90 text-xs">
                  ✦ {kw}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* LA VOZ DEL ARQUETIPO Y AXIOMA HERMÉTICO */}
        {activeCard.oracleVoice && (
          <section className={"p-6 sm:p-8 rounded-3xl border-2 shadow-xl space-y-3 " + (isReversed ? "bg-gradient-to-r from-[#1c0d2b] via-[#0c0614] to-[#1c0d2b] border-purple-400/60" : "bg-gradient-to-r from-[#241606] via-[#0d0716] to-[#241606] border-[#d4af37]/70")}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={"font-ui text-xs uppercase tracking-[0.12em] font-bold " + (isReversed ? "text-purple-300" : "text-amber-400")}>
                {isReversed ? ("☽ La Voz de " + activeCard.name + " en Sombra (Octava " + ["I", "II", "III", "IV", "V"][octaveIdx] + ")") : ("☉ La Voz de " + activeCard.name + " en Luz (Octava " + ["I", "II", "III", "IV", "V"][octaveIdx] + ")")}
              </span>
              {activeCard.correspondences?.alchemy && (
                <span className="font-ui text-xs text-amber-200/80">
                  Operación Alquímica: {activeCard.correspondences.alchemy}
                </span>
              )}
            </div>
            <blockquote className="text-xl sm:text-2xl italic text-amber-50 leading-relaxed">
              “{activeCard.oracleVoice}”
            </blockquote>
            {activeCard.correspondences?.hermeticAxiom && (
              <div className="pt-3 border-t border-white/10 text-sm sm:text-base text-amber-300/90">
                <strong className="font-ui uppercase tracking-wider text-xs mr-2">Axioma Hermético:</strong>
                {activeCard.correspondences.hermeticAxiom}
              </div>
            )}
          </section>
        )}

        {/* MAPA DE LECTURA RÁPIDA */}
        <nav aria-label="Mapa de lectura" className="p-5 rounded-2xl bg-[#090513]/85 border border-[#d4af37]/40">
          <h2 className="font-ui text-xs uppercase tracking-[0.12em] text-amber-400 font-bold mb-3">
            ✦ Mapa del Códice de {activeCard.name}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-amber-100/90">
            <li><a href="#simbologia" className="hover:text-amber-300">01. Diorama 2.5D y Nodos Secretos</a></li>
            <li><a href="#psique" className="hover:text-amber-300">02. Espejo Junguiano y Sombra</a></li>
            <li><a href="#dominios" className="hover:text-amber-300">03. Los 5 Dominios Vitales</a></li>
            <li><a href="#psicomagia" className="hover:text-amber-300">04. Ritual y Acto Psicomágico</a></li>
            <li><a href="#cabala" className="hover:text-amber-300">05. Cábala, Árbol y Alquimia</a></li>
            <li><a href="#faqs" className="hover:text-amber-300">06. Preguntas Frecuentes (FAQ)</a></li>
          </ul>
        </nav>

        {/* SECCIÓN 01: DIORAMA 2.5D + SIGNIFICADO PROFUNDO + NODOS */}
        <section id="simbologia" className="scroll-mt-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4 sm:p-8 rounded-3xl bg-[#090513]/95 border border-[#d4af37]/50">
          <div className="flex-shrink-0">
            <RevealedCardDiorama25D card={activeCard} activeNode={activeNode} onSelectNode={setActiveNode} isReversed={isReversed} setIsReversed={setIsReversed} />
          </div>

          <div className="flex-1 space-y-6">
            <div className={"p-5 rounded-xl border " + (isReversed ? "bg-purple-950/35 border-purple-400/40 text-purple-100" : "bg-amber-500/10 border-amber-400/35 text-amber-50")}>
              <div className="font-ui text-xs uppercase tracking-[0.1em] font-bold mb-2 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  {isReversed ? <Moon className="w-4 h-4 text-purple-300" /> : <Sun className="w-4 h-4 text-amber-300" />}
                  <span>{isReversed ? 'Magisterio en Sombra (Invertida):' : 'Magisterio en Luz (Al Derecho):'}</span>
                </span>
                {isMajor && <span className="text-xs opacity-75">Octava {["I", "II", "III", "IV", "V"][octaveIdx]}</span>}
              </div>
              <p className="text-lg leading-relaxed">{activeCard.meaning}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(activeCard.nodes || []).map((node, i) => (
                <button
                  key={node.id}
                  onClick={() => { sound?.playSkyrimNodeChime(i); setActiveNode(node); }}
                  className={"text-left p-3 rounded-xl border transition-all font-ui cursor-pointer " + (activeNode?.id === node.id ? (isReversed ? "bg-purple-900/50 border-purple-300" : "bg-amber-400/25 border-amber-300") : "bg-[#120924]/70 border-amber-500/25 hover:border-amber-400/60")}
                >
                  <span className="text-xs uppercase tracking-wider text-amber-400 block mb-1">Símbolo 0{i + 1}</span>
                  <span className="text-xs font-bold text-amber-100 leading-snug">{node.title}</span>
                </button>
              ))}
            </div>

            {activeNode && (
              <div className={"p-5 rounded-xl border-l-4 transition-all space-y-2.5 " + (isReversed ? "bg-purple-900/35 border-l-purple-400" : "bg-amber-500/15 border-l-amber-400")}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-amber-300">{activeNode.title}</h4>
                  {activeNode.esotericFormula && (
                    <span className="px-2.5 py-0.5 rounded bg-black/50 border border-amber-400/40 font-mono text-xs text-amber-300">
                      {activeNode.esotericFormula}
                    </span>
                  )}
                </div>
                <p className="text-lg leading-relaxed">“{activeNode.secret}”</p>
                {activeNode.meditationPrompt && (
                  <div className="pt-2 border-t border-white/10 text-sm text-purple-200 italic flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-300 flex-shrink-0" />
                    <span><strong>Pregunta de Autoindagación:</strong> {activeNode.meditationPrompt}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 02: PSICOLOGÍA JUNGUIANA, POLARIDAD Y CLÍNICA DE LA SOMBRA */}
        <section id="psique" className="scroll-mt-20 space-y-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0717]/95 border border-purple-500/40 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-500/25 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl text-purple-200 flex items-center gap-2.5">
                <Eye className="w-6 h-6 text-purple-300" />
                <span>{isReversed ? "Diagnóstico Clínico de la Sombra" : "El Espejo Psicológico (Carl G. Jung)"}</span>
              </h2>
              {(activeCard.correspondences?.jungianArchetype || activeCard.correspondences?.jungianComplex) && (
                <span className="font-ui text-xs px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/50 text-purple-200">
                  {isReversed ? (activeCard.correspondences.jungianComplex || activeCard.correspondences.jungianArchetype) : activeCard.correspondences.jungianArchetype}
                </span>
              )}
            </div>

            {isReversed && activeCard.shadowPolarity && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-1.5">
                  <h3 className="font-ui text-xs uppercase tracking-widest text-rose-300 font-bold">
                    ▲ Polaridad por Exceso (Desborde / Inflación)
                  </h3>
                  <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeCard.shadowPolarity.byExcess}</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/40 space-y-1.5">
                  <h3 className="font-ui text-xs uppercase tracking-widest text-sky-300 font-bold">
                    ▼ Polaridad por Defecto (Parálisis / Represión)
                  </h3>
                  <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeCard.shadowPolarity.byDeficiency}</p>
                </div>
              </div>
            )}

            {isReversed && activeCard.theWound ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-purple-400/35 space-y-2">
                  <h3 className="font-ui text-xs uppercase tracking-widest text-purple-300 font-bold">
                    ✦ La Herida Raíz Inconsciente
                  </h3>
                  <p className="text-lg text-amber-50/95 leading-relaxed">{activeCard.theWound}</p>
                </div>
                {activeCard.theIllusion && (
                  <div className="p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-400/35 space-y-2">
                    <h3 className="font-ui text-xs uppercase tracking-widest text-amber-300 font-bold">
                      ✦ El Espejismo del Ego (El Autoengaño)
                    </h3>
                    <p className="text-lg text-amber-100/95 leading-relaxed">{activeCard.theIllusion}</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-lg text-amber-50/95 leading-relaxed">
                {activeCard.psyche || activeCard.lightAndShadow}
              </p>
            )}

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="font-ui text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                Síntesis de Dualidad (Luz y Sombra)
              </h3>
              <p className="text-base text-amber-100/90 leading-relaxed">{activeCard.lightAndShadow}</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 03: LOS 5 DOMINIOS VITALES */}
        {activeDomains && (
          <section id="dominios" className="scroll-mt-20 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-amber-200">
              Los 5 Dominios de {activeCard.name} ({isReversed ? "En Sombra" : "En Luz"})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <section className="p-6 rounded-2xl bg-pink-500/[0.06] border border-pink-400/30 space-y-2">
                <h3 className="font-ui text-sm uppercase tracking-widest text-pink-300 font-bold">♥ Amor y Vínculos</h3>
                <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeDomains.love}</p>
              </section>

              <section className="p-6 rounded-2xl bg-amber-500/[0.06] border border-amber-400/30 space-y-2">
                <h3 className="font-ui text-sm uppercase tracking-widest text-amber-300 font-bold">✦ Trabajo, Oficio y Estrategia</h3>
                <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeDomains.work}</p>
              </section>

              {activeDomains.money && (
                <section className="p-6 rounded-2xl bg-emerald-500/[0.06] border border-emerald-400/30 space-y-2">
                  <h3 className="font-ui text-sm uppercase tracking-widest text-emerald-300 font-bold">◈ Dinero y Patrimonio</h3>
                  <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeDomains.money}</p>
                </section>
              )}

              <section className="p-6 rounded-2xl bg-indigo-500/[0.08] border border-indigo-400/30 space-y-2">
                <h3 className="font-ui text-sm uppercase tracking-widest text-indigo-300 font-bold">❂ Camino Espiritual</h3>
                <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeDomains.spirit}</p>
              </section>
            </div>

            {activeDomains.healthAndEnergy && (
              <section className="p-6 rounded-2xl bg-cyan-500/[0.06] border border-cyan-400/30 space-y-2">
                <h3 className="font-ui text-sm uppercase tracking-widest text-cyan-300 font-bold">⚡ Salud, Cuerpo y Bioelectricidad</h3>
                <p className="text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{activeDomains.healthAndEnergy}</p>
              </section>
            )}
          </section>
        )}

        {/* SECCIÓN 04: ORÁCULO DE ACCIÓN, ALQUIMIA Y PSICOMAGIA */}
        {activeAction && (
          <section id="psicomagia" className="scroll-mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#150c28] to-[#090513] border-2 border-[#d4af37]/70 space-y-6 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/25 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl text-amber-200 flex items-center gap-2.5">
                <Flame className="w-6 h-6 text-amber-400" />
                <span>{isReversed ? "Alquimia de Transmutación y Psicomagia" : "Oráculo de Acción y Psicomagia"}</span>
              </h2>
              <span className="font-ui text-xs uppercase tracking-widest text-amber-300">
                Protocolo Operativo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-emerald-950/35 border border-emerald-400/40 space-y-1.5">
                <h3 className="font-ui text-xs uppercase tracking-widest text-emerald-300 font-bold">
                  ✦ El Decreto Ejecutivo
                </h3>
                <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed">{activeAction.command}</p>
              </div>
              <div className="p-5 rounded-2xl bg-rose-950/35 border border-rose-400/40 space-y-1.5">
                <h3 className="font-ui text-xs uppercase tracking-widest text-rose-300 font-bold">
                  ⊘ La Prohibición Iniciática
                </h3>
                <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed">{activeAction.prohibition}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-400/45 space-y-2">
              <h3 className="font-ui text-xs uppercase tracking-widest text-amber-300 font-bold">
                ⚗ Acto de Psicomagia y Laboratorio
              </h3>
              <p className="text-lg text-amber-100 leading-relaxed">{activeAction.psychomagicAct}</p>
            </div>

            {activeAction.talismanPhrase && (
              <div className="p-6 rounded-2xl bg-[#05020a] border border-[#d4af37] text-center space-y-4">
                <span className="font-ui text-xs uppercase tracking-[0.08em] text-amber-400 block">
                  ✦ Frase Talismán de {activeCard.name} ✦
                </span>
                <p className="text-xl sm:text-2xl italic font-bold text-amber-200">
                  “{activeAction.talismanPhrase}”
                </p>
                <button
                  type="button"
                  onClick={handleSealAct}
                  className={"font-ui inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.1em] font-bold transition-all cursor-pointer " + (actSealed ? "bg-emerald-500/25 border border-emerald-400 text-emerald-200" : "bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-black border border-amber-200 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.45)]")}
                >
                  {actSealed ? (
                    <React.Fragment><CheckCircle2 className="w-4 h-4" /> Decreto Sellado • Talismán Copiado</React.Fragment>
                  ) : (
                    <React.Fragment><Sparkles className="w-4 h-4" /> Sellar Acto Psicomágico y Copiar Talismán</React.Fragment>
                  )}
                </button>
              </div>
            )}
          </section>
        )}

        {/* SECCIÓN 05: FICHA TÉCNICA CABALÍSTICA Y ALQUÍMICA */}
        {activeCard.correspondences && (
          <section id="cabala" className="scroll-mt-20 p-6 rounded-2xl bg-[#090513]/85 border border-amber-500/30 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl text-amber-200">
              Correspondencias Herméticas y Cabalísticas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {activeCard.correspondences.hebrewLetter && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-ui text-xs uppercase tracking-widest text-amber-400 block">Letra Hebrea</span>
                  <strong className="text-base text-amber-100">{activeCard.correspondences.hebrewLetter}</strong>
                </div>
              )}
              {(activeCard.correspondences.treeOfLifePath || activeCard.correspondences.qliphoth) && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-ui text-xs uppercase tracking-widest text-purple-300 block">
                    {isReversed && activeCard.correspondences.qliphoth ? "Sombra Qliphótica" : "Sendero del Árbol de la Vida"}
                  </span>
                  <strong className="text-base text-amber-100">
                    {isReversed && activeCard.correspondences.qliphoth ? activeCard.correspondences.qliphoth : activeCard.correspondences.treeOfLifePath}
                  </strong>
                </div>
              )}
              {activeCard.correspondences.alchemy && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-ui text-xs uppercase tracking-widest text-emerald-300 block">Fórmula Alquímica</span>
                  <strong className="text-base text-amber-100">{activeCard.correspondences.alchemy}</strong>
                </div>
              )}
              {activeCard.correspondences.tarotTiming && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-ui text-xs uppercase tracking-widest text-cyan-300 block">Tiempo y Estación Oracular</span>
                  <strong className="text-base text-amber-100">{activeCard.correspondences.tarotTiming}</strong>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CONSEJO ORACULAR DE CIERRE */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#120924] to-amber-500/15 border border-[#d4af37] text-center space-y-2">
          <span className="font-ui text-xs uppercase tracking-[0.12em] text-amber-300">✦ Consejo Oracular de {activeCard.name} ✦</span>
          <p className="text-xl italic font-semibold text-amber-100">“{activeCounsel}”</p>
        </div>

        {/* CTA AL ORÁCULO INTERACTIVO */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1a0f2e] to-[#090513] border-2 border-[#d4af37] text-center shadow-[0_0_50px_rgba(212,175,55,0.25)]">
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-amber-300 mb-2">✦ ¿Buscás respuesta a tu situación actual? ✦</p>
          <h2 className="font-display text-xl sm:text-2xl text-amber-100 mb-5">Las cartas ya están barajadas en el altar astral</h2>
          <a href={resolveSitePath("index.html")} className="font-display inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-[#07050a] font-black tracking-[0.1em] uppercase text-sm sm:text-base border-2 border-amber-100 shadow-[0_0_35px_rgba(251,191,36,0.75)] hover:scale-105 transition-transform">
            ✦ Consultar el Oráculo Gratis Ahora
          </a>
        </div>

        {/* SECCIÓN 06: PREGUNTAS FRECUENTES (FAQ SEO) */}
        <section id="faqs" className="scroll-mt-20 pt-8 border-t border-amber-500/30 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-amber-200">
            Preguntas Frecuentes sobre {activeCard.name}
          </h2>
          <div className="space-y-3">
            {cardFaqs.map((faq, i) => (
              <details key={i} className="group p-4 rounded-2xl bg-[#0c0717]/95 border border-amber-500/30">
                <summary className="font-ui cursor-pointer font-bold text-amber-200 flex justify-between items-center text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-amber-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-base sm:text-[17px] text-amber-50/95 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONCILIO DE AUTORÍA Y REVISIÓN */}
        <section aria-label="Autoría y revisión editorial" className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#120924] via-[#090513] to-[#120924] border border-[#d4af37]/55 shadow-[0_14px_40px_rgba(0,0,0,0.65)] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/25 pb-3">
            <span className="font-ui text-xs sm:text-[13px] uppercase tracking-[0.12em] text-amber-300 font-bold">
              ✦ Concilio del Velo Astral • Revisión Cruzada
            </span>
            <a
              href={resolveSitePath("sobre-nosotros.html")}
              className="font-ui text-xs sm:text-[13px] uppercase tracking-[0.08em] text-purple-200 hover:text-amber-300 transition-colors"
            >
              Conocer al Concilio ›
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="flex items-start gap-4">
              <a href={resolveSitePath("sobre-nosotros.html#" + author.id)} className="flex-shrink-0 hover:scale-105 transition-transform">
                <CouncilPortrait member={author} accent="gold" />
              </a>
              <div className="min-w-0 space-y-1.5">
                <span className="font-ui text-xs uppercase tracking-[0.12em] text-amber-400 font-bold block">
                  ✦ Redacción e Interpretación
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-amber-100 leading-snug">
                  <a href={resolveSitePath("sobre-nosotros.html#" + author.id)} className="hover:text-amber-300 transition-colors">
                    <span className="text-amber-300 mr-1.5">{author.sigil}</span>{author.name}
                  </a>
                </h4>
                <p className="text-xs sm:text-sm text-purple-300 font-semibold leading-snug">{author.role}</p>
                {author.shortCredential && (
                  <p className="text-xs sm:text-sm text-amber-200/95 italic">{author.shortCredential}</p>
                )}
                <p className="text-xs sm:text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{author.cardBio || author.bio}</p>
                <a
                  href={resolveSitePath("sobre-nosotros.html#" + author.id)}
                  className="font-ui inline-block pt-1 text-xs uppercase tracking-[0.08em] text-amber-300/90 hover:text-amber-200"
                >
                  Ver perfil completo ›
                </a>
              </div>
            </article>

            <article className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-amber-500/25 pt-5 md:pt-0 md:pl-6">
              <a href={resolveSitePath("sobre-nosotros.html#" + reviewer.id)} className="flex-shrink-0 hover:scale-105 transition-transform">
                <CouncilPortrait member={reviewer} accent="emerald" />
              </a>
              <div className="min-w-0 space-y-1.5">
                <span className="font-ui text-xs uppercase tracking-[0.12em] text-emerald-300 font-bold block">
                  ✔ Revisión Simbólica y Doctrinaria
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-amber-100 leading-snug">
                  <a href={resolveSitePath("sobre-nosotros.html#" + reviewer.id)} className="hover:text-amber-300 transition-colors">
                    <span className="text-emerald-300 mr-1.5">{reviewer.sigil}</span>{reviewer.name}
                  </a>
                </h4>
                <p className="text-xs sm:text-sm text-purple-300 font-semibold leading-snug">{reviewer.role}</p>
                {reviewer.shortCredential && (
                  <p className="text-xs sm:text-sm text-amber-200/95 italic">{reviewer.shortCredential}</p>
                )}
                <p className="text-xs sm:text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{reviewer.cardBio || reviewer.bio}</p>
                <a
                  href={resolveSitePath("sobre-nosotros.html#" + reviewer.id)}
                  className="font-ui inline-block pt-1 text-xs uppercase tracking-[0.08em] text-emerald-300/90 hover:text-emerald-200"
                >
                  Ver perfil completo ›
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* NAVEGACIÓN DEL MAZO */}
        {neighbors && (
          <footer className="pt-10 border-t border-amber-500/30 space-y-6">
            <span className="font-ui text-xs uppercase tracking-[0.12em] text-amber-400 font-bold block">✦ Navegación del Mazo</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {neighbors.prev && (
                <a
                  href={getNeighborHref(neighbors.prev)}
                  onClick={(e) => { if (!isStaticMode()) { e.preventDefault(); window.TarotRouter?.navigateTo(neighbors.prev); } }}
                  className="group p-4 rounded-xl bg-[#0c0717]/95 border border-amber-500/35 hover:border-amber-300 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-16 bg-[#120824] rounded-md border border-amber-500/30 flex items-center justify-center font-display text-amber-300 font-bold">{neighbors.prev.numeral}</div>
                  <div>
                    <span className="font-ui text-xs uppercase tracking-widest text-amber-300/95 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Carta Anterior</span>
                    <h4 className="font-display text-lg text-amber-100 group-hover:text-amber-300 transition-colors">{neighbors.prev.name}</h4>
                  </div>
                </a>
              )}
              {neighbors.next && (
                <a
                  href={getNeighborHref(neighbors.next)}
                  onClick={(e) => { if (!isStaticMode()) { e.preventDefault(); window.TarotRouter?.navigateTo(neighbors.next); } }}
                  className="group p-4 rounded-xl bg-[#0c0717]/95 border border-amber-500/35 hover:border-amber-300 transition-all flex items-center justify-end gap-4 text-right"
                >
                  <div>
                    <span className="font-ui text-xs uppercase tracking-widest text-amber-300/95 flex items-center justify-end gap-1">Carta Siguiente <ArrowRight className="w-3 h-3" /></span>
                    <h4 className="font-display text-lg text-amber-100 group-hover:text-amber-300 transition-colors">{neighbors.next.name}</h4>
                  </div>
                  <div className="w-12 h-16 bg-[#120824] rounded-md border border-amber-500/30 flex items-center justify-center font-display text-amber-300 font-bold">{neighbors.next.numeral}</div>
                </a>
              )}
            </div>

            {neighbors.related && neighbors.related.length > 0 && (
              <div className="pt-4">
                <span className="font-ui text-xs uppercase tracking-[0.1em] text-purple-300 block mb-3">
                  Alquimia y Sintonía Elemental ({activeCard.correspondences?.element}):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {neighbors.related.map((rel) => (
                    <a
                      key={rel.id}
                      href={getNeighborHref(rel)}
                      onClick={(e) => { if (!isStaticMode()) { e.preventDefault(); window.TarotRouter?.navigateTo(rel); } }}
                      className="p-3 rounded-xl bg-[#090513]/80 border border-purple-500/30 hover:border-amber-300 transition text-center"
                    >
                      <span className="font-display text-xs text-amber-300 block">{rel.numeral}</span>
                      <span className="font-ui text-sm font-bold text-amber-100">{rel.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </footer>
        )}

        <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/90 font-ui uppercase tracking-[0.08em]">
          <span>✦ Oráculo del Velo Astral</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={resolveSitePath("index.html")} className="hover:text-amber-300 transition-colors">Altar</a>
            <span className="text-amber-500/35">•</span>
            <a href={resolveSitePath("tarot-si-o-no.html")} className="hover:text-emerald-300 transition-colors">Tarot Sí o No</a>
            <span className="text-amber-500/35">•</span>
            <a href={resolveSitePath("sobre-nosotros.html")} className="hover:text-amber-300 transition-colors">Sobre Nosotros</a>
            <span className="text-amber-500/35">•</span>
            <a href={resolveSitePath("privacidad.html")} className="hover:text-amber-300 transition-colors">Privacidad y Aviso Legal</a>
          </div>
        </div>
      </main>
    </div>
  );
};
`;

(function compileLayout() {
  if (typeof Babel !== 'undefined') {
    const wrapped = "(function() {\n" + LAYOUT_ARCANO_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [['react', { runtime: 'classic' }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Layout Maestro del Códice (Diorama 2.5D GPU • 0 Re-renders) activo.", "color: #fde047; font-weight: bold;");
  } else {
    console.error('Babel no está cargado antes de layout_arcano.js');
  }
})();
// --- FIN DEL ARCHIVO ---

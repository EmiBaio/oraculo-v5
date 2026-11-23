// ============================================================================
// ARCHIVO: motor_tirada.js
// Motor Interactivo OPTIMIZADO (60+ FPS • Cero CLS • Sprite PNG GPU)
// Compatible con protocolo local file:/// (Sin bloqueo CORS de Babel y con Scope Aislado)
// ============================================================================

const MOTOR_TIRADA_SOURCE = `
const { useState, useEffect, useRef, useMemo, useCallback, forwardRef, useImperativeHandle, memo } = React;
const Motion = window.Motion || {};
const { motion, AnimatePresence, useReducedMotion = () => false, useSpring, useMotionValue } = Motion;

const sound = window.sound;
const SharedArtDefs = window.SharedArtDefs;
const CardBackDefs = window.CardBackDefs;
const ArtV1B = window.ArcanaDioramaArt;
const OracleMetaMaskRig = window.OracleMetaMaskRig;

// --- Íconos SVG ---
const Sparkles = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>);
const Volume2 = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>);
const VolumeX = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>);
const RotateCcw = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>);
const ShieldAlert = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>);
const Sun = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>);
const Moon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>);
const Eye = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>);
const Flame = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>);
const Compass = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>);
const CheckCircle2 = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);
const BookOpen = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const ScaleIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>);

const T = { CHARGE: 1220, DIP: 110, SETTLE: 1600 };
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_IN_EXPO = [0.7, 0, 0.84, 0];
const TAU = Math.PI * 2;
const rand = (a, b) => a + Math.random() * (b - a);

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Copia segura al portapapeles: delega en window.copyTextSafe (motor_tarot.js) con respaldo local
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

// Garantiza la carga del bundle extendido (12 volúmenes + 22 dioramas + Trina + Sí/No)
// En desarrollo local (file:///) resuelve de inmediato; en producción dispara o espera grimorio.bundle.min.js.
function ensureGrimorioLoaded() {
  if (typeof window !== 'undefined' && typeof window.__veloEnsureGrimorio === 'function') {
    return window.__veloEnsureGrimorio();
  }
  return Promise.resolve(true);
}

// Helper universal para resolver una carta en Luz o en Sombra con todo el Grimorio
function resolvePolymorphicCard(card, isReversed, recordDraw) {
  if (!card) return null;
  const rev = Boolean(isReversed);
  const shouldRecord = recordDraw !== false;

  if (window.TAROT_DB && typeof window.TAROT_DB.resolveCardForDraw === 'function') {
    const resolved = window.TAROT_DB.resolveCardForDraw(card, rev, shouldRecord);
    if (resolved) return resolved;
  }

  if (rev && window.LunarOracleEngine && typeof window.LunarOracleEngine.resolveShadowCard === 'function') {
    const lun = window.LunarOracleEngine.resolveShadowCard(card.id, shouldRecord);
    if (lun) return Object.assign({}, card, lun, { isReversed: true });
  }

  if (!rev && window.SolarOracleEngine && typeof window.SolarOracleEngine.resolveLivingCard === 'function') {
    const sol = window.SolarOracleEngine.resolveLivingCard(card.id, shouldRecord);
    if (sol) return Object.assign({}, card, sol, { isReversed: false });
  }

  if (rev && typeof REVERSED_DATA !== 'undefined' && REVERSED_DATA[card.id]) {
    return Object.assign({}, card, REVERSED_DATA[card.id], { isReversed: true });
  }

  return Object.assign({}, card, { isReversed: rev });
}

// --- Diorama 2.5D de la Carta Revelada (Brillo Especular GPU por Transform, 0 Repaint) ---
const RevealedCardDiorama25D = memo(function RevealedCardDiorama25D({ card, activeNode, onSelectNode, quality, onTogglePolarity }) {
  const cardRef = useRef(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glareOffsetX = useMotionValue(0);
  const glareOffsetY = useMotionValue(0);
  const smoothRotX = useSpring(rotX, { stiffness: 150, damping: 18 });
  const smoothRotY = useSpring(rotY, { stiffness: 150, damping: 18 });
  const smoothGlareX = useSpring(glareOffsetX, { stiffness: 150, damping: 20 });
  const smoothGlareY = useSpring(glareOffsetY, { stiffness: 150, damping: 20 });

  const isUltra = quality === 'ULTRA';

  const updateTilt = (clientX, clientY) => {
    if (!cardRef.current || quality === 'LOW') return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    rotY.set((px - 0.5) * (isUltra ? 36 : 28));
    rotX.set((0.5 - py) * (isUltra ? 30 : 24));
    glareOffsetX.set((px - 0.5) * rect.width * 0.72);
    glareOffsetY.set((py - 0.5) * rect.height * 0.72);
  };
  const handleMouseMove = (e) => updateTilt(e.clientX, e.clientY);
  const handleResetTilt = () => {
    rotX.set(0);
    rotY.set(0);
    glareOffsetX.set(0);
    glareOffsetY.set(0);
  };

  return (
    <div style={{ perspective: '1300px' }} className="relative select-none flex flex-col items-center gap-3.5">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleResetTilt}
        style={{
          rotateX: smoothRotX,
          rotateY: smoothRotY,
          transformStyle: 'preserve-3d',
          boxShadow: card.isReversed
            ? "0 26px 60px -10px rgba(0,0,0,0.94), 0 0 42px rgba(168,85,247,0.46)"
            : "0 26px 60px -10px rgba(0,0,0,0.94), 0 0 38px " + (card.palette?.glow || "rgba(251,191,36,0.45)"),
          willChange: 'transform'
        }}
        className={"relative w-[240px] h-[380px] sm:w-[270px] sm:h-[428px] lg:w-[308px] lg:h-[488px] xl:w-[332px] xl:h-[526px] rounded-2xl bg-[#07050a] border-2 cursor-grab active:cursor-grabbing transition-colors duration-500 " + (card.isReversed ? "border-purple-400" : "border-[#d4af37]")}
      >
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: card.isReversed ? 'rotateZ(180deg)' : 'none', transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)' }}>
          <div className="absolute inset-1 rounded-xl overflow-hidden" style={{ transform: 'translateZ(-35px)' }}><ArtV1B card={card} layer="background" quality={quality} /></div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(10px)' }}><ArtV1B card={card} layer="midground" quality={quality} /></div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(32px)', opacity: activeNode ? 0.84 : 1, transition: 'opacity 0.25s' }}><ArtV1B card={card} layer="character" quality={quality} /></div>
          <div className="absolute inset-0" style={{ transform: 'translateZ(48px)' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full pointer-events-none">
              <polyline points={(card.nodes || []).map((n) => n.x + "," + n.y).join(' ')} fill="none" stroke={card.isReversed ? "#c084fc" : "#fde047"} strokeWidth="0.65" strokeDasharray="2 1.5" opacity={activeNode ? '0.95' : '0.45'} />
            </svg>
            {(card.nodes || []).map((node, idx) => {
              const isSelected = activeNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => { sound?.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  onClick={() => { sound?.playSkyrimNodeChime(idx); onSelectNode(node); }}
                  style={{ left: node.x + "%", top: node.y + "%" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none pointer-events-auto cursor-pointer"
                >
                  <span className={"absolute -inset-2.5 rounded-full transition-transform duration-200 " + (isSelected ? (card.isReversed ? "bg-purple-400/35 scale-125" : "bg-amber-400/30 scale-125") : "bg-amber-300/15 group-hover:scale-125")} />
                  <span className={"relative flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full border transition-transform duration-200 " + (isSelected ? (card.isReversed ? "bg-purple-300 border-white text-black scale-125 shadow-[0_0_16px_#c084fc]" : "bg-amber-300 border-white text-black scale-125 shadow-[0_0_16px_#fde047]") : "bg-[#0f081d]/95 border-amber-400 text-amber-300")}><Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5" /></span>
                </button>
              );
            })}
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(58px)' }}><ArtV1B card={card} layer="frame" quality={quality} /></div>
        </div>
        {quality !== 'LOW' && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none mix-blend-screen" style={{ transform: 'translateZ(62px)' }}>
            <motion.div
              style={{
                x: smoothGlareX,
                y: smoothGlareY,
                background: "radial-gradient(circle at 50% 50%, rgba(254, 240, 138, " + (isUltra ? "0.38" : "0.26") + ") 0%, rgba(192, 132, 252, 0.10) 36%, transparent 66%)",
                willChange: 'transform'
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
          style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
          className={"flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm uppercase tracking-[0.08em] transition-colors cursor-pointer shadow-md " + (card.isReversed ? "bg-gradient-to-r from-[#241038] via-[#581c87] to-[#241038] border-purple-300/80 text-purple-100 hover:border-amber-300 hover:text-amber-200" : "bg-[#120924]/95 border-amber-400/50 text-amber-200 hover:bg-amber-500/20")}
        >
          {card.isReversed ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-purple-300" />}
          <span>{card.isReversed ? "✦ Transmutar Sombra en Luz" : "☽ Explorar Faz en Sombra"}</span>
        </button>
      )}
    </div>
  );
});

function makeGlowSprite() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,250,225,1)'); grad.addColorStop(0.25, 'rgba(253,224,71,0.65)');
  grad.addColorStop(0.6, 'rgba(245,158,11,0.18)'); grad.addColorStop(1, 'rgba(245,158,11,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64); return c;
}

function makeShardSprites() {
  const shapes = [
    [[64, 4], [122, 96], [42, 124], [10, 56]],
    [[48, 8], [118, 44], [92, 122], [18, 92]],
    [[64, 6], [116, 118], [12, 118]]
  ];
  return shapes.map((pts, idx) => {
    const c = document.createElement('canvas');
    c.width = c.height = 96;
    const g = c.getContext('2d');
    g.scale(0.75, 0.75);
    g.beginPath();
    pts.forEach(([x, y], i) => (i === 0 ? g.moveTo(x, y) : g.lineTo(x, y)));
    g.closePath();
    const fillGrad = g.createLinearGradient(0, 0, 128, 128);
    if (idx === 0) {
      fillGrad.addColorStop(0, '#3b1754');
      fillGrad.addColorStop(0.5, '#160b24');
      fillGrad.addColorStop(1, '#07050a');
    } else if (idx === 1) {
      fillGrad.addColorStop(0, '#ffd85e');
      fillGrad.addColorStop(0.5, '#98551a');
      fillGrad.addColorStop(1, '#26130a');
    } else {
      fillGrad.addColorStop(0, '#291338');
      fillGrad.addColorStop(1, '#090610');
    }
    g.fillStyle = fillGrad;
    g.fill();
    g.strokeStyle = '#fde047';
    g.lineWidth = 3.5;
    g.stroke();
    return c;
  });
}

// ============================================================================
// PARTICLE CANVAS OPTIMIZADO (FAST-PATH MÓVIL 60 FPS • BATCHED STROKES • DPR 1 EN MÓVIL)
// ============================================================================
const ParticleCanvas = forwardRef(function ParticleCanvas({ originRef, quality = 'HIGH', isMobile = false }, ref) {
  const canvasRef = useRef(null); const reduce = useReducedMotion();
  const isLite = isMobile || quality === 'LOW';
  const S = useRef({ parts: [], shards: [], raf: 0, last: 0, charge: null, acc: 0, sprite: null, shardSprites: null, ctx: null, w: 0, h: 0, dpr: 1, lite: false });
  S.current.lite = isLite;
  const maxParts = isLite ? 72 : quality === 'ULTRA' ? 560 : quality === 'HIGH' ? 400 : 180;
  const origin = useCallback(() => {
    const r = originRef?.current?.getBoundingClientRect();
    return r ? { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height } : { x: S.current.w / 2, y: S.current.h / 2, w: 220, h: 340 };
  }, [originRef]);
  const spawn = useCallback((p) => { if (S.current.parts.length < maxParts) S.current.parts.push(p); }, [maxParts]);
  const spawnShard = useCallback((sh) => { if (S.current.shards.length < 24) S.current.shards.push(sh); }, []);

  const loop = useCallback((now) => {
    const s = S.current; const { ctx, sprite, shardSprites } = s; if (!ctx) return;
    const dt = Math.min((now - s.last) / 1000, 0.033); s.last = now;
    const dpr = s.dpr;
    const lite = s.lite;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, s.w, s.h);

    // En móvil evitamos 'lighter' (evita read-modify-write en GPUs tile-based)
    ctx.globalCompositeOperation = lite ? 'source-over' : 'lighter';
    if (s.charge) {
      const t = (now - s.charge.start) / s.charge.dur;
      if (t >= 1) s.charge = null;
      else {
        const o = origin(); const big = Math.max(o.w, o.h);
        s.acc += (lite ? (16 + t * t * 58) : (38 + t * t * 190)) * dt;
        while (s.acc >= 1) {
          s.acc -= 1; const a = Math.random() * TAU; const R = rand(big * 0.55, big * 1.05);
          const x0 = o.x + Math.cos(a) * R; const y0 = o.y + Math.sin(a) * R;
          spawn({ kind: 3, x0, y0, x: x0, y: y0, px: x0, py: y0, tx: o.x + rand(-0.18, 0.18) * o.w, ty: o.y + rand(-0.18, 0.18) * o.h, life: rand(0.36, 0.68), age: 0, size: rand(7, 14), seed: Math.random() * 10 });
        }
      }
    }

    const arr = s.parts;
    // Lote único de chispas (kind === 0) para evitar decenas de ctx.stroke() y allocs hsla por frame
    let hasWarmSparks = false;
    let hasBrightSparks = false;
    ctx.lineCap = 'round';

    // Paso 1: actualizar física y dibujar sprites (kind 1, 2, 3)
    for (let i = arr.length - 1; i >= 0; i--) {
      const p = arr[i]; p.age += dt;
      if (p.age >= p.life) { arr[i] = arr[arr.length - 1]; arr.pop(); continue; }
      const k = p.age / p.life;

      if (p.kind === 0) {
        const f = Math.exp(-p.drag * dt); p.vx *= f; p.vy = p.vy * f + p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        p._k = k;
        if (k < 0.45) hasBrightSparks = true; else hasWarmSparks = true;
      } else if (p.kind === 1) {
        const f = Math.exp(-p.drag * dt); p.vx *= f; p.vy = p.vy * f + p.g * dt; p.x += p.vx * dt + Math.sin(p.age * 2.4 + p.seed) * 14 * dt; p.y += p.vy * dt;
        const flick = lite ? 0.9 : (0.78 + 0.22 * Math.sin(p.age * 16 + p.seed * 3));
        const a = (1 - k) * Math.min(1, k / 0.08) * flick;
        const sz = p.size * (1 - k * 0.5);
        ctx.globalAlpha = a; ctx.drawImage(sprite, p.x - sz * 0.5, p.y - sz * 0.5, sz, sz);
      } else if (p.kind === 2) {
        const f = Math.exp(-p.drag * dt); p.vx *= f; p.vy = p.vy * f + p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        const tw = 0.5 + 0.5 * Math.sin(p.age * p.tw + p.seed);
        const a = (1 - k) * tw;
        const R = p.size * (0.6 + 0.8 * tw);
        ctx.globalAlpha = a * 0.65; ctx.drawImage(sprite, p.x - R * 2, p.y - R * 2, R * 4, R * 4);
      } else {
        const e = k * k * k;
        p.x = p.x0 + (p.tx - p.x0) * e + Math.sin(k * 6 + p.seed) * (1 - k) * 16;
        p.y = p.y0 + (p.ty - p.y0) * e + Math.cos(k * 6 + p.seed) * (1 - k) * 16;
        const a = Math.min(1, k / 0.2) * (1 - k * 0.4);
        const sz = p.size * (0.5 + (1 - k) * 0.5);
        ctx.globalAlpha = a; ctx.drawImage(sprite, p.x - sz * 0.5, p.y - sz * 0.5, sz, sz);
      }
    }

    // Paso 2: chispas en solo 2 llamadas de stroke (máxima fluidez en móvil y PC)
    if (hasBrightSparks) {
      ctx.globalAlpha = 0.95;
      ctx.strokeStyle = '#fff5c8';
      ctx.lineWidth = lite ? 2.2 : 2.5;
      ctx.beginPath();
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        if (p.kind === 0 && p._k < 0.45) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 0.038, p.y - p.vy * 0.038);
        }
      }
      ctx.stroke();
    }
    if (hasWarmSparks) {
      ctx.globalAlpha = 0.52;
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = lite ? 1.5 : 1.8;
      ctx.beginPath();
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        if (p.kind === 0 && p._k >= 0.45) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 0.035, p.y - p.vy * 0.035);
        }
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const shards = s.shards;
    if (shards.length > 0 && shardSprites) {
      ctx.globalCompositeOperation = 'source-over';
      for (let i = shards.length - 1; i >= 0; i--) {
        const sh = shards[i];
        sh.age += dt;
        if (sh.age >= sh.life) {
          shards[i] = shards[shards.length - 1];
          shards.pop();
          continue;
        }
        const k = sh.age / sh.life;
        const f = Math.exp(-sh.drag * dt);
        sh.vx *= f;
        sh.vy = sh.vy * f + sh.g * dt;
        sh.x += sh.vx * dt;
        sh.y += sh.vy * dt;
        sh.rot += sh.spin * dt;
        sh.flip += sh.flipSpeed * dt;

        const scale = sh.size * (1 + Math.pow(k, 1.8) * 4.5);
        const flipCos = Math.cos(sh.flip);
        const a = k < 0.78 ? 1 : Math.max(0, 1 - (k - 0.78) / 0.22);
        const cosR = Math.cos(sh.rot) * dpr;
        const sinR = Math.sin(sh.rot) * dpr;

        ctx.globalAlpha = a;
        ctx.setTransform(cosR * flipCos, sinR * flipCos, -sinR, cosR, sh.x * dpr, sh.y * dpr);
        const img = shardSprites[sh.variant];
        ctx.drawImage(img, -scale * 0.5, -scale * 0.5, scale, scale);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
    }

    if (arr.length || shards.length || s.charge) {
      s.raf = requestAnimationFrame(loop);
    } else {
      s.raf = 0;
      ctx.clearRect(0, 0, s.w, s.h);
      if (canvasRef.current) canvasRef.current.style.visibility = 'hidden';
    }
  }, [origin, spawn]);

  const ensureRunning = useCallback(() => {
    const s = S.current;
    if (canvasRef.current) canvasRef.current.style.visibility = 'visible';
    if (!s.raf) {
      s.last = performance.now();
      s.raf = requestAnimationFrame(loop);
    }
  }, [loop]);
  useEffect(() => {
    const canvas = canvasRef.current; const s = S.current;
    s.ctx = canvas.getContext('2d', { alpha: true }) || canvas.getContext('2d');
    s.sprite = makeGlowSprite();
    s.shardSprites = makeShardSprites();
    const resize = () => {
      const mobileNow = window.innerWidth < 768;
      s.dpr = mobileNow ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      s.w = window.innerWidth;
      s.h = window.innerHeight;
      canvas.width = Math.round(s.w * s.dpr);
      canvas.height = Math.round(s.h * s.dpr);
      s.ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0);
    };
    resize(); window.addEventListener('resize', resize, { passive: true });
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(s.raf); s.raf = 0; };
  }, []);

  useImperativeHandle(ref, () => ({
    startCharge(durationMs) { if (reduce || quality === 'LOW') return; S.current.charge = { start: performance.now(), dur: durationMs }; ensureRunning(); },
    stopCharge() { S.current.charge = null; },
    burst(customOrigin) {
      const o = customOrigin || origin();
      const isMicro = Boolean(customOrigin);
      const lite = S.current.lite;
      const kMult = lite ? 0.22 : quality === 'ULTRA' ? 0.82 : quality === 'HIGH' ? 0.65 : 0.36;
      const k = (reduce ? 0.16 : kMult) * (isMicro ? 0.42 : 1);
      const n = (c) => Math.round(c * k);
      const lifeScale = lite ? 0.62 : 1;
      const inCard = () => ({ x: o.x + rand(-0.36, 0.36) * (o.w || 200), y: o.y + rand(-0.36, 0.36) * (o.h || 200) });

      for (let i = 0; i < n(120); i++) { const a = Math.random() * TAU; const sp = (lite ? 220 : 250) + Math.pow(Math.random(), 2) * (lite ? 900 : 1350); const pos = inCard(); spawn({ kind: 0, ...pos, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, drag: 2.6, g: 360, life: rand(0.42, 0.95) * lifeScale, age: 0, size: rand(1.1, 2.2), _k: 0 }); }
      const ringN = n(32); for (let i = 0; i < ringN; i++) { const a = (i / ringN) * TAU; spawn({ kind: 0, x: o.x, y: o.y, vx: Math.cos(a) * (lite ? 760 : 1060), vy: Math.sin(a) * (lite ? 760 : 1060), drag: 2.9, g: 0, life: 0.62 * lifeScale, age: 0, size: 2.1, _k: 0 }); }
      for (let i = 0; i < n(80); i++) { const a = Math.random() * TAU; const sp = rand(60, lite ? 340 : 460); const pos = inCard(); spawn({ kind: 1, ...pos, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 70, drag: 1.25, g: -65, life: rand(0.95, 1.9) * lifeScale, age: 0, size: rand(8, lite ? 18 : 22), seed: Math.random() * 10 }); }
      if (!lite) {
        for (let i = 0; i < n(38); i++) { const a = Math.random() * TAU; const sp = rand(60, 440); const pos = inCard(); spawn({ kind: 2, ...pos, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, drag: 1.5, g: -20, life: rand(0.9, 1.9), age: 0, size: rand(2, 4.2), tw: rand(8, 18), seed: Math.random() * 10 }); }
      }

      if (quality === 'ULTRA' && !lite && !reduce && !isMicro) {
        for (let i = 0; i < 20; i++) {
          const a = Math.random() * TAU;
          const sp = rand(280, 1800);
          const pos = inCard();
          spawnShard({
            ...pos, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 120,
            drag: 0.9, g: 580, life: rand(0.7, 1.2), age: 0, size: rand(18, 40),
            rot: Math.random() * TAU, spin: rand(-10, 10),
            flip: Math.random() * TAU, flipSpeed: rand(6, 14),
            variant: i % 3
          });
        }
      }
      if (lite && !isMicro && navigator.vibrate) {
        try { navigator.vibrate(35); } catch (e) {}
      }

      ensureRunning();
    }
  }), [ensureRunning, origin, reduce, quality, spawn, spawnShard]);
  return <canvas ref={canvasRef} aria-hidden style={{ visibility: 'hidden' }} className="pointer-events-none fixed inset-0 z-[60] h-full w-full" />;
});

const toPath = (pts) => pts.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + "," + y.toFixed(1)).join(' ');
function buildCracks(seed, quality = 'HIGH') {
  const rnd = mulberry32(seed); const cracks = []; const mains = quality === 'HIGH' || quality === 'ULTRA' ? 7 : quality === 'MEDIUM' ? 5 : 3;
  for (let i = 0; i < mains; i++) {
    let ang = (i / mains) * TAU + (rnd() - 0.5) * 0.6; let x = 250; let y = 370; const pts = [[x, y]]; const segs = quality === 'LOW' ? 3 : 5 + Math.floor(rnd() * 3); const delay = i * 0.05;
    for (let s = 0; s < segs; s++) {
      ang += (rnd() - 0.5) * 0.7; const len = 45 + rnd() * 45; x += Math.cos(ang) * len; y += Math.sin(ang) * len; pts.push([x, y]);
      if (quality !== 'LOW' && s >= 1 && rnd() < 0.5) {
        let bx = x; let by = y; let ba = ang + (rnd() < 0.5 ? -1 : 1) * (0.6 + rnd() * 0.6); const bp = [[bx, by]]; const bsegs = 2 + Math.floor(rnd() * 2);
        for (let b = 0; b < bsegs; b++) { ba += (rnd() - 0.5) * 0.6; const bl = 20 + rnd() * 25; bx += Math.cos(ba) * bl; by += Math.sin(ba) * bl; bp.push([bx, by]); }
        cracks.push({ d: toPath(bp), delay: delay + 0.6 * ((s + 1) / segs), dur: 0.4, w: 0.6 });
      }
    }
    cracks.push({ d: toPath(pts), delay, dur: 0.6, w: 1 });
  }
  return cracks;
}

const CrackOverlay = memo(function CrackOverlay({ seed = 7, quality = 'HIGH', isMobile = false }) {
  const isLite = isMobile || quality === 'LOW';
  const cracks = useMemo(() => buildCracks(seed, isLite ? 'LOW' : quality), [seed, quality, isLite]); const CH = T.CHARGE / 1000;
  // En móvil: 1 sola capa SVG nítida sin mix-blend-screen (3x menos repintado de GPU)
  const layers = isLite
    ? [{ sw: 5.5, stroke: '#fef08a', op: 0.98 }]
    : [{ sw: 14, stroke: '#f59e0b', op: 0.34 }, { sw: 5, stroke: '#fde047', op: 0.96 }, { sw: 1.8, stroke: '#fffdf0', op: 1 }];
  return (
    <motion.div className="pointer-events-none absolute inset-0 z-50 rounded-xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.12 } }}>
      <svg viewBox="0 0 500 740" className="absolute inset-0 h-full w-full">
        {layers.map((L) => (
          <g key={L.sw} opacity={L.op}>
            {cracks.map((c, i) => (<motion.path key={i} d={c.d} fill="none" stroke={L.stroke} strokeWidth={L.sw * c.w} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ pathLength: { duration: c.dur, delay: c.delay, ease: [0.2, 0.8, 0.2, 1] }, opacity: { duration: 0.05, delay: c.delay } }} />))}
          </g>
        ))}
      </svg>
      <motion.div className={"absolute inset-0 " + (isLite ? "" : "mix-blend-screen")} style={{ background: 'radial-gradient(circle at center, rgba(255,250,225,0.92) 0%, rgba(253,224,71,0.62) 30%, rgba(245,158,11,0.28) 54%, transparent 74%)', willChange: 'transform, opacity' }} initial={{ opacity: 0, scale: 0.35 }} animate={{ opacity: [0, 0.45, 0.98], scale: [0.35, 1, 1.65] }} transition={{ duration: CH, times: [0, 0.6, 1], ease: EASE_IN_EXPO }} />
    </motion.div>
  );
});

// ============================================================================
// DORSO DE CARTA AAA EN TEXTURA PNG PRE-HORNEADA (1 CAPA GPU = 0 LAG EN CLICK/HOVER)
// ============================================================================
const CardBackOrnament = memo(function CardBackOrnament({ isCracking, quality, fastMotion = false, isMobile = false }) {
  const BakedSprite = window.CardBackSprite;

  return (
    <div
      className={"relative w-full h-full select-none rounded-[10px] " + (fastMotion ? "" : "shadow-[0_14px_30px_rgba(0,0,0,0.82)]")}
      style={{
        backfaceVisibility: 'hidden',
        willChange: fastMotion ? 'transform' : 'auto'
      }}
    >
      {BakedSprite ? (
        <BakedSprite quality={quality} />
      ) : (
        <svg viewBox="0 0 512 768" className="w-full h-full">
          <rect x="16" y="16" width="480" height="736" rx="28" fill="#17111f" stroke="#d4af37" strokeWidth="6" />
        </svg>
      )}
      <AnimatePresence>{isCracking && <CrackOverlay quality={quality} isMobile={isMobile} />}</AnimatePresence>
    </div>
  );
});

function runRevealSequence({ onCharge, onDip, onDetonate, onReveal, onSettle }) {
  const ids = []; const at = (ms, fn) => fn && ids.push(setTimeout(fn, ms));
  onCharge?.();
  at(T.CHARGE - T.DIP, onDip);
  at(T.CHARGE, onDetonate);
  at(T.CHARGE + 95, onReveal);
  at(T.CHARGE + T.SETTLE, onSettle);
  return () => ids.forEach(clearTimeout);
}

function useTrauma(targetRef, { maxOffset = 18, maxAngle = 1.5, decay = 1.7 } = {}) {
  const reduce = useReducedMotion(); const trauma = useRef(0); const raf = useRef(0); const last = useRef(0); const rumbleId = useRef(0);
  const tick = useCallback((now) => {
    const el = targetRef.current; if (!el) { raf.current = 0; return; }
    const dt = Math.min((now - last.current) / 1000, 0.05); last.current = now;
    trauma.current = Math.max(0, trauma.current - decay * dt); const s = trauma.current * trauma.current;
    if (s > 0.0004) {
      const t = now * 0.05; const n = (k) => Math.sin(t * k) * Math.cos(t * k * 0.7 + k);
      el.style.transform = "translate3d(" + (maxOffset * s * n(1.3)) + "px, " + (maxOffset * s * n(2.1)) + "px, 0) rotate(" + (maxAngle * s * n(3.7)) + "deg)";
      raf.current = requestAnimationFrame(tick);
    } else { el.style.transform = ''; raf.current = 0; }
  }, [targetRef, maxOffset, maxAngle, decay]);

  const addTrauma = useCallback((amount) => {
    if (reduce) return; trauma.current = Math.min(1, trauma.current + amount);
    if (!raf.current) { last.current = performance.now(); raf.current = requestAnimationFrame(tick); }
  }, [reduce, tick]);

  const rumble = useCallback((durationMs) => {
    if (reduce) return; clearInterval(rumbleId.current); const start = performance.now();
    rumbleId.current = setInterval(() => {
      const t = (performance.now() - start) / durationMs; if (t >= 1) return clearInterval(rumbleId.current);
      addTrauma(0.012 + t * t * 0.05);
    }, 80);
  }, [addTrauma, reduce]);
  const stopRumble = useCallback(() => clearInterval(rumbleId.current), []);
  useEffect(() => () => { cancelAnimationFrame(raf.current); clearInterval(rumbleId.current); }, []);
  return { addTrauma, rumble, stopRumble };
}

// RevealStage optimizado: fast-path móvil sin conic-gradient 125vmax ni mix-blend-screen
const RevealStage = memo(function RevealStage({ phase, burst, origin, spreadMode, isMobile = false, quality = 'HIGH' }) {
  const ox = origin ? origin.x + "px" : '50%'; const oy = origin ? origin.y + "px" : '50%'; const CH = T.CHARGE / 1000;
  const isLite = isMobile || quality === 'LOW';
  const rings = isLite ? [0] : [0, 1, 2];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[55] overflow-hidden">
      {!isLite && (
        <motion.div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 25%, rgba(4,2,12,0.88) 100%)' }} initial={false} animate={{ opacity: phase === 'SPREAD' || phase === 'IDLE' ? 0 : phase === 'CRACKING' ? 1 : 0.45 }} transition={phase === 'CRACKING' ? { duration: CH, ease: 'easeIn' } : { duration: 0.9, ease: 'easeOut' }} />
      )}
      {burst > 0 && (
        <React.Fragment>
          {!isLite && spreadMode !== 'trina' && (
            <motion.div
              key={"rays-" + burst}
              className="absolute mix-blend-screen"
              style={{
                left: ox,
                top: oy,
                width: '125vmax',
                height: '125vmax',
                marginLeft: '-62.5vmax',
                marginTop: '-62.5vmax',
                backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(253,224,71,0) 0deg, rgba(253,224,71,0.26) 3deg, rgba(253,224,71,0) 7deg, rgba(255,240,190,0) 15deg)',
                WebkitMaskImage: 'radial-gradient(circle, #000 0%, transparent 55%)',
                maskImage: 'radial-gradient(circle, #000 0%, transparent 55%)',
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
              animate={{ opacity: [0, 0.82, 0.3, 0], scale: [0.4, 1, 1.05, 1.1], rotate: 18 }}
              transition={{ duration: 2.4, times: [0, 0.16, 0.55, 1], ease: 'easeOut' }}
            />
          )}
          <motion.div
            key={"flash-" + burst}
            className="absolute inset-0"
            style={{
              background: isLite
                ? "radial-gradient(circle at " + ox + " " + oy + ", #fffbe6 0%, rgba(253,224,71,0.82) 24%, rgba(245,158,11,0.28) 54%, transparent 82%)"
                : "radial-gradient(circle at " + ox + " " + oy + ", #fff 0%, rgba(255,246,214,0.95) 14%, rgba(253,224,71,0.58) 38%, rgba(245,158,11,0.16) 62%, transparent 80%)",
              willChange: 'opacity'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.52, 0] }}
            transition={{ duration: isLite ? 0.58 : 0.85, times: [0, 0.12, 0.38, 1], ease: 'easeOut' }}
          />
          {rings.map((i) => (
            <motion.div
              key={"ring-" + burst + "-" + i}
              className="absolute rounded-full"
              style={{
                left: ox,
                top: oy,
                width: isLite ? 160 : 220,
                height: isLite ? 160 : 220,
                marginLeft: isLite ? -80 : -110,
                marginTop: isLite ? -80 : -110,
                border: (isLite ? 2 : 3 - i) + "px solid rgba(255,236,170,0.88)",
                willChange: 'transform, opacity'
              }}
              initial={{ scale: 0.25, opacity: 0.92 }}
              animate={{ scale: isLite ? 3.2 : (4.6 + i * 1.1), opacity: 0 }}
              transition={{ duration: isLite ? 0.62 : (1.0 + i * 0.14), delay: i * 0.08, ease: EASE_OUT_EXPO }}
            />
          ))}
        </React.Fragment>
      )}
    </div>
  );
});

// ============================================================================
// CAJA DE DIÁLOGO CON CERO LAYOUT SHIFTS (TEXTO PRE-RESERVADO + ALTURA FIJA)
// ============================================================================
const OracleDialogueBox = memo(function OracleDialogueBox({ phase, revealedCard, spreadMode, trinaAct, trinaCards, sinoSubMode, sinoAct, sinoDomain }) {
  const [typedCount, setTypedCount] = useState(0);
  const reduceMotion = useReducedMotion();
  const isHidden = phase === 'CRACKING' || phase === 'REVEAL';

  const oracleDialogue = useMemo(() => {
    if (spreadMode === 'sino' && phase !== 'IDLE' && window.SiNoSpreadEngine?.getSiNoDialogue) {
      return window.SiNoSpreadEngine.getSiNoDialogue(phase, sinoSubMode, sinoAct, sinoDomain);
    }
    if (spreadMode === 'trina' && phase !== 'IDLE' && window.TrinaSpreadEngine?.getTrinaDialogue) {
      return window.TrinaSpreadEngine.getTrinaDialogue(phase, trinaAct, trinaCards);
    }
    switch (phase) {
      case 'IDLE': return 'Las hebras del destino aguardan tu toque. Mi mirada sigue tu pulso... cuando tu mente esté en calma, pedime que baraje las cartas.';
      case 'SHUFFLING': return 'El azar no existe en este plano... dejá que el peso de los arcanos hable a través del éter.';
      case 'SPREAD': return 'Deslizá tu mano sobre el abanico para escuchar su vibración armónica. Elegí la carta que llame a tu intuición.';
      case 'CRACKING': return '¡El sello astral se fractura! Sostené la mirada mientras la verdad emerge de las grietas...';
      case 'REVEAL': return revealedCard ? ("Ha despertado " + revealedCard.name + (revealedCard.isReversed ? " en Sombra" : " en Luz") + ". Explorá los nodos estelares dentro de la reliquia.") : '';
      default: return '';
    }
  }, [phase, revealedCard, spreadMode, trinaAct, trinaCards, sinoSubMode, sinoAct, sinoDomain]);

  const actBadge = useMemo(() => {
    if (spreadMode === 'sino' && phase !== 'IDLE') {
      if (sinoSubMode === 'triad' && window.SiNoSpreadEngine?.SINO_SLOTS) {
        const slot = window.SiNoSpreadEngine.SINO_SLOTS[sinoAct];
        if (slot) return "Balanza " + slot.numeral + " • " + slot.name;
      }
      return "Balanza Sí o No";
    }
    if (spreadMode === 'trina' && phase !== 'IDLE' && window.TrinaSpreadEngine?.ACT_LABELS) {
      const info = window.TrinaSpreadEngine.ACT_LABELS[trinaAct];
      if (info) return "Acto " + info.numeral + " • " + info.name;
    }
    return "Fase: " + phase;
  }, [spreadMode, phase, trinaAct, sinoSubMode, sinoAct]);

  useEffect(() => {
    if (isHidden) {
      setTypedCount(0);
      return undefined;
    }
    const len = oracleDialogue.length;
    if (reduceMotion) {
      setTypedCount(len);
      return undefined;
    }
    setTypedCount(0);
    let idx = 0;
    const interval = setInterval(() => {
      idx += 2;
      if (idx >= len) {
        setTypedCount(len);
        clearInterval(interval);
        return;
      }
      setTypedCount(idx);
      if (idx % 4 === 0) sound?.playVoiceTick();
    }, 34);
    return () => clearInterval(interval);
  }, [oracleDialogue, isHidden, reduceMotion]);

  const safeTyped = isHidden ? 0 : Math.min(typedCount, oracleDialogue.length);
  const visiblePart = oracleDialogue.slice(0, safeTyped);
  const hiddenPart = oracleDialogue.slice(safeTyped);
  const isTyping = !isHidden && safeTyped < oracleDialogue.length;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? -8 : 0 }}
      transition={{ duration: 0.25 }}
      style={{ contain: 'layout style', pointerEvents: isHidden ? 'none' : 'auto' }}
      className="relative w-[94%] max-w-3xl lg:max-w-4xl mt-1.5 lg:mt-2.5 px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-2xl bg-[#0c0717]/95 border border-[#d4af37]/55 shadow-[0_14px_38px_rgba(0,0,0,0.88)]"
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-amber-400 font-bold min-w-0 truncate">
          <span className="truncate">Sibilia del Velo • Oráculo</span>
          <span className={"inline-block w-1.5 h-1.5 flex-shrink-0 rounded-full bg-amber-400 transition-opacity duration-200 " + (isTyping ? "opacity-100" : "opacity-40")} />
        </span>
        <span className="text-xs lg:text-xs uppercase tracking-wider text-purple-200/95 font-semibold flex-shrink-0 whitespace-nowrap">
          {actBadge}
        </span>
      </div>
      {/* Grid superpuesto: reserva el alto exacto del texto completo sin cortar líneas en móvil y con 0 CLS */}
      <div className="grid text-[15px] sm:text-lg md:text-[19px] lg:text-xl text-amber-50 italic leading-relaxed min-h-[4.4rem] sm:min-h-[4.6rem] lg:min-h-[4.8rem]">
        <p className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none" aria-hidden="true">
          “{oracleDialogue}”
        </p>
        <p className="col-start-1 row-start-1">
          “{visiblePart}”
        </p>
      </div>
    </motion.div>
  );
});

function TarotSpreadApp() {
  const worldRef = useRef(null); const cardRef = useRef(null); const particles = useRef(null); const cancelRef = useRef(null); const singleRevealScrollRef = useRef(null);
  const timersRef = useRef([]);
  const selectionLockRef = useRef(false);
  const { addTrauma, rumble, stopRumble } = useTrauma(worldRef);
  const [phase, setPhase] = useState('IDLE');
  const [burst, setBurst] = useState(0);
  const [origin, setOrigin] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const [spreadMode, setSpreadMode] = useState('single');
  const [trinaAct, setTrinaAct] = useState(0);
  const [trinaCards, setTrinaCards] = useState([]);
  const [trinaPickingIdx, setTrinaPickingIdx] = useState(null);

  const [sinoSetupOpen, setSinoSetupOpen] = useState(false);
  const [sinoSubMode, setSinoSubMode] = useState('single');
  const [sinoDomain, setSinoDomain] = useState('general');
  const [sinoQuestion, setSinoQuestion] = useState('');
  const [sinoAct, setSinoAct] = useState(0);
  const [sinoCards, setSinoCards] = useState([]);
  const [sinoPickingIdx, setSinoPickingIdx] = useState(null);
  const [sinoResult, setSinoResult] = useState(null);

  const [deckMode] = useState('majors');
  const CARTAS_DISPONIBLES = useMemo(() => {
    if (deckMode === 'all' && window.TAROT_DB?.getAllCards) {
      return window.TAROT_DB.getAllCards();
    }
    if (window.TAROT_DB?.getMajorArcana) {
      const maj = window.TAROT_DB.getMajorArcana();
      if (maj && maj.length > 0) return maj;
    }
    return typeof MAJOR_ARCANA !== 'undefined' ? MAJOR_ARCANA : (window.MAJOR_ARCANA || []);
  }, [deckMode]);

  const [deck, setDeck] = useState(() => CARTAS_DISPONIBLES.slice(0, 7));
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [revealedCard, setRevealedCard] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const [activeTab, setActiveTab] = useState('oracle');
  const [actSealed, setActSealed] = useState(false);
  const [grimoireStats, setGrimoireStats] = useState(() => (window.TAROT_DB?.getGrimoireStats ? window.TAROT_DB.getGrimoireStats() : null));
  const [grimoireOpen, setGrimoireOpen] = useState(false);
  const [grimoireTab, setGrimoireTab] = useState('codice');
  const [readingsCount, setReadingsCount] = useState(() => (window.GrimorioPersonal?.getReadings ? window.GrimorioPersonal.getReadings().length : 0));

  const refreshGrimoireUi = useCallback(() => {
    if (window.TAROT_DB?.getGrimoireStats) {
      setGrimoireStats(window.TAROT_DB.getGrimoireStats());
    }
    if (window.GrimorioPersonal?.getReadings) {
      setReadingsCount(window.GrimorioPersonal.getReadings().length);
    }
  }, []);

  const openGrimoire = useCallback((tab = 'codice') => {
    sound?.init?.();
    sound?.playHarpNote?.(3);
    ensureGrimorioLoaded().then(() => {
      refreshGrimoireUi();
      setGrimoireTab(tab);
      setGrimoireOpen(true);
    });
  }, [refreshGrimoireUi]);

  const [hoveredSpreadIdx, setHoveredSpreadIdx] = useState(null);
  const [oracleReaction, setOracleReaction] = useState(0);
  const [viewportW, setViewportW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1280));
  const [viewportH, setViewportH] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 800));

  const clearManagedTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  const [quality, setQuality] = useState('HIGH');
  useEffect(() => {
    const cores = navigator.hardwareConcurrency || 4;
    const memory = navigator.deviceMemory || 4;
    const isMobileDevice = window.innerWidth < 768;
    const detected = (memory <= 4 || cores <= 4) ? 'LOW' : (isMobileDevice || memory <= 6) ? 'MEDIUM' : 'ULTRA';
    setQuality(detected);
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('modo') === 'sino' && window.SiNoSpreadEngine) {
        if (params.get('tipo') === '3' || params.get('tipo') === 'trina') setSinoSubMode('triad');
        ensureGrimorioLoaded().then(() => { setSinoSetupOpen(true); });
      }
    } catch (e) {}
  }, []);

  const isUltra = quality === 'ULTRA';

  // 14 cartas en PC, 10 en móviles (coreografías más nítidas y sin sobrecarga de GPU)
  const shuffleCards = useMemo(() => {
    const count = quality === 'LOW' || quality === 'MEDIUM' ? 10 : 14;
    return CARTAS_DISPONIBLES.slice(0, count);
  }, [CARTAS_DISPONIBLES, quality]);

  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
  useEffect(() => {
    let resizeRaf = 0;
    const updatePointer = (clientX, clientY) => {
      mouseX.set(Math.max(-1, Math.min(1, (clientX / window.innerWidth) * 2 - 1)));
      mouseY.set(Math.max(-1, Math.min(1, (clientY / window.innerHeight) * 2 - 1)));
    };
    const onMove = (e) => updatePointer(e.clientX, e.clientY);
    const onTouch = (e) => { if (e.touches && e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY); };
    const onResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        setViewportW(window.innerWidth);
        setViewportH(window.innerHeight);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', onResize);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      cancelRef.current?.();
      clearManagedTimers();
    };
  }, [mouseX, mouseY, clearManagedTimers]);

  // --- Tirada Clásica (1 Carta) ---
  const handleStartShuffle = useCallback(() => {
    ensureGrimorioLoaded();
    window.prewarmCardBackSprite?.(quality);
    clearManagedTimers();
    cancelRef.current?.();
    stopRumble();
    particles.current?.stopCharge();
    selectionLockRef.current = false;

    setSpreadMode('single');
    setTrinaAct(0);
    setTrinaCards([]);
    setTrinaPickingIdx(null);
    setSinoAct(0);
    setSinoCards([]);
    setSinoPickingIdx(null);
    setSinoResult(null);
    setSinoSetupOpen(false);
    setSelectedIdx(null);

    sound?.init(); sound?.playHeavyCardThud(1); setPhase('SHUFFLING');
    [180, 380, 590, 820, 1060, 1320, 1580, 1860, 2150].forEach((ms, i) => {
      timersRef.current.push(setTimeout(() => sound?.playHeavyCardThud(0.8 + (i % 5) * 0.08), ms));
    });
    timersRef.current.push(setTimeout(() => {
      setDeck(
        [...CARTAS_DISPONIBLES]
          .sort(() => Math.random() - 0.5)
          .slice(0, 7)
          .map((card) => ({ ...card, isReversed: Math.random() < 0.5 }))
      );
      selectionLockRef.current = false;
      sound?.playHarpNote(3);
      setPhase('SPREAD');
    }, 2550));
  }, [CARTAS_DISPONIBLES, clearManagedTimers, stopRumble, quality]);

  // --- Tirada Trina ("El Hilo de las Tres Lunas") ---
  const runTrinaShuffleAct = useCallback((actIndex, alreadyPicked) => {
    clearManagedTimers();
    selectionLockRef.current = false;
    setTrinaAct(actIndex);
    setHoveredSpreadIdx(null);
    setTrinaPickingIdx(null);
    setPhase('SHUFFLING');

    if (window.TrinaSpreadEngine?.playTrinaShuffleAudio) {
      const audioTimers = window.TrinaSpreadEngine.playTrinaShuffleAudio(actIndex) || [];
      timersRef.current.push(...audioTimers);
    } else {
      sound?.init(); sound?.playHeavyCardThud(1);
    }

    const usedIds = new Set((alreadyPicked || []).map((c) => String(c.id)));
    timersRef.current.push(setTimeout(() => {
      const remainingPool = CARTAS_DISPONIBLES.filter((c) => !usedIds.has(String(c.id)));
      const fanSource = remainingPool.length >= 7 ? remainingPool : CARTAS_DISPONIBLES;
      setDeck(
        [...fanSource]
          .sort(() => Math.random() - 0.5)
          .slice(0, 7)
          .map((card) => ({ ...card, isReversed: Math.random() < 0.5 }))
      );
      selectionLockRef.current = false;
      sound?.playHarpNote(2 + actIndex * 2);
      setPhase('SPREAD');
    }, 2550));
  }, [CARTAS_DISPONIBLES, clearManagedTimers]);

  const handleStartTrina = useCallback(() => {
    ensureGrimorioLoaded();
    window.prewarmCardBackSprite?.(quality);
    clearManagedTimers();
    cancelRef.current?.();
    stopRumble();
    particles.current?.stopCharge();
    selectionLockRef.current = false;

    setSpreadMode('trina');
    setTrinaCards([]);
    setTrinaPickingIdx(null);
    setSelectedIdx(null);
    setRevealedCard(null);
    setSinoResult(null);
    setSinoSetupOpen(false);
    setBurst(0);
    runTrinaShuffleAct(0, []);
  }, [clearManagedTimers, runTrinaShuffleAct, stopRumble, quality]);

  // --- Tirada La Balanza Sí o No (1 Carta o 3 Cartas) ---
  const openSiNoSetup = useCallback(() => {
    sound?.init?.();
    sound?.playHarpNote?.(3);
    window.prewarmCardBackSprite?.(quality);
    ensureGrimorioLoaded().then(() => {
      setSinoSetupOpen(true);
    });
  }, [quality]);

  const runSiNoShuffleAct = useCallback((subModeArg, actIndex, alreadyPicked) => {
    clearManagedTimers();
    selectionLockRef.current = false;
    setSinoAct(actIndex);
    setHoveredSpreadIdx(null);
    setSinoPickingIdx(null);
    setPhase('SHUFFLING');

    if (window.SiNoSpreadEngine?.playSiNoShuffleAudio) {
      const audioTimers = window.SiNoSpreadEngine.playSiNoShuffleAudio(subModeArg, actIndex) || [];
      timersRef.current.push(...audioTimers);
    } else {
      sound?.init?.(); sound?.playHeavyCardThud?.(0.95);
    }

    const usedIds = new Set((alreadyPicked || []).map((c) => String(c.id)));
    const shuffleDurationMs = subModeArg === 'triad' ? 1180 : 1220;
    timersRef.current.push(setTimeout(() => {
      const remainingPool = CARTAS_DISPONIBLES.filter((c) => !usedIds.has(String(c.id)));
      const fanSource = remainingPool.length >= 7 ? remainingPool : CARTAS_DISPONIBLES;
      setDeck(
        [...fanSource]
          .sort(() => Math.random() - 0.5)
          .slice(0, 7)
          .map((card) => ({ ...card, isReversed: Math.random() < 0.5 }))
      );
      selectionLockRef.current = false;
      sound?.playHarpNote?.(3 + actIndex);
      setPhase('SPREAD');
    }, shuffleDurationMs));
  }, [CARTAS_DISPONIBLES, clearManagedTimers]);

  const handleStartSiNo = useCallback(({ subMode, domain, question }) => {
    ensureGrimorioLoaded();
    window.prewarmCardBackSprite?.(quality);
    clearManagedTimers();
    cancelRef.current?.();
    stopRumble();
    particles.current?.stopCharge();
    selectionLockRef.current = false;

    const chosenSub = subMode === 'triad' ? 'triad' : 'single';
    const chosenDom = domain || 'general';
    const chosenQ = String(question || '').trim();

    setSinoSetupOpen(false);
    setSpreadMode('sino');
    setSinoSubMode(chosenSub);
    setSinoDomain(chosenDom);
    setSinoQuestion(chosenQ);
    setSinoCards([]);
    setSinoPickingIdx(null);
    setSinoResult(null);
    setSelectedIdx(null);
    setRevealedCard(null);
    setBurst(0);
    runSiNoShuffleAct(chosenSub, 0, []);
  }, [clearManagedTimers, runSiNoShuffleAct, stopRumble, quality]);

  const handleSelect = useCallback((card, index, e) => {
    if (phase !== 'SPREAD' || selectionLockRef.current) return;
    if (spreadMode === 'trina' && trinaPickingIdx !== null) return;
    if (spreadMode === 'sino' && sinoPickingIdx !== null) return;
    if (typeof window.__veloEnsureGrimorio === 'function' && !window.__veloGrimorioReady) {
      selectionLockRef.current = true;
      window.__veloEnsureGrimorio().then(() => {
        selectionLockRef.current = false;
        handleSelect(card, index, e);
      });
      return;
    }
    selectionLockRef.current = true;

    if (spreadMode === 'sino') {
      const livingCard = resolvePolymorphicCard(card, card.isReversed, true);
      if (window.TAROT_DB?.getGrimoireStats) {
        setGrimoireStats(window.TAROT_DB.getGrimoireStats());
      }

      if (sinoSubMode === 'triad') {
        const nextPicked = [...sinoCards, livingCard];
        if (sinoAct < 2) {
          setSinoPickingIdx(index);
          setHoveredSpreadIdx(null);
          setOracleReaction((count) => count + 1);
          sound?.playSkyrimNodeChime?.(sinoAct);
          sound?.playHeavyCardThud?.(1.05);

          if (e && e.currentTarget) {
            const r = e.currentTarget.getBoundingClientRect();
            particles.current?.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, w: 90, h: 120 });
          }

          timersRef.current.push(setTimeout(() => {
            setSinoCards(nextPicked);
            setSinoPickingIdx(null);
            runSiNoShuffleAct('triad', sinoAct + 1, nextPicked);
          }, 520));
          return;
        }

        const evalRes = window.SiNoOracleEngine?.evaluateTriad
          ? window.SiNoOracleEngine.evaluateTriad(nextPicked, { domain: sinoDomain, question: sinoQuestion, record: true })
          : null;

        if (evalRes && window.GrimorioPersonal?.recordReading) {
          window.GrimorioPersonal.recordReading({
            type: 'sino',
            sinoMode: 'triad',
            cards: nextPicked,
            question: sinoQuestion,
            domain: sinoDomain,
            domainLabel: evalRes.domainMeta?.label || 'General',
            verdictCode: evalRes.seal?.code || '',
            verdictLabel: evalRes.seal?.label || '',
            summary: evalRes.synthesisText || evalRes.headline || ''
          });
        }
        refreshGrimoireUi();

        setSelectedIdx(index);
        setSinoCards(nextPicked);
        setSinoResult(evalRes);
        setRevealedCard(livingCard);
        setHoveredSpreadIdx(null);
        setPhase('CRACKING');
        setOracleReaction((count) => count + 1);
        cancelRef.current?.();
        const isMobileNow = window.innerWidth < 768;
        cancelRef.current = runRevealSequence({
          onCharge: () => {
            sound?.playCrackTensionRiser?.();
            particles.current?.startCharge(T.CHARGE);
            if (!isMobileNow) rumble(T.CHARGE);
          },
          onDetonate: () => {
            const r = cardRef.current?.getBoundingClientRect();
            if (r) setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
            stopRumble();
            particles.current?.stopCharge();
            sound?.playLegendaryRevealImpact?.();
            particles.current?.burst();
            if (!isMobileNow) addTrauma(0.9);
            setBurst((c) => c + 1);
          },
          onReveal: () => {
            setPhase('REVEAL');
          }
        });
        return;
      }

      // Modo Pulso Único Sí o No (1 Carta)
      const singleEval = window.SiNoOracleEngine?.evaluateSingle
        ? window.SiNoOracleEngine.evaluateSingle(livingCard, { domain: sinoDomain, question: sinoQuestion, record: true })
        : null;

      if (singleEval && window.GrimorioPersonal?.recordReading) {
        window.GrimorioPersonal.recordReading({
          type: 'sino',
          sinoMode: 'single',
          cards: [livingCard],
          question: sinoQuestion,
          domain: sinoDomain,
          domainLabel: singleEval.domainMeta?.label || 'General',
          verdictCode: singleEval.seal?.code || '',
          verdictLabel: singleEval.seal?.label || '',
          summary: singleEval.answerText || singleEval.headline || ''
        });
      }
      refreshGrimoireUi();

      setSelectedIdx(index);
      setSinoCards([livingCard]);
      setSinoResult(singleEval);
      setRevealedCard(livingCard);
      setHoveredSpreadIdx(null);
      setPhase('CRACKING');
      setOracleReaction((count) => count + 1);
      cancelRef.current?.();
      const isMobileNow = window.innerWidth < 768;
      cancelRef.current = runRevealSequence({
        onCharge: () => {
          sound?.playCrackTensionRiser?.();
          particles.current?.startCharge(T.CHARGE);
          if (!isMobileNow) rumble(T.CHARGE);
        },
        onDetonate: () => {
          const r = cardRef.current?.getBoundingClientRect();
          if (r) setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
          stopRumble();
          particles.current?.stopCharge();
          sound?.playLegendaryRevealImpact?.();
          particles.current?.burst();
          if (!isMobileNow) addTrauma(0.9);
          setBurst((c) => c + 1);
        },
        onReveal: () => {
          setPhase('REVEAL');
        }
      });
      return;
    }

    if (spreadMode === 'trina') {

      const livingCard = resolvePolymorphicCard(card, card.isReversed, true);
      if (window.TAROT_DB?.getGrimoireStats) {
        setGrimoireStats(window.TAROT_DB.getGrimoireStats());
      }
      const nextPicked = [...trinaCards, livingCard];

      if (trinaAct < 2) {
        setTrinaPickingIdx(index);
        setHoveredSpreadIdx(null);
        setOracleReaction((count) => count + 1);
        sound?.playSkyrimNodeChime?.(trinaAct);
        sound?.playHeavyCardThud?.(1.08);

        if (e && e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          particles.current?.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, w: 90, h: 120 });
        }

        timersRef.current.push(setTimeout(() => {
          setTrinaCards(nextPicked);
          setTrinaPickingIdx(null);
          runTrinaShuffleAct(trinaAct + 1, nextPicked);
        }, 620));
        return;
      }

      if (window.GrimorioPersonal?.recordReading) {
        const previewSynth = window.TrinaOracleEngine?.buildTriadSynthesis
          ? window.TrinaOracleEngine.buildTriadSynthesis(nextPicked[0], nextPicked[1], nextPicked[2], false)
          : null;
        window.GrimorioPersonal.recordReading({
          type: 'trina',
          cards: nextPicked,
          arcTitle: previewSynth?.verdict?.arcTitle || 'El Hilo de las Tres Lunas',
          arcBadge: previewSynth?.verdict?.arcBadge || '',
          summary: previewSynth?.verdict?.narrativeSynthesis || '',
          closingAdvice: previewSynth?.verdict?.closingAdvice || ''
        });
      }
      refreshGrimoireUi();

      setSelectedIdx(index);
      setTrinaCards(nextPicked);
      setRevealedCard(livingCard);
      setHoveredSpreadIdx(null);
      setPhase('CRACKING');
      setOracleReaction((count) => count + 1);
      cancelRef.current?.();
      const isMobileNow = window.innerWidth < 768;
      cancelRef.current = runRevealSequence({
        onCharge: () => {
          sound?.playCrackTensionRiser?.();
          particles.current?.startCharge(T.CHARGE);
          if (!isMobileNow) rumble(T.CHARGE);
        },
        onDetonate: () => {
          const r = cardRef.current?.getBoundingClientRect();
          if (r) setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
          stopRumble();
          particles.current?.stopCharge();
          sound?.playLegendaryRevealImpact?.();
          particles.current?.burst();
          if (!isMobileNow) addTrauma(0.95);
          setBurst((c) => c + 1);
        },
        onReveal: () => {
          setPhase('REVEAL');
        }
      });
      return;
    }

    setSelectedIdx(index);
    const livingCard = resolvePolymorphicCard(card, card.isReversed, true);
    setRevealedCard(livingCard);
    setActiveNode((livingCard.nodes && livingCard.nodes[0]) || null);
    setActiveTab('oracle');
    setActSealed(window.TAROT_DB?.isPsychomagicActSealed ? window.TAROT_DB.isPsychomagicActSealed(livingCard.id, livingCard.isReversed) : false);
    if (window.GrimorioPersonal?.recordReading) {
      window.GrimorioPersonal.recordReading({
        type: 'single',
        cards: [livingCard],
        summary: livingCard.oracleVoice || livingCard.counsel || livingCard.meaning || ''
      });
    }
    refreshGrimoireUi();

    setPhase('CRACKING');
    setOracleReaction((count) => count + 1);
    cancelRef.current?.();
    const isMobileNow = window.innerWidth < 768;
    cancelRef.current = runRevealSequence({
      onCharge: () => {
        sound?.playCrackTensionRiser?.();
        particles.current?.startCharge(T.CHARGE);
        if (!isMobileNow) rumble(T.CHARGE);
      },
      onDetonate: () => {
        const r = cardRef.current?.getBoundingClientRect();
        if (r) setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
        stopRumble();
        particles.current?.stopCharge();
        sound?.playLegendaryRevealImpact?.();
        particles.current?.burst();
        if (!isMobileNow) addTrauma(0.95);
        setBurst((c) => c + 1);
      },
      onReveal: () => {
        setPhase('REVEAL');
      }
    });
  }, [phase, spreadMode, trinaAct, trinaCards, trinaPickingIdx, sinoSubMode, sinoAct, sinoCards, sinoPickingIdx, sinoDomain, sinoQuestion, runTrinaShuffleAct, runSiNoShuffleAct, rumble, stopRumble, addTrauma, refreshGrimoireUi]);

  const handleToggleRevealedPolarity = useCallback(() => {
    if (!revealedCard) return;
    const nextReversed = !revealedCard.isReversed;
    sound?.playHeavyCardThud(nextReversed ? 0.85 : 1.15);
    sound?.playHarpNote(nextReversed ? 1 : 5);
    const switchedCard = resolvePolymorphicCard(revealedCard, nextReversed, false);
    setRevealedCard(switchedCard);
    setActiveNode((switchedCard.nodes && switchedCard.nodes[0]) || null);
    setActSealed(window.TAROT_DB?.isPsychomagicActSealed ? window.TAROT_DB.isPsychomagicActSealed(switchedCard.id, nextReversed) : false);
  }, [revealedCard]);

  const handleToggleTrinaCardPolarity = useCallback((slotIdx) => {
    setTrinaCards((prev) => {
      if (!prev || !prev[slotIdx]) return prev;
      const target = prev[slotIdx];
      const nextReversed = !target.isReversed;
      sound?.playHeavyCardThud(nextReversed ? 0.85 : 1.15);
      sound?.playHarpNote(nextReversed ? 1 : 5);
      const switched = resolvePolymorphicCard(target, nextReversed, false);
      return prev.map((c, idx) => (idx === slotIdx ? switched : c));
    });
  }, []);

  const handleToggleSiNoCardPolarity = useCallback((slotIdx) => {
    setSinoCards((prev) => {
      if (!prev || !prev[slotIdx]) return prev;
      const target = prev[slotIdx];
      const nextReversed = !target.isReversed;
      sound?.playHeavyCardThud?.(nextReversed ? 0.85 : 1.15);
      sound?.playHarpNote?.(nextReversed ? 1 : 5);
      const switched = resolvePolymorphicCard(target, nextReversed, false);
      const updatedCards = prev.map((c, idx) => (idx === slotIdx ? switched : c));
      if (window.SiNoOracleEngine) {
        const nextRes = updatedCards.length >= 3
          ? window.SiNoOracleEngine.evaluateTriad(updatedCards, { domain: sinoDomain, question: sinoQuestion, record: false })
          : window.SiNoOracleEngine.evaluateSingle(updatedCards[0], { domain: sinoDomain, question: sinoQuestion, record: false });
        setSinoResult(nextRes);
      }
      return updatedCards;
    });
  }, [sinoDomain, sinoQuestion]);

  const handleTrinaSealBurst = useCallback((burstOrigin) => {
    if (burstOrigin) particles.current?.burst(burstOrigin);
    if (window.TAROT_DB?.getGrimoireStats) {
      setGrimoireStats(window.TAROT_DB.getGrimoireStats());
    }
  }, []);

  const handleSealPsychomagic = useCallback((e) => {
    if (!revealedCard) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const actObj = revealedCard.theAlchemy || revealedCard.actionOracle || {};
    if (window.TAROT_DB?.sealPsychomagicAct) {
      window.TAROT_DB.sealPsychomagicAct(
        revealedCard.id,
        revealedCard.isReversed,
        actObj.talismanPhrase,
        actObj.command
      );
      setGrimoireStats(window.TAROT_DB.getGrimoireStats());
    }
    if (actObj.talismanPhrase) {
      copyTextSafe(actObj.talismanPhrase);
    }
    sound?.playSkyrimNodeChime?.(2);
    sound?.playHarpNote?.(6);
    particles.current?.burst({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: 120, h: 60 });
    setActSealed(true);
  }, [revealedCard]);

  const handleReopenReading = useCallback((entry) => {
    if (!entry || !Array.isArray(entry.cards) || entry.cards.length === 0) return;
    clearManagedTimers();
    cancelRef.current?.();
    stopRumble();
    particles.current?.stopCharge();
    selectionLockRef.current = false;
    sound?.init?.();
    sound?.playHarpNote?.(4);

    const findBaseCard = (idStr) =>
      CARTAS_DISPONIBLES.find((c) => String(c.id) === String(idStr)) ||
      (window.TarotRouter?.getCard ? window.TarotRouter.getCard(idStr) : null);

    if (entry.type === 'sino') {
      const restoredSiNo = entry.cards.map((saved) => {
        const base = findBaseCard(saved.id) || CARTAS_DISPONIBLES[0];
        return resolvePolymorphicCard(base, saved.isReversed, false);
      });
      const dom = entry.domain || 'general';
      const q = entry.question || '';
      const sub = restoredSiNo.length >= 3 ? 'triad' : 'single';
      const evalRestored = window.SiNoOracleEngine
        ? (sub === 'triad'
            ? window.SiNoOracleEngine.evaluateTriad(restoredSiNo, { domain: dom, question: q, record: false })
            : window.SiNoOracleEngine.evaluateSingle(restoredSiNo[0], { domain: dom, question: q, record: false }))
        : null;
      setSpreadMode('sino');
      setSinoSubMode(sub);
      setSinoDomain(dom);
      setSinoQuestion(q);
      setSinoAct(sub === 'triad' ? 2 : 0);
      setSinoCards(restoredSiNo);
      setSinoResult(evalRestored);
      setRevealedCard(restoredSiNo[restoredSiNo.length - 1]);
      setGrimoireOpen(false);
      setPhase('REVEAL');
      return;
    }

    if (entry.type === 'trina' && entry.cards.length >= 3) {
      const restored = entry.cards.slice(0, 3).map((saved) => {
        const base = findBaseCard(saved.id) || CARTAS_DISPONIBLES[0];
        return resolvePolymorphicCard(base, saved.isReversed, false);
      });
      setSpreadMode('trina');
      setTrinaAct(2);
      setTrinaCards(restored);
      setRevealedCard(restored[2]);
      setGrimoireOpen(false);
      setPhase('REVEAL');
      return;
    }

    const first = entry.cards[0];
    const baseSingle = findBaseCard(first.id) || CARTAS_DISPONIBLES[0];
    const restoredSingle = resolvePolymorphicCard(baseSingle, first.isReversed, false);
    setSpreadMode('single');
    setTrinaCards([]);
    setRevealedCard(restoredSingle);
    setActiveNode((restoredSingle.nodes && restoredSingle.nodes[0]) || null);
    setActiveTab('oracle');
    setActSealed(window.TAROT_DB?.isPsychomagicActSealed ? window.TAROT_DB.isPsychomagicActSealed(restoredSingle.id, restoredSingle.isReversed) : false);
    setGrimoireOpen(false);
    setPhase('REVEAL');
  }, [CARTAS_DISPONIBLES, clearManagedTimers, stopRumble]);

  const handleReset = useCallback(() => {
    clearManagedTimers();
    cancelRef.current?.();
    stopRumble();
    particles.current?.stopCharge();
    selectionLockRef.current = false;
    sound?.playHeavyCardThud(0.9);
    setSpreadMode('single');
    setTrinaAct(0);
    setTrinaCards([]);
    setTrinaPickingIdx(null);
    setSinoAct(0);
    setSinoCards([]);
    setSinoPickingIdx(null);
    setSinoResult(null);
    setSinoSetupOpen(false);
    setSelectedIdx(null);
    setRevealedCard(null);
    setActiveNode(null);
    setHoveredSpreadIdx(null);
    setBurst(0);
    setPhase('IDLE');
  }, [clearManagedTimers, stopRumble]);

  const toggleMute = useCallback(() => { if (sound) { sound.muted = !sound.muted; setIsMuted(sound.muted); } }, []);

  useEffect(() => {
    if (phase === 'REVEAL' && spreadMode === 'single' && singleRevealScrollRef.current) {
      singleRevealScrollRef.current.scrollTop = 0;
    }
  }, [phase, spreadMode, revealedCard?.id]);

  // =========================================================================
  // ESCALADO RESPONSIVO SIN ANIMAR HEIGHT (CERO LAYOUT SHIFTS)
  // =========================================================================
  const isSmallMobile = viewportW < 420;
  const isMobile = viewportW < 640;
  const isDesktop = viewportW >= 1024;
  const isWideDesktop = viewportW >= 1440 && viewportH >= 820;
  const isCompactOracle = phase === 'CRACKING' || phase === 'REVEAL';

  const baseOracleScale = isSmallMobile ? 0.58 : isMobile ? 0.68 : isWideDesktop ? 1.28 : isDesktop ? 1.14 : 0.96;
  const oracleScale = isCompactOracle ? baseOracleScale * 0.72 : baseOracleScale;
  // Altura del contenedor fija por viewport (nunca cambia entre fases = 0 CLS)
  const fixedOracleBoxHeight = Math.round(240 * baseOracleScale);

  const spreadStep = useMemo(() => {
    const maxStep = isWideDesktop ? 132 : isDesktop ? 108 : isSmallMobile ? 38 : isMobile ? 46 : 78;
    const margin = isSmallMobile ? 136 : isMobile ? 132 : 150;
    return Math.min(maxStep, Math.max(24, (viewportW - margin) / 6));
  }, [viewportW, isSmallMobile, isMobile, isDesktop, isWideDesktop]);

  const isReversed = revealedCard?.isReversed || false;
  const activeMeaning = revealedCard?.meaning;
  const activeLightAndShadow = revealedCard?.lightAndShadow;
  const activeDomains = revealedCard?.domains;
  const activeCounsel = revealedCard?.counsel;
  const activeYesNo = (revealedCard?.correspondences && revealedCard.correspondences.yesNo) || revealedCard?.yesNo;
  const activeAction = revealedCard?.theAlchemy || revealedCard?.actionOracle;
  const activeSynchronicity = revealedCard?.activeSynchronicityAlert;
  const recentDrawCount = revealedCard?.recentDrawCount || 1;

  // Opacidad pura en GPU (en lugar de filter: blur(2.8px) sobre todo Sibilia)
  const shouldDimOracleBg = phase === 'CRACKING' || phase === 'REVEAL' || hoveredSpreadIdx !== null;
  const TrinaEngine = window.TrinaSpreadEngine;
  const TrinaShuffleDeckComp = TrinaEngine?.TrinaShuffleDeck;
  const TrinaAltarTrayComp = TrinaEngine?.TrinaAltarTray;
  const TrinaVerticalRevealComp = TrinaEngine?.TrinaVerticalReveal;
  const SiNoEngine = window.SiNoSpreadEngine;
  const SiNoSetupModalComp = SiNoEngine?.SiNoSetupModal;
  const SiNoAltarTrayComp = SiNoEngine?.SiNoAltarTray;
  const SiNoRevealViewComp = SiNoEngine?.SiNoRevealView;
  const currentTrinaInfo = TrinaEngine?.ACT_LABELS?.[trinaAct];
  const GrimorioModalComp = window.GrimorioModal;
  const unlockedMajorCount = grimoireStats?.totalMajorUnlocked || 0;
  const sealedCountUi = grimoireStats?.sealedActsCount || 0;
  const hasBakedBackSprite = Boolean(window.CardBackSprite);

  return (
    <div style={{ background: 'radial-gradient(ellipse at 50% 25%, #190e30 0%, #090510 55%, #040207 100%)' }} className="fixed inset-0 overflow-hidden select-none text-amber-50">
      {!hasBakedBackSprite && CardBackDefs && <CardBackDefs />}
      {SharedArtDefs && <SharedArtDefs />}

      <RevealStage phase={phase} burst={burst} origin={origin} spreadMode={spreadMode} isMobile={isMobile} quality={quality} />
      <ParticleCanvas ref={particles} originRef={cardRef} quality={quality} isMobile={isMobile} />

      <div
        ref={worldRef}
        className="absolute inset-0 flex flex-col justify-start z-10 pt-2 sm:pt-3 lg:pt-4 pb-8 lg:pb-10 overflow-y-auto overflow-x-hidden"
      >
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-10 z-40 flex-shrink-0 h-11 lg:h-12">
          <button
            type="button"
            onClick={() => openGrimoire('codice')}
            style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
            className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-[#130b24]/95 hover:bg-[#1e1138] border border-[#d4af37]/60 hover:border-amber-300 text-xs sm:text-sm font-semibold text-amber-100 transition-colors cursor-pointer shadow-[0_0_18px_rgba(212,175,55,0.2)]"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-200 transition-colors" />
            <span>
              Grimorio: <strong className="text-amber-300">{unlockedMajorCount}/22</strong> Arcanos
            </span>
            {sealedCountUi > 0 && (
              <span className="hidden sm:inline text-emerald-300 border-l border-amber-500/30 pl-2.5">
                ✦ {sealedCountUi} {sealedCountUi === 1 ? 'Sello' : 'Sellos'}
              </span>
            )}
            {readingsCount > 0 && (
              <span className="hidden md:inline text-purple-100/95 border-l border-amber-500/30 pl-2.5">
                {readingsCount} {readingsCount === 1 ? 'Lectura' : 'Lecturas'}
              </span>
            )}
          </button>

          <button onClick={toggleMute} aria-label="Alternar sonido" className="p-2.5 lg:p-3 rounded-full bg-[#120a22]/90 border border-[#d4af37]/60 text-amber-200 hover:bg-amber-500/20 transition-colors cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {isMuted ? <VolumeX className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400/60" /> : <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />}
          </button>
        </header>

        <section
          className="relative z-10 flex flex-col items-center justify-start flex-shrink-0 w-full transition-opacity duration-300"
          style={{
            opacity: shouldDimOracleBg ? 0.58 : 1
          }}
        >
          {/* Altura fija por viewport: solo transform scale en GPU (0 CLS) */}
          <div style={{ height: fixedOracleBoxHeight }} className="relative flex items-start justify-center w-full overflow-visible">
            <motion.div animate={{ scale: oracleScale }} transition={{ duration: 0.4, ease: 'easeOut' }} style={{ transformOrigin: '50% 0%', willChange: 'transform' }}>
              <OracleMetaMaskRig gameState={(grimoireOpen || sinoSetupOpen) ? 'REVEAL' : phase} mouseX={mouseX} mouseY={mouseY} reactionSignal={oracleReaction} revealSignal={burst} quality={quality} />
            </motion.div>
          </div>
          <OracleDialogueBox
            phase={phase}
            revealedCard={revealedCard}
            spreadMode={spreadMode}
            trinaAct={trinaAct}
            trinaCards={trinaCards}
            sinoSubMode={sinoSubMode}
            sinoAct={sinoAct}
            sinoDomain={sinoDomain}
          />
        </section>

        <main className={"relative z-30 flex-1 flex flex-col items-center justify-start lg:justify-center w-full " + (((spreadMode === 'trina' || (spreadMode === 'sino' && sinoSubMode === 'triad')) && phase !== 'IDLE') ? "pt-14 sm:pt-16 lg:pt-16" : "pt-3 sm:pt-6 lg:pt-12")} style={{ perspective: '1200px', contain: 'layout' }}>
          {/* ALTAR DE CUSTODIA EN SLOT ABSOLUTO SUPERIOR (NUNCA EMPUJA EL MAZO NI CAUSA CLS) */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none px-2">
            <AnimatePresence>
              {spreadMode === 'trina' && (phase === 'SHUFFLING' || phase === 'SPREAD' || phase === 'CRACKING') && TrinaAltarTrayComp && (
                <TrinaAltarTrayComp pickedCards={trinaCards} currentAct={trinaAct} phase={phase} />
              )}
              {spreadMode === 'sino' && sinoSubMode === 'triad' && (phase === 'SHUFFLING' || phase === 'SPREAD' || phase === 'CRACKING') && SiNoAltarTrayComp && (
                <SiNoAltarTrayComp pickedCards={sinoCards} currentAct={sinoAct} phase={phase} />
              )}
            </AnimatePresence>
          </div>

          {phase === 'IDLE' && (
            <div className="relative z-20 flex flex-col items-center gap-3.5 sm:gap-6 lg:gap-7 mt-1 mb-6">
              <div className="relative w-28 h-40 sm:w-40 sm:h-60 lg:w-[186px] lg:h-[280px] xl:w-[214px] xl:h-[324px]">
                {/* Resplandor en radial-gradient puro (reemplaza blur-2xl animate-pulse) */}
                <div
                  aria-hidden
                  className="absolute -inset-10 lg:-inset-14 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.24) 0%, rgba(168,85,247,0.12) 45%, transparent 72%)' }}
                />
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      transform: "translate3d(" + ((i % 2 === 0 ? 1 : -1) * 0.6) + "px, " + (-i * (isDesktop ? 3.8 : 3.0)) + "px, 0) rotate(" + ((i - 2) * 0.7) + "deg)"
                    }}
                    className="absolute inset-0"
                  >
                    <CardBackOrnament isCracking={false} quality={quality} fastMotion={i < 4} />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-3 sm:gap-3.5 z-50 px-4 w-full max-w-3xl">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleStartShuffle}
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  className="px-8 sm:px-11 lg:px-14 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#b88920] via-[#f3d06b] to-[#b88920] text-[#09050e] font-bold tracking-[0.08em] uppercase text-sm sm:text-base lg:text-lg border-2 border-amber-100 shadow-[0_0_28px_rgba(212,175,55,0.48)] cursor-pointer"
                >
                  <span className="flex items-center gap-2 lg:gap-3">
                    <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> Barajar el Destino
                  </span>
                </motion.button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                  {TrinaEngine && (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={handleStartTrina}
                      className="group w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#1a0b2e] via-[#34165c] to-[#1a0b2e] border border-[#d4af37]/80 hover:border-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.32)] cursor-pointer transition-colors"
                    >
                      <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="flex items-center gap-2 text-amber-100 group-hover:text-white font-bold tracking-[0.06em] uppercase text-[13px] sm:text-sm">
                        <Moon className="w-3.5 h-3.5 text-purple-300" />
                        El Hilo de las Tres Lunas
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-purple-100/95 mt-0.5">
                        Pasado • Presente • Futuro
                      </span>
                    </motion.button>
                  )}

                  {SiNoEngine && (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={openSiNoSetup}
                      className="group w-full sm:w-auto flex flex-col items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#07211b] via-[#13352f] to-[#07211b] border border-emerald-400/75 hover:border-amber-300 shadow-[0_0_20px_rgba(52,211,153,0.28)] cursor-pointer transition-colors"
                    >
                      <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="flex items-center gap-2 text-emerald-100 group-hover:text-white font-bold tracking-[0.06em] uppercase text-[13px] sm:text-sm">
                        <ScaleIcon className="w-3.5 h-3.5 text-emerald-300" />
                        La Balanza Sí o No
                      </span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-[0.12em] text-emerald-200/95 mt-0.5">
                        Pulso Rápido • 1 o 3 Cartas
                      </span>
                    </motion.button>
                  )}
                </div>

                <div style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs uppercase tracking-[0.08em] text-amber-200/90">
                  <a href="tarot-si-o-no.html" className="hover:text-emerald-300 transition-colors">Guía Sí o No</a>
                  <span className="text-amber-500/35">•</span>
                  <a href="sobre-nosotros.html" className="hover:text-amber-300 transition-colors">Sobre Nosotros</a>
                  <span className="text-amber-500/35">•</span>
                  <a href="privacidad.html" className="hover:text-amber-300 transition-colors">Privacidad</a>
                </div>
              </div>
            </div>
          )}

          {phase === 'SHUFFLING' && (
            <div className="relative w-full flex flex-col items-center">
              {spreadMode === 'trina' && trinaAct > 0 && TrinaShuffleDeckComp ? (
                <TrinaShuffleDeckComp
                  actIndex={trinaAct}
                  shuffleCards={shuffleCards}
                  quality={quality}
                  isMobile={isMobile}
                  isDesktop={isDesktop}
                  isWideDesktop={isWideDesktop}
                  CardBackComponent={CardBackOrnament}
                />
              ) : (
                <div className="relative z-20 w-full h-64 sm:h-76 lg:h-[340px] xl:h-[390px] flex items-center justify-center mt-2 mb-6" style={{ contain: 'layout style' }}>
                  {shuffleCards.map((card, i) => {
                    const total = shuffleCards.length;
                    const side = i % 2 === 0 ? -1 : 1;
                    const ring = i % 2 === 0 ? 1 : 0.62;
                    const angle = (i / total) * TAU;
                    const spreadRadius = isMobile ? 96 : isWideDesktop ? 275 : isDesktop ? 225 : 175;
                    const orbitY = isMobile ? 54 : isWideDesktop ? 115 : isDesktop ? 95 : 78;
                    const fanOffset = (i - (total - 1) / 2) * (isMobile ? 11 : isWideDesktop ? 26 : isDesktop ? 21 : 16);

                    const ultraAnim = {
                      x: [
                        0,
                        side * (spreadRadius * 0.95 + (i % 5) * 12),
                        Math.cos(angle) * spreadRadius * ring,
                        fanOffset,
                        0
                      ],
                      y: [
                        -200 - (i % 6) * 16,
                        -28 + ((i % 4) - 1.5) * 14,
                        Math.sin(angle) * orbitY * ring,
                        Math.abs(i - total / 2) * 3 - 22,
                        -i * (isDesktop ? 1.8 : 1.3)
                      ],
                      rotateZ: [
                        side * 60,
                        side * -24,
                        (angle * 180) / Math.PI + 90,
                        (i - total / 2) * 3.2,
                        (i - total / 2) * 0.35
                      ],
                      rotateY: [180, side * 25, 0, 0, 0],
                      scale: [0.58, 1.06, 0.92 + (i % 3) * 0.06, 1.03, 1]
                    };

                    const stdAnim = {
                      x: [
                        0,
                        side * (spreadRadius * 0.85 + (i % 4) * 10),
                        0,
                        Math.cos(angle) * spreadRadius * ring,
                        0
                      ],
                      y: [
                        0,
                        -22 + ((i % 5) - 2) * 8,
                        (i - total / 2) * 4,
                        Math.sin(angle) * (orbitY * 0.78) * ring,
                        -i * 1.4
                      ],
                      rotateZ: [0, side * 22, side * -12, i * 32, 0],
                      scale: [1, 1.05, 0.96, 1.05, 1]
                    };

                    return (
                      <motion.div
                        key={card.id + "-shuf-" + spreadMode + "-" + trinaAct + "-" + sinoAct + "-" + i}
                        initial={
                          isUltra
                            ? { x: 0, y: -200, rotateZ: side * 45, rotateY: 180, scale: 0.58 }
                            : { x: 0, y: 0, rotateZ: 0, scale: 1 }
                        }
                        animate={isUltra ? ultraAnim : stdAnim}
                        transition={
                          isUltra
                            ? {
                                duration: spreadMode === 'sino' ? 1.05 : 2.15,
                                times: [0, 0.26, 0.58, 0.84, 1],
                                ease: 'easeInOut',
                                delay: i * 0.022
                              }
                            : {
                                duration: spreadMode === 'sino' ? 1.05 : 2.25,
                                times: [0, 0.25, 0.5, 0.8, 1],
                                ease: 'easeInOut',
                                delay: i * 0.025
                              }
                        }
                        style={{ zIndex: 10 + i, willChange: 'transform' }}
                        className="absolute w-28 h-44 sm:w-36 sm:h-56 lg:w-[180px] lg:h-[276px] xl:w-[208px] xl:h-[320px]"
                      >
                        <CardBackOrnament isCracking={false} quality={quality} fastMotion={true} />
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {spreadMode === 'trina' && currentTrinaInfo && (
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full bg-[#090513]/95 border border-purple-400/40 text-xs sm:text-[13px] uppercase tracking-[0.12em] text-purple-200/90 pointer-events-none">
                  ✦ {currentTrinaInfo.shuffleName} ✦
                </span>
              )}
            </div>
          )}

          {(phase === 'SPREAD' || phase === 'CRACKING') && (
            <div className="relative z-20 w-full h-64 sm:h-76 lg:h-[340px] xl:h-[390px] flex items-center justify-center mt-2 mb-6" style={{ contain: 'layout style' }}>
              {deck.map((card, i) => {
                const offset = i - 3;
                const angle = offset * (isSmallMobile ? 5.2 : isMobile ? 6.5 : 9.5);
                const arcDrop = isDesktop ? 15 : 11;
                const hoverLift = isDesktop ? 38 : 28;
                const isHovered = hoveredSpreadIdx === i && phase === 'SPREAD' && trinaPickingIdx === null && sinoPickingIdx === null;
                const isChosen = selectedIdx === i;
                const isTrinaAscending = (spreadMode === 'trina' && trinaPickingIdx === i) || (spreadMode === 'sino' && sinoPickingIdx === i);
                const isDiscarded = phase === 'CRACKING' && !isChosen;

                return (
                  <motion.div
                    key={card.id + "-act-" + spreadMode + "-" + trinaAct + "-" + sinoAct + "-" + i}
                    ref={isChosen ? cardRef : null}
                    animate={
                      isTrinaAscending
                        ? { x: 0, y: -155, rotateZ: 0, scale: 0.58, opacity: 0, zIndex: 55 }
                        : isChosen && phase === 'CRACKING'
                        ? { x: 0, y: 0, rotateZ: 0, scale: isMobile ? 1.15 : 1.25, zIndex: 50 }
                        : isDiscarded
                        ? { y: 140, opacity: 0, scale: 0.8 }
                        : {
                            x: offset * spreadStep,
                            y: isHovered ? Math.abs(offset) * arcDrop - hoverLift : Math.abs(offset) * arcDrop,
                            rotateZ: isHovered ? angle * 0.4 : angle,
                            scale: isHovered ? 1.14 : 1,
                            opacity: 1,
                            zIndex: isHovered ? 40 : 10 + i
                          }
                    }
                    transition={
                      isTrinaAscending
                        ? { duration: 0.55, ease: EASE_IN_EXPO }
                        : isChosen && phase === 'CRACKING'
                        ? { duration: 0.45 }
                        : { type: 'spring', stiffness: 280, damping: 22 }
                    }
                    onMouseEnter={() => { if (phase === 'SPREAD' && trinaPickingIdx === null && sinoPickingIdx === null && !isMobile) { setHoveredSpreadIdx(i); sound?.playHarpNote(i); } }}
                    onMouseLeave={() => { if (phase === 'SPREAD') setHoveredSpreadIdx(null); }}
                    onClick={(e) => handleSelect(card, i, e)}
                    style={{ willChange: 'transform' }}
                    className="absolute w-[84px] h-[126px] sm:w-36 sm:h-56 lg:w-[180px] lg:h-[276px] xl:w-[208px] xl:h-[320px] cursor-pointer"
                  >
                    <CardBackOrnament isCracking={isChosen && phase === 'CRACKING'} quality={quality} fastMotion={false} isMobile={isMobile} />
                  </motion.div>
                );
              })}
            </div>
          )}
        </main>
      </div>

      {/* =====================================================================
          REVELACIÓN DE LA BALANZA SÍ O NO (MODO SINO: 1 O 3 CARTAS)
         ===================================================================== */}
      <AnimatePresence>
        {phase === 'REVEAL' && spreadMode === 'sino' && sinoResult && SiNoRevealViewComp && (
          <SiNoRevealViewComp
            result={sinoResult}
            quality={quality}
            onToggleCardPolarity={handleToggleSiNoCardPolarity}
            onNewSiNo={() => {
              setPhase('IDLE');
              setSinoSetupOpen(true);
            }}
            onSwitchToTrina={handleStartTrina}
            onReset={handleReset}
            onOpenGrimoire={openGrimoire}
            onSealBurst={handleTrinaSealBurst}
          />
        )}
      </AnimatePresence>

      {/* =====================================================================
          REVELACIÓN VERTICAL: EL HILO DE LAS TRES LUNAS (MODO TRINA)
         ===================================================================== */}
      <AnimatePresence>
        {phase === 'REVEAL' && spreadMode === 'trina' && trinaCards.length === 3 && TrinaVerticalRevealComp && (
          <TrinaVerticalRevealComp
            cards={trinaCards}
            quality={quality}
            onToggleCardPolarity={handleToggleTrinaCardPolarity}
            onReset={handleReset}
            onSealBurst={handleTrinaSealBurst}
            onOpenGrimoire={openGrimoire}
          />
        )}
      </AnimatePresence>

      {/* =====================================================================
          REVELACIÓN Y DIORAMA POLIMÓRFICO CLÁSICO (1 CARTA)
         ===================================================================== */}
      <AnimatePresence>
        {phase === 'REVEAL' && spreadMode === 'single' && revealedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'radial-gradient(ellipse at 50% 20%, #190e30 0%, #090510 60%, #040207 100%)'
            }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden"
          >
            {/* Barra superior FIJA FUERA DEL SCROLL en móvil/tablet (nunca se sale de pantalla ni se solapa) */}
            <div className="flex-shrink-0 z-50 lg:hidden w-full bg-[#07040f] border-b border-[#d4af37]/50 shadow-[0_8px_24px_rgba(0,0,0,0.92)] px-3 py-2 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleReset}
                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#241608] border border-[#d4af37] text-amber-200 text-xs uppercase tracking-wider font-bold cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Nueva Tirada
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openGrimoire('codice')}
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#140b26] border border-amber-400/50 text-amber-200 text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-3 h-3 text-amber-300" /> Grimorio
                </button>
                <a
                  href={"carta.html?arcano=" + revealedCard.id + (isReversed ? "&modo=sombra" : "")}
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                  className="px-2.5 py-1.5 rounded-full bg-purple-950/90 border border-purple-400/60 text-purple-200 text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  ✦ Códice
                </a>
              </div>
            </div>

            {/* Cuerpo Scrolleable Independiente (siempre arranca en scrollTop=0) */}
            <div
              ref={singleRevealScrollRef}
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
              className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar pt-4 sm:pt-6 lg:pt-14 pb-24 px-3 sm:px-6 lg:px-10"
            >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-7 sm:gap-9 lg:gap-10 xl:gap-12">
            {/* COLUMNA IZQUIERDA: DIORAMA 2.5D + PALABRAS CLAVE + CONMUTADOR DE POLARIDAD */}
            <motion.div
              initial={isMobile ? { opacity: 0, scale: 0.92 } : { rotateY: 180, scale: 1.06, y: 0 }}
              animate={isMobile ? { opacity: 1, scale: 1 } : { rotateY: 0, scale: 1, y: 0 }}
              transition={isMobile ? { duration: 0.32, ease: 'easeOut' } : { type: 'spring', stiffness: 75, damping: 15 }}
              className="relative flex flex-col items-center gap-3.5 flex-shrink-0 z-40 mt-1 lg:mt-0 lg:sticky lg:top-8"
            >
              <RevealedCardDiorama25D
                card={revealedCard}
                activeNode={activeNode}
                onSelectNode={setActiveNode}
                quality={quality}
                onTogglePolarity={handleToggleRevealedPolarity}
              />
              {revealedCard.correspondences?.keywords && (
                <div className="flex flex-wrap justify-center gap-1.5 max-w-[270px] lg:max-w-[308px] xl:max-w-[332px]">
                  {revealedCard.correspondences.keywords.map((kw) => (
                    <span key={kw} className={"px-2.5 py-0.5 rounded-md border text-xs sm:text-sm shadow-sm " + (isReversed ? "bg-purple-950/35 border-purple-400/30 text-purple-100/95" : "bg-white/[0.04] border-amber-500/25 text-amber-200/85")}>
                      #{kw}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* COLUMNA DERECHA: GRIMORIO INTERACTIVO (SIN backdrop-blur-xl) */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.42 }}
              style={{ contain: 'layout style' }}
              className={"w-full flex-1 min-w-0 max-w-3xl xl:max-w-4xl rounded-3xl bg-[#0c0717]/95 border p-5 sm:p-7 lg:p-9 shadow-[0_20px_55px_rgba(0,0,0,0.92)] space-y-5 " + (isReversed ? "border-purple-400/70" : "border-[#d4af37]/70")}
            >
              {/* 1. BANNER DE SINCRONICIDAD KÁRMICA */}
              {activeSynchronicity && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={"p-3 sm:p-3.5 rounded-xl border flex items-start gap-3 " + (recentDrawCount >= 2 ? "bg-gradient-to-r from-amber-500/20 via-purple-900/40 to-amber-500/15 border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.22)]" : "bg-white/[0.03] border-amber-500/30")}
                >
                  <Sparkles className={"w-5 h-5 flex-shrink-0 mt-0.5 " + (recentDrawCount >= 2 ? "text-amber-300" : "text-amber-400")} />
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold text-amber-300">
                        {recentDrawCount >= 2 ? ("✦ Sincronicidad Kármica • " + recentDrawCount + "ª Aparición en 7 Días") : "✦ Registro del Oráculo"}
                      </span>
                      {revealedCard.totalDrawsAllTime > 1 && (
                        <span className="text-xs text-purple-200/95">
                          (Total histórico: {revealedCard.totalDrawsAllTime})
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base text-amber-100/95 italic leading-snug">
                      {activeSynchronicity}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* 2. ENCABEZADO DEL ARCANO Y PÍLDORAS ESOTÉRICAS */}
              <div className="border-b border-amber-500/30 pb-3.5 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-sm uppercase tracking-[0.12em] text-amber-400 font-bold">
                      {revealedCard.type === 'minor' ? ("Palo de " + revealedCard.suitName) : ("Arcano Mayor " + revealedCard.numeral)}
                    </span>
                    {isReversed ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/90 border border-purple-400/70 text-purple-200 text-xs sm:text-[13px] uppercase tracking-wider font-bold">
                        Invertida • Faz Lunar en Sombra
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-xs sm:text-[13px] uppercase tracking-wider font-bold">
                        Al Derecho • Faz Solar en Luz
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openGrimoire('codice')}
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#140b26] hover:bg-amber-500/20 border border-amber-400/45 text-amber-200 text-xs lg:text-sm uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-300" /> Grimorio
                    </button>
                    <a href={"carta.html?arcano=" + revealedCard.id + (isReversed ? "&modo=sombra" : "")} style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="px-3.5 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/35 border border-purple-400/60 text-purple-200 text-xs lg:text-sm uppercase tracking-wider transition-colors">
                      ✦ Códice Completo
                    </a>
                    <button onClick={handleReset} style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/30 border border-[#d4af37] text-amber-200 text-xs lg:text-sm uppercase tracking-wider transition-colors cursor-pointer">
                      <RotateCcw className="w-3.5 h-3.5" /> Nueva Tirada
                    </button>
                  </div>
                </div>

                <h2 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-amber-200 font-bold leading-tight">
                  {revealedCard.name}: <span className={isReversed ? "text-purple-300" : "text-amber-300"}>{revealedCard.subtitle}</span>
                </h2>

                {revealedCard.correspondences && (
                  <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 text-xs lg:text-sm pt-1">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-400/40 text-amber-200 font-semibold">
                      Elemento: {revealedCard.correspondences.element}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-400/40 text-purple-200 font-semibold">
                      Regente: {revealedCard.correspondences.astro}
                    </span>
                    {revealedCard.correspondences.hebrewLetter && (
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 font-semibold">
                        Letra: {revealedCard.correspondences.hebrewLetter}
                      </span>
                    )}
                    <span className={"px-2.5 py-1 rounded-lg border font-semibold " + (isReversed ? "bg-rose-500/20 border-rose-400/40 text-rose-200" : "bg-emerald-500/20 border-emerald-400/40 text-emerald-200")}>
                      Oráculo Sí/No: {activeYesNo}
                    </span>
                  </div>
                )}
              </div>

              {/* 3. LA VOZ DEL ARQUETIPO EN PRIMERA PERSONA */}
              {revealedCard.oracleVoice && (
                <div className={"p-3.5 sm:p-4 rounded-xl border relative overflow-hidden " + (isReversed ? "bg-gradient-to-r from-[#1c0d2b] via-[#11081c] to-[#1c0d2b] border-purple-400/45" : "bg-gradient-to-r from-[#241707] via-[#120b1d] to-[#241707] border-amber-400/45")}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className={"text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold mb-1 flex items-center justify-between " + (isReversed ? "text-purple-300" : "text-amber-400")}>
                    <span>{isReversed ? ("☽ Voz de " + revealedCard.name + " en Sombra") : ("☉ Voz de " + revealedCard.name + " en Luz")}</span>
                    {revealedCard.correspondences?.alchemy && (
                      <span className="text-xs text-amber-200/90 hidden sm:inline">Alquimia: {revealedCard.correspondences.alchemy.split('•')[0]}</span>
                    )}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-amber-50 italic leading-relaxed">
                    “{revealedCard.oracleVoice}”
                  </p>
                  {revealedCard.correspondences?.hermeticAxiom && (
                    <p className="mt-2 pt-2 border-t border-white/10 text-xs sm:text-sm text-amber-300/85">
                      <strong style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="uppercase tracking-wider text-xs mr-1.5">Axioma Hermético:</strong>
                      {revealedCard.correspondences.hermeticAxiom}
                    </p>
                  )}
                </div>
              )}

              {/* 4. INSPECTOR DE NODOS 3D DEL RELICARIO */}
              {revealedCard.nodes && revealedCard.nodes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {revealedCard.nodes.map((node, i) => (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => { sound?.playSkyrimNodeChime(i); setActiveNode(node); }}
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                        className={"px-3 py-1.5 rounded-full text-xs lg:text-sm border transition-colors cursor-pointer " + (activeNode?.id === node.id ? (isReversed ? "bg-purple-300 text-black border-white font-bold" : "bg-amber-400 text-black border-white font-bold") : "bg-[#120924] border-amber-500/40 text-amber-200 hover:border-amber-300")}
                      >
                        ✦ Símbolo {i + 1}: {node.title}
                      </button>
                    ))}
                  </div>
                  {activeNode && (
                    <motion.div
                      key={activeNode.id + (isReversed ? "-rev" : "-sol")}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={"p-3.5 sm:p-4 rounded-xl border-l-4 shadow-sm space-y-2 " + (isReversed ? "bg-gradient-to-r from-purple-900/35 via-[#120822] to-transparent border-purple-400" : "bg-gradient-to-r from-amber-500/15 via-purple-900/25 to-transparent border-amber-400")}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm font-bold uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Secreto del Relicario: {activeNode.title}
                        </span>
                        {activeNode.esotericFormula && (
                          <span className="px-2.5 py-0.5 rounded bg-black/50 border border-amber-400/35 font-mono text-xs text-amber-300">
                            {activeNode.esotericFormula}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg text-amber-100/95 leading-relaxed">
                        {activeNode.secret}
                      </p>
                      {activeNode.meditationPrompt && (
                        <div className="pt-1.5 border-t border-white/10 text-xs sm:text-sm text-purple-200 italic flex items-center gap-2">
                          <Eye className="w-4 h-4 text-purple-300 flex-shrink-0" />
                          <span><strong>Indagación Interior:</strong> {activeNode.meditationPrompt}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              {/* 5. SISTEMA DE 4 PESTAÑAS DE PROFUNDIDAD */}
              <div className="pt-1">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-[#05020a]/90 border border-amber-500/25 mb-3.5">
                  {[
                    { id: 'oracle', label: 'I • El Oráculo', icon: Sun },
                    { id: 'psyche', label: isReversed ? 'II • La Herida' : 'II • La Psique', icon: Eye },
                    { id: 'domains', label: 'III • 5 Dominios', icon: Compass },
                    { id: 'alchemy', label: 'IV • Psicomagia', icon: Flame }
                  ].map((tab) => {
                    const IconComp = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => { sound?.playHarpNote?.(2); setActiveTab(tab.id); }}
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                        className={"flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm uppercase tracking-wider font-semibold transition-colors cursor-pointer " + (isActive ? (isReversed ? "bg-purple-600 text-white" : "bg-gradient-to-r from-amber-500 to-amber-300 text-black") : "text-amber-200/90 hover:text-amber-200 hover:bg-white/[0.04]")}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {activeTab === 'oracle' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-base sm:text-[17px] leading-relaxed">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 shadow-sm space-y-2">
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-amber-400 font-bold flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Sun className="w-4 h-4" /> {isReversed ? "Lectura Esotérica en Sombra" : "Lectura Esotérica en Luz"}</span>
                        {(revealedCard.correspondences?.treeOfLifePath || revealedCard.correspondences?.qliphoth) && (
                          <span className="text-xs text-purple-300 font-normal">
                            {isReversed && revealedCard.correspondences?.qliphoth ? ("Qliphoth: " + revealedCard.correspondences.qliphoth.split('•')[0]) : (revealedCard.correspondences?.treeOfLifePath?.split('•')[0] || "")}
                          </span>
                        )}
                      </h4>
                      <p className="text-amber-50/95 leading-relaxed">{activeMeaning}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 shadow-sm space-y-1.5">
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1.5">
                        <Moon className="w-4 h-4" /> Dualidad: Luz y Sombra del Arcano
                      </h4>
                      <p className="text-amber-50/95 leading-relaxed">{activeLightAndShadow}</p>
                      {revealedCard.correspondences?.tarotTiming && (
                        <p className="pt-2 text-xs sm:text-sm text-amber-300/90">
                          <strong style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="uppercase tracking-wider">Tiempo y Ritmo Astral: </strong>
                          {revealedCard.correspondences.tarotTiming}
                        </p>
                      )}
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/[0.09] border border-amber-400/40 shadow-sm">
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-amber-300 font-bold mb-1 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4" /> Sentencia y Consejo Oracular
                      </h4>
                      <p className="text-amber-100 font-semibold italic text-base sm:text-lg lg:text-xl leading-relaxed">
                        “{activeCounsel}”
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'psyche' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-base sm:text-[17px] leading-relaxed">
                    {(revealedCard.correspondences?.jungianArchetype || revealedCard.correspondences?.jungianComplex) && (
                      <div className="p-3.5 rounded-xl bg-purple-950/35 border border-purple-400/35 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-widest text-purple-300 font-bold">
                          {isReversed ? "Complejo Psíquico Activo:" : "Arquetipo Junguiano:"}
                        </span>
                        <span className="text-sm sm:text-base text-amber-200 font-semibold">
                          {isReversed ? (revealedCard.correspondences.jungianComplex || revealedCard.correspondences.jungianArchetype) : revealedCard.correspondences.jungianArchetype}
                        </span>
                      </div>
                    )}

                    {isReversed && revealedCard.shadowPolarity && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/35 space-y-1">
                          <h5 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-rose-300 font-bold">
                            ▲ Sombra por Exceso (Desborde)
                          </h5>
                          <p className="text-sm sm:text-[15px] text-amber-50/95 leading-relaxed">{revealedCard.shadowPolarity.byExcess}</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/35 space-y-1">
                          <h5 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-sky-300 font-bold">
                            ▼ Sombra por Defecto (Parálisis)
                          </h5>
                          <p className="text-sm sm:text-[15px] text-amber-50/95 leading-relaxed">{revealedCard.shadowPolarity.byDeficiency}</p>
                        </div>
                      </div>
                    )}

                    {isReversed && revealedCard.theWound ? (
                      <React.Fragment>
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-400/35 space-y-1.5">
                          <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-purple-300 font-bold">
                            ✦ La Herida Raíz Inconsciente
                          </h4>
                          <p className="text-amber-50/95 leading-relaxed">{revealedCard.theWound}</p>
                        </div>
                        {revealedCard.theIllusion && (
                          <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-400/35 space-y-1.5">
                            <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-amber-300 font-bold">
                              ✦ El Espejismo del Ego (La Coartada a Desmantelar)
                            </h4>
                            <p className="text-amber-100/95 leading-relaxed">{revealedCard.theIllusion}</p>
                          </div>
                        )}
                      </React.Fragment>
                    ) : (
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-400/30 space-y-2">
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-amber-300 font-bold">
                          ✦ El Espejo Psicológico (Clínica de Individuación)
                        </h4>
                        <p className="text-amber-50/95 leading-relaxed">
                          {revealedCard.psyche || activeLightAndShadow}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'domains' && activeDomains && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-pink-500/[0.07] border border-pink-400/30 space-y-1">
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-pink-300 font-bold">♥ Amor y Vínculos</h4>
                        <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeDomains.love}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-400/30 space-y-1">
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-amber-300 font-bold">✦ Trabajo, Oficio y Estrategia</h4>
                        <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeDomains.work}</p>
                      </div>
                      {activeDomains.money && (
                        <div className="p-3.5 rounded-xl bg-emerald-500/[0.07] border border-emerald-400/30 space-y-1">
                          <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-emerald-300 font-bold">◈ Dinero y Patrimonio</h4>
                          <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeDomains.money}</p>
                        </div>
                      )}
                      <div className="p-3.5 rounded-xl bg-indigo-500/[0.08] border border-indigo-400/30 space-y-1">
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-indigo-300 font-bold">❂ Camino Espiritual</h4>
                        <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeDomains.spirit}</p>
                      </div>
                    </div>
                    {activeDomains.healthAndEnergy && (
                      <div className="p-3.5 rounded-xl bg-cyan-500/[0.07] border border-cyan-400/30 space-y-1">
                        <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-cyan-300 font-bold">⚡ Salud, Cuerpo y Bioelectricidad</h4>
                        <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeDomains.healthAndEnergy}</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'alchemy' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3.5">
                    {activeAction ? (
                      <React.Fragment>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-emerald-950/35 border border-emerald-400/40 space-y-1">
                            <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                              ✦ El Decreto Ejecutivo (Hoy)
                            </h4>
                            <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeAction.command}</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-rose-950/35 border border-rose-400/40 space-y-1">
                            <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-rose-300 font-bold">
                              ⊘ La Prohibición Tabú
                            </h4>
                            <p className="text-[15px] sm:text-base text-amber-50/95 leading-relaxed">{activeAction.prohibition}</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/50 via-[#120824] to-amber-950/30 border border-amber-400/45 space-y-1.5">
                          <h4 style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs lg:text-sm uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1.5">
                            <Flame className="w-4 h-4 text-amber-400" /> Acto de Psicomagia y Laboratorio
                          </h4>
                          <p className="text-sm sm:text-base lg:text-lg text-amber-100/95 leading-relaxed">
                            {activeAction.psychomagicAct}
                          </p>
                        </div>

                        {activeAction.talismanPhrase && (
                          <div className="p-4 rounded-xl bg-[#06030c] border-2 border-[#d4af37]/70 text-center space-y-3 shadow-[0_0_25px_rgba(212,175,55,0.18)]">
                            <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.08em] text-amber-400 block">
                              ✦ Mantra y Talismán Verbal del Arcano ✦
                            </span>
                            <p className="text-base sm:text-lg lg:text-xl font-bold italic text-amber-200">
                              “{activeAction.talismanPhrase}”
                            </p>
                            <button
                              type="button"
                              onClick={handleSealPsychomagic}
                              style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                              className={"inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.1em] font-bold transition-transform cursor-pointer " + (actSealed ? "bg-emerald-500/25 border border-emerald-400 text-emerald-200" : "bg-gradient-to-r from-[#2c1b08] via-[#d4af37] to-[#2c1b08] text-black border border-amber-200 hover:scale-105")}
                            >
                              {actSealed ? (
                                <React.Fragment><CheckCircle2 className="w-4 h-4" /> Decreto Sellado • Talismán Copiado</React.Fragment>
                              ) : (
                                <React.Fragment><Sparkles className="w-4 h-4" /> Sellar Compromiso y Copiar Talismán</React.Fragment>
                              )}
                            </button>
                          </div>
                        )}
                      </React.Fragment>
                    ) : (
                      <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-400/35">
                        <p className="text-amber-100 italic">“{activeCounsel}”</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          GRIMORIO PERSONAL DEL CONSULTANTE (CÓDICE 22 • TALISMANES • DIARIO)
         ===================================================================== */}
      {GrimorioModalComp && (
        <GrimorioModalComp
          isOpen={grimoireOpen}
          initialTab={grimoireTab}
          onClose={() => setGrimoireOpen(false)}
          onReopenReading={handleReopenReading}
          onDataChanged={refreshGrimoireUi}
        />
      )}

      {SiNoSetupModalComp && (
        <SiNoSetupModalComp
          isOpen={sinoSetupOpen}
          initialSubMode={sinoSubMode}
          initialDomain={sinoDomain}
          initialQuestion=""
          onClose={() => setSinoSetupOpen(false)}
          onStart={handleStartSiNo}
          onStartTrina={handleStartTrina}
        />
      )}
    </div>
  );
}

window.TarotSpreadApp = TarotSpreadApp;

setTimeout(() => {
  const rootEl = document.getElementById('root');
  if (rootEl && !rootEl.hasChildNodes() && !window.__tarotSpreadMounted) {
    window.__tarotSpreadMounted = true;
    const r = ReactDOM.createRoot(rootEl);
    r.render(<TarotSpreadApp />);
  }
}, 0);
`;

(function compileMotorTirada() {
  if (typeof Babel !== 'undefined') {
    const wrapped = "(function() {\n" + MOTOR_TIRADA_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [['react', { runtime: 'classic' }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Motor de Tirada Principal (Modo GPU 60 FPS • 0 CLS) activo.", "color: #fde047; font-weight: bold;");
  } else {
    console.error('Babel no está cargado antes de motor_tirada.js');
  }
})();
// --- FIN DEL ARCHIVO ---

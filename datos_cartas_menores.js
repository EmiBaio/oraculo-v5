// ============================================================================
// ARCHIVO: datos_cartas_menores.js (v8.3)
// Ensamblador Unificado de los 56 Arcanos Menores desde /datos_cartas/datos_menores_*.js
// Conserva 100% de compatibilidad con SUITS_META, MINOR_ARCANA, motor_tarot.js y file:///
// ============================================================================

const SUITS_META = {
  wands: {
    id: 'wands',
    name: 'Bastos',
    element: 'Fuego',
    symbol: '🜂',
    astro: 'Aries • Leo • Sagitario',
    domainDesc: 'Voluntad creadora, coraje, iniciativa, liderazgo y expansión vital.',
    palette: { primary: '#fb923c', secondary: '#ef4444', accent: '#fde047', glow: 'rgba(249, 115, 22, 0.58)' }
  },
  cups: {
    id: 'cups',
    name: 'Copas',
    element: 'Agua',
    symbol: '🜄',
    astro: 'Cáncer • Escorpio • Piscis',
    domainDesc: 'Vínculos, intuición profunda, empatía con límites, duelo sano y plenitud afectiva.',
    palette: { primary: '#38bdf8', secondary: '#2dd4bf', accent: '#f472b6', glow: 'rgba(56, 189, 248, 0.58)' }
  },
  swords: {
    id: 'swords',
    name: 'Espadas',
    element: 'Aire',
    symbol: '🜁',
    astro: 'Géminis • Libra • Acuario',
    domainDesc: 'Claridad mental, verdad directa, decisiones firmes, ética y límites con dignidad.',
    palette: { primary: '#e2e8f0', secondary: '#f43f5e', accent: '#a855f7', glow: 'rgba(244, 63, 94, 0.55)' }
  },
  pentacles: {
    id: 'pentacles',
    name: 'Oros',
    element: 'Tierra',
    symbol: '🜃',
    astro: 'Tauro • Virgo • Capricornio',
    domainDesc: 'Prosperidad tangible, oficio, independencia financiera, salud y estabilidad duradera.',
    palette: { primary: '#fbbf24', secondary: '#10b981', accent: '#a855f7', glow: 'rgba(16, 185, 129, 0.56)' }
  }
};

function __normalizeMinorCard(raw) {
  const suitMeta = SUITS_META[raw.suit] || SUITS_META.wands;
  const rev = raw.reversed || {};
  const revAlchemy = rev.theAlchemy || rev.actionOracle || null;
  const normalizedRev = {
    subtitle: rev.subtitle || raw.subtitle,
    correspondences: Object.assign({}, raw.correspondences || {}, rev.correspondences || {}),
    shadowPolarity: rev.shadowPolarity || null,
    oracleVoice: rev.oracleVoice || '',
    meaning: rev.meaning || raw.lightAndShadow || raw.meaning,
    theWound: rev.theWound || '',
    theIllusion: rev.theIllusion || '',
    psyche: rev.psyche || rev.theWound || raw.psyche || raw.lightAndShadow,
    lightAndShadow: rev.lightAndShadow || raw.lightAndShadow,
    domains: Object.assign({}, raw.domains || {}, rev.domains || {}),
    theAlchemy: revAlchemy,
    actionOracle: revAlchemy,
    counsel: rev.counsel || raw.counsel
  };

  return Object.assign({}, raw, {
    id: String(raw.id),
    type: 'minor',
    arcanaType: 'minor',
    suit: raw.suit || suitMeta.id,
    suitName: raw.suitName || suitMeta.name,
    alchemicalSymbol: raw.alchemicalSymbol || suitMeta.symbol,
    rootElement: raw.rootElement || suitMeta.element,
    isCourt: Boolean(raw.isCourt),
    palette: raw.palette || suitMeta.palette,
    nodes: (raw.nodes || []).map((n, idx) => Object.assign({}, n, { id: n.id || ('n' + (idx + 1)) })),
    theAlchemy: raw.actionOracle || raw.theAlchemy || null,
    actionOracle: raw.actionOracle || raw.theAlchemy || null,
    reversed: normalizedRev
  });
}

function __collectMinorArcana() {
  const g = typeof window !== 'undefined' ? window : globalThis;
  const sources = [
    typeof DATOS_MENORES_BASTOS !== 'undefined' ? DATOS_MENORES_BASTOS : g.DATOS_MENORES_BASTOS,
    typeof DATOS_MENORES_COPAS !== 'undefined' ? DATOS_MENORES_COPAS : g.DATOS_MENORES_COPAS,
    typeof DATOS_MENORES_ESPADAS !== 'undefined' ? DATOS_MENORES_ESPADAS : g.DATOS_MENORES_ESPADAS,
    typeof DATOS_MENORES_OROS !== 'undefined' ? DATOS_MENORES_OROS : g.DATOS_MENORES_OROS
  ];
  const merged = [];
  sources.forEach((arr) => {
    if (Array.isArray(arr)) {
      arr.forEach((item) => merged.push(__normalizeMinorCard(item)));
    }
  });
  return merged;
}

const ALL_56_MINOR_CARDS = __collectMinorArcana();
const MINOR_ARCANA = ALL_56_MINOR_CARDS;

if (typeof window !== 'undefined') {
  window.SUITS_META = SUITS_META;
  window.ALL_56_MINOR_CARDS = ALL_56_MINOR_CARDS;
  window.MINOR_ARCANA = MINOR_ARCANA;
  window.rebuildMinorArcana = function () {
    const fresh = __collectMinorArcana();
    ALL_56_MINOR_CARDS.splice(0, ALL_56_MINOR_CARDS.length, ...fresh);
    window.MINOR_ARCANA = ALL_56_MINOR_CARDS;
    window.ALL_56_MINOR_CARDS = ALL_56_MINOR_CARDS;
    return ALL_56_MINOR_CARDS.length;
  };
}

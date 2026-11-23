// ============================================================================
// ARCHIVO: grimorio_personal.js
// Grimorio Personal del Consultante: Índice Códice (22 Arcanos) + Talismanes + Diario
// Soporta Arcano Único, El Hilo de las Tres Lunas (Trina) y La Balanza Sí o No
// Integrado con localStorage de motor_tarot.js y protocolo local file:/// (Babel aislado)
// ============================================================================

const GRIMORIO_PERSONAL_SOURCE = `
const { useState, useEffect, useRef, useMemo, useCallback, memo } = React;
const Motion = window.Motion || {};
const { motion, AnimatePresence } = Motion;

const sound = window.sound;

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

const SOLAR_KEY = "velo_astral_solar_grimoire_v2";
const LUNAR_KEY = "velo_astral_lunar_grimoire_v2";
const SEALS_KEY = "velo_astral_psychomagic_seals_v1";
const DIARY_KEY = "velo_astral_consultante_diario_v1";
const MAX_DIARY_ENTRIES = 60;

const MAJOR_ELEMENTS_MAP = {
  0: "Aire", 1: "Aire", 2: "Agua", 3: "Tierra", 4: "Fuego",
  5: "Tierra", 6: "Aire", 7: "Agua", 8: "Fuego", 9: "Tierra",
  10: "Fuego", 11: "Aire", 12: "Agua", 13: "Agua", 14: "Fuego",
  15: "Tierra", 16: "Fuego", 17: "Aire", 18: "Agua", 19: "Fuego",
  20: "Fuego", 21: "Tierra"
};

const ACCENT_MAP = {
  "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ü": "u", "ñ": "n",
  "à": "a", "è": "e", "ì": "i", "ò": "o", "ù": "u"
};

function normalizeSearchText(str) {
  const lower = String(str || "").toLowerCase();
  let out = "";
  for (let i = 0; i < lower.length; i++) {
    const ch = lower[i];
    out += ACCENT_MAP[ch] || ch;
  }
  return out.trim();
}

function resolveCardElement(card) {
  if (!card) return "Aire";
  if (window.TrinaOracleEngine && typeof window.TrinaOracleEngine.resolveRootElement === "function") {
    return window.TrinaOracleEngine.resolveRootElement(card);
  }
  if (card.rootElement && ["Fuego", "Agua", "Aire", "Tierra"].indexOf(card.rootElement) !== -1) {
    return card.rootElement;
  }
  const raw = normalizeSearchText(card.correspondences && card.correspondences.element);
  if (raw.indexOf("fuego") !== -1) return "Fuego";
  if (raw.indexOf("agua") !== -1) return "Agua";
  if (raw.indexOf("tierra") !== -1) return "Tierra";
  if (raw.indexOf("aire") !== -1) return "Aire";
  return MAJOR_ELEMENTS_MAP[Number(card.id)] || "Aire";
}

function safeReadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeWriteJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function formatArgentineDate(ts) {
  if (!ts) return "";
  try {
    const d = new Date(ts);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const mins = String(d.getMinutes()).padStart(2, "0");
    return day + "/" + month + "/" + year + " • " + hours + ":" + mins;
  } catch (e) {
    return "";
  }
}

// ============================================================================
// 1. API DE DATOS DEL GRIMORIO PERSONAL (window.GrimorioPersonal)
// ============================================================================
function getMajorPool() {
  if (window.TAROT_DB && typeof window.TAROT_DB.getMajorArcana === "function") {
    const list = window.TAROT_DB.getMajorArcana();
    if (list && list.length > 0) return list;
  }
  if (window.MAJOR_ARCANA && window.MAJOR_ARCANA.length > 0) return window.MAJOR_ARCANA;
  if (typeof MAJOR_ARCANA !== "undefined" && MAJOR_ARCANA.length > 0) return MAJOR_ARCANA;
  return [];
}

function getReadings() {
  const data = safeReadJson(DIARY_KEY, { entries: [] });
  return Array.isArray(data.entries) ? data.entries : [];
}

function recordReading(payload) {
  if (!payload || !Array.isArray(payload.cards) || payload.cards.length === 0) return null;
  const data = safeReadJson(DIARY_KEY, { entries: [] });
  const entries = Array.isArray(data.entries) ? data.entries : [];

  const normalizedType = payload.type === "trina" ? "trina" : payload.type === "sino" ? "sino" : "single";
  const now = Date.now();
  const entry = {
    id: "lectura_" + now + "_" + Math.floor(Math.random() * 10000),
    type: normalizedType,
    timestamp: now,
    cards: payload.cards.map(function (c, idx) {
      let defaultPos = "Arcano del Día";
      if (normalizedType === "trina") defaultPos = ["Pasado", "Presente", "Futuro"][idx] || "Arcano";
      if (normalizedType === "sino") {
        defaultPos = payload.cards.length >= 3
          ? (["El Impulso", "El Fiel", "El Desenlace"][idx] || "Balanza")
          : "Pulso Sí o No";
      }
      return {
        id: String(c.id),
        name: c.name || ("Arcano " + c.id),
        numeral: c.numeral || "",
        subtitle: c.subtitle || "",
        isReversed: Boolean(c.isReversed),
        element: resolveCardElement(c),
        positionLabel: c.positionLabel || defaultPos
      };
    }),
    summary: payload.summary || "",
    arcTitle: payload.arcTitle || "",
    arcBadge: payload.arcBadge || "",
    closingAdvice: payload.closingAdvice || "",
    question: payload.question || "",
    domain: payload.domain || "",
    domainLabel: payload.domainLabel || "",
    verdictCode: payload.verdictCode || "",
    verdictLabel: payload.verdictLabel || "",
    sinoMode: payload.sinoMode || (normalizedType === "sino" ? (payload.cards.length >= 3 ? "triad" : "single") : ""),
    note: ""
  };

  const nextEntries = [entry].concat(entries).slice(0, MAX_DIARY_ENTRIES);
  safeWriteJson(DIARY_KEY, { entries: nextEntries });
  return entry;
}

function updateReadingNote(entryId, noteText) {
  const data = safeReadJson(DIARY_KEY, { entries: [] });
  const entries = Array.isArray(data.entries) ? data.entries : [];
  let updated = null;
  const next = entries.map(function (item) {
    if (item.id === entryId) {
      updated = Object.assign({}, item, { note: String(noteText || "").slice(0, 600) });
      return updated;
    }
    return item;
  });
  safeWriteJson(DIARY_KEY, { entries: next });
  return updated;
}

function deleteReading(entryId) {
  const data = safeReadJson(DIARY_KEY, { entries: [] });
  const entries = Array.isArray(data.entries) ? data.entries : [];
  const next = entries.filter(function (item) { return item.id !== entryId; });
  safeWriteJson(DIARY_KEY, { entries: next });
  return next;
}

function getAllCardsPool() {
  if (window.TAROT_DB && typeof window.TAROT_DB.getAllCards === "function") {
    const all = window.TAROT_DB.getAllCards();
    if (Array.isArray(all) && all.length > 0) return all;
  }
  const majors = getMajorPool();
  const minors = (window.TAROT_DB && typeof window.TAROT_DB.getMinorArcana === "function")
    ? window.TAROT_DB.getMinorArcana()
    : (window.MINOR_ARCANA || []);
  return majors.concat(Array.isArray(minors) ? minors : []);
}

function getGrimoireCardHref(cardOrId, isRev) {
  if (window.TarotRouter && typeof window.TarotRouter.getCardUrl === "function") {
    return window.TarotRouter.getCardUrl(cardOrId, { isReversed: Boolean(isRev) });
  }
  const id = typeof cardOrId === "object" && cardOrId !== null ? cardOrId.id : cardOrId;
  return "carta.html?arcano=" + encodeURIComponent(id) + (isRev ? "&modo=sombra" : "");
}

function getSealedActsList() {
  const sealsData = safeReadJson(SEALS_KEY, { seals: {} });
  const sealsMap = sealsData.seals || {};
  const allCards = getAllCardsPool();
  const byId = {};
  allCards.forEach(function (c) { byId[String(c.id)] = c; });

  return Object.keys(sealsMap)
    .map(function (sealKey) {
      const s = sealsMap[sealKey] || {};
      const card = byId[String(s.cardId)] || null;
      return {
        key: sealKey,
        cardId: String(s.cardId),
        cardName: (card && card.name) || ("Arcano " + s.cardId),
        cardNumeral: (card && card.numeral) || "",
        element: card ? resolveCardElement(card) : (MAJOR_ELEMENTS_MAP[Number(s.cardId)] || "Aire"),
        polarity: s.polarity === "lunar" ? "lunar" : "solar",
        isReversed: s.polarity === "lunar",
        talismanPhrase: s.talismanPhrase || "",
        command: s.command || "",
        sealedAt: s.sealedAt || 0,
        completed: Boolean(s.completed)
      };
    })
    .sort(function (a, b) { return (b.sealedAt || 0) - (a.sealedAt || 0); });
}

function toggleSealCompleted(sealKey) {
  const data = safeReadJson(SEALS_KEY, { seals: {} });
  if (!data.seals || !data.seals[sealKey]) return false;
  data.seals[sealKey].completed = !data.seals[sealKey].completed;
  return safeWriteJson(SEALS_KEY, data);
}

function releaseSeal(sealKey) {
  const data = safeReadJson(SEALS_KEY, { seals: {} });
  if (!data.seals || !data.seals[sealKey]) return false;
  delete data.seals[sealKey];
  return safeWriteJson(SEALS_KEY, data);
}

function getArcanaProgressList() {
  const allCards = getAllCardsPool();
  const solarCards = (safeReadJson(SOLAR_KEY, { cards: {} }).cards) || {};
  const lunarCards = (safeReadJson(LUNAR_KEY, { cards: {} }).cards) || {};
  const sealsMap = (safeReadJson(SEALS_KEY, { seals: {} }).seals) || {};

  return allCards.map(function (card) {
    const idStr = String(card.id);
    const isMinor = card.type === "minor" || card.arcanaType === "minor" || Boolean(card.suit);
    const suitGroup = isMinor ? (card.suit || "wands") : "major";
    const solarDraws = Number(solarCards[idStr] && solarCards[idStr].totalDraws) || 0;
    const lunarDraws = Number(lunarCards[idStr] && lunarCards[idStr].totalDraws) || 0;
    const totalDraws = solarDraws + lunarDraws;
    const hasSolarSeal = Boolean(sealsMap[idStr + "_solar"]);
    const hasLunarSeal = Boolean(sealsMap[idStr + "_lunar"]);
    return {
      card: card,
      id: idStr,
      isMinor: isMinor,
      suitGroup: suitGroup,
      suitName: isMinor ? ("Palo de " + (card.suitName || "")) : "Arcanos Mayores",
      name: card.name || ("Arcano " + idStr),
      numeral: card.numeral || "",
      subtitle: card.subtitle || "",
      element: resolveCardElement(card),
      astro: (card.correspondences && card.correspondences.astro) || "",
      keywords: (card.correspondences && card.correspondences.keywords) || [],
      solarDraws: solarDraws,
      lunarDraws: lunarDraws,
      totalDraws: totalDraws,
      unlocked: totalDraws > 0,
      hasSolarSeal: hasSolarSeal,
      hasLunarSeal: hasLunarSeal
    };
  });
}

function getSummaryCounts() {
  const list = getArcanaProgressList();
  let unlockedCount = 0;
  let majorUnlockedCount = 0;
  let minorUnlockedCount = 0;
  let solarUnlocked = 0;
  let lunarUnlocked = 0;
  let totalDraws = 0;

  list.forEach(function (item) {
    if (item.unlocked) {
      unlockedCount += 1;
      if (item.isMinor) minorUnlockedCount += 1;
      else majorUnlockedCount += 1;
    }
    if (!item.isMinor && item.solarDraws > 0) solarUnlocked += 1;
    if (!item.isMinor && item.lunarDraws > 0) lunarUnlocked += 1;
    totalDraws += item.totalDraws;
  });

  const seals = getSealedActsList();
  const readings = getReadings();

  return {
    unlockedCount: majorUnlockedCount,
    totalUnlockedAll: unlockedCount,
    minorUnlockedCount: minorUnlockedCount,
    totalMajors: 22,
    totalCards: list.length || 78,
    solarUnlocked: solarUnlocked,
    lunarUnlocked: lunarUnlocked,
    totalDraws: totalDraws,
    sealedCount: seals.length,
    readingsCount: readings.length
  };
}

// ============================================================================
// 2. ÍCONOS SVG AISLADOS PARA EL MODAL DEL GRIMORIO
// ============================================================================
const BookOpenIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);
const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);
const SunIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const MoonIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const FlameIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);
const ScrollIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>
  </svg>
);
const LockIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const CopyIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);
const CheckIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const TrashIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
);
const ExternalIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

const ELEMENT_BADGE_STYLES = {
  Fuego: "bg-amber-500/15 border-amber-400/40 text-amber-200",
  Agua: "bg-sky-500/15 border-sky-400/40 text-sky-200",
  Aire: "bg-purple-500/15 border-purple-400/40 text-purple-200",
  Tierra: "bg-emerald-500/15 border-emerald-400/40 text-emerald-200"
};

const SINO_VERDICT_BADGES = {
  YES_STRONG: "bg-emerald-500/20 border-emerald-400/60 text-emerald-200",
  YES_CONDITIONAL: "bg-amber-500/20 border-amber-400/60 text-amber-200",
  VEILED: "bg-purple-500/20 border-purple-400/60 text-purple-200",
  NO_YET: "bg-indigo-500/20 border-indigo-400/60 text-indigo-200",
  NO_STRONG: "bg-rose-500/20 border-rose-400/60 text-rose-200"
};

// ============================================================================
// 3. MODAL PRINCIPAL DEL GRIMORIO PERSONAL (CERO FILTROS PESADOS, 0 CLS)
// ============================================================================
const GrimorioModal = memo(function GrimorioModal({
  isOpen,
  initialTab = "codice",
  onClose,
  onReopenReading,
  onDataChanged
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [refreshTick, setRefreshTick] = useState(0);

  // Filtros del Códice (78 Arcanos: 22 Mayores + 56 Menores)
  const [searchQuery, setSearchQuery] = useState("");
  const [suitFilter, setSuitFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [elementFilter, setElementFilter] = useState("all");

  // Filtros y edición del Diario ('all' | 'trina' | 'sino' | 'single')
  const [diaryFilter, setDiaryFilter] = useState("all");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);
  const copyTimerRef = useRef(null);

  useEffect(function () {
    return function () {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  useEffect(function () {
    if (isOpen) {
      setActiveTab(initialTab || "codice");
      setRefreshTick(function (t) { return t + 1; });
    }
  }, [isOpen, initialTab]);

  useEffect(function () {
    if (!isOpen) return undefined;
    const onKey = function (e) {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return function () { window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  const snapshot = useMemo(function () {
    if (!isOpen) return { progress: [], seals: [], readings: [], summary: { unlockedCount: 0, totalMajors: 22, solarUnlocked: 0, lunarUnlocked: 0, totalDraws: 0, sealedCount: 0, readingsCount: 0 } };
    return {
      progress: getArcanaProgressList(),
      seals: getSealedActsList(),
      readings: getReadings(),
      summary: getSummaryCounts()
    };
  }, [isOpen, refreshTick]);

  const filteredArcana = useMemo(function () {
    const q = normalizeSearchText(searchQuery);
    return snapshot.progress.filter(function (item) {
      if (suitFilter !== "all" && item.suitGroup !== suitFilter) return false;
      if (statusFilter === "unlocked" && !item.unlocked) return false;
      if (statusFilter === "locked" && item.unlocked) return false;
      if (elementFilter !== "all" && item.element !== elementFilter) return false;
      if (q) {
        const haystack = normalizeSearchText(
          item.name + " " + item.numeral + " " + item.suitName + " " + item.subtitle + " " + item.element + " " + item.astro + " " + (item.keywords || []).join(" ")
        );
        if (haystack.indexOf(q) === -1) return false;
      }
      return true;
    });
  }, [snapshot.progress, searchQuery, suitFilter, statusFilter, elementFilter]);

  const filteredReadings = useMemo(function () {
    if (diaryFilter === "all") return snapshot.readings;
    return snapshot.readings.filter(function (r) { return r.type === diaryFilter; });
  }, [snapshot.readings, diaryFilter]);

  const triggerRefresh = useCallback(function () {
    setRefreshTick(function (t) { return t + 1; });
    onDataChanged && onDataChanged();
  }, [onDataChanged]);

  const handleCopyText = useCallback(function (keyId, text) {
    if (!text) return;
    copyTextSafe(text).then(function (ok) {
      if (!ok) return;
      sound && sound.playSkyrimNodeChime && sound.playSkyrimNodeChime(1);
      setCopiedKey(keyId);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(function () {
        setCopiedKey(function (curr) { return curr === keyId ? null : curr; });
      }, 2000);
    });
  }, []);

  const handleToggleSealDone = useCallback(function (sealKey) {
    toggleSealCompleted(sealKey);
    sound && sound.playHarpNote && sound.playHarpNote(4);
    triggerRefresh();
  }, [triggerRefresh]);

  const handleReleaseSeal = useCallback(function (sealKey) {
    releaseSeal(sealKey);
    sound && sound.playHeavyCardThud && sound.playHeavyCardThud(0.85);
    triggerRefresh();
  }, [triggerRefresh]);

  const handleSaveNote = useCallback(function (entryId) {
    updateReadingNote(entryId, noteDraft);
    sound && sound.playHarpNote && sound.playHarpNote(3);
    setEditingNoteId(null);
    setNoteDraft("");
    triggerRefresh();
  }, [noteDraft, triggerRefresh]);

  const handleDeleteEntry = useCallback(function (entryId) {
    deleteReading(entryId);
    sound && sound.playHeavyCardThud && sound.playHeavyCardThud(0.8);
    if (editingNoteId === entryId) setEditingNoteId(null);
    triggerRefresh();
  }, [editingNoteId, triggerRefresh]);

  const handleCopyReading = useCallback(function (entry) {
    let header = "✦ LECTURA DEL ORÁCULO • " + formatArgentineDate(entry.timestamp) + " ✦";
    if (entry.type === "trina") header = "✦ EL HILO DE LAS TRES LUNAS • " + formatArgentineDate(entry.timestamp) + " ✦";
    if (entry.type === "sino") header = "♎ LA BALANZA SÍ O NO • " + formatArgentineDate(entry.timestamp) + " ✦";

    const lines = [header, ""];
    if (entry.question) {
      lines.push("Pregunta: “" + entry.question + "”");
    }
    if (entry.verdictLabel) {
      lines.push("Veredicto: " + entry.verdictLabel + (entry.domainLabel ? (" (" + entry.domainLabel + ")") : ""));
    }
    (entry.cards || []).forEach(function (c, i) {
      let prefix = "";
      if (entry.type === "trina") prefix = ["I. PASADO", "II. PRESENTE", "III. FUTURO"][i] + " • ";
      else if (entry.type === "sino" && (entry.cards || []).length >= 3) prefix = ["I. IMPULSO", "II. FIEL", "III. DESENLACE"][i] + " • ";
      lines.push(prefix + c.name + (c.isReversed ? " (En Sombra)" : " (En Luz)"));
    });
    if (entry.arcTitle) {
      lines.push("");
      lines.push("Arco: " + entry.arcTitle + (entry.arcBadge ? " (" + entry.arcBadge + ")" : ""));
    }
    if (entry.summary) {
      lines.push("");
      lines.push("“" + entry.summary + "”");
    }
    if (entry.note) {
      lines.push("");
      lines.push("Nota personal: " + entry.note);
    }
    handleCopyText("reading_" + entry.id, lines.join(String.fromCharCode(10)));
  }, [handleCopyText]);

  const pct = Math.round((snapshot.summary.unlockedCount / Math.max(1, snapshot.summary.totalMajors)) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="grimorio-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={function (e) { if (e.target === e.currentTarget && onClose) onClose(); }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-2.5 sm:p-5 lg:p-8 bg-[#030108]/95"
        >
          <motion.div
            key="grimorio-panel"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ contain: "layout style" }}
            className="relative w-full max-w-6xl max-h-[92dvh] flex flex-col rounded-3xl bg-[#090513] border-2 border-[#d4af37]/75 shadow-[0_28px_80px_rgba(0,0,0,0.95)] overflow-hidden text-amber-50 select-text"
          >
            {/* CABECERA DEL GRIMORIO PERSONAL */}
            <header className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pb-4 bg-gradient-to-b from-[#170c2b] to-[#090513] border-b border-amber-500/30 space-y-3.5">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-400">
                    <BookOpenIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold">
                      Grimorio Personal del Consultante
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-xl sm:text-2xl md:text-3xl text-amber-200 font-bold leading-tight">
                    Códice del Velo Astral
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar Grimorio"
                  className="p-2 rounded-full bg-white/[0.05] hover:bg-amber-500/20 border border-amber-400/40 text-amber-200 transition-colors cursor-pointer"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Barra de Maestría de los 22 Arcanos */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-amber-300 font-bold">
                      {snapshot.summary.unlockedCount}/{snapshot.summary.totalMajors} Arcanos Desbloqueados ({pct}%)
                    </span>
                    <span className="text-amber-200/95 text-xs sm:text-sm flex items-center gap-1">
                      <SunIcon className="w-3 h-3 text-amber-300" /> {snapshot.summary.solarUnlocked} en Luz
                    </span>
                    <span className="text-purple-100/95 text-xs sm:text-sm flex items-center gap-1">
                      <MoonIcon className="w-3 h-3 text-purple-300" /> {snapshot.summary.lunarUnlocked} en Sombra
                    </span>
                  </div>
                  <span className="text-xs text-purple-100/90">
                    {snapshot.summary.totalDraws} {snapshot.summary.totalDraws === 1 ? "revelación total" : "revelaciones totales"}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#160b29] border border-amber-500/25 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: pct + "%",
                      background: "linear-gradient(90deg, #9333ea 0%, #d4af37 55%, #fef08a 100%)"
                    }}
                  />
                </div>
              </div>

              {/* 3 PESTAÑAS PRINCIPALES */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#05020a] border border-amber-500/25">
                {[
                  { id: "codice", label: "I • Códice (78)", icon: BookOpenIcon, count: String(snapshot.summary.totalCards || 78) },
                  { id: "seals", label: "II • Talismanes", icon: FlameIcon, count: String(snapshot.summary.sealedCount) },
                  { id: "diary", label: "III • Diario", icon: ScrollIcon, count: String(snapshot.summary.readingsCount) }
                ].map(function (tab) {
                  const IconC = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={function () {
                        sound && sound.playHarpNote && sound.playHarpNote(2);
                        setActiveTab(tab.id);
                      }}
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                      className={
                        "flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-[13px] uppercase tracking-wider font-bold transition-colors cursor-pointer " +
                        (active
                          ? "bg-gradient-to-r from-amber-500 to-amber-300 text-black shadow-[0_0_16px_rgba(251,191,36,0.35)]"
                          : "text-amber-200/95 hover:text-amber-100 hover:bg-white/[0.04]")
                      }
                    >
                      <IconC className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{tab.label}</span>
                      <span className={"hidden sm:inline px-1.5 py-0.5 rounded-full text-xs " + (active ? "bg-black/20 text-black" : "bg-white/10 text-amber-200")}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </header>

            {/* CUERPO SCROLLEABLE */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 space-y-5" style={{ WebkitOverflowScrolling: "touch" }}>
              {/* PESTAÑA I: ÍNDICE DEL CÓDICE */}
              {activeTab === "codice" && (
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-2.5 items-stretch md:items-center justify-between">
                    <div className="relative flex-1">
                      <SearchIcon className="w-4 h-4 text-amber-300/95 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={function (e) { setSearchQuery(e.target.value); }}
                        placeholder="Buscar arcano por nombre, numeral, planeta o palabra clave..."
                        style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#05020a] border border-amber-500/35 focus:border-amber-300 focus:outline-none text-sm sm:text-base text-amber-50 placeholder:text-amber-200/60 select-text"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { id: "all", label: "Todos" },
                        { id: "unlocked", label: "Revelados" },
                        { id: "locked", label: "Velados" }
                      ].map(function (f) {
                        const sel = statusFilter === f.id;
                        return (
                          <button
                            key={f.id}
                            type="button"
                            onClick={function () { setStatusFilter(f.id); }}
                            style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                            className={
                              "px-2.5 py-1.5 rounded-lg text-xs sm:text-[13px] uppercase tracking-wider border transition-colors cursor-pointer " +
                              (sel ? "bg-amber-400 text-black border-amber-200 font-bold" : "bg-white/[0.03] border-white/15 text-amber-200/80 hover:border-amber-400/50")
                            }
                          >
                            {f.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-wider text-amber-300/95 mr-1">
                      Mazo:
                    </span>
                    {[
                      { id: "all", label: "Todos (78)" },
                      { id: "major", label: "✦ Mayores (22)" },
                      { id: "wands", label: "🜂 Bastos" },
                      { id: "cups", label: "🜄 Copas" },
                      { id: "swords", label: "🜁 Espadas" },
                      { id: "pentacles", label: "🜃 Oros" }
                    ].map(function (sf) {
                      const sel = suitFilter === sf.id;
                      return (
                        <button
                          key={sf.id}
                          type="button"
                          onClick={function () { setSuitFilter(sf.id); }}
                          style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                          className={
                            "px-3 py-1 rounded-full text-xs font-semibold border transition-colors cursor-pointer " +
                            (sel
                              ? "bg-amber-400 border-amber-200 text-black"
                              : "bg-white/[0.04] border-white/15 text-amber-50/95 hover:border-amber-400/50")
                          }
                        >
                          {sf.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-widest text-purple-200/95 mr-1">
                      Elemento:
                    </span>
                    {["all", "Fuego", "Agua", "Aire", "Tierra"].map(function (el) {
                      const sel = elementFilter === el;
                      return (
                        <button
                          key={el}
                          type="button"
                          onClick={function () { setElementFilter(el); }}
                          className={
                            "px-2.5 py-0.5 rounded-full text-xs border transition-colors cursor-pointer " +
                            (sel
                              ? "bg-purple-500/35 border-purple-300 text-white font-semibold"
                              : "bg-white/[0.03] border-white/15 text-amber-50/95 hover:border-amber-400/40")
                          }
                        >
                          {el === "all" ? "Todos" : el}
                        </button>
                      );
                    })}
                  </div>

                  {filteredArcana.length === 0 ? (
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center text-amber-200/95 italic">
                      Ningún arcano coincide con ese filtro. Probá limpiando la búsqueda.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {filteredArcana.map(function (item) {
                        const elBadge = ELEMENT_BADGE_STYLES[item.element] || ELEMENT_BADGE_STYLES.Aire;
                        return (
                          <article
                            key={item.id}
                            className={
                              "relative rounded-2xl border p-4 flex flex-col justify-between gap-3 transition-colors " +
                              (item.unlocked
                                ? "bg-gradient-to-b from-[#160c29] to-[#0a0514] border-[#d4af37]/65 shadow-[0_8px_24px_rgba(0,0,0,0.65)]"
                                : "bg-[#07040e] border-white/10 opacity-85 hover:opacity-100 hover:border-purple-400/40")
                            }
                          >
                            <div className="space-y-2">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2.5">
                                  <span
                                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                                    className={
                                      "w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-black flex-shrink-0 " +
                                      (item.unlocked
                                        ? "bg-amber-400/15 border-amber-300/75 text-amber-200"
                                        : "bg-white/[0.03] border-white/15 text-purple-200/50")
                                    }
                                  >
                                    {item.numeral === "CABALLERO" ? "CAB" : item.numeral === "REINA" ? "REI" : item.numeral === "SOTA" ? "SOT" : item.numeral}
                                  </span>
                                  <div className="min-w-0">
                                    <h3 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className={"text-base font-bold truncate " + (item.unlocked ? "text-amber-200" : "text-purple-100/90")}>
                                      {item.name}
                                    </h3>
                                    <p className="text-sm italic text-purple-100/90 truncate">
                                      {item.unlocked ? ("“" + item.subtitle + "”") : "Aguarda revelación en el altar"}
                                    </p>
                                  </div>
                                </div>

                                {!item.unlocked && (
                                  <span title="Aún no revelada en tus tiradas" className="text-purple-300/45 mt-1">
                                    <LockIcon className="w-3.5 h-3.5" />
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                                <span className={"px-2 py-0.5 rounded-md border " + elBadge}>
                                  {item.isMinor ? item.suitName : item.element}
                                </span>
                                {item.unlocked ? (
                                  <React.Fragment>
                                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md border " + (item.solarDraws > 0 ? "bg-amber-400/15 border-amber-300/50 text-amber-200" : "bg-white/[0.02] border-white/10 text-white/30")}>
                                      <SunIcon className="w-3 h-3" /> {item.solarDraws}
                                    </span>
                                    <span className={"inline-flex items-center gap-1 px-2 py-0.5 rounded-md border " + (item.lunarDraws > 0 ? "bg-purple-500/20 border-purple-300/50 text-purple-200" : "bg-white/[0.02] border-white/10 text-white/30")}>
                                      <MoonIcon className="w-3 h-3" /> {item.lunarDraws}
                                    </span>
                                    {(item.hasSolarSeal || item.hasLunarSeal) && (
                                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/45 text-emerald-200 font-semibold">
                                        ✦ Sellado
                                      </span>
                                    )}
                                  </React.Fragment>
                                ) : (
                                  item.astro && (
                                    <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-purple-100/85 truncate max-w-[140px]">
                                      {item.astro}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 pt-2 border-t border-white/10">
                              <a
                                href={getGrimoireCardHref(item.card || item.id, false)}
                                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                className={
                                  "flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs uppercase tracking-wider font-bold border transition-colors " +
                                  (item.unlocked
                                    ? "bg-amber-500/15 hover:bg-amber-500/30 border-amber-400/50 text-amber-200"
                                    : "bg-white/[0.03] hover:bg-purple-500/20 border-white/15 text-purple-100/95")
                                }
                              >
                                <span>{item.unlocked ? "✦ Códice Luz" : "Explorar Códice"}</span>
                                <ExternalIcon className="w-3 h-3" />
                              </a>
                              <a
                                href={getGrimoireCardHref(item.card || item.id, true)}
                                title="Abrir directamente en Faz Lunar (Sombra)"
                                style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                className="inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg text-xs uppercase tracking-wider border bg-purple-950/50 hover:bg-purple-900/70 border-purple-400/40 text-purple-200 transition-colors"
                              >
                                <MoonIcon className="w-3 h-3" />
                                <span>Sombra</span>
                              </a>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* PESTAÑA II: TALISMANES SELLADOS */}
              {activeTab === "seals" && (
                <div className="space-y-4">
                  {snapshot.seals.length === 0 ? (
                    <div className="p-8 sm:p-10 rounded-2xl bg-[#0d0719] border border-amber-500/30 text-center space-y-3">
                      <FlameIcon className="w-8 h-8 text-amber-400 mx-auto opacity-80" />
                      <h3 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-lg sm:text-xl text-amber-200 font-bold">
                        Tu Altar de Talismanes está en silencio
                      </h3>
                      <p className="text-sm sm:text-base text-purple-100/95 max-w-lg mx-auto italic">
                        Cuando reveles una carta y selles su decreto en <strong>Psicomagia</strong> o en <strong>La Balanza Sí o No</strong>, tus mantras y compromisos activos quedarán guardados acá.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {snapshot.seals.map(function (seal) {
                        const isCopied = copiedKey === "seal_" + seal.key;
                        return (
                          <article
                            key={seal.key}
                            className={
                              "rounded-2xl border p-5 flex flex-col justify-between gap-4 " +
                              (seal.completed
                                ? "bg-[#08120e] border-emerald-400/50"
                                : seal.isReversed
                                ? "bg-gradient-to-b from-[#1a0d2b] to-[#0a0514] border-purple-400/60"
                                : "bg-gradient-to-b from-[#1e1307] to-[#0a0514] border-[#d4af37]/65")
                            }
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-base sm:text-lg font-bold text-amber-200">
                                      {seal.cardNumeral ? (seal.cardNumeral + " • ") : ""}{seal.cardName}
                                    </span>
                                    <span className={"px-2 py-0.5 rounded-full text-xs uppercase tracking-wider font-bold border " + (seal.isReversed ? "bg-purple-950 border-purple-400/60 text-purple-200" : "bg-amber-500/15 border-amber-400/50 text-amber-200")}>
                                      {seal.isReversed ? "☽ Sombra" : "☉ Luz"}
                                    </span>
                                    {seal.completed && (
                                      <span className="px-2 py-0.5 rounded-full text-xs uppercase tracking-wider font-bold bg-emerald-500/20 border border-emerald-400/60 text-emerald-200">
                                        ✔ Cumplido
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-purple-100/90 block mt-0.5">
                                    Sellado el {formatArgentineDate(seal.sealedAt)}
                                  </span>
                                </div>

                                <a
                                  href={getGrimoireCardHref(seal.cardId, seal.isReversed)}
                                  className="text-xs text-purple-300 hover:text-amber-300 inline-flex items-center gap-1"
                                >
                                  <span>Códice</span>
                                  <ExternalIcon className="w-3 h-3" />
                                </a>
                              </div>

                              {seal.talismanPhrase && (
                                <blockquote className="p-3.5 rounded-xl bg-black/45 border border-amber-400/35 text-base sm:text-lg italic font-semibold text-amber-100 leading-snug">
                                  “{seal.talismanPhrase}”
                                </blockquote>
                              )}

                              {seal.command && (
                                <p className="text-sm sm:text-[15px] text-amber-50/95 leading-relaxed">
                                  <strong className="text-emerald-300">✦ Decreto: </strong>{seal.command}
                                </p>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
                              <div className="flex items-center gap-1.5">
                                {seal.talismanPhrase && (
                                  <button
                                    type="button"
                                    onClick={function () { handleCopyText("seal_" + seal.key, seal.talismanPhrase); }}
                                    style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 border border-amber-400/45 text-xs uppercase tracking-wider text-amber-200 cursor-pointer transition-colors"
                                  >
                                    {isCopied ? <React.Fragment><CheckIcon /> Copiado</React.Fragment> : <React.Fragment><CopyIcon /> Copiar Mantra</React.Fragment>}
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={function () { handleToggleSealDone(seal.key); }}
                                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                  className={
                                    "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs uppercase tracking-wider cursor-pointer transition-colors " +
                                    (seal.completed
                                      ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                                      : "bg-white/[0.04] hover:bg-emerald-500/20 border-white/15 text-amber-50/95")
                                  }
                                >
                                  <CheckIcon /> {seal.completed ? "Cumplido" : "Marcar Cumplido"}
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={function () { handleReleaseSeal(seal.key); }}
                                title="Liberar sello del altar"
                                className="p-1.5 rounded-lg text-rose-300/70 hover:text-rose-200 hover:bg-rose-500/15 transition-colors cursor-pointer"
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* PESTAÑA III: DIARIO DEL CONSULTANTE */}
              {activeTab === "diary" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { id: "all", label: "Todas (" + snapshot.readings.length + ")" },
                        { id: "sino", label: "Sí o No" },
                        { id: "trina", label: "Tres Lunas" },
                        { id: "single", label: "Arcano Único" }
                      ].map(function (f) {
                        const sel = diaryFilter === f.id;
                        return (
                          <button
                            key={f.id}
                            type="button"
                            onClick={function () { setDiaryFilter(f.id); }}
                            style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                            className={
                              "px-3 py-1.5 rounded-lg text-xs sm:text-[13px] uppercase tracking-wider border transition-colors cursor-pointer " +
                              (sel ? "bg-amber-400 text-black border-amber-200 font-bold" : "bg-white/[0.03] border-white/15 text-amber-200/80 hover:border-amber-400/50")
                            }
                          >
                            {f.label}
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs text-purple-100/90 italic">
                      Se guardan automáticamente tus últimas {MAX_DIARY_ENTRIES} consultas en este navegador.
                    </span>
                  </div>

                  {filteredReadings.length === 0 ? (
                    <div className="p-8 sm:p-10 rounded-2xl bg-[#0d0719] border border-purple-500/30 text-center space-y-3">
                      <ScrollIcon className="w-8 h-8 text-purple-300 mx-auto opacity-80" />
                      <h3 style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-lg sm:text-xl text-amber-200 font-bold">
                        Aún no hay crónicas registradas
                      </h3>
                      <p className="text-sm sm:text-base text-purple-100/95 max-w-lg mx-auto italic">
                        Cada tirada clásica, consulta de <strong>La Balanza Sí o No</strong> o crónica de <strong>El Hilo de las Tres Lunas</strong> quedará asentada aquí para que puedas volver a leerla, añadir tus notas personales o revivirla en el altar.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3.5">
                      {filteredReadings.map(function (entry) {
                        const isTrina = entry.type === "trina";
                        const isSiNo = entry.type === "sino";
                        const isThreeCards = (entry.cards || []).length >= 3;
                        const isEditing = editingNoteId === entry.id;
                        const isCopied = copiedKey === "reading_" + entry.id;
                        const verdictCls = SINO_VERDICT_BADGES[entry.verdictCode] || "bg-emerald-500/20 border-emerald-400/50 text-emerald-200";

                        return (
                          <article
                            key={entry.id}
                            className={
                              "rounded-2xl border p-4 sm:p-5 space-y-3.5 " +
                              (isSiNo
                                ? "bg-gradient-to-r from-[#081b18] via-[#0c0817] to-[#081b18] border-emerald-400/45"
                                : isTrina
                                ? "bg-gradient-to-r from-[#160b29] via-[#0c0617] to-[#160b29] border-purple-400/55"
                                : "bg-[#0d0718] border-amber-500/40")
                            }
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span
                                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                  className={
                                    "px-2.5 py-0.5 rounded-full text-xs uppercase tracking-wider font-bold border " +
                                    (isSiNo
                                      ? "bg-emerald-500/15 border-emerald-400/55 text-emerald-200"
                                      : isTrina
                                      ? "bg-purple-500/20 border-purple-300/55 text-purple-200"
                                      : "bg-amber-500/15 border-amber-400/50 text-amber-200")
                                  }
                                >
                                  {isSiNo ? "♎ Balanza Sí o No" : isTrina ? "☽ El Hilo de las Tres Lunas" : "☉ Arcano Único"}
                                </span>
                                {isSiNo && entry.verdictLabel && (
                                  <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className={"px-2.5 py-0.5 rounded-full text-xs uppercase tracking-wider font-bold border " + verdictCls}>
                                    {entry.verdictLabel}
                                  </span>
                                )}
                                {isSiNo && entry.domainLabel && (
                                  <span className="px-2 py-0.5 rounded-full text-xs bg-white/[0.05] border border-white/15 text-amber-50/95">
                                    {entry.domainLabel}
                                  </span>
                                )}
                                {!isSiNo && entry.arcTitle && (
                                  <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-sm sm:text-base font-bold text-amber-200">
                                    {entry.arcTitle}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-purple-100/90">
                                {formatArgentineDate(entry.timestamp)}
                              </span>
                            </div>

                            {entry.question && (
                              <p className="text-sm sm:text-base text-purple-100/95 font-semibold italic">
                                Pregunta: “{entry.question}”
                              </p>
                            )}

                            {/* Cartas de la lectura */}
                            <div className={"grid gap-2 " + (isThreeCards ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1")}>
                              {(entry.cards || []).map(function (c, idx) {
                                return (
                                  <div
                                    key={entry.id + "_c_" + idx}
                                    className={
                                      "p-3 rounded-xl border flex items-center justify-between gap-2 " +
                                      (c.isReversed
                                        ? "bg-purple-950/35 border-purple-400/40"
                                        : "bg-amber-500/[0.07] border-amber-400/35")
                                    }
                                  >
                                    <div className="min-w-0">
                                      <span style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }} className="text-xs uppercase tracking-widest text-amber-300/95 block">
                                        {c.positionLabel} • {c.isReversed ? "Sombra" : "Luz"}
                                      </span>
                                      <span style={{ fontFamily: "'Cinzel', Georgia, serif" }} className="text-sm sm:text-base font-bold text-amber-100 block truncate">
                                        {c.numeral ? (c.numeral + " • ") : ""}{c.name}
                                      </span>
                                    </div>
                                    <a
                                      href={getGrimoireCardHref(c.id, c.isReversed)}
                                      title="Abrir en el Códice"
                                      className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-amber-400/20 text-amber-200 flex-shrink-0"
                                    >
                                      <ExternalIcon />
                                    </a>
                                  </div>
                                );
                              })}
                            </div>

                            {entry.summary && (
                              <p className="text-[15px] sm:text-base italic text-amber-50/95 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/10">
                                “{entry.summary}”
                              </p>
                            )}

                            {isEditing ? (
                              <div className="space-y-2">
                                <textarea
                                  rows={3}
                                  value={noteDraft}
                                  onChange={function (e) { setNoteDraft(e.target.value); }}
                                  placeholder="Anotá qué preguntaste, cómo te sentías o qué ocurrió después..."
                                  style={{ userSelect: "text", WebkitUserSelect: "text" }}
                                  className="w-full p-3 rounded-xl bg-[#05020a] border border-amber-400/50 focus:border-amber-300 focus:outline-none text-sm text-amber-50 placeholder:text-amber-200/60 resize-none select-text"
                                />
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={function () { handleSaveNote(entry.id); }}
                                    style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                    className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-black text-xs uppercase tracking-wider font-bold cursor-pointer hover:bg-amber-300"
                                  >
                                    Guardar Nota
                                  </button>
                                  <button
                                    type="button"
                                    onClick={function () { setEditingNoteId(null); setNoteDraft(""); }}
                                    style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] text-amber-200/80 text-xs uppercase tracking-wider cursor-pointer hover:bg-white/10"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              </div>
                            ) : (
                              entry.note && (
                                <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-400/30 text-xs sm:text-sm text-emerald-100/90">
                                  <strong className="text-emerald-300">✦ Nota personal: </strong>{entry.note}
                                </div>
                              )
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
                              <div className="flex flex-wrap items-center gap-1.5">
                                {onReopenReading && (
                                  <button
                                    type="button"
                                    onClick={function () { onReopenReading(entry); }}
                                    style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/25 to-purple-500/25 hover:brightness-125 border border-amber-300/60 text-xs uppercase tracking-wider font-bold text-amber-100 cursor-pointer transition"
                                  >
                                    <SparklesIcon className="w-3.5 h-3.5 text-amber-300" /> Revivir en el Altar
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={function () {
                                    setEditingNoteId(entry.id);
                                    setNoteDraft(entry.note || "");
                                  }}
                                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/15 text-xs uppercase tracking-wider text-amber-200/85 cursor-pointer transition-colors"
                                >
                                  {entry.note ? "Editar Nota" : "+ Añadir Nota"}
                                </button>
                                <button
                                  type="button"
                                  onClick={function () { handleCopyReading(entry); }}
                                  style={{ fontFamily: "'Plus Jakarta Sans', 'Jakarta Fallback', system-ui, sans-serif" }}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/15 text-xs uppercase tracking-wider text-amber-200/85 cursor-pointer transition-colors"
                                >
                                  {isCopied ? <React.Fragment><CheckIcon /> Copiada</React.Fragment> : <React.Fragment><CopyIcon /> Copiar</React.Fragment>}
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={function () { handleDeleteEntry(entry.id); }}
                                title="Eliminar del diario"
                                className="p-1.5 rounded-lg text-rose-300/70 hover:text-rose-200 hover:bg-rose-500/15 transition-colors cursor-pointer"
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

window.GrimorioPersonal = {
  recordReading: recordReading,
  getReadings: getReadings,
  updateReadingNote: updateReadingNote,
  deleteReading: deleteReading,
  getSealedActsList: getSealedActsList,
  toggleSealCompleted: toggleSealCompleted,
  releaseSeal: releaseSeal,
  getArcanaProgressList: getArcanaProgressList,
  getSummaryCounts: getSummaryCounts,
  formatArgentineDate: formatArgentineDate
};
window.GrimorioModal = GrimorioModal;
`;

(function compileGrimorioPersonal() {
  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + GRIMORIO_PERSONAL_SOURCE + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
    console.log("%c✦ Grimorio Personal y Diario del Consultante (con Sí o No) compilados y activos.", "color: #fde047; font-weight: bold;");
  } else {
    console.error("Babel no está cargado antes de grimorio_personal.js");
  }
})();
// --- FIN DEL ARCHIVO ---

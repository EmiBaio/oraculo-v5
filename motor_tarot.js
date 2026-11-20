// ============================================================================
// ARCHIVO: motor_tarot.js
// Unificador de Base de Datos (78 Cartas) + Enrutador Nativo + Puente Polimórfico
// Conecta los 12 volúmenes (datos_sol_1..6 y datos_luna_1..6) con TarotRouter y TAROT_DB
// Incluye helper centralizado window.copyTextSafe (compatible con file:///) y tabla de alias
// ============================================================================

(function () {
  function crearSlug(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function extractRootElement(elementStr) {
    const raw = String(elementStr || '').toLowerCase();
    if (raw.indexOf('fuego') !== -1) return 'Fuego';
    if (raw.indexOf('agua') !== -1) return 'Agua';
    if (raw.indexOf('aire') !== -1 || raw.indexOf('eter') !== -1 || raw.indexOf('éter') !== -1) return 'Aire';
    if (raw.indexOf('tierra') !== -1) return 'Tierra';
    return 'Éter';
  }

  // Utilidad universal de portapapeles (con respaldo para protocolo local file:///)
  // Siempre devuelve una Promise<boolean> y nunca lanza rechazos no capturados.
  function fallbackExecCopy(text) {
    try {
      if (typeof document === 'undefined' || !document.body) return false;
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      ta.style.left = '-9999px';
      ta.style.opacity = '0';
      ta.style.pointerEvents = 'none';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      if (typeof ta.setSelectionRange === 'function') {
        ta.setSelectionRange(0, text.length);
      }
      const ok = Boolean(document.execCommand && document.execCommand('copy'));
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function copyTextSafe(text) {
    const str = String(text || '');
    if (!str) return Promise.resolve(false);
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(str)
        .then(function () { return true; })
        .catch(function () { return fallbackExecCopy(str); });
    }
    return Promise.resolve(fallbackExecCopy(str));
  }

  window.copyTextSafe = copyTextSafe;

  // Tabla de alias históricos, numerales y slugs alternativos para los 22 Arcanos Mayores
  const MAJOR_ALIAS_GROUPS = [
    ['0', ['0', '00', 'fool', 'el-loco', 'loco', 'major-0', 'maj-0']],
    ['1', ['1', 'i', 'magician', 'el-mago', 'la-maga', 'mago', 'maga', 'major-1', 'maj-1']],
    ['2', ['2', 'ii', 'priestess', 'high-priestess', 'la-sacerdotisa', 'sacerdotisa', 'la-papisa', 'papisa', 'major-2', 'maj-2']],
    ['3', ['3', 'iii', 'empress', 'la-emperatriz', 'emperatriz', 'major-3', 'maj-3']],
    ['4', ['4', 'iv', 'emperor', 'el-emperador', 'emperador', 'major-4', 'maj-4']],
    ['5', ['5', 'v', 'hierophant', 'el-hierofante', 'hierofante', 'el-papa', 'papa', 'pope', 'major-5', 'maj-5']],
    ['6', ['6', 'vi', 'lovers', 'los-enamorados', 'enamorados', 'los-amantes', 'amantes', 'major-6', 'maj-6']],
    ['7', ['7', 'vii', 'chariot', 'el-carro', 'carro', 'major-7', 'maj-7']],
    ['8', ['8', 'viii', 'strength', 'fortitude', 'la-fuerza', 'fuerza', 'major-8', 'maj-8']],
    ['9', ['9', 'ix', 'hermit', 'el-ermitano', 'ermitano', 'major-9', 'maj-9']],
    ['10', ['10', 'x', 'wheel', 'wheel-of-fortune', 'fortune', 'la-rueda', 'rueda', 'la-rueda-de-la-fortuna', 'rueda-de-la-fortuna', 'major-10', 'maj-10']],
    ['11', ['11', 'xi', 'justice', 'la-justicia', 'justicia', 'major-11', 'maj-11']],
    ['12', ['12', 'xii', 'hanged', 'hanged-man', 'el-colgado', 'colgado', 'major-12', 'maj-12']],
    ['13', ['13', 'xiii', 'death', 'la-muerte', 'muerte', 'major-13', 'maj-13']],
    ['14', ['14', 'xiv', 'temperance', 'la-templanza', 'templanza', 'major-14', 'maj-14']],
    ['15', ['15', 'xv', 'devil', 'el-diablo', 'diablo', 'major-15', 'maj-15']],
    ['16', ['16', 'xvi', 'tower', 'la-torre', 'torre', 'major-16', 'maj-16']],
    ['17', ['17', 'xvii', 'star', 'la-estrella', 'estrella', 'major-17', 'maj-17']],
    ['18', ['18', 'xviii', 'moon', 'la-luna', 'luna', 'major-18', 'maj-18']],
    ['19', ['19', 'xix', 'sun', 'el-sol', 'sol', 'major-19', 'maj-19']],
    ['20', ['20', 'xx', 'judgement', 'judgment', 'el-juicio', 'juicio', 'major-20', 'maj-20']],
    ['21', ['21', 'xxi', 'world', 'el-mundo', 'mundo', 'major-21', 'maj-21']]
  ];

  const MAJOR_ALIAS_MAP = {};
  MAJOR_ALIAS_GROUPS.forEach((entry) => {
    const canonicalId = entry[0];
    entry[1].forEach((alias) => {
      MAJOR_ALIAS_MAP[crearSlug(alias)] = canonicalId;
    });
  });

  // 1. Integrar los 6 volúmenes Solares y 6 Lunares con las constantes globales
  const baseMajors = typeof MAJOR_ARCANA !== 'undefined' ? MAJOR_ARCANA : (window.MAJOR_ARCANA || []);
  if (Array.isArray(window.DATOS_SOL) && window.DATOS_SOL.length > 0) {
    window.DATOS_SOL.forEach((solarCard) => {
      const idx = baseMajors.findIndex((c) => Number(c.id) === Number(solarCard.id));
      if (idx !== -1) {
        baseMajors[idx] = Object.assign({}, baseMajors[idx], solarCard);
      } else {
        baseMajors.push(solarCard);
      }
    });
  }
  window.MAJOR_ARCANA = baseMajors;

  const baseReversed = typeof REVERSED_DATA !== 'undefined' ? REVERSED_DATA : (window.REVERSED_DATA || {});
  if (Array.isArray(window.DATOS_LUNA) && window.DATOS_LUNA.length > 0) {
    window.DATOS_LUNA.forEach((lunarCard) => {
      baseReversed[lunarCard.id] = Object.assign({}, baseReversed[lunarCard.id] || {}, lunarCard);
    });
  }
  window.REVERSED_DATA = baseReversed;

  // 2. Normalizar los 22 Arcanos Mayores
  const mayoresNormalizados = baseMajors.map((card) => {
    const rev = baseReversed[card.id] || null;
    const rootElem = extractRootElement(card.correspondences && card.correspondences.element);
    return {
      ...card,
      id: String(card.id),
      slug: crearSlug(card.name),
      type: 'major',
      arcanaType: 'major',
      suit: null,
      suitName: 'Arcanos Mayores',
      rootElement: rootElem,
      reversed: rev || {
        yesNo: 'Incierto (energía bloqueada)',
        meaning: card.lightAndShadow,
        lightAndShadow: card.lightAndShadow,
        domains: card.domains,
        counsel: card.counsel
      },
      seo: {
        title: card.name + " (" + card.numeral + ") en el Tarot: Significado en el Amor, Trabajo y Sombra",
        description: String(card.meaning || '').slice(0, 155) + '...'
      }
    };
  });

  // 3. Normalizar los 56 Arcanos Menores
  const rawMinors = typeof MINOR_ARCANA !== 'undefined' ? MINOR_ARCANA : (window.MINOR_ARCANA || []);
  const menoresNormalizados = rawMinors.map((card) => {
    const rootElem = extractRootElement(card.correspondences && card.correspondences.element);
    return {
      ...card,
      id: String(card.id),
      slug: crearSlug(card.name),
      type: 'minor',
      arcanaType: 'minor',
      rootElement: rootElem,
      reversed: card.reversed || {
        yesNo: 'No / Bloqueo temporal',
        meaning: "En polaridad invertida (Sombra), " + card.name + " señala: " + card.lightAndShadow,
        lightAndShadow: card.lightAndShadow,
        domains: card.domains,
        counsel: card.counsel
      },
      seo: {
        title: card.name + " Tarot (" + card.suitName + "): Significado en el Amor, Dinero y Consejos",
        description: String(card.meaning || '').slice(0, 155) + '...'
      }
    };
  });

  const TODAS_LAS_78_CARTAS = [...mayoresNormalizados, ...menoresNormalizados];

  function getCardByQuery(query) {
    if (query === null || query === undefined || query === '') return null;
    const q = String(query).toLowerCase().trim();
    if (!q) return null;
    const qSlug = crearSlug(q);
    const aliasedId = MAJOR_ALIAS_MAP[qSlug];

    if (aliasedId !== undefined) {
      const byAlias = TODAS_LAS_78_CARTAS.find((c) => c.id === aliasedId);
      if (byAlias) return byAlias;
    }

    return (
      TODAS_LAS_78_CARTAS.find(
        (c) =>
          c.id.toLowerCase() === q ||
          (c.slug && c.slug === qSlug) ||
          crearSlug(c.name) === qSlug ||
          (c.archetype && crearSlug(c.archetype) === qSlug)
      ) || null
    );
  }

  function pickAtOctave(variantsArray, fallbackValue, octaveIdx) {
    if (Array.isArray(variantsArray) && variantsArray.length > 0) {
      const safeIdx = Math.abs(Number(octaveIdx) || 0) % variantsArray.length;
      return variantsArray[safeIdx];
    }
    return fallbackValue;
  }

  // 4. Resolución Polimórfica para Tiradas (con registro en localStorage y Sincronicidad)
  function resolveCardForDraw(cardOrId, isReversed, recordDraw) {
    const idStr = typeof cardOrId === 'object' && cardOrId !== null ? String(cardOrId.id) : String(cardOrId);
    const baseCard =
      TODAS_LAS_78_CARTAS.find((c) => c.id.toLowerCase() === idStr.toLowerCase()) ||
      getCardByQuery(idStr) ||
      (typeof cardOrId === 'object' ? cardOrId : null);
    if (!baseCard) return null;

    const rev = Boolean(isReversed);
    const shouldRecord = recordDraw !== false;
    const numId = Number(baseCard.id);

    if (baseCard.type === 'major' && !isNaN(numId)) {
      if (rev && window.LunarOracleEngine) {
        const resolvedLunar = window.LunarOracleEngine.resolveShadowCard(numId, shouldRecord);
        if (resolvedLunar) {
          return Object.assign({}, baseCard, resolvedLunar, {
            id: baseCard.id,
            type: 'major',
            arcanaType: 'major',
            isReversed: true
          });
        }
      }
      if (!rev && window.SolarOracleEngine) {
        const resolvedSolar = window.SolarOracleEngine.resolveLivingCard(numId, shouldRecord);
        if (resolvedSolar) {
          return Object.assign({}, baseCard, resolvedSolar, {
            id: baseCard.id,
            type: 'major',
            arcanaType: 'major',
            isReversed: false
          });
        }
      }
    }

    if (rev && baseCard.reversed) {
      return Object.assign({}, baseCard, baseCard.reversed, {
        id: baseCard.id,
        name: baseCard.name,
        numeral: baseCard.numeral,
        isReversed: true
      });
    }

    return Object.assign({}, baseCard, { isReversed: rev });
  }

  // 5. Resolución por Octava Específica (0..4) para Modo Estudio en carta.html
  function resolveCardAtOctave(cardOrId, isReversed, octaveIndex) {
    const idStr = typeof cardOrId === 'object' && cardOrId !== null ? String(cardOrId.id) : String(cardOrId);
    const baseCard =
      TODAS_LAS_78_CARTAS.find((c) => c.id.toLowerCase() === idStr.toLowerCase()) ||
      getCardByQuery(idStr) ||
      (typeof cardOrId === 'object' ? cardOrId : null);
    if (!baseCard) return null;

    const oct = Math.max(0, Number(octaveIndex) || 0);
    const rev = Boolean(isReversed);
    const numId = Number(baseCard.id);

    if (baseCard.type === 'major' && !isNaN(numId)) {
      if (rev) {
        const lunarSource =
          (window.DATOS_LUNA && window.DATOS_LUNA.find((c) => Number(c.id) === numId)) ||
          baseReversed[numId] ||
          baseCard.reversed;

        if (lunarSource) {
          const activeDomains = pickAtOctave(lunarSource.domainsVariants, lunarSource.domains, oct);
          const activeAlchemy = pickAtOctave(
            lunarSource.theAlchemyVariants || lunarSource.actionOracleVariants,
            lunarSource.theAlchemy || lunarSource.actionOracle,
            oct
          );
          return Object.assign({}, baseCard, lunarSource, {
            id: baseCard.id,
            type: 'major',
            arcanaType: 'major',
            isReversed: true,
            activeOctaveIndex: oct,
            oracleVoice: pickAtOctave(lunarSource.oracleVoiceVariants, lunarSource.oracleVoice, oct),
            meaning: pickAtOctave(lunarSource.meaningVariants, lunarSource.meaning, oct),
            theWound: pickAtOctave(lunarSource.theWoundVariants, lunarSource.theWound, oct),
            theIllusion: pickAtOctave(lunarSource.theIllusionVariants, lunarSource.theIllusion, oct),
            psyche: pickAtOctave(lunarSource.psycheVariants, lunarSource.psyche || lunarSource.theWound, oct),
            lightAndShadow: pickAtOctave(lunarSource.lightAndShadowVariants, lunarSource.lightAndShadow, oct),
            domains: Object.assign({}, baseCard.domains, activeDomains || {}),
            theAlchemy: activeAlchemy,
            actionOracle: activeAlchemy,
            counsel: pickAtOctave(lunarSource.counselVariants, lunarSource.counsel, oct)
          });
        }
      } else {
        const activeDomains = pickAtOctave(baseCard.domainsVariants, baseCard.domains, oct);
        const activeAction = pickAtOctave(baseCard.actionOracleVariants, baseCard.actionOracle, oct);
        return Object.assign({}, baseCard, {
          isReversed: false,
          activeOctaveIndex: oct,
          oracleVoice: pickAtOctave(baseCard.oracleVoiceVariants, baseCard.oracleVoice, oct),
          meaning: pickAtOctave(baseCard.meaningVariants, baseCard.meaning, oct),
          psyche: pickAtOctave(baseCard.psycheVariants, baseCard.psyche, oct),
          lightAndShadow: pickAtOctave(baseCard.lightAndShadowVariants, baseCard.lightAndShadow, oct),
          domains: Object.assign({}, baseCard.domains, activeDomains || {}),
          actionOracle: activeAction,
          counsel: pickAtOctave(baseCard.counselVariants, baseCard.counsel, oct)
        });
      }
    }

    return resolveCardForDraw(baseCard, rev, false);
  }

  // 6. Estadísticas de Maestría del Grimorio y Sellos Psicomágicos
  const SEALS_STORAGE_KEY = 'velo_astral_psychomagic_seals_v1';

  function getGrimoireStats() {
    let solarMemory = { cards: {} };
    let lunarMemory = { cards: {} };
    let sealsMemory = { seals: {} };
    try {
      const rawSol = localStorage.getItem('velo_astral_solar_grimoire_v2');
      if (rawSol) solarMemory = JSON.parse(rawSol);
    } catch (e) {}
    try {
      const rawLun = localStorage.getItem('velo_astral_lunar_grimoire_v2');
      if (rawLun) lunarMemory = JSON.parse(rawLun);
    } catch (e) {}
    try {
      const rawSeals = localStorage.getItem(SEALS_STORAGE_KEY);
      if (rawSeals) sealsMemory = JSON.parse(rawSeals);
    } catch (e) {}

    const solarCards = solarMemory.cards || {};
    const lunarCards = lunarMemory.cards || {};
    const sealsMap = sealsMemory.seals || {};

    let solarUnlockedCount = 0;
    let lunarUnlockedCount = 0;
    let totalDraws = 0;

    Object.keys(solarCards).forEach((k) => {
      const draws = Number(solarCards[k] && solarCards[k].totalDraws) || 0;
      if (draws > 0) {
        solarUnlockedCount += 1;
        totalDraws += draws;
      }
    });
    Object.keys(lunarCards).forEach((k) => {
      const draws = Number(lunarCards[k] && lunarCards[k].totalDraws) || 0;
      if (draws > 0) {
        lunarUnlockedCount += 1;
        totalDraws += draws;
      }
    });

    return {
      solarUnlockedCount,
      lunarUnlockedCount,
      totalMajorUnlocked: Object.keys(Object.assign({}, solarCards, lunarCards)).length,
      totalDraws,
      sealedActsCount: Object.keys(sealsMap).length,
      sealsMap
    };
  }

  function sealPsychomagicAct(cardId, isReversed, talismanPhrase, commandText) {
    try {
      const raw = localStorage.getItem(SEALS_STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : { seals: {} };
      const key = String(cardId) + '_' + (isReversed ? 'lunar' : 'solar');
      data.seals[key] = {
        cardId: String(cardId),
        polarity: isReversed ? 'lunar' : 'solar',
        talismanPhrase: talismanPhrase || '',
        command: commandText || '',
        sealedAt: Date.now()
      };
      localStorage.setItem(SEALS_STORAGE_KEY, JSON.stringify(data));
      return data.seals[key];
    } catch (e) {
      return null;
    }
  }

  function isPsychomagicActSealed(cardId, isReversed) {
    try {
      const raw = localStorage.getItem(SEALS_STORAGE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      const key = String(cardId) + '_' + (isReversed ? 'lunar' : 'solar');
      return Boolean(data && data.seals && data.seals[key]);
    } catch (e) {
      return false;
    }
  }

  // 7. Exposición Global Unificada (TAROT_DB + TarotRouter sin duplicados)
  window.TAROT_DB = {
    all: TODAS_LAS_78_CARTAS,
    majors: mayoresNormalizados,
    minors: menoresNormalizados,
    suitsMeta: typeof SUITS_META !== 'undefined' ? SUITS_META : {},
    extractRootElement,
    getCardByQuery,
    copyTextSafe,
    getAllCards: () => TODAS_LAS_78_CARTAS,
    getMajorArcana: () => mayoresNormalizados,
    getMinorArcana: () => menoresNormalizados,
    resolveCardForDraw,
    resolveCardAtOctave,
    getGrimoireStats,
    sealPsychomagicAct,
    isPsychomagicActSealed
  };

  window.TarotRouter = {
    getCard: function (query) {
      return getCardByQuery(query);
    },

    getNeighbors: function (card) {
      if (!card || TODAS_LAS_78_CARTAS.length === 0) {
        return { prev: null, next: null, sameElement: null, related: [] };
      }

      const isMajor = card.type === 'major' || card.arcanaType === 'major' || Number(card.id) <= 21;
      const groupPool = isMajor
        ? mayoresNormalizados
        : menoresNormalizados.filter((c) => c.suit === card.suit);

      const activePool = groupPool.length > 0 ? groupPool : TODAS_LAS_78_CARTAS;
      const idx = activePool.findIndex((c) => String(c.id) === String(card.id));

      const prev = idx !== -1 ? activePool[(idx - 1 + activePool.length) % activePool.length] : activePool[0];
      const next = idx !== -1 ? activePool[(idx + 1) % activePool.length] : activePool[1 % activePool.length];

      const rootElem = card.rootElement || extractRootElement(card.correspondences && card.correspondences.element);
      const seed = String(card.id).split('').reduce((a, b) => a + b.charCodeAt(0), 0);

      const related = TODAS_LAS_78_CARTAS
        .filter((c) => {
          if (String(c.id) === String(card.id)) return false;
          const cElem = c.rootElement || extractRootElement(c.correspondences && c.correspondences.element);
          return cElem === rootElem;
        })
        .sort((a, b) => ((a.name.charCodeAt(0) + seed) % 10) - ((b.name.charCodeAt(0) + seed) % 10))
        .slice(0, 4);

      return {
        prev,
        next,
        sameElement: related[0] || next,
        related
      };
    },

    resolveCurrentUrl: function (defaultId) {
      const fallback = defaultId !== undefined ? defaultId : '11';
      const params = new URLSearchParams(window.location.search);
      const requested = params.get('arcano') || params.get('id') || fallback;
      const baseCard =
        this.getCard(requested) ||
        this.getCard(fallback) ||
        TODAS_LAS_78_CARTAS[0] ||
        null;

      const isShadowMode = params.get('modo') === 'sombra' || params.get('invertida') === '1';
      const resolvedCard = baseCard ? resolveCardForDraw(baseCard, isShadowMode, false) : null;

      return {
        card: resolvedCard || baseCard,
        neighbors: this.getNeighbors(baseCard)
      };
    },

    getLink: function (cardOrId, opts) {
      const id = typeof cardOrId === 'object' && cardOrId !== null ? cardOrId.id : cardOrId;
      const isShadow = Boolean(opts && (opts.shadow || opts.isReversed));
      return "?arcano=" + encodeURIComponent(id) + (isShadow ? "&modo=sombra" : "");
    },

    navigateTo: function (cardOrId, opts) {
      const url = this.getLink(cardOrId, opts);
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
})();

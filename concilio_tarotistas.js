// ============================================================================
// ARCHIVO: concilio_tarotistas.js
// Fuente Única de Verdad del Concilio del Velo Astral (Perfiles, CV y Revisión)
// Consumido por layout_arcano.js (carta.html) y sobre-nosotros.html
// Compatible 100% con protocolo local file:/// y producción estática
// ============================================================================

(function initConcilioTarotistas(global) {
  const CONCILIO_TAROTISTAS = [
    {
      id: "sofia",
      name: "Sofía Lindholm",
      image: "img/concilio/sofia.webp",
      imageAlt: "Retrato de Sofía Lindholm sosteniendo la carta de El Loco en su mesa de lectura con velas y cuarzos",
      sigil: "☉",
      element: "Aire",
      archetype: "El Loco (Arcano 0)",
      favoriteArcana: { id: "0", numeral: "0", name: "El Loco" },
      role: "Tarot Contemporáneo, Pedagogía Simbólica y Lectura Evolutiva",
      shortCredential: "7 años de práctica con el mazo Rider-Waite-Smith y edición de guías de lectura clara",
      editorialRole: "Redacción de lecturas accesibles y revisión de claridad práctica para el consultante",
      focusTags: [
        "Tarot Rider-Waite-Smith",
        "Arquetipos de Inicios",
        "Lectura Evolutiva",
        "Lenguaje Claro"
      ],
      cardBio: "Especializada en traducir la simbología clásica del Rider-Waite-Smith a lecturas directas, cercanas y aplicables a decisiones cotidianas sin perder rigor.",
      extendedBio:
        "Formada en estudio comparado del tarot contemporáneo y lectura simbólica aplicada, Sofía lleva siete años trabajando a diario con el mazo Rider-Waite-Smith. Su enfoque parte de una premisa sencilla: un símbolo antiguo solo sirve si la persona que consulta logra comprenderlo sin necesidad de un diccionario hermético. Dentro del Concilio oficia como editora de claridad, asegurándose de que cada ficha baje a tierra con consejos concretos y un tono honesto, libre de dramatismos innecesarios.",
      firstPerson:
        "Empecé a estudiar las cartas buscando orden en una etapa de muchos cambios, y enseguida noté que casi todo lo que se publicaba sobre tarot oscilaba entre lo demasiado críptico y las frases vacías. Por eso suelo tener a El Loco siempre a mano en la mesa: me recuerda mirar cada tirada sin prejuicios y escribir para alguien real que necesita entender qué tiene enfrente hoy, no adivinar un futuro rígido."
    },
    {
      id: "miriam",
      name: "Miriam Al-Zahra",
      image: "img/concilio/miriam.webp",
      imageAlt: "Retrato editorial de Miriam Al-Zahra con pendientes antiguos de filigrana dorada sobre fondo oscuro",
      sigil: "✡",
      element: "Fuego y Tierra",
      archetype: "La Rueda de la Fortuna (Arcano X)",
      favoriteArcana: { id: "10", numeral: "X", name: "La Rueda de la Fortuna" },
      role: "Cábala Hermética, Astrología Tradicional y Revisión Esotérica",
      shortCredential: "16 años de investigación en correspondencias cabalísticas, letras hebreas y decanatos astrológicos",
      editorialRole: "Auditoría de senderos del Árbol de la Vida, regencias planetarias y consistencia alquímica",
      focusTags: [
        "Cábala Hermética",
        "Árbol de la Vida",
        "Astrología Clásica",
        "Alquimia Simbólica"
      ],
      cardBio: "Investigadora de correspondencias astrológicas, letras hebreas y senderos del Árbol de la Vida; audita el rigor tradicional y alquímico de cada arcano.",
      extendedBio:
        "De raíces mediterráneas y formación autodidacta rigurosa en fuentes clásicas de cábala hermética y astrología helenística, Miriam dedica su trabajo al estudio estructural del tarot como sistema de correspondencias. En Oráculo del Velo Astral supervisa las fichas técnicas de los 78 arcanos: verifica cada asignación elemental, las dignidades planetarias, los senderos sefiróticos y las contrapartes en sombra para que el Códice conserve coherencia doctrinaria de principio a fin.",
      firstPerson:
        "Cuando alguien desprecia la estructura tradicional del tarot suele terminar improvisando lugares comunes. Cada letra hebrea, cada planeta y cada elemento dentro de una carta obedecen a siglos de observación simbólica. Mi tarea en el Concilio es custodiar ese andamiaje antiguo para que, aunque la web sea moderna y veloz, la arquitectura profunda que sostiene cada lectura siga siendo fiel a sus raíces."
    },
    {
      id: "clara",
      name: "Clara del Río",
      image: "img/concilio/clara.webp",
      imageAlt: "Retrato de Clara del Río con colgante de piedra lunar y blusa verde esmeralda bajo luz de velas",
      sigil: "♀",
      element: "Agua",
      archetype: "La Luna (Arcano XVIII)",
      favoriteArcana: { id: "18", numeral: "XVIII", name: "La Luna" },
      role: "Tarot Vincular, Lectura Afectiva y Registros Astrales",
      shortCredential: "11 años acompañando lecturas relacionales, ciclos emocionales y vínculos conscientes",
      editorialRole: "Redacción y curaduría del dominio de Amor y Vínculos en Luz y Sombra",
      focusTags: [
        "Tarot Vincular",
        "Reciprocidad Afectiva",
        "Ciclos Lunares",
        "Límites Emocionales"
      ],
      cardBio: "Especializada en lecturas afectivas, dinámicas de reciprocidad y nudos vinculares; cuida que cada interpretación romántica promueva lucidez y respeto propio.",
      extendedBio:
        "Con once años de experiencia en lecturas centradas en relaciones de pareja, duelos afectivos y patrones familiares, Clara construyó un método que se aleja deliberadamente del tarot de la dependencia emocional. En lugar de alimentar ansiedades sobre lo que piensa o hará otra persona, sus textos ayudan a leer la dinámica real del vínculo, detectar asimetrías y reconocer el propio lugar dentro de la escena afectiva.",
      firstPerson:
        "La mayoría de las personas llega a una tirada con una pregunta de amor en la garganta, y casi siempre busca certeza absoluta donde en realidad necesita perspectiva. Cuando redacto o reviso el apartado afectivo de una carta me importa una sola cosa: que quien la lea cierre la pantalla con más dignidad y claridad que antes de abrirla, nunca más ansioso ni atado a falsas promesas."
    },
    {
      id: "lyra",
      name: "Lyra Vane",
      image: "img/concilio/lyra.webp",
      imageAlt: "Retrato de Lyra Vane con medallón solar dorado y camisa negra de seda en luz cálida",
      sigil: "☀",
      element: "Fuego",
      archetype: "El Sol (Arcano XIX)",
      favoriteArcana: { id: "19", numeral: "XIX", name: "El Sol" },
      role: "Tarot Vocacional, Estrategia Material y Propósito",
      shortCredential: "12 años integrando lectura arquetípica con toma de decisiones laborales y proyectos independientes",
      editorialRole: "Curaduría de los dominios de Trabajo, Dinero y protocolos de acción ejecutiva",
      focusTags: [
        "Propósito Vocacional",
        "Trabajo y Oficio",
        "Estrategia Personal",
        "Decretos de Acción"
      ],
      cardBio: "Enfocada en oficio, acuerdos laborales, patrimonio y estrategia personal; convierte cada arquetipo en criterios concretos de decisión y movimiento.",
      extendedBio:
        "Antes de dedicarse de lleno a la escritura editorial y la consultoría simbólica, Lyra trabajó durante años en gestión de proyectos creativos independientes. Esa experiencia práctica marcó su lectura del tarot: entiende los arcanos como un tablero estratégico para detectar bloqueos de ejecución, negociaciones desfavorables y momentos oportunos de expansión. En el Códice lidera las secciones de Trabajo, Dinero y los decretos de acción de cada carta.",
      firstPerson:
        "La intuición sin calendario se evapora rápido. Me fascina el momento exacto en que una carta deja de ser una metáfora bonita y se convierte en una decisión concreta: cobrar lo que vale tu oficio, cerrar un acuerdo que ya no rinde o animarte a lanzar lo que venís postergando. En cada ficha busco dejar esa palanca práctica a la vista."
    },
    {
      id: "elena",
      name: "Elena Kovács",
      image: "img/concilio/elena.webp",
      imageAlt: "Retrato editorial de Elena Kovács con chaqueta de terciopelo azul noche y colgante dorado de Mercurio",
      sigil: "☿",
      element: "Aire y Agua",
      archetype: "La Sacerdotisa (Arcano II)",
      favoriteArcana: { id: "2", numeral: "II", name: "La Sacerdotisa" },
      role: "Simbología Hermética, Iconografía Histórica y Psicología Arquetípica",
      shortCredential: "15 años en estudio de iconografía del tarot europeo, lectura de sombra y simbología junguiana",
      editorialRole: "Dirección de coherencia simbólica, nodos secretos del diorama y textos de Faz Lunar (Sombra)",
      focusTags: [
        "Iconografía Histórica",
        "Psicología Arquetípica",
        "Integración de la Sombra",
        "Nodos Simbólicos"
      ],
      cardBio: "Estudiosa de la iconografía del tarot histórico y la teoría de arquetipos; dirige la lectura psicológica de la sombra y los nodos secretos de cada carta.",
      extendedBio:
        "Nacida en Europa Central y dedicada desde hace quince años a la historia comparada de los mazos tradicionales (Marsella, Rider-Waite-Smith y corrientes herméticas del siglo XX), Elena aporta la mirada analítica y clínica sobre los símbolos. Es la principal responsable de la arquitectura de los nodos secretos de cada diorama y de las lecturas en Faz Lunar, donde la carta invertida deja de leerse como un mal augurio para revelar mecanismos inconscientes y puntos ciegos del ego.",
      firstPerson:
        "Una carta invertida nunca es una condena; suele ser el lugar exacto donde nuestra historia personal está pidiendo atención sin adornos. Al analizar cada detalle gráfico del mazo, desde una postura de manos hasta un objeto en segundo plano, buscamos devolverle al tarot su estatura original: un espejo lúcido para pensar mejor lo que nos pasa."
    }
  ];

  // Mapa rápido por ID
  const BY_ID = {};
  CONCILIO_TAROTISTAS.forEach(function (member) {
    BY_ID[member.id] = member;
  });

  // Asignación determinista pero equilibrada de Redactora + Revisora por carta
  function getPairForCard(cardId) {
    const key = String(cardId == null ? "0" : cardId);
    let seed = 0;
    for (let i = 0; i < key.length; i++) {
      seed = (seed * 31 + key.charCodeAt(i)) % 997;
    }
    const len = CONCILIO_TAROTISTAS.length;
    const primaryIdx = seed % len;
    let reviewerIdx = (seed + 2) % len;
    if (reviewerIdx === primaryIdx) {
      reviewerIdx = (primaryIdx + 1) % len;
    }
    return {
      author: CONCILIO_TAROTISTAS[primaryIdx],
      reviewer: CONCILIO_TAROTISTAS[reviewerIdx]
    };
  }

  function getById(id) {
    return BY_ID[String(id || "").toLowerCase()] || null;
  }

  function getProfileUrl(id) {
    return "sobre-nosotros.html#" + encodeURIComponent(String(id || ""));
  }

  global.CONCILIO_TAROTISTAS = CONCILIO_TAROTISTAS;
  global.TAROT_MASTERS = CONCILIO_TAROTISTAS; // Alias de compatibilidad
  global.ConcilioEditorial = {
    members: CONCILIO_TAROTISTAS,
    getAll: function () { return CONCILIO_TAROTISTAS.slice(); },
    getById: getById,
    getPairForCard: getPairForCard,
    getProfileUrl: getProfileUrl
  };
})(typeof window !== "undefined" ? window : globalThis);

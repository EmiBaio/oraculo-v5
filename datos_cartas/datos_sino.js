// ============================================================================
// ARCHIVO: datos_cartas/datos_sino.js
// BASE DE DATOS ORACULAR SÍ O NO (22 ARCANOS MAYORES • 44 ESTADOS LUZ/SOMBRA)
// + RESPALDO INTELIGENTE PARA LOS 56 ARCANOS MENORES
// + MOTOR DE BALANZA DE 1 Y 3 CARTAS + GUARDIÁN ANTI-COMPULSIÓN (SiNoOracleEngine)
// Compatible 100% con protocolo local file:/// y producción estática
// ============================================================================

(function initSiNoOracle(global) {
  const STORAGE_KEY = "velo_astral_sino_memory_v1";

  const SEAL_CATALOG = {
    YES_STRONG: {
      code: "YES_STRONG",
      weight: 2,
      label: "SÍ ROTUNDO",
      shortLabel: "Sí",
      badge: "Camino Despejado",
      tone: "emerald",
      hex: "#34d399",
      barPercent: 92,
      summaryLine: "Las fuerzas convergen a favor y el terreno acompaña tu movimiento."
    },
    YES_CONDITIONAL: {
      code: "YES_CONDITIONAL",
      weight: 1,
      label: "SÍ, CON CONDICIÓN",
      shortLabel: "Sí (Condicionado)",
      badge: "Viable con Ajuste",
      tone: "amber",
      hex: "#fbbf24",
      barPercent: 70,
      summaryLine: "La respuesta se inclina hacia el sí, pero exige un ajuste concreto de tu parte."
    },
    VEILED: {
      code: "VEILED",
      weight: 0,
      label: "VELADO / INCIERTO",
      shortLabel: "En Suspenso",
      badge: "Aún en Movimiento",
      tone: "purple",
      hex: "#c084fc",
      barPercent: 50,
      summaryLine: "El escenario todavía no decanta; forzar hoy una respuesta definitiva nublaría tu criterio."
    },
    NO_YET: {
      code: "NO_YET",
      weight: -1,
      label: "NO POR AHORA",
      shortLabel: "No Todavía",
      badge: "Freno o Demora Temporal",
      tone: "indigo",
      hex: "#818cf8",
      barPercent: 28,
      summaryLine: "No es un cierre eterno, pero hoy existen fricciones o tiempos inmaduros que desaconsejan avanzar."
    },
    NO_STRONG: {
      code: "NO_STRONG",
      weight: -2,
      label: "NO ROTUNDO",
      shortLabel: "No",
      badge: "Resistencia Clara",
      tone: "rose",
      hex: "#fb7185",
      barPercent: 8,
      summaryLine: "La balanza señala resistencia firme o un costo oculto que conviene evitar."
    }
  };

  const DOMAIN_CATALOG = {
    general: { id: "general", label: "General", sigil: "✦", promptHint: "Enfoque amplio sobre tu consulta" },
    love: { id: "love", label: "Amor", sigil: "♥", promptHint: "Vínculos, afecto y reciprocidad" },
    work: { id: "work", label: "Trabajo", sigil: "⚔", promptHint: "Oficio, proyectos y acuerdos laborales" },
    money: { id: "money", label: "Dinero", sigil: "◈", promptHint: "Ingresos, compras y patrimonio" },
    decision: { id: "decision", label: "Decisión", sigil: "♎", promptHint: "Elección concreta y cambio de rumbo" }
  };

  const TRIAD_SLOT_ROLES = [
    { key: "impulse", numeral: "I", label: "El Impulso", subtitle: "La energía que abre o empuja tu pregunta" },
    { key: "pivot", numeral: "II", label: "El Fiel de la Balanza", subtitle: "El factor decisivo: aliado oculto o condición clave" },
    { key: "outcome", numeral: "III", label: "El Desenlace", subtitle: "Hacia dónde cae el peso si actuás desde hoy" }
  ];

  const DATOS_SINO = {
  "0": {
    "name": "El Loco",
    "numeral": "0",
    "solar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, siempre que te animes a dar el paso sin esperar garantías perfectas.",
      "domains": {
        "general": "El camino está abierto para probar algo distinto a lo que venís haciendo. Funciona si soltás la necesidad de controlar cada detalle antes de empezar.",
        "love": "Sí para abrirte a una conexión fresca o renovar un vínculo desde la espontaneidad. No fuerces etiquetas definitivas hoy; dejá que la dinámica respire.",
        "work": "Sí para iniciar un proyecto nuevo, cambiar de enfoque o animarte a una propuesta fuera de tu molde habitual. Arranque ágil, aprendizaje sobre la marcha.",
        "money": "Sí para explorar una vía de ingreso distinta, pero con un tope claro de riesgo. No comprometas capital que necesitás para tu estabilidad básica.",
        "decision": "Inclinate por la opción que te saca de la inercia. El mayor error hoy sería quedarte quieto esperando una certeza absoluta que no va a llegar sola."
      },
      "forScale": "aporta apertura genuina, impulso fresco y margen para reinventar el escenario",
      "againstScale": "exige evitar la improvisación total y no saltar sin revisar el terreno mínimo",
      "keyAction": "Da un primer paso pequeño y reversible hoy mismo, sin esperar a tener el plan completo.",
      "timing": "Rápido e imprevisto: puede activarse en cuestión de días apenas te muevas."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: todavía hay más impulso o vértigo que preparación real.",
      "domains": {
        "general": "Hoy conviene frenar antes de saltar. Lo que parece una oportunidad liberadora todavía tiene cabos sueltos que podrían jugarte en contra.",
        "love": "No por ahora si buscás estabilidad inmediata. Hay miedo al compromiso o ganas de escapar de una conversación pendiente antes que construir de verdad.",
        "work": "No conviene lanzarte a ciegas ni renunciar por hartazgo sin red. Ordená los números y los pasos básicos antes de mover una ficha definitiva.",
        "money": "No por ahora. Riesgo alto de gasto impulsivo o cálculo apresurado; revisá la letra chica y dejá pasar unos días antes de poner plata.",
        "decision": "Postergá la jugada. Estás eligiendo desde la ansiedad de salir rápido de donde estás y no desde una dirección clara."
      },
      "forScale": "señala un deseo legítimo de libertad que solo necesita un poco más de tierra",
      "againstScale": "advierte imprudencia, dispersión o huida frente a una responsabilidad concreta",
      "keyAction": "Anotá en papel los tres riesgos concretos de avanzar hoy y resolvé al menos uno antes de decidir.",
      "timing": "Pausa breve: reevaluá la jugada en una o dos semanas con la cabeza fría."
    }
  },
  "1": {
    "name": "El Mago",
    "numeral": "I",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: tenés las herramientas, la lucidez y el impulso a favor.",
      "domains": {
        "general": "La respuesta es un sí firme porque el resultado depende directamente de tu iniciativa. No te falta nada afuera; alcanzará con ejecutar con enfoque.",
        "love": "Sí. Hay magnetismo, buena comunicación y capacidad para destrabar el vínculo si tomás la iniciativa con claridad y sin juegos ambiguos.",
        "work": "Sí rotundo. Momento ideal para presentar una propuesta, negociar condiciones o lanzar un proyecto propio donde se note tu oficio.",
        "money": "Sí. Buen pulso para generar ingresos nuevos usando habilidades que ya dominás; priorizá acción directa antes que seguir estudiando la teoría.",
        "decision": "Avanzá con convicción por la vía donde vos llevás el timón. Tu criterio hoy está afilado y responde bien a la práctica."
      },
      "forScale": "suma iniciativa, claridad mental y capacidad real de materializar resultados",
      "againstScale": "pide foco en un solo objetivo para no diluir la energía en demasiados frentes",
      "keyAction": "Tomá la iniciativa hoy con un mensaje, una llamada o el primer entregable concreto.",
      "timing": "Inmediato: se mueve al ritmo exacto en que vos ejecutes el primer movimiento."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: hay dispersión, dudas internas o promesas poco sólidas.",
      "domains": {
        "general": "Todavía no están alineadas la intención y la ejecución. Hay talento o interés, pero falta orden, honestidad o compromiso real con los hechos.",
        "love": "No por ahora. Desconfiá de discursos seductores que no coinciden con las acciones; alguien está ocultando inseguridad detrás de palabras bonitas.",
        "work": "No conviene cerrar el acuerdo así como está. Revisá si estás abarcando demasiado o si la contraparte promete más de lo que puede sostener.",
        "money": "No por ahora. Evitá atajos, ofertas demasiado brillantes o decisiones financieras tomadas sin verificar respaldo real.",
        "decision": "No fuerces el desenlace. Antes de elegir, separá los hechos comprobables de las suposiciones."
      },
      "forScale": "indica potencial latente que todavía puede recuperarse con disciplina",
      "againstScale": "frena el avance por dispersión, autoengaño o falta de transparencia",
      "keyAction": "Elegí una sola prioridad verificable y contrastá cada promesa con un hecho concreto.",
      "timing": "Demorado hasta que se despeje la confusión o se corrijan las condiciones."
    }
  },
  "2": {
    "name": "La Sacerdotisa",
    "numeral": "II",
    "solar": {
      "verdict": "VEILED",
      "weight": 0,
      "headline": "Velado por ahora: faltan piezas visibles y el silencio hoy vale más que la acción.",
      "domains": {
        "general": "El panorama todavía está detrás del velo. No es un no cerrado, pero forzar una definición hoy te haría decidir con la mitad de la información.",
        "love": "Incierto. Hay sentimientos profundos o silencios elocuentes que aún no salen a la superficie; observá los gestos sutiles en lugar de exigir respuestas.",
        "work": "En suspenso. Todavía se están moviendo variables tras bambalinas; guardá tus planes en reserva y reuní más datos antes de exponerte.",
        "money": "Velado. No firmes ni muevas montos importantes hoy; falta información clave que recién se verá clara en los próximos días.",
        "decision": "No decidas todavía. Tu intuición ya percibe un detalle que la lógica aún no termina de probar: dale tiempo para que salga a la luz."
      },
      "forScale": "aporta intuición fina, discreción estratégica y lectura profunda de lo no dicho",
      "againstScale": "mantiene el desenlace en suspenso porque todavía faltan datos decisivos",
      "keyAction": "Observá sin intervenir y reservá tus planes hasta que aparezca la información faltante.",
      "timing": "Lento y reservado: suele revelarse dentro de un ciclo lunar completo (2 a 4 semanas)."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: estás ignorando señales evidentes o esperando en vano.",
      "domains": {
        "general": "Algo que preferís no mirar está trabando la situación. Seguir esperando sin indagar ni poner límites solo estira la incertidumbre.",
        "love": "No por ahora. Hay secretos, falta de sinceridad o una idealización que te impide ver lo que ya te mostraron con hechos.",
        "work": "No conviene avanzar a ciegas. Preguntá de frente por condiciones ocultas, plazos o expectativas que quedaron sin aclarar.",
        "money": "No por ahora. Revisá gastos hormiga, comisiones ocultas o compromisos asumidos por impulso antes de comprometer más recursos.",
        "decision": "Descartá la salida pasiva. Necesitás contrastar tu sospecha con la realidad antes de seguir apostando tiempo."
      },
      "forScale": "empuja a sacar a la superficie una verdad incómoda pero liberadora",
      "againstScale": "marca opacidad, intuición desoída o bloqueo por guardar silencio de más",
      "keyAction": "Hacé la pregunta directa que venís esquivando y mirá los hechos sin justificarlos.",
      "timing": "Bloqueado hasta que salga a la luz lo que hoy permanece oculto."
    }
  },
  "3": {
    "name": "La Emperatriz",
    "numeral": "III",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: terreno fértil, crecimiento orgánico y prosperidad a favor.",
      "domains": {
        "general": "Un sí cálido y expansivo. Lo que estás consultando tiene condiciones reales para florecer si lo cuidás con constancia y disfrute.",
        "love": "Sí rotundo. Energía de afecto genuino, atracción, cercanía y cuidado mutuo; ideal para fortalecer el vínculo o abrirte a recibir.",
        "work": "Sí. Excelente clima para proyectos creativos, marcas propias, ventas y todo lo que requiera estética, trato humano y desarrollo sostenido.",
        "money": "Sí rotundo. Flujo favorable y potencial de abundancia si invertís en calidad y cuidás la rentabilidad a mediano plazo.",
        "decision": "Elegí lo que te nutre y tiene capacidad de crecer con el tiempo, no lo que te achica por miedo."
      },
      "forScale": "aporta fertilidad, abundancia material y una energía receptiva muy favorable",
      "againstScale": "requiere constancia para cuidar la semilla y no dar el fruto por garantizado",
      "keyAction": "Nutrí el proyecto o el vínculo con un gesto concreto de cuidado y calidad hoy.",
      "timing": "Crecimiento orgánico: señales claras en días, frutos sólidos en uno a tres meses."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: es viable si primero ordenás el desgaste o la sobreexigencia.",
      "domains": {
        "general": "El potencial sigue estando ahí, pero hoy aparece frenado por agotamiento, exceso de control o descuido hacia tus propias necesidades.",
        "love": "Sí, pero solo si dejás de dar de más para comprar calma. El vínculo mejora cuando ponés límites sanos y volvés a ocuparte de vos.",
        "work": "Sí, con ajuste. Hay bloqueo creativo o saturación de tareas; delegá lo secundario y recuperá foco antes de sumar nuevas cargas.",
        "money": "Sí, siempre que cortes fugas por complacencia o gastos emocionales. Primero ordená la caja, después expandí.",
        "decision": "Avanzá únicamente si la opción respeta tu energía y tu descanso. Si exige sacrificarte entero, renegociá."
      },
      "forScale": "conserva fertilidad de fondo y capacidad de recuperación si ajustás el ritmo",
      "againstScale": "muestra saturación, bloqueo creativo o exceso de entrega desequilibrada",
      "keyAction": "Recortá una obligación innecesaria hoy para devolverle aire a lo que de verdad importa.",
      "timing": "Lento al principio; se destraba en cuanto bajás el nivel de exigencia."
    }
  },
  "4": {
    "name": "El Emperador",
    "numeral": "IV",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: base firme, orden y respaldo real para consolidar.",
      "domains": {
        "general": "Sí firme y duradero. La situación responde muy bien a la disciplina, los límites claros y una estrategia sostenida sin improvisaciones.",
        "love": "Sí, sobre todo si buscás estabilidad, compromiso concreto y acuerdos claros. Menos palabras rimbombantes y más hechos consistentes.",
        "work": "Sí rotundo. Excelente momento para liderar, formalizar contratos, ordenar procesos o defender tu posición con autoridad serena.",
        "money": "Sí rotundo. Etapa propicia para consolidar patrimonio, estructurar presupuestos y cerrar tratos con respaldo formal.",
        "decision": "Elegí la opción más sólida y verificable. Hoy gana la estructura sobre el impulso."
      },
      "forScale": "aporta solidez, orden estructural y respaldo concreto a largo plazo",
      "againstScale": "exige método, límites nítidos y cero improvisación para sostenerse",
      "keyAction": "Poné reglas, plazos o condiciones por escrito hoy para blindar tu posición.",
      "timing": "Firme y previsible: avanza por etapas claras dentro de las próximas semanas."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: hay rigidez excesiva, lucha de poder o falta de estructura.",
      "domains": {
        "general": "El camino hoy choca contra un muro de terquedad o contra un desorden base que todavía no se corrigió. Forzar por imposición va a salir mal.",
        "love": "No por ahora. Hay orgullo, necesidad de tener razón o control excesivo enfriando el vínculo; sin flexibilidad no hay encuentro real.",
        "work": "No conviene avanzar así. Posible choque con jefaturas, burocracia pesada o falta de planificación mínima para sostener el objetivo.",
        "money": "No por ahora. Evitá compromisos rígidos, deudas pesadas o acuerdos donde otra parte concentre todo el poder de decisión.",
        "decision": "Frená antes de imponer tu voluntad. Revisá si el bloqueo viene de afuera o de tu propia inflexibilidad."
      },
      "forScale": "obliga a corregir fallas de base antes de construir en falso",
      "againstScale": "introduce rigidez, luchas de ego o desorganización que traban el resultado",
      "keyAction": "Detectá dónde estás forzando el control y abrí una instancia real de ajuste o revisión.",
      "timing": "Trabado a corto plazo; recién se libera cuando cambian las reglas del juego."
    }
  },
  "5": {
    "name": "El Hierofante",
    "numeral": "V",
    "solar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: funciona si seguís el método probado y acuerdos transparentes.",
      "domains": {
        "general": "Sí, siempre que respetes el proceso correcto, pidas consejo a quien sabe y evites atajos dudosos. La seriedad abre puertas.",
        "love": "Sí para vínculos honestos, valores compartidos y compromisos claros. No sirve para medias tintas ni historias ocultas.",
        "work": "Sí, especialmente en trámites formales, formación, certificaciones o acuerdos dentro de marcos establecidos y confiables.",
        "money": "Sí bajo estrategias conservadoras y ordenadas. Priorizá seguridad, cumplimiento legal y asesoramiento serio antes que apuestas arriesgadas.",
        "decision": "Elegí la vía recta y respaldada por experiencia comprobada. Hoy lo clásico supera a lo experimental."
      },
      "forScale": "aporta respaldo formal, criterio probado y acuerdos confiables",
      "againstScale": "condiciona el éxito a respetar normas, tiempos institucionales y ética clara",
      "keyAction": "Consultá a una persona con experiencia real en el tema y seguí el paso a paso sin saltearte etapas.",
      "timing": "Moderado: acompaña tiempos formales, trámites o ciclos de aprendizaje."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: el molde tradicional que estás intentando seguir ya quedó chico.",
      "domains": {
        "general": "Hacer esto solo por mandato, costumbre o para conformar a otros te va a dejar insatisfecho. Conviene cuestionar el guion antes de aceptar.",
        "love": "No por ahora si el vínculo se sostiene por rutina, apariencia o presión externa más que por deseo auténtico.",
        "work": "No conviene encajar a la fuerza en una estructura rígida que choca con tu criterio. Buscá un formato propio o negociá autonomía.",
        "money": "No por ahora. Cuidado con repetir una fórmula financiera vieja que ya no rinde en el contexto actual.",
        "decision": "No decidas para quedar bien. Revisá qué parte de esta duda responde a expectativas ajenas."
      },
      "forScale": "despierta criterio propio para romper moldes que ya no sirven",
      "againstScale": "choca contra dogmas, burocracia obsoleta o mandatos que te restan autenticidad",
      "keyAction": "Identificá qué regla estás obedeciendo por inercia y diseñá una alternativa acorde a tu realidad.",
      "timing": "Requiere replanteo previo; no conviene apresurar definiciones esta semana."
    }
  },
  "6": {
    "name": "Los Enamorados",
    "numeral": "VI",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: hay afinidad genuina y la elección se alinea con tus valores.",
      "domains": {
        "general": "Sí claro y armónico, siempre que elijas con el corazón despierto y sin medias tintas. La unión de voluntades multiplica el resultado.",
        "love": "Sí rotundo. Fuerte sintonía afectiva, reciprocidad y deseo mutuo de encontrarse en un plano honesto.",
        "work": "Sí. Muy favorable para sociedades, colaboraciones creativas o elegir un proyecto que realmente te entusiasma.",
        "money": "Sí para alianzas bien equilibradas y compras o inversiones coherentes con tus prioridades reales.",
        "decision": "Elegí con convicción lo que resuena con tus valores, sabiendo que decir sí a esto implica soltar la otra alternativa."
      },
      "forScale": "aporta sintonía, alianza genuina y alineación entre deseo y valores",
      "againstScale": "exige compromiso real con la elección tomada sin mirar de reojo la otra puerta",
      "keyAction": "Definí tu elección sin ambigüedades y comunicáselo con honestidad a la otra parte.",
      "timing": "Cercano: el punto de encuentro aparece pronto una vez que tomás postura."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: hay ambivalencia, ruido interno o valores desalineados.",
      "domains": {
        "general": "Todavía estás dividido entre dos deseos opuestos o tratando de sostener un acuerdo donde las prioridades no coinciden.",
        "love": "No por ahora. Hay dudas, tira y afloje o falta de reciprocidad clara; no avances hasta ver coherencia sostenida.",
        "work": "No conviene asociarte ni aceptar propuestas que te generan ruido ético o incomodidad desde el primer día.",
        "money": "No por ahora. Evitá gastos compartidos o acuerdos económicos con personas que no comparten tu nivel de responsabilidad.",
        "decision": "No elijas bajo presión. Primero resolvé la contradicción interna que te hace oscilar."
      },
      "forScale": "invita a revisar tus prioridades reales antes de atarte a un compromiso",
      "againstScale": "marca indecisión, desalineación de valores o falta de reciprocidad",
      "keyAction": "Escribí qué no estás dispuesto a negociar y verificá si esta opción lo cumple.",
      "timing": "Detenido hasta que se defina la postura de ambas partes."
    }
  },
  "7": {
    "name": "El Carro",
    "numeral": "VII",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: avance veloz y victoria si mantenés las riendas firmes.",
      "domains": {
        "general": "Sí decidido y en movimiento. Los obstáculos ceden ante tu determinación si sostenés el rumbo sin distraerte en el camino.",
        "love": "Sí, siempre que haya dirección clara y voluntad de avanzar juntos. Buen momento para destrabar distancias o dar un paso concreto.",
        "work": "Sí rotundo. Impulso fuerte para cerrar metas, ganar terreno frente a competidores o concretar un cambio laboral o viaje.",
        "money": "Sí. Tendencia positiva ligada al esfuerzo directo, las ventas activas y la capacidad de ejecutar rápido.",
        "decision": "Acelerá por la opción que depende de tu empuje. Quedarse analizando de más te haría perder la ola."
      },
      "forScale": "empuja con velocidad, determinación y capacidad de superar obstáculos",
      "againstScale": "pide mantener el timón firme para no perder precisión por exceso de apuro",
      "keyAction": "Fijá un objetivo concreto para los próximos siete días y avanzá sin dispersarte.",
      "timing": "Muy rápido: movimientos visibles en cuestión de días o pocas semanas."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: fuerzas opuestas están frenando la marcha o desviando el rumbo.",
      "domains": {
        "general": "Empujar más fuerte hoy solo va a recalentar el motor. Primero necesitás alinear dirección, ritmo y recursos antes de volver a acelerar.",
        "love": "No por ahora. Cada uno está tirando a un ritmo distinto o intentando forzar tiempos que el otro no acompaña.",
        "work": "No conviene apurar lanzamientos ni peleas hoy; posibles demoras logísticas o objetivos mal definidos que requieren recalibrar.",
        "money": "No por ahora. Frená movimientos impulsivos y revisá imprevistos técnicos o gastos de movilidad y logística.",
        "decision": "Levantá el pie del acelerador. Corregir el mapa hoy te ahorra un desvío costoso mañana."
      },
      "forScale": "sirve como alerta oportuna para corregir el rumbo antes de chocar",
      "againstScale": "señala pérdida de tracción, impaciencia o tironeo en sentidos contrarios",
      "keyAction": "Detené la marcha un día, eliminá una fricción concreta y recién ahí retomá el impulso.",
      "timing": "Con demoras temporales; se destraba al reordenar prioridades."
    }
  },
  "8": {
    "name": "La Fuerza",
    "numeral": "VIII",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: tu temple sereno y constancia pueden con esta situación.",
      "domains": {
        "general": "Sí firme, sostenido no por la fuerza bruta sino por el dominio emocional y la paciencia inteligente. Tenés más espalda de la que creés.",
        "love": "Sí. Hay pasión viva combinada con madurez y ternura; excelente carta para sanar asperezas desde la calma y el respeto.",
        "work": "Sí rotundo. Vas a imponerte por constancia, tacto y resistencia frente a un desafío exigente o una negociación delicada.",
        "money": "Sí. Progreso sostenido gracias a la disciplina y al control de impulsos; evitá decisiones nerviosas y seguí tu plan.",
        "decision": "Elegí el camino que exige valentía tranquila. No huyas de una conversación o reto que podés manejar con aplomo."
      },
      "forScale": "aporta templanza, coraje sereno y resistencia para sostener el proceso",
      "againstScale": "exige paciencia y dominio emocional en lugar de reacciones impulsivas",
      "keyAction": "Actuá con firmeza y tono calmo, sosteniendo tu postura sin levantar la voz ni ceder por ansiedad.",
      "timing": "Constante y progresivo: se consolida a lo largo de las próximas semanas."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: es alcanzable si primero recuperás energía y confianza propia.",
      "domains": {
        "general": "La puerta no está cerrada, pero hoy te pesa el cansancio o la duda sobre tu propia valía. Descansar y ordenar el ánimo cambia el resultado.",
        "love": "Sí, pero solo si dejás de reaccionar desde el miedo al rechazo o los celos. Hablá desde la vulnerabilidad honesta, no desde la defensa.",
        "work": "Sí, con pausa previa. El desgaste acumulado te hace dudar de tu capacidad; delegá o tomá aire antes de encarar el tramo fuerte.",
        "money": "Sí, siempre que no compres ni vendas desde el nerviosismo. Recuperá calma antes de negociar precios o condiciones.",
        "decision": "No te subestimes ni decidas exhausto. Dormí bien, ordená la cabeza y recién ahí mové la ficha."
      },
      "forScale": "mantiene la capacidad real de lograrlo una vez que recuperás tu centro",
      "againstScale": "advierte agotamiento, inseguridad momentánea o reactividad emocional",
      "keyAction": "Priorizá recuperar descanso físico y claridad hoy antes de enfrentar la conversación clave.",
      "timing": "Se destraba en cuanto baja la tensión interna, en cuestión de días."
    }
  },
  "9": {
    "name": "El Ermitaño",
    "numeral": "IX",
    "solar": {
      "verdict": "VEILED",
      "weight": 0,
      "headline": "Velado: es momento de retiro, análisis propio y silencio antes de responder.",
      "domains": {
        "general": "La carta no cierra ni empuja: te pide bajar el ruido externo y tomarte un tiempo honesto para escuchar tu propio criterio.",
        "love": "En pausa reflexiva. Necesitás claridad personal sobre qué buscás realmente antes de dar un sí o exigir definiciones afuera.",
        "work": "Velado. Fase ideal para investigar a fondo, pulir un proyecto en privado o perfeccionar tu oficio antes de salir a mostrarlo.",
        "money": "Cautela prudente. Revisá tus cuentas en silencio y postergá decisiones grandes hasta terminar tu propio diagnóstico.",
        "decision": "No respondas hoy por presión ajena. El tiempo a solas te va a dar una respuesta mucho más limpia."
      },
      "forScale": "aporta lucidez solitaria, prudencia y criterio propio inmune al ruido",
      "againstScale": "demora definiciones rápidas porque exige reflexión profunda previa",
      "keyAction": "Regalate un espacio sin pantallas ni opiniones ajenas para escribir qué querés vos realmente.",
      "timing": "Lento y maduro: pide varias semanas de decantación consciente."
    },
    "lunar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: el encierro, la terquedad o el miedo te están aislando de la salida.",
      "domains": {
        "general": "No conviene seguir por esta vía solitaria y defensiva. Aislarte para evitar decepciones solo endurece el problema.",
        "love": "No. Hay frialdad emocional, distancia sostenida o alguien cerrado a recibir afecto genuino.",
        "work": "No por este camino cerrado. Negarte a pedir ayuda, actualizar métodos o escuchar devoluciones está frenando tu avance.",
        "money": "No. El miedo excesivo a mover un peso o el aislamiento comercial te están dejando afuera de mejores alternativas.",
        "decision": "Descartá la opción que te encierra todavía más. Abrí la ventana y contrastá tu mirada con alguien de confianza."
      },
      "forScale": "revela dónde una coraza vieja ya dejó de protegerte y empezó a frenarte",
      "againstScale": "pesa fuerte en contra por aislamiento, terquedad o desconexión emocional",
      "keyAction": "Rompé el encierro hoy compartiendo tu duda con una persona sensata que te diga la verdad.",
      "timing": "Estancado mientras persista la cerrazón."
    }
  },
  "10": {
    "name": "La Rueda de la Fortuna",
    "numeral": "X",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: el ciclo gira a tu favor y abre una ventana oportuna.",
      "domains": {
        "general": "Sí claro y dinámico. Las circunstancias externas empiezan a acomodarse a tu favor; aprovechá el envión sin quedarte dudando.",
        "love": "Sí. Giro positivo, reencuentro inesperado o cambio de dinámica que saca al vínculo del estancamiento.",
        "work": "Sí rotundo. Aparece una oportunidad a buen tiempo, un contacto clave o un cambio de escenario que te conviene tomar.",
        "money": "Sí. Mejora en el flujo, entrada oportuna o chance favorable si sabés capitalizar el momento con inteligencia.",
        "decision": "Aceptá el movimiento. Esta puerta tiene ventana de tiempo: conviene cruzarla mientras la rueda gira arriba."
      },
      "forScale": "inclina la balanza con sincronía, giro favorable y buen timing externo",
      "againstScale": "recuerda que los ciclos cambian y conviene aprovechar la ventana a tiempo",
      "keyAction": "Tomá la oportunidad apenas aparezca, sin esperar condiciones eternas.",
      "timing": "Acelerado y sincrónico: cambios notorios en días o dentro del mes."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: el viento está cruzado y forzar hoy solo desgasta.",
      "domains": {
        "general": "El momento externo todavía no acompaña o estás repitiendo un patrón viejo esperando un resultado distinto. Esperá a que pase la turbulencia.",
        "love": "No por ahora. Dinámica cíclica que repite el mismo tropiezo; hasta que no cambie la respuesta, volverá a pasar lo mismo.",
        "work": "No conviene forzar cierres hoy. Imprevistos ajenos a tu control retrasan la jugada; usá la pausa para ajustar el plan.",
        "money": "No por ahora. Volatilidad o gastos inesperados desaconsejan arriesgar capital en este tramo.",
        "decision": "No apuestes al azar hoy. Protegé tu base y dejá que el ciclo decante antes de volver a intentar."
      },
      "forScale": "te muestra el patrón repetido para que puedas romperlo de una vez",
      "againstScale": "añade viento en contra, retrasos externos o repetición de viejos ciclos",
      "keyAction": "Identificá qué patrón estás repitiendo y hacé al menos un ajuste distinto antes de reintentar.",
      "timing": "Inestable a corto plazo; conviene volver a evaluar cuando pase el mes."
    }
  },
  "11": {
    "name": "La Justicia",
    "numeral": "XI",
    "solar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: prospera si los hechos, cuentas y acuerdos son totalmente justos.",
      "domains": {
        "general": "Sí, en la exacta medida en que todo esté en regla y seas honesto con vos mismo. Lo que tiene sustento real sale a favor.",
        "love": "Sí si existe reciprocidad real y cuentas claras. Si uno da todo y el otro especula, la balanza va a pedir equilibrio.",
        "work": "Sí para contratos, evaluaciones, trámites o reclamos legítimos donde tenés documentación y argumentos sólidos.",
        "money": "Sí siempre que los números cierren con transparencia. Revisá impuestos, márgenes y cláusulas antes de firmar.",
        "decision": "Decidí con cabeza fría y criterio objetivo, poniendo hechos comprobables por encima de la emoción del momento."
      },
      "forScale": "aporta equidad, claridad objetiva y resolución favorable a lo bien hecho",
      "againstScale": "exige transparencia absoluta y equilibrio real entre lo que se da y se recibe",
      "keyAction": "Revisá los hechos y números fríos sin adornos; si la cuenta es justa, avanzá.",
      "timing": "Ordenado y formal: se resuelve al ritmo de acuerdos, plazos o trámites concretos."
    },
    "lunar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: hay desequilibrio, sesgo o condiciones desfavorables para vos.",
      "domains": {
        "general": "La balanza está torcida. Avanzar ahora implicaría aceptar un trato injusto o evitar una verdad que tarde o temprano pasa factura.",
        "love": "No. Falta de reciprocidad evidente, promesas incumplidas o una dinámica donde solo vos cargás con el costo emocional.",
        "work": "No firmes ni aceptes esas condiciones. Hay letra chica desfavorable, carga desproporcionada o falta de reconocimiento real.",
        "money": "No rotundo. Riesgo de pérdida por desorden contable, acuerdo desequilibrado o falta de respaldo legal.",
        "decision": "Rechazá cualquier trato que no aguante una revisión honesta a plena luz del día."
      },
      "forScale": "te protege evitando que firmes o aceptes un escenario desparejo",
      "againstScale": "marca asimetría clara, injusticia o evasión de responsabilidades",
      "keyAction": "Detené el trato y exigí condiciones claras y simétricas antes de dar un solo paso más.",
      "timing": "Desfavorable ahora; solo cambia si se renegocian los términos de raíz."
    }
  },
  "12": {
    "name": "El Colgado",
    "numeral": "XII",
    "solar": {
      "verdict": "VEILED",
      "weight": 0,
      "headline": "Velado: pausa obligada para cambiar de perspectiva; forzar hoy traba todo.",
      "domains": {
        "general": "Ni avance rápido ni cierre definitivo: la situación está suspendida a propósito para que mires el problema desde otro ángulo.",
        "love": "En suspenso. No es momento de presionar respuestas ni de cortar en caliente; observá qué te está enseñando esta espera.",
        "work": "Pausa temporal. Un proceso depende de tiempos ajenos o requiere replantear la estrategia antes de seguir invirtiendo esfuerzo.",
        "money": "En espera. Evitá liquidar posiciones por impaciencia o asumir gastos nuevos hasta que se destrabe lo pendiente.",
        "decision": "No elijas todavía. Dar vuelta tu punto de vista hoy revela una tercera opción que antes no veías."
      },
      "forScale": "aporta una pausa lúcida que evita errores por apuro y abre otra perspectiva",
      "againstScale": "mantiene el resultado en espera e impide resoluciones inmediatas",
      "keyAction": "Dejá de empujar durante unos días y mirá el asunto poniéndote en el lugar opuesto.",
      "timing": "Suspendido: requiere paciencia durante varias semanas hasta que ceda la traba."
    },
    "lunar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: seguir sosteniendo esta espera es un sacrificio inútil.",
      "domains": {
        "general": "No. Estás quemando tiempo y energía en una situación que ya demostró que no se mueve sola. Soltar es la única salida sana.",
        "love": "No. Estás postergando tu propia vida a la espera de un cambio ajeno que no llega ni da señales reales.",
        "work": "No conviene seguir esperando promesas postergadas en el mismo lugar. Empezá a activar alternativas concretas hoy.",
        "money": "No. Dejá de inyectar plata o tiempo en un frente estancado solo por no asumir la pérdida a tiempo.",
        "decision": "Cortá la inercia. Elegir seguir igual hoy tiene un costo más alto que cambiar."
      },
      "forScale": "te da el golpe de realidad necesario para bajar de una espera estéril",
      "againstScale": "expone estancamiento crónico, resignación o sacrificio sin retorno",
      "keyAction": "Dejá de esperar una señal externa y cerrá hoy mismo el frente que te tiene frenado.",
      "timing": "Bloqueado sin fecha mientras no sueltes la postura actual."
    }
  },
  "13": {
    "name": "La Muerte",
    "numeral": "XIII",
    "solar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No en su forma actual: primero hay que cerrar el ciclo viejo para que nazca otra cosa.",
      "domains": {
        "general": "La respuesta es no a continuar como venías, pero sí a una transformación profunda. Algo tiene que terminar de verdad para despejar el terreno.",
        "love": "No a repetir el formato anterior del vínculo. O se renueva de raíz con reglas nuevas, o conviene despedirse con dignidad.",
        "work": "No para prolongar una etapa agotada; sí para cerrar ese capítulo y pasar a un proyecto completamente distinto.",
        "money": "No a sostener gastos o modelos que ya cumplieron su ciclo. Recortá lo obsoleto para liberar recursos frescos.",
        "decision": "Elegí el corte limpio. Sostener a medias lo que ya terminó bloquea lo nuevo que intenta entrar."
      },
      "forScale": "limpia el terreno con un cierre honesto que habilita una etapa nueva",
      "againstScale": "impide continuar en el formato actual y exige despedirse de lo vencido",
      "keyAction": "Definí qué parte de esta situación ya caducó y cerrala hoy sin dejar puertas entreabiertas.",
      "timing": "Transición marcada: cierre definitivo ahora, brote nuevo en los próximos meses."
    },
    "lunar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: aferrarse a lo que ya terminó solo prolonga el desgaste.",
      "domains": {
        "general": "No. Resistir un final evidente te quita paz y te mantiene atado a un escenario sin futuro real.",
        "love": "No rotundo. El apego al recuerdo o el miedo a estar solo están sosteniendo un vínculo que ya no respira.",
        "work": "No. Postergar una salida o un cambio inevitable solo empeora las condiciones con el paso del tiempo.",
        "money": "No. Cortá cuanto antes una fuga constante o un compromiso que ya demostró no ser viable.",
        "decision": "No mires para atrás. Aceptar el final hoy es la única forma de recuperar iniciativa."
      },
      "forScale": "evidencia que el miedo al cambio es el único verdadero obstáculo",
      "againstScale": "pesa en contra por apego al pasado, estancamiento y resistencia a soltar",
      "keyAction": "Dejá de reanimar lo que ya se apagó y destiná esa energía a un objetivo nuevo.",
      "timing": "Cerrado; el alivio recién llega cuando aceptás dar vuelta la página."
    }
  },
  "14": {
    "name": "La Templanza",
    "numeral": "XIV",
    "solar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: llega bien si respetás el paso gradual y la medida justa.",
      "domains": {
        "general": "Sí armónico y estable, a condición de no apurar los tiempos ni caer en extremos. La combinación paciente de factores da resultado.",
        "love": "Sí. Clima de reconciliación serena, diálogo maduro y entendimiento mutuo si se evita la ansiedad por quemar etapas.",
        "work": "Sí para procesos colaborativos, acuerdos intermedios y proyectos que crecen combinando distintas habilidades con calma.",
        "money": "Sí bajo administración equilibrada: ahorrar, diversificar y avanzar sin jugadas bruscas ni deudas innecesarias.",
        "decision": "Buscá el punto medio inteligente. No hace falta elegir todo o nada cuando podés integrar lo mejor de ambos lados."
      },
      "forScale": "aporta armonía, sanación gradual y equilibrio sostenible entre opuestos",
      "againstScale": "exige paciencia y moderación; la ansiedad arruinaría la mezcla",
      "keyAction": "Avanzá un paso medido hoy sin exigir resultados instantáneos.",
      "timing": "Gradual y constante: se consolida con serenidad en semanas o pocos meses."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: hay impaciencia, exceso o una mezcla que hoy no encaja.",
      "domains": {
        "general": "El desequilibrio actual hace que las piezas choquen en lugar de integrarse. Bajá un cambio antes de tomar compromisos.",
        "love": "No por ahora. Hay altibajos emocionales, reproches acumulados o ritmos incompatibles que necesitan enfriarse primero.",
        "work": "No conviene forzar acuerdos apresurados ni mezclar proyectos incompatibles por ansiedad de resultados.",
        "money": "No por ahora. Cortá extremos entre gasto impulsivo y restricción agobiante; ordená primero tu presupuesto base.",
        "decision": "Postergá la jugada hasta recuperar calma. Decidir desde el apuro hoy te lleva a un extremo innecesario."
      },
      "forScale": "te avisa a tiempo para reequilibrar antes de quemar recursos",
      "againstScale": "introduce impaciencia, fricción interna y falta de proporción",
      "keyAction": "Frená cualquier reacción en caliente durante 48 horas y volvé a mirar la proporción real.",
      "timing": "Necesita enfriamiento; reevaluá recién cuando baje el apuro."
    }
  },
  "15": {
    "name": "El Diablo",
    "numeral": "XV",
    "solar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: hay atadura, tentación engañosa o un costo oculto demasiado alto.",
      "domains": {
        "general": "No conviene entrar ahí. Aunque la propuesta seduzca a corto plazo, esconde dependencia, desgaste o pérdida de libertad real.",
        "love": "No si buscás paz y reciprocidad. Hay atracción intensa pero mezclada con control, celos o dinámica tóxica difícil de soltar.",
        "work": "No a tratos abusivos o trabajos que pagan en prestigio pero te consumen la salud y la autonomía.",
        "money": "No rotundo a deudas caras, promesas de ganancia fácil o compromisos donde cedés demasiado margen.",
        "decision": "Descartá lo que te seduce desde la urgencia o la carencia. Preguntate qué cadena estarías firmando."
      },
      "forScale": "enciende una alarma nítida sobre ambición y deseo que piden límites firmes",
      "againstScale": "pesa fuerte en contra por apego, tentación trampa o costo oculto",
      "keyAction": "Decí no a la gratificación inmediata hoy y protegé tu independencia.",
      "timing": "Inmediato como tentación, pero caro a mediano plazo; mejor esquivarlo."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: luz verde para liberarte de una atadura y recuperar el mando.",
      "domains": {
        "general": "Sí si tu pregunta apunta a cortar un mal hábito, salir de un vínculo asfixiante o recuperar tu autonomía. No para volver a caer en el mismo lazo.",
        "love": "Sí para sincerar límites y soltar dinámicas de dependencia; la relación solo sobrevive si cambia la raíz del control.",
        "work": "Sí para despegar de un entorno tóxico o renegociar condiciones abusivas con firmeza.",
        "money": "Sí para cancelar deudas, cortar gastos compulsivos y ordenar tus cuentas con autonomía.",
        "decision": "Elegí la puerta que te devuelve libertad real, aunque al principio dé un poco de vértigo."
      },
      "forScale": "aporta fuerza de ruptura sana y lucidez para soltar cadenas viejas",
      "againstScale": "advierte que una pequeña recaída en la costumbre vieja puede frenar la salida",
      "keyAction": "Cortá hoy mismo un vínculo, gasto o hábito que sabés que te quita libertad.",
      "timing": "Alivio inmediato en cuanto ejecutás el corte concreto."
    }
  },
  "16": {
    "name": "La Torre",
    "numeral": "XVI",
    "solar": {
      "verdict": "NO_STRONG",
      "weight": -2,
      "headline": "No rotundo: los cimientos son frágiles y la verdad está a punto de salir a la luz.",
      "domains": {
        "general": "No construyas encima de esta estructura. Hay una grieta real que va a sacudir el escenario; mejor aceptar la verdad ahora que caer después.",
        "love": "No. La situación actual no se sostiene con parches; hace falta una sinceridad brusca que derrumbe lo falso.",
        "work": "No conviene apostar a ese esquema inestable. Preparate para un cambio imprevisto y tené un plan propio a mano.",
        "money": "No rotundo. Riesgo serio de pérdida o imprevisto brusco si invertís en algo sin respaldo sólido.",
        "decision": "No sigas defendiendo una estructura rota. Soltar a tiempo reduce el golpe y te deja libre para reconstruir."
      },
      "forScale": "destruye una ilusión peligrosa para que puedas reconstruir sobre verdad",
      "againstScale": "señala fragilidad severa, ruptura abrupta o riesgo alto de derrumbe",
      "keyAction": "Asegurá tus respaldos hoy y dejá de tapar una falla que ya es evidente.",
      "timing": "Súbito e imprevisto: puede precipitarse rápido si se sigue ignorando."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: estás postergando un cambio inevitable por miedo al sacudón.",
      "domains": {
        "general": "Todavía se puede amortiguar el golpe si actuás con honestidad antes de que la presión reviente sola. No es momento de avanzar sin reparar la base.",
        "love": "No por ahora. Hay tensiones guardadas debajo de la alfombra que necesitan conversación directa antes de proyectar nada nuevo.",
        "work": "No avances con el plan actual sin corregir sus puntos débiles; un ajuste preventivo hoy evita una crisis mayor.",
        "money": "No por ahora. Armá fondo de resguardo y saneá pendientes antes de asumir compromisos nuevos.",
        "decision": "Hacé la reforma difícil de manera controlada en lugar de esperar a que las circunstancias te obliguen."
      },
      "forScale": "permite hacer una demolición controlada y evitar un daño mayor",
      "againstScale": "advierte crisis contenida y resistencia a sincerar fallas estructurales",
      "keyAction": "Blanqueá hoy el problema principal que venís evitando y empezá a desmontarlo en orden.",
      "timing": "Corto plazo: cuanto antes hagas el ajuste, más rápido pasa la tormenta."
    }
  },
  "17": {
    "name": "La Estrella",
    "numeral": "XVII",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: claridad, alivio y un horizonte limpio que inspira confianza.",
      "domains": {
        "general": "Un sí sereno y luminoso. Después de la tensión pasada, las cosas se alinean con transparencia y te devuelven esperanza con base real.",
        "love": "Sí rotundo. Vínculo honesto, sanador y sin máscaras; clima ideal para confiar y proyectar a futuro.",
        "work": "Sí. Excelente momento para proyectos con propósito auténtico, visibilidad limpia y alianzas de buena fe.",
        "money": "Sí. Recuperación tranquila y sostenida; el panorama mejora con constancia y decisiones limpias.",
        "decision": "Seguí la opción que te da paz en el pecho y coherencia a largo plazo. Vas bien encaminado."
      },
      "forScale": "aporta claridad, renovación emocional y un norte limpio a largo plazo",
      "againstScale": "pide sostener la fe práctica sin apurar un proceso que crece con suavidad",
      "keyAction": "Comprometete hoy con el paso más auténtico y dejá atrás la desconfianza vieja.",
      "timing": "Sereno y sostenido: alivio cercano y consolidación a lo largo de los próximos meses."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: el camino sigue abierto, pero primero necesitás salir del desánimo.",
      "domains": {
        "general": "La oportunidad sigue disponible, pero el desencanto reciente te hace mirarla con escepticismo excesivo. Recuperar confianza destraba el paso.",
        "love": "Sí, siempre que no le cobres a esta persona heridas de historias anteriores. Bajá la guardia de a poco.",
        "work": "Sí, con ajuste de expectativas. No abandones una buena idea solo porque no dio frutos inmediatos en el primer intento.",
        "money": "Sí, pero sin esperar golpes de suerte: combiná optimismo realista con constancia diaria.",
        "decision": "No descartes una buena opción por pesimismo pasajero; revisala con ojos frescos."
      },
      "forScale": "mantiene una salida luminosa intacta detrás del cansancio momentáneo",
      "againstScale": "muestra desánimo, desgaste emocional o desconfianza exagerada",
      "keyAction": "Reconectá hoy con el motivo original que te entusiasmó y da un paso concreto sin cinismo.",
      "timing": "Mejora progresiva en cuanto soltás el desaliento."
    }
  },
  "18": {
    "name": "La Luna",
    "numeral": "XVIII",
    "solar": {
      "verdict": "VEILED",
      "weight": 0,
      "headline": "Velado: hay niebla, suposiciones y emociones cruzadas que distorsionan la vista.",
      "domains": {
        "general": "Todavía no ves el cuadro completo. Entre miedos propios y señales ambiguas de afuera, decidir hoy sería caminar a oscuras.",
        "love": "Incierto. Hay malentendidos, celos o proyecciones sin comprobar; no saques conclusiones definitivas sin hablar cara a cara.",
        "work": "Velado. Falta transparencia en alcances, pagos o intenciones; pedí precisiones concretas antes de comprometerte.",
        "money": "Incierto. No inviertas ni prestes plata hoy; hay datos incompletos o promesas difusas que requieren verificación.",
        "decision": "Esperá a que se disipe la niebla. Diferenciá lo que realmente pasó de la película que armó tu ansiedad."
      },
      "forScale": "despierta sensibilidad profunda e instinto para detectar lo que no cierra",
      "againstScale": "nubla la visión con confusión, miedo o información incompleta",
      "keyAction": "Verificá un hecho concreto hoy y no decidas nada importante guiado solo por sospechas.",
      "timing": "Difuso: se aclara de forma gradual cuando termina el ciclo lunar actual."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: la niebla se despeja y la verdad queda visible si te animás a mirarla.",
      "domains": {
        "general": "Empieza a aclararse lo que te tenía inquieto. El resultado es favorable siempre que elijas actuar con hechos transparentes y sin rodeos.",
        "love": "Sí si se animan a tener la charla sincera que despeja malentendidos. Lo oculto sale a la luz para ordenar el vínculo.",
        "work": "Sí una vez aclarada la confusión técnica o de roles; buen momento para corregir un error a tiempo.",
        "money": "Sí tras auditar números reales y descartar suposiciones optimistas sin base.",
        "decision": "Avanzá apoyándote en la verdad que acaba de revelarse, sin volver a encerrarte en dudas."
      },
      "forScale": "aporta revelación oportuna y salida progresiva de la confusión",
      "againstScale": "exige sostener la claridad sin volver a alimentar miedos imaginarios",
      "keyAction": "Aclará el malentendido en una conversación breve y directa hoy mismo.",
      "timing": "Cercano: la claridad llega en los próximos días."
    }
  },
  "19": {
    "name": "El Sol",
    "numeral": "XIX",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: luz plena, transparencia y éxito claro en lo que consultás.",
      "domains": {
        "general": "Es el sí más luminoso del mazo. Todo está visible, genuino y a tu favor para avanzar con alegría y seguridad.",
        "love": "Sí rotundo. Calidez, sinceridad total, disfrute compartido y una etapa muy vital para el afecto.",
        "work": "Sí rotundo. Reconocimiento merecido, visibilidad positiva y resultados concretos que validan tu trabajo.",
        "money": "Sí rotundo. Panorama claro y próspero; buenos cierres, acuerdos limpios y mejora palpable.",
        "decision": "Avanzá sin dudar por el camino abierto y transparente. No hace falta complicar lo que ya brilla."
      },
      "forScale": "irradia éxito claro, verdad sin sombras y vitalidad a favor",
      "againstScale": "solo pide sostener la sencillez y no complicar lo evidente",
      "keyAction": "Mostrá tu propuesta, tu afecto o tu decisión a plena luz hoy mismo.",
      "timing": "Rápido y visible: resultados concretos en el corto plazo."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: el resultado es bueno, pero llega con demora o pide bajar el orgullo.",
      "domains": {
        "general": "La luz no se apagó; solo está momentáneamente tapada por cansancio, expectativas exageradas o necesidad de reconocimiento inmediato.",
        "love": "Sí, siempre que dejen de competir por quién brilla o tiene razón. La calidez vuelve apenas baja el ego.",
        "work": "Sí, aunque el reconocimiento o la respuesta demoren un poco más de lo previsto. Seguí puliendo el resultado sin frustrarte.",
        "money": "Sí en el fondo, pero con retorno más moderado o lento que el cálculo más optimista. Ajustá números a la realidad.",
        "decision": "Seguí adelante con expectativas realistas: un logro sobrio y concreto vale más que una promesa inflada."
      },
      "forScale": "conserva un desenlace favorable y vitalidad real de fondo",
      "againstScale": "introduce demoras menores, cansancio o expectativas infladas",
      "keyAction": "Bajá una expectativa exagerada y enfocate en cerrar el resultado real que tenés al alcance.",
      "timing": "Algo demorado respecto de tu deseo, pero con buen desenlace en pocas semanas."
    }
  },
  "20": {
    "name": "El Juicio",
    "numeral": "XX",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: llamado claro, absolución del pasado y definición que renueva tu etapa.",
      "domains": {
        "general": "Sí decisivo. Llega la noticia, la comprensión o el veredicto que venías esperando para cerrar una etapa y pasar a un nivel superior.",
        "love": "Sí para conversaciones definitorias, perdones genuinos o un renacer consciente cuando ambos aprendieron la lección.",
        "work": "Sí rotundo. Excelente para respuestas de procesos largos, cambios de vocación o el relanzamiento definitivo de un proyecto.",
        "money": "Sí. Resolución favorable de pendientes, cobros atrasados o decisiones financieras que ordenan tu panorama.",
        "decision": "Respondé al llamado sin seguir postergando. Sabés exactamente qué paso corresponde dar."
      },
      "forScale": "aporta resolución definitiva, lucidez y renovación de etapa",
      "againstScale": "exige responder con madurez y dejar atrás culpas viejas",
      "keyAction": "Respondé hoy a ese pendiente o llamado que venís postergando y cerrá el ciclo.",
      "timing": "Decisivo y próximo: suele marcar una noticia o definición clara muy pronto."
    },
    "lunar": {
      "verdict": "NO_YET",
      "weight": -1,
      "headline": "No por ahora: la duda excesiva o el miedo a equivocarte están frenando la decisión.",
      "domains": {
        "general": "No estás escuchando el aviso con claridad por culpa de la autocrítica severa o por miedo a lo que dirán afuera.",
        "love": "No por ahora. Quedan reproches sin digerir o una decisión afectiva que venís pateando para adelante.",
        "work": "No conviene lanzarte hoy si todavía dudás de tu propio valor. Revisá tu preparación real, no tus miedos.",
        "money": "No por ahora. Evitá decisiones tomadas por culpa, apuro o para compensar errores pasados.",
        "decision": "No decidas desde el castigo propio. Perdoná el error anterior y recién después elegí con libertad."
      },
      "forScale": "te invita a soltar la autocrítica dura para recuperar criterio",
      "againstScale": "frena el movimiento por culpa, duda crónica o negación de una señal clara",
      "keyAction": "Escribí qué te estás reprochando del pasado, cerralo y volvé a mirar la pregunta sin culpa.",
      "timing": "Retrasado por indecisión interna; se destraba cuando asumís el cambio."
    }
  },
  "21": {
    "name": "El Mundo",
    "numeral": "XXI",
    "solar": {
      "verdict": "YES_STRONG",
      "weight": 2,
      "headline": "Sí rotundo: culminación exitosa, integración total y puerta abierta hacia algo más grande.",
      "domains": {
        "general": "Sí pleno y redondo. Todo lo aprendido hasta acá converge para cerrar este capítulo con logro real y proyección amplia.",
        "love": "Sí rotundo. Plenitud, comprensión madura y sensación de estar exactamente donde elegís estar.",
        "work": "Sí rotundo. Cierre exitoso de un ciclo, alcance internacional o digital, y consolidación de tu esfuerzo.",
        "money": "Sí rotundo. Cosecha completa de un proceso bien trabajado; momento de celebrar y planear la siguiente escala.",
        "decision": "Avanzá con confianza total: esta etapa está madura y lista para completarse."
      },
      "forScale": "corona la balanza con culminación, logro integral y expansión plena",
      "againstScale": "pide cerrar formalmente el proceso sin dejar detalles sueltos",
      "keyAction": "Completá la entrega, firmá el cierre o celebrá el hito antes de abrir el próximo ciclo.",
      "timing": "Maduro y cumplido: cierre satisfactorio en el plazo previsto."
    },
    "lunar": {
      "verdict": "YES_CONDITIONAL",
      "weight": 1,
      "headline": "Sí, con condición: estás a un paso de lograrlo, pero falta cerrar un último cabo suelto.",
      "domains": {
        "general": "El resultado sigue siendo favorable, pero quedó un 10 % final sin terminar. No abandones en la puerta ni te apures a saltar sin cerrar bien.",
        "love": "Sí, siempre que resuelvan ese último pendiente o conversación inconclusa que impide pasar de página del todo.",
        "work": "Sí, a condición de pulir el último tramo: una revisión técnica, un trámite o un cierre formal que venís postergando.",
        "money": "Sí, pero el cobro o cierre completo exige ordenar un detalle administrativo o cobrar lo que falta.",
        "decision": "Terminá primero lo que dejaste casi listo; ese cierre destraba automáticamente el paso siguiente."
      },
      "forScale": "muestra que la meta está prácticamente alcanzada y al alcance de la mano",
      "againstScale": "señala un último detalle inconcluso que demora la sensación de logro",
      "keyAction": "Elegí el último pendiente concreto que quedó abierto y terminalo hoy sin excusas.",
      "timing": "Inminente apenas completás el último trámite o ajuste pendiente."
    }
  }
};

  // ==========================================================================
  // NORMALIZACIÓN DE IDs Y RESPALDO PARA LOS 56 ARCANOS MENORES
  // ==========================================================================
  function resolveMajorNumericId(cardOrId) {
    if (cardOrId === null || cardOrId === undefined) return null;
    const raw = typeof cardOrId === "object" ? cardOrId.id : cardOrId;
    if (typeof raw === "number" && raw >= 0 && raw <= 21) return raw;
    const s = String(raw).trim().toLowerCase();
    if (/^\d+$/.test(s)) {
      const n = parseInt(s, 10);
      if (n >= 0 && n <= 21) return n;
    }
    const m = s.match(/^(?:major|maj)_(\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (n >= 0 && n <= 21) return n;
    }
    return null;
  }

  function inferSealFromText(yesNoText, isReversed) {
    const t = String(yesNoText || "").toLowerCase();
    if (/rotundo|absoluto|pleno|definitivo/.test(t) && /\bs[ií]\b/.test(t)) return "YES_STRONG";
    if (/rotundo|absoluto|definitivo/.test(t) && /\bno\b/.test(t)) return "NO_STRONG";
    if (/velad|inciert|suspens|penumbra|depende|quiz[aá]|tal vez|pausa/.test(t)) return "VEILED";
    if (/\bs[ií]\b/.test(t) && /\bno\b/.test(t)) return isReversed ? "NO_YET" : "YES_CONDITIONAL";
    if (/\bs[ií]\b/.test(t)) return isReversed ? "YES_CONDITIONAL" : "YES_STRONG";
    if (/\bno\b/.test(t)) return isReversed ? "NO_STRONG" : "NO_YET";
    return isReversed ? "NO_YET" : "YES_CONDITIONAL";
  }

  function buildMinorFallback(card, isReversed) {
    const rev = Boolean(isReversed);
    const yesNoText = (card && card.correspondences && card.correspondences.yesNo) || (card && card.yesNo) || "";
    const verdict = inferSealFromText(yesNoText, rev);
    const seal = SEAL_CATALOG[verdict] || SEAL_CATALOG.VEILED;
    const doms = (card && card.domains) || {};
    const name = (card && card.name) || "Arcano Menor";
    const baseMeaning = (card && card.meaning) || seal.summaryLine;
    const counsel = (card && card.counsel) || "Observá los hechos concretos y actuá con medida.";
    const timing = (card && card.correspondences && card.correspondences.tarotTiming) || "Ritmo cotidiano: evolución visible en el corto plazo.";

    return {
      verdict: seal.code,
      weight: seal.weight,
      headline: name + (rev ? " en Sombra: " : " en Luz: ") + (yesNoText || seal.summaryLine),
      domains: {
        general: baseMeaning,
        love: doms.love || baseMeaning,
        work: doms.work || baseMeaning,
        money: doms.money || doms.work || baseMeaning,
        decision: counsel
      },
      forScale: "aporta la energía práctica de " + name + (rev ? " en proceso de ajuste" : " a favor del movimiento"),
      againstScale: "advierte la fricción propia de " + name + (rev ? " en sombra" : " si se fuerza sin medida"),
      keyAction: counsel,
      timing: timing
    };
  }

  function getCardSiNoData(cardOrId, isReversed) {
    const rev = typeof isReversed === "boolean"
      ? isReversed
      : Boolean(cardOrId && typeof cardOrId === "object" && cardOrId.isReversed);
    const majorId = resolveMajorNumericId(cardOrId);

    if (majorId !== null && DATOS_SINO[majorId]) {
      const entry = DATOS_SINO[majorId];
      const pol = rev ? entry.lunar : entry.solar;
      return Object.assign({}, pol, {
        id: majorId,
        name: entry.name,
        numeral: entry.numeral,
        isReversed: rev,
        seal: SEAL_CATALOG[pol.verdict]
      });
    }

    const fb = buildMinorFallback(typeof cardOrId === "object" ? cardOrId : null, rev);
    return Object.assign({}, fb, {
      id: typeof cardOrId === "object" && cardOrId ? cardOrId.id : cardOrId,
      name: (typeof cardOrId === "object" && cardOrId && cardOrId.name) || "Arcano",
      numeral: (typeof cardOrId === "object" && cardOrId && cardOrId.numeral) || "",
      isReversed: rev,
      seal: SEAL_CATALOG[fb.verdict]
    });
  }

  // ==========================================================================
  // GUARDIÁN ANTI-COMPULSIÓN DE SIBILIA (LOCALSTORAGE)
  // ==========================================================================
  function normalizeQuestion(q) {
    return String(q || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function readHistory() {
    try {
      const raw = global.localStorage && global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory(list) {
    try {
      if (global.localStorage) {
        global.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 30)));
      }
    } catch (e) {
      // Modo privado o almacenamiento lleno: continuar sin bloquear la experiencia
    }
  }

  function checkCompulsion(question, domain) {
    const history = readHistory();
    if (!history.length) {
      return { triggered: false, reason: null, secondsSinceLast: null, message: null, suggestTrina: false };
    }

    const now = Date.now();
    const last = history[0];
    const secondsSinceLast = Math.max(0, Math.round((now - (last.ts || 0)) / 1000));
    const normQ = normalizeQuestion(question);

    // 1. Misma pregunta exacta repetida en las últimas 24 horas
    if (normQ.length >= 6) {
      const dup = history.find(function (item) {
        return item.normQ === normQ && (now - (item.ts || 0)) < 24 * 60 * 60 * 1000;
      });
      if (dup) {
        return {
          triggered: true,
          reason: "same_question",
          secondsSinceLast: secondsSinceLast,
          previousVerdict: dup.verdictLabel || "",
          message:
            "Ya consultaste esta misma pregunta recientemente" +
            (dup.verdictLabel ? (" y el espejo respondió «" + dup.verdictLabel + "»") : "") +
            ". Repetir la tirada buscando que cambie el veredicto suele responder a la ansiedad y nubla la lectura. Si necesitás entender qué la traba, te conviene abrir El Hilo de las Tres Lunas.",
          suggestTrina: true
        };
      }
    }

    // 2. Tiradas compulsivas en ráfaga (< 90 segundos o 3+ en 10 minutos)
    const tenMinCount = history.filter(function (item) {
      return (now - (item.ts || 0)) < 10 * 60 * 1000;
    }).length;

    if (secondsSinceLast < 90 || tenMinCount >= 3) {
      return {
        triggered: true,
        reason: "rapid_fire",
        secondsSinceLast: secondsSinceLast,
        recentCount: tenMinCount,
        message:
          "Acabás de consultar la Balanza hace un instante. Si se trata de una pregunta distinta, adelante; pero si estás re-tirando sobre el mismo tema para forzar otro resultado, respirá hondo y dale espacio a la primera respuesta.",
        suggestTrina: true
      };
    }

    return { triggered: false, reason: null, secondsSinceLast: secondsSinceLast, message: null, suggestTrina: false };
  }

  function recordSession(entry) {
    const history = readHistory();
    history.unshift({
      ts: Date.now(),
      mode: entry.mode || "single",
      domain: entry.domain || "general",
      question: String(entry.question || "").trim().slice(0, 180),
      normQ: normalizeQuestion(entry.question),
      verdictCode: entry.verdictCode || "VEILED",
      verdictLabel: entry.verdictLabel || "",
      cardIds: entry.cardIds || []
    });
    saveHistory(history);
  }

  // ==========================================================================
  // EVALUADOR DE PULSO ÚNICO (1 CARTA)
  // ==========================================================================
  function evaluateSingle(card, options) {
    const opts = options || {};
    const domain = DOMAIN_CATALOG[opts.domain] ? opts.domain : "general";
    const domainMeta = DOMAIN_CATALOG[domain];
    const question = String(opts.question || "").trim();
    const isRev = Boolean(card && card.isReversed);
    const data = getCardSiNoData(card, isRev);
    const seal = data.seal;
    const actionBlock = (card && (card.theAlchemy || card.actionOracle)) || {};
    const timing = (card && card.correspondences && card.correspondences.tarotTiming) || data.timing;

    const result = {
      mode: "single",
      domain: domain,
      domainMeta: domainMeta,
      question: question,
      seal: seal,
      score: data.weight,
      maxScore: 2,
      barPercent: seal.barPercent,
      headline: data.headline,
      answerText: data.domains[domain] || data.domains.general,
      keyAction: data.keyAction,
      directive: actionBlock.command || data.keyAction,
      prohibition: actionBlock.prohibition || "",
      talismanPhrase: actionBlock.talismanPhrase || "",
      timing: timing,
      closingCounsel: (card && card.counsel) || data.keyAction,
      card: card,
      cardData: data,
      timestamp: Date.now()
    };

    if (opts.record !== false) {
      recordSession({
        mode: "single",
        domain: domain,
        question: question,
        verdictCode: seal.code,
        verdictLabel: seal.label,
        cardIds: [data.id]
      });
    }

    return result;
  }

  // ==========================================================================
  // EVALUADOR DE BALANZA TRINA (3 CARTAS PONDERADAS)
  // ==========================================================================
  function scoreToTriadSeal(totalScore) {
    if (totalScore >= 4) return SEAL_CATALOG.YES_STRONG;
    if (totalScore >= 1) return SEAL_CATALOG.YES_CONDITIONAL;
    if (totalScore === 0) return SEAL_CATALOG.VEILED;
    if (totalScore >= -3) return SEAL_CATALOG.NO_YET;
    return SEAL_CATALOG.NO_STRONG;
  }

  function evaluateTriad(cards, options) {
    if (!Array.isArray(cards) || cards.length < 3) return null;
    const opts = options || {};
    const domain = DOMAIN_CATALOG[opts.domain] ? opts.domain : "general";
    const domainMeta = DOMAIN_CATALOG[domain];
    const question = String(opts.question || "").trim();

    const items = cards.slice(0, 3).map(function (card, idx) {
      const data = getCardSiNoData(card, Boolean(card && card.isReversed));
      const role = TRIAD_SLOT_ROLES[idx];
      return {
        slotIndex: idx,
        role: role,
        card: card,
        data: data,
        seal: data.seal,
        domainAnswer: data.domains[domain] || data.domains.general
      };
    });

    const totalScore = items.reduce(function (sum, it) { return sum + it.data.weight; }, 0);
    const seal = scoreToTriadSeal(totalScore);
    const barPercent = Math.max(6, Math.min(94, Math.round(((totalScore + 6) / 12) * 100)));

    const favorItems = items.filter(function (it) { return it.data.weight > 0; });
    const frictionItems = items.filter(function (it) { return it.data.weight < 0; });
    const neutralItems = items.filter(function (it) { return it.data.weight === 0; });

    // Construcción narrativa natural y coherente según el balance real de las 3 cartas
    const c1 = items[0];
    const c2 = items[1];
    const c3 = items[2];

    let balanceLabel = "";
    let synthesisParts = [];

    if (favorItems.length === 3) {
      balanceLabel = "Unanimidad a Favor (3 de 3)";
      synthesisParts.push(
        "Las tres cartas empujan en la misma dirección favorable: " +
        c1.data.name + " " + c1.data.forScale + ", " +
        c2.data.name + " " + c2.data.forScale + ", y " +
        c3.data.name + " termina de sellar el desenlace."
      );
    } else if (frictionItems.length === 3) {
      balanceLabel = "Resistencia Unánime (3 de 3)";
      synthesisParts.push(
        "Las tres cartas coinciden en frenar este camino: " +
        c1.data.name + " " + c1.data.againstScale + ", mientras " +
        c2.data.name + " " + c2.data.againstScale + " y " +
        c3.data.name + " confirma que forzar hoy tendría un costo innecesario."
      );
    } else if (totalScore > 0) {
      balanceLabel = favorItems.length + " a favor • " + (frictionItems.length ? (frictionItems.length + " en tensión") : (neutralItems.length + " en reserva"));
      const mainFor = favorItems[0];
      const mainAgainst = frictionItems[0] || neutralItems[0];
      synthesisParts.push(
        "La balanza cae a tu favor gracias a " + mainFor.data.name + ", que " + mainFor.data.forScale + "."
      );
      if (mainAgainst) {
        synthesisParts.push(
          "Sin embargo, " + mainAgainst.data.name + " actúa como condición clave porque " + mainAgainst.data.againstScale + "."
        );
      }
      synthesisParts.push(
        "En el tramo de cierre, " + c3.data.name + " indica: " + c3.data.headline
      );
    } else if (totalScore < 0) {
      balanceLabel = frictionItems.length + " en contra • " + (favorItems.length ? (favorItems.length + " a favor") : (neutralItems.length + " veladas"));
      const mainAgainst = frictionItems[0];
      const mainFor = favorItems[0] || neutralItems[0];
      synthesisParts.push(
        "Hoy pesan más las resistencias: " + mainAgainst.data.name + " " + mainAgainst.data.againstScale + "."
      );
      if (mainFor) {
        synthesisParts.push(
          "Aunque " + mainFor.data.name + " " + mainFor.data.forScale + ", todavía no alcanza para destrabar el cuadro completo."
        );
      }
      synthesisParts.push(
        "Hacia el desenlace, " + c3.data.name + " aconseja ajustar antes de volver a intentar."
      );
    } else {
      balanceLabel = "Balanza en Equilibrio Exacto";
      synthesisParts.push(
        "Las fuerzas están empatadas: " +
        c1.data.name + " abre la consulta desde " + (c1.data.weight >= 0 ? c1.data.forScale : c1.data.againstScale) +
        ", pero " + c2.data.name + " y " + c3.data.name + " equilibran el peso."
      );
      synthesisParts.push(
        "Eso significa que el desenlace no está escrito todavía: lo va a inclinar la decisión concreta que tomes en los próximos días."
      );
    }

    // Llave de acción priorizada: si el veredicto tiene fricción, tomamos la llave de la carta que frena; si es favorable, la del desenlace
    const keySource = (totalScore <= 0 && frictionItems[0]) ? frictionItems[0] : c3;
    const actionBlock = (keySource.card && (keySource.card.theAlchemy || keySource.card.actionOracle)) || {};
    const timing = (c3.card && c3.card.correspondences && c3.card.correspondences.tarotTiming) || c3.data.timing;

    const result = {
      mode: "triad",
      domain: domain,
      domainMeta: domainMeta,
      question: question,
      seal: seal,
      score: totalScore,
      maxScore: 6,
      barPercent: barPercent,
      balanceLabel: balanceLabel,
      favorCount: favorItems.length,
      frictionCount: frictionItems.length,
      neutralCount: neutralItems.length,
      headline: seal.summaryLine,
      synthesisText: synthesisParts.join(" "),
      domainHighlight: c3.domainAnswer,
      keyAction: keySource.data.keyAction,
      directive: actionBlock.command || keySource.data.keyAction,
      prohibition: actionBlock.prohibition || "",
      talismanPhrase: actionBlock.talismanPhrase || "",
      timing: timing,
      items: items,
      timestamp: Date.now()
    };

    if (opts.record !== false) {
      recordSession({
        mode: "triad",
        domain: domain,
        question: question,
        verdictCode: seal.code,
        verdictLabel: seal.label,
        cardIds: items.map(function (it) { return it.data.id; })
      });
    }

    return result;
  }

  // ==========================================================================
  // TABLA DE REFERENCIA SEO PARA tarot-si-o-no.html
  // ==========================================================================
  function getReferenceTable() {
    const rows = [];
    for (let id = 0; id <= 21; id++) {
      const entry = DATOS_SINO[id];
      if (!entry) continue;
      rows.push({
        id: id,
        numeral: entry.numeral,
        name: entry.name,
        solarSeal: SEAL_CATALOG[entry.solar.verdict],
        solarHeadline: entry.solar.headline,
        lunarSeal: SEAL_CATALOG[entry.lunar.verdict],
        lunarHeadline: entry.lunar.headline
      });
    }
    return rows;
  }

  global.DATOS_SINO = DATOS_SINO;
  global.SiNoOracleEngine = {
    SEAL_CATALOG: SEAL_CATALOG,
    DOMAIN_CATALOG: DOMAIN_CATALOG,
    TRIAD_SLOT_ROLES: TRIAD_SLOT_ROLES,
    getCardSiNoData: getCardSiNoData,
    evaluateSingle: evaluateSingle,
    evaluateTriad: evaluateTriad,
    checkCompulsion: checkCompulsion,
    getRecentHistory: readHistory,
    getReferenceTable: getReferenceTable
  };

  if (typeof console !== "undefined" && console.log) {
    console.log("%c✦ Códice Sí o No (22 Arcanos × Luz/Sombra + Balanza Trina) activo.", "color: #34d399; font-weight: bold;");
  }
})(typeof window !== "undefined" ? window : globalThis);

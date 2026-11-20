// ============================================================================
// ARCHIVO: datos_sol_3.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN III: ARCANOS VII, VIII, IX y X
// VII • El Carro | VIII • La Fuerza | IX • El Ermitaño | X • La Rueda de la Fortuna
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_3 = [
  // ==========================================================================
  // ARCANO VII • EL CARRO (CHETH • EL CONQUISTADOR DE LAS DOS ESFINGES)
  // ==========================================================================
  {
    id: 7,
    numeral: "VII",
    name: "El Carro",
    subtitle: "El Conquistador de las Dos Esfinges",
    palette: {
      primary: "#38bdf8",
      secondary: "#f59e0b",
      glow: "rgba(56, 189, 248, 0.58)"
    },
    archetype: "chariot",
    correspondences: {
      element: "Agua Solarizada / Coraza Astral en Movimiento",
      astro: "Cáncer • El Cardinal del Agua y el Carruaje de la Luna exaltada en Júpiter",
      hebrewLetter: "Cheth (ח) • El Recinto Amurallado, la Valla Protectora y la Fuerza Vital",
      treeOfLifePath: "Sendero 18 • Desciende desde Binah (El Entendimiento Supremo) hasta Geburah (El Poder Marcial)",
      alchemy: "Sublimatio y Ascensio • El Vehículo Etérico (Merkabah) que triunfa sobre la gravedad densa",
      hermeticAxiom: "Gobierno sin látigo ni brida porque mi centro es inmóvil; las bestias opuestas tiran juntas cuando el Rey interior no duda.",
      jungianArchetype: "El Héroe Conquistador, el Yo Ejecutivo Blindado y el Dominio de las Pulsiones",
      tarotTiming: "Junio-Julio (Cáncer), avance veloz e inminente en 7 días o 7 semanas",
      yesNo: "Sí rotundo (victoria rápida conquistada por determinación implacable)",
      keywords: [
        "victoria conquistada",
        "avance imparable",
        "dominio de polaridades",
        "coraza psíquica",
        "merkabah triunfal",
        "dirección unificada",
        "autodominio heroico"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame las manos: no sostengo riendas de cuero ni fustigo a las Esfinges con hierro. Ellas obedecen a la gravedad magnética de mi mente enfocada. Fijá tu estrella polar en el horizonte y ponete en marcha: el camino se abre ante quien no negocia su dirección.",
    oracleVoiceVariants: [
      "Mirame las manos: no sostengo riendas de cuero ni fustigo a las Esfinges con hierro. Ellas obedecen a la gravedad magnética de mi mente enfocada. Fijá tu estrella polar en el horizonte y ponete en marcha: el camino se abre ante quien no negocia su dirección.",
      "Una de mis Esfinges es negra como la obsidiana y tira hacia el abismo; la otra es blanca como la plata y tira hacia las nubes. El hombre débil se despedaza entre sus contradicciones; yo las ato al mismo eje y uso su tensión salvaje para duplicar mi velocidad.",
      "Mi letra sagrada es Cheth, la Coraza. Podés atravesar el pantano más hostil o el mercado más feroz sin que una sola gota de barro toque tu pecho si llevás cerrado el sello de tu propósito.",
      "Después de elegir en Los Amantes, la duda es traición. Ya cortaste las amarras; ahora subite al chasis de piedra y oro y dejá que el estruendo de tus ruedas silencie a los escépticos.",
      "No confundas movimiento agitado con avance real. Yo soy el centro en calma dentro del proyectil: mientras mis ruedas devoran leguas, mi espíritu permanece tan quieto como el eje de las estrellas."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Carro (Arcano VII) es el emblema supremo de la Victoria Activa, la Conquista Territorial y el triunfo de la Voluntad Iluminada sobre las fuerzas contradictorias de la naturaleza. En la Cábala hermética rige el Sendero 18 de la letra Cheth (que significa 'valla', 'coraza' o 'campo acotado'), conduciendo el poder formador de la Gran Madre (Binah) directamente hacia el brazo ejecutor de la Severidad y el Coraje (Geburah). Cuando este Arcano irrumpe en tu lectura, decreta el fin de toda espera: las deliberaciones terminaron y comienza la campaña triunfal. Te anuncia que tenés la tracción, el blindaje anímico y el foco estratégico necesarios para superar rivales, cruzar fronteras y coronar una meta ambiciosa en tiempo récord.",
    meaningVariants: [
      "El Carro (Arcano VII) es el emblema supremo de la Victoria Activa, la Conquista Territorial y el triunfo de la Voluntad Iluminada sobre las fuerzas contradictorias de la naturaleza. En la Cábala hermética rige el Sendero 18 de la letra Cheth (que significa 'valla', 'coraza' o 'campo acotado'), conduciendo el poder formador de la Gran Madre (Binah) directamente hacia el brazo ejecutor de la Severidad y el Coraje (Geburah). Cuando este Arcano irrumpe en tu lectura, decreta el fin de toda espera: las deliberaciones terminaron y comienza la campaña triunfal. Te anuncia que tenés la tracción, el blindaje anímico y el foco estratégico necesarios para superar rivales, cruzar fronteras y coronar una meta ambiciosa en tiempo récord.",
      "En la mística judía antigua, este sendero corresponde a la visión de la *Merkabah*: el Trono-Carruaje celeste en el que el iniciado asciende y desciende a través de los palacios astrales sin ser consumido por el fuego. En tu vida práctica, El Carro significa que has logrado ensamblar un 'vehículo' operativo —una empresa, un método de trabajo, una disciplina corporal o una plataforma técnica— capaz de transportar tu visión espiritual a través del mundo material con potencia arrolladora.",
      "Observá la paradoja astrológica de esta carta: es un guerrero acorazado regido por Cáncer, el signo del Agua cardinal y del caparazón protector. Esto revela un secreto de alta estrategia: la verdadera invencibilidad del Auriga no nace de la agresión ciega, sino de proteger su núcleo emocional (su casa interior) detrás de una coraza de oro y acero mientras avanza hacia el objetivo. Sentís con profundidad oceánica, pero ejecutás con frialdad imperial.",
      "El número Siete —la suma del Tres espiritual (el triángulo del alma) y el Cuatro material (el cubo del carro)— representa el Espíritu gobernando a los cuatro elementos en movimiento. Las dos Esfinges que traccionan el vehículo simbolizan el par de opuestos (placer y dolor, rigor y misericordia, razón e instinto) que antes te tironeaban en direcciones contrarias y que hoy, bajo tu mando soberano, empujan en una sola línea recta.",
      "Cuando El Carro aparece en Luz, el universo premia la audacia direccional. No es momento de pedir permiso, ni de frenar en cada esquina a escuchar las opiniones de quienes nunca salieron de su aldea. Si mantenés la vista clavada en la estrella de tu dosel y no soltás el cetro, ninguna muralla externa podrá resistir tu inercia."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología analítica de Jung, El Carro retrata la consolidación triunfal del Complejo del Yo frente a la amenaza de ser tragado por las aguas regresivas del inconsciente materno (Cáncer). El Héroe ha dejado atrás la nostalgia infantil de seguridad pasiva y toma el comando de su propia individuación. Tu psique te demuestra hoy que no necesitás eliminar tus sombras ni tus miedos para triunfar: te basta con ponerlos a tirar de tu carro bajo la orden de tu conciencia.",
    psycheVariants: [
      "En la psicología analítica de Jung, El Carro retrata la consolidación triunfal del Complejo del Yo frente a la amenaza de ser tragado por las aguas regresivas del inconsciente materno (Cáncer). El Héroe ha dejado atrás la nostalgia infantil de seguridad pasiva y toma el comando de su propia individuación. Tu psique te demuestra hoy que no necesitás eliminar tus sombras ni tus miedos para triunfar: te basta con ponerlos a tirar de tu carro bajo la orden de tu conciencia.",
      "Platón describió en el *Fedro* el alma humana como un auriga que conduce dos caballos alados: uno noble y luminoso, otro salvaje y oscuro. El Arcano VII confirma que has alcanzado la madurez psicológica para no amputar tu deseo salvaje ni reprimir tu ambición, sino canalizar ese voltaje visceral hacia una meta constructiva de alto nivel.",
      "Este Arcano diagnostica la necesidad de blindaje psíquico (la letra Cheth). Cuando estás en pleno ascenso o lanzamiento, el entorno suele proyectar sus propias inseguridades sobre tu marcha. El Carro te ordena cerrar las escotillas emocionales ante la crítica ajena: que tu sensibilidad quede reservada exclusivamente para tu círculo sagrado y tu obra.",
      "Cuidado con la única emboscada psicológica del conquistador: confundir al Auriga (el Ser inmortal) con el Vehículo (el cargo, el éxito externo o el trofeo). Conducí tu carro a máxima velocidad hacia la victoria, pero recordá siempre que vos sos el Rey que está de pie adentro, no las ruedas de metal."
    ],

    lightAndShadow: "Al derecho (En Luz): Victoria rotunda, avance acelerado, viajes prósperos, superación de competidores, blindaje emocional y autodominio magistral. Invertida (En Sombra): Pérdida de control por prisa arrogante, dispersión en direcciones opuestas, agresividad defensiva o estancamiento del motor.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Victoria rotunda, avance acelerado, viajes prósperos, superación de competidores, blindaje emocional y autodominio magistral. Invertida (En Sombra): Pérdida de control por prisa arrogante, dispersión en direcciones opuestas, agresividad defensiva o estancamiento del motor.",
      "En Luz, El Carro es el conquistador que unifica sus propias contradicciones y cruza el campo de batalla invicto; en Sombra, es el carruaje desbocado cuyas bestias tiran cada una para su lado hasta volcar en la zanja.",
      "Luz activa: Tracción ejecutiva implacable, conquista de nuevos mercados o territorios, coraje bajo presión y foco láser. Sombra latente: Atropellar los tiempos orgánicos o desgastar el cuerpo por no saber cuándo desenganchar los caballos."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Conquista apasionada, magnetismo directo y superación de distancias físicas o barreras emocionales. En pareja, es el momento de subirse juntos a un proyecto ambicioso —mudanza, viaje o meta compartida— para que toda esa potencia ígnea empuje hacia adelante en vez de chocar puertas adentro.",
      work: "Expansión comercial vertiginosa, apertura de nuevas plazas o rutas de distribución, liderazgo competitivo y victoria clara sobre las dificultades técnicas. Todo lo relacionado con transporte, logística, lanzamientos y dirección ejecutiva recibe viento de triunfo.",
      money: "Aceleración del flujo de caja por conquista de mercado y velocidad de rotación. El dinero premia hoy la iniciativa audaz, la escala y la ejecución sin titubeos.",
      spirit: "Dominio de la *Merkabah* interior: alinear el cuerpo físico (el carro), las emociones (las esfinges), la mente (las riendas astrales) y el espíritu (el Auriga) en un solo vector ascendente.",
      healthAndEnergy: "Alto caudal de adrenalina, resistencia muscular y vigor torácico. Rige el pecho, el esternón y el estómago (Cáncer); comé con calma antes o después de la batalla, nunca tragando ansiedad en plena marcha."
    },
    domainsVariants: [
      {
        love: "Conquista apasionada, magnetismo directo y superación de distancias físicas o barreras emocionales. En pareja, es el momento de subirse juntos a un proyecto ambicioso —mudanza, viaje o meta compartida— para que toda esa potencia ígnea empuje hacia adelante en vez de chocar puertas adentro.",
        work: "Expansión comercial vertiginosa, apertura de nuevas plazas o rutas de distribución, liderazgo competitivo y victoria clara sobre las dificultades técnicas. Todo lo relacionado con transporte, logística, lanzamientos y dirección ejecutiva recibe viento de triunfo.",
        money: "Aceleración del flujo de caja por conquista de mercado y velocidad de rotación. El dinero premia hoy la iniciativa audaz, la escala y la ejecución sin titubeos.",
        spirit: "Dominio de la *Merkabah* interior: alinear el cuerpo físico (el carro), las emociones (las esfinges), la mente (las riendas astrales) y el espíritu (el Auriga) en un solo vector ascendente.",
        healthAndEnergy: "Alto caudal de adrenalina, resistencia muscular y vigor torácico. Rige el pecho, el esternón y el estómago (Cáncer); comé con calma antes o después de la batalla, nunca tragando ansiedad en plena marcha."
      },
      {
        love: "Se acabaron los rodeos tímidos: quien sabe adónde va resulta magnéticamente irresistible. Tomá el timón afectivo con seguridad serena, proponé el rumbo y demostrá con hechos tu determinación.",
        work: "Desbloqueo fulminante de un expediente, desarrollo o negocio que venía lento. Tu capacidad de mando bajo presión te permite coordinar múltiples frentes complejos sin perder ni un milímetro de precisión.",
        money: "Excelente augurio para inversiones en vehículos, maquinaria de producción, envíos a otras ciudades o expansión del alcance digital de tu plataforma.",
        spirit: "La Paz en medio de la Guerra (el secreto del *Bhagavad Gita* donde Krishna conduce el carro de Arjuna): actuar con intensidad total en el mundo permaneciendo interiormente desapegado y sereno.",
        healthAndEnergy: "Energía cinética desbordante que pide pista; el entrenamiento físico intenso, las caminatas rápidas o la conducción enfocada despejan tu mente al instante."
      },
      {
        love: "Protección y lealtad feroz hacia los tuyos. El Carro construye un escudo seguro alrededor del vínculo, permitiendo que la intimidad viaje protegida de las tormentas e interferencias externas.",
        work: "Superación de la competencia por pura velocidad de implementación y coherencia de diseño. Mientras otros siguen debatiendo en reuniones eternas, tu carro ya llegó a la meta y plantó bandera.",
        money: "Ingreso fuerte derivado de un cierre comercial directo o de haberte animado a salir a buscar el resultado fuera de tu perímetro habitual.",
        spirit: "Transmutación de la inercia lunar en impulso solar: usar la memoria del pasado no como ancla nostálgica, sino como catapulta hacia el futuro.",
        healthAndEnergy: "Blindaje inmunológico y anímico alto; cuidá tus rodillas, piernas y descanso nocturno tras las jornadas de gran empuje."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Poné primera y avanzá hoy mismo sobre el objetivo más desafiante de tu lista: fijá un plazo de siete días y cruzá el campo sin detenerte a dudar.",
      prohibition: "Prohibido mirar por el espejo retrovisor, quejarte del camino o frenar tu marcha para justificarte ante quienes están parados en la banquina.",
      psychomagicAct: "Antes de poner en marcha tu vehículo hoy (o al calzarte los zapatos para salir), apoyá ambas manos sobre el volante o sobre tu pecho, mirá fijo hacia el frente durante diez segundos y pronunciá en voz alta el nombre exacto de la victoria hacia la que te dirigís.",
      talismanPhrase: "Mis dos Esfinges tiran bajo un solo yugo; mi coraza es de luz y mi avance es imparable."
    },
    actionOracleVariants: [
      {
        command: "Poné primera y avanzá hoy mismo sobre el objetivo más desafiante de tu lista: fijá un plazo de siete días y cruzá el campo sin detenerte a dudar.",
        prohibition: "Prohibido mirar por el espejo retrovisor, quejarte del camino o frenar tu marcha para justificarte ante quienes están parados en la banquina.",
        psychomagicAct: "Antes de poner en marcha tu vehículo hoy (o al calzarte los zapatos para salir), apoyá ambas manos sobre el volante o sobre tu pecho, mirá fijo hacia el frente durante diez segundos y pronunciá en voz alta el nombre exacto de la victoria hacia la que te dirigís.",
        talismanPhrase: "Mis dos Esfinges tiran bajo un solo yugo; mi coraza es de luz y mi avance es imparable."
      },
      {
        command: "Unificá hoy dos fuerzas o tareas que te estaban tironeando en direcciones opuestas: ponelas bajo un mismo cronograma estricto y hacelas traccionar hacia la misma meta.",
        prohibition: "No permitas que el mal humor ajeno ni las turbulencias emocionales del día penetren tu coraza de trabajo.",
        psychomagicAct: "Tomá una cinta o cordón negro y uno blanco (o plateado y dorado), anudalos por un extremo y tirá de ambos con fuerza hacia tu pecho declarando: 'Ni mi sombra me frena ni mi ilusión me dispersa; yo gobierno el carro'.",
        talismanPhrase: "Bajo el dosel de las estrellas soy el eje inmóvil que conquista el horizonte."
      },
      {
        command: "Salí de tu perímetro cómodo hoy: hacé ese viaje, visitá a ese cliente clave o lanzá tu propuesta más allá de las fronteras de tu ciudad o nicho actual.",
        prohibition: "No confundas velocidad con apuro nervioso; avanzá con el paso pesado, rítmico e implacable de una legión en marcha.",
        psychomagicAct: "Dibujá en un papel pequeño el Disco Solar Alado (un círculo dorado con dos alas extendidas) y colocalo en el tablero de tu vehículo o en el borde superior de tu monitor como emblema de avance victorioso.",
        talismanPhrase: "Ningún muro detiene a una voluntad que ha unificado su cielo y su tierra."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano VII hace tronar sus ruedas en la lectura: el tiempo de la deliberación terminó y se abre un corredor de conquista rápida.",
      secondAppearance: "El Carro irrumpe por segunda vez en pocos días: tenés el motor encendido y el camino despejado, pero seguís demorando la largada por exceso de precaución. Avanzá ya.",
      thirdAppearance: "Tercera comparecencia del Arcano VII: las dos Esfinges están a punto de desbocarse si no tomás el mando con mano de hierro hoy mismo. Fijá un único norte y acelerá.",
      fourthPlusAppearance: "Orden de marcha de Cheth: el Oráculo te prohíbe toda pausa o duda adicional. La victoria ya te fue asignada en el plano astral, pero exige que pongas el cuerpo en movimiento hoy."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Sostené firme el eje entre tu luz y tu sombra: quien logra domar sus propias bestias interiores conquista cualquier horizonte.",
    counselVariants: [
      "Sostené firme el eje entre tu luz y tu sombra: quien logra domar sus propias bestias interiores conquista cualquier horizonte.",
      "El río solo alcanza la potencia para mover turbinas cuando acepta encerrarse entre dos orillas firmes.",
      "No le pidas al camino que sea llano; pedile a tus ruedas que sean de bronce y a tu mirada que no parpadee.",
      "Quien viaja blindado por la certeza de su misión atraviesa las flechas del mundo como si fueran lluvia de verano.",
      "Las contradicciones que a otros los parten al medio son exactamente los dos caballos que tiran de tu victoria."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 35,
        title: "Las Hombreras Lunares (Urim y Thummim) y el Cuadrado Pectoral",
        secret: "Sobre los hombros de la coraza del Auriga descansan dos crecientes lunares con rostros perfilados: son el *Urim* ('Luces') y el *Thummim* ('Perfecciones'), los oráculos sagrados del Sumo Sacerdote, unidos al Cuadrado de la Voluntad en el centro del tórax. Indican que el conquistador hermético lleva la guía intuitiva y el orden racional fundidos en su propia armadura.",
        esotericFormula: "Urim (Luz Solar) + Thummim (Verdad Lunar) + Cuadrado (Orden) = Coraza de Cheth",
        meditationPrompt: "¿Qué parte de tu energía vital necesitás blindar hoy con una coraza sana para que las opiniones externas no te desvíen?"
      },
      {
        id: "n2",
        x: 50,
        y: 65,
        title: "El Escudo Frontal del Disco Solar Alado",
        secret: "Tallado en el frente del cubo de piedra del carro resplandece el emblema egipcio de Horus de Behdet: el Sol de oro flanqueado por dos alas reales y las cobras Uraeus. Simboliza la *Sublimatio* alquímica: cuando la materia pesada del carro es gobernada por un espíritu despierto, la piedra misma adquiere alas y vuela sobre los obstáculos.",
        esotericFormula: "Cubo de Piedra (Materia) + Alas de Horus (Espíritu) = El Vehículo Merkabah",
        meditationPrompt: "¿Cuál es el vehículo concreto (proyecto, oficio o sistema) a través del cual tu espíritu está conquistando el mundo hoy?"
      },
      {
        id: "n3",
        x: 24,
        y: 80,
        title: "Las Dos Esfinges de Obsidiana y Plata",
        secret: "En la base del diorama se acuclillan las dos Esfinges mirándose en sentidos oblicuos pero unidas al mismo chasis: la Esfinge oscura de oro y obsidiana (el impulso severo de Geburah) y la Esfinge clara de plata y amatista (la fuerza expansiva de Chesed). Sin el Auriga se despedazarían; bajo su cetro invisible, traccionan en línea recta.",
        esotericFormula: "Severidad (Pilar Negro) + Misericordia (Pilar Blanco) = Avance por el Pilar del Medio",
        meditationPrompt: "¿Qué dos fuerzas o deseos aparentemente opuestos dentro de vos pueden ponerse hoy a tirar juntos hacia una misma meta?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO VIII • LA FUERZA (TETH • LA DOMADORA DEL LEÓN SOLAR)
  // ==========================================================================
  {
    id: 8,
    numeral: "VIII",
    name: "La Fuerza",
    subtitle: "Domadora del Fuego Interior",
    palette: {
      primary: "#fb923c",
      secondary: "#fde047",
      glow: "rgba(251, 146, 60, 0.58)"
    },
    archetype: "strength",
    correspondences: {
      element: "Fuego Fijo Solar / Azufre Real Domesticado",
      astro: "Leo • El Domicilio del Sol y el Trono del Corazón",
      hebrewLetter: "Teth (ט) • La Serpiente de Fuego (Kundalini) y el Útero Filosófico",
      treeOfLifePath: "Sendero 19 • El puente horizontal de fuego que une Chesed (La Misericordia) con Geburah (El Poder)",
      alchemy: "Digestio y Rubificatio Suave • La cocción lenta del León Rojo mediante el fuego secreto de la Doncella",
      hermeticAxiom: "La violencia quiebra la espada contra la roca; la dulzura soberana del Espíritu abre las fauces del León y lo convierte en su guardián.",
      jungianArchetype: "La Alianza del Yo con la Sombra Instintiva y la Sublimación de la Líbido",
      tarotTiming: "Julio-Agosto (Leo), domingos solares, o victoria asegurada por constancia inquebrantable",
      yesNo: "Sí (triunfo rotundo mediante templanza, coraje sereno y magnetismo real)",
      keywords: [
        "coraje compasivo",
        "dominio del instinto",
        "alta alquimia pasional",
        "resiliencia invencible",
        "nobleza de espíritu",
        "fuego domesticado",
        "poder sin violencia"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "El guerrero inmaduro mata al león y se queda sin su fuerza; el hombre asustado huye de él y vive encerrado. Yo apoyo mis manos desnudas de plata sobre sus colmillos de fuego hasta que su rugido y mi latido se vuelven un solo sol.",
    oracleVoiceVariants: [
      "El guerrero inmaduro mata al león y se queda sin su fuerza; el hombre asustado huye de él y vive encerrado. Yo apoyo mis manos desnudas de plata sobre sus colmillos de fuego hasta que su rugido y mi latido se vuelven un solo sol.",
      "No confundas jamás mi suavidad con debilidad. Cualquiera puede gritar y golpear la mesa cuando tiene miedo; se necesita el diezmo entero de los dioses para sonreír en calma mientras sostenés la tormenta por las quijadas.",
      "Mi letra secreta es Teth, la Serpiente Ígnea que duerme en la base de tu columna. Tu rabia, tu hambre sexual, tu orgullo y tu ambición no son pecados para esconder: son petróleo puro esperando que tu corazón los refine en luz.",
      "Sobre mi frente flota el mismo signo del infinito que viste en El Mago, pero yo no opero con varas ni dagas sobre una mesa: mi laboratorio es la sangre viva y la bestia indómita del deseo.",
      "Quien se ha conquistado a sí mismo ya no tiene rivales en toda la tierra. Cuando entrás a un recinto habiendo domado a tu propio león, los lobos ajenos bajan la cabeza sin saber por qué."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Fuerza (Arcano VIII) revela uno de los misterios operativos más sublimes del Tarot y de la Alquimia: la transmutación del instinto bruto en poder espiritual mediante la Gracia. En el Árbol de la Vida gobierna el Sendero 19 de la letra Teth (la Serpiente de la Sabiduría), tendiendo el travesaño horizontal que equilibra la Misericordia ilimitada de Chesed con la Fuerza marcial de Geburah. Su aparición en tu lectura anuncia que poseés un caudal inmenso de vitalidad, resistencia moral y magnetismo personal para imponerte ante cualquier prueba. Pero su ley es clara: hoy no vencerás por el choque frontal ni la imposición autoritaria, sino por el aplomo radiante, la paciencia de hierro y el encanto soberano de quien es dueño absoluto de sus propias pasiones.",
    meaningVariants: [
      "La Fuerza (Arcano VIII) revela uno de los misterios operativos más sublimes del Tarot y de la Alquimia: la transmutación del instinto bruto en poder espiritual mediante la Gracia. En el Árbol de la Vida gobierna el Sendero 19 de la letra Teth (la Serpiente de la Sabiduría), tendiendo el travesaño horizontal que equilibra la Misericordia ilimitada de Chesed con la Fuerza marcial de Geburah. Su aparición en tu lectura anuncia que poseés un caudal inmenso de vitalidad, resistencia moral y magnetismo personal para imponerte ante cualquier prueba. Pero su ley es clara: hoy no vencerás por el choque frontal ni la imposición autoritaria, sino por el aplomo radiante, la paciencia de hierro y el encanto soberano de quien es dueño absoluto de sus propias pasiones.",
      "En los tratados de los antiguos alquimistas rosacruces, el León Rojo o León Solar representa el Azufre salvaje de la naturaleza: la energía volcánica del deseo, la furia defensiva y el ego biológico. Si intentás reprimir ese león con cadenas morales, te enfermás de apatía; si lo dejás suelto sin gobierno, devora tu obra. La Doncella coronada con la Lemniscata te enseña la tercera vía magistral: acariciar la fiera con lucidez amorosa para que toda esa potencia animal trabaje a favor de tu espíritu.",
      "Observá la progresión iniciática desde el Arcano VII al VIII: mientras El Carro necesitaba coraza de metal y muros de piedra para no ser desbordado, La Fuerza sale al campo vestida de lino y rosas, sin escudo ni espada. Ha alcanzado un grado superior de maestría donde ya no teme a su propia naturaleza pasional ni a la hostilidad del mundo, porque su centro cardíaco (Leo) irradia una autoridad tan cálida y segura que desarma cualquier ataque.",
      "Numéricamente, el Ocho es el número del equilibrio cósmico en doble circuito (4 + 4 y el símbolo ∞). Cuando esta carta ilumina tu consulta, te garantiza que tenés la resistencia física, psíquica y financiera para sostener el pulso todo el tiempo que haga falta. Quien no pierde la calma ni la sonrisa en el octavo asalto ya ganó el combate.",
      "Bajo la regencia del Sol en Leo, el Arcano VIII es un talismán de nobleza, generosidad real y salud vibrante. Te invita a actuar con grandeza de alma (magnanimidad): no bajes al barro a pelear con perros pequeños cuando vos sos quien camina con el León de Oro a su lado."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la clínica profunda de Jung, La Fuerza representa el momento cumbre de la integración de la Sombra Instintiva. Gran parte del agotamiento crónico moderno proviene del gasto energético invisible que hace el Yo para mantener reprimidos en el sótano psíquico el enojo legítimo, la ambición de poder y la líbido creadora. Al dejar de juzgar tus pulsiones primarias como 'malas' y darles voz consciente y dirección noble, recuperás de golpe el motor nuclear de tu personalidad.",
    psycheVariants: [
      "En la clínica profunda de Jung, La Fuerza representa el momento cumbre de la integración de la Sombra Instintiva. Gran parte del agotamiento crónico moderno proviene del gasto energético invisible que hace el Yo para mantener reprimidos en el sótano psíquico el enojo legítimo, la ambición de poder y la líbido creadora. Al dejar de juzgar tus pulsiones primarias como 'malas' y darles voz consciente y dirección noble, recuperás de golpe el motor nuclear de tu personalidad.",
      "Este Arcano diagnostica la diferencia abismal entre 'represión' y 'sublimación'. Reprimir es tapar una caldera hirviendo hasta que explota en el peor momento; sublimar (la obra de La Fuerza) es abrir la válvula con maestría técnica para que ese mismo vapor mueva una locomotora. Usá hoy tu bronca, tu deseo o tu frustración como combustible puro para crear una obra superior.",
      "La psicología de las relaciones objetales muestra que quien teme a su propia agresión interior suele volverse excesivamente complaciente o, por rebote, explosivo. La Doncella del Arcano VIII encarna la 'firmeza mansa': saber que tenés garras y colmillos afilados a tu disposición, y precisamente por saberlo, no necesitar mostrarlos salvo cuando es estrictamente justo.",
      "El león domado también simboliza la curación del Orgullo Narcisista (la sombra de Leo). Cuando tu autoestima ya no depende de ganar cada discusión trivial ni de recibir aplausos constantes, alcanzás una soberanía psicológica inquebrantable."
    ],

    lightAndShadow: "Al derecho (En Luz): Coraje sereno e invencible, persuasión magnética, vitalidad ardiente, dominio amoroso de las pasiones, resiliencia heroica y nobleza de corazón. Invertida (En Sombra): Arranques de ira o soberbia herida, agotamiento vital por reprimir el instinto, flaqueza de ánimo o abuso de poder.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Coraje sereno e invencible, persuasión magnética, vitalidad ardiente, dominio amoroso de las pasiones, resiliencia heroica y nobleza de corazón. Invertida (En Sombra): Arranques de ira o soberbia herida, agotamiento vital por reprimir el instinto, flaqueza de ánimo o abuso de poder.",
      "En Luz, La Fuerza es la mano de seda que gobierna mil caballos de fuego sin levantar la voz; en Sombra, es el domador asustado que pega gritos porque perdió el respeto de su propia fiera.",
      "Luz activa: Magnetismo sexual y creativo en su cenit, templanza bajo fuego, liderazgo cálido y recuperación física veloz. Sombra latente: Impaciencia visceral, orgullo que impide ceder a tiempo o fatiga cardíaca por exceso de tensión."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Pasión volcánica unida a una ternura y lealtad inquebrantables. En pareja, otorga el poder de desactivar cualquier tormenta, celo o crisis mediante una presencia cálida, segura y profundamente comprensiva; si estás libre, tu magnetismo vital y animal atrae miradas de forma natural y poderosa.",
      work: "Capacidad extraordinaria para domar situaciones laborales complejas, clientes difíciles o proyectos de altísima exigencia. Tu liderazgo hoy se impone por carisma solar, resistencia al estrés y diplomacia firme: lográs por convicción magnética lo que nadie lograría por la fuerza.",
      money: "Solvencia respaldada por tu coraje productivo y tu perseverancia sostenida. Excelente momento para defender el valor de tu trabajo con aplomo real y sostener inversiones que requieren nervios de acero.",
      spirit: "Alquimia del *Kundalini-Shakti* y del Fuego del Corazón: elevar la energía densa de los centros inferiores hasta convertirla en radiación dorada de compasión y poder creador.",
      healthAndEnergy: "Vitalidad solar radiante; rige el músculo cardíaco, la arteria aorta, la columna dorsal y la médula espinal. El ejercicio de fuerza controlada y la exposición al sol recargan tu sistema."
    },
    domainsVariants: [
      {
        love: "Pasión volcánica unida a una ternura y lealtad inquebrantables. En pareja, otorga el poder de desactivar cualquier tormenta, celo o crisis mediante una presencia cálida, segura y profundamente comprensiva; si estás libre, tu magnetismo vital y animal atrae miradas de forma natural y poderosa.",
        work: "Capacidad extraordinaria para domar situaciones laborales complejas, clientes difíciles o proyectos de altísima exigencia. Tu liderazgo hoy se impone por carisma solar, resistencia al estrés y diplomacia firme: lográs por convicción magnética lo que nadie lograría por la fuerza.",
        money: "Solvencia respaldada por tu coraje productivo y tu perseverancia sostenida. Excelente momento para defender el valor de tu trabajo con aplomo real y sostener inversiones que requieren nervios de acero.",
        spirit: "Alquimia del *Kundalini-Shakti* y del Fuego del Corazón: elevar la energía densa de los centros inferiores hasta convertirla en radiación dorada de compasión y poder creador.",
        healthAndEnergy: "Vitalidad solar radiante; rige el músculo cardíaco, la arteria aorta, la columna dorsal y la médula espinal. El ejercicio de fuerza controlada y la exposición al sol recargan tu sistema."
      },
      {
        love: "La verdadera intimidad erótica y afectiva florece cuando ambos pueden mostrar su lado salvaje y vulnerable sin temor a ser juzgados. Abrazá la intensidad del vínculo con corazón ancho y generoso.",
        work: "Resiliencia de campeón en proyectos largos. Allí donde los competidores entusiastas del primer día se cansan y abandonan a mitad de la cuesta, tu resistencia silenciosa y constante se queda con todo el mercado.",
        money: "Dominio absoluto sobre las compras impulsivas o el miedo financiero: tomás decisiones económicas con la cabeza fría y el corazón valiente.",
        spirit: "Comprensión de la Ley de Teth: nada en tu naturaleza biológica es impuro cuando es consagrado al servicio de la Gran Obra.",
        healthAndEnergy: "Gran poder de autocuración y fortaleza inmunológica; acompañá este vigor con estiramientos de columna y respiración torácica amplia."
      },
      {
        love: "Si alguien cercano está atravesando un momento de furia, miedo o desborde, tu sola presencia serena actuará hoy como un bálsamo magnético que devuelve la paz a la casa.",
        work: "Negociación magistral con figuras de poder o caracteres duros: en lugar de chocar de frente con su ego, sabés exactamente cómo acariciar su orgullo para conducirlos hacia el acuerdo que buscás.",
        money: "Crecimiento patrimonial firme y orgánico, libre de especulaciones desesperadas: tu riqueza descansa sobre tu capacidad probada de trabajo y creación.",
        spirit: "El voto del Bodhisattva y del Adepto: poseer la fuerza del rayo y elegir usarla con la delicadeza de quien sostiene un pájaro en la mano.",
        healthAndEnergy: "Equilibrio entre potencia muscular y flexibilidad nerviosa; ideal para entrenamientos con barra pesada ejecutados con técnica lenta e impecable."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Domá hoy ese problema o conversación tensa bajando deliberadamente el tono de voz, suavizando el gesto y manteniendo tu postura interna absolutamente inamovible.",
      prohibition: "Prohibido estallar por impaciencia, responder una agresión con otra agresión o abandonar una tarea difícil porque 'hoy no tenés ganas'.",
      psychomagicAct: "Escribí en un papel rojo o dorado el nombre de tu impulso más difícil de domar (ira, ansiedad, orgullo o pereza), envolvelo alrededor de una cucharada de miel o un pétalo de rosa, y guardalo en un frasco cerrado declarando: 'Tu fuerza ahora es dulzura y motor para mi obra'.",
      talismanPhrase: "Acaricio las fauces de mi propio fuego; mi serenidad es más fuerte que cualquier tormenta."
    },
    actionOracleVariants: [
      {
        command: "Domá hoy ese problema o conversación tensa bajando deliberadamente el tono de voz, suavizando el gesto y manteniendo tu postura interna absolutamente inamovible.",
        prohibition: "Prohibido estallar por impaciencia, responder una agresión con otra agresión o abandonar una tarea difícil porque 'hoy no tenés ganas'.",
        psychomagicAct: "Escribí en un papel rojo o dorado el nombre de tu impulso más difícil de domar (ira, ansiedad, orgullo o pereza), envolvelo alrededor de una cucharada de miel o un pétalo de rosa, y guardalo en un frasco cerrado declarando: 'Tu fuerza ahora es dulzura y motor para mi obra'.",
        talismanPhrase: "Acaricio las fauces de mi propio fuego; mi serenidad es más fuerte que cualquier tormenta."
      },
      {
        command: "Tomá toda la energía de enojo, frustración o deseo acumulado en estos días y descargala hoy mismo en dos horas de producción intensa o entrenamiento físico.",
        prohibition: "No te achiques ni bajes la mirada ante nadie que intente intimidarte con gritos o apuros; quedate quieto en tu eje mirando en silencio.",
        psychomagicAct: "Antes de enfrentar el desafío principal de tu jornada, apoyá tu palma izquierda en el plexo solar (el león instintivo) y tu palma derecha en el centro del pecho (el sol del corazón), respirando tres veces hasta sentir que el calor sube del vientre al pecho.",
        talismanPhrase: "El León Solar camina a mi lado; no necesito herir para reinar."
      },
      {
        command: "Sostené la constancia hoy en ese hábito o proyecto de largo aliento justo en el punto donde antes solías aflojar: ese milímetro extra de aguante define al maestro.",
        prohibition: "No reprimas lo que sentís fingiendo indiferencia fría; reconocé tu pasión con honestidad y elegí con elegancia cómo expresarla.",
        psychomagicAct: "Atate un hilo dorado o amarillo en la muñeca durante ocho días como recordatorio del lazo invisible de la Lemniscata: cada vez que lo mires, relajá la mandíbula y los hombros.",
        talismanPhrase: "Mi coraje nace de la nobleza de mi corazón; el fuego me obedece."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano VIII enciende el sol de Leo en tu tirada: la verdadera victoria hoy pertenece a la templanza magnética y al dominio del propio fuego.",
      secondAppearance: "La Fuerza sale a tu encuentro por segunda vez: estás queriendo abrir a los empujones una situación que solo cede ante la paciencia de hierro y el guante de seda.",
      thirdAppearance: "Tercera llamada del Arcano VIII: cuidado con el desgaste por fricción o con el león interior mal canalizado. Frená el choque frontal de inmediato y volvé al centro de tu corazón.",
      fourthPlusAppearance: "Iniciación mayor de Teth: el Oráculo te exige maestría absoluta sobre tu temperamento y tus pasiones. Quien domina su propio incendio es dueño del tablero entero."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "No luches a golpes contra tu propia tormenta interior: domala con la dulzura implacable de quien conoce su propio centro.",
    counselVariants: [
      "No luches a golpes contra tu propia tormenta interior: domala con la dulzura implacable de quien conoce su propio centro.",
      "El acero rígido se parte bajo el martillo; el oro puro se deja moldear por el fuego y termina coronando la cabeza de los reyes.",
      "Nunca temas a la intensidad de tus pasiones: cuanto más salvaje es el león que lográs domar, más invencible se vuelve tu carruaje.",
      "En cualquier sala o negociación, el verdadero poder lo tiene siempre aquel que necesita menos esfuerzo para mantener la calma.",
      "Una cadena de rosas tejida con paciencia sujeta con más firmeza que diez barrotes de hierro forjado."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "La Lemniscata Viviente y la Corona de Rosas",
        secret: "Suspendido sobre la cabeza inclinada de la Doncella flota el símbolo del infinito en oro y luz astral, idéntico al de El Mago (1 + 7 = 8, la octava superior de la voluntad). Indica que su poder sobre la fiera no proviene de la fuerza muscular finita, sino de su conexión ininterrumpida con la fuente espiritual y el amor consciente (las rosas).",
        esotericFormula: "Lemniscata (Espíritu Infinito) + Corona de Rosas (Amor Consciente) = Dominio sin Violencia",
        meditationPrompt: "¿En qué situación actual estás gastando fuerza bruta porque olvidaste usar tu magnetismo y tu calma?"
      },
      {
        id: "n2",
        x: 42,
        y: 54,
        title: "Las Manos de Plata Lunar en las Fauces",
        secret: "Sus manos articuladas en plata pura tocan directamente los colmillos superiores e inferiores del león sin usar bozal, hierro ni guantelete. En la alquimia operativa, esto representa la unión de la Plata Lunar (la mente serena y pura de la Doncella) con el Oro Sulfuroso (el fuego ardiente del León): la templanza que amansa la furia sin apagar su calor.",
        esotericFormula: "Plata Lunar (Templanza) + Fauces de Fuego (Instinto) = Sublimación Alquímica",
        meditationPrompt: "¿Qué impulso, enojo o deseo intenso dentro de vos está pidiendo ser escuchado y guiado en lugar de reprimido?"
      },
      {
        id: "n3",
        x: 58,
        y: 66,
        title: "El León Solar de Dieciocho Cuchillas de Oro",
        secret: "El gran felino coronado por su melena flamígera de dieciocho rayos dorados (el número místico del calor vital y la vida en hebreo, *Chai* = 18) encarna el Sol en Leo y el fuego de Kundalini. No está muerto ni humillado: entrega voluntariamente su potencia real a la conciencia que supo comprenderlo.",
        esotericFormula: "León Rojo (Azufre Salvaje) -> León de Oro (Poder Espiritualizado)",
        meditationPrompt: "Si liberaras hoy todo tu coraje y tu fuego vital sin miedo a tu propia potencia, ¿qué gran obra encararías?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO IX • EL ERMITAÑO (YOD • LA LINTERNA EN LA CUMBRE HELADA)
  // ==========================================================================
  {
    id: 9,
    numeral: "IX",
    name: "El Ermitaño",
    subtitle: "La Linterna en la Cumbre Helada",
    palette: {
      primary: "#fcd34d",
      secondary: "#64748b",
      glow: "rgba(252, 211, 77, 0.55)"
    },
    archetype: "hermit",
    correspondences: {
      element: "Tierra Mutada en Cristal / Luz Quintaesenciada",
      astro: "Virgo • Mercurio Exaltado en su propio Trono de Tierra Analítica",
      hebrewLetter: "Yod (י) • La Llama Atómica, la Mano Creadora y la Semilla de todas las Letras",
      treeOfLifePath: "Sendero 20 • Conecta Chesed (La Majestad del Rey) con Tiphereth (La Conciencia Solar)",
      alchemy: "Distillatio y Separatio • El Alambique de Cristal que separa el Espíritu Puro de las Heces Densas",
      hermeticAxiom: "Me retiro del ruido de la feria no porque odie al mundo, sino para destilar en silencio la gota de luz que el mundo necesita.",
      jungianArchetype: "El Anciano Sabio (Senex Interior), el Solitario Individuado y el Portador de la Luz Propia",
      tarotTiming: "Agosto-Septiembre (Virgo), o procesos de maduración lenta, exacta e infalible",
      yesNo: "No por ahora con prisa (exige auditoría profunda, silencio y maduración antes de actuar)",
      keywords: [
        "sabiduría destilada",
        "autonomía soberana",
        "discernimiento quirúrgico",
        "soledad fértil",
        "luz propia",
        "maestría silenciosa",
        "alambique interior"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Apagá las luces de neón de las opiniones ajenas. Mi linterna octogonal solo alumbra el próximo metro de piedra helada ante mi bota, pero esa llama pequeña nadie puede soplarla porque arde con el aceite que yo mismo destilé de mis cicatrices.",
    oracleVoiceVariants: [
      "Apagá las luces de neón de las opiniones ajenas. Mi linterna octogonal solo alumbra el próximo metro de piedra helada ante mi bota, pero esa llama pequeña nadie puede soplarla porque arde con el aceite que yo mismo destilé de mis cicatrices.",
      "Quien no soporta quedarse dos horas a solas en su propio taller termina vendiendo su alma por un poco de compañía mediocre. Subí conmigo a la cumbre fría: desde acá arriba se ve con precisión matemática qué vale oro y qué es pura espuma.",
      "Mi letra sagrada es Yod, el punto indivisible del cual nacen todas las demás formas del alfabeto. No busques agrandar tu obra con relleno ruidoso; reducila, destilala y purificala hasta que cada átomo sea quintaesencia pura.",
      "En los antiguos tarots me llamaban *Il Tempo*, el Viejo Tiempo. No intentes apurar el alambique ni abrir el horno antes de hora: lo que se gesta con paciencia metódica dura cien años; lo que nace del apuro muere a la semana.",
      "No bajo al mercado a gritar mis verdades. Yo mantengo encendida la estrella de seis puntas en lo alto del risco: el que tenga sed verdadera de calidad sabrá encontrar el sendero hasta mi puerta."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Ermitaño (Arcano IX) es el Maestro de la Destilación Interior, la Prudencia Estratégica y la Soberanía Solitaria que corona el ciclo de los números simples (del 1 al 9) antes del gran giro cósmico del Diez. En el Árbol de la Vida gobierna el Sendero 20 de la letra Yod —la chispa primordial del Tetragrammaton—, uniendo la Sabiduría expansiva de Chesed con el Sol crístico de Tiphereth bajo el signo de Virgo. Su aparición en tu lectura indica que la respuesta, el código o la fórmula que buscás no se encuentra en el bullicio social ni en la velocidad atropellada, sino en el retiro consciente al laboratorio interior. Es tiempo de auditar cada detalle con lupa, depurar lo que sobra y caminar guiado exclusivamente por tu propio discernimiento experto.",
    meaningVariants: [
      "El Ermitaño (Arcano IX) es el Maestro de la Destilación Interior, la Prudencia Estratégica y la Soberanía Solitaria que corona el ciclo de los números simples (del 1 al 9) antes del gran giro cósmico del Diez. En el Árbol de la Vida gobierna el Sendero 20 de la letra Yod —la chispa primordial del Tetragrammaton—, uniendo la Sabiduría expansiva de Chesed con el Sol crístico de Tiphereth bajo el signo de Virgo. Su aparición en tu lectura indica que la respuesta, el código o la fórmula que buscás no se encuentra en el bullicio social ni en la velocidad atropellada, sino en el retiro consciente al laboratorio interior. Es tiempo de auditar cada detalle con lupa, depurar lo que sobra y caminar guiado exclusivamente por tu propio discernimiento experto.",
      "Observá la alquimia planetaria de Virgo en esta carta: es el único signo del Zodíaco donde Mercurio (el intelecto de El Mago) no solo está en su domicilio, sino también en su exaltación suprema sobre el elemento Tierra. Esto significa que El Ermitaño es El Mago que ha envejecido en sabiduría práctica: ya no necesita hacer alarde de sus trucos; aplica una inteligencia analítica, silenciosa y quirúrgica que detecta la falla milimétrica o el ingrediente secreto que todos los demás pasaron por alto.",
      "En el arte espagírico y alquímico, el Arcano IX preside la *Distillatio* en el alambique de cobre y vidrio: el proceso paciente de calentar la materia prima para que el espíritu sutil (los corazones del destilado) se eleve, separándose de las cabezas volátiles de la ansiedad y de las colas pesadas del pasado. Hoy tu vida y tu negocio te piden exactamente ese corte de maestro destilador: quedarte solo con el corazón puro de tu obra.",
      "Cuando el Anciano de la Cumbre aparece en Luz, te libera de la necesidad de pedir validación. Has acumulado suficiente experiencia, lectura y oficio como para ser tu propio faro. Si el rebaño corre hacia un lado por moda o pánico, El Ermitaño da un paso al costado, envuelve su riqueza bajo la capa gris de la discreción y sigue puliendo su diamante en silencio.",
      "El número Nueve (3 × 3) es la perfección de la tríada espiritual reflejada en la mente humana. Aunque tu camino actual pueda sentirse solitario por momentos —porque quien sube más alto en la montaña inevitablemente encuentra menos gente en el sendero—, esa soledad no es abandono: es la cámara de gestación de tu máxima excelencia."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Para Carl Gustav Jung, El Ermitaño encarna el punto álgido del proceso de Individuación: la retirada de las proyecciones colectivas. Mientras el ser humano vive fusionado con la masa, piensa lo que otros piensan y desea lo que otros desean. Retirarse temporalmente a la 'soledad fértil' permite que el Yo escuche por fin la voz del Sí-Mismo (*Self*). Tu psique hoy no busca aislarse por resentimiento, sino tomar distancia higiénica del ruido ajeno para recordar su propia nota vibratoria.",
    psycheVariants: [
      "Para Carl Gustav Jung, El Ermitaño encarna el punto álgido del proceso de Individuación: la retirada de las proyecciones colectivas. Mientras el ser humano vive fusionado con la masa, piensa lo que otros piensan y desea lo que otros desean. Retirarse temporalmente a la 'soledad fértil' permite que el Yo escuche por fin la voz del Sí-Mismo (*Self*). Tu psique hoy no busca aislarse por resentimiento, sino tomar distancia higiénica del ruido ajeno para recordar su propia nota vibratoria.",
      "Este Arcano ilumina la diferencia crucial entre *aislamiento depresivo* y *soledad creadora*. El aislamiento cierra la puerta por miedo a la vida y se queda a oscuras rumiando quejas; la soledad del Ermitaño cierra la puerta con una lámpara encendida en la mano para estudiar, formular, programar o sanar. Asegurate de que tu retiro hoy tenga siempre el farol del propósito encendido.",
      "Bajo la lupa de Virgo, tu mente posee hoy una capacidad crítica y de diagnóstico extraordinaria, pero debés vigilar su sombra: el perfeccionismo paralizante o la hipercrítica despiadada hacia vos mismo y hacia los demás. Usá el bisturí analítico para perfeccionar la obra, nunca para mutilar el entusiasmo.",
      "La capa oscura que cubre las vestiduras doradas del Ermitaño simboliza la 'reserva psíquica'. No tenés obligación de mostrar todo tu brillo ni toda tu sabiduría en cada reunión superficial; resguardar tu luz bajo el manto de la sencillez protege tu energía de los vampiros psíquicos."
    ],

    lightAndShadow: "Al derecho (En Luz): Sabiduría destilada, lucidez analítica y técnica superior, autonomía espiritual, prudencia que evita errores caros y paz en la propia compañía. Invertida (En Sombra): Aislamiento amargo, misantropía, perfeccionismo estéril que nunca termina de lanzar nada, terquedad o frialdad afectiva.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Sabiduría destilada, lucidez analítica y técnica superior, autonomía espiritual, prudencia que evita errores caros y paz en la propia compañía. Invertida (En Sombra): Aislamiento amargo, misantropía, perfeccionismo estéril que nunca termina de lanzar nada, terquedad o frialdad afectiva.",
      "En Luz, El Ermitaño es el sabio en la cumbre cuya lámpara guía a los barcos en la noche sin pedir nada a cambio; en Sombra, es el avaro encerrado en su cueva que desconfía hasta de su propia sombra.",
      "Luz activa: Precisión de relojero, investigación profunda, ahorro inteligente de energía y maestría en el oficio. Sombra latente: Cerrarse a recibir ayuda legítima o enfriar el corazón por exceso de cautela."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Tiempo de honestidad interior, madurez serena y vínculos libres de dependencia neurótica. En pareja, pide respetar los espacios de silencio individual y dialogar desde la profundidad real, sin teatro; si estás en soledad, celebra esta etapa como una conquista preciosa de tu propio eje antes de compartir el camino.",
      work: "Cúspide para el trabajo de laboratorio, programación, escritura, destilación artesanal, formulación química, contabilidad fina o consultoría especializada. Lo que perfecciones hoy a puertas cerradas, lejos de las distracciones, tendrá una calidad técnica inalcanzable para los improvisados.",
      money: "Prudencia austera e inteligente, auditoría de costos milimétrica y eliminación de gastos superfluos. No es momento de apuestas ruidosas, sino de consolidar reservas y optimizar el rendimiento de cada insumo.",
      spirit: "Iluminación silenciosa en la celda interior: descubrir que la Chispa Divina (Yod) arde intacta dentro de tu propia conciencia sin necesidad de intermediarios externos.",
      healthAndEnergy: "Gobierna el sistema digestivo asimilador (intestino delgado, páncreas, enzimas), el sistema nervioso entérico y el esqueleto. Excelente ciclo para depuraciones orgánicas, nutrición limpia y caminatas meditativas."
    },
    domainsVariants: [
      {
        love: "Tiempo de honestidad interior, madurez serena y vínculos libres de dependencia neurótica. En pareja, pide respetar los espacios de silencio individual y dialogar desde la profundidad real, sin teatro; si estás en soledad, celebra esta etapa como una conquista preciosa de tu propio eje antes de compartir el camino.",
        work: "Cúspide para el trabajo de laboratorio, programación, escritura, destilación artesanal, formulación química, contabilidad fina o consultoría especializada. Lo que perfecciones hoy a puertas cerradas, lejos de las distracciones, tendrá una calidad técnica inalcanzable para los improvisados.",
        money: "Prudencia austera e inteligente, auditoría de costos milimétrica y eliminación de gastos superfluos. No es momento de apuestas ruidosas, sino de consolidar reservas y optimizar el rendimiento de cada insumo.",
        spirit: "Iluminación silenciosa en la celda interior: descubrir que la Chispa Divina (Yod) arde intacta dentro de tu propia conciencia sin necesidad de intermediarios externos.",
        healthAndEnergy: "Gobierna el sistema digestivo asimilador (intestino delgado, páncreas, enzimas), el sistema nervioso entérico y el esqueleto. Excelente ciclo para depuraciones orgánicas, nutrición limpia y caminatas meditativas."
      },
      {
        love: "El amor verdadero no teme al silencio compartido. Dejá de llenar cada minuto con palabras por ansiedad; la lealtad más profunda se demuestra en la paz que dos almas sienten cuando están juntas en calma.",
        work: "Encontrás la aguja en el pajar: ese bug en el código, ese desbalance en la receta o ese error oculto en la planilla de costos salta hoy a tu vista gracias a tu concentración solitaria.",
        money: "La verdadera riqueza del Ermitaño consiste en necesitar pocas cosas falsas y poseer las mejores herramientas verdaderas. Invertí únicamente en lo que mejore tu oficio o tu paz.",
        spirit: "Estudio nocturno de la filosofía hermética y el simbolismo antiguo; una sola página leída hoy con atención total te revelará más que diez libros leídos con prisa.",
        healthAndEnergy: "Conservación sabia de la energía vital; bajá el volumen de los estímulos sensoriales al caer el sol para permitir una regeneración neuronal profunda."
      },
      {
        love: "Si venías de un desgaste afectivo, El Ermitaño te entrega el bálsamo de la dignidad recuperada: volver a casa a vos mismo, limpiar las heridas en privado y abrir la puerta solo a quien honre tu paz.",
        work: "Posicionamiento como especialista de culto. No intentes competir por precio masivo en la feria ruidosa; apuntá a ser el artesano o experto al que acuden quienes buscan la máxima pureza técnica.",
        money: "Paciencia financiera que rinde frutos seguros: revisar dos veces cada número antes de transferir o invertir te ahorrará hoy un traspié innecesario.",
        spirit: "La Vía de la Lámpara: comprender que no necesitás ver el mapa de los próximos diez años; te basta con ver con claridad meridiana el paso ético y técnico de hoy.",
        healthAndEnergy: "Fortalecimiento de la columna vertebral y el equilibrio postural; cuidá tus ojos y articulaciones respetando pausas de quietud durante el trabajo."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Cerrá la puerta de tu taller o estudio hoy durante un bloque de silencio ininterrumpido y dedicá toda tu lupa analítica a depurar y perfeccionar el núcleo de tu trabajo.",
      prohibition: "Prohibido tomar decisiones apresuradas hoy por presión externa, o salir a buscar aplausos y opiniones en redes o charlas antes de terminar tu auditoría.",
      psychomagicAct: "Esta noche apagá todas las luces eléctricas de tu habitación, encendé una sola vela o pequeña linterna dorada, caminá lentamente con ella en la mano derecha hasta tu mesa de trabajo e iluminá el cuaderno o herramienta principal de tu oficio diciendo: 'Separo la paja del trigo; solo queda la luz pura'.",
      talismanPhrase: "Mi lámpara ilumina el paso exacto; en mi silencio habita la sabiduría que no se equivoca."
    },
    actionOracleVariants: [
      {
        command: "Cerrá la puerta de tu taller o estudio hoy durante un bloque de silencio ininterrumpido y dedicá toda tu lupa analítica a depurar y perfeccionar el núcleo de tu trabajo.",
        prohibition: "Prohibido tomar decisiones apresuradas hoy por presión externa, o salir a buscar aplausos y opiniones en redes o charlas antes de terminar tu auditoría.",
        psychomagicAct: "Esta noche apagá todas las luces eléctricas de tu habitación, encendé una sola vela o pequeña linterna dorada, caminá lentamente con ella en la mano derecha hasta tu mesa de trabajo e iluminá el cuaderno o herramienta principal de tu oficio diciendo: 'Separo la paja del trigo; solo queda la luz pura'.",
        talismanPhrase: "Mi lámpara ilumina el paso exacto; en mi silencio habita la sabiduría que no se equivoca."
      },
      {
        command: "Realizá hoy una poda quirúrgica (Separatio): eliminá de tu proyecto, de tu código o de tu presupuesto tres elementos que solo agregan ruido sin aportar valor esencial.",
        prohibition: "No confundas prudencia con parálisis eterna; auditá a fondo hoy para poder dar el paso con certeza mañana.",
        psychomagicAct: "Dibujá en la primera página de tu libreta de notas la Estrella de Seis Puntas (el Sello de Salomón del farol del Ermitaño) con un punto firme en el centro (la letra Yod), y escribí debajo la única verdad técnica que hoy guía tu camino.",
        talismanPhrase: "Destilo mi experiencia en silencio; soy mi propio faro en la montaña."
      },
      {
        command: "Frená cualquier compra, firma o lanzamiento impulsivo durante veinticuatro horas y revisá los datos fríos en soledad antes de dar el veredicto.",
        prohibition: "No te aísles con amargura de quienes te quieren bien; pedí tu espacio de concentración con calidez y respeto.",
        psychomagicAct: "Tomá una vara, bastón o regla larga con tu mano izquierda apoyándola verticalmente en el suelo como el báculo del peregrino, cerrá los ojos un minuto y sentí cómo tu columna vertebral se alinea con ese eje inquebrantable.",
        talismanPhrase: "Paso a paso por la roca helada, mi constancia silenciosa conquista la cumbre."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano IX alza su linterna en la lectura: el Oráculo te convoca a la calma analítica, al silencio fértil y a la destilación de lo esencial.",
      secondAppearance: "El Ermitaño aparece por segunda vez en tu registro: seguís buscando afuera o en el apuro una respuesta que solo vas a encontrar cuando cierres la puerta y revises los detalles a solas.",
      thirdAppearance: "Tercera llamada del Arcano IX: alto inmediato. El ruido del entorno te está haciendo pasar por alto un dato técnico o financiero crucial. Retirate a auditar hoy mismo.",
      fourthPlusAppearance: "Mandato supremo de Yod: el Oráculo declara estado de retiro estratégico obligatorio. No des un solo paso público hasta haber completado la purificación interna de tu obra."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Tu linterna hermética solo ilumina el próximo metro del sendero en la niebla, y esa luz basta para llegar hasta la cima.",
    counselVariants: [
      "Tu linterna hermética solo ilumina el próximo metro del sendero en la niebla, y esa luz basta para llegar hasta la cima.",
      "El maestro destilador sabe que una sola gota del corazón del alambique vale más que diez barriles de agua turbia.",
      "Quien aprendió a disfrutar de la cumbre de su propia soledad jamás vuelve a vender su libertad por miedo al silencio.",
      "No te apures por brillar en la vidriera antes de tiempo; el carbón se convierte en diamante bajo toneladas de silencio y presión en la roca.",
      "Andá despacio porque vas lejos: el paso corto y seguro del montañés siempre deja atrás al corredor que se queda sin aire en la primera cuesta."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 68,
        y: 38,
        title: "El Farol Octogonal y la Estrella de Seis Puntas",
        secret: "Alzado en su mano derecha a la altura del rostro, el farol de oro encierra el Hexagrama de Salomón (la unión del fuego del espíritu y el agua de la mente) con el núcleo incandescente de la letra Yod. Simboliza la luz de la conciencia individualizada: una verdad que no fue copiada de libros ajenos, sino ganada en el laboratorio de la propia vida.",
        esotericFormula: "Yod (Chispa Divina) + Hexagrama (Sabiduría Hermética) = Luz Propia Inextinguible",
        meditationPrompt: "¿Cuál es la certeza fundamental que tu propia experiencia de vida ya te demostró aunque todo el mundo opine lo contrario?"
      },
      {
        id: "n2",
        x: 32,
        y: 60,
        title: "El Báculo de los Siete Nudos del Peregrino",
        secret: "Empuñado en la mano izquierda y clavado sobre el pedernal, el bastón metálico de siete segmentos representa el eje cerebro-espinal y los siete centros magnéticos del cuerpo dominados por la disciplina ascética. Mientras la lámpara muestra qué camino elegir adelante, el báculo sostiene el peso del cuerpo basándose en la memoria de lo ya caminado.",
        esotericFormula: "Báculo (Experiencia Pasada) + Linterna (Visión Presente) = Paso Seguro hacia el Futuro",
        meditationPrompt: "¿Qué herramienta, oficio o aprendizaje de tus años anteriores es hoy tu mejor bastón de apoyo?"
      },
      {
        id: "n3",
        x: 50,
        y: 80,
        title: "La Cumbre de Obsidiana, Ceniza y Hielo",
        secret: "El peñasco escarpado sobre el mar de nubes indica que el iniciado ha subido por encima de la atmósfera densa de las pasiones colectivas. El frío de la cima no es muerte del corazón, sino la temperatura exacta donde el cristal del intelecto se vuelve perfectamente transparente y libre de distorsión emocional.",
        esotericFormula: "Altitud Espiritual + Silencio Mental = Perspectiva Estratégica Total",
        meditationPrompt: "Si mirás tu problema actual desde diez años en el futuro y desde lo alto de la montaña, ¿qué detalle deja de tener importancia hoy mismo?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO X • LA RUEDA DE LA FORTUNA (KAPH • EL ENGRANAJE DEL DESTINO)
  // ==========================================================================
  {
    id: 10,
    numeral: "X",
    name: "La Rueda de la Fortuna",
    subtitle: "El Engranaje del Destino",
    palette: {
      primary: "#f59e0b",
      secondary: "#ec4899",
      glow: "rgba(245, 158, 11, 0.60)"
    },
    archetype: "wheel",
    correspondences: {
      element: "Fuego Expansivo / Vórtice de los Cuatro Elementos",
      astro: "Júpiter • El Gran Benéfico, Señor de la Fortuna, la Expansión y los Ciclos",
      hebrewLetter: "Kaph (כ) • La Palma de la Mano Cóncava que recibe y modela el Destino",
      treeOfLifePath: "Sendero 21 • Conecta Chesed (La Misericordia de Júpiter) con Netzach (La Victoria de Venus)",
      alchemy: "Circulatio y Rota Philosophica • La rotación continua de los elementos que precipita la Piedra",
      hermeticAxiom: "Todo fluye y refluye; la medida del movimiento hacia la derecha es la medida del movimiento hacia la izquierda, pero el Eje permanece eternamente libre.",
      jungianArchetype: "El Mandala del Sí-Mismo (Self), la Sincronicidad Acausal y el Giro del Destino (Moira)",
      tarotTiming: "Súbito, providencial, jueves jupiterianos o cambio de estación inminente",
      yesNo: "Sí (giro altamente favorable y expansivo si actuás desde el centro con agilidad)",
      keywords: [
        "giro del destino",
        "expansión jupiteriana",
        "sincronicidad activa",
        "eje inmóvil",
        "golpe de fortuna",
        "cosecha kármica",
        "rota taro tora"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Los necios se aferran con las uñas a mi llanta exterior: cuando suben se creen dioses y cuando bajan maldicen al cielo. Desplazate hoy mismo hacia mi cubo central de oro y amatista: quien habita en el eje inmóvil no sufre el giro del tiempo, lo gobierna.",
    oracleVoiceVariants: [
      "Los necios se aferran con las uñas a mi llanta exterior: cuando suben se creen dioses y cuando bajan maldicen al cielo. Desplazate hoy mismo hacia mi cubo central de oro y amatista: quien habita en el eje inmóvil no sufre el giro del tiempo, lo gobierna.",
      "Leé mis cuatro letras sagradas en círculo: ROTA, TARO, ORAT, TORA, ATOR —'La Rueda del Tarot habla la Ley de la Naturaleza'—. Nada de lo que irrumpe hoy en tu puerta es azar ciego; es la matemática exacta de tus semillas volviendo a tu mano.",
      "Soy Júpiter abriendo las esclusas del río. Aquello que estuvo congelado durante meses en la cumbre del Ermitaño hoy entra en rotación veloz: tené las velas desplegadas porque el viento de cola acaba de soplar.",
      "Mirame en las cuatro esquinas del cosmos: el Toro, el León, el Águila y el Ángel me custodian sin pestañear. Cuando tus cuatro elementos están despiertos, cada cambio brusco del mercado o de la vida se convierte en tu escalera de ascenso.",
      "Mi letra es Kaph, el cuenco de la palma abierta. No podés atrapar la nueva fortuna si seguís cerrando el puño alrededor de la moneda vieja."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Rueda de la Fortuna (Arcano X) corona la primera década de los Arcanos Mayores y encarna las Leyes Herméticas del Ritmo, la Polaridad y la Causa y Efecto. En el Árbol de la Vida gobierna el Sendero 21 de la letra Kaph (la Palma de la Mano que recibe el don), tendiendo el canal directo entre los dos astros benéficos de la astrología antigua: el Júpiter majestuoso de Chesed y la Venus victoriosa de Netzach. Su aparición en tu lectura anuncia un cambio de ciclo decisivo, una aceleración vertiginosa de los acontecimientos y la irrupción de la Sincronicidad pura. Lo que parecía trabado se destraba de golpe; se abren oportunidades comerciales, contactos providenciales y giros de fortuna que premian tu preparación previa.",
    meaningVariants: [
      "La Rueda de la Fortuna (Arcano X) corona la primera década de los Arcanos Mayores y encarna las Leyes Herméticas del Ritmo, la Polaridad y la Causa y Efecto. En el Árbol de la Vida gobierna el Sendero 21 de la letra Kaph (la Palma de la Mano que recibe el don), tendiendo el canal directo entre los dos astros benéficos de la astrología antigua: el Júpiter majestuoso de Chesed y la Venus victoriosa de Netzach. Su aparición en tu lectura anuncia un cambio de ciclo decisivo, una aceleración vertiginosa de los acontecimientos y la irrupción de la Sincronicidad pura. Lo que parecía trabado se destraba de golpe; se abren oportunidades comerciales, contactos providenciales y giros de fortuna que premian tu preparación previa.",
      "En la numerología pitagórica, el Diez (la *Tetraktys* sagrada: 1 + 2 + 3 + 4 = 10) reduce nuevamente a la Unidad (1 + 0 = 1). Esto significa que has completado una octava entera de aprendizaje —desde el salto de El Loco y el taller de El Mago hasta la cumbre solitaria de El Ermitaño— y ahora comenzás un nuevo ciclo en una espiral superior de poder, alcance e ingresos.",
      "El diseño esotérico de esta carta (inspirado en la cosmología de Eliphas Lévi y el Tarot iniciático) muestra tres fuerzas alrededor del aro: la corriente evolutiva que asciende (Hermanubis), la corriente involutiva que desciende (Tifón-Set) y, coronando la cima sin girar con el borde, la Esfinge Alada que empuña la espada del equilibrio. El mensaje oracular es cristalino: aprovechá el impulso ascendente con audacia, pero mantené tu mente en el trono de la Esfinge.",
      "Alquímicamente, el Arcano X es la *Circulatio*: la rotación continua donde la tierra se disuelve en agua, el agua se evapora en aire y el aire se inflama en fuego para volver a fijarse en piedra filosofal. En tus negocios y proyectos, indica que la riqueza hoy no está en el estancamiento defensivo, sino en el flujo dinámico, la rotación ágil y la adaptación instantánea al nuevo escenario.",
      "Gobernada por Júpiter, esta carta expande todo lo que toca. Si venías sembrando con rigor y silencio en la etapa anterior, La Rueda multiplica el alcance de tu obra, atrae aliados de peso y coloca tu nombre en el lugar exacto y en el minuto justo donde pasa la corriente de la abundancia."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la obra de Carl Gustav Jung, La Rueda de la Fortuna de ocho rayos rodeada por el Tetramorfos es el arquetipo central del Mandala: la representación geométrica del Sí-Mismo (*Self*) como centro ordenador de toda la psique. La neurosis sufre porque el pequeño Yo egoico vive pegado a la periferia de los hechos cotidianos, subiendo y bajando con cada noticia externa. Cuando desplazás tu identidad desde la llanta ruidosa hacia el Eje Central silencioso, alcanzás la imperturbabilidad de los sabios.",
    psycheVariants: [
      "En la obra de Carl Gustav Jung, La Rueda de la Fortuna de ocho rayos rodeada por el Tetramorfos es el arquetipo central del Mandala: la representación geométrica del Sí-Mismo (*Self*) como centro ordenador de toda la psique. La neurosis humana sufre porque el pequeño Yo egoico vive pegado a la periferia de los hechos cotidianos, subiendo y bajando con cada noticia externa. Cuando desplazás tu identidad desde la llanta ruidosa hacia el Eje Central silencioso, alcanzás la imperturbabilidad de los sabios.",
      "Este Arcano activa directamente el fenómeno que Jung y el físico Wolfgang Pauli denominaron *Sincronicidad*: coincidencias significativas acausales donde un estado profundo de tu psique se refleja misteriosamente en un evento físico externo. Prestá atención absoluta a las 'casualidades' de hoy: no son azar, son el engranaje del Mandala respondiendo a tu vibración.",
      "Psicológicamente, el Arcano X disuelve el apego neurótico a la permanencia estática. Querer que una etapa de la vida dure para siempre sin mutar es pelear contra la ley misma del cosmos. Al abrazar el cambio como aliado evolutivo en lugar de vivirlo como amenaza, tu ansiedad se transforma en entusiasmo creador.",
      "Los Cuatro Vivientes en las esquinas representan las cuatro funciones de la conciencia según Jung: Pensamiento (Hombre/Ángel - Aire), Sentimiento (Águila/Escorpio transmutado - Agua), Intuición (León - Fuego) y Sensación (Toro - Tierra). El giro de la Rueda hoy te pide integrar las cuatro funciones sin dejar ninguna atrofiada."
    ],

    lightAndShadow: "Al derecho (En Luz): Golpe de buena fortuna merecida, aceleración de proyectos, sincronías providenciales, expansión jupiteriana y maestría para capitalizar el cambio. Invertida (En Sombra): Resistencia terca a un cambio de ciclo inevitable, altibajos por falta de eje interno o dejar pasar el tren por indecisión.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Golpe de buena fortuna merecida, aceleración de proyectos, sincronías providenciales, expansión jupiteriana y maestría para capitalizar el cambio. Invertida (En Sombra): Resistencia terca a un cambio de ciclo inevitable, altibajos por falta de eje interno o dejar pasar el tren por indecisión.",
      "En Luz, La Rueda es el surfista maestro que usa la fuerza gigante de la ola para llegar a la costa; en Sombra, es el bañista distraído que se pelea con el mar y termina revolcado en la arena.",
      "Luz activa: Viento de cola comercial, oportunidades sorpresivas, rotación rápida de capital y visión panorámica. Sombra latente: Marearse con el éxito rápido o apostar al azar sin sostener la espada de la Esfinge."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Giro sorpresivo y vivificante del destino afectivo. Anuncia encuentros inesperados con fuerte sello kármico ('estar en el lugar exacto a la hora exacta'), o bien un cambio de etapa rápido y feliz dentro de la pareja que barre por completo la rutina estancada.",
      work: "Aceleración comercial impulsada por Júpiter: aumento en la rotación de ventas, apertura de un canal de distribución mayor, viralización o llegada de una propuesta que te lleva a jugar en una liga superior. Aprovechá la ola en el acto.",
      money: "Flujo expansivo, ganancias rápidas por movimiento inteligente del capital, cobros que se destraban de golpe y excelente ventana para escalar volumen comercial.",
      spirit: "Contemplación desde el *Axis Mundi* (el Eje del Mundo): comprender las leyes del Karma y del Dharma viendo cómo cada acción pasada retorna multiplicada en el giro exacto del tiempo.",
      healthAndEnergy: "Gobierna los biorritmos cíclicos, la circulación sanguínea general y el metabolismo hepático (Júpiter). El movimiento rítmico, el cambio de aire y el optimismo vital elevan tus defensas al máximo."
    },
    domainsVariants: [
      {
        love: "Giro sorpresivo y vivificante del destino afectivo. Anuncia encuentros inesperados con fuerte sello kármico ('estar en el lugar exacto a la hora exacta'), o bien un cambio de etapa rápido y feliz dentro de la pareja que barre por completo la rutina estancada.",
        work: "Aceleración comercial impulsada por Júpiter: aumento en la rotación de ventas, apertura de un canal de distribución mayor, viralización o llegada de una propuesta que te lleva a jugar en una liga superior. Aprovechá la ola en el acto.",
        money: "Flujo expansivo, ganancias rápidas por movimiento inteligente del capital, cobros que se destraban de golpe y excelente ventana para escalar volumen comercial.",
        spirit: "Contemplación desde el *Axis Mundi* (el Eje del Mundo): comprender las leyes del Karma y del Dharma viendo cómo cada acción pasada retorna multiplicada en el giro exacto del tiempo.",
        healthAndEnergy: "Gobierna los biorritmos cíclicos, la circulación sanguínea general y el metabolismo hepático (Júpiter). El movimiento rítmico, el cambio de aire y el optimismo vital elevan tus defensas al máximo."
      },
      {
        love: "Si un vínculo atravesaba una meseta gris, el Arcano X introduce un factor inesperado —un viaje, una mudanza, una noticia feliz— que renueva el entusiasmo y pone la energía de nuevo en circulación.",
        work: "Adaptabilidad estratégica ganadora: el mercado o la tecnología cambian de fase y, gracias a tu versatilidad, sos el primero en reposicionar tu oferta mientras los competidores rígidos siguen quejándose del cambio.",
        money: "El dinero es energía en rotación (*Circulatio*): evitá tener stock o recursos dormidos sin girar; lo que hoy se pone en movimiento comercial inteligente vuelve con creces.",
        spirit: "Lectura fluida del libro de las sincronías: cuando el universo te repite un nombre, un número o una oportunidad tres veces en el día, es la Rueda indicándote dónde apoyar la palanca.",
        healthAndEnergy: "Renovación rápida de la vitalidad tras etapas de cansancio; acompañá este cambio de estación con buena hidratación y limpieza hepática."
      },
      {
        love: "Liberación de viejos bucles repetitivos: al haber comprendido la lección de tus relaciones pasadas, dejás de girar en el mismo círculo kármico y ascendés a una octava afectiva mucho más libre y luminosa.",
        work: "Sinergia de los cuatro elementos en tu empresa: visión creativa (León), solidez de insumos y costos (Toro), estrategia comunicacional (Ángel) y profundidad transformadora (Águila) operando al unísono.",
        money: "Golpe de suerte que encuentra al trabajador despierto: una oportunidad de compra, lote o contrato ventajoso aparece de imprevisto; tené liquidez y reflejos listos para cerrarlo.",
        spirit: "Ecuanimidad real ante el éxito y la prueba: recordar el lema de Salomón ('Esto también pasará') para disfrutar el ascenso con gratitud y usar cada giro como impulso evolutivo.",
        healthAndEnergy: "Energía expansiva y jovial; excelente momento para renovar tu rutina física e incorporar ejercicios de coordinación y cardio dinámico."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Subite hoy mismo a la ola del cambio que tenés enfrente: decí que sí a esa oportunidad nueva, rotá la mercadería o lanzá la actualización sin demora.",
      prohibition: "Prohibido aferrarte por nostalgia a una etapa o método que ya cumplió su ciclo, o quedarte paralizado cuando el escenario se mueve rápido.",
      psychomagicAct: "Trazá hoy en un disco de cartón o papel grueso una rueda de ocho rayos con las letras T-A-R-O en cruz y los cuatro símbolos alquímicos; hacela girar tres veces hacia la derecha sobre tu mesa con una moneda dorada en el centro declarando: 'La Rueda gira a mi favor y yo habito en su centro de oro'.",
      talismanPhrase: "Desde el eje inmóvil de mi conciencia gobierno el giro de la fortuna; todo cambio me eleva."
    },
    actionOracleVariants: [
      {
        command: "Subite hoy mismo a la ola del cambio que tenés enfrente: decí que sí a esa oportunidad nueva, rotá la mercadería o lanzá la actualización sin demora.",
        prohibition: "Prohibido aferrarte por nostalgia a una etapa o método que ya cumplió su ciclo, o quedarte paralizado cuando el escenario se mueve rápido.",
        psychomagicAct: "Trazá hoy en un disco de cartón o papel grueso una rueda de ocho rayos con las letras T-A-R-O en cruz y los cuatro símbolos alquímicos; hacela girar tres veces hacia la derecha sobre tu mesa con una moneda dorada en el centro declarando: 'La Rueda gira a mi favor y yo habito en su centro de oro'.",
        talismanPhrase: "Desde el eje inmóvil de mi conciencia gobierno el giro de la fortuna; todo cambio me eleva."
      },
      {
        command: "Poné en circulación hoy algo que tenías estancado en tu taller, depósito o computadora: mové las piezas para que el flujo de Júpiter tenga por dónde entrar.",
        prohibition: "No te embriagues de orgullo cuando estés arriba en la rueda ni te deprimas cuando toque recalibrar; mantené siempre el rostro sereno de la Esfinge.",
        psychomagicAct: "Parate en el centro de tu habitación mirando al Norte, abrí la palma de tu mano derecha hacia arriba (el gesto de la letra Kaph) y da una vuelta completa y lenta en sentido horario agradeciendo en voz alta el cierre del ciclo viejo y la apertura del nuevo.",
        talismanPhrase: "ROTA TARO ORAT TORA ATOR: comprendo la Ley del Ciclo y cosecho su abundancia."
      },
      {
        command: "Seguí de inmediato la pista de la primera sincronía o contacto inesperado que aparezca en tu día de hoy: ahí está escondida la llave jupiteriana.",
        prohibition: "No postergues para la semana que viene una ventana de oportunidad que depende del ritmo exacto de hoy.",
        psychomagicAct: "Cambiá de lugar hoy cuatro objetos importantes de tu espacio de trabajo (rotándolos en el sentido de las agujas del reloj) para señalarle a tu inconsciente que el estancamiento terminó y comienza una fase de expansión.",
        talismanPhrase: "Mis cuatro elementos están en perfecta armonía; el destino gira impulsando mi Gran Obra."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano X activa el gran astrolabio en tu lectura: los engranajes del tiempo se aceleran y se abre un portal de sincronía y expansión.",
      secondAppearance: "La Rueda de la Fortuna gira por segunda vez ante tus ojos: el destino ya te puso la oportunidad o el cambio de ciclo frente a la puerta; no te quedes aferrado al escalón anterior.",
      thirdAppearance: "Tercera comparecencia del Arcano X: convergencia de alta sincronía. Lo que está ocurriendo en estos días no es casual; movete hacia el eje central y tomá la decisión expansiva ahora.",
      fourthPlusAppearance: "Vórtice mayor de Kaph: estás en el punto exacto de inflexión kármica de tu año. Soltá todo control rígido del pasado y dejá que la octava superior de la Rueda te catapulte."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Para no marearte ni caer cuando el destino gira a toda velocidad, dejá de aferrarte al borde y desplazate hacia el eje central de la rueda.",
    counselVariants: [
      "Para no marearte ni caer cuando el destino gira a toda velocidad, dejá de aferrarte al borde y desplazate hacia el eje central de la rueda.",
      "Lo que los hombres llaman 'golpe de suerte' es simplemente el instante exacto en que una mente preparada en silencio se cruza con el giro de Júpiter.",
      "No maldigas el cambio de viento: el capitán mediocre se queja de la tormenta; el maestro ajusta las velas y llega el doble de rápido a puerto.",
      "Mientras tengas la espada de la Esfinge firme en tu mano, ninguna subida te volverá soberbio y ninguna bajada te quitará la corona.",
      "Cerrá el ciclo nueve con gratitud real y abrí la palma al diez: el universo detesta el vacío y premia el movimiento audaz."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 23,
        title: "La Esfinge Coronada con la Espada en Diagonal",
        secret: "En la cumbre inmóvil del astrolabio se asienta la Esfinge alada de oro y plata empuñando la espada del discernimiento. Ella sintetiza los cuatro signos fijos en un solo cuerpo y no gira con la llanta: representa la Sabiduría Iniciática que gobierna sobre el destino porque comprende sus leyes sin dejarse arrastrar por el vértigo.",
        esotericFormula: "Saber (Cabeza) + Osar (León) + Querer (Toro) + Callar (Alas) = La Esfinge Soberana",
        meditationPrompt: "¿Cómo actuarías hoy ante este cambio si miraras toda la escena desde la serenidad imperturbable de la Esfinge?"
      },
      {
        id: "n2",
        x: 50,
        y: 51,
        title: "La Rueda de Ocho Rayos (T-A-R-O) y el Eje de Amatista",
        secret: "El octograma interior (los 8 vientos del espacio y la regeneración del 8) lleva grabadas en el aro las letras sagradas T-A-R-O alternadas con los símbolos alquímicos del Mercurio, el Azufre, la Sal y el Agua Disolvente. En su centro exacto brilla el cubo inmóvil: el *Punto Cero* espiritual donde no existe el karma porque habita la conciencia pura.",
        esotericFormula: "ROTA (Rueda) = TARO (Tarot) = TORA (Ley) = Eje Inmóvil",
        meditationPrompt: "¿Estás hoy aferrado al borde ruidoso de los resultados externos o plantado en el eje silencioso de tu propósito?"
      },
      {
        id: "n3",
        x: 21,
        y: 25,
        title: "El Tetramorfos Sagrado en las Cuatro Esquinas",
        secret: "Custodiando los cuatro ángulos del relicario velan los Cuatro Vivientes de la visión de Ezequiel y del Apocalipsis: el Ángel (Acuario/Aire), el Águila (Escorpio sublimado/Agua), el León (Leo/Fuego) y el Toro (Tauro/Tierra). Son los cuatro guardianes cósmicos que aseguran que el universo gire dentro de un orden geométrico perfecto.",
        esotericFormula: "Acuario (Mente) + Leo (Corazón) + Tauro (Cuerpo) + Escorpio (Espíritu) = El Mandala Total",
        meditationPrompt: "¿Cuál de los cuatro elementos de tu vida (ideas, pasión, finanzas o transformación profunda) te está pidiendo entrar en rotación hoy?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR • VOLUMEN III (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initSolarGrimoireVolume3() {
  window.DATOS_SOL_3 = DATOS_SOL_3;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_3.forEach(function (card) {
    const existingIdx = window.DATOS_SOL.findIndex(function (c) {
      return Number(c.id) === Number(card.id);
    });
    if (existingIdx !== -1) {
      window.DATOS_SOL[existingIdx] = card;
    } else {
      window.DATOS_SOL.push(card);
    }
  });
  window.DATOS_SOL.sort(function (a, b) {
    return Number(a.id) - Number(b.id);
  });

  // Sincronización automática con MAJOR_ARCANA (datos_cartas.js) para retrocompatibilidad total
  if (!window.MAJOR_ARCANA) {
    window.MAJOR_ARCANA = [];
  }
  DATOS_SOL_3.forEach(function (solarCard) {
    const idx = window.MAJOR_ARCANA.findIndex(function (c) {
      return Number(c.id) === Number(solarCard.id);
    });
    if (idx !== -1) {
      window.MAJOR_ARCANA[idx] = Object.assign({}, window.MAJOR_ARCANA[idx], solarCard);
    } else {
      window.MAJOR_ARCANA.push(solarCard);
    }
  });
  window.MAJOR_ARCANA.sort(function (a, b) {
    return Number(a.id) - Number(b.id);
  });

  // Asegurar que SolarOracleEngine esté disponible sin importar el orden de carga de los scripts
  if (!window.SolarOracleEngine) {
    const STORAGE_KEY = "velo_astral_solar_grimoire_v2";

    function readGrimoireMemory() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { cards: {} };
      } catch (err) {
        return { cards: {} };
      }
    }

    function writeGrimoireMemory(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (err) {
        // Silencioso si el navegador restringe localStorage
      }
    }

    function pickVariant(variantsArray, fallbackValue, counter, offset) {
      if (Array.isArray(variantsArray) && variantsArray.length > 0) {
        const idx = Math.abs((counter + (offset || 0)) % variantsArray.length);
        return variantsArray[idx];
      }
      return fallbackValue;
    }

    window.SolarOracleEngine = {
      resolveLivingCard: function (cardOrId, recordDraw) {
        const shouldRecord = recordDraw !== false;
        const pool = window.MAJOR_ARCANA || window.DATOS_SOL || [];
        const baseCard =
          typeof cardOrId === "object" && cardOrId !== null
            ? cardOrId
            : pool.find(function (c) {
                return Number(c.id) === Number(cardOrId);
              });

        if (!baseCard) return null;

        const memory = readGrimoireMemory();
        const cardKey = String(baseCard.id);
        const now = Date.now();
        const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

        const record = memory.cards[cardKey] || {
          totalDraws: 0,
          variantCursor: -1,
          recentTimestamps: []
        };

        const validTimestamps = (record.recentTimestamps || []).filter(function (ts) {
          return now - ts < SEVEN_DAYS_MS;
        });

        let cursor = record.variantCursor;
        if (shouldRecord) {
          cursor = record.variantCursor + 1;
          validTimestamps.push(now);
          record.totalDraws = (record.totalDraws || 0) + 1;
          record.variantCursor = cursor;
          record.recentTimestamps = validTimestamps.slice(-15);
          memory.cards[cardKey] = record;
          writeGrimoireMemory(memory);
        } else if (cursor < 0) {
          cursor = 0;
        }

        const recentCount = validTimestamps.length;
        let synchronicityMessage = null;
        if (baseCard.synchronicityHook) {
          if (recentCount >= 4) {
            synchronicityMessage =
              baseCard.synchronicityHook.fourthPlusAppearance ||
              baseCard.synchronicityHook.thirdAppearance;
          } else if (recentCount === 3) {
            synchronicityMessage = baseCard.synchronicityHook.thirdAppearance;
          } else if (recentCount === 2) {
            synchronicityMessage = baseCard.synchronicityHook.secondAppearance;
          } else {
            synchronicityMessage = baseCard.synchronicityHook.firstAppearance || null;
          }
        }

        const activeDomains = pickVariant(baseCard.domainsVariants, baseCard.domains, cursor, 0);
        const activeActionOracle = pickVariant(
          baseCard.actionOracleVariants,
          baseCard.actionOracle,
          cursor,
          1
        );

        return Object.assign({}, baseCard, {
          oracleVoice: pickVariant(baseCard.oracleVoiceVariants, baseCard.oracleVoice, cursor, 0),
          meaning: pickVariant(baseCard.meaningVariants, baseCard.meaning, cursor, 0),
          psyche: pickVariant(baseCard.psycheVariants, baseCard.psyche, cursor, 0),
          lightAndShadow: pickVariant(
            baseCard.lightAndShadowVariants,
            baseCard.lightAndShadow,
            cursor,
            0
          ),
          domains: activeDomains,
          actionOracle: activeActionOracle,
          counsel: pickVariant(baseCard.counselVariants, baseCard.counsel, cursor, 0),
          activeSynchronicityAlert: synchronicityMessage,
          recentDrawCount: recentCount,
          totalDrawsAllTime: record.totalDraws
        });
      },

      resetMemory: function () {
        writeGrimoireMemory({ cards: {} });
      }
    };
  }
})();
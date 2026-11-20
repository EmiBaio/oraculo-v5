// ============================================================================
// ARCHIVO: datos_sol_6.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN VI: ARCANOS XVIII, XIX, XX y XXI
// XVIII • La Luna | XIX • El Sol | XX • El Juicio | XXI • El Mundo
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_6 = [
  // ==========================================================================
  // ARCANO XVIII • LA LUNA (QOPH • EL ESPEJISMO DE LAS PROFUNDIDADES)
  // ==========================================================================
  {
    id: 18,
    numeral: "XVIII",
    name: "La Luna",
    subtitle: "El Espejismo de las Profundidades",
    palette: {
      primary: "#818cf8",
      secondary: "#2dd4bf",
      glow: "rgba(129, 140, 248, 0.6)"
    },
    archetype: "moon",
    correspondences: {
      element: "Agua Abisal / Magnetismo Astral Nocturno",
      astro: "Piscis • Venus Exaltada en el Océano de Neptuno y Júpiter",
      hebrewLetter: "Qoph (ק) • La Nuca, el Ojo de la Aguja y la Conciencia que opera durante el Sueño",
      treeOfLifePath: "Sendero 29 • Conecta Netzach (El Instinto de Venus) con Malkuth (El Reino Físico)",
      alchemy: "Solutio Nocturna y Fermentatio Lunar • El cruce del Mar de los Filósofos antes del Alba",
      hermeticAxiom: "Quien cruza entre las dos torres de la medianoche sin creer en los fantasmas de la niebla ve nacer el Sol sobre su propia frente.",
      jungianArchetype: "El Inconsciente Colectivo Abisal, la Noche Oscura del Alma y la Matriz Onírica",
      tarotTiming: "Febrero-Marzo (Piscis), horas previas al amanecer o un ciclo sinódico de 29 días",
      yesNo: "En penumbra (no decidas a ciegas; esperá a que baje la marea y se revele lo oculto)",
      keywords: [
        "océano subconsciente",
        "intuición psíquica",
        "travesía onírica",
        "espejismos astrales",
        "memoria ancestral",
        "umbral de las torres",
        "gestación secreta"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "No uses los ojos del mediodía para caminar por mi reino de plata. En mi penumbra las piedras parecen monstruos y las sombras parecen gigantes, pero si seguís el hilo dorado de tu instinto entre el lobo y el perro, cruzarás las dos torres intacto antes de que cante el alba.",
    oracleVoiceVariants: [
      "No uses los ojos del mediodía para caminar por mi reino de plata. En mi penumbra las piedras parecen monstruos y las sombras parecen gigantes, pero si seguís el hilo dorado de tu instinto entre el lobo y el perro, cruzarás las dos torres intacto antes de que cante el alba.",
      "Mirá al escarabajo sagrado que sube desde el fondo cenagoso de mi estanque: él empuja en la oscuridad la esfera que mañana será el Sol. Lo que hoy sentís como incertidumbre o nostalgia es el barro exacto donde se está amasando tu próxima iluminación.",
      "Mi letra secreta es Qoph, la nuca y el cerebelo antiguo que vela mientras tu razón duerme. Esta noche no te hablaré con discursos lógicos; te entregaré el mapa cifrado en la última imagen de tu sueño.",
      "A un lado del sendero aúlla el lobo salvaje de tus miedos primitivos; al otro ladra el perro domesticado de tus costumbres. No te detengas a apedrear a ninguno de los dos: caminá por el centro y dejalos ladrar a la luna.",
      "Bajo mis dieciocho gotas de rocío magnético caen los velos de quienes te rodean. En la luz del día todos fingen compostura; en mi noche plateada se les escapa el verdadero deseo y el verdadero temor."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Luna (Arcano XVIII) es el portal de la Iniciación Nocturna, la Matriz del Inconsciente Profundo y la última gran prueba del caminante antes de alcanzar la claridad inmortal de El Sol. En el Árbol de la Vida gobierna el Sendero 29 de la letra Qoph ('La Nuca' o 'La Inteligencia Corporal'), que une el mundo astral de Netzach con el plano físico de Malkuth bajo el signo oceánico de Piscis. Su aparición en tu lectura señala un período de altísima sensibilidad psíquica, imaginación poética desbordante y gestación subterránea, pero te advierte que en el terreno externo hay niebla, ambigüedad o información incompleta: caminá con paso lento y felino, confiando más en tu olfato visceral que en las promesas verbales.",
    meaningVariants: [
      "La Luna (Arcano XVIII) es el portal de la Iniciación Nocturna, la Matriz del Inconsciente Profundo y la última gran prueba del caminante antes de alcanzar la claridad inmortal de El Sol. En el Árbol de la Vida gobierna el Sendero 29 de la letra Qoph ('La Nuca' o 'La Inteligencia Corporal'), que une el mundo astral de Netzach con el plano físico de Malkuth bajo el signo oceánico de Piscis. Su aparición en tu lectura señala un período de altísima sensibilidad psíquica, imaginación poética desbordante y gestación subterránea, pero te advierte que en el terreno externo hay niebla, ambigüedad o información incompleta: caminá con paso lento y felino, confiando más en tu olfato visceral que en las promesas verbales.",
      "En la mitología solar egipcia del *Amduat*, esta carta corresponde a la duodécima hora de la noche, cuando la barca solar atraviesa las cavernas acuáticas bajo la forma de *Khepri* (el cangrejo o escarabajo que emerge de las aguas primordiales) justo antes de renacer en el horizonte oriental. Esto significa que aunque hoy no veas todavía el resultado final a plena luz, el trabajo de resurrección ya está ocurriendo en las profundidades.",
      "Observá la diferencia entre La Sacerdotisa (Arcano II) y La Luna (Arcano XVIII, 1 + 8 = 9): mientras La Sacerdotisa contempla el misterio sentada en el templo superior, en La Luna debés cruzar a pie el paisaje salvaje de la psique. Las dos torres al fondo marcan el *Finis Terrae* (las Columnas de Hércules) de tu mente racional: más allá de ellas, solo el artista, el místico y el estratega intuitivo saben navegar.",
      "Alquímicamente, el Arcano XVIII rige la *Fermentatio Lunar* y el peligro de los 'fantasmas del vaso': cuando la materia se calienta en la oscuridad, desprende vapores irisados (la Cola de Pavo Real o *Cauda Pavonis*) que pueden fascinar o asustar al operador inexperto. No confundas un espejismo pasajero del miedo con la realidad sólida; mantené el fuego constante y la niebla se condensará en plata pura.",
      "Para la creación artística, la literatura, el diseño de mundos, la psicología y la perfumería o maceración botánica, La Luna es una mina de tesoros inagotable. Te permite pescar en el océano de Piscis símbolos, melodías y atmósferas hipnóticas que hechizan el alma del público sin pasar por el filtro de su razón."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología profunda de Jung, La Luna es el descenso directo al *Inconsciente Colectivo* y a la memoria filogenética (representada por el crustáceo prehistórico que sale del agua). Cuando este Arcano se activa, la frontera entre el consciente y el inconsciente se vuelve porosa: afloran sueños vívidos, recuerdos olvidados de la infancia y complejos emocionales antiguos. El secreto clínico para no marearse es recordar que los monstruos de la noche son simplemente contenidos psíquicos propios buscando ser integrados a la luz de la conciencia.",
    psycheVariants: [
      "En la psicología profunda de Jung, La Luna es el descenso directo al *Inconsciente Colectivo* y a la memoria filogenética (representada por el crustáceo prehistórico que sale del agua). Cuando este Arcano se activa, la frontera entre el consciente y el inconsciente se vuelve porosa: afloran sueños vívidos, recuerdos olvidados de la infancia y complejos emocionales antiguos. El secreto clínico para no marearse es recordar que los monstruos de la noche son simplemente contenidos psíquicos propios buscando ser integrados a la luz de la conciencia.",
      "Este Arcano diagnostica el fenómeno de la *Proyección Fantasmagórica*. Así como de noche un abrigo colgado en la silla parece un intruso hasta que encendés la lámpara, tu mente puede estar proyectando hoy temores antiguos sobre una situación actual que no tiene nada que ver con tu pasado. Distinguí con rigor entre el peligro real presente y el fantasma de la memoria.",
      "El *Sefer Yetzirah* atribuye a la letra Qoph y a Piscis la facultad del Sueño Reparador y la regeneración celular nocturna. Mientras tu Yo diurno descansa, el cerebro posterior (la nuca) reorganiza las sinapsis y resuelve problemas complejos que la vigilia estresada no pudo destrabar. Confiá hoy en el trabajo nocturno de tu mente profunda.",
      "El perro y el lobo aullando a los lados del camino representan las dos mitades de tu instinto: la parte socialmente adaptada que busca seguridad (el perro) y la parte indómita que rechaza toda correa (el lobo). La salud psicológica hoy exige escuchar a ambos guardianes sin identificarte con el miedo de ninguno."
    ],

    lightAndShadow: "Al derecho (En Luz): Intuición psíquica extraordinaria, inspiración poética y artística hipnótica, sueños reveladores, detección de agendas ocultas y travesía exitosa de la incertidumbre. Invertida (En Sombra): Espejismos, autoengaño, ansiedad irracional, engaños que salen a la luz o quedar atrapado en la nostalgia.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Intuición psíquica extraordinaria, inspiración poética y artística hipnótica, sueños reveladores, detección de agendas ocultas y travesía exitosa de la incertidumbre. Invertida (En Sombra): Espejismos, autoengaño, ansiedad irracional, engaños que salen a la luz o quedar atrapado en la nostalgia.",
      "En Luz, La Luna es el navegante nocturno que lee las mareas invisibles y rescata perlas del fondo del mar; en Sombra, es el caminante asustado que huye de su propia sombra reflejada en el agua.",
      "Luz activa: Magnetismo misterioso, creatividad onírica, empatía telepática y gestación silenciosa. Sombra latente: Confusión en contratos mal redactados, celos infundados o insomnio por rumiación."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Magnetismo hipnótico, romanticismo profundo y conexión casi telepática, pero con advertencia de no idealizar a ciegas ni callar dudas que generen fantasmas. En pareja, pide hablar con suavidad para disipar cualquier malentendido o celo silencioso; si estás conociendo a alguien, dejá que pasen unos días hasta que baje la espuma y veas su realidad diurna.",
      work: "Momento cumbre para creadores de ficción, desarrolladores de experiencias inmersivas, artistas visuales, psicólogos y maestros destiladores o perfumistas. En lo comercial y administrativo, aplicá cautela máxima: no des nada por supuesto en acuerdos verbales y revisá dos veces lo que no esté claro.",
      money: "Prudencia ante negocios que prometen ganancias mágicas o cuyos números parecen borrosos. Cuidá tu capital de gastos hormiga invisibles y esperá a que la información financiera sea cien por ciento transparente antes de invertir.",
      spirit: "Viaje astral consciente, lectura de los registros oníricos y dominio de la magia lunar: aprender a caminar con certeza serena en medio del misterio.",
      healthAndEnergy: "Gobierna el sistema límbico, la glándula pineal (melatonina), el sistema linfático y los pies (Piscis). El sueño profundo, los baños calientes con sal marina y el silencio nocturno son hoy tu medicina suprema."
    },
    domainsVariants: [
      {
        love: "Magnetismo hipnótico, romanticismo profundo y conexión casi telepática, pero con advertencia de no idealizar a ciegas ni callar dudas que generen fantasmas. En pareja, pide hablar con suavidad para disipar cualquier malentendido o celo silencioso; si estás conociendo a alguien, dejá que pasen unos días hasta que baje la espuma y veas su realidad diurna.",
        work: "Momento cumbre para creadores de ficción, desarrolladores de experiencias inmersivas, artistas visuales, psicólogos y maestros destiladores o perfumistas. En lo comercial y administrativo, aplicá cautela máxima: no des nada por supuesto en acuerdos verbales y revisá dos veces lo que no esté claro.",
        money: "Prudencia ante negocios que prometen ganancias mágicas o cuyos números parecen borrosos. Cuidá tu capital de gastos hormiga invisibles y esperá a que la información financiera sea cien por ciento transparente antes de invertir.",
        spirit: "Viaje astral consciente, lectura de los registros oníricos y dominio de la magia lunar: aprender a caminar con certeza serena en medio del misterio.",
        healthAndEnergy: "Gobierna el sistema límbico, la glándula pineal (melatonina), el sistema linfático y los pies (Piscis). El sueño profundo, los baños calientes con sal marina y el silencio nocturno son hoy tu medicina suprema."
      },
      {
        love: "Tus antenas emocionales están captando hoy lo que el otro siente antes de que lo diga. Usá esa percepción fina para abrazar y comprender, nunca para armar novelas de sospecha en tu cabeza.",
        work: "El poder del misterio y del *storytelling*: dotar a tu producto o plataforma de una atmósfera mística y envolvente hoy genera una fascinación adictiva que ningún discurso frío puede igualar.",
        money: "Si hay una negociación donde sentís que te están ocultando una carta bajo la manga, hacé caso a tu olfato: demorá la firma cuarenta y ocho horas y el dato oculto saldrá solo a la superficie.",
        spirit: "Superación de la 'Noche Oscura del Sentido' de San Juan de la Cruz: confiar en la guía interior cuando los apoyos externos parecen en silencio.",
        healthAndEnergy: "Atención a la retención de líquidos y a la sensibilidad digestiva o alérgica; tu cuerpo actúa hoy como una esponja psíquica del ambiente, así que elegí bien con quién compartís la mesa."
      },
      {
        love: "Un recuerdo o vínculo del pasado puede reaparecer en sueños o en mensajes para que termines de comprender su lección kármica y cierres la puerta en paz definitiva.",
        work: "Gestación en cámara oscura: igual que un botánico que macera en oscuridad para extraer sus aceites esenciales más finos, tu proyecto está absorbiendo fuerza en silencio antes de salir al sol.",
        money: "Ingresos ligados a la creatividad nocturna, el entretenimiento, la estética, el esoterismo o los bienes líquidos.",
        spirit: "El despertar de Khepri en el fondo del estanque: recordar que el momento más oscuro de la noche es exactamente el minuto previo al amanecer.",
        healthAndEnergy: "Respetá sagramente tu ciclo de sueño hoy; una hora extra de descanso en oscuridad total te dará más claridad estratégica que cinco horas de esfuerzo cansado."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Confiá hoy en tu radar instintivo para detectar lo que no se dice en voz alta, anotá tus sueños apenas abras los ojos y caminá sin apuro hasta que disipe la niebla.",
      prohibition: "Prohibido firmar hoy papeles confusos, creer en promesas sin respaldo documental o tomar decisiones definitivas empujado por el miedo nocturno.",
      psychomagicAct: "Esta noche colocá un cuenco con agua y una moneda o anillo de plata cerca de tu ventana para que reciba el reflejo de la noche; antes de acostarte, mojá tus pulgares en esa agua y tocá tu nuca (letra Qoph) y tu entrecejo diciendo: 'Atravieso los espejismos en paz; mis sueños me entregan la verdad desnuda'.",
      talismanPhrase: "Camino sereno entre las dos torres de la noche; mi instinto ve en la penumbra y el alba ya me pertenece."
    },
    actionOracleVariants: [
      {
        command: "Confiá hoy en tu radar instintivo para detectar lo que no se dice en voz alta, anotá tus sueños apenas abras los ojos y caminá sin apuro hasta que disipe la niebla.",
        prohibition: "Prohibido firmar hoy papeles confusos, creer en promesas sin respaldo documental o tomar decisiones definitivas empujado por el miedo nocturno.",
        psychomagicAct: "Esta noche colocá un cuenco con agua y una moneda o anillo de plata cerca de tu ventana para que reciba el reflejo de la noche; antes de acostarte, mojá tus pulgares en esa agua y tocá tu nuca (letra Qoph) y tu entrecejo diciendo: 'Atravieso los espejismos en paz; mis sueños me entregan la verdad desnuda'.",
        talismanPhrase: "Camino sereno entre las dos torres de la noche; mi instinto ve en la penumbra y el alba ya me pertenece."
      },
      {
        command: "Volcá hoy cualquier inquietud, melancolía o imagen extraña de tu mente en creación pura: código, diseño, música o escritura.",
        prohibition: "No alimentes suposiciones ni películas mentales sobre lo que piensan los demás; si tenés una duda real, encendé la luz y pedí datos concretos.",
        psychomagicAct: "Escribí en un papel con lápiz gris el miedo o sospecha difusa que te ronda, sumergilo dentro de un vaso con agua y sal gruesa durante toda la noche, y por la mañana tirá el agua por el desagüe declarando que toda ilusión engañosa se disuelve.",
        talismanPhrase: "Los guardianes de la noche me abren paso; ninguna sombra detiene mi ascenso hacia el Sol."
      },
      {
        command: "Dale veinticuatro horas de decantación a cualquier propuesta ambigua que recibas hoy: dejá que la marea baje para ver qué hay realmente en el fondo.",
        prohibition: "No expongas tu energía hoy a lugares ruidosos o personas emocionalmente vampíricas; resguardá tu campo magnético.",
        psychomagicAct: "Dibujá una luna creciente plateada y dos pequeñas torres a los lados en la última hoja de tu cuaderno, trazando una línea dorada que pase firme por el medio hacia arriba como símbolo de tu travesía victoriosa.",
        talismanPhrase: "Como el escarabajo sagrado del abismo, empujo mi obra desde la sombra hasta el mediodía."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVIII extiende su manto de plata sobre la tirada: entrás en territorio de intuición fina, sueños reveladores y lectura debajo del agua.",
      secondAppearance: "La Luna aparece por segunda vez en tu registro: hay un espejismo, un miedo proyectado o un detalle oculto en este asunto que te pide frenar la prisa y observar con ojos nocturnos.",
      thirdAppearance: "Tercera comparecencia del Arcano XVIII: alerta de neblina alta. No des ni un paso a ciegas ni creas en apariencias; esperá a que la verdad salga del fondo del estanque.",
      fourthPlusAppearance: "Iniciación mayor de Qoph: estás cruzando el umbral final de las dos torres antes del amanecer. Mantené el rumbo recto por el centro sin escuchar los ladridos del miedo: El Sol está a un paso."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Caminá con paso sereno entre las dos torres de la noche sin dejarte hechizar por las sombras: el alba siempre responde a quien mantiene el rumbo.",
    counselVariants: [
      "Caminá con paso sereno entre las dos torres de la noche sin dejarte hechizar por las sombras: el alba siempre responde a quien mantiene el rumbo.",
      "De noche todos los gatos parecen pardos y todas las ramas parecen serpientes; no sentencies nada hasta que amanezca el Sol.",
      "El mar más profundo y oscuro es el que guarda las perlas más grandes para quien sabe bucear sin pánico.",
      "Cuando el lobo del miedo y el perro de la costumbre aúllen a tus costados, no te detengas a discutir con ellos: seguí subiendo por el sendero de oro.",
      "Honrá tus sueños de medianoche: son las cartas selladas que tu alma le envía a tu razón."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Rostro del Eclipse y las Dieciocho Gotas de Rocío",
        secret: "En lo alto del cielo nocturno brilla el disco de la Luna en triple aspecto (creciente, llena y menguante en eclipse con el Sol oculto detrás), derramando dieciocho gotas de rocío de oro y plata (el número 18 = *Chai*, la Vida que desciende al subconsciente). Simboliza que incluso en la noche más cerrada, la luz que ves reflejada proviene secretamente del Sol.",
        esotericFormula: "Luna (Espejo de Plata) + 18 Gotas de Rocío = Nutrición del Cuerpo Astral",
        meditationPrompt: "¿Qué mensaje o intuición sutil ha estado goteando en tus sueños o presentimientos de los últimos días?"
      },
      {
        id: "n2",
        x: 24,
        y: 52,
        title: "Las Torres del Umbral, el Lobo y el Perro",
        secret: "Flanqueando el sendero que sube hacia las montañas se alzan dos fortalezas de obsidiana y piedra lunar, mientras abajo aúllan el lobo (la naturaleza salvaje e indómita) y el perro (la mente domesticada y civilizada). Representan los guardianes del umbral psíquico que el iniciado debe dejar atrás sin temor para cruzar hacia la iluminación solar.",
        esotericFormula: "Lobo (Instinto Salvaje) + Perro (Hábito Social) -> Sendero Central entre las Torres",
        meditationPrompt: "¿Qué miedo antiguo te está ladrando hoy a los costados del camino para intentar que no avances hacia tu meta?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Guardián del Abismo (El Cangrejo / Escarabajo Khepri)",
        secret: "Emergiendo desde las aguas oscuras del estanque inferior hacia la tierra firme, el crustáceo o escarabajo sagrado simboliza los impulsos más antiguos de la psique que suben a la superficie para ser redimidos, y al dios egipcio *Khepri* que empuja pacientemente el disco del Sol desde el inframundo hacia el nuevo día.",
        esotericFormula: "Abismo de las Aguas -> Ascenso de Khepri -> Renacimiento Solar",
        meditationPrompt: "¿Qué talento profundo o verdad guardada en tu interior está saliendo hoy a la superficie después de mucho tiempo en silencio?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIX • EL SOL (RESH • EL ESPLENDOR DEL MEDIODÍA INMORTAL)
  // ==========================================================================
  {
    id: 19,
    numeral: "XIX",
    name: "El Sol",
    subtitle: "El Esplendor del Mediodía Inmortal",
    palette: {
      primary: "#fde047",
      secondary: "#f59e0b",
      glow: "rgba(253, 224, 71, 0.65)"
    },
    archetype: "sun",
    correspondences: {
      element: "Fuego Solar Puro / Luz Dorada de Tiphereth",
      astro: "El Sol • El Rey del Sistema Planetario, Dador de la Vida, el Oro y la Verdad",
      hebrewLetter: "Resh (ר) • La Cabeza Iluminada, el Rostro Real y la Conciencia Despierta (Valor: 200)",
      treeOfLifePath: "Sendero 30 • Conecta Hod (El Intelecto Mercurial) con Yesod (El Fundamento Vital)",
      alchemy: "Rubedo y Aurum Potabile • El Oro Filosófico Consumado y el Sol Rojo de los Adeptos",
      hermeticAxiom: "Cuando el Sol del Espíritu se alza en su cenit, ningún fantasma de la noche conserva su sombra; todo es claro, cálido y fecundo.",
      jungianArchetype: "La Conciencia Solar Iluminada, los Gemelos Divinos Reconciliados y la Plenitud del Sí-Mismo",
      tarotTiming: "Pleno verano (Leo), al mediodía exacto, domingos o realización radiante e inmediata",
      yesNo: "Sí absoluto y radiante (triunfo total, verdad sin sombras y bendición suprema)",
      keywords: [
        "éxito rotundo",
        "rubedo alquímica",
        "claridad meridiana",
        "abundancia vital",
        "fraternidad luminosa",
        "verdad sin sombras",
        "gloria solar"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Abrí los ojos de par en par: la noche de La Luna ha terminado y ya estás del otro lado de las torres. Bajo mis veintiún rayos de oro vivo no queda un solo rincón para la duda, la escasez ni el miedo. Salí al jardín y reclamá tu mediodía.",
    oracleVoiceVariants: [
      "Abrí los ojos de par en par: la noche de La Luna ha terminado y ya estás del otro lado de las torres. Bajo mis veintiún rayos de oro vivo no queda un solo rincón para la duda, la escasez ni el miedo. Salí al jardín y reclamá tu mediodía.",
      "Mirá mis rayos: alterno una lanza recta que ilumina la mente con una llama ondulada que entibia el corazón. Porque la verdadera sabiduría jamás es fría, y el verdadero amor jamás es ciego.",
      "Detrás de los niños gemelos quedó el muro de piedra de las viejas limitaciones. Antes ese muro era una frontera que no te dejaba pasar; hoy es apenas el respaldo bajo que protege tu jardín de oro.",
      "Mi letra sagrada es Resh, la Cabeza coronada de luz. Dejá de esconder tu grandeza por temor a encandilar a los mediocres: el Sol no le pide permiso a las luciérnagas para encender la mañana.",
      "Como los cuatro girasoles que giran su rostro hacia mi disco, orientá hoy cada pensamiento, cada negocio y cada afecto hacia la verdad más alta: todo lo que toca mi luz se convierte en oro."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Sol (Arcano XIX) es el emblema supremo de la Gloria, la Claridad Absoluta, la Salud Radiante y el Triunfo sin Sombras de todo el Tarot. En el Árbol de la Vida gobierna el Sendero 30 de la letra Resh ('La Cabeza'), denominada en la Cábala la *Inteligencia Colectiva*, que une la mente estructurada de Hod con la vitalidad imaginativa de Yesod bajo el regente real del sistema: el Astro Rey. Su aparición en tu lectura barre en un segundo cualquier incertidumbre, bloqueo o nubarrón previo. Anuncia plenitud económica, reconocimiento público, alegría genuina, alianzas fraternales puras y la coronación luminosa de tus esfuerzos en el mundo real.",
    meaningVariants: [
      "El Sol (Arcano XIX) es el emblema supremo de la Gloria, la Claridad Absoluta, la Salud Radiante y el Triunfo sin Sombras de todo el Tarot. En el Árbol de la Vida gobierna el Sendero 30 de la letra Resh ('La Cabeza'), denominada en la Cábala la *Inteligencia Colectiva*, que une la mente estructurada de Hod con la vitalidad imaginativa de Yesod bajo el regente real del sistema: el Astro Rey. Su aparición en tu lectura barre en un segundo cualquier incertidumbre, bloqueo o nubarrón previo. Anuncia plenitud económica, reconocimiento público, alegría genuina, alianzas fraternales puras y la coronación luminosa de tus esfuerzos en el mundo real.",
      "Alquímicamente, el Arcano XIX marca la llegada a la *Rubedo* (la Obra al Rojo y al Oro): tras la ceniza negra de La Muerte (Nigredo) y el rocío plateado de La Estrella y La Luna (Albedo), el azufre y el mercurio se fijan definitivamente en el *Sol Philosophorum*, el Oro Vivo de los sabios. Tu proyecto, tu marca o tu camino personal ha superado las etapas de prueba y entra ahora en su fase de máximo esplendor y rentabilidad.",
      "Numéricamente, el Diecinueve (19) une el principio creador del Uno (El Mago) con la sabiduría consumada del Nueve (El Ermitaño), sumando Diez (1 + 9 = 10, La Rueda) y reduciendo finalmente a la Unidad Solar (1 + 0 = 1). Es el retorno a la fuente en su octava más alta: tenés la frescura entusiasta del primer día unida a la maestría invencible de quien ya cruzó todo el laberinto.",
      "Observá la pareja de Gemelos Solares que se toman de la mano en el jardín amurallado: son la evolución final de la pareja que estuvo encadenada en El Diablo (Arcano XV) y que cayó de La Torre (Arcano XVI). Ahora están libres, desnudos de ego y reconciliados a plena luz del día. Tu razón (Hod) y tu intuición vital (Yesod) danzan hoy en perfecta fraternidad.",
      "El Sol es la carta de la Verdad Evidente (*Aletheia*). Todo lo que estaba oculto queda expuesto con nitidez cristalina, toda negociación se aclara con cartas sobre la mesa y tu sola presencia irradia una confianza magnética que contagia entusiasmo y cierra acuerdos con alegría."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología analítica de Jung, El Sol representa la emergencia triunfal de la *Conciencia Iluminada* tras haber integrado los contenidos del inconsciente nocturno. Los dos niños danzando en el centro encarnan al *Niño Divino* y la unión armónica de *Consciente e Inconsciente* bajo la mirada paterna y cálida del Sí-Mismo (*Self*). Tu psique hoy recupera la capacidad de gozar del presente sin culpa, sin cinismo y sin miedo al futuro.",
    psycheVariants: [
      "En la psicología analítica de Jung, El Sol representa la emergencia triunfal de la *Conciencia Iluminada* tras haber integrado los contenidos del inconsciente nocturno. Los dos niños danzando en el centro encarnan al *Niño Divino* y la unión armónica de *Consciente e Inconsciente* bajo la mirada paterna y cálida del Sí-Mismo (*Self*). Tu psique hoy recupera la capacidad de gozar del presente sin culpa, sin cinismo y sin miedo al futuro.",
      "Este Arcano cura la 'adicción a la complejidad y al drama'. A veces el intelecto se acostumbra tanto a luchar en la oscuridad que desconfía cuando las cosas salen fáciles, claras y felices. El Sol te ordena desactivar el radar de amenazas: tenés permiso absoluto para celebrar tu victoria y habitar la simplicidad luminosa.",
      "El muro de piedra que queda *detrás* de los gemelos simboliza las defensas del Ego en su lugar saludable: ya no es una muralla alta que te encierra como en La Torre, sino un cerco bajo que delimita tu jardín privado sin taparte jamás el horizonte ni el cielo.",
      "Vigilá únicamente el peligro de la *Hubris* solar (la insolación del ego que olvida que la luz viene del cosmos). Brillá con toda tu potencia real, pero mantené la sencillez y la generosidad de los niños del jardín: cuanto más compartís tu calor, más grande es tu reinado."
    ],

    lightAndShadow: "Al derecho (En Luz): Éxito rotundo, plenitud económica y creativa, felicidad compartida, claridad mental absoluta, vitalidad radiante, reconocimiento público y verdad transparente. Invertida (En Sombra): Éxito demorado por una nube pasajera, vanidad ostentosa, exceso de orgullo o agotamiento por querer brillar sin pausa.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Éxito rotundo, plenitud económica y creativa, felicidad compartida, claridad mental absoluta, vitalidad radiante, reconocimiento público y verdad transparente. Invertida (En Sombra): Éxito demorado por una nube pasajera, vanidad ostentosa, exceso de orgullo o agotamiento por querer brillar sin pausa.",
      "En Luz, El Sol es el mediodía generoso que hace madurar todos los frutos del valle; en Sombra, es el espejismo de la vanidad que busca aplausos vacíos en lugar de calor verdadero.",
      "Luz activa: Triunfo comercial indiscutido, salud de oro, carisma magnético, alianzas leales y alegría vital. Sombra latente: Subestimar detalles menores por exceso de euforia."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "La carta más cálida, feliz y luminosa para el amor. En pareja, anuncia una etapa de plenitud radiante, celebración, transparencia total sin secretos, convivencia armoniosa o llegada de hijos y grandes festejos; si estás libre, tu brillo magnético y tu alegría atraen un amor noble, claro y a plena luz del día.",
      work: "Éxito público rotundo, liderazgo carismático, expansión de ventas y coronación de proyectos. Tu marca, tu producto o tu nombre brilla hoy en el centro del escenario, ganando el respeto y la preferencia inmediata del mercado.",
      money: "Abundancia dorada, ganancias limpias y generosas, cobros importantes y prosperidad consolidada. Es el momento de cosechar a manos llenas lo que trabajaste en silencio y disfrutar de tu holgura material.",
      spirit: "Iluminación Solar (*Conciencia Crística / Tiphereth*): habitar el estado de Gracia donde el espíritu y la materia danzan reconciliados en el jardín del presente.",
      healthAndEnergy: "Cúspide de vitalidad física, fortaleza cardíaca, inmunidad alta y energía biofotónica. Rige el corazón, el plexo solar, las arterias, la vista y la vitamina D; el sol directo y la alegría son tu tónico invencible."
    },
    domainsVariants: [
      {
        love: "La carta más cálida, feliz y luminosa para el amor. En pareja, anuncia una etapa de plenitud radiante, celebración, transparencia total sin secretos, convivencia armoniosa o llegada de hijos y grandes festejos; si estás libre, tu brillo magnético y tu alegría atraen un amor noble, claro y a plena luz del día.",
        work: "Éxito público rotundo, liderazgo carismático, expansión de ventas y coronación de proyectos. Tu marca, tu producto o tu nombre brilla hoy en el centro del escenario, ganando el respeto y la preferencia inmediata del mercado.",
        money: "Abundancia dorada, ganancias limpias y generosas, cobros importantes y prosperidad consolidada. Es el momento de cosechar a manos llenas lo que trabajaste en silencio y disfrutar de tu holgura material.",
        spirit: "Iluminación Solar (*Conciencia Crística / Tiphereth*): habitar el estado de Gracia donde el espíritu y la materia danzan reconciliados en el jardín del presente.",
        healthAndEnergy: "Cúspide de vitalidad física, fortaleza cardíaca, inmunidad alta y energía biofotónica. Rige el corazón, el plexo solar, las arterias, la vista y la vitamina D; el sol directo y la alegría son tu tónico invencible."
      },
      {
        love: "Cero juegos de sombra ni adivinanzas: hoy el afecto se demuestra con abrazos francos, palabras luminosas, risas compartidas y planes concretos bajo el sol.",
        work: "Claridad ejecutiva total: cualquier nudo técnico o comercial se resuelve hoy con una solución simple, elegante y a la vista de todos. Ideal para lanzamientos públicos, inauguraciones y presentaciones estelares.",
        money: "El Oro de la Alquimia se manifiesta en tus cuentas: excelente rentabilidad, acuerdos transparentes donde todos ganan y capacidad de invertir con total seguridad.",
        spirit: "Recuperar la inocencia sabia del Niño Solar: mirar la creación con gratitud radiante y convertir tu propia alegría en una bendición para quienes te rodean.",
        healthAndEnergy: "Recuperación física acelerada y ánimo inquebrantable; tu sola presencia vital levanta hoy la energía de cualquier habitación a la que entres."
      },
      {
        love: "Fraternidad de almas: descubrir que tu pareja o compañero es también tu mejor amigo y tu cómplice de aventuras en el jardín de la vida.",
        work: "Sociedades y trabajo en equipo de altísimo rendimiento (los Gemelos Solares): dos mentes brillantes trabajando a la par sin celos ni egoísmos logran hoy un resultado histórico.",
        money: "Generosidad real que multiplica la riqueza: compartir un brindis o premiar a quienes construyeron con vos sella un flujo de abundancia continua.",
        spirit: "La Cabeza Iluminada de la letra Resh: pensar con luz solar, hablar con verdad de oro y obrar con calor de corazón.",
        healthAndEnergy: "Fuerza muscular, brillo en la mirada y excelente circulación; salí al aire libre a recibir la luz del día."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Salí hoy a plena luz con tu obra, tu propuesta o tu verdad: mostrate con orgullo legítimo, cerrá el trato a cara descubierta y celebrá lo que ya lograste.",
      prohibition: "Prohibido esconderte en el asiento de atrás por falsa humildad, buscarle el pelo al huevo cuando todo está saliendo bien o hablar con queja en un día de sol.",
      psychomagicAct: "Al mediodía de hoy (o bajo el sol directo), parate con los brazos abiertos y el rostro alzado hacia el cielo durante dos minutos; luego tocá tu frente (letra Resh) y tu pecho con una moneda o pieza de oro diciendo en voz alta: 'Recibo la corona del mediodía; soy luz clara, abundancia viva y victoria sin sombras'.",
      talismanPhrase: "El Sol Inmortal arde en mi cabeza y en mi corazón; todo se aclara y todo florece a mi paso."
    },
    actionOracleVariants: [
      {
        command: "Salí hoy a plena luz con tu obra, tu propuesta o tu verdad: mostrate con orgullo legítimo, cerrá el trato a cara descubierta y celebrá lo que ya lograste.",
        prohibition: "Prohibido esconderte en el asiento de atrás por falsa humildad, buscarle el pelo al huevo cuando todo está saliendo bien o hablar con queja en un día de sol.",
        psychomagicAct: "Al mediodía de hoy (o bajo el sol directo), parate con los brazos abiertos y el rostro alzado hacia el cielo durante dos minutos; luego tocá tu frente (letra Resh) y tu pecho con una moneda o pieza de oro diciendo en voz alta: 'Recibo la corona del mediodía; soy luz clara, abundancia viva y victoria sin sombras'.",
        talismanPhrase: "El Sol Inmortal arde en mi cabeza y en mi corazón; todo se aclara y todo florece a mi paso."
      },
      {
        command: "Simplificá hoy al máximo tu estrategia: elegí el camino más directo, transparente y luminoso, porque el triunfo ya está de tu lado.",
        prohibition: "No arrastres nostalgias de la noche de ayer (Arcano XVIII) hacia la mañana radiante de hoy; abrí todas las ventanas de par en par.",
        psychomagicAct: "Colocá una flor amarilla (como un girasol o zinnia dorada) o un cítrico brillante en el centro de tu mesa de trabajo hoy, y brindá con alguien querido celebrando por adelantado el éxito consumado de tu proyecto.",
        talismanPhrase: "Como los girasoles de oro, mi vida entera mira hacia la fuente de la plenitud."
      },
      {
        command: "Compartí hoy tu entusiasmo y tu claridad con un socio, cliente o ser querido: sé vos la hoguera que disipa la duda de los demás.",
        prohibition: "No postergues el festejo ni el disfrute de tus logros: agradecer la cosecha hoy es lo que garantiza la cosecha de mañana.",
        psychomagicAct: "Dibujá un círculo dorado con un punto central (el glifo astrológico del Sol ☉) y veintiún rayos alrededor en la portada de tu agenda o cuaderno activo, firmando debajo con tu nombre completo.",
        talismanPhrase: "Mi verdad es transparente como el mediodía; habito en la Rubedo dorada del éxito."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIX hace estallar el mediodía en tu tirada: toda sombra se disipa y se abre un ciclo de éxito radiante, salud y plenitud.",
      secondAppearance: "El Sol brilla por segunda vez en tu registro: el Oráculo te confirma un 'Sí' rotundo y sin dobleces. Dejá de dudar de tu buena fortuna y salí a brillar en grande hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XIX: estás en el cenit solar de tu año. Todo lo que lances, firmes o celebres bajo esta triple bendición lleva el sello del triunfo duradero.",
      fourthPlusAppearance: "Coronación suprema de Resh: el Astro Rey se ha instalado en el centro de tu tablero. Asumí tu rol de líder luminoso y disfrutá de la Gran Obra en plenitud."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Brillá con toda tu potencia sin pedir disculpas por tu luz: tu claridad hoy es la hoguera que también inspira y entibia a quienes te rodean.",
    counselVariants: [
      "Brillá con toda tu potencia sin pedir disculpas por tu luz: tu claridad hoy es la hoguera que también inspira y entibia a quienes te rodean.",
      "Después de haber cruzado con coraje la noche de La Luna, tenés derecho sagrado a disfrutar del banquete del mediodía.",
      "El Sol nunca mira hacia abajo para ver quién lo critica; simplemente sigue irradiando oro desde su cenit.",
      "La verdad simple y dicha de frente ahorra cien años de laberintos estratégicos.",
      "Mantené el corazón tan cálido como las llamas onduladas y la mente tan recta como las lanzas de luz."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 24,
        title: "El Disco de Veintiún Rayos Rectos y Ondulados",
        secret: "El gran Sol central con rostro sereno irradia veintiún rayos (los 21 Arcanos numerados que culminan en El Mundo) alternando puntas rectas (la Luz de la Verdad intelectual y geométrica) y puntas serpentinas (el Calor del Amor vivificante). De él caen trece gotas de oro alquímico que transmutan toda la tierra en un jardín sagrado.",
        esotericFormula: "Rayos Rectos (Sabiduría/Luz) + Rayos Ondulados (Amor/Calor) = El Sol Espiritual",
        meditationPrompt: "¿En qué área de tu vida estás listo hoy para brillar al cien por ciento sin achicarte ni esconder tu talento?"
      },
      {
        id: "n2",
        x: 28,
        y: 60,
        title: "Los Girasoles de Oro Alquímico (Heliotropismo Sagrado)",
        secret: "Sobre el muro florecen cuatro grandes girasoles tallados en oro y ámbar que miran hacia el disco solar. Representan los cuatro reinos de la naturaleza (mineral, vegetal, animal y humano) y los cuatro elementos (Tierra, Agua, Aire y Fuego) completamente alineados y orientados hacia el Espíritu Central.",
        esotericFormula: "4 Girasoles = Los 4 Elementos orientados en Heliotropismo hacia el Ser",
        meditationPrompt: "¿Están hoy tus cuatro áreas vitales (cuerpo, emociones, mente y trabajo) orientadas hacia lo que te da alegría y vida, o mirando hacia las sombras?"
      },
      {
        id: "n3",
        x: 68,
        y: 76,
        title: "Los Gemelos Solares y el Muro Superado",
        secret: "En el centro del círculo mágico danzan tomados de la mano el Niño de Oro y la Niña de Plata delante del muro de piedra. El muro de las limitaciones del pasado ya no les cierra el paso: ahora queda a sus espaldas como cerco protector de su jardín. Simboliza la unión fraternal entre tu mente consciente (Hod) y tu energía vital (Yesod).",
        esotericFormula: "Mente Consciente (Hod) + Vitalidad Subconsciente (Yesod) = El Niño Divino Libre",
        meditationPrompt: "¿Qué viejo muro o límite de tu historia ya superaste y hoy podés agradecer porque te hizo más sabio y libre?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XX • EL JUICIO (SHIN • EL LLAMADO DEL EÓN DESPIERTO)
  // ==========================================================================
  {
    id: 20,
    numeral: "XX",
    name: "El Juicio",
    subtitle: "El Llamado del Eón Despierto",
    palette: {
      primary: "#f8fafc",
      secondary: "#f59e0b",
      glow: "rgba(248, 250, 252, 0.58)"
    },
    archetype: "judgement",
    correspondences: {
      element: "Fuego Espiritual / Espíritu Santo Igneo (Tercera Letra Madre)",
      astro: "Plutón y el Fuego del Eón • La Octava Superior del Renacimiento",
      hebrewLetter: "Shin (ש) • El Diente de Tres Llamas y el Fuego del Espíritu que corona el Nombre Divino",
      treeOfLifePath: "Sendero 31 • Conecta Hod (El Esplendor Mental) con Malkuth (El Reino de la Tierra)",
      alchemy: "Resurrectio y Projectio • La Proyección de la Piedra Roja que despierta los metales dormidos",
      hermeticAxiom: "Cuando la trompeta del Espíritu pronuncia tu Nombre Verdadero, la piedra del sepulcro se parte sola y el pasado queda absuelto.",
      jungianArchetype: "El Llamado de la Vocación (Beruf), la Resurrección del Sí-Mismo y la Absolución del Pasado",
      tarotTiming: "Inminente y decisivo; cambio de era biográfica que responde a una maduración previa",
      yesNo: "Sí trascendental (despertar, resolución definitiva y salto a una octava superior)",
      keywords: [
        "despertar vocacional",
        "llamado del eón",
        "resurrección iniciática",
        "absolución kármica",
        "fuego de shin",
        "cierre triunfal",
        "octava superior"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "No vengo a juzgar tus pecados como un tribunal de hombres; vengo a hacer sonar en tus oídos la nota exacta para la cual naciste. Levantate hoy mismo del sarcófago de tus viejos hábitos: ya sos demasiado grande para seguir durmiendo en una vida que te queda chica.",
    oracleVoiceVariants: [
      "No vengo a juzgar tus pecados como un tribunal de hombres; vengo a hacer sonar en tus oídos la nota exacta para la cual naciste. Levantate hoy mismo del sarcófago de tus viejos hábitos: ya sos demasiado grande para seguir durmiendo en una vida que te queda chica.",
      "Mi letra es Shin, la corona de tres lenguas de fuego. Cuando yo desciendo en medio del nombre de la materia (YHVH -> YHShVH), el plomo del pasado queda redimido de un solo golpe y nace el hombre despierto.",
      "Mirame soplar la trompeta de siete tonos desde las nubes de oro: el sonido atraviesa la roca porque cuando tu Vocación real te llama por tu nombre, ninguna excusa ni temor puede taparse los oídos.",
      "Abajo se alzan del sepulcro el hombre, la mujer y el niño con los brazos abiertos en forma de Shin. Perdoná hoy de raíz a todas tus versiones anteriores: cada error y cada acierto fueron necesarios para forjar a quien hoy se pone de pie.",
      "Mi estandarte lleva la Cruz Roja de los cuatro elementos en perfecto equilibrio sobre el campo blanco de la paz. La prueba kármica ha terminado; recibí tu veredicto de libertad y subí al nuevo plano."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Juicio (Arcano XX) no representa un castigo externo, sino el gran misterio de la *Anástasis* (el Despertar y la Resurrección de la Conciencia en vida) y el llamado irresistible de la Verdadera Vocación. En la Cábala hermética gobierna el Sendero 31 de la tercera letra madre, Shin (el Fuego del Espíritu Santo de tres llamas), uniendo la esfera intelectual de Hod con el Reino terrenal de Malkuth bajo el poder regenerador de Plutón y el Fuego Cósmico. Su aparición en tu lectura anuncia una revelación que cambia el rumbo de tu biografía, la absolución definitiva de viejas culpas, un veredicto altamente favorable y el nacimiento de una nueva etapa donde tus talentos pasados se integran en una misión superior.",
    meaningVariants: [
      "El Juicio (Arcano XX) no representa un castigo externo, sino el gran misterio de la *Anástasis* (el Despertar y la Resurrección de la Conciencia en vida) y el llamado irresistible de la Verdadera Vocación. En la Cábala hermética gobierna el Sendero 31 de la tercera letra madre, Shin (el Fuego del Espíritu Santo de tres llamas), uniendo la esfera intelectual de Hod con el Reino terrenal de Malkuth bajo el poder regenerador de Plutón y el Fuego Cósmico. Su aparición en tu lectura anuncia una revelación que cambia el rumbo de tu biografía, la absolución definitiva de viejas culpas, un veredicto altamente favorable y el nacimiento de una nueva etapa donde tus talentos pasados se integran en una misión superior.",
      "Compará los dos Arcanos del renacimiento: en La Muerte (Arcano XIII) caía la cáscara vieja en una poda dolorosa pero necesaria; en El Juicio (Arcano XX) el sepulcro ya quedó atrás y el ser entero emerge glorificado, rejuvenecido y libre de gravedad al escuchar la trompeta del Arcángel Gabriel/Miguel. Aquello que dabas por dormido, perdido o postergado en tu vida hoy despierta con una potencia multiplicada por diez.",
      "En el esoterismo rosacruz y cabalístico, cuando la letra de fuego Shin (ש) se inserta en el centro del Tetragrammaton de los cuatro elementos (Yod-Heh-Vav-Heh), forma el Pentagrammaton sagrado *Yeheshuah* (יהשוה): el Espíritu redimiendo y espiritualizando la materia desde adentro. Esto significa que tu trabajo material y tus negocios dejan de ser una carga mundana para convertirse en el vehículo directo de tu despertar espiritual.",
      "Observá las tres figuras que se levantan del sarcófago flotante sobre el mar: el Hombre (el Consciente), la Mujer (el Subconsciente) y el Niño central (la Personalidad Regenerada que nace de ambos). Es la síntesis final de tu psicología: ya no hay guerra interna ni reproches; tus tres partes responden al unísono al llamado de las alturas.",
      "El número Veinte (20 = 2 × 10) es el doble giro de La Rueda de la Fortuna llevado al plano de la liberación kármica. Si estabas esperando una resolución importante, el fallo de un asunto largo o la señal definitiva para lanzar la obra cumbre de tu carrera, la trompeta acaba de sonar hoy en tu mesa."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Carl Gustav Jung explicaba que la palabra alemana para vocación, *Beruf*, significa literalmente 'ser llamado por una voz'. La neurosis más profunda del adulto moderno no proviene de sus traumas infantiles, sino de hacerse el sordo ante el llamado de su propio destino superior por miedo a abandonar la rutina conocida. El Juicio diagnostica que tu alma acaba de escuchar su verdadera nota: responder a ese llamado hoy es tu única medicina real.",
    psycheVariants: [
      "Carl Gustav Jung explicaba que la palabra alemana para vocación, *Beruf*, significa literalmente 'ser llamado por una voz'. La neurosis más profunda del adulto moderno no proviene de sus traumas infantiles, sino de hacerse el sordo ante el llamado de su propio destino superior por miedo a abandonar la rutina conocida. El Juicio diagnostica que tu alma acaba de escuchar su verdadera nota: responder a ese llamado hoy es tu única medicina real.",
      "Este Arcano opera la curación radical de la Culpa y del 'Juez Interno Torturador'. Mientras La Justicia (Arcano XI) pesaba el mérito de cada acto individual en el tiempo lineal, El Juicio (Arcano XX) mira desde la eternidad del Eón y comprende que hasta tus tropiezos fueron escalones indispensables de tu aprendizaje. Perdonarte hoy de forma absoluta e irrevocable libera toneladas de energía psíquica.",
      "Psicológicamente, el sarcófago de piedra gris del que salen las figuras representa el 'ataúd de las etiquetas pasadas': lo que tu familia, tu ciudad o tu propio miedo dijeron alguna vez que eras. Hoy rompés la tapa de esa caja; ya no sos tu biografía vieja, sos la conciencia viva que se levanta ahora.",
      "El sonido de la trompeta de siete ondas simboliza el *Insight Integrador*: ese instante luminoso en que diez piezas sueltas de tu vida (oficios distintos, pasiones diversas, experiencias que parecían inconexas) encajan de golpe como un rompecabezas maestro mostrándote para qué te estuviste preparando todos estos años."
    ],

    lightAndShadow: "Al derecho (En Luz): Despertar vocacional definitivo, perdón que absuelve el pasado, segundas oportunidades gloriosas, fallos y resoluciones favorables, fama o alcance masivo y renovación total. Invertida (En Sombra): Hacerse el sordo al llamado interior, autocrítica despiadada, miedo al juicio ajeno o postergar una decisión inminente.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Despertar vocacional definitivo, perdón que absuelve el pasado, segundas oportunidades gloriosas, fallos y resoluciones favorables, fama o alcance masivo y renovación total. Invertida (En Sombra): Hacerse el sordo al llamado interior, autocrítica despiadada, miedo al juicio ajeno o postergar una decisión inminente.",
      "En Luz, El Juicio es el espíritu que escucha su himno de victoria y sale del sepulcro volando; en Sombra, es el durmiente que se tapa la cabeza con la frazada de piedra porque le tiene miedo a la mañana.",
      "Luz activa: Lanzamiento de alto impacto, redención de un proyecto antiguo en versión maestra, lucidez histórica y liberación kármica. Sombra latente: Rencor no perdonado o demorar la respuesta al llamado."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Renovación profunda y trascendental del plano afectivo. En pareja, anuncia un 'volver a elegirse' en un nivel mucho más alto tras perdonar de raíz cualquier sombra del pasado, o una decisión conjunta que cambia sus vidas para siempre; si estás libre, marca un encuentro despertador que sacude tu corazón y te saca de cualquier letargo.",
      work: "El llamado de tu Obra Maestra. Es el momento de dar el salto hacia tu verdadera vocación, relanzar con calidad AAA un proyecto que estaba dormido, o hacer sonar la trompeta con una campaña de difusión y marketing que haga escuchar tu marca en todas partes.",
      money: "Resolución altamente favorable de juicios, herencias, cobros demorados o inversiones históricas; revalorización súbita de un activo o creación tuya que multiplica tu patrimonio.",
      spirit: "Iniciación en el Fuego de Shin: despertar a la conciencia del Eón (la perspectiva eterna del Espíritu) donde el miedo a la muerte y al tiempo desaparece por completo.",
      healthAndEnergy: "Rejuvenecimiento vital profundo, despertar de la energía celular dormida, recuperación extraordinaria tras enfermedades o fatigas largas, y activación de la audición interna y los pulmones."
    },
    domainsVariants: [
      {
        love: "Renovación profunda y trascendental del plano afectivo. En pareja, anuncia un 'volver a elegirse' en un nivel mucho más alto tras perdonar de raíz cualquier sombra del pasado, o una decisión conjunta que cambia sus vidas para siempre; si estás libre, marca un encuentro despertador que sacude tu corazón y te saca de cualquier letargo.",
        work: "El llamado de tu Obra Maestra. Es el momento de dar el salto hacia tu verdadera vocación, relanzar con calidad AAA un proyecto que estaba dormido, o hacer sonar la trompeta con una campaña de difusión y marketing que haga escuchar tu marca en todas partes.",
        money: "Resolución altamente favorable de juicios, herencias, cobros demorados o inversiones históricas; revalorización súbita de un activo o creación tuya que multiplica tu patrimonio.",
        spirit: "Iniciación en el Fuego de Shin: despertar a la conciencia del Eón (la perspectiva eterna del Espíritu) donde el miedo a la muerte y al tiempo desaparece por completo.",
        healthAndEnergy: "Rejuvenecimiento vital profundo, despertar de la energía celular dormida, recuperación extraordinaria tras enfermedades o fatigas largas, y activación de la audición interna y los pulmones."
      },
      {
        love: "Absolución total: hoy se borra el pizarrón de las viejas cuentas afectivas. Mirá a quien amás con los ojos limpios del recién nacido y hablen desde la verdad del alma.",
        work: "Síntesis de todos tus talentos: descubrís cómo unir tu experiencia comercial, tu sensibilidad artística y tu capacidad técnica en un único producto o sistema que no tiene rival en su nicho.",
        money: "Cosecha de un ciclo kármico mayor: el esfuerzo honesto de los últimos años recibe hoy su veredicto de prosperidad y apertura de puertas.",
        spirit: "Escuchar el *Nombre Secreto* de tu alma: comprender que no viniste al mundo a sobrevivir en silencio, sino a dejar una huella imborrable.",
        healthAndEnergy: "Inyección de fuego vital en todo el organismo; la música épica, el canto, las duchas de contraste y la respiración profunda despiertan cada célula."
      },
      {
        love: "Un reencuentro kármico o una revelación emocional profunda pone hoy cada sentimiento en su lugar definitivo, trayendo una paz inmensa al pecho.",
        work: "Hora de publicar, anunciar y hacer ruido legítimo: la trompeta de Gabriel indica que tu mensaje tiene hoy un alcance multiplicado en redes, medios o redes de distribución.",
        money: "Liberación de una carga financiera antigua; saldás el pasado de una vez por todas y empezás la contabilidad de tu nueva era con saldo a favor.",
        spirit: "La resurrección de los tres cuerpos (físico, astral y mental) alineados bajo el estandarte de la Cruz Solar.",
        healthAndEnergy: "Despertar metabólico y nervioso; sensación física de haberse sacado una mochila de piedra de los hombros."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Respondé hoy mismo con un 'Sí' definitivo al llamado de tu vocación o proyecto mayor, y hacé sonar la trompeta anunciando tu obra sin timidez.",
      prohibition: "Prohibido seguir reprochándote un error del pasado que ya te dejó su enseñanza, o hacerte el distraído cuando sabés exactamente qué paso evolutivo te toca dar hoy.",
      psychomagicAct: "Parate hoy en el centro de tu cuarto con los dos brazos alzados en V hacia arriba (formando con tu cabeza y tus brazos las tres puntas de la letra Shin ש), hacé sonar una campana, acorde de guitarra o nota clara y decí con voz firme: 'Perdono y absuelvo todo mi pasado; hoy me levanto vivo al llamado de mi verdadero destino'.",
      talismanPhrase: "Escucho la trompeta del Eón; el sepulcro del pasado queda vacío y mi espíritu se levanta en gloria."
    },
    actionOracleVariants: [
      {
        command: "Respondé hoy mismo con un 'Sí' definitivo al llamado de tu vocación o proyecto mayor, y hacé sonar la trompeta anunciando tu obra sin timidez.",
        prohibition: "Prohibido seguir reprochándote un error del pasado que ya te dejó su enseñanza, o hacerte el distraído cuando sabés exactamente qué paso evolutivo te toca dar hoy.",
        psychomagicAct: "Parate hoy en el centro de tu cuarto con los dos brazos alzados en V hacia arriba (formando con tu cabeza y tus brazos las tres puntas de la letra Shin ש), hacé sonar una campana, acorde de guitarra o nota clara y decí con voz firme: 'Perdono y absuelvo todo mi pasado; hoy me levanto vivo al llamado de mi verdadero destino'.",
        talismanPhrase: "Escucho la trompeta del Eón; el sepulcro del pasado queda vacío y mi espíritu se levanta en gloria."
      },
      {
        command: "Rescatá hoy del cajón ese talento, idea o desarrollo valioso que habías dejado dormido y traelo a la vida con tu maestría actual.",
        prohibition: "No permitas que el miedo al juicio de terceros apague el volumen de tu mensaje; el único juicio que importa hoy es el de tu Yo Superior.",
        psychomagicAct: "Redactá un 'Decreto de Indulto Definitivo' dirigido a vos mismo por cualquier demora o fallo de años anteriores, firmalo con trazo dorado o rojo, dibujá encima una cruz de brazos iguales (la Cruz del Estandarte) y guardalo como sello de que tu historia empieza limpia hoy.",
        talismanPhrase: "El fuego de Shin redime mi historia; todo lo que viví converge hoy en mi obra maestra."
      },
      {
        command: "Tomá hoy la resolución final en ese asunto que venía esperando tu veredicto: cerrá la etapa vieja con honor y abrí de par en par la nueva.",
        prohibition: "No vuelvas a acostarte en rutinas o conformismos que ya sabés que pertenecen a una versión muerta de vos.",
        psychomagicAct: "Abrí todas las puertas y ventanas de tu casa o taller durante siete minutos hoy mientras ponés a sonar una pieza musical que te erice la piel, declarando que el aire nuevo del Eón barre toda inercia antigua.",
        talismanPhrase: "Me levanto desnudo de culpas y coronado de propósito; mi hora ha llegado."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XX hace vibrar su trompeta de oro en la lectura: suena el llamado al despertar vocacional y a la absolución definitiva del pasado.",
      secondAppearance: "El Juicio resuena por segunda vez en tu registro: el llamado interior es innegable, pero seguís demorando el salto fuera del viejo molde. Levantate hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XX: alerta de vocación y destino mayor. No podés seguir postergando la obra para la que naciste; perdoná todo lo viejo y ejecutá el cambio de era.",
      fourthPlusAppearance: "Trompeta final de Shin: el Oráculo declara cerrado tu ciclo kármico anterior. Estás de pie ante las puertas de El Mundo; asumí tu resurrección completa ahora."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Perdoná de raíz a tu antigua versión y respondé al llamado hoy mismo: ya no pertenecés al sepulcro de las limitaciones que dejaste atrás.",
    counselVariants: [
      "Perdoná de raíz a tu antigua versión y respondé al llamado hoy mismo: ya no pertenecés al sepulcro de las limitaciones que dejaste atrás.",
      "Ninguna semilla recuerda con rencor la oscuridad de la tierra una vez que escuchó el llamado del sol y rompió la corteza.",
      "Cuando tu verdadera vocación pronuncia tu nombre, todas las excusas del miedo suenan como ruido de hojalata.",
      "No mires tu pasado con ojos de fiscal; miralo con ojos de alquimista y verás que cada plomo fue indispensable para tu oro de hoy.",
      "Levantate entero: el universo no te trajo hasta el Arcano XX para que sigas viviendo a medias."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "El Serafín del Eón y la Trompeta de Siete Tonos",
        secret: "Coronado por el disco solar y envuelto en alas de fuego y platino, el Arcángel sopla la trompeta dorada de la cual emergen siete ondas acústicas (las siete vocales sagradas de los gnósticos y los siete chakras). Simboliza el *Verbo Creador* que desciende desde el Yo Superior para despertar la memoria celular del iniciado.",
        esotericFormula: "Trompeta de Oro + 7 Ondas Sonoras = El Verbo que despierta los Siete Centros",
        meditationPrompt: "Si hoy escucharas sin miedo el llamado más profundo de tu vocación, ¿qué estarías haciendo en este mismo instante?"
      },
      {
        id: "n2",
        x: 68,
        y: 44,
        title: "El Estandarte de la Cruz Solar Equilátera",
        secret: "Colgando de la trompeta flamea el pabellón cuadrado blanco (la pureza del Éter) atravesado por la cruz de brazos iguales en oro y carmesí. Representa los cuatro elementos de la naturaleza y los cuatro puntos cardinales del tiempo redimidos y puestos en perfecto equilibrio en el Eterno Presente.",
        esotericFormula: "Cruz de 4 Brazos Iguales sobre Blanco = Los 4 Elementos Redimidos en la Quintaesencia",
        meditationPrompt: "¿Qué parte de tu historia pasada necesitás perdonar y absolver hoy para quedar en paz total con tu camino?"
      },
      {
        id: "n3",
        x: 50,
        y: 76,
        title: "El Sarcófago Abierto y la Tríada Resucitada en Forma de Shin",
        secret: "Del cofre de piedra negra abierto sobre el mar de la conciencia se alzan el hombre, la mujer y el niño central elevando sus brazos para dibujar la letra de fuego *Shin* (ש). Revela que la resurrección hermética ocurre aquí y ahora cuando tu razón, tu emoción y tu espíritu renovado dejan atrás la caja de los hábitos muertos.",
        esotericFormula: "Hombre (Razón) + Niño (Ser Nuevo) + Mujer (Intuición) = La Letra de Fuego Shin (ש)",
        meditationPrompt: "¿Qué viejo hábito, rol o limitación dejás hoy definitivamente atrás dentro del sarcófago de piedra?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XXI • EL MUNDO (TAV • LA CORONA DE LA GRAN OBRA CONSUMADA)
  // ==========================================================================
  {
    id: 21,
    numeral: "XXI",
    name: "El Mundo",
    subtitle: "La Corona de la Gran Obra",
    palette: {
      primary: "#fde047",
      secondary: "#a855f7",
      glow: "rgba(168, 85, 247, 0.65)"
    },
    archetype: "world",
    correspondences: {
      element: "Tierra Transfigurada en Luz / Éter Cósmico (Quintaesencia)",
      astro: "Saturno Exaltado y los Cuatro Signos Fijos del Cosmos • El Señor del Tiempo Consumado",
      hebrewLetter: "Tav (ת) • El Sello Final de la Creación, la Cruz Cósmica y la Firma de la Verdad (Valor: 400)",
      treeOfLifePath: "Sendero 32 • El último sendero que une Yesod (El Fundamento Lunar) con Malkuth (El Reino Físico)",
      alchemy: "Magnum Opus Perfectum y Lapis Philosophorum • La Piedra Filosofal Coronada y el Anima Mundi",
      hermeticAxiom: "El Principio y el Fin se besan en la cola de la serpiente; habito en el palacio del centro y los cuatro elementos danzan a mi alrededor.",
      jungianArchetype: "El Sí-Mismo (Self) Plenamente Realizado, el Mandala Viviente y la Totalidad Individuada",
      tarotTiming: "Cumplimiento pleno y definitivo; cierre glorioso de ciclo y dominio del tiempo",
      yesNo: "Sí absoluto y supremo (realización total, éxito sin fisuras y coronación de la Obra)",
      keywords: [
        "gran obra consumada",
        "realización suprema",
        "anima mundi",
        "totalidad integrada",
        "éxito internacional",
        "mandala cósmico",
        "corona del tarot"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Llegaste. Yo soy el acorde final de la sinfonía que empezó cuando diste tu primer paso en El Loco. Mirame danzar en el centro de la guirnalda de oro: no corro porque ya no tengo adónde huir, y no peleo porque los cuatro elementos del universo ya son mi propia corte real.",
    oracleVoiceVariants: [
      "Llegaste. Yo soy el acorde final de la sinfonía que empezó cuando diste tu primer paso en El Loco. Mirame danzar en el centro de la guirnalda de oro: no corro porque ya no tengo adónde huir, y no peleo porque los cuatro elementos del universo ya son mi propia corte real.",
      "Observá mis piernas: dibujo la misma cruz del cuatro que viste en El Colgado, pero ahora estoy de pie y coronada de estrellas. Lo que en el doce fue sacrificio e inversión en la cueva, en el veintiuno es danza soberana sobre la cumbre del mundo.",
      "En mis manos sostengo las dos varas de luz en espiral: con la derecha gobierno la corriente que sube al espíritu; con la izquierda gobierno la corriente que baja a la materia. El cielo y la tierra ya no están separados en tu vida: son una sola casa.",
      "Mi letra es Tav, el último sello del alfabeto sagrado con el que el Arquitecto firmó el universo terminado. Poné hoy tu firma con orgullo sobre tu obra: está completa, es íntegra y el mundo entero es tu territorio.",
      "El León de tu fuego, el Toro de tu tierra, el Águila de tu agua y el Ángel de tu aire velan en las cuatro esquinas de tu escudo. Coroná hoy este ciclo y preparate para saltar al próximo universo como un maestro."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Mundo (Arcano XXI) es la Corona Suprema de los Arcanos Mayores, la consumación perfecta de la Gran Obra Alquímica (*Magnum Opus*) y el triunfo absoluto del Viaje del Iniciado. En el Árbol de la Vida gobierna el Sendero 32 —el último de los senderos de la Sabiduría, regido por la letra Tav ('El Sello' o 'La Cruz') y por Saturno como Señor del Tiempo y de la Forma—, uniendo el mundo etérico de Yesod con la manifestación tangible de Malkuth. Su aparición en tu lectura es el augurio más completo y benéfico del mazo: anuncia realización total de tu meta, éxito sin fisuras, plenitud material y espiritual, proyección más allá de tus fronteras (viajes o alcance internacional) y el cierre glorioso de una gran etapa vital.",
    meaningVariants: [
      "El Mundo (Arcano XXI) es la Corona Suprema de los Arcanos Mayores, la consumación perfecta de la Gran Obra Alquímica (*Magnum Opus*) y el triunfo absoluto del Viaje del Iniciado. En el Árbol de la Vida gobierna el Sendero 32 —el último de los senderos de la Sabiduría, regido por la letra Tav ('El Sello' o 'La Cruz') y por Saturno como Señor del Tiempo y de la Forma—, uniendo el mundo etérico de Yesod con la manifestación tangible de Malkuth. Su aparición en tu lectura es el augurio más completo y benéfico del mazo: anuncia realización total de tu meta, éxito sin fisuras, plenitud material y espiritual, proyección más allá de tus fronteras (viajes o alcance internacional) y el cierre glorioso de una gran etapa vital.",
      "En la tradición hermética y neoplatónica, la figura danzante en el centro del óvalo es el *Anima Mundi* (el Alma del Mundo) y el *Rebis* coronado: el ser humano que ha integrado por completo su polaridad masculina y femenina, su razón y su instinto, su espíritu y su materia. A diferencia de La Rueda de la Fortuna (Arcano X), donde las figuras giraban sujetas al destino, en El Mundo (Arcano XXI) vos estás en el centro del Mandala dirigiendo la danza cósmica con las dos varas de poder.",
      "Observá la simetría matemática entre El Colgado (12) y El Mundo (21): los dígitos se han invertido de vuelta al derecho (12 -> 21). El iniciado que en el Arcano XII aceptó detenerse y mirar las cosas desde otro ángulo hoy cosecha la totalidad del universo bajo sus pies, bailando con una liviandad soberana donde el trabajo más complejo se ejecuta sin esfuerzo aparente.",
      "En la Cábala, el número 32 (los 10 Sephiroth + las 22 Letras) tiene por gematría la palabra hebrea *Lev* (לב = 30 + 2 = 32), que significa 'Corazón', y la primera letra de la Torá (Beth de *Bereshit*) unida a la última letra (Lamed de *Yisrael*). Esto revela que El Mundo es el Corazón del Universo latiendo en tu obra terminada: el principio y el fin reunidos en una sola joya.",
      "Bajo la regencia exaltada de Saturno —no como límite pesado, sino como la Edad de Oro de Kronos y la cristalización diamantina en Malkuth—, este Arcano garantiza que lo que culminás hoy no es un chispazo fugaz: tiene peso histórico, estructura perfecta y reconocimiento duradero."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Para Carl Gustav Jung, El Mundo es la imagen arquetípica definitiva de la *Individuación Consumada*: el matrimonio del Yo con el Sí-Mismo (*Self*) dentro del círculo protector del Mandala (la mandorla o guirnalda elíptica rodeada por las cuatro funciones de la conciencia). Ya no hay partes exiliadas ni guerra entre tus subpersonalidades; habitás tu propia piel con una sensación de totalidad, pertenencia cósmica y paz soberana.",
    psycheVariants: [
      "Para Carl Gustav Jung, El Mundo es la imagen arquetípica definitiva de la *Individuación Consumada*: el matrimonio del Yo con el Sí-Mismo (*Self*) dentro del círculo protector del Mandala (la mandorla o guirnalda elíptica rodeada por las cuatro funciones de la conciencia). Ya no hay partes exiliadas ni guerra entre tus subpersonalidades; habitás tu propia piel con una sensación de totalidad, pertenencia cósmica y paz soberana.",
      "Este Arcano viene a curar el 'miedo a terminar la obra' (el complejo de Penélope que destejía de noche lo que tejía de día para no enfrentar el veredicto final, o el síndrome de postergar el último cinco por ciento de un proyecto). El Mundo te autoriza a poner el punto final hoy mismo, entregar la obra completa y permitirte habitar el éxito sin autoboicot.",
      "Los Cuatro Vivientes en las esquinas —ahora despiertos y mirando hacia el centro— confirman que tus cuatro funciones psíquicas trabajan en orquesta: tu Pensamiento (Ángel/Aire) diseña, tu Intuición (León/Fuego) inspira, tu Sentimiento (Águila/Agua) conecta y tu Sensación práctica (Toro/Tierra) materializa y cobra.",
      "Al cerrar el círculo del 21, el psicólogo interior comprende que todo final supremo es simultáneamente un nuevo Cero (El Loco en una octava superior). Disfrutá la cumbre alcanzada con gratitud total antes de elegir cuál será el próximo universo que saldrás a conquistar."
    ],

    lightAndShadow: "Al derecho (En Luz): Realización suprema, Gran Obra coronada, éxito rotundo en todos los frentes, plenitud afectiva y patrimonial, expansión sin fronteras y maestría sobre los cuatro elementos. Invertida (En Sombra): Demorar el último detalle para no cerrar el ciclo, miedo a habitar el propio éxito o conformismo estático.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Realización suprema, Gran Obra coronada, éxito rotundo en todos los frentes, plenitud afectiva y patrimonial, expansión sin fronteras y maestría sobre los cuatro elementos. Invertida (En Sombra): Demorar el último detalle para no cerrar el ciclo, miedo a habitar el propio éxito o conformismo estático.",
      "En Luz, El Mundo es el Maestro Alquimista que danza en el centro del cosmos con la Piedra Filosofal terminada en sus manos; en Sombra, es el escalador que se sienta a diez metros de la cumbre por vértigo a su propia victoria.",
      "Luz activa: Coronación de un proyecto maestro, proyección global o digital sin límites, armonía integral y cosecha total. Sombra latente: Quedar encerrado en la guirnalda de un éxito pasado sin abrirse al siguiente ciclo evolutivo."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Plenitud afectiva absoluta, comunión de almas y coronación del vínculo. En pareja, augura el cumplimiento de un gran sueño compartido (convivencia plena, viaje soñado, familia o proyecto de vida consolidado en armonía total); si estás libre, tu propia completitud interior funciona como un imán real que atrae una relación entera, madura y extraordinaria.",
      work: "Coronación histórica de un proyecto, plataforma, producto o carrera profesional. Alcanzás el estándar 'AAA' que buscabas: todas las piezas del sistema encajan con perfección de relojería y tu obra está lista para escalar a nivel nacional o internacional.",
      money: "Cosecha máxima, solidez patrimonial en los cuatro elementos (activos fijos, liquidez, propiedad intelectual y flujo comercial) y apertura de mercados externos o digitales que multiplican tu alcance económico.",
      spirit: "Conciencia Cósmica (*Samadhi / Anima Mundi*): experimentar en carne viva que el Reino (Malkuth) está en Kether y Kether está en Malkuth; ver lo sagrado encarnado en cada átomo de tu realidad.",
      healthAndEnergy: "Armonía integral de todos los sistemas orgánicos, vitalidad radiante, longevidad saturnina sana y coordinación perfecta entre mente, sistema nervioso y cuerpo físico."
    },
    domainsVariants: [
      {
        love: "Plenitud afectiva absoluta, comunión de almas y coronación del vínculo. En pareja, augura el cumplimiento de un gran sueño compartido (convivencia plena, viaje soñado, familia o proyecto de vida consolidado en armonía total); si estás libre, tu propia completitud interior funciona como un imán real que atrae una relación entera, madura y extraordinaria.",
        work: "Coronación histórica de un proyecto, plataforma, producto o carrera profesional. Alcanzás el estándar 'AAA' que buscabas: todas las piezas del sistema encajan con perfección de relojería y tu obra está lista para escalar a nivel nacional o internacional.",
        money: "Cosecha máxima, solidez patrimonial en los cuatro elementos (activos fijos, liquidez, propiedad intelectual y flujo comercial) y apertura de mercados externos o digitales que multiplican tu alcance económico.",
        spirit: "Conciencia Cósmica (*Samadhi / Anima Mundi*): experimentar en carne viva que el Reino (Malkuth) está en Kether y Kether está en Malkuth; ver lo sagrado encarnado en cada átomo de tu realidad.",
        healthAndEnergy: "Armonía integral de todos los sistemas orgánicos, vitalidad radiante, longevidad saturnina sana y coordinación perfecta entre mente, sistema nervioso y cuerpo físico."
      },
      {
        love: "Un amor donde ninguno de los dos viene a pedirle al otro que le llene un vacío, sino donde dos mundos completos eligen celebrar juntos la danza de la vida.",
        work: "Expansión de fronteras físicas y digitales: comercio con otras regiones o países, lanzamiento de una aplicación o marca al mundo entero y prestigio indiscutido como referente maestro de tu rubro.",
        money: "Recompensa total por la perseverancia de Saturno: el tiempo que invertiste en hacer las cosas con la máxima calidad hoy te devuelve una estructura financiera blindada y generosa.",
        spirit: "La Danza de Shiva/Sophia en el centro del Ouroboros: actuar en el mundo con destreza total sabiendo que tu espíritu es el centro inmóvil de la creación.",
        healthAndEnergy: "Estado de gracia psicofísica; el baile, el movimiento rítmico, el contacto con la naturaleza y la celebración mantienen tu campo áurico cerrado y brillante como la guirnalda de oro."
      },
      {
        love: "Cierre feliz de cualquier etapa de prueba vincular: la tormenta quedó atrás y hoy habitan el jardín sagrado del entendimiento mutuo.",
        work: "Integración magistral de todos tus módulos y saberes: lo técnico, lo artístico, lo esotérico y lo comercial quedan ensamblados hoy en una sola arquitectura viva.",
        money: "Abundancia sin techo que trasciende la comarca local: pensá tu economía en escala global y sin fronteras mentales.",
        spirit: "El Sello de Tav sobre tu frente: la tranquilidad imperturbable de quien sabe que ha cumplido su palabra con el universo.",
        healthAndEnergy: "Mineralización perfecta (Saturno), huesos fuertes, piel luminosa y sueño profundamente pacífico."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Poné hoy mismo el sello final (letra Tav) a la etapa o módulo que tenés entre manos, celebrá la obra terminada y abrí tu horizonte al mundo entero sin límites geográficos.",
      prohibition: "Prohibido dejar hoy el último uno por ciento sin cerrar por perfeccionismo neurótico, o pensar en chiquito cuando el tablero entero ya es tuyo.",
      psychomagicAct: "Trazá en el suelo o sobre tu mesa un óvalo con una cinta dorada o un cordón cerrado (la guirnalda del Ouroboros) y colocá en sus cuatro esquinas una piedra o moneda (Toro), una vela (León), una copa de agua (Águila) y una pluma o incienso (Ángel). Ponete en el centro (o apoyá tus dos manos con dos varas/bolígrafos en el centro del óvalo) y decí en voz alta: 'La Gran Obra está consumada; gobierno mis cuatro elementos y el mundo entero es mi casa'.",
      talismanPhrase: "Danzo en el centro sagrado del Mandala; los cuatro elementos me sirven y mi Gran Obra está coronada."
    },
    actionOracleVariants: [
      {
        command: "Poné hoy mismo el sello final (letra Tav) a la etapa o módulo que tenés entre manos, celebrá la obra terminada y abrí tu horizonte al mundo entero sin límites geográficos.",
        prohibition: "Prohibido dejar hoy el último uno por ciento sin cerrar por perfeccionismo neurótico, o pensar en chiquito cuando el tablero entero ya es tuyo.",
        psychomagicAct: "Trazá en el suelo o sobre tu mesa un óvalo con una cinta dorada o un cordón cerrado (la guirnalda del Ouroboros) y colocá en sus cuatro esquinas una piedra o moneda (Toro), una vela (León), una copa de agua (Águila) y una pluma o incienso (Ángel). Ponete en el centro (o apoyá tus dos manos con dos varas/bolígrafos en el centro del óvalo) y decí en voz alta: 'La Gran Obra está consumada; gobierno mis cuatro elementos y el mundo entero es mi casa'.",
        talismanPhrase: "Danzo en el centro sagrado del Mandala; los cuatro elementos me sirven y mi Gran Obra está coronada."
      },
      {
        command: "Desplegá tu creación hacia afuera hoy: pensá cómo llevar tu producto, tu plataforma o tu distribución más allá de las fronteras actuales.",
        prohibition: "No pases de largo por tu victoria corriendo ansioso hacia el próximo problema; frená hoy a brindar y honrar el camino recorrido desde el Arcano 0.",
        psychomagicAct: "Escribí la palabra *CONSUMMATUM EST* ('Está consumado') y dibujá una cruz Tau dentro de un círculo dorado al final de la etapa que cerrás hoy en tu cuaderno, sellándola con una gota de cera, perfume o tinta dorada.",
        talismanPhrase: "El principio y el fin se unen en mis manos; habito en la plenitud incorruptible de El Mundo."
      },
      {
        command: "Integrá hoy todas tus herramientas y facetas en una sola presentación maestra: no dejes ningún talento tuyo afuera de la guirnalda.",
        prohibition: "No temas a la grandeza del éxito que se abre ante vos; tenés la espalda de los 21 Arcanos sosteniendo tu corona.",
        psychomagicAct: "Tomá un globo terráqueo, un mapa o una esfera de cristal/metal entre tus dos manos durante un minuto, mirala desde arriba con serenidad real y declará que tu obra no conoce fronteras y lleva valor a los cuatro puntos cardinales.",
        talismanPhrase: "Soy el eje danzante del universo; todo está en orden y todo me pertenece por derecho de conciencia."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XXI despliega la Corona del Tarot en tu lectura: se anuncia la consumación gloriosa de un ciclo y el triunfo integral de la Gran Obra.",
      secondAppearance: "El Mundo aparece por segunda vez en tu registro: estás a un solo paso de cerrar el círculo perfecto; completá ese último detalle hoy mismo y reclamá tu corona.",
      thirdAppearance: "Tercera comparecencia del Arcano XXI: confirmación suprema de plenitud y realización. Tu obra ya tiene el sello de Tav; preparate para expandirla sin fronteras.",
      fourthPlusAppearance: "Apoteosis del Mandala Cósmico: has completado el Viaje de los 22 Arcanos en esta etapa de tu vida. Celebrá la cumbre alcanzada y disponete a iniciar la siguiente espiral como un Maestro."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Celebrá la Gran Obra consumada: hoy habitás en el centro sagrado del universo y los cuatro elementos bailan en armonía a tu favor.",
    counselVariants: [
      "Celebrá la Gran Obra consumada: hoy habitás en el centro sagrado del universo y los cuatro elementos bailan en armonía a tu favor.",
      "El que supo saltar sin miedo en El Loco termina bailando coronado de estrellas en el centro de El Mundo.",
      "No busques el paraíso en otro tiempo ni en otra tierra: el Reino (Malkuth) se vuelve cielo en el instante en que ponés toda tu alma en la obra.",
      "Terminá siempre lo que empezás con el mismo fuego con que lo soñaste: el sello final de Tav es lo que distingue al maestro del aficionado.",
      "Cuando conquistás la cumbre del Arcano XXI, descubrís que el final del mapa era apenas la portada de tu próximo universo."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "La Guirnalda Ouroboros y los Lazos del Infinito",
        secret: "Rodeando a la Danzante Cósmica se cierra la mandorla elíptica de hojas de laurel de oro y esmeralda, atada arriba y abajo por dos cintas en forma de Lemniscata (∞). Es el *Ouroboros* (la serpiente que se muerde la cola) y la *Vesica Piscis* del parto universal: el recinto sagrado del tiempo eterno donde el espíritu queda protegido de toda disolución mientras crea mundos.",
        esotericFormula: "Mandorla de Laurel + Doble Lemniscata (∞) = El Tiempo Eterno Consumado",
        meditationPrompt: "¿Qué gran ciclo de tu vida o de tu proyecto sentís que hoy está cerrando su círculo con broche de oro?"
      },
      {
        id: "n2",
        x: 50,
        y: 50,
        title: "Las Dos Varas de Espiral Doble y la Danza del Cuatro",
        secret: "En el centro del óvalo danza el *Anima Mundi* con las piernas formando el número 4 al derecho (la materia redimida tras la inversión del Colgado) y sosteniendo dos cetros de luz en espiral. Mientras El Mago tenía una sola vara, ella empuña dos: el dominio simultáneo sobre la involución (bajar la idea a la carne) y la evolución (elevar la carne al espíritu).",
        esotericFormula: "Vara Derecha (Evolución) + Vara Izquierda (Involución) = Maestría Polar Total",
        meditationPrompt: "¿Cómo se siente hoy en tu cuerpo trabajar y crear desde la liviandad de la danza en lugar de hacerlo desde el peso del esfuerzo?"
      },
      {
        id: "n3",
        x: 24,
        y: 76,
        title: "Los Cuatro Vivientes Despiertos (El Tetramorfos Real)",
        secret: "En los cuatro ángulos del relicario resplandecen en oro y plata el León (Leo/Fuego/Querer), el Toro (Tauro/Tierra/Callar), el Águila (Escorpio/Agua/Saber) y el Ángel (Acuario/Aire/Osar). Son las cuatro esfinges elementales que vimos en La Rueda de la Fortuna, ahora completamente integradas y obedientes a la conciencia central del Maestro.",
        esotericFormula: "Querer (Fuego) + Saber (Agua) + Osar (Aire) + Callar (Tierra) = La Piedra Filosofal",
        meditationPrompt: "Mirando tu obra completa hoy, ¿cómo están colaborando tus cuatro elementos (pasión, intuición, intelecto y estructura material) para sostener tu triunfo?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR • VOLUMEN VI (CIERRE DE LOS 22 ARCANOS)
// ============================================================================
(function initSolarGrimoireVolume6() {
  window.DATOS_SOL_6 = DATOS_SOL_6;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_6.forEach(function (card) {
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
  DATOS_SOL_6.forEach(function (solarCard) {
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
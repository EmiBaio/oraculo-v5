// ============================================================================
// ARCHIVO: datos_luna_6.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN VI: ARCANOS XVIII, XIX, XX y XXI
// XVIII • La Luna (Sombra) | XIX • El Sol (Sombra) | XX • El Juicio (Sombra) | XXI • El Mundo (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_6 = [
  // ==========================================================================
  // ARCANO XVIII INVERTIDO • LA LUNA EN SOMBRA (QOPH INVERTIDA • LA NIEBLA QUE CAE O EL DELIRIO)
  // ==========================================================================
  {
    id: 18,
    numeral: "XVIII",
    name: "La Luna",
    subtitle: "El Espejismo Descubierto y el Delirio del Abismo",
    isReversed: true,
    palette: {
      primary: "#4338ca",
      secondary: "#0f766e",
      glow: "rgba(67, 56, 202, 0.58)"
    },
    archetype: "moon",
    shadowPolarity: {
      byExcess: "El Naufragio en la Bruma: paranoia proyectiva, ansiedad nocturna infundada, engaños y mentiras que envuelven el vínculo o negocio, histeria emocional y fantasmas del pasado que devoran la razón.",
      byDeficiency: "El Deshielo de la Mentira (Octava Luminosa de Inversión): la niebla que comienza a disiparse con la primera luz del alba, secretos y trampas que quedan expuestos a la vista, y fin de un hechizo confuso."
    },
    correspondences: {
      element: "Agua Turbia Estancada o Vapor que se Disipa al Alba",
      astro: "Piscis en Sombra / Neptuno Retrógrado • El Engaño Sutil, la Paranoia o la Caída del Velo",
      hebrewLetter: "Qoph (ק) en Sombra • El Espejismo Cerebral y el Insomnio del Centinela",
      qliphoth: "Qulielfi • Las Larvas Astrales del Miedo y los Fantasmas de la Imaginación",
      alchemy: "Putrefactio Nebulosa • Los vapores tóxicos del matraz antes de que aparezca la luz del Sol",
      hermeticAxiom: "Cuando la marea negra baja al amanecer, quedan al descubierto en el barro tanto las perlas ocultas como las trampas de los impostores.",
      jungianComplex: "La Invasión del Inconsciente (Psicosis/Paranoia Proyectiva) y el Complejo de Engaño",
      yesNo: "No mientras dure la bruma (no firmes ni sentencies en la oscuridad; esperá a que termine de aclarar la verdad)",
      keywords: [
        "mentira descubierta",
        "paranoia proyectiva",
        "ansiedad nocturna",
        "niebla que cede",
        "espejismo roto",
        "agenda oculta",
        "fantasmas del pasado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Dejá de correr a los gritos en la oscuridad: la mitad de los monstruos que te aterran hoy son abrigos colgados en la silla de tu propia memoria, y la otra mitad son zorros disfrazados que van a quedar desnudos apenas asome el primer rayo del Sol.",
    oracleVoiceVariants: [
      "Dejá de correr a los gritos en la oscuridad: la mitad de los monstruos que te aterran hoy son abrigos colgados en la silla de tu propia memoria, y la otra mitad son zorros disfrazados que van a quedar desnudos apenas asome el primer rayo del Sol.",
      "Cuando me doy vuelta sobre el estanque, la marea baja de golpe y deja a la vista lo que estaba escondido bajo el barro. No te asustes por la verdad que hoy sale a flote: es mil veces mejor ver la trampa vacía que pisarla a ciegas.",
      "El lobo de tu paranoia y el perro de tu inseguridad llevan tres noches aullando sin dejarte dormir. Apagá el proyector de películas trágicas en tu nuca: estás sufriendo por adelantado un naufragio que solo existe en tu cabeza.",
      "Alguien en tu mesa está hablando con medias verdades, humo neptuniano o números dibujados en el agua. No firmes ni entregues tu llave hasta que todo esté escrito bajo la luz cruda del mediodía.",
      "El cangrejo del abismo retrocede hacia el lodo porque tenés miedo de enfrentar un recuerdo antiguo. Encendé la antorcha hoy mismo: ningún fantasma resiste cuando lo mirás fijo y lo llamás por su nombre."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Luna (Arcano XVIII) invertida opera en el Sendero 29 de la letra Qoph con un filo doble que exige máxima lucidez. En su faz densa y regresiva, diagnostica una intoxicación de neblina psíquica: miedos irracionales, insomnio, celos paranoicos, malentendidos cruzados o la presencia de personas que actúan con hipocresía, estafas sutiles y doble cara. Sin embargo, en su faz resolutiva —ya tocando el umbral del Arcano XIX (El Sol)—, anuncia que *el hechizo de confusión se está rompiendo*: las mentiras salen a la luz, los secretos se destapan por su propio peso y la bruma que te impedía ver el camino comienza finalmente a disiparse.",
    meaningVariants: [
      "La Luna (Arcano XVIII) invertida opera en el Sendero 29 de la letra Qoph con un filo doble que exige máxima lucidez. En su faz densa y regresiva, diagnostica una intoxicación de neblina psíquica: miedos irracionales, insomnio, celos paranoicos, malentendidos cruzados o la presencia de personas que actúan con hipocresía, estafas sutiles y doble cara. Sin embargo, en su faz resolutiva —ya tocando el umbral del Arcano XIX (El Sol)—, anuncia que *el hechizo de confusión se está rompiendo*: las mentiras salen a la luz, los secretos se destapan por su propio peso y la bruma que te impedía ver el camino comienza finalmente a disiparse.",
      "En el Árbol de la Vida, Qoph conecta el astral emocional de Netzach con el mundo físico de Malkuth. Cuando este sendero se invierte, el cuerpo astral proyecta sus propios temores y traumas no digeridos sobre la pantalla de la realidad cotidiana: interpretás un silencio ajeno como una traición o ves conspiraciones donde solo hay desorden. El Oráculo te ordena separar hoy mismo tus pesadillas internas de los hechos verificables.",
      "Alquímicamente, el Arcano XVIII en sombra advierte contra los 'vapores narcóticos de Mercurio y Neptuno': la tendencia a evadir una realidad incómoda refugiándote en fantasías, promesas ilusorias, nostalgias del pasado o estados alterados que embotan el filo de tu voluntad.",
      "En el ámbito de los negocios, la administración y los contratos, La Luna invertida es la señal clásica de la trampa descubierta a tiempo: un presupuesto con costos ocultos, un socio o empleado que esconde información bajo la alfombra, o una publicidad engañosa cuyo artificio cae antes de que pongas tu dinero.",
      "Recordá que la hora más fría y confusa de la medianoche (Arcano XVIII) es exactamente la antesala del amanecer solar (Arcano XIX). No tomes ninguna decisión drástica mientras tengas sueño o miedo; esperá a que la luz del día ponga cada cosa en su verdadera proporción."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica profunda de Jung, aquí opera la herida de la *Invasión del Inconsciente* y el trauma del *Entorno Ambiguo (Doble Vínculo)*: si creciste en un ambiente donde las caras sonreían pero por debajo había hostilidad o mentira no declarada, tu sistema nervioso desarrolló un radar hiperactivo que hoy desconfía hasta de la paz y fabrica fantasmas preventivos para no ser tomado por sorpresa.",
    theWoundVariants: [
      "En la clínica profunda de Jung, aquí opera la herida de la *Invasión del Inconsciente* y el trauma del *Entorno Ambiguo (Doble Vínculo)*: si creciste en un ambiente donde las caras sonreían pero por debajo había hostilidad o mentira no declarada, tu sistema nervioso desarrolló un radar hiperactivo que hoy desconfía hasta de la paz y fabrica fantasmas preventivos para no ser tomado por sorpresa.",
      "El complejo de *Regresión Abisal* (el cangrejo que camina hacia atrás): ante una prueba exigente del presente, tu psique siente la tentación de retroceder hacia viejos estados melancólicos, refugios infantiles o amores del pasado que la memoria maquilla falsamente de color rosa.",
      "La contaminación psíquica por falta de filtro en Piscis: absorber como una esponja las angustias, pesadillas y neurosis de tu entorno familiar o laboral hasta no saber qué emoción es tuya y cuál es prestada.",
      "El terror a la Verdad Desnuda del Sol: preferir inconscientemente mantener una situación en la penumbra ambigua ('mejor no pregunto a fondo') para no tener que hacerte cargo de lo que vas a encontrar al encender la luz."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño maestro de La Luna invertida consiste en confundir *paranoia ansiosa* con *intuición psíquica*. Te decís: *'Mi sexto sentido me avisa que todo va a salir mal'*, cuando en realidad la intuición verdadera siempre habla en paz y silencio, mientras que esa voz catastrófica que grita a las tres de la mañana es puro miedo viejo disfrazado de profecía.",
    theIllusionVariants: [
      "El autoengaño maestro de La Luna invertida consiste en confundir *paranoia ansiosa* con *intuición psíquica*. Te decís: *'Mi sexto sentido me avisa que todo va a salir mal'*, cuando en realidad la intuición verdadera siempre habla en paz y silencio, mientras que esa voz catastrófica que grita a las tres de la mañana es puro miedo viejo disfrazado de profecía.",
      "El espejismo nostálgico: creer que 'todo tiempo pasado fue mejor' porque la niebla lunar borra de tu memoria lo que te dolía en aquella etapa y solo te muestra el reflejo plateado.",
      "La ilusión del 'Se va a aclarar solo sin hablar': dejar crecer un malentendido comercial o afectivo por pudor a hacer una pregunta directa y pedir los comprobantes.",
      "Creer en cantos de sirena que prometen resultados mágicos sin esfuerzo técnico: donde no hay estructura clara ni números a la luz del sol, hay humo de Piscis."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XVIII invertido señala el momento en que las proyecciones fantasmagóricas del inconsciente chocan con la realidad o comienzan a disolverse. Exige higiene mental estricta para distinguir entre delirio ansioso, engaño externo y percepción real.",
    psycheVariants: [
      "Psicológicamente, el Arcano XVIII invertido señala el momento en que las proyecciones fantasmagóricas del inconsciente chocan con la realidad o comienzan a disolverse. Exige higiene mental estricta para distinguir entre delirio ansioso, engaño externo y percepción real.",
      "Tu cerebelo y sistema límbico (regidos por Qoph) están sobrecargados de imágenes residuales y falta de sueño profundo reparador, distorsionando tu evaluación diurna de los problemas.",
      "Si descubriste una mentira o doble juego hoy, agradecé la desilusión: salir de la ilusión (*des-ilusionarse*) es volver a pisar la roca firme de la verdad.",
      "Sanar el Sendero 29 requiere cruzar las dos torres con los ojos abiertos, dejando atrás tanto al lobo del pánico como al perro de la credulidad ingenua."
    ],

    lightAndShadow: "En Sombra Activa: Confusión mental, secretos o engaños que salen a la luz, ansiedad infundada, malentendidos, insomnio o fantasmas del pasado que se disipan al amanecer.",
    lightAndShadowVariants: [
      "En Sombra Activa: Confusión mental, secretos o engaños que salen a la luz, ansiedad infundada, malentendidos, insomnio o fantasmas del pasado que se disipan al amanecer.",
      "Octava Luminosa de Inversión: Disipación de la bruma, desenmascaramiento de impostores y fin del autoengaño. Octava Sombría: Paranoia, histeria nocturna, fraude oculto y regresión nostálgica.",
      "Dinámica de Qoph: La marea que baja dejando al descubierto lo que se escondía en el fondo del estanque."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Malentendidos, sospechas de celos, silencios ambiguos o verdades ocultas que finalmente salen a la superficie para limpiar (o terminar de sincerar) el vínculo. No armes novelas en tu cabeza ni stalkees en las sombras: sentate a hablar a plena luz del día con el corazón en la mano; lo que es real resistirá la luz y lo que era espejismo caerá solo.",
      work: "Alerta máxima contra propuestas comerciales confusas, presupuestos verbales sin desglose o socios/clientes que esquivan las preguntas directas. Exigí hoy todo por escrito, auditá los inventarios y no lances nada nuevo mientras no estén cien por ciento claros los términos técnicos.",
      money: "Riesgo de estafas sutiles, cobros fantasma, errores de facturación o fugas de caja que pasan inadvertidas en la neblina administrativa. Prendé el reflector contable hoy mismo porque vas a encontrar un número oculto.",
      spirit: "Limpieza del campo astral personal: alejarte de supersticiones miedosas, lecturas fatalistas o ambientes psíquicamente densos para recuperar tu soberanía solar.",
      healthAndEnergy: "Insomnio, sueños agitados o pesadillas, retención de líquidos, alergias difusas o agotamiento nervioso por falta de sueño REM profundo. Cuidá tus pies y tu higiene del sueño antes de la medianoche."
    },
    domainsVariants: [
      {
        love: "Malentendidos, sospechas de celos, silencios ambiguos o verdades ocultas que finalmente salen a la superficie para limpiar (o terminar de sincerar) el vínculo. No armes novelas en tu cabeza ni stalkees en las sombras: sentate a hablar a plena luz del día con el corazón en la mano; lo que es real resistirá la luz y lo que era espejismo caerá solo.",
        work: "Alerta máxima contra propuestas comerciales confusas, presupuestos verbales sin desglose o socios/clientes que esquivan las preguntas directas. Exigí hoy todo por escrito, auditá los inventarios y no lances nada nuevo mientras no estén cien por ciento claros los términos técnicos.",
        money: "Riesgo de estafas sutiles, cobros fantasma, errores de facturación o fugas de caja que pasan inadvertidas en la neblina administrativa. Prendé el reflector contable hoy mismo porque vas a encontrar un número oculto.",
        spirit: "Limpieza del campo astral personal: alejarte de supersticiones miedosas, lecturas fatalistas o ambientes psíquicamente densos para recuperar tu soberanía solar.",
        healthAndEnergy: "Insomnio, sueños agitados o pesadillas, retención de líquidos, alergias difusas o agotamiento nervioso por falta de sueño REM profundo. Cuidá tus pies y tu higiene del sueño antes de la medianoche."
      },
      {
        love: "Caída del velo de una idealización: empezás a ver a la otra persona tal cual es, sin el filtro poético pero engañoso de la luna, lo que te permite elegir con los ojos abiertos.",
        work: "Chismes de pasillo, competencia solapada o confusión en las instrucciones del equipo. Cortá el teléfono descompuesto hoy mismo emitiendo un comunicado único, claro y directo.",
        money: "No inviertas ni prestes un centavo hoy movido por la lástima, la culpa o una promesa nebulosa sin garantía física.",
        spirit: "Distinguir la canalización espiritual genuina de las voces del propio miedo subconsciente.",
        healthAndEnergy: "Evitá el exceso de pantallas azules, alcohol o cenas pesadas de noche que enturbian el trabajo reparador de la glándula pineal."
      },
      {
        love: "Si un fantasma afectivo del pasado vuelve a golpear la puerta en horas de soledad nocturna, recordá por qué se terminó a la luz del día y no abras el cerrojo por nostalgia.",
        work: "Un problema técnico o comercial que parecía un monstruo gigante visto de noche se revela hoy a la mañana como un desperfecto menor y fácil de resolver.",
        money: "Clarificación de una cuenta o deuda confusa: al pedir los recibos uno por uno, descubrís que debías menos (o que te correspondía más) de lo que te decían.",
        spirit: "Cruzar el umbral de las dos torres: dejar atrás el miedo al qué pasará y confiar en la cercanía inminente del Sol.",
        healthAndEnergy: "Baños de pies con agua caliente y sal gruesa antes de dormir descargan toda la electricidad astral acumulada en el día."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Encendé la luz blanca sobre cualquier rincón dudoso hoy mismo: hacé la pregunta frontal que desarma el malentendido, exigí los papeles claros y prohibite tomar decisiones después de las diez de la noche.",
      prohibition: "Prohibido creer hoy en las películas trágicas que te cuenta tu mente cansada de noche, firmar acuerdos ambiguos o alimentar sospechas sin pruebas.",
      psychomagicAct: "Escribí en un papel con lápiz suave las tres preocupaciones o sospechas difusas que te quitan el sueño; llevá ese papel bajo una lámpara potente (o al sol directo del mediodía), borrá los trazos de lápiz con una goma hasta que la hoja quede blanca de nuevo y escribí encima con tinta negra firme solo los hechos cien por ciento comprobados diciendo: 'Disipo los fantasmas de la noche; solo gobierno sobre la realidad desnuda'.",
      talismanPhrase: "La niebla se rinde ante mi mirada; ningún espejismo me engaña y camino directo hacia el Sol."
    },
    theAlchemyVariants: [
      {
        command: "Encendé la luz blanca sobre cualquier rincón dudoso hoy mismo: hacé la pregunta frontal que desarma el malentendido, exigí los papeles claros y prohibite tomar decisiones después de las diez de la noche.",
        prohibition: "Prohibido creer hoy en las películas trágicas que te cuenta tu mente cansada de noche, firmar acuerdos ambiguos o alimentar sospechas sin pruebas.",
        psychomagicAct: "Escribí en un papel con lápiz suave las tres preocupaciones o sospechas difusas que te quitan el sueño; llevá ese papel bajo una lámpara potente (o al sol directo del mediodía), borrá los trazos de lápiz con una goma hasta que la hoja quede blanca de nuevo y escribí encima con tinta negra firme solo los hechos cien por ciento comprobados diciendo: 'Disipo los fantasmas de la noche; solo gobierno sobre la realidad desnuda'.",
        talismanPhrase: "La niebla se rinde ante mi mirada; ningún espejismo me engaña y camino directo hacia el Sol."
      },
      {
        command: "Si tenés una decisión importante en danza, aplicale hoy la 'Regla del Alba': no respondas ni muevas un dedo hasta haber dormido ocho horas y mirado el asunto a las nueve de la mañana.",
        prohibition: "No vuelvas hacia atrás como el cangrejo hacia hábitos, lugares o vínculos nostálgicos que ya sabés que son un pantano.",
        psychomagicAct: "Llená un recipiente con agua tibia y dos cucharadas de sal gruesa, sumergí tus pies (regidos por Piscis y La Luna) durante diez minutos al final del día, y luego vaciá esa agua por el desagüe declarando que toda carga psíquica ajena y toda confusión mental se van de tu cuerpo.",
        talismanPhrase: "Limpio mis aguas profundas; mi instinto está despierto y libre de temores antiguos."
      },
      {
        command: "Pedí hoy los números exactos, los comprobantes y las condiciones por escrito en esa negociación que venía flotando en palabras vagas.",
        prohibition: "No permitas que los chismes ni los miedos ajenos entren en tu taller hoy.",
        psychomagicAct: "Abrí las cortinas de par en par apenas amanezca y dejá que la luz del día dé de lleno sobre tu cama y tu mesa de trabajo mientras golpeás las palmas tres veces para cortar cualquier resto de ensueño pesado.",
        talismanPhrase: "Cruzo las dos torres sin mirar atrás; las sombras quedan en el valle y mi mente habita en la claridad."
      }
    ],

    actionOracle: {
      command: "Encendé la luz blanca sobre cualquier rincón dudoso hoy mismo: hacé la pregunta frontal que desarma el malentendido, exigí los papeles claros y prohibite tomar decisiones después de las diez de la noche.",
      prohibition: "Prohibido creer hoy en las películas trágicas que te cuenta tu mente cansada de noche, firmar acuerdos ambiguos o alimentar sospechas sin pruebas.",
      psychomagicAct: "Escribí en un papel con lápiz suave las tres preocupaciones o sospechas difusas que te quitan el sueño; llevá ese papel bajo una lámpara potente (o al sol directo del mediodía), borrá los trazos de lápiz con una goma hasta que la hoja quede blanca de nuevo y escribí encima con tinta negra firme solo los hechos cien por ciento comprobados diciendo: 'Disipo los fantasmas de la noche; solo gobierno sobre la realidad desnuda'.",
      talismanPhrase: "La niebla se rinde ante mi mirada; ningún espejismo me engaña y camino directo hacia el Sol."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVIII aparece en Sombra: la niebla de un engaño empieza a disiparse o tus propios miedos nocturnos están distorsionando la vista.",
      secondAppearance: "La Luna Invertida sale por segunda vez: no tomes decisiones en medio de la bruma. Hay un dato oculto o una proyección emocional que debés aclarar a plena luz hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XVIII en Sombra: alerta máxima contra espejismos, fraudes sutiles o paranoia. Prendé todos los reflectores sobre tus cuentas y vínculos ahora mismo.",
      fourthPlusAppearance: "Umbral final de Qoph: el Oráculo te ordena terminar de inmediato con toda ambigüedad y nostalgia. El Sol del Arcano XIX ya está del otro lado de la puerta esperando que abras los ojos."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "No corras ni decidas en la oscuridad: esperá el amanecer para distinguir las sombras proyectadas por tu miedo de la realidad sólida.",
    counselVariants: [
      "No corras ni decidas en la oscuridad: esperá el amanecer para distinguir las sombras proyectadas por tu miedo de la realidad sólida.",
      "El monstruo que a medianoche parecía medir diez metros, a las ocho de la mañana bajo el sol no es más que una rama seca junto al camino.",
      "Cuando el agua está turbia, el pescador sabio no tira la red a ciegas: espera sentado en la piedra a que baje el barro.",
      "Agradecé cuando una mentira ajena queda al descubierto: te acaban de devolver la llave de tu tiempo.",
      "Nunca consultes tus decisiones de vida con tu cansancio de las once de la noche."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Rostro del Eclipse Despejándose (La Caída del Hechizo)",
        secret: "Al invertirse la carta, el disco lunar eclipsado queda abajo y las dieciocho gotas de rocío dejan de caer como bruma hipnótica. Simboliza el fin de un encantamiento engañoso o, en su faz densa, el insomnio y la rumiación mental cuando la cabeza queda sumergida en las aguas nocturnas.",
        esotericFormula: "Eclipse Invertido = Fin del Engaño o Noche de Insomnio Proyectivo",
        meditationPrompt: "¿Qué ilusión o mentira (propia o ajena) se está cayendo por su propio peso en estos días para dejarte ver la verdad?"
      },
      {
        id: "n2",
        x: 24,
        y: 52,
        title: "Las Torres del Umbral y el Aullido de la Paranoia",
        secret: "En Sombra, el caminante se detiene asustado entre las dos torres de piedra escuchando los ladridos del lobo y del perro (los miedos salvajes y las inseguridades sociales) en lugar de seguir el sendero central. Advierte que el único peligro real hoy es paralizarte por creer en los ladridos del temor.",
        esotericFormula: "Escuchar al Lobo y al Perro = Parálisis por Paranoia o Duda",
        meditationPrompt: "¿Qué miedo irracional te está ladrando hoy al oído sin tener ninguna prueba sólida en la realidad diurna?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Cangrejo Abisal en Retroceso (La Tentación Regresiva)",
        secret: "Con el estanque en la parte superior de la carta invertida, el crustáceo amenaza con volver a esconderse hacia atrás en el barro oscuro del pasado en vez de subir hacia la tierra firme. Es la advertencia contra la nostalgia regresiva y contra los secretos que intentan volver a esconderse bajo la alfombra.",
        esotericFormula: "Marcha Atrás del Cangrejo = Regresión al Pasado o Secreto Escondido",
        meditationPrompt: "¿Hacia qué viejo refugio o hábito del pasado sentís la tentación de retroceder hoy cuando en realidad te toca avanzar hacia el Sol?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIX INVERTIDO • EL SOL EN SOMBRA (RESH INVERTIDA • LA NUBE PASAJERA Y LA INSOLACIÓN DEL EGO)
  // ==========================================================================
  {
    id: 19,
    numeral: "XIX",
    name: "El Sol",
    subtitle: "El Mediodía Velado y el Espejo de la Vanidad",
    isReversed: true,
    palette: {
      primary: "#ca8a04",
      secondary: "#9a3412",
      glow: "rgba(202, 138, 4, 0.58)"
    },
    archetype: "sun",
    shadowPolarity: {
      byExcess: "La Insolación de Ícaro y el Rey Vanidoso: megalomanía, arrogancia ostentosa que necesita aplauso constante, quemarse por querer abarcar más de lo que el día permite, y ceguera por exceso de confianza.",
      byDeficiency: "La Nube frente al Mediodía: éxito real pero demorado por un ajuste final, síndrome del impostor que teme brillar en público, pesimismo injustificado cuando ya tenés el triunfo al alcance de la mano, o triunfo parcial."
    },
    correspondences: {
      element: "Fuego Solar Reverberante o Luz Tamizada por Bruma",
      astro: "El Sol en Exilio/Caída o Afligido • El Orgullo que Encandila o el Calor que Tarda en Llegar",
      hebrewLetter: "Resh (ר) en Sombra • La Cabeza Inflada de Vanidad o la Mente que baja la Vista ante la Luz",
      qliphoth: "Aurirol • Los Fuegos Fatuos de la Ostentación y el Deslumbramiento Vacío",
      alchemy: "Rubedo Excesiva (Adustio) • Quemar las flores del oro por exceso de calor seco en el final de la obra",
      hermeticAxiom: "Una nube de verano puede demorar una hora la cosecha, pero jamás apaga el Sol; solo se quema en el mediodía aquel que confunde la luz del cosmos con su propio sombrero.",
      jungianComplex: "La Inflación Solar del Ego (Complejo de Apolo/Ícaro) o la Fobia al Éxito y la Visibilidad",
      yesNo: "Sí, pero con leve demora o condición (el triunfo es seguro, pero debés bajar la soberbia y pulir un detalle antes de festejar)",
      keywords: [
        "éxito con leve demora",
        "vanidad ostentosa",
        "nube pasajera",
        "exceso de confianza",
        "miedo a brillar",
        "insolación del ego",
        "ajuste antes del triunfo"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Tan potente es mi luz que ni siquiera dándome vuelta podés apagarme: tu victoria sigue en pie, pero se te cruzó una nube de orgullo infantil o de impaciencia frente a los ojos. Bajá del pedestal de bronce, ajustá el tornillo que falta y el mediodía volverá a brillar limpio.",
    oracleVoiceVariants: [
      "Tan potente es mi luz que ni siquiera dándome vuelta podés apagarme: tu victoria sigue en pie, pero se te cruzó una nube de orgullo infantil o de impaciencia frente a los ojos. Bajá del pedestal de bronce, ajustá el tornillo que falta y el mediodía volverá a brillar limpio.",
      "Cuidado con la fiebre del pavo real: estás gastando más energía en mostrar las plumas doradas y buscar el aplauso de la tribuna que en alimentar el fuego real de tu fragua.",
      "¿Por qué te ponés lentes oscuros cuando por fin sale el sol en tu vida? Te acostumbraste tanto a pelear en la tormenta que ahora que las cosas salen bien buscás un problema imaginario para no disfrutar.",
      "Estás queriendo festejar y descorchar antes de haber cruzado el último metro de la línea de llegada. No subestimes al rival ni des por cerrado un trato hasta que el oro esté acreditado en tu mano.",
      "En mi polo de agotamiento, querés ser el Sol que calienta a todo el mundo las veinticuatro horas sin apagarse nunca. Si no dejás que tus tierras descansen al atardecer, vas a convertir tu propio jardín en un desierto."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "En la tradición hermética, El Sol (Arcano XIX) es un arquetipo tan radicalmente benéfico que ni siquiera al salir invertido pierde su promesa de éxito y vitalidad en el Sendero 30 de la letra Resh. Sin embargo, su inversión introduce dos advertencias estratégicas fundamentales: la primera es la *Nube Pasajera*, que señala que el triunfo comercial, creativo o afectivo que buscás es seguro, pero sufrirá una pequeña demora técnica o requerirá ajustar un detalle final antes de brillar al cien por ciento. La segunda es la *Sombra de la Vanidad Solar*: exceso de confianza que te hace descuidar los flancos, orgullo infantil en los vínculos, ostentación innecesaria o agotamiento físico por querer abarcar más de lo que da el cuerpo.",
    meaningVariants: [
      "En la tradición hermética, El Sol (Arcano XIX) es un arquetipo tan radicalmente benéfico que ni siquiera al salir invertido pierde su promesa de éxito y vitalidad en el Sendero 30 de la letra Resh. Sin embargo, su inversión introduce dos advertencias estratégicas fundamentales: la primera es la *Nube Pasajera*, que señala que el triunfo comercial, creativo o afectivo que buscás es seguro, pero sufrirá una pequeña demora técnica o requerirá ajustar un detalle final antes de brillar al cien por ciento. La segunda es la *Sombra de la Vanidad Solar*: exceso de confianza que te hace descuidar los flancos, orgullo infantil en los vínculos, ostentación innecesaria o agotamiento físico por querer abarcar más de lo que da el cuerpo.",
      "En el Árbol de la Vida, el Sendero de Resh ('La Cabeza') une la razón de Hod con la imaginación vital de Yesod. Cuando se invierte, la cabeza sufre de 'insolación egoica': te encandilás con tu propio brillo, dejás de escuchar las advertencias técnicas de tu equipo o subestimás los costos reales porque dás el éxito por sentado antes de firmarlo.",
      "Observá el jardín de los Gemelos Solares dado vuelta: el muro de piedra que debía ser un cerco bajo protector vuelve a levantarse como una barrera de orgullo entre vos y los demás. En lugar de compartir la luz con fraternidad simple, hay competencia de egos, necesidad de tener siempre el protagonismo o miedo a mostrarte vulnerable.",
      "Alquímicamente, el Arcano XIX en sombra es la *Adustio* (quemadura de la Piedra Roja): cuando el alquimista ya obtuvo el oro filosófico pero, por codicia de querer duplicarlo sin medida, mantiene el crisol al rojo vivo hasta resecar la tintura. Aprendé a retirar la obra del fuego cuando ya está en su punto justo.",
      "En su manifestación psicológica por defecto, esta carta desenmascara el *Miedo Escénico a la Luz*: tener una obra o un producto digno del primer puesto y esconderlo en un rincón secundario por temor a la envidia ajena o por síndrome del impostor."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica profunda de Jung, aquí opera la herida del *Niño Solar Herido en su Narcisismo*: o bien de chico solo te miraban cuando sacabas diez y brillabas en el escenario (instalando la adicción agotadora al aplauso y al éxito continuo), o bien te avergonzaron cuando quisiste brillar ('no te creas tanto'), dejándote una fobia inconsciente a ocupar el centro de la luz.",
    theWoundVariants: [
      "En la clínica profunda de Jung, aquí opera la herida del *Niño Solar Herido en su Narcisismo*: o bien de chico solo te miraban cuando sacabas diez y brillabas en el escenario (instalando la adicción agotadora al aplauso y al éxito continuo), o bien te avergonzaron cuando quisiste brillar ('no te creas tanto'), dejándote una fobia inconsciente a ocupar el centro de la luz.",
      "El complejo de Ícaro (la inflación maníaca): volar tan cerca del sol embriagado por los primeros resultados exitosos que la cera de la prudencia se derrite y descuidás la tierra firme de la contabilidad.",
      "La incapacidad de tolerar la felicidad simple: cuando una persona estuvo años en modo de supervivencia y combate, la paz luminosa del Sol le genera una extraña ansiedad ('esto es demasiado bueno para durar') que la lleva a buscar nubes donde el cielo está azul.",
      "El orgullo infantil en la intimidad: poner un puchero de rey ofendido cuando el mundo o la pareja no adivinan tus deseos en el acto."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El doble autoengaño del Sol invertido consiste en confundir *vidriera ruidosa* con *éxito sólido*, o en creer que porque hoy se cruzó un nubarrón de media hora fracasó toda la cosecha del verano.",
    theIllusionVariants: [
      "El doble autoengaño del Sol invertido consiste en confundir *vidriera ruidosa* con *éxito sólido*, o en creer que porque hoy se cruzó un nubarrón de media hora fracasó toda la cosecha del verano.",
      "El espejismo de *'Ya está ganado, no hace falta revisar los detalles'*: la mayoría de las batallas que se pierden bajo el Arcano XIX invertido se pierden en el minuto ochenta y nueve por festejar antes del pitazo final.",
      "La coartada de la 'Falsa Modestia': decirte que no salís a vender fuerte ni a mostrarte en grande porque 'sos perfil bajo', cuando en realidad tenés miedo de que te midan a plena luz.",
      "Creer que pedir ayuda o delegar opaca tu brillo: un líder solar verdadero se rodea de estrellas grandes sin temer que le hagan sombra."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XIX en sombra diagnostica o bien una inflación narcisista del Yo que busca validación externa constante, o bien una inhibición defensiva de la propia grandeza creativa acompañada de agotamiento por sobreexposición.",
    psycheVariants: [
      "Psicológicamente, el Arcano XIX en sombra diagnostica o bien una inflación narcisista del Yo que busca validación externa constante, o bien una inhibición defensiva de la propia grandeza creativa acompañada de agotamiento por sobreexposición.",
      "Estás confundiendo tu valor ontológico (el Sol eterno del Sí-Mismo) con los aplausos o las métricas de una semana (los rayos externos).",
      "Si sentís fatiga visual, dolor de cabeza o irritabilidad al final del día, estás 'insolado' de tanta exposición mental y pública: necesitás sombra fresca y silencio privado.",
      "Restituir el eje de Resh exige brillar con la naturalidad del mediodía: sin inflar el pecho por vanidad y sin esconder la cara por vergüenza."
    ],

    lightAndShadow: "En Sombra Activa: Éxito demorado pero seguro, nube pasajera, vanidad u orgullo infantil, exceso de confianza que descuida detalles, o agotamiento por querer abarcar demasiado.",
    lightAndShadowVariants: [
      "En Sombra Activa: Éxito demorado pero seguro, nube pasajera, vanidad u orgullo infantil, exceso de confianza que descuida detalles, o agotamiento por querer abarcar demasiado.",
      "Sombra por Exceso: Arrogancia ostentosa, encandilamiento egoico, gasto de apariencia y fiebre de protagonismo. Sombra por Defecto: Triunfo postergado unos días, miedo a mostrarse e inseguridad injustificada.",
      "Distorsión de Resh: El sol que sigue brillando arriba pero cuya luz llega distorsionada por el humo del orgullo o la impaciencia."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Un vínculo cálido y con amor verdadero que hoy se ve empañado temporalmente por berrinches de orgullo infantil, competencia por ver quién tiene más razón o falta de atención sencilla. Dejen el teatro del ego afuera: un abrazo sincero y reírse de uno mismo disipan hoy cualquier nube en cinco minutos.",
      work: "El éxito de tu proyecto o negocio está asegurado en su estructura de fondo, pero hay una demora menor en los tiempos o un detalle técnico/comercial que quedó flojo por exceso de confianza. No vendas la piel del oso antes de cazarlo: revisá el control de calidad hoy mismo, bajá el humo publicitario y asegurá la entrega real.",
      money: "Ingresos fuertes que tardan unos días más de lo previsto en acreditarse, o peligro de gastar de más en lujos de apariencia y vidriera para impresionar a terceros. Cuidá la caja real por encima del brillo externo.",
      spirit: "Recordar que toda luz, talento y carisma que fluyen por vos provienen del Sol Central del cosmos; la gratitud humilde multiplica la gracia, la soberbia la corta.",
      healthAndEnergy: "Insolación energética, fiebre o deshidratación por no parar a tiempo, fatiga visual, presión arterial lábil o agotamiento cardíaco/nervioso por exceso de actividad diurna sin descanso."
    },
    domainsVariants: [
      {
        love: "Un vínculo cálido y con amor verdadero que hoy se ve empañado temporalmente por berrinches de orgullo infantil, competencia por ver quién tiene más razón o falta de atención sencilla. Dejen el teatro del ego afuera: un abrazo sincero y reírse de uno mismo disipan hoy cualquier nube en cinco minutos.",
        work: "El éxito de tu proyecto o negocio está asegurado en su estructura de fondo, pero hay una demora menor en los tiempos o un detalle técnico/comercial que quedó flojo por exceso de confianza. No vendas la piel del oso antes de cazarlo: revisá el control de calidad hoy mismo, bajá el humo publicitario y asegurá la entrega real.",
        money: "Ingresos fuertes que tardan unos días más de lo previsto en acreditarse, o peligro de gastar de más en lujos de apariencia y vidriera para impresionar a terceros. Cuidá la caja real por encima del brillo externo.",
        spirit: "Recordar que toda luz, talento y carisma que fluyen por vos provienen del Sol Central del cosmos; la gratitud humilde multiplica la gracia, la soberbia la corta.",
        healthAndEnergy: "Insolación energética, fiebre o deshidratación por no parar a tiempo, fatiga visual, presión arterial lábil o agotamiento cardíaco/nervioso por exceso de actividad diurna sin descanso."
      },
      {
        love: "Si estás libre, cuidado con dejarte encandilar por alguien que brilla mucho en las redes o en las fiestas pero que solo se mira al espejo a sí mismo; buscá calor humano real, no fuegos artificiales.",
        work: "Síndrome del impostor en la puerta del triunfo: tenés un producto superior a la media, pero te achicás a la hora de ponerlo en la vidriera principal. Salí a la luz hoy sin pedir permiso.",
        money: "El negocio es rentable, pero los costos de representación o el desorden por euforia se están comiendo una tajada del margen neto. Ajustá las clavijas.",
        spirit: "Aprender a brillar en silencio: la obra maestra no necesita gritar que es de oro; su propio peso específico lo demuestra.",
        healthAndEnergy: "Protegé tus ojos del exceso de brillo de pantallas y regulá tu exposición al estrés competitivo."
      },
      {
        love: "Promesas hechas en un momento de euforia que después cuesta sostener en la semana; bajá el amor a gestos cotidianos, simples y cumplidos.",
        work: "Rivalidad de cartel entre socios o colaboradores por ver quién se lleva el crédito del logro. Repartí el reconocimiento con generosidad de Rey y consolidarás tu liderazgo.",
        money: "Una demora bancaria o burocrática menor frena un cobro un par de días; no te impacientes porque la moneda ya viene en camino.",
        spirit: "Disolver la nube del pesimismo malagradecido: hacé hoy el inventario de todas las bendiciones que ya están brillando en tu jardín.",
        healthAndEnergy: "Excelente vitalidad de base que solo pide hidratación fresca, magnesio y bajar la persiana a tiempo para dormir."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Bajá toda espuma de orgullo o ansiedad hoy mismo: revisá con humildad de aprendiz el detalle final de tu obra antes de cantar victoria, y agradecé en voz alta lo que ya lograste sin quejarte por una demora menor.",
      prohibition: "Prohibido gastar hoy para aparentar ante otros, dar por cerrado un negocio antes de cobrarlo, o esconder tu talento por vergüenza.",
      psychomagicAct: "Salí a la luz del día con un vaso de agua limpia y un espejo pequeño; apoyá el espejo al sol para proyectar su reflejo de luz sobre la pared de tu taller y luego lavá el espejo con el agua diciendo: 'La luz no es mía, yo soy su espejo limpio; disipo toda nube de orgullo y recibo mi cosecha en paz'.",
      talismanPhrase: "Ninguna nube pasajera apaga mi mediodía; brillo con humildad soberana y aseguro cada paso de mi victoria."
    },
    theAlchemyVariants: [
      {
        command: "Bajá toda espuma de orgullo o ansiedad hoy mismo: revisá con humildad de aprendiz el detalle final de tu obra antes de cantar victoria, y agradecé en voz alta lo que ya lograste sin quejarte por una demora menor.",
        prohibition: "Prohibido gastar hoy para aparentar ante otros, dar por cerrado un negocio antes de cobrarlo, o esconder tu talento por vergüenza.",
        psychomagicAct: "Salí a la luz del día con un vaso de agua limpia y un espejo pequeño; apoyá el espejo al sol para proyectar su reflejo de luz sobre la pared de tu taller y luego lavá el espejo con el agua diciendo: 'La luz no es mía, yo soy su espejo limpio; disipo toda nube de orgullo y recibo mi cosecha en paz'.",
        talismanPhrase: "Ninguna nube pasajera apaga mi mediodía; brillo con humildad soberana y aseguro cada paso de mi victoria."
      },
      {
        command: "Reconocé hoy públicamente el mérito o la ayuda de alguien que colaboró con vos en este tramo: ese gesto de grandeza destraba al instante cualquier demora.",
        prohibition: "No subestimes el último diez por ciento del trabajo por exceso de confianza; rematá la faena con el mismo rigor del primer día.",
        psychomagicAct: "Dibujá un sol radiante en una hoja, poné encima un algodón o papel gris liviano (la nube pasajera que demora tu asunto) y soplalo con un solo aliento fuerte y largo hasta que vuele fuera de la mesa dejando el sol descubierto.",
        talismanPhrase: "Soplo la nube de la impaciencia; mi oro está seguro y llega en su hora exacta."
      },
      {
        command: "Si estabas escondido detrás del muro por pudor o síndrome del impostor, da la cara hoy mismo y presentá tu propuesta a pleno sol.",
        prohibition: "No quemes tu cuerpo queriendo hacer en un día el trabajo de tres; regulá tu calor para brillar todo el año.",
        psychomagicAct: "Colocá una moneda dorada bajo un vaso de agua al sol durante una hora, retirá la moneda para llevarla en tu bolsillo y regá una planta con el agua solarizada declarando que tu éxito alimenta la vida sin quemarla.",
        talismanPhrase: "Mi claridad no necesita aplausos prestados; mi obra brilla por su propia verdad."
      }
    ],

    actionOracle: {
      command: "Bajá toda espuma de orgullo o ansiedad hoy mismo: revisá con humildad de aprendiz el detalle final de tu obra antes de cantar victoria, y agradecé en voz alta lo que ya lograste sin quejarte por una demora menor.",
      prohibition: "Prohibido gastar hoy para aparentar ante otros, dar por cerrado un negocio antes de cobrarlo, o esconder tu talento por vergüenza.",
      psychomagicAct: "Salí a la luz del día con un vaso de agua limpia y un espejo pequeño; apoyá el espejo al sol para proyectar su reflejo de luz sobre la pared de tu taller y luego lavá el espejo con el agua diciendo: 'La luz no es mía, yo soy su espejo limpio; disipo toda nube de orgullo y recibo mi cosecha en paz'.",
      talismanPhrase: "Ninguna nube pasajera apaga mi mediodía; brillo con humildad soberana y aseguro cada paso de mi victoria."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIX aparece en Sombra: el éxito está en camino, pero pide disipar una nube de orgullo, exceso de confianza o impaciencia.",
      secondAppearance: "El Sol Invertido sale por segunda vez: no des nada por sentado antes de firmar ni te desanimes por un retraso menor. Ajustá el detalle pendiente hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XIX en Sombra: cuidado con encandilarte con la vanidad o con quemar tus reservas físicas antes de cruzar la meta. Bajá a tierra y asegurá el cierre.",
      fourthPlusAppearance: "Advertencia solar de Resh: tenés el triunfo frente a tus narices y lo estás demorando vos mismo por orgullo o perfeccionismo. Abrí las manos con sencillez y recibí la luz ahora."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Una nube pasajera jamás apaga el mediodía: bajá el orgullo, revisá los detalles sin exceso de confianza y mantené la alegría que el éxito ya está en camino.",
    counselVariants: [
      "Una nube pasajera jamás apaga el mediodía: bajá el orgullo, revisá los detalles sin exceso de confianza y mantené la alegría que el éxito ya está en camino.",
      "El trigo maduro inclina la espiga con humildad por el peso de su propio grano; solo la espiga vacía se queda tiesa mirando de arriba a las demás.",
      "No festejes en el vestuario cuando todavía quedan cinco minutos de partido en la cancha.",
      "El Sol calienta igual al palacio y a la huerta sin pedir que le levanten estatuas; brillá por amor a tu obra, no por hambre de aplauso.",
      "Si el día amaneció con bruma, prepará igual las canastas: a las doce en punto el cielo se abre."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 24,
        title: "El Disco de Veintiún Rayos en Reverberación Cegadora",
        secret: "Al invertirse la carta, el gran astro de oro parece encandilar los ojos desde abajo como el reflejo del sol sobre la arena del desierto. Representa el deslumbramiento de la vanidad (creer que uno ya no puede equivocarse) o la pequeña bruma temporal que retrasa unos días la claridad total.",
        esotericFormula: "Sol Invertido = Encandilamiento por Exceso de Confianza o Bruma Pasajera",
        meditationPrompt: "¿Qué detalle práctico estás dando por seguro hoy sin haberlo verificado por exceso de confianza?"
      },
      {
        id: "n2",
        x: 28,
        y: 60,
        title: "Los Girasoles Inclinados por el Calor Excesivo",
        secret: "En Sombra, las cuatro flores doradas que coronaban el muro quedan mirando hacia el suelo, agobiadas por el peso o la falta de riego. Simbolizan el agotamiento físico por querer brillar sin descanso o la necesidad de nutrir los cuatro elementos prácticos antes de exigirles más rendimiento.",
        esotericFormula: "Girasoles Invertidos = Fatiga por Sobreexposición o Falta de Riego",
        meditationPrompt: "¿Estás cuidando la hidratación y el descanso de tu cuerpo hoy tanto como cuidás la vidriera de tu trabajo?"
      },
      {
        id: "n3",
        x: 68,
        y: 76,
        title: "El Muro de Piedra Vuelto a Levantar entre los Gemelos",
        secret: "Con el jardín en la parte superior de la carta invertida, el muro de piedra vuelve a interponerse visualmente sobre los dos niños solares. Advierte contra los caprichos de orgullo infantil que levantan paredes innecesarias entre socios o amantes que en realidad se quieren y tienen todo para triunfar juntos.",
        esotericFormula: "Muro Sobre los Niños = Orgullo Infantil que Empaña la Alegría",
        meditationPrompt: "¿Qué pequeño orgullo o capricho podés soltar hoy mismo para volver a disfrutar en paz de lo que ya construiste?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XX INVERTIDO • EL JUICIO EN SOMBRA (SHIN INVERTIDA • LA SORDERA AL LLAMADO Y LA CULPA)
  // ==========================================================================
  {
    id: 20,
    numeral: "XX",
    name: "El Juicio",
    subtitle: "El Llamado Desoído y el Tribunal de la Culpa",
    isReversed: true,
    palette: {
      primary: "#64748b",
      secondary: "#b45309",
      glow: "rgba(100, 116, 139, 0.58)"
    },
    archetype: "judgement",
    shadowPolarity: {
      byExcess: "El Fiscal Apocalíptico y la Culpa Persecutoria: autocrítica despiadada que no se perdona el pasado, obsesión paralizante con el juicio y la opinión de los demás, o fanatismo que condena todo sin redención.",
      byDeficiency: "El Durmiente del Sarcófago: hacer oídos sordos al llamado innegable de tu verdadera vocación, postergar por cobardía una decisión histórica inminente, y preferir la comodidad muerta del ataúd antes que el vértigo de renacer."
    },
    correspondences: {
      element: "Fuego Ahogado bajo Losa de Piedra / Eco Distorsionado",
      astro: "Plutón Retrógrado / Fuego Cósmico Resistido • El Miedo a la Metamorfosis Final y la Deuda Kármica",
      hebrewLetter: "Shin (ש) en Sombra • Las Tres Llamas Invertidas del Remordimiento Estéril",
      qliphoth: "Shalhebiron • El Fuego del Remordimiento que quema sin purificar y el Ruido del Juicio Ajeno",
      alchemy: "Resurrectio Abortada • El metal que se niega a recibir el polvo de proyección y permanece siendo plomo gris",
      hermeticAxiom: "No hay sordo más trágico que aquel que escucha la trompeta de su propio destino y cierra la tapa del sepulcro por miedo a cambiar de vida.",
      jungianComplex: "La Traición a la Vocación (Neurosis de Destino) y el Complejo de Culpa Irredimible",
      yesNo: "No si seguís postergando el llamado o atado a la culpa (perdonate hoy y tomá la decisión que estás dilatando)",
      keywords: [
        "vocación desoída",
        "culpa no perdonada",
        "miedo al juicio ajeno",
        "decisión postergada",
        "apego al sarcófago",
        "autocrítica feroz",
        "llamado ignorado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "La trompeta del Eón está haciendo temblar los vidrios de tu cuarto, pero vos te tapás las orejas con las dos manos porque sabés que si decís que sí a ese llamado, ya no podrás seguir viviendo en tu cómoda pequeñez de ayer.",
    oracleVoiceVariants: [
      "La trompeta del Eón está haciendo temblar los vidrios de tu cuarto, pero vos te tapás las orejas con las dos manos porque sabés que si decís que sí a ese llamado, ya no podrás seguir viviendo en tu cómoda pequeñez de ayer.",
      "¿Hasta qué año vas a seguir juzgando y condenando a la versión tuya de hace diez años con los ojos que tenés hoy? El remordimiento que no se convierte en obra nueva es solo vanidad vestida de penitencia.",
      "Le tenés más miedo al 'qué van a decir en el pueblo' que a morirte sin haber cantado tu propia canción. El tribunal de los vecinos se olvida de vos a los cinco minutos; el tribunal de tu alma no se olvida nunca.",
      "Mirame en el sarcófago invertido: ya se abrió la tapa de piedra, ya entró la luz del sol, pero te quedás sentado adentro haciendo cuentas viejas porque el mundo nuevo te exige ser grande.",
      "Hay un veredicto, una definición vincular o un salto profesional que tiene vencido el plazo desde el mes pasado. Dejá de pedir prórrogas: el ángel ya tocó la séptima nota."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Juicio (Arcano XX) invertido señala una resistencia crítica ante el llamado evolutivo más alto de tu biografía en el Sendero 31 de la letra de fuego Shin. En su polo de sordera defensiva, revela que sabés con certeza absoluta cuál es tu verdadera vocación, qué decisión definitiva debés tomar o qué etapa debés inaugurar, pero estás haciéndote el distraído por apego a la seguridad conocida (el sarcófago). En su polo de tormento moral, diagnostica una fijación con la *Culpa y el Juicio Externo*: o no terminás de perdonarte a vos mismo ni a otros por errores del pasado, o estás frenando tu lanzamiento por pánico a cómo será juzgada tu obra por la crítica ajena.",
    meaningVariants: [
      "El Juicio (Arcano XX) invertido señala una resistencia crítica ante el llamado evolutivo más alto de tu biografía en el Sendero 31 de la letra de fuego Shin. En su polo de sordera defensiva, revela que sabés con certeza absoluta cuál es tu verdadera vocación, qué decisión definitiva debés tomar o qué etapa debés inaugurar, pero estás haciéndote el distraído por apego a la seguridad conocida (el sarcófago). En su polo de tormento moral, diagnostica una fijación con la *Culpa y el Juicio Externo*: o no terminás de perdonarte a vos mismo ni a otros por errores del pasado, o estás frenando tu lanzamiento por pánico a cómo será juzgada tu obra por la crítica ajena.",
      "En la Cábala hermética, la letra Shin (ש) es el fuego del Espíritu que desciende para redimir los cuatro elementos de Malkuth. Cuando el Arcano XX se invierte, ese fuego no logra coronar la materia porque el consultante sigue identificándose con su 'cadáver biográfico': sus viejos rencores, sus fracasos anteriores o las etiquetas que le pusieron en el pasado.",
      "Observá la diferencia entre La Muerte invertida (Arcano XIII) y El Juicio invertido (Arcano XX): en el XIII te negabas a soltar lo que moría; en el XX ya moriste a lo viejo, la puerta ya está abierta, pero tenés miedo de *resucitar* y asumir el tamaño descomunal de tu nueva misión.",
      "Alquímicamente, esta inversión representa el rechazo del *Polvo de Proyección*: tener el elixir listo en la mano y no atreverse a arrojarlo sobre el crisol para transmutar toda la masa comercial o creativa de una sola vez.",
      "En asuntos legales, administrativos o de reputación pública, El Juicio invertido advierte sobre resoluciones que se demoran por expedientes mal presentados, chismes que juzgan por apariencias o la necesidad urgente de saldar una cuenta ética pendiente antes de exponerte al gran público."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "Carl Gustav Jung advirtió que la negativa a escuchar la propia *Vocación (Beruf)* por cobardía social es la causa secreta de las depresiones más rebeldes de la madurez. La herida raíz aquí es el *Complejo de Jonás* (propuesto por Abraham Maslow siguiendo a Jung): el miedo tanto a tu peor bajeza como a tu máxima grandeza, porque sabés que si asumís tu llamado real ya no tendrás excusas para fracasar.",
    theWoundVariants: [
      "Carl Gustav Jung advirtió que la negativa a escuchar la propia *Vocación (Beruf)* por cobardía social es la causa secreta de las depresiones más rebeldes de la madurez. La herida raíz aquí es el *Complejo de Jonás* (propuesto por Abraham Maslow siguiendo a Jung): el miedo tanto a tu peor bajeza como a tu máxima grandeza, porque sabés que si asumís tu llamado real ya no tendrás excusas para fracasar.",
      "La herida de la *Vergüenza Pública Temprana*: haber sentido alguna vez la burla o el dedo acusador del grupo instaló en tu amígdala cerebral un terror fóbico al 'Juicio Final de los Otros', haciéndote callar tu trompeta para pasar desapercibido.",
      "El masoquismo de la Culpa Perpetua: seguir pagando intereses morales por una deuda afectiva o laboral que ya prescribió hace años, porque en el fondo tu ego prefiere sentirse 'culpable pero importante' antes que perdonado y humilde.",
      "El rencor fosilizado contra el propio linaje: no terminar de perdonar a tus padres o a tu historia de origen (las tres figuras del sarcófago), lo que te mantiene atado al pasado discutiendo con fantasmas."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño central del Arcano XX invertido es decirte: *'Todavía no sé cuál es mi verdadero llamado o qué decisión tomar'*, cuando lo sabés desde el primer día en que te despertaste pensando en eso, pero fingís confusión para ganar tiempo.",
    theIllusionVariants: [
      "El autoengaño central del Arcano XX invertido es decirte: *'Todavía no sé cuál es mi verdadero llamado o qué decisión tomar'*, cuando lo sabés desde el primer día en que te despertaste pensando en eso, pero fingís confusión para ganar tiempo.",
      "El espejismo del *'Cuando la gente cambie o me entienda, voy a salir con mi verdad'*: el Arcángel no pide una encuesta de opinión antes de tocar la trompeta; toca la nota y despierta únicamente a los que tienen oídos para oír.",
      "La ilusión de que 'no perdonar hace justicia': retener el perdón hacia otro o hacia vos mismo creyendo que así castigás el error, cuando el único que sigue encerrado en el sarcófago sos vos.",
      "Creer que ya es 'demasiado tarde' en tu vida para reinventarte de raíz: mientras respires y arda la letra Shin en tu pecho, cualquier día es el día uno del Eón."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XX en sombra diagnostica una resistencia del Yo a la síntesis integradora del Sí-Mismo (*Self*). El sujeto sufre de rumiación culposa sobre el pasado, miedo paralizante a la opinión pública o sordera neurótica frente a su imperativo vocacional.",
    psycheVariants: [
      "Psicológicamente, el Arcano XX en sombra diagnostica una resistencia del Yo a la síntesis integradora del Sí-Mismo (*Self*). El sujeto sufre de rumiación culposa sobre el pasado, miedo paralizante a la opinión pública o sordera neurótica frente a su imperativo vocacional.",
      "Ese zumbido de insatisfacción de fondo que sentís al terminar el día es la trompeta de tu vocación no vivida golpeando desde adentro.",
      "Perdonar tu pasado hoy no es un acto sentimental blando: es una maniobra de alta ingeniería psíquica para recuperar el cuarenta por ciento de tu energía que tenías secuestrada en el ayer.",
      "Salir del sepulcro de Shin exige matar al 'qué dirán' y responder únicamente ante la nota vibratoria de tu propio espíritu."
    ],

    lightAndShadow: "En Sombra Activa: Hacer oídos sordos al llamado interior, autocrítica despiadada, culpa por el pasado no perdonada, miedo al juicio ajeno o demorar una definición inminente.",
    lightAndShadowVariants: [
      "En Sombra Activa: Hacer oídos sordos al llamado interior, autocrítica despiadada, culpa por el pasado no perdonada, miedo al juicio ajeno o demorar una definición inminente.",
      "Sombra por Exceso: Tribunal de culpa implacable, rencor que no absuelve y terror a la crítica pública. Sombra por Defecto: Letargo vocacional, postergación del despertar y apego al ataúd conocido.",
      "Distorsión de Shin: La trompeta que suena en el cielo mientras el durmiente aprieta los párpados para no levantarse."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Rencores antiguos que se vuelven a sacar del cajón en cada discusión impidiendo que el vínculo renazca, o miedo a dar una definición sincera y definitiva en la pareja (ni se comprometen a fondo ni se sueltan). Si aparece alguien del pasado pidiendo una segunda oportunidad, evaluá con bisturí si hubo una resurrección real de conciencia o si es solo más de lo mismo.",
      work: "Postergar el salto hacia tu verdadera vocación o hacia el proyecto grande de tu vida por miedo a dejar la zona cómoda. En lo comercial, advierte sobre una campaña de difusión o lanzamiento que está saliendo con volumen tímido por miedo a la crítica: subí el volumen de tu trompeta hoy mismo y anunciá tu obra con autoridad.",
      money: "Demoras en resoluciones judiciales, cobros de herencias, expedientes o liquidaciones por papeles incompletos; o bien, bloqueos financieros autoimpuestos por sentir inconscientemente que 'debés pagar una culpa' antes de merecer prosperar.",
      spirit: "Negarse a recibir la absolución de la Gracia: seguir cargando una cruz de culpa moral que el universo ya te perdonó hace tiempo.",
      healthAndEnergy: "Somatizaciones en oídos (acúfenos/zumbidos por 'no querer escuchar'), vías respiratorias altas, fatiga matinal pesada al despertar y rigidez corporal por resistir el cambio de piel."
    },
    domainsVariants: [
      {
        love: "Rencores antiguos que se vuelven a sacar del cajón en cada discusión impidiendo que el vínculo renazca, o miedo a dar una definición sincera y definitiva en la pareja (ni se comprometen a fondo ni se sueltan). Si aparece alguien del pasado pidiendo una segunda oportunidad, evaluá con bisturí si hubo una resurrección real de conciencia o si es solo más de lo mismo.",
        work: "Postergar el salto hacia tu verdadera vocación o hacia el proyecto grande de tu vida por miedo a dejar la zona cómoda. En lo comercial, advierte sobre una campaña de difusión o lanzamiento que está saliendo con volumen tímido por miedo a la crítica: subí el volumen de tu trompeta hoy mismo y anunciá tu obra con autoridad.",
        money: "Demoras en resoluciones judiciales, cobros de herencias, expedientes o liquidaciones por papeles incompletos; o bien, bloqueos financieros autoimpuestos por sentir inconscientemente que 'debés pagar una culpa' antes de merecer prosperar.",
        spirit: "Negarse a recibir la absolución de la Gracia: seguir cargando una cruz de culpa moral que el universo ya te perdonó hace tiempo.",
        healthAndEnergy: "Somatizaciones en oídos (acúfenos/zumbidos por 'no querer escuchar'), vías respiratorias altas, fatiga matinal pesada al despertar y rigidez corporal por resistir el cambio de piel."
      },
      {
        love: "Preocuparte demasiado por cómo juzga tu familia o tu entorno a tu relación; cierren las ventanas a las opiniones de la tribuna y vivan su verdad puertas adentro.",
        work: "Tenés una joya dormida en tu archivo o depósito (un desarrollo viejo, una marca o una fórmula) que estás desperdiciando por no relanzarla actualizada al mercado de hoy.",
        money: "Cerrá hoy mismo esa deuda o litigio pendiente aunque tengas que negociar una quita rápida: el valor de quedar libre del pasado supera por diez al centavo discutido.",
        spirit: "Reconciliar a tus tres partes internas (el hombre racional, la mujer intuitiva y el niño creador) que hoy están juzgándose entre sí en vez de levantarse juntas.",
        healthAndEnergy: "Cuando suena el despertador a la mañana, prohibite quedarte dando vueltas en la cama rumiando: levantate en el primer segundo como quien sale del sarcófago a conquistar el día."
      },
      {
        love: "Perdonarte a vos mismo por las elecciones afectivas que hiciste cuando no sabías lo que sabés hoy. Ese perdón te devuelve la inocencia para amar de nuevo.",
        work: "Falta de decisión final en una convocatoria, puesto o sociedad: la indefinición está enfriando el entusiasmo de los demás; da tu veredicto hoy antes de las seis de la tarde.",
        money: "Revisá tu historial crediticio, impositivo o societario para limpiar cualquier mancha vieja que pueda frenar tu expansión hacia El Mundo (Arcano XXI).",
        spirit: "Escuchar la voz de Shin en el fuego: entender que el único pecado real contra el Espíritu es enterrar el talento que te fue entregado.",
        healthAndEnergy: "Desbloqueo diafragmático a través de la voz, el canto o la exhalación sonora profunda."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Dictá hoy mismo tu propia amnistía definitiva respecto al pasado, destapate los oídos ante el llamado que venías esquivando y da el paso público hacia tu verdadera vocación sin importarte un ápice el juicio ajeno.",
      prohibition: "Prohibido volver a reprocharte hoy un error ya aprendido, pedir disculpas por cambiar de rumbo, o postergar un día más la resolución que tenés en la punta de la lengua.",
      psychomagicAct: "Escribí en un papel todas las culpas viejas y los miedos al 'qué dirán' que te mantienen acostado en el molde antiguo; meté ese papel dentro de una caja pequeña cerrada (el sarcófago). Luego poné una alarma o nota musical fuerte, abrí la caja de golpe cuando suene, sacá el papel, rompelo en pedazos y quemalo diciendo: 'El juicio del pasado ha terminado; me levanto absuelto y respondo a mi verdadero llamado'.",
      talismanPhrase: "Me perdono de raíz y apago el tribunal ajeno; escucho mi trompeta interior y me levanto hacia mi obra mayor."
    },
    theAlchemyVariants: [
      {
        command: "Dictá hoy mismo tu propia amnistía definitiva respecto al pasado, destapate los oídos ante el llamado que venías esquivando y da el paso público hacia tu verdadera vocación sin importarte un ápice el juicio ajeno.",
        prohibition: "Prohibido volver a reprocharte hoy un error ya aprendido, pedir disculpas por cambiar de rumbo, o postergar un día más la resolución que tenés en la punta de la lengua.",
        psychomagicAct: "Escribí en un papel todas las culpas viejas y los miedos al 'qué dirán' que te mantienen acostado en el molde antiguo; meté ese papel dentro de una caja pequeña cerrada (el sarcófago). Luego poné una alarma o nota musical fuerte, abrí la caja de golpe cuando suene, sacá el papel, rompelo en pedazos y quemalo diciendo: 'El juicio del pasado ha terminado; me levanto absuelto y respondo a mi verdadero llamado'.",
        talismanPhrase: "Me perdono de raíz y apago el tribunal ajeno; escucho mi trompeta interior y me levanto hacia mi obra mayor."
      },
      {
        command: "Hacé sonar tu voz hoy: publicá ese anuncio, enviá esa propuesta audaz o comunicale tu decisión final a las partes involucradas sin timidez.",
        prohibition: "No consultes tu salto vocacional con personas que siguen durmiendo dentro de su propio sarcófago de rutina.",
        psychomagicAct: "Mañana al sonar el despertador, prohibite posponer la alarma ni un segundo: salí de la cama de un solo movimiento firme, abrí la ventana al cielo y pronunciá tu propio nombre completo en voz alta seguido de la palabra 'PRESENTE'.",
        talismanPhrase: "Aquí estoy, despierto y entero; ninguna tumba de costumbre puede retener mi fuego."
      },
      {
        command: "Rescatá hoy ese proyecto o don que habías archivado por miedo a que no fuera 'comercialmente correcto' y ponelo en el centro de tu mesa de diseño.",
        prohibition: "No uses a tu juez interno para torturarte hoy; ponelo a trabajar como editor técnico a tu servicio.",
        psychomagicAct: "Dibujá con tinta roja o dorada la letra hebrea Shin (ש, tres llamas que suben de una misma base) en el dorso de tu muñeca o en una tarjeta sobre tu escritorio, tocándola cada vez que sientas duda sobre tu misión.",
        talismanPhrase: "Las tres llamas de Shin arden en mi pecho; mi historia queda redimida en mi obra presente."
      }
    ],

    actionOracle: {
      command: "Dictá hoy mismo tu propia amnistía definitiva respecto al pasado, destapate los oídos ante el llamado que venías esquivando y da el paso público hacia tu verdadera vocación sin importarte un ápice el juicio ajeno.",
      prohibition: "Prohibido volver a reprocharte hoy un error ya aprendido, pedir disculpas por cambiar de rumbo, o postergar un día más la resolución que tenés en la punta de la lengua.",
      psychomagicAct: "Escribí en un papel todas las culpas viejas y los miedos al 'qué dirán' que te mantienen acostado en el molde antiguo; meté ese papel dentro de una caja pequeña cerrada (el sarcófago). Luego poné una alarma o nota musical fuerte, abrí la caja de golpe cuando suene, sacá el papel, rompelo en pedazos y quemalo diciendo: 'El juicio del pasado ha terminado; me levanto absuelto y respondo a mi verdadero llamado'.",
      talismanPhrase: "Me perdono de raíz y apago el tribunal ajeno; escucho mi trompeta interior y me levanto hacia mi obra mayor."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XX aparece en Sombra: alerta sobre un llamado vocacional que estás postergando o una culpa vieja que debés perdonarte hoy.",
      secondAppearance: "El Juicio Invertido resuena por segunda vez: seguís haciéndote el sordo ante una verdad interior innegable por miedo a salir del molde. Levantate ya.",
      thirdAppearance: "Tercera comparecencia del Arcano XX en Sombra: la demora en tomar esta resolución histórica te está pesando como plomo. Perdoná todo el ayer y respondé al llamado hoy mismo.",
      fourthPlusAppearance: "Clamor final del Eón en Sombra: el Oráculo no admitirá una sola excusa más. O salís voluntariamente del sarcófago de tus viejos límites hoy, o te quedarás mirando desde afuera tu propio destino."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Soltá el peso de la culpa pasada y apagá el miedo al qué dirán: atrevete hoy mismo a responder al llamado de tu verdadera vida.",
    counselVariants: [
      "Soltá el peso de la culpa pasada y apagá el miedo al qué dirán: atrevete hoy mismo a responder al llamado de tu verdadera vida.",
      "El que se queda acostado en el ataúd por miedo a lo que opinen los vivos ya eligió estar muerto en vida.",
      "Perdonarte no es olvidar lo que aprendiste; es dejar de cobrarte todos los días una factura que ya pagaste con sangre.",
      "Cuando suena la trompeta de tu verdadera misión, hacerte el dormido cuesta diez veces más trabajo que levantarte a marchar.",
      "Ningún juez externo conoce las noches de fragua que pasaste en tu taller; el único veredicto que vale es el de tu propia conciencia."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "La Trompeta de Siete Tonos Silenciada (La Sordera Voluntaria)",
        secret: "Al invertirse el diorama, el Serafín y su trompeta de oro quedan sepultados abajo mientras el cofre de piedra sube a la cima. Representa el mecanismo neurótico de taparse los oídos con el ruido de la rutina diaria para no escuchar el llamado urgente del Yo Superior que te exige cambiar de octava.",
        esotericFormula: "Trompeta Abajo + Piedra Arriba = Sordera ante el Llamado Vocacional",
        meditationPrompt: "¿Qué llamado profundo de tu vocación o de tu corazón estás fingiendo no escuchar hoy porque te exige salir de tu comodidad?"
      },
      {
        id: "n2",
        x: 68,
        y: 44,
        title: "El Estandarte de la Cruz Invertido (El Tribunal de la Culpa)",
        secret: "En Sombra, la Cruz Solar de los cuatro elementos pierde su equilibrio redentor y se convierte en la cruz pesada del remordimiento o del miedo al juicio público. Simboliza la autocrítica despiadada que sigue juzgando al presente con las cadenas del pasado.",
        esotericFormula: "Cruz Invertida = Culpa No Absuelta y Miedo al Qué Dirán",
        meditationPrompt: "¿Por qué error antiguo te seguís castigando en secreto hoy cuando ya aprendiste de raíz la lección que traía?"
      },
      {
        id: "n3",
        x: 50,
        y: 76,
        title: "El Sarcófago de Piedra que Retiene a los Durmientes",
        secret: "Con el sepulcro invertido en lo alto de la carta, las tres figuras (tu razón, tu emoción y tu niño creador) parecen caer de nuevo hacia adentro de la caja gris en lugar de emerger hacia el cielo. Advierte contra la tentación regresiva de volver a encerrarte en un rol, trabajo o vínculo que ya te queda chico.",
        esotericFormula: "Regreso al Sarcófago = Renunciar al Renacimiento por Miedo al Éxito",
        meditationPrompt: "¿Qué viejo molde o zona de confort muerta te está tentando a volver a acostarte cuando ya estabas listo para volar?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XXI INVERTIDO • EL MUNDO EN SOMBRA (TAV INVERTIDA • EL METRO FINAL Y EL ÉXITO SIN CORONAR)
  // ==========================================================================
  {
    id: 21,
    numeral: "XXI",
    name: "El Mundo",
    subtitle: "La Obra al Noventa y Nueve por Ciento y el Umbral sin Sellar",
    isReversed: true,
    palette: {
      primary: "#7e22ce",
      secondary: "#a16207",
      glow: "rgba(126, 34, 206, 0.58)"
    },
    archetype: "world",
    shadowPolarity: {
      byExcess: "La Jaula de Laurel (Estancamiento en la Gloria Pasada): encerrarse dentro de la guirnalda de un logro antiguo por miedo a volver a empezar en El Loco, rigidez saturnina que teme abrir fronteras y conformismo dorado.",
      byDeficiency: "El Síndrome del Último Metro: boicotear o postergar el último uno por ciento de una gran obra por miedo inconsciente a habitar el éxito total, dejar cabos sueltos sin cerrar, o triunfo real con una leve demora de entrega."
    },
    correspondences: {
      element: "Tierra Pesada que Frena el Vuelo / Guirnalda Incompleta",
      astro: "Saturno Retrógrado o Pesado • El Retraso del Sello Final y el Miedo a la Totalidad",
      hebrewLetter: "Tav (ת) en Sombra • La Firma que falta al pie del documento para que la Obra sea Ley",
      qliphoth: "Thantifaxath • Los Demonios de la Inercia Saturnina y las Obras que quedan sin Coronar",
      alchemy: "Fixatio Incompleta • La Piedra Filosofal a la que le falta el último golpe de fuego para ser inmortal",
      hermeticAxiom: "Un puente construido al noventa y nueve por ciento sigue sin cruzar el río; el maestro se distingue del aprendiz en el último golpe del cincel.",
      jungianComplex: "El Complejo de Penélope (No Terminar para No Enfrentar el Destino) y la Fobia a la Plenitud",
      yesNo: "Sí, pero falta cerrar el último eslabón (no des la obra por terminada hasta atar el último cabo suelto hoy)",
      keywords: [
        "falta el último paso",
        "obra al 99 por ciento",
        "cabos sueltos",
        "miedo a coronar",
        "cierre incompleto",
        "demora en fronteras",
        "estancamiento dorado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirate parado a un solo metro de la cumbre del Arcano XXI con los brazos caídos. Cruzaste los veinte senderos anteriores con sangre y fuego, ¿y ahora te vas a sentar o te vas a distraer antes de poner la última piedra de la corona? Terminá ese detalle que falta hoy mismo.",
    oracleVoiceVariants: [
      "Mirate parado a un solo metro de la cumbre del Arcano XXI con los brazos caídos. Cruzaste los veinte senderos anteriores con sangre y fuego, ¿y ahora te vas a sentar o te vas a distraer antes de poner la última piedra de la corona? Terminá ese detalle que falta hoy mismo.",
      "Mi guirnalda de laurel tiene un hueco sin atar arriba porque dejaste cabos sueltos atrás. No podés inaugurar el palacio nuevo si todavía dejaste una puerta sin llave y una cuenta sin cerrar en el ciclo que termina.",
      "¿Sabés por qué te cuesta tanto rematar el último cinco por ciento de tus proyectos? Porque mientras la obra está 'casi lista' nadie puede juzgarla del todo, y porque en el fondo te da vértigo preguntarte quién vas a ser mañana cuando ya hayas triunfado.",
      "En mi otra sombra saturnina, convertiste mi corona de victoria en un salvavidas de plomo: te encerraste adentro de un logro viejo por miedo a volver a saltar al abismo fértil de El Loco.",
      "Tenés tres de los Cuatro Vivientes despiertos en tu mesa, pero uno de los cuatro ángulos está dormido. Ajustá hoy esa cuarta pata que renguea y el Mandala entero girará a tu favor."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Mundo (Arcano XXI) invertido —al igual que El Sol— conserva una potencia de realización tan grande en el Sendero 32 de la letra Tav que jamás anuncia derrota total, sino el *Síndrome del Último Escalón*. Indica que estás a un paso milimétrico de coronar tu Gran Obra comercial, técnica o afectiva, pero estás dejando cabos sueltos por cansancio final, prisa por festejar antes de tiempo o un sutil autoboicot inconsciente que teme habitar el éxito pleno. Te advierte que para que el triunfo sea indestructible y pueda escalar más allá de tus fronteras, debés completar hoy mismo ese último detalle faltante y dar un cierre formal e impecable a la etapa previa.",
    meaningVariants: [
      "El Mundo (Arcano XXI) invertido —al igual que El Sol— conserva una potencia de realización tan grande en el Sendero 32 de la letra Tav que jamás anuncia derrota total, sino el *Síndrome del Último Escalón*. Indica que estás a un paso milimétrico de coronar tu Gran Obra comercial, técnica o afectiva, pero estás dejando cabos sueltos por cansancio final, prisa por festejar antes de tiempo o un sutil autoboicot inconsciente que teme habitar el éxito pleno. Te advierte que para que el triunfo sea indestructible y pueda escalar más allá de tus fronteras, debés completar hoy mismo ese último detalle faltante y dar un cierre formal e impecable a la etapa previa.",
      "En la simetría numérica del Tarot, cuando el Veintiuno (21) se invierte, amenaza con regresar regresivamente al Doce (12, El Colgado): el danzante soberano que tenía el mundo bajo sus pies vuelve a quedar colgado de una pata a un metro de la meta porque dejó un nudo sin desatar. No permitas que la inercia de Saturno te frene en la recta final.",
      "Cabalísticamente, la letra Tav (ת) es el 'Sello Real' que se estampa sobre el lacre caliente al terminar de redactar el pergamino. Cuando Tav sale invertida, el documento está entero y perfecto, pero le falta la firma y el sello que lo convierten en ley ejecutiva en Malkuth (el mundo físico y monetario). Cerrá la venta, entregá el paquete final o firmá el acta hoy.",
      "Observá el Tetramorfos en las cuatro esquinas de la carta invertida: la falla en la coronación proviene de haber descuidado uno de los cuatro elementos en el tramo final. O tenés el arte (Agua/Águila), la idea (Aire/Ángel) y la pasión (Fuego/León), pero te faltó ajustar la logística y el cobro (Tierra/Toro); o tenés toda la estructura de tierra, pero te olvidaste de ponerle alma.",
      "En su polaridad de exceso estático, El Mundo invertido señala que tu frontera actual (tu local, tu ciudad o tu plataforma actual) ya te quedó chica y cerrada como un huevo: si no abrís el óvalo hacia mercados externos o digitales, tu propio éxito empezará a asfixiarse por falta de horizonte nuevo."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, aquí opera el *Miedo a la Consumación (El Complejo de Penélope)*: una parte arcaica de la psique teme que 'terminar la Gran Obra' equivalga a quedarse sin propósito vital o a morir simbólicamente. Por eso el inconsciente sabotea el último uno por ciento, dejando siempre una pieza sin colocar para tener la excusa de seguir luchando.",
    theWoundVariants: [
      "En la psicología profunda de Jung, aquí opera el *Miedo a la Consumación (El Complejo de Penélope)*: una parte arcaica de la psique teme que 'terminar la Gran Obra' equivalga a quedarse sin propósito vital o a morir simbólicamente. Por eso el inconsciente sabotea el último uno por ciento, dejando siempre una pieza sin colocar para tener la excusa de seguir luchando.",
      "El vértigo de la *Cima Solitaria de Saturno*: temer inconscientemente que cuando alcances la realización total y la abundancia completa, despertarás la envidia de tu entorno o quedarás separado de quienes eligieron quedarse a mitad de la montaña.",
      "La herida de los Ciclos Inconclusos (Efecto Zeigarnik crónico): arrastrar en la mochila de la memoria cinco etapas de tu vida (estudios, vínculos o emprendimientos viejos) que abandonaste en el noventa por ciento sin hacerles nunca un ritual de cierre digno.",
      "La Agorafobia de Frontera: haberse acostumbrado tanto a ser 'cabeza de ratón' en la aldea conocida que te da pánico romper la guirnalda local y salir a competir en el mundo grande."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño fatal del Arcano XXI invertido es decirte: *'Con el noventa y cinco por ciento ya alcanza, ese último detalle nadie lo mira'*, olvidando que en las obras de calibre AAA ese último cinco por ciento de pulido y cierre es exactamente lo que separa una artesanía común de una leyenda.",
    theIllusionVariants: [
      "El autoengaño fatal del Arcano XXI invertido es decirte: *'Con el noventa y cinco por ciento ya alcanza, ese último detalle nadie lo mira'*, olvidando que en las obras de calibre AAA ese último cinco por ciento de pulido y cierre es exactamente lo que separa una artesanía común de una leyenda.",
      "El espejismo de *'Empiezo el proyecto nuevo mañana y este último pedacito del viejo lo termino después cuando tenga tiempo'*: si no cerrás con broche de oro este ciclo hoy, vas a arrastrar esa fisura abierta adentro del ciclo nuevo.",
      "La ilusión de que 'mi mercado termina en las cuatro calles de mi ciudad': negarte a ver que hoy tu obra tiene herramientas para cruzar fronteras sin límite geográfico.",
      "Creer que ya llegaste al techo de lo que podés aprender o crear: cuando el Maestro cree que ya lo sabe todo, se vuelve piedra muerta; cuando sabe que cada Veintiuno es un nuevo Cero, rejuvenece."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, El Mundo invertido diagnostica una resistencia en el umbral mismo de la *Individuación* y el cierre gestáltico. La energía psíquica sufre una pequeña fuga por asuntos inconclusos ('cabos sueltos') que impiden experimentar la sensación de plenitud y totalidad del Mandala.",
    psycheVariants: [
      "Psicológicamente, El Mundo invertido diagnostica una resistencia en el umbral mismo de la *Individuación* y el cierre gestáltico. La energía psíquica sufre una pequeña fuga por asuntos inconclusos ('cabos sueltos') que impiden experimentar la sensación de plenitud y totalidad del Mandala.",
      "Tu cerebro tiene abiertas varias 'ventanas en segundo plano' de tareas casi terminadas que te están consumiendo memoria RAM mental sin que te des cuenta. Cerralas una por una hoy.",
      "Estás sintiendo el peso de Saturno (la demora o el límite final) no como un castigo, sino como el examen de resistencia del último kilómetro de la maratón.",
      "Sellar la letra Tav en tu psique te devolverá de inmediato la liviandad de la Danzante: terminar, firmar, celebrar y quedar libre."
    ],

    lightAndShadow: "En Sombra Activa: Falta de un último paso para cerrar un ciclo o proyecto, cabos sueltos, demora menor antes del éxito total, o miedo a habitar y expandir el propio triunfo.",
    lightAndShadowVariants: [
      "En Sombra Activa: Falta de un último paso para cerrar un ciclo o proyecto, cabos sueltos, demora menor antes del éxito total, o miedo a habitar y expandir el propio triunfo.",
      "Sombra por Defecto: El síndrome del 99%, dejar obras sin el remate final y postergar el cierre. Sombra por Exceso: Encerrarse en una gloria pasada, rigidez saturnina y miedo a salir al mundo exterior.",
      "Distorsión de Tav: La corona de laurel que aún tiene la cinta desatada en la punta esperando el último nudo del Maestro."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Un vínculo hermoso al que le falta dar un último paso de integración o cerrar definitivamente una etapa previa (como terminar de mudarse, formalizar un acuerdo o soltar un resto de historia vieja que quedó sin hablar). No dejen cabos sueltos en el aire: pongan hoy el broche de oro a su compromiso para vivir el amor sin fisuras.",
      work: "Tenés el proyecto, el sistema o el lote comercial listo en un noventa y cinco por ciento, pero estás demorando el empaque final, la integración de los archivos o el lanzamiento por cansancio de fin de obra. Prohibido aflojar en el último metro: rematá ese detalle pendiente hoy mismo y abrí tu negocio a clientes de otras ciudades o plataformas digitales.",
      money: "Un cobro grande o cierre patrimonial exitoso que sufre una demora administrativa menor de último minuto porque falta una firma, un comprobante o una entrega parcial. Completá el trámite pendiente hoy y el dinero entrará entero.",
      spirit: "Integrar la totalidad sin dejar nada afuera: comprender que no hay iluminación real en Kether si no bajás primero a ordenar hasta el último rincón físico de Malkuth.",
      healthAndEnergy: "Cansancio del último kilómetro de la carrera, pesadez saturnina en articulaciones, huesos o dientes, y necesidad de cerrar ciclos de tensión para que el sistema nervioso entre en reposo profundo."
    },
    domainsVariants: [
      {
        love: "Un vínculo hermoso al que le falta dar un último paso de integración o cerrar definitivamente una etapa previa (como terminar de mudarse, formalizar un acuerdo o soltar un resto de historia vieja que quedó sin hablar). No dejen cabos sueltos en el aire: pongan hoy el broche de oro a su compromiso para vivir el amor sin fisuras.",
        work: "Tenés el proyecto, el sistema o el lote comercial listo en un noventa y cinco por ciento, pero estás demorando el empaque final, la integración de los archivos o el lanzamiento por cansancio de fin de obra. Prohibido aflojar en el último metro: rematá ese detalle pendiente hoy mismo y abrí tu negocio a clientes de otras ciudades o plataformas digitales.",
        money: "Un cobro grande o cierre patrimonial exitoso que sufre una demora administrativa menor de último minuto porque falta una firma, un comprobante o una entrega parcial. Completá el trámite pendiente hoy y el dinero entrará entero.",
        spirit: "Integrar la totalidad sin dejar nada afuera: comprender que no hay iluminación real en Kether si no bajás primero a ordenar hasta el último rincón físico de Malkuth.",
        healthAndEnergy: "Cansancio del último kilómetro de la carrera, pesadez saturnina en articulaciones, huesos o dientes, y necesidad de cerrar ciclos de tensión para que el sistema nervioso entre en reposo profundo."
      },
      {
        love: "Si estás sin pareja, El Mundo invertido señala que todavía no hiciste el cierre simbólico completo de tu última historia; hacé el ritual de clausura hoy para que tu mandala afectivo quede libre para lo nuevo.",
        work: "Visión demasiado localista: estás pensando tu distribución o tu alcance como si hubiera una muralla alrededor de tu comarca. Rompé el cerco mental y proyectá tu marca hacia afuera.",
        money: "No gastes a cuenta de un negocio que está al noventa y nueve por ciento hasta que no esté puesto el sello final de Tav y el pago acreditado.",
        spirit: "Vencer la pereza espiritual del final del viaje: el último escalón del templo exige la misma presencia que el primero.",
        healthAndEnergy: "Reforzá tu mineralización (magnesio, calcio, zinc) y hacé estiramientos completos que integren todo el cuerpo."
      },
      {
        love: "Miedo inconsciente a que 'si somos completamente felices algo malo va a pasar': desactivá esa superstición antigua y permitite habitar el jardín completo con quien amás.",
        work: "Integración de módulos pendiente: tenés todas las piezas maestras construidas por separado (los datos, el arte, el motor), pero falta sentarte una tarde a enchufarlas todas en un solo sistema vivo. Esa tarde es hoy.",
        money: "Diversificación incompleta en las cuatro esquinas: reforzá hoy la pata financiera que tenés más floja para que tu patrimonio sea un cuadrado perfecto.",
        spirit: "Preparar el corazón para el Gran Retorno: saber que al coronar el Arcano XXI con maestría, quedás listo para saltar como un Loco sabio hacia un universo diez veces mayor.",
        healthAndEnergy: "Alivio físico total en los hombros y la espalda en el segundo exacto en que tachás la última tarea pendiente de la lista."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Prohibido empezar cualquier cosa nueva hoy hasta haber rematado y cerrado al cien por ciento los tres cabos sueltos o el último detalle que le falta a tu obra principal.",
      prohibition: "Prohibido abandonar a un metro de la cima por cansancio, dejar un trabajo 'casi terminado' en la mesa, o achicar el alcance geográfico de tu proyecto.",
      psychomagicAct: "Dibujá un gran círculo u óvalo dorado en una hoja dejando a propósito un centímetro sin cerrar arriba; escribí adentro el nombre del proyecto o etapa que tenés al noventa y nueve por ciento. Luego, realizá físicamente la última tarea o llamado que faltaba y, apenas lo termines, tomá la lapicera, cerrá el trazo del óvalo con firmeza y estampá tu firma en el centro diciendo: 'Atado el último lazo, la Gran Obra queda sellada y coronada'.",
      talismanPhrase: "No me detengo a un paso de la cumbre; cierro cada cabo suelto, estampo mi sello de Tav y corono mi Gran Obra."
    },
    theAlchemyVariants: [
      {
        command: "Prohibido empezar cualquier cosa nueva hoy hasta haber rematado y cerrado al cien por ciento los tres cabos sueltos o el último detalle que le falta a tu obra principal.",
        prohibition: "Prohibido abandonar a un metro de la cima por cansancio, dejar un trabajo 'casi terminado' en la mesa, o achicar el alcance geográfico de tu proyecto.",
        psychomagicAct: "Dibujá un gran círculo u óvalo dorado en una hoja dejando a propósito un centímetro sin cerrar arriba; escribí adentro el nombre del proyecto o etapa que tenés al noventa y nueve por ciento. Luego, realizá físicamente la última tarea o llamado que faltaba y, apenas lo termines, tomá la lapicera, cerrá el trazo del óvalo con firmeza y estampá tu firma en el centro diciendo: 'Atado el último lazo, la Gran Obra queda sellada y coronada'.",
        talismanPhrase: "No me detengo a un paso de la cumbre; cierro cada cabo suelto, estampo mi sello de Tav y corono mi Gran Obra."
      },
      {
        command: "Ensamblá hoy todas las partes sueltas de tu trabajo en una sola unidad terminada y funcional: pasá de los módulos separados al sistema completo.",
        prohibition: "No te encierres en los límites de lo que ya conocés; abrí hoy una puerta de contacto, venta o difusión hacia otra ciudad o región.",
        psychomagicAct: "Buscá en tu taller o casa algo a lo que le falte el último tornillo, botón o terminación desde hace semanas; arreglalo hoy mismo hasta dejarlo cien por ciento impecable como orden directa a tu inconsciente de que en tu reino todo lo que se empieza se termina.",
        talismanPhrase: "Mis cuatro elementos trabajan unidos hasta el último segundo; lo que inicio con fuego lo sello con oro."
      },
      {
        command: "Dale hoy un cierre ceremonial y definitivo a la etapa que termina, agradeciendo sus frutos y dejando la mesa impecable para la próxima octava.",
        prohibition: "No tengas miedo de habitar el éxito grande que construiste; la corona te calza a medida.",
        psychomagicAct: "Atá los dos extremos de una cinta dorada o verde formando una corona cerrada con un doble nudo en forma de ocho (∞), apoyala alrededor de tu herramienta o producto principal durante toda la noche y declará consumada tu etapa de prueba.",
        talismanPhrase: "El Ouroboros muerde su cola en perfección; habito mi triunfo sin fisuras y el mundo se abre a mi paso."
      }
    ],

    actionOracle: {
      command: "Prohibido empezar cualquier cosa nueva hoy hasta haber rematado y cerrado al cien por ciento los tres cabos sueltos o el último detalle que le falta a tu obra principal.",
      prohibition: "Prohibido abandonar a un metro de la cima por cansancio, dejar un trabajo 'casi terminado' en la mesa, o achicar el alcance geográfico de tu proyecto.",
      psychomagicAct: "Dibujá un gran círculo u óvalo dorado en una hoja dejando a propósito un centímetro sin cerrar arriba; escribí adentro el nombre del proyecto o etapa que tenés al noventa y nueve por ciento. Luego, realizá físicamente la última tarea o llamado que faltaba y, apenas lo termines, tomá la lapicera, cerrá el trazo del óvalo con firmeza y estampá tu firma en el centro diciendo: 'Atado el último lazo, la Gran Obra queda sellada y coronada'.",
      talismanPhrase: "No me detengo a un paso de la cumbre; cierro cada cabo suelto, estampo mi sello de Tav y corono mi Gran Obra."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XXI aparece en Sombra: estás a un solo paso de la coronación total, pero hay un cabo suelto o detalle final que reclama cierre hoy.",
      secondAppearance: "El Mundo Invertido sale por segunda vez: seguís postergando el último uno por ciento de la obra o dejando el ciclo abierto. Poné el broche final hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XXI en Sombra: alerta contra el síndrome de frenar en la puerta del éxito. Ensamblá las piezas que faltan y cerrá la guirnalda ahora.",
      fourthPlusAppearance: "Sello supremo de Tav: el Oráculo te prohíbe abrir ningún camino nuevo hasta que estampes la firma final en la Gran Obra que ya tenés al noventa y nueve por ciento en tus manos."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "No te detengas a un metro de la cima: atá ese último cabo suelto hoy mismo, completá el detalle que falta y coroná tu Gran Obra.",
    counselVariants: [
      "No te detengas a un metro de la cima: atá ese último cabo suelto hoy mismo, completá el detalle que falta y coroná tu Gran Obra.",
      "El cántaro de barro no se rompe en el medio del río; se rompe casi siempre en la piedra de la puerta por soltarlo un segundo antes de apoyarlo en la mesa.",
      "Nadie recuerda al arquitecto que levantó las cuatro paredes y se cansó el día en que tocaba poner el techo.",
      "Cerrá bien la puerta del capítulo viejo con llave de oro; solo así el capítulo nuevo se abre sin corrientes de aire frío.",
      "Tu corona ya está forjada: dejá de dar vueltas alrededor del trono y sentate a reinar sobre tu obra terminada."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "La Guirnalda Ouroboros con el Lazo Desatado",
        secret: "Al invertirse la carta, la corona elíptica de laurel parece abrirse por la base o convertirse en un cerco estrecho que encierra en lugar de coronar. Simboliza la 'Gestalt abierta': el proyecto que está casi listo pero al que todavía le falta anudar la cinta final de entrega, cobro o integración.",
        esotericFormula: "Guirnalda sin Anudar = Obra al 99% con Fuga de Energía",
        meditationPrompt: "¿Cuál es ese único cabo suelto o trámite final que te falta atar hoy para poder decir que esta etapa está cien por ciento terminada?"
      },
      {
        id: "n2",
        x: 50,
        y: 50,
        title: "La Danzante Invertida (El Regreso al Doce del Colgado)",
        secret: "Observá el secreto geométrico del Tarot: cuando la Danzante de El Mundo (21) cuyas piernas forman el número 4 se da vuelta cabeza abajo, su silueta vuelve a convertirse exactamente en la de El Colgado (12). Advierte que si no asumís tu maestría y cerrás la obra con decisión, volvés a quedar suspendido en la espera a un paso del triunfo.",
        esotericFormula: "21 Invertido -> 12 (Regresión del Maestro al Estado Suspendido)",
        meditationPrompt: "¿Estás demorando el lanzamiento o el cierre final de tu obra por miedo inconsciente al vértigo de habitar tu propio éxito?"
      },
      {
        id: "n3",
        x: 24,
        y: 76,
        title: "El Cuarto Ángulo Dormido del Tetramorfos",
        secret: "Con los Cuatro Vivientes (León, Toro, Águila y Ángel) invertidos en los ángulos del relicario, tres de tus elementos están listos para el triunfo pero uno de los cuatro está demorado o desconectado del conjunto. Identificar y despertar hoy esa cuarta esquina devuelve de inmediato el giro perfecto al Mandala.",
        esotericFormula: "3 Elementos Activos + 1 Dormido = Coronación Demorada",
        meditationPrompt: "Mirando los cuatro pilares de tu obra actual (Diseño/Aire, Pasión/Fuego, Magia/Agua y Ejecución/Tierra), ¿cuál de los cuatro necesita hoy tu toque final de maestro?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN VI (CIERRE DE LOS 22 ARCANOS EN SOMBRA)
// ============================================================================
(function initLunarGrimoireVolume6() {
  window.DATOS_LUNA_6 = DATOS_LUNA_6;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_6.forEach(function (card) {
    const existingIdx = window.DATOS_LUNA.findIndex(function (c) {
      return Number(c.id) === Number(card.id);
    });
    if (existingIdx !== -1) {
      window.DATOS_LUNA[existingIdx] = card;
    } else {
      window.DATOS_LUNA.push(card);
    }
  });
  window.DATOS_LUNA.sort(function (a, b) {
    return Number(a.id) - Number(b.id);
  });

  // 2. Sincronizar con window.REVERSED_DATA (datos_cartas.js) para retrocompatibilidad 100%
  if (!window.REVERSED_DATA) {
    window.REVERSED_DATA = {};
  }
  DATOS_LUNA_6.forEach(function (lunarCard) {
    window.REVERSED_DATA[lunarCard.id] = Object.assign(
      {},
      window.REVERSED_DATA[lunarCard.id] || {},
      lunarCard,
      {
        yesNo:
          (lunarCard.correspondences && lunarCard.correspondences.yesNo) ||
          lunarCard.yesNo ||
          "No (en sombra)",
        meaning: lunarCard.meaning,
        lightAndShadow: lunarCard.lightAndShadow,
        domains: lunarCard.domains,
        counsel: lunarCard.counsel
      }
    );
  });

  // 3. Asegurar que LunarOracleEngine esté disponible sin importar el orden de carga de los scripts
  if (!window.LunarOracleEngine) {
    const STORAGE_KEY = "velo_astral_lunar_grimoire_v2";

    function readLunarMemory() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { cards: {} };
      } catch (err) {
        return { cards: {} };
      }
    }

    function writeLunarMemory(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (err) {
        // Silencioso si localStorage está restringido
      }
    }

    function pickVariant(variantsArray, fallbackValue, counter, offset) {
      if (Array.isArray(variantsArray) && variantsArray.length > 0) {
        const idx = Math.abs((counter + (offset || 0)) % variantsArray.length);
        return variantsArray[idx];
      }
      return fallbackValue;
    }

    window.LunarOracleEngine = {
      resolveShadowCard: function (cardOrId, recordDraw) {
        const shouldRecord = recordDraw !== false;
        const id =
          typeof cardOrId === "object" && cardOrId !== null ? Number(cardOrId.id) : Number(cardOrId);

        const lunarPool = window.DATOS_LUNA || [];
        const baseLunar =
          lunarPool.find(function (c) {
            return Number(c.id) === id;
          }) || (window.REVERSED_DATA ? window.REVERSED_DATA[id] : null);

        const solarPool = window.MAJOR_ARCANA || window.DATOS_SOL || [];
        const baseSolar =
          solarPool.find(function (c) {
            return Number(c.id) === id;
          }) || (typeof cardOrId === "object" ? cardOrId : null);

        if (!baseLunar && !baseSolar) return null;
        if (!baseLunar) return Object.assign({}, baseSolar, { isReversed: true });

        const memory = readLunarMemory();
        const cardKey = String(id);
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
          writeLunarMemory(memory);
        } else if (cursor < 0) {
          cursor = 0;
        }

        const recentCount = validTimestamps.length;
        let synchronicityMessage = null;
        if (baseLunar.synchronicityHook) {
          if (recentCount >= 4) {
            synchronicityMessage =
              baseLunar.synchronicityHook.fourthPlusAppearance ||
              baseLunar.synchronicityHook.thirdAppearance;
          } else if (recentCount === 3) {
            synchronicityMessage = baseLunar.synchronicityHook.thirdAppearance;
          } else if (recentCount === 2) {
            synchronicityMessage = baseLunar.synchronicityHook.secondAppearance;
          } else {
            synchronicityMessage = baseLunar.synchronicityHook.firstAppearance || null;
          }
        }

        const activeDomains = pickVariant(baseLunar.domainsVariants, baseLunar.domains, cursor, 0);
        const activeAlchemy = pickVariant(
          baseLunar.theAlchemyVariants,
          baseLunar.theAlchemy || baseLunar.actionOracle,
          cursor,
          1
        );

        return Object.assign({}, baseSolar || {}, baseLunar, {
          isReversed: true,
          oracleVoice: pickVariant(
            baseLunar.oracleVoiceVariants,
            baseLunar.oracleVoice,
            cursor,
            0
          ),
          meaning: pickVariant(baseLunar.meaningVariants, baseCardMeaningFallback(baseLunar, baseSolar), cursor, 0),
          theWound: pickVariant(baseLunar.theWoundVariants, baseLunar.theWound, cursor, 0),
          theIllusion: pickVariant(baseLunar.theIllusionVariants, baseLunar.theIllusion, cursor, 0),
          psyche: pickVariant(
            baseLunar.psycheVariants,
            baseLunar.psyche || baseLunar.theWound,
            cursor,
            0
          ),
          lightAndShadow: pickVariant(
            baseLunar.lightAndShadowVariants,
            baseLunar.lightAndShadow,
            cursor,
            0
          ),
          domains: activeDomains,
          theAlchemy: activeAlchemy,
          actionOracle: activeAlchemy,
          counsel: pickVariant(baseLunar.counselVariants, baseLunar.counsel, cursor, 0),
          activeSynchronicityAlert: synchronicityMessage,
          recentDrawCount: recentCount,
          totalDrawsAllTime: record.totalDraws
        });
      },

      resetMemory: function () {
        writeLunarMemory({ cards: {} });
      }
    };

    function baseCardMeaningFallback(lunar, solar) {
      return (lunar && lunar.meaning) || (solar && solar.meaning) || "";
    }
  }
})();
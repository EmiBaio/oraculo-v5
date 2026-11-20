// ============================================================================
// ARCHIVO: datos_luna_1.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN I: ARCANOS 0, I y II
// 0 • El Loco (Sombra) | I • El Mago (Sombra) | II • La Sacerdotisa (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// 100% Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_1 = [
  // ==========================================================================
  // ARCANO 0 INVERTIDO • EL LOCO EN SOMBRA (ALEPH INVERTIDA • EL VÉRTIGO Y LA FUGA)
  // ==========================================================================
  {
    id: 0,
    numeral: "0",
    name: "El Loco",
    subtitle: "El Vértigo Paralizante y la Fuga al Vacío",
    isReversed: true,
    palette: {
      primary: "#64748b",
      secondary: "#f59e0b",
      glow: "rgba(100, 116, 139, 0.55)"
    },
    archetype: "fool",
    shadowPolarity: {
      byExcess: "Fuga maníaca hacia adelante, temeridad ciega, abandono irresponsable de obras a mitad de camino y caos por aversión al compromiso.",
      byDeficiency: "Parálisis por terror al vacío, cobardía disfrazada de prudencia, pedir permiso eternamente y pudrir la semilla en la orilla."
    },
    correspondences: {
      element: "Aire Turbulento / Viento Disperso sin Dirección",
      astro: "Urano Retrógrado o Mal Aspectado • El Cortocircuito Nervioso y el Terror a la Libertad",
      hebrewLetter: "Aleph (א) en Sombra • El Aliento Entrecortado de la Ansiedad",
      qliphoth: "Amprodias • Los Vientos Ciegos de la Indeterminación Estéril",
      alchemy: "Volatilizatio Fallida • El Mercurio que se evapora por una fisura del vaso sin fijar el Oro",
      hermeticAxiom: "Quien salta para huir de su propia sombra lleva su celda atada a los tobillos; quien no salta cuando el puente llama, convierte su refugio en tumba.",
      jungianComplex: "El Puer Aeternus Regresivo (Síndrome de Peter Pan) o la Agorafobia Existencial del Ego",
      yesNo: "No (frená la imprudencia ciega o desactivá primero el pánico que te paraliza)",
      keywords: [
        "fuga hacia adelante",
        "vértigo paralizante",
        "temeridad ciega",
        "miedo a la libertad",
        "dispersión caótica",
        "inmadurez evasiva",
        "salto abortado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame dado vuelta sobre el abismo: o estás corriendo a ciegas para no hacerte cargo de lo que dejás atrás, o estás temblando en la piedra esperando que alguien venga a firmarte un seguro contra la vida. Ninguna de las dos es libertad.",
    oracleVoiceVariants: [
      "Mirame dado vuelta sobre el abismo: o estás corriendo a ciegas para no hacerte cargo de lo que dejás atrás, o estás temblando en la piedra esperando que alguien venga a firmarte un seguro contra la vida. Ninguna de las dos es libertad.",
      "Llamás 'espontaneidad' a tu incapacidad de sostener un compromiso cuando empieza a requerir oficio, y llamás 'prudencia' al pánico que te da quedar en ridículo. Dejá de mentirte frente al precipicio.",
      "El chacal de plata te muerde hoy los talones porque ya olfateó tu miedo. Si saltás huyendo de vos mismo, en el fondo del barranco te vas a encontrar exactamente con el mismo fantasma del que escapabas.",
      "Tenés los ojos clavados en el fondo oscuro del barranco en lugar de mirar el Sol Blanco de Kether. Quien solo mide la profundidad de la caída jamás logra despegar los pies de la cornisa.",
      "Abandonar diez proyectos en el primer obstáculo no te convierte en un espíritu libre; te convierte en un eterno turista que nunca cosecha un solo fruto."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "Cuando El Loco (Arcano 0) emerge invertido en tu lectura, la corriente eléctrica de Aleph sufre una distorsión bipolar que debés diagnosticar con frialdad quirúrgica. En su polo de exceso, advierte sobre una 'fuga hacia adelante': decisiones tomadas por espasmo, rupturas caprichosas para evadir responsabilidades maduras o apuestas temerarias donde confundís un impulso de ansiedad con una voz intuitiva. En su polo de carencia, revela el bloqueo opuesto: el *Vértigo del Umbral*, donde sabés perfectamente que tu etapa anterior ya caducó, pero permanecés aferrado al borde del risco pidiendo garantías imposibles antes de dar el paso.",
    meaningVariants: [
      "Cuando El Loco (Arcano 0) emerge invertido en tu lectura, la corriente eléctrica de Aleph sufre una distorsión bipolar que debés diagnosticar con frialdad quirúrgica. En su polo de exceso, advierte sobre una 'fuga hacia adelante': decisiones tomadas por espasmo, rupturas caprichosas para evadir responsabilidades maduras o apuestas temerarias donde confundís un impulso de ansiedad con una voz intuitiva. En su polo de carencia, revela el bloqueo opuesto: el *Vértigo del Umbral*, donde sabés perfectamente que tu etapa anterior ya caducó, pero permanecés aferrado al borde del risco pidiendo garantías imposibles antes de dar el paso.",
      "En la arquitectura cabalística del Sendero 11 invertido, el aire puro del Espíritu (*Ruach*) degenera en torbellino mental sin centro. Estás experimentando el síntoma clásico de la dispersión uraniana: mil ideas brillantes que se encienden por la mañana y se abandonan por la tarde, dejando tras de sí un cementerio de borradores inconclusos. El Oráculo te detiene en seco: no hay magia alguna en empezar cien caminos si huís apenas aparece el primer peaje de disciplina.",
      "Alquímicamente, el Arcano 0 en sombra representa la pérdida del *Mercurius Vivus* por falta de cierre hermético. Cuando tu energía vital no encuentra un propósito firme donde condensarse, se evapora en distracciones triviales, compras impulsivas, charlas vacías o cambios de rumbo espasmódicos. Antes de patear el tablero actual, asegurate de no estar derribando la mesa solo porque te dio pereza aprender a jugar la partida.",
      "En su manifestación pasiva o reprimida, El Loco invertido desnuda la cobardía existencial que se disfraza de 'sentido común'. Has permitido que las voces temerosas de tu entorno o el miedo al qué dirán te aten piedras en los tobillos. Ese cansancio gris que sentís en el cuerpo no es fatiga física: es el peso de un salto evolutivo que tu alma exige dar y que tu mente racional sigue postergando.",
      "El Loco invertido marca un desfase temporal: o estás saltando antes de que el puente astral esté listo (precipitación inmadura), o te quedaste parado en el andén cuando el tren del destino ya tocó silbato. Hacé silencio, separá la ansiedad neurótica de la intuición real y recuperá el gobierno de tus pasos."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En el fondo inconsciente de esta inversión opera el complejo del *Puer Aeternus* herido o el trauma de la espontaneidad castigada. O bien una parte de tu psique teme que comprometerse con una estructura concreta equivalga a 'morir y quedar atrapado', o bien internalizaste en tu historia temprana un censor implacable que te hizo creer que equivocarse al explorar lo nuevo es un pecado imperdonable.",
    theWoundVariants: [
      "En el fondo inconsciente de esta inversión opera el complejo del *Puer Aeternus* herido o el trauma de la espontaneidad castigada. O bien una parte de tu psique teme que comprometerse con una estructura concreta equivalga a 'morir y quedar atrapado', o bien internalizaste en tu historia temprana un censor implacable que te hizo creer que equivocarse al explorar lo nuevo es un pecado imperdonable.",
      "Marie-Louise von Franz, discípula directa de Jung, describió la herida del Arcano 0 en sombra como la 'Vida Provisional': esa fantasía secreta de que tu vida actual todavía no es la definitiva y que 'algún día' empezarás en serio, lo cual te impide entregar el cien por ciento de tu sangre aquí y ahora.",
      "Subyace aquí el pánico a la Orfandad Simbólica: el terror inconsciente a que, si das un paso verdaderamente original y propio fuera del libreto familiar o social, quedarás desprotegido a la intemperie. Tu niño interior sigue esperando un permiso externo que ningún adulto puede darte.",
      "La herida de la hipervigilancia: un susto o traición del pasado dejó tu sistema nervioso en alerta permanente, haciéndote confundir cualquier territorio desconocido con un peligro mortal, o llevándote a boicotear lo bueno antes de que pueda doler."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La gran mentira que tu ego te está contando hoy tiene dos caras: si estás huyendo, te decís *'Me voy porque esto ya no vibra conmigo'*, cuando en verdad te vas porque llegó la hora de sostener el esfuerzo; si estás paralizado, te decís *'Todavía estoy investigando y preparándome'*, cuando en verdad estás escondido detrás de los libros por miedo a salir al ruedo.",
    theIllusionVariants: [
      "La gran mentira que tu ego te está contando hoy tiene dos caras: si estás huyendo, te decís *'Me voy porque esto ya no vibra conmigo'*, cuando en verdad te vas porque llegó la hora de sostener el esfuerzo; si estás paralizado, te decís *'Todavía estoy investigando y preparándome'*, cuando en verdad estás escondido detrás de los libros por miedo a salir al ruedo.",
      "El espejismo de la 'Libertad Vacía': creer que sos libre porque nadie te manda ni tenés horarios fijos, sin ver que sos esclavo de tus propios impulsos cambiantes y de la ansiedad de cada mañana.",
      "La ilusión del 'Mapa Perfecto': convencerte de que vas a dar el salto recién cuando tengas resueltas las veinte variables del año próximo, usando el perfeccionismo como anestesia para no mover un dedo hoy.",
      "Confundir adrenalina con intuición: creer que porque una idea te acelera el pulso o rompe todo de golpe es un llamado del espíritu, cuando muchas veces es solo tu impaciencia buscando un atajo mágico."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "En la clínica junguiana, El Loco invertido expone la patología de la 'Vida Provisional' del Puer Aeternus o la parálisis por agorafobia existencial. Tu psique está atrapada entre el deseo impulsivo de patear el tablero sin medir costos y el terror infantil a perder el suelo conocido. La cura exige distinguir con bisturí entre un salto evolutivo real y una simple fuga hacia adelante.",
    psycheVariants: [
      "En la clínica junguiana, El Loco invertido expone la patología de la 'Vida Provisional' del Puer Aeternus o la parálisis por agorafobia existencial. Tu psique está atrapada entre el deseo impulsivo de patear el tablero sin medir costos y el terror infantil a perder el suelo conocido. La cura exige distinguir con bisturí entre un salto evolutivo real y una simple fuga hacia adelante.",
      "Tu sistema nervioso está confundiendo el cosquilleo de la ansiedad evasiva con la voz de la intuición. Cuando el impulso nace de la Sombra del Loco, busca alivio inmediato huyendo de la incomodidad; cuando nace de la Luz, asume con calma el precio de su libertad.",
      "Este Arcano diagnostica un sabotaje en el umbral: justo cuando estás a punto de consolidar un logro o de animarte a algo grande, tu inconsciente inventa una distracción caótica o una duda paralizante para devolverte al casillero cero.",
      "Reconciliar al Loco invertido requiere convocar un gramo de Saturno (tierra, reloj y consecuencia): darle raíces al pájaro para que su vuelo sea un viaje real y no una caída libre."
    ],

    lightAndShadow: "En Sombra Activa: Imprudencia temeraria, fuga de responsabilidades, síndrome de empezar todo y no terminar nada, caos financiero o parálisis absoluta por vértigo al cambio.",
    lightAndShadowVariants: [
      "En Sombra Activa: Imprudencia temeraria, fuga de responsabilidades, síndrome de empezar todo y no terminar nada, caos financiero o parálisis absoluta por vértigo al cambio.",
      "Sombra por Exceso: Saltar a un pozo vacío por pura rebeldía adolescente o ansiedad. Sombra por Defecto: Quedarse sentado sobre la valija toda la vida mirando cómo otros viajan.",
      "Distorsión de Aleph: Ruido mental, promesas fugaces, desarraigo crónico y miedo disfrazado de análisis interminable."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Inestabilidad afectiva, miedo fóbico al compromiso real o vínculos que se rompen apenas pasa la euforia química del primer mes. Si estás en pareja, cuidado con patear el tablero por aburrimiento superficial o con callar tu asfixia hasta estallar; si estás conociendo a alguien, no te arrojes de cabeza sin ver primero quién tenés enfrente.",
      work: "Peligro de dispersión crónica: saltar de una idea de negocio a otra cada quince días sin permitir que ninguna madure ni facture, o bien postergar indefinidamente el lanzamiento de tu proyecto por pánico a exponerte al mercado real.",
      money: "Riesgos financieros mal calculados, gastos impulsivos por dopamina momentánea, desorden administrativo total o falta de colchón por vivir como si no existiera el mañana.",
      spirit: "Turismo espiritual superficial: picotear diez doctrinas distintas sin practicar ninguna a fondo, o confundir un capricho neurótico del ego con una 'señal del universo'.",
      healthAndEnergy: "Desregulación del sistema nervioso simpático, insomnio por mente acelerada, torpeza motora por distracción (tropiezos, esguinces de tobillo) y falta de arraigo corporal."
    },
    domainsVariants: [
      {
        love: "Inestabilidad afectiva, miedo fóbico al compromiso real o vínculos que se rompen apenas pasa la euforia química del primer mes. Si estás en pareja, cuidado con patear el tablero por aburrimiento superficial o con callar tu asfixia hasta estallar; si estás conociendo a alguien, no te arrojes de cabeza sin ver primero quién tenés enfrente.",
        work: "Peligro de dispersión crónica: saltar de una idea de negocio a otra cada quince días sin permitir que ninguna madure ni facture, o bien postergar indefinidamente el lanzamiento de tu proyecto por pánico a exponerte al mercado real.",
        money: "Riesgos financieros mal calculados, gastos impulsivos por dopamina momentánea, desorden administrativo total o falta de colchón por vivir como si no existiera el mañana.",
        spirit: "Turismo espiritual superficial: picotear diez doctrinas distintas sin practicar ninguna a fondo, o confundir un capricho neurótico del ego con una 'señal del universo'.",
        healthAndEnergy: "Desregulación del sistema nervioso simpático, insomnio por mente acelerada, torpeza motora por distracción (tropiezos, esguinces de tobillo) y falta de arraigo corporal."
      },
      {
        love: "Promesas hechas al viento en noches de entusiasmo que al día siguiente pesan como plomo. Frená la seducción inconsciente si no estás dispuesto a sostener lo que encendés.",
        work: "Improvisación peligrosa en asuntos técnicos o comerciales que hoy exigen manual, cálculo de costos y paracaídas. No confundas audacia emprendedora con saltar sin haber revisado las cuerdas.",
        money: "Advertencia severa contra apuestas especulativas, negocios 'mágicos' de dinero rápido o firmas de contratos sin haber leído hasta la última cláusula.",
        spirit: "Desconexión con la tierra (Malkuth): querer volar hacia las estrellas mientras tu habitación, tus cuentas y tu palabra cotidiana están en desorden.",
        healthAndEnergy: "Agotamiento suprarrenal por vivir en estado de alerta o vértigo constante; necesitás peso físico, comida caliente y contacto directo con el suelo."
      },
      {
        love: "En su polo paralizante, esta carta muestra que seguís atado a una rutina afectiva gris por puro terror a la soledad o al cambio, traicionando el llamado de tu corazón.",
        work: "Parálisis frente al lienzo en blanco: tenés el talento y la oportunidad servida, pero el miedo a no ser perfecto en el primer intento te mantiene dando vueltas en círculos.",
        money: "Miedo irracional a invertir en tu propio crecimiento que te hace perder oportunidades reales por avaricia temerosa.",
        spirit: "Cinismo defensivo: burlarte del misterio o de tus propios sueños altos para no sufrir la frustración de intentar alcanzarlos.",
        healthAndEnergy: "Respiración corta y alta en el pecho por ansiedad contenida; bajá el aire al abdomen y apoyá bien los talones."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Detené el salto ciego durante veinticuatro horas: si estabas por huir, quedate y terminá lo que empezaste; si estabas paralizado por miedo, reducí el salto a un paso concreto, medible y con red.",
      prohibition: "Prohibido abandonar hoy una tarea a mitad de camino para empezar otra nueva, o tomar decisiones financieras/afectivas en pleno pico de ansiedad.",
      psychomagicAct: "Colocá dos piedras pesadas (o dos monedas grandes) dentro de tus zapatos o sobre tus empeines durante cinco minutos mientras estás sentado; luego sacátelas, parate descalzo sintiendo el suelo firme y escribí en un papel el único paso real y calculado que darás hoy.",
      talismanPhrase: "No huyo hacia el vacío ni tiemblo en la orilla; apoyo mis pies en la roca y elijo mi paso con lucidez."
    },
    theAlchemyVariants: [
      {
        command: "Detené el salto ciego durante veinticuatro horas: si estabas por huir, quedate y terminá lo que empezaste; si estabas paralizado por miedo, reducí el salto a un paso concreto, medible y con red.",
        prohibition: "Prohibido abandonar hoy una tarea a mitad de camino para empezar otra nueva, o tomar decisiones financieras/afectivas en pleno pico de ansiedad.",
        psychomagicAct: "Colocá dos piedras pesadas (o dos monedas grandes) dentro de tus zapatos o sobre tus empeines durante cinco minutos mientras estás sentado; luego sacátelas, parate descalzo sintiendo el suelo firme y escribí en un papel el único paso real y calculado que darás hoy.",
        talismanPhrase: "No huyo hacia el vacío ni tiemblo en la orilla; apoyo mis pies en la roca y elijo mi paso con lucidez."
      },
      {
        command: "Elegí uno solo de los proyectos o frentes que dejaste abiertos a medias este mes y cerralo por completo hoy antes de permitirte pensar en cualquier idea nueva.",
        prohibition: "No uses la excusa de 'perdí la inspiración' para esquivar la parte técnica y esforzada de tu obra.",
        psychomagicAct: "Atá los cordones de tus zapatos con un doble nudo firme hoy por la mañana, mirate al espejo y declará en voz alta: 'Mis pies están en la tierra; distingo la valentía del sabio de la imprudencia del fugitivo'.",
        talismanPhrase: "Domino el viento de mi mente; mi libertad tiene raíces de hierro."
      },
      {
        command: "Si tu sombra actual es la parálisis por miedo al qué dirán, ejecutá hoy una pequeña acción imperfecta pero real que rompa el hechizo del inmovilismo.",
        prohibition: "No le pidas consejo ni permiso a nadie más durante toda la jornada; hacete cargo vos del costo y del beneficio de tu elección.",
        psychomagicAct: "Tomá la carta o el dibujo de El Loco que estaba invertido, giralo lentamente 180 grados con tus dos manos hasta ponerlo al derecho sobre tu mesa, y apoyá encima una llave metálica como ancla de dirección consciente.",
        talismanPhrase: "Disuelvo el vértigo; mi salto nace de la conciencia despierta y no del pánico."
      }
    ],

    // Alias idéntico a datos_sol_1 para uniformidad de componentes React
    actionOracle: {
      command: "Detené el salto ciego durante veinticuatro horas: si estabas por huir, quedate y terminá lo que empezaste; si estabas paralizado por miedo, reducí el salto a un paso concreto, medible y con red.",
      prohibition: "Prohibido abandonar hoy una tarea a mitad de camino para empezar otra nueva, o tomar decisiones financieras/afectivas en pleno pico de ansiedad.",
      psychomagicAct: "Colocá dos piedras pesadas (o dos monedas grandes) dentro de tus zapatos o sobre tus empeines durante cinco minutos mientras estás sentado; luego sacátelas, parate descalzo sintiendo el suelo firme y escribí en un papel el único paso real y calculado que darás hoy.",
      talismanPhrase: "No huyo hacia el vacío ni tiemblo en la orilla; apoyo mis pies en la roca y elijo mi paso con lucidez."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano 0 aparece invertido en tu mesa: alerta temprana contra la imprudencia sin red o contra el vértigo que te frena en el umbral.",
      secondAppearance: "El Loco en Sombra sale por segunda vez: seguís escapando hacia adelante para no cerrar lo que empezaste, o seguís congelado en la cornisa por miedo. Frená y recalibrá.",
      thirdAppearance: "Tercera comparecencia del Arcano 0 Invertido: peligro inminente de dar un paso en falso por ansiedad o de perder el tren por cobardía. Anclate a tierra hoy mismo.",
      fourthPlusAppearance: "Intervención crítica de Aleph en Sombra: tu energía se está fugando por completo en el caos o en el miedo. El Oráculo bloquea toda aventura nueva hasta que pongas los dos pies sobre la roca de tu presente."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Antes de saltar al abismo, asegurate de no estar huyendo de vos mismo: distinguí con frialdad entre la valentía del iniciado y la imprudencia del fugitivo.",
    counselVariants: [
      "Antes de saltar al abismo, asegurate de no estar huyendo de vos mismo: distinguí con frialdad entre la valentía del iniciado y la imprudencia del fugitivo.",
      "Cambiar de ciudad, de negocio o de cama cada vez que aparece un problema no es libertad: es girar en la misma jaula con distinto paisaje.",
      "El paracaídas no le quita belleza al vuelo; prepará tu red en la tierra antes de lanzarte desde la cumbre.",
      "Si el paso que vas a dar nace del pánico, frená; si lo que te frena es el pánico a crecer, avanzá.",
      "Ningún viento del mundo ayuda al barco que cambia de puerto cada media hora."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 78,
        y: 16,
        title: "El Sol Blanco Eclipsado a tus Espaldas",
        secret: "Cuando El Loco se invierte, el caminante le da la espalda por completo al Sol de Kether y clava sus ojos únicamente en la oscuridad del pozo. Simboliza la desconexión temporal con tu guía supraconsciente: estás actuando desde el impulso ciego del sistema nervioso inferior sin consultar a tu centro espiritual.",
        esotericFormula: "Kether Ignorado = Impulso Ciego sin Respaldo Astral",
        meditationPrompt: "¿Estás dando este paso porque te llama una visión luminosa adelante, o simplemente porque querés escapar de una incomodidad atrás?"
      },
      {
        id: "n2",
        x: 24,
        y: 44,
        title: "El Loto Escarchado que se Deshoja",
        secret: "En la inversión de la carta, la flor blanca de dieciséis facetas pierde su verticalidad y apunta hacia el abismo. Revela que el deseo actual está contaminado de ansiedad, capricho o miedo: cuando la intención pierde su pureza y su foco, el proyecto nace sin raíz.",
        esotericFormula: "Deseo Ansioso + Falta de Eje = Dispersión del Mercurio",
        meditationPrompt: "¿Cuántas ideas o proyectos empezaste en los últimos meses y dejaste caer antes de que dieran su primera flor?"
      },
      {
        id: "n3",
        x: 68,
        y: 74,
        title: "La Mordida del Chacal y el Paso en Falso",
        secret: "En Luz, el guardián cinocéfalo ladraba para despertarte; en Sombra, sus dientes sujetan tu túnica porque tu propio instinto de conservación detectó que estás por pisar en falso sin haber mirado el terreno, o bien porque tu miedo animal te tiene clavado a la piedra.",
        esotericFormula: "Instinto en Alarma = Peligro de Temeridad o Parálisis",
        meditationPrompt: "¿Qué advertencia concreta de tu sentido común práctico estás intentando ignorar hoy por apuro?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO I INVERTIDO • EL MAGO EN SOMBRA (BETH INVERTIDA • EL ILUSIONISTA Y LA DISPERSIÓN)
  // ==========================================================================
  {
    id: 1,
    numeral: "I",
    name: "El Mago",
    subtitle: "El Espejismo del Verbo y la Voluntad Dispersa",
    isReversed: true,
    palette: {
      primary: "#7c3aed",
      secondary: "#64748b",
      glow: "rgba(124, 58, 237, 0.55)"
    },
    archetype: "magician",
    shadowPolarity: {
      byExcess: "El Sofista o Prestidigitador: manipulación verbal, astucia sin ética, vender humo dorado, prometer lo que no está construido y narcisismo intelectual.",
      byDeficiency: "El Demiurgo Impotente: síndrome del impostor, dispersión de la voluntad en diez mesas a la vez, perfeccionismo que nunca lanza y desconexión entre idea y mano."
    },
    correspondences: {
      element: "Aire Viciado / Mercurio Volátil sin Fijación",
      astro: "Mercurio Retrógrado o Combusto • El Cortocircuito entre la Mente, la Lengua y la Mano",
      hebrewLetter: "Beth (ב) en Sombra • La Casa Dividida o el Taller Desordenado",
      qliphoth: "Baratchial • El Espejismo de la Astucia y la Mentira Técnica",
      alchemy: "Sublimatio Falsificada • El Oro de los Tontos (Pirita) que brilla en el discurso pero se quiebra en el yunque",
      hermeticAxiom: "Como es el desorden arriba en tu mente, así es el estancamiento abajo en tu mesa; la vara que apunta a diez blancos a la vez no enciende ninguno.",
      jungianComplex: "El Trickster (Embaucador) Sombrío y el Complejo de Impotencia Ejecutiva / Impostor",
      yesNo: "No por ahora (tu enfoque está dividido o hay astucia engañosa en la mesa; ordená el taller primero)",
      keywords: [
        "dispersión energética",
        "síndrome del impostor",
        "promesas sin sustento",
        "manipulación verbal",
        "talento fragmentado",
        "truco de humo",
        "voluntad cortada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Tenés las cuatro armas sagradas sobre el altar, pero tus manos tiemblan o juegan a los dados con ellas. O estás usando tu labia brillante para vender un castillo que todavía no edificaste en la piedra, o te escondés detrás de mil preparativos porque te aterra someter tu obra al veredicto del mundo.",
    oracleVoiceVariants: [
      "Tenés las cuatro armas sagradas sobre el altar, pero tus manos tiemblan o juegan a los dados con ellas. O estás usando tu labia brillante para vender un castillo que todavía no edificaste en la piedra, o te escondés detrás de mil preparativos porque te aterra someter tu obra al veredicto del mundo.",
      "Mirá mi vara apuntando hacia el suelo y mi dedo hacia las nubes: el circuito está invertido. Hablás como un emperador en las tertulias, pero cuando quedás a solas frente a tu mesa de trabajo te dispersás en diez pestañas abiertas sin cerrar ni una.",
      "Cuidado con el hechizo de tu propia elocuencia: es tan fácil convencer a los demás con palabras bonitas que corrés el peligro de terminar creyéndote tus propias excusas.",
      "¿De qué te sirve coleccionar cincuenta herramientas nuevas, cursos y fórmulas si todavía no llevaste hasta el final la primera obra que prometiste? El talento sin ejecución es plomo que envenena la sangre.",
      "Vigilá también las manos del otro en la mesa: donde yo salgo invertido, alguien está moviendo los cubiletes rápido para que mires el brillo del discurso y no veas que falta la moneda."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Mago (Arcano I) invertido señala una fractura crítica en el Sendero 12 de Beth: el puente entre la concepción mental (*Arriba*) y la materialización concreta (*Abajo*) se encuentra interrumpido. En su polaridad pasiva —la más frecuente en creadores y mentes brillantes—, diagnostica una severa dispersión del foco láser: tenés las herramientas y el ingenio de sobra, pero dividís tu voltaje entre demasiados frentes simultáneos, o sufrís la parálisis del impostor que retoca eternamente el prototipo sin lanzarlo jamás. En su polaridad activa o externa, advierte sobre la figura del *Ilusionista*: astucia manipuladora, promesas comerciales infladas sin respaldo real en el taller, o uso de la palabra para seducir y evadir la verdad.",
    meaningVariants: [
      "El Mago (Arcano I) invertido señala una fractura crítica en el Sendero 12 de Beth: el puente entre la concepción mental (*Arriba*) y la materialización concreta (*Abajo*) se encuentra interrumpido. En su polaridad pasiva —la más frecuente en creadores y mentes brillantes—, diagnostica una severa dispersión del foco láser: tenés las herramientas y el ingenio de sobra, pero dividís tu voltaje entre demasiados frentes simultáneos, o sufrís la parálisis del impostor que retoca eternamente el prototipo sin lanzarlo jamás. En su polaridad activa o externa, advierte sobre la figura del *Ilusionista*: astucia manipuladora, promesas comerciales infladas sin respaldo real en el taller, o uso de la palabra para seducir y evadir la verdad.",
      "En la tradición hermética, cuando el operador pierde el centro del altar, los cuatro elementos dejan de obedecerle y se vuelven en su contra: el Basto (Fuego) se transforma en fiebre de ansiedad, la Copa (Agua) en capricho emocional, la Espada (Aire) en rumiación hiperanalítica y el Pentáculo (Tierra) en pesadez improductiva. El Oráculo te exige recuperar la unidad de mando hoy mismo.",
      "Alquímicamente, el Arcano I en sombra es el *Azoth* mal empleado o la *Calcinatio* estéril que quema el combustible de la mente en fuegos artificiales. Cuidado con gastar en hablar, explicar o presumir de un proyecto la presión psíquica exacta que necesitabas para construirlo en silencio.",
      "Si tu consulta involucra un socio, vendedor, contrato o propuesta externa, El Mago invertido enciende una luz amarilla de auditoría inmediata: detrás de una presentación deslumbrante y un discurso impecable puede haber humo técnico, letra chica engañosa o falta de solvencia real para cumplir lo pactado.",
      "El número Uno invertido revela una crisis de autoría: estás esperando que las herramientas hagan el trabajo solas o buscando un 'secreto mágico' afuera, cuando lo único que falta sobre la losa de obsidiana es que apoyes el pecho y sostengas el esfuerzo durante noventa días seguidos en una sola dirección."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la raíz psicológica de esta inversión late la herida de la *Invalidez Operativa* o el miedo escénico al juicio sobre la obra terminada. Mientras un proyecto está solo en tu cabeza o al cincuenta por ciento, sigue siendo perfecto e invulnerable; terminarlo y ponerlo en el mercado implica aceptar que sea medido en la realidad. Por eso tu inconsciente abre cinco proyectos nuevos cada vez que estás cerca de terminar el primero.",
    theWoundVariants: [
      "En la raíz psicológica de esta inversión late la herida de la *Invalidez Operativa* o el miedo escénico al juicio sobre la obra terminada. Mientras un proyecto está solo en tu cabeza o al cincuenta por ciento, sigue siendo perfecto e invulnerable; terminarlo y ponerlo en el mercado implica aceptar que sea medido en la realidad. Por eso tu inconsciente abre cinco proyectos nuevos cada vez que estás cerca de terminar el primero.",
      "En el polo del *Trickster* (el Embaucador junguiano), la herida proviene de haber creído temprano que tu valor genuino no alcanzaba y que necesitabas deslumbrar, exagerar o manipular estratégicamente el tablero para ser respetado.",
      "La adicción a la dopamina del inicio: tu cerebro se volvió adicto a la embriaguez eléctrica de 'tener una gran idea nueva' (el chispazo de Kether), pero rechaza el descenso lento y artesanal hacia Binah (la estructura que exige paciencia y repetición).",
      "El síndrome del Impostor crónico: desconfiar secretamente de tu propia maestría, lo que te lleva a acumular herramientas, títulos o insumos interminables sin sentirte nunca 'suficientemente listo' para cobrar lo que valés."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño maestro del Arcano I invertido consiste en confundir *actividad mental* con *productividad real*. Te acostás agotado creyendo que trabajaste muchísimo porque estuviste doce horas pensando, cambiando detalles cosméticos o reorganizando archivos, cuando en realidad no moviste ni un milímetro la aguja central del negocio o de la obra.",
    theIllusionVariants: [
      "El autoengaño maestro del Arcano I invertido consiste en confundir *actividad mental* con *productividad real*. Te acostás agotado creyendo que trabajaste muchísimo porque estuviste doce horas pensando, cambiando detalles cosméticos o reorganizando archivos, cuando en realidad no moviste ni un milímetro la aguja central del negocio o de la obra.",
      "La coartada de 'Me falta una herramienta más': convencerte de que no podés avanzar hasta no tener el equipo perfecto, el software nuevo o el insumo importado, negándote a ver que un maestro verdadero hace oro con lo que ya tiene sobre la mesa.",
      "El espejismo del atajo astuto: creer que con marketing brillante o labia seductora podés compensar una falla en la calidad real del producto o en la honestidad del vínculo.",
      "Creer que sos 'multitarea': decirte que podés llevar adelante siete empresas, artes o batallas al mismo tiempo sin que ninguna pierda profundidad ni excelencia."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, El Mago en sombra diagnostica una disociación entre el *Logos* (la mente que concibe) y la *Praxis* (la mano que ejecuta). El arquetipo de Hermes se degrada aquí en su faz de embaucador —que se engaña primero a sí mismo con excusas brillantes— o en un bloqueo neurótico de la voluntad por exceso de opciones abiertas.",
    psycheVariants: [
      "Psicológicamente, El Mago en sombra diagnostica una disociación entre el *Logos* (la mente que concibe) y la *Praxis* (la mano que ejecuta). El arquetipo de Hermes se degrada aquí en su faz de embaucador —que se engaña primero a sí mismo con excusas brillantes— o en un bloqueo neurótico de la voluntad por exceso de opciones abiertas.",
      "El exceso de voltaje mercurial sin descarga física a tierra está generando cortocircuitos de ansiedad, fatiga ocular e irritabilidad mental. Tu psique no necesita pensar más: necesita usar las manos y cerrar un ciclo concreto hoy.",
      "Si sentís desconfianza hacia alguien de tu entorno actual, este Arcano confirma que tu radar inconsciente ha detectado incongruencia entre lo que esa persona dice (Aire) y lo que realmente sostiene con hechos (Tierra).",
      "Sanar al Mago invertido exige humildad artesanal: bajar del pedestal de las grandes teorías y volver a enamorarse del golpe lento del cincel sobre la piedra."
    ],

    lightAndShadow: "En Sombra Activa: Dispersión energética en mil frentes, promesas vacías, manipulación astuta, síndrome del impostor, proyectos que quedan al ochenta por ciento o talento desperdiciado.",
    lightAndShadowVariants: [
      "En Sombra Activa: Dispersión energética en mil frentes, promesas vacías, manipulación astuta, síndrome del impostor, proyectos que quedan al ochenta por ciento o talento desperdiciado.",
      "Sombra por Exceso: Charlatanería seductora, trucos de prestidigitación comercial y soberbia intelectual. Sombra por Defecto: Bloqueo ejecutivo, duda paralizante y subestimación del propio oficio.",
      "Distorsión de Beth: El taller desordenado donde las herramientas chocan entre sí porque falta la orden clara del Arquitecto."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Juegos de poder mental, palabras seductoras que no se respaldan con hechos concretos o comunicación ambigua que busca manipular la reacción del otro. En pareja, pide cortar con las excusas elegantes y cumplir lo prometido; si estás conociendo a alguien muy encantador de palabra, mirá únicamente sus acciones reales.",
      work: "Alerta roja contra la dispersión operativa: estás abarcando demasiados frentes a la vez y corriendo el riesgo de quedar mal en los plazos o dejar tu obra maestra sin rematar. También advierte revisar con lupa propuestas de socios o proveedores que suenan 'demasiado buenas para ser verdad'.",
      money: "Fugas de dinero por desorden en las herramientas de trabajo, compras de insumos que luego quedan archivados sin uso, o pérdidas por confiar en artificios comerciales sin sustento sólido.",
      spirit: "Ego espiritual o intelectualización excesiva del camino: leer y hablar sobre alta magia o alquimia sin aplicar ni una sola gota de autodominio sobre el propio carácter.",
      healthAndEnergy: "Sobrecarga eléctrica en hemisferios cerebrales, vista cansada, tensión en muñecas/hombros y agotamiento nervioso por exceso de pantallas y multitarea."
    },
    domainsVariants: [
      {
        love: "Juegos de poder mental, palabras seductoras que no se respaldan con hechos concretos o comunicación ambigua que busca manipular la reacción del otro. En pareja, pide cortar con las excusas elegantes y cumplir lo prometido; si estás conociendo a alguien muy encantador de palabra, mirá únicamente sus acciones reales.",
        work: "Alerta roja contra la dispersión operativa: estás abarcando demasiados frentes a la vez y corriendo el riesgo de quedar mal en los plazos o dejar tu obra maestra sin rematar. También advierte revisar con lupa propuestas de socios o proveedores que suenan 'demasiado buenas para ser verdad'.",
        money: "Fugas de dinero por desorden en las herramientas de trabajo, compras de insumos que luego quedan archivados sin uso, o pérdidas por confiar en artificios comerciales sin sustento sólido.",
        spirit: "Ego espiritual o intelectualización excesiva del camino: leer y hablar sobre alta magia o alquimia sin aplicar ni una sola gota de autodominio sobre el propio carácter.",
        healthAndEnergy: "Sobrecarga eléctrica en hemisferios cerebrales, vista cansada, tensión en muñecas/hombros y agotamiento nervioso por exceso de pantallas y multitarea."
      },
      {
        love: "Falta de presencia real: estar físicamente con el otro pero con la cabeza dividida en diez problemas técnicos. Apagá el cálculo mental y volvé a habitar el cáliz del corazón.",
        work: "El síndrome del 'eterno beta': seguir agregando funciones, retoques o cambios a un producto para postergar el momento de salir a venderlo y medirlo en la calle.",
        money: "Cuidado con estafas, letras chicas o intermediarios astutos que intentan quedarse con el margen de tu trabajo mediante labia comercial.",
        spirit: "Intentar forzar o manipular resultados mediante la ansiedad egoica en lugar de alinear tu voluntad con la ley superior.",
        healthAndEnergy: "Respiración superficial y tic nervioso por exceso de estímulos; necesitás silencio digital y trabajo manual concreto."
      },
      {
        love: "Inseguridad oculta detrás de una máscara de autosuficiencia: no hace falta hacer malabares ni impresionar a nadie para merecer un vínculo verdadero.",
        work: "Desconexión entre diseño y logística: una idea genial en el papel que fracasa en la implementación porque no se calcularon los tiempos ni la tierra (el Pentáculo).",
        money: "Talento submonetizado por culpa del síndrome del impostor: regalar tu trabajo o cobrar menos de lo que vale por dudar de tu propia maestría.",
        spirit: "Olvidar la cuarta virtud del altar (*Callar*): perder fuerza manifestadora por contar tus planes a todo el mundo antes de materializarlos.",
        healthAndEnergy: "Insomnio de conciliación por dejar diez circuitos mentales abiertos al terminar el día; cerrá tus listas por escrito antes de cenar."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Cerrá hoy mismo cuatro de las cinco pestañas o frentes secundarios que tenés abiertos y obligá a tus manos a terminar y entregar una sola unidad de obra real antes de la noche.",
      prohibition: "Prohibido prometer hoy algo que no tengas ya en la mano, comprar una herramienta nueva o hablar de un proyecto que todavía no empezaste.",
      psychomagicAct: "Retirá absolutamente todos los objetos de tu escritorio hasta dejar la superficie desnuda; limpiala con agua y vinagre o alcohol, y colocá en el centro únicamente la herramienta con la que vas a terminar tu tarea pendiente hoy, tocándola con tu índice derecho y diciendo: 'Cierro la dispersión; mi palabra y mi mano vuelven a ser una sola'.",
      talismanPhrase: "Renuncio al humo de las excusas; concentro mis cuatro elementos en un solo hecho consumado."
    },
    theAlchemyVariants: [
      {
        command: "Cerrá hoy mismo cuatro de las cinco pestañas o frentes secundarios que tenés abiertos y obligá a tus manos a terminar y entregar una sola unidad de obra real antes de la noche.",
        prohibition: "Prohibido prometer hoy algo que no tengas ya en la mano, comprar una herramienta nueva o hablar de un proyecto que todavía no empezaste.",
        psychomagicAct: "Retirá absolutamente todos los objetos de tu escritorio hasta dejar la superficie desnuda; limpiala con agua y vinagre o alcohol, y colocá en el centro únicamente la herramienta con la que vas a terminar tu tarea pendiente hoy, tocándola con tu índice derecho y diciendo: 'Cierro la dispersión; mi palabra y mi mano vuelven a ser una sola'.",
        talismanPhrase: "Renuncio al humo de las excusas; concentro mis cuatro elementos en un solo hecho consumado."
      },
      {
        command: "Auditá hoy con frialdad tus propias palabras de la última semana: cumplí en el acto la promesa más chica que hayas dejado colgada.",
        prohibition: "No uses tu inteligencia para inventar una justificación brillante de por qué algo no salió; corregí el hecho en silencio.",
        psychomagicAct: "Atá tus dedos índice y mayor de la mano dominante con una pequeña cinta adhesiva o hilo durante quince minutos mientras ordenás tu taller o carpeta de archivos, simbolizando que unificás la dualidad de tu mente en un solo trazo directo.",
        talismanPhrase: "Mi ingenio sirve a la Verdad; lo que mi mente diseña, mis manos lo terminan."
      },
      {
        command: "Si estás frente a un trato o persona dudosa, exigí hoy ver las pruebas físicas, el código funcionando o los números sobre la mesa sin aceptar promesas en el aire.",
        prohibition: "No regales tu saber técnico ni te rebajes ante nadie por síndrome del impostor.",
        psychomagicAct: "Dibujá el signo del infinito (∞) en una hoja, trazá una línea vertical firme que lo atraviese por el centro clavándolo a una base cuadrada abajo, y ponelo bajo tu teclado o herramienta principal.",
        talismanPhrase: "Bajo el rayo a la piedra negra; mi voluntad está anclada y libre de espejismos."
      }
    ],

    actionOracle: {
      command: "Cerrá hoy mismo cuatro de las cinco pestañas o frentes secundarios que tenés abiertos y obligá a tus manos a terminar y entregar una sola unidad de obra real antes de la noche.",
      prohibition: "Prohibido prometer hoy algo que no tengas ya en la mano, comprar una herramienta nueva o hablar de un proyecto que todavía no empezaste.",
      psychomagicAct: "Retirá absolutamente todos los objetos de tu escritorio hasta dejar la superficie desnuda; limpiala con agua y vinagre o alcohol, y colocá en el centro únicamente la herramienta con la que vas a terminar tu tarea pendiente hoy, tocándola con tu índice derecho y diciendo: 'Cierro la dispersión; mi palabra y mi mano vuelven a ser una sola'.",
      talismanPhrase: "Renuncio al humo de las excusas; concentro mis cuatro elementos en un solo hecho consumado."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano I aparece invertido: hay dispersión de energía en el altar o desconexión entre lo que se dice y lo que se ejecuta.",
      secondAppearance: "El Mago en Sombra sale por segunda vez en tu registro: seguís abriendo frentes nuevos sin cerrar los anteriores. El exceso de ideas sin tierra está drenando tu poder.",
      thirdAppearance: "Tercera comparecencia del Arcano I Invertido: alerta crítica contra el autoengaño o la manipulación. Cortá toda palabra vacía hoy mismo y remitite únicamente a los hechos terminados.",
      fourthPlusAppearance: "Sentencia severa de Beth en Sombra: el Oráculo clausura tus proyectos secundarios. No recibirás nueva luz creativa hasta que limpies tu mesa y entregues terminada la obra que tenés pendiente."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Recuperá tu centro y tu honestidad operativa: no necesitás buscar más recursos afuera, sino dejar de dispersar tu fuego en diez altares a la vez.",
    counselVariants: [
      "Recuperá tu centro y tu honestidad operativa: no necesitás buscar más recursos afuera, sino dejar de dispersar tu fuego en diez altares a la vez.",
      "Una sola obra terminada y puesta en pie vale más que cien planos geniales guardados en el cajón de las excusas.",
      "El malabarista entretiene a la feria tirando diez bolas al aire, pero cuando termina la función tiene las manos vacías; sé el herrero que forja una sola espada.",
      "Nunca uses la brillantez de tu lengua para tapar la pereza de tus manos.",
      "Cuando alguien te hable con demasiado brillo y poca tierra, mirale los zapatos y pedile las pruebas."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "La Lemniscata en Cortocircuito Mental",
        secret: "Al invertirse el diorama, el ocho horizontal del infinito queda debajo de la cabeza en lugar de coronarla. Simboliza el bucle de la rumiación neurótica: la energía intelectual gira sobre sí misma en un laberinto cerrado de planes, dudas y cálculos sin llegar nunca a conectarse con la fuente espiritual ni con las manos.",
        esotericFormula: "∞ Invertido = Rumiación Mental en Bucle Cerrado",
        meditationPrompt: "¿En qué pensamiento o planificación estás girando en círculos hoy para evitar pasar a la acción física?"
      },
      {
        id: "n2",
        x: 22,
        y: 44,
        title: "La Vara Desconectada (El Pararrayos Sin Tierra)",
        secret: "En la carta invertida, la mano que debía bajar la energía a la roca apunta al vacío y la vara apunta hacia abajo sin tocar el altar. Es el emblema exacto de la idea genial que se descarga en el aire como un relámpago perdido o se usa para encandilar a otros sin construir cimientos.",
        esotericFormula: "Idea sin Tierra = Fuego Artificial que se apaga en el aire",
        meditationPrompt: "¿Qué promesa o proyecto que nombraste en voz alta últimamente todavía no tiene ni un solo ladrillo puesto en la realidad?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Altar en Desorden (Los Elementos Disociados)",
        secret: "Cuando la losa de los cuatro instrumentos queda dada vuelta, el Querer (Basto), el Saber (Copa), el Osar (Espada) y el Callar (Pentáculo) se disocian: sabés qué hacer pero no te atrevés, o querés hacerlo pero hablás de más antes de tiempo. El poder vuelve en el segundo en que reordenás los cuatro pilares.",
        esotericFormula: "Querer ≠ Hacer = Impotencia del Operador",
        meditationPrompt: "¿Cuál de los cuatro elementos de tu mesa (tu deseo, tu emoción, tu mente o tu disciplina práctica) está saboteando hoy a los otros tres?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO II INVERTIDO • LA SACERDOTISA EN SOMBRA (GIMEL INVERTIDA • EL VELO ROTO Y EL HIELO)
  // ==========================================================================
  {
    id: 2,
    numeral: "II",
    name: "La Sacerdotisa",
    subtitle: "El Velo Roto y el Estanque Congelado",
    isReversed: true,
    palette: {
      primary: "#475569",
      secondary: "#9333ea",
      glow: "rgba(147, 51, 234, 0.55)"
    },
    archetype: "priestess",
    shadowPolarity: {
      byExcess: "El Santuario Congelado: frialdad glacial defensiva, aislamiento pasivo-agresivo, secretos tóxicos, agendas ocultas y orgullo espiritual que mira desde arriba sin vivir.",
      byDeficiency: "El Velo Profanado: indiscreción verbal que arruina la gestación, sordera total ante la propia intuición, superficialidad ruidosa y entrega de tus secretos a manos indignas."
    },
    correspondences: {
      element: "Agua Estancada o Escarcha Glacial",
      astro: "Luna Menguante / Eclipse Lunar • La Distorsión del Espejo Subconsciente",
      hebrewLetter: "Gimel (ג) en Sombra • El Camello que se pierde en el espejismo del desierto",
      qliphoth: "Gamaliel • Las Imágenes Obscenas o Engañosas del Astral Inferior",
      alchemy: "Albedo Corrupta • El Espejo de Plata empañado por el aliento de la ansiedad o la mentira",
      hermeticAxiom: "El agua que se encierra sin salida se pudre en la vasija; el secreto que se grita en la plaza antes de cuajar nace muerto.",
      jungianComplex: "La Madre Fría / Esfinge Muda, la Represión Afectiva y la Traición al Sexto Sentido",
      yesNo: "No (hay información oculta, agendas dobles o estás traicionando tu propia corazonada)",
      keywords: [
        "intuición ignorada",
        "secretos tóxicos",
        "frialdad defensiva",
        "indiscreción fatal",
        "agendas ocultas",
        "pasividad estéril",
        "agua estancada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Vos ya sabías la verdad desde el primer minuto en que miraste este asunto, pero decidiste taparte los oídos porque la verdad te obligaba a tomar una decisión incómoda. Dejá de pedir más señales cuando todavía no obedeciste la primera que te di.",
    oracleVoiceVariants: [
      "Vos ya sabías la verdad desde el primer minuto en que miraste este asunto, pero decidiste taparte los oídos porque la verdad te obligaba a tomar una decisión incómoda. Dejá de pedir más señales cuando todavía no obedeciste la primera que te di.",
      "O abriste la boca antes de tiempo contando en la feria lo que debía germinar en mi cámara oscura, o te encerraste detrás de un muro de hielo usando el silencio como castigo contra los demás.",
      "Cuidado con lo que se esconde detrás del tapiz hoy: donde mi pergamino sale invertido, hay cláusulas que no te están mostrando, silencios que mienten o dobles intenciones vestidas de sonrisa.",
      "Acumulás libros, teorías y secretos en la cabeza como un avaro en su biblioteca, pero tenés miedo de meter los pies en el barro caliente de la vida real. La sabiduría que no se encarna es ceniza fría.",
      "El agua de mi estanque se enturbió porque la estás revolviendo con las manos de la ansiedad. Sacá las manos del agua hoy: si seguís forzando la respuesta desde el miedo, solo verás tus propios monstruos reflejados."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Sacerdotisa (Arcano II) invertida revela una perturbación profunda en las aguas del subconsciente y en el manejo del silencio estratégico. En su manifestación más directa hacia vos, te acusa de *alta traición a tu propia intuición*: tu radar interno ya detectó una incoherencia o peligro hace días, pero tu mente racional o tu deseo de agradar intentó anestesiar esa alarma. En su segunda faz, señala la ruptura del sello hermético: o bien estás hablando de más y evaporando la fuerza de tus proyectos embrionarios ante oídos envidiosos o superficiales, o bien existen secretos guardados, agendas ocultas e información retenida por terceros que enturbian el tablero donde estás por pisar.",
    meaningVariants: [
      "La Sacerdotisa (Arcano II) invertida revela una perturbación profunda en las aguas del subconsciente y en el manejo del silencio estratégico. En su manifestación más directa hacia vos, te acusa de *alta traición a tu propia intuición*: tu radar interno ya detectó una incoherencia o peligro hace días, pero tu mente racional o tu deseo de agradar intentó anestesiar esa alarma. En su segunda faz, señala la ruptura del sello hermético: o bien estás hablando de más y evaporando la fuerza de tus proyectos embrionarios ante oídos envidiosos o superficiales, o bien existen secretos guardados, agendas ocultas e información retenida por terceros que enturbian el tablero donde estás por pisar.",
      "Cuando la Guardiana de Boaz y Jachin cae en sombra por exceso de polaridad lunar, el silencio sagrado degenera en *Hielo Defensivo* y pasividad crónica. Te refugiás en una torre de marfil intelectual o emocional, esperando eternamente a que 'la vida te dé otra señal' para no correr el riesgo de actuar, o utilizás el silencio tenso y el misterio como un arma pasivo-agresiva para manipular a quienes te rodean.",
      "En el Árbol de la Vida, el Sendero 13 de Gimel cruza el Abismo entre Kether y Tiphereth. Invertido, indica que el espejo lunar de tu mente está empañado por proyecciones emocionales: estás confundiendo un miedo paranoico o un trauma antiguo con una 'premonición intuitiva'. Antes de acusar o decidir, limpiá el cristal de tu mente para distinguir qué es intuición limpia y qué es sospecha neurótica.",
      "Alquímicamente, el Arcano II en sombra es la *Solutio* estancada que no pasa nunca a la fecundidad de La Emperatriz (Arcano III): los planes se quedan eternamente en fase de estudio, análisis o secreto sin ver jamás la luz del sol. Lo que se incuba más allá de su noveno mes termina asfixiándose dentro del huevo.",
      "En el plano mundano y comercial, esta carta invertida es la señal clásica de lo no dicho: contratos con letra chica escondida, socios que guardan una carta bajo la manga, chismes de pasillo o verdades familiares barridas debajo de la alfombra que están a punto de salir a la luz."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda, La Sacerdotisa invertida señala la herida de la *Desconfianza Epistémica Propia* (gaslighting internalizado): en algún momento de tu historia te convencieron de que lo que sentías o percibías sutilmente 'eran locuras tuyas', llevándote a dudar de tu propio olfato visceral y a pedir permiso lógico para creer en lo que tus ojos ya vieron.",
    theWoundVariants: [
      "En la psicología profunda, La Sacerdotisa invertida señala la herida de la *Desconfianza Epistémica Propia* (gaslighting internalizado): en algún momento de tu historia te convencieron de que lo que sentías o percibías sutilmente 'eran locuras tuyas', llevándote a dudar de tu propio olfato visceral y a pedir permiso lógico para creer en lo que tus ojos ya vieron.",
      "En su polo de hielo, opera la herida de la *Intimidad Traicionada*: abriste tu corazón o tus secretos en el pasado ante alguien que usó esa vulnerabilidad en tu contra, y juraste inconscientemente no volver a entregarte, convirtiendo tu santuario en un búnker helado donde nadie puede tocarte pero donde tampoco entra el sol.",
      "La compulsión de la Indiscreción Ansiosa: contar tus planes apenas nacen porque tu niño interior busca el aplauso inmediato ('mirá qué inteligente soy'), cambiando el oro real de la obra terminada por las monedas falsas de la aprobación verbal ajena.",
      "El miedo a la pasión y a la sangre de la vida: refugiarse en el rol del 'observador sabio e intocable' que todo lo entiende desde la platea para no transpirar ni arriesgarse en el escenario."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La mentira más peligrosa que te cuenta tu ego bajo este Arcano es: *'No actúo porque estoy esperando el tiempo divino en silencio'*, cuando la verdad cruda es que estás usando la espiritualidad o la prudencia como un disfraz elegante para tu miedo a tomar partido y pasar a la acción.",
    theIllusionVariants: [
      "La mentira más peligrosa que te cuenta tu ego bajo este Arcano es: *'No actúo porque estoy esperando el tiempo divino en silencio'*, cuando la verdad cruda es que estás usando la espiritualidad o la prudencia como un disfraz elegante para tu miedo a tomar partido y pasar a la acción.",
      "El autoengaño de la 'Ceguera Voluntaria': decirte que *'no tenías forma de saber'* que cierta persona o negocio iba a fallar, cuando en los primeros cinco minutos de conocerlo sentiste un nudo frío en el estómago y elegiste mirar para otro lado.",
      "Creer que callar un rencor es tener paz: acumular agravios detrás de una sonrisa fría diciendo *'ya pasó, no importa'*, mientras por debajo del velo tu inconsciente pasa factura con distancia y sarcasmo.",
      "La ilusión de que 'hablarlo con amigos no hace nada': creer que ventilar la intimidad de tu pareja o las fórmulas de tu proyecto es inocuo, sin ver cómo cada indiscreción pincha la presión del globo."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "En clave junguiana, La Sacerdotisa invertida muestra un *Anima* disociada del instinto vital o atrapada en las brumas del astral inferior (Gamaliel). El sujeto oscila entre reprimir por completo su mundo emocional bajo una máscara de hielo intelectual o ser arrastrado por fantasías, sospechas y secretos no digeridos.",
    psycheVariants: [
      "En clave junguiana, La Sacerdotisa invertida muestra un *Anima* disociada del instinto vital o atrapada en las brumas del astral inferior (Gamaliel). El sujeto oscila entre reprimir por completo su mundo emocional bajo una máscara de hielo intelectual o ser arrastrado por fantasías, sospechas y secretos no digeridos.",
      "Este Arcano diagnostica un bloqueo entre el tercer ojo y el plexo solar: ves muchas cosas en el plano mental, pero te cuesta bajar esa percepción al cuerpo y a las decisiones prácticas.",
      "El silencio pasivo-agresivo está operando como defensa del Ego. Tu psique te exige elegir: o hablás con verdad cálida y frontal, o guardás un silencio genuinamente limpio de rencor.",
      "Recuperar la salud lunar requiere volver a honrar tu primera impresión instintiva sin someterla al interrogatorio neurótico de la razón."
    ],

    lightAndShadow: "En Sombra Activa: Represión emocional, frialdad distante, secretos revelados a destiempo, agendas ocultas de terceros, chismes o desconexión total de la voz interior.",
    lightAndShadowVariants: [
      "En Sombra Activa: Represión emocional, frialdad distante, secretos revelados a destiempo, agendas ocultas de terceros, chismes o desconexión total de la voz interior.",
      "Sombra por Exceso: Muro de hielo, misterio manipulador, aislamiento estéril y secretos que pudren el vínculo. Sombra por Defecto: Indiscreción bocona, superficialidad y sordera intuitiva.",
      "Distorsión de Gimel: El velo roto que deja entrar el ruido del mercado al santuario o la cortina de plomo que no deja salir la luz."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Muros de hielo emocional, silencios tensos que castigan sin explicar qué pasa, secretos guardados o intuiciones que te advierten que alguien no está mostrando toda su verdad. En pareja, es urgente romper el mutismo y hablar sin máscaras; si estás conociendo a alguien, cuidado con las relaciones clandestinas o las promesas a escondidas.",
      work: "Peligro de filtración de información estratégica por hablar de más antes de registrar o lanzar tu obra; o bien, alerta de que en una negociación comercial te están ocultando datos clave de costos, deudas o intenciones. No firmes nada a ciegas hoy.",
      money: "Gastos ocultos, cláusulas financieras tramposas en letra chica o plata inmovilizada en un pozo estancado que no produce frutos por exceso de temor a moverla.",
      spirit: "Ruido mental y exceso de racionalismo que bloquean tus sueños y tu sexto sentido; o bien fascinación por el misterio superficial (superstición) sin ética ni trabajo interior.",
      healthAndEnergy: "Desbalances hormonales o linfáticos, retención de líquidos, somatizaciones digestivas por 'tragar cosas callado' y sueño superficial interrumpido por preocupaciones ocultas."
    },
    domainsVariants: [
      {
        love: "Muros de hielo emocional, silencios tensos que castigan sin explicar qué pasa, secretos guardados o intuiciones que te advierten que alguien no está mostrando toda su verdad. En pareja, es urgente romper el mutismo y hablar sin máscaras; si estás conociendo a alguien, cuidado con las relaciones clandestinas o las promesas a escondidas.",
        work: "Peligro de filtración de información estratégica por hablar de más antes de registrar o lanzar tu obra; o bien, alerta de que en una negociación comercial te están ocultando datos clave de costos, deudas o intenciones. No firmes nada a ciegas hoy.",
        money: "Gastos ocultos, cláusulas financieras tramposas en letra chica o plata inmovilizada en un pozo estancado que no produce frutos por exceso de temor a moverla.",
        spirit: "Ruido mental y exceso de racionalismo que bloquean tus sueños y tu sexto sentido; o bien fascinación por el misterio superficial (superstición) sin ética ni trabajo interior.",
        healthAndEnergy: "Desbalances hormonales o linfáticos, retención de líquidos, somatizaciones digestivas por 'tragar cosas callado' y sueño superficial interrumpido por preocupaciones ocultas."
      },
      {
        love: "Estás ignorando una bandera roja evidente que tu intuición ya te señaló en el primer encuentro. Dejá de justificar al otro con excusas psicológicas y creéle a lo que viste.",
        work: "Parálisis por sobreanálisis en el laboratorio: llevás demasiado tiempo estudiando el mercado o perfeccionando el plano en secreto sin pasar a la acción de La Emperatriz.",
        money: "Cuidado con prestar dinero o asociarte sin papeles claros; lo que hoy queda en un 'entendimiento tácito' mañana será fuente de reclamos.",
        spirit: "Acumulación teórica sin práctica: leer diez grimorios o manuales nuevos para postergar los quince minutos de silencio real frente a tu propia sombra.",
        healthAndEnergy: "Tensión en la nuca, garganta cerrada por palabras retenidas y sensibilidad extrema a la humedad o al frío."
      },
      {
        love: "Indiscreción dañina: contar intimidades de tu relación a terceros (amigos o familiares) está metiendo energías y opiniones ajenas dentro del dormitorio sagrado.",
        work: "Chismes, intrigas de pasillo o competencia desleal que intenta averiguar tu fórmula o tus proveedores; blindá hoy mismo tus contraseñas, recetas y contactos.",
        money: "Auditoría forense urgente: levantá la alfombra de tus cuentas porque hay una fuga silenciosa o un costo mal calculado que está drenando el balance.",
        spirit: "Confundir un miedo proyectado con una profecía: lavá tu mirada antes de interpretar las señales.",
        healthAndEnergy: "Necesidad de drenar el agua estancada del cuerpo mediante sudoración, movimiento físico e hidratación limpia."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Obedecé hoy sin discutir esa primera corazonada fría que tuviste en los primeros tres segundos sobre este asunto, y al mismo tiempo cerrá cualquier fuga de información de tu taller.",
      prohibition: "Prohibido contar hoy tus planes no nacidos a terceros, firmar documentos sin auditar la letra chica o usar el silencio frío para castigar a quien amás.",
      psychomagicAct: "Llená un vaso transparente con agua y echale una cucharada de tierra o ceniza revolviendo hasta que quede turbia; dejalo inmóvil sobre tu mesa durante media hora sin tocarlo hasta ver cómo el sedimento cae solo al fondo, y luego tirá el agua sucia y llenalo de agua cristalina diciendo: 'Dejo de agitar mi mente; veo el fondo del asunto con total claridad'.",
      talismanPhrase: "Limpio el espejo de mi intuición; ni traiciono mi voz interior ni revelo mi semilla antes de hora."
    },
    theAlchemyVariants: [
      {
        command: "Obedecé hoy sin discutir esa primera corazonada fría que tuviste en los primeros tres segundos sobre este asunto, y al mismo tiempo cerrá cualquier fuga de información de tu taller.",
        prohibition: "Prohibido contar hoy tus planes no nacidos a terceros, firmar documentos sin auditar la letra chica o usar el silencio frío para castigar a quien amás.",
        psychomagicAct: "Llená un vaso transparente con agua y echale una cucharada de tierra o ceniza revolviendo hasta que quede turbia; dejalo inmóvil sobre tu mesa durante media hora sin tocarlo hasta ver cómo el sedimento cae solo al fondo, y luego tirá el agua sucia y llenalo de agua cristalina diciendo: 'Dejo de agitar mi mente; veo el fondo del asunto con total claridad'.",
        talismanPhrase: "Limpio el espejo de mi intuición; ni traiciono mi voz interior ni revelo mi semilla antes de hora."
      },
      {
        command: "Si hay un secreto pesado o un silencio congelado que está pudriendo un vínculo o sociedad, encendé la luz hoy y hablalo de frente con serenidad quirúrgica.",
        prohibition: "No sigas pidiendo diez opiniones externas para tapar lo que tu propio vientre ya sabe desde el primer día.",
        psychomagicAct: "Escribí en un papel blanco aquello que sabés intuitivamente pero que te negabas a admitir; doblalo, apoyalo sobre tu frente (tercer ojo) durante un minuto en silencio absoluto y luego guardalo en tu bolsillo como compromiso de no volver a traicionar tu percepción.",
        talismanPhrase: "Mi sexto sentido es ley en mi templo; ninguna máscara engaña a mis aguas en calma."
      },
      {
        command: "Si tu bloqueo era la incubación eterna, rompé el cascarón hoy: sacá tu proyecto del archivo secreto y dale su primera forma tangible en el mundo real.",
        prohibition: "No te refugies en la frialdad distante cuando sientas miedo a ser herido; elegí límites claros en vez de murallas de hielo.",
        psychomagicAct: "Colocá un pequeño espejo boca abajo sobre tu mesa durante diez minutos y luego dalo vuelta limpiándolo con un paño seco mientras te mirás fijo a los ojos declarando: 'Corro el velo del autoengaño; habito en la verdad transparente'.",
        talismanPhrase: "Equilibro el pilar negro y el pilar blanco; mi silencio incuba vida y mi palabra dice verdad."
      }
    ],

    actionOracle: {
      command: "Obedecé hoy sin discutir esa primera corazonada fría que tuviste en los primeros tres segundos sobre este asunto, y al mismo tiempo cerrá cualquier fuga de información de tu taller.",
      prohibition: "Prohibido contar hoy tus planes no nacidos a terceros, firmar documentos sin auditar la letra chica o usar el silencio frío para castigar a quien amás.",
      psychomagicAct: "Llená un vaso transparente con agua y echale una cucharada de tierra o ceniza revolviendo hasta que quede turbia; dejalo inmóvil sobre tu mesa durante media hora sin tocarlo hasta ver cómo el sedimento cae solo al fondo, y luego tirá el agua sucia y llenalo de agua cristalina diciendo: 'Dejo de agitar mi mente; veo el fondo del asunto con total claridad'.",
      talismanPhrase: "Limpio el espejo de mi intuición; ni traiciono mi voz interior ni revelo mi semilla antes de hora."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano II emerge en Sombra: alerta sobre intuiciones desoídas, indiscreciones o información que aún permanece oculta detrás del velo.",
      secondAppearance: "La Sacerdotisa Invertida aparece por segunda vez: seguís ignorando una señal clarísima de tu sexto sentido o hablando de más sobre lo que deberías callar.",
      thirdAppearance: "Tercera comparecencia del Arcano II en Sombra: hay un secreto, una cláusula oculta o un autoengaño emocional que exige ser puesto a la luz hoy mismo. No avances a ciegas.",
      fourthPlusAppearance: "Clausura del Santuario de Gimel: el Oráculo te ordena silencio externo inmediato y honestidad interna brutal. Hasta que no honres lo que tu intuición ya vio, las puertas seguirán cerradas."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "El agua turbia solo se aclara cuando dejás de agitarla: hacé silencio, cerrá las fugas de tu boca y obedecé lo que tu intuición ya vio en el primer segundo.",
    counselVariants: [
      "El agua turbia solo se aclara cuando dejás de agitarla: hacé silencio, cerrá las fugas de tu boca y obedecé lo que tu intuición ya vio en el primer segundo.",
      "Cada vez que traicionás tu primera corazonada para quedar bien con la lógica ajena, pagás el peaje con tu propia paz.",
      "El silencio que incuba una obra es medicina; el silencio que esconde un rencor o una mentira es veneno lento.",
      "No entregues las perlas de tu laboratorio secreto a quienes solo buscan tema de conversación para la tarde.",
      "Antes de firmar en la penumbra, acercá la vela al pergamino: lo que es limpio no teme ser leído dos veces."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "La Corona Lunar en Eclipse Oscuro",
        secret: "Al invertirse la carta, los cuernos lunares de Isis apuntan hacia el abismo y el disco central parece eclipsado por la sombra de la tierra. Simboliza la interferencia del miedo o del racionalismo ansioso sobre el centro Ajna (tercer ojo): el consultante duda de su propia visión interna o proyecta fantasmas sobre la pantalla mental.",
        esotericFormula: "Eclipse del Tercer Ojo = Intuición Negada o Distorsionada por el Miedo",
        meditationPrompt: "¿Cuál fue la primera sensación visceral que tuviste en el cuerpo sobre este tema antes de empezar a justificarlo con la mente?"
      },
      {
        id: "n2",
        x: 18,
        y: 50,
        title: "El Desequilibrio entre Boaz y Jachin",
        secret: "En la inversión del templo, el operador pierde el Pilar del Medio y cae pegado a una de las dos columnas extremas: o se endurece en la columna negra de Boaz (frialdad glacial, juicio mudo y aislamiento), o se desborda en la columna de Jachin sin filtro (indiscreción verbal y pérdida del misterio).",
        esotericFormula: "Pérdida del Pilar Central = Exceso de Hielo (Boaz) o Exceso de Fuga Verbal (Jachin)",
        meditationPrompt: "¿Tu error actual en este vínculo o negocio es estar encerrado en un hielo mudo, o haber abierto la boca de más antes de tiempo?"
      },
      {
        id: "n3",
        x: 50,
        y: 66,
        title: "El Pergamino Oculto y la Letra Chica",
        secret: "El rollo de la Torá esotérica invertido en su regazo advierte sobre conocimientos guardados con egoísmo estéril o sobre información crítica que te está siendo escamoteada en un acuerdo. Lo que está cubierto por el manto en Sombra no es misterio sagrado: es una agenda oculta que debés investigar con lupa antes de dar el sí.",
        esotericFormula: "Pergamino Invertido = Cláusula Oculta o Saber No Aplicado",
        meditationPrompt: "¿Qué dato concreto falta hoy sobre la mesa que necesitás averiguar antes de comprometer tu palabra o tu dinero?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN I (INTEGRACIÓN Y POLIMORFISMO)
// ============================================================================
(function initLunarGrimoireVolume1() {
  window.DATOS_LUNA_1 = DATOS_LUNA_1;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_1.forEach(function (card) {
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
  DATOS_LUNA_1.forEach(function (lunarCard) {
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

  // 3. Inicializar el Motor Polimórfico Lunar (rotación de variantes en sombra + memoria)
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
      /**
       * Resuelve una carta en Sombra (Invertida) rotando dinámicamente sus variantes
       * literarias, psicológicas y alquímicas, y detectando recurrencias kármicas en sombra.
       * @param {Object|number|string} cardOrId - Objeto de carta o ID numérico (0..21)
       * @param {boolean} [recordDraw=true] - Si es true, registra la aparición en localStorage
       */
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
          meaning: pickVariant(baseLunar.meaningVariants, baseLunar.meaning, cursor, 0),
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
  }
})();
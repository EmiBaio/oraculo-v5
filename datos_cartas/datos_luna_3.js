// ============================================================================
// ARCHIVO: datos_luna_3.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN III: ARCANOS VII, VIII, IX y X
// VII • El Carro (Sombra) | VIII • La Fuerza (Sombra) | IX • El Ermitaño (Sombra) | X • La Rueda de la Fortuna (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// 100% Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_3 = [
  // ==========================================================================
  // ARCANO VII INVERTIDO • EL CARRO EN SOMBRA (CHETH INVERTIDA • EL CARRUAJE DESBOCADO)
  // ==========================================================================
  {
    id: 7,
    numeral: "VII",
    name: "El Carro",
    subtitle: "Las Esfinges en Guerra y el Rumbo Perdido",
    isReversed: true,
    palette: {
      primary: "#0284c7",
      secondary: "#9a3412",
      glow: "rgba(2, 132, 199, 0.55)"
    },
    archetype: "chariot",
    shadowPolarity: {
      byExcess: "El Conquistador Ciego: atropello arrogante, velocidad sin brújula, agresividad competitiva que quema puentes, forzar los tiempos ajenos y chocar por impaciencia.",
      byDeficiency: "El Carruaje Empantanado: las dos esfinges tirando en direcciones opuestas hasta partir el eje, pérdida de tracción, encerrarse en el caparazón de Cáncer por miedo a salir a la arena y abandono de la marcha."
    },
    correspondences: {
      element: "Agua Hirviendo sin Cauce / Coraza Agrietada",
      astro: "Cáncer Afligido / Marte en Caída • La Coraza Defensiva o el Impulso Emocional Desbocado",
      hebrewLetter: "Cheth (ח) en Sombra • El Recinto Roto o la Muralla que asfixia al Auriga",
      qliphoth: "Characith • Los Vampiros del Agua Estancada y la Furia Ciega",
      alchemy: "Sublimatio Abortada • El vehículo que se precipita a tierra por exceso de peso astral",
      hermeticAxiom: "De nada sirve duplicar la velocidad de las ruedas cuando el auriga ha perdido de vista la estrella polar; cuando las bestias no reconocen al amo, el carro se vuelve ataúd.",
      jungianComplex: "La Inflación Heroica Destructiva (Ícaro/Faetón) o la Regresión al Caparazón Materno",
      yesNo: "No (frená la marcha de inmediato, alineá tus fuerzas divididas y recalibrá el mapa antes de seguir)",
      keywords: [
        "pérdida de control",
        "velocidad sin rumbo",
        "esfinges en guerra",
        "atropello impulsivo",
        "motor empantanado",
        "desgaste por fricción",
        "coraza agrietada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Soltá el acelerador ahora mismo. Mirá tus ruedas: estás levantando polvareda para sentir que avanzás, pero hace rato que perdiste el norte y tus dos Esfinges se están mordiendo el cuello entre sí. Si no frenás vos a recalibrar, el muro te va a frenar de golpe.",
    oracleVoiceVariants: [
      "Soltá el acelerador ahora mismo. Mirá tus ruedas: estás levantando polvareda para sentir que avanzás, pero hace rato que perdiste el norte y tus dos Esfinges se están mordiendo el cuello entre sí. Si no frenás vos a recalibrar, el muro te va a frenar de golpe.",
      "Como Faetón cuando robó el carro del Sol sin tener el pulso para guiarlo, estás confundiendo empuje nervioso con liderazgo. Querer abrir las puertas a patadas solo demuestra que perdiste la llave del mando.",
      "Tu Esfinge negra quiere ir hacia el placer inmediato y tu Esfinge blanca quiere ir hacia el deber: mientras las dos tiren en ángulo opuesto, vas a quemar el motor sin avanzar un solo metro real.",
      "En mi polo frío, usaste mi coraza de Cáncer no para salir a conquistar el mundo, sino como una cueva de cangrejo donde esconderte cuando la campaña se puso áspera.",
      "¿A quién le querés ganar corriendo tan apurado hacia un horizonte que ni siquiera elegiste vos? Detené el carro, bajate al barro y mirá la brújula."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Carro (Arcano VII) invertido advierte que el vehículo de tu voluntad ha perdido su eje direccional en el Sendero 18 de Cheth. En su manifestación por exceso, retrata el peligro del *Atropello Ciego*: estás intentando forzar un resultado comercial, logístico o afectivo a los empujones, confundiendo prisa ansiosa con determinación y pasando por encima de los tiempos orgánicos. En su manifestación por defecto, diagnostica una *Pérdida de Tracción*: tus contradicciones internas (las dos Esfinges sin gobierno) están tirando en sentidos opuestos, neutralizando tu fuerza y dejándote empantanado a mitad del camino.",
    meaningVariants: [
      "El Carro (Arcano VII) invertido advierte que el vehículo de tu voluntad ha perdido su eje direccional en el Sendero 18 de Cheth. En su manifestación por exceso, retrata el peligro del *Atropello Ciego*: estás intentando forzar un resultado comercial, logístico o afectivo a los empujones, confundiendo prisa ansiosa con determinación y pasando por encima de los tiempos orgánicos. En su manifestación por defecto, diagnostica una *Pérdida de Tracción*: tus contradicciones internas (las dos Esfinges sin gobierno) están tirando en sentidos opuestos, neutralizando tu fuerza y dejándote empantanado a mitad del camino.",
      "Cuando no se hizo el corte limpio en Los Amantes (Arcano VI), El Carro arranca partido en dos en el Arcano VII. Esta carta invertida revela que tu mente consciente dice querer ir hacia una meta, pero tu inconsciente emocional está frenando con los talones o saboteando la marcha porque no confía en el destino elegido.",
      "En la tradición cabalística de la *Merkabah* (el Carruaje Celeste), descender o ascender sin tener sellada la coraza psíquica de la letra Cheth provoca vértigo y desbordamiento: estás permitiendo que las provocaciones externas, el estrés del entorno o las críticas de terceros entren en tu cabina de mando y te hagan dar volantazos.",
      "Alquímicamente, el Arcano VII en sombra es una ebullición violenta que hace saltar la tapa del vaso por exceso de fuego marcial sobre el agua de Cáncer. Si seguís presionando la máquina, el equipo o tu propio cuerpo sin refrigeración ni estrategia, vas derecho al recalentamiento.",
      "En el plano práctico de viajes, envíos, vehículos y campañas comerciales, esta inversión señala demoras logísticas, desperfectos mecánicos o rutas mal trazadas que te obligan a hacer un alto técnico inmediato para revisar las ruedas antes de salir a la ruta."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, El Carro invertido desnuda el *Complejo de Faetón / Ícaro* (la inflación heroica del Yo que corre sin parar porque siente que si se detiene un segundo se hunde en el vacío) o, en su polo opuesto, la fijación regresiva en el caparazón materno que teme salir a competir al mundo adulto.",
    theWoundVariants: [
      "En la psicología profunda de Jung, El Carro invertido desnuda el *Complejo de Faetón / Ícaro* (la inflación heroica del Yo que corre sin parar porque siente que si se detiene un segundo se hunde en el vacío) o, en su polo opuesto, la fijación regresiva en el caparazón materno que teme salir a competir al mundo adulto.",
      "La adicción a la urgencia como anestesia emocional: mantenés tu agenda y tu cabeza a doscientos kilómetros por hora en batallas externas para no tener que quedarte quieto en silencio y escuchar el dolor o el vacío que llevás adentro del pecho.",
      "La herida del Guerrero Reactivo: confundir vulnerabilidad con derrota, lo que te lleva a ponerte la armadura pesada incluso frente a quienes te aman o a atacar primero por miedo a ser herido.",
      "El trauma de la Dirección Prestada: estar gastando tu sangre y tus mejores años en conducir un carro hacia una meta que eligió tu familia o tu orgullo pasado, pero que ya no te importa en lo más mínimo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El gran autoengaño del Auriga en sombra es decirte: *'Si empujo un poco más fuerte y duermo menos horas, esto se destraba'*, negándote a ver que cuando las ruedas están enterradas en el barro, acelerar a fondo solo te hunde hasta el chasis.",
    theIllusionVariants: [
      "El gran autoengaño del Auriga en sombra es decirte: *'Si empujo un poco más fuerte y duermo menos horas, esto se destraba'*, negándote a ver que cuando las ruedas están enterradas en el barro, acelerar a fondo solo te hunde hasta el chasis.",
      "El espejismo del movimiento: confundir estar ocupado todo el día apagando incendios con estar avanzando estratégicamente hacia tu libertad financiera o espiritual.",
      "La ilusión de que 'el otro es el obstáculo': echarle la culpa al mercado, al socio o a la pareja de tu estancamiento, cuando son tus propias dos esfinges internas las que tiran para lados distintos.",
      "Creer que retroceder un metro para tomar envión o cambiar de calle es 'fracasar': el estratega real sabe cuándo replegar sus tropas para no perder el ejército en una emboscada inútil."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, El Carro invertido indica que el Yo consciente ha perdido las riendas invisibles sobre las pulsiones contradictorias del inconsciente. La energía se gasta en fricción interna, ansiedad motora, irritabilidad al volante o sensación de estar corriendo en una cinta fija.",
    psycheVariants: [
      "Psicológicamente, El Carro invertido indica que el Yo consciente ha perdido las riendas invisibles sobre las pulsiones contradictorias del inconsciente. La energía se gasta en fricción interna, ansiedad motora, irritabilidad al volante o sensación de estar corriendo en una cinta fija.",
      "Tu coraza psíquica (Cheth) tiene una fisura: estás absorbiendo el nerviosismo ajeno o reaccionando a cada estímulo externo con el reflejo de lucha o huida.",
      "El síndrome del quemado (*burnout*) del conquistador: el cuerpo te está pidiendo a gritos que desenganches los caballos una noche antes de que el sistema nervioso corte la corriente por la fuerza.",
      "Recuperar el mando del Arcano VII exige detener la carrera ciega, alinear el deseo inconsciente con el objetivo consciente y volver a mirar una sola estrella."
    ],

    lightAndShadow: "En Sombra Activa: Pérdida de control, agresividad impulsiva, estancamiento por fuerzas divididas, prisa contraproducente, desperfectos en viajes/vehículos o rumbo extraviado.",
    lightAndShadowVariants: [
      "En Sombra Activa: Pérdida de control, agresividad impulsiva, estancamiento por fuerzas divididas, prisa contraproducente, desperfectos en viajes/vehículos o rumbo extraviado.",
      "Sombra por Exceso: Atropello tiránico, velocidad temeraria, competencia feroz sin ética y choque frontal. Sombra por Defecto: Parálisis del motor, cobardía ante el avance y dispersión de fuerzas.",
      "Distorsión de Cheth: El carruaje que corre sin auriga o la coraza que se hunde por su propio peso."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Querer forzar los tiempos emocionales del otro a los empujones, choques de carácter por ver quién lleva el volante, o avanzar en una relación sin saber hacia dónde van. Si están en pareja, dejen de competir entre ustedes como rivales y vuelvan a tirar para el mismo lado; si estás conquistando a alguien, bajá la ansiedad invasiva porque estás espantando lo que querés atraer.",
      work: "Proyectos trabados por falta de dirección unificada, demoras en envíos o logística, y desgaste extremo por exceso de competencia mal enfocada. Frená la expansión desordenada hoy mismo: antes de salir a conquistar clientes nuevos, arreglá el motor interno de tu operación.",
      money: "Gastos imprevistos en reparaciones de vehículos, maquinaria o envíos; pérdidas por decisiones financieras tomadas en caliente y a las corridas sin mirar el mapa completo.",
      spirit: "Intentar domar el alma mediante la violencia de la voluntad egoica en lugar de escuchar el ritmo del espíritu; pérdida del centro inmóvil en medio del ruido diario.",
      healthAndEnergy: "Gastritis o acidez estomacal por tragar estrés en marcha (Cáncer), agotamiento adrenal, contracturas en el pecho/esternón y riesgo de accidentes menores o golpes por andar apurado."
    },
    domainsVariants: [
      {
        love: "Querer forzar los tiempos emocionales del otro a los empujones, choques de carácter por ver quién lleva el volante, o avanzar en una relación sin saber hacia dónde van. Si están en pareja, dejen de competir entre ustedes como rivales y vuelvan a tirar para el mismo lado; si estás conquistando a alguien, bajá la ansiedad invasiva porque estás espantando lo que querés atraer.",
        work: "Proyectos trabados por falta de dirección unificada, demoras en envíos o logística, y desgaste extremo por exceso de competencia mal enfocada. Frená la expansión desordenada hoy mismo: antes de salir a conquistar clientes nuevos, arreglá el motor interno de tu operación.",
        money: "Gastos imprevistos en reparaciones de vehículos, maquinaria o envíos; pérdidas por decisiones financieras tomadas en caliente y a las corridas sin mirar el mapa completo.",
        spirit: "Intentar domar el alma mediante la violencia de la voluntad egoica en lugar de escuchar el ritmo del espíritu; pérdida del centro inmóvil en medio del ruido diario.",
        healthAndEnergy: "Gastritis o acidez estomacal por tragar estrés en marcha (Cáncer), agotamiento adrenal, contracturas en el pecho/esternón y riesgo de accidentes menores o golpes por andar apurado."
      },
      {
        love: "Uno de los dos quiere correr hacia el compromiso y el otro tiene puesto el freno de mano. No sigas tirando de la soga sin antes sentarte a alinear qué busca cada uno.",
        work: "Desorganización en la cadena de distribución o en el cronograma de desarrollo: estás queriendo lanzar la carrocería cuando todavía no ajustaste los tornillos del chasis.",
        money: "Frená cualquier compra impulsiva de equipamiento o expansión endeudada hoy; consolidá primero tu caja actual.",
        spirit: "Olvidar que el verdadero Auriga (el Sí-Mismo) no se mueve ni suda: si perdiste la paz interior, perdiste el mando del carro.",
        healthAndEnergy: "Cuidado con los reflejos al conducir o manejar herramientas hoy; bajá diez cambios la velocidad física y mental."
      },
      {
        love: "Coraza defensiva que impide la ternura: tratar a tu pareja como a un soldado de tu regimiento en vez de abrirle el santuario de tu pecho.",
        work: "Fricción entre socios o áreas de trabajo que tiran para lados opuestos; se necesita una reunión de comando inmediata para fijar un único objetivo trimestral.",
        money: "El dinero se escurre por falta de control en los costos de movimiento, fletes o tiempos muertos.",
        spirit: "Purificar la ambición: preguntarte si esta conquista sirve a tu evolución real o solo alimenta la vanidad del personaje.",
        healthAndEnergy: "Atención a las rodillas, piernas y presión ocular por estrés competitivo; hacé una pausa de quietud absoluta al mediodía."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Clavá los frenos hoy durante dos horas, revisá la mecánica real de tu proyecto o vehículo, y unificá tus dos fuerzas internas en un solo objetivo antes de volver a mover una rueda.",
      prohibition: "Prohibido acelerar hoy cuando algo se traba, discutir en el tránsito o en negociaciones, o forzar a otra persona a seguir tu ritmo por la fuerza.",
      psychomagicAct: "Sentate en silencio frente a tu mesa o al volante de tu vehículo apagado, apoyá tu mano izquierda sobre un objeto oscuro y tu mano derecha sobre un objeto claro (las dos Esfinges); deslizá ambos objetos lentamente hasta juntarlos en el centro exacto frente a tu pecho mientras decís: 'Detengo la guerra de mis opuestos; recalibro mi norte y recupero el mando sereno'.",
      talismanPhrase: "Suelto la prisa ciega; desde mi centro inmóvil mis dos esfinges vuelven a tirar en paz hacia la misma estrella."
    },
    theAlchemyVariants: [
      {
        command: "Clavá los frenos hoy durante dos horas, revisá la mecánica real de tu proyecto o vehículo, y unificá tus dos fuerzas internas en un solo objetivo antes de volver a mover una rueda.",
        prohibition: "Prohibido acelerar hoy cuando algo se traba, discutir en el tránsito o en negociaciones, o forzar a otra persona a seguir tu ritmo por la fuerza.",
        psychomagicAct: "Sentate en silencio frente a tu mesa o al volante de tu vehículo apagado, apoyá tu mano izquierda sobre un objeto oscuro y tu mano derecha sobre un objeto claro (las dos Esfinges); deslizá ambos objetos lentamente hasta juntarlos en el centro exacto frente a tu pecho mientras decís: 'Detengo la guerra de mis opuestos; recalibro mi norte y recupero el mando sereno'.",
        talismanPhrase: "Suelto la prisa ciega; desde mi centro inmóvil mis dos esfinges vuelven a tirar en paz hacia la misma estrella."
      },
      {
        command: "Revisá hoy la presión de tus neumáticos, el estado de tus herramientas o la logística de tus entregas: el bloqueo se destraba ajustando la tuerca física olvidada.",
        prohibition: "No salgas a abrir mercados nuevos hoy mientras tengas entregas o tareas atrasadas sin cumplir en tu base actual.",
        psychomagicAct: "Caminá durante cinco minutos por tu casa o taller a la mitad exacta de tu velocidad habitual, respirando en cuatro tiempos largos por la nariz, para reprogramar tu sistema nervioso y sacarlo del modo de atropello.",
        talismanPhrase: "No corro por ansiedad; avanzo con el paso pesado, exacto e invencible del Rey."
      },
      {
        command: "Sellá hoy tu coraza psíquica (Cheth): cerrá los oídos a las provocaciones de competidores o críticos y concentrá toda tu tracción en tu propio carril.",
        prohibition: "No tomes ninguna decisión estratégica mientras sientas ardor en el estómago o furia en la garganta.",
        psychomagicAct: "Dibujá una brújula con una flecha dorada apuntando firme hacia el Norte en una tarjeta pequeña, escribí en la punta de la flecha tu única meta prioritaria de este mes y pegala frente a tu lugar de trabajo.",
        talismanPhrase: "Mi coraza está sellada y mi brújula está fija; ningún viento lateral desvía mi carro."
      }
    ],

    actionOracle: {
      command: "Clavá los frenos hoy durante dos horas, revisá la mecánica real de tu proyecto o vehículo, y unificá tus dos fuerzas internas en un solo objetivo antes de volver a mover una rueda.",
      prohibition: "Prohibido acelerar hoy cuando algo se traba, discutir en el tránsito o en negociaciones, o forzar a otra persona a seguir tu ritmo por la fuerza.",
      psychomagicAct: "Sentate en silencio frente a tu mesa o al volante de tu vehículo apagado, apoyá tu mano izquierda sobre un objeto oscuro y tu mano derecha sobre un objeto claro (las dos Esfinges); deslizá ambos objetos lentamente hasta juntarlos en el centro exacto frente a tu pecho mientras decís: 'Detengo la guerra de mis opuestos; recalibro mi norte y recupero el mando sereno'.",
      talismanPhrase: "Suelto la prisa ciega; desde mi centro inmóvil mis dos esfinges vuelven a tirar en paz hacia la misma estrella."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano VII aparece invertido en tu lectura: alerta de fricción interna, prisa sin dirección o necesidad de frenar a revisar el motor.",
      secondAppearance: "El Carro en Sombra sale por segunda vez: seguís empujando a la fuerza algo que pide recalibrar el rumbo. Si no aflojás el acelerador, vas a fundir las bielas.",
      thirdAppearance: "Tercera comparecencia del Arcano VII Invertido: peligro inminente de choque de egos o estancamiento total por división de fuerzas. Detené la marcha hoy mismo.",
      fourthPlusAppearance: "Orden de detención de Cheth: el Oráculo te quita las llaves de la prisa. No darás un paso más hasta que reconcilies a tus dos esfinges y recuperes la calma del Auriga."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Soltá el acelerador por un instante: la velocidad más alta del mundo no sirve de nada si hace dos leguas que doblaste en la esquina equivocada.",
    counselVariants: [
      "Soltá el acelerador por un instante: la velocidad más alta del mundo no sirve de nada si hace dos leguas que doblaste en la esquina equivocada.",
      "Cuando los dos caballos del carro pelean entre sí, el enemigo no necesita disparar una sola flecha para vencerte.",
      "No confundas el temblor de la fiebre apurada con el empuje sereno de la determinación.",
      "A veces la maniobra más audaz de un gran comandante es ordenar un alto en el campamento para afilar las espadas y mirar el mapa.",
      "Domá primero tu propia impaciencia en el pecho y el camino entero volverá a abrirse bajo tus ruedas."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 35,
        title: "Urim y Thummim en Discordia (La Brújula Rota)",
        secret: "Al invertirse la coraza del Auriga, las dos crecientes lunares de los hombros (la razón y la intuición) apuntan hacia abajo en desacuerdo, mientras el Cuadrado de la Voluntad en el pecho pierde su plomada. Simboliza al líder que actúa por impulso emocional reactivo habiendo perdido el juicio estratégico.",
        esotericFormula: "Razón ≠ Instinto = Volantazo Ciego en Plena Marcha",
        meditationPrompt: "¿En qué área de tu semana estás corriendo a toda velocidad sin haberte detenido a preguntar si ese es realmente el destino correcto?"
      },
      {
        id: "n2",
        x: 50,
        y: 65,
        title: "El Disco Alado Invertido (La Gravedad del Ego)",
        secret: "En Sombra, las alas de Horus en el chasis quedan aplastadas bajo el peso del cubo de piedra. Indica que la ambición material pesada, el orgullo competitivo o los problemas mecánicos/logísticos están impidiendo que el proyecto levante vuelo.",
        esotericFormula: "Piedra sobre Alas = Pesadez Operativa y Fricción Material",
        meditationPrompt: "¿Qué falla logística, mecánica o de método está frenando hoy la tracción de tu trabajo diario?"
      },
      {
        id: "n3",
        x: 24,
        y: 80,
        title: "Las Dos Esfinges Desbocadas en Sentidos Opuestos",
        secret: "Sin la gravedad mental del Auriga despierto, la Esfinge negra (el deseo visceral y la severidad) y la Esfinge blanca (el deber idealista y la gracia) tiran cada una para su costado hasta amenazar con partir el eje del carro. Es el retrato exacto del agotamiento por contradicción interna.",
        esotericFormula: "Esfinge Negra ↔ Esfinge Blanca = Fuerza Neutralizada (Suma Cero)",
        meditationPrompt: "¿Cuáles son las dos fuerzas o deseos opuestos dentro de vos que hoy se están anulando mutuamente?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO VIII INVERTIDO • LA FUERZA EN SOMBRA (TETH INVERTIDA • EL LEÓN SUELTO O ENJAULADO)
  // ==========================================================================
  {
    id: 8,
    numeral: "VIII",
    name: "La Fuerza",
    subtitle: "El Rugido Desbocado y la Llama Extenuada",
    isReversed: true,
    palette: {
      primary: "#c2410c",
      secondary: "#713f12",
      glow: "rgba(194, 65, 12, 0.58)"
    },
    archetype: "strength",
    shadowPolarity: {
      byExcess: "La Fiera sin Bozal: estallidos de ira volcánica, soberbia herida de Leo, abuso de fuerza bruta, impulsividad sexual o pasional que quema la obra y tiranía del orgullo.",
      byDeficiency: "El León Castrado y el Fuego Apagado: agotamiento vital profundo (burnout), miedo a la propia potencia instintiva, flaqueza de ánimo ante la presión, cobardía moral y represión que enferma el cuerpo."
    },
    correspondences: {
      element: "Fuego Sulfuroso Descontrolado o Brasa Cenicosa",
      astro: "Sol Afligido en Leo / Marte en Cortocircuito • La Inflación del Orgullo o el Colapso Cardíaco-Vital",
      hebrewLetter: "Teth (ט) en Sombra • La Serpiente Kundalini que muerde al operador o duerme congelada",
      qliphoth: "Shalicu • La Crueldad Salvaje y la Bajeza del Instinto sin Corazón",
      alchemy: "Calcinatio Destructiva • El fuego excesivo del horno que rompe el crisol de vidrio y quema la tintura",
      hermeticAxiom: "Quien reprime a su león por cobardía se queda sin sangre para la batalla; quien suelta al león por rabia es devorado por su propia bestia.",
      jungianComplex: "La Sombra Instintiva Disociada (Dr. Jekyll y Mr. Hyde) y la Fatiga Crónica por Represión",
      yesNo: "No en este estado (recuperá primero tu templanza y tu reserva vital antes de dar la batalla)",
      keywords: [
        "desborde pasional",
        "agotamiento vital",
        "ira explosiva",
        "orgullo herido",
        "fuego reprimido",
        "flaqueza de ánimo",
        "león desbocado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirá mis manos apartándose de las fauces del león: o dejaste que la bestia de tu orgullo y tu rabia muerda a quienes tenés cerca, o encerraste tu propio fuego en un sótano bajo siete llaves y ahora te preguntás por qué no tenés fuerzas ni para levantarte de la cama.",
    oracleVoiceVariants: [
      "Mirá mis manos apartándose de las fauces del león: o dejaste que la bestia de tu orgullo y tu rabia muerda a quienes tenés cerca, o encerraste tu propio fuego en un sótano bajo siete llaves y ahora te preguntás por qué no tenés fuerzas ni para levantarte de la cama.",
      "Gritar, amenazar o mostrar los colmillos no es tener carácter: es la confesión pública de que perdiste el dominio sobre tu propio centro.",
      "Llevás meses sosteniendo el techo sobre tus hombros sin pedir ayuda y sin permitirte un solo día de descanso real. Hasta el sol de Leo necesita ocultarse de noche para no secar la tierra.",
      "Le tenés miedo a tu propia potencia. Te achicás, pedís disculpas por brillar y escondés tus garras para que los mediocres no se sientan incómodos a tu lado.",
      "Cuando reprimís tu deseo legítimo y tu enojo justo tragándotelos en silencio, el león no desaparece: se da vuelta y empieza a comerte las entrañas desde adentro."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Fuerza (Arcano VIII) invertida revela una ruptura en el pacto sagrado entre la Conciencia (la Doncella) y el Instinto (el León Solar) a lo largo del Sendero 19 de la letra Teth. En su polo activo o sulfuroso, advierte que las pasiones crudas —la ira, los celos, la impaciencia feroz o el orgullo herido de Leo— han tomado el volante, llevándote a reaccionar con fuerza bruta allí donde se requería guante de seda y alta diplomacia. En su polo pasivo o deficitario, diagnostica un vaciamiento de la batería bioeléctrica: cansancio moral, duda sobre tu propio valor, miedo a enfrentar un conflicto necesario o represión crónica de tu fuego vital.",
    meaningVariants: [
      "La Fuerza (Arcano VIII) invertida revela una ruptura en el pacto sagrado entre la Conciencia (la Doncella) y el Instinto (el León Solar) a lo largo del Sendero 19 de la letra Teth. En su polo activo o sulfuroso, advierte que las pasiones crudas —la ira, los celos, la impaciencia feroz o el orgullo herido de Leo— han tomado el volante, llevándote a reaccionar con fuerza bruta allí donde se requería guante de seda y alta diplomacia. En su polo pasivo o deficitario, diagnostica un vaciamiento de la batería bioeléctrica: cansancio moral, duda sobre tu propio valor, miedo a enfrentar un conflicto necesario o represión crónica de tu fuego vital.",
      "En el Árbol de la Vida, el Sendero de Teth equilibra horizontalmente la Misericordia (Chesed) con el Rigor Marcial (Geburah). Cuando este canal se invierte, caés en uno de los dos abismos: una blandura complaciente que se deja pisotear por temor al roce (exceso de Chesed sin columna), o una crueldad explosiva que destruye en cinco minutos de furia lo que costó cinco años construir (exceso de Geburah sin corazón).",
      "Alquímicamente, el Arcano VIII en sombra es el fallo en el régimen del fuego (*Regimen Ignis*): los antiguos maestros enseñaban que si el alquimista se impacienta y sube la llama del atanor al máximo para apurar la obra, el vidrio estalla y el León Rojo se calcina en ceniza negra; y si deja apagar la brasa por descuido, la materia se congela y muere.",
      "Cuando esta carta sale invertida en medio de una prueba larga, el Oráculo no te juzga: te avisa con compasión quirúrgica que estás al límite de la fatiga de materiales. No sos una máquina de hierro; sos un ser vivo que hoy necesita retirar las manos de la trinchera, respirar hondo y recuperar el pulso antes de volver al ruedo.",
      "En el plano de la seducción y el liderazgo, La Fuerza invertida señala que estás intentando imponer respeto por intimidación o vanidad en lugar de irradiar la calma magnética de quien no necesita demostrar nada."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica junguiana, La Fuerza invertida expone la *Castración Simbólica del Instinto*: te enseñaron temprano que tu fuego —tu rabia defensiva, tu sexualidad potente, tu ambición de brillar— era 'peligroso o malo'. Para ser aceptado, encerraste al león en la jaula del inconsciente, pagando el precio con fatiga crónica, depresión o estallidos imprevistos cuando la jaula cede.",
    theWoundVariants: [
      "En la clínica junguiana, La Fuerza invertida expone la *Castración Simbólica del Instinto*: te enseñaron temprano que tu fuego —tu rabia defensiva, tu sexualidad potente, tu ambición de brillar— era 'peligroso o malo'. Para ser aceptado, encerraste al león en la jaula del inconsciente, pagando el precio con fatiga crónica, depresión o estallidos imprevistos cuando la jaula cede.",
      "El complejo de Sansón o del *Héroe Agotado*: creer que tu único valor para los demás reside en ser 'el fuerte que nunca se quiebra ni necesita nada', sosteniendo las columnas del templo en soledad hasta que tus rodillas tiemblan.",
      "La herida narcisista de Leo en sombra: detrás de cada arranque de soberbia, celos o furia desmedida hay siempre un niño asustado que sintió que no lo miraban o que le faltaban el respeto.",
      "El pánico a tu propia Sombra Salvaje: temer tanto lo que serías capaz de hacer si te enojaras de verdad, que preferís anestesiarte y ceder tu territorio antes de mostrar un solo colmillo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño del Arcano VIII invertido tiene dos máscaras: cuando reprimís tu fuego, te decís *'Soy pacífico y prudente'*, cuando en realidad tenés miedo de defender tu lugar; cuando estallás, te decís *'Yo soy frontal y digo las cosas en la cara'*, cuando en realidad sos esclavo de tu incontinencia emocional.",
    theIllusionVariants: [
      "El autoengaño del Arcano VIII invertido tiene dos máscaras: cuando reprimís tu fuego, te decís *'Soy pacífico y prudente'*, cuando en realidad tenés miedo de defender tu lugar; cuando estallás, te decís *'Yo soy frontal y digo las cosas en la cara'*, cuando en realidad sos esclavo de tu incontinencia emocional.",
      "El espejismo de la 'Reserva Infinita': convencerte de que tu cuerpo puede seguir tirando de la cuerda sin descanso, sin sol y sin pausa recreativa sin pasar factura.",
      "Confundir orgullo con dignidad: el orgullo herido hace escándalo y rompe vínculos valiosos por una tontería; la dignidad real permanece en calma porque su valor no depende del aplauso ajeno.",
      "Creer que pedir ayuda o admitir cansancio te quita autoridad: solo el líder seguro de su corona puede decir 'hoy descanso' sin temor a ser destronado."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, este Arcano invertido diagnostica una guerra entre la máscara moralista del Yo y la bestia instintiva del Ello. O bien la represión excesiva te está dejando sin líbido ni empuje vital (apatía/burnout), o bien las pulsiones crudas irrumpen sin sublimar en forma de ira, celos o compulsiones.",
    psycheVariants: [
      "Psicológicamente, este Arcano invertido diagnostica una guerra entre la máscara moralista del Yo y la bestia instintiva del Ello. O bien la represión excesiva te está dejando sin líbido ni empuje vital (apatía/burnout), o bien las pulsiones crudas irrumpen sin sublimar en forma de ira, celos o compulsiones.",
      "Tu centro cardíaco y tu plexo solar están desconectados: sentís el fuego en el estómago como bronca o ansiedad, pero no lográs subirlo al pecho para transformarlo en coraje sereno.",
      "La inseguridad está operando disfrazada de bravuconería o de retraimiento. Volvé a tocar tu propia fuerza real recordando las tormentas que ya superaste.",
      "Sanar el Sendero de Teth exige perdonar tu cansancio humano y reconciliarte con tu animal interior sin látigo ni miedo."
    ],

    lightAndShadow: "En Sombra Activa: Descontrol emocional, ira explosiva o contenida, orgullo herido, agotamiento vital profundo (burnout), inseguridad ante un desafío o abuso de fuerza.",
    lightAndShadowVariants: [
      "En Sombra Activa: Descontrol emocional, ira explosiva o contenida, orgullo herido, agotamiento vital profundo (burnout), inseguridad ante un desafío o abuso de fuerza.",
      "Sombra por Exceso: Furia leonina, celos abrasadores, soberbia tiránica e impaciencia violenta. Sombra por Defecto: Desfallecimiento del ánimo, cobardía, líbido apagada y fatiga crónica.",
      "Distorsión de Teth: La serpiente de fuego que quema los nervios por no encontrar el canal del corazón."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Reacciones de orgullo infantil, escenas de celos, impaciencia que lastima con un rugido de más, o bien la sensación agotadora de estar sosteniendo el peso emocional de la pareja en total soledad. No intentes ganar una discusión afectiva por demolición; hoy gana quien baja las garras y habla desde la vulnerabilidad honesta.",
      work: "Riesgo alto de *burnout* (agotamiento físico y mental por sobreesfuerzo prolongado) o pérdida de un negocio importante por reaccionar en caliente ante un cliente o socio difícil. Si sentís que perdiste la motivación o que dudás de tu capacidad técnica justo antes de un desafío grande, descansá hoy y retomá mañana con la cabeza fría.",
      money: "Gastos hechos por pura ostentación leonina (aparentar más fuerza financiera de la que hay en caja) o pérdidas por flaqueza a la hora de cobrar y defender tu margen frente a compradores agresivos.",
      spirit: "Pelea ascética contra tu propia biología: juzgar tus deseos, tu pasión o tu cansancio con dureza cruel en lugar de integrarlos con amor alquímico.",
      healthAndEnergy: "Fatiga del músculo cardíaco y suprarrenal, taquicardias por estrés, contracturas dorsales severas, inflamaciones agudas o baja de defensas por agotamiento del fuego vital."
    },
    domainsVariants: [
      {
        love: "Reacciones de orgullo infantil, escenas de celos, impaciencia que lastima con un rugido de más, o bien la sensación agotadora de estar sosteniendo el peso emocional de la pareja en total soledad. No intentes ganar una discusión afectiva por demolición; hoy gana quien baja las garras y habla desde la vulnerabilidad honesta.",
        work: "Riesgo alto de *burnout* (agotamiento físico y mental por sobreesfuerzo prolongado) o pérdida de un negocio importante por reaccionar en caliente ante un cliente o socio difícil. Si sentís que perdiste la motivación o que dudás de tu capacidad técnica justo antes de un desafío grande, descansá hoy y retomá mañana con la cabeza fría.",
        money: "Gastos hechos por pura ostentación leonina (aparentar más fuerza financiera de la que hay en caja) o pérdidas por flaqueza a la hora de cobrar y defender tu margen frente a compradores agresivos.",
        spirit: "Pelea ascética contra tu propia biología: juzgar tus deseos, tu pasión o tu cansancio con dureza cruel en lugar de integrarlos con amor alquímico.",
        healthAndEnergy: "Fatiga del músculo cardíaco y suprarrenal, taquicardias por estrés, contracturas dorsales severas, inflamaciones agudas o baja de defensas por agotamiento del fuego vital."
      },
      {
        love: "Pasión desbordada que confunde intensidad dramática con amor, o enfriamiento erótico nacido del cansancio y la rutina pesada. Volvé a encender el juego sin exigencias.",
        work: "Querer resolver un problema delicado de relaciones públicas o de precisión artesanal a los martillazos: si forzás la pieza hoy, la vas a quebrar.",
        money: "No entres en pujas financieras por orgullo ni intentes 'recuperar rápido' una pérdida apostando el doble en caliente.",
        spirit: "Comprender que la verdadera fortaleza del espíritu incluye saber arrodillarse a descansar junto al manantial cuando el cuerpo lo pide.",
        healthAndEnergy: "No sobreentrenes hoy con cargas máximas si dormiste mal; tu sistema nervioso central necesita recuperación activa, magnesio y sol suave."
      },
      {
        love: "Miedo a mostrar tu verdadero deseo o tu carácter por temor a asustar al otro: quien te ama de verdad no quiere un gato doméstico tibio, quiere a tu león completo y consciente.",
        work: "Liderazgo debilitado por vacilación o por gritos: recuperá tu autoridad silenciosa ordenando primero tu propio estado de ánimo antes de entrar al taller.",
        money: "Falta de garra para reclamar lo que te corresponde por derecho; plantate con firmeza serena y cobrá tu trabajo.",
        spirit: "Transformar la bronca estancada en combustible sagrado: no te tragues el veneno ni lo escupas sobre otros; quemalo en el atanor de tu obra.",
        healthAndEnergy: "Cuidá la columna media (vértebras dorsales) y la presión arterial; respirá abriendo las costillas."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Si estás al borde del estallido, cerrá la boca durante diez minutos y descargá el fuego físicamente antes de hablar; si estás agotado o achicado, date hoy un descanso sagrado y recuperá el orgullo de tu linaje.",
      prohibition: "Prohibido tomar decisiones hoy por orgullo herido, levantar la voz para intimidar o castigarte por sentir cansancio físico.",
      psychomagicAct: "Apretá ambos puños con toda tu fuerza durante treinta segundos concentrando allí toda tu rabia, miedo o frustración hasta que tiemblen los músculos; luego abrí las manos muy lentamente como si acariciaras el lomo de un león invisible y apoyá ambas palmas tibias sobre tu corazón diciendo: 'Amanso mi furia y despierto mi coraje; mi fuego y mi paz son uno'.",
      talismanPhrase: "No me quiebro por cansancio ni estallo por orgullo; gobierno mi fuego desde la calma real de mi corazón."
    },
    theAlchemyVariants: [
      {
        command: "Si estás al borde del estallido, cerrá la boca durante diez minutos y descargá el fuego físicamente antes de hablar; si estás agotado o achicado, date hoy un descanso sagrado y recuperá el orgullo de tu linaje.",
        prohibition: "Prohibido tomar decisiones hoy por orgullo herido, levantar la voz para intimidar o castigarte por sentir cansancio físico.",
        psychomagicAct: "Apretá ambos puños con toda tu fuerza durante treinta segundos concentrando allí toda tu rabia, miedo o frustración hasta que tiemblen los músculos; luego abrí las manos muy lentamente como si acariciaras el lomo de un león invisible y apoyá ambas palmas tibias sobre tu corazón diciendo: 'Amanso mi furia y despierto mi coraje; mi fuego y mi paz son uno'.",
        talismanPhrase: "No me quiebro por cansancio ni estallo por orgullo; gobierno mi fuego desde la calma real de mi corazón."
      },
      {
        command: "Bajá la llama del horno hoy: reducí tu carga operativa un treinta por ciento durante veinticuatro horas para que tu batería cardíaca y nerviosa se recargue por completo.",
        prohibition: "No entres en ninguna pelea de egos donde te provoquen para hacerte perder los estribos; tu silencio sonriente hoy es tu victoria.",
        psychomagicAct: "Poné una gota de miel en la punta de tu lengua antes de una conversación difícil hoy, recordándole a tu cerebro reptiliano que la dulzura firme de La Fuerza abre puertas que el colmillo rompe.",
        talismanPhrase: "Mi mansedumbre es poder soberano; ningún rugido ajeno altera mi pulso."
      },
      {
        command: "Si venías reprimiendo tu ambición o tu voz por timidez, ocupá hoy el centro de la escena sin pedir disculpas y defendé tu valor con la frente alta.",
        prohibition: "No confundas aguantar maltratos con tener fortaleza; poné el límite con la serenidad de una reina.",
        psychomagicAct: "Salí diez minutos al sol directo hoy (o encendé una luz cálida dorada frente a tu pecho), erguí la columna dorsal y respirá imaginando que inhalás oro líquido hacia el corazón.",
        talismanPhrase: "Despierto al León Solar de mi pecho; mi vitalidad renace limpia e invencible."
      }
    ],

    actionOracle: {
      command: "Si estás al borde del estallido, cerrá la boca durante diez minutos y descargá el fuego físicamente antes de hablar; si estás agotado o achicado, date hoy un descanso sagrado y recuperá el orgullo de tu linaje.",
      prohibition: "Prohibido tomar decisiones hoy por orgullo herido, levantar la voz para intimidar o castigarte por sentir cansancio físico.",
      psychomagicAct: "Apretá ambos puños con toda tu fuerza durante treinta segundos concentrando allí toda tu rabia, miedo o frustración hasta que tiemblen los músculos; luego abrí las manos muy lentamente como si acariciaras el lomo de un león invisible y apoyá ambas palmas tibias sobre tu corazón diciendo: 'Amanso mi furia y despierto mi coraje; mi fuego y mi paz son uno'.",
      talismanPhrase: "No me quiebro por cansancio ni estallo por orgullo; gobierno mi fuego desde la calma real de mi corazón."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano VIII aparece en Sombra: alerta sobre desgaste de tu reserva vital o peligro de reaccionar con orgullo e impaciencia.",
      secondAppearance: "La Fuerza Invertida sale por segunda vez: estás tirando demasiado de la cuerda de tu cuerpo o dejando que el león de la bronca te domine. Regulá el fuego hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano VIII en Sombra: advertencia crítica de agotamiento (*burnout*) o de ruptura por un impulso destemplado. Descansá y bajá un cambio de inmediato.",
      fourthPlusAppearance: "Intervención solar de Teth: el Oráculo te ordena soltar la carga pesada ahora mismo. Tu corazón exige reposo, dulzura propia y reconciliación con tu instinto antes de seguir."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "No te castigues por sentir cansancio ni quieras abrir a patadas lo que se abre con caricia: respirá hondo, cuidá tu cuerpo y recordá que tu fuego sigue intacto bajo la ceniza.",
    counselVariants: [
      "No te castigues por sentir cansancio ni quieras abrir a patadas lo que se abre con caricia: respirá hondo, cuidá tu cuerpo y recordá que tu fuego sigue intacto bajo la ceniza.",
      "El que grita para asustar al león solo logra que el león salte primero.",
      "Hasta la espada de mejor acero se parte si la golpeás en frío sin haberla templado antes en la fragua del descanso.",
      "Tu orgullo herido es el peor consejero de tu reino: nunca firmes ni rompas nada mientras te arda la cara.",
      "Reconciliate hoy con tu fiera interior: no viniste a matarla de hambre ni a dejar que incendie la casa, sino a cabalgarla."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "La Lemniscata Caída y las Rosas Marchitas",
        secret: "Al invertirse la carta, el circuito del infinito (∞) pierde su altura sobre la corona: el operador deja de nutrirse de la fuente espiritual inagotable y empieza a quemar sus propias reservas nerviosas y suprarrenales hasta caer en el agotamiento físico.",
        esotericFormula: "Desconexión del Infinito = Quemar Reservas Físicas (Burnout)",
        meditationPrompt: "¿En qué batalla estás gastando hoy tu propia salud porque te olvidaste de descansar y recargar tu centro?"
      },
      {
        id: "n2",
        x: 42,
        y: 54,
        title: "Las Manos de Plata Retiradas de las Fauces",
        secret: "En Sombra, el contacto amoroso y firme entre las manos de la Doncella y la mandíbula del León se rompe: o las manos aprietan con violencia represiva por miedo al deseo, o sueltan la presa dejando que el impulso animal muerda sin control.",
        esotericFormula: "Ruptura del Pacto = Represión Castradora o Estallido de Furia",
        meditationPrompt: "¿Estás hoy reprimiendo lo que sentís hasta enfermarte, o estás dejando que tu mal humor muerda sin filtro?"
      },
      {
        id: "n3",
        x: 58,
        y: 66,
        title: "El León Solar Herido en su Orgullo",
        secret: "El gran felino de dieciocho cuchillas doradas dado vuelta simboliza el Sol de Leo eclipsado por la vanidad herida, los celos, la cobardía momentánea o la ira ciega. Es toda tu potencia vital pidiendo a gritos que dejes de humillarla o de desbocarla y vuelvas a darle un propósito real.",
        esotericFormula: "León Invertido = Orgullo Herido o Potencia Vital Bloqueada",
        meditationPrompt: "¿Qué herida de orgullo o qué miedo a no estar a la altura te está robando hoy la serenidad?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO IX INVERTIDO • EL ERMITAÑO EN SOMBRA (YOD INVERTIDA • EL EXILIO AMARGO Y LA CEGUERA)
  // ==========================================================================
  {
    id: 9,
    numeral: "IX",
    name: "El Ermitaño",
    subtitle: "El Farol Apagado y la Cueva del Exilio",
    isReversed: true,
    palette: {
      primary: "#475569",
      secondary: "#a16207",
      glow: "rgba(71, 85, 105, 0.55)"
    },
    archetype: "hermit",
    shadowPolarity: {
      byExcess: "El Misántropo de Hielo: aislamiento amargo y rencoroso, perfeccionismo paralizante de Virgo que jamás termina de pulir la obra, hipercrítica destructiva, avaricia solitaria y rechazo soberbio de toda ayuda.",
      byDeficiency: "El Fugitivo del Silencio: pánico a quedarse a solas consigo mismo, actuar a ciegas sin auditar los detalles técnicos, inmadurez imprudente y buscar ruido constante para tapar la voz de la conciencia."
    },
    correspondences: {
      element: "Tierra Árida y Helada / Ceniza sin Fuego",
      astro: "Mercurio Mal Aspectado en Virgo / Saturno Melancólico • La Parálisis por Análisis o el Exilio Emocional",
      hebrewLetter: "Yod (י) en Sombra • El Punto Contraído que se encierra en sí mismo sin irradiar",
      qliphoth: "Raflifu • El Avariento Espiritual y la Soledad Estéril del Desierto",
      alchemy: "Distillatio Seca • Calentar el alambique vacío hasta quemar el fondo de cobre por exceso de purismo",
      hermeticAxiom: "La cueva que al principio fue medicina para curar tus heridas se convierte en sepulcro si te quedás a vivir en ella por miedo al sol.",
      jungianComplex: "El Senex Negativo (El Viejo Cínico/Avaro) y la Fobia a la Intimidad o al Silencio",
      yesNo: "No (o estás encerrado en un perfeccionismo solitario que frena todo, o estás actuando a ciegas sin haber auditado los datos)",
      keywords: [
        "aislamiento amargo",
        "perfeccionismo estéril",
        "parálisis por análisis",
        "miedo a la intimidad",
        "rechazo de ayuda",
        "frialdad crítica",
        "farol apagado"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "La montaña fue necesaria para que sanaras y destilaras tu fórmula, pero mirate ahora: le tomaste tanto gusto a no tratar con nadie que convertiste tu cumbre en un exilio de hielo. Bajá de la piedra hoy mismo; la luz que se esconde debajo del manto termina asfixiándose.",
    oracleVoiceVariants: [
      "La montaña fue necesaria para que sanaras y destilaras tu fórmula, pero mirate ahora: le tomaste tanto gusto a no tratar con nadie que convertiste tu cumbre en un exilio de hielo. Bajá de la piedra hoy mismo; la luz que se esconde debajo del manto termina asfixiándose.",
      "Llamás 'altos estándares de calidad' a tu miedo atroz de mostrar tu obra y que alguien le encuentre una fisura. Si seguís destilando el mismo espíritu diez veces en el alambique, te vas a quedar con el vaso vacío.",
      "¿Por qué te cuesta tanto pedir una mano o aceptar un consejo? Creer que tenés que cargar el mundo entero en silencio y sin ayuda no es sabiduría: es soberbia vestida de monje.",
      "En mi otra cara sombría, te veo correr de fiesta en fiesta y de pantalla en pantalla porque te da pánico apagar todo media hora y escuchar lo que tengo para decirte en la oscuridad.",
      "Cuidado con usar la lupa de Virgo como un bisturí para cortar en pedazos a todo el que se te acerca: quien exige perfección inhumana se condena a cenar solo con sus propios fantasmas."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Ermitaño (Arcano IX) invertido advierte que la virtud del retiro y el análisis ha cruzado la línea hacia su patología en el Sendero 20 de Yod. En su polaridad de exceso —el *Síndrome de la Cueva Helada*—, señala que la soledad fértil se ha degradado en aislamiento defensivo, frialdad distante, misantropía o un perfeccionismo obsesivo (Virgo en sombra) que analiza cada milímetro mil veces para postergar el momento de salir al mercado o abrir el corazón. En su polaridad de defecto —el *Farol Apagado*—, revela lo opuesto: estás actuando con imprudencia ciega, sin haber hecho la auditoría técnica o financiera mínima por miedo a quedarte a solas con los números reales.",
    meaningVariants: [
      "El Ermitaño (Arcano IX) invertido advierte que la virtud del retiro y el análisis ha cruzado la línea hacia su patología en el Sendero 20 de Yod. En su polaridad de exceso —el *Síndrome de la Cueva Helada*—, señala que la soledad fértil se ha degradado en aislamiento defensivo, frialdad distante, misantropía o un perfeccionismo obsesivo (Virgo en sombra) que analiza cada milímetro mil veces para postergar el momento de salir al mercado o abrir el corazón. En su polaridad de defecto —el *Farol Apagado*—, revela lo opuesto: estás actuando con imprudencia ciega, sin haber hecho la auditoría técnica o financiera mínima por miedo a quedarte a solas con los números reales.",
      "En el Árbol de la Vida, la letra Yod significa 'La Mano'. Cuando El Ermitaño está en Luz, su mano sostiene el farol para guiar y tiende el báculo para apoyar; cuando se invierte en Sombra, la mano se cierra en un puño avaro que esconde su saber, rechaza la colaboración de los demás y desconfía de todo el mundo por heridas viejas.",
      "Alquímicamente, el Arcano IX invertido representa una *Separatio* hipercrítica que destruye la vida del compuesto: separar tanto lo sutil de lo espeso que el proyecto pierde su carne, su calor humano y su viabilidad comercial, quedando reducido a un ejercicio de laboratorio estéril que nadie compra.",
      "En el plano de los vínculos, esta carta muestra el muro del silencio glacial: dos personas que duermen bajo el mismo techo como dos islas separadas por un océano de orgullo mudo, o un soltero que usa la excusa de 'soy muy selectivo' para esconder su fobia a la vulnerabilidad afectiva.",
      "Numéricamente, quedarte atrapado en el Nueve invertido impide que la Rueda de la Fortuna (el Diez) comience a girar: la sabiduría que acumulaste en silencio ya cumplió su tiempo de guarda; si no la bajás al valle hoy para ponerla en circulación, se volverá vinagre."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, El Ermitaño invertido revela la herida del *Autosuficiente Traumatizado* (apego evitativo): aprendiste temprano que cuando necesitabas a alguien no había nadie o te fallaban, y juraste inconscientemente *'Nunca más voy a necesitar a nadie'*. Hoy esa coraza de autosuficiencia extrema te protege del abandono, pero te mata de frío.",
    theWoundVariants: [
      "En la psicología profunda de Jung, El Ermitaño invertido revela la herida del *Autosuficiente Traumatizado* (apego evitativo): aprendiste temprano que cuando necesitabas a alguien no había nadie o te fallaban, y juraste inconscientemente *'Nunca más voy a necesitar a nadie'*. Hoy esa coraza de autosuficiencia extrema te protege del abandono, pero te mata de frío.",
      "El complejo del *Senex Cínico*: usar la inteligencia analítica y el sarcasmo como un alambre de púas para mantener a la gente a dos metros de distancia y que nadie vea tu ternura ni tu inseguridad.",
      "La neurosis obsesiva de Virgo: el pánico inconsciente a cometer un solo error técnico o a ser criticado, que te lleva a revisar el código, la receta o el contrato hasta el infinito sin darlo nunca por terminado.",
      "En el polo evasivo, la *Autofobia* (el miedo a estar a solas con uno mismo): tapar cada minuto libre con pantallas, música o trabajo mecánico porque en cuanto se hace silencio aparece una pregunta existencial que no querés responder."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La coartada maestra del Ermitaño en sombra es decirte: *'Todavía no salgo al mundo con esto porque le falta pulir un detalle técnico'*, cuando la verdad desnuda es que ese detalle no le importa a nadie y lo estás usando como escondite para no salir de la cueva.",
    theIllusionVariants: [
      "La coartada maestra del Ermitaño en sombra es decirte: *'Todavía no salgo al mundo con esto porque le falta pulir un detalle técnico'*, cuando la verdad desnuda es que ese detalle no le importa a nadie y lo estás usando como escondite para no salir de la cueva.",
      "El autoengaño de *'Nadie me entiende / La gente es superficial'*: disfrazar de superioridad intelectual o espiritual lo que es simplemente miedo a mezclarte en la arena cálida y desordenada de los vínculos humanos.",
      "Creer que hacer todo solo sin delegar ni pedir consejo te hace más meritorio, cuando en realidad está achicando el techo de tu empresa al tamaño de tus dos únicas manos.",
      "La ilusión opuesta del imprudente: decirte *'Ya lo tengo todo en la cabeza, no hace falta anotar ni revisar los números finos'*, justo antes de tropezar con una piedra que el farol habría iluminado en dos minutos."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano IX invertido diagnostica una hipertrofia de la introversión defensiva o una parálisis obsesivo-analítica. El sujeto se desconecta del flujo vital eros-relacional, encerrándose en laberintos mentales sin salida práctica o rechazando el espejo corrector del otro.",
    psycheVariants: [
      "Psicológicamente, el Arcano IX invertido diagnostica una hipertrofia de la introversión defensiva o una parálisis obsesivo-analítica. El sujeto se desconecta del flujo vital eros-relacional, encerrándose en laberintos mentales sin salida práctica o rechazando el espejo corrector del otro.",
      "Tu crítico interno de Virgo se ha vuelto un saboteador perfeccionista: mira únicamente el uno por ciento que falta y desprecia el noventa y nueve por ciento extraordinario que ya construiste.",
      "Si estás huyendo del silencio, tu sistema nervioso sufre de intoxicación informativa: dejá de meter datos de afuera y sentate a digerir lo que ya tenés adentro.",
      "La cura del Ermitaño invertido es el puente hacia el Diez: abrir la puerta de la ermita, compartir tu luz imperfecta pero viva y permitir que la vida vuelva a tocarte."
    ],

    lightAndShadow: "En Sombra Activa: Aislamiento excesivo, frialdad distante, perfeccionismo paralizante, terquedad solitaria, miedo a la intimidad, rechazo de ayuda sincera o actuar sin auditar.",
    lightAndShadowVariants: [
      "En Sombra Activa: Aislamiento excesivo, frialdad distante, perfeccionismo paralizante, terquedad solitaria, miedo a la intimidad, rechazo de ayuda sincera o actuar sin auditar.",
      "Sombra por Exceso: Misantropía helada, hipercrítica estéril, avaro de su saber y exilio autoimpuesto. Sombra por Defecto: Ceguera analítica, descuido de detalles críticos y pánico a la soledad.",
      "Distorsión de Yod: El farol escondido bajo el manto que no alumbra ni al peregrino ni al camino."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Distancia emocional que congela la cama, silencios prolongados que levantan una muralla en la pareja o encerrarse en el taller/trabajo para no enfrentar la intimidad afectiva. Si estás en soledad, cuidado con haberte acostumbrado tanto a tu cueva y a tus manías que rechaces de antemano a cualquiera que intente acercarse con calor real.",
      work: "Parálisis por perfeccionismo técnico: demorar semanas un lanzamiento, un código o un lote comercial por seguir buscándole defectos microscópicos en el laboratorio; o bien, el error de querer resolver todo solo sin delegar ni consultar a un especialista, desconectándote del mercado y del equipo.",
      money: "Avaricia temerosa que guarda el dinero bajo el colchón perdiendo oportunidades claras de rotación, o en su polo ciego, pérdidas por no haber hecho la auditoría fina de costos y números pequeños.",
      spirit: "Solipsismo espiritual: creer que podés iluminarte encerrado en tu cabeza mientras cerrás el corazón a la compasión y al servicio concreto en el mundo.",
      healthAndEnergy: "Trastornos intestinales por somatización nerviosa (el eje Virgo-intestino delgado), estreñimiento o mala absorción de nutrientes, rigidez articular, enfriamiento periférico y melancolía por falta de sol y contacto humano."
    },
    domainsVariants: [
      {
        love: "Distancia emocional que congela la cama, silencios prolongados que levantan una muralla en la pareja o encerrarse en el taller/trabajo para no enfrentar la intimidad afectiva. Si estás en soledad, cuidado con haberte acostumbrado tanto a tu cueva y a tus manías que rechaces de antemano a cualquiera que intente acercarse con calor real.",
        work: "Parálisis por perfeccionismo técnico: demorar semanas un lanzamiento, un código o un lote comercial por seguir buscándole defectos microscópicos en el laboratorio; o bien, el error de querer resolver todo solo sin delegar ni consultar a un especialista, desconectándote del mercado y del equipo.",
        money: "Avaricia temerosa que guarda el dinero bajo el colchón perdiendo oportunidades claras de rotación, o en su polo ciego, pérdidas por no haber hecho la auditoría fina de costos y números pequeños.",
        spirit: "Solipsismo espiritual: creer que podés iluminarte encerrado en tu cabeza mientras cerrás el corazón a la compasión y al servicio concreto en el mundo.",
        healthAndEnergy: "Trastornos intestinales por somatización nerviosa (el eje Virgo-intestino delgado), estreñimiento o mala absorción de nutrientes, rigidez articular, enfriamiento periférico y melancolía por falta de sol y contacto humano."
      },
      {
        love: "Dejá de pasar a tu pareja o a tus candidatos por un microscopio buscando fallas: el amor humano no es una ecuación matemática sin errores; es calor vivo que se construye de a dos.",
        work: "En su polo de ceguera imprudente, el Ermitaño invertido te avisa que te estás salteando el control de calidad o la lectura fina de un presupuesto por apuro: prendé la linterna hoy porque hay un error oculto en la fila tres.",
        money: "Economía contraída por mentalidad de invierno eterno: está bien cuidar el grano, pero si no sembrás nada afuera no habrá cosecha en primavera.",
        spirit: "Bajar de la montaña como Zaratustra: entender que la sabiduría recién está completa cuando vuelve a la plaza a iluminar la vida común.",
        healthAndEnergy: "Deshidratación sutil, fatiga visual por trabajo minucioso en penumbra y contractura lumbar por sedentarismo."
      },
      {
        love: "Rompé el hielo hoy mismo con un gesto simple de ternura física o una invitación a salir de la cueva doméstica; no dejes que el hábito del silencio se vuelva costumbre.",
        work: "Pedí ayuda técnica o delegá hoy esa parte del proceso que a vos te lleva diez horas y a otro le lleva una: tu orgullo de 'hacer todo solo' te está saliendo carísimo.",
        money: "Auditá los costos hormiga que dejaste pasar por alto o liberá un capital que tenías congelado sin producir.",
        spirit: "Perdonar tu propia imperfección humana: el diamante brilla precisamente gracias a los ángulos donde fue tallado.",
        healthAndEnergy: "Cuidá tu microbiota digestiva, tomá sol por la mañana y salí a caminar acompañado o en un entorno vivo."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Abrí la puerta de la cueva hoy mismo: si venías reteniendo una obra por perfeccionismo, publicala o mostrala ya; si venías aislado en silencio frío, buscá el contacto cálido y aceptá la ayuda o el consejo que te ofrecen.",
      prohibition: "Prohibido encerrarte hoy a rumiar críticas en soledad, seguir retocando lo que ya está listo para salir, o actuar a ciegas sin revisar los números finos.",
      psychomagicAct: "Encendé una vela o linterna dentro de un armario o habitación cerrada a oscuras; luego abrí la puerta de par en par y salí caminando con la luz en alto hacia el lugar más abierto e iluminado de tu casa mientras decís: 'Terminó mi invierno en la cueva; saco mi lámpara al mundo y comparto mi cosecha'.",
      talismanPhrase: "Bajo de la cumbre helada con mi lámpara encendida; comparto mi luz sin miedo a la imperfección."
    },
    theAlchemyVariants: [
      {
        command: "Abrí la puerta de la cueva hoy mismo: si venías reteniendo una obra por perfeccionismo, publicala o mostrala ya; si venías aislado en silencio frío, buscá el contacto cálido y aceptá la ayuda o el consejo que te ofrecen.",
        prohibition: "Prohibido encerrarte hoy a rumiar críticas en soledad, seguir retocando lo que ya está listo para salir, o actuar a ciegas sin revisar los números finos.",
        psychomagicAct: "Encendé una vela o linterna dentro de un armario o habitación cerrada a oscuras; luego abrí la puerta de par en par y salí caminando con la luz en alto hacia el lugar más abierto e iluminado de tu casa mientras decís: 'Terminó mi invierno en la cueva; saco mi lámpara al mundo y comparto mi cosecha'.",
        talismanPhrase: "Bajo de la cumbre helada con mi lámpara encendida; comparto mi luz sin miedo a la imperfección."
      },
      {
        command: "Poné un límite de reloj estricto hoy a tu revisión técnica: dale sesenta minutos finales de lupa a tu trabajo y, cuando suene la alarma, dalo por aprobado y pasá a la acción comercial.",
        prohibition: "No uses el sarcasmo ni el silencio distante como escudo hoy cuando alguien se acerque a vos con buena intención.",
        psychomagicAct: "Escribí en un papel una crítica dura que te venís haciendo a vos mismo (o a otro), envolvelo alrededor de un cubo de hielo y ponelo al sol o bajo el chorro de agua caliente hasta que el hielo se derrita por completo, declarando que toda frialdad paralizante se disuelve en vida.",
        talismanPhrase: "Suelto el bisturí de la hipercrítica; abrazo la vida real y pongo mi saber en movimiento."
      },
      {
        command: "Si tu sombra actual era la imprudencia por huir del silencio, sentate hoy treinta minutos con lápiz y papel a auditar hasta el último centavo y detalle técnico antes de mover ficha.",
        prohibition: "No rechaces por orgullo un buen consejo o una alianza que viene a aliviarte la mochila.",
        psychomagicAct: "Limpiá la lente de una linterna o la pantalla de tu teléfono/monitor y alumbrá debajo de tu cama o detrás de un mueble sacando cualquier polvo oculto, simbolizando que ya no hay rincón de tu administración que temas mirar.",
        talismanPhrase: "Mi prudencia impulsa mi obra, nunca la congela; soy sabio en el taller y cálido en el mundo."
      }
    ],

    actionOracle: {
      command: "Abrí la puerta de la cueva hoy mismo: si venías reteniendo una obra por perfeccionismo, publicala o mostrala ya; si venías aislado en silencio frío, buscá el contacto cálido y aceptá la ayuda o el consejo que te ofrecen.",
      prohibition: "Prohibido encerrarte hoy a rumiar críticas en soledad, seguir retocando lo que ya está listo para salir, o actuar a ciegas sin revisar los números finos.",
      psychomagicAct: "Encendé una vela o linterna dentro de un armario o habitación cerrada a oscuras; luego abrí la puerta de par en par y salí caminando con la luz en alto hacia el lugar más abierto e iluminado de tu casa mientras decís: 'Terminó mi invierno en la cueva; saco mi lámpara al mundo y comparto mi cosecha'.",
      talismanPhrase: "Bajo de la cumbre helada con mi lámpara encendida; comparto mi luz sin miedo a la imperfección."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano IX aparece en Sombra: alerta contra el aislamiento excesivo, el perfeccionismo que frena el lanzamiento o la falta de auditoría fina.",
      secondAppearance: "El Ermitaño Invertido sale por segunda vez: la cueva ya se está volviendo una excusa para no salir al ruedo o no abrir el corazón. Bajá de la montaña hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano IX en Sombra: peligro de enfriar irremediablemente un vínculo o de perder el momento comercial por exceso de análisis solitario. Rompé el encierro ahora.",
      fourthPlusAppearance: "Decreto de descenso de Yod: el Oráculo da por concluido tu retiro. Queda prohibido seguir escondiendo tu luz bajo el manto; salí a la plaza y poné tu obra en manos del mundo hoy mismo."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "La cueva fue necesaria para sanar y destilar tu verdad, pero ya es hora de bajar de la montaña y volver a compartir tu fuego con los vivos.",
    counselVariants: [
      "La cueva fue necesaria para sanar y destilar tu verdad, pero ya es hora de bajar de la montaña y volver a compartir tu fuego con los vivos.",
      "El vino que se guarda cien años sin descorchar jamás por miedo a que se acabe termina convertido en vinagre en el fondo de la bodega.",
      "Lo perfecto es el enemigo mortal de lo vivo: una obra real con una cicatriz vale mil veces más que una obra maestra imaginaria que nunca sale del taller.",
      "No confundas la paz del sabio con la soledad helada del que cerró la puerta por miedo a que lo vuelvan a herir.",
      "Usá tu linterna para iluminar el próximo paso del camino, no para encandilarte buscando defectos en el suelo."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 68,
        y: 38,
        title: "El Farol de Salomón Invertido (La Lupa Hipercrítica)",
        secret: "Cuando el farol octogonal queda cabeza abajo, la estrella de seis puntas deja de alumbrar el horizonte hacia adelante y apunta obsesivamente hacia el polvo de los propios zapatos. Simboliza la parálisis por análisis de Virgo en sombra: usar una inteligencia brillante para encontrar excusas y defectos que impiden avanzar.",
        esotericFormula: "Luz Hacia Abajo = Obsesión Microscópica que pierde el Horizonte",
        meditationPrompt: "¿Qué detalle menor estás usando hoy como excusa perfeccionista para no dar por terminada y lanzada tu obra?"
      },
      {
        id: "n2",
        x: 32,
        y: 60,
        title: "El Báculo del Peregrino Soltado o Usado como Barrera",
        secret: "En Sombra, el bastón de los siete nudos ya no sostiene el ascenso, sino que se cruza delante del cuerpo como una valla para que nadie se acerque, o bien se pierde dejando al caminante sin apoyo en su experiencia previa por actuar con prisa imprudente.",
        esotericFormula: "Báculo Cruzado = Rechazo de Ayuda y Desconfianza Defensiva",
        meditationPrompt: "¿A quién estás manteniendo a distancia hoy con un muro de silencio frío cuando en realidad podrías tender un puente?"
      },
      {
        id: "n3",
        x: 50,
        y: 80,
        title: "La Cumbre de Hielo Convertida en Exilio",
        secret: "El risco solitario invertido advierte que el retiro estratégico se ha pasado de rosca: la serenidad de la altura se ha congelado en misantropía, soledad amarga o desconexión total de las necesidades reales del mercado y de los afectos.",
        esotericFormula: "Exceso de Cumbre = Congelamiento del Corazón y Esterilidad",
        meditationPrompt: "¿Hace cuánto tiempo que no salís de tu cueva mental para compartir una charla cálida, una risa o tu creación con el mundo?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO X INVERTIDO • LA RUEDA DE LA FORTUNA EN SOMBRA (KAPH INVERTIDA • EL BUCLE KÁRMICO)
  // ==========================================================================
  {
    id: 10,
    numeral: "X",
    name: "La Rueda de la Fortuna",
    subtitle: "El Engranaje Trabado y el Vértigo de la Periferia",
    isReversed: true,
    palette: {
      primary: "#b45309",
      secondary: "#9d174d",
      glow: "rgba(180, 83, 9, 0.58)"
    },
    archetype: "wheel",
    shadowPolarity: {
      byExcess: "El Jugador Mareado en la Llanta: volatilidad financiera o emocional extrema, apostar al azar ciego sin estructura, embriagarse de soberbia en el ascenso y desplomarse en el pánico cuando el ciclo gira.",
      byDeficiency: "El Freno contra el Tiempo y el Bucle Repetitivo: resistencia terca a aceptar que una etapa terminó, repetir el mismo error kármico por tercera vez esperando otro resultado, y demoras por nadar contra la corriente."
    },
    correspondences: {
      element: "Fuego Intermitente / Vórtice Centrífugo que expulsa del Centro",
      astro: "Júpiter Retrógrado o en Exceso • La Mala Racha Temporal por Desincronía o la Apuesta Imprudente",
      hebrewLetter: "Kaph (כ) en Sombra • El Puño Cerrado que se niega a soltar lo viejo y no puede recibir lo nuevo",
      qliphoth: "A'ano'nin • Los Espejismos de la Suerte Ciega y la Repetición Mecánica del Destino",
      alchemy: "Circulatio Interrumpida • El compuesto que se pega al fondo del vaso por falta de rotación o se derrama por giro violento",
      hermeticAxiom: "Quien maldice al invierno porque extraña el verano se congela en la puerta; quien repite la misma pregunta sin haber aprendido la lección vuelve a girar en el mismo infierno.",
      jungianComplex: "La Compulsión de Repetición (Destino Inconsciente) y la Identificación del Yo con la Periferia",
      yesNo: "No todavía (hay demoras externas o estás resistiendo un cambio de ciclo; ajustá las velas y no apuestes al azar)",
      keywords: [
        "resistencia al cambio",
        "bucle repetitivo",
        "demora temporal",
        "altibajos bruscos",
        "desincronía",
        "apuesta imprudente",
        "aferrarse al borde"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Te estás despellejando las manos tratando de frenar mis rayos de bronce porque no querés que cambie la estación. Soltá la llanta hoy mismo: lo que llamás 'mala suerte' o 'racha adversa' es simplemente el dolor de tus propios dedos aferrados a un ciclo que ya venció.",
    oracleVoiceVariants: [
      "Te estás despellejando las manos tratando de frenar mis rayos de bronce porque no querés que cambie la estación. Soltá la llanta hoy mismo: lo que llamás 'mala suerte' o 'racha adversa' es simplemente el dolor de tus propios dedos aferrados a un ciclo que ya venció.",
      "Mirame girar al revés: ¿no te das cuenta de que estás viviendo exactamente la misma escena, con distinto nombre y distinta cara, que hace tres años? Mi Rueda te va a devolver al mismo examen hasta que cambies tu respuesta.",
      "Cuando estabas arriba te creíste inmortal y derrochaste el grano; ahora que el giro baja a buscar raíz, te desesperás como si el mundo se acabara. Salí del borde ruidoso y vení a sentarte a mi eje.",
      "Mi letra es Kaph, la palma de la mano. Tenés el puño tan apretado reteniendo una seguridad vieja que aunque Júpiter te tire hoy una moneda de oro desde el cielo, rebotaría contra tus nudillos cerrados.",
      "No patees la puerta cuando el reloj cósmico dice 'esperá a que pase el nubarrón'. En la fase menguante de mi giro no se sale a cazar: se afilan las herramientas en el centro del cubo."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Rueda de la Fortuna (Arcano X) invertida señala una fricción entre tu voluntad personal y el ritmo de los ciclos universales en el Sendero 21 de Kaph. En primer lugar, advierte sobre la *Resistencia Estéril al Cambio*: una etapa comercial, tecnológica o afectiva ya cumplió su hora y está girando hacia una nueva configuración, pero te aferrás al formato anterior sufriendo el tirón del engranaje. En segundo lugar, diagnostica la *Compulsión de Repetición Kármica*: volver a tropezar con el mismo patrón financiero o vincular por no haber destilado el aprendizaje del ciclo anterior. Finalmente, en lo inmediato, anuncia demoras imprevistas o altibajos externos que te exigen prudencia patrimonial y anclaje férreo en tu centro.",
    meaningVariants: [
      "La Rueda de la Fortuna (Arcano X) invertida señala una fricción entre tu voluntad personal y el ritmo de los ciclos universales en el Sendero 21 de Kaph. En primer lugar, advierte sobre la *Resistencia Estéril al Cambio*: una etapa comercial, tecnológica o afectiva ya cumplió su hora y está girando hacia una nueva configuración, pero te aferrás al formato anterior sufriendo el tirón del engranaje. En segundo lugar, diagnostica la *Compulsión de Repetición Kármica*: volver a tropezar con el mismo patrón financiero o vincular por no haber destilado el aprendizaje del ciclo anterior. Finalmente, en lo inmediato, anuncia demoras imprevistas o altibajos externos que te exigen prudencia patrimonial y anclaje férreo en tu centro.",
      "Observá la mecánica simbólica del diorama cuando se invierte: la Esfinge coronada que debía estar arriba en la cumbre queda colgada cabeza abajo en el fondo, mientras Tifón-Set (la fuerza disolvente e involutiva) sube al cenit. Esto significa que has perdido la ecuanimidad filosófica de la Esfinge y te has dejado arrastrar por el vértigo de las circunstancias externas, subiendo y bajando de humor según cómo sopla el viento del día.",
      "En la lectura de las letras sagradas del aro, cuando ROTA se lee en sentido inverso sin conciencia, la Ley (*TORA*) se experimenta como Fatalidad ciega en lugar de Providencia. El Oráculo te recuerda que el destino solo arrastra por los pelos a quien se niega a caminar por su propio pie hacia la evolución.",
      "Alquímicamente, el Arcano X en sombra indica un desfase en la *Circulatio*: querer cosechar cuando la rueda está en fase de siembra subterránea, o salir a arriesgar capital en el mercado justo cuando Júpiter pide contraer velas, consolidar stock y esperar que pase la turbulencia.",
      "Toda demora o revés aparente que anuncie La Rueda invertida tiene una función protectora oculta: el tren que hoy perdiste por cinco minutos no era el que te llevaba a tu verdadero puerto, o necesitaba que ajustaras una pieza clave antes de subir."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Freud y Jung, aquí opera el mecanismo más hipnótico del inconsciente: la *Compulsión de Repetición*. Jung formuló su ley de bronce: *'Hasta que no hagas consciente lo inconsciente, llamará a tu puerta una y otra vez y vos lo llamarás Destino'*. No tenés mala suerte; tenés una herida no vista que sigue eligiendo el mismo escenario para intentar resolverse.",
    theWoundVariants: [
      "En la psicología profunda de Freud y Jung, aquí opera el mecanismo más hipnótico del inconsciente: la *Compulsión de Repetición*. Jung formuló su ley de bronce: *'Hasta que no hagas consciente lo inconsciente, llamará a tu puerta una y otra vez y vos lo llamarás Destino'*. No tenés mala suerte; tenés una herida no vista que sigue eligiendo el mismo escenario para intentar resolverse.",
      "La herida de la *Inestabilidad Temprana*: haber crecido en un ambiente imprevisible donde las reglas o la economía cambiaban de golpe dejó en tu psique una fobia al cambio (querer congelar todo para que nada se mueva) o una adicción inconsciente a la montaña rusa del drama.",
      "La identificación del Yo con la Periferia del Mandala: medir tu paz mental y tu autoestima por la facturación del martes o el humor de los demás el jueves, olvidando habitar el Sí-Mismo (*Self*) que reside en el cubo central inmóvil.",
      "El síndrome del Jugador Mágico (Júpiter en sombra): esperar secretamente un 'golpe de suerte salvador' de afuera para no tener que sostener la disciplina diaria del Emperador y la Justicia."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La mentira favorita del ego bajo La Rueda invertida es el victimismo cósmico: decirte *'El universo / el país / la suerte está en mi contra'*, usando el clima externo como coartada para no reconocer que seguís aplicando la misma fórmula vieja que ya dejó de funcionar.",
    theIllusionVariants: [
      "La mentira favorita del ego bajo La Rueda invertida es el victimismo cósmico: decirte *'El universo / el país / la suerte está en mi contra'*, usando el clima externo como coartada para no reconocer que seguís aplicando la misma fórmula vieja que ya dejó de funcionar.",
      "El espejismo de *'Esta vez con la misma receta va a salir distinto'*: volver a asociarte con el mismo perfil de persona o repetir el mismo esquema financiero esperando un milagro sin cambiar una sola variable tuya.",
      "La ilusión de permanencia: creer cuando las vacas están gordas que el verano dura doce meses al año, olvidando guardar reserva para el otoño.",
      "Confundir una demora técnica del reloj con un 'No definitivo': impacientarte y patear el tablero a diez minutos de que el engranaje termine de destrabarse."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, La Rueda de la Fortuna invertida señala que el Yo ha sido centrifugado fuera de su centro mandálico y gira pegado a la llanta de los acontecimientos externos, sufriendo mareo emocional, ansiedad ante la incertidumbre y repetición de guiones inconscientes.",
    psycheVariants: [
      "Psicológicamente, La Rueda de la Fortuna invertida señala que el Yo ha sido centrifugado fuera de su centro mandálico y gira pegado a la llanta de los acontecimientos externos, sufriendo mareo emocional, ansiedad ante la incertidumbre y repetición de guiones inconscientes.",
      "Estás peleando contra el reloj biológico o estacional de un proceso. Aceptar la fase actual del ciclo sin queja reducirá tu estrés a la mitad en cinco segundos.",
      "Observá el patrón circular: anotá qué tienen en común las últimas tres crisis o trabas que viviste; el factor común sos vos y ahí está la llave maestra para romper el bucle.",
      "Volver al eje de Kaph requiere abrir la mano: soltar lo que el tiempo ya se llevó y estabilizar las cuatro funciones de la conciencia (el Tetramorfos)."
    ],

    lightAndShadow: "En Sombra Activa: Resistencia inútil al cambio, retrasos temporales, repetición de patrones kármicos, altibajos financieros o emocionales bruscos y sensación de descontrol.",
    lightAndShadowVariants: [
      "En Sombra Activa: Resistencia inútil al cambio, retrasos temporales, repetición de patrones kármicos, altibajos financieros o emocionales bruscos y sensación de descontrol.",
      "Sombra por Exceso: Montaña rusa especulativa, mareo por éxito fugaz y apuestas al azar sin red. Sombra por Defecto: Aferramiento a lo caduco, bucle repetitivo y pesimismo ante un bache temporal.",
      "Distorsión de Kaph: El engranaje que rechina porque el operador intenta girarlo a contramano de la estación."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Repetición de viejos bucles afectivos (volver a caer en la misma discusión circular o atraer el mismo tipo de historia inestable por no haber cerrado la lección anterior), o bien atravesar un bache de desincronía en los tiempos de la pareja que pide paciencia y no tomar decisiones en pleno mareo.",
      work: "Factores externos, del mercado o de proveedores que demoran temporalmente un resultado o cambian las reglas de juego sin aviso. No nades contra la corriente ni te quejes del viento: usá esta semana de rotación más lenta para blindar tu inventario, ajustar precios y adaptar tu oferta al nuevo escenario.",
      money: "Fluctuaciones de caja, cobros que tardan unos días más en entrar o advertencia severa contra el juego, la especulación volátil y las compras en el pico de la ola. Mantené liquidez de reserva y cintura financiera.",
      spirit: "Comprender que la verdadera paz iniciática no depende de que el mundo exterior esté quieto, sino de habitar el Punto Cero inmóvil mientras la Rueda gira.",
      healthAndEnergy: "Vértigos, mareos cervicales, desajustes en los biorritmos del sueño o sensibilidad hepática y biliar (Júpiter) ante los cambios de estación y el estrés."
    },
    domainsVariants: [
      {
        love: "Repetición de viejos bucles afectivos (volver a caer en la misma discusión circular o atraer el mismo tipo de historia inestable por no haber cerrado la lección anterior), o bien atravesar un bache de desincronía en los tiempos de la pareja que pide paciencia y no tomar decisiones en pleno mareo.",
        work: "Factores externos, del mercado o de proveedores que demoran temporalmente un resultado o cambian las reglas de juego sin aviso. No nades contra la corriente ni te quejes del viento: usá esta semana de rotación más lenta para blindar tu inventario, ajustar precios y adaptar tu oferta al nuevo escenario.",
        money: "Fluctuaciones de caja, cobros que tardan unos días más en entrar o advertencia severa contra el juego, la especulación volátil y las compras en el pico de la ola. Mantené liquidez de reserva y cintura financiera.",
        spirit: "Comprender que la verdadera paz iniciática no depende de que el mundo exterior esté quieto, sino de habitar el Punto Cero inmóvil mientras la Rueda gira.",
        healthAndEnergy: "Vértigos, mareos cervicales, desajustes en los biorritmos del sueño o sensibilidad hepática y biliar (Júpiter) ante los cambios de estación y el estrés."
      },
      {
        love: "No intentes volver a abrir una historia del pasado cuyo ciclo ya venció; darle otra vuelta a la misma rueda solo te traerá el mismo final más rápido.",
        work: "El método comercial que te dio éxito el año pasado hoy muestra signos de agotamiento: renová el catálogo, el código o la estrategia antes de que la curva baje más.",
        money: "Evitá endeudarte contando con ingresos futuros variables; calculá tu presupuesto hoy sobre la base más conservadora y firme (el Toro de la esquina).",
        spirit: "Romper el *Samsara* (la rueda de las reacciones automáticas): cuando hoy te provoquen con el mismo estímulo de siempre, elegí conscientemente dar una respuesta nueva.",
        healthAndEnergy: "Inestabilidad en los niveles de glucosa o energía durante el día (picos y caídas); comé con orden y respetá las horas fijas de descanso."
      },
      {
        love: "Montaña rusa emocional de 'todo está perfecto el lunes y todo se rompe el miércoles': salgan del borde histérico de la rueda y construyan acuerdos estables en el centro.",
        work: "Si una puerta se cierra hoy de imprevisto, no te quedes golpeándola: girá noventa grados sobre tus talones porque la Rueda acaba de abrir otra ventana a tu derecha.",
        money: "Rotación lenta de mercadería clavada: liquidá o transformá hoy mismo lo que lleva meses ocupando lugar sin girar para recuperar capital vivo.",
        spirit: "Recordar que las rachas adversas son tan pasajeras como las tormentas de verano; quien sostiene la espada de la Esfinge siempre vuelve a ver el sol.",
        healthAndEnergy: "Cuidá el hígado de excesos y ayudá a tu circulación linfática y sanguínea con caminatas rítmicas."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Rompé el bucle repetitivo hoy mismo: identificá qué patrón viejo estás por volver a ejecutar, hacé un movimiento completamente distinto y desplazate de inmediato de la queja periférica hacia tu centro estratégico.",
      prohibition: "Prohibido apostar dinero o decisiones clave al azar hoy, pelear contra un cambio externo que ya es un hecho, o repetir la misma reacción esperando otro resultado.",
      psychomagicAct: "Dibujá un círculo en un papel representando el hábito o problema que se repite siempre en tu vida; en lugar de seguir repasando el círculo con la lapicera, clavá la punta en el centro exacto y trazá una línea recta y firme que salga hacia afuera rompiendo el aro mientras decís: 'Aprendo la lección, rompo el bucle y salgo por la tangente hacia una octava superior'.",
      talismanPhrase: "Suelto el borde ruidoso de las rachas; me planto en el eje inmóvil y convierto cada giro en sabiduría."
    },
    theAlchemyVariants: [
      {
        command: "Rompé el bucle repetitivo hoy mismo: identificá qué patrón viejo estás por volver a ejecutar, hacé un movimiento completamente distinto y desplazate de inmediato de la queja periférica hacia tu centro estratégico.",
        prohibition: "Prohibido apostar dinero o decisiones clave al azar hoy, pelear contra un cambio externo que ya es un hecho, o repetir la misma reacción esperando otro resultado.",
        psychomagicAct: "Dibujá un círculo en un papel representando el hábito o problema que se repite siempre en tu vida; en lugar de seguir repasando el círculo con la lapicera, clavá la punta en el centro exacto y trazá una línea recta y firme que salga hacia afuera rompiendo el aro mientras decís: 'Aprendo la lección, rompo el bucle y salgo por la tangente hacia una octava superior'.",
        talismanPhrase: "Suelto el borde ruidoso de las rachas; me planto en el eje inmóvil y convierto cada giro en sabiduría."
      },
      {
        command: "Aceptá sin protestar cualquier demora o cambio de planes del día de hoy y usá ese tiempo libre imprevisto para ordenar los cuatro pilares de tu base.",
        prohibition: "No tomes decisiones financieras ni afectivas importantes mientras te sientas mareado por un pico de euforia o un bajón de pesimismo.",
        psychomagicAct: "Colocá un reloj de agujas o una moneda giratoria sobre tu mesa, mirá cómo se mueven los extremos mientras el tornillo central no se mueve ni un milímetro, y apoyá tu dedo índice sobre ese centro durante un minuto declarando: 'El tiempo gira afuera; mi conciencia es el eje que no tiembla'.",
        talismanPhrase: "Ni la subida me embriaga ni la bajada me asusta; soy la Esfinge que gobierna el ciclo."
      },
      {
        command: "Destrabá la rueda de tu economía hoy poniendo en movimiento o liquidando un activo, stock o tarea que tenías congelada por apego al precio o formato viejo.",
        prohibition: "No culpes a la 'mala suerte' de lo que requiere simplemente cambiar de estrategia ante una nueva estación del mercado.",
        psychomagicAct: "Abrí tus dos manos con las palmas hacia abajo dejando caer un papel viejo al suelo (soltar el ciclo vencido), y luego girá las palmas cóncavas hacia el cielo (el gesto de la letra Kaph) diciendo: 'Vacío mis manos del ayer para poder recibir la fortuna del mañana'.",
        talismanPhrase: "Abro el puño de Kaph; fluyo con las estaciones del cosmos y cosecho en todo clima."
      }
    ],

    actionOracle: {
      command: "Rompé el bucle repetitivo hoy mismo: identificá qué patrón viejo estás por volver a ejecutar, hacé un movimiento completamente distinto y desplazate de inmediato de la queja periférica hacia tu centro estratégico.",
      prohibition: "Prohibido apostar dinero o decisiones clave al azar hoy, pelear contra un cambio externo que ya es un hecho, o repetir la misma reacción esperando otro resultado.",
      psychomagicAct: "Dibujá un círculo en un papel representando el hábito o problema que se repite siempre en tu vida; en lugar de seguir repasando el círculo con la lapicera, clavá la punta en el centro exacto y trazá una línea recta y firme que salga hacia afuera rompiendo el aro mientras decís: 'Aprendo la lección, rompo el bucle y salgo por la tangente hacia una octava superior'.",
      talismanPhrase: "Suelto el borde ruidoso de las rachas; me planto en el eje inmóvil y convierto cada giro en sabiduría."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano X aparece en Sombra: alerta sobre resistencia a un cambio de ciclo, demoras externas o repetición de un viejo bucle.",
      secondAppearance: "La Rueda Invertida gira por segunda vez en tu registro: estás tropezando otra vez con la misma piedra por no cambiar tu respuesta. Salí del bucle automático hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano X en Sombra: la resistencia al cambio te está desgastando en vano. Soltá inmediatamente la etapa que ya terminó y refugiate en el eje central.",
      fourthPlusAppearance: "Convergencia kármica de Kaph en Sombra: el Oráculo te advierte que el ciclo no avanzará al once (La Justicia) hasta que demuestres con un hecho concreto que aprendiste la lección y dejaste de repetir el pasado."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Dejá de nadar a contramano de la estación: cuando aceptás que el ciclo cambió y aprendés la lección que se repetía, la rueda deja de aplastarte y vuelve a impulsarte.",
    counselVariants: [
      "Dejá de nadar a contramano de la estación: cuando aceptás que el ciclo cambió y aprendés la lección que se repetía, la rueda deja de aplastarte y vuelve a impulsarte.",
      "Definición hermética de la necedad: girar diez veces en la misma calesita esperando bajar en una ciudad distinta.",
      "Cuando el mar está revuelto no se sale en bote chico a desafiar las olas; se espera en la costa reparando las redes para el día siguiente.",
      "El que se ata al borde de la fortuna ajena sube como mendigo y cae como piedra; sé dueño de tu propio eje.",
      "Agradecé la puerta que hoy tardó en abrirse: del otro lado todavía estaban limpiando el salón para tu entrada."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 23,
        title: "La Esfinge Destronada y el Ascenso de Tifón",
        secret: "Al invertirse el diorama, la Esfinge de la Sabiduría cae al fondo del pozo y la figura descendente de Tifón-Set (la reactividad, el miedo y la dispersión involutiva) ocupa engañosamente la cumbre. Simboliza el momento en que perdés la cabeza fría y permitís que el pánico o la codicia del momento dicten tus movimientos.",
        esotericFormula: "Esfinge Abajo + Tifón Arriba = Pérdida de la Serenidad Estratégica",
        meditationPrompt: "¿Qué noticia o fluctuación externa reciente te sacó de tu centro y te hizo olvidar la mirada larga de la Esfinge?"
      },
      {
        id: "n2",
        x: 50,
        y: 51,
        title: "El Engranaje O-R-A-T en Giro Regresivo (El Bucle)",
        secret: "En Sombra, los ocho rayos dorados parecen girar en sentido antihorario, arrastrando al consultante hacia viejos hábitos, deudas pasadas o discusiones que creía superadas. El eje central de amatista te invita a saltar fuera de la llanta repetitiva reconociendo cuál es la lección exacta que todavía no habías integrado.",
        esotericFormula: "Rueda en Retroceso = Compulsión de Repetición Kármica",
        meditationPrompt: "¿Qué situación actual se parece demasiado a una vieja historia de tu pasado y qué vas a hacer diferente esta vez?"
      },
      {
        id: "n3",
        x: 21,
        y: 25,
        title: "El Tetramorfos Desbalanceado en los Cuatro Ángulos",
        secret: "Cuando los Cuatro Vivientes (Toro, León, Águila y Ángel) quedan invertidos en las esquinas, las cuatro funciones de tu vida pierden estabilidad: o te sobra aire mental y te falta tierra financiera, o te sobra fuego impulsivo y te falta visión de águila. Estabilizar las cuatro esquinas devuelve la paz al centro.",
        esotericFormula: "Desbalance de los 4 Elementos = Mareo ante el Cambio de Ciclo",
        meditationPrompt: "De tus cuatro pilares (tierra/finanzas, fuego/energía, agua/emociones, aire/estrategia), ¿cuál está hoy más inestable ante el cambio y necesita refuerzo?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN III (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initLunarGrimoireVolume3() {
  window.DATOS_LUNA_3 = DATOS_LUNA_3;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_3.forEach(function (card) {
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
  DATOS_LUNA_3.forEach(function (lunarCard) {
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
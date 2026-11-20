// ============================================================================
// ARCHIVO: datos_luna_2.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN II: ARCANOS III, IV, V y VI
// III • La Emperatriz (Sombra) | IV • El Emperador (Sombra) | V • El Hierofante (Sombra) | VI • Los Amantes (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// 100% Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_2 = [
  // ==========================================================================
  // ARCANO III INVERTIDO • LA EMPERATRIZ EN SOMBRA (DALETH INVERTIDA • LA TIERRA YERMA Y LA ASFIXIA)
  // ==========================================================================
  {
    id: 3,
    numeral: "III",
    name: "La Emperatriz",
    subtitle: "El Jardín Descuidado y la Red de Oro Asfixiante",
    isReversed: true,
    palette: {
      primary: "#a16207",
      secondary: "#065f46",
      glow: "rgba(161, 98, 7, 0.55)"
    },
    archetype: "empress",
    shadowPolarity: {
      byExcess: "La Madre Devoradora y la Hiedra Venenosa: sobreprotección que castra la autonomía ajena, derroche material vanidoso, gula sensorial, celos posesivos y pereza hedonista.",
      byDeficiency: "La Tierra en Sequía: bloqueo del parto creativo, abandono del propio cuerpo y estética, sentimiento de escasez, mendigar afecto y culpa inconsciente por recibir abundancia."
    },
    correspondences: {
      element: "Tierra Agotada o Pantano Frondoso sin Poda",
      astro: "Venus Retrógrada o Afligida • La Distorsión del Deseo, el Valor y el Merecimiento",
      hebrewLetter: "Daleth (ד) en Sombra • La Puerta Cerrada a la Abundancia o el Umbral del Derroche",
      qliphoth: "Dagdagiron • La Voracidad Sensual sin Alma y la Esterilidad del Capricho",
      alchemy: "Fermentatio Putrefacta • El fruto que se pasa de maduro en la rama por no ser cosechado a tiempo",
      hermeticAxiom: "Quien riega los jardines ajenos dejando secar su propia raíz termina mendigando una flor; quien abraza el brote con demasiada fuerza lo estrangula.",
      jungianComplex: "El Complejo Materno Negativo (La Madre Terrible / Devoradora) y la Neurosis de Escasez",
      yesNo: "No por ahora (hay estancamiento creativo, drenaje de recursos o apego asfixiante que debés podar primero)",
      keywords: [
        "sequía creativa",
        "sobreprotección asfixiante",
        "derroche vanidoso",
        "abandono propio",
        "dependencia afectiva",
        "fruto retenido",
        "culpa de merecer"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame el manto marchito: o te vaciaste entregando toda tu savia a quienes no mueven un dedo por vos, o te encerraste en el capricho y el derroche esperando que la tierra dé trigo sin haberla arado. Volvé a tu propia raíz hoy mismo.",
    oracleVoiceVariants: [
      "Mirame el manto marchito: o te vaciaste entregando toda tu savia a quienes no mueven un dedo por vos, o te encerraste en el capricho y el derroche esperando que la tierra dé trigo sin haberla arado. Volvé a tu propia raíz hoy mismo.",
      "Cuidar no es atar. Cuando resolvés la vida entera de los demás para que te necesiten, tu amor deja de ser alimento y se convierte en una jaula de terciopelo.",
      "Llevás meses reteniendo a tu criatura en el vientre por miedo a que el mundo la juzgue. Si no cortás el cordón umbilical de tu proyecto hoy, lo que era vida se volverá peso muerto.",
      "Buscás llenar con compras, azúcar o aplausos externos un hambre que es puramente creadora. Ningún lujo comprado afuera calma el dolor de no estar dando a luz tu propia obra.",
      "¿Por qué pedís perdón cada vez que cobrás lo que valés o disfrutás de un descanso? Quien siente culpa de su propia abundancia le cierra en la cara la puerta de Daleth al universo."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Emperatriz (Arcano III) invertida revela una alteración crítica en la matriz de la creación, el placer y la economía orgánica. En su polo de carencia —la *Sequía de Daleth*—, señala un bloqueo en el parto de tus proyectos y un agotamiento por haber puesto toda tu energía nutricia hacia afuera mientras descuidabas tu propio jardín, tu cuerpo y tu autoestima. En su polo de exceso —la *Selva sin Poda*—, advierte contra la sobreprotección posesiva que asfixia el crecimiento de la pareja, los hijos o los colaboradores, así como contra la vanidad estética, el derroche financiero por ansiedad y la pereza sensual que posterga el trabajo duro.",
    meaningVariants: [
      "La Emperatriz (Arcano III) invertida revela una alteración crítica en la matriz de la creación, el placer y la economía orgánica. En su polo de carencia —la *Sequía de Daleth*—, señala un bloqueo en el parto de tus proyectos y un agotamiento por haber puesto toda tu energía nutricia hacia afuera mientras descuidabas tu propio jardín, tu cuerpo y tu autoestima. En su polo de exceso —la *Selva sin Poda*—, advierte contra la sobreprotección posesiva que asfixia el crecimiento de la pareja, los hijos o los colaboradores, así como contra la vanidad estética, el derroche financiero por ansiedad y la pereza sensual que posterga el trabajo duro.",
      "En el Árbol de la Vida, el Sendero 14 une la Sabiduría del Padre (Chokmah) con el Entendimiento formador de la Madre (Binah). Cuando este sendero se invierte, la idea no logra encarnar con forma sana: o el proyecto queda abortado a mitad de camino por falta de constancia nutritiva, o crece de manera desmesurada y caótica, consumiendo más presupuesto y energía de los que devuelve.",
      "Bajo la regencia de una Venus afligida, el Arcano III en sombra desnuda una distorsión en la Ley de Gravitación Magnética. Has dejado de atraer desde el trono soberano de tu propio valor y has salido a perseguir o mendigar aprobación, clientes o afecto desde la carencia. Recordá la ley hermética: todo lo que perseguís con hambre desesperada huye de vos.",
      "Alquímicamente, esta inversión representa la *Multiplicatio* detenida por exceso de humedad o falta de fuego: el fruto ya está maduro en el taller, pero el creador se niega a cosecharlo y venderlo por un apego infantil a su obra o por temor a no poder crear nada igual después.",
      "En el terreno material y doméstico, La Emperatriz invertida llama la atención sobre el desorden estético y el descuido del templo físico. Cuando tu espacio de trabajo o tu propio cuerpo están desatendidos, el canal por donde desciende la prosperidad venusina se estrecha de inmediato."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung y Erich Neumann, aquí opera el complejo de la *Madre Devoradora* (en uno mismo o internalizado de la infancia) o la herida del *Amor Condicionado a la Utilidad*. Sentís inconscientemente que solo tenés derecho a ser amado si te sacrificás resolviéndole la vida a todo el mundo, o bien temés que si los demás crecen y se vuelven autónomos, te quedarás solo.",
    theWoundVariants: [
      "En la psicología profunda de Jung y Erich Neumann, aquí opera el complejo de la *Madre Devoradora* (en uno mismo o internalizado de la infancia) o la herida del *Amor Condicionado a la Utilidad*. Sentís inconscientemente que solo tenés derecho a ser amado si te sacrificás resolviéndole la vida a todo el mundo, o bien temés que si los demás crecen y se vuelven autónomos, te quedarás solo.",
      "La herida de la *Prohibición del Goce*: una lealtad invisible hacia antepasados que sufrieron escasez te hace sentir culpa cada vez que te va demasiado bien, llevándote a derrochar el dinero apenas entra o a sabotear tu propio descanso.",
      "El vacío narcisista de Venus en sombra: intentar medir tu valor ontológico por el brillo superficial de la cáscara (apariencias, compras ostentosas o halagos constantes) porque desconfiás de la riqueza de tu propia tierra interior.",
      "El trauma de la Cosecha Robada: haber sembrado con amor en el pasado sin haber recibido el reconocimiento justo cerró tu matriz creativa por resentimiento, instalando el miedo a volver a dar a luz."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño central de La Emperatriz invertida es decirte: *'Nadie me cuida como yo cuido a los demás'*, sin admitir que vos mismo entrenaste a tu entorno para que sea dependiente e inútil al no dejarles asumir el peso de sus propios errores.",
    theIllusionVariants: [
      "El autoengaño central de La Emperatriz invertida es decirte: *'Nadie me cuida como yo cuido a los demás'*, sin admitir que vos mismo entrenaste a tu entorno para que sea dependiente e inútil al no dejarles asumir el peso de sus propios errores.",
      "El espejismo del 'Merezco este gusto compensatorio': gastar recursos que pertenecen a la semilla de tu negocio en gratificaciones efímeras para anestesiar la frustración de un día improductivo.",
      "La ilusión de que 'la inspiración tiene que bajar sola': esperar sentado a sentir ganas o placer para ponerte a trabajar, olvidando que en el arte real la musa solo visita a quien ya tiene las manos en la arcilla.",
      "Confundir posesión con amor: creer que celar, controlar o retener a una persona o proyecto dentro de tu órbita es quererlo, cuando en realidad es miedo a tu propio vacío."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, La Emperatriz invertida diagnostica un desbalance severo en la economía de la líbido creadora. La energía vital o bien se drena hacia afuera en una hipermaternidad que infantiliza al entorno, o bien se estanca hacia adentro en apatía sensorial, bloqueo artístico y descuido del cuerpo.",
    psycheVariants: [
      "Psicológicamente, La Emperatriz invertida diagnostica un desbalance severo en la economía de la líbido creadora. La energía vital o bien se drena hacia afuera en una hipermaternidad que infantiliza al entorno, o bien se estanca hacia adentro en apatía sensorial, bloqueo artístico y descuido del cuerpo.",
      "Tu psique está sufriendo de 'inanición estética y sensorial': demasiadas horas de obligación gris sin contacto con la belleza viva ni con el placer genuino han secado temporalmente tu pozo imaginativo.",
      "Vigilá la tendencia a usar la comida, las compras o la seducción superficial como ansiolíticos frente a un bloqueo en tu verdadera obra.",
      "Para restituir el flujo de Daleth, debés retirar hoy mismo tus manos de los problemas ajenos y redirigir el cien por ciento de ese riego hacia tu propio tronco."
    ],

    lightAndShadow: "En Sombra Activa: Bloqueo creativo, dependencia afectiva, derroche material, vanidad superficial, agotamiento por cuidar a todos menos a vos o sobreprotección asfixiante.",
    lightAndShadowVariants: [
      "En Sombra Activa: Bloqueo creativo, dependencia afectiva, derroche material, vanidad superficial, agotamiento por cuidar a todos menos a vos o sobreprotección asfixiante.",
      "Sombra por Exceso: Asfixia materna, posesividad celosa, lujuria de consumo y pereza dorada. Sombra por Defecto: Esterilidad de ideas, sentimiento de fealdad o escasez, y abandono corporal.",
      "Distorsión de Daleth: El jardín invadido por la maleza del capricho o la tierra agrietada por falta de amor propio."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Demanda excesiva de atención, celos posesivos, asfixia en la pareja por querer maternizar o paternizar al otro, o bien descuido total de la seducción y del propio deseo. El Oráculo te pide soltar el control afectivo, dejar de mendigar migajas y volver a habitar tu propio magnetismo.",
      work: "Proyectos que se demoran en dar fruto por falta de constancia práctica o por exceso de retoques cosméticos sin sustancia. Cuidado con la mala administración de insumos, el desorden en el punto de venta o el bloqueo creativo nacido del agotamiento.",
      money: "Fugas financieras por gastos de vanidad, compras emocionales compensatorias o préstamos a personas que se acostumbran a vivir de tu cosecha. Poné llave al granero hoy mismo.",
      spirit: "Desconexión con la Madre Tierra y con el templo del cuerpo: vivir disociado en las pantallas olvidando los ritmos biológicos de la luz, el sueño y las estaciones.",
      healthAndEnergy: "Apatía vital, desarreglos metabólicos por exceso de azúcares o harinas refinadas, tensión en garganta/tiroides (el eje Tauro-Venus) y fatiga por falta de contacto con el sol y el aire libre."
    },
    domainsVariants: [
      {
        love: "Demanda excesiva de atención, celos posesivos, asfixia en la pareja por querer maternizar o paternizar al otro, o bien descuido total de la seducción y del propio deseo. El Oráculo te pide soltar el control afectivo, dejar de mendigar migajas y volver a habitar tu propio magnetismo.",
        work: "Proyectos que se demoran en dar fruto por falta de constancia práctica o por exceso de retoques cosméticos sin sustancia. Cuidado con la mala administración de insumos, el desorden en el punto de venta o el bloqueo creativo nacido del agotamiento.",
        money: "Fugas financieras por gastos de vanidad, compras emocionales compensatorias o préstamos a personas que se acostumbran a vivir de tu cosecha. Poné llave al granero hoy mismo.",
        spirit: "Desconexión con la Madre Tierra y con el templo del cuerpo: vivir disociado en las pantallas olvidando los ritmos biológicos de la luz, el sueño y las estaciones.",
        healthAndEnergy: "Apatía vital, desarreglos metabólicos por exceso de azúcares o harinas refinadas, tensión en garganta/tiroides (el eje Tauro-Venus) y fatiga por falta de contacto con el sol y el aire libre."
      },
      {
        love: "Relaciones desbalanceadas donde uno hace de 'salvador nutricio' y el otro de 'niño eterno'. Cortá ese rol hoy mismo: en una cama donde hay una madre y un hijo, muere el deseo entre los amantes.",
        work: "Apego neurótico al borrador: no querer delegar ni soltar tu producto al mercado porque sentís que 'nadie lo va a cuidar como vos', frenando la escala de tu negocio.",
        money: "Sensación subjetiva de escasez aun teniendo recursos, o por el contrario, gastar a cuenta de una cosecha que todavía no fue cobrada.",
        spirit: "Olvidar que la belleza y el orden del espacio físico son una forma directa de oración; un altar sucio espanta la inspiración.",
        healthAndEnergy: "Retención de líquidos, pesadez corporal por sedentarismo o descuido de la suplementación y nutrición básica."
      },
      {
        love: "Inseguridad con el propio atractivo o cierre del corazón por temor a no ser suficiente. Volvé a vestirte, perfumarte y cuidarte para tu propio deleite antes que para la mirada ajena.",
        work: "Prometer más diseño del que la estructura soporta: cuidado con los envases hermosos que adentro tienen un producto flojo o impuntual.",
        money: "Rentabilidad comida por costos estéticos superfluos que el cliente no valora; podá el gasto ornamental y fortalecé el margen real.",
        spirit: "Reconciliarte con el derecho sagrado a decir 'Basta, hoy esta energía es para mí'.",
        healthAndEnergy: "Tu cuerpo te pide tierra viva: caminar sobre césped, podar plantas reales y volver a comer alimentos con sol."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Retirá hoy mismo tu energía de cualquier persona o asunto que estés sobreprotegiendo, y dedicá dos horas enteras a embellecer tu propio cuerpo, ordenar tu taller y destrabar tu creación principal.",
      prohibition: "Prohibido hacer hoy compras por ansiedad, resolverle una tarea a alguien que puede hacerla solo, o quejarte de que nadie te cuida.",
      psychomagicAct: "Buscá una planta de tu casa o jardín que tenga hojas secas o ramas muertas; podalas con una tijera limpia sin lástima, remové la tierra apelmazada para que entre oxígeno, regala con agua pura y decí en voz alta: 'Podo lo que drena mi savia y vuelvo a regar mi propia raíz'.",
      talismanPhrase: "Cierro las fugas de mi jardín; me nutro primero a mí mismo y mi tierra vuelve a dar oro."
    },
    theAlchemyVariants: [
      {
        command: "Retirá hoy mismo tu energía de cualquier persona o asunto que estés sobreprotegiendo, y dedicá dos horas enteras a embellecer tu propio cuerpo, ordenar tu taller y destrabar tu creación principal.",
        prohibition: "Prohibido hacer hoy compras por ansiedad, resolverle una tarea a alguien que puede hacerla solo, o quejarte de que nadie te cuida.",
        psychomagicAct: "Buscá una planta de tu casa o jardín que tenga hojas secas o ramas muertas; podalas con una tijera limpia sin lástima, remové la tierra apelmazada para que entre oxígeno, regala con agua pura y decí en voz alta: 'Podo lo que drena mi savia y vuelvo a regar mi propia raíz'.",
        talismanPhrase: "Cierro las fugas de mi jardín; me nutro primero a mí mismo y mi tierra vuelve a dar oro."
      },
      {
        command: "Cortá el cordón umbilical de esa obra o producto que tenés retenido en el taller y sacalo a la luz hoy tal como está.",
        prohibition: "No regatees ni bajes tu precio por inseguridad; mantené tu valor firme aunque el comprador dude.",
        psychomagicAct: "Limpia y ordená el rincón más descuidado de tu casa o lugar de trabajo, perfumalo con unas gotas de esencia botánica o cáscara de cítrico y comé una fruta fresca de pie frente al sol declarando que recuperás tu vitalidad creadora.",
        talismanPhrase: "Renuncio a la escasez y a la asfixia; mi abundancia fluye libre y soberana."
      },
      {
        command: "Auditá tus gastos de los últimos quince días y eliminá de cuajo todo derroche de vanidad que no construya patrimonio ni salud real.",
        prohibition: "No mendigues atención ni explicaciones afectivas hoy; ocupate de brillar en tu propio eje.",
        psychomagicAct: "Tomá un puñado de tierra negra fértil entre tus manos durante un minuto sintiendo su peso y su aroma húmedo, y luego devolvelo a una maceta plantando una semilla nueva como símbolo de que tu bloqueo creativo ha terminado.",
        talismanPhrase: "Mi matriz creadora despierta limpia; siembro con orden y cosecho sin culpa."
      }
    ],

    actionOracle: {
      command: "Retirá hoy mismo tu energía de cualquier persona o asunto que estés sobreprotegiendo, y dedicá dos horas enteras a embellecer tu propio cuerpo, ordenar tu taller y destrabar tu creación principal.",
      prohibition: "Prohibido hacer hoy compras por ansiedad, resolverle una tarea a alguien que puede hacerla solo, o quejarte de que nadie te cuida.",
      psychomagicAct: "Buscá una planta de tu casa o jardín que tenga hojas secas o ramas muertas; podalas con una tijera limpia sin lástima, remové la tierra apelmazada para que entre oxígeno, regala con agua pura y decí en voz alta: 'Podo lo que drena mi savia y vuelvo a regar mi propia raíz'.",
      talismanPhrase: "Cierro las fugas de mi jardín; me nutro primero a mí mismo y mi tierra vuelve a dar oro."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano III aparece en Sombra: alerta sobre desgaste por cuidar de más afuera, bloqueo creativo o fugas por derroche.",
      secondAppearance: "La Emperatriz Invertida sale por segunda vez: seguís postergando el cuidado de tu propia raíz y de tu obra por atender demandas ajenas o caprichos pasajeros.",
      thirdAppearance: "Tercera comparecencia del Arcano III en Sombra: peligro de sequía creativa o financiera por falta de poda. Cortá hoy mismo todo drenaje parásito en tu jardín.",
      fourthPlusAppearance: "Advertencia mayor de Daleth en Sombra: el Oráculo te prohíbe seguir entregando energía sin retorno. Cerrá la puerta, nutrí tu cuerpo y da a luz tu obra retenida ahora."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Antes de exigirle frutos a la tierra o de regar jardines ajenos, volvé a regar tu propia raíz: nutrí tu cuerpo, podá el derroche y soltá lo que asfixiás.",
    counselVariants: [
      "Antes de exigirle frutos a la tierra o de regar jardines ajenos, volvé a regar tu propia raíz: nutrí tu cuerpo, podá el derroche y soltá lo que asfixiás.",
      "El árbol que no permite que le poden las ramas chuponas gasta toda su savia en hojas inútiles y se queda sin dar ni una sola manzana.",
      "Nadie se vuelve rico comprando espejismos de lujo para tapar un taller que no produce.",
      "Amá con las manos abiertas: lo que necesita estar encerrado para no irse nunca fue verdaderamente tuyo.",
      "Tu creatividad no murió; simplemente está esperando que dejes de tratarla como a una esclava y vuelvas a convidarle belleza."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 14,
        title: "La Diadema de Doce Estrellas Invertida (El Calendario Roto)",
        secret: "Con la corona estelar dada vuelta hacia el suelo, el operador pierde la sincronía con las doce estaciones del cosmos: intenta cosechar en pleno invierno por ansiedad o se queda durmiendo a la sombra cuando es la semana exacta de sembrar.",
        esotericFormula: "Desincronía Estacional = Esfuerzo a Destiempo o Pereza en la Siembra",
        meditationPrompt: "¿Estás queriendo comer hoy un fruto que todavía no regaste lo suficiente, o dejando pudrir en la planta una obra que ya tendría que haber salido?"
      },
      {
        id: "n2",
        x: 21,
        y: 44,
        title: "El Cetro de Venus Caído (El Imán Desmagnetizado)",
        secret: "En Sombra, el orbe coronado por la cruz se invierte de nuevo, haciendo que los cuatro elementos materiales aplasten al círculo del espíritu. Es el símbolo de la vanidad materialista, los celos posesivos o la pérdida del poder de atracción por mendigar afecto desde la carencia.",
        esotericFormula: "Materia sobre Espíritu = Posesividad, Gula Sensorial o Carencia",
        meditationPrompt: "¿En qué vínculo o negocio estás hoy persiguiendo con ansiedad en lugar de atraer desde tu propio valor?"
      },
      {
        id: "n3",
        x: 74,
        y: 76,
        title: "Las Espigas Ahogadas y el Escudo de Cobre Opaco",
        secret: "Las espigas de trigo invertidas en la base señalan recursos malgastados, desorden doméstico o una fertilidad que se ahoga a sí misma por falta de estructura (la falta del Emperador). El cobre de Venus sin pulir pierde su brillo espejo y se cubre de cardenillo amargo.",
        esotericFormula: "Trigo sin Cosechar = Riqueza Desperdiciada o Talento Enterrado",
        meditationPrompt: "¿Qué gasto superfluo o desorden físico en tu espacio está ahogando hoy el crecimiento de tu economía?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO IV INVERTIDO • EL EMPERADOR EN SOMBRA (HEH INVERTIDA • EL TIRANO Y EL REY CAÍDO)
  // ==========================================================================
  {
    id: 4,
    numeral: "IV",
    name: "El Emperador",
    subtitle: "El Trono Agrietado y la Jaula de Hierro",
    isReversed: true,
    palette: {
      primary: "#991b1b",
      secondary: "#52525b",
      glow: "rgba(153, 27, 27, 0.58)"
    },
    archetype: "emperor",
    shadowPolarity: {
      byExcess: "El Déspota de Piedra: autoritarismo rígido, tiranía doméstica o laboral, terquedad paranoica que teme perder el control, crueldad fría y burocracia que asfixia la innovación.",
      byDeficiency: "El Rey sin Columna: debilidad de carácter, caos administrativo y financiero, incapacidad de poner límites, síndrome de procrastinación crónica y miedo a asumir el mando."
    },
    correspondences: {
      element: "Fuego Ahogado en Ceniza o Piedra Quebradiza",
      astro: "Marte Mal Aspectado en Aries / Saturno Rígido • La Violencia del Débil o la Esclerosis de la Ley",
      hebrewLetter: "Heh (ה) en Sombra • La Ventana Tapiada por el Orgullo o la Casa sin Cimientos",
      qliphoth: "Beiriron • El Rebaño sin Pastor o la Tiranía Brutal de la Fuerza Ciega",
      alchemy: "Coagulatio Prematura • La piedra que se endurece antes de purificarse y se quiebra al primer golpe de martillo",
      hermeticAxiom: "El tirano grita porque sabe que su corona es prestada; el abdicador obedece porque le tiene pánico al peso de su propio cetro.",
      jungianComplex: "El Padre Terrible (Urano/Kronos que devora a sus hijos) o la Orfandad de Autoridad Interna",
      yesNo: "No (hay exceso de rigidez terca o una peligrosa falta de orden y límites que debés corregir ya)",
      keywords: [
        "tiranía rígida",
        "caos administrativo",
        "falta de límites",
        "miedo al descontrol",
        "autoridad vacía",
        "terquedad ciega",
        "trono vacante"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirá mi cubo de basalto partido en dos: o te volviste un carcelero de piedra que confunde el miedo con el respeto, o dejaste el trono vacío por cobardía y ahora cualquiera entra a tu reino a darte órdenes. Elegí hoy si sos un tirano, un súbdito o un Rey.",
    oracleVoiceVariants: [
      "Mirá mi cubo de basalto partido en dos: o te volviste un carcelero de piedra que confunde el miedo con el respeto, o dejaste el trono vacío por cobardía y ahora cualquiera entra a tu reino a darte órdenes. Elegí hoy si sos un tirano, un súbdito o un Rey.",
      "El que necesita golpear la mesa y alzar la voz para que le hagan caso ya perdió la corona hace rato. Tu rigidez actual no es fuerza: es pánico a que se note tu inseguridad.",
      "En el otro extremo de mi sombra, te quejás de que la plata no te rinde y el tiempo no te alcanza, pero no tenés ni un presupuesto escrito ni una rutina que respetes tres días seguidos.",
      "Las murallas se hicieron para defender la vida del reino, no para encerrar a sus habitantes en un cuartel sin sol. Si tu estructura no admite ni una flor ni un cambio, el próximo terremoto la va a partir como vidrio seco.",
      "¿Hasta cuándo vas a esperar que aparezca un 'padre' externo, un jefe o el Estado a ordenarte la vida? Empuñá el cetro Ankh hoy mismo y hacete cargo de tu territorio."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Emperador (Arcano IV) invertido diagnostica una patología estructural en el ejercicio del poder, el orden y los límites. En su polo de exceso —el *Tirano de Hierro*—, advierte que la firmeza se ha degradado en terquedad inflexible, autoritarismo frío, obsesión de control o choque con una figura de poder abusiva e irracional. En su polo de defecto —el *Trono Vacante*—, señala exactamente lo contrario: anarquía operativa, falta de autodisciplina, cuentas desordenadas, promesas incumplidas y una peligrosa debilidad para defender tus fronteras ante quienes invaden tu tiempo o tu negocio.",
    meaningVariants: [
      "El Emperador (Arcano IV) invertido diagnostica una patología estructural en el ejercicio del poder, el orden y los límites. En su polo de exceso —el *Tirano de Hierro*—, advierte que la firmeza se ha degradado en terquedad inflexible, autoritarismo frío, obsesión de control o choque con una figura de poder abusiva e irracional. En su polo de defecto —el *Trono Vacante*—, señala exactamente lo contrario: anarquía operativa, falta de autodisciplina, cuentas desordenadas, promesas incumplidas y una peligrosa debilidad para defender tus fronteras ante quienes invaden tu tiempo o tu negocio.",
      "En el Sendero 15 del Árbol de la Vida (la letra Heh, 'La Ventana'), El Emperador debe dejar pasar la luz sabia de Chokmah hacia el corazón de Tiphereth. Cuando se invierte, el monarca tapia la ventana con piedra negra: ya no escucha consejos, no lee las señales del mercado y pretende que la realidad entera se adapte por decreto a su capricho mental.",
      "Alquímicamente, el Arcano IV en sombra es una *Coagulatio* viciada: fijar una forma demasiado rígida antes de haber eliminado las impurezas, produciendo un hierro quebradizo que salta en pedazos bajo presión, o bien carecer del fuego marcial necesario para que la obra cuaje, dejando todo en un barro blando e informal.",
      "En el plano comercial e institucional, esta carta invertida alerta sobre trabas burocráticas, inspecciones severas, socios despóticos o una falla grave en los cimientos administrativos y contables de tu emprendimiento que no podés seguir ignorando.",
      "Recordá la enseñanza de Lao Tsé sobre el Arcano IV: *'Lo vivo es flexible y firme como el junco; lo muerto es duro y rígido como el tronco seco'*. Si tu estructura actual se volvió una jaula sin flexibilidad, aflojá los tornillos hoy mismo; si tu vida es un campamento sin ley, levantá las cuatro paredes antes del anochecer."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica junguiana, El Emperador invertido revela la *Herida del Padre*: quien sufrió en su infancia una autoridad aplastante o una ausencia paterna caótica desarrolla de adulto una alergia neurótica al orden (saboteando sus propios horarios, impuestos y sistemas porque siente que toda regla es una opresión) o se identifica con el agresor volviéndose un déspota implacable consigo mismo y con los demás.",
    theWoundVariants: [
      "En la clínica junguiana, El Emperador invertido revela la *Herida del Padre*: quien sufrió en su infancia una autoridad aplastante o una ausencia paterna caótica desarrolla de adulto una alergia neurótica al orden (saboteando sus propios horarios, impuestos y sistemas porque siente que toda regla es una opresión) o se identifica con el agresor volviéndose un déspota implacable consigo mismo y con los demás.",
      "Robert Moore denominó a las dos sombras del arquetipo Real el *Rey Tirano* y el *Rey Alfeñique* (Débil). Ambos nacen exactamente de la misma raíz: el terror profundo a la vulnerabilidad y a no estar a la altura de la corona. El Tirano ataca primero para que nadie vea su miedo; el Débil abdica antes de pelear para que nadie le exija resultados.",
      "El pánico al Caos Primordial: haber vivido épocas de inestabilidad extrema dejó en tu psique una necesidad compulsiva de hipercontrolar cada milímetro de tu entorno y de las personas cercanas, asfixiando toda espontaneidad.",
      "La culpa de mandar: el miedo inconsciente a que si ejercés tu autoridad legítima, cobrás con firmeza o decís que no, dejarán de quererte."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El doble autoengaño del Emperador en sombra es letal: si caés en la tiranía, te decís *'Soy duro porque acá nadie hace nada bien si no estoy yo encima'*, sin ver que tu microgestión paranoica espanta el talento; si caés en la debilidad, te decís *'Soy relajado y flexible'*, cuando en realidad tenés miedo al conflicto de poner orden.",
    theIllusionVariants: [
      "El doble autoengaño del Emperador en sombra es letal: si caés en la tiranía, te decís *'Soy duro porque acá nadie hace nada bien si no estoy yo encima'*, sin ver que tu microgestión paranoica espanta el talento; si caés en la debilidad, te decís *'Soy relajado y flexible'*, cuando en realidad tenés miedo al conflicto de poner orden.",
      "Creer que terquedad es constancia: seguir chocando la cabeza contra un método comercial o técnico que los números ya demostraron que no funciona, solo por el orgullo de no admitir que hubo un error de cálculo.",
      "La ilusión de que 'los papeles y las cuentas se acomodan después': creer que podés escalar un negocio o sostener un patrimonio llevando los números en el aire o mezclando la caja chica con tu bolsillo.",
      "Confundir frialdad con fortaleza: creer que encerrar tus sentimientos en una caja fuerte de hierro te hace invulnerable, cuando en verdad te deja solo en un trono helado."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, este Arcano invertido muestra un desequilibrio en el *Superyó* y en el principio ordenador del *Logos*. O bien el sujeto está aplastado por un juez rígido que no tolera la incertidumbre ni la ternura, o bien carece de la estructura ejecutiva mínima (función paterna interna) para transformar sus deseos en hábitos sostenidos.",
    psycheVariants: [
      "Psicológicamente, este Arcano invertido muestra un desequilibrio en el *Superyó* y en el principio ordenador del *Logos*. O bien el sujeto está aplastado por un juez rígido que no tolera la incertidumbre ni la ternura, o bien carece de la estructura ejecutiva mínima (función paterna interna) para transformar sus deseos en hábitos sostenidos.",
      "La armadura de obsidiana se ha soldado a tu piel: llevás tanta tensión acumulada en la mandíbula, la nuca y los hombros por querer sostener todo a la fuerza que estás al borde del quiebre por fatiga de materiales.",
      "Si el bloqueo es por falta de orden, tu ansiedad actual proviene de vivir en un territorio sin fronteras: cada tarea sin horario y cada cuenta sin anotar es una puerta abierta por donde entra el caos.",
      "Sanar al Emperador exige casar la firmeza de Aries con la sabiduría del corazón: firmeza de roca en los principios, flexibilidad de agua en las formas."
    ],

    lightAndShadow: "En Sombra Activa: Autoritarismo rígido, tiranía, inflexibilidad terca, miedo a perder el control, o en su polo opuesto, desorganización crónica, falta de límites y debilidad de mando.",
    lightAndShadowVariants: [
      "En Sombra Activa: Autoritarismo rígido, tiranía, inflexibilidad terca, miedo a perder el control, o en su polo opuesto, desorganización crónica, falta de límites y debilidad de mando.",
      "Sombra por Exceso: Despotismo marcial, frialdad de piedra, burocracia asfixiante y orgullo que no escucha. Sombra por Defecto: Anarquía operativa, procrastinación, cuentas en rojo por desidia y abdicación del poder.",
      "Distorsión de Heh: La fortaleza convertida en prisión o el reino sin murallas invadido por la dispersión."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Luchas de poder por ver quién manda en la relación, frialdad emocional detrás de una coraza de orgullo, machismo/autoritarismo o incapacidad de pedir perdón; en su polo débil, falta de presencia sólida y promesas que se desarman al primer viento. Bajá las armas en tu casa: a la pareja se entra sin yelmo.",
      work: "Peligro de asfixiar tu negocio por exceso de rigidez mental (negarse a actualizar procesos) o de hundirlo por descontrol administrativo (falta de inventario, costos sin medir, horarios incumplidos). Si lidiás con un jefe o institución tiránica, no choques de frente por orgullo: usá la ley y los datos fríos a tu favor.",
      money: "Desorden contable peligroso, mezcla de finanzas personales con las del negocio, multas o recargos por descuidar vencimientos, o bien avaricia rígida que congela el capital por miedo a perder el control.",
      spirit: "Confundir el control neurótico del ego con el autodominio espiritual; querer darle órdenes al universo en lugar de alinearse con su geometría.",
      healthAndEnergy: "Hipertensión arterial, cefaleas tensionales en casco, bruxismo nocturno, rigidez articular o contracturas severas de cuello y espalda por negarse a soltar el control."
    },
    domainsVariants: [
      {
        love: "Luchas de poder por ver quién manda en la relación, frialdad emocional detrás de una coraza de orgullo, machismo/autoritarismo o incapacidad de pedir perdón; en su polo débil, falta de presencia sólida y promesas que se desarman al primer viento. Bajá las armas en tu casa: a la pareja se entra sin yelmo.",
        work: "Peligro de asfixiar tu negocio por exceso de rigidez mental (negarse a actualizar procesos) o de hundirlo por descontrol administrativo (falta de inventario, costos sin medir, horarios incumplidos). Si lidiás con un jefe o institución tiránica, no choques de frente por orgullo: usá la ley y los datos fríos a tu favor.",
        money: "Desorden contable peligroso, mezcla de finanzas personales con las del negocio, multas o recargos por descuidar vencimientos, o bien avaricia rígida que congela el capital por miedo a perder el control.",
        spirit: "Confundir el control neurótico del ego con el autodominio espiritual; querer darle órdenes al universo en lugar de alinearse con su geometría.",
        healthAndEnergy: "Hipertensión arterial, cefaleas tensionales en casco, bruxismo nocturno, rigidez articular o contracturas severas de cuello y espalda por negarse a soltar el control."
      },
      {
        love: "En su polo pasivo, estás dejando que terceros (familiares o exparejas) dicten las reglas de tu intimidad por no animarte a plantar bandera con firmeza.",
        work: "Microgestión agotadora: si no aprendés a sistematizar y delegar con reglas claras, te vas a convertir en el cuello de botella que impide crecer a tu propia empresa.",
        money: "Pérdidas por terquedad: seguir inyectando dinero en un capricho comercial sin retorno solo para no reconocer que el cálculo inicial estaba mal hecho.",
        spirit: "Dureza de corazón: juzgar la vulnerabilidad propia o ajena como un defecto en vez de honrarla como parte de la vida (el Ankh).",
        healthAndEnergy: "Exceso de fuego marcial retenido en la cabeza o agotamiento por falta de rutina de sueño y entrenamiento."
      },
      {
        love: "El orgullo herido está levantando un muro de basalto entre dos personas que se quieren: quien tiene la verdadera grandeza del Rey es el primero en tender la mano sin miedo a perder autoridad.",
        work: "Falta de columna vertebral en las negociaciones: ceder descuentos excesivos o aceptar plazos imposibles por miedo a que el cliente se vaya.",
        money: "Urgencia de poner en regla papeles, habilitaciones, contratos o impuestos pendientes antes de que una auditoría externa te tome con la guardia baja.",
        spirit: "Reconciliarte con el principio de Autoridad: aprender a obedecer a tu propio código ético sin necesitar un capataz afuera.",
        healthAndEnergy: "Cuidá el metabolismo del hierro, la vista y las vértebras cervicales; descargá la furia contenida con ejercicio físico pesado."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Diagnosticá tu polo hoy mismo: si estás en el caos blando, imponete tres reglas escritas e innegociables de horario y caja ahora; si estás en la rigidez tiránica, cedé el control de un asunto menor y escuchá sin interrumpir.",
      prohibition: "Prohibido levantar la voz para imponer razón, dejar una cuenta sin registrar hoy, o culpar a la 'mala suerte' de lo que es pura falta de método.",
      psychomagicAct: "Tomá una regla rígida de madera o plástico viejo (símbolo de la rigidez terca) y un papel desordenado (símbolo del caos); rompé el papel caótico tirándolo a la basura, apoyá en su lugar una piedra cúbica o libro pesado perfectamente alineado con los bordes de tu mesa y decí: 'Destierro al tirano y al esclavo; instalo en mi mesa el orden flexible del Rey'.",
      talismanPhrase: "Mi autoridad nace de mi propio orden interior; soy firme como la roca en el centro y flexible en la forma."
    },
    theAlchemyVariants: [
      {
        command: "Diagnosticá tu polo hoy mismo: si estás en el caos blando, imponete tres reglas escritas e innegociables de horario y caja ahora; si estás en la rigidez tiránica, cedé el control de un asunto menor y escuchá sin interrumpir.",
        prohibition: "Prohibido levantar la voz para imponer razón, dejar una cuenta sin registrar hoy, o culpar a la 'mala suerte' de lo que es pura falta de método.",
        psychomagicAct: "Tomá una regla rígida de madera o plástico viejo (símbolo de la rigidez terca) y un papel desordenado (símbolo del caos); rompé el papel caótico tirándolo a la basura, apoyá en su lugar una piedra cúbica o libro pesado perfectamente alineado con los bordes de tu mesa y decí: 'Destierro al tirano y al esclavo; instalo en mi mesa el orden flexible del Rey'.",
        talismanPhrase: "Mi autoridad nace de mi propio orden interior; soy firme como la roca en el centro y flexible en la forma."
      },
      {
        command: "Poné en caja hoy mismo ese desorden administrativo, contable o de inventario que venías pateando para adelante: los números en limpio devuelven la corona.",
        prohibition: "No confundas poner un límite firme con maltratar; decí que no con una sonrisa tranquila e inamovible.",
        psychomagicAct: "Quitate el reloj, el cinturón o cualquier prenda ajustada al llegar a tu casa hoy, lavate las manos con agua tibia y declará al cruzar la puerta: 'Dejo la armadura de combate afuera; en mi hogar reina la paz y la ternura'.",
        talismanPhrase: "Suelto la armadura del miedo; no necesito oprimir para gobernar mi destino."
      },
      {
        command: "Tomá hoy esa decisión de mando que estabas esperando que otro tomara por vos, y asumí por escrito su fecha de cumplimiento.",
        prohibition: "No sigas insistiendo por puro orgullo con una táctica que ya chocó tres veces contra el mismo muro; cambiá el ángulo de ataque.",
        psychomagicAct: "Dibujá un cuadrado perfecto en una hoja, abrí una pequeña 'ventana' (el significado de la letra Heh) en su lado superior para que entre el aire y el sol, y escribí adentro las tres columnas reales que sostienen tu economía este mes.",
        talismanPhrase: "Abro la ventana de Heh en mi fortaleza; mi estructura protege la vida sin encerrarla."
      }
    ],

    actionOracle: {
      command: "Diagnosticá tu polo hoy mismo: si estás en el caos blando, imponete tres reglas escritas e innegociables de horario y caja ahora; si estás en la rigidez tiránica, cedé el control de un asunto menor y escuchá sin interrumpir.",
      prohibition: "Prohibido levantar la voz para imponer razón, dejar una cuenta sin registrar hoy, o culpar a la 'mala suerte' de lo que es pura falta de método.",
      psychomagicAct: "Tomá una regla rígida de madera o plástico viejo (símbolo de la rigidez terca) y un papel desordenado (símbolo del caos); rompé el papel caótico tirándolo a la basura, apoyá en su lugar una piedra cúbica o libro pesado perfectamente alineado con los bordes de tu mesa y decí: 'Destierro al tirano y al esclavo; instalo en mi mesa el orden flexible del Rey'.",
      talismanPhrase: "Mi autoridad nace de mi propio orden interior; soy firme como la roca en el centro y flexible en la forma."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano IV aparece en Sombra: alerta estructural sobre exceso de rigidez autoritaria o falta peligrosa de orden y límites.",
      secondAppearance: "El Emperador Invertido sale por segunda vez: seguís dejando el timón administrativo suelto o chocando por terquedad contra una pared. Corregí la estructura hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano IV en Sombra: tus cimientos financieros u operativos están sufriendo por falta de ley clara o por capricho de ego. Ordená las cuentas de inmediato.",
      fourthPlusAppearance: "Ultimátum marcial de Heh en Sombra: el Oráculo te advierte que un reino dividido o sin gobierno cae por su propio peso. Sentate en el trono con humildad y disciplina hoy mismo."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "El roble demasiado rígido se quiebra en la primera tormenta y el árbol sin raíces cae al primer soplo: cambiá la imposición por firmeza flexible y el caos por método.",
    counselVariants: [
      "El roble demasiado rígido se quiebra en la primera tormenta y el árbol sin raíces cae al primer soplo: cambiá la imposición por firmeza flexible y el caos por método.",
      "Quien no sabe gobernarse a sí mismo a las ocho de la mañana cuando suena el despertador, jamás podrá gobernar un imperio al mediodía.",
      "Un Rey inseguro levanta muros para que nadie vea que tiembla; un Rey verdadero abre las puertas porque conoce la fuerza de su ley.",
      "Las cuentas claras y los horarios firmes no matan la creatividad: son el vaso de piedra que evita que el vino se derrame en el barro.",
      "Dejá de pelear por tener la razón en la mesa chica cuando lo que te toca es ganar la guerra en el mapa grande."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "El Yelmo-Corona Cegado por el Orgullo",
        secret: "Al invertirse la figura, el pesado yelmo de acero y rubí parece caer sobre los ojos del monarca, cerrando la ventana de la letra Heh. Representa la terquedad dogmática y la furia marciana mal aspectada: cuando el líder se niega a escuchar datos nuevos porque siente que cambiar de plan es una derrota para su ego.",
        esotericFormula: "Corona Invertida = Orgullo Ciego o Pérdida del Mando Racional",
        meditationPrompt: "¿En qué asunto actual te estás negando a escuchar una crítica constructiva o un dato real solo por no dar el brazo a torcer?"
      },
      {
        id: "n2",
        x: 20,
        y: 42,
        title: "Los Carneros de Aries Chocando a Ciegas",
        secret: "En Luz, los carneros dorados del trono simbolizan el impulso creador contenido en la piedra; en Sombra, representan el choque frontal, la agresividad impulsiva o la falta total de dirección ejecutiva (dar topetazos contra el muro equivocado mientras el trono queda desprotegido).",
        esotericFormula: "Aries Desbocado = Choque de Egos sin Estrategia",
        meditationPrompt: "¿Estás usando hoy tu fuerza para construir los muros de tu obra o la estás quemando en discusiones de poder estériles?"
      },
      {
        id: "n3",
        x: 78,
        y: 62,
        title: "El Cetro Ankh y el Orbe Quebrado",
        secret: "Cuando el Ankh de la vida y el Orbe del mundo quedan cabeza abajo, la estructura deja de servir a la vida: o se convierte en una burocracia muerta que aplasta el entusiasmo (exceso de piedra), o el mundo material se te escurre entre los dedos por falta de control contable y disciplina (falta de cubo).",
        esotericFormula: "Estructura sin Vida (Tiranía) o Vida sin Estructura (Anarquía)",
        meditationPrompt: "¿Qué parte de tu administración, horario o finanzas está hoy fuera de control y necesita mano firme antes de que termine el día?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO V INVERTIDO • EL HIEROFANTE EN SOMBRA (VAV INVERTIDA • EL DOGMA MUERTO Y LA REBELDÍA CIEGA)
  // ==========================================================================
  {
    id: 5,
    numeral: "V",
    name: "El Hierofante",
    subtitle: "El Ídolo de Barro y la Llave Oxidada",
    isReversed: true,
    palette: {
      primary: "#4f46e5",
      secondary: "#78716c",
      glow: "rgba(79, 70, 229, 0.55)"
    },
    archetype: "hierophant",
    shadowPolarity: {
      byExcess: "El Gran Inquisidor y el Fariseo: dogmatismo ciego, hipocresía moral, esclavitud al 'qué dirán' social, ortodoxia asfixiante que prohíbe pensar por cuenta propia y soberbia de casta.",
      byDeficiency: "El Falso Profeta y el Rebelde sin Causa: desprecio arrogante por los fundamentos técnicos del oficio, romper compromisos éticos por atajos turbios, charlatanería o desconexión de la voz interior."
    },
    correspondences: {
      element: "Tierra Petrificada / Ruido Dogmático que tapa el Oído Interior",
      astro: "Tauro Afligido / Júpiter en Exilio • La Rigidez del Molde Heredado o la Traición al Pacto",
      hebrewLetter: "Vav (ו) en Sombra • El Clavo Torcido que desune el Cielo de la Tierra",
      qliphoth: "Adimiron • La Hipocresía Ritual y los Dogmas Vacíos de Espíritu",
      alchemy: "Fermentatio Ácida • La levadura vieja que avinagra la masa en lugar de elevarla",
      hermeticAxiom: "Cuando el dedo apunta al sol, el fanático adora al dedo y apedrea al que mira al cielo; cuando el necio desprecia a los maestros, se pasa la vida reinventando el barro.",
      jungianComplex: "La Sombra del Senex (El Juez Moralista Colectivo) o la Inflación Iconoclasta",
      yesNo: "No por la vía convencional (cuestioná el molde obsoleto, pero no traiciones jamás tu ética ni las leyes reales del oficio)",
      keywords: [
        "dogmatismo ciego",
        "hipocresía moral",
        "esclavitud al qué dirán",
        "atajo antiético",
        "rebeldía estéril",
        "molde obsoleto",
        "falso gurú"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame bien en el espejo de la sombra: o estás viviendo arrodillado ante mandatos familiares y sociales que ya no creés, o te creés tan especial que despreciás las leyes milenarias del oficio para buscar un atajo barato. Rompé el ídolo de barro, pero salvá el fuego del altar.",
    oracleVoiceVariants: [
      "Mirame bien en el espejo de la sombra: o estás viviendo arrodillado ante mandatos familiares y sociales que ya no creés, o te creés tan especial que despreciás las leyes milenarias del oficio para buscar un atajo barato. Rompé el ídolo de barro, pero salvá el fuego del altar.",
      "¿Para quién estás actuando hoy? Cada vez que tomás una decisión por temor a lo que vaya a opinar la tribu o la parroquia, cambiás la corona de tu espíritu por un collar de oveja.",
      "Cuidado con los falsos maestros de lengua dorada y manos sucias: donde mi tiara sale invertida, hay doctrinas que buscan clientes sumisos en lugar de hombres libres.",
      "En mi otra cara oscura, te advierto contra el pecado del aprendiz soberbio: querer saltearse la química, la matemática o la ética de la fórmula creyendo que nadie se va a dar cuenta.",
      "El clavo de oro de mi letra Vav se dobló porque predicás una filosofía muy alta de la boca para afuera, pero en el taller privado negociás tus propios principios."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Hierofante (Arcano V) invertido sacude los cimientos de las creencias heredadas, las instituciones y la ética profesional. En su lectura luminosa de liberación, te convoca a despertar como un *Librepensador Soberano*: señala que un molde social, familiar o corporativo ya te queda irremediablemente chico y que ha llegado la hora de cuestionar el 'siempre se hizo así' para abrir un camino original y propio. Sin embargo, en su faz densa de sombra, advierte contra dos abismos opuestos: quedar atrapado en el dogmatismo hipócrita y el miedo al juicio social, o caer en la tentación del atajo deshonesto, el mal asesoramiento y la traición a la palabra empeñada.",
    meaningVariants: [
      "El Hierofante (Arcano V) invertido sacude los cimientos de las creencias heredadas, las instituciones y la ética profesional. En su lectura luminosa de liberación, te convoca a despertar como un *Librepensador Soberano*: señala que un molde social, familiar o corporativo ya te queda irremediablemente chico y que ha llegado la hora de cuestionar el 'siempre se hizo así' para abrir un camino original y propio. Sin embargo, en su faz densa de sombra, advierte contra dos abismos opuestos: quedar atrapado en el dogmatismo hipócrita y el miedo al juicio social, o caer en la tentación del atajo deshonesto, el mal asesoramiento y la traición a la palabra empeñada.",
      "En el Árbol de la Vida, el Sendero 16 de Vav une la Sabiduría viva (Chokmah) con la Misericordia (Chesed) a través de la audición interior de Tauro. Cuando este sendero se invierte, el 'Oído Espiritual' queda tapado por el griterío de las opiniones colectivas o de los falsos gurúes. Dejaste de escuchar a tu propio Maestro Interior para seguir recetas enlatadas que no tienen nada que ver con tu verdadera naturaleza.",
      "Alquímicamente, el Arcano V en sombra representa el uso de un fermento adulterado o viejo: si intentás construir una marca de excelencia, un destilado noble o un vínculo sagrado rebajando la pureza de los insumos para ahorrar tiempo o dinero, toda la partida terminará corrompiéndose. La ley de Tauro no perdona los fraudes de calidad.",
      "En el ámbito institucional o comercial, esta carta invertida alerta sobre burocracias obsoletas, contratos con cláusulas leoninas impuestas por 'tradición', asesores incompetentes que repiten manuales viejos sin entender tu negocio, o sociedades donde se rompió el código de honor.",
      "El Pentagrama del número Cinco invertido es el precursor directo de la sombra del Arcano XV (El Diablo): cuando el ser humano renuncia a pensar con su propia conciencia ética —ya sea por sumisión ciega al rebaño o por cinismo amoral—, entrega las llaves de su templo."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda, El Hierofante invertido toca la herida de la *Excomunión de la Tribu*: el pánico atávico e inconsciente a ser rechazado, criticado o declarado 'oveja negra' por la familia o el gremio si te atrevés a vivir y crear según tu propia verdad.",
    theWoundVariants: [
      "En la psicología profunda, El Hierofante invertido toca la herida de la *Excomunión de la Tribu*: el pánico atávico e inconsciente a ser rechazado, criticado o declarado 'oveja negra' por la familia o el gremio si te atrevés a vivir y crear según tu propia verdad.",
      "En su polo opuesto (la rebeldía compulsiva), opera la herida de la *Traición de los Mentores*: haber descubierto en tu juventud la hipocresía de figuras religiosas, morales o paternas te dejó una desconfianza reactiva que hoy te hace rechazar incluso los consejos sabios y las técnicas probadas que te ahorrarían años de tropiezos.",
      "El complejo de Inferioridad Doctrinal: creer que la sabiduría sagrada o la alta maestría técnica pertenecen solo a una casta de 'elegidos con diploma' y que tu experiencia empírica en el barro del taller vale menos.",
      "La culpa moral prestada: cargar sobre los hombros mandatos sobre el dinero, el sexo o el éxito que fueron escritos hace cien años por personas que no conocieron tu mundo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño del Hierofante en sombra tiene dos disfraces: el sumiso se dice *'Hago lo correcto y respeto las formas'*, cuando en realidad tiene pánico de pensar por sí mismo; el transgresor se dice *'Las reglas no aplican para mí porque soy distinto'*, cuando en realidad está buscando justificar una chapuza técnica o una falta de palabra.",
    theIllusionVariants: [
      "El autoengaño del Hierofante en sombra tiene dos disfraces: el sumiso se dice *'Hago lo correcto y respeto las formas'*, cuando en realidad tiene pánico de pensar por sí mismo; el transgresor se dice *'Las reglas no aplican para mí porque soy distinto'*, cuando en realidad está buscando justificar una chapuza técnica o una falta de palabra.",
      "La ilusión del 'Título o Envase Sagrado': creer que por usar palabras difíciles, jerga técnica o vestiduras solemnes ya tenés autoridad, sin haber pasado por las horas reales de fuego en el laboratorio.",
      "El espejismo del consenso: creer que porque todo el mundo en tu ciudad o en tu rubro repite el mismo error comercial desde hace veinte años, ese error es 'la única forma de trabajar'.",
      "Autoengañarte diciendo *'nadie se va a dar cuenta si bajo un poco la calidad en este lote'*: tu propia conciencia (el Maestro Interior) se da cuenta en el primer segundo y tu autoridad energética se desploma."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, este Arcano invertido señala una crisis entre la *Conciencia Colectiva* (la norma social) y la *Individuación*. El sujeto o bien sufre bajo la tiranía de un Superyó prestado lleno de culpas y 'deberías', o bien actúa por reacción adolescente rompiendo estructuras valiosas sin haber construido antes un criterio propio superior.",
    psycheVariants: [
      "Psicológicamente, este Arcano invertido señala una crisis entre la *Conciencia Colectiva* (la norma social) y la *Individuación*. El sujeto o bien sufre bajo la tiranía de un Superyó prestado lleno de culpas y 'deberías', o bien actúa por reacción adolescente rompiendo estructuras valiosas sin haber construido antes un criterio propio superior.",
      "Tu centro laríngeo (Tauro / la garganta) está bloqueado: callás tu verdadera opinión frente a figuras de autoridad aparente o tragás dogmas que tu inteligencia rechaza.",
      "Vigilá la proyección del 'Salvador o Gurú': no entregues hoy tu poder de decisión a ningún consultor, maestro o sistema externo sin pasarlo antes por el tamiz crítico de tu propia razón y experiencia.",
      "La integración del Arcano V exige conservar el rigor ético y técnico del maestro clásico, pero aplicándolo con la libertad creadora del hereje lúcido."
    ],

    lightAndShadow: "En Sombra Activa: Dogmatismo ciego, hipocresía moral, servidumbre a mandatos sociales obsoletos, mal asesoramiento, o bien rebeldía sin fundamento y ruptura de códigos éticos.",
    lightAndShadowVariants: [
      "En Sombra Activa: Dogmatismo ciego, hipocresía moral, servidumbre a mandatos sociales obsoletos, mal asesoramiento, o bien rebeldía sin fundamento y ruptura de códigos éticos.",
      "Sombra por Exceso: Fanatismo ortodoxo, miedo al qué dirán, burocracia ritual muerta y fariseísmo. Sombra por Defecto: Improvisación chapucera, desprecio de las bases del arte y deslealtad contractual.",
      "Distorsión de Vav: El puente cortado entre lo que se predica en público y lo que se practica en secreto."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Relaciones atrapadas en el 'qué dirán' o en guiones sociales aburridos donde se cuida más la foto familiar hacia afuera que la verdad viva hacia adentro. También advierte sobre choques de valores éticos o religiosos en la pareja. Rompan hoy los mandatos heredados y escriban las leyes propias de su intimidad.",
      work: "Choque con estructuras comerciales anticuadas o burocráticas que frenan la innovación. Es momento de cuestionar las fórmulas viejas de tu rubro y modernizar tu método, pero cuidando al extremo no caer en atajos que comprometan la calidad técnica o legal de tu producto. Desconfiá de asesores que venden recetas mágicas.",
      money: "Cuidado con cláusulas abusivas en bancos o instituciones, gastos hechos solo por 'mantener el estatus social' ante terceros, o pérdidas por ignorar las reglas fiscales y contables básicas.",
      spirit: "Liberación de dogmas religiosos basados en la culpa y el miedo; dejar de buscar intermediarios externos para hablar directamente con lo sagrado en tu propio templo.",
      healthAndEnergy: "Afecciones de garganta, disfonías, contracturas severas de cuello y nuca ('el yugo de Tauro') por callar tu verdad o cargar mandatos ajenos."
    },
    domainsVariants: [
      {
        love: "Relaciones atrapadas en el 'qué dirán' o en guiones sociales aburridos donde se cuida más la foto familiar hacia afuera que la verdad viva hacia adentro. También advierte sobre choques de valores éticos o religiosos en la pareja. Rompan hoy los mandatos heredados y escriban las leyes propias de su intimidad.",
        work: "Choque con estructuras comerciales anticuadas o burocráticas que frenan la innovación. Es momento de cuestionar las fórmulas viejas de tu rubro y modernizar tu método, pero cuidando al extremo no caer en atajos que comprometan la calidad técnica o legal de tu producto. Desconfiá de asesores que venden recetas mágicas.",
        money: "Cuidado con cláusulas abusivas en bancos o instituciones, gastos hechos solo por 'mantener el estatus social' ante terceros, o pérdidas por ignorar las reglas fiscales y contables básicas.",
        spirit: "Liberación de dogmas religiosos basados en la culpa y el miedo; dejar de buscar intermediarios externos para hablar directamente con lo sagrado en tu propio templo.",
        healthAndEnergy: "Afecciones de garganta, disfonías, contracturas severas de cuello y nuca ('el yugo de Tauro') por callar tu verdad o cargar mandatos ajenos."
      },
      {
        love: "Alguien en el vínculo está actuando como un juez moralista desde un pedestal de superioridad, o bien se ha quebrado un pacto de lealtad y confianza que requiere verdad total sobre la mesa.",
        work: "No desprecies el manual técnico hoy: si un lote, un código o un sistema está fallando, no es por 'mala suerte', es porque te salteaste un paso básico de los fundamentos de la disciplina.",
        money: "Peligro de entrar en negocios grises o informales que prometen margen rápido pero ponen en riesgo el prestigio limpio que te costó años construir.",
        spirit: "Hipocresía espiritual: hablar de luz y trascendencia mientras se descuida el trato justo y la palabra cumplida en el mundo material.",
        healthAndEnergy: "Rigidez en las vértebras cervicales y tensión en el oído interno; necesitás aflojar el cuello y dejar de querer tener siempre la última palabra doctrinal."
      },
      {
        love: "Miedo a formalizar o a vivir un amor diferente porque no encaja en el molde tradicional de tu entorno. Tu felicidad no se vota en asamblea familiar.",
        work: "Convertite en el innovador hereje de tu sector: conservá el cien por ciento de la nobleza artesanal del producto, pero tirá a la basura las formas viejas de venderlo o presentarlo.",
        money: "Revisá dos veces los consejos financieros de 'expertos' tradicionales que no entienden la nueva economía en la que te movés.",
        spirit: "Recuperar la Clariaudiencia interior: hacer silencio hasta volver a distinguir la voz de tu conciencia de la voz grabada de tus padres o maestros.",
        healthAndEnergy: "Voz cansada o nudo en la laringe; cantá, hablá en voz alta a solas y liberá el canal del verbo."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Separá hoy el trigo de la paja en tus reglas: rompé sin culpa un mandato social o comercial obsoleto que te frenaba, pero blindá al cien por ciento los fundamentos técnicos y éticos de tu obra.",
      prohibition: "Prohibido actuar hoy para conformar la opinión ajena, aceptar el consejo de alguien que no construyó nada real, o rebajar la calidad de tu trabajo en secreto.",
      psychomagicAct: "Escribí en un papel viejo una regla familiar, social o del rubro que sientas como una cadena muerta ('deberías hacer esto así'); rompelo frente a vos y en una tarjeta limpia escribí tu propio axioma vivo de trabajo, sellándolo encima con el peso de una llave metálica.",
      talismanPhrase: "Rompo los dogmas muertos que apagan mi ingenio, pero honro con fuego la ley sagrada de mi propia conciencia."
    },
    theAlchemyVariants: [
      {
        command: "Separá hoy el trigo de la paja en tus reglas: rompé sin culpa un mandato social o comercial obsoleto que te frenaba, pero blindá al cien por ciento los fundamentos técnicos y éticos de tu obra.",
        prohibition: "Prohibido actuar hoy para conformar la opinión ajena, aceptar el consejo de alguien que no construyó nada real, o rebajar la calidad de tu trabajo en secreto.",
        psychomagicAct: "Escribí en un papel viejo una regla familiar, social o del rubro que sientas como una cadena muerta ('deberías hacer esto así'); rompelo frente a vos y en una tarjeta limpia escribí tu propio axioma vivo de trabajo, sellándolo encima con el peso de una llave metálica.",
        talismanPhrase: "Rompo los dogmas muertos que apagan mi ingenio, pero honro con fuego la ley sagrada de mi propia conciencia."
      },
      {
        command: "Si te salteaste un paso técnico o dejaste una promesa ética a medias, volvé atrás hoy mismo y corregilo desde la base aunque nadie más lo vea.",
        prohibition: "No te subas al púlpito a dar lecciones morales a nadie hoy; enseñá exclusivamente con la contundencia silenciosa de tu propio ejemplo.",
        psychomagicAct: "Tomá una llave vieja que ya no abra ninguna puerta y dejala fuera de tu espacio de trabajo, colocando en tu llavero o escritorio únicamente las llaves activas mientras decís: 'Suelto las doctrinas vencidas; me quedo solo con las llaves que abren el presente'.",
        talismanPhrase: "Mi templo interior no tiene intermediarios; mi palabra privada vale lo mismo que mi palabra pública."
      },
      {
        command: "Cuestioná hoy el método estándar de tu mercado e introducí una innovación audaz respaldada por un estudio técnico impecable.",
        prohibition: "No entregues tu autoridad ni tu criterio a ningún 'experto' sin verificar vos mismo las fuentes y los números.",
        psychomagicAct: "Llevá ambas manos a tus oídos tapándolos durante treinta segundos en silencio total para escuchar el latido interno de tu sangre (el oído de Tauro), y al destaparlos decí en voz alta: 'Apago el ruido del rebaño; solo obedezco al Maestro que habita en mi pecho'.",
        talismanPhrase: "Soy libre del qué dirán y fiel hasta el hueso a la excelencia de mi Arte."
      }
    ],

    actionOracle: {
      command: "Separá hoy el trigo de la paja en tus reglas: rompé sin culpa un mandato social o comercial obsoleto que te frenaba, pero blindá al cien por ciento los fundamentos técnicos y éticos de tu obra.",
      prohibition: "Prohibido actuar hoy para conformar la opinión ajena, aceptar el consejo de alguien que no construyó nada real, o rebajar la calidad de tu trabajo en secreto.",
      psychomagicAct: "Escribí en un papel viejo una regla familiar, social o del rubro que sientas como una cadena muerta ('deberías hacer esto así'); rompelo frente a vos y en una tarjeta limpia escribí tu propio axioma vivo de trabajo, sellándolo encima con el peso de una llave metálica.",
      talismanPhrase: "Rompo los dogmas muertos que apagan mi ingenio, pero honro con fuego la ley sagrada de mi propia conciencia."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano V aparece invertido en la tirada: es hora de cuestionar dogmas prestados o de revisar con lupa la ética y los fundamentos técnicos del asunto.",
      secondAppearance: "El Hierofante en Sombra sale por segunda vez: seguís atado a un molde viejo por miedo al qué dirán, o estás intentando tomar un atajo salteándote las bases del oficio.",
      thirdAppearance: "Tercera comparecencia del Arcano V Invertido: alerta de hipocresía, mal consejo externo o fractura de confianza. Volvé inmediatamente a tu verdad ética interior.",
      fourthPlusAppearance: "Interpelación suprema de Vav en Sombra: el Oráculo exige que dejes de vivir bajo leyes prestadas o a medias tintas. Fundá hoy tu propio código de honor inquebrantable."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Las tradiciones sirven como raíz, nunca como cadena: si el molde heredado apaga tu espíritu, atrevete a romperlo sin traicionar jamás la nobleza de tu oficio.",
    counselVariants: [
      "Las tradiciones sirven como raíz, nunca como cadena: si el molde heredado apaga tu espíritu, atrevete a romperlo sin traicionar jamás la nobleza de tu oficio.",
      "El que vive pidiendo la bendición del rebaño jamás descubre la cumbre donde pastan los leones.",
      "Cuidado con romper el compás y la escuadra por rebeldía adolescente: hasta el edificio más vanguardista necesita respetar la ley de la gravedad.",
      "La ética verdadera no es lo que hacés cuando te miran en la plaza; es la pureza que ponés en el alambique cuando estás solo a medianoche.",
      "Desconfiá de todo maestro que te pida que apagues tu propia lámpara para admirar la suya."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 15,
        title: "El Triregnum Invertido (El Peso del Dogma Muerto)",
        secret: "Con la triple corona apuntando hacia abajo, la jerarquía de los tres mundos se invierte: las convenciones sociales muertas y las apariencias mundanas aplastan al pensamiento libre y al espíritu vivo. Es el símbolo de quien vive prisionero del estatus o del miedo al juicio ajeno.",
        esotericFormula: "Tiara Invertida = Sumisión al Dogma Colectivo o Soberbia Doctrinal",
        meditationPrompt: "¿Qué decisión estás tomando (o dejando de tomar) hoy únicamente por miedo a lo que opinen los demás?"
      },
      {
        id: "n2",
        x: 78,
        y: 44,
        title: "El Báculo Desalineado y el Signo Quebrado",
        secret: "En Sombra, la antena de la triple cruz pierde su verticalidad y el gesto de bendición se convierte en ocultamiento hipócrita (decir una cosa en público y hacer otra en privado) o en la señal de un falso mentor cuyos consejos están desconectados de la realidad práctica.",
        esotericFormula: "Verbo ≠ Obra = Hipocresía o Asesoramiento Engañoso",
        meditationPrompt: "¿Hay alguna contradicción hoy entre los valores que defendés con la boca y algún atajo que estás tentado a tomar en la práctica?"
      },
      {
        id: "n3",
        x: 50,
        y: 79,
        title: "Las Llaves Cruzadas Trabadas en la Cerradura",
        secret: "Al invertirse la base del altar, la llave de oro (razón) y la llave de plata (intuición) giran en sentidos contrarios y traban el mecanismo. Simboliza el intento inútil de abrir un problema nuevo usando recetas viejas que ya se oxidaron, o el rechazo soberbio a estudiar los fundamentos técnicos que destrabarían la puerta.",
        esotericFormula: "Llaves Trabadas = Receta Obsoleta o Falta de Fundamento Técnico",
        meditationPrompt: "¿Qué regla vieja de tu rubro ya quedó obsoleta y qué principio técnico fundamental sí debés estudiar más a fondo hoy?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO VI INVERTIDO • LOS AMANTES EN SOMBRA (ZAYIN INVERTIDA • LA ESPADA MELLADA Y LA DIVISIÓN)
  // ==========================================================================
  {
    id: 6,
    numeral: "VI",
    name: "Los Amantes",
    subtitle: "El Espejo Partido y la Encrucijada sin Corte",
    isReversed: true,
    palette: {
      primary: "#be185d",
      secondary: "#ca8a04",
      glow: "rgba(190, 24, 93, 0.58)"
    },
    archetype: "lovers",
    shadowPolarity: {
      byExcess: "La Tentación Dispersiva y el Triángulo: infidelidad a los propios pactos, seducción narcisista, adicción al drama triangular, promiscuidad de metas y dependencia emocional simbiótica.",
      byDeficiency: "La Espada Mellada de Zayin: indecisión crónica en la encrucijada, cobardía para elegir un camino y descartar el otro, tibieza afectiva y guerra civil interna entre razón e instinto."
    },
    correspondences: {
      element: "Aire Dividido en Corrientes Opuestas",
      astro: "Géminis Afligido / Mercurio Bifronte • La Duplicidad Mental y el Corazón Partido en Dos",
      hebrewLetter: "Zayin (ז) en Sombra • La Espada que tiembla y no se atreve a cortar el nudo",
      qliphoth: "Tzaphiriron • La Escisión Psíquica y las Uniones contra Natura",
      alchemy: "Coniunctio Abortada • El Rey Solar y la Reina Lunar que se rechazan en el vaso o se funden sin pureza",
      hermeticAxiom: "Quien camina con un pie en cada sendero se desgarra las entrañas en la horqueta del camino; lo que no se elige con sangre entera se pierde por mitades.",
      jungianComplex: "La Escisión Neurótica del Yo, la Proyección Sombra sobre la Pareja y la Fobia a la Elección",
      yesNo: "No (mientras sigas dividido en dos caminos o jugando a dos puntas, el resultado será estéril)",
      keywords: [
        "indecisión crónica",
        "división interior",
        "espada sin filo",
        "triángulo conflictivo",
        "tentación vacía",
        "promesa ambigua",
        "sociedad desalineada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Tenés la Espada de Zayin en la mano, pero la dejás caer por cobardía a perder una de las dos opciones. Escuchame bien: no elegir también es una elección, y es siempre la peor de todas porque te deja desangrando en el medio de la encrucijada.",
    oracleVoiceVariants: [
      "Tenés la Espada de Zayin en la mano, pero la dejás caer por cobardía a perder una de las dos opciones. Escuchame bien: no elegir también es una elección, y es siempre la peor de todas porque te deja desangrando en el medio de la encrucijada.",
      "Querés el calor del hogar y al mismo tiempo la adrenalina del precipicio; querés el premio del maestro sin renunciar a las distracciones del aprendiz. Mientras juegues a dos puntas con tu propia alma, ninguna puerta se te abrirá del todo.",
      "Mirá al Rey de Oro y a la Reina de Plata dándose la espalda: tu cabeza fría va para el norte y tu deseo caliente tira para el sur. Esa guerra civil adentro de tu pecho es lo que te tiene sin fuerzas a mitad de la tarde.",
      "Cuidado con las sirenas de la tentación barata hoy: cambiar un diamante en construcción por un vidrio de colores que brilla cinco minutos es el negocio de los necios.",
      "Si en un vínculo o en una sociedad uno mira al cielo del propósito y el otro solo mira su propio ombligo, las seis alas del Serafín se cierran y el cáliz cae al suelo."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "Los Amantes (Arcano VI) invertidos revelan una fractura dolorosa en la unidad interior y un bloqueo en el Sendero 17 de la letra Zayin ('La Espada del Discernimiento'). En lugar de consumar las Bodas Alquímicas (*Coniunctio*) entre tu mente y tu corazón, estás sufriendo una guerra civil interna: pensás una cosa, sentís otra y hacés una tercera a medias. El Oráculo te señala que estás parado frente a una encrucijada vital intentando conservar ambos caminos por miedo a asumir el costo de una definición. En el plano vincular o societario, advierte sobre desarmonía de valores, interferencias de terceros, promesas ambiguas o la tentación de traicionar tu meta mayor por una gratificación pasajera.",
    meaningVariants: [
      "Los Amantes (Arcano VI) invertidos revelan una fractura dolorosa en la unidad interior y un bloqueo en el Sendero 17 de la letra Zayin ('La Espada del Discernimiento'). En lugar de consumar las Bodas Alquímicas (*Coniunctio*) entre tu mente y tu corazón, estás sufriendo una guerra civil interna: pensás una cosa, sentís otra y hacés una tercera a medias. El Oráculo te señala que estás parado frente a una encrucijada vital intentando conservar ambos caminos por miedo a asumir el costo de una definición. En el plano vincular o societario, advierte sobre desarmonía de valores, interferencias de terceros, promesas ambiguas o la tentación de traicionar tu meta mayor por una gratificación pasajera.",
      "Cabalísticamente, cuando el canal que baja desde el Entendimiento Supremo (Binah) hacia el Sol del Corazón (Tiphereth) se invierte bajo la dualidad de Géminis, la mente cae en la parálisis de los gemelos antagónicos: cada argumento a favor genera instantáneamente un argumento en contra del mismo peso. No vas a salir de ese laberinto pensando más, sino recordando qué es lo sagrado para vos y bajando el hacha del corte.",
      "En el laboratorio alquímico, el Arcano VI en sombra es la *Separatio* mal hecha que impide la *Coniunctio*: mezclar sustancias impuras o intentar aliar dos fuerzas cuyos propósitos profundos son incompatibles. Si una sociedad comercial o una relación amorosa exige que amputes tu propia esencia para encajar, ese pacto está viciado de origen.",
      "Observá la pérdida de la bendición del Serafín en la inversión: cuando las decisiones se toman exclusivamente desde el cálculo egoísta frío o desde el capricho hormonal ciego —sin consultar al ideal superior de la Supraconciencia—, el vínculo nace dividido y dura lo que dura un fósforo.",
      "El Seis invertido es la advertencia directa de que tu Carro (Arcano VII) no puede arrancar porque las dos esfinges aún no tienen un pacto de dirección. Toda la energía que hoy perdés en dudar volverá a tu cuerpo como potencia pura en el segundo exacto en que cierres una de las dos puertas."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, Los Amantes invertidos exponen la herida de la *Escisión Neurótica* y el complejo del *Paraíso Perdido*: el terror infantil a la pérdida y a la renuncia. Como elegir el camino A implica aceptar el duelo de que nunca vivirás el camino B, tu inconsciente prefiere quedarse congelado en la fantasía de la indecisión para no sufrir ningún duelo, perdiendo así la vida real.",
    theWoundVariants: [
      "En la psicología profunda de Jung, Los Amantes invertidos exponen la herida de la *Escisión Neurótica* y el complejo del *Paraíso Perdido*: el terror infantil a la pérdida y a la renuncia. Como elegir el camino A implica aceptar el duelo de que nunca vivirás el camino B, tu inconsciente prefiere quedarse congelado en la fantasía de la indecisión para no sufrir ningún duelo, perdiendo así la vida real.",
      "La herida de la *Proyección Simbiótica*: buscar en la pareja o en un socio la mitad de tu personalidad que te dio pereza desarrollar adentro tuyo. Cuando le exigís al otro que te salve de tu propia soledad, el amor se degrada en adicción ansiosa o reclamo perpetuo.",
      "El síndrome de la Tentación Saboteadora: justo cuando estás construyendo algo sólido y duradero (en el amor o en tu empresa), tu sombra inventa una 'tentación lateral brillante' (un amorío conflictivo o un negocio paralelo distractor) para boicotear tu compromiso por miedo a la intimidad profunda.",
      "La herida de la Complacencia Dividida: querer quedar bien con Dios y con el diablo para que nadie se enoje con vos, terminando partido al medio y traicionando tu propio deseo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La gran mentira que te contás bajo este Arcano es: *'Mantengo las dos puertas entornadas para tener más opciones y seguridad'*, cuando la realidad energética es que mientras no cierres con llave la puerta trasera, jamás pondrás tu genialidad entera en la puerta delantera.",
    theIllusionVariants: [
      "La gran mentira que te contás bajo este Arcano es: *'Mantengo las dos puertas entornadas para tener más opciones y seguridad'*, cuando la realidad energética es que mientras no cierres con llave la puerta trasera, jamás pondrás tu genialidad entera en la puerta delantera.",
      "El espejismo de *'Todavía no sé qué quiero'*: sí sabés perfectamente qué querés en el fondo del pecho; lo que pasa es que no querés pagar el precio de incomodidad que implica anunciarlo y sostenerlo.",
      "Confundir química de fricción con 'almas gemelas': creer que un vínculo lleno de idas y vueltas, celos, triángulos e incertidumbre es una gran pasión kármica, cuando es simplemente dos neurosis espejo enganchadas.",
      "La coartada de echarle la culpa al socio o a la pareja de tu propia falta de definición: nadie puede obligarte a permanecer en una encrucijada donde vos mismo elegís no bajar la espada."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano VI en sombra diagnostica una desconexión entre los dos hemisferios y el centro cardíaco: el *Animus* (el juicio lógico) y el *Anima* (el sentimiento vinculante) están divorciados adentro tuyo. Esta disonancia cognitiva y afectiva drena el sistema nervioso hasta que tomes una determinación íntegra.",
    psycheVariants: [
      "Psicológicamente, el Arcano VI en sombra diagnostica una desconexión entre los dos hemisferios y el centro cardíaco: el *Animus* (el juicio lógico) y el *Anima* (el sentimiento vinculante) están divorciados adentro tuyo. Esta disonancia cognitiva y afectiva drena el sistema nervioso hasta que tomes una determinación íntegra.",
      "Estás viviendo el costo psíquico de la ambivalencia: el cerebro humano gasta tres veces más glucosa y energía en sostener una duda abierta durante semanas que en ejecutar la opción más difícil.",
      "Si hay un conflicto vincular hoy, observá qué rasgo del otro te irrita con más furia: ese es exactamente el fragmento de tu propia sombra que te negás a reconocer en vos.",
      "Restaurar el eje de Zayin requiere coraje existencial: aceptar la muerte simbólica de las opciones secundarias para darle vida total a tu elección soberana."
    ],

    lightAndShadow: "En Sombra Activa: Indecisión crónica, división interior entre razón e instinto, triángulos conflictivos, promesas a medias, sociedades desalineadas o tentación que desvía del norte.",
    lightAndShadowVariants: [
      "En Sombra Activa: Indecisión crónica, división interior entre razón e instinto, triángulos conflictivos, promesas a medias, sociedades desalineadas o tentación que desvía del norte.",
      "Sombra por Exceso: Triángulos dramáticos, infidelidad a los propios valores, dependencia simbiótica y dispersión erótica/creativa. Sombra por Defecto: Tibieza cobarde, parálisis en la bifurcación y corazón partido.",
      "Distorsión de Zayin: La espada sin filo que hiere sin cortar y deja los dos caminos empantanados."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Desarmonía afectiva, dudas que enfrían la entrega, interferencias de terceras personas (o fantasmas de exparejas no cerradas) y promesas ambiguas. Si estás en una relación, es urgente definir si ambos tiran hacia el mismo proyecto de vida o si están juntos por miedo a elegir; si estás conociendo a alguien, no aceptes lugares grises ni medias tintas.",
      work: "Sociedades comerciales en peligro por tener escalas de valores u objetivos incompatibles, o parálisis productiva por querer atender dos rubros o modelos de negocio opuestos al mismo tiempo sin jugarte de lleno por ninguno.",
      money: "Dinero dividido o malgastado por falta de una prioridad clara de inversión; peligro de pérdidas por mezclar afectos o tentaciones impulsivas con decisiones financieras que requerían bisturí frío.",
      spirit: "Guerra interna entre lo que predicás y lo que deseás en secreto; incapacidad de meditar en paz porque tu corazón está tironeado por dos lealtades contradictorias.",
      healthAndEnergy: "Tensión aguda en hombros, omóplatos, bronquios y pulmones (Géminis), respiración entrecortada y fatiga nerviosa bilateral por vivir en estado de duda permanente."
    },
    domainsVariants: [
      {
        love: "Desarmonía afectiva, dudas que enfrían la entrega, interferencias de terceras personas (o fantasmas de exparejas no cerradas) y promesas ambiguas. Si estás en una relación, es urgente definir si ambos tiran hacia el mismo proyecto de vida o si están juntos por miedo a elegir; si estás conociendo a alguien, no aceptes lugares grises ni medias tintas.",
        work: "Sociedades comerciales en peligro por tener escalas de valores u objetivos incompatibles, o parálisis productiva por querer atender dos rubros o modelos de negocio opuestos al mismo tiempo sin jugarte de lleno por ninguno.",
        money: "Dinero dividido o malgastado por falta de una prioridad clara de inversión; peligro de pérdidas por mezclar afectos o tentaciones impulsivas con decisiones financieras que requerían bisturí frío.",
        spirit: "Guerra interna entre lo que predicás y lo que deseás en secreto; incapacidad de meditar en paz porque tu corazón está tironeado por dos lealtades contradictorias.",
        healthAndEnergy: "Tensión aguda en hombros, omóplatos, bronquios y pulmones (Géminis), respiración entrecortada y fatiga nerviosa bilateral por vivir en estado de duda permanente."
      },
      {
        love: "Cuidado con elegir pareja o sostener un vínculo desde el miedo a la soledad en lugar de hacerlo desde el deseo real. La tibieza hoy lastima más que un corte honesto.",
        work: "Una tentación comercial lateral ('dinero fácil pero fuera de tu foco maestro') amenaza con distraerte de la construcción de tu activo principal. Decile que no de plano.",
        money: "Revisá las cuentas compartidas con socios o pareja: donde hay silencios o criterios distintos sobre cómo manejar el capital, se está gestando una fractura.",
        spirit: "Reconciliar al Rey y a la Reina interiores: dejar de castigar a tu instinto con tu razón o de sabotear tu razón con tus caprichos.",
        healthAndEnergy: "Asimetría muscular entre el lado derecho e izquierdo del cuerpo; hacé ejercicios de estiramiento torácico y respiración profunda."
      },
      {
        love: "Si estás atrapado entre dos historias o entre el pasado y el presente, el Oráculo te avisa que quien intenta quedarse con las dos sillas termina sentado en el suelo.",
        work: "Falta de compromiso real con la meta: trabajar con el freno de mano puesto porque una parte tuya todavía duda de si este es el camino.",
        money: "No firmes sociedades hoy donde las responsabilidades y los porcentajes no estén cortados con la precisión quirúrgica de una espada.",
        spirit: "Recuperar la integridad (*Integer*, 'entero, no partido'): volver a ser una sola pieza por dentro y por fuera.",
        healthAndEnergy: "Alivio físico inmediato en el pecho y el cuello en el minuto exacto en que tomás la determinación y la comunicás."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Afilá la Espada de Zayin y cortá el nudo hoy antes de que caiga el sol: elegí un único camino, cerrá la puerta del otro por escrito y unificá el cien por ciento de tu fuerza en la opción elegida.",
      prohibition: "Prohibido seguir pidiendo 'un tiempo más para pensarlo', dar respuestas tibias que dejan a otros en suspenso, o alimentar una tentación que contradice tu obra central.",
      psychomagicAct: "Tomá una hoja de papel y escribí en el extremo izquierdo el Camino A y en el extremo derecho el Camino B que te tienen dividido; poné el filo de un cuchillo o tijera en el centro exacto, cortá la hoja de un solo tajo firme, quemá o descartá la mitad que dejás atrás y guardá la mitad elegida sobre tu pecho diciendo: 'La duda ha muerto; soy uno solo con mi elección'.",
      talismanPhrase: "Empuño el filo de Zayin sin temblar; corto mis divisiones y entrego mi corazón entero a un solo norte."
    },
    theAlchemyVariants: [
      {
        command: "Afilá la Espada de Zayin y cortá el nudo hoy antes de que caiga el sol: elegí un único camino, cerrá la puerta del otro por escrito y unificá el cien por ciento de tu fuerza en la opción elegida.",
        prohibition: "Prohibido seguir pidiendo 'un tiempo más para pensarlo', dar respuestas tibias que dejan a otros en suspenso, o alimentar una tentación que contradice tu obra central.",
        psychomagicAct: "Tomá una hoja de papel y escribí en el extremo izquierdo el Camino A y en el extremo derecho el Camino B que te tienen dividido; poné el filo de un cuchillo o tijera en el centro exacto, cortá la hoja de un solo tajo firme, quemá o descartá la mitad que dejás atrás y guardá la mitad elegida sobre tu pecho diciendo: 'La duda ha muerto; soy uno solo con mi elección'.",
        talismanPhrase: "Empuño el filo de Zayin sin temblar; corto mis divisiones y entrego mi corazón entero a un solo norte."
      },
      {
        command: "Si hay una sociedad o relación donde los valores profundos están desalineados, poné hoy las cartas sobre la mesa sin anestesia: o se alinean bajo un mismo sol, o cada uno sigue su camino en paz.",
        prohibition: "No traiciones tu compromiso con tu Gran Obra por una distracción brillante de corto plazo.",
        psychomagicAct: "Colocá dos vasos con agua separados en los extremos de tu mesa (tu mente y tu deseo separados); volcalos al mismo tiempo dentro de una sola copa grande en el centro y bebela entera declarando: 'Lo que estaba partido en mí hoy se funde en una sola voluntad'.",
        talismanPhrase: "Fin de la guerra interior; mi cabeza y mi sangre caminan en la misma dirección."
      },
      {
        command: "Eliminá hoy de tu agenda y de tu teléfono cualquier contacto, proyecto secundario o 'Plan B' que esté drenando tu lealtad hacia tu meta principal.",
        prohibition: "No digas 'sí' con la boca hoy a nada que tu pecho sienta como un 'no'.",
        psychomagicAct: "Desatá un nudo enredado de dos hilos de distinto color, elegí el hilo que represente tu verdadera vocación o amor, atalo firme a tu muñeca o cuaderno maestro y descartá el otro sin mirar atrás.",
        talismanPhrase: "Renuncio a la tibieza de los caminos dobles; donde apoyo mi amor, apoyo mi espada entera."
      }
    ],

    actionOracle: {
      command: "Afilá la Espada de Zayin y cortá el nudo hoy antes de que caiga el sol: elegí un único camino, cerrá la puerta del otro por escrito y unificá el cien por ciento de tu fuerza en la opción elegida.",
      prohibition: "Prohibido seguir pidiendo 'un tiempo más para pensarlo', dar respuestas tibias que dejan a otros en suspenso, o alimentar una tentación que contradice tu obra central.",
      psychomagicAct: "Tomá una hoja de papel y escribí en el extremo izquierdo el Camino A y en el extremo derecho el Camino B que te tienen dividido; poné el filo de un cuchillo o tijera en el centro exacto, cortá la hoja de un solo tajo firme, quemá o descartá la mitad que dejás atrás y guardá la mitad elegida sobre tu pecho diciendo: 'La duda ha muerto; soy uno solo con mi elección'.",
      talismanPhrase: "Empuño el filo de Zayin sin temblar; corto mis divisiones y entrego mi corazón entero a un solo norte."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano VI aparece en Sombra: alerta de división interna, indecisión en una encrucijada o desarmonía en un pacto.",
      secondAppearance: "Los Amantes Invertidos salen por segunda vez: seguís intentando sostener dos opciones incompatibles sin cortar. Esa ambivalencia te está partiendo al medio.",
      thirdAppearance: "Tercera comparecencia del Arcano VI en Sombra: peligro inminente de perder ambos caminos por cobardía al corte o por jugar a dos puntas. Definí tu norte hoy mismo.",
      fourthPlusAppearance: "Sentencia final de Zayin en Sombra: el Oráculo congela todo avance de tu Carro hasta que termines con la tibieza, unifiques tu corazón y tomes partido irreversible."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "No podés avanzar con un pie en cada canoa sin caer al río: alineá tus actos con tus valores más profundos y cortá hoy mismo el camino que no es el tuyo.",
    counselVariants: [
      "No podés avanzar con un pie en cada canoa sin caer al río: alineá tus actos con tus valores más profundos y cortá hoy mismo el camino que no es el tuyo.",
      "El que no se atreve a matar sus opciones secundarias jamás llega a ver viva su obra principal.",
      "La duda no se cura pensando un mes más en la orilla; se cura eligiendo un puente y quemando el otro.",
      "Nunca cambies lo que más querés en la vida por lo que tenés ganas en los próximos diez minutos.",
      "Cuando tu razón y tu corazón pelean, preguntale a tu espíritu cuál de los dos caminos te hace más grande, no cuál te resulta más cómodo."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "El Serafín Solar Ignorado (La Pérdida del Norte Superior)",
        secret: "Con el diorama invertido, el Arcángel de seis alas queda sepultado debajo de los amantes en lugar de coronarlos. Simboliza una relación, sociedad o decisión que ha perdido su ideal superior y se mueve únicamente por conveniencia miedosa, capricho pasajero o apego neurótico.",
        esotericFormula: "Supraconciencia Ignorada = Elección por Miedo o Tentación Vacía",
        meditationPrompt: "¿Estás evaluando esta decisión desde la grandeza de tu destino o desde el miedo chiquito a perder comodidad?"
      },
      {
        id: "n2",
        x: 34,
        y: 52,
        title: "El Rey Solar y la Reina Lunar en Divorcio Interno",
        secret: "En Sombra, la simetría entre el Oro (la lógica ejecutiva) y la Plata (la sensibilidad intuitiva) se quiebra: tu mente racional desprecia lo que siente tu corazón, o tu impulso emocional sabotea lo que tu razón sabe que es correcto, instalando una guerra civil agotadora.",
        esotericFormula: "Logos vs. Eros = Escisión Neurótica y Parálisis en la Encrucijada",
        meditationPrompt: "¿En qué punto exacto se están contradiciendo hoy lo que pensás con la cabeza y lo que deseás con las entrañas?"
      },
      {
        id: "n3",
        x: 50,
        y: 72,
        title: "La Vesica Piscis Desencajada y la Espada Mellada",
        secret: "Los dos anillos entrelazados en el centro amenazan con separarse cuando falta el corte limpio de la letra Zayin. Revela pactos a medias, triángulos que dividen la lealtad o la incapacidad de fundirse por completo con una vocación por seguir mirando de reojo la salida de emergencia.",
        esotericFormula: "Pacto a Medias = Cáliz Vacío y Fuerza Dividida",
        meditationPrompt: "¿Qué 'Plan B' o puerta entreabierta necesitás cerrar con llave hoy mismo para entregarte al cien por ciento?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN II (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initLunarGrimoireVolume2() {
  window.DATOS_LUNA_2 = DATOS_LUNA_2;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_2.forEach(function (card) {
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
  DATOS_LUNA_2.forEach(function (lunarCard) {
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
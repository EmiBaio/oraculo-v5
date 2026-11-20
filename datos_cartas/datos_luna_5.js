// ============================================================================
// ARCHIVO: datos_luna_5.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN V: ARCANOS XV, XVI y XVII
// XV • El Diablo (Sombra) | XVI • La Torre (Sombra) | XVII • La Estrella (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// 100% Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_5 = [
  // ==========================================================================
  // ARCANO XV INVERTIDO • EL DIABLO EN SOMBRA (AYIN INVERTIDA • LA RUPTURA DEL COLLAR O LA REPRESIÓN CIEGA)
  // ==========================================================================
  {
    id: 15,
    numeral: "XV",
    name: "El Diablo",
    subtitle: "El Eslabón que Cae y el Sótano Negado",
    isReversed: true,
    palette: {
      primary: "#991b1b",
      secondary: "#b45309",
      glow: "rgba(153, 27, 27, 0.58)"
    },
    archetype: "devil",
    shadowPolarity: {
      byExcess: "El Esclavo del Vértigo y el Pacto Turbio: adicción compulsiva, obsesión posesiva, manipulación financiera o emocional oscura, entrega total de la soberanía al vicio o al poder ajeno.",
      byDeficiency: "El Puritano Aterrado y la Liberación Naciente: en su octava luminosa de inversión, el despertar que abre los eslabones y rompe las cadenas; en su octava neurótica, negación hipócrita de la propia sombra y miedo al deseo y al dinero."
    },
    correspondences: {
      element: "Tierra Subterránea en Deshielo o Azufre Asfixiante",
      astro: "Capricornio en Sombra / Saturno y Marte en Fricción • El Peso del Grillete o el Corte de la Cadena",
      hebrewLetter: "Ayin (ע) en Sombra • El Ojo que se abre tras la hipnosis o el Ojo que se niega a mirar su propio sótano",
      qliphoth: "Shaxal / A'ano'nin • Los Espejismos de la Materia Densa y la Servidumbre de los Sentidos",
      alchemy: "Separatio del Azufre Negro • Despegar el espíritu del plomo obsesivo donde había quedado atrapado",
      hermeticAxiom: "El demonio más peligroso es aquel que fingís no tener; el día en que ves cómo funciona el candado, la celda entera se desmorona.",
      jungianComplex: "La Proyección de la Sombra (Chivo Expiatorio) o la Desintoxicación del Complejo Adictivo",
      yesNo: "Sí para liberarte de ataduras y pactos tóxicos / No para entrar en tentaciones turbias o negar tu sombra",
      keywords: [
        "ruptura de cadenas",
        "desintoxicación profunda",
        "sombra negada",
        "adicción al control",
        "pacto roto",
        "recuperar soberanía",
        "fin de la hipnosis"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Cuando giro cabeza abajo, tenés dos caminos: o finalmente abriste los ojos y estás sacando tus muñecas de mis eslabones sueltos, o estás cerrando los párpados con fuerza para jurar que sos un santo mientras tu sótano sigue lleno de fuego sin atender.",
    oracleVoiceVariants: [
      "Cuando giro cabeza abajo, tenés dos caminos: o finalmente abriste los ojos y estás sacando tus muñecas de mis eslabones sueltos, o estás cerrando los párpados con fuerza para jurar que sos un santo mientras tu sótano sigue lleno de fuego sin atender.",
      "Mirame el pentagrama: al invertirse mi carta, la punta del espíritu vuelve a quedar hacia arriba. El hechizo hipnótico que te hacía creer que 'no podías vivir sin ese vicio, sin ese jefe o sin ese drama' acaba de romperse.",
      "Cuidado con el puritano asustado que llevás adentro: señalar con asco los pecados y la ambición de los demás no te vuelve puro; solo demuestra que le tenés pánico a tu propio apetito de poder.",
      "La abstinencia duele los primeros tres días porque tu cuerpo se había acostumbrado al peso del hierro en el cuello. No vuelvas a meter la cabeza en el collar solo porque la libertad te da frío al principio.",
      "Si en un negocio o relación las cuentas se manejaban por debajo de la mesa con manipulación o miedo, mi inversión avisa que la trampa acaba de quedar a la vista: salí del calabozo hoy mismo."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Diablo (Arcano XV) invertido posee una de las dualidades más fascinantes de todo el Tarot en el Sendero 26 de la letra Ayin ('El Ojo'). En su lectura iniciática de liberación —debido a que al invertirse la carta el pentagrama de su frente vuelve a quedar al derecho—, anuncia el *Despertar de la Hipnosis Material*: el instante exacto en que comprendés dónde estabas entregando tu poder y decidís romper una adicción, un contrato esclavizante o una dependencia tóxica. Sin embargo, en su faz psicológica densa, advierte contra la *Negación de la Sombra*: fingir superioridad moral para no admitir tus propias ambiciones, rencores o deseos carnales, o bien tocar fondo en un enganche obsesivo que exige desintoxicación inmediata.",
    meaningVariants: [
      "El Diablo (Arcano XV) invertido posee una de las dualidades más fascinantes de todo el Tarot en el Sendero 26 de la letra Ayin ('El Ojo'). En su lectura iniciática de liberación —debido a que al invertirse la carta el pentagrama de su frente vuelve a quedar al derecho—, anuncia el *Despertar de la Hipnosis Material*: el instante exacto en que comprendés dónde estabas entregando tu poder y decidís romper una adicción, un contrato esclavizante o una dependencia tóxica. Sin embargo, en su faz psicológica densa, advierte contra la *Negación de la Sombra*: fingir superioridad moral para no admitir tus propias ambiciones, rencores o deseos carnales, o bien tocar fondo en un enganche obsesivo que exige desintoxicación inmediata.",
      "En el Árbol de la Vida, Ayin conecta el Sol de Tiphereth con el intelecto de Hod. Cuando El Diablo se invierte en su polo neurótico, el intelecto (Hod) construye una muralla de excusas puritanas para no ver el instinto: te saboteás financieramente porque asociás el dinero grande con 'suciedad o corrupción', o apagás tu magnetismo sexual y comercial por miedo a tu propia potencia.",
      "Alquímicamente, el Arcano XV en sombra es el proceso de *Exorcismo de los Metales* o desulfuración: separar el azufre venenoso y narcótico que mantenía al alma pegada al medio cubo de plomo. Estás en plena fase de limpieza; no te asustes si al soltar un viejo apego sentís el temblor del síndrome de abstinencia emocional.",
      "En el terreno de las negociaciones y las sociedades, esta inversión destapa la olla: sale a la luz una cláusula leonina, una comisión oculta, un chantaje sutil o una doble intención que antes operaba en la penumbra. Al ver el hilo del titiritero, el títere queda libre en el acto.",
      "Recordá que nadie se libera de verdad del Arcano XV huyendo despavorido de él: te liberás cuando mirás a Baphomet a los ojos, le agradecés haberte mostrado tu hambre oculta y te llevás tu antorcha de fuego para iluminar tu propia obra."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, aquí opera el mecanismo del *Chivo Expiatorio* y la *Sombra Exiliada*: todo rasgo propio que te prohibieron tener en la infancia (la rabia, el egoísmo sano, el deseo erótico intenso, la sed de riqueza) fue arrojado al sótano inconsciente. Desde allí abajo, esa sombra te gobierna a través de compulsiones secretas o te hace odiar ferozmente en los demás aquello que no te permitís vivir vos.",
    theWoundVariants: [
      "En la psicología profunda de Jung, aquí opera el mecanismo del *Chivo Expiatorio* y la *Sombra Exiliada*: todo rasgo propio que te prohibieron tener en la infancia (la rabia, el egoísmo sano, el deseo erótico intenso, la sed de riqueza) fue arrojado al sótano inconsciente. Desde allí abajo, esa sombra te gobierna a través de compulsiones secretas o te hace odiar ferozmente en los demás aquello que no te permitís vivir vos.",
      "La herida del *Pacto de Servidumbre Familiar*: haber aprendido que para sobrevivir o ser querido tenías que aceptar relaciones de dominación, culpa o manipulación donde el otro siempre tiene la soga de tu cuello.",
      "El terror a la Libertad Soberana: cuando finalmente te sacás el collar de una adicción, de una deuda o de un vínculo asfixiante, aparece el pánico del expresidiario que extraña los muros de la cárcel porque afuera nadie le dice qué hacer.",
      "El tabú del Dinero y del Poder (Capricornio herido): sentir inconscientemente que si te volvés demasiado rico, magnético o poderoso te vas a 'volver malo', boicoteando tus ingresos cada vez que superan cierto techo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El doble autoengaño del Diablo invertido es maestro en esconderse: el adicto se dice *'Lo manejo cuando quiero, mañana lo dejo'*, mientras sigue atado al poste; el reprimido se dice *'A mí no me importa el poder ni la plata, soy espiritual'*, mientras hierve de envidia silenciosa hacia quienes sí se atreven a conquistar el mundo material.",
    theIllusionVariants: [
      "El doble autoengaño del Diablo invertido es maestro en esconderse: el adicto se dice *'Lo manejo cuando quiero, mañana lo dejo'*, mientras sigue atado al poste; el reprimido se dice *'A mí no me importa el poder ni la plata, soy espiritual'*, mientras hierve de envidia silenciosa hacia quienes sí se atreven a conquistar el mundo material.",
      "El espejismo del 'Demonio Externo': creer que toda tu infelicidad o estancamiento es culpa de un socio, una expareja o un sistema 'perverso', sin admitir qué parte de tu propio deseo firmó ese contrato y se quedó ahí.",
      "La ilusión de la 'Recaída Inocente': creer que después de haberte liberado de un hábito o vínculo tóxico podés volver a asomarte 'solo un ratito por curiosidad' sin que el imán te vuelva a tragar.",
      "Creer que reprimir un deseo a la fuerza es haberlo superado: lo que encerrás vivo en el sótano sin canalizarlo hace pesas en la oscuridad y sale el doble de grande."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, El Diablo invertido marca el punto crítico de la *Desidentificación con la Sombra Adictiva* o, en su defecto, la ceguera proyectiva. Tu psique te exige dejar de dividir el mundo entre 'ángeles puros y demonios culpables' para reclamar la totalidad de tu potencia instintiva con conciencia ética.",
    psycheVariants: [
      "Psicológicamente, El Diablo invertido marca el punto crítico de la *Desidentificación con la Sombra Adictiva* o, en su defecto, la ceguera proyectiva. Tu psique te exige dejar de dividir el mundo entre 'ángeles puros y demonios culpables' para reclamar la totalidad de tu potencia instintiva con conciencia ética.",
      "Estás atravesando un proceso real de desintoxicación dopaminérgica y emocional: sostené el eje firme sin negociar con la tentación de volver atrás.",
      "Si sentís un rechazo visceral y desmedido hacia la ambición o el descaro de alguien hoy, mirá qué parte de tu propio león enjaulado te está pidiendo permiso para salir a cazar.",
      "Integrar a Ayin significa recuperar la vista panorámica: ni esclavo ciego de la materia, ni fantasma asustado de su propio cuerpo."
    ],

    lightAndShadow: "En Sombra Activa: Ruptura liberadora de cadenas, desintoxicación de vínculos o hábitos tóxicos, caída de manipulaciones, o bien negación hipócrita de la propia sombra y recaídas por falta de eje.",
    lightAndShadowVariants: [
      "En Sombra Activa: Ruptura liberadora de cadenas, desintoxicación de vínculos o hábitos tóxicos, caída de manipulaciones, o bien negación hipócrita de la propia sombra y recaídas por falta de eje.",
      "Octava Luminosa de Inversión: Despertar del hechizo, quitarse el collar y recuperar la libertad. Octava Sombría: Esclavitud compulsiva, pactos turbios o puritanismo que teme a su propio fuego.",
      "Dinámica de Ayin: El ojo que finalmente ve que el candado estaba abierto desde el primer día."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Liberación definitiva de una relación de codependencia, celos enfermizos o manipulación emocional donde sentías que perdías tu dignidad; o bien, en una pareja sana, la necesidad de desactivar tabúes, culpas sexuales o luchas subterráneas de control para volver a elegirse desde la libertad y no desde la posesión.",
      work: "Ruptura de un contrato laboral o comercial asfixiante donde vendías tu paz por seguridad aparente. También advierte sobre el descubrimiento a tiempo de una maniobra desleal, estafa o agenda oculta de un competidor o socio. Recuperás el comando ético y estratégico de tu oficio.",
      money: "Saneamiento de deudas opresivas, fin de gastos compulsivos y corte con negocios grises que te costaban el sueño. Si tu bloqueo era el miedo inconsciente a cobrar bien o a ambicionar en grande por 'culpa moral', este Arcano te ordena reconciliarte hoy mismo con el poder del dinero limpio.",
      spirit: "Recogimiento de las proyecciones (*Retirada de la Sombra*): dejar de pelear contra demonios imaginarios afuera y convertir tu fuego instintivo en luz de conciencia.",
      healthAndEnergy: "Excelente ciclo para abandonar de raíz una adicción, vicio o dependencia química/digital; desintoxicación profunda del hígado, sistema dopaminérgico y desbloqueo de la pelvis y rodillas (Capricornio)."
    },
    domainsVariants: [
      {
        love: "Liberación definitiva de una relación de codependencia, celos enfermizos o manipulación emocional donde sentías que perdías tu dignidad; o bien, en una pareja sana, la necesidad de desactivar tabúes, culpas sexuales o luchas subterráneas de control para volver a elegirse desde la libertad y no desde la posesión.",
        work: "Ruptura de un contrato laboral o comercial asfixiante donde vendías tu paz por seguridad aparente. También advierte sobre el descubrimiento a tiempo de una maniobra desleal, estafa o agenda oculta de un competidor o socio. Recuperás el comando ético y estratégico de tu oficio.",
        money: "Saneamiento de deudas opresivas, fin de gastos compulsivos y corte con negocios grises que te costaban el sueño. Si tu bloqueo era el miedo inconsciente a cobrar bien o a ambicionar en grande por 'culpa moral', este Arcano te ordena reconciliarte hoy mismo con el poder del dinero limpio.",
        spirit: "Recogimiento de las proyecciones (*Retirada de la Sombra*): dejar de pelear contra demonios imaginarios afuera y convertir tu fuego instintivo en luz de conciencia.",
        healthAndEnergy: "Excelente ciclo para abandonar de raíz una adicción, vicio o dependencia química/digital; desintoxicación profunda del hígado, sistema dopaminérgico y desbloqueo de la pelvis y rodillas (Capricornio)."
      },
      {
        love: "Cuidado con la tentación de volver a escribir o abrir la puerta a un vínculo magnético pero destructivo del que ya habías logrado salir: el anzuelo brilla igual que antes, pero el precio sigue siendo tu paz.",
        work: "Dejá de jugar chiquito por miedo a parecer 'demasiado ambicioso': poné tu verdadera garra de Capricornio sobre la mesa y salí a dominar tu nicho con armas limpias y letales.",
        money: "Liberación de un embargo, prenda o condicionamiento financiero que te tenía las manos atadas; volvés a ser dueño del cien por ciento de tu caja.",
        spirit: "El Pentagrama enderezado: la mente espiritual vuelve a mandar sobre los cuatro elementos del apetito.",
        healthAndEnergy: "Alivio de contracturas mandibulares y lumbares crónicas que nacían de reprimir tu rabia o tu deseo vital."
      },
      {
        love: "Caen las máscaras de manipulación por culpa: si alguien intenta retenerte hoy haciéndose la víctima o amenazando en las sombras, tu mirada fría desarma el chantaje en un segundo.",
        work: "Transformar un vicio de trabajo (hacer todo por urgencia y adrenalina) en un sistema soberano donde vos manejás los tiempos y no el reloj del miedo.",
        money: "Rechazá cualquier propuesta de 'dinero fácil por izquierda' que aparezca esta semana: el collar que trae escondido ese negocio es diez veces más caro que la ganancia.",
        spirit: "Reírse en la cara del miedo: comprender que el Guardián del Umbral era solo una estatua de humo puesta para probar tu coraje.",
        healthAndEnergy: "Sudoración purificadora, ayuno de estímulos artificiales y recuperación del sueño profundo sin pesadillas."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Sacá las muñecas del eslabón hoy mismo: cortá de cuajo y con contacto cero ese hábito, deuda o trato donde entregabas tu dignidad, y al mismo tiempo admití en voz alta cuál es tu verdadera ambición sin pedir perdón.",
      prohibition: "Prohibido negociar hoy 'una última vez' con una adicción o vínculo tóxico, o disfrazarte de puritano negando lo que realmente deseás.",
      psychomagicAct: "Tomá una cadena pequeña, precinto plástico o hilo doble, pasalo por tus dedos y cortalo al medio con un alicate o tijera fuerte; guardá los dos pedazos sueltos un día en tu mesa para ver físicamente el hierro roto, y luego tiralos lejos de tu casa diciendo: 'Ningún pacto viejo me ata; mi deseo y mi voluntad son libres'.",
      talismanPhrase: "Los eslabones caen al suelo; recupero el fuego de mi sombra y camino como único señor de mi voluntad."
    },
    theAlchemyVariants: [
      {
        command: "Sacá las muñecas del eslabón hoy mismo: cortá de cuajo y con contacto cero ese hábito, deuda o trato donde entregabas tu dignidad, y al mismo tiempo admití en voz alta cuál es tu verdadera ambición sin pedir perdón.",
        prohibition: "Prohibido negociar hoy 'una última vez' con una adicción o vínculo tóxico, o disfrazarte de puritano negando lo que realmente deseás.",
        psychomagicAct: "Tomá una cadena pequeña, precinto plástico o hilo doble, pasalo por tus dedos y cortalo al medio con un alicate o tijera fuerte; guardá los dos pedazos sueltos un día en tu mesa para ver físicamente el hierro roto, y luego tiralos lejos de tu casa diciendo: 'Ningún pacto viejo me ata; mi deseo y mi voluntad son libres'.",
        talismanPhrase: "Los eslabones caen al suelo; recupero el fuego de mi sombra y camino como único señor de mi voluntad."
      },
      {
        command: "Escribí hoy sin censura en una hoja privada las tres cosas más 'egoístas, ambiciosas o prohibidas' que deseás lograr este año, y diseñá un plan ético, directo y real para conquistarlas a plena luz.",
        prohibition: "No proyectes tu sombra afuera hoy: cada vez que alguien te dé bronca o envidia en la jornada, preguntate qué poder tuyo no usado te está mostrando ese espejo.",
        psychomagicAct: "Encendé una vela en una habitación a oscuras colocando tu mano entre la llama y la pared para proyectar una sombra gigante; mirá esa sombra moviéndose a tu orden y decí: 'No te temo ni te niego; sos mi propia fuerza y caminás conmigo hacia la luz'.",
        talismanPhrase: "Integro mi oscuridad sin miedo; el Pentagrama de mi espíritu gobierna mis cinco sentidos."
      },
      {
        command: "Cancelá hoy mismo —o trazá el plan de cancelación total— de esa deuda, crédito o favor pendiente que alguien usa para tener poder sobre tus decisiones.",
        prohibition: "No aceptes regalos ni ventajas comerciales que vengan con hilos invisibles de obligación moral.",
        psychomagicAct: "Lavá una moneda o llave con agua, jabón y unas gotas de limón o alcohol hasta quitarle toda grasitud, secala al sol y guardala en tu bolsillo como talismán de dinero y poder cien por ciento limpios y soberanos.",
        talismanPhrase: "Mi ambición es cristalina y mi cuello no tiene dueño; soy libre en la tierra y en el cielo."
      }
    ],

    actionOracle: {
      command: "Sacá las muñecas del eslabón hoy mismo: cortá de cuajo y con contacto cero ese hábito, deuda o trato donde entregabas tu dignidad, y al mismo tiempo admití en voz alta cuál es tu verdadera ambición sin pedir perdón.",
      prohibition: "Prohibido negociar hoy 'una última vez' con una adicción o vínculo tóxico, o disfrazarte de puritano negando lo que realmente deseás.",
      psychomagicAct: "Tomá una cadena pequeña, precinto plástico o hilo doble, pasalo por tus dedos y cortalo al medio con un alicate o tijera fuerte; guardá los dos pedazos sueltos un día en tu mesa para ver físicamente el hierro roto, y luego tiralos lejos de tu casa diciendo: 'Ningún pacto viejo me ata; mi deseo y mi voluntad son libres'.",
      talismanPhrase: "Los eslabones caen al suelo; recupero el fuego de mi sombra y camino como único señor de mi voluntad."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XV aparece invertido en tu tirada: se abre la oportunidad de romper una cadena antigua o de dejar de negar tu propio fuego.",
      secondAppearance: "El Diablo en Sombra sale por segunda vez: ya viste que el collar está abierto, pero seguís merodeando la puerta de la celda. Da el paso afuera hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XV Invertido: alerta máxima contra una recaída en un viejo enganche o contra un pacto manipulador. Cortá todo hilo turbio en este instante.",
      fourthPlusAppearance: "Liberación suprema de Ayin: el Oráculo decreta rota toda hipnosis sobre tu mente. Reclamá tu poder completo ahora o el rayo de La Torre (Arcano XVI) vendrá a romper el candado por la fuerza."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Los eslabones ya están abiertos en el suelo: da el paso afuera de la celda sin mirar atrás y no vuelvas a entregar tu corona por una migaja de seguridad o placer.",
    counselVariants: [
      "Los eslabones ya están abiertos en el suelo: da el paso afuera de la celda sin mirar atrás y no vuelvas a entregar tu corona por una migaja de seguridad o placer.",
      "El pájaro que nació en jaula cree al principio que volar es una enfermedad; salí igual por la puerta abierta.",
      "Nunca le tengas miedo al lobo que aúlla de frente: temele a tu propia sombra cuando fingís que sos un cordero sin colmillos.",
      "Quien rompe una adicción o una dependencia recupera en un solo día la energía que perdió durante diez años.",
      "Hacé las paces con tu ambición y con tu deseo: cuando dejan de estar escondidos en el sótano, dejan de hacer daño y se ponen a construir tu palacio."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Pentagrama Enderezado por la Inversión",
        secret: "Observá el milagro geométrico del Arcano XV: como en la carta al derecho el pentagrama está invertido, cuando la carta sale *invertida* la estrella de cinco puntas vuelve a quedar con su punta superior hacia el cielo. Simboliza el triunfo de la Quintaesencia espiritual que despierta del letargo y recupera el mando sobre los cuatro elementos materiales.",
        esotericFormula: "Inversión del Pentagrama Invertido = Restauración del Espíritu sobre la Materia",
        meditationPrompt: "¿De qué hipnosis, miedo o dependencia sentís que tu mente está empezando a despertar finalmente en estos días?"
      },
      {
        id: "n2",
        x: 70,
        y: 54,
        title: "La Antorcha Subterránea Alzada hacia la Conciencia",
        secret: "Al darse vuelta el diorama, la antorcha que apuntaba al suelo del abismo se eleva como un farol que ilumina el techo de la caverna. Revela que el fuego oculto del inconsciente (tus verdaderas motivaciones, pasiones o sombras negadas) sale a la luz de la conciencia para ser purificado y usado a tu favor.",
        esotericFormula: "Fuego del Sótano Iluminado = Fin del Sabotaje Inconsciente",
        meditationPrompt: "¿Qué deseo, enojo o ambición que antes escondías por culpa estás listo para mirar hoy a plena luz?"
      },
      {
        id: "n3",
        x: 34,
        y: 76,
        title: "Los Eslabones Abiertos Desprendiéndose del Cuello",
        secret: "En la cima de la carta invertida quedan los collares sueltos del medio cubo de piedra cayendo por su propio peso. Certifica que ninguna atadura externa tiene ya poder real para retenerte, salvo la costumbre mental de seguir creyéndote prisionero.",
        esotericFormula: "Collar Caído = Rescisión del Pacto de Servidumbre",
        meditationPrompt: "¿Qué hábito, deuda o relación asfixiante vas a dejar caer hoy definitivamente de tus muñecas?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XVI INVERTIDO • LA TORRE EN SOMBRA (PEH INVERTIDA • LA DEMOLICIÓN NEGADA Y LA OLLA A PRESIÓN)
  // ==========================================================================
  {
    id: 16,
    numeral: "XVI",
    name: "La Torre",
    subtitle: "Los Cimientos Agrietados y el Terremoto Retenido",
    isReversed: true,
    palette: {
      primary: "#c2410c",
      secondary: "#6b21a8",
      glow: "rgba(194, 65, 12, 0.58)"
    },
    archetype: "tower",
    shadowPolarity: {
      byExcess: "El Saboteador Incendiario: provocar crisis artificiales y destruir estructuras sanas por pánico al compromiso o por adicción al caos, dramatismo explosivo que quema todo sin construir nada.",
      byDeficiency: "El Apuntalador de Ruinas: negación terca ante un colapso evidente, sostener con las manos una fachada agrietada por terror al impacto, prolongar una agonía durante meses o sacudida amortiguada que avisa antes de caer."
    },
    correspondences: {
      element: "Fuego Subterráneo Comprimido / Gas a Presión sin Válvula",
      astro: "Marte Retrógrado • La Explosión Hacia Adentro (Implosión) o el Temblor de Advertencia",
      hebrewLetter: "Peh (פ) en Sombra • La Boca que se muerde la lengua para no decir la verdad que derribaría la farsa",
      qliphoth: "Zamradiel • El Pánico al Derrumbe y la Esclavitud entre los Escombros",
      alchemy: "Fulminatio Contenida • El vaso hermético que se agrieta lentamente por negarse a abrir la válvula de escape",
      hermeticAxiom: "Apuntalar con vigas de miedo un muro que ya perdió su plomada solo garantiza que los ladrillos te caigan sobre la cabeza mientras dormís.",
      jungianComplex: "La Negación Psicótica/Neurótica de la Crisis y la Implosión Psicosomática",
      yesNo: "No (la estructura actual está agrietada por dentro; dejá de emparchar lo falso y hacé vos mismo la reforma antes de que ceda)",
      keywords: [
        "agonía prolongada",
        "negación de crisis",
        "muros agrietados",
        "olla a presión",
        "temblor de aviso",
        "miedo al impacto",
        "demolición controlada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Escuchá el crujido de las vigas sobre tu cabeza. Sabés perfectamente que esa estructura —ese esquema de negocio, esa mentira cómoda o ese acuerdo roto— ya está partida desde los cimientos, pero te estás quedando sin brazos de tanto sostener las paredes para que los vecinos no vean el derrumbe.",
    oracleVoiceVariants: [
      "Escuchá el crujido de las vigas sobre tu cabeza. Sabés perfectamente que esa estructura —ese esquema de negocio, esa mentira cómoda o ese acuerdo roto— ya está partida desde los cimientos, pero te estás quedando sin brazos de tanto sostener las paredes para que los vecinos no vean el derrumbe.",
      "Cuando salgo invertida te doy una última gracia marcial: te muestro la grieta con un temblor suave hoy para que puedas hacer una demolición controlada con tus propias manos, antes de que baje el rayo grande mañana.",
      "Tapar una rajadura estructural con papel pintado y una sonrisa no salva el edificio: solo encierra la presión adentro hasta que la explosión sea el doble de cara.",
      "Mi letra es Peh, la Boca. Esa frase de verdad que tenés atragantada en la garganta por miedo a 'armar un escándalo' es exactamente la dinamita que tu alma necesita para salir al aire libre.",
      "En mi polo opuesto y ciego, cuidate de no ser vos el piromaníaco que prende fuego su propio taller cada vez que las cosas empiezan a funcionar en paz."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Torre (Arcano XVI) invertida diagnostica una alta tensión estructural contenida en el Sendero 27 de la letra Peh. En su lectura de advertencia psicológica y estratégica, revela que estás intentando evitar a toda costa una crisis o reestructuración que ya es inevitable: preferís sufrir una agonía lenta y crónica sosteniendo apariencias antes que atravesar el impacto corto y liberador de la verdad. Sin embargo, en su lectura predictiva benéfica, el Arcano XVI invertido actúa como un *Pararrayos Amortiguador*: indica que lograste ver el peligro a tiempo y que, si ejecutás vos mismo los cambios y ajustes necesarios hoy, transformarás una catástrofe descontrolada en una reforma quirúrgica bajo tu propio comando.",
    meaningVariants: [
      "La Torre (Arcano XVI) invertida diagnostica una alta tensión estructural contenida en el Sendero 27 de la letra Peh. En su lectura de advertencia psicológica y estratégica, revela que estás intentando evitar a toda costa una crisis o reestructuración que ya es inevitable: preferís sufrir una agonía lenta y crónica sosteniendo apariencias antes que atravesar el impacto corto y liberador de la verdad. Sin embargo, en su lectura predictiva benéfica, el Arcano XVI invertido actúa como un *Pararrayos Amortiguador*: indica que lograste ver el peligro a tiempo y que, si ejecutás vos mismo los cambios y ajustes necesarios hoy, transformarás una catástrofe descontrolada en una reforma quirúrgica bajo tu propio comando.",
      "En el Árbol de la Vida, el Sendero de Marte une la pasión emocional (Netzach) con la mente lógica (Hod). Cuando La Torre se invierte, el fuego marciano no sale hacia afuera como relámpago purificador, sino que *implosiona* hacia adentro: te tragás la bronca, disimulás el quiebre comercial o callás el conflicto vincular, convirtiendo tu propio cuerpo y tu caja financiera en una olla a presión sin válvula.",
      "Alquímicamente, el Arcano XVI en sombra advierte sobre el peligro de usar un matraz con fisuras microscópicas: no esperes a subir el fuego al máximo de una campaña o lanzamiento si ya detectaste un bug crítico en el código, una falla en el envase o una deslealtad en el equipo. Frená hoy, cambiá la pieza rota en frío y evitarás que estalle en caliente.",
      "Observá la diferencia entre ser demolido por el destino (La Torre al derecho cuando hubo ceguera previa) y ser el *Ingeniero en Demoliciones* (el uso sabio de La Torre invertida): hoy tenés el privilegio de elegir qué pared falsa vas a tirar abajo con el martillo en tu mano y a la hora que vos decidas.",
      "En su polo de exceso autodestructivo, esta carta te previene contra los 'ataques de pánico al éxito': no patees ni dinamites una relación sana o un negocio rentable por aburrimiento o por la costumbre traumática de vivir siempre entre escombros."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica profunda de Jung, aquí opera el *Terror al Derrumbe de la Persona (la Fachada Social)*: sentís inconscientemente que admitir un quiebre, un cambio de rumbo o una crisis ante los demás sería una humillación insoportable, y por eso seguís pagando el alquiler de un castillo en ruinas solo para mantener el cartel en la puerta.",
    theWoundVariants: [
      "En la clínica profunda de Jung, aquí opera el *Terror al Derrumbe de la Persona (la Fachada Social)*: sentís inconscientemente que admitir un quiebre, un cambio de rumbo o una crisis ante los demás sería una humillación insoportable, y por eso seguís pagando el alquiler de un castillo en ruinas solo para mantener el cartel en la puerta.",
      "El trauma de la *Catástrofe Súbita Infantil*: haber vivido derrumbes familiares o económicos imprevistos en tu niñez dejó en tu sistema nervioso una hipervigilancia que teme cualquier sacudida, llevándote a congelar conflictos necesarios bajo una alfombra de silencio.",
      "La Implosión Somática de Marte: cuando la psique prohíbe estrictamente el enojo y el conflicto externo ('acá no pasa nada, está todo bien'), el rayo de La Torre cae hacia adentro del organismo en forma de fiebres, picos de presión, migrañas o accidentes caseros.",
      "La adicción al Caos (el polo incendiario): no saber habitar la paz de La Estrella (Arcano XVII) porque tu identidad se forjó apagando incendios, lo que te lleva a fabricar una crisis nueva cada vez que todo está tranquilo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La mentira suicida del Ego bajo La Torre invertida es decirte: *'Si no hablo del problema y sigo como si nada, la grieta se va a cerrar sola'*, cuando toda ley de la física y del espíritu demuestra que las grietas bajo presión solo se ensanchan.",
    theIllusionVariants: [
      "La mentira suicida del Ego bajo La Torre invertida es decirte: *'Si no hablo del problema y sigo como si nada, la grieta se va a cerrar sola'*, cuando toda ley de la física y del espíritu demuestra que las grietas bajo presión solo se ensanchan.",
      "El espejismo del *'Todavía aguanta un poquito más'*: seguir sobrecargando un servidor, un vehículo, un presupuesto o una espalda que ya te dio tres luces rojas en el tablero.",
      "La coartada de 'No quiero lastimar a nadie con la verdad': en realidad no estás protegiendo al otro; te estás protegiendo vos de la incomodidad de los quince minutos que dura el trueno de la conversación sincera.",
      "Creer que hacer una reforma profunda hoy es 'perder todo lo construido': al contrario, tirar abajo la pared podrida a tiempo es lo único que salva los cimientos nobles del edificio."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XVI en sombra retrata los mecanismos de defensa de la *Negación* y la *Contención Forzada*. El Yo gasta toda su energía disponible en mantener cerradas las escotillas de una crisis evidente, generando una presión interna insostenible que pide catarsis consciente.",
    psycheVariants: [
      "Psicológicamente, el Arcano XVI en sombra retrata los mecanismos de defensa de la *Negación* y la *Contención Forzada*. El Yo gasta toda su energía disponible en mantener cerradas las escotillas de una crisis evidente, generando una presión interna insostenible que pide catarsis consciente.",
      "Tu cuerpo está funcionando como el pararrayos de una verdad no dicha: esa tensión eléctrica en la nuca y en el pecho desaparece en el minuto en que abrís la válvula (la letra Peh, la boca).",
      "No confundas amortiguar el golpe con evitar el cambio: la vida te está perdonando el incendio grande a condición de que vos mismo limpies la maleza seca hoy.",
      "La sabiduría de Marte invertido consiste en practicar la 'demolición programada': desarmar en paz lo que ya no sirve antes de que estalle en guerra."
    ],

    lightAndShadow: "En Sombra Activa: Negación terca ante lo evidente, prolongar una agonía por miedo al impacto, presión interna a punto de estallar, o bien sacudida amortiguada que permite corregir a tiempo.",
    lightAndShadowVariants: [
      "En Sombra Activa: Negación terca ante lo evidente, prolongar una agonía por miedo al impacto, presión interna a punto de estallar, o bien sacudida amortiguada que permite corregir a tiempo.",
      "Sombra por Defecto: Apuntalar ruinas, miedo al conflicto sincero y somatización del rayo hacia adentro. Sombra por Exceso: Autoboicot explosivo y piromanía emocional.",
      "Distorsión de Peh: La verdad retenida entre los dientes que hace temblar los muros desde los cimientos."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Evitar una conversación urgente por pánico a la ruptura o al enojo del otro, caminando sobre cáscaras de huevo en una tensa calma artificial. Si el vínculo tiene raíces verdaderas, provoquen hoy mismo la tormenta sincera que limpie el aire viciado; si la estructura ya se cayó por dentro y solo sostienen la fachada ante la familia, dejen de prolongar la agonía.",
      work: "Alerta técnica y estructural temprana: hay un punto débil en tu cadena de suministro, en tu código, en tus máquinas o en tu modelo comercial que ya dio un primer chispazo de aviso. No lo emparches con alambre para salir del paso; frená hoy, hacé la reestructuración de fondo vos mismo y evitarás cualquier colapso futuro.",
      money: "Peligro de endeudarte para sostener una estructura deficitaria o 'tapar un agujero abriendo otro más grande'. Cortá el gasto estructural muerto hoy mismo: achicar la torre a tiempo salva todo tu capital.",
      spirit: "Resistencia del ego al *Satori*: aferrarse a creencias viejas que ya se agrietaron en vez de agradecer el rayo de realidad que te despierta.",
      healthAndEnergy: "Somatización por presión interna no descargada: bruxismo severo, picos de presión arterial, fiebres internas, forúnculos/erupciones o contracturas agudas que piden válvula de escape física inmediata."
    },
    domainsVariants: [
      {
        love: "Evitar una conversación urgente por pánico a la ruptura o al enojo del otro, caminando sobre cáscaras de huevo en una tensa calma artificial. Si el vínculo tiene raíces verdaderas, provoquen hoy mismo la tormenta sincera que limpie el aire viciado; si la estructura ya se cayó por dentro y solo sostienen la fachada ante la familia, dejen de prolongar la agonía.",
        work: "Alerta técnica y estructural temprana: hay un punto débil en tu cadena de suministro, en tu código, en tus máquinas o en tu modelo comercial que ya dio un primer chispazo de aviso. No lo emparches con alambre para salir del paso; frená hoy, hacé la reestructuración de fondo vos mismo y evitarás cualquier colapso futuro.",
        money: "Peligro de endeudarte para sostener una estructura deficitaria o 'tapar un agujero abriendo otro más grande'. Cortá el gasto estructural muerto hoy mismo: achicar la torre a tiempo salva todo tu capital.",
        spirit: "Resistencia del ego al *Satori*: aferrarse a creencias viejas que ya se agrietaron en vez de agradecer el rayo de realidad que te despierta.",
        healthAndEnergy: "Somatización por presión interna no descargada: bruxismo severo, picos de presión arterial, fiebres internas, forúnculos/erupciones o contracturas agudas que piden válvula de escape física inmediata."
      },
      {
        love: "En su aspecto protector, La Torre invertida indica que una crisis de pareja que parecía terminal logró amortiguarse antes de romper todo, dándoles una ventana de gracia para reconstruir sobre acuerdos nuevos y sin caretas.",
        work: "Desarmá el cuello de botella antes del pico de demanda: lo que hoy arreglás en una tarde tranquila de taller te evita perder una semana entera en plena temporada alta.",
        money: "Salí hoy mismo de cualquier activo, sociedad o inversión donde veas que los fundamentos reales están flojos aunque el precio de vidriera todavía parezca alto.",
        spirit: "Dejar caer la 'corona del personaje infalible': descubrir qué alivio inmenso se siente cuando admitís 'esto así no funciona, lo voy a hacer de nuevo'.",
        healthAndEnergy: "Necesitás una catarsis motora urgente: golpear la bolsa, levantar hierro pesado, gritar en el campo o transpirar a fondo para sacar el fuego de Marte del cuerpo."
      },
      {
        love: "Cuidado con el autoboicot explosivo: no armes una pelea artificial hoy con quien amás solo para descargar el estrés que traés de la calle o del trabajo.",
        work: "Falsa estabilidad corporativa o comercial: no te duermas en los laureles porque la competencia ya está cambiando la tecnología; sé vos quien tire abajo tu versión vieja para lanzar la nueva.",
        money: "Hacé un simulacro de estrés financiero hoy: revisá qué pasaría en tu caja si mañana cayera un treinta por ciento una variable y dejá listo el paracaídas.",
        spirit: "Entender que Dios habita en el cielo abierto, nunca encerrado entre cuatro ladrillos de miedo.",
        healthAndEnergy: "Prestá atención a muelas, cabeza y temperatura corporal; no reprimas un estornudo, un llanto ni una verdad."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Ejecutá hoy una 'Demolición Controlada': abrí la válvula de presión diciendo la verdad que venías callando, y desarmá vos mismo con orden esa estructura o método agrietado antes de que se caiga solo.",
      prohibition: "Prohibido seguir poniendo parches cosméticos sobre una grieta estructural hoy, o tragarte en silencio una bronca que te está subiendo a la garganta.",
      psychomagicAct: "Inflá un globo (o una bolsa de papel cerrada) soplando adentro toda la tensión, las verdades calladas y el miedo al conflicto que venís acumulando esta semana; miralo lleno a presión y pinchalo o reventalo de un golpe seco entre tus manos diciendo: 'Abro la válvula por mi propia voluntad; libero la presión y salvo mis cimientos'.",
      talismanPhrase: "No espero al rayo con miedo; derribo yo mismo lo falso con conciencia y edifico sobre mi roca eterna."
    },
    theAlchemyVariants: [
      {
        command: "Ejecutá hoy una 'Demolición Controlada': abrí la válvula de presión diciendo la verdad que venías callando, y desarmá vos mismo con orden esa estructura o método agrietado antes de que se caiga solo.",
        prohibition: "Prohibido seguir poniendo parches cosméticos sobre una grieta estructural hoy, o tragarte en silencio una bronca que te está subiendo a la garganta.",
        psychomagicAct: "Inflá un globo (o una bolsa de papel cerrada) soplando adentro toda la tensión, las verdades calladas y el miedo al conflicto que venís acumulando esta semana; miralo lleno a presión y pinchalo o reventalo de un golpe seco entre tus manos diciendo: 'Abro la válvula por mi propia voluntad; libero la presión y salvo mis cimientos'.",
        talismanPhrase: "No espero al rayo con miedo; derribo yo mismo lo falso con conciencia y edifico sobre mi roca eterna."
      },
      {
        command: "Arreglá hoy de raíz esa falla técnica, eléctrica, mecánica o administrativa que ya te dio el primer aviso esta semana: no la dejes para el mes que viene.",
        prohibition: "No sostengas una fachada por orgullo ante los demás si adentro tuyo ya sabés que cambiaste de rumbo.",
        psychomagicAct: "Tomá una galleta seca, cáscara de huevo o trozo de cartón rígido que represente la coraza falsa que te asfixia; rompelos con una sola mano sobre un plato, soplá las migas afuera y apoyá en el centro del plato limpio una piedra sólida.",
        talismanPhrase: "Agradezco el aviso temprano del trueno; reformo mi casa a tiempo y camino seguro."
      },
      {
        command: "Provocá hoy esa conversación incómoda pero necesaria que venís pateando: quince minutos de incomodidad frontal te devuelven un año de cielo despejado.",
        prohibition: "No descargues tu tensión eléctrica contra personas inocentes ni rompas lo que sí funciona bien por un impulso de rabia.",
        psychomagicAct: "Salí a caminar rápido o hacé tres series de fuerza intensa hasta transpirar antes de sentarte a negociar o decidir hoy, descargando primero el exceso de adrenalina marciana a tierra.",
        talismanPhrase: "Mi boca pronuncia la verdad de Peh sin furia y sin miedo; el aire de mi vida queda limpio."
      }
    ],

    actionOracle: {
      command: "Ejecutá hoy una 'Demolición Controlada': abrí la válvula de presión diciendo la verdad que venías callando, y desarmá vos mismo con orden esa estructura o método agrietado antes de que se caiga solo.",
      prohibition: "Prohibido seguir poniendo parches cosméticos sobre una grieta estructural hoy, o tragarte en silencio una bronca que te está subiendo a la garganta.",
      psychomagicAct: "Inflá un globo (o una bolsa de papel cerrada) soplando adentro toda la tensión, las verdades calladas y el miedo al conflicto que venís acumulando esta semana; miralo lleno a presión y pinchalo o reventalo de un golpe seco entre tus manos diciendo: 'Abro la válvula por mi propia voluntad; libero la presión y salvo mis cimientos'.",
      talismanPhrase: "No espero al rayo con miedo; derribo yo mismo lo falso con conciencia y edifico sobre mi roca eterna."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVI aparece en Sombra: hay una grieta estructural o una presión contenida que te pide abrir la válvula a tiempo.",
      secondAppearance: "La Torre Invertida sale por segunda vez: el edificio ya te dio el primer temblor de aviso y seguís emparchando la pared. Hacé la reforma de fondo hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XVI en Sombra: la olla a presión está al límite. Si no abrís la boca y desarmás lo falso vos hoy, el rayo caerá al derecho sin pedir permiso.",
      fourthPlusAppearance: "Alerta roja de Peh en Sombra: fin de toda prórroga. Salí inmediatamente de la estructura agrietada y soltá el control de lo que ya no tiene cimientos."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "No temas que caiga lo que ya no tiene cimientos reales: derribá vos mismo lo falso con conciencia hoy para no quedar mañana debajo de los escombros.",
    counselVariants: [
      "No temas que caiga lo que ya no tiene cimientos reales: derribá vos mismo lo falso con conciencia hoy para no quedar mañana debajo de los escombros.",
      "Una demolición hecha a tiempo con tu propio martillo cuesta diez veces menos que un derrumbe esperado con los ojos cerrados.",
      "La caldera no explota porque tenga fuego adentro; explota porque el dueño soldó la válvula de escape por miedo al ruido del vapor.",
      "Nunca confundas paz verdadera con el silencio tenso que hay un minuto antes de la tormenta.",
      "Agradecé el pequeño chispazo que te mostró el cable pelado hoy: te acaba de salvar el taller entero."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "El Relámpago Contenido (La Implosión Silenciosa)",
        secret: "Al invertirse la carta, el rayo en zigzag parece subir desde las entrañas de la tierra hacia adentro de la torre en lugar de bajar del cielo. Simboliza la *Implosión*: cuando la verdad, la rabia o el cambio necesario se reprimen hacia adentro del cuerpo o de la empresa, agrietando las paredes desde el interior sin que afuera se vea todavía el humo.",
        esotericFormula: "Rayo Invertido = Presión Interna Contenida que Agrieta el Vaso",
        meditationPrompt: "¿Qué verdad o tensión estás conteniendo hoy puertas adentro para mantener las apariencias hacia afuera?"
      },
      {
        id: "n2",
        x: 72,
        y: 34,
        title: "La Corona Atornillada por el Miedo",
        secret: "En Sombra, el Ego intenta volver a pegar con alambre la corona destronada sobre el techo roto para fingir que 'aquí no ha pasado nada y todo sigue bajo control'. Es el retrato del orgullo terco que se niega a aceptar que una etapa o método ya fue superado por la realidad.",
        esotericFormula: "Corona Forzada = Negación del Cambio y Fachada Frágil",
        meditationPrompt: "¿Qué fachada o viejo método estás intentando sostener con alambre hoy cuando sabés que necesita ser hecho de nuevo?"
      },
      {
        id: "n3",
        x: 34,
        y: 72,
        title: "Las Chispas de Luz Atrapadas entre los Ladrillos",
        secret: "Las veintidós Yods de oro (tu energía creativa y vital) quedan encerradas bajo el peso de los muros agrietados porque el operador teme salir a la intemperie. Apenas aceptás demoler la forma caduca, esas veintidós chispas quedan libres para encender el cielo de La Estrella.",
        esotericFormula: "Energía Atrapada en la Ruina -> Demolición Consciente -> Libertad Creativa",
        meditationPrompt: "¿Cuánta energía vital te devolvería hoy mismo dejar de sostener esa estructura que ya no te representa?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XVII INVERTIDO • LA ESTRELLA EN SOMBRA (TZADDI INVERTIDA • EL MANANTIAL SECO Y EL ESPEJISMO)
  // ==========================================================================
  {
    id: 17,
    numeral: "XVII",
    name: "La Estrella",
    subtitle: "El Cielo Nublado y los Cántaros Derramados en la Arena",
    isReversed: true,
    palette: {
      primary: "#0369a1",
      secondary: "#a16207",
      glow: "rgba(3, 105, 161, 0.55)"
    },
    archetype: "star",
    shadowPolarity: {
      byExcess: "El Soñador Desarraigado y el Drenaje: vivir en una nube utópica sin tocar nunca la tierra práctica, regalar el agua de tus cántaros en arena ingrata hasta vaciarte, o esperar que los astros hagan tu trabajo.",
      byDeficiency: "El Cielo Encapotado y la Sequía de Fe: pesimismo amargo tras el golpe de La Torre, pérdida del norte vocacional, bloqueo de la musa inspiradora, cinismo defensivo y síndrome del impostor estético."
    },
    correspondences: {
      element: "Aire Seco de Desierto o Neblina que Oculta los Astros",
      astro: "Acuario Afligido / Saturno Frío Apagando a Urano • El Desencanto y la Utopía sin Tierra",
      hebrewLetter: "Tzaddi (צ) en Sombra • El Anzuelo sin Carnada que pesca en el vacío o se engancha en el fondo",
      qliphoth: "Tzalalimiron • Las Sombras del Desánimo y las Promesas Etéreas que nunca Encarnan",
      alchemy: "Evaporatio Inutilis • El rocío celeste que se pierde en el aire caliente por no tener tierra preparada que lo reciba",
      hermeticAxiom: "La estrella de Sirio jamás se apaga en el firmamento; son los vapores de tu propio desánimo los que levantan la nube que te impide verla.",
      jungianComplex: "La Pérdida del Alma (Desconexión del Anima/Musa), la Depresión Post-Catarsis y el Idealismo Pueril",
      yesNo: "No todavía (o estás mirando el barro con pesimismo injusto, o tu plan está en las nubes y le falta anclaje a tierra)",
      keywords: [
        "desánimo pasajero",
        "sequía creativa",
        "utopía sin tierra",
        "pérdida del norte",
        "drenaje de energía",
        "cinismo defensivo",
        "nube en el cielo"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Levantá la cabeza del suelo. Después del trueno de La Torre te quedaste mirando los escombros con tanta amargura que jurás que el cielo se apagó para siempre, cuando yo sigo brillando intacta a dos metros por encima de tu frente. Limpiate los ojos de ceniza hoy mismo.",
    oracleVoiceVariants: [
      "Levantá la cabeza del suelo. Después del trueno de La Torre te quedaste mirando los escombros con tanta amargura que jurás que el cielo se apagó para siempre, cuando yo sigo brillando intacta a dos metros por encima de tu frente. Limpiate los ojos de ceniza hoy mismo.",
      "Mirame las dos ánforas dadas vuelta: estás volcando tu mejor agua viva sobre piedras secas que no te agradecen ni una gota, y después te quejás de que llegás a la noche con el alma vacía.",
      "En mi otra sombra acuariana, te enamoraste tanto de la estrella lejana en el cielo que te olvidaste de apoyar la rodilla en la tierra. Un sueño sin presupuesto, sin taller y sin manos es solo humo azul.",
      "Te pusiste la coraza del cínico diciendo *'yo ya no creo en nada, soy realista'*, pero ese cinismo no es inteligencia: es el miedo que te da volver a ilusionarte y que te vuelva a doler.",
      "Tu musa no te abandonó; simplemente se calló porque cada vez que te trae una idea luminosa, tu juez interno la apedrea antes de que toque el papel."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Estrella (Arcano XVII) invertida señala una crisis de fe, de inspiración o de anclaje práctico en el Sendero 28 de la letra Tzaddi. En su polo melancólico (Saturno ahogando a Acuario), aparece cuando el consultante ha quedado aturdido tras un golpe o desilusión previa (La Torre) y cae en un nubarrón de pesimismo, sequedad espiritual y duda sobre su propio talento justo a cinco minutos de que aclare el cielo. En su polo aéreo o utópico (Urano sin tierra), advierte sobre el *Idealismo Desarraigado*: proyectos hermosos en la fantasía que fracasan porque el creador vive en las nubes sin calcular costos ni pisar el barro, o bien un drenaje energético por regalar tus dones donde no hay manantial de retorno.",
    meaningVariants: [
      "La Estrella (Arcano XVII) invertida señala una crisis de fe, de inspiración o de anclaje práctico en el Sendero 28 de la letra Tzaddi. En su polo melancólico (Saturno ahogando a Acuario), aparece cuando el consultante ha quedado aturdido tras un golpe o desilusión previa (La Torre) y cae en un nubarrón de pesimismo, sequedad espiritual y duda sobre su propio talento justo a cinco minutos de que aclare el cielo. En su polo aéreo o utópico (Urano sin tierra), advierte sobre el *Idealismo Desarraigado*: proyectos hermosos en la fantasía que fracasan porque el creador vive en las nubes sin calcular costos ni pisar el barro, o bien un drenaje energético por regalar tus dones donde no hay manantial de retorno.",
      "En el Árbol de la Vida, el Sendero de Tzaddi une la esfera artística de Netzach con el fundamento lunar de Yesod. Cuando se invierte, el canal entre la imaginación creadora y la forma etérica se desconecta: sentís que 'se secó el pozo de las ideas', que lo que producís no tiene gracia estética o que perdiste el contacto con tu Estrella Polar vocacional.",
      "Observá la mecánica de las dos ánforas en Sombra: en lugar de estar conectadas al manantial inagotable del cosmos, funcionan como dos baldes finitos que se vacían de golpe. Estás dando más de lo que tu cuerpo y tu cuenta bancaria pueden reponer hoy, cayendo en la fatiga del dador vaciado.",
      "Alquímicamente, el Arcano XVII invertido representa el *Ros Coeli* (el Rocío Celeste) que cae sobre una piedra sucia de grasa o polvo: por más pura que sea la inspiración que baja del cielo, si tu taller diario está desordenado o tu mente está teñida de amargura, la bendición resbala sin penetrar la materia.",
      "Esta carta invertida nunca decreta la muerte de tu sueño; decreta que estás mirando el firmamento con el telescopio empañado o que estás intentando navegar por las estrellas sin haber calafateado primero el casco de madera de tu barco."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, La Estrella invertida diagnostica la *Desilusión Traumática (El Anima Herida)*: alguna vez confiaste con inocencia total en un sueño, un amor o una vocación y sufriste un derrumbe inesperado. Para no volver a sentir esa caída, tu psique instaló un 'apagón preventivo de la esperanza', prefiriendo el gris seguro del pesimismo antes que el riesgo de volver a brillar.",
    theWoundVariants: [
      "En la psicología profunda de Jung, La Estrella invertida diagnostica la *Desilusión Traumática (El Anima Herida)*: alguna vez confiaste con inocencia total en un sueño, un amor o una vocación y sufriste un derrumbe inesperado. Para no volver a sentir esa caída, tu psique instaló un 'apagón preventivo de la esperanza', prefiriendo el gris seguro del pesimismo antes que el riesgo de volver a brillar.",
      "El síndrome del *Artista o Soñador Desarraigado* (Puer Acuariano): usar la imaginación sobre el futuro lejano como un refugio disociativo para no enfrentar la disciplina sucia y concreta del presente en Malkuth.",
      "La herida de la Exposición Desnuda: como la Doncella de La Estrella no lleva ropa ni armadura, en sombra aparece el pánico escénico a mostrarte tal cual sos —con tu arte verdadero y tu sensibilidad real— temiendo la burla de los cínicos.",
      "El complejo de la Cisterna Rota: creer inconscientemente que tus recursos creativos o afectivos son limitados y que si hoy das lo mejor de vos, mañana te quedarás vacío."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño más triste de La Estrella invertida es disfrazar la cobardía de inteligencia diciendo: *'Yo no soy pesimista, soy un realista bien informado'*, cuando en verdad estás proyectando tus cicatrices pasadas sobre un futuro que está completamente virgen.",
    theIllusionVariants: [
      "El autoengaño más triste de La Estrella invertida es disfrazar la cobardía de inteligencia diciendo: *'Yo no soy pesimista, soy un realista bien informado'*, cuando en verdad estás proyectando tus cicatrices pasadas sobre un futuro que está completamente virgen.",
      "El espejismo opuesto del Utópico: decirte *'Como mi proyecto es tan noble, estético y espiritual, el dinero y los clientes tienen que venir solos sin que yo me ocupe de vender ni de cobrar'*. En la tierra de Malkuth, hasta la estrella más alta necesita un cable de cobre para dar luz en la lámpara.",
      "La ilusión de que 'perdiste el toque o el talento': el talento real jamás se pierde; lo que tenés hoy es cansancio nervioso y falta de juego libre sin presión.",
      "Creer que tenés que salvar o regar todos los desiertos ajenos: tus cántaros fueron hechos para tu jardín y tu río, no para apagar incendios de quienes no quieren cuidarse."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XVII en sombra señala una desconexión entre el Yo y la función prospectiva/imaginativa del inconsciente (la fuente de sentido futuro). El individuo sufre de *Anhedonia* pasajera (incapacidad de entusiasmarse), sequedad creativa o disociación en castillos en el aire.",
    psycheVariants: [
      "Psicológicamente, el Arcano XVII en sombra señala una desconexión entre el Yo y la función prospectiva/imaginativa del inconsciente (la fuente de sentido futuro). El individuo sufre de *Anhedonia* pasajera (incapacidad de entusiasmarse), sequedad creativa o disociación en castillos en el aire.",
      "El espejo del estanque mental está agitado por preocupaciones de corto plazo, impidiendo que la luz fría y clara de Sirio se refleje en tu conciencia.",
      "Estás exigiendo a tu musa que trabaje bajo látigo comercial sin haberle dado antes belleza, silencio ni contemplación.",
      "Enderezar a Tzaddi requiere unir la rodilla en tierra (plan de negocios y acción hoy) con la mirada en el octograma estelar (visión incorruptible a largo plazo)."
    ],

    lightAndShadow: "En Sombra Activa: Desánimo pasajero, pesimismo que nubla el juicio, bloqueo de la inspiración, sentir que das más de lo que recibís, o idealismo en las nubes sin arraigo práctico.",
    lightAndShadowVariants: [
      "En Sombra Activa: Desánimo pasajero, pesimismo que nubla el juicio, bloqueo de la inspiración, sentir que das más de lo que recibís, o idealismo en las nubes sin arraigo práctico.",
      "Sombra por Defecto: Sequía espiritual, cinismo amargo, pérdida de fe en uno mismo y musa silenciada. Sombra por Exceso: Utopía ingenua, derroche energético y vivir en el futuro sin pisar el presente.",
      "Distorsión de Tzaddi: El estanque enturbiado que no puede reflejar la estrella que tiene justo encima."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Cerrar el corazón por desilusiones pasadas ('todos son iguales, ya no vale la pena abrirse'), sentir que en la relación actual estás volcando tus dos cántaros sin recibir ni una gota de ternura a cambio, o bien idealizar un amor platónico/imposible en las nubes para no comprometerte con un ser humano real de carne y hueso.",
      work: "Bloqueo creativo temporal (*writer's block*), duda sobre tu propio talento justo antes de mostrar la obra, o desconexión estética en tu marca. Si tu proyecto es muy innovador o artístico, La Estrella invertida te advierte que hoy le falta tierra: bajá la idea de la nube acuariana y armale ya mismo su estructura de costos, ventas y distribución concreta.",
      money: "Fugas de recursos por generosidad mal entendida, precios demasiado bajos por 'amor al arte' o inversiones puestas en promesas futuristas que todavía no tienen piso firme en el mercado.",
      spirit: "La 'Noche Seca del Alma': sentir temporalmente que el cielo está mudo o que tus prácticas espirituales perdieron frescura. No abandones el sendero; el manantial sigue corriendo bajo la escarcha.",
      healthAndEnergy: "Baja de energía vital y bioeléctrica, mala circulación de retorno en piernas y tobillos (Acuario), piel seca o deshidratada y melancolía estacional por falta de luz y aire puro."
    },
    domainsVariants: [
      {
        love: "Cerrar el corazón por desilusiones pasadas ('todos son iguales, ya no vale la pena abrirse'), sentir que en la relación actual estás volcando tus dos cántaros sin recibir ni una gota de ternura a cambio, o bien idealizar un amor platónico/imposible en las nubes para no comprometerte con un ser humano real de carne y hueso.",
        work: "Bloqueo creativo temporal (*writer's block*), duda sobre tu propio talento justo antes de mostrar la obra, o desconexión estética en tu marca. Si tu proyecto es muy innovador o artístico, La Estrella invertida te advierte que hoy le falta tierra: bajá la idea de la nube acuariana y armale ya mismo su estructura de costos, ventas y distribución concreta.",
        money: "Fugas de recursos por generosidad mal entendida, precios demasiado bajos por 'amor al arte' o inversiones puestas en promesas futuristas que todavía no tienen piso firme en el mercado.",
        spirit: "La 'Noche Seca del Alma': sentir temporalmente que el cielo está mudo o que tus prácticas espirituales perdieron frescura. No abandones el sendero; el manantial sigue corriendo bajo la escarcha.",
        healthAndEnergy: "Baja de energía vital y bioeléctrica, mala circulación de retorno en piernas y tobillos (Acuario), piel seca o deshidratada y melancolía estacional por falta de luz y aire puro."
      },
      {
        love: "Frialdad acuariana defensiva: tratar a la pareja con distancia amistosa pero sin intimidad profunda por miedo a volver a quedar desnudo y vulnerable en el estanque.",
        work: "Estás comparando el borrador crudo de tu taller con la vidriera editada de los demás y por eso te desanimás. Apagá la comparación externa y volvé a conectar con lo que hace única a tu obra.",
        money: "Cerrá la canilla de los préstamos o regalos de tiempo a quienes nunca están cuando vos necesitás un vaso de agua.",
        spirit: "Volver a la meditación pura de Tzaddi sin pedir resultados mágicos inmediatos: sentarse junto al agua simplemente por el placer de estar en silencio.",
        healthAndEnergy: "Tu sistema nervioso está seco de tanto fuego mental y pantallas; necesitás agua viva, baños de inmersión y caminar cerca de árboles o ríos."
      },
      {
        love: "Si se rompió una ilusión falsa en tu vida afectiva, no llores por el espejismo perdido: ahora que cayó el disfraz podés empezar a construir un vínculo verdadero.",
        work: "Falta de foco en el presente por vivir soñando con cómo será tu empresa dentro de cinco años: la estrella del año cinco se construye clavando el tornillo del día uno.",
        money: "Revisá dónde se está evaporando tu liquidez en pequeños gastos invisibles como agua que cae en la arena.",
        spirit: "Reconciliar a Saturno (el límite real) con Urano (la visión libre): usar la restricción material de hoy como el marco que hace brillar tu ingenio.",
        healthAndEnergy: "Oxigenación pobre por respiración corta; abrí el tórax, salí bajo el cielo nocturno y recargá tus centros magnéticos."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Limpiá tu mirada del desánimo hoy mismo: si estabas pesimista, obligáte a ejecutar un acto de fe concreto en tu obra; si estabas volando en las nubes, bajá tu sueño a una planilla de tierra con números y fechas reales antes del anochecer.",
      prohibition: "Prohibido pronunciar hoy frases de derrota ('ya es tarde', 'no va a funcionar'), seguir volcando tus cántaros donde no valoran tu agua, o soñar despierto sin mover las manos.",
      psychomagicAct: "Llená un vaso de vidrio hasta el borde con agua mineral limpia, agregale una pizca mínima de sal (la tierra) y colocalo sobre una hoja donde hayas dibujado una estrella de ocho puntas. Mirá a través del vaso hacia una luz, bebé la mitad del agua y con la otra mitad mojate las manos para tocar tu herramienta de trabajo diciendo: 'Uno el cielo de mi visión con la tierra de mis manos; mi manantial vuelve a correr limpio'.",
      talismanPhrase: "Las nubes pasan pero Sirio permanece; cierro mis fugas, apoyo mi rodilla en la roca y vuelvo a creer en mi estrella."
    },
    theAlchemyVariants: [
      {
        command: "Limpiá tu mirada del desánimo hoy mismo: si estabas pesimista, obligáte a ejecutar un acto de fe concreto en tu obra; si estabas volando en las nubes, bajá tu sueño a una planilla de tierra con números y fechas reales antes del anochecer.",
        prohibition: "Prohibido pronunciar hoy frases de derrota ('ya es tarde', 'no va a funcionar'), seguir volcando tus cántaros donde no valoran tu agua, o soñar despierto sin mover las manos.",
        psychomagicAct: "Llená un vaso de vidrio hasta el borde con agua mineral limpia, agregale una pizca mínima de sal (la tierra) y colocalo sobre una hoja donde hayas dibujado una estrella de ocho puntas. Mirá a través del vaso hacia una luz, bebé la mitad del agua y con la otra mitad mojate las manos para tocar tu herramienta de trabajo diciendo: 'Uno el cielo de mi visión con la tierra de mis manos; mi manantial vuelve a correr limpio'.",
        talismanPhrase: "Las nubes pasan pero Sirio permanece; cierro mis fugas, apoyo mi rodilla en la roca y vuelvo a creer en mi estrella."
      },
      {
        command: "Cerrá hoy mismo el cántaro que estabas derramando hacia afuera sin retorno y reservá tus dos mejores horas de energía fresca exclusivamente para tu creación personal.",
        prohibition: "No juzgues ni critiques el boceto que hagas hoy; dejá que el agua corra media hora sin filtro racional para que se destrabe el caño de la musa.",
        psychomagicAct: "Limpia a fondo los cristales de tu ventana principal o el espejo de tu baño hasta que no quede ni una mancha, y al terminar mirá hacia arriba declarando que quitás el hollín de La Torre de tu vista.",
        talismanPhrase: "Mi fe no es ingenuidad, es fuerza creadora; el firmamento entero respalda mi oficio."
      },
      {
        command: "Clavá la rodilla en la tierra hoy: poné precio real, costo exacto y paso número uno a ese sueño que hasta ayer flotaba en el éter.",
        prohibition: "No te aísles en el cinismo cuando algo tarda en florecer; regá la semilla en silencio un día más.",
        psychomagicAct: "Apoyá tu rodilla izquierda desnuda directamente sobre la tierra o el piso firme durante un minuto mientras sostenés con tu mano derecha un objeto brillante en alto hacia el techo, sellando en tu cuerpo la postura exacta del Arcano XVII.",
        talismanPhrase: "Con mi rodilla en la piedra y mi frente en los astros, hago encarnar mi sueño aquí y ahora."
      }
    ],

    actionOracle: {
      command: "Limpiá tu mirada del desánimo hoy mismo: si estabas pesimista, obligáte a ejecutar un acto de fe concreto en tu obra; si estabas volando en las nubes, bajá tu sueño a una planilla de tierra con números y fechas reales antes del anochecer.",
      prohibition: "Prohibido pronunciar hoy frases de derrota ('ya es tarde', 'no va a funcionar'), seguir volcando tus cántaros donde no valoran tu agua, o soñar despierto sin mover las manos.",
      psychomagicAct: "Llená un vaso de vidrio hasta el borde con agua mineral limpia, agregale una pizca mínima de sal (la tierra) y colocalo sobre una hoja donde hayas dibujado una estrella de ocho puntas. Mirá a través del vaso hacia una luz, bebé la mitad del agua y con la otra mitad mojate las manos para tocar tu herramienta de trabajo diciendo: 'Uno el cielo de mi visión con la tierra de mis manos; mi manantial vuelve a correr limpio'.",
      talismanPhrase: "Las nubes pasan pero Sirio permanece; cierro mis fugas, apoyo mi rodilla en la roca y vuelvo a creer en mi estrella."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVII aparece en Sombra: alerta sobre un nubarrón de desánimo pasajero, drenaje de tus cántaros o falta de tierra para un sueño.",
      secondAppearance: "La Estrella Invertida sale por segunda vez: estás dejando que el cansancio o el cinismo te hagan bajar los brazos justo cuando el terreno ya estaba limpio para sembrar.",
      thirdAppearance: "Tercera comparecencia del Arcano XVII en Sombra: peligro de abandonar tu verdadera vocación por pesimismo o de vaciarte regando arena ajena. Recuperá tu eje estelar hoy mismo.",
      fourthPlusAppearance: "Llamado urgente de Sirio en Sombra: el Oráculo te prohíbe dudar de tu destino. Lavate la cara de toda ceniza vieja, cerrá las fugas de energía y volvé a tu obra ahora."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "El firmamento jamás se apagó: limpiá el barro de tu mirada, dejá de volcar tu agua en tierra ingrata y volvé a creer en la belleza de tu camino.",
    counselVariants: [
      "El firmamento jamás se apagó: limpiá el barro de tu mirada, dejá de volcar tu agua en tierra ingrata y volvé a creer en la belleza de tu camino.",
      "Que una nube gris tape el cielo durante media hora no significa que las estrellas hayan dejado de existir.",
      "Un sueño que no se anota en un libro de cuentas se evapora con el primer sol de la mañana; una cuenta que no tiene una estrella arriba se muere de tristeza.",
      "Cuidá tus dos ánforas: hasta el manantial más puro necesita un cauce de piedra para no perderse en el pantano.",
      "Nunca le pidas permiso a tu cansancio de hoy para decidir el tamaño de tu destino de mañana."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "Sirio Oculta tras la Bruma del Desencanto",
        secret: "Al invertirse la carta, el gran Octograma de Sirio y las siete estrellas planetarias quedan en la parte inferior del campo visual mientras el barro del estanque sube a la cabeza. Simboliza el momento en que las preocupaciones terrenales o el dolor de una caída reciente tapan tu visión de largo plazo y te hacen olvidar tu norte.",
        esotericFormula: "Barro sobre Estrellas = Miopía por Desánimo o Pérdida del Norte",
        meditationPrompt: "¿Qué frustración reciente de corto plazo te está impidiendo ver hoy la grandeza de tu camino a largo plazo?"
      },
      {
        id: "n2",
        x: 30,
        y: 58,
        title: "Las Dos Ánforas Vaciadas sin Medida",
        secret: "En Sombra, los cántaros de oro y plata dados vuelta advierten sobre dos peligros: o estás derramando tu talento, tu dinero y tu afecto en terrenos estériles que no devuelven vida, o sentís que tus ánforas se han secado por completo debido al agotamiento creativo.",
        esotericFormula: "Ánforas Invertidas = Drenaje Energético o Sequía de la Musa",
        meditationPrompt: "¿En qué lugar o vínculo estás volcando hoy tu agua vital sin recibir reciprocidad ni fruto?"
      },
      {
        id: "n3",
        x: 66,
        y: 76,
        title: "La Pérdida del Doble Apoyo (Ni en Tierra ni en Agua)",
        secret: "Con el diorama de cabeza, la rodilla que debía estar firme en la roca y el pie que descansaba sobre el estanque quedan suspendidos en el aire. Es el emblema exacto de la utopía acuariana sin arraigo: ideas brillantes o promesas hermosas que fracasan porque les falta pisar el suelo real de Malkuth.",
        esotericFormula: "Pies en el Aire = Idealismo Desarraigado sin Ejecución Terrenal",
        meditationPrompt: "¿Qué paso concreto, material y medible le falta hoy a tu sueño para dejar de flotar en el aire y tocar tierra firme?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN V (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initLunarGrimoireVolume5() {
  window.DATOS_LUNA_5 = DATOS_LUNA_5;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_5.forEach(function (card) {
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
  DATOS_LUNA_5.forEach(function (lunarCard) {
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
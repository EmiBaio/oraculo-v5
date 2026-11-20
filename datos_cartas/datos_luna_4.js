// ============================================================================
// ARCHIVO: datos_luna_4.js
// GRIMORIO LUNAR DEFINITIVO (EN SOMBRA / INVERTIDA) • VOLUMEN IV: ARCANOS XI, XII, XIII y XIV
// XI • La Justicia (Sombra) | XII • El Colgado (Sombra) | XIII • La Muerte (Sombra) | XIV • La Templanza (Sombra)
// Arquitectura de Diagnóstico de la Herida, el Autoengaño y la Transmutación Alquímica
// 100% Retrocompatible con REVERSED_DATA (datos_cartas.js), motor_tarot.js y layout_arcano.js
// ============================================================================

const DATOS_LUNA_4 = [
  // ==========================================================================
  // ARCANO XI INVERTIDO • LA JUSTICIA EN SOMBRA (LAMED INVERTIDA • LA BALANZA TRUCADA)
  // ==========================================================================
  {
    id: 11,
    numeral: "XI",
    name: "La Justicia",
    subtitle: "La Balanza Adulterada y el Filo Parcial",
    isReversed: true,
    palette: {
      primary: "#64748b",
      secondary: "#a16207",
      glow: "rgba(161, 98, 7, 0.55)"
    },
    archetype: "justice",
    shadowPolarity: {
      byExcess: "El Fiscal Despiadado: severidad inhumana sin misericordia, perfeccionismo punitivo contra uno mismo o contra otros, litigiosidad vengativa y rigidez legalista que mata el espíritu.",
      byDeficiency: "La Balanza con el Pulgar Encima: autoengaño para no asumir la propia culpa, falta de reciprocidad en los pactos, evasión de consecuencias kármicas, parcialidad e injusticias burocráticas."
    },
    correspondences: {
      element: "Aire Viciado de Tribunal / Acero Doblado",
      astro: "Libra Afligida / Saturno Mal Aspectado • El Desequilibrio de los Contratos y la Pesadez del Juicio",
      hebrewLetter: "Lamed (ל) en Sombra • El Aguijón que pincha en falso o la Ley que se tuerce",
      qliphoth: "Sabrus • La Parcialidad Ciega, el Soborno Moral y la Severidad sin Equilibrio",
      alchemy: "Pondus Erroneum • La falla en el peso de los ingredientes que arruina la aleación",
      hermeticAxiom: "Quien apoya el pulgar oculto sobre el platillo para engañar a la balanza, termina pagando con su propia paz el peso exacto que quiso robar.",
      jungianComplex: "El Juez Interior Sádico (Superyó Punitivo) o la Proyección de la Culpa Propia",
      yesNo: "No (hay un desequilibrio evidente, falta de reciprocidad o un autoengaño que debés corregir antes de fallar)",
      keywords: [
        "autoengaño moral",
        "falta de reciprocidad",
        "balanza desnivelada",
        "severidad cruel",
        "evasión de culpa",
        "demora legal",
        "juicio parcial"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Sacá el dedo pulgar del platillo. Te pasás el día armando discursos brillantes para demostrar que vos hiciste todo bien y que la culpa entera es del otro, pero mi pluma blanca ya pesó tu corazón en silencio y sabe qué parte del desorden firmaste vos.",
    oracleVoiceVariants: [
      "Sacá el dedo pulgar del platillo. Te pasás el día armando discursos brillantes para demostrar que vos hiciste todo bien y que la culpa entera es del otro, pero mi pluma blanca ya pesó tu corazón en silencio y sabe qué parte del desorden firmaste vos.",
      "Mirá cómo usás mi espada al revés: para juzgar los errores ajenos tenés filo de bisturí, pero para mirar tus propias promesas rotas te ponés una venda de lana gruesa en los ojos.",
      "En mi otro polo sombrío, te convertiste en tu propio verdugo. Te seguís azotando hoy por un error que cometiste hace años cuando tenías la mitad de conciencia que ahora: eso no es justicia, es crueldad estéril.",
      "Un contrato o un amor donde uno entrega el ochenta por ciento y el otro el veinte no es generosidad: es una deuda oculta que tarde o temprano estalla en resentimiento.",
      "Si estás frente a un tribunal o negociación humana hoy, no confíes en las palabras de buena fe: donde mi balanza sale invertida, hay parcialidad o papeles mal redactados que tenés que auditar con lupa."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Justicia (Arcano XI) invertida denuncia una ruptura de la simetría y de la honestidad objetiva en el Sendero 22 de Lamed. En el plano interno, señala el mecanismo del *Autoengaño Defensivo*: negarte a reconocer tu cuota de responsabilidad en un resultado actual, o bien caer en el extremo opuesto de una autocrítica feroz que te condena sin derecho a apelación. En el plano vincular y comercial, advierte sobre intercambios profundamente asimétricos —dar mucho más de lo que recibís o exigir más de lo que entregás—, así como sobre demoras burocráticas, fallos parciales o cláusulas deshonestas que requieren revisión legal y contable inmediata.",
    meaningVariants: [
      "La Justicia (Arcano XI) invertida denuncia una ruptura de la simetría y de la honestidad objetiva en el Sendero 22 de Lamed. En el plano interno, señala el mecanismo del *Autoengaño Defensivo*: negarte a reconocer tu cuota de responsabilidad en un resultado actual, o bien caer en el extremo opuesto de una autocrítica feroz que te condena sin derecho a apelación. En el plano vincular y comercial, advierte sobre intercambios profundamente asimétricos —dar mucho más de lo que recibís o exigir más de lo que entregás—, así como sobre demoras burocráticas, fallos parciales o cláusulas deshonestas que requieren revisión legal y contable inmediata.",
      "En el Árbol de la Vida, La Justicia canaliza el fuego severo de Geburah hacia el equilibrio solar de Tiphereth. Cuando este sendero se invierte, el rigor marcial de Geburah se desboca sin la templanza del corazón: los juicios se vuelven fríos, vengativos o sesgados por el rencor, o por el contrario, se evita bajar la espada por cobardía (la indecisión crónica de Libra en sombra que pesa eternamente los platillos sin cortar jamás).",
      "En la Sala de las Dos Verdades egipcia, el Arcano XI invertido muestra el momento en que el corazón (*Ib*) pesa más que la Pluma de Ma'at porque está cargado de excusas, deudas morales no saldadas o resentimientos guardados. Ningún avance real hacia la segunda mitad del Tarot es posible mientras lleves esa contabilidad oculta sin blanquear.",
      "Alquímicamente, esta inversión es el error de dosificación (*Pondus Corruptum*): poner demasiado azufre de exigencia y poca sal de sustento real en tu fórmula, en tus precios o en tu rutina de trabajo, provocando que el compuesto se quiebre.",
      "Si tenés asuntos legales, societarios, impositivos o contractuales en curso, La Justicia invertida te ordena blindar tus espaldas con pruebas documentales irrefutables: no dejes absolutamente nada librado a la interpretación subjetiva de terceros."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica junguiana, aquí opera la herida del *Tribunal Infantil Injusto*: haber sido juzgado con vara desproporcionada o haber cargado con culpas ajenas en tu historia temprana instaló en tu psique una alergia a admitir errores (porque sentís inconscientemente que 'equivocarse un milímetro es ser culpable de todo') o un Juez Interior implacable que no te deja descansar en paz.",
    theWoundVariants: [
      "En la clínica junguiana, aquí opera la herida del *Tribunal Infantil Injusto*: haber sido juzgado con vara desproporcionada o haber cargado con culpas ajenas en tu historia temprana instaló en tu psique una alergia a admitir errores (porque sentís inconscientemente que 'equivocarse un milímetro es ser culpable de todo') o un Juez Interior implacable que no te deja descansar en paz.",
      "La herida del *Acreedor Silencioso*: dar de más sin que nadie te lo pida por miedo al rechazo, anotando secretamente cada favor en una libreta mental hasta que un día explotás sintiendo que 'todo el mundo es ingrato con vos'.",
      "El complejo de Poncio Pilatos (la sombra indecisa de Libra): lavarse las manos y demorar una sentencia necesaria para no pagar el costo político de quedar como 'el malo de la película'.",
      "La proyección de la Sombra Moral: señalar con dedo acusador en el socio, el competidor o la pareja exactamente la misma falta de palabra o desorden que vos cometés en otra área de tu vida."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño maestro de La Justicia invertida es el relato de la *Inocencia Absoluta*: contarte la historia de tu conflicto actual de tal manera que vos sos cien por ciento víctima de las circunstancias y tus propias decisiones previas no tuvieron nada que ver con este resultado.",
    theIllusionVariants: [
      "El autoengaño maestro de La Justicia invertida es el relato de la *Inocencia Absoluta*: contarte la historia de tu conflicto actual de tal manera que vos sos cien por ciento víctima de las circunstancias y tus propias decisiones previas no tuvieron nada que ver con este resultado.",
      "El espejismo de la 'Doble Vara': justificar tus propios atrasos o incumplimientos por tus 'buenas intenciones internas', mientras juzgás a los demás despiadadamente por sus resultados externos.",
      "La ilusión de que 'ceder siempre mantiene la paz': callar una asimetría comercial o afectiva hoy para evitar una discusión de diez minutos, comprando así una guerra fría de diez meses.",
      "Creer que pesar las opciones durante otro mes más es 'prudencia analítica', cuando en realidad es terror a bajar el filo de la espada y descartar."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XI invertido diagnostica una distorsión cognitiva en la función evaluadora del Yo: racionalizaciones defensivas para no ver la verdad desnuda, resentimiento acumulado por falta de reciprocidad o masoquismo moral.",
    psycheVariants: [
      "Psicológicamente, el Arcano XI invertido diagnostica una distorsión cognitiva en la función evaluadora del Yo: racionalizaciones defensivas para no ver la verdad desnuda, resentimiento acumulado por falta de reciprocidad o masoquismo moral.",
      "Tu mente está funcionando como un abogado defensor tramposo en lugar de funcionar como un juez imparcial. Quitá los adjetivos emocionales del caso y mirá solo los números y los hechos.",
      "El desequilibrio entre el dar y el recibir está somatizando en tu zona lumbar y renal (Libra). El cuerpo acusa recibo cada vez que firmás un pacto injusto contra vos mismo.",
      "Enderezar la balanza de Lamed exige el acto más valiente del espíritu adulto: decir 'esta parte del error es mía, la corrijo hoy, y esta otra parte no me corresponde y la devuelvo'."
    ],

    lightAndShadow: "En Sombra Activa: Injusticia, parcialidad, autoengaño para evadir consecuencias, asimetría en el dar y recibir, severidad cruel o demoras burocráticas y legales.",
    lightAndShadowVariants: [
      "En Sombra Activa: Injusticia, parcialidad, autoengaño para evadir consecuencias, asimetría en el dar y recibir, severidad cruel o demoras burocráticas y legales.",
      "Sombra por Exceso: Tribunal despiadado, venganza fría, rigidez legalista y autocrítica destructiva. Sombra por Defecto: Deshonestidad consigo mismo, acuerdos desbalanceados e indecisión cobarde.",
      "Distorsión de Lamed: La venda que tapa los ojos para no ver la propia falta y la balanza inclinada por el interés."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Falta de reciprocidad evidente en la pareja (uno rema el bote entero y el otro viaja sentado), reproches cruzados donde nadie asume su mitad del error, o silencios que esconden una cuenta pendiente. Dejen de llevar un tribunal de agravios en la cama: hablen con la verdad desnuda y reequilibren el pacto hoy.",
      work: "Acuerdos comerciales o societarios desbalanceados, demoras en trámites legales o habilitaciones, y peligro de pérdidas por no haber dejado las condiciones escritas y firmadas con precisión. Si hay un error técnico en tu producto o entrega, hacete cargo de inmediato y corregilo sin dar excusas: tu honestidad salvará tu prestigio.",
      money: "Desbalance entre costos reales y precios de venta, deudas morales o financieras que venís pateando, cobros injustamente retenidos o multas por desprolijidad contable. Poné tus libros al día hoy mismo.",
      spirit: "Confundir la Ley del Karma con el castigo divino; juzgarte a vos mismo o al prójimo sin compasión ni entendimiento del proceso evolutivo.",
      healthAndEnergy: "Sobrecarga renal, baja hidratación, lumbalgias agudas (el eje de Libra en la cintura) y descompensación del medio interno por estrés sostenido."
    },
    domainsVariants: [
      {
        love: "Falta de reciprocidad evidente en la pareja (uno rema el bote entero y el otro viaja sentado), reproches cruzados donde nadie asume su mitad del error, o silencios que esconden una cuenta pendiente. Dejen de llevar un tribunal de agravios en la cama: hablen con la verdad desnuda y reequilibren el pacto hoy.",
        work: "Acuerdos comerciales o societarios desbalanceados, demoras en trámites legales o habilitaciones, y peligro de pérdidas por no haber dejado las condiciones escritas y firmadas con precisión. Si hay un error técnico en tu producto o entrega, hacete cargo de inmediato y corregilo sin dar excusas: tu honestidad salvará tu prestigio.",
        money: "Desbalance entre costos reales y precios de venta, deudas morales o financieras que venís pateando, cobros injustamente retenidos o multas por desprolijidad contable. Poné tus libros al día hoy mismo.",
        spirit: "Confundir la Ley del Karma con el castigo divino; juzgarte a vos mismo o al prójimo sin compasión ni entendimiento del proceso evolutivo.",
        healthAndEnergy: "Sobrecarga renal, baja hidratación, lumbalgias agudas (el eje de Libra en la cintura) y descompensación del medio interno por estrés sostenido."
      },
      {
        love: "Si estás tolerando un trato injusto por miedo a quedarte solo, La Justicia invertida te recuerda que el primer delito lo estás cometiendo contra tu propia dignidad.",
        work: "Indecisión ejecutiva que frena toda la planta: por querer conformar a todas las partes o pesar mil veces los pros y los contras, no estás bajando el martillo de la sentencia.",
        money: "Cuidado con favoritismos o mezclar amistad con negocios sin cuentas claras; donde no hay recibo ni regla escrita, entra la sombra de Lamed.",
        spirit: "Impecabilidad en lo pequeño: el universo pesa con la misma balanza cómo tratás el negocio de un millón y cómo cumplís tu palabra en el trato de diez monedas.",
        healthAndEnergy: "Desbalance entre horas de trabajo sentado y movimiento físico; tus riñones piden agua mineral limpia y tu cintura pide soltar cargas ajenas."
      },
      {
        love: "Alguien está juzgando el presente con las pruebas de un juicio viejo que ya prescribió. Si elegís perdonar, cerrá el expediente para siempre; si no, cortá con la espada limpia.",
        work: "Auditoría urgente de márgenes: estás regalando un insumo, un envío o una hora de trabajo que no estás computando en el precio final y que está inclinando tu balanza en negativo.",
        money: "No firmes garantías ni salgas de fiador en negocios donde no tenés el control contable directo.",
        spirit: "Quitarse la venda del autoengaño frente al espejo nocturno: la verdad duele un minuto pero libera toda la vida.",
        healthAndEnergy: "Tensión en caderas y nervio ciático por 'caminar torcido' en una situación que sabés que no es justa."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Asumí hoy en voz alta y sin una sola excusa tu cincuenta por ciento exacto de responsabilidad en el problema actual, saldá la cuenta o promesa más pequeña que tengas pendiente y renegociá de inmediato lo que esté desnivelado.",
      prohibition: "Prohibido culpar hoy a terceros de tus propios resultados, firmar papeles sin leer la letra chica o seguir entregando donde no hay reciprocidad.",
      psychomagicAct: "Tomá una percha o vara horizontal sostenida por un hilo en el medio como una balanza casera; colgá de un lado un papel con lo que vos estás dando en este asunto y del otro lado lo que estás recibiendo. Mirá hacia qué lado se inclina, ajustá los pesos hasta que quede perfectamente horizontal y decí: 'Restauro la Pluma de Ma'at en mi vida; ni debo ni me deben'.",
      talismanPhrase: "Me quito la venda del autoengaño; asumo mi parte con honor y restablezco el equilibrio exacto de mi balanza."
    },
    theAlchemyVariants: [
      {
        command: "Asumí hoy en voz alta y sin una sola excusa tu cincuenta por ciento exacto de responsabilidad en el problema actual, saldá la cuenta o promesa más pequeña que tengas pendiente y renegociá de inmediato lo que esté desnivelado.",
        prohibition: "Prohibido culpar hoy a terceros de tus propios resultados, firmar papeles sin leer la letra chica o seguir entregando donde no hay reciprocidad.",
        psychomagicAct: "Tomá una percha o vara horizontal sostenida por un hilo en el medio como una balanza casera; colgá de un lado un papel con lo que vos estás dando en este asunto y del otro lado lo que estás recibiendo. Mirá hacia qué lado se inclina, ajustá los pesos hasta que quede perfectamente horizontal y decí: 'Restauro la Pluma de Ma'at en mi vida; ni debo ni me deben'.",
        talismanPhrase: "Me quito la venda del autoengaño; asumo mi parte con honor y restablezco el equilibrio exacto de mi balanza."
      },
      {
        command: "Poné blanco sobre negro tus números hoy: calculá al centavo el costo real de tu producto o de tu tiempo y corregí cualquier precio o acuerdo donde salías perdiendo.",
        prohibition: "No te sigas castigando hoy por un fallo del pasado que ya corregiste en tu conducta presente; declará prescripta la causa.",
        psychomagicAct: "Escribí en una hoja el nombre del error propio que te costaba admitir o perdonarte, trazá debajo dos líneas paralelas de cierre contable, escribí 'SALDADO CON APRENDIZAJE' con firma y fecha de hoy, y archivá la hoja.",
        talismanPhrase: "Mi espada corta mis propias excusas; camino en rectitud y el universo me responde con justicia."
      },
      {
        command: "Bajá la espada hoy en ese asunto donde venías dudando por no quedar mal con nadie: dictá un fallo justo, claro y definitivo.",
        prohibition: "No emitas juicio sobre ninguna persona hoy sin haberte puesto antes un minuto entero en sus zapatos y haber verificado los datos.",
        psychomagicAct: "Bebé dos vasos grandes de agua pura en silencio para limpiar tus riñones (los órganos balanza de Libra) y lavate los ojos con agua fresca diciendo: 'Lavo mi mirada de toda parcialidad y rencor'.",
        talismanPhrase: "Habito en la simetría perfecta de la Ley; doy lo justo, recibo lo justo y corto lo falso."
      }
    ],

    actionOracle: {
      command: "Asumí hoy en voz alta y sin una sola excusa tu cincuenta por ciento exacto de responsabilidad en el problema actual, saldá la cuenta o promesa más pequeña que tengas pendiente y renegociá de inmediato lo que esté desnivelado.",
      prohibition: "Prohibido culpar hoy a terceros de tus propios resultados, firmar papeles sin leer la letra chica o seguir entregando donde no hay reciprocidad.",
      psychomagicAct: "Tomá una percha o vara horizontal sostenida por un hilo en el medio como una balanza casera; colgá de un lado un papel con lo que vos estás dando en este asunto y del otro lado lo que estás recibiendo. Mirá hacia qué lado se inclina, ajustá los pesos hasta que quede perfectamente horizontal y decí: 'Restauro la Pluma de Ma'at en mi vida; ni debo ni me deben'.",
      talismanPhrase: "Me quito la venda del autoengaño; asumo mi parte con honor y restablezco el equilibrio exacto de mi balanza."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XI aparece en Sombra: alerta sobre una asimetría en tus acuerdos, un autoengaño racional o una cuenta pendiente de equilibrar.",
      secondAppearance: "La Justicia Invertida comparece por segunda vez: seguís negándote a ver tu parte en el desbalance o tolerando un pacto injusto. Nivelá los platillos hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XI en Sombra: advertencia legal, contable o kármica severa. Cortá toda excusa o desprolijidad de inmediato antes de que el fiel de la balanza caiga por su propio peso.",
      fourthPlusAppearance: "Sentencia inapelable de Lamed en Sombra: el Oráculo declara que no habrá paz ni avance hasta que digas toda la verdad frente al espejo y saldes la deuda pendiente."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Quitá el velo del autoengaño y asumí tu parte con honestidad de hierro: la verdad desnuda es el único camino para restaurar tu equilibrio y tu fuerza.",
    counselVariants: [
      "Quitá el velo del autoengaño y asumí tu parte con honestidad de hierro: la verdad desnuda es el único camino para restaurar tu equilibrio y tu fuerza.",
      "El abogado más peligroso que vas a enfrentar en tu vida es tu propia mente cuando intenta justificar lo que tu conciencia sabe que está torcido.",
      "No pidas cosecha de trigo donde sembraste distracción; cambiá la semilla hoy sin quejarte del suelo.",
      "La generosidad que no exige respeto y reciprocidad termina criando tiranos.",
      "Sé suave con las personas pero implacable con los números y los hechos."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "La Venda de Oro Convertida en Ceguera Voluntaria",
        secret: "En Luz, la venda dorada era imparcialidad divina; al invertirse la carta, se convierte en el símbolo de quien 'no quiere ver' la evidencia que tiene delante de la nariz por conveniencia o por temor a las consecuencias de la verdad.",
        esotericFormula: "Venda Invertida = Negación de la Evidencia y Autoengaño",
        meditationPrompt: "¿Qué hecho objetivo o número real estás eligiendo ignorar hoy para no tener que tomar una decisión incómoda?"
      },
      {
        id: "n2",
        x: 24,
        y: 38,
        title: "La Espada Apuntando al Suelo (El Corte Postergado o Cruel)",
        secret: "Con el filo de acero invertido, la espada pierde su rectitud vertical: o se usa para herir con sarcasmo y juicio despiadado (severidad sin corazón), o tiembla sin atreverse a cortar una situación injusta que ya debería haber terminado.",
        esotericFormula: "Espada Invertida = Juicio Cruel o Cobardía para Cortar",
        meditationPrompt: "¿Estás usando hoy tu inteligencia para castigarte (o castigar a otros), o estás demorando un corte justo por miedo al conflicto?"
      },
      {
        id: "n3",
        x: 74,
        y: 52,
        title: "Los Platillos Desnivelados (La Deuda Oculta)",
        secret: "La balanza volcada en Sombra denuncia que la proporción (*Pondus*) se ha roto: hay un contrato asimétrico, un esfuerzo mal pagado o una entrega afectiva sin retorno que está acumulando peso muerto en uno de los platillos.",
        esotericFormula: "Platillo Volcado = Asimetría Contractual o Afectiva",
        meditationPrompt: "¿Qué acuerdo o vínculo en tu vida actual necesita ser renegociado hoy mismo para que los dos platillos vuelvan a pesar igual?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XII INVERTIDO • EL COLGADO EN SOMBRA (MEM INVERTIDA • EL MÁRTIR Y EL PANTANO)
  // ==========================================================================
  {
    id: 12,
    numeral: "XII",
    name: "El Colgado",
    subtitle: "El Sacrificio Inútil y el Pantano del Estancamiento",
    isReversed: true,
    palette: {
      primary: "#0f766e",
      secondary: "#4338ca",
      glow: "rgba(15, 118, 110, 0.55)"
    },
    archetype: "hanged",
    shadowPolarity: {
      byExcess: "El Mártir Manipulador: victimismo crónico que se cuelga de la cruz para dar lástima o cobrar culpa, sacrificios que nadie pidió, inmolación en causas perdidas y adicción al sufrimiento.",
      byDeficiency: "El Forcejeo Ciego y el Pantano: negarse por orgullo a invertir el punto de vista, parálisis vacía que ya no incuba ninguna idea nueva y usar la excusa de 'esperar la señal' para no poner los pies en la tierra."
    },
    correspondences: {
      element: "Agua Estancada de Pantano / Inercia Ahogante",
      astro: "Neptuno Retrógrado o Mal Aspectado • La Neblina del Victimismo, la Evasión y el Engaño",
      hebrewLetter: "Mem (מ) en Sombra • Las Aguas que ahogan al nadador que se niega a tocar fondo e impulsarse",
      qliphoth: "Auzaqiel • El Pantano de la Apatía y el Falso Martirio",
      alchemy: "Putrefactio Húmeda sin Fuego • La materia que se pudre en el agua fría sin llegar a transmutarse",
      hermeticAxiom: "Colgarse del árbol nueve noches para ganar las runas es iniciación; quedarse colgado nueve años para no caminar sobre la piedra es cobardía.",
      jungianComplex: "El Complejo del Salvador/Mártir Neurótico y la Parálisis Regresiva en el Útero Acuático",
      yesNo: "No (basta de esperar o de sacrificarte en vano; desatá el nudo hoy mismo y poné los pies en la tierra)",
      keywords: [
        "victimismo estéril",
        "sacrificio inútil",
        "estancamiento crónico",
        "parálisis cómoda",
        "ceguera de enfoque",
        "falso mártir",
        "pausa vencida"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Bajate ya de esa cruz de madera donde no te clavó nadie más que vos mismo. La pausa sagrada ya terminó hace rato: lo que hoy seguís llamando 'paciencia espiritual' es simplemente el miedo que te da desatar la soga del tobillo y salir a transpirar en la tierra.",
    oracleVoiceVariants: [
      "Bajate ya de esa cruz de madera donde no te clavó nadie más que vos mismo. La pausa sagrada ya terminó hace rato: lo que hoy seguís llamando 'paciencia espiritual' es simplemente el miedo que te da desatar la soga del tobillo y salir a transpirar en la tierra.",
      "Cuidado con el veneno dulce del mártir: entregás lo que nadie te pidió en un vínculo o en un negocio roto para después poder mirar desde arriba diciendo *'mirá todo lo que me sacrifiqué por ustedes'*.",
      "Paradojalmente, cuando yo salgo invertido mi figura vuelve a quedar de pie, pero con las piernas atadas. Estás fingiendo que caminás y trabajás como todo el mundo, pero por dentro seguís atado a un bloqueo que te negás a mirar desde otro ángulo.",
      "Seguís empujando la misma puerta trabada con la misma receta de hace seis meses. ¿Cuántas veces más te vas a romper la frente antes de entender que la cerradura se abre girando la llave al revés?",
      "El agua de Mem que antes te bautizaba hoy se está pudriendo porque te quedaste quieto más allá de tu hora. Rompé la crisálida hoy o te vas a asfixiar adentro del capullo."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Colgado (Arcano XII) invertido anuncia que el tiempo de la suspensión y la espera ha caducado por completo en el Sendero 23 de Mem. Lo que en su momento pudo ser una pausa reflexiva necesaria se ha degradado hoy en *Estancamiento Estéril*, indecisión crónica o parálisis por comodidad. En su segunda dimensión crítica, esta carta desenmascara el *Sacrificio Inútil*: estás invirtiendo tiempo, dinero, amor o sangre en un pozo sin fondo (un proyecto inviable o una persona que no quiere cambiar) esperando un milagro que no va a ocurrir. El Oráculo te ordena cortar la soga del tobillo hoy mismo, dejar de jugar al mártir y volver a apoyar los dos pies sobre la realidad.",
    meaningVariants: [
      "El Colgado (Arcano XII) invertido anuncia que el tiempo de la suspensión y la espera ha caducado por completo en el Sendero 23 de Mem. Lo que en su momento pudo ser una pausa reflexiva necesaria se ha degradado hoy en *Estancamiento Estéril*, indecisión crónica o parálisis por comodidad. En su segunda dimensión crítica, esta carta desenmascara el *Sacrificio Inútil*: estás invirtiendo tiempo, dinero, amor o sangre en un pozo sin fondo (un proyecto inviable o una persona que no quiere cambiar) esperando un milagro que no va a ocurrir. El Oráculo te ordena cortar la soga del tobillo hoy mismo, dejar de jugar al mártir y volver a apoyar los dos pies sobre la realidad.",
      "Observá el truco óptico y hermético de esta carta: como El Colgado al derecho está cabeza abajo, cuando la carta sale *invertida* el personaje queda aparentemente 'de pie'. Esto simboliza el conformismo superficial del rebaño: negarte a hacer la revolución interior (la *Metanoia* o inversión de perspectiva) para seguir pensando exactamente igual que la masa, chocando una y otra vez contra el mismo muro convencional.",
      "En el Árbol de la Vida, el Sendero de Mem une la fuerza marcial de Geburah con la mente concreta de Hod a través del elemento Agua. Cuando se invierte, el agua apaga por completo el fuego de Geburah: perdés la capacidad de decir 'basta', te dejás arrastrar por la inercia ajena y postergás las decisiones ejecutivas esperando que el tiempo resuelva todo solo.",
      "Alquímicamente, el Arcano XII en sombra es una maceración pasada de tiempo: cuando dejás el botánico en el líquido más días de los que pide la fórmula, dejás de extraer el aceite esencial puro y empezás a arrastrar el amargor leñoso y la podredumbre del tallo. Tu etapa de espera ya dio todo el jugo que tenía para dar; filtrá y pasá a la acción hoy.",
      "En los negocios y las finanzas, El Colgado invertido advierte contra el 'síndrome del costo hundido': seguir poniendo plata buena sobre plata mala en una línea de trabajo muerta solo porque te da pena reconocer que ese sacrificio inicial no rindió fruto."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, aquí opera el *Complejo del Mártir / Salvador Herido*: aprendiste en tu sistema familiar que la única forma legítima de recibir amor, respeto o pertenencia era sufriendo, postergando tus propios deseos y cargando cruces ajenas. Por eso, cuando todo está bien, tu inconsciente busca dónde volver a colgarse.",
    theWoundVariants: [
      "En la psicología profunda de Jung, aquí opera el *Complejo del Mártir / Salvador Herido*: aprendiste en tu sistema familiar que la única forma legítima de recibir amor, respeto o pertenencia era sufriendo, postergando tus propios deseos y cargando cruces ajenas. Por eso, cuando todo está bien, tu inconsciente busca dónde volver a colgarse.",
      "La regresión al *Útero de Neptuno*: el miedo inconsciente a asumir la fricción dura del mundo adulto (competir, cobrar, cortar, elegir) que te lleva a refugiarte en una neblina de ensueños, dilaciones o 'búsquedas espirituales eternas' que nunca bajan a Malkuth.",
      "La herida de la Impotencia Aprendida (*Learned Helplessness*): haber sentido en el pasado que nada de lo que hacías cambiaba la situación dejó grabado el reflejo de quedarte inmóvil colgando de la soga incluso cuando hoy el nudo ya está desatado.",
      "La terquedad perceptual: el terror del Ego a admitir que todo su marco mental sobre un problema estaba al revés y que la solución requería humildad para aprender de cero."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La mentira más seductora que te cuenta tu ego bajo El Colgado invertido es: *'No estoy frenado, estoy esperando la señal perfecta del universo'*, cuando el universo ya te mandó diez señales y lo que estás esperando es no tener miedo.",
    theIllusionVariants: [
      "La mentira más seductora que te cuenta tu ego bajo El Colgado invertido es: *'No estoy frenado, estoy esperando la señal perfecta del universo'*, cuando el universo ya te mandó diez señales y lo que estás esperando es no tener miedo.",
      "El espejismo del 'Si aguanto un poco más y me sacrifico el doble, el otro va a valorar mi entrega': nadie valora a quien se regala como alfombra; el sacrificio no pedido solo genera desprecio o culpa en quien lo recibe.",
      "La coartada de *'No tengo otra opción, estoy atado de pies y manos'*: mirá tu tobillo en el diorama; tus dos manos están libres detrás de tu espalda y podrías subir a desatar el nudo en diez segundos si quisieras asumir la libertad.",
      "Confundir resignación gris con aceptación espiritual (*Wu Wei*): la aceptación del sabio está llena de lucidez y prepara el salto; tu resignación actual es simplemente desgano y apatía."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XII en sombra diagnostica una estasis de la líbido en el inconsciente acuático (Neptuno/Mem). La energía vital que debería estar construyendo en el mundo real queda retenida en fantasías compensatorias, victimismo pasivo-agresivo o procrastinación crónica.",
    psycheVariants: [
      "Psicológicamente, el Arcano XII en sombra diagnostica una estasis de la líbido en el inconsciente acuático (Neptuno/Mem). La energía vital que debería estar construyendo en el mundo real queda retenida en fantasías compensatorias, victimismo pasivo-agresivo o procrastinación crónica.",
      "Estás pagando un peaje altísimo por negarte a aplicar el pensamiento inverso: seguís usando la lógica lineal para un problema que requiere creatividad disruptiva.",
      "Tu psique necesita cortar hoy el suministro energético hacia las 'causas perdidas' que mantenés por culpa o por costumbre.",
      "Descolgarse del árbol significa pasar del Doce al Trece: aceptar que lo que no tiene vida debe cortarse con la guadaña de La Muerte para liberar tu presente."
    ],

    lightAndShadow: "En Sombra Activa: Victimismo estéril, estancamiento prolongado, sacrificios inútiles que nadie valora, procrastinación disfrazada de espera o negarse a cambiar de enfoque.",
    lightAndShadowVariants: [
      "En Sombra Activa: Victimismo estéril, estancamiento prolongado, sacrificios inútiles que nadie valora, procrastinación disfrazada de espera o negarse a cambiar de enfoque.",
      "Sombra por Exceso: Complejo de mártir, inmolación en causas ajenas y culpa manipuladora. Sombra por Defecto: Terquedad convencional, apatía pantanosa y miedo a pasar a la acción.",
      "Distorsión de Mem: El agua quieta que deja de ser espejo cristalino y se vuelve ciénaga por falta de corriente."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Sostener una relación indefinida o en 'pausa eterna' por miedo a tomar una determinación, o caer en el rol del salvador/mártir que entrega todo esperando que el otro se rescate o cambie. Dejá de esperar colgado del teléfono o de una promesa vaga: quien quiere estar en tu vida pone los dos pies en el suelo hoy.",
      work: "Proyectos congelados en un limbo burocrático o mental, esfuerzos mal direccionados que consumen horas sin dar facturación real, o terquedad al insistir con una estrategia de ventas que ya demostró estar agotada. Destrabá el expediente hoy mismo cambiando radicalmente el ángulo o cerrando lo que no rinde.",
      money: "Capital inmovilizado en negocios que no giran, préstamos incobrables hechos por lástima o culpa, o tarifas regaladas donde trabajás al costo 'para hacerle un favor' al cliente. Cortá la sangría financiera hoy.",
      spirit: "Usar la meditación, el tarot o la filosofía como un anestésico para evadir las responsabilidades concretas del mundo material.",
      healthAndEnergy: "Hinchazón o pesadez en pies y tobillos, baja presión, somnolencia diurna, hipotiroidismo funcional o fatiga linfática por falta de movimiento y exceso de inercia."
    },
    domainsVariants: [
      {
        love: "Sostener una relación indefinida o en 'pausa eterna' por miedo a tomar una determinación, o caer en el rol del salvador/mártir que entrega todo esperando que el otro se rescate o cambie. Dejá de esperar colgado del teléfono o de una promesa vaga: quien quiere estar en tu vida pone los dos pies en el suelo hoy.",
        work: "Proyectos congelados en un limbo burocrático o mental, esfuerzos mal direccionados que consumen horas sin dar facturación real, o terquedad al insistir con una estrategia de ventas que ya demostró estar agotada. Destrabá el expediente hoy mismo cambiando radicalmente el ángulo o cerrando lo que no rinde.",
        money: "Capital inmovilizado en negocios que no giran, préstamos incobrables hechos por lástima o culpa, o tarifas regaladas donde trabajás al costo 'para hacerle un favor' al cliente. Cortá la sangría financiera hoy.",
        spirit: "Usar la meditación, el tarot o la filosofía como un anestésico para evadir las responsabilidades concretas del mundo material.",
        healthAndEnergy: "Hinchazón o pesadez en pies y tobillos, baja presión, somnolencia diurna, hipotiroidismo funcional o fatiga linfática por falta de movimiento y exceso de inercia."
      },
      {
        love: "Victimismo afectivo: quejarte de que tus parejas siempre se aprovechan de tu bondad, sin ver que vos mismo elegís vínculos donde hacés de muleta para sentirte indispensable.",
        work: "Ceguera técnica por orgullo: la solución al bug o al problema de formulación que tenés enfrente requiere que des vuelta el esquema 180 grados y pruebes lo que descartaste de entrada.",
        money: "No sigas pagando suscripciones, alquileres o costos fijos de una estructura que tenés 'en pausa por las dudas'; cada moneda retenida en el limbo es una moneda menos para tu obra viva.",
        spirit: "Salir de la nebulosa de Neptuno: Dios no premia al que sufre en vano, sino al que despierta y multiplica sus talentos.",
        healthAndEnergy: "Atención a la sensibilidad extrema a fármacos, alcohol o humedad; tu cuerpo pide activar la circulación con ejercicio de impacto y pisada firme."
      },
      {
        love: "Tiempo vencido: si diste espacio para que el otro pensara y ese espacio se convirtió en abandono frío o falta de respeto, desatá la soga hoy y seguí tu camino.",
        work: "Falsa ocupación: pasar el día en tareas secundarias indoloras para postergar el único llamado o lanzamiento que realmente te pone a prueba.",
        money: "Liquidá el stock clavado aunque sea al costo para recuperar liquidez y movimiento; el dinero quieto en El Colgado invertido se desvaloriza.",
        spirit: "Entender que el verdadero sacrificio iniciático nunca achica tu vida: si algo te está apagando el brillo de la mirada, no es espiritual, es masoquismo.",
        healthAndEnergy: "Despertá el tono muscular de piernas y pantorrillas (el corazón venoso periférico) para bombear la sangre de regreso hacia arriba."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Desatá el nudo hoy mismo: poné un plazo final de veinticuatro horas a cualquier situación que esté en el limbo, suspendé todo sacrificio no correspondido y ejecutá la acción concreta que venías pateando.",
      prohibition: "Prohibido quejarte hoy como víctima o mártir, seguir esperando que otro decida tu vida, o regalar tu trabajo por lástima.",
      psychomagicAct: "Atate un hilo o cordón flojo en el tobillo derecho durante diez minutos mientras pensás en la situación que te tiene estancado; luego agachate con determinación, cortá el cordón de un tijeretazo seco, zapateá tres veces con fuerza contra el suelo y decí: 'La pausa terminó; me bajo de la cruz inútil y camino con mis propios pies'.",
      talismanPhrase: "Corto la soga del sacrificio estéril; pongo los pies sobre la roca y recupero mi movimiento soberano."
    },
    theAlchemyVariants: [
      {
        command: "Desatá el nudo hoy mismo: poné un plazo final de veinticuatro horas a cualquier situación que esté en el limbo, suspendé todo sacrificio no correspondido y ejecutá la acción concreta que venías pateando.",
        prohibition: "Prohibido quejarte hoy como víctima o mártir, seguir esperando que otro decida tu vida, o regalar tu trabajo por lástima.",
        psychomagicAct: "Atate un hilo o cordón flojo en el tobillo derecho durante diez minutos mientras pensás en la situación que te tiene estancado; luego agachate con determinación, cortá el cordón de un tijeretazo seco, zapateá tres veces con fuerza contra el suelo y decí: 'La pausa terminó; me bajo de la cruz inútil y camino con mis propios pies'.",
        talismanPhrase: "Corto la soga del sacrificio estéril; pongo los pies sobre la roca y recupero mi movimiento soberano."
      },
      {
        command: "Si un problema técnico o comercial sigue trabado hoy, prohibite usar el método habitual: invertí por completo el orden de los factores y probá la solución opuesta.",
        prohibition: "No sigas poniendo energía ni plata en un proyecto o vínculo que lleva meses sin devolverte una sola señal de vida real.",
        psychomagicAct: "Vaciá hoy un florero, botella o recipiente que tenga agua vieja estancada en tu casa, lavalo a fondo con sal y llenalo de agua fresca corriente declarando que todo limbo en tus negocios y afectos queda purgado.",
        talismanPhrase: "Salgo del pantano de la espera; mi mente gira 180 grados y encuentra la salida exacta."
      },
      {
        command: "Reclamá hoy mismo tu tiempo y tu valor: decí que no al pedido abusivo que estabas por aceptar por culpa y usá esa hora para tu propia obra.",
        prohibition: "No uses la espiritualidad como excusa para la indecisión; bajá la visión del halo a una tarea física hoy.",
        psychomagicAct: "Tomá una moneda del suelo (las monedas que caían de los bolsillos del Colgado), guardala firme en tu billetera o caja y poné de pie cualquier objeto que esté volcado en tu taller diciendo: 'Recupero mi energía dispersa y la pongo de pie a producir'.",
        talismanPhrase: "Ya vi lo que tenía que ver en el abismo; hoy me pongo de pie y construyo mi reino."
      }
    ],

    actionOracle: {
      command: "Desatá el nudo hoy mismo: poné un plazo final de veinticuatro horas a cualquier situación que esté en el limbo, suspendé todo sacrificio no correspondido y ejecutá la acción concreta que venías pateando.",
      prohibition: "Prohibido quejarte hoy como víctima o mártir, seguir esperando que otro decida tu vida, o regalar tu trabajo por lástima.",
      psychomagicAct: "Atate un hilo o cordón flojo en el tobillo derecho durante diez minutos mientras pensás en la situación que te tiene estancado; luego agachate con determinación, cortá el cordón de un tijeretazo seco, zapateá tres veces con fuerza contra el suelo y decí: 'La pausa terminó; me bajo de la cruz inútil y camino con mis propios pies'.",
        talismanPhrase: "Corto la soga del sacrificio estéril; pongo los pies sobre la roca y recupero mi movimiento soberano."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XII aparece en Sombra: alerta de estancamiento vencido, sacrificio que nadie valora o terquedad para cambiar de ángulo.",
      secondAppearance: "El Colgado Invertido sale por segunda vez: la espera ya se pudrió en parálisis. Dejá de colgar en el limbo y tomá una determinación terrenal hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XII en Sombra: estás perdiendo sangre y tiempo en una cruz inútil. Cortá la cuerda ahora mismo antes de que tenga que entrar la guadaña del Arcano XIII.",
      fourthPlusAppearance: "Ultimátum de las Aguas de Mem: el Oráculo da por terminado todo plazo de espera. O ponés los dos pies sobre la tierra y actuás hoy, o la oportunidad se disolverá."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "La pausa ya cumplió su propósito: desatá hoy mismo el nudo del sacrificio inútil, dejá de esperar milagros pasivos y poné los dos pies sobre la tierra.",
    counselVariants: [
      "La pausa ya cumplió su propósito: desatá hoy mismo el nudo del sacrificio inútil, dejá de esperar milagros pasivos y poné los dos pies sobre la tierra.",
      "Nadie recibe una medalla en el cielo por haberse quedado colgado de una soga cuyo nudo estaba flojo.",
      "Cuando el agua se queda quieta demasiado tiempo deja de ser manantial y empieza a criar mosquitos; abrí la compuerta y corré.",
      "Dejá de regalarle tu lealtad y tu tiempo a lo que te trata como un mueble colgado en el rincón.",
      "Si llevás tres meses mirando el problema desde el mismo lado sin resolverlo, el problema ya no es el nudo: es tu terquedad."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "El Nudo del Tobillo Convertido en Atadura Neurótica",
        secret: "En Luz, el lazo en el Árbol del Mundo era un anclaje voluntario y seguro; en Sombra, representa la cuerda del pretexto y la dependencia pasiva: quedarte atado a una situación estancada jurando que 'no podés moverte' cuando tenés las manos libres para desatarte.",
        esotericFormula: "Nudo No Desatado = Parálisis Cómoda y Victimismo",
        meditationPrompt: "¿En qué asunto actual seguís diciendo 'no puedo hacer nada' cuando en realidad ya tenés las manos libres para cortar la cuerda?"
      },
      {
        id: "n2",
        x: 50,
        y: 50,
        title: "El Cuatro de las Piernas Invertido (El Falso Estar de Pie)",
        secret: "Al dar vuelta el diorama del Colgado, la figura parece estar parada normalmente sobre una pierna, pero sigue atada al patíbulo. Simboliza la terquedad de la mente convencional que se niega a invertir su perspectiva, o la falsa normalidad de quien se sacrifica en silencio mientras se vacía por dentro.",
        esotericFormula: "Negación de la Metanoia = Repetir el Enfoque Fallido",
        meditationPrompt: "¿A qué sacrificio no pedido o a qué punto de vista rígido estás aferrado hoy que no te deja avanzar?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Halo Apagado y el Drenaje de las Monedas",
        secret: "Cuando la aureola de turquesa y oro pierde su sentido iniciático, las monedas y gemas que caen de los bolsillos ya no son desapego espiritual, sino hemorragia real de recursos, tiempo y dignidad entregados a causas o personas que no devuelven luz.",
        esotericFormula: "Pérdida sin Iluminación = Drenaje Financiero y Emocional",
        meditationPrompt: "¿Dónde estás perdiendo plata, horas o energía hoy a cambio de ninguna iluminación ni retorno real?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIII INVERTIDO • LA MUERTE EN SOMBRA (NUN INVERTIDA • LA RESISTENCIA AL FIN Y EL CADÁVER VIVO)
  // ==========================================================================
  {
    id: 13,
    numeral: "XIII",
    name: "La Muerte",
    subtitle: "La Sombra que se Niega a Morir y el Duelo Congelado",
    isReversed: true,
    palette: {
      primary: "#7f1d1d",
      secondary: "#334155",
      glow: "rgba(127, 29, 29, 0.6)"
    },
    archetype: "death",
    shadowPolarity: {
      byExcess: "El Nihilista de la Guadaña: destruir por pánico antes de tiempo lo que todavía tenía vida, cinismo amargo que cree que nada vale la pena, o fascinación morbosa por la tristeza y el duelo eterno.",
      byDeficiency: "El Embalsamador del Pasado: aferramiento desesperado a un vínculo, negocio o identidad que ya es cadáver, terror paralizante al vacío del cambio y pudrición lenta por negarse a pasar la guadaña."
    },
    correspondences: {
      element: "Agua Putrefacta sin Renovación / Ceniza Fría",
      astro: "Escorpio Afligido / Plutón Retrógrado • El Terror a la Pérdida, el Rencor Necrófilo y la Inercia del Pasado",
      hebrewLetter: "Nun (נ) en Sombra • El Pez atrapado en el lodo seco que teme saltar al mar nuevo",
      qliphoth: "Necheshthiron • Los Fósiles de Cobre del Apego y la Putrefacción que no Abona",
      alchemy: "Nigredo Estancada • Quedarse atrapado en la negrura del cuervo sin lavar la ceniza para pasar al Albedo",
      hermeticAxiom: "Lo que ya cumplió su ciclo y no se entierra con honor no vuelve a la vida: se queda en la sala envenenando el aire de los vivos.",
      jungianComplex: "La Fobia a la Transformación (Tanatofobia Simbólica), el Duelo Patológico y el Apego al Cadáver",
      yesNo: "No (tu sufrimiento actual proviene de resistirte con uñas y dientes a soltar algo que ya terminó)",
      keywords: [
        "aferramiento al pasado",
        "miedo al cambio",
        "duelo estancado",
        "respiración artificial",
        "nigredo bloqueada",
        "rencor fosilizado",
        "poda negada"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Dejá de maquillar y perfumar a un muerto. Eso que tenés abrazado con tanto pánico —ese viejo molde, ese rencor o esa etapa vencida— ya no tiene pulso desde hace meses. Tu dolor de hoy no te lo causo yo con mi guadaña; te lo causás vos apretando el filo con las manos para que no corte.",
    oracleVoiceVariants: [
      "Dejá de maquillar y perfumar a un muerto. Eso que tenés abrazado con tanto pánico —ese viejo molde, ese rencor o esa etapa vencida— ya no tiene pulso desde hace meses. Tu dolor de hoy no te lo causo yo con mi guadaña; te lo causás vos apretando el filo con las manos para que no corte.",
      "Le tenés tanto terror a los cinco minutos de vacío que quedan después de limpiar la mesa, que preferís vivir rodeado de escombros y fantasmas conocidos antes que abrirle la puerta al Sol Invictus.",
      "Mirame bien: cuando me resistís, no evitás el final; solo lográs que un corte limpio que duraba un segundo se convierta en una agonía lenta que dura un año entero.",
      "En mi otra cara oscura, te veo encerrado guardando luto eterno por una corona que cayó al barro. El pasado no necesita tus lágrimas diarias; necesita que uses su ceniza como abono y plantes un árbol nuevo.",
      "La piel vieja de la serpiente no se guarda en una vitrina ni se vuelve a coser al cuerpo: se deja atrás entre las piedras para que la piel nueva pueda respirar."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Muerte (Arcano XIII) invertida señala la resistencia más tenaz y agotadora de la psique humana en el Sendero 24 de Nun: el *Aferramiento a lo Caduco*. Una estructura laboral, un método comercial, una identidad personal o un ciclo afectivo ya ha expirado por ley natural, pero tu ego se niega a firmar el certificado de defunción por miedo a la incertidumbre del renacimiento. Esta negación bloquea la *Nigredo* alquímica: en lugar de una poda limpia que deje espacio a los brotes de primavera, se produce un estancamiento lento donde gastás toda tu energía vital en hacerle respiración artificial al pasado.",
    meaningVariants: [
      "La Muerte (Arcano XIII) invertida señala la resistencia más tenaz y agotadora de la psique humana en el Sendero 24 de Nun: el *Aferramiento a lo Caduco*. Una estructura laboral, un método comercial, una identidad personal o un ciclo afectivo ya ha expirado por ley natural, pero tu ego se niega a firmar el certificado de defunción por miedo a la incertidumbre del renacimiento. Esta negación bloquea la *Nigredo* alquímica: en lugar de una poda limpia que deje espacio a los brotes de primavera, se produce un estancamiento lento donde gastás toda tu energía vital en hacerle respiración artificial al pasado.",
      "En el Árbol de la Vida, el Sendero de Nun conecta el Sol del alma (Tiphereth) con el fuego pasional de Netzach a través de Escorpio. Cuando este canal se invierte, el deseo de Netzach se pega con pegamento plutoniano a las formas viejas: confundís lealtad con terquedad necrófila, o guardás un rencor escorpiano bajo llave durante años creyendo que no perdonar te mantiene fuerte, cuando en realidad te mantiene atado al cadáver del conflicto.",
      "Alquímicamente, el Arcano XIII en sombra es la *Putrefactio* interrumpida a mitad de camino. Si el grano de trigo se niega a romperse bajo la tierra negra por miedo a perder su cáscara dura, no se conserva: se pudre por dentro sin llegar jamás a ver el sol.",
      "En el plano empresarial y financiero, esta carta invertida es la advertencia suprema contra las 'empresas o líneas de producto zombis': negocios, clientes o sistemas viejos que ya no dan margen real pero que seguís sosteniendo por nostalgia de lo que fueron ayer, impidiendo que nazca tu verdadera mina de oro de mañana.",
      "Existe también un matiz luminoso de alivio físico cuando La Muerte sale invertida en preguntas de crisis extrema: indica haber escapado por un pelo de un colapso total, recibiendo una prórroga de tiempo que no debés usar para volver a dormirte, sino para ejecutar vos mismo la reforma pendiente."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la clínica profunda de Jung, La Muerte invertida toca el núcleo de la *Angustia de Aniquilación del Yo*: como tu ego se identificó al cien por ciento con un rol, una pareja o un negocio antiguo, siente inconscientemente que si esa forma externa termina, vos mismo dejarás de existir.",
    theWoundVariants: [
      "En la clínica profunda de Jung, La Muerte invertida toca el núcleo de la *Angustia de Aniquilación del Yo*: como tu ego se identificó al cien por ciento con un rol, una pareja o un negocio antiguo, siente inconscientemente que si esa forma externa termina, vos mismo dejarás de existir.",
      "La herida del *Duelo Congelado* (Melancolía de Freud/Jung): una pérdida o traición antigua que nunca terminaste de llorar y enterrar sigue ocupando el sillón principal de tu psique, impidiendo que cualquier proyecto o amor nuevo tenga dónde sentarse.",
      "El control plutoniano por pánico al vacío: preferir un infierno conocido y previsible (donde al menos sabés qué duele cada mañana) antes que cruzar el umbral hacia un territorio virgen donde no tenés el control.",
      "El boicot nihilista (la sombra por exceso): matar un vínculo o abandonar una obra justo cuando empieza a florecer, por el terror preventivo a que algún día se termine o te la quiten."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "La gran mentira que te contás bajo el Arcano XIII invertido es: *'No lo suelto porque soy leal y perseverante'*, cuando en el fondo de tus huesos sabés que no es lealtad, es pánico a quedarte con las manos vacías durante la transición.",
    theIllusionVariants: [
      "La gran mentira que te contás bajo el Arcano XIII invertido es: *'No lo suelto porque soy leal y perseverante'*, cuando en el fondo de tus huesos sabés que no es lealtad, es pánico a quedarte con las manos vacías durante la transición.",
      "El espejismo del *'Con una mano de pintura más esto tira otro año'*: gastar dinero y nervios en emparchar por décima vez un motor, un código o un vínculo cuya estructura base ya dio todo lo que tenía.",
      "Creer que guardar rencor o nostalgia es 'tener memoria': la memoria sabia guarda la semilla del aprendizaje y quema la paja de la historia; el apego guarda la paja y se olvida de sembrar.",
      "La ilusión de que podés entrar a tu nueva vida llevando la mudanza completa de tus viejos hábitos y personajes en la espalda."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XIII invertido diagnostica una parálisis en la fase de *Mortificatio*: la psique se resiste a la metamorfosis necesaria, generando síntomas de pesadez depresiva, rumiación sobre el pasado, estreñimiento emocional/físico y miedo fóbico al cierre de etapas.",
    psycheVariants: [
      "Psicológicamente, el Arcano XIII invertido diagnostica una parálisis en la fase de *Mortificatio*: la psique se resiste a la metamorfosis necesaria, generando síntomas de pesadez depresiva, rumiación sobre el pasado, estreñimiento emocional/físico y miedo fóbico al cierre de etapas.",
      "Estás sosteniendo con fuerza muscular una puerta que la corriente evolutiva de tu propio Sí-Mismo (*Self*) está empujando para abrir. En cuanto sueltes el picaporte, volverá el aire a tus pulmones.",
      "Observá qué objeto, archivo o recuerdo de tu entorno te da miedo tirar 'por si acaso': ahí está anclado el cordón umbilical con tu versión caduca.",
      "La cura de Nun en sombra requiere un funeral simbólico consciente: agradecer de corazón lo que esa etapa te dio y bajar el telón sin mirar atrás."
    ],

    lightAndShadow: "En Sombra Activa: Aferramiento doloroso al pasado, miedo paralizante al cambio, negación de un final evidente, duelo no resuelto o agonía prolongada por no cortar a tiempo.",
    lightAndShadowVariants: [
      "En Sombra Activa: Aferramiento doloroso al pasado, miedo paralizante al cambio, negación de un final evidente, duelo no resuelto o agonía prolongada por no cortar a tiempo.",
      "Sombra por Exceso: Cinismo destructivo, duelo eterno y amargura escorpiana. Sombra por Defecto: Embalsamar lo muerto, pánico a la renovación e inercia tóxica.",
      "Distorsión de Nun: La guadaña mellada que desgarra en diez cortes tímidos lo que debía segarse en uno solo."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Dificultad extrema para soltar a una expareja (seguir revisando sus rastros o comparando a todos con un fantasma), o bien negarse dentro de la pareja actual a enterrar de una vez por todas los viejos reproches y hábitos tóxicos que impiden renacer al vínculo. El amor solo vive en tiempo presente: soltá el cadáver del ayer.",
      work: "Insistir terca y costosamente en un producto, método o puesto que ya perdió su vigencia comercial por temor a reinventarte. No tengas miedo de jubilar hoy las vacas sagradas de tu catálogo que ya no dan leche para concentrar todo tu fuego en lo nuevo.",
      money: "Dinero atrapado en activos muertos, deudas viejas que se arrastran refinanciando intereses en vez de cortar de raíz el gasto que las genera, o miedo avaro a soltar una moneda chica para ganar una grande.",
      spirit: "Resistencia del ego a atravesar la Noche Oscura: querer alcanzar la luz del Sol (Arcano XIX) y la alquimia de La Templanza (Arcano XIV) sin haber dejado primero la piel vieja en el umbral del Trece.",
      healthAndEnergy: "Lenta eliminación de toxinas, estreñimiento, retención de líquidos o inflamaciones crónicas (Escorpio) asociadas a 'no soltar' cargas emocionales y rencores antiguos."
    },
    domainsVariants: [
      {
        love: "Dificultad extrema para soltar a una expareja (seguir revisando sus rastros o comparando a todos con un fantasma), o bien negarse dentro de la pareja actual a enterrar de una vez por todas los viejos reproches y hábitos tóxicos que impiden renacer al vínculo. El amor solo vive en tiempo presente: soltá el cadáver del ayer.",
        work: "Insistir terca y costosamente en un producto, método o puesto que ya perdió su vigencia comercial por temor a reinventarte. No tengas miedo de jubilar hoy las vacas sagradas de tu catálogo que ya no dan leche para concentrar todo tu fuego en lo nuevo.",
        money: "Dinero atrapado en activos muertos, deudas viejas que se arrastran refinanciando intereses en vez de cortar de raíz el gasto que las genera, o miedo avaro a soltar una moneda chica para ganar una grande.",
        spirit: "Resistencia del ego a atravesar la Noche Oscura: querer alcanzar la luz del Sol (Arcano XIX) y la alquimia de La Templanza (Arcano XIV) sin haber dejado primero la piel vieja en el umbral del Trece.",
        healthAndEnergy: "Lenta eliminación de toxinas, estreñimiento, retención de líquidos o inflamaciones crónicas (Escorpio) asociadas a 'no soltar' cargas emocionales y rencores antiguos."
      },
      {
        love: "Un vínculo que sobrevive solo por inercia, culpa o miedo a la mudanza emocional. O hacen hoy una revolución total que mate la rutina de raíz, o la inercia les va a apagar el corazón a los dos.",
        work: "Miedo a actualizar tu código, tu maquinaria o tu identidad de marca por apego nostálgico a la primera versión que hiciste. Honrá tus inicios superándolos hoy.",
        money: "Cortá en seco cualquier suscripción, sociedad improductiva o sangría financiera que seguís pagando por pura inercia mensual.",
        spirit: "Perdonar a los muertos y a los ausentes: dejar de discutir internamente con personas que ya no están en tu camino.",
        healthAndEnergy: "Tu cuerpo necesita una depuración profunda: sudar, ayunar unas horas de estímulos pesados y renovar el aire viciado de los pulmones."
      },
      {
        love: "Cerrar la puerta a un amor nuevo porque seguís de luto en un altar del pasado. Sacá las flores secas del jarrón hoy mismo para que pueda entrar la primavera.",
        work: "Reestructuración demorada: sabés qué área o qué proveedor ya no va más, pero dilatás la conversación final por incomodidad. Hacelo hoy en cinco minutos limpios.",
        money: "Rematá a precio de liquidación cualquier mercadería o herramienta obsoleta que esté ocupando metros cuadrados valiosos en tu taller.",
        spirit: "Recordar que el Fénix solo se quema cuando se resiste al fuego; cuando se entrega a la llama, rejuvenece.",
        healthAndEnergy: "Alivio inmediato de pesadez en nuca, colon y pelvis apenas tomás la decisión irrevocable de dar vuelta la página."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Ejecutá hoy mismo el corte definitivo que venís dilatando: cerrá esa etapa, borrá ese archivo viejo, liquidá ese resto estancado y prohibite volver a mirar por el espejo retrovisor.",
      prohibition: "Prohibido hablar hoy de cómo eran las cosas antes, intentar revivir lo que ya demostró estar agotado, o dejar una despedida 'abierta por las dudas'.",
      psychomagicAct: "Buscá hoy tres objetos rotos, prendas que no uses desde hace más de dos años o papeles de proyectos vencidos que guardabas por apego; metelos en una bolsa negra, sacalos fuera de tu casa depositándolos en el contenedor sin mirar adentro y al volver lavate las manos con sal diciendo: 'Entierro lo muerto con gratitud; mi casa y mi presente pertenecen solo a la vida'.",
      talismanPhrase: "Abro las manos y suelto la cáscara seca; ya no temo al vacío porque yo soy la semilla viva."
    },
    theAlchemyVariants: [
      {
        command: "Ejecutá hoy mismo el corte definitivo que venís dilatando: cerrá esa etapa, borrá ese archivo viejo, liquidá ese resto estancado y prohibite volver a mirar por el espejo retrovisor.",
        prohibition: "Prohibido hablar hoy de cómo eran las cosas antes, intentar revivir lo que ya demostró estar agotado, o dejar una despedida 'abierta por las dudas'.",
        psychomagicAct: "Buscá hoy tres objetos rotos, prendas que no uses desde hace más de dos años o papeles de proyectos vencidos que guardabas por apego; metelos en una bolsa negra, sacalos fuera de tu casa depositándolos en el contenedor sin mirar adentro y al volver lavate las manos con sal diciendo: 'Entierro lo muerto con gratitud; mi casa y mi presente pertenecen solo a la vida'.",
        talismanPhrase: "Abro las manos y suelto la cáscara seca; ya no temo al vacío porque yo soy la semilla viva."
      },
      {
        command: "Dejá de cortar las puntas del problema y arrancá la raíz entera de un solo tirón hoy: una hora de cirugía firme te ahorra seis meses de desgaste.",
        prohibition: "No guardes rencores como trofeos en tu memoria; el veneno que guardás para otro te lo estás tomando vos todos los días.",
        psychomagicAct: "Escribí una carta breve de despedida y agradecimiento a la etapa, negocio viejo o versión tuya que hoy termina; doblala, enterrala bajo tres centímetros de tierra en una maceta o jardín y plantá encima un gajo o semilla viva.",
        talismanPhrase: "La guadaña de plata me libera; muero a mi ayer y amanezco invencible hoy."
      },
      {
        command: "Reinventá de cero hoy esa parte de tu oferta o de tu rutina que sentís oxidada: cambiá el formato, el nombre o el método sin conservar parches viejos.",
        prohibition: "No confundas el duelo sano de un día con instalarte a vivir en el cementerio de la nostalgia.",
        psychomagicAct: "Cambiate por completo de ropa a mitad del día de hoy tras darte una ducha rápida de agua fresca, dejando la ropa anterior para lavar como símbolo físico de que te despojás de la piel de la serpiente vieja.",
        talismanPhrase: "Ningún fantasma del pasado tiene llave de mi puerta; habito en el renacimiento perpetuo."
      }
    ],

    actionOracle: {
      command: "Ejecutá hoy mismo el corte definitivo que venís dilatando: cerrá esa etapa, borrá ese archivo viejo, liquidá ese resto estancado y prohibite volver a mirar por el espejo retrovisor.",
      prohibition: "Prohibido hablar hoy de cómo eran las cosas antes, intentar revivir lo que ya demostró estar agotado, o dejar una despedida 'abierta por las dudas'.",
      psychomagicAct: "Buscá hoy tres objetos rotos, prendas que no uses desde hace más de dos años o papeles de proyectos vencidos que guardabas por apego; metelos en una bolsa negra, sacalos fuera de tu casa depositándolos en el contenedor sin mirar adentro y al volver lavate las manos con sal diciendo: 'Entierro lo muerto con gratitud; mi casa y mi presente pertenecen solo a la vida'.",
      talismanPhrase: "Abro las manos y suelto la cáscara seca; ya no temo al vacío porque yo soy la semilla viva."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIII aparece en Sombra: alerta sobre resistencia tenaz a cerrar un ciclo que ya está cumplido.",
      secondAppearance: "La Muerte Invertida sale por segunda vez: seguís haciéndole respiración artificial a algo agotado por miedo al cambio. Soltá la rama seca hoy.",
      thirdAppearance: "Tercera comparecencia del Arcano XIII en Sombra: el apego al pasado está frenando toda tu evolución hacia La Templanza. Tomá la guadaña con tus propias manos hoy mismo.",
      fourthPlusAppearance: "Sentencia plutoniana de Nun: el Oráculo te advierte que lo que no se suelta por conciencia se cae por agotamiento. Cerrá la puerta vieja ahora y cruzá el umbral limpio."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Lo que soltás con gratitud deja espacio libre para la vida nueva: abrí las manos hoy mismo y permití que el ciclo vencido descanse en paz.",
    counselVariants: [
      "Lo que soltás con gratitud deja espacio libre para la vida nueva: abrí las manos hoy mismo y permití que el ciclo vencido descanse en paz.",
      "Nadie puede cruzar a nado hacia la isla nueva si insiste en llevar atado a la espalda el mueble viejo de la casa anterior.",
      "El dolor del corte dura un minuto; el dolor de arrastrar lo que ya murió dura todo el tiempo que tardes en decidirte.",
      "No llores porque se apagó la vela de la noche cuando ya está asomando el Sol por la ventana.",
      "Honrá tu pasado usando su lección para construir el futuro, nunca usándolo como ancla para quedarte quieto."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 68,
        y: 28,
        title: "La Guadaña de Plata Trabada en la Maleza",
        secret: "Con el diorama invertido, el filo lunar de la cosecha queda apuntando hacia abajo sin completar su arco de siega. Simboliza los 'cortes a medias': terminar algo de palabra pero seguir enganchado mental, comercial o afectivamente, prolongando el desgaste sin limpiar el terreno.",
        esotericFormula: "Guadaña Detenida = Cierre Incompleto y Agonía Prolongada",
        meditationPrompt: "¿Qué final o poda necesaria en tu vida dejaste hecha por la mitad y hoy te pide un corte limpio y definitivo?"
      },
      {
        id: "n2",
        x: 32,
        y: 55,
        title: "La Rosa de Cinco Pétalos Sofocada por la Escoria",
        secret: "En Sombra, la flor de la quintaesencia nueva queda aplastada debajo del peso de los huesos y las cenizas no barridas. Revela que tu próximo gran proyecto o amor ya quiere brotar, pero no tiene luz ni oxígeno porque la mesa sigue ocupada por los restos del ciclo viejo.",
        esotericFormula: "Ceniza sin Barrer = Asfixia del Brote Nuevo",
        meditationPrompt: "¿Qué proyecto o deseo nuevo está esperando hoy en tu puerta a que desocupes el lugar que sigue llenando algo viejo?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Aferramiento a la Corona Caída y el Eclipse del Alba",
        secret: "Al invertirse la base, la corona vieja caída en el barro queda arriba en la visión del consultante mientras el Sol Invictus del horizonte queda sepultado abajo. Es el retrato exacto de la nostalgia y del orgullo que prefiere llorar el título de ayer en vez de caminar hacia el amanecer de hoy.",
        esotericFormula: "Mirar la Corona Vieja = Ceguera ante el Nuevo Amanecer",
        meditationPrompt: "¿Qué vieja etiqueta, método o gloria pasada tenés que dejar en el suelo hoy para poder ver el sol que ya está saliendo?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIV INVERTIDO • LA TEMPLANZA EN SOMBRA (SAMEKH INVERTIDA • EL ELIXIR DERRAMADO)
  // ==========================================================================
  {
    id: 14,
    numeral: "XIV",
    name: "La Templanza",
    subtitle: "Los Cálices Desbordados y la Fórmula Rota",
    isReversed: true,
    palette: {
      primary: "#e11d48",
      secondary: "#0284c7",
      glow: "rgba(225, 29, 72, 0.55)"
    },
    archetype: "temperance",
    shadowPolarity: {
      byExcess: "El Alquimista Impaciente y los Extremos: ir del fanatismo al abandono en veinticuatro horas, agitar los matraces por ansiedad derramando el elixir, desbordes emocionales o excesos que rompen la homeostasis.",
      byDeficiency: "El Agua y el Aceite (Incompatibilidad y Tibieza): fuerzas o socios que chocan sin poder fundirse, fórmulas mal dosificadas que se cortan, o diluir tanto tu verdad por quedar bien con todos que el licor queda sin graduación."
    },
    correspondences: {
      element: "Fuego y Agua en Choque Violento (Vapor Ciego)",
      astro: "Sagitario Afligido / Júpiter Desmedido • La Flecha que se pasa de largo por Exceso de Tensión",
      hebrewLetter: "Samekh (ס) en Sombra • El Puntal que cede por falta de proporción o el Círculo Vicioso",
      qliphoth: "Adonai-Ha-Aretz en Sombra / Nachashiron • Las Serpientes de la Desmesura y la Discordia",
      alchemy: "Solutio et Coagulatio Desincronizadas • La emulsión que se corta en el vaso por error de temperatura",
      hermeticAxiom: "Cuando el fuego apura al agua, el cáliz hierve y se vacía en humo; cuando el agua apaga al fuego, queda un caldo tibio que nadie bebe.",
      jungianComplex: "La Oscilación Bipolar del Ánimo (Todo o Nada) y el Fracaso de la Función Trascendente",
      yesNo: "No con esta prisa ni en esta proporción (recalibrá las dosis y serenáte antes de mezclar)",
      keywords: [
        "impaciencia destructiva",
        "fórmula desbalanceada",
        "todo o nada",
        "elixir derramado",
        "choque de humores",
        "falta de medida",
        "tibieza insípida"
      ]
    },

    // --- LA VOZ DE LA SOMBRA (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame las manos: por querer apurar el trasvase con los nervios de punta, estás tirando el oro líquido al barro. La alquimia no obedece a los ansiosos: o aprendés hoy el arte de la dosis exacta, o vas a arruinar una receta magistral en el último minuto.",
    oracleVoiceVariants: [
      "Mirame las manos: por querer apurar el trasvase con los nervios de punta, estás tirando el oro líquido al barro. La alquimia no obedece a los ansiosos: o aprendés hoy el arte de la dosis exacta, o vas a arruinar una receta magistral en el último minuto.",
      "Un día trabajás dieciocho horas seguidas incendiado de euforia y al día siguiente no podés ni ver el taller; un día jurás amor eterno y al otro te congelás. Salí hoy mismo de la trampa del 'todo o nada': la vida grande se construye en el pulso constante del medio.",
      "Estás intentando mezclar a la fuerza el agua con el aceite en una sociedad o en un vínculo donde las dos partes no quieren ceder ni un grado de su temperatura.",
      "En mi otra sombra, por miedo al roce y por querer caerle simpático a todo el mundo, le echaste tanta agua a tu vino que perdió toda su graduación y su carácter.",
      "Cuando el acero sale de la fragua en el Arcano XIII, si le tirás un balde de hielo de golpe se parte al medio. Templá tus tiempos, medí tus palabras y cuidá tus nervios."
    ],

    // --- SIGNIFICADO ORACULAR EN SOMBRA (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Templanza (Arcano XIV) invertida señala una pérdida del pulso homeostático y de la proporción áurea en el Sendero 25 de Samekh. En su manifestación más frecuente, denuncia el pecado capital del laboratorio alquímico: la *Impaciencia*. Estás queriendo forzar la maduración de un negocio, una curación, una destilación o un vínculo sacudiendo los vasos antes de hora y derramando tu energía vital en los extremos. En su segunda faz, advierte sobre una *Fórmula Cortada*: ingredientes, tiempos, socios o temperamentos que hoy están chocando como el agua y el aceite por falta de un mediador inteligente o por un error en las dosis de la receta.",
    meaningVariants: [
      "La Templanza (Arcano XIV) invertida señala una pérdida del pulso homeostático y de la proporción áurea en el Sendero 25 de Samekh. En su manifestación más frecuente, denuncia el pecado capital del laboratorio alquímico: la *Impaciencia*. Estás queriendo forzar la maduración de un negocio, una curación, una destilación o un vínculo sacudiendo los vasos antes de hora y derramando tu energía vital en los extremos. En su segunda faz, advierte sobre una *Fórmula Cortada*: ingredientes, tiempos, socios o temperamentos que hoy están chocando como el agua y el aceite por falta de un mediador inteligente o por un error en las dosis de la receta.",
      "En el Árbol de la Vida, el Sendero de Samekh sube verticalmente desde el fundamento lunar de Yesod hasta el Sol de Tiphereth por el Pilar del Medio. Cuando esta carta se invierte, el caminante se cae del Pilar del Medio y empieza a rebotar como un péndulo loco entre el pilar de la severidad (exigencia extrema, rigidez, corte) y el pilar de la indulgencia (desborde, dispersión, gasto). Tu única tarea hoy es detener el péndulo.",
      "Bajo la regencia de un Sagitario desbocado, el Arcano XIV en sombra muestra la flecha que se dispara al cielo sin apuntar o que rompe la cuerda del arco por tensarla más allá de su límite elástico. Estás gastando diez litros de combustible emocional para resolver un problema que con diez gotas de diplomacia fría quedaba cerrado.",
      "Para el creador, formulador, programador o comerciante, La Templanza invertida es una alerta técnica directa en la mesa de mezclas: hay un desbalance entre tus componentes (demasiado costo y poca rotación, demasiado diseño y poca estabilidad, o un ingrediente que está tapando a los demás). Volvé a pesar la fórmula con balanza de precisión.",
      "En su polo de tibieza pasiva, esta inversión te advierte que no confundas 'armonía' con diluir tu identidad: si para evitar roces aceptás rebajar la graduación y el carácter único de tu obra, te quedarás con un producto gris que no enamora a nadie."
    ],

    // --- LA HERIDA RAÍZ JUNGUIANA (4 DIAGNÓSTICOS DE SOMBRA) ---
    theWound: "En la psicología profunda de Jung, La Templanza invertida revela el bloqueo de la *Función Trascendente* y la herida de la *Desregulación Afectiva*: el sistema nervioso no tolera la tensión creativa de esperar a que dos opuestos se integren, y busca descarga inmediata yéndose a un extremo blanco o negro ('si no sale perfecto hoy, tiro todo a la basura').",
    theWoundVariants: [
      "En la psicología profunda de Jung, La Templanza invertida revela el bloqueo de la *Función Trascendente* y la herida de la *Desregulación Afectiva*: el sistema nervioso no tolera la tensión creativa de esperar a que dos opuestos se integren, y busca descarga inmediata yéndose a un extremo blanco o negro ('si no sale perfecto hoy, tiro todo a la basura').",
      "La herida del *Pacificador Ansioso*: haber crecido intentando mediar entre padres o entornos en guerra te dejó el reflejo neurótico de querer apagar cualquier chispa de tensión ajena a costa de tragarte tu propio fuego.",
      "La adicción a la intensidad extrema (la antesala del Arcano XV, El Diablo): sentir que la paz, el equilibrio y el ritmo constante son 'aburridos', provocando inconscientemente crisis o atrasos de último minuto para volver a sentir el latigazo de la adrenalina.",
      "La disociación entre el *Puer* (la visión sagitariana que vuela lejos) y el cuerpo físico que necesita tiempos biológicos reales de asimilación y reposo."
    ],

    // --- EL ESPEJISMO DEL EGO / AUTOENGAÑO (4 COARTADAS A DESMANTELAR) ---
    theIllusion: "El autoengaño clásico de este Arcano invertido es decirte: *'Yo soy así, pasional e intenso: o voy a mil o voy a cero'*, romantizando como si fuera una virtud artística lo que es simplemente falta de dominio sobre el regulador de tu propia caldera.",
    theIllusionVariants: [
      "El autoengaño clásico de este Arcano invertido es decirte: *'Yo soy así, pasional e intenso: o voy a mil o voy a cero'*, romantizando como si fuera una virtud artística lo que es simplemente falta de dominio sobre el regulador de tu propia caldera.",
      "El espejismo de *'Si subo el fuego al doble, se cocina en la mitad de tiempo'*: en la alta química, en la destilación y en los negocios grandes, subir el fuego al doble no acelera la obra: la quema.",
      "La ilusión de que 'todos los ingredientes caben en el mismo vaso': creer que podés juntar personas, ideas o rubros incompatibles sin hacer antes un trabajo fino de emulsión y reglas claras.",
      "Confundir diplomacia con tibieza: decirle a cada uno lo que quiere escuchar para no discutir hoy, generando un cortocircuito doble mañana."
    ],

    // --- RETROCOMPATIBILIDAD CON PSYCHE Y LIGHTANDSHADOW ---
    psyche: "Psicológicamente, el Arcano XIV en sombra diagnostica una pérdida de la homeostasis psicosomática: el consciente y el subconsciente dejaron de trasvasarse energía de forma fluida y chocan en cambios bruscos de humor, ansiedad impaciente y desgaste nervioso.",
    psycheVariants: [
      "Psicológicamente, el Arcano XIV en sombra diagnostica una pérdida de la homeostasis psicosomática: el consciente y el subconsciente dejaron de trasvasarse energía de forma fluida y chocan en cambios bruscos de humor, ansiedad impaciente y desgaste nervioso.",
      "Estás sufriendo el síndrome del péndulo: cada exceso de trabajo o de exigencia de hoy está fabricando el rebote de apatía o desborde del fin de semana. Cortá la oscilación acortando el recorrido hacia el centro.",
      "Tu intuición lunar (el cáliz de plata) y tu razón solar (el cáliz de oro) están desfasadas en el tiempo: una va tres pasos adelante y la otra tres pasos atrás.",
      "Recuperar el Arte de Samekh exige instalar el ritmo del maestro: ni prisa ni pausa, gota a gota hasta llenar el matraz."
    ],

    lightAndShadow: "En Sombra Activa: Desbordes emocionales, impaciencia destructiva que arruina la mezcla, extremos irreconciliables, falta de medida o fricción en equipos y parejas.",
    lightAndShadowVariants: [
      "En Sombra Activa: Desbordes emocionales, impaciencia destructiva que arruina la mezcla, extremos irreconciliables, falta de medida o fricción en equipos y parejas.",
      "Sombra por Exceso: Volatilidad extrema, impaciencia que derrama el oro, fanatismo y excesos físicos. Sombra por Defecto: Tibieza aguada, incompatibilidad química y pérdida del ritmo.",
      "Distorsión de Samekh: La corriente que se corta entre los dos cálices por mano temblorosa y apurada."
    ],

    // --- DOMINIOS EN SOMBRA (3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Choque de temperamentos, falta de *timing* (cuando uno quiere hablar el otro quiere callar, cuando uno se acerca el otro se enfría) o ansiedad que presiona el vínculo quitándole su fluidez natural. Bajen la velocidad de reacción hoy: no respondan un mensaje ni un reproche en caliente; dejen que el agua se entibie antes de trasvasarla.",
      work: "Desajuste técnico en fórmulas, mezclas, diseños o coordinación de equipos. Si estás desarrollando un producto, código o partida artesanal, revisá las proporciones porque hay un exceso que está rompiendo la armonía del conjunto. En lo comercial, evitá negociar a los tirones: buscá el punto medio con paciencia de relojero.",
      money: "Desequilibrio entre ingresos y egresos por manejar la caja a los espasmos (semanas de austeridad extrema seguidas de semanas de gasto desmedido). Establecé un flujo constante y previsible.",
      spirit: "Desconexión entre tu vida espiritual y tu vida práctica (tener los dos pies en el agua de la fantasía o los dos pies clavados en la piedra seca del materialismo).",
      healthAndEnergy: "Deshidratación celular o retención hídrica desbalanceada, inflamación del nervio ciático o caderas (Sagitario), desajustes glucémicos/hormonales y agotamiento por malos horarios de sueño y comida."
    },
    domainsVariants: [
      {
        love: "Choque de temperamentos, falta de *timing* (cuando uno quiere hablar el otro quiere callar, cuando uno se acerca el otro se enfría) o ansiedad que presiona el vínculo quitándole su fluidez natural. Bajen la velocidad de reacción hoy: no respondan un mensaje ni un reproche en caliente; dejen que el agua se entibie antes de trasvasarla.",
        work: "Desajuste técnico en fórmulas, mezclas, diseños o coordinación de equipos. Si estás desarrollando un producto, código o partida artesanal, revisá las proporciones porque hay un exceso que está rompiendo la armonía del conjunto. En lo comercial, evitá negociar a los tirones: buscá el punto medio con paciencia de relojero.",
        money: "Desequilibrio entre ingresos y egresos por manejar la caja a los espasmos (semanas de austeridad extrema seguidas de semanas de gasto desmedido). Establecé un flujo constante y previsible.",
        spirit: "Desconexión entre tu vida espiritual y tu vida práctica (tener los dos pies en el agua de la fantasía o los dos pies clavados en la piedra seca del materialismo).",
        healthAndEnergy: "Deshidratación celular o retención hídrica desbalanceada, inflamación del nervio ciático o caderas (Sagitario), desajustes glucémicos/hormonales y agotamiento por malos horarios de sueño y comida."
      },
      {
        love: "Pasar del amor idealizado a la decepción en un solo día por falta de templanza: nadie es perfecto al cien por ciento ni culpable al cien por ciento; aprendé a querer en la escala humana real.",
        work: "Fricción entre dos áreas de tu negocio (por ejemplo, producción artesanal vs. ventas rápidas) que están compitiendo en lugar de cooperar. Poné un protocolo puente hoy mismo.",
        money: "No mezcles cajas de distintos rubros ni saques plata de un proyecto en gestación para tapar un apuro de otro lado: cada cáliz debe mantener su propia medida.",
        spirit: "Cuidado con los excesos de entusiasmo místico seguidos de sequedad; diez minutos de práctica diaria constante valen más que un retiro de diez horas una vez al año.",
        healthAndEnergy: "Revisá las combinaciones de lo que ingerís hoy (alimentos, café, suplementos); menos mezcla y más pureza le devolverán la paz a tu digestión."
      },
      {
        love: "Si hay una conversación delicada pendiente, hoy el secreto está en la temperatura de tu voz: ni helada como el hielo ni hirviendo como el plomo.",
        work: "No lances un lote ni cierres un diseño que todavía no reposó (maceración/estabilización): darle veinticuatro horas de asentamiento al compuesto hoy salvará la calidad final.",
        money: "Pérdidas menores por apuro o distracción al transferir, pesar mercadería o calcular presupuestos; medí dos veces antes de volcar el vaso.",
        spirit: "Volver al Camino del Medio: recordar que el arco de Sagitario solo da en el blanco cuando la cuerda no está ni floja ni pasada de tensión.",
        healthAndEnergy: "El cuerpo te pide equilibrar electrolitos (magnesio, potasio, sodio) y estirar toda la cadena muscular posterior."
      }
    ],

    // --- ALQUIMIA DE TRANSMUTACIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    theAlchemy: {
      command: "Bajá a la mitad la velocidad de tus gestos hoy, revisá al gramo las proporciones de tu trabajo o presupuesto, y obligáte a encontrar el punto medio exacto entre los dos extremos que te tironean.",
      prohibition: "Prohibido actuar hoy bajo la ley del 'todo o nada', apurar un tiempo de reposo/maduración o responder en caliente.",
      psychomagicAct: "Llená un vaso con agua bien caliente y otro con agua bien fría; tocalos por fuera sintiendo el choque de los extremos, y luego verté ambos al mismo tiempo dentro de una jarra o copa central hasta obtener un agua perfectamente tibia. Bebé un sorbo despacio diciendo: 'Disuelvo mis extremos; recupero el pulso exacto del Alquimista'.",
      talismanPhrase: "Ni me quemo en la prisa ni me congelo en la duda; habito en la proporción exacta del Camino del Medio."
    },
    theAlchemyVariants: [
      {
        command: "Bajá a la mitad la velocidad de tus gestos hoy, revisá al gramo las proporciones de tu trabajo o presupuesto, y obligáte a encontrar el punto medio exacto entre los dos extremos que te tironean.",
        prohibition: "Prohibido actuar hoy bajo la ley del 'todo o nada', apurar un tiempo de reposo/maduración o responder en caliente.",
        psychomagicAct: "Llená un vaso con agua bien caliente y otro con agua bien fría; tocalos por fuera sintiendo el choque de los extremos, y luego verté ambos al mismo tiempo dentro de una jarra o copa central hasta obtener un agua perfectamente tibia. Bebé un sorbo despacio diciendo: 'Disuelvo mis extremos; recupero el pulso exacto del Alquimista'.",
        talismanPhrase: "Ni me quemo en la prisa ni me congelo en la duda; habito en la proporción exacta del Camino del Medio."
      },
      {
        command: "Si una mezcla, fórmula o negociación se cortó hoy, detené el batido: dejá que las partes decanten en silencio hasta la mañana siguiente antes de volver a intervenir.",
        prohibition: "No diluyas la calidad ni el carácter único de tu propuesta por querer agradar a un público que no es el tuyo.",
        psychomagicAct: "Caminá en línea recta sobre una línea del piso con un vaso lleno de agua hasta el borde en la mano derecha, concentrando toda tu atención en no derramar ni una sola gota de un extremo al otro de la habitación.",
        talismanPhrase: "Mi pulso es firme y mi medida es áurea; ni una gota de mi energía se desperdicia en el suelo."
      },
      {
        command: "Reorganizá tu jornada de hoy dividiéndola en bloques simétricos: por cada bloque de fuego intenso de trabajo, intercalá quince minutos de agua quieta y respiración.",
        prohibition: "No consumas hoy ningún estimulante en exceso que te saque de tu eje rítmico.",
        psychomagicAct: "Colocá un reloj de arena (o cronómetro de catorce minutos) sobre tu mesa y mirá caer el flujo constante sin hacer absolutamente nada durante los primeros dos minutos, entrenando a tu mente a respetar la velocidad natural de la gravedad.",
        talismanPhrase: "El Ángel del Tiempo sostiene mis cálices; todo madura en su hora perfecta."
      }
    ],

    actionOracle: {
      command: "Bajá a la mitad la velocidad de tus gestos hoy, revisá al gramo las proporciones de tu trabajo o presupuesto, y obligáte a encontrar el punto medio exacto entre los dos extremos que te tironean.",
      prohibition: "Prohibido actuar hoy bajo la ley del 'todo o nada', apurar un tiempo de reposo/maduración o responder en caliente.",
      psychomagicAct: "Llená un vaso con agua bien caliente y otro con agua bien fría; tocalos por fuera sintiendo el choque de los extremos, y luego verté ambos al mismo tiempo dentro de una jarra o copa central hasta obtener un agua perfectamente tibia. Bebé un sorbo despacio diciendo: 'Disuelvo mis extremos; recupero el pulso exacto del Alquimista'.",
      talismanPhrase: "Ni me quemo en la prisa ni me congelo en la duda; habito en la proporción exacta del Camino del Medio."
    },

    // --- MEMORIA DE SINCRONICIDAD LUNAR ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIV aparece en Sombra: alerta sobre impaciencia en el laboratorio, desborde de extremos o desajuste en una proporción.",
      secondAppearance: "La Templanza Invertida sale por segunda vez: seguís sacudiendo los vasos por ansiedad y derramando energía. Bajá el fuego a la mitad hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XIV en Sombra: peligro de cortar la fórmula o romper un acuerdo por falta de medida y diplomacia. Volvé inmediatamente al Pilar del Medio.",
      fourthPlusAppearance: "Intervención alquímica de Samekh: el Oráculo te prohíbe todo movimiento brusco. Hasta que no estabilices tu ritmo diario, tu sueño y tus proporciones, el elixir no cuajará."
    },

    // --- CONSEJO EN SOMBRA (5 AFORISMOS ROTATIVOS) ---
    counsel: "Bajá la velocidad y cuidá tus proporciones: la alquimia verdadera jamás ocurre a los empujones ni en los extremos.",
    counselVariants: [
      "Bajá la velocidad y cuidá tus proporciones: la alquimia verdadera jamás ocurre a los empujones ni en los extremos.",
      "El que quiere vaciar la damajuana en un embudo chico de un solo golpe tira la mitad del espíritu al piso.",
      "No confundas intensidad con descontrol: el rayo láser corta el diamante precisamente porque no tiembla hacia los costados.",
      "Cuando dos fuerzas chocan en tu mesa, no elijas un bando: convertite en el tercer elemento que las disuelve y las une.",
      "Cuidá tu ritmo hoy para tener piernas en la cumbre mañana."
    ],

    // --- NODOS EN SOMBRA DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Septenario Desencajado (El Triángulo Fuera del Cuadrado)",
        secret: "Al invertirse el diorama, el emblema del pecho —el Triángulo del Espíritu dentro del Cuadrado de la Materia— queda de cabeza: la visión idealista se divorcia de las leyes físicas prácticas, o los cuatro elementos materiales aplastan la chispa espiritual por falta de proporción.",
        esotericFormula: "3 Desconectado de 4 = Desproporción entre Idea y Materia",
        meditationPrompt: "¿Qué ingrediente de tu proyecto o de tu semana está hoy fuera de proporción (en exceso o en falta) y arruina el equilibrio del conjunto?"
      },
      {
        id: "n2",
        x: 30,
        y: 48,
        title: "Los Cálices de Sol y Luna Derramando el Fluido",
        secret: "En Sombra, la cinta magnética entre el cáliz de oro y el cáliz de plata se corta o se desborda hacia afuera. Simboliza la pérdida de energía por impaciencia, los cambios bruscos de humor (pasar del frío al calor sin transición) o la falta de entendimiento entre dos socios o amantes.",
        esotericFormula: "Trasvase Roto = Fuga Energética por Impaciencia",
        meditationPrompt: "¿En qué conversación o tarea de hoy estás a punto de derramar el vaso por apuro o falta de tacto?"
      },
      {
        id: "n3",
        x: 68,
        y: 72,
        title: "El Sendero a la Montaña Perdido en la Niebla",
        secret: "Con el paisaje del fondo invertido, el camino dorado hacia la corona solar de Tiphereth parece cortarse y los dos pies del ángel pierden su doble apoyo en el agua y la piedra. Advierte que por irte a los extremos de corto plazo estás perdiendo el ritmo de marcha hacia tu meta mayor.",
        esotericFormula: "Pérdida del Camino del Medio = Desgaste Antes de la Cumbre",
        meditationPrompt: "¿Qué extremo del 'todo o nada' debés abandonar hoy mismo para recuperar un ritmo sostenible a largo plazo?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO LUNAR • VOLUMEN IV (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initLunarGrimoireVolume4() {
  window.DATOS_LUNA_4 = DATOS_LUNA_4;
  window.DATOS_LUNA = window.DATOS_LUNA || [];

  // 1. Integrar sin duplicar en el acumulador global DATOS_LUNA
  DATOS_LUNA_4.forEach(function (card) {
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
  DATOS_LUNA_4.forEach(function (lunarCard) {
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
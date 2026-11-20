// ============================================================================
// ARCHIVO: datos_sol_5.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN V: ARCANOS XV, XVI y XVII
// XV • El Diablo | XVI • La Torre | XVII • La Estrella
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_5 = [
  // ==========================================================================
  // ARCANO XV • EL DIABLO (AYIN • EL SEÑOR DE LA SOMBRA Y EL FUEGO TELÚRICO)
  // ==========================================================================
  {
    id: 15,
    numeral: "XV",
    name: "El Diablo",
    subtitle: "El Fuego de la Sombra y el Deseo",
    palette: {
      primary: "#ef4444",
      secondary: "#f97316",
      glow: "rgba(239, 68, 68, 0.6)"
    },
    archetype: "devil",
    correspondences: {
      element: "Tierra Volcánica / Fuego Subterráneo de la Materia",
      astro: "Capricornio • Saturno en Domicilio con Marte Exaltado en la Cumbre de Roca",
      hebrewLetter: "Ayin (ע) • El Ojo que perfora las apariencias y mira de frente el Abismo Material",
      treeOfLifePath: "Sendero 26 • Conecta Tiphereth (La Conciencia Solar) con Hod (El Intelecto Mágico)",
      alchemy: "Ignis Gehennae y Solve Sulfúreo • El Fuego Secreto encerrado en el centro del Plomo",
      hermeticAxiom: "El Demonio es el Dios invertido en el espejo de la materia; quien teme a su propia sombra le entrega la llave de su celda.",
      jungianArchetype: "La Sombra Arquetípica, Pan-Baphomet y la Recuperación de la Líbido Primordial",
      tarotTiming: "Diciembre-Enero (Capricornio), noches de alta carga magnética o pactos de efecto inmediato",
      yesNo: "Sí (en lo relativo a poder material, magnetismo, dinero o pasión visceral, siempre que vos seas el amo del pacto)",
      keywords: [
        "magnetismo visceral",
        "integración de la sombra",
        "ambición lúcida",
        "poder telúrico",
        "soberanía del deseo",
        "ruptura de hipocresías",
        "eslabones abiertos"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Acercate sin persignarte ni bajar la vista. Mirá bien los collares al pie de mi pedestal: los eslabones son el doble de anchos que tus muñecas y jamás tuvieron candado. Yo no soy tu carcelero; soy el espejo que te muestra cuánto te gusta la jaula que construiste para no hacerte cargo de tu grandeza.",
    oracleVoiceVariants: [
      "Acercate sin persignarte ni bajar la vista. Mirá bien los collares al pie de mi pedestal: los eslabones son el doble de anchos que tus muñecas y jamás tuvieron candado. Yo no soy tu carcelero; soy el espejo que te muestra cuánto te gusta la jaula que construiste para no hacerte cargo de tu grandeza.",
      "Los moralistas tibios me pintaron con cuernos para que le tengas terror a tu propia hambre de poder, de oro y de sexo. Pero el árbol que quiere tocar el cielo con sus ramas primero tiene que hundir sus raíces en mi barro negro.",
      "Mi letra secreta es Ayin, el Ojo que no parpadea ante las apariencias. Cuando dejás de mentirte sobre lo que realmente deseás en la oscuridad, mi antorcha deja de quemarte y empieza a iluminar tu camino.",
      "Soy Baphomet, el guardián del umbral: en mis brazos llevo grabado *Solve et Coagula*. Disolvé hoy tus culpas hipócritas y coagulá tu ambición en una obra tan potente que nadie pueda ignorarla.",
      "Toda la energía vital que gastás en fingir que sos 'bueno e inofensivo' es combustible que me entregás a mí. Reclamá hoy tu fuego salvaje, pagá el precio de tu libertad y sentate vos sobre el cubo negro."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Diablo (Arcano XV) es el Guardián del Umbral, el Señor del Fuego Subterráneo y el gran iniciador en el misterio de la Sombra. En el Árbol de la Vida gobierna el Sendero 26 de la letra Ayin ('El Ojo'), que une el Sol de Tiphereth con el intelecto mercurial de Hod bajo el signo cardinal de Capricornio. Cuando este Arcano aparece en Luz (al derecho), no viene a anunciarte una maldición, sino una revelación de poder crudo: pone sobre la mesa la ambición material, el magnetismo erótico, el dinero grande y la energía instintiva que habías reprimido por falsos moralismos. Te invita a mirar la realidad sin vendas infantiles, desatar las cadenas ilusorias del miedo y adueñarte del inmenso caudal volcánico de tu propia naturaleza.",
    meaningVariants: [
      "El Diablo (Arcano XV) es el Guardián del Umbral, el Señor del Fuego Subterráneo y el gran iniciador en el misterio de la Sombra. En el Árbol de la Vida gobierna el Sendero 26 de la letra Ayin ('El Ojo'), que une el Sol de Tiphereth con el intelecto mercurial de Hod bajo el signo cardinal de Capricornio. Cuando este Arcano aparece en Luz (al derecho), no viene a anunciarte una maldición, sino una revelación de poder crudo: pone sobre la mesa la ambición material, el magnetismo erótico, el dinero grande y la energía instintiva que habías reprimido por falsos moralismos. Te invita a mirar la realidad sin vendas infantiles, desatar las cadenas ilusorias del miedo y adueñarte del inmenso caudal volcánico de tu propia naturaleza.",
      "Observá el parentesco oculto entre el Arcano VI (Los Amantes) y el Arcano XV (1 + 5 = 6): son la misma pareja humana en el espejo del abismo. Mientras en el VI el Rey y la Reina miraban hacia el Serafín Solar, en el XV están atados al medio cubo de la materia densa porque olvidaron que son espíritus soberanos y creyeron que solo eran cuerpos gobernados por el miedo o el apetito. El momento exacto en que comprendés este truco óptico de Ayin, te quitás el collar del cuello y el Diablo se transforma en tu servidor.",
      "En la cosmología hermética de Eliphas Lévi, la figura central de esta carta es el *Baphomet de Mendes* o el Pan Panteísta: el símbolo de la Luz Astral polarizada. Una mano suya apunta hacia arriba (hacia la luna blanca de Chesed) y la otra hacia abajo (hacia la luna negra de Geburah), revelando el secreto del poder operativo: quien conoce las leyes de la gravedad material y las pasiones humanas no cae preso de ellas, sino que las utiliza como palanca para mover el mundo.",
      "Bajo la regencia de Capricornio —donde Saturno otorga la ambición de cumbre y Marte está exaltado otorgando una garra ejecutiva feroz—, el Arcano XV señala un período de altísima eficacia terrenal. Es la carta del estratega maquiavélico pero lúcido que entiende cómo funcionan realmente los intereses, los mercados y los deseos de las personas, sin engañarse con cuentos de hadas.",
      "Alquímicamente, este sendero custodia el *Azufre Negro* y el fuego de la tierra: el calor visceral sin el cual ninguna semilla germina y ningún metal se funde en el crisol. No temas ensuciarte las manos hoy en el barro de los números, la competencia o la pasión intensa; allí abajo, en la mina oscura de Capricornio, es donde se extrae el diamante en bruto."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Para Carl Gustav Jung, el encuentro con El Diablo es el encuentro iniciático con la *Sombra*: todo aquello que el Yo consciente rechazó por considerarlo 'oscuro, egoísta, agresivo o impuro'. Jung demostró que la Sombra reprimida contiene el noventa por ciento de nuestro oro vital, nuestra creatividad salvaje y nuestro instinto de supervivencia. Integrar el Arcano XV hoy significa dejar de proyectar tus demonios en los demás y recuperar el poder colosal que habías exiliado en tu inconsciente.",
    psycheVariants: [
      "Para Carl Gustav Jung, el encuentro con El Diablo es el encuentro iniciático con la *Sombra*: todo aquello que el Yo consciente rechazó por considerarlo 'oscuro, egoísta, agresivo o impuro'. Jung demostró que la Sombra reprimida contiene el noventa por ciento de nuestro oro vital, nuestra creatividad salvaje y nuestro instinto de supervivencia. Integrar el Arcano XV hoy significa dejar de proyectar tus demonios en los demás y recuperar el poder colosal que habías exiliado en tu inconsciente.",
      "Este Arcano desnuda el mecanismo del 'Beneficio Secundario de las Cadenas'. A menudo una persona dice querer liberarse de un trabajo asfixiante, un vicio o un vínculo tóxico, pero en el fondo permanece allí porque esa cadena la exime del vértigo de ser libre y responsable de su propio éxito. Mirá tu collar a los ojos hoy: nadie te retiene salvo tu propio pacto de comodidad.",
      "Psicológicamente, la letra Ayin (El Ojo) cura la ceguera ingenua (*Naïveté*). Quien se niega a ver que en el mundo existen la codicia, la envidia y los juegos de poder camina desarmado como un cordero entre lobos. El Diablo te entrega hoy la 'sabiduría de la serpiente': ver las intenciones ocultas detrás de las sonrisas ajenas sin perder la calma ni amargarte.",
      "La risa sagrada ante el absurdo es la medicina secreta del Sendero 26. En la tradición cabalística, la Inteligencia Renovadora de Ayin opera desinflando la solemnidad pomposa del Ego. Cuando podés reírte de tus propias obsesiones y miedos materiales, el hechizo hipnótico del Diablo se rompe en mil pedazos."
    ],

    lightAndShadow: "Al derecho (En Luz): Magnetismo arrollador, integración poderosa de la sombra, ambición material lúcida, sexualidad plena, astucia estratégica y ruptura de cadenas autoimpuestas. Invertida (En Sombra): Adicciones, dependencia servil, obsesión destructiva, manipulación turbia o miedo paranoico al propio deseo.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Magnetismo arrollador, integración poderosa de la sombra, ambición material lúcida, sexualidad plena, astucia estratégica y ruptura de cadenas autoimpuestas. Invertida (En Sombra): Adicciones, dependencia servil, obsesión destructiva, manipulación turbia o miedo paranoico al propio deseo.",
      "En Luz, El Diablo es el titán prometeico que roba el fuego del subsuelo para encender las fraguas de su imperio; en Sombra, es el esclavo hipnotizado que vende su libertad por una migaja de placer inmediato.",
      "Luz activa: Carisma hipnótico, dominio de las leyes del dinero y del mercado, potencia viril/creativa y desmantelamiento de tabúes. Sombra latente: Pactar por debajo de tu dignidad o quedar atrapado en una compulsión repetitiva."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Química erótica volcánica, atracción magnética irresistible y caída de inhibiciones. En pareja, invita a encender el juego pasional, confesar fantasías sin tabúes y renovar la piel; si surge un vínculo nuevo, trae una intensidad visceral arrolladora que te pide disfrutar del fuego manteniendo siempre despierta tu soberanía emocional.",
      work: "Astucia comercial afilada, ambición de cumbre (Capricornio) y capacidad de imponerte en entornos altamente competitivos. Ves con claridad quirúrgica dónde está el negocio real, qué mueve el interés de la otra parte y cómo cerrar un trato de alto impacto.",
      money: "Fuerte magnetismo para la generación de dinero, cobros importantes y dominio de la materia financiera. El Arcano XV premia la ambición sin culpa, recordándote una sola regla de oro: que el dinero sea siempre tu esclavo fiel y jamás tu amo.",
      spirit: "Iniciación en la Vía del Guardián del Umbral: descender conscientemente a tus propios infiernos interiores con la antorcha encendida para rescatar las chispas de luz atrapadas en el instinto.",
      healthAndEnergy: "Caudal torrencial de energía kundalini basal, vigor sexual y fuerza bruta en rodillas, huesos y dentadura (Capricornio). Canalizá este exceso de presión volcánica mediante entrenamiento pesado o creación intensa."
    },
    domainsVariants: [
      {
        love: "Química erótica volcánica, atracción magnética irresistible y caída de inhibiciones. En pareja, invita a encender el juego pasional, confesar fantasías sin tabúes y renovar la piel; si surge un vínculo nuevo, trae una intensidad visceral arrolladora que te pide disfrutar del fuego manteniendo siempre despierta tu soberanía emocional.",
        work: "Astucia comercial afilada, ambición de cumbre (Capricornio) y capacidad de imponerte en entornos altamente competitivos. Ves con claridad quirúrgica dónde está el negocio real, qué mueve el interés de la otra parte y cómo cerrar un trato de alto impacto.",
        money: "Fuerte magnetismo para la generación de dinero, cobros importantes y dominio de la materia financiera. El Arcano XV premia la ambición sin culpa, recordándote una sola regla de oro: que el dinero sea siempre tu esclavo fiel y jamás tu amo.",
        spirit: "Iniciación en la Vía del Guardián del Umbral: descender conscientemente a tus propios infiernos interiores con la antorcha encendida para rescatar las chispas de luz atrapadas en el instinto.",
        healthAndEnergy: "Caudal torrencial de energía kundalini basal, vigor sexual y fuerza bruta en rodillas, huesos y dentadura (Capricornio). Canalizá este exceso de presión volcánica mediante entrenamiento pesado o creación intensa."
      },
      {
        love: "Si había un enganche tóxico, celos o juegos de poder subterráneos, el ojo de Ayin los deja hoy completamente al descubierto: mirá el mecanismo de frente, sacá el cuello del eslabón abierto y recuperá tu centro.",
        work: "Dominio de la psicología del consumidor y del deseo: tu producto, tu diseño o tu marca logra tocar hoy esa fibra profunda de fascinación y misterio que genera clientes fanáticos.",
        money: "Negociación dura donde triunfa quien no muestra hambre ni miedo a levantarse de la mesa. Revisá bien las cláusulas de exclusividad para no atar tus manos a futuro.",
        spirit: "Superación del dualismo moral infantil: comprender que no hay luz real en la copa del árbol sin la oscuridad fértil de la raíz bajo la piedra.",
        healthAndEnergy: "Excelente momento para cortar de cuajo un hábito compulsivo o dependencia menor demostrando quién manda en tu biología."
      },
      {
        love: "Pasión que quema las máscaras de cortesía fría. El Diablo exige verdad carnal y emocional completa: menos discursos políticamente correctos y más presencia viva en el cuerpo.",
        work: "Transformar un defecto o limitación aparente en tu sello más potente. Aquello que otros esconden por timidez en tu rubro, vos lo convertís en tu bandera diferenciadora.",
        money: "Liberación de un miedo inconsciente a enriquecerte o a cobrar caro: asumí tu ambición patrimonial con total naturalidad y el techo de tus ingresos se romperá.",
        spirit: "El misterio hermético de Lucifer ('el Portador de Luz' venusino caído en la materia): redimir los deseos terrenales poniéndolos al servicio de la Conciencia Solar.",
        healthAndEnergy: "Fuego metabólico alto y gran resistencia al esfuerzo; descargá la electricidad estática caminando descalzo sobre tierra o piedra."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Reconocé hoy sin caretas cuál es tu verdadera ambición o deseo en este asunto, y al mismo tiempo soltá de un tirón esa atadura o excusa donde fingías no tener opción.",
      prohibition: "Prohibido firmar hoy pactos que hipotequen tu libertad futura por una ventaja rápida, o echarle la culpa a otro de una cadena que vos mismo elegís llevar.",
      psychomagicAct: "Pasá un hilo grueso o cordón flojo alrededor de tus dos muñecas sin anudarlo fuerte, mirá tus manos frente a vos durante un minuto reconociendo qué miedo o hábito te tenía atado, y luego separá las manos de golpe dejando caer el cordón al suelo mientras decís: 'El eslabón siempre estuvo abierto; reclamo mi fuego y mi soberanía'.",
      talismanPhrase: "Miro a mi sombra a los ojos sin parpadear; ninguna cadena me sujeta y todo mi fuego me pertenece."
    },
    actionOracleVariants: [
      {
        command: "Reconocé hoy sin caretas cuál es tu verdadera ambición o deseo en este asunto, y al mismo tiempo soltá de un tirón esa atadura o excusa donde fingías no tener opción.",
        prohibition: "Prohibido firmar hoy pactos que hipotequen tu libertad futura por una ventaja rápida, o echarle la culpa a otro de una cadena que vos mismo elegís llevar.",
        psychomagicAct: "Pasá un hilo grueso o cordón flojo alrededor de tus dos muñecas sin anudarlo fuerte, mirá tus manos frente a vos durante un minuto reconociendo qué miedo o hábito te tenía atado, y luego separá las manos de golpe dejando caer el cordón al suelo mientras decís: 'El eslabón siempre estuvo abierto; reclamo mi fuego y mi soberanía'.",
        talismanPhrase: "Miro a mi sombra a los ojos sin parpadear; ninguna cadena me sujeta y todo mi fuego me pertenece."
      },
      {
        command: "Usá hoy tu magnetismo más crudo y tu astucia comercial sin pedir perdón por querer ganar: defendé tu territorio con la garra de Capricornio.",
        prohibition: "No caigas en la tentación de la gratificación instantánea que te roba la concentración de tu Gran Obra del día.",
        psychomagicAct: "Encendé un fósforo o vela roja en la penumbra, mirá la base azul y oscura de la llama (donde nace el calor real antes de ser luz amarilla) y apagala de un soplo seco declarando que vos sos el único dueño de cuándo arde y cuándo se apaga tu pasión.",
        talismanPhrase: "Domino el Azufre Negro del abismo y lo convierto en el motor de oro de mi corona."
      },
      {
        command: "Poné luz directa hoy sobre ese tema tabú, deuda oculta o conversación incómoda que todos esquivan: al nombrarlo en voz alta sin miedo, pierde todo su poder intimidatorio.",
        prohibition: "No te dejes manipular por la culpa ajena ni uses el chantaje emocional para retener nada.",
        psychomagicAct: "Dibujá un ojo abierto (la letra Ayin) en el reverso de una moneda, llevala en tu bolsillo derecho durante el día y tocala antes de cualquier negociación para recordar ver más allá de las apariencias.",
        talismanPhrase: "El Ojo de Ayin despierta en mi frente; veo el hilo invisible detrás de cada máscara."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XV enciende su antorcha subterránea en la lectura: tu sombra, tu deseo y tu poder material reclaman ser vistos sin hipocresía.",
      secondAppearance: "El Diablo comparece por segunda vez en tu registro: seguís quejándote de una jaula cuya puerta está sin llave, o bien estás reprimiendo una ambición vital que te pide pista. Sacate el collar hoy.",
      thirdAppearance: "Tercera llamada del Arcano XV: advertencia de enganche o tentación ciega. Revisá inmediatamente dónde estás entregando tu soberanía por apego, orgullo o costumbre.",
      fourthPlusAppearance: "Confrontación suprema en el Sendero de Ayin: el Guardián del Umbral no se moverá del camino hasta que integres tu sombra por completo y cortes de raíz toda servidumbre voluntaria."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Observá de cerca los eslabones en tus muñecas: están abiertos y solo permanecen ahí mientras sigas creyendo que no podés soltarlos.",
    counselVariants: [
      "Observá de cerca los eslabones en tus muñecas: están abiertos y solo permanecen ahí mientras sigas creyendo que no podés soltarlos.",
      "Nadie puede comprarte ni intimidarte cuando ya hiciste las paces con tu propia oscuridad.",
      "El dinero y el placer son los mejores sirvientes del sabio y los peores verdugos del inconsciente.",
      "No le tengas miedo a tu ambición: temele a la mediocridad tibia que esconde el talento bajo tierra por miedo a brillar.",
      "Cuando encendés la luz de la conciencia en el sótano, los monstruos desaparecen y descubrís que estaban custodiando tus lingotes de oro."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Pentagrama Invertido y los Cuernos de Capricornio",
        secret: "Entre las astas caprinas de obsidiana y oro arde el pentagrama con dos puntas hacia arriba y una hacia abajo. En el esoterismo hermético no es un signo de maldad, sino el diagrama de la materia densa cuando los cuatro elementos (las cuatro puntas superiores) pesan temporalmente más que la quintaesencia del espíritu (la punta inferior), invitando al iniciado a invertir nuevamente el polo mediante la conciencia.",
        esotericFormula: "Pentagrama Invertido (Materia Dominante) -> Conciencia de Ayin -> Pentagrama Real",
        meditationPrompt: "¿En qué área de tu vida los cinco sentidos materiales te están hipnotizando hoy hasta hacerte olvidar tu propósito superior?"
      },
      {
        id: "n2",
        x: 70,
        y: 54,
        title: "La Antorcha Subterránea del Fuego Prometeico",
        secret: "Empuñada hacia el suelo del abismo, la antorcha de fuego carmesí y azufre representa la líbido primordial y la chispa divina descendida hasta las entrañas mismas del mundo físico (Malkuth/Capricornio). Es el fuego que puede quemar al imprudente en la fiebre de la obsesión o forjar el acero indestructible del maestro alquimista.",
        esotericFormula: "Ignis Gehennae (Fuego de la Sombra) = Combustible Nuclear de la Voluntad",
        meditationPrompt: "¿Qué deseo intenso o ambición guardada tenés hoy que, bien canalizada, multiplicaría por diez tu fuerza productiva?"
      },
      {
        id: "n3",
        x: 34,
        y: 76,
        title: "El Medio Cubo de Basalto y los Eslabones Abiertos",
        secret: "El Diablo no se sienta sobre un cubo perfecto como El Emperador, sino sobre un *medio cubo* (un rectángulo incompleto): simboliza que la visión puramente materialista solo ve la mitad de la realidad. De su anillo central cuelgan las cadenas holgadas y sin candado: el gran secreto iniciático de que toda esclavitud mental dura exactamente hasta el segundo en que decidís abrir las manos.",
        esotericFormula: "Medio Cubo (Ilusión Material) + Collar Holgado = Cautiverio Autoimpuesto",
        meditationPrompt: "Si admitieras hoy con total crudeza que nadie te obliga a quedarte donde no querés, ¿qué cadena te sacarías del cuello ahora mismo?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XVI • LA TORRE (PEH • EL RAYO QUE DERRUMBA EL ARTIFICIO)
  // ==========================================================================
  {
    id: 16,
    numeral: "XVI",
    name: "La Torre",
    subtitle: "El Rayo que Derrumba el Artificio",
    palette: {
      primary: "#f97316",
      secondary: "#a855f7",
      glow: "rgba(249, 115, 22, 0.62)"
    },
    archetype: "tower",
    correspondences: {
      element: "Fuego Marcial / Relámpago Eléctrico Purificador",
      astro: "Marte • El Señor del Hierro, el Trueno y la Ruptura Quirúrgica",
      hebrewLetter: "Peh (פ) • La Boca que pronuncia el Verbo demoledor de toda mentira",
      treeOfLifePath: "Sendero 27 • El travesaño inferior de fuego que une Netzach (El Deseo) con Hod (La Razón)",
      alchemy: "Calcinatio Violenta y Fulminatio • La ruptura súbita de la corteza sulfurosa para liberar el Mercurio",
      hermeticAxiom: "Lo que el orgullo edificó para encerrar al Espíritu, el relámpago de la Gracia lo parte en dos para devolverle las estrellas.",
      jungianArchetype: "La Desintegración de la Persona Falsa, el Satori por Impacto y la Catarsis Liberadora",
      tarotTiming: "Fulminante, imprevisto, cuestión de horas o martes bajo regencia de Marte",
      yesNo: "No para sostener la estructura vieja / Sí absoluto para la liberación y el despertar",
      keywords: [
        "revelación fulminante",
        "derrumbe de ilusiones",
        "despertar por impacto",
        "catarsis liberadora",
        "caída de la máscara",
        "casa dios",
        "verdad desnuda"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Llorás porque mis ladrillos caen hechos pedazos, sin darte cuenta de que esos ladrillos eran los muros de tu propia celda. Yo no destruyo tu ser verdadero: yo soy el relámpago de Kether que hace volar por los aires la corona de cartón de tu ego para que vuelvas a respirar a cielo abierto.",
    oracleVoiceVariants: [
      "Llorás porque mis ladrillos caen hechos pedazos, sin darte cuenta de que esos ladrillos eran los muros de tu propia celda. Yo no destruyo tu ser verdadero: yo soy el relámpago de Kether que hace volar por los aires la corona de cartón de tu ego para que vuelvas a respirar a cielo abierto.",
      "En los antiguos mazos de Marsella me llamaron *La Maison Dieu*, la Casa de Dios. Cuando una estructura en tu vida se vuelve demasiado estrecha para el tamaño de tu alma, el espíritu mismo la hace estallar desde adentro.",
      "Mi letra sagrada es Peh, la Boca. A veces basta una sola frase de verdad cruda pronunciada sin anestesia para derribar en tres segundos diez años de hipocresía educada.",
      "Mirá las veintidós chispas de oro y rubí que llueven alrededor de mis muros partidos: son las veintidós letras de la creación bendiciendo tu liberación. El incendio quema la mentira; la roca madre bajo tus pies queda intacta.",
      "No gastes ni un gramo de fuerza en apuntalar con vigas una pared que el rayo del destino ya quebró al medio. Salí de la torre antes de que caiga el techo y agradecé la tormenta."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Torre o La Casa Dios (Arcano XVI) es el gran agente de la Liberación Fulminante y la Verdad Inapelable. En el Árbol de la Vida gobierna el Sendero 27 de la letra Peh ('La Boca'), tendiendo la línea de alta tensión marcial entre las pasiones de Netzach y las estructuras mentales de Hod bajo el imperio directo de Marte. Si en el Arcano XV (El Diablo) el ser humano quedaba encadenado a sus propios apegos y falsas seguridades, en el Arcano XVI desciende un relámpago de lucidez superior que hace saltar por los aires esa prisión. En tu lectura, anuncia una revelación súbita, un cambio de planes radical o el derrumbe de un artificio que ya no se sostenía: lo que cae hoy era falso; lo que queda de pie después del trueno es tu verdad indestructible.",
    meaningVariants: [
      "La Torre o La Casa Dios (Arcano XVI) es el gran agente de la Liberación Fulminante y la Verdad Inapelable. En el Árbol de la Vida gobierna el Sendero 27 de la letra Peh ('La Boca'), tendiendo la línea de alta tensión marcial entre las pasiones de Netzach y las estructuras mentales de Hod bajo el imperio directo de Marte. Si en el Arcano XV (El Diablo) el ser humano quedaba encadenado a sus propios apegos y falsas seguridades, en el Arcano XVI desciende un relámpago de lucidez superior que hace saltar por los aires esa prisión. En tu lectura, anuncia una revelación súbita, un cambio de planes radical o el derrumbe de un artificio que ya no se sostenía: lo que cae hoy era falso; lo que queda de pie después del trueno es tu verdad indestructible.",
      "En el mito arquetípico de la Torre de Babel, los hombres edificaron un zigurat de ladrillo cocido para encerrar su nombre y protegerse del cielo, hasta que el Verbo divino (la letra Peh, la Boca) confundió sus máscaras y abrió el horizonte. Cuando el Arcano XVI irrumpe en Luz, actúa como una cirugía de urgencia del cosmos: corta en un segundo el nudo gordiano que tu mente vacilante llevaba meses sin animarse a desatar.",
      "Observá la alquimia secreta del diorama: el rayo en zigzag no golpea los cimientos de la roca, sino exactamente la *Corona Dorada* en la cúspide de la torre. Esto significa que la sacudida actual va dirigida contra una presunción intelectual, un orgullo rígido o un plan demasiado estrecho, liberando la energía vital que tenías comprimida como vapor dentro de una caldera cerrada.",
      "En la tradición Zen, este fenómeno se conoce como *Satori* por golpe del bastón del maestro: un impacto inesperado de realidad que despierta al discípulo del sueño hipnótico en el acto. Una noticia sorpresiva, un descubrimiento técnico fortuito o una verdad dicha a la cara cambia hoy todas las reglas de tu tablero para tu máximo beneficio evolutivo.",
      "Mirando hacia adelante en la secuencia del Tarot, recordá siempre esta ley hermética: La Torre (XVI) es el preludio obligatorio de La Estrella (XVII). El cielo solo descarga el rayo purificador cuando quiere limpiar el terreno rápidamente para entregarte el manantial cristalino del próximo capítulo."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la clínica profunda de Jung, La Torre retrata el colapso saludable de una *Persona* (la máscara social o autoimagen rígida) que había secuestrado al Yo. Cuando un individuo construye una coraza defensiva tan cerrada que ya no deja pasar el aire del Sí-Mismo (*Self*), el inconsciente produce una descarga compensatoria —una crisis sincera, un insight explosivo o un quiebre de rutina— para salvar la vida psíquica. No temas a la sacudida: lo que se rompe no sos vos, es el molde que te quedaba chico.",
    psycheVariants: [
      "En la clínica profunda de Jung, La Torre retrata el colapso saludable de una *Persona* (la máscara social o autoimagen rígida) que había secuestrado al Yo. Cuando un individuo construye una coraza defensiva tan cerrada que ya no deja pasar el aire del Sí-Mismo (*Self*), el inconsciente produce una descarga compensatoria —una crisis sincera, un insight explosivo o un quiebre de rutina— para salvar la vida psíquica. No temas a la sacudida: lo que se rompe no sos vos, es el molde que te quedaba chico.",
      "Este Arcano ilumina el fenómeno de la *Catarsis* (del griego *katharsis*, purificación por descarga). Guardar tensión, bronca o verdades no dichas durante meses genera una presión atmosférica interna insoportable. La tormenta eléctrica del Arcano XVI descarga el ozono, limpia el aire viciado y devuelve al sistema nervioso una liviandad extraordinaria después del trueno.",
      "Psicológicamente, la resistencia al impacto es lo único que produce dolor en La Torre. La caña de bambú que se dobla con el vendaval queda intacta; el muro de cemento rígido que intenta pelear contra el rayo se parte. Si hoy una expectativa vieja se cae, no te aferres a los escombros: soltá la forma antigua en el acto y usá la energía liberada para crear.",
      "El destronamiento de la corona en la cima representa la cura instantánea de la 'inflación o rigidez del Ego'. A veces necesitamos descubrir que una suposición nuestra estaba equivocada para abrir los ojos a una verdad técnica o vital diez veces más brillante."
    ],

    lightAndShadow: "Al derecho (En Luz): Despertar fulminante, caída de máscaras e ilusiones, revelación liberadora, catarsis sanadora, ruptura de bloqueos crónicos e innovación disruptiva. Invertida (En Sombra): Negación terca ante lo evidente, prolongar una agonía por miedo al impacto, estallido de ira ciega o aferrarse a ruinas.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Despertar fulminante, caída de máscaras e ilusiones, revelación liberadora, catarsis sanadora, ruptura de bloqueos crónicos e innovación disruptiva. Invertida (En Sombra): Negación terca ante lo evidente, prolongar una agonía por miedo al impacto, estallido de ira ciega o aferrarse a ruinas.",
      "En Luz, La Torre es el relámpago que parte el cascarón de piedra para que el águila salga a volar; en Sombra, es el prisionero que llora abrazado a los barrotes rotos de su calabozo porque le teme al cielo abierto.",
      "Luz activa: Golpe de timón audaz, verdad que sale a la luz, descompresión instantánea y limpieza total del terreno. Sombra latente: Actuar por impulso destructivo sin distinguir entre los muros falsos y los cimientos nobles."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Caída total de caretas y verdades que salen a la luz de golpe para limpiar el aire. En una relación sólida pero estancada en la rutina, actúa como una sacudida sincera o un flechazo de realidad que obliga a hablar sin filtro y refundar el vínculo sobre bases cien por ciento auténticas; si algo se sostenía solo en apariencias vacías, el rayo te libera para que no pierdas un día más.",
      work: "Reestructuración drástica y disruptiva. Es el momento de demoler un proceso obsoleto, reescribir de cero una arquitectura que tenía parches sobre parches o dar un golpe de mesa que cambie las reglas del juego comercial. De la caída del método viejo nace tu innovación más potente.",
      money: "Movimiento brusco que exige reflejos rápidos y liquidez limpia: evitá sostener negocios deficitarios por mero orgullo ('costo hundido'). Cortar a tiempo una estructura que pierde plata libera hoy tu capital para la verdadera oportunidad.",
      spirit: "Iluminación por el Rayo de Marte y de Kether: la experiencia mística directa que barre en un segundo años de teorías prestadas y te deja cara a cara con lo Real.",
      healthAndEnergy: "Descarga muscular, febril o nerviosa que libera toxinas acumuladas (Marte). Rige la musculatura estriada, la bilis, los glóbulos rojos y el reflejo de acción; el ejercicio explosivo descarga la electricidad sobrante."
    },
    domainsVariants: [
      {
        love: "Caída total de caretas y verdades que salen a la luz de golpe para limpiar el aire. En una relación sólida pero estancada en la rutina, actúa como una sacudida sincera o un flechazo de realidad que obliga a hablar sin filtro y refundar el vínculo sobre bases cien por ciento auténticas; si algo se sostenía solo en apariencias vacías, el rayo te libera para que no pierdas un día más.",
        work: "Reestructuración drástica y disruptiva. Es el momento de demoler un proceso obsoleto, reescribir de cero una arquitectura que tenía parches sobre parches o dar un golpe de mesa que cambie las reglas del juego comercial. De la caída del método viejo nace tu innovación más potente.",
        money: "Movimiento brusco que exige reflejos rápidos y liquidez limpia: evitá sostener negocios deficitarios por mero orgullo ('costo hundido'). Cortar a tiempo una estructura que pierde plata libera hoy tu capital para la verdadera oportunidad.",
        spirit: "Iluminación por el Rayo de Marte y de Kether: la experiencia mística directa que barre en un segundo años de teorías prestadas y te deja cara a cara con lo Real.",
        healthAndEnergy: "Descarga muscular, febril o nerviosa que libera toxinas acumuladas (Marte). Rige la musculatura estriada, la bilis, los glóbulos rojos y el reflejo de acción; el ejercicio explosivo descarga la electricidad sobrante."
      },
      {
        love: "Si estás sin pareja, La Torre anuncia un encuentro tipo relámpago (*coup de foudre*) que rompe de un plumazo tu coraza defensiva y tus esquemas previos sobre lo que creías buscar.",
        work: "Tu competencia sigue encerrada en su torre burocrática creyendo que nada va a cambiar; vos sos el rayo disruptivo que introduce el cambio antes que nadie y toma la delantera.",
        money: "Limpieza radical de pasivos o gastos estructurales pesados que asfixiaban tu margen operativo. Quedar liviano de estructura es hoy tu mayor fortaleza financiera.",
        spirit: "El misterio de las 22 Yods de fuego cayendo del cielo: comprender que cada crisis aparente es una lluvia de gracia cabalística que fertiliza la tierra.",
        healthAndEnergy: "Alivio instantáneo de migrañas, bruxismo o contracturas dorsales apenas decís en voz alta (letra Peh) la verdad que tenías atragantada."
      },
      {
        love: "Una conversación frontal, sin rodeos ni diplomacia falsa, destraba hoy una tensión que llevaba semanas acumulando nubes negras en la casa.",
        work: "Hallazgo por 'error afortunado' o ruptura de laboratorio: al fallar el plan A rígido que habías trazado, descubrís entre los fragmentos una solución técnica o comercial infinitamente superior.",
        money: "Cuidado con las burbujas especulativas o promesas infladas de terceros; apoyá tu dinero únicamente en la roca madre de los activos reales e irrompibles.",
        spirit: "Desapego radical del personaje: reírse bajo la lluvia mientras cae el decorado de cartón, sabiendo que el Actor Inmortal es intocable.",
        healthAndEnergy: "Pico de energía marciana; ideal para trabajos físicos de demolición, orden profundo del taller o entrenamiento de alta intensidad."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Sé vos mismo el rayo hoy: derribá voluntariamente ese esquema, método o ficción que ya está agrietado antes de esperar a que se caiga solo por su propio peso.",
      prohibition: "Prohibido emparchar hoy con cinta adhesiva una pared que necesita ser tirada abajo, o callarte una verdad necesaria por miedo a sacudir el avispero.",
      psychomagicAct: "Construí sobre tu mesa una pequeña torre con cartas viejas, cajas vacías o bloques de papel que representen la limitación o estructura mental que te encerraba; mirala fijo y derribala de un solo golpe seco del canto de tu mano derecha diciendo en voz alta: 'Caiga todo artificio; quedo libre bajo el cielo de mi verdad'.",
      talismanPhrase: "Bendigo el relámpago que parte mis jaulas; sobre la roca desnuda soy invencible."
    },
    actionOracleVariants: [
      {
        command: "Sé vos mismo el rayo hoy: derribá voluntariamente ese esquema, método o ficción que ya está agrietado antes de esperar a que se caiga solo por su propio peso.",
        prohibition: "Prohibido emparchar hoy con cinta adhesiva una pared que necesita ser tirada abajo, o callarte una verdad necesaria por miedo a sacudir el avispero.",
        psychomagicAct: "Construí sobre tu mesa una pequeña torre con cartas viejas, cajas vacías o bloques de papel que representen la limitación o estructura mental que te encerraba; mirala fijo y derribala de un solo golpe seco del canto de tu mano derecha diciendo en voz alta: 'Caiga todo artificio; quedo libre bajo el cielo de mi verdad'.",
        talismanPhrase: "Bendigo el relámpago que parte mis jaulas; sobre la roca desnuda soy invencible."
      },
      {
        command: "Abrí la boca hoy (letra Peh) y pronunciá esa verdad directa, técnica o personal, que limpia el tablero de una sola vez.",
        prohibition: "No te lamentes ni un minuto por un cambio de planes imprevisto hoy; usá el espacio en blanco que dejó el derrumbe para armar algo mejor.",
        psychomagicAct: "Dibujá un rayo dorado en zigzag atravesando un papel donde hayas escrito tu bloqueo o rutina más rígida, rompelo en dieciséis pedazos de un tirón rápido y tiralos a la basura sin mirar atrás.",
        talismanPhrase: "Lo que el rayo se lleva era solo cáscara; mi fuego central queda a cielo abierto."
      },
      {
        command: "Desarmá hoy hasta los cimientos esa parte de tu proyecto o presupuesto que no te convence al cien por ciento y volvé a trazarla limpia sobre la roca.",
        prohibition: "No confundas tu valor personal con el éxito o fracaso de una estructura externa; vos sos el arquitecto, no el edificio.",
        psychomagicAct: "Aplaudí una sola vez con fuerza seca y sonora en el centro de tu habitación o taller antes de empezar a trabajar hoy, como el trueno que rompe la inercia y despierta la atmósfera.",
        talismanPhrase: "En el trueno de Marte encuentro mi libertad; nada falso resiste a mi luz."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVI descarga su relámpago en la lectura: una verdad fulminante rompe la cáscara vieja para liberar tu energía.",
      secondAppearance: "La Torre estalla por segunda vez en tu registro: estás intentando sostener con las manos una estructura que ya está partida por dentro. Soltá los ladrillos viejos hoy mismo.",
      thirdAppearance: "Tercera comparecencia del Arcano XVI: el rayo ya está sobre el tejado. Dejá de resistir la reestructuración necesaria; si abrís la puerta vos mismo, el impacto se transforma en liberación pura.",
      fourthPlusAppearance: "Trueno supremo de Peh: el Oráculo decreta demolición total de todo autoengaño. Salí inmediatamente del edificio viejo; tu nueva etapa solo puede empezar sobre terreno limpio."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "No intentes apuntalar las paredes que el rayo del destino ya partió: salí de entre los escombros y agradecé poder mirar de nuevo las estrellas.",
    counselVariants: [
      "No intentes apuntalar las paredes que el rayo del destino ya partió: salí de entre los escombros y agradecé poder mirar de nuevo las estrellas.",
      "Cuando el techo de tu casa se vuela en la tormenta, perdés la sombra tibia del comedor pero ganás de golpe la vista entera de la Vía Láctea.",
      "Solo teme al terremoto aquel que edificó sobre arena y mentira; quien está parado sobre la roca viva baila con el temblor.",
      "Un segundo de verdad brutal duele menos y sana mil veces más que diez años de cortesía mentirosa.",
      "Después de cada incendio forestal de La Torre, la ceniza mineral prepara el suelo más fértil de la historia para el manantial de La Estrella."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "El Relámpago Astral en Zigzag (La Espada Flamígera)",
        secret: "El rayo de oro y plasma púrpura que desciende desde la bóveda celeste reproduce el trazado exacto del *Relámpago de la Creación* en el Árbol de la Vida (desde Kether hasta Malkuth). No es un golpe del azar ciego, sino una intervención directa de la Supraconciencia para quebrar el aislamiento del ego y reconectarlo por la fuerza de la gracia con el cosmos.",
        esotericFormula: "Relámpago de Kether + Fuego de Marte = Despertar Satori Instantáneo",
        meditationPrompt: "¿Qué verdad fulminante has comprendido en estos días que demolió una vieja suposición tuya?"
      },
      {
        id: "n2",
        x: 72,
        y: 34,
        title: "La Corona de Oro Destronada",
        secret: "En el ángulo superior derecho vuela desprendida la corona almenada que tapaba la boca de la torre. Simboliza al Rey Falso (la arrogancia intelectual del pequeño Yo que creía tener todo controlado y encerrado). Al saltar la corona como el corcho de un alambique a presión, el edificio deja de ser una tumba cerrada y vuelve a comunicarse con el cielo.",
        esotericFormula: "Destronamiento del Ego Rígido = Apertura del Chakra Coronario",
        meditationPrompt: "¿En qué asunto actual te conviene soltar hoy el orgullo de 'tener razón' para ganar la libertad de ver algo nuevo?"
      },
      {
        id: "n3",
        x: 34,
        y: 72,
        title: "Las Veintidós Chispas de Oro y la Roca Madre",
        secret: "Alrededor de la torre fracturada caen veintidós esferas y lenguas de fuego (las 22 letras del alfabeto hebreo sagrado y los 22 Arcanos Mayores), mientras el basamento de obsidiana en la base permanece intacto. Revela que el derrumbe afecta únicamente a los muros artificiales construidos por el miedo, jamás a la roca eterna de tu espíritu ni a las chispas divinas de tu talento.",
        esotericFormula: "22 Yods de Luz + Roca Basal Intacta = Reconstrucción sobre Verdad Pura",
        meditationPrompt: "Cuando cae todo lo accesorio y cosmético en tu proyecto o en tu vida, ¿cuál es la roca madre indestructible que siempre queda en pie?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XVII • LA ESTRELLA (TZADDI • EL MANANTIAL DEL COSMOS)
  // ==========================================================================
  {
    id: 17,
    numeral: "XVII",
    name: "La Estrella",
    subtitle: "El Manantial del Cosmos",
    palette: {
      primary: "#38bdf8",
      secondary: "#fde047",
      glow: "rgba(56, 189, 248, 0.6)"
    },
    archetype: "star",
    correspondences: {
      element: "Aire Fijo Acuariano / Rocío Astral Cristalino",
      astro: "Acuario • El Aguador Celeste (Saturno Nocturno e Iluminación Uraniana)",
      hebrewLetter: "Tzaddi (צ) • El Anzuelo Sagrado de la Meditación que pesca las Chispas de Luz",
      treeOfLifePath: "Sendero 28 • Conecta Netzach (La Belleza y el Arte de Venus) con Yesod (El Espejo Lunar)",
      alchemy: "Cibatio Astralis y Ros Coeli • La nutrición de la Tierra lavada con el Rocío de las Estrellas",
      hermeticAxiom: "Cuando la Torre de las máscaras cae en polvo, la Doncella desnuda de la Verdad vierte sin agotarse jamás el agua de la inmortalidad.",
      jungianArchetype: "El Anima Pura y Estelar, la Esperanza Ontológica y la Conexión con el Cosmos",
      tarotTiming: "Enero-Febrero (Acuario), noches despejadas o bendición que fluye de forma continua",
      yesNo: "Sí luminoso (éxito inspirado, protección astral, sanación y norte verdadero)",
      keywords: [
        "propósito estelar",
        "inspiración cristalina",
        "gracia y sanación",
        "verdad sin máscaras",
        "manantial inagotable",
        "sirio de ocho puntas",
        "buena estrella"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "La tormenta de La Torre ya pasó y el aire de la noche quedó limpio como un diamante. Mirame arrodillada junto al estanque: no llevo armadura, ni corona, ni velo, porque quien camina en su verdad desnuda bajo la estrella de Sirio no tiene nada que ocultar ni nada que temer.",
    oracleVoiceVariants: [
      "La tormenta de La Torre ya pasó y el aire de la noche quedó limpio como un diamante. Mirame arrodillada junto al estanque: no llevo armadura, ni corona, ni velo, porque quien camina en su verdad desnuda bajo la estrella de Sirio no tiene nada que ocultar ni nada que temer.",
      "Verté el agua de tus dos ánforas sin miedo a quedarte seco. El avaro guarda su talento en un pozo cerrado hasta que se pudre; yo derramo todo mi caudal sobre la tierra y el río porque mis cántaros están conectados directamente al océano de las estrellas.",
      "Sobre mi cabeza arde la Estrella Octogonal del Espíritu rodeada por las siete luminarias de los planetas. Aunque hoy estés sembrando de noche en tu taller, tu norte está trazado con geometría celeste y el amanecer es inevitable.",
      "Mi letra sagrada es Tzaddi, el anzuelo silencioso del meditador. Soltá la ansiedad del cazador que corre a los gritos; sumergí tu mente en la paz del estanque y la inspiración maestra vendrá sola a morder tu anzuelo.",
      "Un pie mío acaricia la superficie del agua sin hundirse y mi rodilla descansa en la tierra viva donde canta el pájaro Ibis de Thoth. Hoy el cosmos entero firma un pacto de gracia con tu obra."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Estrella (Arcano XVII) es el faro de la Esperanza Fundada, la Inspiración Celeste y la Gracia Regeneradora que amanece tras la catarsis de La Torre. En el Árbol de la Vida gobierna el Sendero 28 de la letra Tzaddi (el Anzuelo de la Meditación), uniendo la esfera artística y pasional de Netzach con el espejo etérico de Yesod bajo el signo visionario de Acuario. Su aparición en tu lectura certifica que estás bajo la protección directa de tu 'buena estrella': se abren los canales de la genialidad creativa, se curan las heridas recientes, recuperás la fe inquebrantable en tu vocación y encontrás el rumbo exacto hacia tu futuro más luminoso.",
    meaningVariants: [
      "La Estrella (Arcano XVII) es el faro de la Esperanza Fundada, la Inspiración Celeste y la Gracia Regeneradora que amanece tras la catarsis de La Torre. En el Árbol de la Vida gobierna el Sendero 28 de la letra Tzaddi (el Anzuelo de la Meditación), uniendo la esfera artística y pasional de Netzach con el espejo etérico de Yesod bajo el signo visionario de Acuario. Su aparición en tu lectura certifica que estás bajo la protección directa de tu 'buena estrella': se abren los canales de la genialidad creativa, se curan las heridas recientes, recuperás la fe inquebrantable en tu vocación y encontrás el rumbo exacto hacia tu futuro más luminoso.",
      "En la astronomía esotérica egipcia y hermética, la gran estrella de ocho puntas que corona este Arcano es *Sothis* (Sirio, el Sol espiritual detrás de nuestro Sol), cuya aparición helíaca anunciaba cada año el desborde fertilizante del Nilo tras la sequía. En tu vida práctica y comercial, esto anuncia el fin de toda aridez: una corriente fresca de ideas, clientes, belleza y recursos comienza a regar tu tierra.",
      "Observá la diferencia entre las dos jarras de La Templanza (Arcano XIV) y las dos ánforas de La Estrella (Arcano XVII): mientras La Templanza trasvasaba el líquido de una copa a la otra para conservarlo y medirlo, la Doncella de La Estrella vierte ambas ánforas abiertamente hacia afuera —una en el agua de la memoria colectiva y otra en la tierra de los hechos concretos—. Es la ley de la abundancia acuariana: cuanto más entregás tu arte y tu luz al mundo, más rápido se llenan tus cántaros desde el éter.",
      "Alquímicamente, el Arcano XVII representa la *Cibatio* por el *Ros Coeli* (el Rocío de Mayo que los alquimistas recogían al alba bajo las estrellas para lavar la Piedra). Indica que tu proyecto o tu alma acaba de atravesar una purificación profunda y ahora posee una transparencia, una autenticidad y un brillo estético que ningún artificio competidor puede imitar.",
      "Numéricamente, el Diecisiete (1 + 7 = 8) eleva la fuerza y el infinito del Ocho (La Fuerza) al plano estelar. Ya no necesitás luchar ni defenderte: entrás en un estado de alineación magnética donde tu talento natural brilla como un faro en la costa y atrae hacia tu puerto a quienes buscan verdad y excelencia."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología profunda de Jung, La Estrella representa la aparición del *Anima Luminosa* (Sophia) y la restauración de la confianza ontológica tras una crisis del Yo. Después de que La Torre derribó las falsas máscaras, el individuo experimenta la bendición de la desnudez psíquica: ya no tiene que gastar energía fingiendo un personaje. Tu mente hoy alcanza una serenidad cristalina donde la intuición estética y la visión de futuro fluyen sin interferencias del miedo.",
    psycheVariants: [
      "En la psicología profunda de Jung, La Estrella representa la aparición del *Anima Luminosa* (Sophia) y la restauración de la confianza ontológica tras una crisis del Yo. Después de que La Torre derribó las falsas máscaras, el individuo experimenta la bendición de la desnudez psíquica: ya no tiene que gastar energía fingiendo un personaje. Tu mente hoy alcanza una serenidad cristalina donde la intuición estética y la visión de futuro fluyen sin interferencias del miedo.",
      "Este Arcano distingue entre el 'optimismo ingenuo' (negar la realidad esperando que todo se arregle por arte de magia) y la *Esperanza Iniciática* de Acuario: la certeza fría y serena de quien ya vio el plano arquitectónico del futuro en el cielo astral y trabaja cada día con alegría para bajarlo a la tierra.",
      "La letra Tzaddi ('anzuelo') es según el *Sefer Yetzirah* el órgano de la Meditación. Psicológicamente, esto señala que las mejores soluciones para tu etapa actual no vendrán del estrés analítico, sino de los estados de contemplación relajada (ondas alfa y theta): cuando mirás el horizonte o trabajás en silencio rítmico, la idea genial emerge sola del fondo del estanque.",
      "Las siete estrellas menores alrededor de la estrella central de ocho puntas simbolizan la armonización de tus siete centros neuroendocrinos (chakras). La ansiedad se disipa y sentís que tu cuerpo, tu mente y tu vocación vuelven a latir en la misma frecuencia cósmica."
    ],

    lightAndShadow: "Al derecho (En Luz): Inspiración sublime, esperanza fundada, sanación física y emocional, autenticidad magnética, éxito artístico o innovador y guía estelar certera. Invertida (En Sombra): Pesimismo pasajero tras un golpe, desconexión de la propia musa, idealismo en las nubes sin bajar a tierra o síndrome de agotamiento.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Inspiración sublime, esperanza fundada, sanación física y emocional, autenticidad magnética, éxito artístico o innovador y guía estelar certera. Invertida (En Sombra): Pesimismo pasajero tras un golpe, desconexión de la propia musa, idealismo en las nubes sin bajar a tierra o síndrome de agotamiento.",
      "En Luz, La Estrella es el manantial de montaña que nunca se seca porque bebe de los glaciares eternos; en Sombra, es el caminante sediento que mira el barro de sus botas y olvida levantar la cabeza hacia Sirio.",
      "Luz activa: Diseño inspirado, paz interior profunda, generosidad que multiplica el retorno y visión de vanguardia. Sombra latente: Soñar despierto sin clavar la rodilla en la tierra práctica."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Amor transparente, libre de posesividad y lleno de ternura reparadora. Después de cualquier tormenta, trae reconciliación sincera, desnudez del alma sin miedo al juicio y una conexión espiritual y de amistad profunda que ilumina el futuro de los dos; si estás libre, anuncia un vínculo fresco, luminoso y profundamente afín a tus ideales.",
      work: "Cúspide absoluta para el arte, el diseño de marca, la innovación tecnológica, la botánica, la creación de universos visuales y todo proyecto con visión de futuro (Acuario). Tu obra adquiere un encanto poético y una originalidad que destacan como un faro en el mercado.",
      money: "Flujo continuo y generoso que llega como consecuencia natural de hacer un trabajo extraordinario y compartir valor real. Invertir hoy en innovación, estética o expansión digital tiene estrella ganadora.",
      spirit: "Canalización directa de la Luz Astral superior; comunión con las inteligencias celestes y certeza absoluta de estar cumpliendo tu verdadero Dharma en la tierra.",
      healthAndEnergy: "Rejuvenecimiento celular, paz del sistema nervioso, oxigenación de la sangre y fluidez circulatoria en piernas y tobillos (Acuario). La hidroterapia, el aire puro de la noche y el contacto con la naturaleza obran curaciones rápidas."
    },
    domainsVariants: [
      {
        love: "Amor transparente, libre de posesividad y lleno de ternura reparadora. Después de cualquier tormenta, trae reconciliación sincera, desnudez del alma sin miedo al juicio y una conexión espiritual y de amistad profunda que ilumina el futuro de los dos; si estás libre, anuncia un vínculo fresco, luminoso y profundamente afín a tus ideales.",
        work: "Cúspide absoluta para el arte, el diseño de marca, la innovación tecnológica, la botánica, la creación de universos visuales y todo proyecto con visión de futuro (Acuario). Tu obra adquiere un encanto poético y una originalidad que destacan como un faro en el mercado.",
        money: "Flujo continuo y generoso que llega como consecuencia natural de hacer un trabajo extraordinario y compartir valor real. Invertir hoy en innovación, estética o expansión digital tiene estrella ganadora.",
        spirit: "Canalización directa de la Luz Astral superior; comunión con las inteligencias celestes y certeza absoluta de estar cumpliendo tu verdadero Dharma en la tierra.",
        healthAndEnergy: "Rejuvenecimiento celular, paz del sistema nervioso, oxigenación de la sangre y fluidez circulatoria en piernas y tobillos (Acuario). La hidroterapia, el aire puro de la noche y el contacto con la naturaleza obran curaciones rápidas."
      },
      {
        love: "Mostrate exactamente como sos, sin coraza ni pose: tu vulnerabilidad serena y tu autenticidad son hoy el imán más poderoso para el corazón del otro.",
        work: "La musa baja a tu taller: esa identidad visual, ese aroma, esa mecánica de juego o esa línea de productos que buscabas diseñar aparece hoy en tu mente con nitidez cristalina.",
        money: "Economía de manantial (y no de cisterna estancada): el dinero circula con gracia, permitiéndote cubrir tus necesidades con holgura y financiar tus sueños de largo plazo.",
        spirit: "Meditación bajo la bóveda nocturna: sintonizar con la estrella guía de tu destino y recordar que nunca caminás solo.",
        healthAndEnergy: "Limpieza linfática y renal profunda; beber agua mineral bendecida por tu intención y respirar aire fresco al amanecer multiplica tu vitalidad."
      },
      {
        love: "Un vínculo basado en la admiración mutua y la libertad acuariana: dos espíritus que no se atan con cadenas, sino que eligen volar juntos hacia la misma constelación.",
        work: "Prestigio y buena estrella pública: tu nombre o tu marca empieza a ser asociado con calidad pura, inspiración y confianza, atrayendo oportunidades sin necesidad de forzar la venta.",
        money: "Retorno inesperado de una semilla que sembraste con generosidad en el pasado; la ley de reciprocidad cósmica te devuelve multiplicado lo que diste.",
        spirit: "El canto del pájaro Ibis en el árbol: la unión perfecta entre la sabiduría hermética de Thoth y la frescura viva de la naturaleza.",
        healthAndEnergy: "Armonía bioeléctrica y sueño profundamente reparador lleno de imágenes luminosas y respuestas creativas."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Volcá hoy toda tu inspiración y tus mejores ideas en la obra sin guardarte nada 'para más adelante': confiá en que tu manantial creativo es inagotable.",
      prohibition: "Prohibido hablar desde el cinismo, esconder tu talento por falsa modestia o dudar de la viabilidad de tu sueño más alto.",
      psychomagicAct: "Salí esta noche a mirar el cielo abierto (o parate frente a una ventana hacia el firmamento) con dos vasos de agua pura en tus manos; verté el primero en la tierra de una planta o jardín para alimentar tus raíces materiales, y bebé el segundo mirando la estrella más brillante mientras decís: 'Bebo la luz de mi destino; soy canal inagotable del cosmos'.",
      talismanPhrase: "La Estrella de Ocho Puntas arde sobre mi frente; mis cántaros jamás se agotan porque el universo fluye por mis manos."
    },
    actionOracleVariants: [
      {
        command: "Volcá hoy toda tu inspiración y tus mejores ideas en la obra sin guardarte nada 'para más adelante': confiá en que tu manantial creativo es inagotable.",
        prohibition: "Prohibido hablar desde el cinismo, esconder tu talento por falsa modestia o dudar de la viabilidad de tu sueño más alto.",
        psychomagicAct: "Salí esta noche a mirar el cielo abierto (o parate frente a una ventana hacia el firmamento) con dos vasos de agua pura en tus manos; verté el primero en la tierra de una planta o jardín para alimentar tus raíces materiales, y bebé el segundo mirando la estrella más brillante mientras decís: 'Bebo la luz de mi destino; soy canal inagotable del cosmos'.",
        talismanPhrase: "La Estrella de Ocho Puntas arde sobre mi frente; mis cántaros jamás se agotan porque el universo fluye por mis manos."
      },
      {
        command: "Alineá hoy tu trabajo diario con tu visión a cinco años: asegurate de que cada paso práctico que des hoy apunte directamente hacia tu Estrella Polar.",
        prohibition: "No permitas que una tormenta pasada (La Torre) te haga cerrar el corazón o trabajar con miedo; el terreno ya quedó limpio para que brilles.",
        psychomagicAct: "Dibujá una estrella de ocho puntas en oro o amarillo en el centro de una hoja blanca, rodeala con siete puntos pequeños y colocala a la vista en tu estudio como ancla de inspiración estética y protección astral.",
        talismanPhrase: "Camino desnudo de artificios bajo la gracia de Sirio; todo lo que siembro hoy florece en luz."
      },
      {
        command: "Hacé hoy un acto de generosidad creativa o estética: entregá en tu producto o en tu trato un destello de belleza extra que nadie esperaba recibir.",
        prohibition: "No ensucies el agua de tu mente hoy consumiendo quejas, noticias tóxicas o pesimismo ajeno.",
        psychomagicAct: "Lavate el rostro y la nuca con agua bien fresca antes de iniciar tu tarea creativa principal de hoy, visualizando que el rocío estelar limpia cualquier resto de cansancio y abre tu tercer ojo.",
        talismanPhrase: "Mi mente es el estanque cristalino donde el firmamento refleja sus obras maestras."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XVII enciende el firmamento en tu lectura: tras la tormenta se abre un ciclo de gracia, inspiración pura y norte verdadero.",
      secondAppearance: "La Estrella brilla por segunda vez en tu registro: el Oráculo te confirma que estás exactamente en el camino correcto; no dejes que una duda pasajera nuble tu fe en la obra.",
      thirdAppearance: "Tercera comparecencia del Arcano XVII: tenés una conexión astral y creativa extraordinariamente abierta en estos días. Bajá a tierra y plasmá ya las ideas que estás recibiendo.",
      fourthPlusAppearance: "Bendición mayor de Tzaddi: Sirio preside tu etapa actual de forma inapelable. Entregate de lleno a tu vocación más alta sabiendo que contás con el respaldo total del cosmos."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Verté tus dones al mundo sin temor a quedarte vacío: tus cántaros están conectados directamente al manantial inagotable del cosmos.",
    counselVariants: [
      "Verté tus dones al mundo sin temor a quedarte vacío: tus cántaros están conectados directamente al manantial inagotable del cosmos.",
      "El navegante que fija su brújula en una estrella eterna jamás se pierde por más que cambien las olas del mar.",
      "No tengas miedo de haber perdido el techo viejo en la tormenta: era la única forma de que pudieras ver la constelación que lleva tu nombre.",
      "La verdadera belleza no necesita disfraces ni armaduras; brilla desnuda con la serenidad de quien sabe quién es.",
      "Regá simultáneamente la tierra firme de tus cuentas y el río vivo de tus sueños: de esa doble corriente brota el árbol inmortal."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "La Gran Estrella de Ocho Puntas (Sirio) y las Siete Luminarias",
        secret: "En el cenit del firmamento resplandece el Octograma de oro y diamante —Sirio, el Sol espiritual de los iniciados y la regeneración del número 8— escoltado por siete estrellas menores que representan los siete planetas sagrados y los siete chakras encendidos. Es el mapa celeste del destino superior que guía al caminante cuando todas las luces artificiales del mundo se han apagado.",
        esotericFormula: "1 Estrella Central (Espíritu Octogonal) + 7 Astros (Los Siete Centros) = Armonía Cósmica",
        meditationPrompt: "¿Cuál es la Estrella Polar —el propósito más puro y alto— que hoy le da dirección a todos tus esfuerzos?"
      },
      {
        id: "n2",
        x: 30,
        y: 58,
        title: "Las Dos Ánforas de Oro y Plata Vertiendo el Éter",
        secret: "La Doncella Celeste sostiene dos cántaros inagotables: con el ánfora de plata vierte agua sobre el estanque (nutriendo el alma colectiva y la intuición), y con el ánfora de oro riega la tierra seca donde se divide en cinco arroyos (vivificando los cinco sentidos y la obra material). Revela que la inspiración espiritual debe regar siempre la tierra práctica.",
        esotericFormula: "Ánfora Lunar (Al Agua) + Ánfora Solar (A la Tierra en 5 Ríos) = Fecundidad Inagotable",
        meditationPrompt: "¿Qué talento o creación estás listo para derramar hoy generosamente al mundo sin miedo a que se agote?"
      },
      {
        id: "n3",
        x: 66,
        y: 76,
        title: "El Pie sobre el Estanque Espejado y la Rodilla en Tierra",
        secret: "Su rodilla izquierda se apoya firmemente en la roca fértil mientras la punta de su pie derecho descansa sobre la superficie líquida del estanque sin hundirse ni enturbiarla. Simboliza el equilibrio supremo del signo de Acuario: tener el sustento bien arraigado en la realidad física mientras tu espíritu camina liviano sobre las aguas del subconsciente.",
        esotericFormula: "Rodilla en Tierra (Arraigo Real) + Pie sobre el Agua (Paz Mental) = Maestría de Tzaddi",
        meditationPrompt: "¿Cómo podés mantener hoy la mente tan serena como un estanque sin viento para reflejar sin distorsión tu próxima gran idea?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR • VOLUMEN V (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initSolarGrimoireVolume5() {
  window.DATOS_SOL_5 = DATOS_SOL_5;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_5.forEach(function (card) {
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
  DATOS_SOL_5.forEach(function (solarCard) {
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
// ============================================================================
// ARCHIVO: datos_sol_2.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN II: ARCANOS III, IV, V y VI
// III • La Emperatriz | IV • El Emperador | V • El Hierofante | VI • Los Enamorados
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_2 = [
  // ==========================================================================
  // ARCANO III • LA EMPERATRIZ (DALETH • LA SOBERANA DE LA MATRIZ VIVA)
  // ==========================================================================
  {
    id: 3,
    numeral: "III",
    name: "La Emperatriz",
    subtitle: "Soberana de la Abundancia Viva",
    palette: {
      primary: "#eab308",
      secondary: "#10b981",
      glow: "rgba(234, 179, 8, 0.58)"
    },
    archetype: "empress",
    correspondences: {
      element: "Tierra Fecunda / Fuego Verde de la Naturaleza",
      astro: "Venus • Señora del Magnetismo, la Belleza y la Generación",
      hebrewLetter: "Daleth (ד) • La Puerta del Templo por donde el Espíritu encarna en Forma",
      treeOfLifePath: "Sendero 14 • El puente luminoso horizontal que une Chokmah (Sabiduría) con Binah (Entendimiento)",
      alchemy: "Multiplicatio y Cibatio • La fermentación dorada que multiplica el peso y la virtud de la Piedra",
      hermeticAxiom: "La Naturaleza se regocija en la Naturaleza, la Naturaleza vence a la Naturaleza y la Naturaleza domina a la Naturaleza.",
      jungianArchetype: "La Gran Madre Creadora (Anima Mundi), Deméter-Afrodita y el Eros Vivificador",
      tarotTiming: "Primavera, viernes venusinos, o un ciclo orgánico de 3 semanas a 3 meses de maduración",
      yesNo: "Sí generoso (promete crecimiento, cosecha tangible y expansión placentera)",
      keywords: [
        "abundancia magnética",
        "fertilidad creadora",
        "soberanía sensorial",
        "prosperidad orgánica",
        "belleza encarnada",
        "gravitación venusina",
        "cosecha dorada"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirame bien: la espiga de trigo no forcejea contra el barro para crecer, ni el sol pide disculpas por dorar el campo. Cuando habitás tu propio valor con deleite real, la riqueza del mundo gravita hacia tu mesa por ley de peso específico.",
    oracleVoiceVariants: [
      "Mirame bien: la espiga de trigo no forcejea contra el barro para crecer, ni el sol pide disculpas por dorar el campo. Cuando habitás tu propio valor con deleite real, la riqueza del mundo gravita hacia tu mesa por ley de peso específico.",
      "Soy Daleth, la Puerta ancha por donde los planos invisibles de La Sacerdotisa toman sangre, perfume, textura y moneda. Dejá de tratar tu cuerpo y tu placer como culpables; la materia es el vestido de gala del espíritu.",
      "El que persigue con hambre desesperada espanta a la presa; el que cultiva un jardín espléndido ve llegar las abejas y los pájaros sin llamarlos. Embellecé hoy tu obra y dejá que tu propio magnetismo cierre el trato.",
      "Bajo mi corona de doce estrellas nada nace por escasez ni por látigo. Si querés que tu proyecto dé fruto al ciento por uno, primero tenés que enamorarte visceralmente de lo que estás construyendo.",
      "No confundas sacrificio estéril con mérito. La tierra negra convierte la podredumbre del invierno en rosas y granadas: entregame tu fatiga vieja y yo te devolveré una cosecha que no cabrá en tus graneros."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Emperatriz (Arcano III) es la síntesis viviente de la Tríada Superior y la soberana del Sendero 14 de Daleth, el canal que une al Padre Ígneo (Chokmah) con la Madre Arquitecta (Binah). Si El Mago aportó la chispa de la intención y La Sacerdotisa incubó el plano en el silencio del claustro, La Emperatriz rompe la cáscara y hace brotar la vida con exuberancia imparable. Su presencia en tu tirada anuncia una etapa de fecundidad extraordinaria, prosperidad material, desbloqueo creativo y plenitud sensorial. Tus ideas dejan de ser esquemas abstractos en un papel para encarnar en productos tangibles, ingresos reales, obras con alma y vínculos llenos de savia.",
    meaningVariants: [
      "La Emperatriz (Arcano III) es la síntesis viviente de la Tríada Superior y la soberana del Sendero 14 de Daleth, el canal que une al Padre Ígneo (Chokmah) con la Madre Arquitecta (Binah). Si El Mago aportó la chispa de la intención y La Sacerdotisa incubó el plano en el silencio del claustro, La Emperatriz rompe la cáscara y hace brotar la vida con exuberancia imparable. Su presencia en tu tirada anuncia una etapa de fecundidad extraordinaria, prosperidad material, desbloqueo creativo y plenitud sensorial. Tus ideas dejan de ser esquemas abstractos en un papel para encarnar en productos tangibles, ingresos reales, obras con alma y vínculos llenos de savia.",
      "Cuando la Soberana de Venus preside tu consulta, el universo te revela el secreto de la gravitación magnética frente al empuje muscular. La fuerza marciana conquista por asalto y se agota; la potencia venusina de La Emperatriz conquista por seducción, calidad estética y excelencia nutritiva. En lugar de desgastarte golpeando puertas cerradas, elevá el encanto, el aroma, el diseño y la sustancia de lo que ofrecés: el mercado y los afectos vendrán hacia tu centro como el hierro hacia el imán.",
      "En la numerología pitagórica y cabalística, el Tres es el primer número que posee superficie real (el triángulo equilátero), superando la polaridad estática del Dos. Esto significa que un dilema o estancamiento que venías arrastrando se resuelve hoy mediante el nacimiento de un tercer elemento creativo: una nueva línea de productos, una obra original, un hijo simbólico o literal, o una síntesis brillante que destraba la abundancia.",
      "Alquímicamente, el Arcano III gobierna la *Multiplicatio*: el momento en que la Piedra Filosofal, nutrida con el rocío lunar y el calor solar, multiplica su alcance y su riqueza. No es tiempo de austeridad temerosa ni de achicar el presupuesto mental; estás en un ciclo donde la generosidad inteligente, el buen gusto y la inversión en calidad devuelven dividendos multiplicados.",
      "En el misterio esotérico del Tarot, La Emperatriz es la *Natura Naturans* (la Naturaleza Creatriz). Ella te recuerda que la prosperidad económica y el goce de los cinco sentidos no son obstáculos para la iluminación espiritual, sino su confirmación en la tierra. Quien desprecia la materia insulta al Arquitecto que la diseñó; honrá tu mesa, tu vestidura, tu taller y tu cuerpo como el altar vivo de tu fortuna."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En el análisis junguiano, La Emperatriz viene a curar la escisión ascética entre el espíritu y el instinto, desactivando la 'culpa por el merecimiento'. Muchas veces el inconsciente sabotea el éxito financiero o el placer amoroso por lealtad ciega a un linaje familiar que asociaba el valor moral con el sufrimiento duro. Hoy tu psique te autoriza a prosperar sin pedir perdón y a crear desde el deleite en vez de crear desde la agonía.",
    psycheVariants: [
      "En el análisis junguiano, La Emperatriz viene a curar la escisión ascética entre el espíritu y el instinto, desactivando la 'culpa por el merecimiento'. Muchas veces el inconsciente sabotea el éxito financiero o el placer amoroso por lealtad ciega a un linaje familiar que asociaba el valor moral con el sufrimiento duro. Hoy tu psique te autoriza a prosperar sin pedir perdón y a crear desde el deleite en vez de crear desde la agonía.",
      "Este Arcano ilumina tu relación con la matriz materna y con tu propia capacidad de autocuidado. Preguntate con rigor: ¿estás tratando a tus proyectos y a tu cuerpo como un capataz impaciente que exige rendimiento continuo, o como un jardinero sabio que conoce la ley del riego, el abono y el descanso? La verdadera hiperproductividad nace de la vitalidad desbordante, no del agotamiento nervioso.",
      "Cuando el arquetipo de la Gran Madre se activa en Luz, disuelve la ansiedad de escasez (el miedo ancestral a que no alcance el alimento o el afecto). Tu sistema nervioso necesita registrar abundancia física real para operar en su octava genial: rodeate de materiales nobles, orden estético y estímulos sensoriales que le confirmen a tu inconsciente que habitás en la opulencia del ser.",
      "Vigilá la única sombra sutil del arquetipo: el apego posesivo a la propia creación. La Emperatriz gesta, nutre y da a luz con amor apasionado, pero sabe cortar el cordón umbilical a tiempo para que la obra camine sola por el mundo y genere su propio destino."
    ],

    lightAndShadow: "Al derecho (En Luz): Abundancia económica sostenida, fertilidad creativa desbordante, plenitud sensual y afectiva, magnetismo comercial irresistible y cosecha generosa. Invertida (En Sombra): Bloqueo creativo por ansiedad, derroche vanidoso, dependencia afectiva o sobreprotección asfixiante.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Abundancia económica sostenida, fertilidad creativa desbordante, plenitud sensual y afectiva, magnetismo comercial irresistible y cosecha generosa. Invertida (En Sombra): Bloqueo creativo por ansiedad, derroche vanidoso, dependencia afectiva o sobreprotección asfixiante.",
      "En Luz, La Emperatriz es la primavera inagotable que embellece y multiplica cuanto toca; en Sombra, es la selva sin poda que ahoga sus propios brotes por exceso de apego o pereza sensorial.",
      "Luz activa: Diseño sublime, carisma cálido, riqueza material bien disfrutada y fecundidad de ideas. Sombra latente: Postergar la acción esperando comodidad absoluta o medir el propio valor solo por las posesiones externas."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Calidez envolvente, magnetismo erótico alto y plenitud afectiva. En pareja, augura una etapa de goce compartido, embellecimiento del hogar o gestación de hijos y proyectos conjuntos; si estás sin pareja, tu propio esplendor vital y alegría de vivir atraen propuestas sin que tengas que salir a cazar.",
      work: "Cosecha extraordinaria en manufactura, comercio, diseño, arte, botánica, destilación, gastronomía o desarrollo de marcas con identidad sensorial. El público se enamora de la presentación y la nobleza de tu producto.",
      money: "Flujo abundante, expansión patrimonial y retorno generoso de inversiones previas. Es un momento propicio para elevar el valor percibido de tu oferta y cobrar lo que tu calidad realmente vale.",
      spirit: "Mística de la Inmanencia: descubrir el rostro de lo divino en la geometría de una flor, en el placer de los sentidos despiertos y en el acto sagrado de dar vida a una obra.",
      healthAndEnergy: "Fuerte vitalidad hormonal, dérmica y celular. El contacto directo con la tierra, el sol de la mañana, los aromas botánicos y la nutrición viva recargan tu campo áurico de inmediato."
    },
    domainsVariants: [
      {
        love: "Calidez envolvente, magnetismo erótico alto y plenitud afectiva. En pareja, augura una etapa de goce compartido, embellecimiento del hogar o gestación de hijos y proyectos conjuntos; si estás sin pareja, tu propio esplendor vital y alegría de vivir atraen propuestas sin que tengas que salir a cazar.",
        work: "Cosecha extraordinaria en manufactura, comercio, diseño, arte, botánica, destilación, gastronomía o desarrollo de marcas con identidad sensorial. El público se enamora de la presentación y la nobleza de tu producto.",
        money: "Flujo abundante, expansión patrimonial y retorno generoso de inversiones previas. Es un momento propicio para elevar el valor percibido de tu oferta y cobrar lo que tu calidad realmente vale.",
        spirit: "Mística de la Inmanencia: descubrir el rostro de lo divino en la geometría de una flor, en el placer de los sentidos despiertos y en el acto sagrado de dar vida a una obra.",
        healthAndEnergy: "Fuerte vitalidad hormonal, dérmica y celular. El contacto directo con la tierra, el sol de la mañana, los aromas botánicos y la nutrición viva recargan tu campo áurico de inmediato."
      },
      {
        love: "El amor bajo la regencia de Venus pide presencia física, caricias reales y celebración cotidiana. Dejá de analizar la relación en un pizarrón mental y compartí un banquete, un viaje o una noche libre de relojes.",
        work: "Tu capacidad creativa está en su pico anual. Si estabas buscando la vuelta estética, el envase, la interfaz o el relato perfecto para diferenciar tu negocio de la competencia gris, hoy la musa te entrega la fórmula servida.",
        money: "Multiplicación orgánica del capital: un cliente satisfecho trae a tres más, y una línea de trabajo bien cuidada empieza a dar frutos constantes como un árbol frutal maduro.",
        spirit: "Sanación del linaje femenino y reconciliación profunda con la Madre Tierra; bendecir la prosperidad material como una aliada de tu libertad espiritual.",
        healthAndEnergy: "Excelente capacidad de regeneración tisular y descanso reparador; cuidá tu garganta y zona lumbar mediante el movimiento fluido y el disfrute sin tensiones."
      },
      {
        love: "Atracción por gravitación pura: cuando dejás de mendigar migajas de atención y te sentás en tu propio trono de abundancia interior, solo pueden acercarse a tu vida quienes están a la altura de tu generosidad.",
        work: "Liderazgo nutritivo y carismático. Lográs que tus colaboradores, proveedores o clientes den lo mejor de sí mismos no por miedo al castigo, sino porque trabajar en tu órbita les resulta inspirador y rentable.",
        money: "Tiempo de reinvertir una fracción de tus ganancias en mejores materias primas, herramientas de primera línea o estética de marca: cada moneda puesta hoy en belleza vuelve multiplicada en prestigio.",
        spirit: "Comprensión de la Ley de la Cosecha: no se puede recoger trigo donde se sembró miedo; sembrá deleite, excelencia y gratitud en cada gesto del día.",
        healthAndEnergy: "Plenitud de los cinco sentidos; utilizá aceites esenciales, música armónica y alimentos frescos para mantener tu vibración en la octava alta de Venus."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Embellecé y elevá hoy mismo la presentación, el empaque o el entorno físico de tu trabajo principal: hacé que tu obra entre por los cinco sentidos como un objeto de deseo.",
      prohibition: "Prohibido regatear tu propio valor, hablar de crisis o trabajar hoy desde el sacrificio malhumorado.",
      psychomagicAct: "Enterrá hoy una moneda dorada junto a las raíces de una planta viva o maceta fértil de tu casa o taller, regala con agua mezclada con unas gotas de miel o azúcar y declará que tu economía crece con la misma fuerza botánica.",
      talismanPhrase: "Soy matriz de oro vivo; todo lo que toco con deleite se multiplica sin medida."
    },
    actionOracleVariants: [
      {
        command: "Embellecé y elevá hoy mismo la presentación, el empaque o el entorno físico de tu trabajo principal: hacé que tu obra entre por los cinco sentidos como un objeto de deseo.",
        prohibition: "Prohibido regatear tu propio valor, hablar de crisis o trabajar hoy desde el sacrificio malhumorado.",
        psychomagicAct: "Enterrá hoy una moneda dorada junto a las raíces de una planta viva o maceta fértil de tu casa o taller, regala con agua mezclada con unas gotas de miel o azúcar y declará que tu economía crece con la misma fuerza botánica.",
        talismanPhrase: "Soy matriz de oro vivo; todo lo que toco con deleite se multiplica sin medida."
      },
      {
        command: "Dá a luz hoy esa creación, actualización o producto que venís reteniendo en el taller por querer retocarle detalles infinitos: el mundo necesita tocarlo ya.",
        prohibition: "No postergues el cuidado de tu cuerpo ni tu placer cotidiano para 'cuando tengas éxito'; el goce presente es el imán que trae ese éxito.",
        psychomagicAct: "Prepará hoy tu mesa con tu mejor copa o vajilla —aunque comas o bebas a solas—, perfumá tu ambiente con un aroma botánico que te encante y brindá en voz alta por la cosecha que ya está en marcha.",
        talismanPhrase: "Habito en la gracia de Venus; la riqueza y la belleza acuden a mi llamado por gravitación natural."
      },
      {
        command: "Revisá tu lista de precios, propuestas o metas y subí un escalón la vara de calidad: apuntá al público o al resultado que valora la excelencia real.",
        prohibition: "No permitas que personas crónicamente quejosas o avaras de espíritu ensucien hoy el clima de tu espacio creativo.",
        psychomagicAct: "Colocá tres granos de trigo, tres hojas de laurel o una fruta fresca junto a tus herramientas de trabajo durante tres días como ofrenda simbólica a la fertilidad de tu oficio.",
        talismanPhrase: "Mi jardín interior está en flor; cosecho al ciento por uno lo que sembré con pasión."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano III abre las compuertas de Daleth: la energía de la tirada se impregna de fertilidad venusina, magnetismo sensorial y promesa de cosecha.",
      secondAppearance: "La Emperatriz vuelve a florecer en tu mesa: estás intentando resolver por la fuerza bruta o la ansiedad algo que pide seducción, diseño estético y confianza en los tiempos de la naturaleza.",
      thirdAppearance: "Tercera comparecencia del Arcano III: el fruto ya está maduro en la rama. Si seguís demorando el parto de tu obra por miedo a exponerte, la cosecha se pasará en el árbol.",
      fourthPlusAppearance: "Mandato supremo de la Soberana: el Oráculo te ordena reconciliarte de inmediato con el placer, el merecimiento y la abundancia material. Abrí las manos para recibir."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Nutrí tu cuerpo y tu entorno con belleza tangible: la abundancia del cosmos responde cuando honrás la vida con todos tus sentidos.",
    counselVariants: [
      "Nutrí tu cuerpo y tu entorno con belleza tangible: la abundancia del cosmos responde cuando honrás la vida con todos tus sentidos.",
      "No corras detrás de las mariposas hasta quedarte sin aliento: cultivá un jardín tan radiante que ellas mismas no puedan evitar posarse en tus manos.",
      "Una onza de encanto magnético y excelencia estética abre puertas que diez toneladas de fuerza bruta jamás logran mover.",
      "Recordá que todo lo que se crea desde el gozo conserva en su estructura el brillo imperecedero del oro.",
      "La tierra jamás pregunta cuántas veces falló el sembrador el año pasado; responde siempre a la calidad de la semilla que le entregás hoy."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 14,
        title: "La Diadema Astral de Doce Estrellas",
        secret: "Sobre la frente de La Emperatriz fulgura la corona de doce astros diamantinos (eco del Apocalipsis y de la Isis Cósmica). Representa el dominio armónico sobre los doce signos del Zodíaco y los doce meses del año solar: ella conoce la estación exacta para arar, sembrar, regar y cosechar sin luchar jamás contra el clima del cosmos.",
        esotericFormula: "12 Signos × 4 Estaciones = El Ritmo Infalible de la Creación",
        meditationPrompt: "¿En qué estación real se encuentra hoy tu proyecto (siembra, riego silencioso o cosecha) y cómo podés honrar ese ritmo?"
      },
      {
        id: "n2",
        x: 21,
        y: 44,
        title: "El Cetro del Orbe Coronario",
        secret: "Su mano derecha sostiene en alto el cetro rematado por el globo del mundo y la cruz solar (inversión hermética del glifo de Venus ♀). Revela que la verdadera soberanía sobre la materia no se ejerce mediante el látigo del miedo, sino elevando el deseo humano hacia la belleza y la creación espiritual.",
        esotericFormula: "Cruz de los 4 Elementos + Círculo del Espíritu = Soberanía de Venus",
        meditationPrompt: "¿Cómo podés sumar más belleza, nobleza y placer sensorial a la tarea que estás realizando hoy?"
      },
      {
        id: "n3",
        x: 74,
        y: 76,
        title: "El Escudo de Cobre y las Espigas de Oro",
        secret: "Al pie de su trono brotan las espigas maduras de Deméter junto al blasón tallado con el sello de Venus en oro y esmeralda. Simboliza la riqueza que proviene de la tierra trabajada con arte: el dinero y el prestigio que no son papel volátil, sino fruto sustancioso que alimenta tu vida y la de los tuyos.",
        esotericFormula: "Cobre de Venus transmutado en Oro Solar = Prosperidad Orgánica",
        meditationPrompt: "¿Qué talento o recurso tuyo está hoy listo para ser cosechado y monetizado sin falsas modestias?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO IV • EL EMPERADOR (HEH • EL ARQUITECTO DEL TRONO DE PIEDRA)
  // ==========================================================================
  {
    id: 4,
    numeral: "IV",
    name: "El Emperador",
    subtitle: "Arquitecto del Trono de Piedra",
    palette: {
      primary: "#f59e0b",
      secondary: "#dc2626",
      glow: "rgba(220, 38, 38, 0.58)"
    },
    archetype: "emperor",
    correspondences: {
      element: "Fuego Cardinal / Piedra Cúbica de Basalto",
      astro: "Aries • El Sol Exaltado en la Casa de Marte",
      hebrewLetter: "Heh (ה) • La Ventana de la Visión y el Primer Aliento del Nombre Sagrado",
      treeOfLifePath: "Sendero 15 • Conecta Chokmah (La Sabiduría Padre) con Tiphereth (El Sol Central)",
      alchemy: "Coagulatio y Fixatio • El Azufre Rojo fijado en la Piedra Cúbica Incorruptible",
      hermeticAxiom: "Donde la frontera es clara y el centro es firme, las fuerzas salvajes del caos se convierten en muralla.",
      jungianArchetype: "El Rey-Padre Soberano, el Logos Ordenador y la Columna Vertebral del Yo",
      tarotTiming: "Marzo-Abril (Aries), martes marciales, o consolidación estructural en 4 días / 4 semanas",
      yesNo: "Sí rotundo (a través de disciplina, orden estratégico y autoridad innegociable)",
      keywords: [
        "soberanía territorial",
        "arquitectura de sistemas",
        "liderazgo estratégico",
        "ley y frontera",
        "solidez patrimonial",
        "autodominio marcial",
        "piedra cúbica"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "La exuberancia de La Emperatriz sin mis murallas de piedra sería devorada por la primera tormenta. Trazá hoy tus fronteras con cincel de hierro, dictá tu propio código y sentate en el trono cúbico: el mundo jamás respeta a quien pide permiso para ocupar su propio territorio.",
    oracleVoiceVariants: [
      "La exuberancia de La Emperatriz sin mis murallas de piedra sería devorada por la primera tormenta. Trazá hoy tus fronteras con cincel de hierro, dictá tu propio código y sentate en el trono cúbico: el mundo jamás respeta a quien pide permiso para ocupar su propio territorio.",
      "Mirá mi armadura bajo el manto púrpura: no la llevo porque busque la guerra a cada paso, sino porque quien está siempre listo para defender su obra no necesita desenvainar la espada.",
      "Gobernar no es gritar como un tirano inseguro; gobernar es ser el único bloque de basalto que permanece inmóvil cuando todos alrededor corren presas del pánico. Sostené el timón con pulso frío.",
      "El entusiasmo te hace arrancar el lunes; solo mi arquitectura y mi método te mantienen de pie el viernes del quinto año. Dejá de depender de tus ganas del día y construí un sistema que funcione como un reloj.",
      "En mi mano derecha sostengo el Ankh de la vida y en la izquierda el Orbe del mundo. Yo soy el Padre que protege lo que ama dándole forma, ley, presupuesto y cimiento."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Emperador (Arcano IV) encarna el principio hermético de la Forma Estable, la Ley Ordenadora y la Soberanía Material. En el Árbol de la Vida gobierna el Sendero 15 de la letra Heh, proyectando el fuego creador de Chokmah sobre el centro solar de Tiphereth bajo el signo cardinal de Aries. Su aparición en tu lectura es un llamado urgente a la arquitectura, la estrategia y el mando. La inspiración suelta ya no alcanza: para que tu visión sobreviva al tiempo y escale con potencia, debés dotarla de estructura, procesos claros, contabilidad rigurosa y fronteras inexpugnables. Es el momento de asumir la jefatura absoluta de tu destino sin delegar la responsabilidad en nadie.",
    meaningVariants: [
      "El Emperador (Arcano IV) encarna el principio hermético de la Forma Estable, la Ley Ordenadora y la Soberanía Material. En el Árbol de la Vida gobierna el Sendero 15 de la letra Heh, proyectando el fuego creador de Chokmah sobre el centro solar de Tiphereth bajo el signo cardinal de Aries. Su aparición en tu lectura es un llamado urgente a la arquitectura, la estrategia y el mando. La inspiración suelta ya no alcanza: para que tu visión sobreviva al tiempo y escale con potencia, debés dotarla de estructura, procesos claros, contabilidad rigurosa y fronteras inexpugnables. Es el momento de asumir la jefatura absoluta de tu destino sin delegar la responsabilidad en nadie.",
      "Cuando el Señor de los Cuatro Carneros se sienta en tu tirada, el número Cuatro —la cruz de las direcciones cardinales y el cubo de la piedra labrada— impone su gravedad. Toda dispersión, tibieza o improvisación amateur debe ser cortada de raíz. Este Arcano augura victoria comercial, respaldo institucional, firmeza patrimonial y la capacidad de transformar un proyecto prometedor en un verdadero imperio operativo.",
      "En el laboratorio alquímico, El Emperador es el maestro de la *Coagulatio*: el arte de fijar el espíritu volátil en un cuerpo incorruptible. Muchas mentes brillantes fracasan porque viven eternamente en la nube de la posibilidad sin clavar jamás una estaca en la tierra. Hoy el Oráculo te entrega el mazo y el cincel: fijá fechas, cerrá contratos por escrito, estandarizá la fórmula y defendé tu margen con temple de acero.",
      "El secreto iniciático de este Arcano reside en la relación entre Aries (Marte) y el Sol exaltado en él: es la fuerza combativa puesta al servicio de la conciencia luminosa y protectora. El Emperador no destruye por furia ciega; conquista el desierto para levantar en él una ciudadela donde la vida, el arte y la familia puedan florecer en paz.",
      "En los antiguos misterios masónicos y herméticos, pasar de la piedra bruta a la Piedra Cúbica perfecta es el sello del Maestro Constructor. El Emperador te confirma que tenés la espalda, la experiencia y el carácter necesarios para sostener el peso de la corona: dejá de actuar como un súbdito de las circunstancias y dictá el orden del día."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la clínica junguiana, El Emperador activa el arquetipo del Rey y el Padre Interno. Su presencia te obliga a revisar tu relación inconsciente con la autoridad y la disciplina. Quien tuvo modelos de autoridad despóticos o ausentes suele oscilar entre dos trampas: rebelarse contra todo orden (boicoteando sus propias rutinas y finanzas) o volverse un tirano rígido consigo mismo. Integrar al Emperador en Luz significa descubrir que la autodisciplina no es una cárcel, sino la máxima expresión del amor propio y la libertad.",
    psycheVariants: [
      "En la clínica junguiana, El Emperador activa el arquetipo del Rey y el Padre Interno. Su presencia te obliga a revisar tu relación inconsciente con la autoridad y la disciplina. Quien tuvo modelos de autoridad despóticos o ausentes suele oscilar entre dos trampas: rebelarse contra todo orden (boicoteando sus propias rutinas y finanzas) o volverse un tirano rígido consigo mismo. Integrar al Emperador en Luz significa descubrir que la autodisciplina no es una cárcel, sino la máxima expresión del amor propio y la libertad.",
      "Este Arcano diagnostica una fuga de energía por falta de límites claros ('no saber decir que no'). Cada vez que permitís que otros invadan tu horario, regateen tu trabajo o te arrastren a sus urgencias caóticas, estás dejando las puertas de tu ciudadela sin guardia. Poner un límite seco, cortés e inamovible hoy te devolverá instantáneamente el respeto ajeno y tu paz mental.",
      "El trono cúbico del Emperador simboliza el anclaje en el Principio de Realidad. Tu psique te pide hoy dejar de lado las fantasías compensatorias o las excusas emocionales y mirar los hechos duros: números reales, métricas objetivas, tiempos de entrega y resultados tangibles. La verdad desnuda de los datos es hoy tu mejor aliada.",
      "Robert Moore y los continuadores de Jung señalan que el Rey verdadero posee dos funciones sagradas: ordenar el reino y bendecir el potencial de los suyos. No uses tu agudeza mental para aplastar tu propio entusiasmo con autocrítica feroz; usala para construir el andamio firme que sostenga tu talento."
    ],

    lightAndShadow: "Al derecho (En Luz): Liderazgo indiscutido, solidez financiera y estructural, disciplina estratégica, protección leal, palabra que vale oro y construcción de un legado firme. Invertida (En Sombra): Autoritarismo rígido, terquedad paranoica que teme perder el control, o bien debilidad de carácter, desorden crónico y falta de columna vertebral.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Liderazgo indiscutido, solidez financiera y estructural, disciplina estratégica, protección leal, palabra que vale oro y construcción de un legado firme. Invertida (En Sombra): Autoritarismo rígido, terquedad paranoica que teme perder el control, o bien debilidad de carácter, desorden crónico y falta de columna vertebral.",
      "En Luz, El Emperador es el monarca justo cuya sola presencia ordena la sala y garantiza la paz del reino; en Sombra, es el déspota inseguro que levanta muros tan altos que termina encerrado en su propia piedra.",
      "Luz activa: Sistematización impecable, dominio territorial, coraje ejecutivo y solvencia patrimonial. Sombra latente: Enfriamiento emocional por exceso de cálculo o rigidez ante los cambios necesarios."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Compromiso leal, presencia protectora y voluntad de edificar un futuro concreto juntos. En el amor, El Emperador demuestra su afecto con hechos tangibles, respaldo en las tormentas y palabra cumplida, recordándote no dejar que la coraza de las responsabilidades apague la ternura en la intimidad.",
      work: "Cúspide para la dirección de empresas, logística, distribución mayorista, industria, arquitectura de software o negociación de contratos firmes. Es hora de profesionalizar cada eslabón de tu cadena productiva y liderar el mercado con autoridad.",
      money: "Consolidación patrimonial, control estricto de costos y márgenes, e inversión en activos duros, equipamiento o infraestructura. El dinero responde hoy al orden contable y a la visión de largo plazo.",
      spirit: "La Vía del Guerrero-Rey: santificar la palabra empeñada y convertir el orden material en un reflejo terrestre de la geometría cósmica.",
      healthAndEnergy: "Gobierna el cráneo, la musculatura esquelética, la corteza suprarrenal y el hierro en sangre. Canalizá la potencia de Aries mediante entrenamiento de fuerza con carga y postura corporal erguida."
    },
    domainsVariants: [
      {
        love: "Compromiso leal, presencia protectora y voluntad de edificar un futuro concreto juntos. En el amor, El Emperador demuestra su afecto con hechos tangibles, respaldo en las tormentas y palabra cumplida, recordándote no dejar que la coraza de las responsabilidades apague la ternura en la intimidad.",
        work: "Cúspide para la dirección de empresas, logística, distribución mayorista, industria, arquitectura de software o negociación de contratos firmes. Es hora de profesionalizar cada eslabón de tu cadena productiva y liderar el mercado con autoridad.",
        money: "Consolidación patrimonial, control estricto de costos y márgenes, e inversión en activos duros, equipamiento o infraestructura. El dinero responde hoy al orden contable y a la visión de largo plazo.",
        spirit: "La Vía del Guerrero-Rey: santificar la palabra empeñada y convertir el orden material en un reflejo terrestre de la geometría cósmica.",
        healthAndEnergy: "Gobierna el cráneo, la musculatura esquelética, la corteza suprarrenal y el hierro en sangre. Canalizá la potencia de Aries mediante entrenamiento de fuerza con carga y postura corporal erguida."
      },
      {
        love: "Si venías tolerando ambigüedades o faltas de respeto en tu esfera vincular, El Emperador corta la niebla de inmediato: exigí reciprocidad madura, acuerdos claros y hechos que respalden las promesas.",
        work: "Construcción de sistemas escalables. Dejá de apagar incendios cotidianos haciendo todo a pulmón y redactá el protocolo, el código o el circuito comercial que permita que tu negocio funcione con precisión militar.",
        money: "Blindaje financiero: separá con bisturí las cuentas del negocio de los gastos personales, constituí un fondo de reserva intocable y negociá con proveedores desde una posición de volumen y solvencia.",
        spirit: "Autodominio estoico: gobernar los propios impulsos, apetitos y horarios antes de pretender transformar el mundo exterior.",
        healthAndEnergy: "Alta resistencia física y empuje marciano; vigilá la presión arterial y las contracturas en mandíbula o nuca soltando la armadura al terminar tu jornada."
      },
      {
        love: "Atracción hacia la seguridad, el carácter firme y la admiración mutua. Una relación florece cuando cada uno es soberano de su propio reino interior y elige aliarse con el otro como par real.",
        work: "Resolución ejecutiva de un conflicto o cuello de botella. Donde había diez opiniones dubitativas, tu decisión firme y fundamentada marca el norte y pone a toda la estructura en movimiento productivo.",
        money: "Rentabilidad por eficiencia operativa: eliminar tres gastos superfluos y estandarizar tu proceso principal te dará hoy más margen neto que correr detrás de ventas improvisadas.",
        spirit: "Comprensión del Cuaternario Sagrado: honrar la ley de que todo espíritu necesita un templo de piedra bien calzado en sus cuatro esquinas para perdurar en la historia.",
        healthAndEnergy: "Vigor muscular y determinación mental; excelente ciclo para fijar una rutina fija de entrenamiento y suplementación sin fallar un solo día."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Establecé hoy por escrito las tres leyes, métricas o límites innegociables de tu operación actual y hacelos cumplir sin una sola excepción desde este minuto.",
      prohibition: "Prohibido pedir disculpas por defender tu tiempo, tu precio o tu territorio, o dejar una decisión clave librada a la improvisación.",
      psychomagicAct: "Antes de iniciar tu jornada o negociación más importante hoy, sentate en un sillón o silla firme con la columna erguida, apoyá las dos plantas de los pies con fuerza sobre el piso y colocá un objeto pesado de hierro o piedra frente a vos declarando: 'Aquí se asienta mi ley y mi estructura'.",
      talismanPhrase: "Mi voluntad es piedra cúbica; donde trazo mi frontera, el caos retrocede y el orden prospera."
    },
    actionOracleVariants: [
      {
        command: "Establecé hoy por escrito las tres leyes, métricas o límites innegociables de tu operación actual y hacelos cumplir sin una sola excepción desde este minuto.",
        prohibition: "Prohibido pedir disculpas por defender tu tiempo, tu precio o tu territorio, o dejar una decisión clave librada a la improvisación.",
        psychomagicAct: "Antes de iniciar tu jornada o negociación más importante hoy, sentate en un sillón o silla firme con la columna erguida, apoyá las dos plantas de los pies con fuerza sobre el piso y colocá un objeto pesado de hierro o piedra frente a vos declarando: 'Aquí se asienta mi ley y mi estructura'.",
        talismanPhrase: "Mi voluntad es piedra cúbica; donde trazo mi frontera, el caos retrocede y el orden prospera."
      },
      {
        command: "Auditá hoy tu agenda y tus cuentas con frialdad quirúrgica: cortá el gasto parásito, cerrá la puerta que drena energía y consolidá tu frente principal.",
        prohibition: "No reacciones con enojo ni levantes la voz ante un desafío; demostrá tu autoridad hablando más despacio, más grave y con datos irrefutables en la mano.",
        psychomagicAct: "Trazá en una hoja un cuadrado perfecto con regla, escribí adentro el nombre de tu empresa, obra o meta patrimonial junto con su cifra objetivo, y apoyalo debajo de la pata de tu escritorio o mesa de trabajo.",
        talismanPhrase: "Gobierno mi mente, gobierno mi tiempo y edifico sobre roca eterna."
      },
      {
        command: "Sistematizá hoy una tarea repetitiva que te consumía energía mental: transformá el esfuerzo artesanal disperso en un método replicable y blindado.",
        prohibition: "No delegues el timón estratégico ni pospongas una conversación firme por miedo a generar incomodidad momentánea.",
        psychomagicAct: "Llevá hoy en tu bolsillo izquierdo una llave metálica pesada o una tuerca de acero; cada vez que tu mano la toque durante el día, enderezá los hombros y recordá que sos el único monarca de tus decisiones.",
        talismanPhrase: "Bajo el yelmo de Aries y el sol de Tiphereth, mi imperio interior es inexpugnable."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano IV clava su estandarte en la tirada: la lectura exige estructura, mando firme y consolidación sobre piedra cúbica.",
      secondAppearance: "El Emperador comparece por segunda vez: sabés perfectamente qué límite tenés que marcar o qué orden administrativo debés imponer, pero seguís tolerando el desorden. Tomá el cetro hoy.",
      thirdAppearance: "Tercera llamada del Arcano IV: un reino sin fronteras claras invita a la invasión del caos. Cortá de inmediato toda ambigüedad contractual, financiera o personal.",
      fourthPlusAppearance: "Decreto marcial de Heh: el Oráculo no te permitirá avanzar al siguiente escalón hasta que asumas la autoridad total sobre tu estructura y pongas orden definitivo en tu casa."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Goberná tu propio reino interior antes de exigir obediencia al mundo; la verdadera autoridad es tan firme que no necesita alzar la voz.",
    counselVariants: [
      "Goberná tu propio reino interior antes de exigir obediencia al mundo; la verdadera autoridad es tan firme que no necesita alzar la voz.",
      "El talento gana batallas aisladas al amanecer, pero solo la logística, el método y la disciplina ganan los imperios al caer la tarde.",
      "Un 'no' pronunciado a tiempo con serenidad de piedra protege diez años de trabajo fecundo.",
      "No construyas tu palacio sobre el humor cambiante de los días; edificalo sobre el cubo inalterable de tu palabra cumplida.",
      "El verdadero Rey no teme la tormenta porque sus cimientos fueron cavados hasta tocar la roca madre."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "El Yelmo-Corona de Ocho Puntas y Rubí",
        secret: "Fundido en oro solar y acero de obsidiana con el rubí de Marte en el entrecejo, este yelmo real indica que la mente del Emperador une la visión soberana del estadista con la defensa invulnerable del estratega. Sus pensamientos no son divagaciones: son decretos arquitectónicos.",
        esotericFormula: "Sol (Oro Real) + Marte (Acero y Rubí) = Voluntad Ordenadora Invencible",
        meditationPrompt: "¿Qué decisión en tu vida actual requiere que te pongas la corona del estratega y dejes de dudar?"
      },
      {
        id: "n2",
        x: 20,
        y: 42,
        title: "Los Carneros de Aries en el Trono Cúbico",
        secret: "En los ángulos superiores del monolito de basalto negro emergen las testas de carnero con cuernos en espiral áurea. Representan el fuego cardinal de Aries —el primer impulso de la creación y el coraje de abrir camino— contenido y canalizado dentro de la geometría perfecta del cubo material.",
        esotericFormula: "Fuego de Aries + Cubo de 6 Caras = Energía Salvaje convertida en Imperio",
        meditationPrompt: "¿Dónde estás desperdiciando fuerza de empuje por no tener un molde o sistema claro que la canalice?"
      },
      {
        id: "n3",
        x: 78,
        y: 62,
        title: "El Cetro Ankh y el Orbe Cruciger",
        secret: "A diferencia de los tiranos que solo empuñan armas de muerte, el Emperador iniciático sostiene la Cruz Ansada egipcia (Ankh, la llave de la vida y la perennidad) y la esfera del mundo ordenada por la cruz. Revela que el propósito sagrado del poder, la ley y el dinero es proteger y perpetuar la vida.",
        esotericFormula: "Ankh (Vida Inmortal) + Orbe (Dominio Terrenal) = Poder Legítimo",
        meditationPrompt: "¿Qué estructura o patrimonio estás edificando hoy que seguirá de pie y dando frutos dentro de diez años?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO V • EL HIEROFANTE (VAV • EL CUSTODIO DE LA LLAVE ARCANA)
  // ==========================================================================
  {
    id: 5,
    numeral: "V",
    name: "El Hierofante",
    subtitle: "Custodio de la Llave Arcana",
    palette: {
      primary: "#eab308",
      secondary: "#6366f1",
      glow: "rgba(99, 102, 241, 0.58)"
    },
    archetype: "hierophant",
    correspondences: {
      element: "Tierra Consagrada / Éter Acústico (El Verbo Interior)",
      astro: "Tauro • La Tierra Fija donde la Luz se vuelve Templo y Sabiduría",
      hebrewLetter: "Vav (ו) • El Clavo o Eslabón de Oro que une el Cielo con la Tierra",
      treeOfLifePath: "Sendero 16 • Conecta Chokmah (La Sabiduría Suprema) con Chesed (La Majestad Benévola)",
      alchemy: "Fermentatio • La introducción del Fermento Sagrado que transmuta la masa en Oro Filosófico",
      hermeticAxiom: "Existe una Doctrina exterior para la multitud y una Llave interior para quien sabe escuchar en el centro del pecho.",
      jungianArchetype: "El Viejo Sabio (Senex Luminoso), el Maestro Iniciador y el Pontífice de la Conciencia",
      tarotTiming: "Abril-Mayo (Tauro), jueves jupiterianos, o procesos de consagración y estudio profundo",
      yesNo: "Sí (por la vía legítima, la excelencia ética y el respeto a las leyes del oficio)",
      keywords: [
        "transmisión iniciática",
        "maestro interior",
        "ética inquebrantable",
        "linaje y doctrina",
        "alianza consagrada",
        "puente entre mundos",
        "quintaesencia"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "El Emperador levanta las paredes de la ciudad, pero yo enciendo el fuego sagrado en su centro. Escuchá la nota grave de mi letra Vav: sin un sentido trascendente y sin un código de honor incorruptible, hasta el palacio más rico no es más que una tumba decorada.",
    oracleVoiceVariants: [
      "El Emperador levanta las paredes de la ciudad, pero yo enciendo el fuego sagrado en su centro. Escuchá la nota grave de mi letra Vav: sin un sentido trascendente y sin un código de honor incorruptible, hasta el palacio más rico no es más que una tumba decorada.",
      "Observá mi mano derecha alzada en bendición: dos dedos abiertos muestran la enseñanza visible que todos oyen; dos dedos plegados guardan el secreto esotérico que solo comprende quien practica la obra en carne viva.",
      "A mis pies descansan cruzadas la llave de oro solar y la llave de plata lunar. No intentes forzar la cerradura del misterio con soberbia; aprendé primero las leyes milenarias del arte y las puertas del templo se abrirán desde adentro.",
      "Me llaman *Pontifex*, el constructor de puentes. Yo soy el eslabón que une tu oficio cotidiano de la tierra con la sabiduría eterna de las estrellas: cuando trabajás con maestría y verdad, tu taller se convierte en catedral.",
      "Silenciá el griterío de las modas pasajeras y prestá oído a tu garganta interior: allí habita el único Maestro que jamás te mentirá ni te venderá humo."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Hierofante (Arcano V) —del griego *Hierophantes*, el Sumo Iniciador de los Misterios de Eleusis que 'hace visible lo sagrado'— gobierna el Sendero 16 de la letra Vav en el Árbol de la Vida, tendiendo el puente directo entre la Sabiduría del Padre (Chokmah) y la Misericordia del Rey (Chesed). Tras el cuadrado material del número Cuatro (El Emperador), el Cinco introduce el punto central del Espíritu: el Pentagrama flamígero, la Quintaesencia de los alquimistas. Su aparición en tu lectura anuncia el acceso a un conocimiento superior, el respaldo de una tradición o institución sólida, el encuentro con un mentor clave —o tu propia consagración como maestro en tu rubro— y la victoria a través de una ética intachable.",
    meaningVariants: [
      "El Hierofante (Arcano V) —del griego *Hierophantes*, el Sumo Iniciador de los Misterios de Eleusis que 'hace visible lo sagrado'— gobierna el Sendero 16 de la letra Vav en el Árbol de la Vida, tendiendo el puente directo entre la Sabiduría del Padre (Chokmah) y la Misericordia del Rey (Chesed). Tras el cuadrado material del número Cuatro (El Emperador), el Cinco introduce el punto central del Espíritu: el Pentagrama flamígero, la Quintaesencia de los alquimistas. Su aparición en tu lectura anuncia el acceso a un conocimiento superior, el respaldo de una tradición o institución sólida, el encuentro con un mentor clave —o tu propia consagración como maestro en tu rubro— y la victoria a través de una ética intachable.",
      "En la tradición oculta de Paul Foster Case y la Golden Dawn, el Arcano V bajo el signo fijo de Tauro despierta el don de la Intuición Auditiva (la voz interior del Santo Ángel Guardián o Yo Superior). Mientras La Sacerdotisa veía en imágenes a través del velo lunar, El Hierofante escucha el Verbo ordenador. Esto indica que la respuesta que buscás hoy llegará como una certeza serena e inapelable de tu conciencia profunda, o a través del consejo preciso de un especialista con años de experiencia real.",
      "Cuando el Custodio de las Dos Llaves preside tu consulta, te advierte que no es momento de improvisar atajos dudosos ni de reinventar la rueda por capricho. Existen leyes técnicas, químicas, comerciales y espirituales que ya fueron probadas durante siglos por quienes te precedieron. Estudiá la fórmula maestra, respetá la proporción exacta y honrá el linaje del oficio: esa base ortodoxa será el trampolín desde el cual tu obra alcanzará una autoridad indiscutible.",
      "Alquímicamente, El Hierofante representa la *Fermentatio*: el acto de introducir una chispa de oro vivo (el fermento espiritual) dentro de la materia preparada para que toda la masa adquiera nobleza incorruptible. En tu vida práctica, esto significa dotar a tu negocio, a tu arte o a tu relación de una filosofía y una misión tan elevadas que trasciendan la mera transacción económica.",
      "El Arcano V sella alianzas de alto honor. Ya se trate de un contrato comercial, una sociedad, un matrimonio o un juramento con tu propia vocación, lo que se firma bajo la mirada del Hierofante cuenta con la bendición del tiempo largo (Tauro) porque se apoya en valores compartidos y verdad transparente."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología profunda de Jung, El Hierofante encarna el arquetipo del *Senex* luminoso (el Viejo Sabio) y la función trascendente que traduce los símbolos del inconsciente en sentido ético y cultural. Tu psique está atravesando el pasaje de la 'moral prestada' (hacer las cosas por miedo al castigo o por mandato familiar) hacia la 'Ética Soberana': elegir libremente los principios sagrados que rigen tu vida porque comprendés su belleza y su ley.",
    psycheVariants: [
      "En la psicología profunda de Jung, El Hierofante encarna el arquetipo del *Senex* luminoso (el Viejo Sabio) y la función trascendente que traduce los símbolos del inconsciente en sentido ético y cultural. Tu psique está atravesando el pasaje de la 'moral prestada' (hacer las cosas por miedo al castigo o por mandato familiar) hacia la 'Ética Soberana': elegir libremente los principios sagrados que rigen tu vida porque comprendés su belleza y su ley.",
      "Este Arcano te invita a examinar el síndrome del 'eterno estudiante' frente a la responsabilidad de asumir la cátedra. A menudo seguimos buscando la validación de figuras externas porque tememos ocupar nosotros mismos el asiento del referente. El Hierofante te recuerda que todo lo que has estudiado, sufrido y destilado en tu camino ya te confiere autoridad legítima para enseñar y guiar a otros.",
      "Vigilá la polaridad sombra de este arquetipo en tu mente: tanto el dogmatismo rígido ('solo existe una forma de hacer las cosas') como la rebeldía adolescente crónica que rechaza todo consejo sabio solo por llevar la contraria. El espíritu maduro toma lo mejor de la tradición antigua y lo mantiene vivo renovando su fuego.",
      "La letra Vav significa literalmente 'gancho' o 'eslabón'. Psicológicamente, este Arcano viene a curar la sensación de fragmentación o absurdo: te pide conectar tu trabajo diario (la ganancia del pan) con tu filosofía más alta del mundo, para que cada hora de tu jornada tenga peso de sentido."
    ],

    lightAndShadow: "Al derecho (En Luz): Sabiduría probada, maestría pedagógica y técnica, alianzas de honor inquebrantable, mentoría luminosa, prestigio institucional e iniciación espiritual. Invertida (En Sombra): Dogmatismo ciego, hipocresía moral, sumisión al 'qué dirán' o rebeldía estéril que desprecia los fundamentos del oficio.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Sabiduría probada, maestría pedagógica y técnica, alianzas de honor inquebrantable, mentoría luminosa, prestigio institucional e iniciación espiritual. Invertida (En Sombra): Dogmatismo ciego, hipocresía moral, sumisión al 'qué dirán' o rebeldía estéril que desprecia los fundamentos del oficio.",
      "En Luz, El Hierofante es el Maestro que entrega las llaves para que el discípulo abra su propio templo interior; en Sombra, es el burócrata del dogma que esconde la llave para que todos dependan de su permiso.",
      "Luz activa: Prestigio intachable, transmisión de conocimiento de alto valor, contratos limpios y voz de autoridad. Sombra latente: Rigidez mental ante nuevas herramientas o miedo a salirse del molde heredado."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Vínculos edificados sobre la lealtad absoluta, la admiración moral y un proyecto de vida con raíces profundas. Augura formalización de relaciones, acuerdos de convivencia sagrados o el encuentro con un compañero de ruta con quien compartís la misma escala de valores.",
      work: "Excelencia y prestigio en educación, consultoría, transmisión de conocimientos, comercio establecido con red de confianza, franquicias o maestría artesanal donde el respeto riguroso por la calidad es tu marca registrada.",
      money: "Patrimonio seguro construido por la vía legítima, reputación crediticia y comercial impecable, y ganancias sostenidas derivadas de tu saber experto o de alianzas institucionales.",
      spirit: "Iniciación real en la Tradición Hermética; sintonía con la voz silenciosa del Maestro Interior y comprensión de la arquitectura oculta del cosmos.",
      healthAndEnergy: "Rige el cuello, la laringe, las cuerdas vocales, las vértebras cervicales y el oído interno (Tauro). Expresar tu verdad con voz pausada y descontracturar los hombros libera tu flujo vital."
    },
    domainsVariants: [
      {
        love: "Vínculos edificados sobre la lealtad absoluta, la admiración moral y un proyecto de vida con raíces profundas. Augura formalización de relaciones, acuerdos de convivencia sagrados o el encuentro con un compañero de ruta con quien compartís la misma escala de valores.",
        work: "Excelencia y prestigio en educación, consultoría, transmisión de conocimientos, comercio establecido con red de confianza, franquicias o maestría artesanal donde el respeto riguroso por la calidad es tu marca registrada.",
        money: "Patrimonio seguro construido por la vía legítima, reputación crediticia y comercial impecable, y ganancias sostenidas derivadas de tu saber experto o de alianzas institucionales.",
        spirit: "Iniciación real en la Tradición Hermética; sintonía con la voz silenciosa del Maestro Interior y comprensión de la arquitectura oculta del cosmos.",
        healthAndEnergy: "Rige el cuello, la laringe, las cuerdas vocales, las vértebras cervicales y el oído interno (Tauro). Expresar tu verdad con voz pausada y descontracturar los hombros libera tu flujo vital."
      },
      {
        love: "En el amor, El Hierofante pide elevar la conversación por encima de la rutina doméstica: compartan lecturas, ideales, proyectos espirituales o metas trascendentes que conviertan a la pareja en una verdadera orden iniciática de dos.",
        work: "Tu nombre y tu palabra son tu activo más caro en la plaza comercial. Mantener una ética de hierro en los plazos, en la pureza de los insumos y en el trato con tus contactos te abrirá puertas que el dinero solo no puede comprar.",
        money: "Inversiones conservadoras pero de altísima solidez, respaldadas por contratos formales y asesoramiento legal o contable de primera línea.",
        spirit: "Estudio sistemático de los textos sagrados, la alquimia o la filosofía perenne; no te quedes en la superficie divulgativa, andá directamente a las fuentes clásicas.",
        healthAndEnergy: "Estabilidad metabólica y resistencia taurina; el canto, los ejercicios de resonancia vocal y el silencio consciente armonizan tu centro laríngeo."
      },
      {
        love: "Si atravesabas una duda afectiva, el consejo de una persona sabia y neutral o una charla de total honestidad ética frente a frente disipará cualquier sombra y sellará un nuevo pacto de confianza.",
        work: "Es el momento de sistematizar tu saber para enseñarlo, documentar tu manual de procedimientos o posicionarte como la voz de autoridad y referencia dentro de tu nicho.",
        money: "Flujo constante que premia la constancia y la tradición: los clientes vuelven una y otra vez allí donde saben que jamás los engañan con la calidad.",
        spirit: "Reconocer que cada oficio humano —desde destilar un espíritu o formular un pigmento hasta programar un oráculo— es un sacramento cuando se ejecuta buscando la perfección.",
        healthAndEnergy: "Cuidá la postura del cuello frente a las pantallas y honrá los ritmos lentos y nutritivos del cuerpo físico."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Profundizá hoy en los fundamentos técnicos o teóricos más altos de tu disciplina, o bien compartí una enseñanza valiosa que posicione tu voz como referente indiscutido.",
      prohibition: "Prohibido traicionar tu código ético, rebajar la nobleza de tu fórmula o faltar a tu palabra empeñada por conveniencia de corto plazo.",
      psychomagicAct: "Redactá hoy de puño y letra en una hoja gruesa tus 'Tres Mandamientos de Maestría' para este año, dibujá al pie dos llaves cruzadas y colocalo en el cajón principal de tu lugar de trabajo.",
      talismanPhrase: "Poseo la llave de oro de la conciencia y la llave de plata del misterio; soy el puente vivo de la Verdad."
    },
    actionOracleVariants: [
      {
        command: "Profundizá hoy en los fundamentos técnicos o teóricos más altos de tu disciplina, o bien compartí una enseñanza valiosa que posicione tu voz como referente indiscutido.",
        prohibition: "Prohibido traicionar tu código ético, rebajar la nobleza de tu fórmula o faltar a tu palabra empeñada por conveniencia de corto plazo.",
        psychomagicAct: "Redactá hoy de puño y letra en una hoja gruesa tus 'Tres Mandamientos de Maestría' para este año, dibujá al pie dos llaves cruzadas y colocalo en el cajón principal de tu lugar de trabajo.",
        talismanPhrase: "Poseo la llave de oro de la conciencia y la llave de plata del misterio; soy el puente vivo de la Verdad."
      },
      {
        command: "Consultá hoy ese asunto complejo con el mejor especialista, maestro o fuente documental disponible en lugar de adivinar a ciegas.",
        prohibition: "No confundas terquedad con firmeza de principios; escuchá con humildad real la lección técnica que la realidad te está mostrando.",
        psychomagicAct: "Tomá dos llaves reales de tu casa o taller —una de tono dorado/bronce y otra plateada—, cruzalas formando una X sobre tu mesa durante diez minutos mientras meditás en el problema a destrabar, y luego usá una de ellas para abrir una puerta con intención consciente.",
        talismanPhrase: "En mi oído interior resuena la voz del Maestro; camino por la vía real sin desviarme."
      },
      {
        command: "Formalizá por escrito, con reglas claras y justas para ambas partes, ese acuerdo o alianza que hasta hoy estaba sostenido solo en palabras sueltas.",
        prohibition: "No desprecies las formas ni el protocolo en tus presentaciones de esta semana: el hábito no hace al monje, pero revela el respeto que el monje tiene por su templo.",
        psychomagicAct: "Tocá suavemente tu garganta con los dedos índice y mayor de tu mano derecha antes de hablar en una reunión importante hoy, consagrando tu voz para que solo pronuncie palabras exactas, nobles y constructivas.",
        talismanPhrase: "Como el clavo de oro de Vav, uno el ideal del cielo con la perfección de la tierra."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano V abre las puertas del Templo: la consulta exige sabiduría de raíz, ética impecable y oído atento al Maestro Interior.",
      secondAppearance: "El Hierofante comparece por segunda vez: hay un principio fundamental del oficio o de tu propia conciencia que estás pasando por alto por apuro. Volvé a las bases.",
      thirdAppearance: "Tercera llamada del Arcano V: el Oráculo te reclama coherencia total entre tu doctrina y tus actos cotidianos, o te señala que ya es hora de asumir tu rol de maestro sin esconderte.",
      fourthPlusAppearance: "Consagración mayor de Vav: estás ante una iniciación ética y vocacional ineludible. Tomá las dos llaves del altar y honrá tu linaje espiritual con hechos."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Honrá la raíz de los antiguos maestros, pero recordá que el templo más sagrado no es de piedra: está vivo dentro de tu propio pecho.",
    counselVariants: [
      "Honrá la raíz de los antiguos maestros, pero recordá que el templo más sagrado no es de piedra: está vivo dentro de tu propio pecho.",
      "Para innovar mañana como un genio revolucionario, primero debés dominar hoy las reglas clásicas del arte como un sumo sacerdote.",
      "La autoridad del Emperador obliga a los cuerpos; la autoridad moral del Hierofante conquista voluntariamente las almas.",
      "Cuando el discípulo silencia su vanidad y prepara el oído, hasta las piedras del camino se convierten en cátedra.",
      "Nunca vendas por una moneda rápida la reputación que te llevó años de fuego y paciencia edificar."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 15,
        title: "El Triregnum (La Tiara de Tres Coronas)",
        secret: "Coronando la testa del Pontífice se alzan los tres aros de oro tachonados de gemas y rematados por el loto de amatista. Simbolizan el magisterio sobre los tres mundos de la Cábala y la Alquimia: el mundo material de los hechos (Assiah), el mundo formativo de las leyes (Yetzirah) y el mundo arquetípico del espíritu (Briah/Atziluth).",
        esotericFormula: "Cuerpo (Sal) + Alma (Azufre) + Espíritu (Mercurio) = La Triple Corona",
        meditationPrompt: "¿Están hoy alineados tus actos físicos, tus pensamientos estratégicos y tus valores espirituales bajo una misma corona?"
      },
      {
        id: "n2",
        x: 78,
        y: 44,
        title: "El Báculo de la Triple Cruz y la Mano Esotérica",
        secret: "Mientras su mano izquierda sostiene el cetro de tres travesaños (octavas de vibración), su derecha traza el signo sacerdotal con dos dedos extendidos y dos plegados. Este gesto recuerda que toda verdad posee una cara visible (exotérica) y un núcleo oculto (esotérico) que solo se comprende mediante la práctica directa.",
        esotericFormula: "2 Dedos Visibles (Doctrina) + 2 Dedos Ocultos (Gnosis) = Transmisión Completa",
        meditationPrompt: "¿Qué conocimiento que ya tenés en teoría está esperando que lo bajes a la práctica real hoy mismo?"
      },
      {
        id: "n3",
        x: 50,
        y: 79,
        title: "Las Llaves Cruzadas de Oro Solar y Plata Lunar",
        secret: "En la base del altar se cruzan en aspa (X) las llaves de San Pedro y de Jano: la llave de oro abre los misterios de la razón consciente y la voluntad diurna; la llave de plata abre los archivos del subconsciente y el símbolo nocturno. Ninguna cerradura del destino resiste a quien sabe girar ambas llaves a la vez.",
        esotericFormula: "Llave Solar (Razón/Oro) × Llave Lunar (Intuición/Plata) = Apertura del Sanctum",
        meditationPrompt: "Frente a tu desafío actual, ¿estás usando solo la llave fría del cálculo o también la llave plateada de tu intuición?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO VI • LOS ENAMORADOS (ZAYIN • LAS BODAS ALQUÍMICAS Y LA ESPADA)
  // ==========================================================================
  {
    id: 6,
    numeral: "VI",
    name: "Los Amantes",
    subtitle: "Las Bodas Alquímicas del Alma",
    palette: {
      primary: "#f472b6",
      secondary: "#fbbf24",
      glow: "rgba(244, 114, 182, 0.58)"
    },
    archetype: "lovers",
    correspondences: {
      element: "Aire Solarizado / Magnetismo Bipolar",
      astro: "Géminis • Los Gemelos Celestes y el Espejo de la Dualidad",
      hebrewLetter: "Zayin (ז) • La Espada Flamígera del Discernimiento que corta la duda",
      treeOfLifePath: "Sendero 17 • Desciende desde Binah (El Entendimiento Supremo) hasta Tiphereth (El Corazón Solar)",
      alchemy: "Coniunctio sive Coitus • El Matrimonio Sagrado del Rey Rojo (Azufre) y la Reina Blanca (Mercurio)",
      hermeticAxiom: "Dividí para discernir con la Espada; uní para crear con el Corazón: de dos que eran opuestos nace el Hijo Filosofal.",
      jungianArchetype: "La Coniunctio Oppositorum, la Integración Animus-Anima y la Encrucijada de Hércules",
      tarotTiming: "Mayo-Junio (Géminis), o en el segundo exacto en que tomás una decisión irreversible",
      yesNo: "Sí (pero exige elegir de raíz un camino y cortar sin tibieza con el otro)",
      keywords: [
        "coniunctio alquímica",
        "elección soberana",
        "unión de opuestos",
        "coherencia vital",
        "almas afines",
        "espada de zayin",
        "sinergia creadora"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Los profanos miran mi estampa y solo ven romance; los iniciados leen mi letra hebrea —Zayin, la Espada— y tiemblan de lucidez. Porque elegir lo que amás de verdad exige decapitar sin lástima todas las opciones tibias que te distraen de tu centro.",
    oracleVoiceVariants: [
      "Los profanos miran mi estampa y solo ven romance; los iniciados leen mi letra hebrea —Zayin, la Espada— y tiemblan de lucidez. Porque elegir lo que amás de verdad exige decapitar sin lástima todas las opciones tibias que te distraen de tu centro.",
      "Bajo las seis alas encendidas del Serafín, el Rey de Oro y la Reina de Plata dejan de guerrear para fundir sus coronas en un solo cáliz. Cuando tu cálculo racional y tu pasión visceral firman la paz, no hay fuerza en la tierra que pueda dividirte.",
      "Etimológicamente, 'decidir' significa cortar de raíz (*caedere*). Mientras mantengas un pie en el camino viejo por cobardía y otro en el camino nuevo por deseo, te partirás al medio sin llegar a ninguna parte.",
      "Yo soy el Espejo de Géminis: aquello que te enamora o te irrita con tanta fuerza en el otro no es más que tu propia mitad no vivida golpeando la puerta para que la integres.",
      "No elijas jamás el sendero que solo te promete ausencia de dolor; elegí el sendero por cuyo fuego estarías dispuesto a cruzar descalzo con una sonrisa."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "Los Amantes o Los Enamorados (Arcano VI) custodian uno de los dobles secretos más fascinantes del Tarot esotérico: por un lado, la *Coniunctio* (las Bodas Alquímicas del Sol y la Luna en el centro cardíaco de Tiphereth); por el otro, el Sendero 17 de la letra Zayin, cuyo significado literal es 'Espada' o 'Arma'. Esto revela que el verdadero Amor y la verdadera Vocación no son estados sentimentales blandos, sino actos quirúrgicos de libre albedrío. Su aparición en tu lectura anuncia una alianza de altísimo voltaje magnético —afectiva, comercial o espiritual— y, simultáneamente, te coloca ante la Encrucijada de Hércules: ha llegado la hora de tomar una definición excluyente que unifique tu energía y ponga fin a toda dualidad paralizante.",
    meaningVariants: [
      "Los Amantes o Los Enamorados (Arcano VI) custodian uno de los dobles secretos más fascinantes del Tarot esotérico: por un lado, la *Coniunctio* (las Bodas Alquímicas del Sol y la Luna en el centro cardíaco de Tiphereth); por el otro, el Sendero 17 de la letra Zayin, cuyo significado literal es 'Espada' o 'Arma'. Esto revela que el verdadero Amor y la verdadera Vocación no son estados sentimentales blandos, sino actos quirúrgicos de libre albedrío. Su aparición en tu lectura anuncia una alianza de altísimo voltaje magnético —afectiva, comercial o espiritual— y, simultáneamente, te coloca ante la Encrucijada de Hércules: ha llegado la hora de tomar una definición excluyente que unifique tu energía y ponga fin a toda dualidad paralizante.",
      "En la geometría sagrada del Seis —el Hexagrama o Sello de Salomón donde el triángulo del Fuego que sube se entrelaza con el triángulo del Agua que baja—, este Arcano señala el punto de armonía radiante en el corazón del Árbol de la Vida (la esfera sexta, Tiphereth). Cuando sale en Luz, indica que dos fuerzas, dos personas o dos líneas de trabajo que parecían separadas se descubren profundamente complementarias, generando una sinergia que multiplica el valor de ambas.",
      "Cabalísticamente, el Sendero de Zayin conecta el Entendimiento de Binah con la Belleza de Tiphereth a través del signo de Géminis. La lección hermética es directa: la mente dual que analiza y divide solo alcanza la paz cuando se subordina a la visión superior del Serafín (la Supraconciencia). No podés resolver el dilema que tenés enfrente haciendo listas interminables de pros y contras desde el miedo; debés elevar tu mirada y elegir desde la grandeza de tu destino.",
      "En el laboratorio de los filósofos herméticos, ninguna Gran Obra avanza sin las Bodas del Rey Solar (la conciencia enfocada y ejecutiva) con la Reina Lunar (la imaginación creadora y el deseo profundo). Si estabas trabajando solo desde el deber frío, te secabas; si solo soñabas sin método, te evaporabas. Hoy ambos principios se dan la mano sobre el altar de tu pecho.",
      "El Arcano VI es la prueba de fuego de la integridad personal. Te anuncia que el universo está listo para abrirte el camino de par en par, pero espera primero tu voto de compromiso total: cuando cerrás las puertas traseras de la duda y te casás de verdad con tu elección, las sincronías se precipitan a tu favor."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Carl Gustav Jung dedicó su obra cumbre tardía, *Mysterium Coniunctionis*, exactamente al misterio que retrata este Arcano: la unión de los opuestos psíquicos (*Coniunctio Oppositorum*). La neurosis humana nace de estar divididos por dentro —querer una cosa con el instinto y prohibírsela con el intelecto, o desear el éxito y temer el compromiso que exige—. Los Enamorados diagnostican que tu fatiga actual no viene del trabajo duro, sino de la guerra civil entre dos mitades tuyas que hoy deben firmar una alianza.",
    psycheVariants: [
      "Carl Gustav Jung dedicó su obra cumbre tardía, *Mysterium Coniunctionis*, exactamente al misterio que retrata este Arcano: la unión de los opuestos psíquicos (*Coniunctio Oppositorum*). La neurosis humana nace de estar divididos por dentro —querer una cosa con el instinto y prohibírsela con el intelecto, o desear el éxito y temer el compromiso que exige—. Los Enamorados diagnostican que tu fatiga actual no viene del trabajo duro, sino de la guerra civil entre dos mitades tuyas que hoy deben firmar una alianza.",
      "Este Arcano ilumina el mecanismo de la Proyección del *Anima/Animus*. Cuando aún no integraste tu polo complementario interior, buscás afuera a alguien que te 'complete' desde la carencia, cayendo en idealizaciones ciegas seguidas de decepciones. Al reconocer tu propia totalidad interna, dejás de necesitar al otro como muleta y empezás a elegirlo desde la soberanía plena.",
      "La psicología existencial advierte sobre la trampa de la 'falsa libertad adolescente': creer que sos más libre mientras no te comprometés con nada ni con nadie. En realidad, quien no elige nunca queda atrapado en el limbo estéril de lo potencial. El acto de elegir con coraje mata nueve posibilidades imaginarias, pero le da vida real e indestructible a una obra verdadera.",
      "Observá la dinámica triangular del diorama: el hombre (consciente), la mujer (subconsciente) y el Ángel arriba (supraconsciente). En tus vínculos y sociedades, nunca intentes que el consciente domine por la fuerza al subconsciente; ambos deben alinearse con el ideal superior que los corona."
    ],

    lightAndShadow: "Al derecho (En Luz): Amor correspondido y consciente, comunión de almas, sociedades comerciales brillantes, decisión valiente que corta la duda y coherencia total entre deseo y valores. Invertida (En Sombra): Indecisión crónica, triángulos desgastantes, tentación superficial que desvía del norte o división interna.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Amor correspondido y consciente, comunión de almas, sociedades comerciales brillantes, decisión valiente que corta la duda y coherencia total entre deseo y valores. Invertida (En Sombra): Indecisión crónica, triángulos desgastantes, tentación superficial que desvía del norte o división interna.",
      "En Luz, Los Enamorados son la aleación perfecta de oro y plata que forja una corona invencible; en Sombra, son el caminante partido en dos que pierde ambos trenes por no soltar ningún boleto.",
      "Luz activa: Magnetismo vincular altísimo, afinidad electiva, pactos fecundos y filo de discernimiento. Sombra latente: Promesas a medias, seducción sin respaldo o postergar el corte necesario."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Encuentro de altísima resonancia kármica, pasión correspondida o consolidación luminosa de la pareja a través de una elección mutua y libre. Es el triunfo del vínculo donde el deseo erótico, la amistad intelectual y la ternura del corazón vibran en la misma cuerda.",
      work: "Alianzas estratégicas y sociedades sumamente fértiles donde dos talentos distintos se potencian (por ejemplo, el perfil técnico-creativo unido al perfil comercial-estructural). Si estás ante dos rumbos laborales, elegí aquel que encienda tu vocación real.",
      money: "Ganancias nacidas de acuerdos comerciales, ventas cruzadas, sinergias entre dos rubros o decisiones de inversión donde dejás de dispersar el capital en diez apuestas chicas para concentrarlo en la ganadora.",
      spirit: "Las Bodas Químicas de Christian Rosenkreutz en tu propio templo interior: unificar tu polo solar y tu polo lunar en la cámara dorada del corazón.",
      healthAndEnergy: "Rige los órganos pares (pulmones, bronquios, riñones, manos, hombros) y el cuerpo calloso que comunica ambos hemisferios cerebrales. La respiración consciente y simétrica equilibra tu sistema al instante."
    },
    domainsVariants: [
      {
        love: "Encuentro de altísima resonancia kármica, pasión correspondida o consolidación luminosa de la pareja a través de una elección mutua y libre. Es el triunfo del vínculo donde el deseo erótico, la amistad intelectual y la ternura del corazón vibran en la misma cuerda.",
        work: "Alianzas estratégicas y sociedades sumamente fértiles donde dos talentos distintos se potencian (por ejemplo, el perfil técnico-creativo unido al perfil comercial-estructural). Si estás ante dos rumbos laborales, elegí aquel que encienda tu vocación real.",
        money: "Ganancias nacidas de acuerdos comerciales, ventas cruzadas, sinergias entre dos rubros o decisiones de inversión donde dejás de dispersar el capital en diez apuestas chicas para concentrarlo en la ganadora.",
        spirit: "Las Bodas Químicas de Christian Rosenkreutz en tu propio templo interior: unificar tu polo solar y tu polo lunar en la cámara dorada del corazón.",
        healthAndEnergy: "Rige los órganos pares (pulmones, bronquios, riñones, manos, hombros) y el cuerpo calloso que comunica ambos hemisferios cerebrales. La respiración consciente y simétrica equilibra tu sistema al instante."
      },
      {
        love: "Hora de definiciones claras: el verdadero amor florece cuando ambos saben que son elegidos sin reservas. Expresá tus sentimientos con total honestidad y cerrá cualquier puerta secundaria o ambigüedad del pasado.",
        work: "Combinación magistral de dos mundos: unir el arte con la rentabilidad, o la tradición artesanal con la tecnología moderna. Esa fusión de opuestos es hoy tu mina de oro.",
        money: "Toda negociación comercial hoy se gana buscando el punto de beneficio mutuo real (Win-Win) donde la otra parte sienta que aliarse con vos es su mejor negocio del año.",
        spirit: "El Camino del Corazón (Bhakti y Hermetismo Solar): comprender que el amor consciente es la fuerza gravitacional que mantiene unidos los átomos del universo.",
        healthAndEnergy: "Excelente oxigenación y vitalidad nerviosa cuando actuás en coherencia; las contracturas en trapecios y hombros desaparecen apenas tomás la decisión que venías postergando."
      },
      {
        love: "Si estás en soledad, el Arcano VI indica que al haber integrado tu propia riqueza interior ya no emitís vibración de carencia, abriendo el campo magnético para la llegada de un par verdadero.",
        work: "Descarte quirúrgico de distracciones (Zayin): sacá de tu catálogo o de tu mesa de proyectos aquello que hacés solo 'por compromiso' y dedicale el cien por ciento de tu sangre a la obra que amás.",
        money: "Fluidez y armonía en las cuentas compartidas o societarias gracias a reglas transparentes y objetivos comunes perfectamente alineados.",
        spirit: "Superación del juicio dualista: ver cómo la luz y la sombra de tu historia fueron las dos manos del mismo escultor tallando tu conciencia actual.",
        healthAndEnergy: "Armonía psicosomática profunda; caminatas al aire libre y ejercicios bilaterales sincronizan tu mente y tu cuerpo."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Usá hoy la Espada de Zayin: tomá una decisión definitiva en esa encrucijada que tenés abierta, comunicá tu elección y cerrá sin vuelta atrás la opción descartada.",
      prohibition: "Prohibido jugar a dos puntas, dar respuestas ambiguas para ganar tiempo o elegir el camino más cómodo por miedo a la grandeza del camino verdadero.",
      psychomagicAct: "Tomá dos objetos pequeños que representen tu razón lógica (por ejemplo, una llave o moneda) y tu pasión intuitiva (una flor, copa o piedra de color); atalos juntos con un hilo rojo o dorado y dejalos sobre tu mesa declarando la unión indivisible de tus dos fuerzas.",
      talismanPhrase: "Corto toda tibieza con el filo de Zayin y sello las bodas de mi mente y mi corazón."
    },
    actionOracleVariants: [
      {
        command: "Usá hoy la Espada de Zayin: tomá una decisión definitiva en esa encrucijada que tenés abierta, comunicá tu elección y cerrá sin vuelta atrás la opción descartada.",
        prohibition: "Prohibido jugar a dos puntas, dar respuestas ambiguas para ganar tiempo o elegir el camino más cómodo por miedo a la grandeza del camino verdadero.",
        psychomagicAct: "Tomá dos objetos pequeños que representen tu razón lógica (por ejemplo, una llave o moneda) y tu pasión intuitiva (una flor, copa o piedra de color); atalos juntos con un hilo rojo o dorado y dejalos sobre tu mesa declarando la unión indivisible de tus dos fuerzas.",
        talismanPhrase: "Corto toda tibieza con el filo de Zayin y sello las bodas de mi mente y mi corazón."
      },
      {
        command: "Proponé hoy esa alianza, colaboración o acuerdo sincero a la persona o socio cuyas fortalezas complementan exactamente las tuyas.",
        prohibition: "No tomes ninguna decisión importante hoy si tu cabeza dice que sí solo por cálculo frío pero tu pecho se contrae diciendo que no.",
        psychomagicAct: "Escribí en una tira de papel la duda o el 'Plan B' que te viene distrayendo de tu meta central; cortá el papel al medio de un solo tijeretazo firme y descartá ambas mitades, quedándote únicamente con tu elección principal.",
        talismanPhrase: "Donde pongo mi elección pongo mi alma entera; la unidad de mi propósito es invencible."
      },
      {
        command: "Unificá hoy dos talentos o áreas tuyas que hasta ahora mantenías separadas en compartimentos estancos: de su cruce nacerá tu propuesta más original.",
        prohibition: "No postergues una conversación de verdad afectiva o comercial por temor al conflicto; la claridad honesta enamora y ordena.",
        psychomagicAct: "Frente a un espejo, mirate a los ojos en silencio, apoyá tu mano izquierda sobre el corazón y tu mano derecha sobre la frente, y luego entrelazá los dedos de ambas manos frente al pecho sellando tu coherencia interior.",
        talismanPhrase: "El Rey Solar y la Reina Lunar danzan en mi pecho bajo las alas de Tiphereth."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano VI despliega sus seis alas en la lectura: el magnetismo de la unión y el filo de una elección soberana entran en escena.",
      secondAppearance: "Los Amantes aparecen por segunda vez: seguís demorando el corte en la encrucijada o intentando sostener dos opciones incompatibles. La energía se libera recién cuando elegís.",
      thirdAppearance: "Tercera llamada del Arcano VI: la ambivalencia ya está frenando tu Carro (Arcano VII). Tomá partido hoy mismo desde el corazón sin mirar atrás.",
      fourthPlusAppearance: "Sentencia de Zayin: el Oráculo exige coherencia absoluta entre lo que amás y lo que hacés. Cortá de raíz toda división interna ahora mismo."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Nunca elijas desde el miedo a perder; elegí únicamente aquello con lo que estés dispuesto a fundirte en el fuego sin mirar atrás.",
    counselVariants: [
      "Nunca elijas desde el miedo a perder; elegí únicamente aquello con lo que estés dispuesto a fundirte en el fuego sin mirar atrás.",
      "Quien intenta remar en dos botes al mismo tiempo termina inevitablemente hundiéndose en el medio del río.",
      "La verdadera libertad no consiste en no atarse a nada, sino en elegir soberanamente a qué obra y a qué amor entregás tu fuego.",
      "Cuando la flecha de tu deseo y el arco de tu razón apuntan al mismo blanco, ningún viento puede desviar el tiro.",
      "El oro y la plata separados son solo metales; fundidos en el crisol del corazón se convierten en el Elixir de los Sabios."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "El Serafín Solar de Seis Alas (Rafael)",
        secret: "En la bóveda superior del relicario se alza el Arcángel Rafael ('Medicina de Dios' y regente del Aire Solar) desplegando seis alas de oro flamígero. Representa la Supraconciencia de Tiphereth que bendice a los amantes: nos enseña que la unión humana o la sociedad creativa solo alcanzan la inmortalidad cuando ambos miran hacia un mismo Sol superior.",
        esotericFormula: "Consciente + Subconsciente + Supraconciencia (Serafín) = La Tríada del Amor Real",
        meditationPrompt: "¿Cuál es el ideal superior que corona y da sentido a tu vínculo o sociedad más importante hoy?"
      },
      {
        id: "n2",
        x: 34,
        y: 52,
        title: "El Rey Solar y la Reina Lunar en Perfil Sagrado",
        secret: "A la izquierda se yergue el Rey tallado en oro y obsidiana (el Azufre alquímico, la voluntad y el Logos); a la derecha, la Reina esculpida en plata y amatista (el Mercurio de los Sabios, la intuición y el Eros). Ambos están en perfecta simetría de altura y dignidad: las Bodas Alquímicas solo ocurren entre pares soberanos.",
        esotericFormula: "Rex Solis (Oro/Fuego) + Regina Lunae (Plata/Agua) = Coniunctio Oppositorum",
        meditationPrompt: "¿Están hoy en equilibrio tu firmeza ejecutiva (Rey) y tu receptividad creativa (Reina), o una está aplastando a la otra?"
      },
      {
        id: "n3",
        x: 50,
        y: 72,
        title: "El Corazón Alquímico y la Vesica Piscis de Anillos",
        secret: "En el punto exacto donde sus manos se unen gravita el corazón poliédrico de rubí y oro dentro de dos anillos entrelazados (la geometría sagrada de la *Vesica Piscis*). Simboliza el *Rebis* o tercer elemento que nace de la unión: aquello que dos almas o dos talentos juntos pueden crear y que ninguno de los dos podría haber engendrado en soledad.",
        esotericFormula: "1 + 1 = 3 (El Hijo Filosofal nacido de la Alianza)",
        meditationPrompt: "¿Qué decisión excluyente necesitás tomar hoy para entregarle todo tu corazón a tu verdadera obra?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR • VOLUMEN II (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initSolarGrimoireVolume2() {
  window.DATOS_SOL_2 = DATOS_SOL_2;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_2.forEach(function (card) {
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
  DATOS_SOL_2.forEach(function (solarCard) {
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

  // Asegurar que SolarOracleEngine esté disponible incluso si datos_sol_2 se carga antes que datos_sol_1
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
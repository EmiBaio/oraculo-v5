// ============================================================================
// ARCHIVO: datos_sol_1.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN I: ARCANOS 0, I y II
// 0 • El Loco | I • El Mago | II • La Sacerdotisa
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// 100% Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_1 = [
  // ==========================================================================
  // ARCANO 0 • EL LOCO (ALEPH • EL CAMINANTE HIPERBÓREO DEL ABISMO)
  // ==========================================================================
  {
    id: 0,
    numeral: "0",
    name: "El Loco",
    subtitle: "El Salto al Abismo Astral",
    palette: {
      primary: "#fbbf24",
      secondary: "#38bdf8",
      glow: "rgba(251, 191, 36, 0.58)"
    },
    archetype: "fool",
    correspondences: {
      element: "Aire Primordial / Éter Incondicionado (Ruach)",
      astro: "Urano • El Relámpago Despertador",
      hebrewLetter: "Aleph (א) • El Aliento Silencioso que contiene todas las vocales",
      treeOfLifePath: "Sendero 11 • Une Kether (La Corona Suprema) con Chokmah (La Sabiduría Padre)",
      alchemy: "Materia Prima y Mercurius Vivus • El estado volátil previo a toda coagulación",
      hermeticAxiom: "Nada me ata porque nada poseo; como soy el Cero, todas las cifras nacen de mi paso.",
      jungianArchetype: "El Puer Aeternus Luminoso y el Espíritu Libre antes de la domesticación del Ego",
      tarotTiming: "Instantáneo, eléctrico, fuera del calendario previsible (en las próximas 24 a 72 horas)",
      yesNo: "Sí (a condición de saltar sin red y sin exigir garantías previas)",
      keywords: [
        "potencial infinito",
        "salto cuántico",
        "inocencia lúcida",
        "soberanía del instinto",
        "ruptura de dogmas",
        "gracia imprevista",
        "libertad ontológica"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "No me pidas un mapa trazado por manos que tiemblan. Yo soy el borde mismo del precipicio: el puente de obsidiana y oro jamás se ve desde la orilla; se condensa bajo tu suela en el segundo exacto en que despegás los dos pies de la piedra conocida.",
    oracleVoiceVariants: [
      "No me pidas un mapa trazado por manos que tiemblan. Yo soy el borde mismo del precipicio: el puente de obsidiana y oro jamás se ve desde la orilla; se condensa bajo tu suela en el segundo exacto en que despegás los dos pies de la piedra conocida.",
      "Llevás en tu alforja demasiados muertos ajenos: mandatos familiares, prudencias prestadas y miedos heredados que pesan como lingotes de plomo. Cortá la correa hoy mismo; quien camina desnudo de historia sobre la cornisa no conoce la ley de la gravedad.",
      "Te dijeron que mi nombre es locura porque el rebaño llama 'cuerdo' al que besa los barrotes de su propia celda. Mirá hacia arriba: el Sol Blanco de Kether arde sobre tu nuca y el abismo que tenés delante no es una caída, es tu primer cielo abierto.",
      "Soy el Cero antes de que empiece la cuenta del tiempo. Mientras tu razón calcula pérdidas y beneficios con los ojos vendados, mi máscara mitad plata y mitad oro ya huele el viento de la tierra prometida que todavía no tiene nombre.",
      "¿Escuchás el ladrido del chacal de plata junto a tus talones? No te muerde para que retrocedas al valle tibio: te despierta la sangre para que no camines dormido en el instante sagrado de tu liberación."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "En la arquitectura secreta del Tarot, El Loco no lleva el número uno ni el veintidós: porta el Cero, el óvalo cósmico del Ain Soph Aur (la Luz Ilimitada) antes de contraerse en una forma definida. Cuando este Arcano irrumpe en tu lectura, decreta la caducidad inmediata de tus mapas mentales anteriores. Estás frente a una encrucijada que la lógica deductiva es incapaz de resolver, porque todas tus premisas pertenecen al pasado y lo que te aguarda adelante es radicalmente inédito. Regido por Urano y por la letra Aleph, El Loco anuncia un comienzo magnético, una liberación de contratos kármicos agotados y el despertar de una genialidad instintiva que opera por sincronía pura.",
    meaningVariants: [
      "En la arquitectura secreta del Tarot, El Loco no lleva el número uno ni el veintidós: porta el Cero, el óvalo cósmico del Ain Soph Aur (la Luz Ilimitada) antes de contraerse en una forma definida. Cuando este Arcano irrumpe en tu lectura, decreta la caducidad inmediata de tus mapas mentales anteriores. Estás frente a una encrucijada que la lógica deductiva es incapaz de resolver, porque todas tus premisas pertenecen al pasado y lo que te aguarda adelante es radicalmente inédito. Regido por Urano y por la letra Aleph, El Loco anuncia un comienzo magnético, una liberación de contratos kármicos agotados y el despertar de una genialidad instintiva que opera por sincronía pura.",
      "La aparición de El Loco en Luz certifica que has llegado al límite geográfico de tu antigua identidad. Todo lo que podías aprender dentro de tu zona de seguridad ya fue aprendido; permanecer un día más allí por temor a la incertidumbre equivaldría a pudrir la semilla dentro del granero. Este Arcano te unge con la 'inocencia del sabio': la capacidad de entrar en un territorio desconocido sin prejuicios, permitiendo que la providencia reorganice tus piezas de una manera mucho más brillante de lo que tu mente controladora jamás habría diseñado.",
      "En el Sendero 11 del Árbol de la Vida, Aleph es el aliento silencioso que desciende desde la Corona Suprema (Kether) hacia el relámpago de Chokmah. Esto significa que el impulso que hoy sentís en el pecho no es un capricho pasajero del ego, sino una descarga directa de tu Supra-conciencia. Lo que las mentes convencionales de tu entorno juzgarían hoy como un movimiento arriesgado o incomprensible es, en realidad, la maniobra exacta que te salvará del estancamiento y te colocará a la vanguardia de tu propio destino.",
      "Cuando el Viajero del Precipicio toma la palabra en la mesa, el universo suspende temporalmente las leyes de la estadística a tu favor. Es el tiempo del milagro operativo y del hallazgo fortuito (serendipia): la llamada inesperada, la puerta que se abre en el muro liso, la idea disruptiva que vuelve obsoleto el problema que te angustiaba. Tu única obligación iniciática hoy es no sabotear esta corriente eléctrica con dudas pequeñoburguesas ni pedidos de permiso.",
      "Alquímicamente, El Loco es el Mercurio Filosófico en estado volátil antes de entrar en el atanor. Te señala que tu mayor riqueza actual reside en tu plasticidad, tu liviandad de equipaje y tu capacidad de decir 'sí' al llamado de la aventura. Soltá la necesidad neurótica de saber cómo lucirá el escalón número diez cuando el espíritu te está pidiendo, con urgencia luminosa, que apoyes el pie en el escalón número uno."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En el consultorio profundo de la psique, El Loco desmantela la coraza neurótica del Hipercontrol. Tu ansiedad reciente no proviene de un peligro real en el mundo exterior, sino de la fricción entre tu verdadero Sí-Mismo (Self) —que exige expansión y metamorfosis— y tu Persona social, que teme perder el estatus de 'previsible y sensata'. Permitirte ser incomprendido temporalmente por quienes te rodean es hoy el precio exacto de tu salud mental y tu individuación.",
    psycheVariants: [
      "En el consultorio profundo de la psique, El Loco desmantela la coraza neurótica del Hipercontrol. Tu ansiedad reciente no proviene de un peligro real en el mundo exterior, sino de la fricción entre tu verdadero Sí-Mismo (Self) —que exige expansión y metamorfosis— y tu Persona social, que teme perder el estatus de 'previsible y sensata'. Permitirte ser incomprendido temporalmente por quienes te rodean es hoy el precio exacto de tu salud mental y tu individuación.",
      "Este Arcano ilumina el complejo de la 'Deuda Imaginaria': esa sensación inconsciente de que le debés explicaciones o lealtad perpetua a una versión vieja de vos mismo. La psique sana no es un monumento estático de mármol, sino un río en perpetuo deshielo. Hoy tu inconsciente te libera del mandato de coherencia con tu pasado; tenés derecho pleno a cambiar de piel, de opinión y de horizonte.",
      "Jung enseñaba que allí donde habita tu mayor vértigo se esconde el tesoro que el dragón custodia. El Loco señala que has estado utilizando la 'prudencia racional' como una coartada elegante para postergar tu deseo más vital. Al desactivar el censor interno que exige garantías del cien por ciento, recuperarás de golpe el caudal de energía líbica y creativa que sentías bloqueado.",
      "La máscara bicolor del Arcano 0 —mitad plata lunar, mitad oro solar— revela que tu mente está lista para operar por encima del pensamiento binario de 'éxito o fracaso'. En la verdadera alquimia psicológica no existe el fracaso para quien camina despierto: todo paso hacia lo desconocido devuelve poder o devuelve sabiduría."
    ],

    lightAndShadow: "Al derecho (En Luz): Libertad creativa soberana, salto de fe respaldado por la sincronía, genialidad disruptiva, despojo de culpas heredadas y apertura total a lo extraordinario. Invertida (En Sombra): Huida hacia adelante para evadir compromisos reales, temeridad ciega, dispersión anárquica o parálisis por terror al vacío.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Libertad creativa soberana, salto de fe respaldado por la sincronía, genialidad disruptiva, despojo de culpas heredadas y apertura total a lo extraordinario. Invertida (En Sombra): Huida hacia adelante para evadir compromisos reales, temeridad ciega, dispersión anárquica o parálisis por terror al vacío.",
      "En su octava solar, El Loco es el sabio que danza sobre el abismo porque sabe que sus alas son reales; en su octava sombría, es el fugitivo que salta a ciegas solo para no enfrentar el espejo de su presente.",
      "Luz activa: Audacia magnética, mente de principiante sin vicios, frescura vital y fe inquebrantable en el propio instinto. Sombra latente: Caos administrativo, promesas al viento e incapacidad de sostener el fuego una vez encendido."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Ruptura de guiones oxidados y contratos basados en la costumbre o el miedo a la soledad. Si estás en pareja, exige oxigenar el vínculo con verdad desnuda, espontaneidad y aventura; si estás libre, anuncia un encuentro eléctrico e imprevisto que desarma todos tus moldes mentales.",
      work: "Momento fundacional para lanzar un proyecto independiente, explorar un mercado virgen o ejecutar una maniobra audaz que tu competencia jamás vería venir. Tu mayor ventaja competitiva hoy es no pensar como el resto del rubro.",
      money: "Flujo ligado a la innovación y a la agilidad de movimiento. Evitá inmovilizar recursos en estructuras pesadas o burocráticas; la ganancia viene por una vía nueva, creativa o tecnológica.",
      spirit: "Silencio del diálogo interno repetitivo y apertura al estado de Gracia (Baraka). Aprendé a leer las sincronías de la calle, los números y los encuentros casuales como respuestas literales del Oráculo.",
      healthAndEnergy: "Alto voltaje bioeléctrico en el sistema nervioso central y en los tobillos. Descargá el exceso de aire mental mediante caminatas largas al aire libre y respiración consciente."
    },
    domainsVariants: [
      {
        love: "Ruptura de guiones oxidados y contratos basados en la costumbre o el miedo a la soledad. Si estás en pareja, exige oxigenar el vínculo con verdad desnuda, espontaneidad y aventura; si estás libre, anuncia un encuentro eléctrico e imprevisto que desarma todos tus moldes mentales.",
        work: "Momento fundacional para lanzar un proyecto independiente, explorar un mercado virgen o ejecutar una maniobra audaz que tu competencia jamás vería venir. Tu mayor ventaja competitiva hoy es no pensar como el resto del rubro.",
        money: "Flujo ligado a la innovación y a la agilidad de movimiento. Evitá inmovilizar recursos en estructuras pesadas o burocráticas; la ganancia viene por una vía nueva, creativa o tecnológica.",
        spirit: "Silencio del diálogo interno repetitivo y apertura al estado de Gracia (Baraka). Aprendé a leer las sincronías de la calle, los números y los encuentros casuales como respuestas literales del Oráculo.",
        healthAndEnergy: "Alto voltaje bioeléctrico en el sistema nervioso central y en los tobillos. Descargá el exceso de aire mental mediante caminatas largas al aire libre y respiración consciente."
      },
      {
        love: "El amor bajo el signo de Aleph no tolera jaulas ni interrogatorios posesivos. Se abre una etapa de autenticidad radical donde solo sobrevive lo que vibra vivo y libre de máscaras; dejá de fingir lo que no sentís y el vínculo verdadero florecerá solo.",
        work: "Desprendimiento de una metodología vieja que ya tocó su techo. Un cambio brusco de estrategia, un prototipo experimental o una propuesta fuera de libreto te abrirá la puerta que los métodos formales mantenían trabada.",
        money: "Liberación de una carga financiera que te ataba al pasado. Confiá en tu capacidad de generar valor desde cero con tu ingenio actual en lugar de aferrarte a rentas menguantes.",
        spirit: "Práctica del desapego luminoso (Wu Wei): hacer tu movimiento con maestría total y soltar de inmediato la ansiedad por el resultado.",
        healthAndEnergy: "Renovación de la oxigenación celular y ligereza corporal. Excelente ventana para abandonar un hábito pesado de un día para el otro, sin transiciones tibias."
      },
      {
        love: "Magnetismo fresco y desarmante. Quien llegue o se acerque a tu vida en estos días responde a tu versión más genuina y salvaje, no a tu currículum social. Permitite sorprenderte sin levantar escudos defensivos antes de tiempo.",
        work: "El síndrome del experto suele cegar las mejores oportunidades; hoy triunfarás aplicando la 'mirada del principiante'. Hacé la pregunta que nadie se anima a hacer y probá la combinación que parecía heterodoxa.",
        money: "Oportunidad relámpago que exige liquidez mental y rapidez de reflejos. Mantené tu estructura liviana para poder girar el timón en veinticuatro horas si el viento cambia.",
        spirit: "Reconexión con el asombro sagrado de la infancia espiritual: recordar que el cosmos no es un tribunal severo, sino un laboratorio viviente.",
        healthAndEnergy: "Vitalidad nerviosa chispeante; cuidá las horas previas al sueño de la hiperestimulación mental porque tu antena psíquica está captando el doble de señales que de costumbre."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Ejecutá hoy mismo ese primer paso concreto que venís postergando por esperar 'tener todo bajo control': el control total es la excusa favorita de la parálisis.",
      prohibition: "Prohibido pedir opinión o aprobación hoy a personas cuya vida esté gobernada por el miedo al cambio o la obsesión por la seguridad.",
      psychomagicAct: "Sacá de tu billetera, bolsillo o cajón principal un objeto, papel o amuleto viejo que guardes 'por las dudas', despedite de la etapa que representaba y descartalo o regalalo hoy mismo antes del anochecer.",
      talismanPhrase: "Doy el paso en el vacío porque yo mismo soy el ala y el camino."
    },
    actionOracleVariants: [
      {
        command: "Ejecutá hoy mismo ese primer paso concreto que venís postergando por esperar 'tener todo bajo control': el control total es la excusa favorita de la parálisis.",
        prohibition: "Prohibido pedir opinión o aprobación hoy a personas cuya vida esté gobernada por el miedo al cambio o la obsesión por la seguridad.",
        psychomagicAct: "Sacá de tu billetera, bolsillo o cajón principal un objeto, papel o amuleto viejo que guardes 'por las dudas', despedite de la etapa que representaba y descartalo o regalalo hoy mismo antes del anochecer.",
        talismanPhrase: "Doy el paso en el vacío porque yo mismo soy el ala y el camino."
      },
      {
        command: "Cambiá deliberadamente tu ruta habitual hoy e introducí una variable imprevista en tu agenda para romper la hipnosis de la rutina.",
        prohibition: "No justifiques tu nueva decisión ante nadie con largas explicaciones racionales; tu soberanía no necesita defensa legal.",
        psychomagicAct: "Colocate de pie frente al umbral de la puerta de tu casa, inhalá profundo mirando hacia el techo, y cruzá el marco dando un salto con ambos pies juntos mientras nombrás en voz alta el nuevo ciclo que inaugurás.",
        talismanPhrase: "Ningún pasado me encadena; el Sol Blanco de Kether guía mi instinto."
      },
      {
        command: "Iniciá ese prototipo, mensaje o emprendimiento en su versión mínima viable hoy, sin esperar a pulir el último detalle cosmético.",
        prohibition: "No mires hacia atrás con nostalgia ni compares este territorio virgen con las reglas de tu etapa anterior.",
        psychomagicAct: "Tomá una hoja completamente en blanco, trazá en el centro un círculo dorado o amarillo (el Cero de Aleph), firmá dentro del círculo y guardala en tu lugar de trabajo durante siete días.",
        talismanPhrase: "Habito en la gracia del origen; donde apoyo mi fe, la roca florece."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano 0 abre el portal de tu lectura: una corriente de aire uraniano entra en tu tablero para barrer lo previsible.",
      secondAppearance: "El Loco sale a tu encuentro por segunda vez en pocos días: seguís parado en el borde del acantilado calculando la altura en lugar de saltar. La ventana de oportunidad está abierta ahora.",
      thirdAppearance: "Tercera llamada de Aleph: tu resistencia a soltar el viejo mapa ya se está volviendo sufrimiento innecesario. Si no das el paso por voluntad consciente hoy, el destino moverá la piedra bajo tus pies.",
      fourthPlusAppearance: "Insistencia crítica del Arcano 0: estás ante un mandato evolutivo ineludible. Cortá toda amarra secundaria de inmediato; el Oráculo no cambiará de discurso hasta que despegues los pies de la orilla."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "No esperes tener el mapa completo ni la aprobación ajena antes de dar el primer paso: el puente invisible se materializa exactamente cuando apoyás el pie en el vacío.",
    counselVariants: [
      "No esperes tener el mapa completo ni la aprobación ajena antes de dar el primer paso: el puente invisible se materializa exactamente cuando apoyás el pie en el vacío.",
      "Desconfiá de todo sendero que no te provoque al menos un escalofrío de reverencia y vértigo sagrado; viniste a expandir tu leyenda, no a conservar tus cenizas.",
      "Soltá el timón de la hipervigilancia: lo que tu ego asustado llama 'abismo' es el único espacio libre donde el espíritu puede desplegar las alas.",
      "El viajero que espera a que todos los semáforos del camino estén en verde jamás sale de su aldea.",
      "Sé tan liviano de rencores y tan puro de intención como el loto blanco que llevás en la mano, y ninguna tormenta tendrá dónde aferrarse para derribarte."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 78,
        y: 16,
        title: "El Sol Blanco de Kether",
        secret: "El astro incandescente en el ángulo superior derecho representa la Corona Primera e incondicionada del espíritu (Kether). A diferencia del sol físico que proyecta sombras sobre la tierra, esta radiación diamantina ilumina al iniciado desde atrás de la mente racional, garantizando que su salto está respaldado por el Origen.",
        esotericFormula: "Kether -> Aleph -> Chokmah (La Chispa antes de la Forma)",
        meditationPrompt: "¿Qué harías hoy si supieras con certeza absoluta que es imposible caer fuera de la gracia del universo?"
      },
      {
        id: "n2",
        x: 24,
        y: 44,
        title: "El Loto Blanco de Dieciséis Facetas",
        secret: "Sostenido entre los dedos articulados de su mano izquierda frente al abismo, este loto tallado en plata y cristal simboliza el deseo purificado de toda codicia o manipulación. En la ley hermética, la inocencia lúcida es el escudo más duro: el fuego del mundo no puede quemar a quien camina sin doble intención.",
        esotericFormula: "Rosa Alba / Loto Inmaculado = Intención sin Karma",
        meditationPrompt: "Observá tu deseo principal actual: ¿nace del hambre genuina de tu alma o del deseo de demostrarle algo a los demás?"
      },
      {
        id: "n3",
        x: 68,
        y: 74,
        title: "El Chacal de Plata y el Risco de Obsidiana",
        secret: "En la cornisa quebrada donde termina el mundo conocido, el guardián cinocéfalo (eco hermético de Anubis, abridor de los caminos) alza su cabeza poliédrica. No es un enemigo que te detiene, sino tu propio instinto animal despierto que te avisa que el pasado ya se desmoronó detrás de vos y la única dirección viva es hacia adelante.",
        esotericFormula: "Anubis-Hermes = El Instinto que custodia el Umbral",
        meditationPrompt: "¿Qué parte de tu instinto visceral has estado silenciando para parecer 'razonable' ante tu entorno?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO I • EL MAGO (BETH • EL ARQUITECTO DE LA VOLUNTAD CONSCIENTE)
  // ==========================================================================
  {
    id: 1,
    numeral: "I",
    name: "El Mago",
    subtitle: "Arquitecto de la Voluntad Consciente",
    palette: {
      primary: "#f59e0b",
      secondary: "#a855f7",
      glow: "rgba(168, 85, 247, 0.58)"
    },
    archetype: "magician",
    correspondences: {
      element: "Aire Solar / Mercurio Filosófico",
      astro: "Mercurio • El Señor del Verbo, la Mente y el Comercio",
      hebrewLetter: "Beth (ב) • La Casa donde habita el Espíritu Creador",
      treeOfLifePath: "Sendero 12 • Une Kether (La Corona) con Binah (El Entendimiento Formador)",
      alchemy: "Azoth y Calcinatio • El Agente Universal que fija la luz astral en la piedra",
      hermeticAxiom: "Lo que está abajo es como lo que está arriba, y lo que está arriba es como lo que está abajo, para consumar los milagros de una sola Cosa.",
      jungianArchetype: "El Demiurgo Consciente, Hermes Psicopompo y el Maestro del Oficio",
      tarotTiming: "Inmediato y ejecutivo: de 1 a 7 días, o miércoles bajo regencia mercurial",
      yesNo: "Sí rotundo (poseés todos los elementos; el resultado depende de tu ejecución hoy)",
      keywords: [
        "manifestación activa",
        "verbo creador",
        "maestría técnica",
        "foco láser",
        "alquimia operativa",
        "elocuencia magnética",
        "soberanía ejecutiva"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Mirá tu mesa de obsidiana: el fuego del Basto, el agua del Cáliz, el aire de la Daga y el oro del Pentáculo ya están dispuestos ante tus manos. Dejá de pedirle señales al cielo; hoy el cielo entero está en silencio esperando tu orden para condensarse en la materia.",
    oracleVoiceVariants: [
      "Mirá tu mesa de obsidiana: el fuego del Basto, el agua del Cáliz, el aire de la Daga y el oro del Pentáculo ya están dispuestos ante tus manos. Dejá de pedirle señales al cielo; hoy el cielo entero está en silencio esperando tu orden para condensarse en la materia.",
      "Mi brazo derecho empuña la vara hacia las estrellas y mi índice izquierdo señala la roca negra. Yo soy el pararrayos viviente entre el mundo de las ideas y el mundo de los hechos: todo lo que concibas con nitidez quirúrgica y pronuncies sin titubear tendrá que tomar cuerpo.",
      "No te falta ni un gramo de talento, ni una herramienta más, ni un curso adicional. Lo único que separa tu visión de su realización tangible es la dispersión de tu mirada: reuní tus rayos dispersos en una sola lente y encendé la Obra.",
      "Con la primera letra de mi nombre —Beth— fue creado el universo mediante la Palabra. Cuidá como oro fundido cada frase que salga hoy de tu boca: no estás describiendo tu realidad, la estás esculpiendo en vivo.",
      "El aprendiz espera que cambie el viento para navegar; el Mago gobierna los cuatro vientos desde el centro inmóvil de su altar. Tomá la daga del intelecto y el fuego del deseo: la hora de los ensayos ha terminado."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Mago (Arcano I) es el principio supremo de la Voluntad Consciente y el primer punto de condensación tras el vacío infinito de El Loco. En la Cábala hermética gobierna el Sendero 12 de la letra Beth (la Casa), canalizando la chispa incandescente de Kether hacia el gran útero arquitectónico de Binah. Su presencia en tu tirada anuncia que el tiempo de la espera pasiva o de la duda preliminar ha concluido por completo. Ya contás en tu haber con las cuatro armas elementales: la pasión creadora (Basto), la sensibilidad empática (Copa), la agudeza estratégica (Espada) y la capacidad de ejecución material (Pentáculo). Estás en la cúspide de tu poder manifestador.",
    meaningVariants: [
      "El Mago (Arcano I) es el principio supremo de la Voluntad Consciente y el primer punto de condensación tras el vacío infinito de El Loco. En la Cábala hermética gobierna el Sendero 12 de la letra Beth (la Casa), canalizando la chispa incandescente de Kether hacia el gran útero arquitectónico de Binah. Su presencia en tu tirada anuncia que el tiempo de la espera pasiva o de la duda preliminar ha concluido por completo. Ya contás en tu haber con las cuatro armas elementales: la pasión creadora (Basto), la sensibilidad empática (Copa), la agudeza estratégica (Espada) y la capacidad de ejecución material (Pentáculo). Estás en la cúspide de tu poder manifestador.",
      "Cuando el Arquitecto de la Voluntad preside la consulta, el axioma de Hermes Trismegisto se vuelve ley inmediata en tu jornada: tu mundo exterior está respondiendo como un espejo milimétrico a la estructura de tu mente. Mercurio te dota hoy de una lucidez técnica extraordinaria, reflejos veloces y un poder de persuasión capaz de destrabar cualquier negociación compleja. Donde otros ven problemas fragmentados, vos tenés la capacidad de ver el sistema completo y accionar la palanca exacta.",
      "En el laboratorio alquímico, el Arcano I representa la posesión del Azoth, el disolvente y coagulante universal. Esto significa que ninguna circunstancia actual en tu vida es rígida ni definitiva: tenés la potestad de tomar una materia prima adversa, rediseñarla mediante el ingenio y convertirla en una ventaja competitiva o espiritual. El Mago no compite en el tablero de otros; diseña su propio tablero.",
      "El misterio central de este Arcano reside en la Lemniscata dorada (el ocho horizontal del infinito) que levita sobre su corona. Ella revela que el verdadero operador no se agota, porque no empuja el mundo con la fuerza muscular de su ego limitado: se convierte en un canal hueco y cristalino por donde circula la corriente inagotable del cosmos. Cuando alineás tu intención personal con una obra de excelencia real, la energía se multiplica a medida que la usás.",
      "Este Arcano inaugura el ciclo del Uno: la unidad indivisible del propósito. Si venías dividiendo tu fuego entre múltiples frentes tibios, El Mago te exige elegir la piedra angular de tu edificio y descargar sobre ella todo el peso de tu atención. Una sola hora de trabajo bajo el estado de presencia absoluta del Arcano I produce resultados que diez semanas de trabajo mecánico jamás alcanzan."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "Desde la psicología analítica, El Mago marca el despertar de la Agencia Soberana del Yo frente al determinismo inconsciente. Dejás de narrar tu historia en voz pasiva ('me pasó esto', 'no me dejaron') para asumir la autoría total de tu guion. El único escollo psíquico a vigilar es la doble trampa mercurial: el síndrome del impostor que posterga el lanzamiento esperando 'saber un poco más', o la dispersión brillante que inicia diez obras maestras y abandona las diez en el ochenta por ciento.",
    psycheVariants: [
      "Desde la psicología analítica, El Mago marca el despertar de la Agencia Soberana del Yo frente al determinismo inconsciente. Dejás de narrar tu historia en voz pasiva ('me pasó esto', 'no me dejaron') para asumir la autoría total de tu guion. El único escollo psíquico a vigilar es la doble trampa mercurial: el síndrome del impostor que posterga el lanzamiento esperando 'saber un poco más', o la dispersión brillante que inicia diez obras maestras y abandona las diez en el ochenta por ciento.",
      "Tu psique se encuentra en una fase de alta integración entre los hemisferios: la intuición simbólica y el cálculo técnico están trabajando en tándem. Aprovechá este estado de flujo (Flow) para resolver los nudos de diseño, código, formulación o estrategia que en otros momentos te resultaban áridos; hoy tu mente corta como un diamante.",
      "Jung advertía que quien no reconoce su propio poder creador termina proyectándolo como envidia o admiración sumisa hacia figuras externas. El Mago te devuelve hoy tu propio cetro: admirabas en otros una capacidad de realización que ya está madura dentro de tus propias manos.",
      "La postura asimétrica de los brazos del Mago —uno al cielo, otro a la tierra— diagnostica que tu equilibrio emocional actual depende de materializar tus ideas. Si solo pensás y planeás sin bajar nada al plano físico, el exceso de voltaje astral se estanca en la cabeza como insomnio o rumiación; bajá la idea al taller hoy mismo y sentirás paz inmediata."
    ],

    lightAndShadow: "Al derecho (En Luz): Maestría ejecutiva, poder de manifestación tangible, elocuencia magnética, destreza técnica superior y alineación impecable entre pensamiento, palabra y obra. Invertida (En Sombra): Dispersión del talento en mil frentes, charlatanería, manipulación astuta o parálisis por perfeccionismo crónico.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Maestría ejecutiva, poder de manifestación tangible, elocuencia magnética, destreza técnica superior y alineación impecable entre pensamiento, palabra y obra. Invertida (En Sombra): Dispersión del talento en mil frentes, charlatanería, manipulación astuta o parálisis por perfeccionismo crónico.",
      "En Luz, el Mago es el alquimista que transmuta el plomo de la dificultad en oro real mediante el oficio y el verbo; en Sombra, es el ilusionista que vende humo dorado porque teme someter su obra a la prueba de la realidad.",
      "Luz activa: Iniciativa fulminante, ingenio resolutivo, dominio de herramientas complejas y magnetismo personal. Sombra latente: Agotamiento nervioso por hiperactividad mental sin anclaje a tierra."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Magnetismo intelectual y vital irresistible. No es tiempo de indirectas ni de esperar sentado: tomá la iniciativa, expresá tu deseo con elegancia directa y proponé una experiencia que rompa la inercia. En pareja, inaugura una etapa de gran complicidad creativa.",
      work: "Momento cumbre para desarrolladores, creadores, comerciantes, artesanos y estrategas. Cerrás acuerdos complejos gracias a tu solvencia técnica y capacidad de presentación; todo lo que diseñes o publiques hoy lleva el sello de la maestría.",
      money: "Generación activa de riqueza a través del ingenio, el comercio ágil, la creación de productos propios o la optimización brillante de recursos que ya tenías a mano sin explotar.",
      spirit: "Comprensión de la vida cotidiana como un templo de magia operativa: cada palabra que pronunciás y cada objeto que disponés en tu espacio actúa como un pantáculo viviente.",
      healthAndEnergy: "Excelente coordinación neuromotora, agudeza visual y destreza manual. Canalizá el fuego mental mediante el trabajo artesanal, la música o el entrenamiento de precisión."
    },
    domainsVariants: [
      {
        love: "Magnetismo intelectual y vital irresistible. No es tiempo de indirectas ni de esperar sentado: tomá la iniciativa, expresá tu deseo con elegancia directa y proponé una experiencia que rompa la inercia. En pareja, inaugura una etapa de gran complicidad creativa.",
        work: "Momento cumbre para desarrolladores, creadores, comerciantes, artesanos y estrategas. Cerrás acuerdos complejos gracias a tu solvencia técnica y capacidad de presentación; todo lo que diseñes o publiques hoy lleva el sello de la maestría.",
        money: "Generación activa de riqueza a través del ingenio, el comercio ágil, la creación de productos propios o la optimización brillante de recursos que ya tenías a mano sin explotar.",
        spirit: "Comprensión de la vida cotidiana como un templo de magia operativa: cada palabra que pronunciás y cada objeto que disponés en tu espacio actúa como un pantáculo viviente.",
        healthAndEnergy: "Excelente coordinación neuromotora, agudeza visual y destreza manual. Canalizá el fuego mental mediante el trabajo artesanal, la música o el entrenamiento de precisión."
      },
      {
        love: "La palabra justa en el momento exacto abre hoy cualquier cerradura emocional. Si había un malentendido o una distancia fría, tu capacidad de comunicar desde la verdad y el encanto magnético reconfigura el vínculo a tu favor.",
        work: "Dominio de la técnica por encima del promedio. Estás en condiciones de resolver en pocas horas un problema técnico o comercial que tenía frenado el proyecto, ganando autoridad indiscutida en tu terreno.",
        money: "Multiplicación del valor por alquimia comercial: combinar dos insumos, contactos o ideas que parecían separados para crear una oferta única y altamente rentable.",
        spirit: "Práctica de la concentración solar (Dharana): sostener una única imagen mental con los cinco sentidos internos hasta que el campo astral cede y la refleja.",
        healthAndEnergy: "Fuerte activación de la corteza cerebral, hombros, brazos y manos. Hidratate bien y hacé pausas de respiración profunda para que el entusiasmo creativo no tensione tus cervicales."
      },
      {
        love: "En el amor, El Mago une los cuatro elementos: la chispa erótica (Fuego), la ternura (Agua), la conversación fascinante (Aire) y los hechos concretos (Tierra). No te conformes con un vínculo al que le falte alguna de las cuatro patas de la mesa.",
        work: "Independencia operativa y liderazgo de autor. Es el momento ideal para presentar tu propuesta, lanzar tu plataforma o negociar condiciones desde una posición de fuerza basada en tu habilidad real.",
        money: "Flujo dinámico impulsado por ventas, lanzamientos o negociaciones directas. Evitá intermediarios innecesarios; cuando vos mismo tomás la palabra, el trato se cierra mejor.",
        spirit: "Unión de ciencia y mística: entender las leyes exactas de causa y efecto mediante las cuales el pensamiento modela la materia.",
        healthAndEnergy: "Vigor juvenil y reflejos rápidos; canalizá cualquier exceso de energía nerviosa al final del día construyendo, tocando un instrumento o entrenando fuerza."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Elegí la obra o tarea más decisiva de tu semana y dedicale hoy noventa minutos de foco indivisible, con el teléfono apagado y todas las pestañas secundarias cerradas.",
      prohibition: "Prohibido pronunciar hoy frases de impotencia o duda ('voy a intentar', 'es complicado', 'no tengo tiempo'): hablá únicamente en presente ejecutivo.",
      psychomagicAct: "Despejá por completo tu mesa de trabajo y disponé en sus cuatro esquinas los cuatro elementos reales durante tu jornada: una moneda o piedra (Tierra), una llave o pluma metálica (Aire), un vaso de agua limpia (Agua) y una fuente de luz o calor (Fuego).",
      talismanPhrase: "Como es arriba en mi visión, es abajo en mi obra; mi verbo ordena y mis manos materializan."
    },
    actionOracleVariants: [
      {
        command: "Elegí la obra o tarea más decisiva de tu semana y dedicale hoy noventa minutos de foco indivisible, con el teléfono apagado y todas las pestañas secundarias cerradas.",
        prohibition: "Prohibido pronunciar hoy frases de impotencia o duda ('voy a intentar', 'es complicado', 'no tengo tiempo'): hablá únicamente en presente ejecutivo.",
        psychomagicAct: "Despejá por completo tu mesa de trabajo y disponé en sus cuatro esquinas los cuatro elementos reales durante tu jornada: una moneda o piedra (Tierra), una llave o pluma metálica (Aire), un vaso de agua limpia (Agua) y una fuente de luz o calor (Fuego).",
        talismanPhrase: "Como es arriba en mi visión, es abajo en mi obra; mi verbo ordena y mis manos materializan."
      },
      {
        command: "Realizá hoy esa llamada, propuesta comercial o publicación clave que tenés lista en borrador: pasá del laboratorio mental a la arena real antes de que caiga la tarde.",
        prohibition: "No abras un proyecto nuevo hoy hasta no haber cerrado y entregado el eslabón que ya tenés sobre el altar.",
        psychomagicAct: "Ponete de pie en el centro de tu habitación, alzando tu mano derecha abierta hacia el techo y apuntando con el índice izquierdo hacia el suelo durante un minuto exacto, sintiendo que un hilo de oro líquido atraviesa tu columna de extremo a extremo.",
        talismanPhrase: "Soy el eje donde el relámpago de la idea se convierte en oro tangible."
      },
      {
        command: "Tomá los recursos exactos que ya tenés hoy a tu alcance —sin comprar ni esperar nada extra— y construí con ellos la solución al problema que te ocupaba.",
        prohibition: "No disperses tu poder contando tus planes a medias en charlas triviales; concentrá toda la presión en la ejecución.",
        psychomagicAct: "Escribí en una tarjeta con tinta negra o dorada la meta exacta que vas a consumar este mes, firmala con tu nombre completo y colocala debajo de un objeto de metal pesado en tu escritorio.",
        talismanPhrase: "Los cuatro elementos me obedecen porque mi atención es una sola lanza."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano I toma el mando de la tirada: las herramientas están dispuestas sobre el altar de obsidiana y la iniciativa te pertenece por completo.",
      secondAppearance: "El Mago comparece por segunda vez: tenés los cuatro elementos encendidos frente a tus manos, pero seguís afilando la daga sin dar el corte ejecutivo. Dejá de preparar la obra y ejecutala hoy.",
      thirdAppearance: "Tercera aparición del Arcano I: la energía creadora que no se descarga en hechos concretos empieza a quemar los circuitos de la mente en forma de ansiedad. Bajá la vara al altar ahora mismo.",
      fourthPlusAppearance: "Llamado supremo de Beth: el Oráculo te señala de forma inapelable como el único arquitecto de tu situación actual. Ningún factor externo te frena; asumí tu maestría y cerrá la obra."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Dejá de dudar o de acumular herramientas en silencio: reuní tu voluntad y canalizá todo tu fuego en una única obra maestra hoy mismo.",
    counselVariants: [
      "Dejá de dudar o de acumular herramientas en silencio: reuní tu voluntad y canalizá todo tu fuego en una única obra maestra hoy mismo.",
      "Un gran maestro no es aquel que colecciona mil instrumentos en su vitrina, sino quien domina con precisión quirúrgica los cuatro que tiene sobre su mesa.",
      "Los rayos del sol dispersos apenas entibian la hierba; concentrados a través de una sola lupa, encienden el fuego en segundos. Sé la lupa.",
      "Hablá la mitad de lo que pensás hacer y ejecutá el doble de lo que prometiste: la realidad se inclina ante los hechos consumados.",
      "Recordá que entre la inspiración divina y la piedra labrada el único puente sos vos."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "La Lemniscata de Oro Viviente",
        secret: "El símbolo del infinito suspendido sobre la frente del Mago representa el dominio sobre las dos corrientes del fluido astral (Solve et Coagula). Indica que la mente del iniciado ha superado la fatiga del esfuerzo forzado y opera conectada a la fuente perpetua del espíritu.",
        esotericFormula: "∞ = Circulatio Perpetua entre Espíritu y Materia",
        meditationPrompt: "¿En qué tarea sentís que el tiempo desaparece y la energía parece multiplicarse mientras trabajás?"
      },
      {
        id: "n2",
        x: 22,
        y: 44,
        title: "El Cetro de Doble Punta (As Above, So Below)",
        secret: "Su mano derecha alza la vara cristalina hacia el firmamento mientras su mano izquierda apunta con firmeza hacia la tierra negra. Este gesto hermético sella el circuito de manifestación: ninguna idea espiritual es completa hasta que encarna en un resultado material concreto, y ningún negocio material prospera sin un arquetipo superior que lo ilumine.",
        esotericFormula: "Kether (Voluntad) -> Tiphereth (Corazón) -> Malkuth (Reino)",
        meditationPrompt: "¿Qué idea brillante tenés hoy flotando en el aire que todavía no bajaste a una acción física con fecha y hora?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Altar de los Cuatro Elementos (YHVH)",
        secret: "Sobre la losa de obsidiana levitan el Basto (Yod/Fuego/Querer), la Copa (Heh/Agua/Saber), la Espada (Vav/Aire/Osar) y el Pentáculo (Heh final/Tierra/Callar). Juntos deletrean el Tetragrammaton sagrado y las cuatro virtudes del Mago: Querer con ardor, Saber con precisión, Osar sin miedo y Callar hasta consumar la obra.",
        esotericFormula: "Querer (Fuego) + Saber (Agua) + Osar (Aire) + Callar (Tierra) =El Arte Real",
        meditationPrompt: "De los cuatro pilares (Querer, Saber, Osar, Callar), ¿cuál de los cuatro es el que necesitás reforzar hoy mismo?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO II • LA SACERDOTISA (GIMEL • LA GUARDIANA DEL VELO Y EL ABISMO)
  // ==========================================================================
  {
    id: 2,
    numeral: "II",
    name: "La Sacerdotisa",
    subtitle: "Guardiana del Velo y la Memoria Akáshica",
    palette: {
      primary: "#60a5fa",
      secondary: "#c084fc",
      glow: "rgba(96, 165, 250, 0.58)"
    },
    archetype: "priestess",
    correspondences: {
      element: "Agua Abisal / Plata Lunar Cristalina",
      astro: "La Luna • Señora de las Mareas, el Subconsciente y la Memoria",
      hebrewLetter: "Gimel (ג) • El Camello que atraviesa el Desierto del Abismo (Da'ath)",
      treeOfLifePath: "Sendero 13 • El eje central supremo que une Kether (Corona) con Tiphereth (Belleza Solar)",
      alchemy: "Albedo y Solutio • El Espejo de Plata y el Agua Mercurial que disuelve las apariencias",
      hermeticAxiom: "Lo que se revela a los ojos profanos pierde su virtud; en la cámara sellada del silencio germina el destino.",
      jungianArchetype: "El Anima Sapiencial, Perséfone-Isis y la Guardiana del Inconsciente Colectivo",
      tarotTiming: "Un ciclo lunar completo (28 días), durante la noche o en fase de Luna Llena / Nueva",
      yesNo: "En gestación silenciosa (la verdad ya late bajo el velo; observá y callá antes de mover ficha)",
      keywords: [
        "gnosis intuitiva",
        "secreto estratégico",
        "incubación sagrada",
        "clarividencia",
        "lectura entre líneas",
        "columnas del templo",
        "imperio del silencio"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Todo lo que contás antes de tiempo se evapora como rocío al sol. Guardá tu semilla detrás de mis columnas de obsidiana y plata: quien domina el arte de callar gobierna sin esfuerzo sobre quienes necesitan mostrar sus cartas para sentirse importantes.",
    oracleVoiceVariants: [
      "Todo lo que contás antes de tiempo se evapora como rocío al sol. Guardá tu semilla detrás de mis columnas de obsidiana y plata: quien domina el arte de callar gobierna sin esfuerzo sobre quienes necesitan mostrar sus cartas para sentirse importantes.",
      "Buscás la respuesta golpeando puertas con los puños de la lógica, cuando la verdad entera ya te fue susurrada en los primeros tres segundos en que miraste el asunto a los ojos. Volvé a esa primera impresión fría: jamás se equivoca.",
      "Me siento entre Boaz, el pilar negro del rigor, y Jachin, el pilar plateado de la gracia. No te dejes arrastrar por ninguno de los dos extremos; desde mi trono de silencio verás cómo tus adversarios se desgastan solos por su propia impaciencia.",
      "Mi velo bordado con las diez esferas del Árbol de la Vida no está puesto para negarte la luz, sino para proteger tus ojos hasta que aprendas a ver en la oscuridad. Cerrá los párpados externos y mirá lo que brilla adentro.",
      "La semilla que se desentierra cada mañana por ansiedad para comprobar si ya echó raíces termina muriendo seca. Confiá en la alquimia nocturna de la tierra: lo que estás gestando en secreto es más grande de lo que imaginás."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Sacerdotisa (Arcano II) es la Guardiana del Sanctum Sanctorum y la soberana del Sendero 13 de Gimel, el único puente vertical que cruza el gran Abismo místico (Da'ath) uniendo directamente la Corona Divina (Kether) con el Sol del Corazón (Tiphereth). Cuando ella despliega su manto en tu lectura, te advierte que la partida que estás jugando no se define en la superficie visible, sino en las corrientes subterráneas. Hay factores ocultos, intenciones aún no declaradas y un proceso de gestación profunda en marcha. No es momento de forzar definiciones a los gritos ni de exponer tus planes a la intemperie: tu poder imbatible hoy radica en la reserva hermética, la observación quirúrgica y la obediencia absoluta a tu intuición.",
    meaningVariants: [
      "La Sacerdotisa (Arcano II) es la Guardiana del Sanctum Sanctorum y la soberana del Sendero 13 de Gimel, el único puente vertical que cruza el gran Abismo místico (Da'ath) uniendo directamente la Corona Divina (Kether) con el Sol del Corazón (Tiphereth). Cuando ella despliega su manto en tu lectura, te advierte que la partida que estás jugando no se define en la superficie visible, sino en las corrientes subterráneas. Hay factores ocultos, intenciones aún no declaradas y un proceso de gestación profunda en marcha. No es momento de forzar definiciones a los gritos ni de exponer tus planes a la intemperie: tu poder imbatible hoy radica en la reserva hermética, la observación quirúrgica y la obediencia absoluta a tu intuición.",
      "Tras la descarga activa y solar de El Mago en el Arcano I, La Sacerdotisa introduce el misterio del Dos: la reflexión lunar, la cámara oscura del laboratorio y el poder magnético del vacío fértil. Su presencia indica que ya tenés acceso a un saber superior o a una ventaja estratégica que otros desconocen. Si mantenés la boca cerrada y la mente serena como un lago sin viento, las personas y las circunstancias terminarán revelándote sus verdaderas cartas sin que tengas que hacer una sola pregunta.",
      "En la tradición iniciática de Isis Velada ('Ningún mortal ha levantado mi velo'), este Arcano certifica que tu antena psíquica está operando en su frecuencia más fina. Prestá atención milimétrica a tus sueños de las últimas noches, a los silencios incómodos en las conversaciones y a las sensaciones físicas en la boca del estómago cuando alguien te hace una promesa: tu cuerpo etérico ya leyó el pergamino completo antes de que tu intelecto termine de analizar la primera frase.",
      "Alquímicamente, La Sacerdotisa rige la *Albedo*, el blanqueamiento de la materia mediante el agua plateada de la Luna tras el fuego negro de la calcinación. Es un llamado a purificar tu mente de ruidos ajenos, opiniones prestadas y urgencias artificiales. Lo que hoy parece una pausa o una demora en el mundo exterior es, en verdad, el tiempo exacto de fermentación que tu obra necesita bajo tierra para nacer invulnerable.",
      "Sentada en el eje exacto del Pilar del Equilibrio entre la columna oscura de la Forma (Boaz) y la columna clara de la Fuerza (Jachin), La Sacerdotisa te enseña la ley de la neutralidad soberana. Cuando dejás de reaccionar emocionalmente a las provocaciones o a las fluctuaciones del día a día, adquirís la mirada del Oráculo: aquella que comprende las causas ocultas detrás de cada síntoma."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la cartografía de Jung, La Sacerdotisa encarna la función de la Intuición Introvertida en su grado máximo: aquella que no mira los objetos externos, sino las imágenes primordiales (arquetipos) que los mueven desde el fondo del inconsciente. Si últimamente sentís rechazo hacia las charlas superficiales o necesidad de resguardar tu intimidad, no te estás volviendo ermitaño por herida: tu psique está blindando un espacio de incubación creativa que el ruido social arruinaría.",
    psycheVariants: [
      "En la cartografía de Jung, La Sacerdotisa encarna la función de la Intuición Introvertida en su grado máximo: aquella que no mira los objetos externos, sino las imágenes primordiales (arquetipos) que los mueven desde el fondo del inconsciente. Si últimamente sentís rechazo hacia las charlas superficiales o necesidad de resguardar tu intimidad, no te estás volviendo ermitaño por herida: tu psique está blindando un espacio de incubación creativa que el ruido social arruinaría.",
      "Este Arcano pone bajo la lupa el hábito neurótico de 'sobreexplicarse'. Cada vez que contás un proyecto embrionario o justificás tus decisiones íntimas ante terceros para calmar tu ansiedad, abrís una fisura en el vaso alquímico (Vas Hermeticum) y perdés la presión psíquica necesaria para concretarlo. Aprender a habitar el propio secreto sin culpa es el sello de la madurez espiritual.",
      "La Sacerdotisa señala una disonancia entre lo que tu razón intenta autoconvencerse de aceptar y lo que tu instinto profundo ya diagnosticó. Dejá de pedirle pruebas forenses a tu sexto sentido; cuando algo no te cierra en la vibración sutil, esa incomodidad silenciosa es el dato más objetivo de todo el tablero.",
      "El velo que se extiende detrás de su trono representa la frontera sana entre tu mundo público y tu santuario interior. No todo el que te sonríe tiene derecho de admisión a tu cámara secreta; elegí con rigor sacerdotal a quién le abrís las puertas de tu intimidad."
    ],

    lightAndShadow: "Al derecho (En Luz): Clarividencia intuitiva infalible, prudencia estratégica, custodia impecable de secretos, gestación fértil en silencio y sabiduría profunda. Invertida (En Sombra): Frialdad glacial defensiva, agendas ocultas o engaños velados, desoír la propia corazonada por inseguridad o pasividad que deja pasar el tren.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Clarividencia intuitiva infalible, prudencia estratégica, custodia impecable de secretos, gestación fértil en silencio y sabiduría profunda. Invertida (En Sombra): Frialdad glacial defensiva, agendas ocultas o engaños velados, desoír la propia corazonada por inseguridad o pasividad que deja pasar el tren.",
      "En su faz luminosa, La Sacerdotisa es el lago profundo que refleja las estrellas con exactitud porque está en calma; en su sombra, es el pantano estancado que esconde lo que no se atreve a sanar.",
      "Luz activa: Cuarta virtud del Mago consumada (Callar), estudio esotérico o técnico profundo, ventaja de información y magnetismo misterioso. Sombra latente: Aislamiento emocional, suspicacia excesiva o saber mucho sin aplicarlo jamás."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Conexión psíquica y magnética que habla con las miradas antes que con la boca. En pareja, invita a cultivar la intimidad sagrada sin exponer la vida privada a miradas ajenas; si estás conociendo a alguien, no te apresures a rotular: observá sus hechos en silencio y dejá que el tiempo revele su verdadera fibra.",
      work: "Fase de I+D (Investigación y Desarrollo), formulación secreta, auditoría silenciosa y estrategia de ajedrez. Guardá bajo siete llaves tus costos, recetas, algoritmos o próximos lanzamientos hasta el día exacto en que salgan a la luz.",
      money: "Prudencia patrimonial e inteligencia financiera discreta. Excelente momento para acumular reservas en silencio, estudiar contratos con lupa para detectar la letra chica y no ostentar ganancias ante terceros.",
      spirit: "Apertura cristalina del centro Ajna (Tercer Ojo), sueños premonitorios y maestría en las artes adivinatorias y meditativas.",
      healthAndEnergy: "Gobierna el sistema linfático, los fluidos internos, la glándula pineal y los ritmos circadianos del sueño. El descanso en oscuridad total y el silencio regeneran tu energía al triple de velocidad."
    },
    domainsVariants: [
      {
        love: "Conexión psíquica y magnética que habla con las miradas antes que con la boca. En pareja, invita a cultivar la intimidad sagrada sin exponer la vida privada a miradas ajenas; si estás conociendo a alguien, no te apresures a rotular: observá sus hechos en silencio y dejá que el tiempo revele su verdadera fibra.",
        work: "Fase de I+D (Investigación y Desarrollo), formulación secreta, auditoría silenciosa y estrategia de ajedrez. Guardá bajo siete llaves tus costos, recetas, algoritmos o próximos lanzamientos hasta el día exacto en que salgan a la luz.",
        money: "Prudencia patrimonial e inteligencia financiera discreta. Excelente momento para acumular reservas en silencio, estudiar contratos con lupa para detectar la letra chica y no ostentar ganancias ante terceros.",
        spirit: "Apertura cristalina del centro Ajna (Tercer Ojo), sueños premonitorios y maestría en las artes adivinatorias y meditativas.",
        healthAndEnergy: "Gobierna el sistema linfático, los fluidos internos, la glándula pineal y los ritmos circadianos del sueño. El descanso en oscuridad total y el silencio regeneran tu energía al triple de velocidad."
      },
      {
        love: "El misterio es el combustible del deseo duradero. Evitá volcar toda tu ansiedad en interrogatorios o demandas inmediatas; cuando habitás tu propio centro con serenidad enigmática, te volvés magnéticamente inolvidable.",
        work: "Hay información valiosa en tu rubro o entorno laboral que aún no salió a la superficie. Escuchá el doble de lo que hablás en las reuniones de esta semana: quien hace la pregunta justa y guarda silencio se queda con la llave del negocio.",
        money: "Inversión en conocimiento especializado, propiedad intelectual o activos que maduran a mediano plazo sin hacer ruido. No sigas modas financieras ruidosas de la multitud.",
        spirit: "Acceso a la biblioteca akáshica interior: descubrir que la respuesta que buscabas en diez libros externos ya estaba grabada en tu propia memoria celular.",
        healthAndEnergy: "Alta sensibilidad a los ambientes cargados; limpiá tu espacio de trabajo, hidratá tu cuerpo con agua mineral y respetá tus horas de retiro nocturno."
      },
      {
        love: "Si existía una duda sobre las intenciones reales de alguien cercano, La Sacerdotisa anuncia que un detalle sutil o una sincronía dejará todo al descubierto en estos días sin que tengas que confrontar.",
        work: "Perfeccionamiento técnico puertas adentro. Pulí la arquitectura interna de tu obra, tu código o tu producto lejos del ojo público; cuando finalmente corras el velo, la calidad hablará por sí sola.",
        money: "Detección temprana de fugas ocultas o gastos invisibles gracias a una revisión minuciosa y fría de tus números.",
        spirit: "Comunión con el principio lunar de la receptividad: entender que la mente en silencio capta soluciones que la mente agitada espanta.",
        healthAndEnergy: "Equilibrio endocrino y nervioso a través de la quietud; veinte minutos de silencio absoluto a mitad de la jornada te devolverán más lucidez que tres tazas de café."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Sellá un pacto de silencio absoluto durante siete días sobre tu proyecto, inversión o movimiento personal más importante; trabajá en él sin nombrarlo afuera.",
      prohibition: "Prohibido firmar acuerdos, responder provocaciones en caliente o revelar tus cartas estratégicas por ansiedad de aprobación.",
      psychomagicAct: "Esta noche, colocá una copa o vaso de vidrio transparente con agua pura junto a tu cama y debajo apoyá un papel con el interrogante que necesitás descifrar. Al despertar mañana, bebé el agua en silencio antes de mirar el teléfono y anotá la primera certeza que cruce tu mente.",
      talismanPhrase: "Habito entre las dos columnas en silencio soberano; todo lo oculto se desnuda ante mi intuición."
    },
    actionOracleVariants: [
      {
        command: "Sellá un pacto de silencio absoluto durante siete días sobre tu proyecto, inversión o movimiento personal más importante; trabajá en él sin nombrarlo afuera.",
        prohibition: "Prohibido firmar acuerdos, responder provocaciones en caliente o revelar tus cartas estratégicas por ansiedad de aprobación.",
        psychomagicAct: "Esta noche, colocá una copa o vaso de vidrio transparente con agua pura junto a tu cama y debajo apoyá un papel con el interrogante que necesitás descifrar. Al despertar mañana, bebé el agua en silencio antes de mirar el teléfono y anotá la primera certeza que cruce tu mente.",
        talismanPhrase: "Habito entre las dos columnas en silencio soberano; todo lo oculto se desnuda ante mi intuición."
      },
      {
        command: "En tu próxima conversación o negociación clave, hablá un cincuenta por ciento menos de lo habitual y sostené una pausa de tres segundos en silencio antes de responder cada punto.",
        prohibition: "No desestimés bajo ningún pretexto esa primera advertencia visceral que sentiste al conocer una propuesta o persona.",
        psychomagicAct: "Escribí tu meta secreta en una hoja pequeña, doblala tres veces hacia vos, guardala dentro de un libro sagrado o de estudio que aprecies y no la abras hasta el próximo plenilunio.",
        talismanPhrase: "Mi silencio es el vaso alquímico donde el oro madura sin fisuras."
      },
      {
        command: "Dedicate hoy a auditar lo que está debajo de la alfombra: leé la letra chica, revisá el código fuente o analizá los números reales sin quedarte con el resumen superficial.",
        prohibition: "No entregues tu intimidad ni tus fórmulas de trabajo a quien todavía no demostró lealtad a través del tiempo.",
        psychomagicAct: "Lavate las manos y las muñecas con agua fría y una pizca de sal antes de iniciar tu tarea principal de hoy, declarando que limpiás tu antena mental de todo ruido u opinión ajena.",
        talismanPhrase: "Como la Luna sobre el abismo, veo en la sombra lo que el día ignora."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano II corre el velo interior: entrás en una zona donde el silencio y la lectura entre líneas valen más que la fuerza bruta.",
      secondAppearance: "La Sacerdotisa aparece por segunda vez en tu registro: estás hablando de más sobre algo que requiere reserva hermética, o bien seguís pidiendo pruebas racionales para una verdad que tu intuición ya te gritó en silencio.",
      thirdAppearance: "Tercera comparecencia del Arcano II: alerta de indiscreción o ceguera voluntaria. Cerrá las compuertas externas de inmediato; hay un dato oculto en tu situación actual que solo verás si hacés silencio total.",
      fourthPlusAppearance: "Mandato supremo de Gimel: La Guardiana del Templo bloquea toda acción impulsiva hasta que te sientes a solas con tu conciencia y reconozcas la verdad que estás evitando mirar."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Guardá silencio absoluto sobre tus próximos movimientos: el misterio es el escudo sagrado donde germina tu verdadero poder.",
    counselVariants: [
      "Guardá silencio absoluto sobre tus próximos movimientos: el misterio es el escudo sagrado donde germina tu verdadero poder.",
      "El agua turbia jamás se aclara revolviéndola con la mano; dejala quieta en la copa y el barro caerá al fondo por su propio peso.",
      "Quien revela su obra antes de forjarla gasta en aplausos imaginarios el fuego que necesitaba para el yunque.",
      "Escuchá lo que las personas hacen cuando creen que nadie las mira: ahí está escrito el verdadero pergamino.",
      "Tu intuición no necesita justificarse en un tribunal lógico; ella vio el final de la película en el primer fotograma."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 16,
        title: "La Corona Hathórica de la Triple Luna",
        secret: "El disco solar de oro flanqueado por los dos cuernos lunares de plata representa las tres fases de la conciencia (Creciente, Llena y Menguante) y el dominio sobre el pasado, el presente y el devenir. Corona la frente de la Sacerdotisa para indicar que la verdadera clarividencia une la luz de la razón solar con la receptividad lunar.",
        esotericFormula: "Luna Creciente + Plenilunio + Luna Menguante = Gnosis Temporal",
        meditationPrompt: "¿Qué ciclo en tu vida está hoy en fase de gestación oculta y necesita que no lo apures?"
      },
      {
        id: "n2",
        x: 18,
        y: 50,
        title: "Las Columnas Gemelas Boaz y Jachin",
        secret: "A su derecha se alza Boaz en obsidiana negra ('En Él está la Fuerza' / Severidad y Forma) y a su izquierda Jachin en plata y oro ('Él establecerá' / Misericordia y Expansión). La Sacerdotisa jamás se apoya en una sola: habita en el Pilar del Medio, enseñándote que el poder supremo nace de equilibrar el rigor técnico con la visión inspirada.",
        esotericFormula: "Boaz (Severidad) + Jachin (Clemencia) = El Pilar del Medio (Conciencia)",
        meditationPrompt: "¿En qué área de tu vida te estás yendo hoy a un extremo rígido en lugar de habitar el centro estratégico?"
      },
      {
        id: "n3",
        x: 50,
        y: 66,
        title: "El Pergamino Astral y el Velo del Árbol",
        secret: "Sobre su regazo descansa el rollo de la Ley Esotérica (TORA / ROTA) parcialmente cubierto por su manto, mientras detrás de ella brilla el diagrama de las diez Sephiroth y la creciente lunar a sus pies. Revela que las leyes que gobiernan tu fortuna están escritas en código simbólico: solo se abren ante quien observa con paciencia y reverencia.",
        esotericFormula: "TORA -> ROTA -> TARO (La Ley Oculta que mueve la Rueda)",
        meditationPrompt: "¿Qué verdad íntima ya leíste en tu propio pergamino interior aunque todavía no la hayas pronunciado en voz alta?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR (ROTACIÓN POLIMÓRFICA Y MEMORIA)
// ============================================================================
(function initSolarGrimoireVolume1() {
  window.DATOS_SOL_1 = DATOS_SOL_1;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_1.forEach(function (card) {
    const existingIdx = window.DATOS_SOL.findIndex(function (c) {
      return Number(c.id) === Number(card.id);
    });
    if (existingIdx !== -1) {
      window.DATOS_SOL[existingIdx] = card;
    } else {
      window.DATOS_SOL.push(card);
    }
  });

  // Sincronización automática con MAJOR_ARCANA (datos_cartas.js) para retrocompatibilidad total
  if (!window.MAJOR_ARCANA) {
    window.MAJOR_ARCANA = [];
  }
  DATOS_SOL_1.forEach(function (solarCard) {
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

  // Inicializar el Motor Polimórfico Solar (si no fue inicializado por otro volumen)
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
      /**
       * Devuelve la carta con sus textos rotados dinámicamente según el historial
       * del consultante y activa las alertas de sincronicidad si la carta se repite.
       * @param {Object|number|string} cardOrId - Objeto de carta o ID numérico (0..21)
       * @param {boolean} [recordDraw=true] - Si es true, registra la aparición en localStorage
       */
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
            synchronicityMessage = baseCard.synchronicityHook.fourthPlusAppearance || baseCard.synchronicityHook.thirdAppearance;
          } else if (recentCount === 3) {
            synchronicityMessage = baseCard.synchronicityHook.thirdAppearance;
          } else if (recentCount === 2) {
            synchronicityMessage = baseCard.synchronicityHook.secondAppearance;
          } else {
            synchronicityMessage = baseCard.synchronicityHook.firstAppearance || null;
          }
        }

        const activeDomains = pickVariant(baseCard.domainsVariants, baseCard.domains, cursor, 0);
        const activeActionOracle = pickVariant(baseCard.actionOracleVariants, baseCard.actionOracle, cursor, 1);

        return Object.assign({}, baseCard, {
          oracleVoice: pickVariant(baseCard.oracleVoiceVariants, baseCard.oracleVoice, cursor, 0),
          meaning: pickVariant(baseCard.meaningVariants, baseCard.meaning, cursor, 0),
          psyche: pickVariant(baseCard.psycheVariants, baseCard.psyche, cursor, 0),
          lightAndShadow: pickVariant(baseCard.lightAndShadowVariants, baseCard.lightAndShadow, cursor, 0),
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
// ============================================================================
// ARCHIVO: datos_sol_4.js
// GRIMORIO SOLAR DEFINITIVO (EN LUZ) • VOLUMEN IV: ARCANOS XI, XII, XIII y XIV
// XI • La Justicia | XII • El Colgado | XIII • La Muerte | XIV • La Templanza
// Motor Polimórfico de Variantes Múltiples + Memoria de Sincronicidad Kármica
// Retrocompatible con datos_cartas.js, motor_tarot.js, motor_tirada.js y layout_arcano.js
// ============================================================================

const DATOS_SOL_4 = [
  // ==========================================================================
  // ARCANO XI • LA JUSTICIA (LAMED • LA DAMA DE LA BALANZA Y EL FILO)
  // ==========================================================================
  {
    id: 11,
    numeral: "XI",
    name: "La Justicia",
    subtitle: "La Dama de la Balanza y el Filo",
    palette: {
      primary: "#e2e8f0",
      secondary: "#eab308",
      glow: "rgba(234, 179, 8, 0.55)"
    },
    archetype: "justice",
    correspondences: {
      element: "Aire Cardinal / Acero Templado en Equilibrio",
      astro: "Libra • Saturno Exaltado en el Trono de Venus",
      hebrewLetter: "Lamed (ל) • El Aguijón del Boyero y el Brazo que se extiende hacia la Altura",
      treeOfLifePath: "Sendero 22 • Conecta Geburah (El Rigor Marcial) con Tiphereth (La Conciencia Solar)",
      alchemy: "Pondus et Mensura • La Pesada Exacta de los Elementos y el Equilibrio del Fuego",
      hermeticAxiom: "Ninguna hoja cae del árbol sin que el eje del cosmos ajuste su contrapeso; vos sos a la vez el juez, la espada y la semilla juzgada.",
      jungianArchetype: "Ma'at / Temis, la Función Racional Evaluadora y la Impecabilidad Ética del Yo",
      tarotTiming: "Septiembre-Octubre (Libra), resoluciones contractuales o cosecha inmediata de actos previos",
      yesNo: "Sí (si tu causa es recta y tus cuentas están limpias; cosechás exactamente lo sembrado)",
      keywords: [
        "ley de causa y efecto",
        "impecabilidad kármica",
        "discernimiento quirúrgico",
        "equilibrio dinámico",
        "verdad desnuda",
        "fallo definitivo",
        "pluma de maat"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "No me reces pidiendo indulgencia ni me temas como a un verdugo. Mi balanza de oro no castiga ni premia: simplemente te devuelve el peso exacto de tus propias elecciones. Si sembraste verdad en el silencio, hoy recibís tu corona.",
    oracleVoiceVariants: [
      "No me reces pidiendo indulgencia ni me temas como a un verdugo. Mi balanza de oro no castiga ni premia: simplemente te devuelve el peso exacto de tus propias elecciones. Si sembraste verdad en el silencio, hoy recibís tu corona.",
      "Mirá mi espada vertical de plata lunar: no está alzada para herir con rabia, sino para separar de un solo tajo la realidad objetiva de las excusas que te contás para no cambiar.",
      "Sobre mis ojos llevo una venda de oro fundido porque no me dejo sobornar por las lágrimas del victimismo ni por el brillo de las apariencias. En mi sala solo hablan los hechos consumados.",
      "En un platillo pongo tu corazón y en el otro la Pluma blanca de Ma'at. Aligerá hoy tu pecho de rencores, deudas morales y mentiras piadosas: solo el corazón liviano como una pluma cruza el umbral.",
      "Mi letra es Lamed, la más alta del alfabeto sagrado. Te enseño que la libertad verdadera no es el capricho de hacer cualquier cosa, sino la soberanía geométrica de vivir en perfecta proporción con tu propia ley."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Justicia (Arcano XI) encarna la Ley Cósmica de Causa y Efecto (Karma y Dharma), la precisión matemática del universo y el equilibrio activo que sostiene la creación. En el Árbol de la Vida rige el Sendero 22 de la letra Lamed, canalizando el fuego corrector de Geburah hacia la armonía solar de Tiphereth bajo el signo de Libra (donde Venus aporta la armonía y Saturno exaltado aporta el rigor del tiempo y la estructura). Su aparición en tu lectura anuncia la hora de la verdad objetiva: se cierran cuentas pendientes, se firman contratos definitivos y recibís la retribución exacta de tu mérito. Para triunfar bajo su mirada, debés operar con honestidad quirúrgica, cortar lo que sobra y eliminar todo autoengaño.",
    meaningVariants: [
      "La Justicia (Arcano XI) encarna la Ley Cósmica de Causa y Efecto (Karma y Dharma), la precisión matemática del universo y el equilibrio activo que sostiene la creación. En el Árbol de la Vida rige el Sendero 22 de la letra Lamed, canalizando el fuego corrector de Geburah hacia la armonía solar de Tiphereth bajo el signo de Libra (donde Venus aporta la armonía y Saturno exaltado aporta el rigor del tiempo y la estructura). Su aparición en tu lectura anuncia la hora de la verdad objetiva: se cierran cuentas pendientes, se firman contratos definitivos y recibís la retribución exacta de tu mérito. Para triunfar bajo su mirada, debés operar con honestidad quirúrgica, cortar lo que sobra y eliminar todo autoengaño.",
      "En el Libro de los Muertos egipcio, esta escena corresponde a la *Psicostasia* en la Sala de las Dos Verdades: Anubis pesa el corazón del iniciado (*Ib*) contra la pluma de avestruz de la diosa Ma'at (el orden cósmico). Cuando el Arcano XI preside tu tirada, tu propia conciencia te sienta en esa sala. No busques culpables afuera ni esperes golpes de azar: tenés el poder total de inclinar el fiel de la balanza a tu favor hoy mismo mediante una decisión recta, fría e inapelable.",
      "Observá la posición de La Justicia inmediatamente después de La Rueda de la Fortuna (Arcano X): mientras la Rueda giraba movida por las fuerzas del destino, La Justicia clava el eje vertical de su espada para establecer la responsabilidad individual. Te recuerda que aunque no siempre elegís el viento que sopla en el mercado o en la vida, sos cien por ciento soberano de cómo ajustás la contabilidad, la ética y el corte de tu timón.",
      "Alquímicamente, el Arcano XI representa la ley de las proporciones exactas (*Pondus et Mensura*). Un gramo de más o de menos de fuego o de mercurio arruina el cristal del laboratorio. Tu proyecto, tu sociedad o tu vínculo actual no necesita más volumen desordenado, sino calibración fina: equilibrar el dar con el recibir, el costo con el precio, y la exigencia con la recompensa.",
      "En su octava más luminosa, La Justicia es una carta de reivindicación y orden restaurado. Si habías trabajado con excelencia silenciosa sin que parecieran notarlo, o si atravesabas un litigio, auditoría o negociación tensa, la espada de Lamed despeja las sombras y pone cada pieza en el lugar que por derecho propio le corresponde."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología analítica de Jung, La Justicia representa la madurez de la Función del Pensamiento unida a la conciencia ética del Yo. El ser humano neurótico vive atrapado en el triángulo dramático de 'víctima, perseguidor o salvador', culpando siempre al mundo de sus tropiezos. Integrar este Arcano significa asumir la autoría adulta de tus resultados: comprender que cada hábito diario es un voto que emite una sentencia futura.",
    psycheVariants: [
      "En la psicología analítica de Jung, La Justicia representa la madurez de la Función del Pensamiento unida a la conciencia ética del Yo. El ser humano neurótico vive atrapado en el triángulo dramático de 'víctima, perseguidor o salvador', culpando siempre al mundo de sus tropiezos. Integrar este Arcano significa asumir la autoría adulta de tus resultados: comprender que cada hábito diario es un voto que emite una sentencia futura.",
      "Este Arcano diagnostica las 'deudas invisibles del alma': promesas que te hiciste a vos mismo y no cumpliste, o acuerdos desbalanceados donde entregás de más por miedo al conflicto y luego cobrás la factura en forma de resentimiento silencioso. La salud psíquica exige reciprocidad clara y cuentas transparentes.",
      "La espada de doble filo simboliza la capacidad de discriminación intelectual libre de neblina emocional. Cuando te enfrentás a un nudo complejo, tu mente tiende a mezclar hechos reales con miedos imaginarios o culpas viejas. La Justicia te pide usar el bisturí lógico: separá los datos verificables de las novelas emocionales y la solución aparecerá en cinco minutos.",
      "Cuidado con la sombra saturnina de este arquetipo en tu psique: el Juez Interior implacable que te condena por errores del pasado que ya pagaste con aprendizaje. La verdadera Justicia hermética no es masoquismo moral; es comprensión de la ley, ajuste del rumbo y restitución del equilibrio."
    ],

    lightAndShadow: "Al derecho (En Luz): Integridad inquebrantable, fallos legales o comerciales favorables, equilibrio restaurado, acuerdos transparentes, lucidez racional y cosecha justa. Invertida (En Sombra): Parcialidad, autoengaño para no asumir responsabilidades, severidad cruel, burocracia trabada o contratos asimétricos.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Integridad inquebrantable, fallos legales o comerciales favorables, equilibrio restaurado, acuerdos transparentes, lucidez racional y cosecha justa. Invertida (En Sombra): Parcialidad, autoengaño para no asumir responsabilidades, severidad cruel, burocracia trabada o contratos asimétricos.",
      "En Luz, La Justicia es el cirujano sereno cuyo corte preciso salva el organismo y devuelve la armonía; en Sombra, es el tribunal hipócrita que mide a los demás con vara de hierro y a sí mismo con vara de goma.",
      "Luz activa: Precisión contable y contractual, reciprocidad afectiva, mente fría bajo presión y honorabilidad probada. Sombra latente: Indecisión por pesar eternamente los platillos sin bajar nunca la espada."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Relaciones basadas en la paridad real, el respeto mutuo y la verdad sin rodeos. Es el momento de equilibrar la balanza entre lo que das y lo que recibís, hablar con honestidad cristalina y sellar acuerdos o compromisos formales donde ambas partes se sientan honradas.",
      work: "Excelente augurio para firmas de contratos, sociedades legales, auditorías, licitaciones y negociaciones donde priman los números claros y la calidad comprobable. Tu rectitud comercial y cumplimiento estricto te colocan por encima de cualquier competidor.",
      money: "Ordenamiento definitivo de balances, cobro de deudas legítimas, indemnizaciones favorables y fijación justa de precios y márgenes. El dinero fluye allí donde la contabilidad es impecable.",
      spirit: "Vivir bajo la Pluma de Ma'at: alinear pensamiento, palabra y obra hasta que tu conciencia sea un espejo sin manchas donde el espíritu no encuentra resistencia.",
      healthAndEnergy: "Rige los riñones (los órganos balanza que filtran y equilibran el medio interno), las glándulas suprarrenales y la columna lumbar (Libra). Hidratación pura y equilibrio entre horas de tensión y reposo."
    },
    domainsVariants: [
      {
        love: "Relaciones basadas en la paridad real, el respeto mutuo y la verdad sin rodeos. Es el momento de equilibrar la balanza entre lo que das y lo que recibís, hablar con honestidad cristalina y sellar acuerdos o compromisos formales donde ambas partes se sientan honradas.",
        work: "Excelente augurio para firmas de contratos, sociedades legales, auditorías, licitaciones y negociaciones donde priman los números claros y la calidad comprobable. Tu rectitud comercial y cumplimiento estricto te colocan por encima de cualquier competidor.",
        money: "Ordenamiento definitivo de balances, cobro de deudas legítimas, indemnizaciones favorables y fijación justa de precios y márgenes. El dinero fluye allí donde la contabilidad es impecable.",
        spirit: "Vivir bajo la Pluma de Ma'at: alinear pensamiento, palabra y obra hasta que tu conciencia sea un espejo sin manchas donde el espíritu no encuentra resistencia.",
        healthAndEnergy: "Rige los riñones (los órganos balanza que filtran y equilibran el medio interno), las glándulas suprarrenales y la columna lumbar (Libra). Hidratación pura y equilibrio entre horas de tensión y reposo."
      },
      {
        love: "Si había un reclamo silencioso o una asimetría en la pareja, La Justicia pide sentarse a la mesa sin dramatismo a renegociar el pacto con madurez: las cuentas claras conservan la pasión y la paz.",
        work: "Poda ejecutiva necesaria: aquello que no rinde en proporción al tiempo y capital que le invertís debe ser cortado hoy con la espada para alimentar las líneas de trabajo verdaderamente rentables.",
        money: "Protección legal y patrimonial: poné todos tus acuerdos por escrito, registrá tus marcas o fórmulas y no dejes cabos sueltos librados a la 'buena fe' verbal.",
        spirit: "Comprensión de la Ley de Compensación de Emerson y el Hermetismo: nadie puede quitarte lo que por derecho de conciencia te pertenece, ni conservar lo que obtuvo sin mérito.",
        healthAndEnergy: "Homeostasis bioquímica: revisá tus niveles minerales, el equilibrio ácido-base y la simetría postural al trabajar."
      },
      {
        love: "Para quien busca pareja, anuncia la llegada de un vínculo maduro y simétrico con alguien que valora la lealtad, la inteligencia y la palabra cumplida por encima de los juegos superficiales.",
        work: "Resolución de un conflicto societario o comercial mediante un criterio objetivo e imparcial. Cuando ponés las métricas reales sobre la mesa, las discusiones de ego se terminan en el acto.",
        money: "Retorno kármico financiero: un favor, un trabajo bien hecho en el pasado o una inversión cuidada con paciencia devuelve hoy su dividendo exacto.",
        spirit: "El Sendero de Lamed como aguijón evolutivo: usar cada consecuencia de la vida no para lamentarse, sino para calibrar la puntería del espíritu.",
        healthAndEnergy: "Serenidad del sistema nervioso autónomo cuando decís la verdad; callar una injusticia contractura la cintura, hablar con justeza libera el cuerpo."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Tomá hoy una hoja dividida en dos columnas, pesá los hechos objetivos sin anestesia emocional y ejecutá el corte o el acuerdo que restablezca el equilibrio en tu semana.",
      prohibition: "Prohibido autoengañarte con excusas blandas, postergar el pago de una deuda moral o material, o aceptar un trato donde la balanza esté inclinada en tu contra.",
      psychomagicAct: "Colocá frente a vos una pluma (o una hoja blanca liviana) a tu izquierda y una piedra o moneda pesada a tu derecha; escribí en una nota la decisión justa que debés tomar hoy y ponela exactamente en el punto medio entre ambas, tocándola con el canto de una regla o cuchillo limpio como sello de sentencia firme.",
      talismanPhrase: "Mi mente es la balanza de oro y mi palabra es el filo de plata; habito en el equilibrio impecable de la Ley."
    },
    actionOracleVariants: [
      {
        command: "Tomá hoy una hoja dividida en dos columnas, pesá los hechos objetivos sin anestesia emocional y ejecutá el corte o el acuerdo que restablezca el equilibrio en tu semana.",
        prohibition: "Prohibido autoengañarte con excusas blandas, postergar el pago de una deuda moral o material, o aceptar un trato donde la balanza esté inclinada en tu contra.",
        psychomagicAct: "Colocá frente a vos una pluma (o una hoja blanca liviana) a tu izquierda y una piedra o moneda pesada a tu derecha; escribí en una nota la decisión justa que debés tomar hoy y ponela exactamente en el punto medio entre ambas, tocándola con el canto de una regla o cuchillo limpio como sello de sentencia firme.",
        talismanPhrase: "Mi mente es la balanza de oro y mi palabra es el filo de plata; habito en el equilibrio impecable de la Ley."
      },
      {
        command: "Poné al día hoy mismo ese contrato, balance contable, inventario o conversación pendiente de límites para que tu estructura quede sin fisuras.",
        prohibition: "No juzgues una situación hoy escuchando una sola campana o dejándote llevar por la simpatía o la bronca del momento.",
        psychomagicAct: "Ponete de pie con los brazos extendidos en cruz horizontal como el fiel de una balanza, cerrá los ojos durante un minuto y ajustá tu postura hasta sentir que el peso de tu cuerpo cae exactamente igual sobre ambos pies.",
        talismanPhrase: "Siembro con rectitud, corto con verdad y cosecho en proporción exacta."
      },
      {
        command: "Cortá de un solo tajo hoy un gasto, hábito o compromiso parásito que te quita energía sin devolverte ni valor ni alegría.",
        prohibition: "No prometas hoy ni un milímetro más de lo que estés cien por ciento dispuesto a cumplir en tiempo y forma.",
        psychomagicAct: "Limpiá el cristal de un espejo o de tus anteojos con alcohol puro antes de trabajar hoy, declarando en voz alta: 'Limpio mi juicio de toda niebla; veo las cosas exactamente como son'.",
        talismanPhrase: "Mi corazón pesa lo mismo que la Pluma de la Verdad; nada me debe el mundo y nada le debo."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XI alza su espada y su balanza en la lectura: ha llegado el momento de pesar los hechos con rigor y cosechar con justicia.",
      secondAppearance: "La Justicia comparece por segunda vez: hay un desbalance evidente en tus cuentas, en tus tiempos o en un vínculo que seguís evitando cortar. El fiel de la balanza exige corrección hoy.",
      thirdAppearance: "Tercera llamada del Arcano XI: sentencia inminente. Dejá de dar vueltas alrededor de la verdad; tomá la decisión justa aunque incomode en el corto plazo.",
      fourthPlusAppearance: "Tribunal supremo de Ma'at: el Oráculo detiene toda otra consulta hasta que restaures el orden, saldes lo pendiente y apliques el filo de la verdad en tu situación central."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Aceptá con la frente en alto lo que sembraste y utilizá el filo de tu discernimiento para separar la verdad desnuda del ruido emocional.",
    counselVariants: [
      "Aceptá con la frente en alto lo que sembraste y utilizá el filo de tu discernimiento para separar la verdad desnuda del ruido emocional.",
      "La balanza te pide que midas con paciencia antes de decidir; la espada te exige que, una vez que hayas medido, cortes sin que te tiemble el pulso.",
      "No existe amuleto más poderoso en los tres mundos que una conciencia que no tiene nada que esconder.",
      "Cuando el dar y el recibir pierden su proporción, hasta el amor más noble se enferma de resentimiento; cuidá la simetría de tus pactos.",
      "Sé implacable con el error técnico y perfectamente justo con el mérito: así se construye una autoridad que nadie puede cuestionar."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 18,
        title: "La Venda de Oro Fundido y la Pluma de Ma'at",
        secret: "Sobre su máscara de plata lunar resplandece la venda de oro solar coronada por la Pluma de la Verdad egipcia. A diferencia de la ceguera ignorante, esta venda áurea simboliza la *Imparcialidad Divina*: aquella que cierra los ojos a las apariencias seductoras del ego para ver directamente la geometría kármica del alma.",
        esotericFormula: "Venda de Oro (Imparcialidad) + Pluma de Ma'at (Orden Cósmico) = Juicio Incorruptible",
        meditationPrompt: "Si quitaras todos los nombres propios y afectos de tu dilema actual y miraras solo los hechos fríos, ¿qué sentencia dictarías hoy?"
      },
      {
        id: "n2",
        x: 24,
        y: 38,
        title: "La Gran Espada Vertical de Doble Filo",
        secret: "Empuñada en su mano derecha apuntando recta hacia el cenit, la espada de acero y plata encarna el rigor de Geburah y la letra Lamed. Corta hacia la izquierda y hacia la derecha porque la ley cósmica no tiene favoritos: defiende a quien obra en verdad y desmantela sin ira toda estructura apoyada en la mentira.",
        esotericFormula: "Espada Vertical = El Eje del Discernimiento que separa lo Real de lo Ilusorio",
        meditationPrompt: "¿Qué excusa o situación ambigua necesitás cortar hoy de un solo tajo limpio para recuperar tu paz?"
      },
      {
        id: "n3",
        x: 74,
        y: 52,
        title: "La Balanza de Oro: El Corazón y la Pluma",
        secret: "Sostenida en su mano izquierda, la balanza hermética muestra en un platillo el Corazón escarlata (el deseo y las obras humanas) y en el otro la Pluma cristalina (el peso de la verdad). En el broche de su manto, el círculo dentro del cuadrado sella el equilibrio perfecto entre el espíritu eterno y los cuatro elementos materiales.",
        esotericFormula: "Platillo Solar (Acción) = Platillo Lunar (Reacción) -> Equilibrio de Libra",
        meditationPrompt: "¿En qué vínculo o negocio sentís hoy que los platillos del dar y el recibir están desnivelados?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XII • EL COLGADO (MEM • EL VISIONARIO DEL ÁRBOL INVERTIDO)
  // ==========================================================================
  {
    id: 12,
    numeral: "XII",
    name: "El Colgado",
    subtitle: "El Visionario del Árbol Invertido",
    palette: {
      primary: "#2dd4bf",
      secondary: "#818cf8",
      glow: "rgba(45, 212, 191, 0.55)"
    },
    archetype: "hanged",
    correspondences: {
      element: "Agua Primordial / El Océano de la Conciencia Suspendida",
      astro: "Neptuno y las Aguas Profundas • La Disolución del Ego",
      hebrewLetter: "Mem (מ) • La Segunda Letra Madre: las Aguas de la Sabiduría y la Matriz del Bautismo",
      treeOfLifePath: "Sendero 23 • Conecta Geburah (El Poder) con Hod (El Esplendor de la Mente Hermética)",
      alchemy: "Submersio e Inversio • El Bautismo Filosófico y la Inversión de los Polos de la Piedra",
      hermeticAxiom: "Para que el cielo descienda a tu cabeza, primero debés atar el pie de tu ambición ciega al Árbol de la Vida y mirar el mundo al revés.",
      jungianArchetype: "Odín en el Yggdrasil, el Sacrificio Consciente del Ego y la Metanoia (Inversión de la Mirada)",
      tarotTiming: "Pausa sagrada e indeterminada; gestación submarina que rompe el reloj lineal",
      yesNo: "No por la fuerza habitual (exige frenar, invertir el enfoque y soltar el control para destrabar)",
      keywords: [
        "inversión de perspectiva",
        "metanoia radical",
        "pausa sagrada",
        "iluminación abisal",
        "rendición del ego",
        "genialidad inversa",
        "árbol de yggdrasil"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "El mundo corre de cabeza hacia el abismo creyendo que va derecho; por eso, para ver las cosas al derecho, yo elegí colgarme al revés. Dejá de forcejear contra el nudo un instante: lo que llamás 'bloqueo' es la incubadora exacta de tu iluminación.",
    oracleVoiceVariants: [
      "El mundo corre de cabeza hacia el abismo creyendo que va derecho; por eso, para ver las cosas al derecho, yo elegí colgarme al revés. Dejá de forcejear contra el nudo un instante: lo que llamás 'bloqueo' es la incubadora exacta de tu iluminación.",
      "Como Odín suspendido nueve noches del fresno Yggdrasil, entregué mi prisa mundana a cambio de las runas secretas del fondo del pozo. No me tengas lástima: mi rostro brilla en oro porque desde acá abajo veo el código fuente que los hombres apurados jamás ven.",
      "Mirá mis bolsillos abiertos mientras cuelgo: dejo caer sin dolor las monedas de cobre de mis viejas certezas para que mi cabeza se corone con el halo de turquesa y sol.",
      "Mi letra es Mem, el Agua Madre silenciosa. Contra una pared de piedra tu martillo se rompe; el agua, en cambio, se detiene, rodea la roca sin pelear y termina disolviendo la montaña entera.",
      "Formo con mis piernas el cuatro de la cruz y con mis brazos el tres del triángulo. Cuando el cuerpo detiene su carrera ciega, el espíritu invierte la polaridad y toma el mando."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "El Colgado (Arcano XII) es el gran portal de la *Metanoia* —la inversión radical de la mente— y la primera parada donde la lógica lineal del ego debe rendirse ante una sabiduría de orden superior. En la Cábala hermética rige el Sendero 23 de la letra madre Mem (las Aguas Primordiales), uniendo la severidad de Geburah con el intelecto mágico de Hod. Numéricamente, el Doce (12) es el espejo invertido del Veintiuno (21, El Mundo): mientras El Mundo danza coronado al final de la Obra, El Colgado acepta suspender voluntariamente su acción externa para que la gestación interior se complete. Su aparición en tu tirada te indica que el problema actual no se resuelve empujando más fuerte en la misma dirección, sino deteniendo el forcejeo y mirando el tablero desde el ángulo exactamente opuesto.",
    meaningVariants: [
      "El Colgado (Arcano XII) es el gran portal de la *Metanoia* —la inversión radical de la mente— y la primera parada donde la lógica lineal del ego debe rendirse ante una sabiduría de orden superior. En la Cábala hermética rige el Sendero 23 de la letra madre Mem (las Aguas Primordiales), uniendo la severidad de Geburah con el intelecto mágico de Hod. Numéricamente, el Doce (12) es el espejo invertido del Veintiuno (21, El Mundo): mientras El Mundo danza coronado al final de la Obra, El Colgado acepta suspender voluntariamente su acción externa para que la gestación interior se complete. Su aparición en tu tirada te indica que el problema actual no se resuelve empujando más fuerte en la misma dirección, sino deteniendo el forcejeo y mirando el tablero desde el ángulo exactamente opuesto.",
      "En el mito nórdico e indoeuropeo más profundo, este Arcano es Odín colgando voluntariamente del Árbol Cósmico Yggdrasil ('Me sacrifiqué de mí mismo a mí mismo') para arrancar del abismo el secreto de las Runas. En tu vida práctica y creativa, esto revela una ley de oro: para conquistar una genialidad extraordinaria o destrabar un callejón sin salida, primero tenés que estar dispuesto a 'sacrificar' una comodidad menor, un prejuicio mental o una forma vieja de trabajar.",
      "Observá la geometría corporal oculta en el diorama: sus piernas cruzadas trazan el número 4 (la cruz de la materia) en la parte superior, mientras su torso y brazos doblados forman el triángulo del 3 (el espíritu) en la parte inferior. En los Arcanos anteriores el espíritu coronaba la materia desde arriba; aquí el espíritu ha descendido hasta sumergirse por completo en la cabeza del iniciado para bautizar y reprogramar su mente subconsciente.",
      "Cuando El Colgado aparece en Luz, transforma una demora aparente en una ventaja estratégica brillante. Allí donde todos tus competidores o pares reaccionan con el reflejo previsible del rebaño, vos aplicás el *pensamiento inverso* (ingeniería inversa, contracorriente creativa o Wu Wei taoísta) y descubrís el atajo maestro que estaba oculto a plena vista.",
      "Alquímicamente, este sendero representa el lavado por las Aguas de Mem y la suspensión en el *Vas Mirabile*. No confundas la quietud del Colgado con derrota o impotencia: es la inmovilidad voluntaria de la crisálida justo antes de que las células de la oruga se reorganicen por completo para formar las alas."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la psicología profunda de Jung, El Colgado retrata la suspensión necesaria de la 'voluntad heroica del Yo' cuando esta ha chocado contra su propio techo. Durante la primera mitad del camino (Arcanos I al XI), el Yo creyó que todo se resolvía con control, empuje y juicio. En el Arcano XII, la psique provoca una pausa sagrada para que el Yo deje de monopolizar el micrófono y escuche la sabiduría del Inconsciente Profundo (el océano de Mem).",
    psycheVariants: [
      "En la psicología profunda de Jung, El Colgado retrata la suspensión necesaria de la 'voluntad heroica del Yo' cuando esta ha chocado contra su propio techo. Durante la primera mitad del camino (Arcanos I al XI), el Yo creyó que todo se resolvía con control, empuje y juicio. En el Arcano XII, la psique provoca una pausa sagrada para que el Yo deje de monopolizar el micrófono y escuche la sabiduría del Inconsciente Profundo (el océano de Mem).",
      "Este Arcano distingue con bisturí entre el *victimista neurótico* (que se cuelga de las quejas para que otros lo salven sin asumir su vida) y el *Sacrificio Consciente del Iniciado* (de *sacer-facere*, 'hacer sagrado': renunciar voluntariamente a algo menor hoy para obtener una maestría mayor mañana). Asegurate de que toda espera o entrega tuya en este ciclo tenga un propósito evolutivo claro.",
      "Psicológicamente, la postura invertida produce una desautomatización de la percepción. Cuando mirás un cuadro o un problema dado vuelta, tu cerebro deja de proyectar etiquetas automáticas y empieza a ver las formas reales. Hoy tu bloqueo mental desaparecerá en el instante en que inviertas la pregunta: en vez de preguntarte '¿cómo empujo esto?', preguntate '¿qué me está queriendo enseñar esta resistencia?'.",
      "Las monedas y gemas que caen de sus vestiduras mientras su cabeza resplandece simbolizan el desprendimiento de las identificaciones falsas del Ego. Perder la necesidad de tener siempre la razón es el precio exacto para ganar la iluminación creativa."
    ],

    lightAndShadow: "Al derecho (En Luz): Epifanía mística y técnica, genialidad por pensamiento inverso, pausa regeneradora, desapego liberador y entrega consciente a una obra mayor. Invertida (En Sombra): Victimismo estéril, parálisis por indecisión, sacrificios que nadie pidió o terquedad que se niega a cambiar de ángulo.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Epifanía mística y técnica, genialidad por pensamiento inverso, pausa regeneradora, desapego liberador y entrega consciente a una obra mayor. Invertida (En Sombra): Victimismo estéril, parálisis por indecisión, sacrificios que nadie pidió o terquedad que se niega a cambiar de ángulo.",
      "En Luz, El Colgado es el sabio que se sumerge en el silencio del abismo y sube con la perla de una idea revolucionaria; en Sombra, es el mártir imaginario que se ata solo a la soga para reclamar compasión.",
      "Luz activa: Ingeniería inversa brillante, paciencia estratégica, visión fuera de la caja y paz en la espera. Sombra latente: Postergación infinita o regalar tu energía a causas que no tienen retorno."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Tiempo de empatía profunda y de ponerse genuinamente en los zapatos del otro para destrabar cualquier nudo. En pareja, aconseja no presionar definiciones a la fuerza hoy, sino aflojar la cuerda de las exigencias y mirar el vínculo con ojos nuevos; si estás libre, una pausa de las búsquedas ansiosas reordenará tu imán afectivo.",
      work: "Resolución genial de un problema técnico, de diseño o de formulación pensando exactamente al revés del manual convencional (ingeniería inversa). Si un proyecto o entrega sufre una demora externa hoy, no la pelees con bronca: usá ese tiempo suspendido para descubrir una mejora que multiplicará su calidad.",
      money: "Inversión de largo aliento donde cedés liquidez hoy para cosechar un activo mucho mayor mañana, o bien prudencia que te pide congelar movimientos bruscos hasta ver el panorama completo.",
      spirit: "El estado de *Samadhi* y *Wu Wei*: la acción a través de la no-acción aparente, donde al vaciar la mente del ruido egoico desciende el relámpago de la inspiración pura.",
      healthAndEnergy: "Rige los pies (Neptuno/Piscis), el retorno venoso, la oxigenación cerebral y el líquido cefalorraquídeo. Las posturas de inversión suave (elevar las piernas), la flotación en agua y la descompresión vertebral obran maravillas hoy."
    },
    domainsVariants: [
      {
        love: "Tiempo de empatía profunda y de ponerse genuinamente en los zapatos del otro para destrabar cualquier nudo. En pareja, aconseja no presionar definiciones a la fuerza hoy, sino aflojar la cuerda de las exigencias y mirar el vínculo con ojos nuevos; si estás libre, una pausa de las búsquedas ansiosas reordenará tu imán afectivo.",
        work: "Resolución genial de un problema técnico, de diseño o de formulación pensando exactamente al revés del manual convencional (ingeniería inversa). Si un proyecto o entrega sufre una demora externa hoy, no la pelees con bronca: usá ese tiempo suspendido para descubrir una mejora que multiplicará su calidad.",
        money: "Inversión de largo aliento donde cedés liquidez hoy para cosechar un activo mucho mayor mañana, o bien prudencia que te pide congelar movimientos bruscos hasta ver el panorama completo.",
        spirit: "El estado de *Samadhi* y *Wu Wei*: la acción a través de la no-acción aparente, donde al vaciar la mente del ruido egoico desciende el relámpago de la inspiración pura.",
        healthAndEnergy: "Rige los pies (Neptuno/Piscis), el retorno venoso, la oxigenación cerebral y el líquido cefalorraquídeo. Las posturas de inversión suave (elevar las piernas), la flotación en agua y la descompresión vertebral obran maravillas hoy."
      },
      {
        love: "Dejá de repetir el mismo reclamo esperando un resultado distinto: cambiá por completo tu forma de reaccionar ante el otro hoy y verás cómo toda la danza de la relación se transforma sola.",
        work: "Período de incubación técnica o creativa necesaria. Así como un buen macerado o una semilla en invierno parece 'inmóvil' por fuera mientras trabaja a toda máquina por dentro, respetá el tiempo de reposo de tu obra.",
        money: "Soltar una ganancia pequeña o un cliente problemático hoy (las monedas que caen del bolsillo del Colgado) te liberará las manos y el tiempo para capturar el negocio grande que viene detrás.",
        spirit: "Bautismo en las Aguas de Mem: lavar la mirada de todo cinismo y recuperar la capacidad de ver el misterio sagrado oculto en cada prueba.",
        healthAndEnergy: "Desconexión necesaria del sistema simpático (lucha o huida); regalate hoy una pausa sin reloj para que tu sistema nervioso parasimpático repare tejidos y neuronas."
      },
      {
        love: "Amor incondicional pero lúcido: aprender a acompañar sin invadir y a soltar el deseo de controlar los tiempos emocionales de quien amás.",
        work: "Diferenciación disruptiva en tu rubro: mientras todos copian la misma fórmula derecha, tu propuesta 'invertida' y contra-intuitiva captura toda la atención por su originalidad radical.",
        money: "Pausa estratégica antes de firmar o desembolsar: dejar dormir el presupuesto una noche más sobre la almohada te permitirá ver mañana a primera hora un detalle clave.",
        spirit: "El misterio de la Cruz Tau viviente: entender que toda limitación material aceptada con conciencia se convierte en el punto de apoyo de una palanca espiritual.",
        healthAndEnergy: "Alivio de tensiones cervicales y lumbares soltando el peso de la cabeza; hidratación profunda y baños de inmersión."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Frená hoy cualquier forcejeo contra lo que está trabado e invertí deliberadamente tu enfoque: hacé exactamente lo opuesto a tu reacción habitual y observá cómo cede el nudo.",
      prohibition: "Prohibido quejarte de las demoras como una víctima o seguir golpeando con la cabeza una puerta que tiene el cartel de 'tirar hacia adentro'.",
      psychomagicAct: "Acostate hoy cinco minutos con las piernas elevadas apoyadas contra la pared (o mirá tu mesa de trabajo inclinando la cabeza hacia abajo), dejá caer al suelo un par de monedas de poco valor de tus manos abiertas y decí: 'Suelto el peso viejo; acepto ver el mundo desde la luz del espíritu'.",
      talismanPhrase: "En mi quietud voluntaria el universo trabaja para mí; invierto mi mirada y encuentro el tesoro."
    },
    actionOracleVariants: [
      {
        command: "Frená hoy cualquier forcejeo contra lo que está trabado e invertí deliberadamente tu enfoque: hacé exactamente lo opuesto a tu reacción habitual y observá cómo cede el nudo.",
        prohibition: "Prohibido quejarte de las demoras como una víctima o seguir golpeando con la cabeza una puerta que tiene el cartel de 'tirar hacia adentro'.",
        psychomagicAct: "Acostate hoy cinco minutos con las piernas elevadas apoyadas contra la pared (o mirá tu mesa de trabajo inclinando la cabeza hacia abajo), dejá caer al suelo un par de monedas de poco valor de tus manos abiertas y decí: 'Suelto el peso viejo; acepto ver el mundo desde la luz del espíritu'.",
        talismanPhrase: "En mi quietud voluntaria el universo trabaja para mí; invierto mi mirada y encuentro el tesoro."
      },
      {
        command: "Aplicá hoy ingeniería inversa a tu proyecto: empezá a diseñarlo desde el resultado final soñado hacia atrás, paso por paso, hasta llegar a la acción de hoy.",
        prohibition: "No tomes ninguna decisión por ansiedad de 'hacer algo ya' solo para tapar la incomodidad de la espera fértil.",
        psychomagicAct: "Tomá una foto o dibujo de tu problema o esquema de trabajo actual, dalo vuelta 180 grados sobre tu escritorio y miralo al revés durante tres minutos anotando la primera idea absurda o distinta que te surja.",
        talismanPhrase: "Como Odín en el Árbol del Mundo, entrego mi prisa y recibo la visión de las runas."
      },
      {
        command: "Elegí hoy conscientemente qué hábito, distracción o comodidad menor vas a sacrificar durante doce días en ofrenda directa a tu meta mayor.",
        prohibition: "No confundas rendición estratégica con resignación; te detenés hoy como el arquero que tensa la cuerda hacia atrás antes de soltar el flechazo.",
        psychomagicAct: "Atá un nudo simple en un cordón azul o verde mar, sumergilo unos segundos en un vaso de agua pura y luego desatalo con calma declarando que todo bloqueo en tu camino se disuelve sin violencia.",
        talismanPhrase: "Las Aguas de Mem lavan mi mente; donde otros ven límite, yo veo un portal abierto."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XII suspende el reloj lineal en tu lectura: la llave de este asunto no está en la fuerza, sino en invertir el ángulo de visión.",
      secondAppearance: "El Colgado aparece por segunda vez en tu registro: seguís tironeando de la soga con impaciencia y por eso el nudo se aprieta más. Detené el empuje hoy mismo y mirá el cuadro al revés.",
      thirdAppearance: "Tercera llamada del Arcano XII: o hacés la pausa consciente y cambiás de paradigma por tu cuenta hoy, o las circunstancias te obligarán a frenar para que escuches.",
      fourthPlusAppearance: "Iniciación abisal de Mem: estás ante un cambio total de cosmovisión. Soltá por completo el control del ego; la respuesta ya brilla abajo en el halo de tu cabeza."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Detené hoy mismo todo forcejeo inútil: cuando dejás de tironear de la cuerda e invertís tu mirada, descubrís que el bloqueo era un portal.",
    counselVariants: [
      "Detené hoy mismo todo forcejeo inútil: cuando dejás de tironear de la cuerda e invertís tu mirada, descubrís que el bloqueo era un portal.",
      "El que nada desesperado contra la corriente se ahoga en diez metros; el que se entrega al giro del río sale ileso en la otra orilla.",
      "Para llenar tu copa con el elixir de los dioses, primero tenés que animarte a darla vuelta y vaciar hasta la última gota del agua vieja.",
      "La genialidad no consiste en correr más rápido que los demás por el mismo laberinto, sino en mirar el laberinto desde arriba —o desde abajo—.",
      "Ninguna semilla brota si no acepta primero quedar enterrada en el silencio húmedo de la tierra."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 20,
        title: "El Patíbulo Tau Viviente (Yggdrasil) y el Nudo del Tobillo",
        secret: "El travesaño en forma de Cruz Tau (la última letra del alfabeto hebreo, Tav) no es madera muerta, sino el Árbol Cósmico Yggdrasil del cual brotan hojas de oro vivo. La cuerda sujeta su tobillo derecho sin lastimarlo: simboliza que el iniciado está anclado de forma segura en la matriz del universo mientras explora las profundidades del espíritu.",
        esotericFormula: "Cruz Tau (Materia Viva) + Cuerda Astral = Suspensión Consciente en el Cosmos",
        meditationPrompt: "¿Qué pausa o demora actual en tu vida es en realidad el Árbol del Mundo sosteniéndote para que no des un paso en falso?"
      },
      {
        id: "n2",
        x: 50,
        y: 50,
        title: "La Cruz del Cuatro sobre el Triángulo del Tres",
        secret: "Su pierna derecha vertical y su pierna izquierda doblada detrás de la rodilla dibujan el glifo del número 4 (y el símbolo alquímico del Azufre invertido), mientras sus brazos cruzados tras los hombros con la cabeza como vértice trazan el triángulo del 3 apuntando hacia abajo. Es la fórmula del descenso de la Gracia: el Espíritu sumergiéndose en la Materia para transmutarla desde adentro.",
        esotericFormula: "4 (Cruz Material arriba) + 3 (Triángulo Espiritual abajo) = 12 (La Gran Inversión)",
        meditationPrompt: "¿Qué pasaría hoy si invirtieras el orden de tus prioridades y pusieras la paz de tu alma antes que la urgencia del reloj?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "El Halo de Iluminación Abisal y las Gemas Desprendidas",
        secret: "En la base del diorama, la cabeza invertida del visionario no muestra dolor, sino éxtasis sereno envuelto en una aureola radiante de turquesa, oro y amatista, mientras monedas y cristales caen libremente hacia el abismo. Revela que al soltar el apego a las viejas posesiones mentales del ego, la glándula pineal se enciende como un sol submarino.",
        esotericFormula: "Vaciamiento del Ego (Monedas que caen) = Iluminación del Centro Pineal (Halo)",
        meditationPrompt: "¿Qué vieja certeza, orgullo o apego estás listo para dejar caer hoy de tus bolsillos para pensar con total libertad?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIII • LA MUERTE (NUN • LA COSECHA Y EL RENACIMIENTO ALQUÍMICO)
  // ==========================================================================
  {
    id: 13,
    numeral: "XIII",
    name: "La Muerte",
    subtitle: "La Cosecha y el Renacimiento",
    palette: {
      primary: "#e2e8f0",
      secondary: "#dc2626",
      glow: "rgba(220, 38, 38, 0.55)"
    },
    archetype: "death",
    correspondences: {
      element: "Agua Escorpiónica / Fuego Volcánico Subterráneo",
      astro: "Escorpio • Marte Nocturno y Plutón (El Señor del Inframundo y la Semilla)",
      hebrewLetter: "Nun (נ) • El Pez que nada en las Aguas de la Muerte y la Resurrección (Valor Gematria: 50)",
      treeOfLifePath: "Sendero 24 • Conecta Tiphereth (El Sol del Alma) con Netzach (El Fuego del Deseo y la Naturaleza)",
      alchemy: "Nigredo, Putrefactio y Mortificatio • El Cuervo Negro y el Sol Negro que antecede al Oro",
      hermeticAxiom: "Si el grano de trigo no cae en la tierra negra y muere a su cáscara, queda solo; pero si muere, da fruto al ciento por uno.",
      jungianArchetype: "La Muerte y Renacimiento del Ego, la Nigredo Psíquica y el Ave Fénix",
      tarotTiming: "Octubre-Noviembre (Escorpio), cierres definitivos e irreversibles que abren una era nueva",
      yesNo: "No para lo viejo / Sí rotundo para el renacimiento (corte radical que libera el camino)",
      keywords: [
        "transmutación radical",
        "nigredo alquímica",
        "fin de ciclo irreversible",
        "poda liberadora",
        "renacimiento fénix",
        "esqueleto inmortal",
        "cosecha del destino"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Los cobardes me borraron el nombre en los mazos antiguos por miedo a pronunciarme; los sabios me saludan como a su gran libertadora. Yo no vengo a quitarte la vida: vengo con mi guadaña de plata a cortar las ramas secas que no te dejaban ver el sol.",
    oracleVoiceVariants: [
      "Los cobardes me borraron el nombre en los mazos antiguos por miedo a pronunciarme; los sabios me saludan como a su gran libertadora. Yo no vengo a quitarte la vida: vengo con mi guadaña de plata a cortar las ramas secas que no te dejaban ver el sol.",
      "Mirame de frente: soy tu propio esqueleto de calcio y marfil. Cuando las máscaras de la vanidad, los títulos prestados y las pieles viejas se pudren en la tierra, yo soy lo único verdadero e indestructible que queda de pie en vos.",
      "A mis pies ruedan por igual la corona del rey arrogante y los harapos del mendigo. Nada falso cruza mi frontera; desnudate hoy voluntariamente de lo que ya murió en tu vida y cruzarás mi umbral como un emperador renacido.",
      "Mi letra es Nun, que en la Cábala vale cincuenta: las Cincuenta Puertas de la Inteligencia y el año del Jubileo donde todas las deudas quedan perdonadas y los esclavos vuelven a ser libres.",
      "En el barro negro donde cae mi hoja ya está brotando el loto de cinco pétalos y en el horizonte amanece el Sol Invictus. No llores por la cáscara rota: celebrá el nacimiento del árbol."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Muerte o El Arcano Sin Nombre (Arcano XIII) es el gran operador de la Transmutación Alquímica, el fin definitivo de las formas agotadas y el guardián del Renacimiento. En el Árbol de la Vida gobierna el Sendero 24 de la letra Nun, uniendo el centro solar de Tiphereth con la esfera vital de Netzach bajo el signo fijo de Escorpio. En la lectura oracular de alta tradición jamás anuncia tragedias fatales, sino una metamorfosis profunda, quirúrgica e irreversible: una etapa biográfica, una identidad vieja, un modelo de negocio obsoleto o una dinámica vincular gastada ha cumplido su ciclo completo. Seguir maquillando lo caduco es inútil; pasar la guadaña con lucidez hoy libera un caudal inmenso de energía joven y fértil.",
    meaningVariants: [
      "La Muerte o El Arcano Sin Nombre (Arcano XIII) es el gran operador de la Transmutación Alquímica, el fin definitivo de las formas agotadas y el guardián del Renacimiento. En el Árbol de la Vida gobierna el Sendero 24 de la letra Nun, uniendo el centro solar de Tiphereth con la esfera vital de Netzach bajo el signo fijo de Escorpio. En la lectura oracular de alta tradición jamás anuncia tragedias fatales, sino una metamorfosis profunda, quirúrgica e irreversible: una etapa biográfica, una identidad vieja, un modelo de negocio obsoleto o una dinámica vincular gastada ha cumplido su ciclo completo. Seguir maquillando lo caduco es inútil; pasar la guadaña con lucidez hoy libera un caudal inmenso de energía joven y fértil.",
      "En los tratados alquímicos medievales y renacentistas, el Arcano XIII corresponde a la *Nigredo* o *Putrefactio* ('el Cuervo Negro'): la primera gran fase de la Obra donde los metales brutos deben ser reducidos a ceniza negra en el atanor para que de su centro renazca el fénix dorado. Si sentís que ciertas estructuras de tu vida se están desarmando, alégrate: el laboratorio está quemando la escoria para entregarte el oro puro.",
      "El misterio oculto del número Trece en la Gematría hebrea es revelador: 13 es el valor numérico exacto de la palabra *Echad* (אחד = 1+8+4 = 13, 'Unidad Suprema') y también el valor de *Ahavah* (אהבה = 1+5+2+5 = 13, 'Amor'). Esto demuestra que el Arcano XIII no es destrucción caótica, sino el poder supremo del Amor Cósmico que rompe los envases pequeños para devolverte a la Unidad de tu verdadero ser.",
      "Observá que el Soberano Segador no empuña una espada de guerra, sino una guadaña de labranza: el instrumento agrícola de Saturno y de Kronos con el que se siega el trigo maduro al final del verano para hacer el pan y guardar la semilla del año próximo. Todo lo que hiciste bien en la etapa que termina queda a salvo en la semilla esencial; solo se corta la paja seca.",
      "Bajo el dominio de Escorpio —el signo que posee tres tótems evolutivos: el Escorpión que se defiende en la tierra, el Águila que vuela sobre las cumbres y el Fénix que renace de su propio fuego—, este Arcano te convoca a tu versión Fénix: quemar tus naves viejas sin mirar atrás para inaugurar la etapa más poderosa de tu biografía."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la clínica profunda de Jung, el Arcano XIII representa la 'muerte simbólica del viejo Yo' (*Mortificatio*), condición indispensable para toda verdadera transformación psicológica. El sufrimiento humano ante los cambios rara vez proviene del cambio en sí, sino de la resistencia desesperada del Ego a soltar una etiqueta con la que se había identificado ('yo siempre fui así', 'este siempre fue mi rol'). Cuando permitís que esa máscara caduca muera en paz, experimentás una liviandad y un rejuvenecimiento psíquico inmediatos.",
    psycheVariants: [
      "En la clínica profunda de Jung, el Arcano XIII representa la 'muerte simbólica del viejo Yo' (*Mortificatio*), condición indispensable para toda verdadera transformación psicológica. El sufrimiento humano ante los cambios rara vez proviene del cambio en sí, sino de la resistencia desesperada del Ego a soltar una etiqueta con la que se había identificado ('yo siempre fui así', 'este siempre fue mi rol'). Cuando permitís que esa máscara caduca muera en paz, experimentás una liviandad y un rejuvenecimiento psíquico inmediatos.",
      "Este Arcano ilumina la sabiduría del Duelo Consciente y el Desapego. Guardar en el sótano de la psique proyectos zombis, rencores de hace diez años o vínculos que ya no tienen pulso funciona como una toxina emocional que drena tu vitalidad diaria. Dar sepultura digna y agradecida a lo que ya fue te devuelve el cien por ciento de tu líbido para el presente.",
      "El esqueleto anatómico del diorama simboliza la *Estructura Esencial Incorruptible* de tu personalidad. Las tormentas de la vida solo pueden llevarse lo blando y accesorio (la vanidad, las opiniones ajenas, los adornos); tu hueso espiritual —tu talento real, tu oficio y tu conciencia— es inmune al paso del tiempo.",
      "James Hillman y la psicología arquetípica destacan que el descenso al reino de Hades/Plutón (Escorpio) es lo único que le da 'profundidad y peso de alma' a una persona. Quien atravesó el Arcano XIII sin huir adquiere una mirada magnética y una autoridad ante la cual las trivialidades del mundo pierden todo poder de intimidación."
    ],

    lightAndShadow: "Al derecho (En Luz): Transformación radical y sanadora, cierre definitivo de etapas gastadas, poda liberadora, reciclaje alquímico de recursos y amanecer de una nueva vida. Invertida (En Sombra): Aferramiento doloroso a un cadáver del pasado, terror al cambio, estancamiento por duelo no resuelto o negación de lo evidente.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Transformación radical y sanadora, cierre definitivo de etapas gastadas, poda liberadora, reciclaje alquímico de recursos y amanecer de una nueva vida. Invertida (En Sombra): Aferramiento doloroso a un cadáver del pasado, terror al cambio, estancamiento por duelo no resuelto o negación de lo evidente.",
      "En Luz, La Muerte es el jardinero experto cuya poda de invierno hace que el rosal estalle con el doble de fuerza en primavera; en Sombra, es el miedo paralizante que prefiere conservar la rama podrida hasta enfermar el tronco.",
      "Luz activa: Reinvención profesional y personal completa, liberación de deudas y lastres, coraje escorpiano y pureza esencial. Sombra latente: Melancolía nostálgica o resistir la mudanza evolutiva que ya está en la puerta."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Fin irreversible de una forma vieja de relacionarse para dar paso a una verdad absoluta. En una pareja viva, indica matar los viejos vicios, reproches y rutinas para refundar el vínculo desde cero en una octava mucho más intensa y honesta; si un ciclo afectivo ya estaba agotado, otorga la fuerza limpia para cerrarlo en paz y abrir el corazón al renacimiento.",
      work: "Reinvención estratégica profunda: cierre de una línea de productos obsoleta, pivote tecnológico total, cambio de rubro o reestructuración radical que elimina todo lo improductivo para concentrar la fuerza en el nuevo horizonte.",
      money: "Saneamiento financiero de raíz: cancelación definitiva de deudas o costos muertos, liquidación de activos estancados para transformarlos en capital líquido y comienzo de una nueva economía mucho más sana.",
      spirit: "La máxima de los místicos sufíes y herméticos: *'Morí antes de morir, para que cuando mueras no mueras'*. Despertar a la conciencia inmortal despojándose de las máscaras del ego.",
      healthAndEnergy: "Gobierna los procesos de eliminación, desintoxicación celular (autofagia), regeneración de tejidos y órganos reproductores/excretores (Escorpio). Capacidad extraordinaria de curación radical tras soltar cargas emocionales."
    },
    domainsVariants: [
      {
        love: "Fin irreversible de una forma vieja de relacionarse para dar paso a una verdad absoluta. En una pareja viva, indica matar los viejos vicios, reproches y rutinas para refundar el vínculo desde cero en una octava mucho más intensa y honesta; si un ciclo afectivo ya estaba agotado, otorga la fuerza limpia para cerrarlo en paz y abrir el corazón al renacimiento.",
        work: "Reinvención estratégica profunda: cierre de una línea de productos obsoleta, pivote tecnológico total, cambio de rubro o reestructuración radical que elimina todo lo improductivo para concentrar la fuerza en el nuevo horizonte.",
        money: "Saneamiento financiero de raíz: cancelación definitiva de deudas o costos muertos, liquidación de activos estancados para transformarlos en capital líquido y comienzo de una nueva economía mucho más sana.",
        spirit: "La máxima de los místicos sufíes y herméticos: *'Morí antes de morir, para que cuando mueras no mueras'*. Despertar a la conciencia inmortal despojándose de las máscaras del ego.",
        healthAndEnergy: "Gobierna los procesos de eliminación, desintoxicación celular (autofagia), regeneración de tejidos y órganos reproductores/excretores (Escorpio). Capacidad extraordinaria de curación radical tras soltar cargas emocionales."
      },
      {
        love: "Magnetismo escorpiano profundo que no tolera charlas tibias ni medias tintas: hoy el amor exige desnudar el alma hasta el hueso y fundirse desde la autenticidad total.",
        work: "No tengas miedo de jubilar hoy ese método, código o formato que te dio de comer ayer pero que hoy te frena: el maestro constructor sabe demoler el galpón viejo para levantar la torre nueva.",
        money: "Reciclaje alquímico del valor: tomar sobrantes, saldos o estructuras que otros daban por perdidos y transformarlos mediante tu ingenio en una fuente de ganancia fresca.",
        spirit: "Atravesar la Noche Oscura con el Sol Invictus en el pecho: descubrir que en el fondo mismo del vacío brilla una luz que ninguna pérdida externa puede apagar.",
        healthAndEnergy: "Potente impulso de limpieza orgánica; el ayuno consciente, la sudoración en entrenamiento intenso y la renovación del aire de tu casa aceleran tu metamorfosis física."
      },
      {
        love: "Perdón definitivo que corta el cordón umbilical con los fantasmas de relaciones pasadas: el pasado queda enterrado como abono fértil y tu presente queda cien por ciento libre.",
        work: "Corte quirúrgico de sociedades, proveedores o compromisos laborales que habían perdido su savia. Al día siguiente de cortar lo seco, sentirás que te vuelve el doble de energía creativa.",
        money: "Fin de un ciclo de vacas flacas o de drenaje oculto gracias a una decisión drástica y valiente sobre tu presupuesto.",
        spirit: "Iniciación en el misterio de Osiris y el grano de trigo: comprender que la vida es eterna y solo cambia de vestidura para seguir creciendo.",
        healthAndEnergy: "Fortaleza ósea, dental y mineral; excelente período para abandonar de forma definitiva y sin recaídas cualquier vicio o hábito viejo."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Pasá la guadaña hoy mismo sin anestesia ni postergación: dale cierre definitivo a ese asunto, gasto, archivo o etapa que ya sabés en tu corazón que está cumplido.",
      prohibition: "Prohibido hacer respiración artificial a lo que ya murió, hablar con nostalgia lastimera del pasado o dejar un cierre hecho 'a medias'.",
      psychomagicAct: "Escribí con tinta negra en una hoja seca de árbol (o en un papel que luego dobles) el hábito, miedo o etapa vieja que hoy dás por terminada; quemalo de forma segura hasta reducirlo a ceniza y echá esa ceniza en la tierra de una maceta viva declarando: 'Lo que fue cáscara hoy es abono para mi nueva vida'.",
      talismanPhrase: "Siego lo caduco sin temor ni nostalgia; de mi ceniza sagrada se levanta el Sol Invictus."
    },
    actionOracleVariants: [
      {
        command: "Pasá la guadaña hoy mismo sin anestesia ni postergación: dale cierre definitivo a ese asunto, gasto, archivo o etapa que ya sabés en tu corazón que está cumplido.",
        prohibition: "Prohibido hacer respiración artificial a lo que ya murió, hablar con nostalgia lastimera del pasado o dejar un cierre hecho 'a medias'.",
        psychomagicAct: "Escribí con tinta negra en una hoja seca de árbol (o en un papel que luego dobles) el hábito, miedo o etapa vieja que hoy dás por terminada; quemalo de forma segura hasta reducirlo a ceniza y echá esa ceniza en la tierra de una maceta viva declarando: 'Lo que fue cáscara hoy es abono para mi nueva vida'.",
        talismanPhrase: "Siego lo caduco sin temor ni nostalgia; de mi ceniza sagrada se levanta el Sol Invictus."
      },
      {
        command: "Hacé hoy una limpieza física e implacable en tu taller, depósito, computadora o cuarto: sacá al menos trece objetos, archivos o cosas rotas que pertenezcan a tu versión anterior.",
        prohibition: "No tengas miedo al vacío que queda en la mesa el primer día después de limpiar; ese espacio libre es el imán exacto que atrae la nueva cosecha.",
        psychomagicAct: "Antes de dormir hoy, acostate boca arriba con los brazos cruzados sobre el pecho como un faraón en su sarcófago durante tres minutos, exhalá todo el aire despidiendo a tu viejo yo, y luego sentate de golpe inhalando profundo como quien nace a un día nuevo.",
        talismanPhrase: "Mi estructura esencial es inmortal; muero a mis límites y renazco en poder."
      },
      {
        command: "Cambiá radicalmente hoy un aspecto visible de tu estrategia, tu imagen de marca o tu rutina diaria para sellar en la materia que el ciclo viejo quedó atrás.",
        prohibition: "No pidas permiso ni disculpas por haber evolucionado y ya no ser la misma persona de hace cinco años.",
        psychomagicAct: "Colocá cinco semillas o granos enteros dentro de un sobre negro sellado durante veinticuatro horas y mañana al mediodía abrilo a plena luz del sol sembrándolas o guardándolas en tu mesa como símbolo de resurrección productiva.",
        talismanPhrase: "Bajo el signo del Fénix y la letra Nun, cada final es mi coronación."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIII hace brillar su guadaña de plata en la lectura: el tiempo de una estructura vieja se ha cumplido y comienza la gran transmutación.",
      secondAppearance: "La Muerte comparece por segunda vez: seguís aferrado con nostalgia o temor a algo que ya cumplió su ciclo vital. Soltá la hoja seca hoy para que pueda brotar la rama nueva.",
      thirdAppearance: "Tercera llamada del Arcano XIII: la poda ya no admite demora. Si no realizás el corte consciente con tus propias manos hoy, la vida lo hará de golpe para liberarte.",
      fourthPlusAppearance: "Decreto plutoniano de Nun: estás en plena *Nigredo* iniciática mayor. Quemá todas las naves del pasado ahora mismo; tu nueva encarnación en vida ya te espera del otro lado del umbral."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "Permití que caiga la hoja seca sin temor ni nostalgia: lo que muere hoy era solo la cáscara que impedía crecer a tu verdadera raíz.",
    counselVariants: [
      "Permití que caiga la hoja seca sin temor ni nostalgia: lo que muere hoy era solo la cáscara que impedía crecer a tu verdadera raíz.",
      "La serpiente que se niega a desgarrar su piel vieja contra las piedras termina asfixiada dentro de su propio pasado.",
      "No le temas al fuego del atanor: solo se quema la paja; el oro sale del incendio más puro y brillante que nunca.",
      "Quien aprende a soltar a tiempo con las manos abiertas jamás conoce el dolor de que la vida le arranque las cosas a la fuerza.",
      "Detrás de cada invierno implacable del Arcano XIII ya está latiendo bajo tierra el manantial alquímico de La Templanza."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 68,
        y: 28,
        title: "La Gran Guadaña de Luna Creciente y el Cráneo Coronado",
        secret: "Empuñada a dos manos por el Soberano Segador de cráneo poliédrico y corona de agujas imperiales, la hoja curva de plata lunar corta de derecha a izquierda formando una media luna perfecta. En el hermetismo, la luna menguante-creciente de la guadaña indica que toda siega es simultáneamente siembra: el filo que cierra el ciclo viejo abre el surco del ciclo nuevo.",
        esotericFormula: "Guadaña de Saturno/Plutón = Separatio Radical de lo Mortal y lo Inmortal",
        meditationPrompt: "¿Qué rama seca en tu vida o en tu trabajo está pidiendo hoy el corte limpio de la guadaña para dejar pasar la luz?"
      },
      {
        id: "n2",
        x: 32,
        y: 55,
        title: "La Rosa Mística de Cinco Pétalos y la Coraza Costal",
        secret: "Sobre el suelo de obsidiana y junto a la armadura anatómica de costillas de plata florece intacto el Loto/Rosa de cinco pétalos (la Quintaesencia del espíritu que sobrevive a los cuatro elementos). Representa la vida incorruptible que germina alimentada por el humus de lo que cayó.",
        esotericFormula: "Nigredo (Tierra Negra) -> Rosa de 5 Pétalos (Quintaesencia Renacida)",
        meditationPrompt: "¿Qué nueva obra, deseo o versión tuya está empezando a brotar hoy gracias a lo que dejaste atrás?"
      },
      {
        id: "n3",
        x: 50,
        y: 78,
        title: "La Corona Real Caída y el Sol Invictus del Horizonte",
        secret: "Al pie del segador yace derribada la corona dorada del antiguo ego (las falsas seguridades e identidades que creían ser eternas), mientras en el fondo del arco gótico amanece el Sol Negro transmutándose en el *Sol Invictus* entre dos torres. Certifica que para el espíritu despierto nunca es el crepúsculo final: siempre es el alba de una octava superior.",
        esotericFormula: "Caída del Ego Viejo (Corona en tierra) = Amanecer del Sí-Mismo (Sol Invictus)",
        meditationPrompt: "¿Qué etiqueta o orgullo antiguo estás listo para dejar rodar por el suelo hoy para caminar más libre?"
      }
    ]
  },

  // ==========================================================================
  // ARCANO XIV • LA TEMPLANZA (SAMEKH • EL ALQUIMISTA DE LAS DOS CORRIENTES)
  // ==========================================================================
  {
    id: 14,
    numeral: "XIV",
    name: "La Templanza",
    subtitle: "Alquimista de las Dos Corrientes",
    palette: {
      primary: "#38bdf8",
      secondary: "#f43f5e",
      glow: "rgba(56, 189, 248, 0.55)"
    },
    archetype: "temperance",
    correspondences: {
      element: "Fuego Fluido / El Agua Ígnea de los Filósofos (Azoth)",
      astro: "Sagitario • El Arquero Centauro y la Flecha de Júpiter hacia el Sol Central",
      hebrewLetter: "Samekh (ס) • El Puntal que Sostiene, el Círculo Infinito y la Cuerda del Arco",
      treeOfLifePath: "Sendero 25 • El eje vertical del Pilar del Medio que une Tiphereth (El Sol) con Yesod (La Luna)",
      alchemy: "Solutio et Coagulatio Coniuncta • El Trasvase del Elixir entre el Cáliz Solar y el Cáliz Lunar",
      hermeticAxiom: "Uní el Fuego que no moja con el Agua que no quema en la proporción exacta del Siete, y tendrás en tu pecho la Medicina Universal.",
      jungianArchetype: "La Función Trascendente, el Ángel Psicopompo y la Homeostasis Creadora del Sí-Mismo",
      tarotTiming: "Noviembre-Diciembre (Sagitario), procesos de destilación armónica y curación sostenida",
      yesNo: "Sí (mediante alquimia paciente, combinación inteligente y proporción exacta)",
      keywords: [
        "alquimia interior",
        "fórmula maestra",
        "proporción áurea",
        "sanación profunda",
        "unión de corrientes",
        "camino del medio",
        "elixir de vida"
      ]
    },

    // --- LA VOZ DEL ARQUETIPO (5 VARIANTES ROTATIVAS) ---
    oracleVoice: "Después de que La Muerte limpió la escoria del taller, yo entro con mis dos cálices de oro y plata para destilar el Elixir. Mirá cómo el fluido sube del vaso inferior al superior desafiando la gravedad: cuando dominás la proporción exacta, los opuestos dejan de pelear y se vuelven medicina.",
    oracleVoiceVariants: [
      "Después de que La Muerte limpió la escoria del taller, yo entro con mis dos cálices de oro y plata para destilar el Elixir. Mirá cómo el fluido sube del vaso inferior al superior desafiando la gravedad: cuando dominás la proporción exacta, los opuestos dejan de pelear y se vuelven medicina.",
      "En los mazos herméticos mi nombre secreto es *El Arte*. Porque mezclar dos sustancias cualquiera lo hace un aprendiz; lograr que el fuego de la pasión y el agua de la mente circulen sin herirse ni apagarse es el privilegio de los maestros.",
      "Sobre mi pecho llevo el Triángulo del Espíritu inscrito dentro del Cuadrado de la Materia (3 + 4 = 7, y duplicado en mis dos cálices soy el 14). Yo soy la geometría viva que templa el acero: ni tan frío que no se deje forjar, ni tan blando que pierda el filo.",
      "Un pie mío pisa la piedra firme de la realidad y el otro se sumerge en la corriente viva del inconsciente. Ese es el secreto de tu equilibrio hoy: anclaje terrenal absoluto unido a una fluidez intuitiva total.",
      "No apures el trasvase por ansiedad ni sacudas los vasos: ni una sola gota de tu energía vital se pierde cuando confiás en el pulso rítmico de la Gran Obra."
    ],

    // --- SIGNIFICADO ORACULAR PROFUNDO (5 ENSAYOS MAESTROS ROTATIVOS) ---
    meaning: "La Templanza (Arcano XIV) es el Gran Ángel Alquimista del Tarot y el guardián del Sendero 25 de la letra Samekh ('el Puntal' o 'el Sostén Circular'), que asciende directamente por el Pilar del Medio del Árbol de la Vida uniendo el fundamento lunar de Yesod con el centro solar crístico de Tiphereth. Su aparición en tu lectura —justo después de la poda radical del Arcano XIII— anuncia un período de profunda regeneración, hallazgo de la fórmula exacta, diplomacia brillante y sinergia creadora. No significa 'tibieza' ni conformismo gris, sino *Templar el Acero*: el arte supremo de sumergir el metal al rojo vivo en el agua fría en el segundo exacto para otorgarle una dureza y elasticidad indestructibles.",
    meaningVariants: [
      "La Templanza (Arcano XIV) es el Gran Ángel Alquimista del Tarot y el guardián del Sendero 25 de la letra Samekh ('el Puntal' o 'el Sostén Circular'), que asciende directamente por el Pilar del Medio del Árbol de la Vida uniendo el fundamento lunar de Yesod con el centro solar crístico de Tiphereth. Su aparición en tu lectura —justo después de la poda radical del Arcano XIII— anuncia un período de profunda regeneración, hallazgo de la fórmula exacta, diplomacia brillante y sinergia creadora. No significa 'tibieza' ni conformismo gris, sino *Templar el Acero*: el arte supremo de sumergir el metal al rojo vivo en el agua fría en el segundo exacto para otorgarle una dureza y elasticidad indestructibles.",
      "En la tradición hermética y rosacruz, este Arcano es la consumación práctica de las Bodas Alquímicas que se anunciaron en Los Amantes (Arcano VI). Mientras en el VI el Rey y la Reina aún eran dos figuras mirándose de frente, en el XIV se han fundido en un solo ser andrógino y alado (el *Rebis* solar-lunar) que trasvasa la corriente magnética entre el cáliz de oro (consciente) y el cáliz de plata (subconsciente). Hoy tenés la capacidad de integrar fuerzas que parecían incompatibles en una síntesis genial.",
      "Bajo la regencia de Sagitario (el Fuego Mutable gobernado por Júpiter), el sendero de Samekh es llamado en los textos cabalísticos la *Inteligencia de Prueba o Tentación*, porque es el examen final del aspirante antes de contemplar el Sol de Tiphereth: mantener el pulso imperturbable y el arco tenso apuntando al centro mientras mezcla las energías del cielo y de la tierra.",
      "Para quien trabaja en formulación, destilación de espíritus, química, gastronomía, diseño o programación, La Templanza es el Arcano patrono del laboratorio: augura el hallazgo de la proporción áurea entre los ingredientes, la rectificación perfecta del espíritu y un resultado final tan armónico que parece obra de magia.",
      "Numéricamente, el Catorce (2 × 7) duplica el poder victorioso del Siete en una circulación perpetua. Te asegura que las tormentas recientes han cedido: entrás en un oasis de gracia operativa donde la salud se restablece, los conflictos se pacificarán mediante el diálogo inteligente y el camino hacia la cima dorada queda despejado."
    ],

    // --- EL ESPEJO PSICOLÓGICO JUNGUIANO (4 DIAGNÓSTICOS ROTATIVOS) ---
    psyche: "En la obra de Carl Gustav Jung, La Templanza personifica con exactitud milimétrica lo que él denominó la *Función Trascendente*: la capacidad de la psique de sostener la tensión entre una tesis consciente y una antítesis inconsciente sin reprimir ninguna de las dos, hasta que de su flujo recíproco nace un tercer estado vivo (el Símbolo Unificador). Tu mente hoy deja de oscilar de un extremo maníaco a un extremo depresivo y conquista la autorregulación soberana.",
    psycheVariants: [
      "En la obra de Carl Gustav Jung, La Templanza personifica con exactitud milimétrica lo que él denominó la *Función Trascendente*: la capacidad de la psique de sostener la tensión entre una tesis consciente y una antítesis inconsciente sin reprimir ninguna de las dos, hasta que de su flujo recíproco nace un tercer estado vivo (el Símbolo Unificador). Tu mente hoy deja de oscilar de un extremo maníaco a un extremo depresivo y conquista la autorregulación soberana.",
      "Este Arcano viene a curar la 'psicología del todo o nada'. Cuando el ego inmaduro se frustra, quiere romper todo o trabajar dieciocho horas seguidas hasta quemarse. La Templanza instala en tu sistema nervioso la sabiduría del Ritmo Homeostático: saber cuánto calor aplicar, cuándo enfriar el alambique y cómo sostener la intensidad día tras día sin derramar ni una gota de vitalidad.",
      "Observá que el líquido entre las dos copas fluye en diagonal ascendente, contrariando la caída natural. Psicológicamente, esto representa la redistribución consciente de la líbido: retirar energía de las preocupaciones bajas y automáticas para elevarla hacia la creación artística, espiritual y estratégica.",
      "El Arcángel del Sendero 25 actúa como bálsamo reparador tras el trauma o el duelo del Arcano XIII. Si tu psique venía de hacer un corte duro, hoy las dos corrientes internas vuelven a coser el tejido del alma con hilos de oro y plata, devolviéndote una serenidad luminosa."
    ],

    lightAndShadow: "Al derecho (En Luz): Alquimia interior consumada, proporción exacta en negocios y fórmulas, sanación física y anímica, diplomacia magistral, sinergia de equipos y paz activa. Invertida (En Sombra): Impaciencia que arruina la mezcla, desbordes extremos, incompatibilidad de caracteres o dispersión de energía.",
    lightAndShadowVariants: [
      "Al derecho (En Luz): Alquimia interior consumada, proporción exacta en negocios y fórmulas, sanación física y anímica, diplomacia magistral, sinergia de equipos y paz activa. Invertida (En Sombra): Impaciencia que arruina la mezcla, desbordes extremos, incompatibilidad de caracteres o dispersión de energía.",
      "En Luz, La Templanza es el maestro alquimista cuyo pulso firme une el fuego y el agua en un elixir inmortal; en Sombra, es el aprendiz ansioso que agita los matraces a destiempo y derrama el oro en el suelo.",
      "Luz activa: Armonía conyugal y societaria, rectificación impecable de productos, serenidad en la tormenta y puntería sagitariana. Sombra latente: Querer contentar a todos diluyendo la fuerza del propio mensaje."
    ],

    // --- DOMINIOS DE LA VIDA (CON 3 VARIANTES COMPLETAS ROTATIVAS) ---
    domains: {
      love: "Relación bálsamo de altísima afinidad anímica, empatía profunda y comunicación sin fricciones. En pareja, inaugura una etapa de reconciliación luminosa, paz doméstica y alquimia erótico-afectiva donde ambos se nutren mutuamente; si estás libre, anuncia un vínculo sereno y sanador que llega sin dramas ni tormentas.",
      work: "Momento supremo para la formulación de productos (destilados, pinturas, alimentos, software), la gestión de equipos multidisciplinarios y las negociaciones diplomáticas. Lográs combinar calidad artesanal con viabilidad industrial en la proporción justa.",
      money: "Flujo financiero equilibrado, diversificación inteligente de ingresos y armonía perfecta entre reinversión productiva y disfrute personal. Tus cuentas encuentran su punto de estabilidad sostenible.",
      spirit: "Circulación libre de la luz por el Pilar del Medio (de Kether a Malkuth pasando por Tiphereth y Yesod); comunión directa con tu Santo Ángel Guardián.",
      healthAndEnergy: "Extraordinario poder de curación y convalecencia exitosa; rige el metabolismo hídrico, la cadera, los muslos y el nervio ciático (Sagitario), así como el equilibrio hormonal y nervioso."
    },
    domainsVariants: [
      {
        love: "Relación bálsamo de altísima afinidad anímica, empatía profunda y comunicación sin fricciones. En pareja, inaugura una etapa de reconciliación luminosa, paz doméstica y alquimia erótico-afectiva donde ambos se nutren mutuamente; si estás libre, anuncia un vínculo sereno y sanador que llega sin dramas ni tormentas.",
        work: "Momento supremo para la formulación de productos (destilados, pinturas, alimentos, software), la gestión de equipos multidisciplinarios y las negociaciones diplomáticas. Lográs combinar calidad artesanal con viabilidad industrial en la proporción justa.",
        money: "Flujo financiero equilibrado, diversificación inteligente de ingresos y armonía perfecta entre reinversión productiva y disfrute personal. Tus cuentas encuentran su punto de estabilidad sostenible.",
        spirit: "Circulación libre de la luz por el Pilar del Medio (de Kether a Malkuth pasando por Tiphereth y Yesod); comunión directa con tu Santo Ángel Guardián.",
        healthAndEnergy: "Extraordinario poder de curación y convalecencia exitosa; rige el metabolismo hídrico, la cadera, los muslos y el nervio ciático (Sagitario), así como el equilibrio hormonal y nervioso."
      },
      {
        love: "El arte de saber cuándo ceder un paso con gracia y cuándo sostener el centro con ternura. Bajo las alas de La Templanza, dos temperamentos muy distintos descubren el ritmo exacto para bailar juntos sin pisarse.",
        work: "Fusión comercial o técnica ganadora: unir un canal tradicional con una herramienta digital nueva, o combinar dos materias primas en una receta que nadie había logrado estabilizar hasta hoy.",
        money: "Liquidez sana y constante (la corriente continua entre los dos cálices): el dinero entra y se reinvierte sin sobresaltos ni cuellos de botella.",
        spirit: "La Oración de la Obra: sentir que cada trasvase, cada línea escrita y cada mezcla en tu taller es una liturgia sagrada asistida por inteligencias superiores.",
        healthAndEnergy: "Sinergia perfecta entre suplementación, nutrición e hidratación; tu organismo asimila hoy al máximo cada mineral y vitamina que le entregás."
      },
      {
        love: "Paz profunda en el corazón tras haber cerrado las heridas del pasado en el Arcano XIII. Hoy amás desde la plenitud tranquila de quien ya no tiene nada que demostrar ni nada que temer.",
        work: "Mediación magistral: tu capacidad de escuchar dos posturas enfrentadas entre socios, proveedores o clientes y diseñar una tercera solución superadora te convierte en la pieza indispensable del tablero.",
        money: "Paciencia financiera que evita extremos: ni avaricia que congela el capital, ni fiebre especulativa que lo arriesga en vano; crecimiento compuesto y seguro.",
        spirit: "El Camino Real hacia la Montaña Solar: caminar con paso rítmico hacia la iluminación manteniendo un pie en el servicio terrenal y otro en la contemplación mística.",
        healthAndEnergy: "Vitalidad serena e inagotable; caminatas largas, natación o ejercicios de respiración rítmica mantienen tus dos corrientes internas en fase."
      }
    ],

    // --- ORÁCULO DE ACCIÓN Y PSICOMAGIA (3 VARIANTES COMPLETAS) ---
    actionOracle: {
      command: "Ajustá hoy con precisión de alquimista las proporciones de tu fórmula, de tu agenda o de tu negociación: encontrá el punto medio exacto entre la exigencia técnica y la fluidez práctica.",
      prohibition: "Prohibido irte hoy a los extremos del fanatismo o del abandono, apurar un proceso de maduración química o comercial, o responder con brusquedad.",
      psychomagicAct: "Tomá dos vasos o copas (idealmente uno de metal/color cálido y otro de vidrio/plata), llená uno con agua pura y trasvasá el agua de un vaso al otro siete veces sin derramar una sola gota; luego bebé el agua despacio declarando: 'Integro mi fuego y mi agua; mi pulso es exacto y mi obra está en armonía'.",
      talismanPhrase: "Entre el cáliz de oro y el cáliz de plata fluye mi vida sin perder una gota; habito en la proporción sagrada."
    },
    actionOracleVariants: [
      {
        command: "Ajustá hoy con precisión de alquimista las proporciones de tu fórmula, de tu agenda o de tu negociación: encontrá el punto medio exacto entre la exigencia técnica y la fluidez práctica.",
        prohibition: "Prohibido irte hoy a los extremos del fanatismo o del abandono, apurar un proceso de maduración química o comercial, o responder con brusquedad.",
        psychomagicAct: "Tomá dos vasos o copas (idealmente uno de metal/color cálido y otro de vidrio/plata), llená uno con agua pura y trasvasá el agua de un vaso al otro siete veces sin derramar una sola gota; luego bebé el agua despacio declarando: 'Integro mi fuego y mi agua; mi pulso es exacto y mi obra está en armonía'.",
        talismanPhrase: "Entre el cáliz de oro y el cáliz de plata fluye mi vida sin perder una gota; habito en la proporción sagrada."
      },
      {
        command: "Combiná hoy dos ideas, insumos o métodos que parecían opuestos para crear una síntesis original que destrabe tu proyecto.",
        prohibition: "No sacudas el alambique ni cambies las variables a mitad del experimento por impaciencia; dejá que la reacción se estabilice.",
        psychomagicAct: "Dibujá con regla sobre una tarjeta blanca un cuadrado dorado y adentro un triángulo equilátero azul o rojo (el emblema del pecho de La Templanza), y apoyalo junto a tu lugar de trabajo para invocar precisión y templanza durante toda la semana.",
        talismanPhrase: "El Triángulo de mi espíritu habita en paz dentro del Cuadrado de mi obra."
      },
      {
        command: "Actuá hoy como el puente pacificador y diplomático en cualquier tensión que surja a tu alrededor: enfriá lo que esté hirviendo y entibiá lo que esté helado.",
        prohibition: "No descuides tu descanso ni tu hidratación hoy por correr detrás del reloj; tu rendimiento depende de tu homeostasis interna.",
        psychomagicAct: "Mezclá en una copa unas gotas de una infusión o botánico aromático con agua fresca, observá cómo las dos densidades se funden en un solo líquido homogéneo y brindá mirando hacia el horizonte por la consumación de tu Gran Obra.",
        talismanPhrase: "Camino por el Sendero del Medio hacia el Sol; el Ángel del Arte guía mis manos."
      }
    ],

    // --- MEMORIA DE SINCRONICIDAD KÁRMICA ---
    synchronicityHook: {
      firstAppearance: "El Arcano XIV despliega sus alas de oro y plata en tu lectura: comienza el tiempo de la alquimia paciente, la sanación y la proporción exacta.",
      secondAppearance: "La Templanza aparece por segunda vez en tu registro: estás yendo de un extremo al otro o intentando forzar un proceso que pide muñeca fina, mezcla armónica y paciencia.",
      thirdAppearance: "Tercera llamada del Arcano XIV: cuidado con derramar el elixir por apuro. Bajá un cambio de inmediato, equilibrá tus dos corrientes y volvé al Pilar del Medio.",
      fourthPlusAppearance: "Consagración alquímica de Samekh: el Oráculo te confirma que la llave maestra de tu etapa actual es la síntesis de opuestos. Mantené el trasvase constante y sin ansiedad."
    },

    // --- CONSEJO FINAL (5 AFORISMOS ROTATIVOS) ---
    counsel: "No apures la destilación de tu Gran Obra: el elixir más poderoso nace del pulso paciente entre tu fuego y tu agua.",
    counselVariants: [
      "No apures la destilación de tu Gran Obra: el elixir más poderoso nace del pulso paciente entre tu fuego y tu agua.",
      "El hierro que solo conoce el fuego se funde sin forma; el que solo conoce el agua se oxida; solo el que pasa del fuego al agua en el segundo exacto se convierte en espada.",
      "La diferencia entre un veneno que mata y la medicina que salva la vida reside únicamente en la dosis y la proporción.",
      "Mantené un pie firme sobre la roca de los números reales y el otro sumergido en el río de la inspiración: así camina quien nunca tropieza.",
      "Cuando tus opuestos interiores dejan de hacerse la guerra, toda la energía que gastabas en defenderte de vos mismo queda libre para conquistar la cima."
    ],

    // --- NODOS INTERACTIVOS DEL DIORAMA 3D ---
    nodes: [
      {
        id: "n1",
        x: 50,
        y: 22,
        title: "El Rostro Dual Sol/Luna y el Emblema del Septenario",
        secret: "El Arcángel Alquímico exhibe su rostro dividido en oro solar y plata lunar mientras en el centro de su coraza fulgura el Triángulo (los 3 principios alquímicos: Azufre, Mercurio y Sal) inscrito dentro del Cuadrado (los 4 elementos). La suma de 3 + 4 es el 7 sagrado: la fórmula de la perfección espiritual encarnada en la arquitectura material.",
        esotericFormula: "Triángulo (Espíritu = 3) + Cuadrado (Materia = 4) = 7 (El Sello de la Gran Obra)",
        meditationPrompt: "¿Cuál es la proporción exacta entre visión creativa (Triángulo) y orden práctico (Cuadrado) que tu proyecto necesita hoy?"
      },
      {
        id: "n2",
        x: 30,
        y: 48,
        title: "Los Cálices de Oro y Plata y la Corriente Contragravitatoria",
        secret: "Entre el cáliz superior de oro solar y el cáliz inferior de plata lunar serpentea en el aire una cinta viva de fuego y agua sin que se derrame una sola gota. Simboliza la circulación del *Azoth* o fluido vital entre la mente consciente y el inconsciente profundo: la capacidad de sublimar la energía bruta y bajar la inspiración divina.",
        esotericFormula: "Cáliz Solar (Consciente) ⇄ Cáliz Lunar (Subconsciente) = El Elixir de la Vida",
        meditationPrompt: "¿Qué dos talentos, áreas o personas en tu vida pueden potenciarse hoy si los ponés a dialogar en un flujo continuo?"
      },
      {
        id: "n3",
        x: 68,
        y: 72,
        title: "Las Alas Catedralicias y el Sendero hacia la Corona Solar",
        secret: "Enmarcado por sus inmensas alas góticas de plumas metálicas, se abre al fondo del diorama un sendero de oro que serpentea desde el estanque terrenal hasta una corona radiante que amanece entre dos cumbres. Es el Sendero 25 de Samekh: la promesa hermética de que la moderación sabia y el trabajo constante conducen infaliblemente a la iluminación de Tiphereth.",
        esotericFormula: "Yesod (El Estanque Lunar) -> Sendero de Samekh -> Tiphereth (La Corona Solar)",
        meditationPrompt: "Mirando el sendero largo hacia tu cumbre, ¿qué ajuste de ritmo hoy te permitirá llegar a la cima con el doble de salud y plenitud?"
      }
    ]
  }
];

// ============================================================================
// MOTOR ORQUESTADOR DEL GRIMORIO SOLAR • VOLUMEN IV (INTEGRACIÓN AUTOMÁTICA)
// ============================================================================
(function initSolarGrimoireVolume4() {
  window.DATOS_SOL_4 = DATOS_SOL_4;
  window.DATOS_SOL = window.DATOS_SOL || [];

  // Integrar sin duplicar en el acumulador global DATOS_SOL
  DATOS_SOL_4.forEach(function (card) {
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
  DATOS_SOL_4.forEach(function (solarCard) {
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
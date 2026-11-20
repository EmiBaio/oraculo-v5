// ============================================================================
// ARCHIVO 1: datos_cartas.js
// Base de Datos Modular: Los 22 Arcanos Mayores (En Luz y En Sombra)
// ============================================================================

// 1. ARREGLO PRINCIPAL: LOS 22 ARCANOS MAYORES (Datos, Paletas y Nodos)
const MAJOR_ARCANA = [
  {
    "id": 0, "numeral": "0", "name": "El Loco", "subtitle": "El Salto al Abismo Astral",
    "palette": { "primary": "#fbbf24", "secondary": "#38bdf8", "glow": "rgba(251, 191, 36, 0.55)" }, "archetype": "fool",
    "correspondences": { "element": "Aire", "astro": "Urano", "yesNo": "Sí (con audacia)", "keywords": ["nuevo comienzo", "salto de fe", "libertad", "espontaneidad", "viaje astral"] },
    "meaning": "En una lectura de Tarot, El Loco (Arcano 0) anuncia un comienzo radical, magnético e inesperado. Representa el potencial infinito antes de tomar forma: el universo te convoca a caminar hacia lo desconocido sin el lastre de viejos dogmas, miedos heredados ni falsas seguridades. Es el despertar del viajero cósmico que confía en su instinto.",
    "lightAndShadow": "Al derecho (En Luz): Libertad creativa absoluta, salto de fe, originalidad genial, inocencia lúcida y apertura a milagros. Invertida (En Sombra): Imprudencia temeraria, huida de responsabilidades, caos por falta de dirección o parálisis por vértigo al cambio.",
    "domains": { "love": "Relaciones libres de ataduras, flechazos repentinos o necesidad de oxigenar el vínculo actual con autenticidad y aventura.", "work": "Inicio de un emprendimiento audaz, cambio de rumbo profesional o propuesta innovadora que exige salir de la zona de confort.", "spirit": "Desapego del ego y conexión directa con la supraconciencia; aprender a fluir con las sincronías del universo." },
    "counsel": "No esperes tener el mapa completo ni la aprobación ajena antes de dar el primer paso: el puente invisible se materializa exactamente cuando apoyás el pie en el vacío.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 24, "title": "El Sol Blanco del Cenit", "secret": "Simboliza la conciencia pura e incondicionada del espíritu que ilumina al iniciado antes de su descenso a la materia." },
      { "id": "n2", "x": 30, "y": 54, "title": "La Rosa de Escarcha", "secret": "Representa la pureza de intención y los deseos incorruptos: la belleza que florece intacta incluso al borde del abismo." },
      { "id": "n3", "x": 68, "y": 74, "title": "El Risco Quebrado", "secret": "Marca la frontera exacta donde caduca el pasado conocido y comienza la soberanía de tu verdadero destino." }
    ]
  },
  {
    "id": 1, "numeral": "I", "name": "La Maga", "subtitle": "Arquitecta de la Voluntad",
    "palette": { "primary": "#f59e0b", "secondary": "#a855f7", "glow": "rgba(168, 85, 247, 0.55)" }, "archetype": "magician",
    "correspondences": { "element": "Aire", "astro": "Mercurio", "yesNo": "Sí rotundo", "keywords": ["manifestación", "poder personal", "alquimia", "iniciativa", "habilidad"] },
    "meaning": "La Maga o El Mago (Arcano I) encarna el principio hermético de correspondencia: \"como es arriba, es abajo\". Indica dominio sobre la materia a través de la mente enfocada y la palabra creadora. Ya poseés los cuatro elementos sobre tu mesa; el tiempo de la preparación terminó y comienza la alquimia activa.",
    "lightAndShadow": "Al derecho (En Luz): Poder de manifestación, maestría técnica, elocuencia magnética, foco láser y resolución brillante. Invertida (En Sombra): Dispersión energética, promesas vacías, manipulación, síndrome del impostor o talento desperdiciado.",
    "domains": { "love": "Magnetismo intenso, comunicación seductora y capacidad de materializar un vínculo deseado tomando la iniciativa.", "work": "Negociaciones exitosas, dominio de nuevas herramientas, ascenso por mérito propio y materialización rápida de ingresos.", "spirit": "Canalización consciente de la energía vital; unión entre la intención espiritual y la acción terrenal." },
    "counsel": "Dejá de dudar o de acumular herramientas en silencio: reuní tu voluntad y canalizá todo tu fuego en una única obra maestra hoy mismo.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 18, "title": "Lemniscata Infinita", "secret": "El ocho horizontal sobre la corona: circuito perpetuo entre el pensamiento invisible y la manifestación tangible." },
      { "id": "n2", "x": 26, "y": 48, "title": "El Cáliz y la Daga", "secret": "Síntesis de los instrumentos elementales: la receptividad emocional del agua unida al filo intelectual del aire." },
      { "id": "n3", "x": 74, "y": 66, "title": "El Altar de Azogue", "secret": "El plano físico de trabajo donde el plomo de la duda cotidiana se transmuta en el oro de la realización." }
    ]
  },
  {
    "id": 2, "numeral": "II", "name": "La Sacerdotisa", "subtitle": "Guardiana del Velo Oculto",
    "palette": { "primary": "#60a5fa", "secondary": "#c084fc", "glow": "rgba(96, 165, 250, 0.55)" }, "archetype": "priestess",
    "correspondences": { "element": "Agua", "astro": "La Luna", "yesNo": "Incierto (esperar y observar)", "keywords": ["intuición", "misterio", "sabiduría oculta", "subconsciente", "prudencia"] },
    "meaning": "La Sacerdotisa o Papisa (Arcano II) custodia el umbral del templo interior y los registros akáshicos. En el Tarot, señala que la respuesta que buscás no se conquista mediante la fuerza bruta ni la prisa, sino descifrando los silencios, los sueños y los símbolos que laten debajo de la superficie.",
    "lightAndShadow": "Al derecho (En Luz): Intuición infalible, clarividencia, prudencia estratégica, gestación silenciosa y custodia de secretos. Invertida (En Sombra): Represión emocional, frialdad distante, secretos revelados a destiempo o desconexión de la voz interior.",
    "domains": { "love": "Conexión psíquica y platónica profunda, amores discretos o necesidad de escuchar tu intuición antes de abrir el corazón.", "work": "Proyectos en fase de incubación que requieren confidencialidad absoluta, estudio profundo e investigación estratégica.", "spirit": "Apertura del tercer ojo, sueños lúcidos y acceso a la sabiduría ancestral femenina." },
    "counsel": "Guardá silencio absoluto sobre tus próximos movimientos: el misterio es el escudo sagrado donde germina tu verdadero poder.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "Corona Triple Lunar", "secret": "Las tres fases de la diosa lunar gobernando lo que fue, lo que se gesta en la sombra y lo que está por nacer." },
      { "id": "n2", "x": 24, "y": 56, "title": "Pilares de Obsidiana y Plata", "secret": "Boaz y Jachin, las columnas de la severidad y la misericordia cuyo equilibrio abre el acceso al santuario." },
      { "id": "n3", "x": 52, "y": 74, "title": "El Pergamino Sellado", "secret": "La Torá esotérica y las leyes del destino que solo se revelan a quien domina su ansiedad racional." }
    ]
  },
  {
    "id": 3, "numeral": "III", "name": "La Emperatriz", "subtitle": "Soberana de la Abundancia Viva",
    "palette": { "primary": "#eab308", "secondary": "#10b981", "glow": "rgba(234, 179, 8, 0.55)" }, "archetype": "empress",
    "correspondences": { "element": "Tierra", "astro": "Venus", "yesNo": "Sí (crecimiento y fruto)", "keywords": ["abundancia", "fertilidad", "creatividad", "belleza", "prosperidad"] },
    "meaning": "La Emperatriz (Arcano III) es la matriz creadora de la naturaleza y el esplendor sensorial. Su aparición en la tirada augura fertilidad creativa, expansión material y cosecha generosa: tus ideas dejan de ser planos mentales para encarnar con vigor, magnetismo y belleza en el mundo real.",
    "lightAndShadow": "Al derecho (En Luz): Abundancia económica, plenitud sensual, maternidad de proyectos, arte inspirado y liderazgo nutritivo. Invertida (En Sombra): Bloqueo creativo, dependencia afectiva, derroche material o sobreprotección asfixiante.",
    "domains": { "love": "Plenitud afectiva y erótica, compromiso fértil, magnetismo irresistible y etapa de calidez y cuidado mutuo.", "work": "Multiplicación de recursos, éxito en industrias creativas, diseño o bienestar, y cosecha financiera de esfuerzos previos.", "spirit": "Reconocer lo divino en el cuerpo y en la Tierra; sanar la relación con el merecimiento y el placer." },
    "counsel": "Nutrí tu cuerpo y tu entorno con belleza tangible: la abundancia del cosmos responde cuando honrás la vida con todos tus sentidos.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "Diadema de Doce Estrellas", "secret": "El dominio armónico sobre los doce signos del zodíaco y los doce ciclos anuales de siembra y cosecha." },
      { "id": "n2", "x": 68, "y": 50, "title": "Cetro de Venus", "secret": "El orbe coronado sobre la cruz: el poder soberano de atraer por gravitación magnética sin necesidad de perseguir." },
      { "id": "n3", "x": 35, "y": 76, "title": "Raíces de Oro Vivo", "secret": "La riqueza orgánica que brota cuando tus proyectos están firmemente arraigados en la realidad." }
    ]
  },
  {
    "id": 4, "numeral": "IV", "name": "El Emperador", "subtitle": "Arquitecto del Trono de Piedra",
    "palette": { "primary": "#f59e0b", "secondary": "#dc2626", "glow": "rgba(220, 38, 38, 0.55)" }, "archetype": "emperor",
    "correspondences": { "element": "Fuego", "astro": "Aries", "yesNo": "Sí (con disciplina)", "keywords": ["autoridad", "estructura", "liderazgo", "estabilidad", "poder terrenal"] },
    "meaning": "El Emperador (Arcano IV) representa la arquitectura del orden, la ley firme y la soberanía material. En el Tarot, te exige consolidar tus fronteras, establecer prioridades innegociables y transformar la inspiración en un imperio sólido capaz de resistir el paso del tiempo.",
    "lightAndShadow": "Al derecho (En Luz): Liderazgo protector, estabilidad financiera, disciplina estratégica, paternidad consciente y victoria estructural. Invertida (En Sombra): Autoritarismo rígido, tiranía, falta de autodisciplina o miedo a perder el control.",
    "domains": { "love": "Vínculos estables y leales que buscan construir futuro, aunque advierte no dejar que el orgullo enfríe la ternura.", "work": "Puestos de mando, consolidación empresarial, contratos firmes y éxito mediante organización y método implacable.", "spirit": "Autodominio sobre los impulsos inferiores; encarnar la autoridad espiritual sin buscar validación externa." },
    "counsel": "Goberná tu propio reino interior antes de exigir obediencia al mundo; la verdadera autoridad es tan firme que no necesita alzar la voz.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "Corona de Hierro y Rubí", "secret": "La mente estratégica e inquebrantable iluminada por el fuego de la voluntad soberana." },
      { "id": "n2", "x": 28, "y": 52, "title": "El Orbe y el Cetro Ankh", "secret": "La cruz ansada egipcia que otorga poder administrativo sobre la vida material y la continuidad de la obra." },
      { "id": "n3", "x": 72, "y": 74, "title": "Trono de Basalto Carnero", "secret": "El asiento cúbico de Aries: fuerza marciana canalizada en cimientos de piedra inamovibles." }
    ]
  },
  {
    "id": 5, "numeral": "V", "name": "El Hierofante", "subtitle": "Custodio de la Llave Arcana",
    "palette": { "primary": "#eab308", "secondary": "#6366f1", "glow": "rgba(99, 102, 241, 0.55)" }, "archetype": "hierophant",
    "correspondences": { "element": "Tierra", "astro": "Tauro", "yesNo": "Sí (por la vía legítima)", "keywords": ["tradición", "maestro espiritual", "enseñanza", "ética", "iniciación"] },
    "meaning": "El Hierofante o Sumo Sacerdote (Arcano V) es el puente sagrado entre el orden cósmico y la conciencia humana. Señala el encuentro con un mentor, el estudio de una doctrina profunda o la necesidad de actuar bajo principios éticos inquebrantables y compromisos formales.",
    "lightAndShadow": "Al derecho (En Luz): Sabiduría ancestral, maestría pedagógica, alianzas leales, matrimonio o iniciación espiritual. Invertida (En Sombra): Dogmatismo ciego, rebeldía sin causa, hipocresía moral o servidumbre a mandatos obsoletos.",
    "domains": { "love": "Amor con propósito trascendente, formalización del vínculo, lealtad absoluta y valores compartidos a largo plazo.", "work": "Éxito en educación, consultoría, instituciones o perfeccionamiento profesional junto a un referente experto.", "spirit": "Iniciación en linajes esotéricos y comprensión de las leyes universales que sostienen el alma." },
    "counsel": "Honrá la raíz de los antiguos maestros, pero recordá que el templo más sagrado no es de piedra: está vivo dentro de tu propio pecho.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 19, "title": "Tiara de los Tres Mundos", "secret": "La triple corona dorada que rige simultáneamente el mundo físico, el intelectual y el divino." },
      { "id": "n2", "x": 70, "y": 48, "title": "Báculo de Triple Cruz", "secret": "La antena resonante que sintoniza las octavas superiores del éter y las traduce en enseñanza." },
      { "id": "n3", "x": 50, "y": 76, "title": "Las Llaves Cruzadas", "secret": "Una llave de oro solar (conciencia) y otra de plata lunar (subconsciente) para abrir los misterios." }
    ]
  },
  {
    "id": 6, "numeral": "VI", "name": "Los Amantes", "subtitle": "Las Bodas Alquímicas del Alma",
    "palette": { "primary": "#f472b6", "secondary": "#fbbf24", "glow": "rgba(244, 114, 182, 0.55)" }, "archetype": "lovers",
    "correspondences": { "element": "Aire", "astro": "Géminis", "yesNo": "Sí (requiere elección)", "keywords": ["amor", "elección decisiva", "almas gemelas", "unión de opuestos", "deseo"] },
    "meaning": "Los Amantes o Los Enamorados (Arcano VI) representan tanto el magnetismo sagrado del amor como la gran encrucijada del libre albedrío. En el Tarot, anuncia la unión alquímica de opuestos complementarios y una decisión vital que definirá tu identidad: elegir desde el corazón exige renunciar a la tibieza.",
    "lightAndShadow": "Al derecho (En Luz): Amor correspondido, comunión de almas, coherencia entre deseo y valores, sociedad afín. Invertida (En Sombra): Indecisión crónica, triángulos conflictivos, tentación vacía o división interior entre razón e instinto.",
    "domains": { "love": "Encuentro kármico, pasión profunda, reconciliación luminosa o decisión definitiva que consolida la pareja.", "work": "Sociedades estratégicas sumamente fértiles o disyuntiva entre dos caminos profesionales donde debés seguir tu vocación.", "spirit": "El matrimonio alquímico interior (Coniunctio): integrar tu polaridad masculina y femenina en unidad." },
    "counsel": "Nunca elijas desde el miedo a perder; elegí únicamente aquello con lo que estés dispuesto a fundirte en el fuego sin mirar atrás.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 21, "title": "El Sol Alado del Cenit", "secret": "El genio supraconsciente que bendice y unifica a los amantes desde la octava superior." },
      { "id": "n2", "x": 28, "y": 54, "title": "El Árbol de las Llamas", "secret": "Los doce frutos de fuego de la voluntad consciente y la inmortalidad del espíritu." },
      { "id": "n3", "x": 72, "y": 54, "title": "La Serpiente del Fruto", "secret": "La fuerza Kundalini y la sabiduría sensorial que despierta al experimentar el mundo." }
    ]
  },
  {
    "id": 7, "numeral": "VII", "name": "El Carro", "subtitle": "El Conquistador de las Dos Esfinges",
    "palette": { "primary": "#38bdf8", "secondary": "#f59e0b", "glow": "rgba(56, 189, 248, 0.58)" }, "archetype": "chariot",
    "correspondences": { "element": "Agua", "astro": "Cáncer", "yesNo": "Sí (avance veloz)", "keywords": ["victoria", "determinación", "avance", "viajes", "autodominio"] },
    "meaning": "El Carro (Arcano VII) es el emblema del triunfo conquistado por determinación pura y coraje enfocado. Muestra al auriga astral gobernando dos fuerzas opuestas sin riendas físicas, solo mediante la firmeza de su mente: cuando unificás tus contradicciones internas, ninguna muralla externa puede detenerte.",
    "lightAndShadow": "Al derecho (En Luz): Victoria rotunda, avance acelerado, viajes prósperos, superación de rivales y foco inquebrantable. Invertida (En Sombra): Pérdida de control, agresividad impulsiva, estancamiento o dispersión de fuerzas.",
    "domains": { "love": "Conquista apasionada, superación de distancias o barreras, y necesidad de avanzar juntos hacia una misma meta.", "work": "Expansión comercial, viajes de negocios exitosos, liderazgo competitivo y logro rápido de objetivos ambiciosos.", "spirit": "Convertir el cuerpo y las emociones en el vehículo obediente del espíritu despierto." },
    "counsel": "Sostené firme el eje entre tu luz y tu sombra: quien logra domar sus propias bestias interiores conquista cualquier horizonte.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "Dosel de Ocho Estrellas", "secret": "La bóveda celeste que protege al conquistador alineado con las leyes del cosmos." },
      { "id": "n2", "x": 50, "y": 48, "title": "Coraza del Escarabajo Solar", "secret": "El sello egipcio de Khepri en el pecho: autorregeneración y voluntad blindada." },
      { "id": "n3", "x": 30, "y": 76, "title": "Esfinges de Luz y Sombra", "secret": "Las corrientes de rigor y clemencia traccionando al unísono bajo el mando del espíritu." }
    ]
  },
  {
    "id": 8, "numeral": "VIII", "name": "La Fuerza", "subtitle": "Domadora del Fuego Interior",
    "palette": { "primary": "#fb923c", "secondary": "#fde047", "glow": "rgba(251, 146, 60, 0.58)" }, "archetype": "strength",
    "correspondences": { "element": "Fuego", "astro": "Leo", "yesNo": "Sí (con templanza y coraje)", "keywords": ["fortaleza", "coraje", "autocontrol", "pasión domada", "resiliencia"] },
    "meaning": "La Fuerza (Arcano VIII) revela el secreto de la supremacía espiritual: el verdadero poder no reprime ni destruye al instinto salvaje, sino que lo comprende, lo acaricia y lo transmuta en su aliado. Representa la valentía serena, la nobleza de corazón y una vitalidad magnética e indestructible.",
    "lightAndShadow": "Al derecho (En Luz): Coraje compasivo, resiliencia heroica, magnetismo vital, dominio de las pasiones y sanación. Invertida (En Sombra): Descontrol emocional, ira explosiva, inseguridad, agotamiento vital o abuso de poder.",
    "domains": { "love": "Pasión ardiente unida a una profunda lealtad; capacidad de apaciguar crisis mediante la ternura y la paciencia.", "work": "Resistencia admirable ante presiones extremas, liderazgo carismático y dominio magistral de situaciones difíciles.", "spirit": "Alquimia del deseo: elevar el fuego instintivo del plexo solar hacia la nobleza del corazón." },
    "counsel": "No luches a golpes contra tu propia tormenta interior: domala con la dulzura implacable de quien conoce su propio centro.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 19, "title": "Halo del Infinito Dorado", "secret": "La octava espiritual que otorga resistencia inagotable por encima de la fuerza muscular." },
      { "id": "n2", "x": 62, "y": 55, "title": "Fauces del León Solar", "secret": "El fuego de Leo —orgullo, deseo y furia vital— entregado mansamente a la conciencia." },
      { "id": "n3", "x": 34, "y": 68, "title": "Guirnalda de Rosas Vivas", "secret": "El lazo alquímico del amor que sujeta con más firmeza que cualquier cadena de hierro." }
    ]
  },
  {
    "id": 9, "numeral": "IX", "name": "El Ermitaño", "subtitle": "La Linterna en la Cumbre Helada",
    "palette": { "primary": "#fcd34d", "secondary": "#64748b", "glow": "rgba(252, 211, 77, 0.55)" }, "archetype": "hermit",
    "correspondences": { "element": "Tierra", "astro": "Virgo", "yesNo": "No por ahora (requiere tiempo)", "keywords": ["introspección", "sabiduría", "soledad fértil", "búsqueda interior", "prudencia"] },
    "meaning": "El Ermitaño (Arcano IX) representa el retiro estratégico hacia la cumbre del espíritu para destilar la verdad esencial. En el Tarot, indica un período de maduración silenciosa, autoconocimiento profundo y desapego del ruido superficial del mundo para escuchar el pulso de tu propia alma.",
    "lightAndShadow": "Al derecho (En Luz): Sabiduría destilada, lucidez analítica, autonomía espiritual, prudencia y guía interior. Invertida (En Sombra): Aislamiento amargo, misantropía, terquedad, miedo a la intimidad o rechazo de consejos sabios.",
    "domains": { "love": "Tiempo de reflexión necesaria, sanación de heridas pasadas en soledad o vínculo maduro basado en la paz y la comprensión.", "work": "Investigación meticulosa, trabajo independiente o de especialista, y planificación silenciosa a largo plazo.", "spirit": "Iluminación interior: convertirte en tu propio maestro y encender la lámpara de la conciencia." },
    "counsel": "Tu linterna hermética solo ilumina el próximo metro del sendero en la niebla, y esa luz basta para llegar hasta la cima.",
    "nodes": [
      { "id": "n1", "x": 66, "y": 38, "title": "El Farol de Seis Puntas", "secret": "El Sello de Salomón irradiando la luz del discernimiento propio en medio de la noche colectiva." },
      { "id": "n2", "x": 32, "y": 60, "title": "El Báculo del Peregrino", "secret": "La columna vertebral y la experiencia acumulada que sostienen el ascenso por la roca." },
      { "id": "n3", "x": 50, "y": 80, "title": "Cima de Ceniza y Hielo", "secret": "La serenidad incorruptible que solo se conquista lejos de la vanidad de la multitud." }
    ]
  },
  {
    "id": 10, "numeral": "X", "name": "La Rueda de la Fortuna", "subtitle": "El Engranaje del Destino",
    "palette": { "primary": "#f59e0b", "secondary": "#ec4899", "glow": "rgba(245, 158, 11, 0.6)" }, "archetype": "wheel",
    "correspondences": { "element": "Fuego", "astro": "Júpiter", "yesNo": "Sí (giro favorable)", "keywords": ["destino", "karma", "cambio de ciclo", "golpe de suerte", "sincronía"] },
    "meaning": "La Rueda de la Fortuna (Arcano X) marca un giro kármico inevitable, la aceleración del tiempo y el fin de un ciclo para dar comienzo a otro. Gobernada por Júpiter, trae sincronías asombrosas, oportunidades inesperadas y el recordatorio de que todo en el universo está en perpetuo movimiento.",
    "lightAndShadow": "Al derecho (En Luz): Golpe de buena fortuna, destino manifiesto, evolución rápida, oportunidades providenciales. Invertida (En Sombra): Resistencia inútil al cambio, retrasos temporales, altibajos bruscos o sensación de descontrol.",
    "domains": { "love": "Encuentros del destino no planificados, giros sorpresivos que sacuden la rutina o reencuentros kármicos.", "work": "Cambios dinámicos de puesto o mercado, expansión financiera imprevista y momento ideal para aprovechar la ola.", "spirit": "Comprender la ley de ciclos y habitar el centro inmóvil del ser mientras las circunstancias giran." },
    "counsel": "Para no marearte ni caer cuando el destino gira a toda velocidad, dejá de aferrarte al borde y desplazate hacia el eje central de la rueda.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "Esfinge del Equilibrio", "secret": "La sabiduría impasible que empuña su espada sin alterarse ante el ascenso o el descenso." },
      { "id": "n2", "x": 50, "y": 50, "title": "El Eje Inmóvil", "secret": "El punto cero del espíritu libre de gravedad kármica en el corazón del torbellino." },
      { "id": "n3", "x": 76, "y": 70, "title": "Runas de Alquimia Viva", "secret": "Sal, Azufre, Mercurio y Agua danzando en las letras sagradas TARO / ROTA." }
    ]
  },
  {
    "id": 11, "numeral": "XI", "name": "La Justicia", "subtitle": "La Dama de la Balanza y el Filo",
    "palette": { "primary": "#e2e8f0", "secondary": "#eab308", "glow": "rgba(234, 179, 8, 0.55)" }, "archetype": "justice",
    "correspondences": { "element": "Aire", "astro": "Libra", "yesNo": "Sí (si obraste con rectitud)", "keywords": ["justicia divina", "karma", "equilibrio", "verdad", "decisiones legales"] },
    "meaning": "La Justicia (Arcano XI) encarna la ley cósmica de causa y efecto, la precisión quirúrgica de la verdad y el equilibrio implacable. En el Tarot, anuncia que recibirás exactamente el fruto de tus actos: es momento de pesar las evidencias sin autoengaños, firmar acuerdos justos y cortar lo que altera tu paz.",
    "lightAndShadow": "Al derecho (En Luz): Integridad absoluta, fallos legales favorables, equilibrio restaurado, honestidad y claridad racional. Invertida (En Sombra): Injusticia, parcialidad, juicios severos, evasión de responsabilidades o desequilibrio.",
    "domains": { "love": "Relaciones basadas en la reciprocidad y el respeto mutuo; resolución honesta de conflictos o formalización legal.", "work": "Firma de contratos transparentes, auditorías exitosas, indemnizaciones justas y reconocimiento objetivo de tu labor.", "spirit": "Impecabilidad kármica: alinear tus pensamientos, palabras y acciones con la pluma de Maat." },
    "counsel": "Aceptá con la frente en alto lo que sembraste y utilizá el filo de tu discernimiento para separar la verdad desnuda del ruido emocional.",
    "nodes": [
      { "id": "n1", "x": 28, "y": 36, "title": "Espada de Doble Filo", "secret": "El verbo vertical que corta las ilusiones hacia ambos lados sin favoritismos." },
      { "id": "n2", "x": 72, "y": 52, "title": "Platillos de Oro Astral", "secret": "La balanza hermética donde el peso del corazón se mide frente a la verdad universal." },
      { "id": "n3", "x": 50, "y": 74, "title": "Joya Cuadrada del Manto", "secret": "El cuaternario del orden material perfectamente engarzado en el círculo del espíritu." }
    ]
  },
  {
    "id": 12, "numeral": "XII", "name": "El Colgado", "subtitle": "El Visionario del Árbol Invertido",
    "palette": { "primary": "#2dd4bf", "secondary": "#818cf8", "glow": "rgba(45, 212, 191, 0.55)" }, "archetype": "hanged",
    "correspondences": { "element": "Agua", "astro": "Neptuno", "yesNo": "No por ahora (pausa necesaria)", "keywords": ["cambio de perspectiva", "entrega", "iluminación", "pausa sagrada", "sacrificio consciente"] },
    "meaning": "El Colgado (Arcano XII) representa la suspensión voluntaria de la inercia mundana para alcanzar una visión superior. Como Odín en el árbol Yggdrasil, muestra que ciertos enigmas de tu vida no se resuelven empujando más fuerte, sino rindiendo el control del ego e invirtiendo por completo tu ángulo de mirada.",
    "lightAndShadow": "Al derecho (En Luz): Epifanía mística, genialidad creativa, desapego liberador, empatía profunda y pausa regeneradora. Invertida (En Sombra): Victimismo estéril, estancamiento prolongado, sacrificios inútiles o negarse a ver la realidad.",
    "domains": { "love": "Necesidad de dar tiempo al vínculo sin presionar definiciones, o mirar al otro desde la compasión en vez del reclamo.", "work": "Pausa estratégica antes de invertir; la solución a un bloqueo laboral aparecerá pensando exactamente al revés del resto.", "spirit": "Rendición mística del ego (Wu Wei) que permite el descenso de la gracia y la iluminación." },
    "counsel": "Detené hoy mismo todo forcejeo inútil: cuando dejás de tironear de la cuerda e invertís tu mirada, descubrís que el bloqueo era un portal.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "El Nudo en el Árbol del Mundo", "secret": "El anclaje en la matriz cósmica que sostiene seguro al iniciado durante su metamorfosis." },
      { "id": "n2", "x": 50, "y": 50, "title": "Piernas en Cruz de Azufre", "secret": "El cuatro numérico cruzado: la subordinación de la materia densa al propósito del alma." },
      { "id": "n3", "x": 50, "y": 76, "title": "La Aureola Abisal", "secret": "El resplandor dorado que brota en la mente cuando se vacía de prejuicios y orgullo." }
    ]
  },
  {
    "id": 13, "numeral": "XIII", "name": "La Muerte", "subtitle": "La Cosecha y el Renacimiento",
    "palette": { "primary": "#e2e8f0", "secondary": "#dc2626", "glow": "rgba(220, 38, 38, 0.55)" }, "archetype": "death",
    "correspondences": { "element": "Agua", "astro": "Escorpio", "yesNo": "No (cierre definitivo para renacer)", "keywords": ["transformación", "renacimiento", "fin de ciclo", "transmutación", "liberación"] },
    "meaning": "La Muerte o El Arcano Sin Nombre (Arcano XIII) rara vez habla de pérdida física; en el Tarot es el gran agente de la transmutación alquímica (*Nigredo*). Anuncia el fin definitivo e irreversible de una etapa gastada para abonar la tierra donde ya está brotando una versión infinitamente más auténtica de tu ser.",
    "lightAndShadow": "Al derecho (En Luz): Transformación radical, liberación de cargas muertas, poda sanadora y amanecer renovado. Invertida (En Sombra): Aferramiento doloroso al pasado, miedo paralizante al cambio o duelo estancado.",
    "domains": { "love": "Transformación profunda de la dinámica de pareja o cierre definitivo de un ciclo tóxico que libera el corazón.", "work": "Reinvención profesional completa, cierre de una etapa laboral cumplida y apertura hacia un nuevo horizonte.", "spirit": "Muerte mística de las falsas identidades para despertar a la esencia inmortal del espíritu." },
    "counsel": "Permití que caiga la hoja seca sin temor ni nostalgia: lo que muere hoy era solo la cáscara que impedía crecer a tu verdadera raíz.",
    "nodes": [
      { "id": "n1", "x": 68, "y": 28, "title": "La Guadaña de Plata", "secret": "El filo lunar de la cosecha que siega sin distinción las máscaras caducas del ego." },
      { "id": "n2", "x": 32, "y": 55, "title": "La Rosa Mística de Cinco Pétalos", "secret": "La quintaesencia inmortal que florece pura en el centro mismo de la ceniza." },
      { "id": "n3", "x": 50, "y": 78, "title": "El Sol Negro del Horizonte", "secret": "El Sol Invictus: la promesa inquebrantable del nuevo amanecer tras la noche oscura." }
    ]
  },
  {
    "id": 14, "numeral": "XIV", "name": "La Templanza", "subtitle": "Alquimista de las Dos Corrientes",
    "palette": { "primary": "#38bdf8", "secondary": "#f43f5e", "glow": "rgba(56, 189, 248, 0.55)" }, "archetype": "temperance",
    "correspondences": { "element": "Fuego", "astro": "Sagitario", "yesNo": "Sí (con paciencia y armonía)", "keywords": ["equilibrio", "alquimia interior", "sanación", "moderación", "armonía"] },
    "meaning": "La Templanza (Arcano XIV) es el ángel alquimista que trasvasa el elixir de la vida entre el cáliz de oro y el de plata sin derramar una sola gota. En tu lectura, augura sanación profunda, reconciliación de extremos, paz tras la tormenta y el hallazgo de la proporción exacta en tus proyectos y vínculos.",
    "lightAndShadow": "Al derecho (En Luz): Sanación física y anímica, diplomacia brillante, serenidad activa, sinergia y paciencia fructífera. Invertida (En Sombra): Desbordes emocionales, impaciencia destructiva, extremos irreconciliables o falta de medida.",
    "domains": { "love": "Relación bálsamo de profunda empatía, comunicación pacífica, almas compañeras y reconciliación sincera.", "work": "Excelente trabajo en equipo, fusiones comerciales armónicas, gestión equilibrada del tiempo y crecimiento sostenido.", "spirit": "Unificación de los chakras y circulación fluida del prana entre el espíritu y el cuerpo." },
    "counsel": "No apures la destilación de tu Gran Obra: el elixir más poderoso nace del pulso paciente entre tu fuego y tu agua.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "Triángulo del Cuadrado", "secret": "El septenario sagrado: la tríada espiritual encarnada en perfecto equilibrio dentro de los cuatro elementos." },
      { "id": "n2", "x": 30, "y": 48, "title": "Cálices de Sol y Luna", "secret": "El flujo magnético continuo que integra la razón diurna con la sensibilidad nocturna." },
      { "id": "n3", "x": 68, "y": 72, "title": "El Sendero hacia los Picos", "secret": "El Camino del Medio dorado que asciende sereno hacia la corona de la iluminación." }
    ]
  },
  {
    "id": 15, "numeral": "XV", "name": "El Diablo", "subtitle": "El Fuego de la Sombra y el Deseo",
    "palette": { "primary": "#ef4444", "secondary": "#f97316", "glow": "rgba(239, 68, 68, 0.6)" }, "archetype": "devil",
    "correspondences": { "element": "Tierra", "astro": "Capricornio", "yesNo": "Depende (cuidado con el precio)", "keywords": ["pasión", "sombra", "magnetismo", "tentación", "liberación de ataduras"] },
    "meaning": "El Diablo (Arcano XV) es el guardián de la sombra junguiana y del fuego instintivo primordial. En el Tarot, pone frente a tus ojos las pasiones viscerales, la ambición material y los pactos inconscientes donde entregaste tu soberanía, recordándote que quien conoce su sombra recupera un caudal inmenso de energía.",
    "lightAndShadow": "Al derecho (En Luz): Magnetismo arrollador, sexualidad plena, ambición creativa lúcida y ruptura de falsos moralismos. Invertida (En Sombra): Adicciones, dependencia tóxica, obsesión, manipulación o cadenas autoimpuestas.",
    "domains": { "love": "Química sexual volcánica y atracción fatal; invita a distinguir entre la pasión libre y el apego posesivo.", "work": "Gran capacidad para generar dinero y poder material, cuidando de no vender tu paz ni tu ética por ambición.", "spirit": "Integración de la sombra: dejar de proyectar tus demonios afuera para recuperar tu poder creador." },
    "counsel": "Observá de cerca los eslabones en tus muñecas: están abiertos y solo permanecen ahí mientras sigas creyendo que no podés soltarlos.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "El Pentagrama Invertido", "secret": "La mente hipnotizada temporalmente por el vértigo de los cinco sentidos materiales." },
      { "id": "n2", "x": 70, "y": 54, "title": "La Antorcha Subterránea", "secret": "El fuego prometeico oculto en el inconsciente capaz de destruir por obsesión o iluminar el abismo." },
      { "id": "n3", "x": 34, "y": 76, "title": "Eslabones Abiertos", "secret": "El gran secreto del Arcano XV: ninguna atadura externa tiene poder sin tu consentimiento interno." }
    ]
  },
  {
    "id": 16, "numeral": "XVI", "name": "La Torre", "subtitle": "El Rayo que Derrumba el Artificio",
    "palette": { "primary": "#f97316", "secondary": "#a855f7", "glow": "rgba(249, 115, 22, 0.62)" }, "archetype": "tower",
    "correspondences": { "element": "Fuego", "astro": "Marte", "yesNo": "No (ruptura liberadora)", "keywords": ["revelación súbita", "derrumbe de ilusiones", "despertar", "catarsis", "liberación"] },
    "meaning": "La Torre o La Casa Dios (Arcano XVI) representa el relámpago de la verdad cósmica que fulmina toda estructura edificada sobre el orgullo, el autoengaño o el miedo. Aunque su impacto inicial sacude los cimientos, en el Tarot es una liberación quirúrgica que derriba tu propia prisión para devolverte el cielo abierto.",
    "lightAndShadow": "Al derecho (En Luz): Despertar fulminante, caída de máscaras, catarsis sanadora y liberación de estructuras opresivas. Invertida (En Sombra): Negación terca ante lo evidente, prolongar una agonía por miedo al cambio o sacudida amortiguada.",
    "domains": { "love": "Verdades que salen a la luz de golpe; ruptura de ilusiones o crisis sincera que limpia el aire por completo.", "work": "Reestructuración drástica, caída de un modelo obsoleto y oportunidad de reconstruir sobre bases 100% reales.", "spirit": "Satori o iluminación por impacto: el derrumbe instantáneo de la coraza del ego." },
    "counsel": "No intentes apuntalar las paredes que el rayo del destino ya partió: salí de entre los escombros y agradecé poder mirar de nuevo las estrellas.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "El Relámpago Astral", "secret": "El destello de lucidez divina que desciende desde Kether para quebrar las formas rígidas." },
      { "id": "n2", "x": 72, "y": 34, "title": "La Corona Derribada", "secret": "El destronamiento necesario de la arrogancia intelectual que creía controlarlo todo." },
      { "id": "n3", "x": 34, "y": 72, "title": "Veintidós Chispas de Oro", "secret": "Las 22 letras hebreas de la creación cayendo como rocío de gracia en medio del colapso." }
    ]
  },
  {
    "id": 17, "numeral": "XVII", "name": "La Estrella", "subtitle": "El Manantial del Cosmos",
    "palette": { "primary": "#38bdf8", "secondary": "#fde047", "glow": "rgba(56, 189, 248, 0.6)" }, "archetype": "star",
    "correspondences": { "element": "Aire", "astro": "Acuario", "yesNo": "Sí luminoso", "keywords": ["esperanza", "inspiración", "fe", "sanación", "propósito estelar"] },
    "meaning": "La Estrella (Arcano XVII) es el faro de gracia, pureza y renovación que brilla tras el derrumbe de La Torre. En el Tarot, anuncia un período de profunda paz espiritual, inspiración artística, buena estrella y alineación cristalina con tu verdadero norte vocacional y afectivo.",
    "lightAndShadow": "Al derecho (En Luz): Esperanza fundada, inspiración sublime, sanación emocional, generosidad y bendición astral. Invertida (En Sombra): Desánimo pasajero, pesimismo, desconexión de los propios sueños o idealismo sin arraigo.",
    "domains": { "love": "Amor transparente y sin máscaras, entrega genuina, ternura reparadora y conexión de almas con futuro luminoso.", "work": "Éxito en proyectos creativos, artísticos o humanitarios; reconocimiento público y guía intuitiva certera.", "spirit": "Canalización pura de luz cósmica; certeza íntima de estar en el lugar y momento exactos." },
    "counsel": "Verté tus dones al mundo sin temor a quedarte vacío: tus cántaros están conectados directamente al manantial inagotable del cosmos.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "Sirio de Ocho Puntas", "secret": "El Sol espiritual detrás del Sol que guía el destino superior de los iniciados." },
      { "id": "n2", "x": 30, "y": 58, "title": "Ánforas de Éter y Agua", "secret": "La circulación perpetua que fertiliza simultáneamente la tierra firme y el caudal del alma." },
      { "id": "n3", "x": 66, "y": 76, "title": "El Estanque Espejado", "secret": "La mente serena y limpia de temor capaz de reflejar el firmamento sin distorsión." }
    ]
  },
  {
    "id": 18, "numeral": "XVIII", "name": "La Luna", "subtitle": "El Espejismo de las Profundidades",
    "palette": { "primary": "#818cf8", "secondary": "#2dd4bf", "glow": "rgba(129, 140, 248, 0.6)" }, "archetype": "moon",
    "correspondences": { "element": "Agua", "astro": "Piscis", "yesNo": "Incierto (esperar a que aclare)", "keywords": ["subconsciente", "intuición psíquica", "sueños", "ilusiones", "misterios ocultos"] },
    "meaning": "La Luna (Arcano XVIII) te sumerge en el océano magnético del inconsciente, la imaginación poética y los recuerdos ancestrales. En el Tarot, advierte que bajo la penumbra plateada las apariencias engañan: para cruzar entre las dos torres sin extraviarte en espejismos ni miedos proyectados, debés guiarte por tu instinto más fino.",
    "lightAndShadow": "Al derecho (En Luz): Percepción psíquica profunda, sueños proféticos, inspiración poética y revelación de verdades ocultas. Invertida (En Sombra): Confusión mental, engaños que salen a la luz, ansiedad infundada o fantasmas del pasado.",
    "domains": { "love": "Magnetismo hipnótico y emociones intensas, pero pide aclarar malentendidos, celos o silencios ambiguos.", "work": "Inspiración extraordinaria para el arte y la psicología; prudencia extrema ante promesas poco claras o firmas dudosas.", "spirit": "Travesía chamánica por el mundo onírico para rescatar tesoros olvidados de la psique." },
    "counsel": "Caminá con paso sereno entre las dos torres de la noche sin dejarte hechizar por las sombras: el alba siempre responde a quien mantiene el rumbo.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 22, "title": "El Rostro del Eclipse", "secret": "La matriz lunar que destila gotas de rocío astral para despertar la memoria del alma." },
      { "id": "n2", "x": 24, "y": 52, "title": "Las Torres del Umbral", "secret": "Los pilares fronterizos donde termina la razón conocida y se abre el misterio abisal." },
      { "id": "n3", "x": 50, "y": 78, "title": "El Guardián del Abismo", "secret": "El escarabajo o cangrejo sagrado que emerge del fondo de las aguas empujando la conciencia hacia el Sol." }
    ]
  },
  {
    "id": 19, "numeral": "XIX", "name": "El Sol", "subtitle": "El Esplendor del Mediodía Inmortal",
    "palette": { "primary": "#fde047", "secondary": "#f59e0b", "glow": "rgba(253, 224, 71, 0.65)" }, "archetype": "sun",
    "correspondences": { "element": "Fuego", "astro": "El Sol", "yesNo": "Sí absoluto y radiante", "keywords": ["éxito", "plenitud", "felicidad", "claridad", "abundancia vital"] },
    "meaning": "El Sol (Arcano XIX) es la carta de mayor luminosidad, vitalidad y plenitud de todo el Tarot. Disipa de inmediato cualquier niebla de duda o temor: anuncia triunfo rotundo, alegría compartida, salud radiante, verdad transparente y un período de gracia donde tus esfuerzos brillan en su cenit.",
    "lightAndShadow": "Al derecho (En Luz): Éxito rotundo, felicidad genuina, claridad mental absoluta, vitalidad, fraternidad y prosperidad. Invertida (En Sombra): Éxito demorado pero seguro, vanidad, exceso de ego o agotamiento por querer abarcar demasiado.",
    "domains": { "love": "Amor cálido, transparente y celebratorio; etapa de felicidad plena, convivencia luminosa o llegada de hijos.", "work": "Reconocimiento público, ascensos, ganancias financieras brillantes y culminación triunfal de proyectos.", "spirit": "Iluminación solar (Rubedo): comunión gozosa entre el niño interior libre y la conciencia divina." },
    "counsel": "Brillá con toda tu potencia sin pedir disculpas por tu luz: tu claridad hoy es la hoguera que también inspira y entibia a quienes te rodean.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 24, "title": "El Disco de Veintiún Rayos", "secret": "El corazón del sistema cósmico irradiando luz recta (conocimiento) y ondulada (amor)." },
      { "id": "n2", "x": 28, "y": 60, "title": "Girasoles de Oro Alquímico", "secret": "Los cuatro reinos de la naturaleza orientados en armonía hacia la fuente de la vida." },
      { "id": "n3", "x": 68, "y": 76, "title": "El Muro Superado", "secret": "Las antiguas barreras del ego transformadas ahora en el cerco protector de tu jardín." }
    ]
  },
  {
    "id": 20, "numeral": "XX", "name": "El Juicio", "subtitle": "El Llamado del Eón Despierto",
    "palette": { "primary": "#f8fafc", "secondary": "#f59e0b", "glow": "rgba(248, 250, 252, 0.58)" }, "archetype": "judgement",
    "correspondences": { "element": "Fuego / Espíritu", "astro": "Plutón", "yesNo": "Sí (renacimiento y resolución)", "keywords": ["despertar", "vocación", "renacimiento", "perdón", "resolución kármica"] },
    "meaning": "El Juicio (Arcano XX) no habla de castigo, sino del despertar definitivo de la conciencia ante el llamado de su verdadera misión. En el Tarot, anuncia una revelación liberadora, la absolución del pasado, el cierre triunfal de una prueba kármica y el renacimiento hacia una vida de octava superior.",
    "lightAndShadow": "Al derecho (En Luz): Despertar vocacional, perdón que libera, segundas oportunidades gloriosas, fallos favorables y renovación total. Invertida (En Sombra): Hacer oídos sordos al llamado interior, autocrítica despiadada o postergar una decisión inminente.",
    "domains": { "love": "Renovación profunda del vínculo, reconciliación transformadora o encuentro que despierta tu corazón a otro nivel.", "work": "Descubrimiento de tu verdadera vocación, ascenso trascendental o resolución definitiva de un asunto pendiente.", "spirit": "Resurrección iniciática: escuchar la nota vibratoria de tu Yo Superior y emerger del letargo." },
    "counsel": "Perdoná de raíz a tu antigua versión y respondé al llamado hoy mismo: ya no pertenecés al sepulcro de las limitaciones que dejaste atrás.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "La Trompeta de Siete Tonos", "secret": "El verbo sonoro del Eón que despierta las células dormidas y convoca al espíritu." },
      { "id": "n2", "x": 68, "y": 44, "title": "El Estandarte de la Cruz Solar", "secret": "La cuadratura del tiempo redimida en el punto exacto del eterno presente." },
      { "id": "n3", "x": 50, "y": 76, "title": "El Sarcófago Abierto", "secret": "El cuerpo de hábitos pasados que queda atrás cuando la conciencia se eleva libre." }
    ]
  },
  {
    "id": 21, "numeral": "XXI", "name": "El Mundo", "subtitle": "La Corona de la Gran Obra",
    "palette": { "primary": "#fde047", "secondary": "#a855f7", "glow": "rgba(168, 85, 247, 0.65)" }, "archetype": "world",
    "correspondences": { "element": "Tierra / Éter", "astro": "Saturno", "yesNo": "Sí absoluto (éxito total)", "keywords": ["realización", "plenitud", "éxito", "totalidad", "viajes internacionales"] },
    "meaning": "El Mundo (Arcano XXI) es la corona suprema del Tarot y la consumación perfecta del Viaje del Loco. Representa la totalidad integrada, el éxito sin fisuras, la maestría sobre los cuatro elementos y el cierre glorioso de un gran ciclo vital que te abre las puertas del universo entero.",
    "lightAndShadow": "Al derecho (En Luz): Realización suprema, éxito rotundo, plenitud afectiva y material, viajes al extranjero y armonía cósmica. Invertida (En Sombra): Falta de un último paso para cerrar un ciclo, demora menor o miedo a habitar el propio éxito.",
    "domains": { "love": "Amor pleno, completo y trascendente; celebración de un compromiso sagrado o plenitud interior que atrae lo mejor.", "work": "Coronación de una carrera o proyecto mayor, proyección internacional, prestigio y abundancia consolidada.", "spirit": "Anima Mundi: danzar en el centro exacto del mandala cósmico en unidad con toda la creación." },
    "counsel": "Celebrá la Gran Obra consumada: hoy habitás en el centro sagrado del universo y los cuatro elementos bailan en armonía a tu favor.",
    "nodes": [
      { "id": "n1", "x": 50, "y": 20, "title": "La Guirnalda Ouroboros", "secret": "La corona elíptica de laurel que envuelve al maestro que ha trascendido la rueda del tiempo." },
      { "id": "n2", "x": 50, "y": 50, "title": "Varas de Espiral Doble", "secret": "Los dos polos de la luz astral —involución y evolución— gobernados con gracia en la danza." },
      { "id": "n3", "x": 24, "y": 76, "title": "Los Cuatro Vivientes", "secret": "El Tetramorfos sagrado (León, Toro, Águila y Ángel) sosteniendo en perfección el trono del cosmos." }
    ]
  }
];

// 2. DICCIONARIO DE CARTAS INVERTIDAS (Textos en Sombra para los 22 Arcanos)
const REVERSED_DATA = {
  0: {
    yesNo: "No (precaución ante riesgos)",
    meaning: "El Loco invertido advierte sobre la temeridad o el vértigo paralizante. La energía de inicio se vuelve caótica, señalando decisiones apresuradas sin medir consecuencias, o bien miedo a dar el salto necesario por inseguridad.",
    lightAndShadow: "En Sombra Activa: Imprudencia temeraria, huida de responsabilidades, caos por falta de dirección o parálisis por vértigo al cambio.",
    domains: {
      love: "Inestabilidad emocional, promesas fugaces o temor a comprometerse de verdad en el vínculo.",
      work: "Riesgos financieros mal calculados, falta de planificación o proyectos que se abandonan a mitad de camino.",
      spirit: "Desconexión con la voz intuitiva; confundir un impulso del ego con una señal del universo."
    },
    counsel: "Antes de saltar al abismo, asegurate de no estar huyendo de vos mismo: distinguí entre la valentía y la imprudencia."
  },
  1: {
    yesNo: "No por ahora (revisá tu enfoque)",
    meaning: "La Maga invertida señala una desconexión entre tu voluntad y tus actos. Tus herramientas están sobre la mesa, pero la energía se dispersa en dudas, bloqueos creativos o intentos de forzar resultados mediante la astucia.",
    lightAndShadow: "En Sombra Activa: Dispersión energética, promesas vacías, manipulación, síndrome del impostor o talento desperdiciado.",
    domains: {
      love: "Juegos de poder, palabras seductoras sin sustento real o falta de transparencia en las intenciones.",
      work: "Estancamiento por abarcar demasiado a la vez, herramientas desaprovechadas o desconfianza en tu propia capacidad.",
      spirit: "Intentar manipular el flujo del destino desde la ansiedad en lugar de alinear tu propósito."
    },
    counsel: "Recuperá tu centro y tu honestidad interior: no necesitás buscar más recursos afuera, sino ordenar tu propia mente."
  },
  2: {
    yesNo: "No (hay información oculta)",
    meaning: "La Sacerdotisa invertida revela que estás ignorando tu voz interior o que existen secretos guardados que enturbian la situación. Advierte contra la superficialidad y los juicios apresurados cuando aún no ves el cuadro completo.",
    lightAndShadow: "En Sombra Activa: Represión emocional, frialdad distante, secretos revelados a destiempo o desconexión de la intuición.",
    domains: {
      love: "Muros emocionales, silencios tensos, agendas ocultas o negarse a ver señales evidentes en la pareja.",
      work: "Cuidado con cláusulas no leídas o información retenida; no firmes ni decidas hasta investigar a fondo.",
      spirit: "Ruido mental y exceso de racionalismo que bloquean los mensajes de tus sueños y tu sexto sentido."
    },
    counsel: "El agua turbia solo se aclara cuando dejás de agitarla: hacé silencio y escuchá lo que tu intuición ya sabe."
  },
  3: {
    yesNo: "No (estancamiento temporal)",
    meaning: "La Emperatriz invertida muestra un bloqueo en el flujo de la creatividad o del cuidado personal. Indica que estás entregando toda tu energía hacia afuera descuidando tu propio jardín, o cayendo en la dependencia de la aprobación ajena.",
    lightAndShadow: "En Sombra Activa: Bloqueo creativo, dependencia afectiva, derroche material, vanidad o sobreprotección asfixiante.",
    domains: {
      love: "Demanda excesiva de atención, celos, asfixia en la pareja o descuido del propio valor y deseo.",
      work: "Proyectos que tardan en dar fruto, falta de inspiración o administración desordenada de tus recursos.",
      spirit: "Desconexión con el cuerpo y la naturaleza; olvidar que vos también merecés recibir cuidado y abundancia."
    },
    counsel: "Antes de exigirle frutos a la tierra, regá tu propia raíz: volvé a nutrir tu cuerpo, tu calma y tu autoestima."
  },
  4: {
    yesNo: "No (exceso de rigidez o falta de orden)",
    meaning: "El Emperador invertido señala que la estructura se volvió una jaula rígida o, en su polo opuesto, que falta autodisciplina para sostener tus metas. Advierte contra la terquedad, el autoritarismo y el miedo a perder el control.",
    lightAndShadow: "En Sombra Activa: Autoritarismo rígido, tiranía, inflexibilidad, falta de límites claros o debilidad de carácter.",
    domains: {
      love: "Luchas de poder, frialdad emocional, orgullo que impide pedir perdón o dinámicas controladoras.",
      work: "Burocracia paralizante, jefes inflexibles o desorganización interna que debilita tu liderazgo.",
      spirit: "Confundir el control del ego con la verdadera fortaleza del espíritu."
    },
    counsel: "El roble demasiado rígido se quiebra en la tormenta: cambiá la imposición por firmeza serena y flexible."
  },
  5: {
    yesNo: "No (cuestioná el mandato)",
    meaning: "El Hierofante invertido te convoca a cuestionar dogmas, moldes heredados y estructuras sociales que ya te quedan chicas. Es el despertar del librepensador que busca su propia verdad más allá de las apariencias.",
    lightAndShadow: "En Sombra Activa: Dogmatismo ciego, rebeldía impulsiva, hipocresía moral o servidumbre a mandatos obsoletos.",
    domains: {
      love: "Necesidad de romper rutinas impuestas por mandato social y construir acuerdos auténticos en la pareja.",
      work: "Choque con culturas corporativas anticuadas; momento de innovar en lugar de repetir fórmulas viejas.",
      spirit: "Liberación de culpas religiosas o dogmas externos para conectar de forma directa con lo sagrado."
    },
    counsel: "Las tradiciones sirven como guía, no como cadena: si el molde heredado apaga tu esencia, atrevete a crear tu propio camino."
  },
  6: {
    yesNo: "No (división interior)",
    meaning: "Los Amantes invertidos reflejan una encrucijada no resuelta, dudas profundas o una contradicción entre lo que pensás, lo que sentís y lo que hacés. Advierte sobre elegir por miedo a la soledad o por mera tentación pasajera.",
    lightAndShadow: "En Sombra Activa: Indecisión crónica, triángulos conflictivos, tentación vacía o división interior entre razón e instinto.",
    domains: {
      love: "Desarmonía afectiva, promesas ambiguas, interferencias externas o falta de compromiso real con la elección.",
      work: "Sociedades desalineadas en valores o postergación de una decisión clave que frena tu avance.",
      spirit: "Guerra interna entre tus deseos y tus principios; necesidad urgente de recuperar tu coherencia."
    },
    counsel: "No podés avanzar con un pie en cada sendero: alineá tus actos con tus valores más profundos antes de decidir."
  },
  7: {
    yesNo: "No (frená y recalibrá el rumbo)",
    meaning: "El Carro invertido advierte que estás intentando avanzar a la fuerza mientras tus caballos interiores tiran en direcciones opuestas. Señala pérdida de rumbo, agotamiento por empuje ciego o retrasos que te obligan a revisar el mapa.",
    lightAndShadow: "En Sombra Activa: Pérdida de control, agresividad impulsiva, estancamiento por dispersión o prisa contraproducente.",
    domains: {
      love: "Querer forzar los tiempos del otro, choques de carácter o avanzar sin saber hacia dónde va la relación.",
      work: "Proyectos trabados por falta de dirección clara, viajes demorados o desgaste por exceso de competencia.",
      spirit: "Intentar domar tus emociones mediante la violencia mental en vez de integrarlas con sabiduría."
    },
    counsel: "Soltá el acelerador por un instante: la velocidad no sirve de nada si perdiste de vista tu verdadero norte."
  },
  8: {
    yesNo: "No (recuperá tu eje vital)",
    meaning: "La Fuerza invertida indica que el cansancio, la duda o las pasiones desbordadas están nublando tu templanza. Puede manifestarse como inseguridad ante un desafío o como reacciones impulsivas nacidas del agotamiento.",
    lightAndShadow: "En Sombra Activa: Descontrol emocional, ira contenida o explosiva, inseguridad, agotamiento vital o flaqueza de ánimo.",
    domains: {
      love: "Reacciones de orgullo, celos e impaciencia, o sentir que estás sosteniendo el vínculo en soledad.",
      work: "Desgaste físico y mental (burnout), miedo a defender tu valor o pérdida temporal de motivación.",
      spirit: "Reprimir tu naturaleza instintiva o juzgarte con dureza en lugar de abrazar tu vulnerabilidad."
    },
    counsel: "No te castigues por sentir cansancio: descansá, respirá hondo y recordá que tu fuego interior sigue intacto."
  },
  9: {
    yesNo: "No (evitá cerrarte al mundo)",
    meaning: "El Ermitaño invertido muestra que el retiro saludable corre riesgo de transformarse en aislamiento amargo o terquedad. También puede señalar el extremo opuesto: actuar sin reflexionar por miedo a quedarte a solas con tus pensamientos.",
    lightAndShadow: "En Sombra Activa: Aislamiento excesivo, frialdad distante, terquedad, miedo a la intimidad o rechazo de ayuda sincera.",
    domains: {
      love: "Distancia emocional que enfría la pareja, silencio prolongado o encerrarse en heridas del pasado.",
      work: "Querer resolver todo sin pedir ayuda, exceso de perfeccionismo solitario o desconexión del equipo.",
      spirit: "Perderse en laberintos mentales sin llevar la sabiduría adquirida a la vida práctica."
    },
    counsel: "La cueva fue necesaria para sanar, pero ya es hora de bajar de la montaña y volver a compartir tu luz."
  },
  10: {
    yesNo: "No (resistencia al cambio de ciclo)",
    meaning: "La Rueda de la Fortuna invertida señala demoras imprevistas, giros que ponen a prueba tu adaptabilidad o una resistencia terca a aceptar que una etapa ya cumplió su ciclo. Lo que hoy parece un revés es un reajuste del destino.",
    lightAndShadow: "En Sombra Activa: Resistencia inútil al cambio, retrasos temporales, repetición de patrones o sensación de descontrol.",
    domains: {
      love: "Repetir viejas dinámicas afectivas esperando resultados distintos, o atravesar un bache que pide paciencia.",
      work: "Tiempos lentos, factores externos que demoran un resultado y necesidad de ser prudente con el dinero.",
      spirit: "Comprender que la verdadera paz no depende de controlar el clima externo, sino de sostener tu eje."
    },
    counsel: "Dejá de nadar contra la corriente: cuando aceptás el cambio de estación y aprendés la lección, la rueda vuelve a impulsarte."
  },
  11: {
    yesNo: "No (desequilibrio por resolver)",
    meaning: "La Justicia invertida advierte sobre falta de equidad, juicios parciales o negación a asumir la propia responsabilidad en un conflicto. Si hay asuntos legales o contractuales, pide revisar cada detalle con lupa y paciencia.",
    lightAndShadow: "En Sombra Activa: Injusticia, parcialidad, autoengaño, severidad excesiva o evasión de consecuencias.",
    domains: {
      love: "Falta de reciprocidad en la entrega, reproches cruzados o negarse a reconocer la propia parte del error.",
      work: "Demoras burocráticas, condiciones laborales desbalanceadas o acuerdos que requieren mayor transparencia.",
      spirit: "Juzgarte a vos mismo o a los demás sin misericordia, olvidando la compasión."
    },
    counsel: "Quitá el velo del autoengaño y asumí tu parte con honestidad: la verdad es el único camino para restaurar tu equilibrio."
  },
  12: {
    yesNo: "No (salí del estancamiento)",
    meaning: "El Colgado invertido indica que la pausa reflexiva se ha convertido en parálisis, indecisión prolongada o sacrificios que nadie pidió. Estás postergando una acción necesaria o esperando que el tiempo resuelva todo por sí solo.",
    lightAndShadow: "En Sombra Activa: Victimismo estéril, estancamiento prolongado, sacrificios inútiles o resistencia a cambiar de enfoque.",
    domains: {
      love: "Sostener una situación indefinida por costumbre o entregar de más esperando que el otro cambie.",
      work: "Esfuerzos mal direccionados que no rinden fruto; es momento de destrabar el proyecto y pasar a la acción.",
      spirit: "Usar la excusa de 'esperar la señal perfecta' para esconder el miedo a comprometerte con tu vida."
    },
    counsel: "La pausa ya cumplió su propósito: desatá hoy mismo el nudo del sacrificio inútil y poné los pies sobre la tierra."
  },
  13: {
    yesNo: "No (resistencia a soltar lo caduco)",
    meaning: "La Muerte invertida es el aferramiento tenaz a una etapa, hábito o vínculo que ya cumplió su ciclo vital. El dolor o el bloqueo actual no provienen del cambio en sí, sino del esfuerzo agotador por mantener vivo el pasado.",
    lightAndShadow: "En Sombra Activa: Aferramiento doloroso al pasado, miedo paralizante al cambio, inercia o duelo no resuelto.",
    domains: {
      love: "Dificultad para soltar a un ex, negarse a transformar hábitos dañinos en la pareja o temor a empezar de nuevo.",
      work: "Insistir en un modelo o puesto que ya no ofrece crecimiento por miedo a la incertidumbre.",
      spirit: "Resistencia del ego a abandonar viejas etiquetas para permitir tu verdadero renacimiento."
    },
    counsel: "Lo que soltás con gratitud deja espacio para la vida nueva: abrí las manos y permití que el ciclo se complete."
  },
  14: {
    yesNo: "No (recuperá la armonía primero)",
    meaning: "La Templanza invertida revela impaciencia, falta de medida o fricción entre fuerzas que aún no logran integrarse. Estás yendo de un extremo al otro o intentando apurar un proceso que necesita maduración.",
    lightAndShadow: "En Sombra Activa: Desbordes emocionales, impaciencia destructiva, extremos irreconciliables o falta de medida.",
    domains: {
      love: "Choque de temperamentos, ansiedad en la comunicación o necesidad de bajar el ritmo para escucharse.",
      work: "Desgaste por mala gestión de energías, fricciones en el equipo o dispersión de prioridades.",
      spirit: "Desconexión entre mente, cuerpo y emoción; urgencia de recuperar la serenidad interior."
    },
    counsel: "Baja la velocidad y respirá: la alquimia verdadera nunca ocurre a los empujones."
  },
  15: {
    yesNo: "Sí (liberación de ataduras)",
    meaning: "El Diablo invertido anuncia el despertar de la conciencia que rompe cadenas, adicciones o pactos tóxicos. Es el momento en que ves con claridad dónde entregabas tu poder y decidís recuperar tu libertad.",
    lightAndShadow: "En Sombra Activa: Ruptura de cadenas, desintoxicación emocional, o bien negación de una sombra que pide ser vista.",
    domains: {
      love: "Liberarse de dinámicas de dependencia o celos para sanar la forma de vincularse.",
      work: "Soltar un entorno laboral asfixiante o desactivar ambiciones que te costaban la paz.",
      spirit: "Dejar de temer a tu propia sombra e integrar tu energía vital con conciencia."
    },
    counsel: "Los eslabones ya están abiertos: da el paso afuera de la celda y reclamá tu soberanía."
  },
  16: {
    yesNo: "No (crisis latente que pide cambio)",
    meaning: "La Torre invertida señala que estás intentando sostener a la fuerza una estructura que ya está agrietada por dentro. Retrasar el cambio por miedo al impacto solo prolonga la tensión.",
    lightAndShadow: "En Sombra Activa: Negación terca ante lo evidente, prolongar una agonía por miedo al cambio o sacudida amortiguada.",
    domains: {
      love: "Evitar una conversación necesaria por temor a la ruptura o sostener apariencias.",
      work: "Aferrarse a un sistema obsoleto cuando todo indica que es hora de reestructurar.",
      spirit: "Resistencia del ego a soltar falsas seguridades que impiden tu despertar."
    },
    counsel: "No temas que caiga lo que ya no tiene cimientos: derribá vos mismo lo falso con consciencia."
  },
  17: {
    yesNo: "No (recuperá la fe en vos)",
    meaning: "La Estrella invertida muestra un nubarrón pasajero de pesimismo, cansancio anímico o desconexión con tu propósito. La luz guía sigue en el cielo, pero tenés la mirada fija en el suelo.",
    lightAndShadow: "En Sombra Activa: Desánimo pasajero, pesimismo, autocrítica o desconexión de los propios sueños.",
    domains: {
      love: "Cerrar el corazón por desilusiones previas o sentir que das más de lo que recibís.",
      work: "Falta de inspiración creativa o dudar de tu propio talento justo antes de brillar.",
      spirit: "Sequedad espiritual temporal; necesidad de volver a confiar en la vida."
    },
    counsel: "El firmamento no se apagó: limpiá tu mirada y volvé a creer en la belleza de tu camino."
  },
  18: {
    yesNo: "No (esperá a que disipe la niebla)",
    meaning: "La Luna invertida indica que las ilusiones, engaños o confusiones comienzan a disiparse, o bien que los miedos irracionales están nublando tu juicio. No tomes decisiones definitivas en medio de la bruma.",
    lightAndShadow: "En Sombra Activa: Confusión mental, secretos que salen a la luz, ansiedad infundada o espejismos.",
    domains: {
      love: "Malentendidos, sospechas o verdades ocultas que finalmente se revelan para limpiar el vínculo.",
      work: "Falta de claridad en propuestas; exigí todo por escrito y evitá suposiciones.",
      spirit: "Afrontar los fantasmas del inconsciente con la luz de la conciencia despierta."
    },
    counsel: "No corras en la oscuridad: esperá el amanecer para distinguir las sombras de la realidad."
  },
  19: {
    yesNo: "Sí (con leve demora)",
    meaning: "El Sol invertido conserva su energía luminosa y benéfica, pero advierte sobre pequeños retrasos, nubes pasajeras o un exceso de orgullo que impide disfrutar de lo logrado.",
    lightAndShadow: "En Sombra Activa: Éxito demorado pero seguro, vanidad, impaciencia o agotamiento temporal.",
    domains: {
      love: "Malentendidos menores por orgullo infantil dentro de un vínculo que sigue siendo cálido.",
      work: "El triunfo llega, aunque requiere ajustar detalles finales o moderar el exceso de confianza.",
      spirit: "Recordar que la verdadera luz brilla con humildad y gratitud, sin necesidad de aplausos."
    },
    counsel: "Una nube pasajera no apaga el mediodía: mantené la alegría que el éxito ya está en camino."
  },
  20: {
    yesNo: "No (no ignores el llamado)",
    meaning: "El Juicio invertido muestra resistencia a escuchar una verdad interior innegable o culpa por errores del pasado que aún no te perdonaste. Postergar tu renovación frena tu evolución.",
    lightAndShadow: "En Sombra Activa: Hacer oídos sordos al llamado interior, autocrítica severa o demorar una decisión clave.",
    domains: {
      love: "Rencores antiguos sin resolver o miedo a dar una definición sincera en la pareja.",
      work: "Postergar el salto hacia tu verdadera vocación por apego a lo conocido.",
      spirit: "Perdonarte de corazón para cerrar el karma pendiente y elevar tu vibración."
    },
    counsel: "Soltá el peso de la culpa pasada y atrevete a responder al llamado de tu verdadera vida."
  },
  21: {
    yesNo: "Sí (falta cerrar un último detalle)",
    meaning: "El Mundo invertido indica que estás a un solo paso de coronar tu gran obra, pero estás dejando cabos sueltos por prisa, cansancio o miedo a habitar tu propio éxito.",
    lightAndShadow: "En Sombra Activa: Falta de un último paso para cerrar un ciclo, demora menor o búsqueda de cierre.",
    domains: {
      love: "Necesidad de dar un cierre consciente a etapas previas para vivir el amor en plenitud.",
      work: "Proyecto casi terminado que requiere pulir los últimos detalles antes de celebrar.",
      spirit: "Integrar todas las lecciones del viaje sin saltearte el último escalón."
    },
    counsel: "No te detengas a un metro de la cima: completá ese último detalle y coroná tu obra."
  }
};
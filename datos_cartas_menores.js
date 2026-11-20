// ============================================================================
// ARCHIVO: datos_cartas_menores.js
// Base de Datos Unificada: Los 56 Arcanos Menores (Luz, Sombra, Nodos y SEO)
// ============================================================================

const SUITS_META = {
  wands: {
    id: 'wands',
    name: 'Bastos',
    element: 'Fuego',
    symbol: '🜂',
    astro: 'Aries • Leo • Sagitario',
    domainDesc: 'Voluntad creadora, pasión, coraje, acción e inspiración espiritual.',
    palette: { primary: '#fb923c', secondary: '#ef4444', accent: '#fde047', glow: 'rgba(249, 115, 22, 0.58)' }
  },
  cups: {
    id: 'cups',
    name: 'Copas',
    element: 'Agua',
    symbol: '🜄',
    astro: 'Cáncer • Escorpio • Piscis',
    domainDesc: 'Amor, intuición profunda, vínculos, sueños y memoria emocional.',
    palette: { primary: '#38bdf8', secondary: '#2dd4bf', accent: '#f472b6', glow: 'rgba(56, 189, 248, 0.58)' }
  },
  swords: {
    id: 'swords',
    name: 'Espadas',
    element: 'Aire',
    symbol: '🜁',
    astro: 'Géminis • Libra • Acuario',
    domainDesc: 'Verdad incisiva, mente lógica, decisiones éticas, pruebas y claridad.',
    palette: { primary: '#e2e8f0', secondary: '#f43f5e', accent: '#a855f7', glow: 'rgba(244, 63, 94, 0.55)' }
  },
  pentacles: {
    id: 'pentacles',
    name: 'Oros',
    element: 'Tierra',
    symbol: '🜃',
    astro: 'Tauro • Virgo • Capricornio',
    domainDesc: 'Materia consagrada, cuerpo, riqueza, cosecha, oficio y estabilidad.',
    palette: { primary: '#fbbf24', secondary: '#10b981', accent: '#a855f7', glow: 'rgba(16, 185, 129, 0.56)' }
  }
};

const RAW_CARDS_SPEC = {
  // ================= PALO DE BASTOS (14 CARTAS) =================
  wands: [
    {
      rank: 1, numeral: 'AS', name: 'As de Bastos', subtitle: 'La Chispa Primordial del Espíritu', yesNo: 'Sí fulminante',
      meaning: 'El As de Bastos es la antorcha que emerge de la nube astral: anuncia un chispazo de creatividad pura, pasión vital, inicio de una empresa audaz y coraje indomable.',
      shadow: 'Falta de chispa inicial, demoras por inseguridad o entusiasmo que se apaga antes de concretar.',
      counsel: 'Tomá la vara ardiente hoy mismo: el fuego de tu inspiración necesita acción inmediata para no volverse humo.',
      domains: {
        love: 'En el amor, el As de Bastos anuncia un flechazo magnético, química sexual volcánica y un nuevo comienzo apasionado. En pareja reaviva la chispa física y rompe la rutina; en soltería augura una conquista fulminante.',
        work: 'En el trabajo y dinero, marca el nacimiento de un emprendimiento audaz, ascenso o proyecto creativo rentable. Es señal de tomar la iniciativa hoy mismo para capitalizar una oportunidad laboral única.',
        spirit: 'Regido por Kether en el elemento Fuego, representa el descenso de la chispa divina y el despertar del Kundalini que fecunda la voluntad del espíritu con propósito.'
      },
      nodes: [
        { x: 50, y: 24, title: 'La Corona de Llamas Vivas', secret: 'El descenso del fuego creador fecundando la voluntad humana con un propósito nuevo.' },
        { x: 35, y: 54, title: 'La Mano Astral del Impulso', secret: 'El don divino que emerge desde el éter ofreciendo una oportunidad irrepetible.' },
        { x: 64, y: 74, title: 'Brotes de Oro Solar', secret: 'La promesa de que esta chispa espiritual dará frutos concretos y duraderos.' }
      ]
    },
    {
      rank: 2, numeral: 'II', name: 'Dos de Bastos', subtitle: 'El Señor del Horizonte y el Orbe', yesNo: 'Sí (con planificación)',
      meaning: 'Desde las almenas de su fortaleza, el espíritu sostiene el mundo entre las manos: representa visión futura, ambición estratégica y la elección entre quedarse en lo seguro o conquistar nuevos territorios.',
      shadow: 'Miedo a salir de la zona conocida, planificación excesiva sin dar el primer paso.',
      counsel: 'Ya te queda chico el patio conocido: trazá tu ruta en el mapa y preparate para cruzar el mar.',
      domains: {
        love: 'En el amor, plantea una decisión clave sobre el futuro del vínculo: salir de la zona de confort, planificar una mudanza juntos o abrirse a conocer personas fuera de tu círculo o país habitual.',
        work: 'En el trabajo y finanzas, augura expansión comercial, sociedades estratégicas y planificación a largo plazo. Excelente momento para exportar, estudiar mercados digitales o dirigir desde un rol ejecutivo.',
        spirit: 'Asociado a Chokmah y Marte en Aries, simboliza al arquitecto cósmico que contempla el orbe del potencial antes de proyectar su voluntad creadora sobre la materia.'
      },
      nodes: [
        { x: 50, y: 26, title: 'El Orbe del Mundo en Llamas', secret: 'El potencial global que ya está en tus manos esperando una directriz valiente.' },
        { x: 26, y: 52, title: 'La Vara Fija en la Almena', secret: 'Los logros ya consolidados que te sirven de base firme para proyectarte.' },
        { x: 74, y: 52, title: 'El Bastón del Viajero', secret: 'La inquietud sagrada que impulsa a explorar tierras aún no conquistadas.' }
      ]
    },
    {
      rank: 3, numeral: 'III', name: 'Tres de Bastos', subtitle: 'Las Naves Doradas del Porvenir', yesNo: 'Sí (expansión en marcha)',
      meaning: 'Tus barcos ya zarparon y navegan bajo un cielo de oro: simboliza expansión comercial, comercio lejano, alianzas prósperas y los primeros frutos visibles de tu audacia.',
      shadow: 'Retrasos en envíos o proyectos, horizontes nublados por falta de previsión.',
      counsel: 'Mantené la mirada alta en el acantilado: lo que enviaste al mundo con fe ya navega de regreso multiplicado.',
      domains: {
        love: 'En el amor, indica una relación con horizonte sólido y crecimiento mutuo. Para solteros, favorece romances a distancia, amores de viaje o vínculos con gran afinidad de proyectos de vida.',
        work: 'En el trabajo y dinero, confirma que tus esfuerzos previos empiezan a dar frutos visibles. Augura éxito en comercio exterior, lanzamientos web, importaciones y alianzas que multiplican tus ingresos.',
        spirit: 'Vinculado a Binah y al Sol en Aries, encarna la visión profética desde el acantilado astral: la certeza de que la energía enviada al universo regresa multiplicada.'
      },
      nodes: [
        { x: 50, y: 24, title: 'El Sol de Ultramar', secret: 'La conciencia expandida que ilumina mercados, viajes y alianzas distantes.' },
        { x: 50, y: 52, title: 'Las Velas de Oro Astral', secret: 'Tus esfuerzos previos impulsados ahora por el viento favorable del destino.' },
        { x: 24, y: 72, title: 'El Risco de las Tres Varas', secret: 'La síntesis perfecta entre idea, acción y resultado sosteniendo tu posición.' }
      ]
    },
    {
      rank: 4, numeral: 'IV', name: 'Cuatro de Bastos', subtitle: 'El Pórtico de la Fiesta Sagrada', yesNo: 'Sí celebratorio',
      meaning: 'Cuatro varas floridas alzan un templo de alegría y paz: augura celebración, hogar feliz, cosecha compartida, bodas o un hito conquistado que merece gratitud.',
      shadow: 'Transiciones en el hogar, festejos postergados o falta de reconocimiento al propio logro.',
      counsel: 'Honrá lo que ya construiste: detenerse a celebrar junto a los tuyos también es parte sagrada de la obra.',
      domains: {
        love: 'En el amor, es una de las cartas más felices del tarot: anuncia convivencia, bodas, compromisos formales, armonía familiar y una etapa de paz, festejo y estabilidad afectiva bajo un mismo techo.',
        work: 'En el trabajo y dinero, señala el cierre exitoso de una etapa productiva, eventos corporativos favorables, compra o remodelación de inmuebles y excelente clima laboral en equipo.',
        spirit: 'Regido por Chesed y Venus en Aries, consagra el templo de las cuatro columnas ígneas donde el espíritu celebra la gratitud y la encarnación dichosa en la tierra.'
      },
      nodes: [
        { x: 50, y: 24, title: 'La Guirnalda de Flores de Fuego', secret: 'El puente festivo que bendice la unión, la convivencia y la alegría compartida.' },
        { x: 30, y: 54, title: 'Los Cuatro Pilares Ígneos', secret: 'La estabilidad ardiente que transforma un espacio físico en un verdadero santuario.' },
        { x: 50, y: 76, title: 'La Ciudadela del Fondo', secret: 'La comunidad y la pertenencia sólida que respaldan tu prosperidad.' }
      ]
    },
    {
      rank: 5, numeral: 'V', name: 'Cinco de Bastos', subtitle: 'El Torneo de las Cinco Chispas', yesNo: 'Incierto (requiere competir)',
      meaning: 'Cinco varas se cruzan en el aire encendiendo chispas: señala competencia estimulante, debate de ideas, entrenamiento intenso o roces de egos donde debés destacar con nobleza.',
      shadow: 'Conflictos estériles, dispersión de energía en peleas innecesarias o sabotaje.',
      counsel: 'No tomes este cruce como una guerra, sino como la fragua que afila tu destreza y templa tu carácter.',
      domains: {
        love: 'En el amor, refleja roces de carácter, competencia de egos o tensión sexual que requiere diálogo sincero. Si estás soltero, señala varios pretendientes compitiendo o dinámicas de conquista desafiantes.',
        work: 'En el trabajo y finanzas, indica mercados competitivos, debates intensos de ideas, licitaciones o pruebas de liderazgo. No rehúyas el desafío: tu talento se destacará si mantienes la ética deportiva.',
        spirit: 'Asociado a Geburah y Saturno en Leo, representa el fuego de la fricción alquímica que quema la pereza del ego y templa el acero de la voluntad.'
      },
      nodes: [
        { x: 50, y: 46, title: 'El Nudo de Chispas Central', secret: 'La fricción creativa de donde surge la solución más fuerte cuando se ordena el caos.' },
        { x: 26, y: 30, title: 'Las Varas en Diagonal', secret: 'Las distintas voluntades y opiniones que buscan imponerse al mismo tiempo.' },
        { x: 72, y: 74, title: 'El Suelo de Arena Solar', secret: 'El terreno de prueba donde el mérito real se demuestra con hechos.' }
      ]
    },
    {
      rank: 6, numeral: 'VI', name: 'Seis de Bastos', subtitle: 'La Corona del Laurel Victorioso', yesNo: 'Sí triunfal',
      meaning: 'La vara central se eleva coronada de laurel sobre las demás: anuncia victoria pública, ascenso, aplauso merecido, liderazgo inspirador y buena fama.',
      shadow: 'Triunfo demorado, vanidad excesiva tras ganar o temor a exponerse al público.',
      counsel: 'Recibí el laurel con la frente alta y el corazón noble: tu victoria hoy inspira a otros a creer.',
      domains: {
        love: 'En el amor, trae orgullo compartido en la pareja, superación triunfal de una crisis y admiración mutua. En soltería, tu magnetismo personal atrae miradas y conquistas de alto impacto.',
        work: 'En el trabajo y dinero, augura un ascenso merecido, premios, viralidad positiva, aprobación de exámenes o liderazgo reconocido públicamente que mejora tu posición económica.',
        spirit: 'Vinculado a Tiphereth y Júpiter en Leo, manifiesta la corona de laurel solar: el instante en que la voluntad personal se alinea con la nobleza del corazón.'
      },
      nodes: [
        { x: 50, y: 22, title: 'La Corona de Laurel Solar', secret: 'El reconocimiento legítimo del universo cuando tu esfuerzo alcanza la excelencia.' },
        { x: 50, y: 52, title: 'El Cetro del Campeón', secret: 'El eje vertical del liderazgo que guía con el ejemplo y no por imposición.' },
        { x: 28, y: 72, title: 'El Séquito de Cinco Fuegos', secret: 'El respaldo de tus pares y aliados celebrando el triunfo colectivo.' }
      ]
    },
    {
      rank: 7, numeral: 'VII', name: 'Siete de Bastos', subtitle: 'El Bastión de la Llama Soberana', yesNo: 'Sí (si defendés tu puesto)',
      meaning: 'Desde la cumbre rocosa, una vara soberana contiene el embate de seis fuegos inferiores: simboliza coraje defensivo, convicción inquebrantable y ventaja estratégica ante la presión.',
      shadow: 'Sentirse abrumado por las críticas, ceder terreno por agotamiento o actitud defensiva crónica.',
      counsel: 'Tenés la altura moral y estratégica: no bajes de tu cumbre ni negocies tu verdad ante la presión ajena.',
      domains: {
        love: 'En el amor, pide defender tu relación frente a chismes, opiniones familiares o interferencias externas. También indica sostener tus estándares afectivos sin ceder a presiones.',
        work: 'En el trabajo y finanzas, exige defender tu puesto, tus tarifas o tu propiedad intelectual frente a competidores. Tienes la ventaja estratégica para ganar cualquier negociación difícil.',
        spirit: 'Regido por Netzach y Marte en Leo, despierta al guerrero espiritual que sostiene su verdad en la cumbre de obsidiana sin corromperse ante la multitud.'
      },
      nodes: [
        { x: 50, y: 24, title: 'La Vara del Cenit', secret: 'La convicción inquebrantable de quien defiende su visión desde una posición elevada.' },
        { x: 30, y: 58, title: 'La Empalizada de Seis Fuegos', secret: 'Las pruebas y competencias externas que ponen a prueba el temple de tu voluntad.' },
        { x: 68, y: 76, title: 'El Peñasco de Obsidiana', secret: 'El terreno ganado con esfuerzo propio donde nadie puede derribarte.' }
      ]
    },
    {
      rank: 8, numeral: 'VIII', name: 'Ocho de Bastos', subtitle: 'La Lluvia de Meteoros Dorados', yesNo: 'Sí veloz e inminente',
      meaning: 'Ocho varas encendidas surcan el firmamento sin obstáculos: augura aceleración repentina, noticias urgentes, flechazos amorosos, viajes veloces y resolución inmediata.',
      shadow: 'Impaciencia, mensajes malinterpretados por prisa o demoras de último minuto.',
      counsel: 'Todo se acelera a tu favor: soltá la duda y apuntá tus flechas antes de que pase la ráfaga.',
      domains: {
        love: 'En el amor, es el clásico flechazo a primera vista, mensajes inesperados que aceleran el corazón, declaraciones repentinas y definiciones rápidas que eliminan cualquier duda romántica.',
        work: 'En el trabajo y dinero, anuncia transferencias rápidas, cierres de ventas exprés, viajes de negocios urgentes y llegada de noticias laborales que destraban todo en cuestión de días.',
        spirit: 'Asociado a Hod y Mercurio en Sagitario, simboliza los meteoros del pensamiento iluminado viajando por el éter sin fricción ni resistencia material.'
      },
      nodes: [
        { x: 34, y: 26, title: 'Estelas de Mercurio Ígneo', secret: 'La velocidad del pensamiento y la comunicación viajando sin fricción por el éter.' },
        { x: 62, y: 50, title: 'Las Ocho Puntas de Fuego', secret: 'Proyectos que convergen al unísono hacia una meta clara e inminente.' },
        { x: 50, y: 78, title: 'El Valle Despejado', secret: 'La ausencia total de barreras terrenales: el camino está libre para aterrizar.' }
      ]
    },
    {
      rank: 9, numeral: 'IX', name: 'Nueve de Bastos', subtitle: 'El Centinela del Último Umbral', yesNo: 'Sí (con perseverancia final)',
      meaning: 'Con cicatrices de batallas previas pero aún de pie junto a ocho bastos firmes, el guardián sostiene su antorcha: indica resiliencia heroica, prudencia y estar a un paso de la victoria.',
      shadow: 'Agotamiento extremo, desconfianza paranoica o rendirse justo en el último kilómetro.',
      counsel: 'Ya cruzaste lo más duro del fuego; respirá hondo y sostené la guardia un instante más, que el alba ya asoma.',
      domains: {
        love: 'En el amor, muestra un corazón que ha sufrido en el pasado y hoy levanta muros por precaución, pero que posee la lealtad y la resiliencia necesarias para sostener un vínculo verdadero.',
        work: 'En el trabajo y dinero, indica la recta final de un proyecto agotador. No abandones ahora: estás a un solo paso de cobrar y coronar meses de esfuerzo sostenido.',
        spirit: 'Vinculado a Yesod y la Luna en Sagitario, encarna al guardián iniciático del umbral que transforma cada cicatriz del alma en sabiduría luminosa.'
      },
      nodes: [
        { x: 34, y: 28, title: 'La Diadema de Cicatriz y Luz', secret: 'La sabiduría ganada en combate: cada herida sanada se volvió armadura.' },
        { x: 34, y: 56, title: 'El Noveno Basto de Apoyo', secret: 'La reserva secreta de fuerza espiritual que aparece cuando el cuerpo cree no dar más.' },
        { x: 70, y: 52, title: 'La Muralla de Ocho Varas', secret: 'Los límites saludables construidos gracias a tu experiencia pasada.' }
      ]
    },
    {
      rank: 10, numeral: 'X', name: 'Diez de Bastos', subtitle: 'El Haz de Fuego y la Carga', yesNo: 'Sí (pero exige delegar)',
      meaning: 'Diez varas atadas en un haz ardiente pesan sobre los hombros rumbo a la ciudad: habla de gran responsabilidad, éxito que conlleva sobrecarga laboral y la urgencia de soltar lo que no te corresponde.',
      shadow: 'Colapso por exceso de obligaciones, cargar culpas ajenas o incapacidad de pedir ayuda.',
      counsel: 'Que tu propio éxito no se convierta en tu yugo: conservá las varas esenciales y soltá el peso ajeno.',
      domains: {
        love: 'En el amor, advierte que estás cargando con todo el peso emocional o doméstico de la pareja en soledad. Pide abrir el diálogo para repartir responsabilidades y recuperar la frescura.',
        work: 'En el trabajo y finanzas, señala exceso de horas extras, estrés laboral por no saber delegar y agendas saturadas. El éxito económico está asegurado, pero debes priorizar tu salud.',
        spirit: 'Regido por Malkuth y Saturno en Sagitario, enseña la lección kármica de soltar las cargas ajenas para que el fuego del espíritu no se vuelva ceniza pesada.'
      },
      nodes: [
        { x: 50, y: 26, title: 'La Corona de Diez Llamas', secret: 'La culminación intensa del ciclo del fuego antes de transformarse en semilla.' },
        { x: 50, y: 54, title: 'El Nudo de Bronce Pesado', secret: 'El hábito de querer controlarlo y sostenerlo todo en soledad.' },
        { x: 74, y: 78, title: 'La Ciudad del Descanso', secret: 'La meta cercana donde finalmente podrás depositar la carga y recoger el fruto.' }
      ]
    },
    {
      rank: 11, isCourt: true, numeral: 'SOTA', name: 'Sota de Bastos', subtitle: 'El Heraldo de la Salamandra', yesNo: 'Sí entusiasta',
      meaning: 'Joven espíritu explorador que contempla maravillado el brote de fuego en su vara: trae noticias estimulantes, ganas de aprender, viajes de aventura y pasión sin miedo.',
      shadow: 'Inconstancia juvenil, promesas impulsivas o berrinches por impaciencia.',
      counsel: 'Encendé tu curiosidad de aprendiz: una noticia o idea audaz está tocando hoy a tu puerta.',
      domains: {
        love: 'En el amor, la Sota de Bastos trae mensajes coquetos, invitaciones espontáneas, aventuras apasionadas y una bocanada de aire fresco que despierta la ilusión romántica.',
        work: 'En el trabajo y dinero, anuncia el inicio de una capacitación, un proyecto freelance creativo, una oferta laboral estimulante o una idea innovadora con gran potencial de crecimiento.',
        spirit: 'Representa el elemento Tierra dentro del Fuego: el espíritu de la Salamandra alquímica que observa maravillado cómo la chispa divina germina en la materia.'
      },
      nodes: [
        { x: 50, y: 22, title: 'Pluma de Fuego Solar', secret: 'La mente despierta, entusiasta y libre de cinismo.' },
        { x: 72, y: 46, title: 'La Vara Germinada', secret: 'Un talento incipiente o mensaje inspirador que pide ser cultivado.' },
        { x: 32, y: 76, title: 'Salamandra de Oro', secret: 'El espíritu elemental del fuego danzando cómodo en medio del cambio.' }
      ]
    },
    {
      rank: 12, isCourt: true, numeral: 'CABALLERO', name: 'Caballero de Bastos', subtitle: 'El Jinete del Relámpago Solar', yesNo: 'Sí inmediato y audaz',
      meaning: 'Armadura de bronce y corcel de fuego lanzados al galope sobre el desierto: simboliza conquista veloz, mudanzas, carisma apasionado y valentía que no conoce el freno.',
      shadow: 'Temeridad imprudente, prisa que quema etapas o pasiones intensas pero fugaces.',
      counsel: 'Galopá con toda tu pasión hacia la meta, pero mantené las riendas firmes para no pasar de largo.',
      domains: {
        love: 'En el amor, el Caballero de Bastos augura un romance vertiginoso, pasional y magnético. En pareja invita a viajar o romper el molde; en soltería anuncia a alguien audaz que entra en tu vida como un huracán.',
        work: 'En el trabajo y finanzas, impulsa cambios de empleo audaces, mudanzas laborales, lanzamientos comerciales agresivos y toma de riesgos calculados que aceleran tu carrera.',
        spirit: 'Encarna el Fuego del Fuego (la llama pura del relámpago solar): el coraje iniciático que salta sobre el abismo sin mirar atrás.'
      },
      nodes: [
        { x: 46, y: 22, title: 'Yelmo de Penacho Ígneo', secret: 'El pensamiento enfocado únicamente en la conquista y el movimiento.' },
        { x: 76, y: 44, title: 'La Lanza de Brasa Viva', secret: 'La iniciativa fulminante que abre brecha donde otros dudan.' },
        { x: 38, y: 72, title: 'Corcel en Cabriola Astral', secret: 'La energía vital desbordante que salta por encima de cualquier obstáculo.' }
      ]
    },
    {
      rank: 13, isCourt: true, numeral: 'REINA', name: 'Reina de Bastos', subtitle: 'Soberana del Trono de Girasoles', yesNo: 'Sí magnético',
      meaning: 'Coronada de oro vivo, con una vara florecida, un girasol y el felino negro de la intuición a sus pies: encarna magnetismo arrollador, calidez generosa, independencia y hechizo creador.',
      shadow: 'Orgullo herido, celos dramáticos o dominación cuando se siente opacada.',
      counsel: 'No achiques tu brillo para incomodar menos: tu fuego auténtico es el imán que atrae toda bendición.',
      domains: {
        love: 'En el amor, la Reina de Bastos irradia sensualidad magnética, seguridad afectiva, lealtad ardiente y alegría compartida. Atraes el amor desde la autoestima alta y la autenticidad absoluta.',
        work: 'En el trabajo y dinero, augura éxito rotundo en liderazgo femenino, marca personal, dirección de equipos, arte o emprendimientos independientes donde tu carisma abre todas las puertas.',
        spirit: 'Simboliza el Agua dentro del Fuego: el dominio consciente sobre el instinto (el felino de ébano) transmutado en luz solar creadora y generosa.'
      },
      nodes: [
        { x: 50, y: 20, title: 'Diadema de Girasol y Rubí', secret: 'La alegría solar consciente que irradia confianza y vitalidad inagotable.' },
        { x: 74, y: 48, title: 'Cetro de Fuego Florecido', secret: 'La autoridad creativa que inspira lealtad mediante el entusiasmo.' },
        { x: 42, y: 78, title: 'El Guardián Felino de Ébano', secret: 'El dominio lúcido sobre la magia instintiva y la intuición nocturna.' }
      ]
    },
    {
      rank: 14, isCourt: true, numeral: 'REY', name: 'Rey de Bastos', subtitle: 'Emperador del León y la Llama', yesNo: 'Sí soberano',
      meaning: 'Monarca visionario en su trono tallado con leones solares empuñando el gran cetro ígneo: representa liderazgo magistral, emprendimiento en gran escala, honor y audacia madura.',
      shadow: 'Intolerancia a la lentitud ajena, arrogancia tiránica o impulsividad autoritaria.',
      counsel: 'Liderá desde la grandeza de tu visión: un verdadero Rey de Fuego enciende el coraje en quienes lo rodean.',
      domains: {
        love: 'En el amor, el Rey de Bastos representa una pareja protectora, apasionada, leal y de carácter fuerte, o bien la madurez para liderar tu vida afectiva con determinación y generosidad.',
        work: 'En el trabajo y finanzas, es el arquetipo del CEO, fundador o líder visionario: anuncia grandes ganancias, expansión de negocios, ascensos a puestos de mando y autoridad indiscutida.',
        spirit: 'Encarna el Aire del Fuego (la corona solar de Leo): la maestría espiritual que convierte la visión ardiente en un imperio ético y luminoso.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Corona de Llamas de Leo', secret: 'La soberanía mental del estratega que ve el futuro antes que el resto.' },
        { x: 74, y: 50, title: 'El Gran Bastón Maestro', secret: 'El poder ejecutivo para transformar una visión audaz en un imperio real.' },
        { x: 28, y: 74, title: 'Emblema del León y la Salamandra', secret: 'La fusión consumada entre nobleza de corazón y dominio del fuego.' }
      ]
    }
  ],

  // ================= PALO DE COPAS (14 CARTAS) =================
  cups: [
    {
      rank: 1, numeral: 'AS', name: 'As de Copas', subtitle: 'El Manantial del Grial Astral', yesNo: 'Sí bendecido',
      meaning: 'El Cáliz sagrado rebosa cinco torrentes de rocío cristalino sobre un estanque de lotos: anuncia el nacimiento de un gran amor, apertura espiritual, sanación emocional y dicha pura.',
      shadow: 'Corazón bloqueado por viejas penas, amor no expresado o vacío emocional pasajero.',
      counsel: 'Vaciá tu copa de viejos rencores hoy mismo: el universo quiere colmarte de un amor y una paz nuevos.',
      domains: {
        love: 'En el amor, el As de Copas es el máximo presagio de un nuevo romance profundo, enamoramiento puro, reconciliación sanadora, fertilidad o despertar de un vínculo de almas.',
        work: 'En el trabajo y dinero, augura inspiración artística, vocación encontrada, ambientes laborales armónicos y proyectos ligados a la salud, el arte o la ayuda humana que fluyen con abundancia.',
        spirit: 'Regido por Kether en el Agua, es el Santo Grial del tarot: el cáliz del corazón purificado recibiendo el rocío directo de la gracia cósmica.'
      },
      nodes: [
        { x: 50, y: 22, title: 'La Hostia y la Paloma de Luz', secret: 'El descenso de la gracia divina fecundando las aguas profundas de la intuición.' },
        { x: 50, y: 50, title: 'El Cáliz de Zafiro y Oro', secret: 'El corazón receptivo y abierto, listo para albergar un nuevo amor o vocación.' },
        { x: 68, y: 76, title: 'Los Cinco Chorros de Rocío', secret: 'Los cinco sentidos purificados fluyendo hacia el estanque de la paz interior.' }
      ]
    },
    {
      rank: 2, numeral: 'II', name: 'Dos de Copas', subtitle: 'El Pacto del Caduceo Alado', yesNo: 'Sí amoroso y recíproco',
      meaning: 'Dos cálices se unen en brindis sagrado bajo el Caduceo de Hermes y el León Alado: es la carta de las almas afines, el enamoramiento mutuo, la reconciliación y las sociedades armónicas.',
      shadow: 'Desencuentros afectivos, falta de reciprocidad o malentendidos que enfrían la unión.',
      counsel: 'Abrí las manos al encuentro sincero: cuando dos almas se miran sin máscaras, nace un tercer poder sagrado.',
      domains: {
        love: 'En el amor, el Dos de Copas anuncia noviazgo, compromiso, atracción recíproca, bodas y encuentro de almas gemelas donde ambos entregan y reciben en perfecta igualdad.',
        work: 'En el trabajo y finanzas, es la mejor carta para firmar sociedades comerciales, contratos justos, alianzas estratégicas y acuerdos con clientes basados en la confianza mutua.',
        spirit: 'Asociado a Chokmah y Venus en Cáncer, materializa las bodas alquímicas (Coniunctio) bajo el Caduceo de Hermes que une los opuestos en armonía.'
      },
      nodes: [
        { x: 50, y: 22, title: 'El León Alado de Fuego', secret: 'La pasión ennoblecedora que eleva el deseo terrenal hacia el espíritu.' },
        { x: 50, y: 46, title: 'El Caduceo de Dos Serpientes', secret: 'La danza armónica de dos polaridades que sanan y crecen al entrelazarse.' },
        { x: 30, y: 66, title: 'Los Cálices del Juramento', secret: 'La igualdad y el respeto mutuo donde cada copa nutre a la otra sin vaciarse.' }
      ]
    },
    {
      rank: 3, numeral: 'III', name: 'Tres de Copas', subtitle: 'La Danza de las Tres Gracias', yesNo: 'Sí festivo',
      meaning: 'Tres cálices de oro se alzan al cielo entre guirnaldas de frutos y flores: celebra la amistad leal, los festejos gozosos, la hermandad creativa, los nacimientos y la gratitud compartida.',
      shadow: 'Excesos en fiestas, chismes en el grupo social o sentirse aislado de la tribu.',
      counsel: 'Rodeate de quienes celebran tus victorias como propias: la alegría compartida triplica su poder sanador.',
      domains: {
        love: 'En el amor, augura festejos en pareja, bodas, nacimientos o un romance que nace a través de tu círculo de amistades y eventos sociales llenos de alegría.',
        work: 'En el trabajo y dinero, celebra el logro de metas grupales, bonos por rendimiento, eventos de networking exitosos y proyectos creativos donde la colaboración multiplica las ganancias.',
        spirit: 'Vinculado a Binah y Mercurio en Cáncer, invoca la danza de las Tres Gracias: la elevación vibratoria que ocurre cuando el alma celebra en hermandad.'
      },
      nodes: [
        { x: 50, y: 26, title: 'La Corona del Brindis Triple', secret: 'La comunión emocional que eleva la vibración de todos los presentes.' },
        { x: 28, y: 52, title: 'Cálices de Hermandad', secret: 'El apoyo afectivo incondicional de amistades y alianzas verdaderas.' },
        { x: 50, y: 76, title: 'Cosecha de Lotos y Uvas', secret: 'La abundancia sensible que brota cuando se trabaja y festeja en comunidad.' }
      ]
    },
    {
      rank: 4, numeral: 'IV', name: 'Cuatro de Copas', subtitle: 'El Cáliz Oculto en la Nube', yesNo: 'No por ahora (despertá la mirada)',
      meaning: 'Tres copas reposan en el suelo mientras una cuarta copa luminosa se ofrece desde el éter: habla de apatía pasajera, hastío, introspección o no ver la bendición presente por mirar lo que falta.',
      shadow: 'Despertar del letargo, aceptar por fin una nueva propuesta y salir del encierro.',
      counsel: 'Levantá la vista del suelo: el regalo que pedías ya está flotando frente a vos, pero tu nostalgia te impide verlo.',
      domains: {
        love: 'En el amor, señala aburrimiento en la rutina de pareja o cerrarse a nuevas citas por seguir pensando en el pasado, ignorando a alguien sincero que hoy intenta acercarse.',
        work: 'En el trabajo y finanzas, refleja desmotivación laboral o estancamiento. Una nueva oferta o fuente de ingresos está frente a ti, pero debes sacudir la apatía para verla.',
        spirit: 'Regido por Chesed y la Luna en Cáncer, representa la noche meditativa bajo el árbol sagrado donde el alma debe vaciarse de hastío para ver el don astral.'
      },
      nodes: [
        { x: 70, y: 34, title: 'La Cuarta Copa Astral', secret: 'La oportunidad inesperada que el cosmos te acerca mientras mirás hacia otro lado.' },
        { x: 32, y: 44, title: 'El Árbol del Retiro', secret: 'El refugio mental necesario para meditar, pero peligroso si se vuelve apatía.' },
        { x: 38, y: 76, title: 'Las Tres Copas Conocidas', secret: 'Las experiencias pasadas que ya no te sacian y piden renovación.' }
      ]
    },
    {
      rank: 5, numeral: 'V', name: 'Cinco de Copas', subtitle: 'El Puente sobre el Vino Derramado', yesNo: 'No (procesar el duelo primero)',
      meaning: 'Tres cálices yacen volcados derramando su néctar mientras dos copas permanecen erguidas e intactas junto al puente: representa duelo legítimo, desilusión, pero también la esperanza de lo que sigue en pie.',
      shadow: 'Quedar atrapado en el remordimiento crónico, o bien comenzar a sanar y cruzar el puente.',
      counsel: 'Honrá tu lágrima por lo que se derramó, pero girá hoy tu rostro hacia las dos copas llenas que te esperan.',
      domains: {
        love: 'En el amor, habla de procesar el duelo por una ruptura o desilusión afectiva, recordándote que aún tienes amor propio y vínculos fieles (las dos copas erguidas) para volver a amar.',
        work: 'En el trabajo y dinero, indica una pérdida parcial, un gasto imprevisto o un negocio que no salió como esperabas, pero confirma que tu capital principal y tu talento siguen intactos.',
        spirit: 'Asociado a Geburah y Marte en Escorpio, enseña la alquimia de las lágrimas: cruzar el puente de la aceptación para transmutar la tristeza en sabiduría.'
      },
      nodes: [
        { x: 32, y: 74, title: 'Las Tres Copas Derramadas', secret: 'El dolor inevitable por las expectativas o vínculos que no pudieron ser.' },
        { x: 74, y: 58, title: 'Los Dos Cálices Intactos', secret: 'El amor, los dones y los afectos leales que siguen vivos a tus espaldas.' },
        { x: 50, y: 36, title: 'El Puente sobre el Río Oscuro', secret: 'El paso firme de aceptación que conduce hacia la reconstrucción del alma.' }
      ]
    },
    {
      rank: 6, numeral: 'VI', name: 'Seis de Copas', subtitle: 'El Jardín de los Lirios Estelares', yesNo: 'Sí tierno y sanador',
      meaning: 'Seis cálices antiguos rebosan flores de luz blanca en un patio sagrado: evoca nostalgia dulce, recuerdos de la infancia, inocencia recuperada, perdón sincero o el regreso de un amor del pasado.',
      shadow: 'Vivir aferrado al ayer idealizado, negarse a madurar o estancarse en la melancolía.',
      counsel: 'Rescatá la pureza y la capacidad de asombro de tu niño interior para sanar tu presente con ternura.',
      domains: {
        love: 'En el amor, anuncia el regreso de un ex o amor del pasado, reencuentros kármicos llenos de ternura, o bien una relación actual que sana gracias a la dulzura y el perdón.',
        work: 'En el trabajo y finanzas, favorece recuperar antiguos clientes, retomar una vocación de la infancia, trabajar con familiares o recibir una donación o herencia inesperada.',
        spirit: 'Vinculado a Tiphereth y el Sol en Escorpio, ilumina el jardín secreto de la memoria anímica donde la pureza del niño interior restaura el corazón.'
      },
      nodes: [
        { x: 50, y: 30, title: 'La Flor de Cinco Pétalos de Luz', secret: 'El regalo desinteresado que nace de la bondad pura y sin cálculo.' },
        { x: 28, y: 58, title: 'Los Seis Cálices de la Memoria', secret: 'Las raíces afectivas y los momentos luminosos que nutren tu historia.' },
        { x: 68, y: 76, title: 'El Atrio del Santuario Antiguo', secret: 'El espacio seguro del alma donde el pasado bendice al presente.' }
      ]
    },
    {
      rank: 7, numeral: 'VII', name: 'Siete de Copas', subtitle: 'Los Espejismos del Velo Onírico', yesNo: 'Incierto (filtrar ilusiones)',
      meaning: 'Siete cálices flotan entre nubes púrpuras mostrando joyas, coronas, serpientes y castillos: simboliza imaginación desbordante, múltiples opciones seductoras, sueños místicos o peligro de dispersión.',
      shadow: 'Autoengaño, castillos en el aire, adicción a la fantasía o parálisis por exceso de opciones.',
      counsel: 'No todo lo que brilla en la niebla es oro real: elegí una sola copa y bajala a la tierra con acciones concretas.',
      domains: {
        love: 'En el amor, advierte sobre idealizar en exceso a alguien, amores platónicos, múltiples pretendientes en redes o confusión emocional. Pide ver hechos reales antes de entregar el corazón.',
        work: 'En el trabajo y dinero, muestra muchas ideas creativas pero poca concreción, o propuestas de dinero fácil que son espejismos. Elige un solo objetivo y traza un plan realista.',
        spirit: 'Regido por Netzach y Venus en Escorpio, pone a prueba al iniciado frente a los velos astrales del deseo para separar la intuición pura de la fantasía del ego.'
      },
      nodes: [
        { x: 50, y: 24, title: 'El Cáliz del Velo Luminoso', secret: 'El verdadero tesoro espiritual oculto entre las distracciones del deseo.' },
        { x: 26, y: 48, title: 'Las Copas de Joyas y Dragones', secret: 'Las tentaciones del ego y los miedos proyectados en la pantalla de la mente.' },
        { x: 50, y: 78, title: 'La Sombra del Contemplador', secret: 'La conciencia humana llamada a discernir entre intuición y fantasía.' }
      ]
    },
    {
      rank: 8, numeral: 'VIII', name: 'Ocho de Copas', subtitle: 'El Peregrino bajo el Eclipse', yesNo: 'No (es hora de partir)',
      meaning: 'Ocho copas quedan atrás en orden perfecto mientras el viajero asciende hacia las montañas bajo el eclipse de Sol y Luna: marca el coraje de abandonar lo que ya no llena el alma para buscar una verdad superior.',
      shadow: 'Miedo a soltar una situación cómoda pero vacía, o huir antes de tiempo por temor al compromiso.',
      counsel: 'Se requiere valentía para dejar atrás lo que es "bueno" cuando tu alma sabe que nació para algo sagrado.',
      domains: {
        love: 'En el amor, marca la decisión valiente de alejarse de una relación que ya se volvió fría o vacía, o dejar atrás patrones afectivos que ya no nutren tu evolución emocional.',
        work: 'En el trabajo y finanzas, señala renunciar a un empleo seguro pero estancado para buscar tu verdadera vocación, iniciar un viaje transformador o cambiar de rubro profesional.',
        spirit: 'Asociado a Hod y Saturno en Piscis, retrata el ascenso del peregrino bajo el eclipse espiritual en busca del grial que las copas mundanas no pueden darle.'
      },
      nodes: [
        { x: 50, y: 22, title: 'El Eclipse de Sol y Luna', secret: 'El llamado interior inaplazable que marca el fin de una etapa emocional.' },
        { x: 68, y: 46, title: 'El Sendero de la Montaña', secret: 'La búsqueda espiritual solitaria hacia una octava de mayor sentido.' },
        { x: 38, y: 74, title: 'Las Ocho Copas Alineadas', secret: 'Lo que construiste con éxito pero ya cumplió su ciclo en tu evolución.' }
      ]
    },
    {
      rank: 9, numeral: 'IX', name: 'Nueve de Copas', subtitle: 'El Banquete del Deseo Cumplido', yesNo: 'Sí rotundo y dichoso',
      meaning: 'Nueve cálices de oro brillan dispuestos en un arco triunfal sobre terciopelo azul: es la célebre "carta del deseo cumplido", plenitud emocional, disfrute sensorial, salud y gratitud.',
      shadow: 'Complacencia superficial, excesos hedonistas o deseos del ego que no llenan el corazón.',
      counsel: 'Agradecé de antemano: el deseo que guardás en el centro del pecho cuenta hoy con la bendición del cielo.',
      domains: {
        love: 'En el amor, augura plenitud sensual, romances sumamente placenteros, armonía afectiva y disfrute pleno de tu vida sentimental, tanto en pareja como en una soltería feliz y magnética.',
        work: 'En el trabajo y dinero, es la carta del deseo cumplido: anuncia bonanza económica, cobro de premios o comisiones, éxito en gastronomía o arte y satisfacción total con tus logros.',
        spirit: 'Vinculado a Yesod y Júpiter en Piscis, manifiesta la bendición joviana de la gratitud donde el subconsciente se alinea con la abundancia del cosmos.'
      },
      nodes: [
        { x: 50, y: 28, title: 'El Arco de los Nueve Griales', secret: 'La armonía completa de las emociones alineadas con la abundancia.' },
        { x: 50, y: 56, title: 'El Cáliz Central del Deseo', secret: 'La manifestación tangible de aquello que pediste desde el corazón.' },
        { x: 30, y: 76, title: 'El Manto de Zafiro Real', secret: 'La paz profunda y el bienestar de quien se siente pleno consigo mismo.' }
      ]
    },
    {
      rank: 10, numeral: 'X', name: 'Diez de Copas', subtitle: 'El Arcoíris de la Alianza Eterna', yesNo: 'Sí pleno y familiar',
      meaning: 'Diez cálices resplandecen en un arcoíris celestial sobre el río y el hogar sagrado: representa la felicidad suprema en el amor y la familia, paz duradera, plenitud afectiva y bendición ancestral.',
      shadow: 'Tensiones familiares ocultas tras las apariencias o desconexión con el hogar interior.',
      counsel: 'Tu verdadero tesoro es la paz con quienes amás: cuidá tu refugio afectivo como el jardín más sagrado.',
      domains: {
        love: 'En el amor, es la cumbre de la dicha afectiva: anuncia matrimonio feliz, formación de una familia, convivencia en paz duradera y un amor bendecido que trasciende el tiempo.',
        work: 'En el trabajo y finanzas, augura estabilidad económica familiar, empresas familiares prósperas, compra de la casa propia y un entorno laboral donde reina la lealtad humana.',
        spirit: 'Regido por Malkuth y Marte en Piscis, despliega el arcoíris de las diez sefirot emocionales: la paz suprema del cielo reflejada sobre la tierra.'
      },
      nodes: [
        { x: 50, y: 24, title: 'El Arcoíris de Diez Cálices', secret: 'El pacto de gracia entre el cielo y la tierra derramando armonía perpetua.' },
        { x: 32, y: 66, title: 'El Río de Agua Viva', secret: 'El fluir sereno de las emociones cuando ya no existen muros ni rencores.' },
        { x: 70, y: 72, title: 'El Santuario del Hogar', secret: 'La raíz amorosa y estable donde las generaciones florecen en paz.' }
      ]
    },
    {
      rank: 11, isCourt: true, numeral: 'SOTA', name: 'Sota de Copas', subtitle: 'El Mensajero del Pez Astral', yesNo: 'Sí tierno e intuitivo',
      meaning: 'Desde el cáliz dorado asoma el pez plateado de la psique: anuncia declaraciones de amor, mensajes afectivos, ternura, inspiración poética, sueños reveladores o el nacimiento de una ilusión.',
      shadow: 'Inmadurez emocional, susceptibilidad extrema, caprichos o vivir en una burbuja.',
      counsel: 'Escuchá el susurro poético de tu intuición: hoy un gesto de ternura abre puertas que la fuerza jamás podría.',
      domains: {
        love: 'En el amor, la Sota de Copas anuncia una declaración romántica, un mensaje tierno, disculpas sinceras, un flechazo dulce o incluso la llegada de un nacimiento en la familia.',
        work: 'En el trabajo y dinero, favorece inicios en diseño, música, psicología, terapias holísticas o estética, trayendo propuestas laborales amables y llenas de inspiración.',
        spirit: 'Representa la Tierra del Agua: el pez plateado de la intuición emergiendo desde el cáliz del inconsciente para susurrar verdades poéticas al corazón.'
      },
      nodes: [
        { x: 50, y: 22, title: 'Biretta de Ondas Marinas', secret: 'La mente receptiva, empática y abierta a la imaginación creadora.' },
        { x: 72, y: 46, title: 'El Pez en el Cáliz', secret: 'Un mensaje inesperado que emerge desde el inconsciente o desde un corazón sincero.' },
        { x: 32, y: 76, title: 'Espuma de Loto Azul', secret: 'La sensibilidad artística que embellece todo lo que toca.' }
      ]
    },
    {
      rank: 12, isCourt: true, numeral: 'CABALLERO', name: 'Caballero de Copas', subtitle: 'El Andante del Grial Plateado', yesNo: 'Sí romántico',
      meaning: 'Jinete alado que avanza con gracia serena ofreciendo el cáliz en su mano: encarna el romance caballeresco, las propuestas del corazón, la diplomacia pacífica y la búsqueda de la belleza ideal.',
      shadow: 'Promesas de amor poco realistas, seducción evasiva o melancolía enamorada del propio drama.',
      counsel: 'Avanzá con el corazón en la mano, pero asegurate de que tus pies pisen tierra firme al prometer.',
      domains: {
        love: 'En el amor, el Caballero de Copas es el mensajero del romance por excelencia: anuncia citas inolvidables, propuestas de noviazgo o matrimonio y la llegada de un amante caballeresco y sensible.',
        work: 'En el trabajo y finanzas, trae ofertas laborales que apelan a tu vocación, acuerdos logrados mediante la diplomacia encantadora y éxito en rubros artísticos o humanitarios.',
        spirit: 'Encarna el Fuego del Agua (las alas de Mercurio sobre el río astral): la pasión idealista que consagra su vida a la belleza y al amor sagrado.'
      },
      nodes: [
        { x: 46, y: 20, title: 'Yelmo con Alas de Mercurio', secret: 'La imaginación elevada que une el sentimiento con la palabra poética.' },
        { x: 76, y: 46, title: 'El Cáliz de la Oferta', secret: 'Una invitación amorosa, artística o de paz entregada con nobleza.' },
        { x: 38, y: 74, title: 'El Corcel Blanco del Río', secret: 'La fuerza emocional purificada que avanza con elegancia y sin violencia.' }
      ]
    },
    {
      rank: 13, isCourt: true, numeral: 'REINA', name: 'Reina de Copas', subtitle: 'Oráculo del Trono de Nácar', yesNo: 'Sí empático y psíquico',
      meaning: 'En su trono marino contempla un cáliz cerrado de alta orfebrería que solo los puros pueden ver: representa clarividencia, amor compasivo, sabiduría emocional profunda, maternidad del alma y sanación.',
      shadow: 'Absorber dolores ajenos como esponja, dependencia emocional o martirio silencioso.',
      counsel: 'Tu empatía es un don sagrado, pero cuidá los bordes de tu cáliz para sanar sin ahogarte en mares ajenos.',
      domains: {
        love: 'En el amor, la Reina de Copas augura un vínculo de empatía profunda, ternura incondicional, conexión psíquica entre amantes y sanación emocional a través del afecto genuino.',
        work: 'En el trabajo y dinero, señala éxito como terapeuta, artista, guía espiritual, médico o consejero. Tu intuición para leer a las personas te guiará hacia excelentes decisiones financieras.',
        spirit: 'Simboliza el Agua del Agua: el trono de nácar del océano interior donde el alma contempla el cáliz sellado de los misterios divinos.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Corona de Concha y Zafiro', secret: 'La sintonía psíquica directa con las mareas del inconsciente colectivo.' },
        { x: 72, y: 50, title: 'El Cáliz Velado de Ángeles', secret: 'Los misterios sagrados del corazón que solo se revelan en la intimidad.' },
        { x: 32, y: 78, title: 'Guijarros entre la Tierra y el Mar', secret: 'El equilibrio perfecto entre la sensibilidad abisal y la vida cotidiana.' }
      ]
    },
    {
      rank: 14, isCourt: true, numeral: 'REY', name: 'Rey de Copas', subtitle: 'Soberano del Océano en Calma', yesNo: 'Sí sabio y protector',
      meaning: 'Su trono flota firme en medio de las aguas turbulentas mientras sostiene el cetro-cáliz: encarna madurez emocional suprema, templanza en la crisis, consejero compasivo, arte maestro y amor leal.',
      shadow: 'Represión de lo que siente bajo una máscara fría, manipulación sutil o desborde oculto.',
      counsel: 'Goberná tus mareas desde la calma profunda: quien es dueño de su propio océano transmite paz en cualquier tormenta.',
      domains: {
        love: 'En el amor, el Rey de Copas representa un compañero emocionalmente maduro, leal, protector y tierno, o la capacidad de amar con intensidad sin perder tu centro ni tu paz interior.',
        work: 'En el trabajo y finanzas, augura liderazgo compasivo, éxito en negociaciones delicadas, mecenazgo, dirección de instituciones y prosperidad lograda con inteligencia emocional.',
        spirit: 'Encarna el Aire del Agua: el soberano que domina las mareas del inconsciente manteniendo la calma absoluta en el corazón de la tormenta.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Corona de Oro y Agua Marina', secret: 'La inteligencia emocional que comprende el alma humana sin juzgarla.' },
        { x: 30, y: 52, title: 'El Amuleto del Delfín', secret: 'El guía de las profundidades que rescata y orienta en las aguas del espíritu.' },
        { x: 74, y: 50, title: 'El Gran Cáliz Soberano', secret: 'El afecto profundo, protector y constante que sostiene a toda la corte.' }
      ]
    }
  ],

  // ================= PALO DE ESPADAS (14 CARTAS) =================
  swords: [
    {
      rank: 1, numeral: 'AS', name: 'As de Espadas', subtitle: 'La Hoja Coronada de la Verdad', yesNo: 'Sí decisivo y cortante',
      meaning: 'Una espada de plata pura emerge vertical atravesando la corona de oro con olivo y palma: anuncia claridad mental absoluta, triunfo de la verdad, decisión quirúrgica, justicia y poder de la palabra.',
      shadow: 'Palabras hirientes, confusión mental, crueldad intelectual o juicios precipitados.',
      counsel: 'Cortá de un solo tajo la duda que te ata: la verdad desnuda siempre libera y corona a quien la empuña con honor.',
      domains: {
        love: 'En el amor, el As de Espadas trae una conversación honesta y definitiva que corta las dudas, limpia mentiras y establece acuerdos transparentes para empezar de cero con la verdad.',
        work: 'En el trabajo y dinero, augura triunfo legal, firma de contratos brillantes, ideas geniales, aprobación de tesis o decisiones quirúrgicas que destraban tu economía de inmediato.',
        spirit: 'Regido por Kether en el Aire, es la espada flamígera del discernimiento divino que rasga el velo de la ilusión mental para coronar al espíritu con la verdad.'
      },
      nodes: [
        { x: 50, y: 20, title: 'La Corona con Olivo y Palma', secret: 'La victoria suprema de la mente iluminada que conquista la paz mediante la verdad.' },
        { x: 50, y: 52, title: 'El Filo Diamantino Vertical', secret: 'El discernimiento incorruptible que separa al instante lo real de la ilusión.' },
        { x: 30, y: 76, title: 'Cumbres de Aire Puro', secret: 'Las alturas del intelecto donde ninguna niebla emocional puede engañarte.' }
      ]
    },
    {
      rank: 2, numeral: 'II', name: 'Dos de Espadas', subtitle: 'La Tregua bajo la Luna Creciente', yesNo: 'En pausa (elegir tras meditar)',
      meaning: 'Busto vendado que cruza dos espadas en equilibrio perfecto frente a un mar nocturno encrespado: simboliza tregua temporal, bloqueo ante un dilema difícil y la necesidad de apagar el ruido externo para decidir.',
      shadow: 'Negarse a ver una verdad evidente por miedo al conflicto; postergación indefinida.',
      counsel: 'La venda te sirvió para recuperar la calma, pero ya es hora de quitártela y tomar la decisión que postergás.',
      domains: {
        love: 'En el amor, refleja indecisión entre dos personas o negarse a ver un problema en la pareja por temor al conflicto. Pide quitarse la venda y escuchar al corazón.',
        work: 'En el trabajo y finanzas, señala un empate en negociaciones, pausa tensa entre socios o dilema entre dos ofertas laborales que exige analizar los datos sin autoengaños.',
        spirit: 'Asociado a Chokmah y la Luna en Libra, representa la quietud meditativa donde las espadas de la mente dual se cruzan para dar paso a la paz interior.'
      },
      nodes: [
        { x: 50, y: 20, title: 'La Media Luna de Plata', secret: 'La intuición silenciosa que opera cuando la vista exterior se detiene.' },
        { x: 50, y: 46, title: 'Las Dos Hojas en Equilibrio', secret: 'Dos argumentos o caminos opuestos de igual peso racional.' },
        { x: 28, y: 76, title: 'Arrecifes en el Mar Nocturno', secret: 'Las emociones profundas contenidas que esperan una resolución honesta.' }
      ]
    },
    {
      rank: 3, numeral: 'III', name: 'Tres de Espadas', subtitle: 'La Verdad que Corta el Velo', yesNo: 'No (aceptar la verdad para sanar)',
      meaning: 'Tres espadas de plata atraviesan el corazón de rubí facetado bajo nubes de tormenta: representa una verdad dolorosa pero necesaria, desengaño que rompe ilusiones, catarsis liberadora y cirugía del alma.',
      shadow: 'Comenzar a cicatrizar la herida, perdonar o bien negarse a soltar un dolor antiguo.',
      counsel: 'No temas al filo de la verdad: duele un instante al cortar el engaño, pero devuelve la libertad a tu corazón.',
      domains: {
        love: 'En el amor, señala un desengaño, ruptura necesaria, infidelidad descubierta o conversación dolorosa que rompe una ilusión falsa para permitir que tu corazón sane con la verdad.',
        work: 'En el trabajo y dinero, advierte sobre rupturas de sociedades, cancelación de un contrato o críticas duras que, aunque duelen al principio, te liberan de un entorno laboral tóxico.',
        spirit: 'Vinculado a Binah y Saturno en Libra, encarna la cirugía alquímica del alma: el filo que talla el rubí del corazón para volverlo incorruptible.'
      },
      nodes: [
        { x: 50, y: 24, title: 'La Hoja Central del Juicio', secret: 'El discernimiento mental que atraviesa la ilusión romántica para revelar la realidad.' },
        { x: 50, y: 53, title: 'El Corazón de Rubí Facetado', secret: 'El centro emocional que no se destruye con el dolor, sino que se talla como una gema.' },
        { x: 28, y: 74, title: 'Lágrimas de Mercurio', secret: 'La lluvia purificadora que limpia las tormentas acumuladas en la mente.' }
      ]
    },
    {
      rank: 4, numeral: 'IV', name: 'Cuatro de Espadas', subtitle: 'El Santuario del Reposo Lúcido', yesNo: 'No por ahora (descansar primero)',
      meaning: 'Tres espadas cuelgan en quietud vertical mientras la cuarta reposa horizontal bajo el vitral sagrado: exige retiro reparador, silencio mental, convalecencia sanadora y tregua antes de volver a actuar.',
      shadow: 'Agotamiento nervioso por no parar a tiempo, o bien despertar renovado tras el retiro.',
      counsel: 'Envainá la mente por hoy: retirarte al santuario del silencio no es rendirse, es recargar tu filo.',
      domains: {
        love: 'En el amor, aconseja tomarse un tiempo de calma, evitar discusiones en caliente, dar espacio a la pareja o disfrutar de una etapa de soltería reparadora para sanar heridas.',
        work: 'En el trabajo y finanzas, exige vacaciones urgentes, licencia por estrés o pausa estratégica antes de invertir. Tu mente necesita silencio para recuperar su brillantez productiva.',
        spirit: 'Regido por Chesed y Júpiter en Libra, consagra el santuario hermético del reposo (PAX) donde el guerrero mental silencia el ego y recarga su prana.'
      },
      nodes: [
        { x: 28, y: 26, title: 'El Vitral de la Paz (PAX)', secret: 'La bendición espiritual que protege al guerrero mientras descansa.' },
        { x: 64, y: 38, title: 'Las Tres Espadas Suspendidas', secret: 'Los pensamientos y preocupaciones puestos en pausa consciente.' },
        { x: 50, y: 74, title: 'La Cuarta Espada en el Altar', secret: 'La reserva de lucidez que permanece alerta pero en total serenidad.' }
      ]
    },
    {
      rank: 5, numeral: 'V', name: 'Cinco de Espadas', subtitle: 'El Campo del Triunfo Amargo', yesNo: 'No (cuidado con el costo de ganar)',
      meaning: 'Tres espadas recogidas y dos clavadas en la tierra bajo un cielo desgarrado: advierte sobre victorias pírricas donde se gana la discusión pero se pierde el vínculo, batallas de orgullo y desgaste.',
      shadow: 'Soltar el orgullo para reconciliar, o descubrir una deslealtad a tiempo.',
      counsel: 'Preguntate si querés tener razón o tener paz: hay batallas del ego donde la verdadera victoria es retirarse.',
      domains: {
        love: 'En el amor, advierte sobre discusiones donde ambos quieren tener la razón a toda costa, juegos de orgullo, palabras hirientes o relaciones desgastadas por luchas de poder.',
        work: 'En el trabajo y dinero, pide cuidarse de competencia desleal, chismes de oficina o litigios agotadores. Elige bien tus batallas financieras y no gastes recursos por puro orgullo.',
        spirit: 'Asociado a Geburah y Venus en Acuario, muestra el vacío de las victorias del ego cuando la mente olvida la compasión y la unidad del espíritu.'
      },
      nodes: [
        { x: 50, y: 24, title: 'Nubes Rasgadas por el Viento', secret: 'La atmósfera hostil que queda cuando las palabras se usan como armas.' },
        { x: 34, y: 52, title: 'Las Tres Hojas del Vencedor', secret: 'El trofeo frío de quien impuso su lógica sin empatía.' },
        { x: 72, y: 72, title: 'Las Dos Espadas Caídas', secret: 'El desgaste energético y los vínculos lastimados en la contienda.' }
      ]
    },
    {
      rank: 6, numeral: 'VI', name: 'Seis de Espadas', subtitle: 'La Barca hacia la Orilla Serena', yesNo: 'Sí (transición sanadora)',
      meaning: 'Una barca astral lleva seis espadas clavadas en su proa cruzando desde aguas agitadas hacia un horizonte calmo: simboliza viaje sanador, mudanza mental o física, dejar atrás la tormenta y paz gradual.',
      shadow: 'Dificultad para soltar el equipaje mental del pasado durante la mudanza.',
      counsel: 'Subite a la barca sin mirar atrás: llevás la experiencia de lo vivido, pero navegás hacia aguas en calma.',
      domains: {
        love: 'En el amor, anuncia dejar atrás una etapa de tormentas afectivas, reconciliación serena tras una crisis, viaje en pareja o recuperación de la paz emocional tras una separación.',
        work: 'En el trabajo y finanzas, favorece mudanzas laborales, trabajo remoto en el extranjero, migraciones exitosas o transición ordenada hacia un empleo mucho más tranquilo y estable.',
        spirit: 'Vinculado a Tiphereth y Mercurio en Acuario, simboliza la barca astral de la conciencia cruzando las aguas del karma hacia la orilla de la iluminación.'
      },
      nodes: [
        { x: 50, y: 24, title: 'La Orilla de Luz Dorada', secret: 'El nuevo estado de paz mental que te aguarda al otro lado de la transición.' },
        { x: 50, y: 54, title: 'Las Seis Espadas en la Proa', secret: 'Los aprendizajes e ideas que decidís llevar con vos sin que hundan el bote.' },
        { x: 30, y: 76, title: 'De la Tormenta a la Calma', secret: 'El proceso gradual de sanación donde el dolor cede paso a la serenidad.' }
      ]
    },
    {
      rank: 7, numeral: 'VII', name: 'Siete de Espadas', subtitle: 'La Estratagema bajo la Luna', yesNo: 'Depende (actuar con astucia y ética)',
      meaning: 'Cinco espadas son tomadas con sigilo en la noche mientras dos quedan clavadas como centinelas: habla de estrategia inteligente, diplomacia astuta, planes discretos, o bien advierte contra engaños y atajos.',
      shadow: 'Mentiras que salen a la luz, autoboicot o necesidad de confesar la verdad.',
      counsel: 'Sé astuto como la serpiente para proteger tus planes, pero impecable en tu ética para no engañarte a vos mismo.',
      domains: {
        love: 'En el amor, alerta sobre secretos ocultos, medias verdades, infidelidades o evasión del compromiso. Invita a hablar de frente y no usar juegos mentales en la pareja.',
        work: 'En el trabajo y dinero, aconseja máxima discreción con tus ideas y patentes para evitar robos intelectuales, actuando con estrategia astuta pero sin caer en atajos ilegales.',
        spirit: 'Regido por Netzach y la Luna en Acuario, recuerda que bajo el ojo vigilante de la conciencia superior ningún autoengaño del ego permanece oculto.'
      },
      nodes: [
        { x: 50, y: 22, title: 'El Ojo de la Luna Vigilante', secret: 'La conciencia superior que todo lo ve, incluso lo que se hace en secreto.' },
        { x: 36, y: 50, title: 'El Haz de Cinco Espadas', secret: 'El ingenio táctico para resolver un problema sin usar la fuerza bruta.' },
        { x: 76, y: 68, title: 'Las Dos Hojas Restantes', secret: 'Los cabos sueltos que quedan cuando se toma un atajo apresurado.' }
      ]
    },
    {
      rank: 8, numeral: 'VIII', name: 'Ocho de Espadas', subtitle: 'El Laberinto de los Velos Mentales', yesNo: 'No (primero soltá tus miedos)',
      meaning: 'Una figura vendada está rodeada por ocho espadas clavadas en semicírculo, pero el camino frente a sus pies está abierto: revela que la prisión actual es mental, nacida de creencias limitantes y miedo al juicio.',
      shadow: 'Caída de las vendas, liberación mental y recuperación del poder de decidir.',
      counsel: 'Tus pies no están encadenados y las espadas no te tocan: quitá la venda del miedo y salí caminando hoy.',
      domains: {
        love: 'En el amor, muestra que te sientes atrapado en una relación o en la soledad por miedos mentales e inseguridades propias, cuando en realidad tienes la llave para liberarte.',
        work: 'En el trabajo y finanzas, refleja síndrome del impostor, miedo al qué dirán o sentir que no tienes salida económica. Al quitarte la venda de las creencias limitantes verás nuevas puertas.',
        spirit: 'Asociado a Hod y Júpiter en Géminis, revela cómo los barrotes del pensamiento rumiante se disuelven apenas el espíritu da un paso consciente hacia adelante.'
      },
      nodes: [
        { x: 50, y: 30, title: 'La Venda de Seda Carmesí', secret: 'La parálisis por análisis y el hábito de creer que no tenés salida.' },
        { x: 24, y: 56, title: 'El Cerco de Ocho Espadas', secret: 'Prejuicios, mandatos ajenos y excusas que parecen muros pero dejan paso libre.' },
        { x: 50, y: 80, title: 'El Sendero Abierto en el Agua', secret: 'La salida real que aparece en cuanto asumís la responsabilidad de tu libertad.' }
      ]
    },
    {
      rank: 9, numeral: 'IX', name: 'Nueve de Espadas', subtitle: 'La Vigilia de las Sombras Nocturnas', yesNo: 'No (son fantasmas de ansiedad)',
      meaning: 'Nueve espadas horizontales flotan en la pared oscura de la medianoche: retrata el insomnio, la preocupación excesiva, la culpa y los monstruos mentales que se agigantan en la oscuridad pero se disipan al alba.',
      shadow: 'Fin de la pesadilla, pedir ayuda sincera y perdonarse para recuperar el sueño.',
      counsel: 'No creas todo lo que tu mente te dice a las tres de la mañana: el noventa por ciento de tus miedos nunca ocurrirá.',
      domains: {
        love: 'En el amor, retrata celos imaginarios, insomnio por culpa o ansiedad excesiva sobre el futuro de la relación. Habla abiertamente con tu pareja: la realidad es mucho menos grave que tus miedos.',
        work: 'En el trabajo y dinero, señala noches sin dormir por deudas o presiones laborales. Ordena tus números a la luz del día y pide asesoría: la preocupación mental no resuelve el problema.',
        spirit: 'Vinculado a Yesod y Marte en Géminis, representa el cruce por la noche oscura de la mente antes de despertar a la compasión y al perdón interior.'
      },
      nodes: [
        { x: 50, y: 30, title: 'La Escalera de Nueve Filos', secret: 'Los pensamientos rumiantes que se apilan uno sobre otro en el silencio nocturno.' },
        { x: 50, y: 64, title: 'El Rostro entre las Manos', secret: 'La angustia interior que necesita compasión en lugar de autocastigo.' },
        { x: 72, y: 78, title: 'El Manto de Rosas y Astros', secret: 'La protección del cosmos que sigue cubriéndote aunque los ojos cerrados no la vean.' }
      ]
    },
    {
      rank: 10, numeral: 'X', name: 'Diez de Espadas', subtitle: 'El Alba Dorada tras el Ocaso', yesNo: 'No (fin definitivo que trae alivio)',
      meaning: 'Diez espadas cierran por completo un ciclo sobre la tierra oscura mientras en lo alto estalla el amanecer dorado: marca que la tormenta tocó fondo, ya no puede empeorar y comienza la liberación del nuevo día.',
      shadow: 'Resurrección tras la crisis, alivio profundo y dejar atrás el papel de víctima.',
      counsel: 'Lo peor ya quedó atrás: soltá la historia que terminó y levantá la vista hacia el sol que ya está naciendo.',
      domains: {
        love: 'En el amor, marca el cierre definitivo e irreversible de un ciclo doloroso o relación kármica agotada. La buena noticia es que ya tocó fondo y hoy mismo comienza tu renacimiento afectivo.',
        work: 'En el trabajo y finanzas, indica el fin de un contrato, despido o cierre de negocio que en el fondo te quita un peso enorme de encima, abriendo paso a un amanecer laboral totalmente nuevo.',
        spirit: 'Regido por Malkuth y el Sol en Géminis, simboliza la muerte mística del falso ego mental coronada por el Sol Invicto del nuevo día espiritual.'
      },
      nodes: [
        { x: 50, y: 20, title: 'El Amanecer de Oro Invicto', secret: 'La promesa absoluta de renacimiento una vez que el viejo ciclo se agota.' },
        { x: 50, y: 52, title: 'La Empalizada de Diez Espadas', secret: 'El límite máximo de saturación mental que obliga a soltar el control.' },
        { x: 50, y: 78, title: 'El Mar en Calma Absoluta', secret: 'La paz silenciosa que sobreviene cuando ya no queda nada que resistir.' }
      ]
    },
    {
      rank: 11, isCourt: true, numeral: 'SOTA', name: 'Sota de Espadas', subtitle: 'El Vigía de los Vientos Altos', yesNo: 'Sí (con investigación y alerta)',
      meaning: 'Con la espada en alto sobre las cumbres ventosas y la mirada aguda: simboliza mente rápida, curiosidad investigadora, verdades directas, estudio ágil, vigilancia y noticias esclarecedoras.',
      shadow: 'Sarcasmo filoso, espionaje, hablar sin pensar o estar a la defensiva todo el tiempo.',
      counsel: 'Usá tu agudeza mental para investigar la verdad a fondo, no para herir con ironías innecesarias.',
      domains: {
        love: 'En el amor, la Sota de Espadas indica curiosidad, revisar redes sociales, conversaciones directas que aclaran dudas o necesidad de hablar con sinceridad sin caer en ironías.',
        work: 'En el trabajo y dinero, es excelente para auditorías, programación, periodismo, estudios universitarios, firmas de documentos y detección temprana de errores financieros.',
        spirit: 'Representa la Tierra del Aire: el centinela de las cumbres mentales que mantiene la atención despierta para cortar cualquier engaño astral.'
      },
      nodes: [
        { x: 50, y: 20, title: 'Bandada de Aves Astrales', secret: 'Ideas rápidas y señales sutiles que solo una mente atenta logra captar.' },
        { x: 74, y: 42, title: 'La Espada Alzada al Viento', secret: 'La disposición constante para defender la verdad y cuestionar lo dudoso.' },
        { x: 34, y: 76, title: 'Nubes de Tormenta Lejana', secret: 'La capacidad de anticiparse a los problemas gracias a la observación.' }
      ]
    },
    {
      rank: 12, isCourt: true, numeral: 'CABALLERO', name: 'Caballero de Espadas', subtitle: 'El Halcón de la Tormenta Plateada', yesNo: 'Sí rápido y tajante',
      meaning: 'Jinete de acero lanzado a toda velocidad contra el viento cortando las nubes: representa brillantez intelectual, coraje verbal, ejecución relámpago, defensa de una causa justa y determinación.',
      shadow: 'Brutalidad verbal, precipitación ciega, fanatismo ideológico o atropellar los sentimientos ajenos.',
      counsel: 'Avanzá con la velocidad del rayo hacia tu objetivo, pero cuidá que tu espada corte el problema y no a las personas.',
      domains: {
        love: 'En el amor, el Caballero de Espadas trae definiciones rápidas, declaraciones directas sin rodeos o discusiones frontales. Pide sumar empatía a la verdad para no ser hiriente.',
        work: 'En el trabajo y finanzas, augura cierres de tratos veloces, defensa brillante en juicios o debates, resolución ejecutiva de crisis y liderazgo intelectual imparable.',
        spirit: 'Encarna el Fuego del Aire (el halcón de plata en la tormenta): la mente iluminada que se lanza sin miedo hacia la conquista de la verdad suprema.'
      },
      nodes: [
        { x: 44, y: 20, title: 'Yelmo de Halcón Plateado', secret: 'El intelecto incisivo que calcula y ejecuta en una fracción de segundo.' },
        { x: 78, y: 38, title: 'El Acero Horizontal al Galope', secret: 'La palabra directa y la acción frontal que derriban cualquier burocracia.' },
        { x: 36, y: 74, title: 'Ráfagas de Céfiro y Plata', secret: 'La fuerza imparable de una idea cuyo tiempo ha llegado.' }
      ]
    },
    {
      rank: 13, isCourt: true, numeral: 'REINA', name: 'Reina de Espadas', subtitle: 'Dama del Cielo Claro y el Filo', yesNo: 'Sí (con honestidad implacable)',
      meaning: 'Coronada de mariposas doradas sobre un trono en las nubes, empuña la espada vertical y extiende la mano: encarna lucidez cristalina, independencia digna, límites claros, ingenio y sabiduría nacida de haber superado el dolor.',
      shadow: 'Frialdad cortante, amargura defensiva o juzgar con dureza implacable.',
      counsel: 'Hablá con verdad clara y corazón digno: tus límites firmes son el filtro que solo deja pasar a quien te respeta.',
      domains: {
        love: 'En el amor, la Reina de Espadas exige honestidad total, respeto a la independencia y límites claros. Prefiere la verdad desnuda o una soltería digna antes que cualquier relación tibia o falsa.',
        work: 'En el trabajo y dinero, augura éxito rotundo para abogadas, juezas, escritoras, científicas, consultoras y líderes que toman decisiones financieras con lucidez quirúrgica.',
        spirit: 'Simboliza el Agua del Aire: la sabiduría cristalina del alma que ha transmutado las lágrimas del pasado en una corona de mariposas doradas.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Diadema de Mariposas de Oro', secret: 'El alma que atravesó el dolor y emergió libre, sabia y elevada.' },
        { x: 74, y: 46, title: 'La Espada Vertical de la Ley', secret: 'La objetividad incorruptible que no se deja manipular por chantajes.' },
        { x: 28, y: 56, title: 'La Mano Abierta en las Nubes', secret: 'La disposición a escuchar y dialogar siempre que exista sinceridad.' }
      ]
    },
    {
      rank: 14, isCourt: true, numeral: 'REY', name: 'Rey de Espadas', subtitle: 'El Juez Supremo del Éter', yesNo: 'Sí (por ley, lógica y justicia)',
      meaning: 'Sentado en el trono de los vientos con la gran espada de doble filo: representa autoridad intelectual máxima, fallos legales justos, estrategia brillante, ética profesional, medicina o asesoría experta.',
      shadow: 'Crueldad calculadora, abuso de autoridad intelectual o frialdad inhumana.',
      counsel: 'Decidí con la mente fría y la ética alta: la justicia verdadera necesita la precisión de tu discernimiento.',
      domains: {
        love: 'En el amor, el Rey de Espadas representa a una pareja sumamente inteligente, ética y leal pero poco demostrativa, o la necesidad de ordenar tu vida afectiva con madurez y justicia.',
        work: 'En el trabajo y finanzas, es el arquetipo del juez, cirujano, ingeniero o estratega maestro: anuncia fallos legales a tu favor, contratos blindados y autoridad profesional máxima.',
        spirit: 'Encarna el Aire del Aire: el trono etérico del verbo creador donde la mente superior legisla en perfecta sintonía con el orden cósmico.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Corona de Querubines y Aire', secret: 'La soberanía del pensamiento superior alineado con la ley universal.' },
        { x: 74, y: 48, title: 'El Mandoble de Doble Filo', secret: 'El poder de dictar sentencia justa, cortar litigios y ordenar el caos.' },
        { x: 28, y: 74, title: 'Pilares de Simetría Mental', secret: 'La estructura lógica y el rigor ético que sostienen toda gran verdad.' }
      ]
    }
  ],

  // ================= PALO DE OROS (14 CARTAS) =================
  pentacles: [
    {
      rank: 1, numeral: 'AS', name: 'As de Oros', subtitle: 'El Talismán del Jardín Esmeralda', yesNo: 'Sí próspero y tangible',
      meaning: 'Una mano astral sostiene la gran moneda solar de cinco puntas sobre un jardín florecido con un arco de lirios: anuncia riqueza material, nuevo ingreso o negocio sólido, salud radiante y manifestación terrenal.',
      shadow: 'Oportunidad financiera postergada, avaricia o descuidar la salud del cuerpo.',
      counsel: 'Sembrá hoy esta moneda de oro en tierra fértil: tenés en la mano el capital para construir prosperidad duradera.',
      domains: {
        love: 'En el amor, el As de Oros anuncia una relación estable, leal, sensual y con futuro concreto. Es carta de mudarse juntos, formalizar el vínculo y construir un hogar próspero.',
        work: 'En el trabajo y dinero, es el mejor presagio financiero del tarot: trae un nuevo empleo muy bien remunerado, capital semilla, golpe de suerte económico, compra de bienes o negocio sumamente rentable.',
        spirit: 'Regido por Kether en la Tierra, es el talismán esmeralda donde el espíritu divino desciende para consagrar la materia, el cuerpo y la abundancia terrenal.'
      },
      nodes: [
        { x: 50, y: 44, title: 'El Gran Pentáculo Solar', secret: 'La materia consagrada por el espíritu: riqueza, salud y oportunidad real.' },
        { x: 28, y: 50, title: 'La Mano de la Providencia', secret: 'El regalo concreto del universo listo para ser trabajado y multiplicado.' },
        { x: 50, y: 78, title: 'El Arco del Jardín Florido', secret: 'El portal hacia una seguridad material estable y en armonía con la Tierra.' }
      ]
    },
    {
      rank: 2, numeral: 'II', name: 'Dos de Oros', subtitle: 'El Malabarista del Infinito Dorado', yesNo: 'Sí (con flexibilidad y ritmo)',
      meaning: 'Dos pentáculos danzan dentro de una cinta de infinito dorada mientras al fondo las naves sortean grandes olas: simboliza adaptabilidad financiera, manejo hábil de dos proyectos y equilibrio en medio del movimiento.',
      shadow: 'Desorden en las cuentas, estrés por malabarear demasiadas tareas a la vez.',
      counsel: 'No te pongas rígido ante los vaivenes: mantené el ritmo flexible y fluí con la danza del cambio.',
      domains: {
        love: 'En el amor, pide equilibrar los tiempos entre el trabajo y la pareja, o tomarse el inicio de una relación con frescura, buen humor y adaptabilidad ante los cambios.',
        work: 'En el trabajo y finanzas, señala manejar dos fuentes de ingresos, mover capital con agilidad, sortear la inflación con cintura financiera y mantener el flujo de caja en movimiento.',
        spirit: 'Asociado a Chokmah y Júpiter en Capricornio, dibuja la lemniscata dorada del cambio perpetuo: la sabiduría de bailar en equilibrio sobre las olas del mundo material.'
      },
      nodes: [
        { x: 50, y: 46, title: 'La Lemniscata de Oro Vivo', secret: 'El flujo continuo del dinero y la energía que se mantiene sano al circular.' },
        { x: 30, y: 38, title: 'Los Dos Pentáculos en Danza', secret: 'La maestría para equilibrar dos áreas de tu vida sin descuidar ninguna.' },
        { x: 70, y: 76, title: 'Naves sobre Olas Esmeralda', secret: 'La capacidad de navegar los altibajos del mercado con cintura y buen humor.' }
      ]
    },
    {
      rank: 3, numeral: 'III', name: 'Tres de Oros', subtitle: 'Los Maestros de la Catedral', yesNo: 'Sí (mediante excelencia y equipo)',
      meaning: 'Bajo el arco gótico del templo brillan tres pentáculos tallados junto al compás del maestro constructor: representa maestría profesional, trabajo en equipo calificado, reconocimiento de tu oficio y obras duraderas.',
      shadow: 'Trabajo mediocre por prisa, falta de coordinación grupal o talento no valorado.',
      counsel: 'Pulí cada detalle de tu oficio y rodeate de expertos: estás edificando una catedral, no una choza pasajera.',
      domains: {
        love: 'En el amor, muestra que la pareja crece trabajando en equipo, remodelando la casa juntos o compartiendo un proyecto común basado en la admiración y el respeto diario.',
        work: 'En el trabajo y dinero, augura reconocimiento a tu maestría técnica, ascensos por mérito, éxito en arquitectura, ingeniería, diseño o programación y excelentes ganancias en equipo.',
        spirit: 'Vinculado a Binah y Marte en Capricornio, consagra la Gran Obra de los maestros constructores donde el trabajo cotidiano se eleva a plegaria sagrada.'
      },
      nodes: [
        { x: 50, y: 30, title: 'El Rosetón de Tres Oros', secret: 'La unión armónica entre habilidad técnica, visión artística y recursos.' },
        { x: 50, y: 58, title: 'El Arco Gótico del Templo', secret: 'La obra sólida que trasciende el tiempo cuando se construye con vocación.' },
        { x: 30, y: 74, title: 'El Compás y la Escuadra', secret: 'La precisión, el estudio y el aprendizaje continuo del maestro artesano.' }
      ]
    },
    {
      rank: 4, numeral: 'IV', name: 'Cuatro de Oros', subtitle: 'El Guardián de la Bóveda Real', yesNo: 'Sí (con reserva y prudencia)',
      meaning: 'Cuatro pentáculos anclan la figura: uno sobre la corona, uno abrazado en el pecho y dos bajo las plantas de los pies: habla de ahorro seguro, patrimonio protegido y orden fiscal, pero advierte contra el apego rígido.',
      shadow: 'Avaricia por miedo a la escasez, bloqueo del flujo o bien aprender a soltar y compartir.',
      counsel: 'Cuidá tu patrimonio con sabiduría, pero recordá que si apretás demasiado el puño no puede entrar nada nuevo.',
      domains: {
        love: 'En el amor, refleja un vínculo estable y seguro, pero advierte contra los celos posesivos, el miedo a abrir el corazón o el apego a la rutina por temor a perder el control.',
        work: 'En el trabajo y finanzas, indica solvencia, ahorros protegidos, plazos fijos o inversiones conservadoras seguras, aconsejando no caer en la avaricia para permitir que el dinero crezca.',
        spirit: 'Regido por Chesed y el Sol en Capricornio, enseña que la verdadera fortaleza terrenal consiste en custodiar el templo físico sin amurallar el espíritu.'
      },
      nodes: [
        { x: 50, y: 20, title: 'El Pentáculo en la Corona', secret: 'El pensamiento enfocado en la seguridad material y la conservación.' },
        { x: 50, y: 52, title: 'El Escudo de Oro en el Pecho', secret: 'La reserva patrimonial protegida que da respaldo, pero no debe cerrar el corazón.' },
        { x: 32, y: 78, title: 'Los Dos Oros Bajo los Pies', secret: 'El dominio firme sobre el territorio y las posesiones adquiridas.' }
      ]
    },
    {
      rank: 5, numeral: 'V', name: 'Cinco de Oros', subtitle: 'El Vitral Iluminado en la Nieve', yesNo: 'No por ahora (pedí ayuda y mirá arriba)',
      meaning: 'En medio del invierno oscuro brilla un vitral eclesiástico con cinco pentáculos de oro cálido: señala una racha de escasez o sensación de desamparo, recordando que el refugio y la ayuda están justo al lado si levantás la vista.',
      shadow: 'Fin de la estrechez económica, recuperación de la fe y hallazgo de apoyo solidario.',
      counsel: 'Dejá de caminar mirando el frío del suelo: la puerta del santuario está abierta y tenés quién te tienda la mano.',
      domains: {
        love: 'En el amor, señala sentirse incomprendido o atravesar una racha económica difícil en pareja, recordando que el verdadero amor se demuestra apoyándose hombro a hombro bajo la tormenta.',
        work: 'En el trabajo y dinero, alerta sobre gastos imprevistos, deudas o pérdida temporal de ingresos. No te aísles por orgullo: pide asesoría o apoyo, pues la solución está muy cerca.',
        spirit: 'Asociado a Geburah y Mercurio en Tauro, ilumina el vitral de los cinco oros en la nieve: la certeza de que el tesoro del espíritu jamás puede quebrarse.'
      },
      nodes: [
        { x: 50, y: 34, title: 'El Vitral de los Cinco Oros', secret: 'La abundancia espiritual y el auxilio real que brillan incluso en la noche más fría.' },
        { x: 28, y: 66, title: 'Copos de Escarcha Invernal', secret: 'La prueba pasajera de carencia que revela quiénes están con vos de verdad.' },
        { x: 68, y: 76, title: 'La Campana del Refugio', secret: 'El llamado a la humildad de pedir y aceptar ayuda cuando hace falta.' }
      ]
    },
    {
      rank: 6, numeral: 'VI', name: 'Seis de Oros', subtitle: 'La Balanza de la Generosidad Justa', yesNo: 'Sí (intercambio justo y ayuda)',
      meaning: 'La balanza de oro pesa con justicia mientras una mano vierte luz y seis pentáculos restablecen el equilibrio: anuncia cobro de deudas, becas, mecenazgo, caridad consciente y reciprocidad entre dar y recibir.',
      shadow: 'Deudas impagas, regalos con condiciones ocultas o desequilibrio en el intercambio.',
      counsel: 'Da con alegría cuando te toque abundar y recibí con dignidad cuando necesites apoyo: así gira la rueda de la prosperidad.',
      domains: {
        love: 'En el amor, anuncia una relación equilibrada y generosa donde ambos dan y reciben afecto en justa medida, sanando antiguas asimetrías o dependencias emocionales.',
        work: 'En el trabajo y finanzas, augura aprobación de créditos, becas, pago de deudas pendientes, aumento de sueldo justo, llegada de inversores o bonanza que te permite ayudar a otros.',
        spirit: 'Vinculado a Tiphereth y la Luna en Tauro, activa la ley hermética de circulación kármica: la mano que da con nobleza abre el canal para recibir multiplicado.'
      },
      nodes: [
        { x: 50, y: 26, title: 'La Balanza del Equilibrio Material', secret: 'La ley de reciprocidad justa que mide el valor real del trabajo y la ayuda.' },
        { x: 26, y: 50, title: 'La Columna de Seis Pentáculos', secret: 'La riqueza que circula de forma armónica sin estancarse ni derrocharse.' },
        { x: 68, y: 66, title: 'La Mano que Da y Recibe', secret: 'La gracia de comprender que la generosidad multiplica el caudal de ambos.' }
      ]
    },
    {
      rank: 7, numeral: 'VII', name: 'Siete de Oros', subtitle: 'La Pausa Junto a la Cosecha', yesNo: 'Sí (a mediano plazo con paciencia)',
      meaning: 'Siete pentáculos maduran entre el follaje esmeralda mientras el labrador apoya sus manos en la vara para evaluar el cultivo: representa inversión a largo plazo, paciencia fértil y balance estratégico.',
      shadow: 'Impaciencia por desenterrar la semilla antes de tiempo, o frustración por lentitud.',
      counsel: 'No arranques el fruto verde por ansiedad: tu siembra es buena y está madurando bajo tierra a su ritmo exacto.',
      domains: {
        love: 'En el amor, indica una relación que madura a fuego lento con bases reales, o un momento de reflexión para evaluar cuánto ha crecido el vínculo y hacia dónde proyectarlo.',
        work: 'En el trabajo y dinero, favorece inversiones a mediano y largo plazo, dividendos, cosechas agrícolas o desarrollos de negocios que requieren paciencia antes de dar su gran ganancia.',
        spirit: 'Regido por Netzach y Saturno en Tauro, enseña la alquimia del tiempo orgánico: respetar el silencio subterráneo donde la semilla de oro se transforma en fruto.'
      },
      nodes: [
        { x: 34, y: 36, title: 'El Cayado de la Contemplación', secret: 'La pausa inteligente para evaluar qué rindió fruto y qué conviene podar.' },
        { x: 64, y: 48, title: 'Los Seis Oros en la Vid', secret: 'El capital y el esfuerzo acumulados que ya muestran su potencial.' },
        { x: 50, y: 78, title: 'El Séptimo Oro en la Raíz', secret: 'El dividendo o la semilla maestra que asegura la próxima temporada.' }
      ]
    },
    {
      rank: 8, numeral: 'VIII', name: 'Ocho de Oros', subtitle: 'La Fragua del Maestro Orfebre', yesNo: 'Sí (mediante dedicación y estudio)',
      meaning: 'El cincel y el martillo graban con precisión un pentáculo sobre el banco de trabajo mientras otros siete brillan en la columna: encarna perfeccionamiento técnico, amor al detalle, estudio disciplinado y prosperidad por mérito.',
      shadow: 'Perfeccionismo paralizante, trabajo mecánico sin alma o atajos de baja calidad.',
      counsel: 'Enamorate del proceso diario: la maestría que hoy tallás en silencio será mañana tu mayor fortuna.',
      domains: {
        love: 'En el amor, habla de construir la relación día a día con detalles concretos, dedicación paciente y compromiso real de mejorar la comunicación y la convivencia.',
        work: 'En el trabajo y finanzas, es la carta de la excelencia profesional: augura prosperidad asegurada mediante la especialización técnica, el estudio constante, el oficio artesanal y la disciplina.',
        spirit: 'Asociado a Hod y el Sol en Virgo, transforma el banco de trabajo del orfebre en un altar de atención plena donde pulir la materia pule también el alma.'
      },
      nodes: [
        { x: 76, y: 38, title: 'La Columna de Siete Oros', secret: 'La constancia diaria donde cada pieza terminada supera a la anterior.' },
        { x: 44, y: 54, title: 'El Cincel y el Martillo de Luz', secret: 'La concentración plena (estado de flujo) que consagra el trabajo cotidiano.' },
        { x: 44, y: 76, title: 'El Banco del Artesano', secret: 'La base humilde y disciplinada desde donde se forjan las grandes fortunas.' }
      ]
    },
    {
      rank: 9, numeral: 'IX', name: 'Nueve de Oros', subtitle: 'El Halcón en el Jardín de Oro', yesNo: 'Sí (independencia y abundancia)',
      meaning: 'En un jardín amurallado repleto de nueve pentáculos y vides doradas, el halcón encapuchado reposa sobre la mano enguantada: simboliza libertad financiera conquistada por mérito propio, refinamiento, paz y autosuficiencia.',
      shadow: 'Dependencia económica, gastos de apariencia o soledad dentro de una jaula de oro.',
      counsel: 'Disfrutá sin culpa de la cosecha que sembraste con tu propio esfuerzo: tu independencia es tu mayor joya.',
      domains: {
        love: 'En el amor, celebra la plenitud de quien se ama y se basta a sí mismo: si estás soltero disfrutas de tu libertad con alto estándar; en pareja, compartes desde la abundancia y no desde la carencia.',
        work: 'En el trabajo y dinero, anuncia libertad financiera, rentas pasivas, éxito en negocios propios, compras de lujo merecidas y cosecha abundante lograda por tu propio mérito.',
        spirit: 'Vinculado a Yesod y Venus en Virgo, simboliza el jardín amurallado de la soberanía interior donde el instinto (el halcón solar) obedece a la conciencia iluminada.'
      },
      nodes: [
        { x: 34, y: 32, title: 'El Halcón Noble Domesticado', secret: 'El instinto y la ambición educados bajo el mando de la conciencia.' },
        { x: 72, y: 52, title: 'Las Vides de Nueve Pentáculos', secret: 'La renta abundante y la belleza que rodean a quien supo cultivar su jardín.' },
        { x: 50, y: 78, title: 'La Túnica de Venus y Tierra', secret: 'La dignidad serena de quien no necesita depender de nadie para brillar.' }
      ]
    },
    {
      rank: 10, numeral: 'X', name: 'Diez de Oros', subtitle: 'El Árbol de la Vida y el Linaje', yesNo: 'Sí absoluto y duradero',
      meaning: 'Diez pentáculos dorados trazan la geometría sagrada del Árbol de la Vida cabalístico sobre el pórtico ancestral: es la cumbre de la riqueza sólida, herencia familiar, bienes raíces, legado perdurable y plenitud terrenal.',
      shadow: 'Disputas por herencias o patrimonio, o descuidar el legado espiritual por el dinero.',
      counsel: 'Construí pensando en las generaciones que vendrán: la verdadera riqueza es el legado de amor y solidez que dejás.',
      domains: {
        love: 'En el amor, augura matrimonio sólido, unión de familias, tradición, compra de vivienda familiar y un vínculo respaldado por la abundancia y la paz a través de los años.',
        work: 'En el trabajo y finanzas, es la carta de la riqueza generacional: anuncia herencias, éxito en bienes raíces, fondos de inversión, empresas familiares consolidadas y patrimonio blindado.',
        spirit: 'Regido por Malkuth y Mercurio en Virgo, plasma las diez monedas como el Árbol de la Vida cabalístico completo encarnado en la plenitud de la Tierra.'
      },
      nodes: [
        { x: 50, y: 22, title: 'La Corona del Árbol Sefirótico', secret: 'La bendición espiritual descendiendo hasta materializarse en los diez planos.' },
        { x: 50, y: 52, title: 'El Entramado de Diez Pentáculos', secret: 'La prosperidad sistémica que sostiene a toda la familia o empresa.' },
        { x: 50, y: 78, title: 'El Arco del Linaje Ancestral', secret: 'La protección de los antepasados y la permanencia de tu obra en el tiempo.' }
      ]
    },
    {
      rank: 11, isCourt: true, numeral: 'SOTA', name: 'Sota de Oros', subtitle: 'El Aprendiz del Cristal Terrenal', yesNo: 'Sí (excelente para estudios y negocios)',
      meaning: 'Joven estudioso que sostiene el pentáculo elevado entre sus manos sobre un campo recién arado: trae becas, contratos iniciales, noticias de dinero, concentración estudiosa y semillas de gran futuro.',
      shadow: 'Falta de constancia en el estudio, procrastinación o desperdiciar una beca/oportunidad.',
      counsel: 'Tratá tu nuevo proyecto como una joya sagrada: estudiá, planificá y cuidá cada paso desde el día uno.',
      domains: {
        love: 'En el amor, la Sota de Oros trae un vínculo leal, sincero y con intenciones serias que avanza paso a paso, demostrando interés con hechos concretos más que con promesas vacías.',
        work: 'En el trabajo y dinero, anuncia becas de estudio, primer empleo calificado, inicio de un ahorro rentable, contratos prometedores y excelente capacidad para aprender un nuevo oficio.',
        spirit: 'Representa la Tierra de la Tierra: el aprendiz sagrado que contempla en el cristal pentacular la geometría divina oculta dentro de la naturaleza.'
      },
      nodes: [
        { x: 50, y: 24, title: 'El Pentáculo Elevado al Ojo', secret: 'La fascinación por aprender un oficio real y materializar ideas.' },
        { x: 28, y: 58, title: 'Surcos de Tierra Fértil', secret: 'El campo virgen listo para recibir la primera siembra profesional.' },
        { x: 72, y: 76, title: 'Flores del Valle Esmeralda', secret: 'Los primeros ingresos y alegrías tangibles del trabajo bien hecho.' }
      ]
    },
    {
      rank: 12, isCourt: true, numeral: 'CABALLERO', name: 'Caballero de Oros', subtitle: 'El Paladín del Surco Fértil', yesNo: 'Sí seguro y constante',
      meaning: 'Sobre un poderoso corcel de obsidiana en reposo firme, el caballero observa el horizonte con el pentáculo en alto: simboliza lealtad inquebrantable, trabajo metódico, resistencia, palabra que se cumple y cosecha segura.',
      shadow: 'Terquedad extrema, rutina aburrida, lentitud excesiva o aversión total al riesgo.',
      counsel: 'Paso a paso se conquista la montaña: tu constancia silenciosa vencerá donde los impacientes abandonan.',
      domains: {
        love: 'En el amor, el Caballero de Oros es el compañero más fiel, constante y confiable del zodiaco: augura relaciones duraderas, compromiso inquebrantable y protección cotidiana.',
        work: 'En el trabajo y finanzas, garantiza crecimiento económico seguro mediante el método, la puntualidad y la perseverancia. Ideal para inversiones inmobiliarias, campo e industria.',
        spirit: 'Encarna el Fuego de la Tierra (el paladín del surco fértil): la devoción silenciosa e inagotable que sostiene la obra hasta verla florecer.'
      },
      nodes: [
        { x: 44, y: 20, title: 'Yelmo con Hojas de Roble', secret: 'La mente práctica, leal y enfocada en resultados tangibles y duraderos.' },
        { x: 76, y: 42, title: 'El Escudo del Pentáculo Solar', secret: 'La solvencia y el honor de quien respalda cada promesa con hechos.' },
        { x: 38, y: 74, title: 'El Corcel Firme en la Tierra', secret: 'La paciencia estratégica que nunca da un paso en falso.' }
      ]
    },
    {
      rank: 13, isCourt: true, numeral: 'REINA', name: 'Reina de Oros', subtitle: 'Soberana del Jardín de Esmeralda', yesNo: 'Sí abundante y nutritivo',
      meaning: 'En su trono rodeado de rosas, frutos y raíces doradas, acuna el gran pentáculo con ternura soberana: encarna prosperidad generosa, salud fértil, talento empresarial, hogar cálido y sabiduría de la naturaleza.',
      shadow: 'Inseguridad material, exceso de carga doméstica/laboral o descuidar el propio cuerpo.',
      counsel: 'Cuidá tu cuerpo y tus recursos como un jardín sagrado: todo lo que nutrís con amor y orden hoy se multiplica.',
      domains: {
        love: 'En el amor, la Reina de Oros augura un vínculo cálido, sensual, nutritivo y sumamente estable, donde el cuidado del cuerpo, el hogar y la prosperidad compartida son sagrados.',
        work: 'En el trabajo y dinero, anuncia abundancia económica, talento brillante para administrar recursos, éxito en negocios de bienestar, gastronomía, finanzas o diseño y multiplicación del capital.',
        spirit: 'Simboliza el Agua de la Tierra: la Gran Madre alquímica que fecunda la materia con amor para que el jardín terrenal rebose de frutos dorados.'
      },
      nodes: [
        { x: 50, y: 20, title: 'Corona de Cuernos y Frutos', secret: 'La maestría sobre los ciclos orgánicos de la prosperidad, la salud y la cosecha.' },
        { x: 50, y: 54, title: 'El Gran Pentáculo Solar', secret: 'El talismán del trabajo consagrado: riqueza material puesta al servicio de la vida.' },
        { x: 32, y: 76, title: 'Enredadera de Oro Vivo', secret: 'La seguridad terrenal que florece cuando se cultiva con paciencia y generosidad.' }
      ]
    },
    {
      rank: 14, isCourt: true, numeral: 'REY', name: 'Rey de Oros', subtitle: 'El Patriarca del Trono de Tauro', yesNo: 'Sí rotundo y millonario en frutos',
      meaning: 'Coronado entre vides de oro en su trono tallado con toros sagrados, sostiene el cetro y el pentáculo maestro: es el arquetipo del gran inversor, la solvencia máxima, el protector generoso y el éxito material consolidado.',
      shadow: 'Materialismo frío, medir el valor de todo solo por su precio o terquedad posesiva.',
      counsel: 'Ejercé tu poder material con nobleza de espíritu: sos el rey que transforma el plomo de la dificultad en oro real.',
      domains: {
        love: 'En el amor, el Rey de Oros representa una pareja proveedora, leal, madura y sumamente estable que ofrece seguridad total, o la consolidación de un imperio familiar próspero.',
        work: 'En el trabajo y finanzas, es el máximo símbolo del magnate, inversor y banquero exitoso: augura riqueza consolidada, liderazgo empresarial, grandes ganancias y solvencia absoluta.',
        spirit: 'Encarna el Aire de la Tierra (el trono áureo de Tauro): el maestro que ha dominado las leyes de la materia para poner la riqueza al servicio del orden cósmico.'
      },
      nodes: [
        { x: 50, y: 18, title: 'Corona de Oro y Laureles Rojos', secret: 'La supremacía en el mundo de los negocios, la administración y la materia.' },
        { x: 30, y: 52, title: 'El Cetro y el Orbe Pentacular', secret: 'La unión del mando ejecutivo con el respaldo financiero concreto.' },
        { x: 72, y: 74, title: 'El Trono del Toro Áureo', secret: 'La fuerza inamovible de Tauro que garantiza estabilidad por décadas.' }
      ]
    }
  ]
};

// ============================================================================
// ADAPTADOR: Generamos el arreglo de 56 cartas NORMALIZADO
// para que coincida exactamente con la estructura de los Arcanos Mayores.
// ============================================================================

const ALL_56_MINOR_CARDS = Object.keys(RAW_CARDS_SPEC).flatMap((suitKey) => {
  const suitMeta = SUITS_META[suitKey];
  return RAW_CARDS_SPEC[suitKey].map((item) => ({
    // Propiedades Base
    id: `${suitKey}_${item.rank}`,
    numeral: item.numeral,
    name: item.name,
    subtitle: item.subtitle,
    palette: suitMeta.palette,

    // Propiedades exclusivas de los menores
    suit: suitKey,
    suitName: suitMeta.name,
    alchemicalSymbol: suitMeta.symbol,
    isCourt: item.isCourt || false,

    // NORMALIZACIÓN 1: Agrupamos las correspondencias igual que en los Mayores
    correspondences: {
      element: suitMeta.element,
      astro: suitMeta.astro,
      yesNo: item.yesNo,
      keywords: []
    },

    // NORMALIZACIÓN 2: Alineamos los nombres de los textos
    meaning: item.meaning,
    lightAndShadow: item.shadow,
    domains: item.domains,
    counsel: item.counsel,

    nodes: item.nodes.map((n, idx) => ({ ...n, id: `n${idx + 1}` }))
  }));
});

// Alias estándar y exposición global para mantener simetría con MAJOR_ARCANA de datos_cartas.js
const MINOR_ARCANA = ALL_56_MINOR_CARDS;
if (typeof window !== 'undefined') {
  window.SUITS_META = SUITS_META;
  window.ALL_56_MINOR_CARDS = ALL_56_MINOR_CARDS;
  window.MINOR_ARCANA = MINOR_ARCANA;
}

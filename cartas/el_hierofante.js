// ============================================================================
// ARCHIVO: cartas/el_hierofante.js
// ARCANO V: EL HIEROFANTE (El Sumo Pontífice del Dogma Astral)
// ============================================================================
// - Cero filtros borrosos: Tiara Papal Triple (Triregnum), Cruz Triple y Llaves Cruzadas.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: PILARES DEL SANTUARIO Y ROSETÓN PENTAGONAL (Z-Midground)
    const HierophantMidground = memo(function HierophantMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 96)" : "translate(120, 96) rotate(" + (angle * 0.75) + ")";
      const pentAngles = [0, 72, 144, 216, 288];

      return (
        <g>
          {/* Pilares Góticos del Templo Interior */}
          <rect x="26" y="38" width="22" height="270" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.2" />
          <rect x="192" y="38" width="22" height="270" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.2" />
          <line x1="37" y1="48" x2="37" y2="296" stroke="url(#v-gold)" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.7" />
          <line x1="203" y1="48" x2="203" y2="296" stroke="url(#v-gold)" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.7" />

          {/* Arco Apuntado de Sabiduría */}
          <path d="M48,308 V104 Q48,42 120,30 Q192,42 192,104 V308" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" opacity="0.75" />

          {/* Rosetón Sagrado de 5 Puntas (El Pentagrama del Microcosmos) */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="62" fill="none" stroke="#020105" strokeWidth="2" />
            <circle cx="0" cy="0" r="62" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="#c084fc" strokeWidth="0.7" strokeDasharray="4 3" />
            <polygon points="0,-58 34,47 -55,-18 55,-18 -34,47" fill="none" stroke="url(#v-gold)" strokeWidth="0.85" opacity="0.8" />
            {isUltra && pentAngles.map((deg) => {
              const rad = ((deg - 90) * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={Math.cos(rad) * 58}
                  cy={Math.sin(rad) * 58}
                  r="2.4"
                  fill="#fef08a"
                />
              );
            })}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL PONTÍFICE CON TIARA DE TRES CORONAS E ÍNFULAS SAGRADAS (Z-Primary)
    const HierophantPrimary = memo(function HierophantPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Manto Litúrgico Pontificio (Capa Pluvial en Obsidiana, Amatista y Oro) */}
          <g>
            <polygon points="36,308 50,152 88,130 120,142 152,130 190,152 204,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="38,308 52,154 88,132 120,144 152,132 188,154 202,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="56,308 68,162 96,142 120,154 144,142 172,162 184,308" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.2" />

            {/* Estola Papal Central con Triple Cruz Grabada */}
            <polygon points="96,308 102,152 120,164 138,152 144,308" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <line x1="120" y1="164" x2="120" y2="270" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <line x1="110" y1="196" x2="130" y2="196" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <line x1="106" y1="214" x2="134" y2="214" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />

            {/* Ínfulas Reales (Bandas de Oro que caen detrás de la Tiara sobre los Hombros) */}
            <polygon points="88,108 72,176 86,180 96,114" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="152,108 168,176 154,180 144,114" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />

            {/* Broche Racional del Pecho (Pectoral de los Misterios) */}
            <polygon points="120,144 138,162 120,180 102,162" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" />
            <polygon points="120,149 132,162 120,175 108,162" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.8" />
            {EnergyCore && <EnergyCore cx={120} cy={162} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* ROSTRO SOLEMNE, BARBA TRENZADA CEREMONIAL Y TIARA TRIPLE (TRIREGNUM) */}
          <g transform="translate(120, 104)">
            <polygon points="-28,-26 28,-26 30,18 18,52 0,66 -18,52 -30,18" fill="#020105" transform="translate(0, 3.5)" />
            {/* Máscara Ascética en Oro y Obsidiana */}
            <polygon points="-26,-24 26,-24 28,16 16,40 0,48 -16,40 -28,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-26,-6 -8,-16 -2,12 -16,32 -26,12" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="26,-6 8,-16 2,12 16,32 26,12" fill="#160a26" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="0,-14 -5,12 0,18 5,12" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />

            {/* Ojos de Sabiduría Dogmática */}
            <ellipse cx="-13" cy="-1" rx="4.2" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <ellipse cx="13" cy="-1" rx="4.2" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <circle cx="-13" cy="-1" r="1.2" fill="#ffffff" />
            <circle cx="13" cy="-1" r="1.2" fill="#ffffff" />

            {/* Barba Ceremonial Trenzada en Plata y Oro */}
            <polygon points="-18,20 0,14 18,20 14,50 0,64 -14,50" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-8,20 0,14 8,20 6,48 0,58 -6,48" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />

            {/* TIARA PAPAL DE TRES CORONAS SUPERPUESTAS (Los Tres Mundos) */}
            <g transform="translate(0, -20)">
              <polygon points="-32,8 -28,-38 0,-56 28,-38 32,8" fill="#020105" transform="translate(0, 2.5)" />
              {/* Domo Base de Amatista y Plata */}
              <path d="M-30,6 C-30,-36 30,-36 30,6 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
              {/* 1ra Corona (Inferior - Mundo Material) */}
              <polygon points="-34,6 -28,-8 -14,-2 0,-12 14,-2 28,-8 34,6" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" strokeLinejoin="round" />
              {/* 2da Corona (Media - Mundo Astral) */}
              <polygon points="-28,-10 -22,-22 -10,-16 0,-26 10,-16 22,-22 28,-10" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeLinejoin="round" />
              {/* 3ra Corona (Superior - Mundo Divino) */}
              <polygon points="-20,-24 -14,-36 -6,-30 0,-42 6,-30 14,-36 20,-24" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" strokeLinejoin="round" />
              {/* Cruz Apical de la Tiara */}
              <path d="M0,-42 V-56 M-6,-50 H6" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="0" cy="-18" r="2.2" fill="#fef08a" />
              <circle cx="0" cy="-3" r="2.5" fill="#c084fc" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: MANO EN BENDICIÓN ESOTÉRICA, BACULO TRIPLE Y LLAVES CRUZADAS (Z-Foreground)
    const HierophantForeground = memo(function HierophantForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;

      return (
        <g>
          {/* MANO DERECHA ALZADA EN EL SIGNO ESOTÉRICO DE BENDICIÓN (Dos dedos extendidos) */}
          <g transform={"translate(66, " + (168 + floatY) + ")"}>
            {/* Halo de Bendición alrededor de la Mano */}
            <circle cx="0" cy="-14" r="20" fill="url(#v-astral-core)" />
            <circle cx="0" cy="-14" r="16" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" strokeDasharray="3 3" />
            {/* Sombra de la Mano */}
            <path d="M-10,16 L-12,-4 L-6,-28 L0,-28 L2,-8 L8,-26 L14,-24 L10,0 L14,14 Z" fill="#020105" transform="translate(1.5, 2.5)" />
            {/* Palma y Dedos Índice y Medio Extendidos + Anular y Meñique Plegados */}
            <path
              d="M-10,16 L-12,-4 L-6,-28 L0,-28 L2,-6 L6,-26 L12,-24 L8,2 L14,14 Z"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Dedos Plegados (Anular y Meñique) */}
            <rect x="2" y="-4" width="11" height="6" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
            <rect x="3" y="3" width="10" height="5.5" rx="2" fill="url(#v-gold)" stroke="#040207" strokeWidth="0.7" />
            {/* Anillo Pontificio */}
            <polygon points="-2,8 4,12 -2,16 -8,12" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
          </g>

          {/* MANO IZQUIERDA EMPUÑANDO LA GRAN CRUZ PAPAL DE TRES TRAVESAÑOS */}
          <g transform={"translate(174, " + (158 - floatY) + ")"}>
            {/* Sombra de la Cruz Triple */}
            <g transform="translate(2, 3)" opacity="0.9">
              <line x1="0" y1="-78" x2="0" y2="96" stroke="#020105" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="-14" y1="-62" x2="14" y2="-62" stroke="#020105" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="-22" y1="-44" x2="22" y2="-44" stroke="#020105" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="-30" y1="-24" x2="30" y2="-24" stroke="#020105" strokeWidth="4.5" strokeLinecap="round" />
            </g>

            {/* Asta y Tres Travesaños Graduados en Oro 3D */}
            <line x1="0" y1="-78" x2="0" y2="96" stroke="url(#v-gold-3d-face)" strokeWidth="3.4" strokeLinecap="round" />
            <line x1="-14" y1="-62" x2="14" y2="-62" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="-22" y1="-44" x2="22" y2="-44" stroke="url(#v-gold-3d-face)" strokeWidth="3" strokeLinecap="round" />
            <line x1="-30" y1="-24" x2="30" y2="-24" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />

            {/* Remates de Diamante en los Extremos */}
            <circle cx="-14" cy="-62" r="2.2" fill="#fff9e2" />
            <circle cx="14" cy="-62" r="2.2" fill="#fff9e2" />
            <circle cx="-22" cy="-44" r="2.5" fill="#fef08a" />
            <circle cx="22" cy="-44" r="2.5" fill="#fef08a" />
            <circle cx="-30" cy="-24" r="2.8" fill="#c084fc" />
            <circle cx="30" cy="-24" r="2.8" fill="#c084fc" />
            {EnergyCore && <EnergyCore cx={0} cy={-44} r={6} quality={quality} angle={angle} />}

            {/* Guantelete Pontificio Cerrado sobre el Báculo */}
            <polygon points="-12,6 10,0 14,18 -10,22" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="0" cy="11" r="2.2" fill="#fef08a" />
          </g>

          {/* ALTAR DEL SANTUARIO Y LAS DOS LLAVES CRUZADAS (ORO SOLAR Y PLATA LUNAR) */}
          <g transform="translate(120, 268)">
            <polygon points="-88,4 88,4 98,40 -98,40" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <circle cx="0" cy="4" r="28" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2" />
            <circle cx="0" cy="4" r="22" fill="none" stroke="url(#v-gold)" strokeWidth="0.7" strokeDasharray="3 2" />

            {/* Llave de Plata Lunar (Inconsciente / Misterios Menores) */}
            <g transform="translate(0, 4) rotate(-42)">
              <line x1="0" y1="-22" x2="0" y2="24" stroke="#020105" strokeWidth="4.5" transform="translate(1, 1.5)" />
              <line x1="0" y1="-20" x2="0" y2="24" stroke="url(#v-silver)" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="0" cy="-20" r="8" fill="none" stroke="url(#v-silver)" strokeWidth="2.4" />
              <rect x="0" y="12" width="8" height="9" fill="url(#v-silver)" stroke="#040207" strokeWidth="0.6" />
            </g>

            {/* Llave de Oro Solar (Consciente / Misterios Mayores) */}
            <g transform="translate(0, 4) rotate(42)">
              <line x1="0" y1="-22" x2="0" y2="24" stroke="#020105" strokeWidth="4.5" transform="translate(1, 1.5)" />
              <line x1="0" y1="-20" x2="0" y2="24" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="0" cy="-20" r="8" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />
              <rect x="-8" y="12" width="8" height="9" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.6" />
            </g>

            {EnergyCore && <EnergyCore cx={0} cy={4} r={5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "hierophant",
      numeral: "V",
      name: "El Hierofante",
      subtitle: "El Pontífice del Misterio",
      archetype: "hierophant",
      desc: "Coronado con la Tiara Triple de los tres mundos, imparte la bendición esotérica junto a la Cruz Papal y las llaves cruzadas de oro y plata.",
      Midground: HierophantMidground,
      Primary: HierophantPrimary,
      Foreground: HierophantForeground
    };

    window.ARCANA_REGISTRY["hierophant"] = cardDef;
    window.ARCANA_REGISTRY["el_hierofante"] = cardDef;
    window.ARCANA_REGISTRY["V"] = cardDef;
    window.ARCANA_REGISTRY[5] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
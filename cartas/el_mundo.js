// ============================================================================
// ARCHIVO: cartas/el_mundo.js
// ARCANO XXI: EL MUNDO (Anima Mundi y el Ouroboros)
// ============================================================================
// - Cero filtros borrosos: Ouroboros esculpido en oro 3D y escamas de obsidiana.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Se registra automáticamente en window.ARCANA_REGISTRY.
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: ESFERA ARMILAR Y CUSTODIOS DEL TETRAMORFOS (Z-Midground)
    const WorldMidground = memo(function WorldMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const zodiacRot = isLow ? "translate(120, 166)" : "translate(120, 166) rotate(" + (angle * 0.8) + ")";
      const zodiacAxes = [0, 30, 60, 90, 120, 150];

      return (
        <g>
          {/* Esfera Armilar Cósmica Detrás del Ouroboros */}
          <ellipse cx="120" cy="166" rx="88" ry="88" fill="none" stroke="url(#v-gold)" strokeWidth="0.55" opacity="0.55" />
          <ellipse cx="120" cy="166" rx="88" ry="34" fill="none" stroke="url(#v-gold)" strokeWidth="0.65" transform="rotate(-28 120 166)" opacity="0.58" />
          <ellipse cx="120" cy="166" rx="88" ry="34" fill="none" stroke="#c084fc" strokeWidth="0.65" transform="rotate(28 120 166)" opacity="0.5" />

          {/* 12 Rayos Zodiacales en Rotación Matemática Nativa */}
          {isUltra && (
            <g transform={zodiacRot} opacity="0.38">
              {zodiacAxes.map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1={Math.cos(rad) * -86}
                    y1={Math.sin(rad) * -86}
                    x2={Math.cos(rad) * 86}
                    y2={Math.sin(rad) * 86}
                    stroke="#ffe074"
                    strokeWidth="0.35"
                    strokeDasharray="2 4"
                  />
                );
              })}
            </g>
          )}

          {/* Cuatro Custodios Geométricos Integrados en el Fondo de la Ventana */}
          <path d="M36,78 L58,64 L52,92 Z M204,78 L182,64 L188,92 Z" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.7" />
          <path d="M36,258 L58,272 L52,244 Z M204,258 L182,272 L188,244 Z" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.7" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: OUROBOROS ESCULPIDO EN ORO 3D Y ANIMA MUNDI (Z-Primary)
    const WorldPrimary = memo(function WorldPrimary({ quality = "ULTRA" }) {
      const SibiliaFigure = window.SibiliaArcanaFigure;

      return (
        <g>
          {/* Mandorla / Ouroboros Esculpido en Oro y Escamas de Obsidiana */}
          <g transform="translate(120, 166)">
            {/* Sombra por Extrusión Vectorial Nítida */}
            <ellipse rx="68" ry="102" fill="none" stroke="#020105" strokeWidth="15" transform="translate(0, 3)" />
            <ellipse rx="68" ry="102" fill="none" stroke="url(#v-gold-dark)" strokeWidth="11.5" />
            <ellipse rx="68" ry="102" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="7.8" />
            {/* Grabado de Escamas Geométricas sobre el Cuerpo del Ouroboros */}
            <ellipse rx="68" ry="102" fill="none" stroke="#180a29" strokeWidth="4.6" strokeDasharray="5 4" />
            <ellipse rx="61" ry="95" fill="none" stroke="#fff9e2" strokeWidth="0.75" opacity="0.88" />
            <ellipse rx="75" ry="109" fill="none" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.88" />

            {/* Cabeza Coronada del Dragón Ouroboros (En la Cima del Anillo) */}
            <g transform="translate(0, -102)">
              <polygon points="-17,2 0,-10 17,2 0,12" fill="#020105" />
              <polygon points="-16,0 0,-12 16,0 0,10" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
              <circle r="8" fill="url(#v-astral-core)" />
              <polygon points="0,-7 6,0 0,5 -6,0" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
              <circle cx="-8" cy="-1" r="1.4" fill="#c084fc" />
              <circle cx="8" cy="-1" r="1.4" fill="#c084fc" />
            </g>

            {/* Nudo de Infinito Inferior del Ouroboros */}
            <g transform="translate(0, 102)">
              <path d="M-20,2 C-10,-6 10,-6 20,2 C10,10 -10,10 -20,2 Z" fill="#020105" />
              <path d="M-20,0 C-10,-8 10,-8 20,0 C10,8 -10,8 -20,0 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
              <circle r="3.5" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            {/* Nodos Cardinales Laterales Engarzados en el Anillo */}
            <polygon points="-68,-6 -61,0 -68,6 -75,0" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />
            <polygon points="68,-6 75,0 68,6 61,0" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />
          </g>

          {/* Figura Central: Anima Mundi (Sibilia Coronada en Danza Cósmica) */}
          {SibiliaFigure && <SibiliaFigure cy={156} scale={0.78} quality={quality} crowned={true} />}
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: MANTO ESPIRAL Y CETROS GEMELOS DE LUZ (Z-Foreground)
    const WorldForeground = memo(function WorldForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 2.4) : 0;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;

      return (
        <g>
          {/* Manto Etéreo en Espiral (Amatista y Oro Nítido, Cero Blur) */}
          <path
            d="M78,126 C96,110 144,110 162,126 C174,144 148,178 120,190 C92,202 72,228 92,248 C112,264 146,254 158,236"
            fill="none"
            stroke="#030106"
            strokeWidth="7.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M78,124 C96,108 144,108 162,124 C174,142 148,176 120,188 C92,200 72,226 92,246 C112,262 146,252 158,234"
            fill="none"
            stroke="url(#v-amethyst-bright)"
            strokeWidth="5.4"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M78,124 C96,108 144,108 162,124 C174,142 148,176 120,188 C92,200 72,226 92,246 C112,262 146,252 158,234"
            fill="none"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          {isUltra && (
            <path
              d="M78,124 C96,108 144,108 162,124 C174,142 148,176 120,188 C92,200 72,226 92,246 C112,262 146,252 158,234"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeDasharray="6 10"
              strokeDashoffset={dashOffset}
            />
          )}

          {/* Cetros Gemelos de Evolución en las Manos de Anima Mundi */}
          <g transform={"translate(76, " + (156 + floatY) + ") rotate(-14)"}>
            <line x1="1.2" y1="-31" x2="1.2" y2="33" stroke="#030106" strokeWidth="3.4" strokeLinecap="round" />
            <line x1="0" y1="-32" x2="0" y2="32" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={-32} r={5} quality={quality} angle={angle} />}
            {EnergyCore && <EnergyCore cx={0} cy={32} r={4} quality={quality} angle={angle} />}
          </g>

          <g transform={"translate(164, " + (156 - floatY) + ") rotate(14)"}>
            <line x1="1.2" y1="-31" x2="1.2" y2="33" stroke="#030106" strokeWidth="3.4" strokeLinecap="round" />
            <line x1="0" y1="-32" x2="0" y2="32" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={-32} r={5} quality={quality} angle={angle} />}
            {EnergyCore && <EnergyCore cx={0} cy={32} r={4} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "world",
      numeral: "XXI",
      name: "El Mundo",
      subtitle: "Anima Mundi y el Ouroboros",
      archetype: "world",
      desc: "Simetría sagrada con el dragón Ouroboros en oro bruñido encerrando a Anima Mundi coronada con sus dos cetros de luz.",
      Midground: WorldMidground,
      Primary: WorldPrimary,
      Foreground: WorldForeground
    };

    window.ARCANA_REGISTRY["world"] = cardDef;
    window.ARCANA_REGISTRY["el_mundo"] = cardDef;
    window.ARCANA_REGISTRY["XXI"] = cardDef;
    window.ARCANA_REGISTRY[21] = cardDef;
  `;

if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();

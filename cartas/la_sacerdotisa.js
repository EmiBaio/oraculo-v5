// ============================================================================
// ARCHIVO: cartas/la_sacerdotisa.js
// ARCANO II: LA SACERDOTISA (La Guardiana del Velo)
// ============================================================================
// - Cero filtros borrosos: Columnas Boaz y Jachin esculpidas en 3D vectorial.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: COLUMNAS BOAZ Y JACHIN + ÁRBOL DE LA VIDA CABALÍSTICO (Z-Midground)
    const PriestessMidground = memo(function PriestessMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 104)" : "translate(120, 104) rotate(" + (-angle * 0.9) + ")";
      const sephiroth = [
        [120, 48], [88, 72], [152, 72], [88, 114], [152, 114],
        [120, 138], [88, 174], [152, 174], [120, 204], [120, 242]
      ];

      return (
        <g>
          {/* Velo del Templo con el Árbol de la Vida y Granadas Geométricas */}
          <rect x="52" y="34" width="136" height="272" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.8" opacity="0.82" />
          <g stroke="url(#v-gold)" strokeWidth="0.65" opacity="0.6">
            <line x1="120" y1="48" x2="88" y2="72" /><line x1="120" y1="48" x2="152" y2="72" /><line x1="88" y1="72" x2="152" y2="72" />
            <line x1="88" y1="72" x2="88" y2="114" /><line x1="152" y1="72" x2="152" y2="114" /><line x1="88" y1="114" x2="152" y2="114" />
            <line x1="88" y1="72" x2="120" y2="138" /><line x1="152" y1="72" x2="120" y2="138" /><line x1="120" y1="48" x2="120" y2="242" />
            <line x1="88" y1="114" x2="120" y2="138" /><line x1="152" y1="114" x2="120" y2="138" />
            <line x1="88" y1="114" x2="88" y2="174" /><line x1="152" y1="114" x2="152" y2="174" />
          </g>
          {isUltra && sephiroth.map(([sx, sy], idx) => (
            <g key={idx} transform={"translate(" + sx + ", " + sy + ")"}>
              <polygon points="0,-6 6,0 0,6 -6,0" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" />
              <circle r="1.5" fill="#fef08a" />
            </g>
          ))}

          {/* Astrolabio Lunar Detrás de la Corona Hathórica */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="56" fill="none" stroke="url(#v-silver)" strokeWidth="1" strokeDasharray="6 3 1 3" />
            <circle cx="0" cy="0" r="46" fill="none" stroke="url(#v-gold)" strokeWidth="0.6" />
            <polygon points="0,-56 40,0 0,56 -40,0" fill="none" stroke="#c084fc" strokeWidth="0.7" opacity="0.75" />
          </g>

          {/* COLUMNA IZQUIERDA: BOAZ (Fuste Acanalado de Obsidiana y Capitel de Loto) */}
          <g transform="translate(36, 0)">
            <rect x="-14" y="44" width="30" height="264" fill="#020105" />
            <rect x="-16" y="44" width="30" height="264" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <line x1="-9" y1="64" x2="-9" y2="290" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.65" />
            <line x1="-1" y1="64" x2="-1" y2="290" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.65" />
            <line x1="7" y1="64" x2="7" y2="290" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.65" />
            {/* Capitel Egipcio de Pétalos de Loto */}
            <polygon points="-22,42 20,42 14,62 -16,62" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="-14,42 -1,58 12,42" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.8" />
            {/* Medallón Grabado B */}
            <polygon points="-1,132 12,146 -1,160 -14,146" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            <text x="-1" y="150" textAnchor="middle" fill="#fef08a" fontSize="10.5" fontFamily="'Cinzel Decorative', serif" fontWeight="900">B</text>
          </g>

          {/* COLUMNA DERECHA: JACHIN (Fuste de Plata/Amatista y Capitel de Loto) */}
          <g transform="translate(204, 0)">
            <rect x="-16" y="44" width="30" height="264" fill="#020105" />
            <rect x="-14" y="44" width="30" height="264" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <line x1="-7" y1="64" x2="-7" y2="290" stroke="url(#v-silver)" strokeWidth="0.6" opacity="0.7" />
            <line x1="1" y1="64" x2="1" y2="290" stroke="url(#v-silver)" strokeWidth="0.6" opacity="0.7" />
            <line x1="9" y1="64" x2="9" y2="290" stroke="url(#v-silver)" strokeWidth="0.6" opacity="0.7" />
            {/* Capitel Egipcio de Pétalos de Loto */}
            <polygon points="-20,42 22,42 16,62 -14,62" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="-12,42 1,58 14,42" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.8" />
            {/* Medallón Grabado J */}
            <polygon points="1,132 14,146 1,160 -12,146" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            <text x="1" y="150" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontFamily="'Cinzel Decorative', serif" fontWeight="900">J</text>
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: ORÁCULO VELADA EN PLATA LUNAR CON CORONA HATHÓRICA (Z-Primary)
    const PriestessPrimary = memo(function PriestessPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Manto Ceremonial Escalonado en Plata Lunar, Amatista y Obsidiana */}
          <g>
            <polygon points="48,308 62,148 92,126 120,136 148,126 178,148 192,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="50,308 64,148 92,128 120,138 148,128 176,148 190,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            {/* Estola Lunar de Plata Pulida */}
            <polygon points="74,308 84,144 120,162 156,144 166,308" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.3" />
            <polygon points="94,308 102,154 120,170 138,154 146,308" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />

            {/* Velo Catedralicio Lateral que Cae desde la Corona hasta los Hombros */}
            <path d="M84,74 L58,154 L88,146 L94,98 Z" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" opacity="0.88" />
            <path d="M156,74 L182,154 L152,146 L146,98 Z" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" opacity="0.88" />
          </g>

          {/* ROSTRO DE PLATA LUNAR CON VELO MÍSTICO SEMICUBIERTO */}
          <g transform="translate(120, 108)">
            <polygon points="-26,-28 26,-28 28,16 16,40 0,48 -16,40 -28,16" fill="#020105" transform="translate(0, 3)" />
            {/* Rostro Esculpido en Plata y Porcelana Astral */}
            <polygon points="-24,-26 24,-26 26,14 14,38 0,46 -14,38 -26,14" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-24,-4 -4,-14 0,14 -14,36 -26,14" fill="url(#v-amethyst)" opacity="0.35" />

            {/* Ojos Cerrados en Meditación Profunda con Pestañas de Oro y Lágrimas Lunares */}
            <path d="M-18,-2 Q-11,4 -4,-2" fill="none" stroke="#1e0836" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M4,-2 Q11,4 18,-2" fill="none" stroke="#1e0836" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="-11" cy="6" r="1.3" fill="url(#v-gold-3d-face)" />
            <circle cx="11" cy="6" r="1.3" fill="url(#v-gold-3d-face)" />

            {/* Velo de Filigrana sobre el Puente Nasal y Labios */}
            <polygon points="-24,10 0,4 24,10 14,38 0,46 -14,38" fill="url(#v-obsidian)" fillOpacity="0.78" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <path d="M-16,18 Q0,26 16,18 M-10,28 Q0,34 10,28" fill="none" stroke="url(#v-gold)" strokeWidth="0.7" strokeDasharray="2 2" />

            {/* Tercer Ojo Lunar en la Frente */}
            <polygon points="0,-22 5,-13 0,-5 -5,-13" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <circle cx="0" cy="-13" r="2.2" fill="#ffffff" />
          </g>

          {/* GRAN CORONA HATHÓRICA DE LA TRIPLE DIOSA (Creciente, Plenilunio y Menguante) */}
          <g transform="translate(120, 62)">
            {/* Sombra de la Corona */}
            <path
              d="M-54,-8 C-34,-12 -22,0 -22,14 C-22,28 -34,40 -54,36 C-38,28 -32,20 -32,14 C-32,8 -38,0 -54,-8 Z M54,-8 C34,-12 22,0 22,14 C22,28 34,40 54,36 C38,28 32,20 32,14 C32,8 38,0 54,-8 Z"
              fill="#020105"
              transform="translate(0, 3)"
            />
            {/* Soporte de Cuernos de Oro */}
            <path d="M-26,24 C-32,0 -20,-18 0,-18 C20,-18 32,0 26,24" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" />
            {/* Lunas Creciente y Menguante Laterales */}
            <path
              d="M-54,-8 C-34,-12 -22,0 -22,14 C-22,28 -34,40 -54,36 C-38,28 -32,20 -32,14 C-32,8 -38,0 -54,-8 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <path
              d="M54,-8 C34,-12 22,0 22,14 C22,28 34,40 54,36 C38,28 32,20 32,14 C32,8 38,0 54,-8 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#ffffff"
              strokeWidth="1"
            />
            {/* Disco de Plenilunio Central en Plata Espejada */}
            <circle cy="12" r="19" fill="#020105" transform="translate(0, 2)" />
            <circle cy="12" r="18" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            <circle cy="12" r="13" fill="none" stroke="url(#v-gold)" strokeWidth="0.7" strokeDasharray="2 2" />
            {EnergyCore && <EnergyCore cx={0} cy={12} r={7} quality={quality} angle={angle} />}
          </g>

          {/* Cruz Solar Hermética Engarzada en el Pecho */}
          <g transform="translate(120, 174)">
            <polygon points="-4,-18 4,-18 4,-4 18,-4 18,4 4,4 4,18 -4,18 -4,4 -18,4 -18,-4 -4,-4" fill="#020105" transform="translate(0, 2)" />
            <polygon points="-3.5,-16 3.5,-16 3.5,-3.5 16,-3.5 16,3.5 3.5,3.5 3.5,16 -3.5,16 -3.5,3.5 -16,3.5 -16,-3.5 -3.5,-3.5" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />
            <circle r="4.5" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1" />
            <circle r="1.8" fill="#ffffff" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: GRIMORIO DE LOS MISTERIOS Y BARCA LUNAR CRECIENTE (Z-Foreground)
    const PriestessForeground = memo(function PriestessForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;

      return (
        <g>
          {/* ROLLO / GRIMORIO ASTRAL DESPLEGÁNDOSE EN PERSPECTIVA ENTRE SUS MANOS */}
          <g transform={"translate(120, " + (222 + floatY) + ")"}>
            {/* Sombra del Pergamino */}
            <path d="M-48,-12 Q0,-22 48,-12 L44,18 Q0,8 -44,18 Z" fill="#020105" transform="translate(0, 3.5)" />
            {/* Cuerpo Curvo del Pergamino de Obsidiana y Oro */}
            <path d="M-48,-12 Q0,-22 48,-12 L44,18 Q0,8 -44,18 Z" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <path d="M-42,-8 Q0,-17 42,-8 L39,13 Q0,4 -39,13 Z" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.7" opacity="0.85" />

            {/* Geometría Sagrada y Constelaciones Grabadas en el Pergamino (Reemplaza el cartel de texto plano) */}
            <circle cx="0" cy="-2" r="9" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <polygon points="0,-10 8,3 -8,3" fill="none" stroke="#fef08a" strokeWidth="0.8" />
            <polygon points="0,6 8,-7 -8,-7" fill="none" stroke="#c084fc" strokeWidth="0.8" />
            <line x1="-32" y1="-2" x2="-14" y2="-4" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <line x1="-30" y1="4" x2="-16" y2="2" stroke="url(#v-gold)" strokeWidth="0.8" />
            <line x1="14" y1="-4" x2="32" y2="-2" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <line x1="16" y1="2" x2="30" y2="4" stroke="url(#v-gold)" strokeWidth="0.8" />

            {/* Rodillos Cilíndricos de Oro 3D con Remates de Amatista */}
            <g transform="translate(-46, 2) rotate(-6)">
              <rect x="-4" y="-20" width="8" height="40" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              <polygon points="0,-26 5,-20 -5,-20" fill="url(#v-amethyst-bright)" stroke="url(#v-gold)" strokeWidth="0.8" />
              <polygon points="0,26 5,20 -5,20" fill="url(#v-amethyst-bright)" stroke="url(#v-gold)" strokeWidth="0.8" />
            </g>
            <g transform="translate(46, 2) rotate(6)">
              <rect x="-4" y="-20" width="8" height="40" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              <polygon points="0,-26 5,-20 -5,-20" fill="url(#v-amethyst-bright)" stroke="url(#v-gold)" strokeWidth="0.8" />
              <polygon points="0,26 5,20 -5,20" fill="url(#v-amethyst-bright)" stroke="url(#v-gold)" strokeWidth="0.8" />
            </g>

            {/* Manos Articuladas de Plata y Oro Sosteniendo el Pergamino */}
            <polygon points="-58,4 -44,-6 -36,-2 -42,10 -54,14" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="58,4 44,-6 36,-2 42,10 54,14" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeLinejoin="round" />
          </g>

          {/* GRAN BARCA LUNAR CRECIENTE EN EL PRIMER PLANO INFERIOR */}
          <g transform="translate(120, 272)">
            <path d="M-68,-22 C-42,32 42,32 68,-22 C40,14 -40,14 -68,-22 Z" fill="#020105" transform="translate(0, 4)" />
            <path
              d="M-68,-22 C-42,32 42,32 68,-22 C40,14 -40,14 -68,-22 Z"
              fill="url(#v-silver)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M-54,-12 C-32,20 32,20 54,-12"
              fill="none"
              stroke="url(#v-gold)"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            {EnergyCore && <EnergyCore cx={0} cy={0} r={6} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "priestess",
      numeral: "II",
      name: "La Sacerdotisa",
      subtitle: "La Guardiana del Velo",
      archetype: "priestess",
      desc: "Con el rostro cubierto por un velo de plata lunar bajo la corona Hathórica, custodia el Árbol de la Vida y el pergamino astral entre Boaz y Jachin.",
      Midground: PriestessMidground,
      Primary: PriestessPrimary,
      Foreground: PriestessForeground
    };

    window.ARCANA_REGISTRY["priestess"] = cardDef;
    window.ARCANA_REGISTRY["la_sacerdotisa"] = cardDef;
    window.ARCANA_REGISTRY["II"] = cardDef;
    window.ARCANA_REGISTRY[2] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
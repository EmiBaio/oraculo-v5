// ============================================================================
// ARCHIVO: cartas/la_muerte.js
// ARCANO XIII: LA MUERTE (El Segador Astral y la Rosa de la Inmortalidad)
// ============================================================================
// - Cero filtros borrosos: Cráneo real facetado en plata/oro, Guadaña lunar y Eclipse.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: ECLIPSE DEL SOL NEGRO, TORRES DEL HORIZONTE Y ROSA MÍSTICA (Z-Midground)
    const DeathMidground = memo(function DeathMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const roseRot = isLow ? "translate(120, 96)" : "translate(120, 96) rotate(" + (angle * 0.65) + ")";
      const petals = [0, 72, 144, 216, 288];

      return (
        <g>
          {/* Dos Torres del Umbral del Más Allá en el Horizonte */}
          <rect x="28" y="168" width="26" height="140" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
          <polygon points="26,168 41,146 56,168" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
          <rect x="186" y="168" width="26" height="140" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
          <polygon points="184,168 199,146 214,168" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />

          {/* Rueda de la Rosa Mística de Cinco Pétalos (Símbolo Rosacruz de Resurrección) */}
          <g transform={roseRot}>
            <circle cx="0" cy="0" r="62" fill="none" stroke="url(#v-silver)" strokeWidth="0.9" strokeDasharray="4 3" />
            <circle cx="0" cy="0" r="50" fill="none" stroke="url(#v-gold)" strokeWidth="0.7" />
            {petals.map((deg) => (
              <polygon
                key={deg}
                points="0,-58 14,-36 0,-22 -14,-36"
                fill="url(#v-amethyst)"
                fillOpacity="0.55"
                stroke="url(#v-gold-3d-face)"
                strokeWidth="0.8"
                transform={"rotate(" + deg + ")"}
              />
            ))}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL SOBERANO SEGADOR EN ARMADURA ÓSEA DE PLATA LUNAR Y OBSIDIANA (Z-Primary)
    const DeathPrimary = memo(function DeathPrimary() {
      return (
        <g>
          {/* Manto Real Desgarrado y Coraza Torácica Anatómica en Oro y Obsidiana */}
          <g>
            <polygon points="34,308 48,144 88,124 120,136 152,124 192,144 206,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="36,308 50,146 88,126 120,138 152,126 190,146 204,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.9" strokeLinejoin="round" />

            {/* Hombreras Afiladas con Púas de Plata Lunar */}
            <polygon points="30,168 48,136 88,126 96,146 48,178" fill="url(#v-obsidian)" stroke="url(#v-silver)" strokeWidth="1.5" />
            <polygon points="210,168 192,136 152,126 144,146 192,178" fill="url(#v-obsidian)" stroke="url(#v-silver)" strokeWidth="1.5" />

            {/* Costillar Esculpido en Placas Metálicas de Plata y Oro (Ribcage Cuirass) */}
            <polygon points="84,148 120,138 156,148 144,242 120,256 96,242" fill="#040208" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            <line x1="120" y1="142" x2="120" y2="246" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" />
            <path d="M92,162 Q120,174 148,162" fill="none" stroke="url(#v-silver)" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M94,178 Q120,190 146,178" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="3" strokeLinecap="round" />
            <path d="M98,194 Q120,206 142,194" fill="none" stroke="url(#v-silver)" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M102,210 Q120,220 138,210" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" strokeLinecap="round" />
          </g>

          {/* CRÁNEO IMPERIAL POLIÉDRICO ESCULPIDO EN PLATA LUNAR Y CORONA MEMENTO MORI */}
          <g transform="translate(120, 98)">
            <polygon points="-32,36 -28,-22 0,-36 28,-22 32,36" fill="#020105" transform="translate(0, 4)" />
            {/* Capucha Catedralicia de Obsidiana Profunda */}
            <polygon points="-34,34 -30,-24 0,-38 30,-24 34,34 18,44 -18,44" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />

            {/* Bóveda Craneal y Pómulos Afilados en Plata Lunar */}
            <polygon points="-22,-20 22,-20 25,2 18,16 12,18 11,30 -11,30 -12,18 -18,16 -25,2" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-22,-6 -6,-14 -2,4 -16,14 -24,2" fill="url(#v-amethyst)" opacity="0.45" />

            {/* Cuencas Oculares Profundas con Destello Astral */}
            <polygon points="-18,-4 -5,-6 -4,5 -16,6" fill="#040207" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="18,-4 5,-6 4,5 16,6" fill="#040207" stroke="url(#v-gold)" strokeWidth="0.9" />
            <circle cx="-11" cy="0" r="2" fill="#fef08a" />
            <circle cx="11" cy="0" r="2" fill="#fef08a" />
            <circle cx="-11" cy="0" r="0.9" fill="#ffffff" />
            <circle cx="11" cy="0" r="0.9" fill="#ffffff" />

            {/* Cavidad Nasal Triangular y Dientes Esculpidos en Oro y Plata */}
            <polygon points="0,2 4,13 -4,13" fill="#040207" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" />
            <line x1="-10" y1="22" x2="10" y2="22" stroke="#040207" strokeWidth="1.4" />
            <line x1="-6" y1="17" x2="-6" y2="28" stroke="#040207" strokeWidth="1.1" />
            <line x1="-2" y1="17" x2="-2" y2="28" stroke="#040207" strokeWidth="1.1" />
            <line x1="2" y1="17" x2="2" y2="28" stroke="#040207" strokeWidth="1.1" />
            <line x1="6" y1="17" x2="6" y2="28" stroke="#040207" strokeWidth="1.1" />

            {/* Corona Imperial de Agujas sobre el Cráneo */}
            <polygon
              points="-26,-18 -30,-40 -14,-26 0,-46 14,-26 30,-40 26,-18"
              fill="url(#v-gold-3d-face)"
              stroke="#fff9e2"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <polygon points="0,-42 5,-28 0,-20 -5,-28" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.8" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: GRAN GUADAÑA LUNAR EN DIAGONAL, CORONA CAÍDA Y ROSA RENACIDA (Z-Foreground)
    const DeathForeground = memo(function DeathForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 2.2;
      const dashOffset = isUltra ? -(angle * 2.8) : 0;

      return (
        <g>
          {/* LA GRAN GUADAÑA DE LA COSECHA ASTRAL CRUZANDO EL DIORAMA */}
          <g transform={"translate(0, " + floatY + ")"}>
            {/* Sombra de la Hoja y del Asta */}
            <path d="M58,56 C112,22 184,34 210,88 C170,62 114,58 66,76 Z" fill="#020105" transform="translate(2, 4)" />
            <line x1="64" y1="52" x2="178" y2="276" stroke="#020105" strokeWidth="6.5" strokeLinecap="round" transform="translate(2, 3)" />

            {/* Hoja Curva Gigante de Plata Lunar y Filo de Diamante */}
            <path
              d="M58,56 C112,22 184,34 210,88 C170,62 114,58 66,76 Z"
              fill="url(#v-silver)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M68,68 C114,48 168,52 204,84"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
            />
            {isUltra && (
              <path
                d="M58,56 C112,22 184,34 210,88"
                fill="none"
                stroke="#c084fc"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeDashoffset={dashOffset}
              />
            )}

            {/* Asta Diagonal en Oro Fundido y Obsidiana */}
            <line x1="64" y1="52" x2="178" y2="276" stroke="url(#v-gold-3d-face)" strokeWidth="4" strokeLinecap="round" />
            <line x1="64" y1="52" x2="178" y2="276" stroke="#fff9e2" strokeWidth="1" />
            {EnergyCore && <EnergyCore cx={68} cy={62} r={6.5} quality={quality} angle={angle} />}

            {/* Dos Manos Esqueléticas Acorazadas Empuñando el Asta */}
            <g transform="translate(106, 136)">
              <polygon points="-12,-8 10,-12 14,8 -10,12" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
              <line x1="-8" y1="-2" x2="8" y2="-5" stroke="#040207" strokeWidth="1.2" />
              <line x1="-8" y1="3" x2="8" y2="0" stroke="#040207" strokeWidth="1.2" />
            </g>
            <g transform="translate(144, 210)">
              <polygon points="-12,-8 10,-12 14,8 -10,12" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
              <line x1="-8" y1="-2" x2="8" y2="-5" stroke="#040207" strokeWidth="1.2" />
              <line x1="-8" y1="3" x2="8" y2="0" stroke="#040207" strokeWidth="1.2" />
            </g>
          </g>

          {/* BASE DEL DIORAMA: CORONA TERRENAL CAÍDA Y SOL DEL RENACIMIENTO */}
          <g transform="translate(120, 278)">
            {/* Corona Real Caída e Inclinada (Fin de las Ilusiones del Poder) */}
            <g transform="translate(-48, 4) rotate(-22)">
              <polygon points="-22,8 -26,-12 -10,-4 0,-18 10,-4 26,-12 22,8" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            </g>
            {/* Flor de Loto / Rosa Inmortal Brotando en el Centro */}
            <polygon points="0,-24 10,-6 26,-12 14,8 -14,8 -26,-12 -10,-6" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            {EnergyCore && <EnergyCore cx={0} cy={-4} r={6} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "death",
      numeral: "XIII",
      name: "La Muerte",
      subtitle: "La Cosecha Inmortal",
      archetype: "death",
      desc: "El Soberano Segador de cráneo facetado en plata lunar blande la gran guadaña curva sobre las coronas caídas mientras brota el loto del renacimiento.",
      Midground: DeathMidground,
      Primary: DeathPrimary,
      Foreground: DeathForeground
    };

    window.ARCANA_REGISTRY["death"] = cardDef;
    window.ARCANA_REGISTRY["la_muerte"] = cardDef;
    window.ARCANA_REGISTRY["XIII"] = cardDef;
    window.ARCANA_REGISTRY[13] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
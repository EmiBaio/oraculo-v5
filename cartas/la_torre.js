// ============================================================================
// ARCHIVO: cartas/la_torre.js
// ARCANO XVI: LA TORRE (La Aguja de Obsidiana)
// ============================================================================
// - Cero filtros borrosos: Rayo primordial multicapa 100% vectorial nítido.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Se registra automáticamente en window.ARCANA_REGISTRY.
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: ECLIPSE ASTRAL, ONDAS DE CHOQUE Y RISCOS (Z-Midground)
    const TowerMidground = memo(function TowerMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const ringRot = isLow ? "translate(120, 64)" : "translate(120, 64) rotate(" + (-angle * 1.6) + ")";

      return (
        <g>
          {/* Eclipse Astral / Vórtice de Tormenta en la Cima del Diorama */}
          <circle cx="120" cy="64" r="56" fill="url(#v-amethyst-halo)" />
          <circle cx="120" cy="64" r="24" fill="#030106" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
          <g transform={ringRot}>
            <circle cx="0" cy="0" r="29" fill="none" stroke="#c084fc" strokeWidth="0.7" strokeDasharray="4 3" />
            {isUltra && <circle cx="0" cy="0" r="35" fill="none" stroke="url(#v-gold)" strokeWidth="0.45" strokeDasharray="1.5 4" />}
          </g>

          {/* Ondas de Choque Concéntricas en el Punto de Fractura */}
          <ellipse cx="120" cy="174" rx="82" ry="26" fill="none" stroke="url(#v-gold)" strokeWidth="0.55" strokeDasharray="6 4" opacity="0.6" />
          <ellipse cx="120" cy="174" rx="64" ry="18" fill="none" stroke="#c084fc" strokeWidth="0.65" opacity="0.6" />
          {isUltra && <ellipse cx="120" cy="174" rx="46" ry="12" fill="none" stroke="#fef08a" strokeWidth="0.45" strokeDasharray="3 3" opacity="0.7" />}

          {/* Riscos de Obsidiana en la Base de la Ventana */}
          <polygon points="16,308 58,242 96,308" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.85" />
          <polygon points="224,308 182,238 144,308" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.85" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: RAYO PRIMORDIAL Y LOS 3 BLOQUES DE LA AGUJA (Z-Primary)
    const TowerPrimary = memo(function TowerPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 3.2) : 0;

      return (
        <g>
          {/* Rayo Primordial Ramificado (Multicapa Vectorial 100% Nítida, Cero Blur) */}
          <path
            d="M120,16 L104,68 L132,96 L98,148 L128,176 L108,242"
            fill="none"
            stroke="#581c87"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
          <path
            d="M120,16 L104,68 L132,96 L98,148 L128,176 L108,242"
            fill="none"
            stroke="#c084fc"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.88"
          />
          {isUltra && (
            <path
              d="M120,16 L104,68 L132,96 L98,148 L128,176 L108,242"
              fill="none"
              stroke="#fef08a"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 8"
              strokeDashoffset={dashOffset}
            />
          )}
          <path
            d="M120,16 L104,68 L132,96 L98,148 L128,176 L108,242"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Ramificaciones Eléctricas Nítidas */}
          <path
            d="M104,68 L74,98 L62,122 M132,96 L168,124 L182,148 M98,148 L64,178"
            fill="none"
            stroke="#c084fc"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M104,68 L74,98 L62,122 M132,96 L168,124 L182,148 M98,148 L64,178"
            fill="none"
            stroke="#fef08a"
            strokeWidth="1.1"
            strokeLinecap="round"
          />

          {/* SECCIÓN INFERIOR DE LA TORRE (Cimientos Góticos de Obsidiana) */}
          <g transform="translate(120, 246)">
            <polygon points="-50,-33 48,-25 60,62 -60,62" fill="#020105" />
            <polygon
              points="-48,-36 46,-28 58,60 -58,60"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <polygon points="-58,60 -42,-28 -30,-26 -40,60" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
            <polygon points="58,60 42,-24 30,-22 40,60" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
            <path d="M-20,58 V12 Q0,-8 20,12 V58" fill="#040208" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            {/* Grietas Tectónicas Incandescentes */}
            <path d="M-36,-22 L-14,8 L-24,36 M28,-18 L12,14 L26,42" fill="none" stroke="#c084fc" strokeWidth="2.2" opacity="0.6" />
            <path d="M-36,-22 L-14,8 L-24,36 M28,-18 L12,14 L26,42" fill="none" stroke="#fef08a" strokeWidth="1" />
          </g>

          {/* NÚCLEO DE ENERGÍA EXPUESTO ENTRE LAS FRACTURAS */}
          {EnergyCore && <EnergyCore cx={120} cy={174} r={14} quality={quality} angle={angle} />}

          {/* SECCIÓN MEDIA DE LA TORRE (Desplazada y Rotada con Rosetón Gótico) */}
          <g transform="translate(123, 156) rotate(7)">
            <polygon points="-44,-31 44,-35 48,35 -46,27" fill="#020105" />
            <polygon
              points="-42,-34 42,-38 46,32 -44,24"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Rosetón Gótico Sagrado Fracturado */}
            <circle cx="0" cy="-4" r="18" fill="#06030d" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <circle cx="0" cy="-4" r="11" fill="url(#v-amethyst-bright)" stroke="#fef08a" strokeWidth="0.6" />
            <path d="M0,-22 V14 M-18,-4 H18 M-12,-16 L12,8 M-12,8 L12,-16" stroke="url(#v-gold)" strokeWidth="1.1" />
            <circle cx="0" cy="-4" r="3.8" fill="#ffffff" />
          </g>

          {/* SECCIÓN SUPERIOR Y CORONA DE LA AGUJA (Colapsando dentro del Diorama) */}
          <g transform="translate(112, 92) rotate(-11)">
            <polygon points="-36,23 -28,-15 28,-15 36,23" fill="#020105" />
            <polygon
              points="-34,20 -26,-18 26,-18 34,20"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold)"
              strokeWidth="1.6"
            />
            <path
              d="M-32,-18 L-38,-42 L-16,-28 L0,-48 L16,-28 L38,-42 L32,-18 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#fff9e2"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <polygon points="0,-42 6,-30 0,-22 -6,-30" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.7" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: ESQUIRLAS DE OBSIDIANA Y ORO EN GRAVEDAD CERO (Z-Foreground)
    const TowerForeground = memo(function TowerForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const drift = isLow ? 0 : Math.sin((angle * Math.PI) / 40) * 2.5;

      return (
        <g transform={"translate(0, " + drift + ")"}>
          {/* Esquirlas Geométricas con Sombra Vectorial Nítida */}
          <polygon points="63,140 75,134 69,150" fill="#020105" />
          <polygon points="62,138 74,132 68,148" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.5" />

          <polygon points="175,144 187,138 181,156" fill="#020105" />
          <polygon points="174,142 186,136 180,154" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />

          <polygon points="57,198 69,190 65,208" fill="#020105" />
          <polygon points="56,196 68,188 64,206" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />

          <polygon points="179,200 167,194 173,212" fill="#020105" />
          <polygon points="178,198 166,192 172,210" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.5" />

          <polygon points="78,108 86,104 82,115" fill="url(#v-amethyst-bright)" stroke="url(#v-gold)" strokeWidth="0.8" />
          <polygon points="158,106 166,112 156,116" fill="url(#v-gold-3d-face)" />
        </g>
      );
    });

    const cardDef = {
      id: "tower",
      numeral: "XVI",
      name: "La Torre",
      subtitle: "La Aguja de Obsidiana",
      archetype: "tower",
      desc: "Obelisco gótico fracturado en 3 bloques tectónicos por un rayo astral nítido, exponiendo el rosetón sagrado y el núcleo de luz.",
      Midground: TowerMidground,
      Primary: TowerPrimary,
      Foreground: TowerForeground
    };

    window.ARCANA_REGISTRY["tower"] = cardDef;
    window.ARCANA_REGISTRY["la_torre"] = cardDef;
    window.ARCANA_REGISTRY["XVI"] = cardDef;
    window.ARCANA_REGISTRY[16] = cardDef;
  `;

if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
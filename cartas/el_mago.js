// ============================================================================
// ARCHIVO: cartas/el_mago.js
// ARCANO I: EL MAGO (El Arcanista del Velo)
// ============================================================================
// - Cero filtros borrosos: Sombras por extrusión vectorial y halos matemáticos.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Se registra automáticamente en window.ARCANA_REGISTRY.
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA (Z-Midground dentro de la ventana)
    const MagicianMidground = memo(function MagicianMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 112)" : "translate(120, 112) rotate(" + (-angle * 1.4) + ")";

      return (
        <g>
          {/* Arco Gótico Alquímico Interior */}
          <path
            d="M32,306 V98 Q32,38 120,28 Q208,38 208,98 V306"
            fill="none"
            stroke="url(#v-gold)"
            strokeWidth="0.85"
            strokeDasharray="4 2"
            opacity="0.68"
          />
          <path
            d="M38,306 V102 Q38,46 120,36 Q202,46 202,102 V306"
            fill="none"
            stroke="#c084fc"
            strokeWidth="0.4"
            opacity="0.45"
          />

          {/* Halo de Transmutación Hexagonal detrás de la cabeza del Mago */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="54" fill="none" stroke="url(#v-gold)" strokeWidth="0.85" strokeDasharray="8 4 1.5 4" opacity="0.8" />
            <circle cx="0" cy="0" r="46" fill="none" stroke="#c084fc" strokeWidth="0.45" opacity="0.55" />
            <polygon points="0,-54 47,27 -47,27" fill="none" stroke="#c084fc" strokeWidth="0.6" opacity="0.55" />
            <polygon points="0,54 47,-27 -47,-27" fill="none" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.55" />
            {isUltra && (
              <g fill="#fef08a">
                <circle cx="0" cy="-54" r="1.4" />
                <circle cx="47" cy="27" r="1.4" />
                <circle cx="-47" cy="27" r="1.4" />
                <circle cx="0" cy="54" r="1.4" />
                <circle cx="47" cy="-27" r="1.4" />
                <circle cx="-47" cy="-27" r="1.4" />
              </g>
            )}
          </g>

          {/* Líneas de Ley convergiendo al Altar de Obsidiana */}
          <path d="M120,44 V260 M46,195 L120,248 L194,195" fill="none" stroke="url(#v-gold)" strokeWidth="0.45" opacity="0.45" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: FIGURA SOLEMNE Y LEMNISCATA (Z-Primary)
    const MagicianPrimary = memo(function MagicianPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const SibiliaFigure = window.SibiliaArcanaFigure;
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 2.5) : 0;

      return (
        <g>
          {/* Haz Vertical de Canalización Astral (Derecha) */}
          <line x1="172" y1="18" x2="172" y2="246" stroke="#6b21a8" strokeWidth="5.5" opacity="0.38" />
          <line x1="172" y1="18" x2="172" y2="246" stroke="#c084fc" strokeWidth="2.4" opacity="0.75" />
          {isUltra && (
            <line
              x1="172"
              y1="18"
              x2="172"
              y2="246"
              stroke="#fef08a"
              strokeWidth="1.5"
              strokeDasharray="8 10"
              strokeDashoffset={dashOffset}
            />
          )}
          <line x1="172" y1="18" x2="172" y2="246" stroke="#ffffff" strokeWidth="0.85" opacity="0.95" />

          {/* Figura Humana Solemne del Mago (Estilo Sibilia) */}
          {SibiliaFigure && <SibiliaFigure cy={136} scale={0.96} quality={quality} crowned={true} />}

          {/* Lemniscata (Infinito) en Doble Filigrana de Oro 3D y Corriente Amatista */}
          <g transform="translate(120, 52)">
            {/* Sombra por Extrusión Vectorial */}
            <path
              d="M0,2 C-14,-12 -34,-10 -34,2 C-34,14 -14,16 0,2 C14,-12 34,-10 34,2 C34,14 14,16 0,2 Z"
              fill="none"
              stroke="#040207"
              strokeWidth="4.6"
              opacity="0.9"
            />
            {/* Halo Vectorial Amatista */}
            <path
              d="M0,0 C-14,-14 -34,-12 -34,0 C-34,12 -14,14 0,0 C14,-14 34,-12 34,0 C34,12 14,14 0,0 Z"
              fill="none"
              stroke="#c084fc"
              strokeWidth="3.8"
              opacity="0.6"
            />
            {/* Cuerpo de Oro Fundido */}
            <path
              d="M0,0 C-14,-14 -34,-12 -34,0 C-34,12 -14,14 0,0 C14,-14 34,-12 34,0 C34,12 14,14 0,0 Z"
              fill="none"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="2.2"
            />
            {/* Corriente Viva en ULTRA */}
            {isUltra && (
              <path
                d="M0,0 C-14,-14 -34,-12 -34,0 C-34,12 -14,14 0,0 C14,-14 34,-12 34,0 C34,12 14,14 0,0 Z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.9"
                strokeDasharray="5 8"
                strokeDashoffset={dashOffset}
              />
            )}
            <circle cx="-21" cy="0" r="2.2" fill="#fff8d7" stroke="#8f4c14" strokeWidth="0.5" />
            <circle cx="21" cy="0" r="2.2" fill="#fff8d7" stroke="#8f4c14" strokeWidth="0.5" />
            {EnergyCore && <EnergyCore cx={0} cy={0} r={5.5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: MANOS ARTICULADAS Y ALTAR CON LAS 4 RELIQUIAS (Z-Foreground)
    const MagicianForeground = memo(function MagicianForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2.2;

      return (
        <g>
          {/* Mano Derecha Elevada al Cielo Empuñando el Cetro ("Como es Arriba") */}
          <g transform={"translate(172, " + (108 + floatY) + ")"}>
            {/* Sombra Vectorial del Cetro */}
            <line x1="1.5" y1="-54" x2="1.5" y2="70" stroke="#030106" strokeWidth="4.2" strokeLinecap="round" />
            <line x1="0" y1="-56" x2="0" y2="68" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />
            <line x1="0" y1="-56" x2="0" y2="68" stroke="#fff9e2" strokeWidth="0.9" />
            <polygon points="0,-68 7,-50 0,-42 -7,-50" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={0} cy={-55} r={7} quality={quality} angle={angle} />}

            {/* Mano Articulada en Oro y Obsidiana */}
            <path d="M-7,14 L5,-2 L10,4 L4,18 L9,28 L-5,30 Z" fill="#030106" />
            <path
              d="M-8,12 L4,-4 L9,2 L3,16 L8,26 L-6,28 Z"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <circle cx="1" cy="15" r="2" fill="#fef08a" />
          </g>

          {/* Mano Izquierda Apuntando hacia el Altar ("Es Abajo") */}
          <g transform={"translate(68, " + (192 - floatY) + ")"}>
            <path d="M-5,-16 L9,-10 L11,8 L4,28 L-1,28 L0,10 L-7,16 L-10,8 Z" fill="#030106" />
            <path
              d="M-6,-18 L8,-12 L10,6 L3,26 L-2,26 L-1,8 L-8,14 L-11,6 Z"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <circle cx="0" cy="-2" r="5" fill="url(#v-astral-core)" />
            <circle cx="0" cy="-2" r="2" fill="#c084fc" />
            <line x1="1" y1="26" x2="1" y2="54" stroke="#fef08a" strokeWidth="1.3" strokeDasharray="2 2" />
          </g>

          {/* Altar Octogonal de Obsidiana y Oro con las 4 Reliquias Elementales */}
          <g transform="translate(120, 266)">
            <polygon points="-78,-11 78,-11 94,13 -94,13" fill="#020105" />
            <polygon points="-76,-14 76,-14 92,10 -92,10" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-86,10 86,10 94,44 -94,44" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1.4" />
            <rect x="-70" y="16" width="140" height="20" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="0,18 10,26 0,34 -10,26" fill="url(#v-gold-3d-face)" />
            <line x1="-56" y1="26" x2="-16" y2="26" stroke="url(#v-gold)" strokeWidth="1" />
            <line x1="16" y1="26" x2="56" y2="26" stroke="url(#v-gold)" strokeWidth="1" />

            {/* 1. Cáliz de Oro y Amatista */}
            <g transform="translate(-52, -18)">
              <path d="M-9,-12 H9 L6,2 Q0,8 -6,2 Z" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.8" />
              <line x1="0" y1="5" x2="0" y2="13" stroke="url(#v-gold)" strokeWidth="2.2" />
              <line x1="-7" y1="13" x2="7" y2="13" stroke="url(#v-gold)" strokeWidth="1.8" />
              <circle cy="-7" r="2.2" fill="#c084fc" />
            </g>

            {/* 2. Daga / Espada Lunar */}
            <g transform="translate(-18, -22)">
              <polygon points="0,-18 4,6 0,12 -4,6" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="0.8" />
              <path d="M-10,6 H10" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="6" x2="0" y2="16" stroke="url(#v-gold-dark)" strokeWidth="2.5" />
            </g>

            {/* 3. Pentáculo Real */}
            <g transform="translate(20, -18)">
              <circle r="11" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
              <polygon points="0,-9 2.5,-2.5 9,-2.5 4,1.5 6,8 0,4 -6,8 -4,1.5 -9,-2.5 -2.5,-2.5" fill="url(#v-gold-3d-face)" />
            </g>

            {/* 4. Vara de Cristal */}
            <g transform="translate(54, -20)">
              <line x1="-4" y1="14" x2="4" y2="-14" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="4" cy="-13" r="6" fill="url(#v-astral-core)" />
              <polygon points="4,-19 8,-11 4,-7 0,-11" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            </g>
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "magician",
      numeral: "I",
      name: "El Mago",
      subtitle: "El Arcanista del Velo",
      archetype: "magician",
      desc: "Figura humana solemne estilo Sibilia. Mano derecha al cielo canalizando la Lemniscata; mano izquierda hacia el Altar con las 4 reliquias.",
      Midground: MagicianMidground,
      Primary: MagicianPrimary,
      Foreground: MagicianForeground
    };

    window.ARCANA_REGISTRY["magician"] = cardDef;
    window.ARCANA_REGISTRY["el_mago"] = cardDef;
    window.ARCANA_REGISTRY["I"] = cardDef;
    window.ARCANA_REGISTRY[1] = cardDef;
  `;

if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();

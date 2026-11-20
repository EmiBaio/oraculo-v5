// ============================================================================
// ARCHIVO: cartas/la_rueda.js
// ARCANO X: LA RUEDA DE LA FORTUNA (El Eje del Destino y el Tetramorfos)
// ============================================================================
// - Cero filtros borrosos: Rueda Alquímica giratoria en tiempo real y Esfinge Coronada.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: LOS CUATRO GUARDIANES ALADOS DEL TETRAMORFOS (Z-Midground)
    const WheelMidground = memo(function WheelMidground() {
      return (
        <g>
          {/* 4 Relicarios Angulares del Tetramorfos (Ángel, Águila, Toro y León) dentro de la ventana */}
          {/* Superior Izquierdo (Acuario / Ángel) */}
          <g transform="translate(46, 68)">
            <polygon points="-20,-14 20,-14 14,16 -14,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M-24,-4 L-12,-14 L-8,4 Z M24,-4 L12,-14 L8,4 Z" fill="url(#v-gold-3d-face)" />
            <circle r="4" fill="#fef08a" />
          </g>
          {/* Superior Derecho (Escorpio / Águila) */}
          <g transform="translate(194, 68)">
            <polygon points="-20,-14 20,-14 14,16 -14,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M-24,-4 L-12,-14 L-8,4 Z M24,-4 L12,-14 L8,4 Z" fill="url(#v-gold-3d-face)" />
            <polygon points="0,-6 5,4 -5,4" fill="#c084fc" />
          </g>
          {/* Inferior Izquierdo (Tauro / Toro Alado) */}
          <g transform="translate(46, 274)">
            <polygon points="-20,-14 20,-14 14,16 -14,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M-10,-6 C-16,-16 -4,-16 0,-8 C4,-16 16,-16 10,-6" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <circle r="4" fill="#fef08a" />
          </g>
          {/* Inferior Derecho (Leo / León Alado) */}
          <g transform="translate(194, 274)">
            <polygon points="-20,-14 20,-14 14,16 -14,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <polygon points="0,-8 8,0 0,8 -8,0" fill="url(#v-gold-3d-face)" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: LA GRAN RUEDA ALQUÍMICA DE OCHO RAYOS EN ROTACIÓN MATEMÁTICA (Z-Primary)
    const WheelPrimary = memo(function WheelPrimary({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const wheelRot = isLow ? "translate(120, 178)" : "translate(120, 178) rotate(" + (angle * 1.4) + ")";
      const spokes = [0, 45, 90, 135, 180, 225, 270, 315];

      return (
        <g>
          {/* Sombra fija de la Rueda */}
          <circle cx="120" cy="182" r="76" fill="none" stroke="#020105" strokeWidth="18" />

          {/* RUEDA DEL DESTINO GIRATORIA */}
          <g transform={wheelRot}>
            {/* Llanta Exterior en Oro 3D y Obsidiana */}
            <circle cx="0" cy="0" r="76" fill="none" stroke="url(#v-gold-dark)" strokeWidth="15" />
            <circle cx="0" cy="0" r="76" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="11" />
            <circle cx="0" cy="0" r="76" fill="none" stroke="url(#v-obsidian-deep)" strokeWidth="7" />

            {/* Anillo Medio de Amatista */}
            <circle cx="0" cy="0" r="46" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />
            <circle cx="0" cy="0" r="32" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.4" />

            {/* 8 Rayos de la Ley Cósmica */}
            {spokes.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <g key={deg}>
                  <line
                    x1="0"
                    y1="0"
                    x2={Math.cos(rad) * 70}
                    y2={Math.sin(rad) * 70}
                    stroke="url(#v-gold-3d-face)"
                    strokeWidth={deg % 90 === 0 ? "3.2" : "1.8"}
                  />
                  <circle
                    cx={Math.cos(rad) * 76}
                    cy={Math.sin(rad) * 76}
                    r={deg % 90 === 0 ? "3.5" : "2"}
                    fill={deg % 90 === 0 ? "#ffffff" : "#fef08a"}
                    stroke="#040207"
                    strokeWidth="0.6"
                  />
                </g>
              );
            })}

            {/* Letras Sagradas T-A-R-O en los 4 Puntos Cardinales de la Llanta */}
            <text x="0" y="-54" textAnchor="middle" fill="#fff9e2" fontSize="9" fontFamily="'Cinzel Decorative', serif" fontWeight="900">T</text>
            <text x="56" y="3" textAnchor="middle" fill="#fff9e2" fontSize="9" fontFamily="'Cinzel Decorative', serif" fontWeight="900">A</text>
            <text x="0" y="61" textAnchor="middle" fill="#fff9e2" fontSize="9" fontFamily="'Cinzel Decorative', serif" fontWeight="900">R</text>
            <text x="-56" y="3" textAnchor="middle" fill="#fff9e2" fontSize="9" fontFamily="'Cinzel Decorative', serif" fontWeight="900">O</text>
          </g>

          {/* Serpiente Tifón Descendiendo por el Flanco Izquierdo y Hermanubis Ascendiendo por el Derecho */}
          <path
            d="M36,128 C22,148 48,172 32,196 C18,216 42,236 34,252"
            fill="none"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <polygon points="34,252 28,242 40,242" fill="#fef08a" />

          <path
            d="M204,248 C218,224 192,198 208,172 C220,150 198,132 204,116"
            fill="none"
            stroke="url(#v-amethyst-bright)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <polygon points="204,112 196,126 212,126" fill="url(#v-gold-3d-face)" />
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LA ESFINGE CORONADA INMÓVIL EN LA CIMA Y EL NÚCLEO AXIAL (Z-Foreground)
    const WheelForeground = memo(function WheelForeground({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Eje Inmóvil Central de la Rueda (El Motor Inmóvil) */}
          {EnergyCore && <EnergyCore cx={120} cy={178} r={11} quality={quality} angle={angle} />}

          {/* LA ESFINGE CORONADA CON LA ESPADA DEL DESTINO EN LA CIMA DE LA RUEDA */}
          <g transform="translate(120, 74)">
            <polygon points="-34,28 -26,-6 0,-26 26,-6 34,28" fill="#020105" transform="translate(0, 3)" />
            {/* Alas Desplegadas de la Esfinge */}
            <path d="M-18,6 L-56,-14 L-44,14 L-22,20 Z M18,6 L56,-14 L44,14 L22,20 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            {/* Tocado Nemes y Cuerpo en Plata Lunar y Oro */}
            <polygon points="-24,24 -20,-8 0,-20 20,-8 24,24" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-12,-10 12,-10 14,8 0,16 -14,8" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <circle cx="-5" cy="-2" r="1.5" fill="#fef08a" />
            <circle cx="5" cy="-2" r="1.5" fill="#fef08a" />
            {/* Corona Real de la Esfinge */}
            <polygon points="-16,-10 -12,-24 0,-16 12,-24 16,-10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.8" />

            {/* Espada de Plata Cruzada en Diagonal sobre las Garras de la Esfinge */}
            <g transform="translate(0, 20) rotate(-16)">
              <polygon points="-42,0 38,-3 48,0 38,3 -42,0" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
              <line x1="-28" y1="-9" x2="-28" y2="9" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="-42" cy="0" r="3" fill="url(#v-gold-3d-face)" />
            </g>
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "wheel",
      numeral: "X",
      name: "La Rueda",
      subtitle: "El Eje del Destino",
      archetype: "wheel",
      desc: "Custodiada por el Tetramorfos, la Rueda alquímica gira eternamente mientras la Esfinge coronada empuña la espada inmóvil en su cima.",
      Midground: WheelMidground,
      Primary: WheelPrimary,
      Foreground: WheelForeground
    };

    window.ARCANA_REGISTRY["wheel"] = cardDef;
    window.ARCANA_REGISTRY["la_rueda"] = cardDef;
    window.ARCANA_REGISTRY["X"] = cardDef;
    window.ARCANA_REGISTRY[10] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
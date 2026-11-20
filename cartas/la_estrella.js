// ============================================================================
// ARCHIVO: cartas/la_estrella.js
// ARCANO XVII: LA ESTRELLA (El Astro de Sirio y las Aguas de la Esperanza)
// ============================================================================
// - Cero filtros borrosos: Gran Estrella de 8 puntas, 7 estrellas menores y 2 Ánforas.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: LA GRAN ESTRELLA DE SIRIO Y LAS 7 ESTRELLAS MENORES (Z-Midground)
    const StarMidground = memo(function StarMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const starRot = isLow ? "translate(120, 68)" : "translate(120, 68) rotate(" + (angle * 0.9) + ")";
      const sevenStars = [
        [52, 86], [42, 124], [70, 46], [120, 28], [170, 46], [198, 124], [188, 86]
      ];

      return (
        <g>
          {/* LA GRAN ESTRELLA OCTOGONAL DE SIRIO EN EL CENIT */}
          <g transform={starRot}>
            <circle cx="0" cy="0" r="54" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="42" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeDasharray="4 3" />
            {/* 8 Puntas Principales en Oro Fundido */}
            <polygon
              points="0,-46 7,-9 46,0 7,9 0,46 -7,9 -46,0 -7,-9"
              fill="url(#v-gold-3d-face)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* 8 Puntas Diagonales en Plata Lunar */}
            <polygon
              points="0,-34 5,-7 34,0 5,7 0,34 -5,7 -34,0 -5,-7"
              fill="url(#v-silver)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="0.8"
              transform="rotate(45)"
            />
            <circle r="7" fill="#ffffff" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
          </g>

          {/* Las 7 Estrellas Sagradas (Los 7 Chakras / Planetas) */}
          {sevenStars.map(([sx, sy], idx) => (
            <g key={idx} transform={"translate(" + sx + ", " + sy + ")"}>
              <polygon points="0,-9 2.2,-2.2 9,0 2.2,2.2 0,9 -2.2,2.2 -9,0 -2.2,-2.2" fill="url(#v-gold-3d-face)" stroke="#020105" strokeWidth="0.4" />
              {isUltra && <polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" fill="#ffffff" transform="rotate(45)" />}
              <circle r="1.5" fill="#ffffff" />
            </g>
          ))}

          {/* Colinas de Amatista y el Árbol del Ibis Sagrado en el Horizonte */}
          <path d="M18,248 Q74,218 128,244 T222,232 V308 H18 Z" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.9" />
          {/* Árbol e Ibis de Thoth a la Derecha */}
          <g transform="translate(188, 212)">
            <path d="M0,26 V-14 M0,-2 L-12,-12 M0,-8 L12,-18" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinecap="round" />
            <polygon points="8,-26 16,-22 10,-16 2,-18" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: LA DONCELLA CELESTIAL DE PLATA LUNAR ARRODILLADA ENTRE TIERRA Y AGUA (Z-Primary)
    const StarPrimary = memo(function StarPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* SILUETA ESCULTÓRICA DE LA DONCELLA ARRODILLADA EN PLATA LUNAR Y CRISTAL */}
          <g transform="translate(120, 152)">
            {/* Cabellera Fluida de Luz Estelar Cayendo sobre los Hombros */}
            <path
              d="M-22,-36 C-48,-18 -54,18 -42,48 C-30,36 -24,18 -18,0 Z M22,-36 C48,-18 54,18 42,48 C30,36 24,18 18,0 Z"
              fill="url(#v-amethyst)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.2"
            />

            {/* Torso y Túnica Etérea de Plata Espejada y Oro */}
            <polygon points="-34,96 -28,-6 0,-18 28,-6 34,96" fill="#020105" transform="translate(0, 4)" />
            <polygon points="-32,94 -26,-6 0,-18 26,-6 32,94" fill="url(#v-obsidian-deep)" stroke="url(#v-silver)" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-22,94 -18,-2 0,8 18,-2 22,94" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" opacity="0.92" />
            <polygon points="0,-6 12,12 0,30 -12,12" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            {EnergyCore && <EnergyCore cx={0} cy={12} r={5} quality={quality} angle={angle} />}

            {/* Rostro Sereno de Plata Lunar y Diadema de Sirio */}
            <g transform="translate(0, -36)">
              <polygon points="-20,-20 20,-20 22,10 12,28 0,36 -12,28 -22,10" fill="#020105" transform="translate(0, 3)" />
              <polygon points="-20,-20 20,-20 22,10 12,28 0,36 -12,28 -22,10" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="0,-10 -4,10 0,15 4,10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.6" />
              <ellipse cx="-10" cy="0" rx="3.8" ry="2" fill="#fef08a" stroke="#1e0836" strokeWidth="0.5" />
              <ellipse cx="10" cy="0" rx="3.8" ry="2" fill="#fef08a" stroke="#1e0836" strokeWidth="0.5" />
              <circle cx="-10" cy="0" r="1.2" fill="#ffffff" />
              <circle cx="10" cy="0" r="1.2" fill="#ffffff" />
              {/* Diadema Estelar */}
              <polygon points="-24,-12 0,-22 24,-12 0,-16" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.8" />
              <polygon points="0,-28 4,-18 0,-12 -4,-18" fill="#ffffff" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LAS DOS ÁNFORAS VERTIENDO LUZ LÍQUIDA Y EL ESTANQUE CÓSMICO (Z-Foreground)
    const StarForeground = memo(function StarForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 2;
      const dashOffset = isUltra ? -(angle * 2.8) : 0;

      return (
        <g>
          {/* ESTANQUE DE AGUAS ASTRALES Y TIERRA FIRME EN LA BASE */}
          <g transform="translate(120, 276)">
            <rect x="-102" y="-16" width="204" height="48" fill="url(#v-obsidian-deep)" />
            {/* Ondas Elípticas del Estanque Cósmico */}
            <ellipse cx="-24" cy="6" rx="64" ry="14" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.2" />
            <ellipse cx="-24" cy="6" rx="44" ry="9" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeDasharray="6 3" />
            <ellipse cx="-24" cy="6" rx="22" ry="4.5" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            {/* Cinco Ríos de Luz Nutriendo la Tierra Firme (Derecha) */}
            <path d="M52,-14 C56,4 42,16 32,28 M56,-14 C64,4 58,18 54,28 M60,-14 C74,4 76,18 76,28" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* ÁNFORA IZQUIERDA (Plata Lunar) VERTIENDO EN EL ESTANQUE DEL INCONSCIENTE */}
          <g transform={"translate(62, " + (196 + floatY) + ")"}>
            {/* Chorro de Luz Líquida */}
            <path d="M-8,12 C-16,38 -12,62 -4,84" fill="none" stroke="url(#v-amethyst-bright)" strokeWidth="6" strokeLinecap="round" />
            <path d="M-8,12 C-16,38 -12,62 -4,84" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="5 8" strokeDashoffset={dashOffset} strokeLinecap="round" />
            {/* Cuerpo del Ánfora inclinada */}
            <g transform="rotate(-48)">
              <polygon points="-8,-18 8,-18 14,0 8,18 -8,18 -14,0" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <rect x="-5" y="-24" width="10" height="6" fill="url(#v-gold-3d-face)" />
            </g>
            {EnergyCore && <EnergyCore cx={-10} cy={14} r={5} quality={quality} angle={angle} />}
          </g>

          {/* ÁNFORA DERECHA (Oro Solar) VERTIENDO SOBRE LA TIERRA FIRME */}
          <g transform={"translate(178, " + (202 - floatY) + ")"}>
            {/* Chorro de Oro Líquido */}
            <path d="M4,12 C10,36 6,58 -2,78" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M4,12 C10,36 6,58 -2,78" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="5 8" strokeDashoffset={dashOffset} strokeLinecap="round" />
            {/* Cuerpo del Ánfora inclinada */}
            <g transform="rotate(44)">
              <polygon points="-8,-18 8,-18 14,0 8,18 -8,18 -14,0" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.4" strokeLinejoin="round" />
              <rect x="-5" y="-24" width="10" height="6" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.9" />
            </g>
            {EnergyCore && <EnergyCore cx={6} cy={14} r={5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "star",
      numeral: "XVII",
      name: "La Estrella",
      subtitle: "El Astro de la Esperanza",
      archetype: "star",
      desc: "Bajo la gran estrella octogonal de Sirio y sus siete hermanas, la doncella vierte las aguas de la vida desde sus ánforas de oro y plata.",
      Midground: StarMidground,
      Primary: StarPrimary,
      Foreground: StarForeground
    };

    window.ARCANA_REGISTRY["star"] = cardDef;
    window.ARCANA_REGISTRY["la_estrella"] = cardDef;
    window.ARCANA_REGISTRY["XVII"] = cardDef;
    window.ARCANA_REGISTRY[17] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
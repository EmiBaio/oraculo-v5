// ============================================================================
// ARCHIVO: cartas/el_sol.js
// ARCANO XIX: EL SOL (El Esplendor de Tiphereth y los Gemelos Solares)
// ============================================================================
// - Cero filtros borrosos: Sol Imperial de 24 rayos, 4 Girasoles y Gemelos Alquímicos.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: CORONA SOLAR ROTATORIA DE 24 RAYOS Y MURO DE ORO (Z-Midground)
    const SunMidground = memo(function SunMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const sunRot = isLow ? "translate(120, 86)" : "translate(120, 86) rotate(" + (angle * 1.1) + ")";
      const rays = Array.from({ length: 24 }, (_, i) => i * 15);

      return (
        <g>
          {/* GRAN RUEDA DE 24 RAYOS SOLARES ALTERNADOS (Dagas de Luz y Llamas Serpenteantes) */}
          <g transform={sunRot}>
            <circle cx="0" cy="0" r="76" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="68" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeDasharray="4 4" />
            {rays.map((deg, idx) => (
              <polygon
                key={deg}
                points={idx % 2 === 0 ? "0,-72 5.5,-36 -5.5,-36" : "0,-62 3.5,-36 -3.5,-36"}
                fill={idx % 2 === 0 ? "url(#v-gold-3d-face)" : "url(#v-gold-dark)"}
                stroke="#040207"
                strokeWidth="0.5"
                transform={"rotate(" + deg + ")"}
              />
            ))}
          </g>

          {/* Muro Sagrado del Jardín Hermético con 4 Girasoles de Oro */}
          <g transform="translate(0, 198)">
            <rect x="22" y="0" width="196" height="110" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <line x1="22" y1="16" x2="218" y2="16" stroke="url(#v-gold)" strokeWidth="1" />
            {/* 4 Girasoles Solares Mirando al Cenit */}
            {[48, 96, 144, 192].map((gx) => (
              <g key={gx} transform={"translate(" + gx + ", -10)"}>
                <line x1="0" y1="0" x2="0" y2="16" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
                <circle r="11" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
                <circle r="6" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.8" />
                <circle r="2" fill="#fef08a" />
              </g>
            ))}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL ROSTRO IMPERIAL DEL SOL CENTRAL (TIPHERETH) (Z-Primary)
    const SunPrimary = memo(function SunPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const yods = [
        [52, 144], [76, 162], [164, 162], [188, 144], [64, 122], [176, 122]
      ];

      return (
        <g>
          {/* ESCULTURA FACETADA DEL ROSTRO SOLAR EN ORO FUNDIDO */}
          <g transform="translate(120, 86)">
            <circle cx="0" cy="3" r="38" fill="#020105" />
            <circle cx="0" cy="0" r="37" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />

            {/* Placas Faciales del Sol en Oro 3D */}
            <polygon points="-24,-14 0,-24 24,-14 26,10 14,24 0,28 -14,24 -26,10" fill="url(#v-gold-3d-face)" stroke="#8f4c14" strokeWidth="1" />
            <polygon points="0,-16 -5,6 0,11 5,6" fill="#ffffff" stroke="#8f4c14" strokeWidth="0.7" />

            {/* Ojos Solares Radiantes */}
            <ellipse cx="-11" cy="-2" rx="4.5" ry="2.5" fill="#1e0836" />
            <ellipse cx="11" cy="-2" rx="4.5" ry="2.5" fill="#1e0836" />
            <circle cx="-11" cy="-2" r="1.6" fill="#ffffff" />
            <circle cx="11" cy="-2" r="1.6" fill="#ffffff" />

            {/* Boca Serena y Tercer Ojo Solar */}
            <path d="M-8,16 Q0,20 8,16" fill="none" stroke="#8f4c14" strokeWidth="1.6" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={-20} r={5} quality={quality} angle={angle} />}
          </g>

          {/* Rocío de Fuego Solar (Yods Dorados) */}
          {isUltra && yods.map(([yx, yy], idx) => (
            <polygon
              key={idx}
              points={yx + "," + (yy - 5) + " " + (yx + 3.5) + "," + yy + " " + yx + "," + (yy + 5) + " " + (yx - 3.5) + "," + yy}
              fill="url(#v-gold-3d-face)"
              stroke="#ffffff"
              strokeWidth="0.4"
            />
          ))}
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LOS GEMELOS ALQUÍMICOS CORONADOS Y EL ESTANDARTE DE LA VICTORIA (Z-Foreground)
    const SunForeground = memo(function SunForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 2;

      return (
        <g transform={"translate(120, " + (244 + floatY) + ")"}>
          {/* Círculo de Flores / Mandala Solar en el Suelo */}
          <ellipse cx="0" cy="48" rx="82" ry="14" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />

          {/* GEMELO IZQUIERDO (Espíritu Solar en Oro) */}
          <g transform="translate(-32, 0)">
            <polygon points="-24,54 -18,-6 0,-16 18,-6 22,54" fill="#020105" transform="translate(1, 3)" />
            <polygon points="-22,54 -16,-6 0,-16 16,-6 20,54" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            <circle cx="0" cy="-30" r="13" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1" />
            <polygon points="-14,-38 -8,-48 0,-40 8,-48 14,-38" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
          </g>

          {/* GEMELO DERECHO (Alma Lunar Iluminada en Plata) */}
          <g transform="translate(32, 0)">
            <polygon points="-22,54 -18,-6 0,-16 18,-6 24,54" fill="#020105" transform="translate(-1, 3)" />
            <polygon points="-20,54 -16,-6 0,-16 16,-6 22,54" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            <circle cx="0" cy="-30" r="13" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <polygon points="-14,-38 -8,-48 0,-40 8,-48 14,-38" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
          </g>

          {/* Estandarte Ondulante de la Victoria Vital y Nudo de Unión Central */}
          <line x1="0" y1="-64" x2="0" y2="54" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
          <path
            d="M0,-62 C26,-70 44,-50 68,-58 L60,-38 C38,-30 22,-48 0,-42 Z"
            fill="url(#v-amethyst-bright)"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="1.3"
          />
          {/* Brazos Unidos en el Centro */}
          <polygon points="-20,2 0,-6 20,2 0,10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" />
          {EnergyCore && <EnergyCore cx={0} cy={2} r={7.5} quality={quality} angle={angle} />}
        </g>
      );
    });

    const cardDef = {
      id: "sun",
      numeral: "XIX",
      name: "El Sol",
      subtitle: "El Esplendor de Tiphereth",
      archetype: "sun",
      desc: "El rostro radiante del Sol de veinticuatro rayos ilumina el jardín hermético de girasoles dorados donde danzan los gemelos alquímicos.",
      Midground: SunMidground,
      Primary: SunPrimary,
      Foreground: SunForeground
    };

    window.ARCANA_REGISTRY["sun"] = cardDef;
    window.ARCANA_REGISTRY["el_sol"] = cardDef;
    window.ARCANA_REGISTRY["XIX"] = cardDef;
    window.ARCANA_REGISTRY[19] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
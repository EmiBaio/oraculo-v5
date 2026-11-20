// ============================================================================
// ARCHIVO: cartas/el_juicio.js
// ARCANO XX: EL JUICIO (El Despertar del Eón y la Trompeta del Arcángel)
// ============================================================================
// - Cero filtros borrosos: Arcángel de 4 Alas, Trompeta con Estandarte y 3 Resucitados.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: VÓRTICE SOLAR Y CUATRO ALAS CATEDRALICIAS (Z-Midground)
    const JudgementMidground = memo(function JudgementMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 82)" : "translate(120, 82) rotate(" + (-angle * 1.1) + ")";

      return (
        <g>
          {/* Rueda Solar del Eón en el Cielo */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="64" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="54" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" strokeDasharray="6 3" />
            <polygon points="0,-60 14,-14 60,0 14,14 0,60 -14,14 -60,0 -14,-14" fill="none" stroke="url(#v-gold)" strokeWidth="0.85" />
          </g>

          {/* GRANDES ALAS DEL ARCÁNGEL GABRIEL DESPLEGADAS DE EXTREMO A EXTREMO */}
          <g transform="translate(120, 96)">
            <path
              d="M-16,-14 C-64,-62 -98,-38 -100,26 C-72,14 -44,12 -18,22 Z M16,-14 C64,-62 98,-38 100,26 C72,14 44,12 18,22 Z"
              fill="#020105"
              transform="translate(0, 4)"
            />
            <path
              d="M-16,-14 C-64,-62 -98,-38 -100,26 C-72,14 -44,12 -18,22 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#040207"
              strokeWidth="1.2"
            />
            <path
              d="M16,-14 C64,-62 98,-38 100,26 C72,14 44,12 18,22 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#040207"
              strokeWidth="1.2"
            />
            <path
              d="M-18,6 C-56,-18 -84,4 -88,48 C-60,36 -36,32 -18,36 Z M18,6 C56,-18 84,4 88,48 C60,36 36,32 18,36 Z"
              fill="url(#v-silver)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.1"
            />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL ARCÁNGEL GABRIEL Y LA GRAN TROMPETA DEL DESPERTAR (Z-Primary)
    const JudgementPrimary = memo(function JudgementPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 3.2) : 0;

      return (
        <g>
          {/* Busto y Rostro Celeste del Arcángel Gabriel */}
          <g transform="translate(120, 92)">
            <polygon points="-38,54 -30,4 0,-8 30,4 38,54" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <polygon points="-24,52 -18,10 0,2 18,10 24,52" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.1" />

            {/* Rostro y Corona Radiante */}
            <polygon points="-20,-24 20,-24 22,6 12,24 0,30 -12,24 -22,6" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <ellipse cx="-9" cy="-4" rx="3.8" ry="2" fill="#1e0836" />
            <ellipse cx="9" cy="-4" rx="3.8" ry="2" fill="#1e0836" />
            <circle cx="-9" cy="-4" r="1.3" fill="#ffffff" />
            <circle cx="9" cy="-4" r="1.3" fill="#ffffff" />
            <polygon points="-26,-18 -20,-38 -8,-26 0,-44 8,-26 20,-38 26,-18" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" />
          </g>

          {/* LA GRAN TROMPETA DE ORO Y EL ESTANDARTE DE LA CRUZ CÓSMICA */}
          <g transform="translate(120, 148)">
            {/* Sombra de la Trompeta */}
            <polygon points="-4,-34 4,-34 16,42 -16,42" fill="#020105" transform="translate(0, 3)" />

            {/* Estandarte Colgante con la Cruz Equilátera de Luz */}
            <g transform="translate(22, -4)">
              <rect x="-18" y="-16" width="36" height="36" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
              <rect x="-4" y="-16" width="8" height="36" fill="url(#v-amethyst-bright)" />
              <rect x="-18" y="-2" width="36" height="8" fill="url(#v-amethyst-bright)" />
            </g>

            {/* Tubo y Campana Cónica de la Trompeta en Oro Fundido */}
            <polygon points="-3.5,-36 3.5,-36 6,24 18,42 -18,42 -6,24" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.2" strokeLinejoin="round" />
            <ellipse cx="0" cy="42" rx="18" ry="5" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />

            {/* Manos del Arcángel Sosteniendo la Trompeta */}
            <polygon points="-12,-18 12,-18 10,-6 -10,-6" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />

            {/* Ondas Sonoras Concéntricas y Rayos Acústicos Descendentes */}
            <ellipse cx="0" cy="54" rx="28" ry="8" fill="none" stroke="#fef08a" strokeWidth="1.4" />
            <ellipse cx="0" cy="68" rx="46" ry="12" fill="none" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="6 4" strokeDashoffset={dashOffset} />
            <ellipse cx="0" cy="84" rx="68" ry="16" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" strokeDasharray="4 4" />
            {EnergyCore && <EnergyCore cx={0} cy={42} r={6.5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: TRES SARCÓFAGOS ABIERTOS Y LAS TRES ALMAS RESUCITADAS (Z-Foreground)
    const JudgementForeground = memo(function JudgementForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const riseY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 2.5;

      return (
        <g transform={"translate(120, " + (266 - riseY) + ")"}>
          {/* Mar del Inconsciente Colectivo y Sarcófagos de Obsidiana */}
          <rect x="-102" y="14" width="204" height="34" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />

          {/* ALMA IZQUIERDA (Principio Masculino Elevando los Brazos) */}
          <g transform="translate(-56, 0)">
            <polygon points="-22,12 22,12 18,32 -18,32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            <polygon points="-14,12 -10,-16 0,-22 10,-16 14,12" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M-10,-12 L-24,-34 M10,-12 L24,-34" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="0" cy="-32" r="9" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" />
          </g>

          {/* ALMA DERECHA (Principio Femenino Elevando los Brazos) */}
          <g transform="translate(56, 0)">
            <polygon points="-22,12 22,12 18,32 -18,32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            <polygon points="-14,12 -10,-16 0,-22 10,-16 14,12" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.2" />
            <path d="M-10,-12 L-24,-34 M10,-12 L24,-34" stroke="url(#v-silver)" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="0" cy="-32" r="9" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
          </g>

          {/* ALMA CENTRAL (El Niño / Espíritu Renacido de Espaldas Mirando al Arcángel) */}
          <g transform="translate(0, -4)">
            <polygon points="-26,16 26,16 20,38 -20,38" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            <polygon points="-16,16 -12,-18 0,-26 12,-18 16,16" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <path d="M-12,-14 L-28,-42 M12,-14 L28,-42" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />
            <circle cx="0" cy="-36" r="11" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={0} cy={-6} r={6} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "judgement",
      numeral: "XX",
      name: "El Juicio",
      subtitle: "El Despertar del Eón",
      archetype: "judgement",
      desc: "El Arcángel Gabriel hace sonar la trompeta dorada con el estandarte de la cruz, despertando de sus sarcófagos a la tríada inmortal del espíritu.",
      Midground: JudgementMidground,
      Primary: JudgementPrimary,
      Foreground: JudgementForeground
    };

    window.ARCANA_REGISTRY["judgement"] = cardDef;
    window.ARCANA_REGISTRY["el_juicio"] = cardDef;
    window.ARCANA_REGISTRY["XX"] = cardDef;
    window.ARCANA_REGISTRY[20] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
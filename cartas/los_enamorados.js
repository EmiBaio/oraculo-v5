// ============================================================================
// ARCHIVO: cartas/los_enamorados.js
// ARCANO VI: LOS ENAMORADOS (La Boda Alquímica del Sol y la Luna)
// ============================================================================
// - Cero filtros borrosos: Serafín de 6 alas, Rey Solar, Reina Lunar y Cáliz de Unión.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: EL SERAFÍN DE SEIS ALAS Y LOS DOS ÁRBOLES SAGRADOS (Z-Midground)
    const LoversMidground = memo(function LoversMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const sunRot = isLow ? "translate(120, 74)" : "translate(120, 74) rotate(" + (angle * 0.95) + ")";

      return (
        <g>
          {/* Sol Cenital del Arcángel Rafael */}
          <g transform={sunRot}>
            <circle cx="0" cy="0" r="68" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="54" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" strokeDasharray="6 3" />
            <polygon points="0,-60 14,-14 60,0 14,14 0,60 -14,14 -60,0 -14,-14" fill="none" stroke="url(#v-gold)" strokeWidth="0.75" opacity="0.75" />
          </g>

          {/* LAS SEIS ALAS GEOMÉTRICAS DEL ARCÁNGEL RAFAEL EN LA CÚPULA */}
          <g transform="translate(120, 82)">
            {/* Par Superior de Alas en Oro 3D */}
            <path d="M-12,-10 C-48,-46 -84,-34 -94,8 C-68,2 -42,4 -16,12 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <path d="M12,-10 C48,-46 84,-34 94,8 C68,2 42,4 16,12 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            {/* Par Medio de Alas en Amatista y Plata */}
            <path d="M-14,4 C-52,-14 -82,8 -88,42 C-60,30 -36,26 -14,24 Z" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <path d="M14,4 C52,-14 82,8 88,42 C60,30 36,26 14,24 Z" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            {/* Rostro y Corona del Serafín */}
            <polygon points="-14,-18 14,-18 16,6 0,20 -16,6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <polygon points="-18,-18 -10,-32 0,-22 10,-32 18,-18" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="-6" cy="-4" r="1.6" fill="#fef08a" />
            <circle cx="6" cy="-4" r="1.6" fill="#fef08a" />
          </g>

          {/* Rayos de Bendición Descendiendo hacia los Amantes */}
          {isUltra && (
            <g stroke="#fef08a" strokeWidth="0.7" strokeDasharray="4 4" opacity="0.75">
              <line x1="120" y1="102" x2="68" y2="176" />
              <line x1="120" y1="102" x2="120" y2="196" />
              <line x1="120" y1="102" x2="172" y2="176" />
            </g>
          )}
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL REY SOLAR Y LA REINA LUNAR ENFRENTADOS EN PERFIL SAGRADO (Z-Primary)
    const LoversPrimary = memo(function LoversPrimary({ quality = "ULTRA" }) {
      return (
        <g>
          {/* FIGURA IZQUIERDA: EL PRINCIPIO SOLAR (Rey Alquímico en Oro y Obsidiana) */}
          <g transform="translate(68, 168)">
            <polygon points="-44,140 -34,16 -4,-10 26,8 18,140" fill="#020105" transform="translate(2, 4)" />
            <polygon points="-42,140 -32,16 -4,-10 24,8 16,140" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-28,140 -18,24 6,8 14,140" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {/* Hombrera Solar */}
            <polygon points="-38,24 -12,4 14,16 -6,34 -34,38" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />

            {/* Cabeza en Perfil Mirando a la Derecha con Corona de Rayos Solares */}
            <g transform="translate(2, -24)">
              <polygon points="-18,-18 12,-20 22,-4 16,18 -2,24 -18,12" fill="#020105" transform="translate(1, 2.5)" />
              <polygon points="-18,-18 12,-20 22,-4 16,18 -2,24 -18,12" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="0,-18 12,-20 22,-4 16,18 2,20" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.8" />
              <polygon points="6,-6 14,-5 12,-1 6,-2" fill="#1e0836" />
              <circle cx="10" cy="-3.5" r="1.4" fill="#ffffff" />
              {/* Corona Solar */}
              <polygon points="-20,-14 -24,-34 -8,-22 0,-38 10,-22 22,-32 14,-14" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1" strokeLinejoin="round" />
            </g>
          </g>

          {/* FIGURA DERECHA: EL PRINCIPIO LUNAR (Reina Alquímica en Plata Lunar y Amatista) */}
          <g transform="translate(172, 168)">
            <polygon points="44,140 34,16 4,-10 -26,8 -18,140" fill="#020105" transform="translate(-2, 4)" />
            <polygon points="42,140 32,16 4,-10 -24,8 -16,140" fill="url(#v-obsidian-deep)" stroke="url(#v-silver)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="28,140 18,24 -6,8 -14,140" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {/* Hombrera de Loto Lunar */}
            <polygon points="38,24 12,4 -14,16 6,34 34,38" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />

            {/* Cabeza en Perfil Mirando a la Izquierda con Diadema Creciente */}
            <g transform="translate(-2, -24)">
              <polygon points="18,-18 -12,-20 -22,-4 -16,18 2,24 18,12" fill="#020105" transform="translate(-1, 2.5)" />
              <polygon points="18,-18 -12,-20 -22,-4 -16,18 2,24 18,12" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="0,-18 -12,-20 -22,-4 -16,18 -2,20" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
              <polygon points="-6,-6 -14,-5 -12,-1 -6,-2" fill="#1e0836" />
              <circle cx="-10" cy="-3.5" r="1.4" fill="#fef08a" />
              {/* Diadema Lunar */}
              <polygon points="20,-14 24,-32 8,-20 0,-36 -10,-20 -22,-30 -14,-14" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1" strokeLinejoin="round" />
              <circle cx="-2" cy="-24" r="3" fill="url(#v-gold-3d-face)" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: MANOS ENTRELAZADAS, CORAZÓN HERMÉTICO Y CADUCEO DE SERPIENTES (Z-Foreground)
    const LoversForeground = memo(function LoversForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2.2;
      const dashOffset = isUltra ? -(angle * 2.2) : 0;

      return (
        <g transform={"translate(120, " + (212 + floatY) + ")"}>
          {/* Anillos Áureos Entrelazados (Símbolo de Alianza Cósmica) */}
          <circle cx="-10" cy="-14" r="24" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />
          <circle cx="10" cy="-14" r="24" fill="none" stroke="url(#v-silver)" strokeWidth="2.4" />
          {isUltra && (
            <circle cx="0" cy="-14" r="34" fill="none" stroke="#c084fc" strokeWidth="0.9" strokeDasharray="5 6" strokeDashoffset={dashOffset} />
          )}

          {/* Corazón / Vasija Alquímica Facetada en el Centro */}
          <polygon points="0,-36 22,-20 16,6 0,26 -16,6 -22,-20" fill="#020105" transform="translate(0, 3)" />
          <polygon points="0,-36 22,-20 16,6 0,26 -16,6 -22,-20" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="0,-30 14,-18 10,2 0,18 -10,2 -14,-18" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1" />

          {/* Dos Serpientes Alquímicas Ascendiendo por el Eje Central */}
          <path d="M0,76 C-22,58 22,40 0,22" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M0,76 C22,58 -22,40 0,22" fill="none" stroke="url(#v-silver)" strokeWidth="2.6" strokeLinecap="round" />

          {/* Mano Derecha Solar y Mano Izquierda Lunar Uniéndose */}
          <polygon points="-38,2 -18,-8 -6,-2 -16,8 -34,12" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1.1" strokeLinejoin="round" />
          <polygon points="38,2 18,-8 6,-2 16,8 34,12" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" strokeLinejoin="round" />

          {EnergyCore && <EnergyCore cx={0} cy={-10} r={8.5} quality={quality} angle={angle} />}
        </g>
      );
    });

    const cardDef = {
      id: "lovers",
      numeral: "VI",
      name: "Los Enamorados",
      subtitle: "La Alquimia de la Unión",
      archetype: "lovers",
      desc: "Bajo las seis alas del Arcángel Rafael, el Rey Solar y la Reina Lunar unen sus manos sobre el corazón alquímico y los anillos entrelazados.",
      Midground: LoversMidground,
      Primary: LoversPrimary,
      Foreground: LoversForeground
    };

    window.ARCANA_REGISTRY["lovers"] = cardDef;
    window.ARCANA_REGISTRY["los_enamorados"] = cardDef;
    window.ARCANA_REGISTRY["VI"] = cardDef;
    window.ARCANA_REGISTRY[6] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
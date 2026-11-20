// ============================================================================
// ARCHIVO: cartas/el_ermitano.js
// ARCANO IX: EL ERMITAÑO (El Guardián de la Lámpara Hermética)
// ============================================================================
// - Cero filtros borrosos: Sabio encapuchado, báculo nudoso de oro y linterna estelar.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: CUMBRES HELADAS Y RELOJ ASTRAL DE SATURNO (Z-Midground)
    const HermitMidground = memo(function HermitMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 112)" : "translate(120, 112) rotate(" + (-angle * 0.7) + ")";

      return (
        <g>
          <g transform={haloRot} opacity="0.65">
            <circle cx="0" cy="0" r="56" fill="none" stroke="url(#v-silver)" strokeWidth="0.9" strokeDasharray="4 4" />
            <polygon points="0,-54 47,27 -47,27" fill="none" stroke="url(#v-silver)" strokeWidth="0.65" />
            <polygon points="0,54 47,-27 -47,-27" fill="none" stroke="url(#v-gold)" strokeWidth="0.65" />
          </g>
          <polygon points="18,308 18,184 58,118 102,208 158,128 222,216 222,308" fill="url(#v-obsidian-deep)" stroke="url(#v-silver)" strokeWidth="0.8" opacity="0.8" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL SABIO ENCAPUCHADO EN TRES CUARTOS Y BARBA DE PLATA (Z-Primary)
    const HermitPrimary = memo(function HermitPrimary() {
      return (
        <g>
          <g transform="translate(104, 138)">
            <polygon points="-58,170 -44,12 -14,-18 26,-14 48,26 62,170" fill="#020105" transform="translate(2, 4)" />
            <polygon points="-56,170 -42,12 -14,-18 24,-14 46,26 60,170" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-34,170 -24,18 6,0 28,24 38,170" fill="url(#v-obsidian)" stroke="url(#v-silver)" strokeWidth="1.1" />
            <g transform="translate(2, -32)">
              <polygon points="-30,22 -24,-22 0,-36 26,-20 30,22 14,32 -14,32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
              <polygon points="-14,-8 14,-8 16,12 0,24 -16,12" fill="url(#v-obsidian-deep)" stroke="url(#v-silver)" strokeWidth="1" />
              <ellipse cx="-6" cy="0" rx="3.5" ry="1.8" fill="#fef08a" />
              <ellipse cx="9" cy="0" rx="3.8" ry="2" fill="#ffffff" />
              <polygon points="-16,12 2,8 18,12 22,54 6,96 -6,74 -18,46" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
            </g>
          </g>

          <g transform="translate(54, 168)">
            <path d="M4,128 L-2,-42 C-4,-68 18,-76 22,-56 C24,-44 10,-42 8,-52" fill="none" stroke="#020105" strokeWidth="5.5" strokeLinecap="round" transform="translate(1.5, 2.5)" />
            <path d="M4,128 L-2,-42 C-4,-68 18,-76 22,-56 C24,-44 10,-42 8,-52" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="3.6" strokeLinecap="round" />
            <polygon points="-10,-6 6,-12 10,2 2,12 -10,10" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LINTERNA HEXAGONAL CON LA ESTRELLA DE SEIS PUNTAS (Z-Foreground)
    const HermitForeground = memo(function HermitForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const swingY = isLow ? 0 : Math.sin((angle * Math.PI) / 40) * 2.2;

      return (
        <g transform={"translate(174, " + (142 + swingY) + ")"}>
          <polygon points="-36,-14 -6,-26 8,-20 2,-8 -28,2" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <line x1="0" y1="-16" x2="0" y2="2" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
          <circle cx="0" cy="26" r="48" fill="url(#v-astral-core)" />
          <g transform="translate(0, 26)">
            <polygon points="-22,-16 0,-32 22,-16" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" />
            <polygon points="-18,-16 18,-16 14,18 -14,18" fill="url(#v-obsidian-deep)" fillOpacity="0.82" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <polygon points="-16,18 16,18 0,30" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="0,-12 10,6 -10,6" fill="none" stroke="#fef08a" strokeWidth="1.2" />
            <polygon points="0,12 10,-6 -10,-6" fill="none" stroke="#ffffff" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={0} cy={0} r={6.5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "hermit",
      numeral: "IX",
      name: "El Ermitaño",
      subtitle: "El Guardián de la Lámpara",
      archetype: "hermit",
      desc: "En la cumbre helada, el sabio de barba plateada alza su linterna hexagonal iluminada por la estrella de seis puntas.",
      Midground: HermitMidground,
      Primary: HermitPrimary,
      Foreground: HermitForeground
    };

    window.ARCANA_REGISTRY["hermit"] = cardDef;
    window.ARCANA_REGISTRY["el_ermitano"] = cardDef;
    window.ARCANA_REGISTRY["IX"] = cardDef;
    window.ARCANA_REGISTRY[9] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
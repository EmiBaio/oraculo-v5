// ============================================================================
// ARCHIVO: cartas/la_templanza.js
// ARCANO XIV: LA TEMPLANZA (La Alquimia de los Dos Cálices)
// ============================================================================
// - Cero filtros borrosos: Arcángel de 24 plumas metálicas, Cáliz Solar y Cáliz Lunar.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: GRANDES ALAS DE ARCÁNGEL Y MANDALA ALQUÍMICO (Z-Midground)
    const TemperanceMidground = memo(function TemperanceMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 102)" : "translate(120, 102) rotate(" + (angle * 0.85) + ")";

      return (
        <g>
          {/* Mandala de la Cuadratura del Círculo */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="62" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" strokeDasharray="5 3" />
            <rect x="-44" y="-44" width="88" height="88" fill="none" stroke="url(#v-silver)" strokeWidth="0.75" />
            <polygon points="0,-56 48,28 -48,28" fill="none" stroke="#c084fc" strokeWidth="0.8" />
          </g>

          {/* ALAS CATEDRALICIAS DESPLEGADAS EN CUCHILLAS DE ORO Y PLATA LUNAR */}
          <g transform="translate(120, 134)">
            {/* Sombra de las Alas */}
            <path d="M-16,-14 C-62,-68 -96,-48 -98,28 C-74,18 -46,16 -20,26 Z M16,-14 C62,-68 96,-48 98,28 C74,18 46,16 20,26 Z" fill="#020105" transform="translate(0, 4)" />
            {/* Ala Izquierda (Oro Solar) */}
            <path d="M-16,-14 C-62,-68 -96,-48 -98,28 C-74,18 -46,16 -20,26 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1.2" />
            <path d="M-20,6 C-58,-28 -86,-8 -90,54 C-64,42 -42,36 -22,42 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            {/* Ala Derecha (Plata Lunar) */}
            <path d="M16,-14 C62,-68 96,-48 98,28 C74,18 46,16 20,26 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M20,6 C58,-28 86,-8 90,54 C64,42 42,36 22,42 Z" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.1" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL ARCÁNGEL ANDRÓGINO CON EL TRIÁNGULO DEL SEPTENARIO (Z-Primary)
    const TemperancePrimary = memo(function TemperancePrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Túnica Bicolor (Mitad Obsidiana/Oro, Mitad Amatista/Plata) */}
          <g>
            <polygon points="44,308 58,150 92,130 120,142 148,130 182,150 196,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="46,308 60,150 92,132 120,144 120,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="120,308 120,144 148,132 180,150 194,308" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.6" strokeLinejoin="round" />

            {/* Emblema del Septenario en el Pecho (Triángulo de Fuego dentro del Cuadrado de Tierra) */}
            <rect x="98" y="154" width="44" height="44" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <polygon points="120,158 138,192 102,192" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" />
            {EnergyCore && <EnergyCore cx={120} cy={178} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* ROSTRO SERENO MITAD SOL / MITAD LUNA Y DIADEMA DEL DISCO SOLAR */}
          <g transform="translate(120, 102)">
            <polygon points="-24,-24 24,-24 26,12 14,36 0,44 -14,36 -26,12" fill="#020105" transform="translate(0, 3)" />
            <polygon points="-24,-24 0,-24 0,44 -14,36 -26,12" fill="url(#v-gold-3d-face)" stroke="url(#v-gold)" strokeWidth="1.2" />
            <polygon points="0,-24 24,-24 26,12 14,36 0,44" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <ellipse cx="-11" cy="0" rx="4" ry="2.1" fill="#1e0836" />
            <ellipse cx="11" cy="0" rx="4" ry="2.1" fill="#1e0836" />
            <circle cx="-11" cy="0" r="1.4" fill="#ffffff" />
            <circle cx="11" cy="0" r="1.4" fill="#fef08a" />

            {/* Diadema con el Disco Solar en la Frente */}
            <rect x="-25" y="-20" width="50" height="6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <circle cx="0" cy="-22" r="11" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1.1" />
            <circle cx="0" cy="-22" r="4" fill="#ffffff" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LOS DOS CÁLICES Y EL FLUJO ALQUÍMICO CONTRAGRAVITATORIO (Z-Foreground)
    const TemperanceForeground = memo(function TemperanceForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 2.2;
      const dashOffset = isUltra ? -(angle * 3) : 0;

      return (
        <g>
          {/* TORRENTE ALQUÍMICO FLUIR ENTRE EL CÁLIZ SUPERIOR (66,154) Y EL INFERIOR (174,234) */}
          <g>
            <path
              d="M68,156 C108,162 112,226 172,232"
              fill="none"
              stroke="#020105"
              strokeWidth="11"
              strokeLinecap="round"
            />
            {/* Cinta de Agua Lunar (Amatista/Plata) */}
            <path
              d="M68,156 C108,162 112,226 172,232"
              fill="none"
              stroke="url(#v-amethyst-bright)"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            {/* Cinta de Fuego Solar (Oro 3D) */}
            <path
              d="M68,156 C96,184 134,198 172,232"
              fill="none"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {isUltra && (
              <path
                d="M68,156 C108,162 112,226 172,232"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeDasharray="6 10"
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            )}
          </g>

          {/* CÁLIZ SUPERIOR IZQUIERDO (Cáliz Solar en Oro Fundido, Inclinado Vertiendo Luz) */}
          <g transform={"translate(64, " + (152 + floatY) + ") rotate(34)"}>
            <path d="M-14,-18 H14 L9,4 Q0,14 -9,4 Z" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" />
            <line x1="0" y1="9" x2="0" y2="24" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" />
            <line x1="-11" y1="24" x2="11" y2="24" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" />
            <polygon points="-14,-4 -4,-10 0,2 -12,6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={4} cy={-14} r={5} quality={quality} angle={angle} />}
          </g>

          {/* CÁLIZ INFERIOR DERECHO (Cáliz Lunar en Plata Espejada, Recibiendo el Flujo) */}
          <g transform={"translate(176, " + (234 - floatY) + ") rotate(-24)"}>
            <path d="M-14,-18 H14 L9,4 Q0,14 -9,4 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <line x1="0" y1="9" x2="0" y2="24" stroke="url(#v-silver)" strokeWidth="3.2" />
            <line x1="-11" y1="24" x2="11" y2="24" stroke="url(#v-gold-3d-face)" strokeWidth="2.6" />
            <polygon points="14,-4 4,-10 0,2 12,6" fill="url(#v-obsidian)" stroke="url(#v-silver)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={-2} cy={-14} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* Lirio / Iris Sagrado y Aguas Primordiales en la Base */}
          <g transform="translate(120, 286)">
            <ellipse rx="76" ry="12" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <polygon points="0,-24 8,-8 20,-14 10,4 -10,4 -20,-14 -8,-8" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.8" />
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "temperance",
      numeral: "XIV",
      name: "La Templanza",
      subtitle: "La Alquimia de los Opuestos",
      archetype: "temperance",
      desc: "El Arcángel solar-lunar transmuta el fluido vital entre el cáliz de oro y el cáliz de plata llevando el fuego dentro del cuadrado en su pecho.",
      Midground: TemperanceMidground,
      Primary: TemperancePrimary,
      Foreground: TemperanceForeground
    };

    window.ARCANA_REGISTRY["temperance"] = cardDef;
    window.ARCANA_REGISTRY["la_templanza"] = cardDef;
    window.ARCANA_REGISTRY["XIV"] = cardDef;
    window.ARCANA_REGISTRY[14] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
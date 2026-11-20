// ============================================================================
// ARCHIVO: cartas/el_carro.js
// ARCANO VII: EL CARRO (El Conquistador del Dosel Estelar)
// ============================================================================
// - Cero filtros borrosos: Auriga con hombreras lunares, carro alado y 2 Esfinges.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: DOSEL ESTRELLADO Y RUEDA SOLAR DE 8 RAYOS (Z-Midground)
    const ChariotMidground = memo(function ChariotMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const wheelRot = isLow ? "translate(120, 114)" : "translate(120, 114) rotate(" + (angle * 1.6) + ")";
      const spokes = [0, 45, 90, 135, 180, 225, 270, 315];

      return (
        <g>
          {/* Dosel Real de Estrellas Sostenido por 4 Lanzas de Oro */}
          <polygon points="28,58 120,24 212,58 198,84 120,62 42,84" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
          <line x1="36" y1="58" x2="36" y2="236" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
          <line x1="204" y1="58" x2="204" y2="236" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />

          {/* Rueda de Fuego del Carro Celestial Detrás del Auriga */}
          <g transform={wheelRot}>
            <circle cx="0" cy="0" r="56" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <circle cx="0" cy="0" r="48" fill="none" stroke="#c084fc" strokeWidth="0.8" strokeDasharray="5 3" />
            {spokes.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={deg}
                  x1="0"
                  y1="0"
                  x2={Math.cos(rad) * 56}
                  y2={Math.sin(rad) * 56}
                  stroke="url(#v-gold)"
                  strokeWidth="1"
                  opacity="0.7"
                />
              );
            })}
          </g>

          {isUltra && (
            <g fill="#fff9e2" opacity="0.85">
              <circle cx="72" cy="52" r="1.4" /><circle cx="120" cy="42" r="1.8" /><circle cx="168" cy="52" r="1.4" />
            </g>
          )}
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL AURIGA CELESTIAL CON HOMBRERAS DE LUNA CRECIENTE (Z-Primary)
    const ChariotPrimary = memo(function ChariotPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Armadura de Placas del Conquistador y Hombreras Lunares (Urim y Thummim) */}
          <g transform="translate(120, 134)">
            <polygon points="-56,78 -44,6 0,-12 44,6 56,78" fill="#020105" transform="translate(0, 3.5)" />
            <polygon points="-54,76 -42,6 0,-12 42,6 54,76" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />

            {/* Hombreras en Forma de Lunas Crecientes con Rostro Místico */}
            <path d="M-34,12 C-58,0 -68,22 -52,40 C-38,48 -24,38 -26,24 C-38,30 -46,20 -34,12 Z" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1" />
            <path d="M34,12 C58,0 68,22 52,40 C38,48 24,38 26,24 C38,30 46,20 34,12 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />

            {/* Coraza con el Cuadrado de la Voluntad y el Triángulo del Espíritu */}
            <rect x="-24" y="10" width="48" height="48" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <polygon points="0,14 20,52 -20,52" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={0} cy={38} r={5.5} quality={quality} angle={angle} />}

            {/* Yelmo de Guerra Coronada por la Estrella de Ocho Puntas */}
            <g transform="translate(0, -34)">
              <polygon points="-24,-18 24,-18 26,16 14,34 0,40 -14,34 -26,16" fill="#020105" transform="translate(0, 3)" />
              <polygon points="-22,-16 22,-16 24,14 12,32 0,38 -12,32 -24,14" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="-18,-2 0,4 18,-2 14,14 0,24 -14,14" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              <polygon points="-14,-5 -4,-2 -6,2 -14,1" fill="#ffffff" />
              <polygon points="14,-5 4,-2 6,2 14,1" fill="#ffffff" />
              {/* Corona de 8 Puntas */}
              <polygon points="-28,-12 -22,-32 -8,-20 0,-42 8,-20 22,-32 28,-12" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" strokeLinejoin="round" />
              <polygon points="0,-38 5,-24 0,-14 -5,-24" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.8" />
            </g>
          </g>

          {/* Lanza/Cetro de la Voluntad en la Mano Derecha */}
          <g transform="translate(174, 134)">
            <line x1="0" y1="-58" x2="0" y2="56" stroke="url(#v-gold-3d-face)" strokeWidth="3" strokeLinecap="round" />
            <polygon points="0,-72 7,-52 0,-46 -7,-52" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <polygon points="-10,12 8,6 10,20 -8,24" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: FRONTIS DEL CARRO ALADO Y LAS DOS ESFINGES DE LA DUALIDAD (Z-Foreground)
    const ChariotForeground = memo(function ChariotForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 2.8) : 0;

      // Sub-componente: Esfinge Egipcia Esculpida con Tocado Nemes
      const SculptedSphinx = ({ side = 1, dark = true }) => (
        <g transform={"scale(" + side + ", 1)"}>
          <polygon points="-28,48 -24,-8 0,-26 24,-8 32,48" fill="#020105" transform="translate(1, 3)" />
          {/* Tocado Nemes Rayado */}
          <polygon
            points="-26,18 -22,-12 0,-26 22,-12 26,18 12,28 -12,28"
            fill={dark ? "url(#v-obsidian)" : "url(#v-silver)"}
            stroke="url(#v-gold-3d-face)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <line x1="-22" y1="-2" x2="-10" y2="-2" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
          <line x1="10" y1="-2" x2="22" y2="-2" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
          <line x1="-24" y1="6" x2="-10" y2="6" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
          <line x1="10" y1="6" x2="24" y2="6" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
          {/* Rostro de la Esfinge */}
          <polygon
            points="-12,-14 12,-14 14,6 0,16 -14,6"
            fill={dark ? "url(#v-gold-3d-face)" : "url(#v-obsidian)"}
            stroke="url(#v-gold)"
            strokeWidth="1"
          />
          <circle cx="-5" cy="-4" r="1.5" fill="#fef08a" />
          <circle cx="5" cy="-4" r="1.5" fill="#fef08a" />
          {/* Pecho y Garras de León sobre el Pedestal */}
          <polygon
            points="-22,18 22,18 28,48 -28,48"
            fill={dark ? "url(#v-obsidian-deep)" : "url(#v-amethyst)"}
            stroke="url(#v-gold-3d-face)"
            strokeWidth="1.4"
          />
          <rect x="-20" y="38" width="12" height="10" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
          <rect x="8" y="38" width="12" height="10" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
        </g>
      );

      return (
        <g>
          {/* Riendas de Luz Astral Pura Conectando al Auriga con las Esfinges */}
          <line x1="120" y1="184" x2="56" y2="244" stroke="#c084fc" strokeWidth="1.8" strokeDasharray="4 4" strokeDashoffset={dashOffset} />
          <line x1="120" y1="184" x2="184" y2="244" stroke="#fef08a" strokeWidth="1.8" strokeDasharray="4 4" strokeDashoffset={dashOffset} />

          {/* FRONTIS ACORAZADO DEL CARRO CON EL DISCO SOLAR ALADO */}
          <g transform="translate(120, 218)">
            <polygon points="-58,-18 58,-18 48,48 -48,48" fill="#020105" transform="translate(0, 4)" />
            <polygon points="-56,-18 56,-18 46,46 -46,46" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2" strokeLinejoin="round" />
            {/* Alas del Disco Solar */}
            <path d="M-52,-6 L-12,-6 L-18,8 L-46,8 Z M52,-6 L12,-6 L18,8 L46,8 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <path d="M-46,8 L-16,8 L-22,18 L-40,18 Z M46,8 L16,8 L22,18 L40,18 Z" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="0.8" />
            {/* Escudo Central del Carro */}
            <polygon points="0,-16 18,12 0,40 -18,12" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            {EnergyCore && <EnergyCore cx={0} cy={12} r={6.5} quality={quality} angle={angle} />}
          </g>

          {/* LAS DOS ESFINGES GUARDIANAS EN PRIMER PLANO (Severidad y Misericordia) */}
          <g transform="translate(56, 260)"><SculptedSphinx side={1} dark={true} /></g>
          <g transform="translate(184, 260)"><SculptedSphinx side={-1} dark={false} /></g>
        </g>
      );
    });

    const cardDef = {
      id: "chariot",
      numeral: "VII",
      name: "El Carro",
      subtitle: "El Conquistador Astral",
      archetype: "chariot",
      desc: "Bajo el dosel estrellado, el Auriga con hombreras lunares gobierna sin riendas físicas el carro alado tirado por las dos Esfinges.",
      Midground: ChariotMidground,
      Primary: ChariotPrimary,
      Foreground: ChariotForeground
    };

    window.ARCANA_REGISTRY["chariot"] = cardDef;
    window.ARCANA_REGISTRY["el_carro"] = cardDef;
    window.ARCANA_REGISTRY["VII"] = cardDef;
    window.ARCANA_REGISTRY[7] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
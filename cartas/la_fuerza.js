// ============================================================================
// ARCHIVO: cartas/la_fuerza.js
// ARCANO VIII: LA FUERZA (El Dominio del León Solar)
// ============================================================================
// - Cero filtros borrosos: Doncella coronada con Lemniscata y León Solar de 24 cuchillas.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: SOL DE LEO Y ARCO DE VITALIDAD INFINITA (Z-Midground)
    const StrengthMidground = memo(function StrengthMidground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const sunRot = isLow ? "translate(120, 96)" : "translate(120, 96) rotate(" + (angle * 0.85) + ")";
      const rays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

      return (
        <g>
          {/* Arco Catedralicio Interior */}
          <path d="M34,308 V96 Q34,36 120,26 Q206,36 206,96 V308" fill="none" stroke="url(#v-gold)" strokeWidth="0.9" strokeDasharray="5 3" opacity="0.7" />

          {/* Rueda Solar de Leo */}
          <g transform={sunRot}>
            <circle cx="0" cy="0" r="58" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <circle cx="0" cy="0" r="46" fill="none" stroke="#c084fc" strokeWidth="0.7" strokeDasharray="3 3" />
            {rays.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <polygon
                  key={deg}
                  points="0,-58 3,-48 -3,-48"
                  fill="url(#v-gold-3d-face)"
                  transform={"rotate(" + deg + ")"}
                />
              );
            })}
          </g>

          {/* Montañas de Amatista en la Lejanía */}
          <polygon points="18,308 68,204 120,256 176,196 222,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.7" opacity="0.7" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: LA INICIADA SERENA BAJO LA LEMNISCATA VIVIENTE (Z-Primary)
    const StrengthPrimary = memo(function StrengthPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 2.4) : 0;

      return (
        <g>
          {/* Lemniscata (Infinito) Flotando sobre la Coronilla */}
          <g transform="translate(120, 48)">
            <path
              d="M0,2 C-15,-12 -36,-10 -36,2 C-36,14 -15,16 0,2 C15,-12 36,-10 36,2 C36,14 15,16 0,2 Z"
              fill="none"
              stroke="#020105"
              strokeWidth="4.8"
            />
            <path
              d="M0,0 C-15,-14 -36,-12 -36,0 C-36,12 -15,14 0,0 C15,-14 36,-12 36,0 C36,12 15,14 0,0 Z"
              fill="none"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="2.6"
            />
            {isUltra && (
              <path
                d="M0,0 C-15,-14 -36,-12 -36,0 C-36,12 -15,14 0,0 C15,-14 36,-12 36,0 C36,12 15,14 0,0 Z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="5 10"
                strokeDashoffset={dashOffset}
              />
            )}
            {EnergyCore && <EnergyCore cx={0} cy={0} r={5} quality={quality} angle={angle} />}
          </g>

          {/* Túnica de Plata Lunar, Amatista y Oro de la Doncella */}
          <g transform="translate(120, 118)">
            <polygon points="-52,190 -38,24 0,8 38,24 52,190" fill="#020105" transform="translate(0, 4)" />
            <polygon points="-50,190 -36,24 0,8 36,24 50,190" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-32,190 -22,28 0,18 22,28 32,190" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" opacity="0.92" />

            {/* Rostro Inclinado con Dulzura y Corona de Rosas de Oro */}
            <g transform="translate(0, -18)">
              <polygon points="-22,-22 22,-22 24,12 12,32 0,40 -12,32 -24,12" fill="#020105" transform="translate(0, 3)" />
              <polygon points="-22,-22 22,-22 24,12 12,32 0,40 -12,32 -24,12" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="0,-12 -4,10 0,16 4,10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.6" />
              {/* Ojos Mirando hacia Abajo (Hacia el León) */}
              <path d="M-15,0 Q-10,5 -5,0 M5,0 Q10,5 15,0" fill="none" stroke="#1e0836" strokeWidth="1.8" strokeLinecap="round" />
              {/* Guirnalda de Rosas Geométricas en la Frente */}
              <polygon points="-26,-14 -12,-24 0,-18 12,-24 26,-14 14,-8 0,-12 -14,-8" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              <polygon points="0,-24 6,-16 0,-8 -6,-16" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
              <circle cx="-14" cy="-15" r="2.5" fill="#c084fc" />
              <circle cx="14" cy="-15" r="2.5" fill="#c084fc" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: EL GRAN LEÓN SOLAR ESCULPIDO Y LAS MANOS DE LA DONCELLA (Z-Foreground)
    const StrengthForeground = memo(function StrengthForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const breatheY = isLow ? 0 : Math.sin((angle * Math.PI) / 40) * 1.8;
      const maneAngles = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340];

      return (
        <g transform={"translate(120, " + (218 + breatheY) + ")"}>
          {/* Cadena de Rosas de Oro en Forma de Infinito (Sujeción Espiritual) */}
          <path
            d="M-64,14 C-42,-28 -12,-28 0,0 C12,28 42,28 64,-14"
            fill="none"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="2.4"
            strokeDasharray="6 3"
          />

          {/* ESCULTURA POLIÉDRICA DEL LEÓN SOLAR EN ORO FUNDIDO Y BRONCE */}
          <g transform="translate(0, 6)">
            {/* Sombra de la Melena */}
            <circle cx="0" cy="4" r="52" fill="#020105" />

            {/* Corona de 18 Cuchillas/Llamas Solares de la Melena */}
            {maneAngles.map((deg, idx) => (
              <polygon
                key={deg}
                points="0,-54 9,-32 -9,-32"
                fill={idx % 2 === 0 ? "url(#v-gold-3d-face)" : "url(#v-gold-dark)"}
                stroke="#040207"
                strokeWidth="0.7"
                transform={"rotate(" + deg + ")"}
              />
            ))}

            {/* Cráneo y Pómulos Facetados del León */}
            <polygon points="-32,-26 32,-26 38,4 24,32 0,42 -24,32 -38,4" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-24,-20 24,-20 28,2 14,20 -14,20 -28,2" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />

            {/* Puente Nasal y Frente Real del León */}
            <polygon points="-10,-22 10,-22 6,6 0,12 -6,6" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />

            {/* Ojos Fieros de Fuego Astral */}
            <polygon points="-22,-6 -8,-2 -10,4 -20,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="22,-6 8,-2 10,4 20,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />

            {/* Fauces Entreabiertas y Colmillos de Plata */}
            <polygon points="-16,14 16,14 12,32 0,38 -12,32" fill="#040207" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <polygon points="-11,14 -7,24 -4,14 M11,14 7,24 4,14" fill="url(#v-silver)" />
            {EnergyCore && <EnergyCore cx={0} cy={24} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* MANOS DELICADAS DE PLATA Y ORO ACARICIANDO Y DOMANDO LAS FAUCES DEL LEÓN */}
          {/* Mano Superior sobre el Hocico del León */}
          <polygon points="-28,-8 -8,-16 8,-16 28,-8 14,0 -14,0" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
          {/* Mano Inferior bajo la Quijada del León */}
          <polygon points="-24,42 -8,36 8,36 24,42 12,50 -12,50" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
        </g>
      );
    });

    const cardDef = {
      id: "strength",
      numeral: "VIII",
      name: "La Fuerza",
      subtitle: "El Dominio del Espíritu",
      archetype: "strength",
      desc: "Bajo el signo del infinito, la doncella coronada de rosas doma con serenidad absoluta las fauces del gran León Solar de veinticuatro llamas.",
      Midground: StrengthMidground,
      Primary: StrengthPrimary,
      Foreground: StrengthForeground
    };

    window.ARCANA_REGISTRY["strength"] = cardDef;
    window.ARCANA_REGISTRY["la_fuerza"] = cardDef;
    window.ARCANA_REGISTRY["VIII"] = cardDef;
    window.ARCANA_REGISTRY[8] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
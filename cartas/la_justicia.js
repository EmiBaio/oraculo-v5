// ============================================================================
// ARCHIVO: cartas/la_justicia.js
// ARCANO XI: LA JUSTICIA (La Jueza Imparcial de Ma'at)
// ============================================================================
// - Cero filtros borrosos: Jueza con venda de oro fundido, Espada vertical y Balanza.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: PILARES DEL JUICIO Y ASTROLABIO DE EQUILIBRIO (Z-Midground)
    const JusticeMidground = memo(function JusticeMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 102)" : "translate(120, 102) rotate(" + (angle * 0.75) + ")";
      const axes = [0, 30, 60, 90, 120, 150];

      return (
        <g>
          {/* Dos Pilares Monolíticos del Tribunal Cósmico y Travesaño de Ley */}
          <rect x="30" y="42" width="20" height="266" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <rect x="190" y="42" width="20" height="266" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <rect x="24" y="36" width="192" height="10" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <path d="M50,308 V86 H190 V308" fill="url(#v-amethyst)" fillOpacity="0.32" stroke="url(#v-gold)" strokeWidth="0.9" />

          {/* Astrolabio de Equilibrio Simétrico (12 Ejes de Libra) */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="60" fill="none" stroke="#020105" strokeWidth="2" />
            <circle cx="0" cy="0" r="60" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="50" fill="none" stroke="url(#v-silver)" strokeWidth="0.7" strokeDasharray="4 3" />
            <polygon points="0,-58 58,0 0,58 -58,0" fill="none" stroke="url(#v-gold)" strokeWidth="0.9" />
            <rect x="-41" y="-41" width="82" height="82" fill="none" stroke="#c084fc" strokeWidth="0.75" />
            {isUltra && axes.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={deg}
                  x1={Math.cos(rad) * -58}
                  y1={Math.sin(rad) * -58}
                  x2={Math.cos(rad) * 58}
                  y2={Math.sin(rad) * 58}
                  stroke="#ffe074"
                  strokeWidth="0.4"
                  opacity="0.55"
                />
              );
            })}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: LA JUEZA CORONADA CON LA VENDA DE ORO Y LA PLUMA DE MA'AT (Z-Primary)
    const JusticePrimary = memo(function JusticePrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Túnica Acorazada perfectamente Simétrica en Obsidiana, Amatista y Plata */}
          <g>
            <polygon points="38,308 52,154 88,132 120,144 152,132 188,154 202,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="40,308 54,156 88,134 120,146 152,134 186,156 200,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.9" strokeLinejoin="round" />

            {/* Hombreras de Placas de Plata Lunar y Oro */}
            <polygon points="36,176 52,146 92,134 100,154 54,184" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="204,176 188,146 148,134 140,154 186,184" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Pectoral del Equilibrio (El Círculo dentro del Cuadrado) */}
            <polygon points="84,308 94,152 120,164 146,152 156,308" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <rect x="100" y="158" width="40" height="40" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <circle cx="120" cy="178" r="15" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.3" />
            {EnergyCore && <EnergyCore cx={120} cy={178} r={6} quality={quality} angle={angle} />}
          </g>

          {/* ROSTRO EN PLATA LUNAR CON VENDA DE ORO FUNDIDO Y CORONA CON LA PLUMA DE MA'AT */}
          <g transform="translate(120, 102)">
            <polygon points="-26,-26 26,-26 28,14 16,38 0,46 -16,38 -28,14" fill="#020105" transform="translate(0, 3.5)" />
            <polygon points="-24,-24 24,-24 26,12 14,36 0,44 -14,36 -26,12" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="0,-10 -5,14 0,20 5,14" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />
            <path d="M-8,26 Q0,29 8,26" fill="none" stroke="#1e0836" strokeWidth="1.6" strokeLinecap="round" />

            {/* VENDA DE ORO FUNDIDO SOBRE LOS OJOS (Imparcialidad Absoluta) */}
            <polygon points="-28,-8 0,-12 28,-8 26,6 0,2 -26,6" fill="#020105" transform="translate(0, 2)" />
            <polygon points="-28,-8 0,-12 28,-8 26,6 0,2 -26,6" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" strokeLinejoin="round" />
            <line x1="-22" y1="-3" x2="22" y2="-3" stroke="#8f4c14" strokeWidth="0.8" strokeDasharray="3 2" />
            <polygon points="0,-9 5,-3 0,3 -5,-3" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.7" />

            {/* CORONA DE TORRES Y LA PLUMA VERTICAL DE LA VERDAD (MA'AT) */}
            <g transform="translate(0, -22)">
              <polygon points="-30,4 -28,-20 -12,-12 0,-26 12,-12 28,-20 30,4" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.2" strokeLinejoin="round" />
              <rect x="-26" y="-2" width="52" height="6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
              {/* Pluma de Avestruz Sagrada de Ma'at en Plata y Oro */}
              <path d="M0,-6 L-7,-34 Q0,-48 7,-34 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
              <line x1="0" y1="-6" x2="0" y2="-42" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: GRAN ESPADA VERTICAL DE PLATA Y BALANZA DE MA'AT (Z-Foreground)
    const JusticeForeground = memo(function JusticeForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const tilt = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 3.2;

      return (
        <g>
          {/* MANO DERECHA (Izquierda del espectador): ESPADA VERTICAL DE DOBLE FILO */}
          <g transform="translate(56, 168)">
            {/* Sombra de la Espada */}
            <polygon points="0,-132 8,-108 6,24 -6,24 -8,-108" fill="#020105" transform="translate(2, 3)" />
            {/* Hoja de Plata Lunar Espejada con Nervadura Central de Oro */}
            <polygon points="0,-134 7,-110 5,22 0,28 -5,22 -7,-110" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeLinejoin="round" />
            <polygon points="0,-134 5,-110 3,22 0,26" fill="#ffffff" opacity="0.65" />
            <line x1="0" y1="-126" x2="0" y2="22" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />

            {/* Guarda Cruciforme Recta (Símbolo de Rigor) y Pomo */}
            <polygon points="-26,22 0,17 26,22 22,29 0,26 -22,29" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1" />
            <rect x="-3.5" y="26" width="7" height="28" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <polygon points="0,52 9,60 0,68 -9,60" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.9" />
            {EnergyCore && <EnergyCore cx={0} cy={22} r={5} quality={quality} angle={angle} />}

            {/* Guantelete Articulado Empuñando la Empuñadura */}
            <polygon points="-11,30 9,28 12,46 -10,48" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <rect x="-7" y="31" width="14" height="4.5" rx="1" fill="url(#v-gold-3d-face)" />
            <rect x="-7" y="37" width="14" height="4.5" rx="1" fill="url(#v-silver)" />
          </g>

          {/* MANO IZQUIERDA (Derecha del espectador): LA BALANZA DEL JUICIO DEL ALMA */}
          <g transform="translate(178, 174)">
            {/* Columna Central y Mano Sosteniendo el Fiel de la Balanza */}
            <line x1="0" y1="-28" x2="0" y2="36" stroke="url(#v-gold-3d-face)" strokeWidth="3" strokeLinecap="round" />
            <polygon points="0,-38 5,-24 -5,-24" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />
            <polygon points="-10,-2 8,-6 12,8 -8,12" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />

            {/* Brazo Oscilante de la Balanza con Platillos (Corazón vs Pluma) */}
            <g transform={"translate(0, -24) rotate(" + tilt + ")"}>
              <polygon points="-34,0 0,-5 34,0 0,4" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.9" />
              {EnergyCore && <EnergyCore cx={0} cy={0} r={4.5} quality={quality} angle={angle} />}

              {/* Platillo Izquierdo: El Corazón / Gema Amatista */}
              <g transform={"translate(-30, 0) rotate(" + (-tilt) + ")"}>
                <line x1="0" y1="0" x2="-11" y2="34" stroke="url(#v-gold)" strokeWidth="0.9" />
                <line x1="0" y1="0" x2="11" y2="34" stroke="url(#v-gold)" strokeWidth="0.9" />
                <polygon points="0,18 7,25 0,33 -7,25" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
                <path d="M-15,34 H15 L10,42 H-10 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              </g>

              {/* Platillo Derecho: La Pluma de la Verdad */}
              <g transform={"translate(30, 0) rotate(" + (-tilt) + ")"}>
                <line x1="0" y1="0" x2="-11" y2="34" stroke="url(#v-gold)" strokeWidth="0.9" />
                <line x1="0" y1="0" x2="11" y2="34" stroke="url(#v-gold)" strokeWidth="0.9" />
                <path d="M0,33 L-4,16 Q0,10 4,16 Z" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" />
                <path d="M-15,34 H15 L10,42 H-10 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
              </g>
            </g>
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "justice",
      numeral: "XI",
      name: "La Justicia",
      subtitle: "El Equilibrio de Ma'at",
      archetype: "justice",
      desc: "Con venda de oro fundido y coronada por la pluma de Ma'at, empuña la espada vertical del rigor y la balanza que pesa el corazón y la verdad.",
      Midground: JusticeMidground,
      Primary: JusticePrimary,
      Foreground: JusticeForeground
    };

    window.ARCANA_REGISTRY["justice"] = cardDef;
    window.ARCANA_REGISTRY["la_justicia"] = cardDef;
    window.ARCANA_REGISTRY["XI"] = cardDef;
    window.ARCANA_REGISTRY[11] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
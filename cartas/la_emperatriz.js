// ============================================================================
// ARCHIVO: cartas/la_emperatriz.js
// ARCANO III: LA EMPERATRIZ (La Madre de la Creación)
// ============================================================================
// - Cero filtros borrosos: Halo de 12 estrellas y escudo de Venus en relieve 3D.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: DOSEL DE VENUS Y ZODIACO DE 12 ESTRELLAS DE 8 PUNTAS (Z-Midground)
    const EmpressMidground = memo(function EmpressMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 102)" : "translate(120, 102) rotate(" + (angle * 0.85) + ")";
      const starAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

      return (
        <g>
          {/* Respaldo del Trono de Terciopelo Amatista y Arcos Góticos de Venus */}
          <polygon points="36,308 50,126 120,66 190,126 204,308" fill="#020105" transform="translate(0, 3)" />
          <polygon points="38,308 52,126 120,68 188,126 202,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Capitular Acolchado en Rombos Imperiales (Tufted Throne Backrest) */}
          <polygon points="52,308 64,134 120,84 176,134 188,308" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1" opacity="0.85" />
          <g stroke="url(#v-gold)" strokeWidth="0.55" opacity="0.55">
            <line x1="64" y1="134" x2="176" y2="246" /><line x1="176" y1="134" x2="64" y2="246" />
            <line x1="88" y1="112" x2="182" y2="206" /><line x1="152" y1="112" x2="58" y2="206" />
          </g>

          {/* Gran Corona Orbital de las 12 Estrellas del Zodiaco */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="64" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.9" strokeDasharray="3 4" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="#c084fc" strokeWidth="0.65" opacity="0.75" />
            {starAngles.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const sx = Math.cos(rad) * 64;
              const sy = Math.sin(rad) * 64;
              return (
                <g key={deg} transform={"translate(" + sx + ", " + sy + ")"}>
                  <polygon points="0,-6.5 1.8,-1.8 6.5,0 1.8,1.8 0,6.5 -1.8,1.8 -6.5,0 -1.8,-1.8" fill="url(#v-gold-3d-face)" stroke="#020105" strokeWidth="0.45" />
                  {isUltra && <polygon points="0,-4.5 1.2,-1.2 4.5,0 1.2,1.2 0,4.5 -1.2,1.2 -4.5,0 -1.2,-1.2" fill="#fef08a" transform="rotate(45)" />}
                  <circle r="1.3" fill="#ffffff" />
                </g>
              );
            })}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: LA SOBERANA CORONADA CON LAUREL DE ORO, CABELLERA FLUIDA Y COLLAR PLANETARIO (Z-Primary)
    const EmpressPrimary = memo(function EmpressPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* Vestimenta Imperial en Capas de Oro, Amatista y Plata con Alas/Hombreras de Loto */}
          <g>
            <polygon points="40,308 54,166 88,142 120,154 152,142 186,166 200,308" fill="#020105" transform="translate(0, 4)" />
            <polygon points="42,308 56,166 88,144 120,156 152,144 184,166 198,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />

            {/* Hombreras Esculpidas en Forma de Pétalos de Rosa / Loto Abierto */}
            <path d="M44,176 C54,142 82,134 104,154 C84,166 64,176 44,176 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1.1" />
            <path d="M196,176 C186,142 158,134 136,154 C156,166 176,176 196,176 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1.1" />
            <path d="M52,188 C64,158 88,150 112,166 C92,178 72,188 52,188 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <path d="M188,188 C176,158 152,150 128,166 C148,178 168,188 188,188 Z" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />

            {/* Panel Central del Vestido Bordado con Enredaderas de Oro */}
            <polygon points="82,308 94,164 120,176 146,164 158,308" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <path d="M120,176 V296 M120,196 C104,190 100,208 112,214 M120,218 C136,212 140,230 128,236" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />

            {/* Collar de las 7 Esferas Planetarias con Joya Central de Venus */}
            <path d="M88,150 Q120,174 152,150" fill="none" stroke="url(#v-gold)" strokeWidth="1.2" />
            <g fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="0.8">
              <circle cx="92" cy="153" r="3" />
              <circle cx="101" cy="158" r="3.4" />
              <circle cx="110" cy="161" r="3.8" />
              <circle cx="120" cy="163" r="4.8" fill="url(#v-gold-3d-face)" />
              <circle cx="130" cy="161" r="3.8" />
              <circle cx="139" cy="158" r="3.4" />
              <circle cx="148" cy="153" r="3" />
            </g>
            {EnergyCore && <EnergyCore cx={120} cy={182} r={6} quality={quality} angle={angle} />}
          </g>

          {/* CABELLERA ESCULPIDA EN ONDAS DE ORO, ROSTRO SERENO Y TIARA DE LAUREL */}
          <g transform="translate(120, 104)">
            {/* Cabellera Simétrica en Ondas Metálicas que Caen sobre los Hombros */}
            <path
              d="M-28,-18 C-48,-6 -52,24 -40,46 C-34,56 -22,52 -18,40 Z M28,-18 C48,-6 52,24 40,46 C34,56 22,52 18,40 Z"
              fill="url(#v-gold-dark)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.4"
            />
            <path
              d="M-24,-10 C-38,2 -40,24 -30,42 M24,-10 C38,2 40,24 30,42"
              fill="none"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.2"
            />

            {/* Rostro Esculpido en Oro Champagne y Amatista */}
            <polygon points="-24,-24 24,-24 26,12 15,36 0,44 -15,36 -26,12" fill="#020105" transform="translate(0, 3)" />
            <polygon points="-24,-24 24,-24 26,12 15,36 0,44 -15,36 -26,12" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="-24,-6 -6,-16 0,12 -14,34 -25,12" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="24,-6 6,-16 0,12 14,34 25,12" fill="#1b0c2e" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="0,-14 -5,12 0,18 5,12" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.7" />

            {/* Ojos Luminosos y Corona de Laurel Imperial */}
            <ellipse cx="-12" cy="0" rx="4.2" ry="2.3" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <ellipse cx="12" cy="0" rx="4.2" ry="2.3" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <circle cx="-12" cy="0" r="1.2" fill="#ffffff" />
            <circle cx="12" cy="0" r="1.2" fill="#ffffff" />

            {/* Corona de Hojas de Laurel Facetadas y Diadema Estelar */}
            <g transform="translate(0, -20)">
              <polygon points="-32,6 -24,-16 -10,-6 0,-28 10,-6 24,-16 32,6 16,12 0,4 -16,12" fill="#020105" transform="translate(0, 2)" />
              <polygon points="-32,6 -24,-16 -10,-6 0,-28 10,-6 24,-16 32,6 16,12 0,4 -16,12" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.1" strokeLinejoin="round" />
              {/* Hojas de Laurel Laterales */}
              <polygon points="-36,2 -26,-8 -22,2 -30,8" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.6" />
              <polygon points="36,2 26,-8 22,2 30,8" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.6" />
              <polygon points="0,-24 6,-10 0,0 -6,-10" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.8" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: CETRO DE VENUS, GRAN ESCUDO CORDIFORME Y JARDÍN ALQUÍMICO (Z-Foreground)
    const EmpressForeground = memo(function EmpressForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;

      return (
        <g>
          {/* MANO DERECHA SOSTENIENDO EL CETRO DE LA CREACIÓN (Loto + Símbolo de Venus) */}
          <g transform={"translate(172, " + (154 + floatY) + ")"}>
            <line x1="2" y1="-44" x2="-10" y2="96" stroke="#020105" strokeWidth="5" strokeLinecap="round" transform="translate(1, 2)" />
            <line x1="2" y1="-44" x2="-10" y2="96" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />
            {/* Cáliz de Loto en la Cima del Cetro */}
            <polygon points="-12,-44 2,-34 16,-44 8,-54 -4,-54" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
            {/* Anillo de Venus Coronando el Cetro */}
            <circle cx="2" cy="-64" r="13" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            <path d="M-11,-64 H15 M2,-77 V-51" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            {EnergyCore && <EnergyCore cx={2} cy={-64} r={6} quality={quality} angle={angle} />}
            {/* Mano Articulada con Dedos Elegantes */}
            <polygon points="-10,6 6,-4 12,4 4,18 -8,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
            <circle cx="0" cy="7" r="2" fill="#fef08a" />
          </g>

          {/* GRAN ESCUDO IMPERIAL EN FORMA DE CORAZÓN CON EL SELLO DE VENUS EN RELIEVE 3D */}
          <g transform="translate(72, 244)">
            {/* Sombra del Escudo */}
            <path
              d="M0,-28 C26,-44 50,-14 0,38 C-50,-14 -26,-44 0,-28 Z"
              fill="#020105"
              transform="translate(2, 4)"
            />
            {/* Borde Exterior Biselado en Oro Fundido */}
            <path
              d="M0,-28 C26,-44 50,-14 0,38 C-50,-14 -26,-44 0,-28 Z"
              fill="url(#v-gold-dark)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* Campo Interior de Amatista Facetada */}
            <path
              d="M0,-22 C20,-35 39,-10 0,29 C-39,-10 -20,-35 0,-22 Z"
              fill="url(#v-amethyst)"
              stroke="url(#v-gold)"
              strokeWidth="1.1"
            />
            {/* Símbolo de Venus Esculpido en el Centro del Escudo */}
            <circle cx="0" cy="-7" r="10" fill="none" stroke="#020105" strokeWidth="4" transform="translate(0, 1.5)" />
            <path d="M0,3 V21 M-8,12 H8" stroke="#020105" strokeWidth="4" strokeLinecap="round" transform="translate(0, 1.5)" />
            <circle cx="0" cy="-7" r="10" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" />
            <path d="M0,3 V21 M-8,12 H8" stroke="url(#v-gold-3d-face)" strokeWidth="2.8" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={-7} r={4.5} quality={quality} angle={angle} />}
          </g>

          {/* JARDÍN ALQUÍMICO DE ESPIGAS DE TRIGO ESCULPIDAS Y ROSA DE ORO EN LA BASE */}
          <g transform="translate(144, 278)">
            {/* Abanico de Espigas de Trigo en Relieve (Granos romboidales escalonados) */}
            {[-18, -6, 6, 18].map((rot, i) => (
              <g key={i} transform={"rotate(" + rot + " 0 28)"}>
                <line x1="0" y1="28" x2="0" y2="-28" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
                <polygon points="0,-32 4,-24 0,-18 -4,-24" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.5" />
                <polygon points="-5,-18 -1,-12 -2,-6 -6,-12" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.5" />
                <polygon points="5,-18 1,-12 2,-6 6,-12" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.5" />
                <polygon points="-5,-8 -1,-2 -2,4 -6,-2" fill="url(#v-gold)" stroke="#040207" strokeWidth="0.5" />
                <polygon points="5,-8 1,-2 2,4 6,-2" fill="url(#v-gold)" stroke="#040207" strokeWidth="0.5" />
              </g>
            ))}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "empress",
      numeral: "III",
      name: "La Emperatriz",
      subtitle: "La Madre de la Creación",
      archetype: "empress",
      desc: "Soberana coronada con laurel de oro bajo un zodiaco de 12 estrellas, con hombreras de loto, cetro de creación, escudo de Venus y trigo dorado.",
      Midground: EmpressMidground,
      Primary: EmpressPrimary,
      Foreground: EmpressForeground
    };

    window.ARCANA_REGISTRY["empress"] = cardDef;
    window.ARCANA_REGISTRY["la_emperatriz"] = cardDef;
    window.ARCANA_REGISTRY["III"] = cardDef;
    window.ARCANA_REGISTRY[3] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
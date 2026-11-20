// ============================================================================
// ARCHIVO: cartas/el_emperador.js
// ARCANO IV: EL EMPERADOR (El Soberano del Orden)
// ============================================================================
// - Cero filtros borrosos: Trono monolítico de obsidiana, carneros de Aries y Ankh.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: FORTALEZA AXIAL, OCTOGRAMA IMPERIAL Y TRONO MONOLÍTICO (Z-Midground)
    const EmperorMidground = memo(function EmperorMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 106)" : "translate(120, 106) rotate(" + (-angle * 0.85) + ")";
      const sunRays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

      return (
        <g>
          {/* Cumbres de Hierro y Obsidiana en el Horizonte (Símbolo de Dominio Terrenal) */}
          <polygon points="18,308 18,196 54,142 96,214 120,170 144,214 186,142 222,196 222,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.6" opacity="0.65" />

          {/* Octograma Solar de Mando detrás del Yelmo Imperial */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="66" fill="none" stroke="#020105" strokeWidth="2.2" />
            <circle cx="0" cy="0" r="66" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="58" fill="none" stroke="url(#v-gold)" strokeWidth="0.6" strokeDasharray="4 2" />
            <rect x="-46" y="-46" width="92" height="92" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <rect x="-46" y="-46" width="92" height="92" fill="none" stroke="#c084fc" strokeWidth="0.9" transform="rotate(45)" />
            {isUltra && sunRays.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line
                  key={deg}
                  x1={Math.cos(rad) * 48}
                  y1={Math.sin(rad) * 48}
                  x2={Math.cos(rad) * 65}
                  y2={Math.sin(rad) * 65}
                  stroke="#ffe074"
                  strokeWidth={deg % 90 === 0 ? "1.1" : "0.5"}
                />
              );
            })}
          </g>

          {/* Trono Monolítico Escalonado en Perspectiva 3D */}
          <g>
            {/* Sombra proyectada del Trono */}
            <polygon points="34,308 34,78 56,56 184,56 206,78 206,308" fill="#020105" transform="translate(0, 3)" />
            {/* Pilares Exteriores del Respaldo */}
            <polygon points="36,308 36,80 56,60 184,60 204,80 204,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            {/* Bisel Interior de Piedra Tallada */}
            <polygon points="46,308 46,86 62,70 178,70 194,86 194,308" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1" />
            {/* Líneas de Cantería Sagrada y Travesaños de Oro */}
            <line x1="36" y1="118" x2="204" y2="118" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <line x1="36" y1="196" x2="204" y2="196" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <rect x="54" y="78" width="132" height="110" fill="none" stroke="url(#v-gold)" strokeWidth="0.65" strokeDasharray="6 3" opacity="0.7" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: MONARCA ACORAZADO CON YELMO REAL, BARBA FACETADA Y CARNEROS DE ARIES (Z-Primary)
    const EmperorPrimary = memo(function EmperorPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;

      // Sub-componente: Escultura Poliédrica de Cabeza de Carnero (Aries) en 3D
      const SculptedRamHead = ({ side = 1 }) => (
        <g transform={"scale(" + side + ", 1)"}>
          {/* Cuerno Espiralado Facetado en Oro Fundido */}
          <path
            d="M-4,-12 C-18,-26 -36,-18 -38,0 C-40,16 -26,28 -12,22 C-4,18 -4,6 -12,4 C-18,2 -22,10 -16,14"
            fill="none"
            stroke="#020105"
            strokeWidth="7.5"
            strokeLinecap="round"
            transform="translate(0, 2.5)"
          />
          <path
            d="M-4,-12 C-18,-26 -36,-18 -38,0 C-40,16 -26,28 -12,22 C-4,18 -4,6 -12,4 C-18,2 -22,10 -16,14"
            fill="none"
            stroke="url(#v-gold-dark)"
            strokeWidth="5.8"
            strokeLinecap="round"
          />
          <path
            d="M-4,-12 C-18,-26 -36,-18 -38,0 C-40,16 -26,28 -12,22 C-4,18 -4,6 -12,4 C-18,2 -22,10 -16,14"
            fill="none"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Estrías del Cuerno */}
          <path
            d="M-4,-12 C-18,-26 -36,-18 -38,0 C-40,16 -26,28 -12,22"
            fill="none"
            stroke="#1c0d06"
            strokeWidth="3.6"
            strokeDasharray="2.5 3.5"
          />
          {/* Cráneo Facetado del Carnero */}
          <polygon points="-10,-14 10,-14 14,2 6,18 0,22 -8,18 -14,2" fill="#020105" transform="translate(0, 2)" />
          <polygon points="-10,-14 10,-14 14,2 6,18 0,22 -8,18 -14,2" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="-6,-12 6,-12 4,10 0,18 -4,10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.5" />
          {/* Ojo Incandescente del Carnero */}
          <polygon points="-9,-2 -3,-5 -4,2 -10,2" fill="#fef08a" />
        </g>
      );

      return (
        <g>
          {/* CARNEROS IMPERIALES ESCULPIDOS EN LOS HOMBROS DEL TRONO */}
          <g transform="translate(52, 114)"><SculptedRamHead side={1} /></g>
          <g transform="translate(188, 114)"><SculptedRamHead side={-1} /></g>

          {/* MANTO Y ARMADURA PESADA DEL EMPERADOR */}
          <g>
            {/* Sombra Base de la Armadura */}
            <polygon points="34,308 46,162 88,136 120,148 152,136 194,162 206,308" fill="#020105" transform="translate(0, 4)" />
            {/* Manto Imperial de Amatista Oscura y Oro */}
            <polygon points="36,308 48,164 88,138 120,148 152,138 192,164 204,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="52,308 62,174 92,148 120,160 148,148 178,174 188,308" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.1" />

            {/* Hombreras Acorazadas Escalonadas (3 Placas de Acero/Obsidiana y Oro por Hombro) */}
            <g>
              {/* Hombro Izquierdo */}
              <polygon points="32,184 46,154 88,138 98,158 54,192" fill="#020105" transform="translate(0, 3)" />
              <polygon points="32,184 46,154 88,138 98,158 54,192" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="38,196 52,170 92,154 98,170 58,204" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="46,154 88,138 82,152 50,168" fill="url(#v-gold-3d-face)" opacity="0.85" />

              {/* Hombro Derecho */}
              <polygon points="208,184 194,154 152,138 142,158 186,192" fill="#020105" transform="translate(0, 3)" />
              <polygon points="208,184 194,154 152,138 142,158 186,192" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="202,196 188,170 148,154 142,170 182,204" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
              <polygon points="194,154 152,138 158,152 190,168" fill="url(#v-gold-3d-face)" opacity="0.85" />
            </g>

            {/* Coraza Pectoral Octogonal y Faldón de Placas (Tassets) */}
            <polygon points="84,162 120,148 156,162 146,232 120,248 94,232" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="94,170 120,158 146,170 138,224 120,236 102,224" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="1" />
            {/* Costillas Metálicas de la Coraza */}
            <path d="M92,184 L120,196 L148,184 M94,200 L120,212 L146,200 M98,216 L120,228 L142,216" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />

            {/* Emblema Solar del Pecho */}
            <polygon points="120,170 132,188 120,206 108,188" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            {EnergyCore && <EnergyCore cx={120} cy={188} r={6} quality={quality} angle={angle} />}
          </g>

          {/* CABEZA, MÁSCARA DE HIERRO/ORO, BARBA IMPERIAL Y YELMO-CORONA */}
          <g transform="translate(120, 108)">
            {/* Sombra de la Cabeza */}
            <polygon points="-32,-38 32,-38 36,18 22,56 0,72 -22,56 -36,18" fill="#020105" transform="translate(0, 4)" />

            {/* Placas Laterales del Yelmo (Cheekguards) */}
            <polygon points="-30,-22 -12,-32 12,-32 30,-22 32,20 18,44 -18,44 -32,20" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-28,-8 -10,-18 -4,14 -18,32 -28,14" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.1" />
            <polygon points="28,-8 10,-18 4,14 18,32 28,14" fill="#160a26" stroke="url(#v-gold)" strokeWidth="1.1" />

            {/* Ceño Severo y Visera en T del Yelmo Imperial */}
            <polygon points="-28,-10 0,-2 28,-10 24,-18 0,-12 -24,-18" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <polygon points="0,-16 -6,12 0,18 6,12" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />

            {/* Ojos de Fuego Astral bajo el Yelmo */}
            <polygon points="-22,-5 -8,-2 -10,3 -20,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="22,-5 8,-2 10,3 20,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />

            {/* Bigote y Barba Real Escalonada en Placas de Oro y Obsidiana */}
            <polygon points="-24,18 0,10 24,18 28,28 14,26 0,20 -14,26 -28,28" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="-22,26 0,18 22,26 18,52 0,68 -18,52" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
            <polygon points="-14,26 0,20 14,26 10,48 0,60 -10,48" fill="url(#v-gold-dark)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <polygon points="-6,24 0,20 6,24 4,44 0,54 -4,44" fill="url(#v-gold-3d-face)" />
            {isUltra && (
              <path d="M-16,34 L0,44 L16,34 M-12,44 L0,52 L12,44" fill="none" stroke="#fff9e2" strokeWidth="0.7" />
            )}

            {/* GRAN CORONA IMPERIAL DE OCHO ARCOS Y PUNTAS DE LANZA */}
            <g transform="translate(0, -24)">
              <polygon
                points="-34,6 -38,-22 -22,-8 -12,-32 0,-12 12,-32 22,-8 38,-22 34,6"
                fill="#020105"
                transform="translate(0, 2.5)"
              />
              {/* Arco Imperial Posterior */}
              <path d="M-28,2 C-28,-28 28,-28 28,2" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
              {/* Puntas de Lanza de la Corona */}
              <polygon
                points="-34,6 -38,-22 -22,-8 -12,-32 0,-38 12,-32 22,-8 38,-22 34,6 18,12 0,6 -18,12"
                fill="url(#v-gold-3d-face)"
                stroke="#fff9e2"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Banda de Joyas de la Corona */}
              <rect x="-30" y="0" width="60" height="7" rx="1.5" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
              <polygon points="0,-34 7,-16 0,-4 -7,-16" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.9" />
              <circle cx="-18" cy="3.5" r="2" fill="#fef08a" />
              <circle cx="0" cy="3.5" r="2.4" fill="#ffffff" />
              <circle cx="18" cy="3.5" r="2" fill="#fef08a" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: GUANTELETES ARTICULADOS, CETRO ANKH, ORBE IMPERIAL Y PEDESTAL (Z-Foreground)
    const EmperorForeground = memo(function EmperorForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;

      return (
        <g>
          {/* MANO DERECHA ACORAZADA EMPUÑANDO EL GRAN CETRO ANKH (CRUZ ANSADA) */}
          <g transform={"translate(60, " + (176 + floatY) + ")"}>
            {/* Sombra Vectorial del Cetro Ankh */}
            <g transform="translate(2, 3)" opacity="0.9">
              <ellipse cx="0" cy="-42" rx="14" ry="19" fill="none" stroke="#020105" strokeWidth="6" />
              <path d="M0,-23 V78 M-20,-10 H20" stroke="#020105" strokeWidth="6" strokeLinecap="round" />
            </g>

            {/* Vara y Brazos del Cetro Ankh en Oro 3D */}
            <line x1="0" y1="-23" x2="0" y2="78" stroke="url(#v-gold-dark)" strokeWidth="5.2" strokeLinecap="round" />
            <line x1="0" y1="-23" x2="0" y2="78" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />
            <polygon points="-22,-10 -8,-14 8,-14 22,-10 8,-6 -8,-6" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="0.9" />

            {/* Lazo Oval Superior del Ankh */}
            <ellipse cx="0" cy="-42" rx="14" ry="19" fill="none" stroke="url(#v-gold-dark)" strokeWidth="5.5" />
            <ellipse cx="0" cy="-42" rx="14" ry="19" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="3.4" />
            <ellipse cx="0" cy="-42" rx="10" ry="15" fill="none" stroke="#fff9e2" strokeWidth="0.7" />
            {EnergyCore && <EnergyCore cx={0} cy={-42} r={6.5} quality={quality} angle={angle} />}

            {/* Guantelete Acorazado con Dedos Articulados cerrados sobre el Cetro */}
            <g transform="translate(0, 14)">
              <polygon points="-14,-8 10,-12 14,14 -12,20" fill="#020105" transform="translate(1, 2)" />
              {/* Dorso y Brazal del Guantelete */}
              <polygon points="-14,6 10,2 16,28 -10,32" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
              {/* 4 Nudillos y Dedos Acorazados */}
              <rect x="-8" y="-10" width="16" height="5" rx="1.5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
              <rect x="-9" y="-4" width="17" height="5" rx="1.5" fill="url(#v-gold)" stroke="#040207" strokeWidth="0.7" />
              <rect x="-8" y="2" width="16" height="5" rx="1.5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
              <rect x="-7" y="8" width="14" height="4.5" rx="1.5" fill="url(#v-gold-dark)" stroke="url(#v-gold)" strokeWidth="0.7" />
            </g>
          </g>

          {/* MANO IZQUIERDA ACORAZADA SOSTENIENDO EL ORBE IMPERIAL CRUCIGER */}
          <g transform={"translate(180, " + (182 - floatY) + ")"}>
            {/* Sombra del Orbe */}
            <circle cx="1.5" cy="-15.5" r="20" fill="#020105" />
            {/* Esfera de Obsidiana y Amatista */}
            <circle cx="0" cy="-18" r="20" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            {/* Bandas Ecuatoriales y Meridianos en Oro 3D */}
            <ellipse cx="0" cy="-18" rx="20" ry="7" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <ellipse cx="0" cy="-18" rx="7" ry="20" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            {/* Cruz Imperial sobre el Orbe */}
            <path d="M0,-38 V-52 M-7,-45 H7" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={-18} r={6} quality={quality} angle={angle} />}

            {/* Guantelete Izquierdo Abierto Sosteniendo la Base del Orbe */}
            <g transform="translate(0, 6)">
              <polygon points="-18,-4 0,4 18,-4 12,18 0,24 -12,18" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
              <polygon points="-18,-4 -12,-12 -6,-2 M18,-4 12,-12 6,-2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
              <circle cx="0" cy="11" r="2.5" fill="#fef08a" />
            </g>
          </g>

          {/* BASAMENTO IMPERIAL Y ESCALINATA DE TRONO */}
          <g transform="translate(120, 278)">
            <polygon points="-92,-10 92,-10 102,30 -102,30" fill="#020105" transform="translate(0, -2)" />
            <polygon points="-90,-10 90,-10 100,30 -100,30" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <polygon points="-68,-4 68,-4 76,24 -76,24" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1.1" />
            {/* Sello Axial de Aries en el Pedestal */}
            <polygon points="0,-16 18,4 0,24 -18,4" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="0,-10 12,4 0,18 -12,4" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.8" />
            <path d="M-7,2 C-7,-4 -1,-4 0,4 C1,-4 7,-4 7,2" fill="none" stroke="#fef08a" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="-60" y1="8" x2="-24" y2="8" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <line x1="24" y1="8" x2="60" y2="8" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "emperor",
      numeral: "IV",
      name: "El Emperador",
      subtitle: "El Soberano del Orden",
      archetype: "emperor",
      desc: "Monarca acorazado con yelmo-corona y barba facetada sobre el trono de Aries, empuñando el gran cetro Ankh y el orbe cruciger.",
      Midground: EmperorMidground,
      Primary: EmperorPrimary,
      Foreground: EmperorForeground
    };

    window.ARCANA_REGISTRY["emperor"] = cardDef;
    window.ARCANA_REGISTRY["el_emperador"] = cardDef;
    window.ARCANA_REGISTRY["IV"] = cardDef;
    window.ARCANA_REGISTRY[4] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
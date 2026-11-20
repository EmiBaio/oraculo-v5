// ============================================================================
// ARCHIVO: cartas/el_loco.js
// ARCANO 0: EL LOCO (El Caminante del Abismo)
// ============================================================================
// - Cero filtros borrosos: Sombras por extrusión vectorial y halos matemáticos.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: VÓRTICE DE KETHER, BRÚJULA ESTELAR Y ABISMO (Z-Midground)
    const FoolMidground = memo(function FoolMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const compassRot = isLow ? "translate(154, 78)" : "translate(154, 78) rotate(" + (angle * 1.15) + ")";

      return (
        <g>
          {/* Gran Sol Astral de Kether y Rosa de los Vientos en el Cielo Abierto */}
          <g transform={compassRot}>
            <circle cx="0" cy="0" r="64" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1" strokeDasharray="6 3 1 3" />
            <circle cx="0" cy="0" r="38" fill="none" stroke="#c084fc" strokeWidth="0.7" />
            {/* Estrella Náutica de 8 Puntas */}
            <polygon
              points="0,-58 7,-10 58,0 7,10 0,58 -7,10 -58,0 -7,-10"
              fill="url(#v-gold-3d-face)"
              stroke="#020105"
              strokeWidth="0.7"
              opacity="0.85"
            />
            {isUltra && (
              <polygon
                points="0,-42 5,-7 42,0 5,7 0,42 -5,7 -42,0 -5,-7"
                fill="url(#v-amethyst-bright)"
                stroke="url(#v-gold)"
                strokeWidth="0.6"
                transform="rotate(45)"
                opacity="0.8"
              />
            )}
            <circle r="10" fill="#ffffff" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
          </g>

          {/* Anillos Gravitacionales del Abismo Cósmico (Abajo a la Derecha) */}
          <g transform="translate(168, 256) rotate(-18)">
            <ellipse rx="68" ry="22" fill="none" stroke="#c084fc" strokeWidth="0.9" strokeDasharray="8 4" opacity="0.7" />
            <ellipse rx="48" ry="14" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="0.8" opacity="0.8" />
            <ellipse rx="26" ry="7" fill="url(#v-astral-core)" />
          </g>

          {/* Agujas de Roca Flotantes en el Horizonte */}
          <polygon points="154,224 164,192 172,226 164,242" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="0.8" />
          <polygon points="192,208 200,178 208,210 200,224" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.7" />
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL VIAJERO ASTRAL EN PASO DE SALTO AL VACÍO (Z-Primary)
    const FoolPrimary = memo(function FoolPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const EnergyCore = window.LivingEnergyCore;
      const dashOffset = isUltra ? -(angle * 2.2) : 0;

      return (
        <g>
          {/* Cintas del Manto Astral Flotando al Viento en Gravedad Cero */}
          <path
            d="M84,126 C42,118 22,148 30,186 C38,214 68,202 82,226"
            fill="none"
            stroke="#020105"
            strokeWidth="12"
            strokeLinecap="round"
            transform="translate(0, 3)"
          />
          <path
            d="M84,126 C42,118 22,148 30,186 C38,214 68,202 82,226"
            fill="none"
            stroke="url(#v-amethyst-bright)"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <path
            d="M84,126 C42,118 22,148 30,186 C38,214 68,202 82,226"
            fill="none"
            stroke="url(#v-gold-3d-face)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {isUltra && (
            <path
              d="M84,126 C42,118 22,148 30,186 C38,214 68,202 82,226"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.9"
              strokeDasharray="6 10"
              strokeDashoffset={dashOffset}
            />
          )}

          {/* Vara del Peregrino Cruzada en Diagonal con Astrolabio Esférico (El Hatillo Cósmico) */}
          <g>
            <line x1="28" y1="198" x2="188" y2="54" stroke="#020105" strokeWidth="5.5" strokeLinecap="round" transform="translate(1, 2.5)" />
            <line x1="28" y1="198" x2="188" y2="54" stroke="url(#v-gold-3d-face)" strokeWidth="3.2" strokeLinecap="round" />
            {/* Relicario Esférico / Hatillo Colgante */}
            <g transform="translate(46, 182)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
              <polygon points="0,14 16,28 12,48 0,56 -12,48 -16,28" fill="#020105" transform="translate(1, 2)" />
              <polygon points="0,14 16,28 12,48 0,56 -12,48 -16,28" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
              <polygon points="0,20 10,30 7,44 0,50 -7,44 -10,30" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.9" />
              {EnergyCore && <EnergyCore cx={0} cy={35} r={5} quality={quality} angle={angle} />}
            </g>
          </g>

          {/* SILUETA DINÁMICA DEL CAMINANTE EN TRES CUARTOS MIRANDO AL CIELO */}
          <g transform="translate(102, 134)">
            {/* Sombra del Cuerpo */}
            <polygon points="-34,132 -22,22 -6,-10 26,-6 42,36 28,118" fill="#020105" transform="translate(2, 4)" />

            {/* Túnica de Viajero Facetada con Cuello Alto */}
            <polygon points="-32,128 -20,20 -4,-10 24,-6 38,34 22,116" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-18,120 -10,26 6,0 24,14 14,112" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.1" />
            {/* Cuello de Puntas de Bufón Sagrado (Jester Collar en Oro 3D) */}
            <polygon
              points="-26,12 -6,-2 18,4 32,20 14,22 4,36 -4,20 -18,32"
              fill="url(#v-gold-3d-face)"
              stroke="#040207"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <circle cx="-18" cy="32" r="2.2" fill="#fef08a" />
            <circle cx="4" cy="36" r="2.2" fill="#fef08a" />
            <circle cx="32" cy="20" r="2.2" fill="#fef08a" />

            {/* Rostro-Máscara en Medio Perfil Elevado hacia el Sol (Mitad Oro, Mitad Plata Lunar) */}
            <g transform="translate(4, -32) rotate(-14)">
              <polygon points="-18,-22 14,-24 24,-2 18,22 0,30 -18,18 -22,-4" fill="#020105" transform="translate(1, 2.5)" />
              {/* Mitad Izquierda en Plata Lunar */}
              <polygon points="-18,-22 2,-23 4,28 -18,18 -22,-4" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeLinejoin="round" />
              {/* Mitad Derecha (Mirando al Sol) en Oro Bruñido */}
              <polygon points="2,-23 14,-24 24,-2 18,22 4,28" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />
              {/* Ojos Rasgados del Viajero */}
              <polygon points="-13,-4 -3,-6 -5,-1 -12,0" fill="#1e0836" />
              <circle cx="-8" cy="-3.5" r="1.5" fill="#fef08a" />
              <polygon points="7,-5 17,-4 15,0 8,-1" fill="#1e0836" />
              <circle cx="12" cy="-2.5" r="1.5" fill="#ffffff" />

              {/* Tocado de Tres Plumas Astrales Afiladas */}
              <path d="M-16,-20 C-28,-46 -18,-64 -4,-74 C-8,-52 -8,-34 -4,-22 Z" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
              <path d="M-6,-22 C-12,-50 2,-68 18,-78 C10,-54 6,-36 6,-22 Z" fill="url(#v-gold-3d-face)" stroke="#fff9e2" strokeWidth="1.2" />
              <path d="M4,-22 C6,-42 18,-56 30,-62 C22,-44 16,-30 12,-20 Z" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" />
            </g>
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: LOTO DE CRISTAL, PRECIPICIO DE OBSIDIANA Y LOBO ASTRAL (Z-Foreground)
    const FoolForeground = memo(function FoolForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 40) * 2.4;

      return (
        <g>
          {/* Mano Derecha Extendida hacia el Abismo Sosteniendo la Rosa/Loto Blanco de Cristal */}
          <g transform={"translate(162, " + (138 + floatY) + ")"}>
            {/* Tallo de Oro */}
            <line x1="-10" y1="28" x2="4" y2="-16" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" strokeLinecap="round" />
            {/* Mandala de la Rosa Blanca en Plata Lunar y Cristal */}
            <g transform="translate(4, -24)">
              <polygon points="0,-20 7,-7 20,0 7,7 0,20 -7,7 -20,0 -7,-7" fill="#020105" transform="translate(0, 2)" />
              <polygon points="0,-18 6,-6 18,0 6,6 0,18 -6,6 -18,0 -6,-6" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
              <polygon points="0,-15 5,-5 15,0 5,5 0,15 -5,5 -15,0 -5,-5" fill="#ffffff" stroke="url(#v-gold)" strokeWidth="0.8" transform="rotate(45)" />
              {EnergyCore && <EnergyCore cx={0} cy={0} r={4.5} quality={quality} angle={angle} />}
            </g>
            {/* Mano Elegante Articulada */}
            <polygon points="-18,12 -4,2 4,8 -4,20 -16,22" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
          </g>

          {/* ACANTILADO DE OBSIDIANA CORTADO A PIQUE SOBRE EL VACÍO */}
          <g>
            <polygon points="18,308 18,228 68,234 118,256 142,250 132,308" fill="#020105" transform="translate(2, -3)" />
            <polygon points="18,308 18,232 68,238 118,260 142,254 132,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2" strokeLinejoin="round" />
            {/* Facetas de Roca Cristalina en el Borde del Abismo */}
            <polygon points="18,232 68,238 54,268 18,262" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1" />
            <polygon points="68,238 118,260 96,284 54,268" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1" />
            <polygon points="118,260 142,254 132,308 96,284" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
          </g>

          {/* LOBO / CHACAL ASTRAL ESCULPIDO EN PLATA LUNAR Y ORO (Ladrando al Viajero) */}
          <g transform={"translate(64, " + (222 - floatY * 0.6) + ")"}>
            {/* Sombra del Lobo */}
            <polygon points="-32,26 -18,4 -4,-2 8,-22 14,-10 26,-8 16,4 12,24 -12,26" fill="#020105" transform="translate(1, 2.5)" />
            {/* Cola y Cuerpo Facetado en Plata */}
            <polygon points="-36,16 -22,6 -16,18 -28,26" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" />
            <polygon points="-22,6 -2,-2 12,10 8,24 -16,24" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" strokeLinejoin="round" />
            <polygon points="-8,0 8,-8 14,10 0,14" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="1" />
            {/* Cabeza, Orejas Puntiagudas y Hocico Elevado */}
            <polygon points="2,-10 8,-26 14,-12" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
            <polygon points="8,-10 15,-24 18,-10" fill="url(#v-silver)" stroke="url(#v-gold)" strokeWidth="0.8" />
            <polygon points="4,-12 18,-12 28,-6 18,2 6,0" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Collar Real y Ojo Brillante */}
            <line x1="2" y1="-2" x2="14" y2="4" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            <circle cx="15" cy="-8" r="1.6" fill="#fef08a" />
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "fool",
      numeral: "0",
      name: "El Loco",
      subtitle: "El Caminante del Abismo",
      archetype: "fool",
      desc: "Con máscara dual de sol y luna y manto flotante en gravedad cero, da el salto al vacío sosteniendo el loto de cristal junto al lobo astral.",
      Midground: FoolMidground,
      Primary: FoolPrimary,
      Foreground: FoolForeground
    };

    window.ARCANA_REGISTRY["fool"] = cardDef;
    window.ARCANA_REGISTRY["el_loco"] = cardDef;
    window.ARCANA_REGISTRY["0"] = cardDef;
    window.ARCANA_REGISTRY[0] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
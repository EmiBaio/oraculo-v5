// ============================================================================
// ARCHIVO: cartas/el_diablo.js
// ARCANO XV: EL DIABLO (El Arconte del Deseo y las Cadenas de Materia)
// ============================================================================
// - Cero filtros borrosos: Cuernos de macho cabrío en 3D, Pentagrama Invertido y Cadenas.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: ALAS DE MURCIÉLAGO GÓTICAS Y PENTAGRAMA INVERTIDO (Z-Midground)
    const DevilMidground = memo(function DevilMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const pentRot = isLow ? "translate(120, 72)" : "translate(120, 72) rotate(" + (-angle * 0.5) + ")";

      return (
        <g>
          {/* Caverna Geométrica de Obsidiana yFuego Abismal */}
          <polygon points="18,308 18,96 54,36 120,22 186,36 222,96 222,308" fill="url(#v-obsidian-deep)" opacity="0.78" />

          {/* Rueda del Pentagrama Invertido detrás de la Corona de Cuernos */}
          <g transform={pentRot}>
            <circle cx="0" cy="0" r="52" fill="none" stroke="#020105" strokeWidth="2.2" />
            <circle cx="0" cy="0" r="52" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="44" fill="none" stroke="#c084fc" strokeWidth="0.7" strokeDasharray="4 3" />
            {/* Estrella de Cinco Puntas Invertida (Dos puntas hacia arriba, una hacia abajo) */}
            <polygon
              points="0,48 -31,-42 48,15 -48,15 31,-42"
              fill="none"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {isUltra && (
              <polygon points="0,32 22,-28 -32,10 32,10 -22,-28" fill="url(#v-amethyst)" fillOpacity="0.45" stroke="#fef08a" strokeWidth="0.6" />
            )}
          </g>

          {/* GRANDES ALAS DE MURCIÉLAGO ESCULPIDAS EN OBSIDIANA Y NERVADURAS DE ORO */}
          <g transform="translate(120, 142)">
            {/* Sombra de las Alas */}
            <path
              d="M-16,-18 L-94,-64 L-86,-8 L-100,36 C-72,22 -48,26 -24,42 Z M16,-18 L94,-64 L86,-8 L100,36 C72,22 48,26 24,42 Z"
              fill="#020105"
              transform="translate(0, 4)"
            />
            {/* Ala Izquierda */}
            <path
              d="M-16,-18 L-94,-64 L-86,-8 L-100,36 C-72,22 -48,26 -24,42 Z"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M-18,-12 L-86,-8 M-18,-6 L-64,26 M-54,-38 L-48,22" fill="none" stroke="url(#v-gold)" strokeWidth="1" />

            {/* Ala Derecha */}
            <path
              d="M16,-18 L94,-64 L86,-8 L100,36 C72,22 48,26 24,42 Z"
              fill="url(#v-obsidian)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M18,-12 L86,-8 M18,-6 L64,26 M54,-38 L48,22" fill="none" stroke="url(#v-gold)" strokeWidth="1" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL ARCONTE BAFOMÉTICO CON CUERNOS ESTRIADOS Y SELLO DE AZUFRE (Z-Primary)
    const DevilPrimary = memo(function DevilPrimary({ quality = "ULTRA", angle = 0 }) {
      const EnergyCore = window.LivingEnergyCore;

      return (
        <g>
          {/* TORSO ACORAZADO DEL ARCONTE Y SELLO ALQUÍMICO DEL AZUFRE EN EL PECHO */}
          <g transform="translate(120, 168)">
            <polygon points="-46,78 -38,-22 0,-34 38,-22 46,78" fill="#020105" transform="translate(0, 4)" />
            <polygon points="-44,76 -36,-22 0,-34 36,-22 44,76" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-32,74 -26,-16 0,-26 26,-16 32,74" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.1" />

            {/* Placas Pectorales y Símbolo Alquímico del Azufre (Triángulo sobre Cruz) */}
            <polygon points="-28,-12 0,2 28,-12 22,18 0,28 -22,18" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
            <polygon points="0,-10 14,12 -14,12" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <path d="M0,12 V28 M-8,20 H8" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={4} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* CABEZA ESCULPIDA, CUERNOS DE MACHO CABRÍO EN ORO 3D Y PENTAGRAMA EN LA FRENTE */}
          <g transform="translate(120, 108)">
            {/* Sombra de los Grandes Cuernos */}
            <path
              d="M-14,-22 C-42,-58 -82,-42 -84,-6 C-86,18 -64,28 -48,16 C-62,14 -66,-4 -54,-18 C-42,-30 -24,-22 -18,-8 Z M14,-22 C42,-58 82,-42 84,-6 C86,18 64,28 48,16 C62,14 66,-4 54,-18 C42,-30 24,-22 18,-8 Z"
              fill="#020105"
              transform="translate(0, 3.5)"
            />
            {/* Cuernos Curvos de Cabra en Oro Fundido y Bronce con Estrías */}
            <path
              d="M-14,-22 C-42,-58 -82,-42 -84,-6 C-86,18 -64,28 -48,16 C-62,14 -66,-4 -54,-18 C-42,-30 -24,-22 -18,-8 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#fff9e2"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M14,-22 C42,-58 82,-42 84,-6 C86,18 64,28 48,16 C62,14 66,-4 54,-18 C42,-30 24,-22 18,-8 Z"
              fill="url(#v-gold-3d-face)"
              stroke="#fff9e2"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M-22,-26 C-46,-46 -74,-32 -76,-6 M22,-26 C46,-46 74,-32 76,-6"
              fill="none"
              stroke="#1c0d06"
              strokeWidth="3.2"
              strokeDasharray="3 3.5"
            />

            {/* Cráneo Facetado del Arconte */}
            <polygon points="-24,-24 24,-24 26,8 14,32 0,44 -14,32 -26,8" fill="#020105" transform="translate(0, 3)" />
            <polygon points="-22,-22 22,-22 24,6 12,30 0,42 -12,30 -24,6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="-22,-4 -6,-14 0,8 -12,26 -23,6" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="0.9" />
            <polygon points="22,-4 6,-14 0,8 12,26 23,6" fill="#180a29" stroke="url(#v-gold)" strokeWidth="0.9" />

            {/* Ojos Hipnóticos Rasgados y Tercer Ojo Invertido */}
            <polygon points="-18,-3 -5,1 -7,5 -17,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="18,-3 5,1 7,5 17,2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="0,-6 6,-18 -6,-18" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1" />
            <circle cx="0" cy="-14" r="1.8" fill="#ffffff" />

            {/* Barba Cabría Afilada en Oro y Obsidiana */}
            <polygon points="-8,26 0,22 8,26 4,48 0,56 -4,48" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
          </g>

          {/* Mano Derecha Alzada en el Gesto de "SOLVE" (Con el Sello de Saturno) */}
          <g transform="translate(56, 134)">
            <polygon points="-8,18 -10,-8 -4,-24 4,-24 8,-6 12,16" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="0" cy="2" r="2.2" fill="#c084fc" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: ANTORCHA INVERTIDA, ALTAR CÚBICO Y LAS CADENAS DE ILUSIÓN (Z-Foreground)
    const DevilForeground = memo(function DevilForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 40) * 2.2;
      const dashOffset = isUltra ? -(angle * 2.8) : 0;

      return (
        <g>
          {/* MANO IZQUIERDA SOSTENIENDO LA ANTORCHA DE FUEGO ASTRAL INVERTIDA ("COAGULA") */}
          <g transform={"translate(182, " + (192 + floatY) + ") rotate(18)"}>
            <line x1="0" y1="-34" x2="0" y2="22" stroke="#020105" strokeWidth="5.5" strokeLinecap="round" transform="translate(1, 2)" />
            <line x1="0" y1="-34" x2="0" y2="22" stroke="url(#v-gold-3d-face)" strokeWidth="3.4" strokeLinecap="round" />
            <polygon points="-10,-10 8,-12 10,4 -8,6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            {/* Cáliz Invertido de la Antorcha y Llamas Descendentes */}
            <polygon points="-8,18 8,18 12,28 -12,28" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <polygon points="-10,28 0,58 10,28 4,42 0,34 -4,42" fill="url(#v-amethyst-bright)" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            {EnergyCore && <EnergyCore cx={0} cy={36} r={6} quality={quality} angle={angle} />}
          </g>

          {/* PEDESTAL DE OBSIDIANA, ARGOLLA CENTRAL Y LAS DOS ALMAS ENCADENADAS */}
          <g transform="translate(120, 266)">
            {/* Bloque Cúbico de Materia Densa */}
            <polygon points="-76,-22 76,-22 88,42 -88,42" fill="#020105" transform="translate(0, 3)" />
            <polygon points="-74,-22 74,-22 86,42 -86,42" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />
            <rect x="-58" y="-12" width="116" height="44" fill="url(#v-obsidian)" stroke="url(#v-gold)" strokeWidth="1" />

            {/* Cadenas Pesadas de Oro Extendidas hacia los Costados */}
            <path d="M0,6 L-56,14 M0,6 L56,14" stroke="#020105" strokeWidth="6" strokeLinecap="round" />
            <path d="M0,6 L-56,14 M0,6 L56,14" stroke="url(#v-gold-3d-face)" strokeWidth="3.6" strokeDasharray="5 4" />
            {isUltra && (
              <path d="M0,6 L-56,14 M0,6 L56,14" stroke="#ffffff" strokeWidth="1.1" strokeDasharray="3 9" strokeDashoffset={dashOffset} />
            )}

            {/* Argolla de Hierro y Oro en el Centro del Pedestal */}
            <circle cx="0" cy="-10" r="6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            <circle cx="0" cy="4" r="13" fill="none" stroke="#020105" strokeWidth="5" />
            <circle cx="0" cy="4" r="13" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="3" />
            {EnergyCore && <EnergyCore cx={0} cy={4} r={5} quality={quality} angle={angle} />}

            {/* Máscara Encadenada Izquierda (Alma Masculina con Pequeños Cuernos) */}
            <g transform="translate(-60, 8)">
              <polygon points="-14,-14 -18,-26 -8,-16 8,-16 18,-26 14,-14" fill="url(#v-gold-3d-face)" />
              <polygon points="-14,-14 14,-14 16,6 0,18 -16,6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
              <rect x="-12" y="12" width="24" height="5" rx="1.5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
              <circle cx="-5" cy="-2" r="1.4" fill="#fef08a" />
              <circle cx="5" cy="-2" r="1.4" fill="#fef08a" />
            </g>

            {/* Máscara Encadenada Derecha (Alma Femenina con Pequeños Cuernos) */}
            <g transform="translate(60, 8)">
              <polygon points="-14,-14 -18,-26 -8,-16 8,-16 18,-26 14,-14" fill="url(#v-gold-3d-face)" />
              <polygon points="-14,-14 14,-14 16,6 0,18 -16,6" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1.3" />
              <rect x="-12" y="12" width="24" height="5" rx="1.5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.8" />
              <circle cx="-5" cy="-2" r="1.4" fill="#fef08a" />
              <circle cx="5" cy="-2" r="1.4" fill="#fef08a" />
            </g>
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "devil",
      numeral: "XV",
      name: "El Diablo",
      subtitle: "El Espejismo de la Materia",
      archetype: "devil",
      desc: "Bajo el pentagrama invertido, el Arconte de cuernos de oro empuña la antorcha abismal sobre el pedestal donde yacen las almas encadenadas.",
      Midground: DevilMidground,
      Primary: DevilPrimary,
      Foreground: DevilForeground
    };

    window.ARCANA_REGISTRY["devil"] = cardDef;
    window.ARCANA_REGISTRY["el_diablo"] = cardDef;
    window.ARCANA_REGISTRY["XV"] = cardDef;
    window.ARCANA_REGISTRY[15] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
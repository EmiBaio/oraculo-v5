// ============================================================================
// ARCHIVO: cartas/la_luna.js
// ARCANO XVIII: LA LUNA (El Umbral de los Sueños y las Dos Torres)
// ============================================================================
// - Cero filtros borrosos: Plenilunio con rostro en perfil, 2 Torres, Lobo, Chacal y Escarabajo.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: LAS DOS TORRES VIGÍAS DEL UMBRAL Y EL SENDERO SINUOSO (Z-Midground)
    const MoonMidground = memo(function MoonMidground() {
      return (
        <g>
          {/* Montañas Nocturnas y el Sendero Dorado que se pierde en el Misterio */}
          <polygon points="18,308 18,214 68,176 120,218 172,176 222,214 222,308" fill="url(#v-obsidian-deep)" stroke="url(#v-gold)" strokeWidth="0.8" />
          <path d="M120,264 C96,246 144,230 120,212" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="2.4" />

          {/* TORRE IZQUIERDA (Fortaleza de Obsidiana y Plata) */}
          <g transform="translate(42, 162)">
            <rect x="-18" y="-42" width="36" height="114" fill="#020105" transform="translate(2, 3)" />
            <rect x="-18" y="-42" width="36" height="114" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            {/* Almenas */}
            <polygon points="-22,-42 -22,-54 -12,-54 -12,-46 -4,-46 -4,-54 4,-54 4,-46 12,-46 12,-54 22,-54 22,-42" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <path d="M-6,12 V-16 Q0,-24 6,-16 V12 Z" fill="#040207" stroke="url(#v-silver)" strokeWidth="1.1" />
            <circle cx="0" cy="-10" r="2" fill="#fef08a" />
          </g>

          {/* TORRE DERECHA (Fortaleza de Obsidiana y Oro) */}
          <g transform="translate(198, 162)">
            <rect x="-18" y="-42" width="36" height="114" fill="#020105" transform="translate(-2, 3)" />
            <rect x="-18" y="-42" width="36" height="114" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
            {/* Almenas */}
            <polygon points="-22,-42 -22,-54 -12,-54 -12,-46 -4,-46 -4,-54 4,-54 4,-46 12,-46 12,-54 22,-54 22,-42" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <path d="M-6,12 V-16 Q0,-24 6,-16 V12 Z" fill="#040207" stroke="url(#v-gold-3d-face)" strokeWidth="1.1" />
            <circle cx="0" cy="-10" r="2" fill="#fef08a" />
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL GRAN ASTRO LUNAR EN ECLIPSE CON ROSTRO EN PERFIL Y ROCÍO DE YODS (Z-Primary)
    const MoonPrimary = memo(function MoonPrimary({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const coronaRot = isLow ? "translate(120, 88)" : "translate(120, 88) rotate(" + (-angle * 0.8) + ")";
      const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);
      const yods = [
        [84, 152], [102, 166], [120, 156], [138, 166], [156, 152],
        [92, 184], [120, 188], [148, 184]
      ];

      return (
        <g>
          {/* CORONA DE 16 RAYOS LUNARES Y PLENILUNIO CON CRECIENTE ESCULPIDA */}
          <g transform={coronaRot}>
            <circle cx="0" cy="0" r="56" fill="url(#v-astral-core)" />
            {rays.map((deg, idx) => (
              <polygon
                key={deg}
                points={idx % 2 === 0 ? "0,-58 4,-38 -4,-38" : "0,-50 2.5,-38 -2.5,-38"}
                fill={idx % 2 === 0 ? "url(#v-gold-3d-face)" : "url(#v-silver)"}
                stroke="#040207"
                strokeWidth="0.5"
                transform={"rotate(" + deg + ")"}
              />
            ))}
          </g>

          {/* Disco de la Luna y Rostro Femenino en Perfil Sagrado */}
          <g transform="translate(120, 88)">
            <circle cx="0" cy="2" r="38" fill="#020105" />
            <circle cx="0" cy="0" r="37" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="2.2" />
            <circle cx="0" cy="0" r="32" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="1" />

            {/* Creciente de Plata Espejada con Perfil Humano Esculpido */}
            <path
              d="M12,-30 C-18,-28 -32,-4 -20,22 C-10,34 8,32 16,24 C0,24 -6,14 -4,6 L2,4 L-3,-2 L2,-8 C-4,-14 0,-24 12,-30 Z"
              fill="url(#v-silver)"
              stroke="url(#v-gold-3d-face)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Ojo Cerrado de la Luna */}
            <path d="M-14,-6 Q-9,-3 -5,-6" fill="none" stroke="#1e0836" strokeWidth="1.5" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={12} cy={0} r={5.5} quality={quality} angle={angle} />}
          </g>

          {/* Gotas de Rocío Astral (Letras Hebreas Yod invertidas descendiendo de la Luna) */}
          {yods.map(([yx, yy], idx) => (
            <polygon
              key={idx}
              points={yx + "," + (yy - 5) + " " + (yx + 3) + "," + yy + " " + yx + "," + (yy + 5) + " " + (yx - 3) + "," + yy}
              fill={idx % 2 === 0 ? "url(#v-gold-3d-face)" : "url(#v-silver)"}
              opacity={isUltra ? "0.95" : "0.75"}
            />
          ))}
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: EL LOBO, EL CHACAL Y EL ESCARABAJO/CANGREJO DEL ABISMO (Z-Foreground)
    const MoonForeground = memo(function MoonForeground({ quality = "ULTRA", angle = 0 }) {
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const floatY = isLow ? 0 : Math.sin((angle * Math.PI) / 42) * 1.8;

      return (
        <g>
          {/* LOBO AULLANDO A LA IZQUIERDA Y CHACAL/PERRO A LA DERECHA */}
          {/* Lobo Salvaje (Izquierda, en Obsidiana y Oro) */}
          <g transform="translate(68, 224)">
            <polygon points="-24,32 -18,4 -4,-10 4,-26 12,-14 22,-18 14,-2 12,32" fill="#020105" transform="translate(1, 2.5)" />
            <polygon points="-22,30 -16,4 -4,-10 4,-26 10,-14 20,-18 12,-2 10,30" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="6" cy="-12" r="1.5" fill="#fef08a" />
          </g>

          {/* Perro / Chacal Domesticado (Derecha, en Plata Lunar y Oro) */}
          <g transform="translate(172, 224) scale(-1, 1)">
            <polygon points="-24,32 -18,4 -4,-10 4,-26 12,-14 22,-18 14,-2 12,32" fill="#020105" transform="translate(1, 2.5)" />
            <polygon points="-22,30 -16,4 -4,-10 4,-26 10,-14 20,-18 12,-2 10,30" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="6" cy="-12" r="1.5" fill="#1e0836" />
          </g>

          {/* ESTANQUE ABISMAL Y EL CANGREJO / ESCARABAJO SAGRADO EMERGIENDO DE LAS AGUAS */}
          <g transform={"translate(120, " + (274 + floatY) + ")"}>
            <ellipse cx="0" cy="10" rx="88" ry="22" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <ellipse cx="0" cy="10" rx="64" ry="14" fill="url(#v-amethyst)" stroke="url(#v-silver)" strokeWidth="0.9" />

            {/* Caparazón Poliédrico y Tenazas del Guardián del Subconsciente */}
            <polygon points="0,-20 18,-6 14,16 0,24 -14,16 -18,-6" fill="#020105" transform="translate(0, 3)" />
            <polygon points="0,-20 18,-6 14,16 0,24 -14,16 -18,-6" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinejoin="round" />
            {/* Tenazas Curvas Elevadas hacia la Luna */}
            <path d="M-12,-12 C-26,-24 -24,-38 -10,-34 C-16,-28 -16,-20 -8,-16 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <path d="M12,-12 C26,-24 24,-38 10,-34 C16,-28 16,-20 8,-16 Z" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            {/* Patas Articuladas */}
            <path d="M-16,-2 L-30,-8 M-16,6 L-32,6 M-14,14 L-28,20 M16,-2 L30,-8 M16,6 L32,6 M14,14 L28,20" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" strokeLinecap="round" />
            {EnergyCore && <EnergyCore cx={0} cy={0} r={5} quality={quality} angle={angle} />}
          </g>
        </g>
      );
    });

    const cardDef = {
      id: "moon",
      numeral: "XVIII",
      name: "La Luna",
      subtitle: "El Espejo del Subconsciente",
      archetype: "moon",
      desc: "Entre las dos torres del umbral, el astro nocturno derrama su rocío sobre el lobo, el chacal y el guardián acorazado que emerge del abismo.",
      Midground: MoonMidground,
      Primary: MoonPrimary,
      Foreground: MoonForeground
    };

    window.ARCANA_REGISTRY["moon"] = cardDef;
    window.ARCANA_REGISTRY["la_luna"] = cardDef;
    window.ARCANA_REGISTRY["XVIII"] = cardDef;
    window.ARCANA_REGISTRY[18] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
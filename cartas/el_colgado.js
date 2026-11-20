// ============================================================================
// ARCHIVO: cartas/el_colgado.js
// ARCANO XII: EL COLGADO (El Éxtasis de la Visión Invertida)
// ============================================================================
// - Cero filtros borrosos: Patíbulo Tau de Yggdrasil, pierna en cruz del 4 y halo inferior.
// - 3 Sub-capas internas de Diorama (Midground, Primary, Foreground).
// - Compatible con protocolo local file:/// (Scope Aislado con Babel).
// ============================================================================

window.ARCANA_REGISTRY = window.ARCANA_REGISTRY || {};

(function () {
  const jsxCode = `
    const { memo } = React;

    // 1. ESCENOGRAFÍA INTERMEDIA: EL ÁRBOL TAU VIVIENTE Y EL HALO DE ILUMINACIÓN INFERIOR (Z-Midground)
    const HangedMidground = memo(function HangedMidground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const haloRot = isLow ? "translate(120, 236)" : "translate(120, 236) rotate(" + (-angle * 1.2) + ")";
      const rays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

      return (
        <g>
          {/* Patíbulo Sagrado en Forma de Cruz Tau (Árbol del Mundo Yggdrasil en Obsidiana y Oro) */}
          <rect x="28" y="42" width="16" height="266" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <rect x="196" y="42" width="16" height="266" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" />
          <polygon points="22,36 218,36 212,50 28,50" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" />

          {/* Brotes de Hojas de Oro Viviente Naciendo del Madero Tau */}
          <polygon points="44,50 56,42 52,56" fill="url(#v-gold-3d-face)" />
          <polygon points="196,50 184,42 188,56" fill="url(#v-gold-3d-face)" />
          <polygon points="44,120 56,112 50,126" fill="url(#v-gold-3d-face)" />
          <polygon points="196,120 184,112 190,126" fill="url(#v-gold-3d-face)" />

          {/* GRAN HALO SOLAR DE ILUMINACIÓN EN LA PARTE INFERIOR (Alrededor de la Cabeza Invertida) */}
          <g transform={haloRot}>
            <circle cx="0" cy="0" r="64" fill="url(#v-astral-core)" />
            <circle cx="0" cy="0" r="54" fill="none" stroke="url(#v-gold-3d-face)" strokeWidth="1.2" strokeDasharray="6 3" />
            <circle cx="0" cy="0" r="44" fill="none" stroke="#c084fc" strokeWidth="0.8" />
            {rays.map((deg) => (
              <polygon
                key={deg}
                points="0,-58 3.2,-46 -3.2,-46"
                fill="url(#v-gold-3d-face)"
                transform={"rotate(" + deg + ")"}
              />
            ))}
            {isUltra && (
              <polygon points="0,-52 45,26 -45,26" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.65" />
            )}
          </g>
        </g>
      );
    });

    // 2. CAPA PRINCIPAL: EL INICIADO SUSPENDIDO FORMANDO EL 4 Y EL TRIÁNGULO (Z-Primary)
    const HangedPrimary = memo(function HangedPrimary() {
      return (
        <g>
          {/* CUERDA ASTRAL Y PIERNAS FORMANDO LA CRUZ DEL NÚMERO 4 (El Cuaternario) */}
          <g>
            {/* Cuerda de Oro Atada al Madero Superior y al Tobillo Derecho */}
            <line x1="120" y1="36" x2="120" y2="74" stroke="#020105" strokeWidth="6" />
            <line x1="120" y1="36" x2="120" y2="74" stroke="url(#v-gold-3d-face)" strokeWidth="3.4" />
            <rect x="113" y="42" width="14" height="8" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />
            <rect x="114" y="64" width="12" height="7" rx="2" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />

            {/* Pierna Izquierda Doblada en Ángulo Recto Detrás de la Rodilla Derecha (Forma el 4) */}
            <polygon points="120,112 166,112 156,124 120,124" fill="url(#v-amethyst)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            <polygon points="162,110 140,148 128,142 152,108" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.4" strokeLinejoin="round" />
            {/* Bota Izquierda Facetada */}
            <polygon points="164,112 178,104 174,122 158,122" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.9" />

            {/* Pierna Derecha Vertical Suspendida (Eje Central) */}
            <polygon points="113,70 127,70 132,148 108,148" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.6" />
            <polygon points="114,52 126,52 128,70 112,70" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
          </g>

          {/* TORSO Y TÚNICA INVERTIDA CON BRAZOS EN TRIÁNGULO DETRÁS DE LA ESPALDA */}
          <g transform="translate(120, 178)">
            <polygon points="-28,-34 28,-34 52,22 36,36 -36,36 -52,22" fill="#020105" transform="translate(0, 3)" />
            {/* Túnica Invertida de Obsidiana y Amatista cayendo por gravedad hacia los hombros */}
            <polygon points="-26,-34 26,-34 48,20 34,34 -34,34 -48,20" fill="url(#v-obsidian-deep)" stroke="url(#v-gold-3d-face)" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="-16,-34 16,-34 28,26 -28,26" fill="url(#v-amethyst)" stroke="url(#v-gold)" strokeWidth="1.2" />

            {/* Brazos Doblados hacia Atrás Formando el Triángulo Descendente */}
            <polygon points="-48,20 -26,-12 -18,0 -34,30" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />
            <polygon points="48,20 26,-12 18,0 34,30" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.3" />

            {/* Faja Real y Triángulo Alquímico de Agua en el Pecho */}
            <rect x="-26" y="-36" width="52" height="8" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="1" />
            <polygon points="-16,-10 16,-10 0,20" fill="url(#v-obsidian)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" />
          </g>

          {/* CABEZA Y CORONA INVERTIDAS EN ÉXTasis CONTEMPLATIVO (Abajo en y=236) */}
          <g transform="translate(120, 236)">
            <polygon points="-24,-28 24,-28 22,18 0,32 -22,18" fill="#020105" transform="translate(0, 3)" />
            {/* Rostro Invertido en Plata Lunar y Oro (Barbilla arriba, Frente abajo) */}
            <polygon points="-14,-28 14,-28 24,-8 22,18 0,28 -22,18 -24,-8" fill="url(#v-silver)" stroke="url(#v-gold-3d-face)" strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="0,12 -5,-10 0,-16 5,-10" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.7" />

            {/* Ojos Abiertos Iluminados Mirando desde Otro Ángulo de la Realidad */}
            <ellipse cx="-11" cy="4" rx="4.2" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <ellipse cx="11" cy="4" rx="4.2" ry="2.2" fill="#fef08a" stroke="#ffffff" strokeWidth="0.4" />
            <circle cx="-11" cy="4" r="1.2" fill="#ffffff" />
            <circle cx="11" cy="4" r="1.2" fill="#ffffff" />

            {/* Cabellera y Corona Invertidas Cayendo hacia el Abismo */}
            <polygon
              points="-28,16 -34,42 -16,28 0,48 16,28 34,42 28,16"
              fill="url(#v-gold-3d-face)"
              stroke="#fff9e2"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <polygon points="0,44 6,28 0,20 -6,28" fill="url(#v-amethyst-bright)" stroke="#ffffff" strokeWidth="0.8" />
          </g>
        </g>
      );
    });

    // 3. SUB-CAPA FRONTAL: MONEDAS/ESTRELLAS DESPRENDIÉNDOSE Y TERCER OJO ILUMINADO (Z-Foreground)
    const HangedForeground = memo(function HangedForeground({ quality = "ULTRA", angle = 0 }) {
      const isUltra = quality === "ULTRA";
      const isLow = quality === "LOW";
      const EnergyCore = window.LivingEnergyCore;
      const swayX = isLow ? 0 : Math.sin((angle * Math.PI) / 45) * 2;
      const dashOffset = isUltra ? -(angle * 2.4) : 0;

      return (
        <g transform={"translate(" + swayX + ", 0)"}>
          {/* Hilos de Gravedad Invertida Ascendiendo desde el Cuerpo */}
          {isUltra && (
            <g stroke="#fef08a" strokeWidth="0.9" strokeDasharray="3 8" strokeDashoffset={dashOffset} opacity="0.8">
              <line x1="76" y1="248" x2="76" y2="128" />
              <line x1="164" y1="248" x2="164" y2="128" />
            </g>
          )}

          {/* Gemas y Pentáculos Dorados Cayendo de sus Bolsillos (Renuncia al Ego Material) */}
          <g transform="translate(76, 174)">
            <polygon points="0,-7 7,0 0,7 -7,0" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.6" />
          </g>
          <g transform="translate(68, 206)">
            <circle r="5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
          </g>
          <g transform="translate(164, 174)">
            <polygon points="0,-7 7,0 0,7 -7,0" fill="url(#v-gold-3d-face)" stroke="#ffffff" strokeWidth="0.6" />
          </g>
          <g transform="translate(172, 206)">
            <circle r="5" fill="url(#v-gold-3d-face)" stroke="#040207" strokeWidth="0.7" />
          </g>

          {/* Núcleo de Luz Viva en el Tercer Ojo Invertido y en el Nudo Superior */}
          {EnergyCore && <EnergyCore cx={120} cy={46} r={4.5} quality={quality} angle={angle} />}
          {EnergyCore && <EnergyCore cx={120} cy={184} r={5} quality={quality} angle={angle} />}
          {EnergyCore && <EnergyCore cx={120} cy={254} r={7.5} quality={quality} angle={angle} />}
        </g>
      );
    });

    const cardDef = {
      id: "hanged",
      numeral: "XII",
      name: "El Colgado",
      subtitle: "La Visión Invertida",
      archetype: "hanged",
      desc: "Suspendido del árbol Tau formando con sus piernas la cruz del cuatro y con sus brazos el triángulo, alcanza la iluminación en la entrega total.",
      Midground: HangedMidground,
      Primary: HangedPrimary,
      Foreground: HangedForeground
    };

    window.ARCANA_REGISTRY["hanged"] = cardDef;
    window.ARCANA_REGISTRY["el_colgado"] = cardDef;
    window.ARCANA_REGISTRY["XII"] = cardDef;
    window.ARCANA_REGISTRY[12] = cardDef;
  `;

  if (typeof Babel !== "undefined") {
    const wrapped = "(function() {\n" + jsxCode + "\n})();";
    const compiled = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
    (0, eval)(compiled);
  }
})();
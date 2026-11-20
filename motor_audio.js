// ============================================================================
// ARCHIVO: motor_audio.js
// Motor de Sonido Neuro-Acústico AAA + Feedback Háptico (Web Audio + Vibration API)
// Sintetizador multi-capa: Sub-Bass, Síntesis FM Cristalina, Ruido Texturizado,
// Reverberación de Templo por Convolución, Compresor Master y Paneo Estéreo.
// ============================================================================

class ArcaneSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    // Escala pentatónica/dórica luminosa para el abanico de cartas
    this.harpScale = [146.83, 164.81, 174.61, 196.00, 220.00, 246.94, 293.66];
    this.noiseBuffer = null;
    this.reverbNode = null;
    this.hapticTimers = [];
  }

  // ==========================================================================
  // 1. INICIALIZACIÓN DE CADENA MASTERING AAA (Compresor + Reverb + Delay)
  // ==========================================================================
  init() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.ctx) return;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();

    // Compresor Dinámico Master (Pegada estilo Clash Royale / Candy Crush sin saturar)
    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
    this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
    this.compressor.ratio.setValueAtTime(3.5, this.ctx.currentTime);
    this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
    this.compressor.release.setValueAtTime(0.18, this.ctx.currentTime);

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.82;

    // Delay Estéreo con filtro cálido
    this.delayNode = this.ctx.createDelay(1.0);
    this.delayNode.delayTime.value = 0.26;
    this.feedbackGain = this.ctx.createGain();
    this.feedbackGain.gain.value = 0.30;
    const delayFilter = this.ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 2600;

    this.delayNode.connect(delayFilter);
    delayFilter.connect(this.feedbackGain);
    this.feedbackGain.connect(this.delayNode);
    this.delayNode.connect(this.masterGain);

    // Reverberación de Catedral Astral (Impulso Sintético Estéreo)
    this.reverbNode = this.ctx.createConvolver();
    this.reverbNode.buffer = this._createTempleImpulse(2.1, 2.8);
    this.reverbGain = this.ctx.createGain();
    this.reverbGain.gain.value = 0.28;
    this.reverbNode.connect(this.reverbGain);
    this.reverbGain.connect(this.masterGain);

    // Conexión final a salida
    this.masterGain.connect(this.compressor);
    this.compressor.connect(this.ctx.destination);

    // Buffer de Ruido Blanco pre-calculado para texturas físicas ("crunch", roce y cristal)
    this.noiseBuffer = this._createNoiseBuffer(2.0);
  }

  _createNoiseBuffer(durationSec) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * durationSec);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  _createTempleImpulse(durationSec, decay) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * durationSec);
    const impulse = this.ctx.createBuffer(2, length, sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const channelData = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        const env = Math.pow(1 - i / length, decay);
        channelData[i] = (Math.random() * 2 - 1) * env * 0.5;
      }
    }
    return impulse;
  }

  _createPanner(panValue = 0) {
    if (this.ctx.createStereoPanner) {
      const panner = this.ctx.createStereoPanner();
      panner.pan.setValueAtTime(Math.max(-1, Math.min(1, panValue)), this.ctx.currentTime);
      panner.connect(this.masterGain);
      return panner;
    }
    return this.masterGain;
  }

  // ==========================================================================
  // 2. MOTOR HÁPTICO (Web Vibration API para Android + Gamepad API para PC)
  // ==========================================================================
  _clearHapticTimers() {
    while (this.hapticTimers.length) {
      clearTimeout(this.hapticTimers.pop());
    }
  }

  vibrate(pattern, gamepadIntensity = { weak: 0.3, strong: 0.15, duration: 40 }) {
    if (this.muted) return;
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(pattern);
      }
      // Soporte extra si el usuario tiene un joystick conectado en PC
      if (typeof navigator !== 'undefined' && typeof navigator.getGamepads === 'function') {
        const pads = navigator.getGamepads() || [];
        for (let i = 0; i < pads.length; i++) {
          const act = pads[i]?.vibrationActuator;
          if (act && typeof act.playEffect === 'function') {
            act.playEffect('dual-rumble', {
              startDelay: 0,
              duration: gamepadIntensity.duration || 45,
              weakMagnitude: gamepadIntensity.weak || 0.25,
              strongMagnitude: gamepadIntensity.strong || 0.1
            });
          }
        }
      }
    } catch (e) {
      // Silencioso en navegadores que bloquean vibración
    }
  }

  // ==========================================================================
  // 3. ARPA CELESTIAL CON PÚA TÁCTIL Y ARMÓNICOS DE ORO (Hover en Abanico)
  // ==========================================================================
  playHarpNote(index = 0) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freq = this.harpScale[index % this.harpScale.length];
    const pan = ((index % 7) - 3) * 0.22;
    const out = this._createPanner(pan);

    // Micro-respuesta háptica sutil al deslizar por las cartas
    this.vibrate(7, { weak: 0.12, strong: 0, duration: 20 });

    // Capa 1: Transiente de púa (Roce de cuerda dorada)
    if (this.noiseBuffer) {
      const pluckNoise = this.ctx.createBufferSource();
      pluckNoise.buffer = this.noiseBuffer;
      const pluckFilter = this.ctx.createBiquadFilter();
      pluckFilter.type = 'bandpass';
      pluckFilter.frequency.setValueAtTime(freq * 6, now);
      pluckFilter.Q.value = 3.5;
      const pluckGain = this.ctx.createGain();
      pluckGain.gain.setValueAtTime(0.08, now);
      pluckGain.gain.exponentialRampToValueAtTime(0.0005, now + 0.028);
      pluckNoise.connect(pluckFilter);
      pluckFilter.connect(pluckGain);
      pluckGain.connect(out);
      pluckNoise.start(now);
      pluckNoise.stop(now + 0.03);
    }

    // Capa 2: Cuerpo de la cuerda (Fundamental + Octava + Quinta brillante)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const osc3 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3.002, now); // Ligero detune para brillo

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.19, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.55);

    const osc3Gain = this.ctx.createGain();
    osc3Gain.gain.value = 0.22;

    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(osc3Gain);
    osc3Gain.connect(gain);

    gain.connect(out);
    gain.connect(this.delayNode);
    if (this.reverbNode) gain.connect(this.reverbNode);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + 1.6);
    osc2.stop(now + 1.6);
    osc3.stop(now + 1.6);
  }

  // ==========================================================================
  // 4. GOLPE FÍSICO DE CARTA (Sub-Bajo + Fricción de Naipe / "Crunch" AAA)
  // ==========================================================================
  playHeavyCardThud(pitchMultiplier = 1) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const pan = (pitchMultiplier - 1) * 0.9;
    const out = this._createPanner(pan);

    this.vibrate(10, { weak: 0.2, strong: 0.1, duration: 25 });

    // Capa 1: Sub-Bajo de Peso sobre el Altar de Madera
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(92 * pitchMultiplier, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.15);
    gain.gain.setValueAtTime(0.36, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);
    osc.connect(gain);
    gain.connect(out);
    osc.start(now);
    osc.stop(now + 0.18);

    // Capa 2: Fricción Táctil de Cartón Grueso y Oro ("Swish / Snap")
    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1650 * pitchMultiplier, now);
      filter.frequency.exponentialRampToValueAtTime(420, now + 0.075);
      filter.Q.value = 1.8;

      const nGain = this.ctx.createGain();
      nGain.gain.setValueAtTime(0.001, now);
      nGain.gain.linearRampToValueAtTime(0.20, now + 0.006);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      noise.connect(filter);
      filter.connect(nGain);
      nGain.connect(out);
      noise.start(now);
      noise.stop(now + 0.085);
    }
  }

  // ==========================================================================
  // 5. RAMPA DE TENSIÓN Y VIBRACIÓN PROGRESIVA IN-CRESCENDO (Cracking 1.22s)
  // ==========================================================================
  playCrackTensionRiser() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const dur = 1.22;

    // --- PATRÓN HÁPTICO IN-CRESCENDO (Empieza suave y acelera hasta el estallido) ---
    this._clearHapticTimers();
    // En móviles compatibles con patrón directo: pulsos que crecen (10ms -> 85ms) y pausas que se achican (110ms -> 20ms)
    this.vibrate([
      10, 110,
      14, 95,
      18, 80,
      24, 65,
      32, 52,
      42, 40,
      54, 30,
      68, 22,
      85
    ]);
    // Respaldo progresivo para Gamepad / motores por pulsos individuales
    const steps = [
      { ms: 0, d: 12, w: 0.1, s: 0.0 },
      { ms: 160, d: 18, w: 0.18, s: 0.05 },
      { ms: 330, d: 24, w: 0.28, s: 0.10 },
      { ms: 500, d: 32, w: 0.40, s: 0.18 },
      { ms: 670, d: 42, w: 0.55, s: 0.28 },
      { ms: 840, d: 55, w: 0.72, s: 0.42 },
      { ms: 1010, d: 75, w: 0.90, s: 0.65 }
    ];
    steps.forEach((st) => {
      const tid = setTimeout(() => {
        this.vibrate(st.d, { weak: st.w, strong: st.s, duration: st.d });
      }, st.ms);
      this.hapticTimers.push(tid);
    });

    // Capa 1: Sub-Riser de Tensión Armónica
    const subOsc = this.ctx.createOscillator();
    const crystalOsc = this.ctx.createOscillator();
    const shimmerOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(55, now);
    subOsc.frequency.exponentialRampToValueAtTime(220, now + dur);

    crystalOsc.type = 'triangle';
    crystalOsc.frequency.setValueAtTime(220, now);
    crystalOsc.frequency.exponentialRampToValueAtTime(880, now + dur);

    // Oscilador de octava alta para anticipación dopaminérgica
    shimmerOsc.type = 'sine';
    shimmerOsc.frequency.setValueAtTime(440, now);
    shimmerOsc.frequency.exponentialRampToValueAtTime(1760, now + dur);
    const shimmerGain = this.ctx.createGain();
    shimmerGain.gain.setValueAtTime(0.001, now);
    shimmerGain.gain.exponentialRampToValueAtTime(0.14, now + dur - 0.04);

    filter.type = 'lowpass';
    filter.Q.value = 4.2;
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.exponentialRampToValueAtTime(4800, now + dur);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.exponentialRampToValueAtTime(0.32, now + dur - 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur + 0.02);

    subOsc.connect(filter);
    crystalOsc.connect(filter);
    shimmerOsc.connect(shimmerGain);
    shimmerGain.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    gain.connect(this.delayNode);
    if (this.reverbNode) gain.connect(this.reverbNode);

    subOsc.start(now);
    crystalOsc.start(now);
    shimmerOsc.start(now);
    subOsc.stop(now + dur + 0.03);
    crystalOsc.stop(now + dur + 0.03);
    shimmerOsc.stop(now + dur + 0.03);

    // Capa 2: Crujido de Cristal Fractalizándose (Micro-pulsos de alta frecuencia)
    if (this.noiseBuffer) {
      const crackNoise = this.ctx.createBufferSource();
      crackNoise.buffer = this.noiseBuffer;
      const hp = this.ctx.createBiquadFilter();
      hp.type = 'bandpass';
      hp.frequency.setValueAtTime(1800, now);
      hp.frequency.exponentialRampToValueAtTime(5200, now + dur);
      hp.Q.value = 3.0;

      const cGain = this.ctx.createGain();
      cGain.gain.setValueAtTime(0.001, now);
      cGain.gain.exponentialRampToValueAtTime(0.16, now + dur - 0.04);
      cGain.gain.exponentialRampToValueAtTime(0.001, now + dur + 0.02);

      crackNoise.connect(hp);
      hp.connect(cGain);
      cGain.connect(this.masterGain);
      crackNoise.start(now);
      crackNoise.stop(now + dur + 0.03);
    }
  }

  // ==========================================================================
  // 6. EXPLOSIÓN Y REVELACIÓN LEGENDARIA (Shatter + Sub-Drop + Acorde Eufórico)
  // ==========================================================================
  playLegendaryRevealImpact() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    this._clearHapticTimers();
    // Golpe háptico de revelación: potente y satisfactorio en dos tiempos (Impacto + Eco), sin aturdir
    this.vibrate([95, 35, 55], { weak: 0.95, strong: 0.85, duration: 150 });

    const now = this.ctx.currentTime;

    // Capa 1: Sub-Drop Cinematográfico de Alto Impacto
    const sub = this.ctx.createOscillator();
    const subPunch = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(105, now);
    sub.frequency.exponentialRampToValueAtTime(24, now + 0.95);

    subPunch.type = 'triangle';
    subPunch.frequency.setValueAtTime(160, now);
    subPunch.frequency.exponentialRampToValueAtTime(32, now + 0.25);
    const punchGain = this.ctx.createGain();
    punchGain.gain.setValueAtTime(0.28, now);
    punchGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

    subGain.gain.setValueAtTime(0.58, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

    sub.connect(subGain);
    subPunch.connect(punchGain);
    punchGain.connect(this.masterGain);
    subGain.connect(this.masterGain);

    sub.start(now);
    subPunch.start(now);
    sub.stop(now + 1.02);
    subPunch.stop(now + 0.28);

    // Capa 2: Estallido de Cristales y Oro (Shatter Burst)
    if (this.noiseBuffer) {
      const shatter = this.ctx.createBufferSource();
      shatter.buffer = this.noiseBuffer;
      const shFilter = this.ctx.createBiquadFilter();
      shFilter.type = 'highpass';
      shFilter.frequency.setValueAtTime(2400, now);

      const shGain = this.ctx.createGain();
      shGain.gain.setValueAtTime(0.34, now);
      shGain.gain.exponentialRampToValueAtTime(0.04, now + 0.14);
      shGain.gain.exponentialRampToValueAtTime(0.0008, now + 0.55);

      shatter.connect(shFilter);
      shFilter.connect(shGain);
      shGain.connect(this.masterGain);
      if (this.reverbNode) shGain.connect(this.reverbNode);
      shatter.start(now);
      shatter.stop(now + 0.58);
    }

    // Capa 3: Acorde Mayor 9na Eufórico (D Major 9th) con apertura estéreo
    const chord = [146.83, 220.00, 293.66, 369.99, 440.00, 659.25];
    chord.forEach((freq, idx) => {
      const startT = now + idx * 0.015;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const pan = this._createPanner(((idx % 2 === 0 ? -1 : 1) * idx) * 0.14);

      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, startT);

      g.gain.setValueAtTime(0.001, startT);
      g.gain.linearRampToValueAtTime(0.13 / (idx * 0.3 + 1), startT + 0.025);
      g.gain.exponentialRampToValueAtTime(0.0008, startT + 2.6);

      osc.connect(g);
      g.connect(pan);
      g.connect(this.delayNode);
      if (this.reverbNode) g.connect(this.reverbNode);

      osc.start(startT);
      osc.stop(startT + 2.65);
    });

    // Capa 4: Polvo de Estrellas Dopaminérgico (Micro-campanas agudas en cascada)
    const sparkles = [1174.66, 1479.98, 1760.00, 2349.32];
    sparkles.forEach((freq, i) => {
      const st = now + 0.06 + i * 0.055;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, st);
      g.gain.setValueAtTime(0.001, st);
      g.gain.linearRampToValueAtTime(0.045, st + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0005, st + 1.4);
      osc.connect(g);
      g.connect(this.delayNode);
      if (this.reverbNode) g.connect(this.reverbNode);
      osc.start(st);
      osc.stop(st + 1.45);
    });
  }

  // ==========================================================================
  // 7. CONSTELACIÓN SKYRIM: CAMPANA FM CRISTALINA + MICRO-VIBRACIÓN DE RECOMPENSA
  // ==========================================================================
  playSkyrimNodeChime(nodeIdx = 0) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    // Micro-vibración táctil nítida de recompensa al tocar/pasar por un perk estelar
    this.vibrate([12, 22, 7], { weak: 0.28, strong: 0.08, duration: 35 });

    const now = this.ctx.currentTime;
    const notes = [587.33, 659.25, 739.99, 880.00, 1174.66];
    const base = notes[nodeIdx % notes.length];
    const pan = this._createPanner(((nodeIdx % 3) - 1) * 0.25);

    // Síntesis FM (Modulación de Frecuencia) para timbre metálico/cristalino real
    const mod = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();
    mod.type = 'sine';
    mod.frequency.setValueAtTime(base * 2.756, now); // Ratio inarmónico de campana de cristal
    modGain.gain.setValueAtTime(base * 0.85, now);
    modGain.gain.exponentialRampToValueAtTime(0.1, now + 0.18);
    mod.connect(modGain);
    mod.start(now);
    mod.stop(now + 0.2);

    // Tríada ascendente de recompensa (Fundamental -> Quinta -> Octava brillante)
    [base, base * 1.498, base * 2.0].forEach((f, i) => {
      const st = now + i * 0.052;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i === 2 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(f, st);

      if (i === 0) {
        modGain.connect(osc.frequency);
      }

      const peak = i === 0 ? 0.15 : i === 1 ? 0.12 : 0.075;
      gain.gain.setValueAtTime(0.001, st);
      gain.gain.linearRampToValueAtTime(peak, st + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0005, st + 1.65);

      osc.connect(gain);
      gain.connect(pan);
      gain.connect(this.delayNode);
      if (this.reverbNode) gain.connect(this.reverbNode);

      osc.start(st);
      osc.stop(st + 1.7);
    });

    // Soplo de brillo etéreo ("Shimmer") al activar el nodo
    if (this.noiseBuffer) {
      const shimmer = this.ctx.createBufferSource();
      shimmer.buffer = this.noiseBuffer;
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(base * 6, now);
      bp.Q.value = 5.0;
      const sGain = this.ctx.createGain();
      sGain.gain.setValueAtTime(0.05, now);
      sGain.gain.exponentialRampToValueAtTime(0.0005, now + 0.16);
      shimmer.connect(bp);
      bp.connect(sGain);
      sGain.connect(pan);
      shimmer.start(now);
      shimmer.stop(now + 0.18);
    }
  }

  // ==========================================================================
  // 8. VOZ DEL ORÁCULO (Pulso Orgánico Cálido)
  // ==========================================================================
  playVoiceTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const baseFreq = 195 + Math.random() * 48;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.72, now + 0.035);

    gain.gain.setValueAtTime(0.028, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.036);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.04);
  }
}

window.sound = new ArcaneSoundEngine();

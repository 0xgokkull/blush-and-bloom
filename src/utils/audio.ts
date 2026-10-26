class CuteAudioManager {
  private ctx: AudioContext | null = null;
  private isPlayingMusic: boolean = false;
  private musicInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft sweet chime note
  playChime(freq = 659.25, duration = 0.5, type: OscillatorType = 'sine') {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // Play a cute pop sound (used on button dodge or quick interaction)
  playCutePop() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Ignored
    }
  }

  // Play a sparkling harp flourish (for celebrations & reveals)
  playSparkleFlourish() {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.7, 'triangle');
      }, idx * 75);
    });
  }

  // Romantic music box generator (sweet lullaby chords)
  startRomanticLofi() {
    if (this.isPlayingMusic) return;
    this.initContext();
    if (!this.ctx) return;

    this.isPlayingMusic = true;

    // Chord progressions: Cmaj7, Am9, Fmaj7, G6
    const chordSequences = [
      [261.63, 329.63, 392.00, 493.88], // C E G B (Cmaj7)
      [220.00, 261.63, 329.63, 392.00, 493.88], // A C E G B (Am9)
      [174.61, 220.00, 261.63, 329.63], // F A C E (Fmaj7)
      [196.00, 246.94, 293.66, 392.00, 440.00], // G B D G A (G6)
    ];

    let chordIdx = 0;
    let step = 0;

    const playStep = () => {
      if (!this.isPlayingMusic || !this.ctx) return;

      const currentChord = chordSequences[chordIdx];
      // Play arpeggiated note
      const noteFreq = currentChord[step % currentChord.length] * (step % 2 === 0 ? 1 : 1.5);
      
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.3);

      step++;
      if (step >= 8) {
        step = 0;
        chordIdx = (chordIdx + 1) % chordSequences.length;
      }
    };

    // Play every 400ms for dreamy music box feel
    playStep();
    this.musicInterval = window.setInterval(playStep, 420);
  }

  stopRomanticLofi() {
    this.isPlayingMusic = false;
    if (this.musicInterval !== null) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  toggleMusic(): boolean {
    if (this.isPlayingMusic) {
      this.stopRomanticLofi();
      return false;
    } else {
      this.startRomanticLofi();
      return true;
    }
  }

  getMusicStatus(): boolean {
    return this.isPlayingMusic;
  }
}

export const audioManager = new CuteAudioManager();

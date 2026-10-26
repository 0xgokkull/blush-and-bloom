class CuteAudioManager {
  private ctx: AudioContext | null = null;
  private bgAudio: HTMLAudioElement | null = null;
  private isPlayingMusic: boolean = false;
  private listeners: Set<(isPlaying: boolean) => void> = new Set();
  // Slightly reduced volume for gentle, romantic background ambience (~35%)
  private volume: number = 0.35;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft sweet chime note for question answers and interactions
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

  // Cute pop sound used when the 'No' button dodges playfully
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

  // Sparkling harp flourish for reveals & celebrations
  playSparkleFlourish() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.7, 'triangle');
      }, idx * 75);
    });
  }

  // Initialize or retrieve background audio element with rasagulla_trim.mp3
  private getBgAudio(): HTMLAudioElement {
    if (!this.bgAudio) {
      const src = `${import.meta.env.BASE_URL}rasagulla_trim.mp3`;
      this.bgAudio = new Audio(src);
      this.bgAudio.loop = true;
      this.bgAudio.volume = this.volume;
      this.bgAudio.preload = 'auto';

      this.bgAudio.addEventListener('pause', () => {
        if (this.isPlayingMusic && this.bgAudio?.paused) {
          this.isPlayingMusic = false;
          this.notifyListeners();
        }
      });

      this.bgAudio.addEventListener('play', () => {
        if (!this.isPlayingMusic) {
          this.isPlayingMusic = true;
          this.notifyListeners();
        }
      });
    }
    return this.bgAudio;
  }

  // Start background romantic music track
  startMusic() {
    try {
      const audio = this.getBgAudio();
      audio.volume = this.volume;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlayingMusic = true;
            this.notifyListeners();
          })
          .catch(() => {
            // Browser autoplay restrictions until user interacts
            this.isPlayingMusic = false;
            this.notifyListeners();
          });
      }
    } catch {
      // Ignored
    }
  }

  // Stop background music track
  stopMusic() {
    try {
      if (this.bgAudio) {
        this.bgAudio.pause();
      }
      this.isPlayingMusic = false;
      this.notifyListeners();
    } catch {
      // Ignored
    }
  }

  // Alias for backward compatibility
  startRomanticLofi() {
    this.startMusic();
  }

  // Alias for backward compatibility
  stopRomanticLofi() {
    this.stopMusic();
  }

  // Toggle play/pause
  toggleMusic(): boolean {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  getMusicStatus(): boolean {
    return this.isPlayingMusic;
  }

  // Allow dynamically adjusting volume (0.0 to 1.0)
  setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.bgAudio) {
      this.bgAudio.volume = this.volume;
    }
  }

  // Subscribe to playback state changes
  subscribe(listener: (isPlaying: boolean) => void): () => void {
    this.listeners.add(listener);
    listener(this.isPlayingMusic);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlayingMusic);
      } catch {
        // Ignored
      }
    });
  }
}

export const audioManager = new CuteAudioManager();

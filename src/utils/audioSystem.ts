// Web Audio API Relaxing Acoustic Piano Sound System for ShaadiChitthi
// 100% offline, zero external audio latency, autoplays smoothly on first user interaction.

class RelaxingPianoSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // ON by default as requested!
  private isPlaying: boolean = false;
  private loopTimer: number | null = null;
  private masterGain: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private listeners: Set<(isMuted: boolean) => void> = new Set();
  private hasInitialized: boolean = false;

  constructor() {
    // Sound is ON by default
    this.isMuted = false;

    // Set up auto-start on first user interaction (touch, click, scroll) to satisfy browser autoplay policy
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        if (!this.hasInitialized) {
          this.initContext();
          if (!this.isMuted) {
            this.startRelaxingPianoLoop();
          }
        }
      };

      ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll', 'keydown'].forEach((event) => {
        window.addEventListener(event, unlockAudio, { once: true, passive: true });
      });
    }
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }

    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      if (!this.masterGain) {
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.22, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }

      this.createReverb();
      this.hasInitialized = true;
    }
  }

  // Create an acoustic wooden grand piano resonance impulse response
  private createReverb() {
    if (!this.ctx || this.reverbNode) return;
    try {
      const sampleRate = this.ctx.sampleRate;
      const length = sampleRate * 2.2; // 2.2s warm acoustic decay
      const impulse = this.ctx.createBuffer(2, length, sampleRate);
      const left = impulse.getChannelData(0);
      const right = impulse.getChannelData(1);

      for (let i = 0; i < length; i++) {
        const decay = Math.exp(-i / (sampleRate * 0.7));
        left[i] = (Math.random() * 2 - 1) * decay;
        right[i] = (Math.random() * 2 - 1) * decay;
      }

      this.reverbNode = this.ctx.createConvolver();
      this.reverbNode.buffer = impulse;
      this.reverbNode.connect(this.masterGain!);
    } catch {
      // Graceful fallback
    }
  }

  public subscribe(callback: (isMuted: boolean) => void) {
    this.listeners.add(callback);
    callback(this.isMuted);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isMuted));
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.initContext();
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return this.isMuted;
  }

  public unmute() {
    this.initContext();
    this.isMuted = false;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 0.4);
    }
    if (!this.isPlaying) {
      this.startRelaxingPianoLoop();
    }
    this.playPianoNote(587.33, 0.4); // D5 gentle bell
    this.notify();
  }

  public mute() {
    this.isMuted = true;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
    }
    this.stopRelaxingPianoLoop();
    this.notify();
  }

  // Play a single realistic piano note with physical string harmonics and hammer felt attack
  public playPianoNote(freq: number, velocity: number = 0.3, startTimeOffset: number = 0) {
    if (this.isMuted && !this.masterGain) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime + startTimeOffset;

      // Piano String Harmonics (Fundamental + warm octave and fifth harmonics)
      const harmonics = [
        { mult: 1, gain: 0.75, decay: 3.2 },
        { mult: 2, gain: 0.35, decay: 2.4 },
        { mult: 3, gain: 0.15, decay: 1.8 },
        { mult: 4, gain: 0.08, decay: 1.2 },
      ];

      harmonics.forEach(({ mult, gain: harmGain, decay }) => {
        const osc = this.ctx!.createOscillator();
        const noteGain = this.ctx!.createGain();

        // Warm triangle-sine hybrid texture for wooden piano sound
        osc.type = mult === 1 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq * mult, now);

        // Gentle acoustic piano envelope: very fast attack, exponential natural decay
        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.linearRampToValueAtTime(velocity * harmGain, now + 0.008);
        noteGain.gain.exponentialRampToValueAtTime(velocity * harmGain * 0.4, now + 0.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        // Connect directly to master and into reverb for realistic hall ambiance
        osc.connect(noteGain);
        noteGain.connect(this.masterGain!);
        if (this.reverbNode) {
          const sendGain = this.ctx!.createGain();
          sendGain.gain.value = 0.4;
          noteGain.connect(sendGain);
          sendGain.connect(this.reverbNode);
        }

        osc.start(now);
        osc.stop(now + decay + 0.1);
      });

      // Hammer felt attack transient (soft click)
      const hammer = this.ctx.createBufferSource();
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.02, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3));
      }
      hammer.buffer = buffer;

      const hammerFilter = this.ctx.createBiquadFilter();
      hammerFilter.type = 'lowpass';
      hammerFilter.frequency.setValueAtTime(1400, now);

      const hammerGain = this.ctx.createGain();
      hammerGain.gain.setValueAtTime(velocity * 0.08, now);
      hammerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

      hammer.connect(hammerFilter);
      hammerFilter.connect(hammerGain);
      hammerGain.connect(this.masterGain);

      hammer.start(now);
    } catch {
      // Graceful fallback
    }
  }

  // Relaxing, romantic piano chord progression (Gentle Dmaj9 -> Bm9 -> Gmaj7 -> Asus4 -> D)
  private startRelaxingPianoLoop() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Frequencies of gentle piano notes (Hz)
    const D3 = 146.83, Fs3 = 185.0, A3 = 220.00, B3 = 246.94;
    const D4 = 293.66, E4 = 329.63, Fs4 = 369.99, G4 = 392.00, A4 = 440.00, Cs5 = 554.37, D5 = 587.33, E5 = 659.25;

    // Musical phrases structured in gentle arpeggios
    const chordProgression: Array<{ notes: Array<{ f: number; t: number; v?: number }> }> = [
      // Phrase 1: Dmaj9 (Warm, open, regal)
      {
        notes: [
          { f: D3, t: 0.0, v: 0.3 },
          { f: A3, t: 0.1, v: 0.22 },
          { f: Fs4, t: 0.45, v: 0.26 },
          { f: A4, t: 0.9, v: 0.24 },
          { f: Cs5, t: 1.4, v: 0.28 },
          { f: E5, t: 1.9, v: 0.22 },
          { f: D5, t: 2.5, v: 0.25 },
        ],
      },
      // Phrase 2: Bm9 (Emotional, tender)
      {
        notes: [
          { f: 123.47, t: 0.0, v: 0.28 }, // B2
          { f: Fs3, t: 0.1, v: 0.22 },
          { f: D4, t: 0.45, v: 0.25 },
          { f: Fs4, t: 0.9, v: 0.24 },
          { f: B3, t: 1.4, v: 0.22 },
          { f: Cs5, t: 1.9, v: 0.26 },
          { f: A4, t: 2.5, v: 0.22 },
        ],
      },
      // Phrase 3: Gmaj7 (Lush, uplifting, spring celebration)
      {
        notes: [
          { f: 98.0, t: 0.0, v: 0.28 }, // G2
          { f: D3, t: 0.1, v: 0.22 },
          { f: G4, t: 0.45, v: 0.25 },
          { f: B3, t: 0.9, v: 0.23 },
          { f: D4, t: 1.4, v: 0.25 },
          { f: Fs4, t: 1.9, v: 0.27 },
          { f: E4, t: 2.5, v: 0.22 },
        ],
      },
      // Phrase 4: Asus4 -> A (Gentle resolution)
      {
        notes: [
          { f: 110.0, t: 0.0, v: 0.28 }, // A2
          { f: E4, t: 0.1, v: 0.22 },
          { f: A3, t: 0.45, v: 0.24 },
          { f: D4, t: 0.9, v: 0.25 },
          { f: Fs4, t: 1.5, v: 0.24 },
          { f: E4, t: 2.1, v: 0.22 },
          { f: D4, t: 2.7, v: 0.2 },
        ],
      },
    ];

    let currentPhrase = 0;
    const phraseDuration = 3200; // 3.2 seconds per chord

    const playNextPhrase = () => {
      if (!this.isPlaying || this.isMuted) return;

      const chord = chordProgression[currentPhrase];
      chord.notes.forEach((note) => {
        this.playPianoNote(note.f, note.v || 0.25, note.t);
      });

      currentPhrase = (currentPhrase + 1) % chordProgression.length;
      this.loopTimer = window.setTimeout(playNextPhrase, phraseDuration);
    };

    playNextPhrase();
  }

  private stopRelaxingPianoLoop() {
    this.isPlaying = false;
    if (this.loopTimer) {
      clearTimeout(this.loopTimer);
      this.loopTimer = null;
    }
  }

  // Interactive chime for wax seal or card preview
  public playSealGlint() {
    this.playPianoNote(880.0, 0.35); // A5 piano bell
    this.playPianoNote(1174.66, 0.25, 0.1); // D6 crystalline finish
  }

  // Tactile paper slide sound
  public playPaperSwoosh() {
    this.playPianoNote(440.0, 0.2); // Warm A4 piano touch
  }

  public playDelicateChime(freq = 880) {
    this.playPianoNote(freq, 0.3);
  }
}

export const soundManager = new RelaxingPianoSystem();

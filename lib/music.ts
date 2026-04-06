type SongPreset = {
  name: string;
  bpm: number;
  bassPattern: number[];
  bassNotes: number[];
  kickPattern: number[];
  hihatPattern: number[];
  snarPattern: number[];
  bassWave: OscillatorType;
  synthWave: OscillatorType;
  synthNotes: number[];
  synthPattern: number[];
  filterFreq: number;
};

const SONGS: SongPreset[] = [
  {
    name: "Funky Basement",
    bpm: 124,
    bassPattern: [1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0],
    bassNotes: [55,0,0,55,0,0,65.4,0,0,73.4,0,0,55,0,82.4,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "sawtooth",
    synthWave: "square",
    synthNotes: [220,0,277.2,0,329.6,0,277.2,0,220,0,329.6,0,277.2,0,220,0],
    synthPattern: [1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0],
    filterFreq: 800,
  },
  {
    name: "Deep House Groove",
    bpm: 122,
    bassPattern: [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
    bassNotes: [41.2,0,0,0,0,0,55,0,0,0,49,0,0,0,0,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1],
    snarPattern: [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0],
    bassWave: "sine",
    synthWave: "triangle",
    synthNotes: [196,0,0,233.1,0,0,261.6,0,196,0,0,233.1,0,0,174.6,0],
    synthPattern: [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0],
    filterFreq: 600,
  },
  {
    name: "Acid Banger",
    bpm: 130,
    bassPattern: [1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0],
    bassNotes: [55,0,73.4,0,0,82.4,0,55,65.4,0,0,82.4,0,55,0,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0],
    hihatPattern: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
    bassWave: "sawtooth",
    synthWave: "sawtooth",
    synthNotes: [330,0,440,0,330,0,392,0,349.2,0,440,0,330,0,294,0],
    synthPattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    filterFreq: 1200,
  },
  {
    name: "Disco Funk",
    bpm: 118,
    bassPattern: [1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0],
    bassNotes: [82.4,0,0,98,0,110,0,0,82.4,0,0,73.4,0,82.4,0,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "square",
    synthWave: "sine",
    synthNotes: [329.6,0,392,0,440,0,392,0,329.6,0,349.2,0,392,0,329.6,0],
    synthPattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    filterFreq: 1000,
  },
  {
    name: "Tech Minimal",
    bpm: 128,
    bassPattern: [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
    bassNotes: [55,0,0,0,0,0,0,0,55,0,0,0,0,0,65.4,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    snarPattern: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "sine",
    synthWave: "triangle",
    synthNotes: [0,0,220,0,0,0,0,0,0,0,196,0,0,0,0,0],
    synthPattern: [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    filterFreq: 500,
  },
  {
    name: "Boogie Night",
    bpm: 120,
    bassPattern: [1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1],
    bassNotes: [65.4,0,82.4,0,0,98,0,0,65.4,0,73.4,0,0,82.4,0,98],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "sawtooth",
    synthWave: "square",
    synthNotes: [261.6,0,329.6,0,392,0,329.6,0,261.6,0,293.7,0,349.2,0,293.7,0],
    synthPattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    filterFreq: 900,
  },
  {
    name: "Soulful Bounce",
    bpm: 116,
    bassPattern: [1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0],
    bassNotes: [73.4,0,0,0,0,82.4,0,0,0,0,65.4,0,0,73.4,0,0],
    kickPattern: [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    hihatPattern: [0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "sine",
    synthWave: "triangle",
    synthNotes: [349.2,0,0,0,440,0,0,0,392,0,0,0,349.2,0,0,0],
    synthPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    filterFreq: 700,
  },
  {
    name: "Garage Pressure",
    bpm: 132,
    bassPattern: [1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0],
    bassNotes: [55,0,0,73.4,0,0,0,82.4,0,0,55,0,0,65.4,0,0],
    kickPattern: [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
    hihatPattern: [1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
    snarPattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    bassWave: "sawtooth",
    synthWave: "square",
    synthNotes: [293.7,0,0,349.2,0,0,392,0,0,349.2,0,0,293.7,0,0,0],
    synthPattern: [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0],
    filterFreq: 1100,
  },
  {
    name: "Sunset Cruise",
    bpm: 114,
    bassPattern: [1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
    bassNotes: [65.4,0,0,0,82.4,0,0,0,73.4,0,0,0,0,0,65.4,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],
    hihatPattern: [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
    snarPattern: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    bassWave: "sine",
    synthWave: "sine",
    synthNotes: [440,0,0,0,392,0,0,0,349.2,0,0,0,0,0,329.6,0],
    synthPattern: [1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
    filterFreq: 500,
  },
  {
    name: "Raw Energy",
    bpm: 135,
    bassPattern: [1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0],
    bassNotes: [55,55,0,73.4,0,82.4,55,0,65.4,0,73.4,0,0,55,82.4,0],
    kickPattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0],
    hihatPattern: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    snarPattern: [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1],
    bassWave: "sawtooth",
    synthWave: "sawtooth",
    synthNotes: [220,0,277.2,0,329.6,0,277.2,0,220,0,329.6,0,277.2,0,349.2,0],
    synthPattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    filterFreq: 1500,
  },
];

export class MusicEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private currentInterval: ReturnType<typeof setInterval> | null = null;
  private currentSongIndex = -1;
  private step = 0;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.35;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private playKick(time: number) {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(30, time + 0.12);
    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    osc.connect(gain);
    gain.connect(this.masterGain!);
    osc.start(time);
    osc.stop(time + 0.15);
  }

  private playHihat(time: number) {
    const ctx = this.getCtx();
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 7000;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    source.start(time);
  }

  private playSnare(time: number) {
    const ctx = this.getCtx();
    // Noise part
    const bufferSize = ctx.sampleRate * 0.1;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 3000;
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    noise.start(time);
    // Tone part
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(200, time);
    osc.frequency.exponentialRampToValueAtTime(100, time + 0.05);
    oscGain.gain.setValueAtTime(0.4, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
    osc.connect(oscGain);
    oscGain.connect(this.masterGain!);
    osc.start(time);
    osc.stop(time + 0.08);
  }

  private playBass(time: number, freq: number, wave: OscillatorType, filterFreq: number) {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = wave;
    osc.frequency.value = freq;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFreq, time);
    filter.frequency.exponentialRampToValueAtTime(200, time + 0.15);
    filter.Q.value = 8;
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  private playSynth(time: number, freq: number, wave: OscillatorType) {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = wave;
    osc.frequency.value = freq;
    filter.type = "lowpass";
    filter.frequency.value = 2000;
    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    osc.start(time);
    osc.stop(time + 0.15);
  }

  playSong(index?: number): string {
    this.stop();
    const ctx = this.getCtx();

    if (index !== undefined) {
      this.currentSongIndex = index % SONGS.length;
    } else {
      this.currentSongIndex = (this.currentSongIndex + 1) % SONGS.length;
    }

    const song = SONGS[this.currentSongIndex];
    this.step = 0;

    const stepDuration = (60 / song.bpm / 4); // 16th notes

    this.currentInterval = setInterval(() => {
      const time = ctx.currentTime;
      const s = this.step % 16;

      if (song.kickPattern[s]) this.playKick(time);
      if (song.hihatPattern[s]) this.playHihat(time);
      if (song.snarPattern[s]) this.playSnare(time);
      if (song.bassPattern[s] && song.bassNotes[s]) {
        this.playBass(time, song.bassNotes[s], song.bassWave, song.filterFreq);
      }
      if (song.synthPattern[s] && song.synthNotes[s]) {
        this.playSynth(time, song.synthNotes[s], song.synthWave);
      }

      this.step++;
    }, stepDuration * 1000);

    return song.name;
  }

  nextSong(): string {
    return this.playSong();
  }

  stop() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
    }
  }

  getCurrentSongName(): string {
    if (this.currentSongIndex < 0) return "";
    return SONGS[this.currentSongIndex].name;
  }
}

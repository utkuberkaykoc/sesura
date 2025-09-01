export interface Sound {
  id: string;
  name: string;
  icon: string;
  color: string;
  url: string;
  defaultVolume: number;
}

export interface Preset {
  name: string;
  description: string;
  sounds: Record<string, number>;
  background: string;
}

export interface Presets {
  [key: string]: Preset;
}

export interface SavedMixes {
  [key: string]: Record<string, number>;
}

export interface AudioManager {
  isInitialized: boolean;
  volumes: Record<string, number>;
  isPlaying: Record<string, boolean>;
  initializeAudio: () => Promise<void>;
  loadSounds: (sounds: Sound[]) => Promise<void>;
  setVolume: (soundId: string, volume: number) => void;
  playAll: (sounds: Sound[]) => void;
  stopAll: () => void;
  toggleSound: (soundId: string, sounds: Sound[]) => void;
  playSound: (soundId: string, url: string) => void;
  stopSound: (soundId: string) => void;
}

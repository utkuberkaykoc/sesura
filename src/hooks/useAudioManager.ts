import { useState, useEffect, useRef, useCallback } from 'react';
import { Sound, AudioManager } from '../types';

export const useAudioManager = (): AudioManager => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [sources, setSources] = useState<Record<string, AudioBufferSourceNode | null>>({});
  const [volumes, setVolumes] = useState<Record<string, number>>({});
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [loadedSounds, setLoadedSounds] = useState<Set<string>>(new Set());
  
  const audioBuffers = useRef<Record<string, AudioBuffer>>({});
  const gainNodes = useRef<Record<string, GainNode>>({});
  const isCleaningUp = useRef(false);

  const initializeAudio = useCallback(async () => {
    if (isInitialized) return;
    
    try {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(context);
      setIsInitialized(true);
    } catch (error) {
      console.error('Audio context başlatılamadı:', error);
    }
  }, [isInitialized]);

  const loadSound = useCallback(async (soundId: string, url: string) => {
    if (!audioContext || loadedSounds.has(soundId)) return;

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      audioBuffers.current[soundId] = audioBuffer;
      setLoadedSounds(prev => new Set(prev).add(soundId));
      console.log(`✅ ${soundId} sesi yüklendi`);
    } catch (error) {
      console.warn(`⚠️ ${soundId} sesi yüklenemedi (${url}), sessiz buffer kullanılıyor`);
      const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.5, audioContext.sampleRate);
      audioBuffers.current[soundId] = buffer;
      setLoadedSounds(prev => new Set(prev).add(soundId));
    }
  }, [audioContext, loadedSounds]);

  const playSound = useCallback(async (soundId: string, url: string) => {
    if (!audioContext) return;

    try {
      if (!loadedSounds.has(soundId)) {
        await loadSound(soundId, url);
      }

      if (isPlaying[soundId] && gainNodes.current[soundId]) {
        gainNodes.current[soundId].gain.setValueAtTime(volumes[soundId] || 0, audioContext.currentTime);
        return;
      }

      if (sources[soundId]) {
        try {
          sources[soundId]?.stop();
        } catch (error) {
        }
        setSources(prev => ({ ...prev, [soundId]: null }));
        setIsPlaying(prev => ({ ...prev, [soundId]: false }));
      }

      if (gainNodes.current[soundId]) {
        try {
          gainNodes.current[soundId].disconnect();
        } catch (error) {
        }
        delete gainNodes.current[soundId];
      }

      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();
      
      source.buffer = audioBuffers.current[soundId];
      source.loop = true;
      
      gainNode.gain.value = volumes[soundId] || 0;
      
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      source.start();
      
      setSources(prev => ({ ...prev, [soundId]: source }));
      setIsPlaying(prev => ({ ...prev, [soundId]: true }));
      gainNodes.current[soundId] = gainNode;
    } catch (error) {
      console.error(`${soundId} çalınamadı:`, error);
    }
  }, [audioContext, sources, volumes, loadedSounds, loadSound, isPlaying]);

  const stopSound = useCallback((soundId: string) => {
    if (sources[soundId]) {
      try {
        sources[soundId]?.stop();
      } catch (error) {
      }
      setSources(prev => ({ ...prev, [soundId]: null }));
      setIsPlaying(prev => ({ ...prev, [soundId]: false }));
    }

    if (gainNodes.current[soundId]) {
      try {
        gainNodes.current[soundId].disconnect();
      } catch (error) {
      }
      delete gainNodes.current[soundId];
    }
  }, [sources]);

  const setVolume = useCallback((soundId: string, volume: number) => {
    setVolumes(prev => ({ ...prev, [soundId]: volume }));
    
    if (gainNodes.current[soundId] && audioContext) {
      gainNodes.current[soundId].gain.setValueAtTime(volume, audioContext.currentTime);
    }
  }, [audioContext, isPlaying]);

  const stopAll = useCallback(() => {
    Object.keys(sources).forEach(soundId => {
      if (sources[soundId]) {
        try {
          sources[soundId]?.stop();
        } catch (error) {
        }
      }
    });

    Object.keys(gainNodes.current).forEach(soundId => {
      try {
        gainNodes.current[soundId].disconnect();
      } catch (error) {
      }
    });

    setSources({});
    setIsPlaying({});
    gainNodes.current = {};
  }, [sources]);

  const playAll = useCallback((soundsData: Sound[]) => {
    stopAll();
    
    setTimeout(() => {
      Object.keys(volumes).forEach(soundId => {
        if (volumes[soundId] > 0) {
          const sound = soundsData.find(s => s.id === soundId);
          if (sound) {
            playSound(soundId, sound.url);
          }
        }
      });
    }, 100);
  }, [volumes, playSound, stopAll]);

  const toggleSound = useCallback((soundId: string, soundsData: Sound[]) => {
    if (isPlaying[soundId]) {
      stopSound(soundId);
    } else if (volumes[soundId] > 0) {
      const sound = soundsData.find(s => s.id === soundId);
      playSound(soundId, sound?.url || '');
    }
  }, [isPlaying, volumes, playSound, stopSound]);

  const loadSounds = useCallback(async (soundList: Sound[]) => {
  }, []);

  useEffect(() => {
    return () => {
      Object.keys(sources).forEach(soundId => {
        if (sources[soundId]) {
          try {
            sources[soundId]?.stop();
          } catch (error) {
          }
        }
      });

      audioBuffers.current = {};
      gainNodes.current = {};

      if (audioContext && audioContext.state !== 'closed') {
        try {
          audioContext.close();
        } catch (error) {
        }
      }
    };
  }, []);

  return {
    isInitialized,
    volumes,
    isPlaying,
    initializeAudio,
    loadSounds,
    playSound,
    stopSound,
    setVolume,
    playAll,
    stopAll,
    toggleSound
  };
};

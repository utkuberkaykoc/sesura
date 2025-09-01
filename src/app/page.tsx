'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Loader2 } from 'lucide-react';
import { useAudioManager } from '../hooks/useAudioManager';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { sounds, presets } from '../data/sounds';
import { SavedMixes } from '../types';
import SoundCard from '../components/SoundCard';
import PresetSection from '../components/PresetSection';
import ControlPanel from '../components/ControlPanel';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [backgroundClass, setBackgroundClass] = useState('bg-gradient-ambient');
  const [savedMixes, setSavedMixes] = useLocalStorage<SavedMixes>('sesura-saves', {});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    isInitialized,
    volumes,
    isPlaying,
    initializeAudio,
    loadSounds,
    setVolume,
    playAll,
    stopAll,
    toggleSound,
    playSound
  } = useAudioManager();

  useEffect(() => {
    const initAudio = async () => {
      await initializeAudio();
      await loadSounds(sounds);
      setIsLoading(false);
    };

    initAudio();
  }, [initializeAudio, loadSounds]);

  useEffect(() => {
    if (isInitialized) {
      sounds.forEach(sound => {
        setVolume(sound.id, sound.defaultVolume);
      });
    }
  }, [isInitialized]);

  const handlePresetSelect = (presetKey: string) => {
    const preset = presets[presetKey];
    if (!preset) return;

    stopAll();

    console.log('Setting background to:', preset.background);
    setBackgroundClass(preset.background);
    setActivePreset(presetKey);

    setTimeout(() => {
      sounds.forEach(sound => {
        setVolume(sound.id, 0);
      });

      setTimeout(() => {
        Object.entries(preset.sounds).forEach(([soundId, volume]) => {
          setVolume(soundId, volume);
        });

        Object.entries(preset.sounds).forEach(([soundId, volume]) => {
          if (volume > 0) {
            const sound = sounds.find(s => s.id === soundId);
            if (sound) {
              playSound(soundId, sound.url);
            }
          }
        });
      }, 50);
    }, 100);
  };

  const handleSaveMix = (name: string) => {
    const currentMix = { ...volumes };
    setSavedMixes(prev => ({
      ...prev,
      [name]: currentMix
    }));
  };

  const handleLoadMix = (name: string) => {
    const mix = savedMixes[name];
    if (!mix) return;

    stopAll();

    setActivePreset(null);
    setBackgroundClass('bg-gradient-ambient');

    setTimeout(() => {
      sounds.forEach(sound => {
        setVolume(sound.id, 0);
      });

      setTimeout(() => {
        Object.entries(mix).forEach(([soundId, volume]) => {
          setVolume(soundId, volume);
        });

        Object.entries(mix).forEach(([soundId, volume]) => {
          if (volume > 0) {
            const sound = sounds.find(s => s.id === soundId);
            if (sound) {
              playSound(soundId, sound.url);
            }
          }
        });
      }, 50);
    }, 100);
  };

  const handleTimerStart = (minutes: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      stopAll();
      alert(`${minutes} dakika geçti! Sesler durduruldu.`);
    }, minutes * 60 * 1000);
  };

  useEffect(() => {
    if (activePreset) return;

    const activeSounds = Object.entries(volumes).filter(([_, volume]) => volume > 0);
    
    if (activeSounds.length === 0) {
      setBackgroundClass('bg-gradient-ambient');
      return;
    }

    const dominantSound = activeSounds.reduce((a, b) => volumes[a[0]] > volumes[b[0]] ? a : b);
    const soundData = sounds.find(s => s.id === dominantSound[0]);
    
    if (soundData) {
      setBackgroundClass(`bg-gradient-${soundData.id}`);
    }
  }, [volumes, activePreset]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (isLoading || !isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-ambient flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-primary-400 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-semibold text-white mb-2">Sesura Yükleniyor</h2>
          <p className="text-gray-400">Ses dosyaları hazırlanıyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-8 pb-32">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Headphones className="text-primary-400" size={32} />
            <h1 className="text-4xl font-bold text-gradient">Sesura</h1>
          </div>
          <p className="text-gray-300 max-w-md mx-auto">
            Çoklu ambient sesleri karıştırarak kendi huzur ortamınızı yaratın
          </p>
        </header>

        <PresetSection 
          presets={presets}
          onPresetSelect={handlePresetSelect}
          activePreset={activePreset}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sounds.map(sound => (
            <SoundCard
              key={sound.id}
              sound={sound}
              volume={volumes[sound.id] || 0}
              isPlaying={isPlaying[sound.id] || false}
              onVolumeChange={setVolume}
              onTogglePlay={(soundId) => toggleSound(soundId, sounds)}
              isActive={volumes[sound.id] > 0}
            />
          ))}
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>
            💡 İpucu: Ses seviyelerini ayarlayarak kendi karışımınızı oluşturun ve kaydedin!
          </p>
        </div>
      </div>

      <ControlPanel
        onPlayAll={() => {
          console.log('Play All clicked, volumes:', volumes);
          playAll(sounds);
        }}
        onStopAll={() => {
          console.log('Stop All clicked');
          stopAll();
        }}
        onSaveMix={handleSaveMix}
        onLoadMix={handleLoadMix}
        onTimerStart={handleTimerStart}
        isPlaying={isPlaying}
        savedMixes={savedMixes}
        backgroundClass={backgroundClass}
      />
    </div>
  );
}

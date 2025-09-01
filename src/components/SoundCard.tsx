import React from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Sound } from '../types';

interface SoundCardProps {
  sound: Sound;
  volume: number;
  isPlaying: boolean;
  onVolumeChange: (soundId: string, volume: number) => void;
  onTogglePlay: (soundId: string) => void;
  isActive: boolean;
}

const SoundCard: React.FC<SoundCardProps> = ({ 
  sound, 
  volume, 
  isPlaying, 
  onVolumeChange, 
  onTogglePlay,
  isActive 
}) => {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(sound.id, newVolume);
  };

  const handleTogglePlay = () => {
    onTogglePlay(sound.id);
  };

  return (
    <div className={`sound-card ${isActive ? 'ring-2 ring-primary-500/50' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{sound.icon}</div>
          <div>
            <h3 className="font-medium text-white">{sound.name}</h3>
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Volume2 size={12} />
              <span>{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleTogglePlay}
          disabled={volume === 0}
          className={`icon-button ${
            volume === 0 
              ? 'text-gray-500 cursor-not-allowed' 
              : isPlaying 
                ? 'text-green-400 hover:text-green-300' 
                : 'text-primary-400 hover:text-primary-300'
          }`}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
          style={{
            background: `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue('--tw-gradient-from') || '#3b82f6'} 0%, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
          }}
        />
        
        <div className="flex justify-between text-xs text-gray-400">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default SoundCard;

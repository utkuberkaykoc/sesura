import React, { useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Presets } from '../types';

interface PresetSectionProps {
  presets: Presets;
  onPresetSelect: (presetKey: string) => void;
  activePreset: string | null;
}

const PresetSection: React.FC<PresetSectionProps> = ({ presets, onPresetSelect, activePreset }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-primary-400" size={20} />
          <h2 className="text-xl font-semibold text-white">Hazır Karışımlar</h2>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            className="icon-button text-gray-400 hover:text-white transition-colors"
            title="Sola kaydır"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="icon-button text-gray-400 hover:text-white transition-colors"
            title="Sağa kaydır"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="grid grid-rows-2 grid-flow-col gap-3 w-max">
            {Object.entries(presets).map(([key, preset]) => (
              <button
                key={key}
                onClick={() => onPresetSelect(key)}
                className={`preset-button text-left transition-all duration-300 w-[200px] md:w-[180px] lg:w-[160px] ${
                  activePreset === key 
                    ? 'bg-primary-600/20 border-primary-500/50 text-primary-300' 
                    : 'hover:bg-gray-700/30'
                }`}
              >
                <div className="font-medium text-sm">{preset.name}</div>
                <div className="text-xs text-gray-400 mt-1 line-clamp-2">{preset.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetSection;

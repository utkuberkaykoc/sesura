import React, { useState } from 'react';
import { Play, Square, Timer, Save, Download } from 'lucide-react';
import { SavedMixes } from '../types';

interface ControlPanelProps {
  onPlayAll: () => void;
  onStopAll: () => void;
  onSaveMix: (name: string) => void;
  onLoadMix: (name: string) => void;
  onTimerStart: (minutes: number) => void;
  isPlaying: Record<string, boolean>;
  savedMixes: SavedMixes;
  backgroundClass?: string;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  onPlayAll, 
  onStopAll, 
  onSaveMix, 
  onLoadMix, 
  onTimerStart,
  isPlaying,
  savedMixes,
  backgroundClass = 'bg-gray-900'
}) => {
  const [showTimer, setShowTimer] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(30);
  const [showSavedMixes, setShowSavedMixes] = useState(false);

  const handleTimerStart = () => {
    if (timerMinutes > 0) {
      onTimerStart(timerMinutes);
      setShowTimer(false);
    }
  };

  const handleSaveMix = () => {
    const name = prompt('Karışımınız için bir isim girin:');
    if (name) {
      onSaveMix(name);
    }
  };

  const getBackgroundColor = () => {
    return 'bg-gray-900/40';
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 backdrop-blur-lg border-t border-gray-800/50 p-4 transition-all duration-1000 ${getBackgroundColor()}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onPlayAll}
              className="control-button flex items-center space-x-2"
            >
              <Play size={18} />
              <span>Tümünü Çal</span>
            </button>
            
            <button
              onClick={onStopAll}
              className="control-button bg-red-600 hover:bg-red-500 flex items-center space-x-2"
            >
              <Square size={18} />
              <span>Tümünü Durdur</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setShowTimer(!showTimer)}
                className="icon-button text-yellow-400 hover:text-yellow-300"
                title="Zamanlayıcı"
              >
                <Timer size={20} />
              </button>
              
              {showTimer && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg p-3 w-48">
                  <div className="text-sm font-medium mb-2">Zamanlayıcı</div>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={timerMinutes}
                    onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 0)}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm mb-2"
                    placeholder="Dakika"
                  />
                  <button
                    onClick={handleTimerStart}
                    className="w-full bg-yellow-600 hover:bg-yellow-500 text-white rounded px-3 py-1 text-sm"
                  >
                    Başlat ({timerMinutes} dk)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleSaveMix}
              className="icon-button text-green-400 hover:text-green-300"
              title="Karışımı Kaydet"
            >
              <Save size={20} />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowSavedMixes(!showSavedMixes)}
                className="icon-button text-blue-400 hover:text-blue-300"
                title="Kaydedilen Karışımlar"
                disabled={Object.keys(savedMixes).length === 0}
              >
                <Download size={20} />
              </button>
              
              {showSavedMixes && Object.keys(savedMixes).length > 0 && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-800 border border-gray-700 rounded-lg p-2 w-48 max-h-48 overflow-y-auto">
                  {Object.entries(savedMixes).map(([name, mix]) => (
                    <button
                      key={name}
                      onClick={() => {
                        onLoadMix(name);
                        setShowSavedMixes(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-700 rounded transition-colors"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;

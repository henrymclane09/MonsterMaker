import React from 'react';
import { Save, RotateCcw, Share2 } from 'lucide-react';

interface ControlPanelProps {
  onSave: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onSave, onReset }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-amber-400">Controls</h2>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={onSave}
          className="w-full py-3 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-md font-medium"
        >
          <Save className="h-5 w-5" />
          Save Creature
        </button>
        
        <button
          onClick={onReset}
          className="w-full py-3 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-md font-medium"
        >
          <RotateCcw className="h-5 w-5" />
          Reset
        </button>
        
        <button
          className="w-full py-3 flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-600 transition-colors rounded-md font-medium"
        >
          <Share2 className="h-5 w-5" />
          Share
        </button>
      </div>
      
      <div className="mt-6 p-4 border border-gray-700 rounded-md bg-black/30">
        <h3 className="text-lg font-medium text-amber-400 mb-2">Quick Tips</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Balance your stats to create specialized creatures</li>
          <li>• Some abilities complement specific stats</li>
          <li>• Be mindful of your creature's diet and habitat</li>
        </ul>
      </div>
    </div>
  );
};

export default ControlPanel;
import React from 'react';
import { abilities } from '../data/abilities';

interface AbilitySelectorProps {
  selectedAbilities: string[];
  onToggle: (abilityId: string) => void;
}

const AbilitySelector: React.FC<AbilitySelectorProps> = ({ selectedAbilities, onToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {abilities.map(ability => {
        const isSelected = selectedAbilities.includes(ability.id);
        
        return (
          <div 
            key={ability.id}
            onClick={() => onToggle(ability.id)}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${isSelected 
                ? 'border-cyan-500 bg-cyan-900/30' 
                : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }
            `}
          >
            <div className="flex items-start gap-3">
              <div 
                className={`
                  w-5 h-5 mt-0.5 rounded-full flex-shrink-0 border-2 transition-colors
                  ${isSelected ? 'border-cyan-400 bg-cyan-500' : 'border-gray-600'}
                `}
              />
              <div>
                <h3 className={`font-bold mb-1 ${isSelected ? 'text-cyan-400' : 'text-gray-300'}`}>
                  {ability.name}
                </h3>
                <p className="text-sm text-gray-400">{ability.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AbilitySelector;
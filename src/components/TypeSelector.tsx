import React, { useState } from 'react';
import { creatureTypes, CreatureType } from '../data/creatureTypes';

interface TypeSelectorProps {
  selectedType: CreatureType;
  onChange: (type: CreatureType) => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ selectedType, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <label htmlFor="creature-type" className="block text-sm font-medium text-gray-400 mb-1">
        Creature Type
      </label>
      <button
        type="button"
        className="w-full md:w-64 px-4 py-2 bg-gray-900/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedType.name}</span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-gray-800 border border-gray-700 max-h-60 overflow-auto">
          <ul className="py-1">
            {creatureTypes.map((type) => (
              <li
                key={type.id}
                className={`
                  px-4 py-2 cursor-pointer hover:bg-gray-700
                  ${selectedType.id === type.id ? 'bg-cyan-900/50 text-cyan-400' : 'text-white'}
                `}
                onClick={() => {
                  onChange(type);
                  setIsOpen(false);
                }}
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TypeSelector;
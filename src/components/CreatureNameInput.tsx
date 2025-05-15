import React from 'react';

interface CreatureNameInputProps {
  name: string;
  onChange: (name: string) => void;
}

const CreatureNameInput: React.FC<CreatureNameInputProps> = ({ name, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor="creature-name" className="block text-sm font-medium text-gray-400 mb-1">
        Creature Name
      </label>
      <input
        type="text"
        id="creature-name"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-900/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition placeholder:text-gray-500"
        placeholder="Enter creature name..."
      />
    </div>
  );
};

export default CreatureNameInput;
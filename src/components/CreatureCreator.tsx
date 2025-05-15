import React, { useState } from 'react';
import StatPanel from './StatPanel';
import CreaturePreview from './CreaturePreview';
import AbilitySelector from './AbilitySelector';
import CreatureNameInput from './CreatureNameInput';
import TypeSelector from './TypeSelector';
import { Creature, CreatureType, DEFAULT_CREATURE } from '../data/creatureTypes';
import ControlPanel from './ControlPanel';

const CreatureCreator: React.FC = () => {
  const [creature, setCreature] = useState<Creature>(DEFAULT_CREATURE);
  
  const handleStatChange = (statName: string, value: number) => {
    setCreature(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [statName]: value
      }
    }));
  };
  
  const handleTypeChange = (type: CreatureType) => {
    setCreature(prev => ({
      ...prev,
      type
    }));
  };
  
  const handleNameChange = (name: string) => {
    setCreature(prev => ({
      ...prev,
      name
    }));
  };
  
  const handleAbilityToggle = (abilityId: string) => {
    setCreature(prev => {
      const hasAbility = prev.abilities.includes(abilityId);
      return {
        ...prev,
        abilities: hasAbility 
          ? prev.abilities.filter(id => id !== abilityId)
          : [...prev.abilities, abilityId]
      };
    });
  };
  
  const handleSave = () => {
    // In a real app, this would save to a database or export a file
    const dataStr = JSON.stringify(creature, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${creature.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  const handleReset = () => {
    setCreature(DEFAULT_CREATURE);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 order-2 lg:order-1">
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
            <CreatureNameInput name={creature.name} onChange={handleNameChange} />
            <TypeSelector selectedType={creature.type} onChange={handleTypeChange} />
          </div>
          
          <StatPanel stats={creature.stats} onChange={handleStatChange} />
        </div>
        
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-cyan-400">Abilities</h2>
          <AbilitySelector 
            selectedAbilities={creature.abilities} 
            onToggle={handleAbilityToggle} 
          />
        </div>
      </div>
      
      <div className="lg:col-span-1 order-1 lg:order-2">
        <CreaturePreview creature={creature} />
        <ControlPanel onSave={handleSave} onReset={handleReset} />
      </div>
    </div>
  );
};

export default CreatureCreator;
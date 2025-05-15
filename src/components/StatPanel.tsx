import React from 'react';
import StatSlider from './StatSlider';
import { Stats } from '../data/creatureTypes';

interface StatPanelProps {
  stats: Stats;
  onChange: (statName: string, value: number) => void;
}

const StatPanel: React.FC<StatPanelProps> = ({ stats, onChange }) => {
  const statConfigs = [
    { name: 'health', label: 'Health', color: 'bg-red-500', max: 100 },
    { name: 'stamina', label: 'Stamina', color: 'bg-green-500', max: 100 },
    { name: 'oxygen', label: 'Oxygen', color: 'bg-blue-500', max: 100 },
    { name: 'food', label: 'Food', color: 'bg-amber-500', max: 100 },
    { name: 'weight', label: 'Weight', color: 'bg-purple-500', max: 100 },
    { name: 'meleeDamage', label: 'Melee Damage', color: 'bg-orange-500', max: 100 },
    { name: 'movementSpeed', label: 'Movement Speed', color: 'bg-cyan-500', max: 100 },
    { name: 'torpidity', label: 'Torpidity', color: 'bg-pink-500', max: 100 },
  ];
  
  const totalPoints = Object.values(stats).reduce((sum, stat) => sum + stat, 0);
  const maxPoints = 400;
  const remainingPoints = maxPoints - totalPoints;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-cyan-400">Stats Distribution</h2>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-400">Points remaining:</div>
          <div className={`font-mono text-lg ${remainingPoints < 0 ? 'text-red-400' : 'text-amber-400'}`}>
            {remainingPoints}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statConfigs.map((stat) => (
          <StatSlider
            key={stat.name}
            label={stat.label}
            value={stats[stat.name as keyof Stats]}
            color={stat.color}
            max={stat.max}
            onChange={(newValue) => onChange(stat.name, newValue)}
            disabled={remainingPoints <= 0 && stats[stat.name as keyof Stats] === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default StatPanel;
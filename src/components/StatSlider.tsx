import React from 'react';

interface StatSliderProps {
  label: string;
  value: number;
  max: number;
  color: string;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const StatSlider: React.FC<StatSliderProps> = ({ 
  label, 
  value, 
  max, 
  color, 
  onChange,
  disabled = false
}) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-1">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-mono text-gray-400">{value}/{max}</span>
      </div>
      <div className="relative h-8 bg-gray-700 rounded-md overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full ${color} transition-all duration-300 ease-out`}
          style={{ width: `${(value / max) * 100}%` }}
        />
        <input
          type="range"
          min="0"
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          disabled={disabled}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-4 h-4 bg-white rounded-full shadow-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default StatSlider;
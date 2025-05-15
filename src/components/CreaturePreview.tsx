import React, { useEffect, useRef } from 'react';
import { Creature } from '../data/creatureTypes';
import { getCreatureImage } from '../utils/creatureUtils';

interface CreaturePreviewProps {
  creature: Creature;
}

const CreaturePreview: React.FC<CreaturePreviewProps> = ({ creature }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw creature background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, 
      canvas.height / 2, 
      0, 
      canvas.width / 2, 
      canvas.height / 2, 
      canvas.width / 2
    );
    
    gradient.addColorStop(0, `rgba(${creature.type.colorRGB}, 0.2)`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // In a real app, we would draw the creature here
    // For now we'll just add a placeholder text
    ctx.font = '20px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.textAlign = 'center';
    ctx.fillText(`${creature.type.name} Preview`, canvas.width / 2, canvas.height / 2);
    
  }, [creature]);
  
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-6 relative overflow-hidden">
      <h2 className="text-xl font-bold mb-4 text-amber-400">{creature.name}</h2>
      
      <div className="aspect-square relative rounded-lg overflow-hidden bg-black/50 mb-4">
        <img
          src={getCreatureImage(creature.type.id)}
          alt={creature.type.name}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
        <canvas 
          ref={canvasRef} 
          width={300} 
          height={300} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        
        {/* Ability indicators */}
        {creature.abilities.length > 0 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {creature.abilities.map(abilityId => (
              <div 
                key={abilityId} 
                className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Type:</span>
          <span className="text-cyan-400 font-medium">{creature.type.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Diet:</span>
          <span className="text-cyan-400 font-medium">{creature.type.diet}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Temperament:</span>
          <span className="text-cyan-400 font-medium">{creature.type.temperament}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Habitat:</span>
          <span className="text-cyan-400 font-medium">{creature.type.habitat}</span>
        </div>
      </div>
    </div>
  );
};

export default CreaturePreview;
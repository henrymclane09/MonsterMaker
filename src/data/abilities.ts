export interface Ability {
  id: string;
  name: string;
  description: string;
  effect: string;
}

export const abilities: Ability[] = [
  {
    id: 'charge',
    name: 'Devastating Charge',
    description: 'A powerful charge attack that deals massive damage and knocks back smaller creatures.',
    effect: 'Increases damage by 50% when sprinting for more than 3 seconds.'
  },
  {
    id: 'roar',
    name: 'Terrifying Roar',
    description: 'A frightening roar that causes smaller creatures to flee in terror.',
    effect: 'Forces creatures under level 30 to flee for 10 seconds, 30 second cooldown.'
  },
  {
    id: 'pack',
    name: 'Pack Mentality',
    description: 'Increases the effectiveness of abilities when in the presence of similar creatures.',
    effect: 'Gain 10% damage and movement speed for each nearby ally of the same species.'
  },
  {
    id: 'ambush',
    name: 'Ambush Predator',
    description: 'Excels at hiding and striking from concealment.',
    effect: 'Gain 30% damage bonus when attacking from stealth or high ground.'
  },
  {
    id: 'armor',
    name: 'Natural Armor',
    description: 'Thick hide or armored plates reduce incoming damage.',
    effect: 'Reduces incoming damage by 25%, but decreases movement speed by 10%.'
  },
  {
    id: 'regen',
    name: 'Enhanced Regeneration',
    description: 'Regenerates health more quickly than other creatures.',
    effect: 'Health regenerates 3x faster when not in combat.'
  },
  {
    id: 'swim',
    name: 'Swift Swimmer',
    description: 'Exceptionally adept at moving through water.',
    effect: 'Swimming speed increased by 40%, oxygen consumption reduced by 30%.'
  },
  {
    id: 'camouflage',
    name: 'Natural Camouflage',
    description: 'Can blend into surroundings to avoid detection.',
    effect: 'Reduces visibility to other creatures by 60% when stationary.'
  },
  {
    id: 'scavenger',
    name: 'Efficient Scavenger',
    description: 'Gains more resources when harvesting corpses.',
    effect: 'Harvesting yields 2x resources and grants a buff that reduces food consumption by 50% for 5 minutes.'
  },
  {
    id: 'parasitic',
    name: 'Parasitic Attachment',
    description: 'Can attach to larger creatures to drain resources.',
    effect: 'Can attach to enemies 4x larger, dealing constant damage and gaining 10% of damage as health.'
  },
  {
    id: 'nightvision',
    name: 'Night Vision',
    description: 'Can see clearly in darkness.',
    effect: 'No vision penalty during nighttime or in caves, 15% increased detection range at night.'
  },
  {
    id: 'poison',
    name: 'Venomous Strike',
    description: 'Attacks have a chance to poison the target.',
    effect: '30% chance per hit to apply poison, dealing 5% max health as damage over 10 seconds.'
  }
];
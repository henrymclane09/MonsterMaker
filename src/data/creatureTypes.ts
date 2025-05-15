export interface Stats {
  health: number;
  stamina: number;
  oxygen: number;
  food: number;
  weight: number;
  meleeDamage: number;
  movementSpeed: number;
  torpidity: number;
}

export interface CreatureType {
  id: string;
  name: string;
  diet: string;
  temperament: string;
  habitat: string;
  colorRGB: string; // RGB format for styling
  baseStats: Stats;
}

export interface Creature {
  name: string;
  type: CreatureType;
  stats: Stats;
  abilities: string[]; // List of ability IDs
}

export const creatureTypes: CreatureType[] = [
  {
    id: 'rex',
    name: 'Tyrannosaurus',
    diet: 'Carnivore',
    temperament: 'Aggressive',
    habitat: 'Forests',
    colorRGB: '200, 50, 50',
    baseStats: {
      health: 80,
      stamina: 50,
      oxygen: 10,
      food: 60,
      weight: 70,
      meleeDamage: 90,
      movementSpeed: 40,
      torpidity: 60
    }
  },
  {
    id: 'raptor',
    name: 'Velociraptor',
    diet: 'Carnivore',
    temperament: 'Aggressive',
    habitat: 'Grasslands',
    colorRGB: '100, 150, 50',
    baseStats: {
      health: 40,
      stamina: 70,
      oxygen: 20,
      food: 50,
      weight: 30,
      meleeDamage: 60,
      movementSpeed: 80,
      torpidity: 40
    }
  },
  {
    id: 'bronto',
    name: 'Brontosaurus',
    diet: 'Herbivore',
    temperament: 'Docile',
    habitat: 'Plains',
    colorRGB: '100, 100, 200',
    baseStats: {
      health: 100,
      stamina: 40,
      oxygen: 30,
      food: 80,
      weight: 100,
      meleeDamage: 30,
      movementSpeed: 20,
      torpidity: 70
    }
  },
  {
    id: 'pteranodon',
    name: 'Pteranodon',
    diet: 'Carnivore',
    temperament: 'Skittish',
    habitat: 'Skies',
    colorRGB: '150, 150, 150',
    baseStats: {
      health: 30,
      stamina: 80,
      oxygen: 60,
      food: 40,
      weight: 20,
      meleeDamage: 30,
      movementSpeed: 90,
      torpidity: 30
    }
  },
  {
    id: 'megalodon',
    name: 'Megalodon',
    diet: 'Carnivore',
    temperament: 'Aggressive',
    habitat: 'Ocean',
    colorRGB: '50, 100, 200',
    baseStats: {
      health: 70,
      stamina: 60,
      oxygen: 100,
      food: 60,
      weight: 60,
      meleeDamage: 80,
      movementSpeed: 70,
      torpidity: 50
    }
  },
  {
    id: 'ankylo',
    name: 'Ankylosaurus',
    diet: 'Herbivore',
    temperament: 'Defensive',
    habitat: 'Mountains',
    colorRGB: '180, 130, 70',
    baseStats: {
      health: 80,
      stamina: 40,
      oxygen: 20,
      food: 60,
      weight: 90,
      meleeDamage: 50,
      movementSpeed: 20,
      torpidity: 80
    }
  },
  {
    id: 'custom',
    name: 'Custom Creature',
    diet: 'Omnivore',
    temperament: 'Varies',
    habitat: 'Multiple',
    colorRGB: '180, 180, 180',
    baseStats: {
      health: 50,
      stamina: 50,
      oxygen: 50,
      food: 50,
      weight: 50,
      meleeDamage: 50,
      movementSpeed: 50,
      torpidity: 50
    }
  }
];

export const DEFAULT_CREATURE: Creature = {
  name: 'New Creature',
  type: creatureTypes[0], // Tyrannosaurus
  stats: { ...creatureTypes[0].baseStats },
  abilities: []
};
export const getCreatureImage = (typeId: string): string => {
  // In a real application, we would have actual images for each creature type
  // For this demo, we'll use placeholder images from a stock photo site
  
  const images: Record<string, string> = {
    rex: 'https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Generic dino toy
    raptor: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Dino toy
    bronto: 'https://images.pexels.com/photos/39347/elephant-african-safari-namibia-39347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Elephant as placeholder for large herbivore
    pteranodon: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Eagle as placeholder for flying creature
    megalodon: 'https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Shark
    ankylo: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Armored creature placeholder
    custom: 'https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Abstract placeholder
  };
  
  return images[typeId] || images.custom;
};

export const calculateCreatureLevel = (stats: Record<string, number>): number => {
  const total = Object.values(stats).reduce((sum, value) => sum + value, 0);
  return Math.floor(total / 10); // Simple level calculation
};
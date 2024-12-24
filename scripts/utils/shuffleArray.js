import { generateRandomIndex } from "./generateRandomIndex.js";

export function shuffleArray(array) {
  const shuffled = [...array];
  shuffled.reduce((_acc, _item, currentIndex) => {
    const randomIndex = generateRandomIndex(shuffled.length);[shuffled[randomIndex], shuffled[currentIndex]] = [
      shuffled[currentIndex],
      shuffled[randomIndex],
    ];
  });
  return shuffled;
}

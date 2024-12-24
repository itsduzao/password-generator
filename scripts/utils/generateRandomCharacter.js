import { CHAR_GROUPS } from "./CHAR_GROUPS.js";
import { generateRandomIndex } from "./generateRandomIndex.js";

export function generateRandomCharacter(characterGroup) {
  const characters = CHAR_GROUPS[characterGroup];
  const randomIndex = generateRandomIndex(characters.length);
  const randomCharacter = characters[randomIndex];
  return randomCharacter;
}

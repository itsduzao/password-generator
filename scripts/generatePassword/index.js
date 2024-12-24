import { generateRandomCharacter } from "../utils/generateRandomCharacter.js"
import { generateRandomIndex } from "../utils/generateRandomIndex.js"
import { shuffleArray } from "../utils/shuffleArray.js"

export function generatePassword({ length, lowercase, uppercase, numbers, specialChars }) {
  const passwordArr = [] 
  const targetLength = Number.parseInt(length)
  const characterGroups = {lowercase, uppercase, numbers, specialChars}

  const selectedCharacterGroups = Object.keys(characterGroups).filter(
    group => characterGroups[group]
  )

  const reorderedSelectedCharGroups = shuffleArray(selectedCharacterGroups)
  
  // Se targetLength > selectedCharacterGroups  
  // adiciona ao menos um char de cada grupo
  reorderedSelectedCharGroups.map(group => {
    if (reorderedSelectedCharGroups.length <= targetLength) {
      passwordArr.push(generateRandomCharacter(group))
    }
  }
  )

  // selectedCharacterGroups > targetLength
  while (passwordArr.length < targetLength) {
    const randomGroup =
      reorderedSelectedCharGroups[generateRandomIndex(reorderedSelectedCharGroups.length)]
    const randomCharacter = generateRandomCharacter(randomGroup)
    passwordArr.push(randomCharacter)
  }

  const password = passwordArr.join('')

  return password
}



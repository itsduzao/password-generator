const CHAR_GROUPS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  specialChars: '!@#$%^&*()_+[]{}|;:,.<>?/'.split(''),
}

export function generatePassword({ length, characterGroups }) {
  const passwordArr = [] 
  const targetLength = Number.parseInt(length)

  const selectedCharacterGroups = Object.keys(characterGroups).filter(
    group => characterGroups[group]
  )

  const reorderedSelectedCharGroups = shuffleArray(selectedCharacterGroups)
  
  // Se targetLength > selectedGroups  
  // adiciona ao menos um char de cada grupo
  reorderedSelectedCharGroups.map(group => {
    if (reorderedSelectedCharGroups.length <= targetLength) {
      passwordArr.push(generateRandomCharacter(group))
    }
  }
  )

  // selectedGroups > targetLength
  while (passwordArr.length < targetLength) {
    const randomGroup =
      reorderedSelectedCharGroups[generateRandomIndex(reorderedSelectedCharGroups.length)]
    const randomCharacter = generateRandomCharacter(randomGroup)
    passwordArr.push(randomCharacter)
  }

  const password = passwordArr.join('')
  console.log("🚀 ~ generatePassword ~ password:", password)

  return password
}

function generateRandomCharacter(characterGroups) {
  const chars = CHAR_GROUPS[characterGroups]
  const randomIndex = generateRandomIndex(chars.length)
  const randomCharacter = chars[randomIndex]
  return randomCharacter
}

function generateRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

function shuffleArray(array) {
  const shuffled = [...array]
  shuffled.reduce((_acc, _item, currentIndex) => {
    const randomIndex = generateRandomIndex(shuffled.length)
    ;[shuffled[randomIndex], shuffled[currentIndex]] = [
      shuffled[currentIndex],
      shuffled[randomIndex],
    ]
  })
  return shuffled
}


const myObj = {length: 2, characterGroups: {
  lowercase: true,
  uppercase: true,
  numbers: true,
  specialChars: true
}} 

generatePassword(myObj)
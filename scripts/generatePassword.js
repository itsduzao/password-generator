const CHAR_GROUPS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  specialChars: '!@#$%^&*()_+[]{}|;:,.<>?/'.split(''),
}

export function generatePassword(options) {
  const targetLength = Number.parseInt(options.length)

  const selectedCharGroups = Object.keys(options.charGroups).filter(
    group => options.charGroups[group]
  )

  const tempPassword = selectedCharGroups.map(group =>
    generateRandomCharacter(group)
  )

  while (tempPassword.length < targetLength) {
    const randomGroup =
      selectedCharGroups[generateRandomIndex(selectedCharGroups)]
    const randomCharacter = generateRandomCharacter(randomGroup)
    tempPassword.push(randomCharacter)
  }

  const password = shuffleArray(tempPassword).join("")

  return password
}

function generateRandomCharacter(charGroup) {
  const chars = CHAR_GROUPS[charGroup]
  const randomIndex = generateRandomIndex(chars)
  const randomCharacter = chars[randomIndex]
  return randomCharacter
}

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function shuffleArray(array) {
  const shuffled = [...array]
  shuffled.reduce((acc, item, currentIndex) => {
    const randomIndex = generateRandomIndex(array);
    [shuffled[randomIndex], shuffled[currentIndex]] = [shuffled[currentIndex], shuffled[randomIndex]]
  })
  return shuffled
}


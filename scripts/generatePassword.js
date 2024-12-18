const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  specialChars: '!@#$%^&*()_+[]{}|;:,.<>?/'.split(''),
}

export function generatePassword (options) {
  let password = ''
  let charactersArray = [...CHAR_SETS.uppercase, ...CHAR_SETS.lowercase]
  
  let passwordLength = Number.parseInt(options.length)

  const includeNumber = options.number
  const includeSpecialCharacter = options.symbol

  if (includeNumber) {
    charactersArray = charactersArray.concat(CHAR_SETS.numbers)
  }
  
  if (includeSpecialCharacter) {
    charactersArray = charactersArray.concat(CHAR_SETS.specialChars)
  }

  let charactersLength = charactersArray.length

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = getRandomIndex(charactersLength)
    password += charactersArray[randomIndex]
  }
  return password
}

function getRandomIndex(length){
  return Math.floor(Math.random() * length)
}

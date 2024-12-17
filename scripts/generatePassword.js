const CHAR_SETS = {
  capitalLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  lowerLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  specialCharacters: '!@#$%^&*()_+[]{}|;:,.<>?/'.split(''),
}

export function generatePassword (length) {
  let password = ''
  const allCharacters = [
    ...CHAR_SETS.capitalLetters,
    ...CHAR_SETS.lowerLetters,
    ...CHAR_SETS.numbers,
    ...CHAR_SETS.specialCharacters,
  ]

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters[randomIndex]
  }

  return password
}
import { generatePassword } from './scripts/generatePassword.js'

const btnGeneratePassword = document.getElementById('btn-generate-password')
const passwordDisplayElement = document.getElementById('password-output')
const passwordLengthOptionElement = document.getElementById(
  'password-length-input'
)
const passwordNumbersOptionElement = document.getElementById(
  'password-numbers-checkbox'
)
const passwordSpecialCharsOptionElement = document.getElementById(
  'password-special-chars-checkbox'
)

btnGeneratePassword.addEventListener('click', () => {
  const passwordLength = passwordLengthOptionElement.value
  const includeNumber = passwordNumbersOptionElement.checked
  const includeSpecialChar = passwordSpecialCharsOptionElement.checked

  const passwordOptions = {
    length: passwordLength,
    charGroups: {
    lowercase: true,
    uppercase: true,
    numbers: includeNumber,
    specialChars: includeSpecialChar,
    }
  }

  const password = generatePassword(passwordOptions)
  passwordDisplayElement.value = password
})


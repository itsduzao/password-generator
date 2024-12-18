import { generatePassword } from './scripts/generatePassword.js'

const btnGeneratePassword = document.getElementById('btn-generate-password')
const passwordDisplayElement = document.getElementById('password-output')
const passwordLengthOptionElement = document.getElementById(
  'password-length-input'
)
const passwordNumberOptionElement = document.getElementById(
  'password-number-checkbox'
)
const passwordSymbolOptionElement = document.getElementById(
  'password-symbols-checkbox'
)

btnGeneratePassword.addEventListener('click', () => {
  const passwordLength = passwordLengthOptionElement.value
  const addNumber = passwordNumberOptionElement.checked
  const addSymbol = passwordSymbolOptionElement.checked

  const passwordOptions = {
    length: passwordLength,
    number: addNumber,
    symbol: addSymbol,
  }

  const password = generatePassword(passwordOptions)
  passwordDisplayElement.value = password
})


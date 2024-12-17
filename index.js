import { generatePassword } from './scripts/generatePassword.js'

const btnGeneratePassword = document.getElementById('btn-generate-password')
const passwordDisplayElement = document.getElementById('password-output')

btnGeneratePassword.addEventListener('click', () => {
  const password = generatePassword(15)
  passwordDisplayElement.value = password
})


import { generatePassword } from './scripts/generatePassword.js'

const btnGeneratePassword = document.getElementById('btn-generate-password')
const passwordDisplayElement = document.getElementById('password-output')
const passwordLengthInput = document.getElementById(
  'password-length-input'
)
const includeNumbersCheckbox = document.getElementById(
  'password-numbers-checkbox'
)
const includeSpecialCharsCheckbox = document.getElementById(
  'password-special-chars-checkbox'
)

btnGeneratePassword.addEventListener('click', () => {
  const passwordLength = passwordLengthInput.value
  const includeNumber = includeNumbersCheckbox.checked
  const includeSpecialChar = includeSpecialCharsCheckbox.checked

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

const btnCopyToClipBoard = document.getElementById("btn-copy-to-clipboard")

btnCopyToClipBoard.addEventListener('click', () => copyToClipBoard(passwordDisplayElement.value))

async function copyToClipBoard(text) {
  if (!passwordDisplayElement.value) return
  
  try {
    await navigator.clipboard.writeText(passwordDisplayElement.value);
    
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
    
  } catch (err) {
    passwordDisplayElement.select();
    document.execCommand('copy');
  }
}
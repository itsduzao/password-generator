import { generatePassword } from './scripts/generatePassword.js'

const passwordForm = document.getElementById('password-form');
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

document.addEventListener('DOMContentLoaded', () => {
  passwordForm.reset();
});

btnGeneratePassword.addEventListener('click', (event) => {
  event.preventDefault()
  
  const passwordLength = passwordLengthInput.value
  const isNumberIncluded = includeNumbersCheckbox.checked
  const isSpecialCharIncluded = includeSpecialCharsCheckbox.checked

  const passwordOptions = {
    length: passwordLength,
    charGroups: {
    lowercase: true,
    uppercase: true,
    numbers: isNumberIncluded,
    specialChars: isSpecialCharIncluded,
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

function preventPasteAndDrop(event) {
  event.preventDefault();
  return false;
}

passwordLengthInput.addEventListener('paste', preventPasteAndDrop)
passwordLengthInput.addEventListener('drop', preventPasteAndDrop);
passwordLengthInput.addEventListener('dragover', preventPasteAndDrop);

function validateNumberInput(event) {
  return /[0-9]/.test(event.key);
}

passwordLengthInput.addEventListener('keypress', (event) => {
  if (!validateNumberInput(event)) {
    event.preventDefault();
  }
});
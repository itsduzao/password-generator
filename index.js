import { generatePassword } from './scripts/generatePassword.js'

const passwordForm = document.getElementById('password-form');
const passwordLengthInput = document.getElementById(
  'password-length-input'
)
const passwordLengthOutput = document.getElementById('password-length-output')

const passwordCheckboxOptionsContainer = document.getElementById("password-checkbox-container")
const includeLowercaseCheckbox = document.getElementById('password-lowercase-checkbox')
const includeUppercaseCheckbox = document.getElementById('password-uppercase-checkbox')
const includeNumbersCheckbox = document.getElementById(
  'password-numbers-checkbox'
)
const includeSpecialCharsCheckbox = document.getElementById(
  'password-special-chars-checkbox'
)
const checkboxes = passwordCheckboxOptionsContainer.querySelectorAll('input[type="checkbox"]')  

const passwordDisplayElement = document.getElementById('password-output')
const btnGeneratePassword = document.getElementById('btn-generate-password')
const btnCopyToClipBoard = document.getElementById("btn-copy-to-clipboard")

document.addEventListener('DOMContentLoaded', () => {
  passwordForm.reset();
});

passwordCheckboxOptionsContainer.addEventListener("input", () => {
  const selectedCheckboxes = passwordCheckboxOptionsContainer.querySelectorAll('input:checked')
  if (selectedCheckboxes.length > 1) {
    return selectedCheckboxes.forEach(checkbox => checkbox.removeAttribute("disabled"))
  }
  selectedCheckboxes.item(0).setAttribute("disabled", "true")
})

checkboxes.forEach(checkbox => checkbox.addEventListener("input", (event) => {
  const isChecked = event.target.checked
  event.target.setAttribute('aria-checked', `${isChecked}`)
}))

btnGeneratePassword.addEventListener('click', (event) => {
  console.log("🚀 ~ checkboxes.forEach ~ event.target:", event.target)
  console.log("🚀 ~ checkboxes.forEach ~ event.target:", event.target)
  event.preventDefault()
  
  const passwordLength = passwordLengthInput.value
  const isLowercaseIncluded = includeLowercaseCheckbox.checked
  const isUppercaseIncluded = includeUppercaseCheckbox.checked
  const isNumberIncluded = includeNumbersCheckbox.checked
  const isSpecialCharIncluded = includeSpecialCharsCheckbox.checked

  const passwordOptions = {
    length: passwordLength,
    lowercase: isLowercaseIncluded,
    uppercase: isUppercaseIncluded,
    numbers: isNumberIncluded,
    specialChars: isSpecialCharIncluded
  }

  const password = generatePassword(passwordOptions)
  passwordDisplayElement.value = password
})

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

passwordLengthInput.addEventListener('input', (event) => {
  const currentInputValue = event.target.value

  passwordLengthOutput.textContent = currentInputValue

  passwordLengthInput.setAttribute("value", `${currentInputValue}`)
  passwordLengthInput.setAttribute("aria-valuenow", `${currentInputValue}`)
  passwordLengthOutput.setAttribute("aria-valuenow", `${currentInputValue}`)
} )

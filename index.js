import { generatePassword } from './scripts/generatePassword/index.js'
import { getPasswordOptions } from './scripts/utils/getPasswordOptions.js';
import { copyToClipboard } from './scripts/copyToClipboard/index.js'
import { updatePasswordOutputDisplay } from './scripts/events/updatePasswordOutputDisplay.js';
import { toggleCheckboxDisableState } from './scripts/events/toggleCheckboxDisableState.js';
import { updateElementAttribute } from './scripts/events/updateElementAttribute.js'

const elements = {
  form: document.getElementById('password-form'),
  lengthInput: document.getElementById('password-length-input'),
  lengthOutput: document.getElementById('password-length-output'),
  checkboxContainer: document.getElementById('password-checkbox-container'),
  checkboxes: document.querySelectorAll('input[type="checkbox"]'),
  lowercaseCheckbox: document.getElementById('password-lowercase-checkbox'),
  uppercaseCheckbox: document.getElementById('password-uppercase-checkbox'),
  numbersCheckbox: document.getElementById('password-numbers-checkbox'),
  specialCharsCheckbox: document.getElementById('password-special-chars-checkbox'),
  btnGeneratePassword: document.getElementById('btn-generate-password'),
  btnCopyToClipboard: document.getElementById('btn-copy-to-clipboard'),
  passwordOutputField: document.getElementById('password-output'),
}

document.addEventListener('DOMContentLoaded', () => {
  elements.form.reset()
})

elements.lengthInput.addEventListener('input', () => {
  updatePasswordOutputDisplay(elements.lengthInput, elements.lengthOutput)
})

elements.checkboxContainer.addEventListener('input', () => {
  toggleCheckboxDisableState(elements.checkboxContainer)
})

elements.checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => {
  updateElementAttribute(checkbox, 'aria-checked', checkbox.checked)
}))

elements.btnGeneratePassword.addEventListener('click', event => {
  event.preventDefault()
  const options = getPasswordOptions(elements)
  const password = generatePassword(options)
  elements.passwordOutputField.value = password
})

elements.btnCopyToClipboard.addEventListener('click', event => {
  event.preventDefault()
  copyToClipboard(passwordDisplayElement.value)
})


import { generatePassword } from './scripts/generatePassword/index.js'
import { getPasswordOptions } from './scripts/utils/getPasswordOptions.js';
import { copyToClipboard } from './scripts/copyToClipboard/index.js'

const elements = {
  form: document.getElementById('password-form'),
  lengthInput: document.getElementById('password-length-input'),
  lengthOutput: document.getElementById('password-length-output'),
  checkboxContainer: document.getElementById('password-checkbox-container'),
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

passwordCheckboxOptionsContainer.addEventListener('input', () => {
  const selectedCheckboxes =
    passwordCheckboxOptionsContainer.querySelectorAll('input:checked')
  if (selectedCheckboxes.length > 1) {
    return selectedCheckboxes.forEach(checkbox =>
      checkbox.removeAttribute('disabled')
    )
  }
  selectedCheckboxes.item(0).setAttribute('disabled', 'true')
})

checkboxes.forEach(checkbox =>
  checkbox.addEventListener('input', event => {
    const isChecked = event.target.checked
    event.target.setAttribute('aria-checked', `${isChecked}`)
  })
)

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

passwordLengthInput.addEventListener('input', event => {
  const currentInputValue = event.target.value

  passwordLengthOutput.textContent = currentInputValue

  passwordLengthInput.setAttribute('value', `${currentInputValue}`)
  passwordLengthInput.setAttribute('aria-valuenow', `${currentInputValue}`)
  passwordLengthOutput.setAttribute('aria-valuenow', `${currentInputValue}`)
})


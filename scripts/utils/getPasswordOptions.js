export function getPasswordOptions(elements) {
  return {
    length: elements.lengthInput.value,
    lowercase: elements.lowercaseCheckbox.checked,
    uppercase: elements.uppercaseCheckbox.checked,
    numbers: elements.numbersCheckbox.checked,
    specialChars: elements.specialCharsCheckbox.checked
  }
}
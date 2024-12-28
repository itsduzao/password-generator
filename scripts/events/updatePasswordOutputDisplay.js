import { updateElementAttribute } from './updateElementAttribute.js'

export function updatePasswordOutputDisplay(input, output) {
  const currentInputValue = input.valueAsNumber

  output.textContent = currentInputValue

  updateElementAttribute(input, 'value', `${currentInputValue}`)
  updateElementAttribute(input, 'aria-valuenow', `${currentInputValue}`)
  updateElementAttribute(output, 'aria-valuenow', `${currentInputValue}`)
}

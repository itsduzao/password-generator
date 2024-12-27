export function toggleCheckboxDisableState(container) {
  const selectedCheckboxes = container.querySelectorAll('input:checked')
  if (selectedCheckboxes.length > 1) {
    selectedCheckboxes.forEach(checkbox => checkbox.removeAttribute('disabled'))
    return
  }
  selectedCheckboxes.item(0).setAttribute('disabled', 'true')
}

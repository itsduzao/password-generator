import { showToast } from '../utils/showToast.js';

export async function copyToClipboard(text) {
  if (!text) return

  try {
    await navigator.clipboard.writeText(text)
    showToast('Password copied to clipboard!')
  } catch (err) {
    fallbackCopy(text)
    showToast('Password copied to clipboard!')
  }
}

function fallbackCopy(text) {
  const element = document.createElement('textarea')
  element.value = text
  document.body.appendChild(element)
  element.select()
  document.execCommand('copy')
  document.body.removeChild(element)
}
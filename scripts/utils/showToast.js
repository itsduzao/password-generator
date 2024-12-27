export function showToast(message, color = '#10B981') {
  const toast = document.getElementById('copy-toast')
  toast.style.setProperty('--toast-background', color)
  toast.setAttribute('aria-label', 'message')
  toast.textContent = message
  toast.classList.add('show')
  
  setTimeout(() => {
    toast.classList.remove('show')
  }, 3000)
}
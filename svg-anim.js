window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('path').forEach(path => {
    path.style.strokeDasharray = path.getTotalLength()
    path.style.strokeDashoffset = path.getTotalLength()
  })
})
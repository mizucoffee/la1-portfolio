window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('path').forEach(path => {
    path.style.strokeDasharray = path.getTotalLength()
    path.style.strokeDashoffset = path.getTotalLength()
  })
  
  window.addEventListener('scroll', () => {
    if(window.innerHeight/4*3 < window.scrollY) {
      document.querySelector('.standing').classList.add('show')
    }
  })
})
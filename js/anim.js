const images = ['bamboo', 'night', 'penguin', 'redpanda', 'seimei', 'tea', 'tenryuji', 'train', 'white']
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('path').forEach(path => {
    path.style.strokeDasharray = path.getTotalLength()
    path.style.strokeDashoffset = path.getTotalLength()
  })
　
  document.querySelector('.bg').style.backgroundImage = `url(/image/${images[Math.floor(Math.random()*images.length)]}.webp)`;
  
  document.querySelector('#photo-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.add('hidden')
    document.querySelector('#photo').classList.remove('hidden')
  })
  document.querySelector('#photo-back-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.remove('hidden')
    document.querySelector('#photo').classList.add('hidden')
  })
  
  document.querySelector('#about-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.add('hidden')
    document.querySelector('#about').classList.remove('hidden')
  })
  document.querySelector('#about-back-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.remove('hidden')
    document.querySelector('#about').classList.add('hidden')
  })
  
  document.querySelector('#contact-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.add('hidden')
    document.querySelector('#contact').classList.remove('hidden')
  })
  document.querySelector('#contact-back-btn').addEventListener('click',() => {
    document.querySelector('#main').classList.remove('hidden')
    document.querySelector('#contact').classList.add('hidden')
  })
  
  photo-back-btn
})
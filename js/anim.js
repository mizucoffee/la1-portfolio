const images = ['bamboo', 'night', 'penguin', 'redpanda', 'seimei', 'tea', 'tenryuji', 'train', 'white']
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('path').forEach(path => {
    path.style.strokeDasharray = path.getTotalLength()
    path.style.strokeDashoffset = path.getTotalLength()
  })
　
  document.querySelector('.bg').style.backgroundImage = `url(/image/${images[Math.floor(Math.random()*images.length)]}.webp)`;
})
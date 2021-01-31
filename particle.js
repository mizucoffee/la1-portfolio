window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector("#particle-animation")
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "white";
  const stars = []

  function start() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    for (let i = 0; i < canvas.width * canvas.height / 6000; i++) {
      stars.push(new Star())
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.move()
      star.draw()
    })
    setTimeout(loop, 1000 / 30)
  }

  class Star {
    constructor() {
      this.radius = Math.floor(Math.random() * 3) + 1;
      this.x = Math.floor(Math.random() * canvas.width);
      this.y = Math.floor(Math.random() * canvas.height);
      this.speed = (Math.floor(Math.random() * 2) + 0.5);
      this.angle = Math.floor(Math.random() * 360) * Math.PI / 180;
    }

    move() {
      this.x += this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);

      if (this.x < 0) {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * canvas.height);
      }
      if (this.y < 0) {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = canvas.height;
      }
      if (this.x > canvas.width) {
        this.x = 0;
        this.y = Math.floor(Math.random() * canvas.height);
      }
      if (this.y > canvas.height) {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = 0;
      }

      stars.forEach(s => {
        if (s == this) return;
        const kyori = Math.sqrt(Math.pow(s.x - this.x, 2) + Math.pow(s.y - this.y, 2))
        if (kyori < 120 && s.x > this.x) {
          ctx.beginPath();
          //パスの開始座標を指定する
          ctx.moveTo(s.x, s.y);
          //座標を指定してラインを引いていく
          ctx.lineTo(this.x, this.y);
          //パスを閉じる（最後の座標から開始座標に向けてラインを引く）
          ctx.closePath();
          ctx.strokeStyle = `rgba(255,255,255,${(1 - kyori * kyori / 120 ** 2) / 4})`;
          //現在のパスを輪郭表示する
          ctx.stroke();
        }
      })
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,0.5)`;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    }
  }

  start();
  loop();

  window.addEventListener("resize", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    stars.length = 0;
    for (let i = 0; i < canvas.width * canvas.height / 6000; i++) {
      stars.push(new Star())
    }
  })
})
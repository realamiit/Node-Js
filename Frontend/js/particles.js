const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 180; i++){
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 3,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2
    });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    p.x += p.speedX;
    p.y += p.speedY;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#c47840";
    ctx.fill();
  }

  requestAnimationFrame(animateParticles);
}

animateParticles();

drawParticles();
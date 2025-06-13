function revealSurprise() {
  document.getElementById('surprise').style.display = 'block';
  startConfetti();
}

// Confetti effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function ConfettiPiece(x, y, r, c) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.color = c;
  this.dy = Math.random() * 3 + 2;
  this.dx = (Math.random() - 0.5) * 5;
}

function startConfetti() {
  for (let i = 0; i < 200; i++) {
    pieces.push(
      new ConfettiPiece(
        Math.random() * canvas.width,
        Math.random() * canvas.height - canvas.height,
        Math.random() * 6 + 4,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      )
    );
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < pieces.length; i++) {
    let p = pieces[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.dy;
    p.x += p.dx;
    if (p.y > canvas.height) {
      p.y = -10;
    }
  }
  requestAnimationFrame(animateConfetti);
}

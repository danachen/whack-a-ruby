// TODO: 
// 1. create the collision method, so hitting the ruby would create an event with an output
// 2. Set up a score variable to display the number of hits

let hammer = document.getElementById('hammer');
let ruby = document.getElementById('ruby');
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');
let scoreText = document.createElement('span');
let div = document.querySelector('div');

div.appendChild(scoreText);

let hammerX = 300, hammerY = 300;
let rubyX = 150, rubyY = 150;
let before = new Date().getTime();
let xRubyCoord = 150, yRubyCoord = 150;

let scores = 0;

function update() { 
  let now = new Date().getTime()
  ctx.clearRect(0, 0, 600, 600);
  ctx.drawImage(hammer, hammerX, hammerY, 50, 50);
  ctx.drawImage(ruby, xRubyCoord, yRubyCoord, 50, 50 );

  if (now - before > 3000) {
      xRubyCoord = rubyCoord();
      yRubyCoord = rubyCoord();
    before = now;
  }
  collision();
  requestAnimationFrame(update);
}

function rubyCoord() {
    return Math.max(0, Math.random() * 600 - 100);
}

function keyMoves(e) {
  switch(e.key) {
    // FIXME: still not able to contain the hammer from leaving the box
    case('ArrowUp'): 
      if (hammerY -= 50 >= 0) {
        hammerY -= 50;
      } else {
        hammerY = 0;
      }
      break;
    case ('ArrowDown'):
      if (hammerY += 50 <= 600) {
        hammerY += 50;
      } else {
        hammerY = 600;
      }
      break;
    case ('ArrowLeft'):
      if (hammerX -= 50 >= 0) {
        hammerX -= 50;
      } else {
        hammerX = 0;
      }
      break;
    case ('ArrowRight'):
      if (hammerX += 50 <= 600) {
        hammerX += 50;
      } else {
        hammerX = 600;
      }
      break;
  }
};

function calculateCollisionPoint() {
  return Math.sqrt(Math.pow(hammerX - xRubyCoord, 2) + Math.pow(hammerY - yRubyCoord, 2));
}

function addToScore() {
  scores += 1;
  scoreText.textContent = `Scores: ${scores.toString()}`;
}

function collision() {
  // FIXME: something weird here, not reliably adding to the score
  let now = new Date().getTime()
  if (now - before > 1000 && calculateCollisionPoint() < 10) {
    addToScore();
    before = now;
  }
};

document.addEventListener('keydown', keyMoves);

update();
let hammer = document.getElementById('hammer');
let ruby = document.getElementById('ruby');
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');
let div = document.querySelector('div');

let currentScore = document.querySelector('#score');

let hammerX = 300, hammerY = 300;
let rubyX = 150, rubyY = 150;
let beforeUpdate = new Date().getTime();
let beforeCollision = new Date().getTime();
let xRubyCoord = 150, yRubyCoord = 150;

let scores = 0;

function update() { 
  let now = new Date().getTime()
  ctx.clearRect(0, 0, 600, 600);
  ctx.drawImage(hammer, hammerX, hammerY, 120, 120);
  // console.log('hammer: ', hammerX, hammerY)
  ctx.drawImage(ruby, xRubyCoord, yRubyCoord, 50, 50 );
  // console.log('ruby: ', xRubyCoord, yRubyCoord)
  if (now - beforeUpdate > 3000) {
      xRubyCoord = rubyCoord();
      yRubyCoord = rubyCoord();
      beforeUpdate = now;
  }
  collision();
  requestAnimationFrame(update);
}

function rubyCoord() {
    return Math.max(0, Math.random() * 600 - 100);
}

function keyMoves(e) {
  switch(e.key) {
    case('ArrowUp'): 
      if (hammerY -50 >= 0) {
        hammerY -= 50;
      } else {
        hammerY = 0;
      }
      break;
    case ('ArrowDown'):
      if (hammerY + 50 < 600) {
        hammerY += 50;
      } else {
        hammerY = 550;
      }
      break;
    case ('ArrowLeft'):
      if (hammerX - 50 >= 0) {
        hammerX -= 50;
      } else {
        hammerX = 0;
      }
      break;
    case ('ArrowRight'):
      if (hammerX + 50 < 600) {
        hammerX += 50;
      } else {
        hammerX = 550;
      }
      break;
  }
};

function calculateCollisionPoint() {
  return Math.round(Math.sqrt(Math.pow(hammerX - xRubyCoord, 2) + Math.pow(hammerY - yRubyCoord, 2)));
}

function addToScore() {
  scores += 1;
  currentScore.textContent = scores;
}

function collision() {
  // FiXED: something weird here, not reliably adding to the score, because the collision score was set too low, at 50 it seems to work
  // FIXED: when collision occurs, sometimes the hammer holds the ruby and the counter keeps going => this is because I had only one before variable, now it's two separate ones to control collision and the ruby coordinates
  let now = new Date().getTime();
  if (now - beforeCollision > 1000 && calculateCollisionPoint() < 50) {
    hammer.src = "hammer_down.png";
    addToScore();
    setTimeout(function() {hammer.src = "hammer_up_angle.png"}, 1000);
    beforeCollision = now;
  }
};

document.addEventListener('keydown', keyMoves);
update();
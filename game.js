// TODO: 
// 1. Grab the various elements needed from the DOM: hammer, ruby, an area to store the score (can also change the HTML to add the counter)
// 2. Initialize the canvas
// 3. Draw the hammer and ruby on the canvas
// - Requires the use of requestAnimationFrame()
// 4. Manipulate the hammer so that it can move across the screen
// - Make sure the hammer cannot leave the viewport
// 5. Randomize movement of ruby
// - Coordinates of ruby can be randomized with a helper method
// - Delay the painting and repainting of the Ruby image
// 6. Add collision detection using the formula provided
// 7. When collision occurs, track the score of the game

let hammer = document.getElementById('hammer');
let ruby = document.getElementById('ruby');
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');
let div = document.querySelector('div');

let currentScore = document.querySelector('#score');

let hammerX = 300, hammerY = 300;
let rubyX = 150, rubyY = 150;
let before = new Date().getTime();
let xRubyCoord = 150, yRubyCoord = 150;

let scores = 0;

function update() { 
  let now = new Date().getTime()
  ctx.clearRect(0, 0, 600, 600);
  ctx.drawImage(hammer, hammerX, hammerY, 50, 50);
  console.log(hammerX, hammerY)
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
  return Math.sqrt(Math.pow(hammerX - xRubyCoord, 2) + Math.pow(hammerY - yRubyCoord, 2));
}

function addToScore() {
  scores += 1;
  currentScore.textContent = scores;
}

function collision() {
  // FIXME: something weird here, not reliably adding to the score
  // FIXME: when collision occurs, sometimes the hammer holds the ruby and the counter keeps going
  let now = new Date().getTime();
  if (now - before > 500 && calculateCollisionPoint() < 10) {
    addToScore();
    before = now;
  }
};

document.addEventListener('keydown', keyMoves);
update();
// TODO: 
// 1. create the collision method, so hitting the ruby would create an event with an output
// 2. Set up a score variable to display the number of hits

let hammer = document.getElementById('hammer');
let ruby = document.getElementById('ruby');
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

let hammerX = 500, hammerY = 500;
let rubyX = 300, rubyY = 500;
let before = new Date().getTime();
let xRubyCoord = 300, yRubyCoord = 300;

function update() { 
  let now = new Date().getTime()
  ctx.clearRect(0, 0, 800, 800);
  ctx.drawImage(hammer, hammerX, hammerY, 50, 50);
  ctx.drawImage(ruby, xRubyCoord, yRubyCoord, 50, 50 )

  if (now - before > 2000) {
      xRubyCoord = rubyCoord();
      yRubyCoord = rubyCoord();
    before = now;
  }
  requestAnimationFrame(update);
}

function rubyCoord() {
    return Math.max(0, Math.random() * 800 - 100);
}

function keyMoves(e) {
  switch(e.key) {
    case('ArrowUp'): 
      hammerY -= 50;
      break;
    case ('ArrowDown'):
      hammerY += 50;
      break;
    case ('ArrowLeft'):
      hammerX -= 50;
      break;
    case ('ArrowRight'):
        hammerX += 50;
        break;
    }
  };

document.addEventListener('keydown', keyMoves);

update();
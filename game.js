// let canvas = document.getElementById('gameScreen');
// let ctx = canvas.getContext('2d');

// let hammerX = 300;
// let hammerY = 300;
// let hammer = document.getElementById('hammer');
// let ruby = document.getElementById('ruby');

// function update(canvas, ctx) {
//   ctx.drawImage(hammer, hammerX, hammerY, 50, 50);
//   ctx.drawImage(ruby, 500, 500, 70, 70);
//   requestAnimationFrame(update(canvas, ctx));
// }

// function moveHammer(e) {
//   hammerX += 100;
// }

// document.addEventListener('keydown', moveHammer);
// update();

// Steps:

// 1. Place the hammer and ruby on the canvas
// 2. Move the hammer by
// 3. Randomize the ruby movement

let Hammer = {
  init: function() {
    this.x = 500;
    this.y = 500;
  },

  moves: function() {
    document.addEventListener('keydown', keyMoves(e));
  },

  keyMoves: function(e) {
    switch(e.key) {
      case('keyup'): 
        this.y += 100;
        break;
      case ('keydown'):
        this.y -= 100;
        break;
      case ('keyleft'):
        this.x -= 100;
        break;
      case ('keyright'):
          this.x += 100;
          break;
    }
  },
};
let Ruby = {
  init: function() {},
  
  moves: function() {

  },
};

let Game = {
  init: function(width, height) {
    this.width = width;
    this.height = height;
    this.scores = 0;
    this.canvas = document.getElementById('gameScreen');
    this.ctx = this.canvas.getContext('2d');
    this.hammer = document.getElementById('hammer');
    this.ruby = document.getElementById('ruby');
    return this;
  },

  start: function() {
    this.ctx.drawImage(this.hammer, 500, 500, 50, 50);
    this.ctx.drawImage(this.ruby, 300, 500, 50, 50);
    requestAnimationFrame(this.start());
    this.hammer.moves();
    this.ruby.moves();
  },
}

const game = Object.create(Game).init(800, 800);
game.start();


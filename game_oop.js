let Hammer = {
  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    return this;
  },

  keyMoves: function(e) {
    switch(e.key) {
      case('ArrowUp'): 
      console.log(e.key);
        if (this.y -50 >= 0) {
          this.y -= 50;
        } else {
          this.y = 0;
        }
        break;
      case ('ArrowDown'):
        if (this.y + 50 < 600) {
          this.y += 50;
        } else {
          this.y = 550;
        }
        break;
      case ('ArrowLeft'):
        if (this.x - 50 >= 0) {
          this.x -= 50;
        } else {
          this.x = 0;
        }
        break;
      case ('ArrowRight'):
        if (this.x + 50 < 600) {
          this.x += 50;
        } else {
          this.x = 550;
        }
        break;
      }
  },
};

let Ruby = {
  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    return this;
  },
  
  moves: function() {
  },
};

let hammerBefore = new Date().getTime();

let Game = {
  init: function(width, height) {
    this.width = width;
    this.height = height;
    this.scores = 0;
   
    this.hammer = Object.create(Hammer).init(300, 300);
    this.ruby = Object.create(Ruby).init(200, 200);
    return this;
  },

  update: function() {
    document.addEventListener('keydown', e => {
      let hammerNow = new Date().getTime();
      // console.log(e.key);
      // FIXME: how to have the hammer move lockstep and not immediately to the edge, the timer is not working
      console.log(hammerNow - hammerBefore);
      // if (hammerNow - hammerBefore > 1000) {
        this.hammer.keyMoves(e);
      // }
    });
    
    canvas = document.getElementById('gameScreen');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
    let hammer = document.getElementById('hammer');
    let ruby = document.getElementById('ruby');
    ctx.drawImage(hammer, this.hammer.x, this.hammer.y, this.hammer.width, this.hammer.height);
    ctx.drawImage(ruby, this.ruby.x, this.ruby.y, this.ruby.width, this.ruby.height);
    // this.hammer.moves();
    // this.hammer.x += 50;
    // this.hammer.y += 50;
    requestAnimationFrame(this.update.bind(this));
  },
}

const game = Object.create(Game).init(600, 600);
game.update();


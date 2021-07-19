let Hammer = {
  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    return this;
  },

  // keyMoves: function(e) {
  //   // console.log(e);
  //   switch(e.key) {
  //     case('keyup'): 
  //       this.y += 100;
  //       break;
  //     case ('keydown'):
  //       this.y -= 100;
  //       break;
  //     case ('keyleft'):
  //       this.x -= 100;
  //       break;
  //     case ('keyright'):
  //         this.x += 100;
  //         break;
  //   }
  // },

  // logKey: function(e) {
  //   return e;
  // },
  
  moves: function() {
    console.log('moving');
    let that = this;
    document.addEventListener('click', function() {
      console.log(that.x, that.y);
      console.log('moving');
      that.x += 50;
      that.y += 50;
      // return that;
    });
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

let Game = {
  init: function(width, height) {
    this.width = width;
    this.height = height;
    this.scores = 0;
    this.canvas = document.getElementById('gameScreen');
    this.ctx = this.canvas.getContext('2d');
    this.hammer = Object.create(Hammer).init(500, 500);
    this.ruby = Object.create(Ruby).init(300, 500);
    return this;
  },

  update: function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      let hammer = document.getElementById('hammer');
      let ruby = document.getElementById('ruby');
      this.ctx.drawImage(hammer, this.hammer.x, this.hammer.y, this.hammer.width, this.hammer.height);
      this.ctx.drawImage(ruby, this.ruby.x, this.ruby.y, this.ruby.width, this.ruby.height);
      // this.hammer.moves();
      this.hammer.x += 50;
      this.hammer.y += 50;
      requestAnimationFrame(this.update);
  },
}

const game = Object.create(Game).init(800, 800);
game.update();


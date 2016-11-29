
//--References to Visual Components
var canvas = document.getElementById("pong-canvas");
var ctx    = canvas.getContext("2d");
var gameLoop; 

//--Base Data and Functions
var ball = {
  r    : 20,
  x    : 0,
  y    : 0,
  dx   : 0,
  dy   : 0,
  speed: 0,
  color: "#55f",
  reset: function() {  
    this.x = this.r;
    this.y = this.r;
    this.speed = 1;
    this.dx = this.speed;
    this.dy = this.speed;
  },
  move: function() {
    //Change data that represents position of ball
    this.x += this.dx;
    this.y += this.dy;

    //collisions
    if (this.x + this.r >= game.board.width || this.x - this.r <= 0) {
      //horizontal wall collisions
      this.dx *= -1;
    }

    if (this.y - this.r <= 0) {
      //top wall collision
      this.dy *= -1;
    }

    if (this.y + this.r >= game.board.height) {
      //pit drop = death
      game.death();
    }
  },
  update: function() {
    //update visual component of ball
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.fill();
  }
};

var paddle = {
  size: 100,
  x   : 0,
  y   : 0,
  move: function(direction) {
    //Change data that represents positon of paddle
    
  },
  update: function() {
    //update visual representation of paddle
  }  
};
 
var game = {
  inPlay: false,
  points: 0,
  lives : 0,
  reset : function () {
    this.inPlay = true;
    this.points = 0;
    this.lives  = 3;
    
    //launch ball
    ball.reset();
  },
  board: {
    width : 500,
    height: 400
  },
  death: function() {
    //death when ball drops below pit line (bottom)
    ball.y = ball.r ;
  }
};

//--Game Update function
function initGame() {
  //launch game
  game.reset() ;
  
  gameLoop = setInterval(function() {
    //refresh paint area
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, game.board.width, game.board.height);
    ball.move();
    ball.update();
    paddle.update();
  }, 32);
};

initGame();
  

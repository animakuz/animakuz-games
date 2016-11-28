
//--References to Visual Components
var canvas = document.getElementById("pong-canvas");
var ctx    = canvas.getContext("2d");
var gameLoop; 

//--Base Data and Functions
var game = {
  inPlay: false,
  points: 0,
  lives : 0,
  reset : function () {
    this.inPlay = true;
    this.points = 0;
    this.lives  = 3;
  }
};

var ball = {
  size : 50,
  x    : 0,
  y    : 0,
  speed: 0,
  dx   : 0,
  dy   : 0,
  reset: function() {  
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.dx = this.speed;
    this.dy = this.speed;
  },
  move: function() {
    //Change data that represents position of ball
    this.x += this.dx;
    this.y += this.dy;

    //collisions
  },
  update: function() {
    //update visual component of ball
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


//--Game Update function
function initGame() {
  //launch game
  game.reset() ;

  gameLoop = setInterval(function() {
    ball.move();
    ball.update();
    paddle.update();
  }, 32);
};

initGame();
  

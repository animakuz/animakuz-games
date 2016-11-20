//--Base Data
var movesLeft = document.getElementById("moves-left");
var cells     = document.querySelectorAll(".cell");
var grid      = [["","",""],["","",""],["","",""]];
var players   = ["X", "O"];
var game      = {
  movesLeft: 9,
  currentPlayer: 0  
};

//--Gameplay

function initGame() {
  //setup board on initial launching of game
  var i, len = cells.length;

  for (i=0; i<len; i++) {
    cells[i].onclick = function() {    
      var cell   = this;
      var cellId = cell.getAttribute("id");
      var indY   = cellId[1];
      var indX   = cellId[2];

      if (grid[indY][indX] == "") {
        grid[indY][indX] = players[game.currentPlayer];
        cell.innerHTML = players[game.currentPlayer];
        baseFunc.addClass(cell, "occupied");  

        //move to next turn/player
        checkGame();        
      } else {
        alert("Cell already occupied!");
      }
    
    };
  }

  //choose start player
  game.currentPlayer = baseFunc.getRandomInt(0,1);

  //launch game

}

function resetGame() {
  var i, j;

  //reset moves
  game.movesLeft = 9;

  //reset board
  baseFunc.modifyMultiple(cells, function(cell) { 
    cell.innerHTML = "";
  });
 
  //reset cell values
  for (i=0; i<3; i++) {
    for (j=0; j<3; j++) {
      grid[i][j] = "";
    }
  }

  //choose starting player
  game.currentPlayer = baseFunc.getRandomInt(0,1);

  //launch game
}

function endGame() {
  //show game over screen and results

  //give option to start new game
}

function nextTurn() {
  //switch turns
  if (game.currentPlayer == 0) {
    game.currentPlayer = 1;
  } else {
    game.currentPlayer = 0;
  }
}

function checkWin() {
  //check for different cases that equals a win
  return false;
}

function checkGame() {
  //checks if the board to see whether there is a win
  //or the game is over (board full) with no win

  //function called after every player move
  game.movesLeft -= 1;
  movesLeft.innerHTML = game.movesLeft;


  if (checkWin()) {
    //game over - win
  } else {   
    if (game.movesLeft <= 0) {
      //game over - no win
      alert("Game Over");
      resetGame();
    } else {
      nextTurn();
    }   
  }
}


initGame();


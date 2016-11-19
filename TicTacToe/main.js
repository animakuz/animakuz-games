//--Base Data
var cells   = document.querySelectorAll(".cell");
var grid    = [["","",""],["","",""],["","",""]];
var players = ["X", "O"];
var game    = {
  movesLeft: 0,
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
        addClass(cell, "occupied");   
      } else {
        alert("Cell already occupied!");
      }
    
    };
  }

  //choose start player
  game.currentPlayer = getRandomInt(0,1);

  //launch game

}

function resetGame() {
  //reset moves
  game.movesLeft = 9;

  //reset board
   

  //choose starting player
  game.currentPlayer = getRandomInt(0,1);
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
  return true;
}

function checkGame() {
  //checks if the board to see whether there is a win
  //or the game is over (board full) with no win
  if (checkWin()) {
    //game over - win
  } else {   
    if (game.movesLeft <= 0) {
      //game over - no win
    } else {
      nextTurn();
    }   
  }
}


initGame();


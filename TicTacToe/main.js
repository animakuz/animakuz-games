
//--Visual Components
var gameStatus    = document.getElementById("game-status");
var currentPlayer = document.getElementById("current-player");
var movesLeft     = document.getElementById("moves-left");
var newGameBtn    = document.getElementById("new-game");
var cells         = document.querySelectorAll(".cell");

//--Base Data
var grid     = [["","",""],["","",""],["","",""]];
var players  = ["X", "O"];
var game     = {
  movesLeft: 9,
  currentPlayer: 0,
  inPlay: false 
};

//--Gameplay
function resetGame() {
  var i, j;

  //reset moves
  game.movesLeft = 9;
  movesLeft.innerHTML = game.movesLeft;
  
  //reset board
  baseFunc.modifyMultiple(cells, function(cell) { 
    cell.innerHTML = "";
  });
 
  //remove new game button
  baseFunc.addClass(newGameBtn, "hidden");
  
  //reset cell values
  for (i=0; i<3; i++) {
    for (j=0; j<3; j++) {
      grid[i][j] = "";
    }
  }

  //Set starting player
  game.currentPlayer = baseFunc.getRandomInt(0,1);
  currentPlayer.innerHTML = players[game.currentPlayer];  
  
  //show game status
  baseFunc.removeClass(gameStatus, "hidden");

  //launch game
  game.inPlay = true;
  
}

function initGame() {
  //setup board on initial launching of game
  var i, len = cells.length;

  for (i=0; i<len; i++) {
    cells[i].onclick = function() {    
      var cell   = this;
      var cellId = cell.getAttribute("id");
      var indY   = cellId[1];
      var indX   = cellId[2];
      
      if (game.inPlay) {
        if (grid[indY][indX] == "") {
          grid[indY][indX] = players[game.currentPlayer];
          cell.innerHTML = players[game.currentPlayer];
          baseFunc.addClass(cell, "occupied");  
     
          checkGame();        
        } else {
          alert("Cell already occupied!");
        }
      }
    };
  }
  
  //show game status text 
  baseFunc.removeClass(gameStatus, "hidden");

  //launch game
  resetGame();
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
  
  currentPlayer.innerHTML = players[game.currentPlayer];
}

function checkWin() {
  var i, j;
  var rowCount = 0;
  var colCount = 0;
  //check for different cases that equals a win
  if ((9 - game.movesLeft) > 4) {
    //rows
    for (i=0; i<3; i++) {
      rowCount = 0;

      for (j=0; j<3; j++) {
        if (grid[i][j] == players[game.currentPlayer]) {
          rowCount++;
        }  
      }
      
      if (rowCount >= 3) { 
        return true;
      } 
    }   

    //columns
    for (j=0; j<3; j++) {
      colCount = 0;
      
      for (i=0; i<3; i++) {
        if (grid[i][j] == players[game.currentPlayer]) {
          colCount++;
        }
      } 

      if (colCount >= 3) {
        return true;
      }
     } 
    //diagonal    
    

    return false;
  }
}

function newGame() {
  var resp =  confirm("Would you like to start a new game?");
        
  if (resp) {
    resetGame();
  } else {
    alert("Thank you for playing");  
    baseFunc.addClass(gameStatus, "hidden");
    baseFunc.removeClass(newGameBtn, "hidden");
  }
}

function checkGame() {
  /*
    checks the board to see whether there is a win or the 
    game is over (board full) with no win
  */
  var winner;
  game.movesLeft -= 1;
  movesLeft.innerHTML = game.movesLeft;
  
  winner = checkWin();

  if (winner) {
    //game over - win
    alert("Game Over - " + players[game.currentPlayer] + " has won!");
    game.inPlay = false;
    newGame();
  } else {   
    if (game.movesLeft <= 0) {
      //game over - no win

      alert("Game Over - It's a draw!");
      game.inPlay = false;
      newGame();
     
    } else {
      nextTurn();
    }   
  }
}


initGame();


//Other GUI interaction

newGameBtn.onclick = function() {
  resetGame();
};

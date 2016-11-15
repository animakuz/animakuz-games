//--Base Data
var cells   = document.querySelectorAll(".cell");
var grid    = [["","",""],["","",""],["","",""]];
var players = ["X", "O"];


//--Base Functions



//--Gameplay
function resetGame() {
  //reset score
  
  //reset board

  //choose players

}

function initGame() {
  //set board
  var i, len = cells.length;


  for (i=0; i<len; i++) {
    cells[i].onclick = function() {    
      var cellId = this.getAttribute("id");
      var indY  = cellId[1];
      var indX  = cellId[2];
      
      if (grid[indY][indX] == "") {
        grid[indY][indX] = players[0];
        this.innerHTML = players[0];
     
      } else {
        alert("Cell already occupied!");
      }
    
    };
  }

  //set players

  //launch game

}


initGame();



//--User Interaction



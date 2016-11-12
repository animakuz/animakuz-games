
var cells = document.querySelectorAll(".cell");
var i, len = cells.length;

var cellVal = [["","",""],["","",""],["","",""]];


for (i=0; i<len; i++) {
  cells[i].onclick = function() {    
    var cellInds = [];
    var cellId = this.getAttribute("id");
    cellInds[0] = cellId[1];
    cellInds[1] = cellId[2];
    
    cellVal[cellInds[0], cellInds[1]] = "X";
    alert( cellVal[cellInds[0], cellInds[1]]);
 };
}

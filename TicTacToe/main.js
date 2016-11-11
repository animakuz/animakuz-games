
var cells = document.querySelectorAll(".cell");
var i, len = cells.length;

for (i=0; i<len; i++) {
  cells[i].onclick = function() {
    alert("Cell " + this.getAttribute("id") + " clicked");
  };
}

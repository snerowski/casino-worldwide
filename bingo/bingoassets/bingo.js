window.onload = initBingo;
function initBingo() {
      for (var i=0; i<24; i++) {
     		setTile(i);
      }
}
function setTile(thisTile) {
	var currTile = "square" + thisTile;
  var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4);
  var colBasis = colPlace[thisTile]*15;
   var newNum = colBasis + getNewNum()+ 1;
        document.getElementById(currTile).innerHTML = newNum;
}
function getNewNum() {
 return  Math.floor(Math.random() *15);
}
function changeColor(element) {
    var currentColor = element.style.backgroundColor;
    if (currentColor == "red") {
        element.style.backgroundColor = "green";
    }
    
    else {
        element.style.backgroundColor = "red";
    }
}















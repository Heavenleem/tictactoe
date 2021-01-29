let currentPlayer;
currentPlayer = "X";

let numberTurns;
numberTurns = 0;

let gameEnd;
gameEnd = false;
//Declare a function called with two parameters that removes the button of the corresponding ID, and changes the text of the div that is the tileId to the player variable.

function performLogic(buttonID, tileId) {
  $(buttonID).hide();
  $(tileId).text (currentPlayer)
  changeplayer();
  
  console.log (currentPlayer)
  // player just took a turn, time to give the next player a turn
}

function changeplayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    currentPlayer = "X";
  }
}
function wonPlayer(TileId1, TileId2, TileId3){
  
}
//- [ ] Declare a function with 3 parameters of the tileIds, and return if the value of the each of the tileIds are equal to the current player. This function will check if the player has won.





$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});

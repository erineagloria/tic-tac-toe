console.log('tic-tac-toe');

//store players
var numOfPlayers = 2;
var currentPlayer;

// create a variable for max number of attempts
var maxAttempts = 9;

// create a variable to store game state
var gamePlay = ["","","","","","","","",""];

//create functions to display various messages (player turn, win, draw)

var playerTurnMessage = function() {
    `It's ${player --}'s turn`;
}
var winningMessage = function() {
    `Player ${player --} has won!`;
}

var drawMessage = function() {
    `Game ended in a draw!`;
}

// create functions for the game flow
// -need to track gamePlay
// -need to check if a valid move as been made (if square has not already been selected)
// -need to record gamePlay 
// -need to check if the player has won OR if the game ended in a draw
// 	-if the player won, stop game and display the winMessage
// 	-if the game is a draw, change players, display playerTurnMessage
// -repeat above steps until a player wins

//ignore for now and make it work for one player first --var playerOneTurn = function() {}

// create variables that refer back to the originl doc

var boxes = document.querySelectorAll('.box');
var restartBtn = document.querySelector('.restart-btn');

// When you click on any square, the textContent will change to "X" and the background will change to 'red'
var handleBoxClick = function(event) {
    var clickedBox = event.target;
    var clickedBoxIndex = clickedBox.dataset.index;
    if (clickedBox.textContent === "") { // handleBoxCheck -check if move is legal // pull the data-index, then check if the textContent of the box is blank
        event.target.textContent = handlePlayerChange(); // assign a variable that will contain either X or O, player change for next click
        event.target.style.backgroundColor = 'red';
        console.log('switching works');
    }
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleBoxClick);
} 

var handlePlayerChange = function() {
    if(currentPlayer === 'X') {
        return currentPlayer = 'O';
    } else {
        return currentPlayer = 'X';
    }
}

// var handleReset = function() {
//     if (there is a winner || all 9 boxes are filled with textContent) {
//         change textContent = "";
//         currentPlayer = "";
//     }
// }

// create if statements for winning conditions

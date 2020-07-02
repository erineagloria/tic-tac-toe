console.log('tic-tac-toe');

//store players
var numOfPlayers = 2;
var currentPlayer;
var winner;

// create a variable for max number of attempts
var maxAttempts = 9;

// create a variable to store game state
var gamePlay = ["","","","","","","","",""];

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
var resetBtn = document.querySelector('.reset-btn');
var turnMessage = document.querySelector('.player-turn-message');
var outcomeMessage = document.querySelector('.win-draw-message');

//create functions to display various messages (player turn, win, draw)

var playerTurnMessage = function() {
    if (currentPlayer === 'X') {
        turnMessage.textContent =`It's Player O's turn`;
    } else {
        turnMessage.textContent =`It's Player X's turn`;
    }
    console.log('player turn message works');
}

// When you click on any square, the textContent will change to "X" and the background will change to 'red'
var handleBoxClick = function(event) {
    var clickedBox = event.target;
 //   var clickedBoxIndex = clickedBox.dataset.index;
    if (clickedBox.textContent === "") { // handleBoxCheck -check if move is legal // pull the data-index, then check if the textContent of the box is blank
        clickedBox.textContent = handlePlayerChange(); // assign a variable that will contain either X or O, player change for next click
        clickedBox.style.backgroundColor = 'red';
        console.log('switching works');
        determineWinner();
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleBoxClick);
} 

var handlePlayerChange = function() {
    if(currentPlayer === 'X') {
        return currentPlayer = 'O';
    } else {
        return currentPlayer = 'X';
    }
}

var determineWinner = function() {
    if (currentPlayer === 'X') {
        if (boxes[0].textContent === 'X' &&
            boxes[1].textContent === 'X' &&
            boxes[2].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[0].classList.add('show-winner') 
            boxes[1].classList.add('show-winner') 
            boxes[2].classList.add('show-winner');
            winningMessage();
        } else if (boxes[3].textContent === 'X' &&
            boxes[4].textContent === 'X' &&
            boxes[5].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[3].classList.add('show-winner') 
            boxes[4].classList.add('show-winner') 
            boxes[5].classList.add('show-winner');
            winningMessage();
        } else if (boxes[6].textContent === 'X' &&
            boxes[7].textContent === 'X' &&
            boxes[8].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[6].classList.add('show-winner') 
            boxes[7].classList.add('show-winner') 
            boxes[8].classList.add('show-winner');
            winningMessage();
        } else if (boxes[0].textContent === 'X' &&
            boxes[3].textContent === 'X' &&
            boxes[6].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[0].classList.add('show-winner') 
            boxes[3].classList.add('show-winner') 
            boxes[6].classList.add('show-winner');
            winningMessage();
        } else if (boxes[1].textContent === 'X' &&
            boxes[4].textContent === 'X' &&
            boxes[7].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[1].classList.add('show-winner') 
            boxes[4].classList.add('show-winner') 
            boxes[7].classList.add('show-winner');
            winningMessage();
        } else if (boxes[2].textContent === 'X' &&
            boxes[5].textContent === 'X' &&
            boxes[8].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[2].classList.add('show-winner') 
            boxes[5].classList.add('show-winner') 
            boxes[8].classList.add('show-winner');
            winningMessage();
        } else if (boxes[0].textContent === 'X' &&
            boxes[4].textContent === 'X' &&
            boxes[8].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[0].classList.add('show-winner') 
            boxes[4].classList.add('show-winner') 
            boxes[8].classList.add('show-winner');
            winningMessage();
        } else if (boxes[2].textContent === 'X' &&
            boxes[4].textContent === 'X' &&
            boxes[6].textContent === 'X') {
            winner = 'X';
            console.log('Player X wins!!');
            boxes[2].classList.add('show-winner') 
            boxes[4].classList.add('show-winner') 
            boxes[6].classList.add('show-winner');
            winningMessage();
        } else if (boxes[0].textContent !== '' &&
            boxes[1].textContent !== '' &&
            boxes[2].textContent !== '' &&
            boxes[3].textContent !== '' &&
            boxes[4].textContent !== '' &&
            boxes[5].textContent !== '' &&
            boxes[6].textContent !== '' &&
            boxes[7].textContent !== '' &&
            boxes[8].textContent !== '' ) {
            drawMessage();
       } else {
            setTimeout(playerTurnMessage, 1000);
            console.log('game continues')
        }
    } else {
        if (currentPlayer === 'O') {
            if (boxes[0].textContent === 'O' &&
                boxes[1].textContent === 'O' &&
                boxes[2].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[0].classList.add('show-winner') 
                boxes[1].classList.add('show-winner') 
                boxes[2].classList.add('show-winner');
                winningMessage();
            } else if (boxes[3].textContent === 'O' &&
                boxes[4].textContent === 'O' &&
                boxes[5].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[3].classList.add('show-winner') 
                boxes[4].classList.add('show-winner') 
                boxes[5].classList.add('show-winner');
                winningMessage();
            } else if (boxes[6].textContent === 'O' &&
                boxes[7].textContent === 'O' &&
                boxes[8].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[6].classList.add('show-winner') 
                boxes[7].classList.add('show-winner') 
                boxes[8].classList.add('show-winner');
                winningMessage();
            } else if (boxes[0].textContent === 'O' &&
                boxes[3].textContent === 'O' &&
                boxes[6].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[0].classList.add('show-winner') 
                boxes[3].classList.add('show-winner') 
                boxes[6].classList.add('show-winner');
                winningMessage();
            } else if (boxes[1].textContent === 'O' &&
                boxes[4].textContent === 'O' &&
                boxes[7].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[1].classList.add('show-winner') 
                boxes[4].classList.add('show-winner') 
                boxes[7].classList.add('show-winner');
                winningMessage();
            } else if (boxes[2].textContent === 'O' &&
                boxes[5].textContent === 'O' &&
                boxes[8].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[2].classList.add('show-winner') 
                boxes[5].classList.add('show-winner') 
                boxes[8].classList.add('show-winner');
                winningMessage();
            } else if (boxes[0].textContent === 'O' &&
                boxes[4].textContent === 'O' &&
                boxes[8].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[0].classList.add('show-winner') 
                boxes[4].classList.add('show-winner') 
                boxes[8].classList.add('show-winner');
                winningMessage();
            } else if (boxes[2].textContent === 'O' &&
                boxes[4].textContent === 'O' &&
                boxes[6].textContent === 'O') {
                winner = 'O';
                console.log('Player O wins!!');
                boxes[2].classList.add('show-winner') 
                boxes[4].classList.add('show-winner') 
                boxes[6].classList.add('show-winner');
                winningMessage();
                console.log('determine winner works')
            } else if (boxes[0].textContent !== '' &&
                boxes[1].textContent !== '' &&
                boxes[2].textContent !== '' &&
                boxes[3].textContent !== '' &&
                boxes[4].textContent !== '' &&
                boxes[5].textContent !== '' &&
                boxes[6].textContent !== '' &&
                boxes[7].textContent !== '' &&
                boxes[8].textContent !== '' ) {
                drawMessage();
            } else {
                setTimeout(playerTurnMessage, 1000);
                console.log('game continues')
            }
        }
    }
}

// attempt below to shorten the draw code
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].textContent !== '';
// }

var winningMessage = function() {
    outcomeMessage.textContent =`Player ${winner} has won!`;
    console.log('winning message works');
}

var drawMessage = function() {
    turnMessage.textContent = '';
    outcomeMessage.textContent =`Game ended in a draw!`;
    setTimeout(resetGame, 3000);
    console.log('draw message works');
}

var resetGame = function() {
    for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = '';
            boxes[i].style.backgroundColor = 'pink';
    }
    currentPlayer = '';
    winner = '';
    turnMessage.textContent = '';
    outcomeMessage.textContent = '';
    console.log('reset works!');
}

resetBtn.addEventListener('click', resetGame);
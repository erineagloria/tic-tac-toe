console.log('tic-tac-toe');

//store players
var currentPlayer;
var winner;

// create variables that refer back to the originl doc

var boxes = document.querySelectorAll('.box');
var resetBtn = document.querySelector('.reset-btn');
var turnMessage = document.querySelector('.player-turn-message');
var outcomeMessage = document.querySelector('.win-draw-message');
var howToPlayBtn = document.querySelector('.how-to-play-btn');
var rules = document.querySelector('.rules');

// When you click on any square, the textContent will change to "X" and the background will change to 'red'
var handleBoxClick = function(event) {
    if (event.target.textContent === "") { // check if move is legal (check if the textContent of the box is blank)
        event.target.textContent = handlePlayerChange(); // assign a variable that will contain either X or O, player change for next click
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

//create functions to display various messages (player turn, win, draw)

var playerTurnMessage = function() {
    if (currentPlayer === 'X') {
        turnMessage.textContent =`It's Player O's turn`;
    } else {
        turnMessage.textContent =`It's Player X's turn`;
    }
    console.log('player turn message works');
}

// if winning combinations[i] (x8) === 'X' {winner = "X", etc...}
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

var winningMessage = function() {
    outcomeMessage.textContent =`Player ${winner} has won!`;
    turnMessage.textContent = '';
    console.log('winning message works');
    setTimeout(resetGame, 4000);
}

var drawMessage = function() {
    turnMessage.textContent = '';
    outcomeMessage.textContent =`Game ended in a draw!`;
    setTimeout(resetGame, 3000);
    console.log('draw message works');
}

var showRules = function() {
    if (rules.style.visibility === 'hidden') {
        rules.style.visibility = 'visible';
        console.log('rules are visible');
    } else {
        rules.style.visibility = 'hidden';
        console.log('rules are hidden');
    }
}

howToPlayBtn.addEventListener('click', showRules);

var resetGame = function() {
    for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = '';
            boxes[i].classList.remove('show-winner');
    }
    currentPlayer = '';
    winner = '';
    turnMessage.textContent = 'Ready Player X';
    outcomeMessage.textContent = '';
    console.log('reset works!');
}

resetBtn.addEventListener('click', resetGame);
** Pseudocode **

START: This is the start of your pseudocode.
--Design --

Neon Themed Tic Tac Toe
Black background
White font
Neon colored & enlarged Xs and O's
Neon Input boxes
Neon grid
Neon boxes
Clean lines - modern look
When the winner wins, the three boxes pop out and a line is draw through them all.  
'Winner' appears in the middle of the screen and neon glitter or strobe lights flash on the screen

-Browser opens with a "TIC  Tac TOE" sign at the top, and empty neon grid in the middle

BASICS: 
-title
-3x3 grid
	-clickable Grid
	-ability to get playerOne(X) to click on squares and display 'X' 
	-ability to switch between playerOne and playerTwo
-messages
	-inform playre it is their turn
	-winning message
	-draw/tie message
-restart game
	-clear grid 

BREAK DOWN EACH CLICK:
-need to track gamePlay
-need to check if a valid move as been made (if square has not already been selected)
-need to record gamePlay 
-need to check if the player has won OR if the game ended in a draw
	-if the player won, stop game and display the winMessage
	-if the game is a draw, change players, display playerTurnMessage
-repeat above steps until a player wins





-Game will be made for 2 players. EXTRA:Once number of players are choosen, player text boxes appear at the bottom (Player 1, Tie, Player 2(user 2/computer), Number of Games Played, Exit/Reset)
-EXTRA: "How to play" button on the top left --> Text guide pops up
-EXTRA: Login/sign-up buttons are displayed on the top right 
	-Login/Create an account to play (extra feature - get game to work first)
	-User creates username and password
	-User can change password
	-User can sign out
-EXTRA: User chooses between 'Best of 3 games" OR "Best of 5 games" 

User events: 
-User makes a move on the empty grid. Grid-box text content gets marked with the X/O. If there is a player 2, then player 2 is prompted to make a move next. 

-User(s) continue to make moves on the grid and mark their spot until there is a winner OR grid is full(tie). 
-User gets notified if they win, lose or get a tie. After each game, win/tie is recorded and the grid automatically resets to empty. 
	-If there is a winner, then the three winning boxes light up OR pop out, a line is drawn through them and neon confetti/glitter or strobe lights pop up. 
	-If the user loses, "Player 2/Computer Wins" will pop-up, the winning boxes still light up and the grid will reset. 
	-If grid is full and there is no winner. "Tie" pops-up, the tie is recorded in the box at the bottom of the screen, grid resets. 
-EXTRA: After 3/5 games, user will find out who the overall winner is.
-EXTRA: User can view their game history 
-User can exit game. 


Iteration - to find out who won
9 attempts - once the game game-grid is full, if a winner has not been determined, the game grid says



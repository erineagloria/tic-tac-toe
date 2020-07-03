https://erineagloria.github.io/tic-tac-toe/

Original Design
-Neon Themed Tic Tac Toe
-Black background
-White font
-Neon colored & enlarged Xs and O's
-Neon Input boxes
-Neon grid
-Clean lines - modern look
-When the winner wins, the three boxes pop out and a line is draw through them all.  
-'Winner' appears in the middle of the screen and neon glitter or strobe lights flash on the screen
-Browser opens with a "Tic TAC Toe" sign at the top, and empty neon grid in the middle

FINAL Design
-futuristic look
-busy background with 3 main colours and white light 
-clean lines
-minimal text
-play on existing colors from the background

How I Started:
-Set-up files (index.html style.css app.js readme.txt), connected them
-Did a 'brain dump' - wrote out an initial pseudocode (noting which lines were essential vs extra), drew out a wireframe, made a draft agenda
-HTML: Marked-up the basics (put a title, made a 3x3 grid with 9 boxes, made a footer)
-CSS: Applied contrasting background-colors to every html feature to see where they are on the page 
-JS: did a brain dump of all the variables I thought I would need (defining each player, numOfPlayers, numOfAttempts, totalGamePlay). 
		-Jotted down steps of what I wanted to happen in layman's terms. 
		-Broke down the user events. Then created individual functions to match them. 
			-2 Player Game (two users, no automated computer)
			-game begins with Player X 
			-player clicks a box
			-need to check if the move is valid (whether or not the textContent === '')
			-if the box is NOT taken, apply (X/O) to the textContent
			-once textContent is assigned, check if there is a winner
			-if there's no winner, then change players
			-display on the screen whose turn it is
			-player 'O' now repeats the steps above
			-game continues until 1 of 8 winning conditions are met || if all 9 boxes are filled and there is no winner, game ends in a draw/tie
			-once there is a winner/draw then highlight this on the screen

	-3x3 grid
		-clickable Grid
		-ability to get playerOne(X) to click on squares and display 'X' 
		-ability to switch between playerOne and playerTwo
	-messages
		-inform player it is their turn
		-winning message
		-draw/tie message
-restart game
		-clear grid 

-started writing out the functions I knew how to make, followed the basic 3 step process (create variables to connect back to the doc, create event listeners and then write out the functions above it)
-started writing out each basic function on its own, applied a console log at the end of each individual function
-once the functions worked I nested/put them into other functions to create a continus game
-writing out the winning conditions was the longest part 

CHALLENGES: 
-figuring out wheree to start!
-CSS!! (layering grid over the background)
-imbedding functions within one another

EXTRAS/IF I HAD MORE TIME: 
-Games Tracker (how many wins/draws/total games)
-Login/sign-up buttons are displayed on the top right 
	-Login/Create an account to play (extra feature - get game to work first)
	-User creates username and password
	-User can change password
	-User can sign out
-User chooses between 'Best of 3 games" OR "Best of 5 games" 
-1 Player feature (player 2 is the computer)
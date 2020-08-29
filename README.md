# SEI Project 1: Making a Tic-Tac-Toe Game 

Demo my<a href="https://erineagloria.github.io/tic-tac-toe/">Tic Tac Toe</a>

<img src="https://github.com/erineagloria/tic-tac-toe/blob/master/Tic-Tac-Toe.png" alt="final-project-design">

The game's objective is to mark three boxes in a row (up, down, across, or diagonally). The first player to do so will win the game. If all nine boxes are full and neither player has marked three boxes in a row, the game will end in a draw. 

Initially I wanted to design a one player vs the computer game. However, given the time frame of 2 days and the lessons I learned in class thus far, I decided it would be more practical to design a two player game to generate a MVP. 

The method to check for a winner was using the DOM. I created functions to check if the move was legal (if the text content of the class name is blank), then I added text content to mark that the box has been occupied. I performed tests using if..else if..else control flow to determine if there was a winning combination after each move.

### Technologies Used

- JavaScript 
- HTML
- CSS
- https://animista.net/ (board animation)

## Program Features 

Upon opening the browser, the tic-tac-toe board will gradually scale in to the center of the page. 

The game is designed as a two player game. Player 1 is 'X' and Player 2 is 'O'. Player 1 will start the game. The player's turn will noted above the board. 

Every time a player makes a legal move, the box will be marked with their symbol. If a winner is established a class name will be added to the winning boxs to highlight them, the winning player will be announced at the top of the screen, and after a few seconds the board will be automatically reset using setTimeout. 

If there is a draw, the message will appear at the top of the screen and the board will again automatically reset. 

There are two buttons at the bottom left of the screen to show the game rules and manually reset the screen, if required. 

## Initial Wireframing

1. Create the 3x3 board grid
- The grid needs to include 9 boxes, each box needs to have an id 
- Each box needs to be responsive to a 'click'

2. Create the page webpage layout
- Create a section above the board to display messages (whose turn it is and if someone has won/draw)
- Create a scoreboard underneath the grid
- Scoreboard needs to keep track of each player's scores (incomplete)

3. User Stories/Game Logic
- Two users need to be able to alternate between turns
- There will be text above the grid to show whose turn it is 
- User 1 selects a box, if the box is not already taken, the user can occupy the box
- User 2 repeats above
- After each turn, check if the board has three consectutive boxes to determine if there is a winner
- If a winner is determined, a message will be displayed above the board
- Once a user wins, users will no longer be able to interact with the board 
- Since there are 9 boxes, a max of 9 turns will occur
- If after 9 turns there is no winner. The game will automatically end, the board will be disabled to the users and a 'draw' message will appear above the board. 

4. CSS / Design
- Chose a neon/futuristic background image
- Play on the existing colors from the background
- Change text to white
- Remove unneccesary text on page

### Challenges
- Figuring out where to start!
- CSS (layering the tic-tac-toe board over the background)
- Imbedding functions within one another

### Improvements
- Refactor the If..else if..else conditional statements and package them into reusable functions 
- Review another method to check for the winner, possibly by putting the winning combinations into arrays
- Create a 1 Player feature (player 2 is the computer)
- Create a games tracker (how many wins/draws/total games)
- Create a feature where the user chooses between 'Best of 3 games" OR "Best of 5 games" 



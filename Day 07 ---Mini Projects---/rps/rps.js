/*
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rpsGame() {    
    const userPrompt = prompt("Please select Rock, Paper, or Scissors: ");
    const userSelection = userPrompt.toLowerCase();

    let computerSelection;
    const randomNumber = Math.floor(Math.random() * 3)+1;
    if(randomNumber === 1) {
        computerSelection = "rock";
    } else if(randomNumber===2){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(`User Selection: ${userSelection}`);
    if(userSelection === "rock" && computerSelection === "scissors" || 
        userSelection === "paper" && computerSelection === "rock" || 
        userSelection === "scissors" && computerSelection === "paper") {
            console.log("User Wins!");
    } else if(userSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if(userSelection === "rock" && computerSelection === "paper" || 
        userSelection === "paper" && computerSelection === "scissors" || 
        userSelection === "scissors" && computerSelection === "rock") {
            console.log("Computer Wins!");
    }else{
        console.log("Invalid Input! Please select Rock, Paper, or Scissors.");
    }
    const playAgainprompt = prompt("Do you want to play again? (yes/no): ");
    const playAgain = playAgainprompt ? playAgainprompt.toLowerCase() : "no";
    if(playAgain === "yes") {
        rpsGame();
    } else {
        console.log("Thank you for playing! Goodbye!");
    }
}

// Start the Game
rpsGame();
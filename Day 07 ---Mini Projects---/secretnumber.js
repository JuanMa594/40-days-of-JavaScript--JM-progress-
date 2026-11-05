/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again
function secretGame() {    
    const min = 1;
    const max = 10;
   const secretNumber = Math.floor(Math.random() * max) + 1;
    let attempts = 0;
    let guess = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    while (guess !== secretNumber) {
        const guessPrompt = prompt("Enter your guess: ");
        guess = parseInt(guessPrompt);

        if (isNaN(guess) || guess < min || guess > max) {
            console.log(`Invalid input! Please enter a number between ${min} and ${max}.`);
            continue;
        }
        attempts++;
        if (guess < secretNumber) {
            console.log("Too low! Try again."); 
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        }
    
        const playAgainprompt = prompt("Do you want to play again? (yes/no): ");
        const playAgain = playAgainprompt ? playAgainprompt.toLowerCase() : "no";
        if(playAgain === "yes") {
            secretGame();
        } else {
            console.log("Thank you for playing! Goodbye!");
        }
    }
}

// Start the Game
secretGame();

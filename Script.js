// Define an array of words to be guessed
const words = ['hangman', 'javascript', 'programming', 'web', 'developer'];

// Select a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Create an array to store the correctly guessed letters
const guessedLetters = [];

// Create a variable to store the number of incorrect guesses
let incorrectGuesses = 0;

// Function to check if a letter is in the word
function checkLetter(letter) {
  if (randomWord.includes(letter)) {
    // Letter is correct, add it to the guessedLetters array
    guessedLetters.push(letter);
    console.log('Correct guess!');
  } else {
    // Letter is incorrect, increment the incorrectGuesses variable
    incorrectGuesses++;
    console.log('Incorrect guess!');
  }
}

// Function to check if the word has been completely guessed
function checkWin() {
  const wordArray = randomWord.split('');
  const correctLetters = wordArray.filter(letter => guessedLetters.includes(letter));
  
  if (correctLetters.length === wordArray.length) {
    console.log('You win!');
  }
}

// Example usage
checkLetter('a');
checkLetter('b');
checkLetter('c');
checkLetter('d');
checkWin();
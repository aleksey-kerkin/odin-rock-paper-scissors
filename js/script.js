// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// Get the random integer, that gives us a random number from 0 to value that you set in the "max" parameter
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomInt = getRandomInt(3);

// If the randomInt equals:
//  0 - Rock
//  1 - Paper
//  2 - Scissors
function getComputerChoice(int) {
  if (int === 0) {
    return "rock";
  } else if (int === 1) {
    return "paper";
  } else if (int === 2) {
    return "scissors";
  }
}

console.log(getComputerChoice(randomInt));

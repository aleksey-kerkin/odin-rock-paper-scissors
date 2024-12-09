// 1. Create a new function named getComputerChoice.

// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.

// 3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// Function that generates a random integer between 0 (inclusive) and max (exclusive)
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

// 1. Create a new function named getHumanChoice.
function getHumanChoice() {
  const int = parseInt(
    prompt(`1 -> "rock"\n2 -> "paper"\n3 -> "scissors"\nEnter a number: `)
  );
  if (int === 1) {
    return "rock";
  } else if (int === 2) {
    return "paper";
  } else if (int === 3) {
    return "scissors";
  } else {
    return "Wrong input";
  }
}
// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

console.log(getHumanChoice());

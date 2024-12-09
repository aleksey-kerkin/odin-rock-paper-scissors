// 1. Create a new function named getComputerChoice.
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
// 3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
function getComputerChoice() {
  const int = Math.floor(Math.random() * 3);
  if (int === 0) {
    return "rock";
  } else if (int === 1) {
    return "paper";
  } else if (int === 2) {
    return "scissors";
  }
}

// 1. Create a new function named getHumanChoice.
// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
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

// 1. Create two new variables named humanScore and computerScore in the global scope.
// 2. Initialize those variables with the value of 0.
const humanScore = 0;
const computerScore = 0;

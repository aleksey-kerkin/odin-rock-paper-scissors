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

function playGame() {
  let counter = 0;
  let humanScore = 0;
  let computerScore = 0;
  while (counter <= 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      alert("It's a tie.");
      counter++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert(`You win: ${humanChoice} beats ${computerChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert(`You lose: ${computerChoice} beats ${humanChoice}.`);
    }
  }
  if (humanScore > computerScore) {
    console.log(
      `You win!\nYour score: ${humanScore}\nComputer score: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose!\nYour score: ${humanScore}\nComputer score: ${computerScore}`
    );
  } else {
    console.log("It's a tie...");
  }
}

playGame();

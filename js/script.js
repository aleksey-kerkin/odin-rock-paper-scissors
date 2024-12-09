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
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      computerScore--;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You win! Rock beats Scissors.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      humanScore--;
      computerScore++;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You lose! Paper beats Rock.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      computerScore--;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You win! Paper beats Rock.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      humanScore--;
      computerScore++;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You lose! Scissors beats Paper.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      computerScore--;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You win! Scissors beats Paper.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      humanScore--;
      computerScore++;
      counter++;
      console.log(`You choose: ${humanChoice} vs PC: ${computerChoice}`);
      alert("You lose! Rock beats Scissors.");
    }
  }
  humanScore <= 0 ? (humanScore = 0) : humanScore;
  computerScore <= 0 ? (computerScore = 0) : computerScore;
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

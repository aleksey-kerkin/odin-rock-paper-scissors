let counter = 0;
let humanScore = 0;
let computerScore = 0;
const displayPlayer = document.getElementById("player-choice");
const displayComputer = document.getElementById("computer-choice");
const displayRoundResult = document.getElementById("round-result");

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

const btnRock = document
  .getElementById("rock")
  .addEventListener("click", () => {
    playRound("rock");
  });
const btnPaper = document
  .getElementById("paper")
  .addEventListener("click", () => {
    playRound("paper");
  });
const btnScissors = document
  .getElementById("scissors")
  .addEventListener("click", () => {
    playRound("scissors");
  });

function playRound(choice) {
  counter++;
  let humanChoice = choice;
  let computerChoice = getComputerChoice();
  displayPlayer.textContent = `Player: ${humanScore}`;
  displayComputer.textContent = `Computer: ${computerScore}`;
  displayRoundResult.textContent = `Round no. ${counter}`;

  if ((humanScore || computerScore) === 5) {
    if (humanScore > computerScore) {
      setTimeout(renewGame, 100, "You win!");
    } else if (humanScore < computerScore) {
      setTimeout(renewGame, 100, "You lose...");
    } else if (humanScore === computerScore) {
      setTimeout(renewGame, 100, "It's a tie.");
    }
  } else {
    if (humanChoice === computerChoice) {
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
    }
  }
}

function renewGame(str) {
  alert(str);
  counter = 0;
  humanScore = 0;
  computerScore = 0;
  displayRoundResult.textContent = `Round no. `;
  displayPlayer.textContent = `Player: 0`;
  displayComputer.textContent = `Computer: 0`;
}

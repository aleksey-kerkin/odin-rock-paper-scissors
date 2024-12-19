let counter = 0;
let humanScore = 0;
let computerScore = 0;
const displayPlayer = document.getElementById("player-choice");
const displayComputer = document.getElementById("computer-choice");
const displayRoundResult = document.getElementById("choices-display");
const scores = document.getElementById("scores");
const para = document.createElement("p");

function getComputerChoice() {
  const int = Math.floor(Math.random() * 3);
  if (int === 0) {
    return "🪨";
  } else if (int === 1) {
    return "🧻";
  } else if (int === 2) {
    return "✂️";
  }
}

const btnRock = document
  .getElementById("rock")
  .addEventListener("click", () => {
    playRound("🪨");
  });
const btnPaper = document
  .getElementById("paper")
  .addEventListener("click", () => {
    playRound("🧻");
  });
const btnScissors = document
  .getElementById("scissors")
  .addEventListener("click", () => {
    playRound("✂️");
  });

function playRound(choice) {
  counter++;
  let humanChoice = choice;
  let computerChoice = getComputerChoice();
  scores.appendChild(para);

  if (humanChoice === computerChoice) {
    para.textContent = `Round no. ${counter}: It's a tie.`;
    displayRoundResult.textContent = `🫂`;
  } else if (
    (humanChoice === "🪨" && computerChoice === "✂️") ||
    (humanChoice === "🧻" && computerChoice === "🪨") ||
    (humanChoice === "✂️" && computerChoice === "🧻")
  ) {
    humanScore++;
    para.textContent = `Round no. ${counter}: You win!`;
    displayRoundResult.textContent = `${humanChoice} vs ${computerChoice}`;
  } else if (
    (humanChoice === "🪨" && computerChoice === "🧻") ||
    (humanChoice === "🧻" && computerChoice === "✂️") ||
    (humanChoice === "✂️" && computerChoice === "🪨")
  ) {
    computerScore++;
    para.textContent = `Round no. ${counter}: You lose...`;
    displayRoundResult.textContent = `${humanChoice} vs ${computerChoice}`;
  }
  displayPlayer.textContent = `Player: ${humanScore}`;
  displayComputer.textContent = `Computer: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      setTimeout(renewGame, 750, "You win!");
    } else if (humanScore < computerScore) {
      setTimeout(renewGame, 750, "You lose...");
    } else if (humanScore === computerScore) {
      setTimeout(renewGame, 750, "It's a tie.");
    }
  }
}

function renewGame(str) {
  const finalDisplay = document.createElement("h1");
  const resetBtn = document.createElement("button");
  finalDisplay.textContent = str;
  finalDisplay.style.margin = "10rem 0 5rem";
  resetBtn.textContent = "Play again?";
  resetBtn.style.cssText = `border-radius: 35px; color: hsl(20, 70%, 90%); font-family: "CaskaydiaCove Nerd Font", monospace; font-size: 1.5rem`;
  document.body.replaceChildren(finalDisplay);
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}

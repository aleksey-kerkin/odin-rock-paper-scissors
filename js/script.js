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
      setTimeout(
        renewGame,
        500,
        `You win!<br><br>🧠:${humanScore} vs ⚙️:${computerScore}`
      );
    } else if (humanScore < computerScore) {
      setTimeout(
        renewGame,
        500,
        `You lose...<br><br>🧠:${humanScore} vs ⚙️:${computerScore}`
      );
    } else if (humanScore === computerScore) {
      setTimeout(
        renewGame,
        500,
        `It's a tie.<br><br>🧠:${humanScore} vs ⚙️:${computerScore}`
      );
    }
  }
}

function renewGame(str) {
  const finalDisplay = document.createElement("h1");
  const resetBtn = document.createElement("button");
  finalDisplay.innerHTML = str;
  finalDisplay.style.cssText = `margin: 10rem 0 1.25rem; text-align: center;`;
  resetBtn.textContent = "Play again?";
  resetBtn.style.cssText = `border-radius: 35px; color: hsl(20, 70%, 90%); font-family: "CaskaydiaCove Nerd Font", monospace; font-size: 1.5rem`;
  document.body.replaceChildren(finalDisplay);
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}

let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  const janken = ["Rock", "Paper", "Scissors"];
  const selection = janken[Math.floor(Math.random() * janken.length)];
  return selection;
}

function processRound(playerSelection, computerSelection) {
  const readyChant = "Jan Ken...";
  const chant = () => (document.querySelector(".pon").textContent = "PON!");
  const checkScore = () => {
    if (playerScore === 5) return " You won the game! Game Over";
    if (cpuScore === 5) return " You lost the game! Game Over";
    return "";
  };

  const reset = () => {
    playerScore = 0;
    cpuScore = 0;
    document.querySelector(".pon").textContent = "";
    return;
  };

  if (playerSelection === "Reset") {
    reset();
    return;
  }

  if (checkScore() !== "") {
    return checkScore();
  }

  if (playerSelection == computerSelection) {
    chant();
    return "It's a draw";
  }

  switch (playerSelection) {
    case "Rock":
      chant();
      if (computerSelection === "Paper") {
        cpuScore++;
        return "You Lose! Paper beats Rock" + checkScore();
      } else if (computerSelection === "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors" + checkScore();
      }
      break;
    case "Paper":
      chant();
      if (computerSelection === "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock" + checkScore();
      } else if (computerSelection === "Scissors") {
        cpuScore++;
        return "You Lose! Scissors beats Paper" + checkScore();
      }
      break;
    case "Scissors":
      chant();
      if (computerSelection === "Rock") {
        cpuScore++;
        return "You Lose! Rock beats Scissors\n" + checkScore();
      } else if (computerSelection === "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper\n" + checkScore();
      }
      break;
    case "Reset":
      reset();
      return;
  }

  return "Input not recognised";
}

function game(playerInput) {
  let resultText = document.querySelector(".results");
  let playerScoreText = document.querySelector(".playerScore");
  let cpuScoreText = document.querySelector(".cpuScore");
  let feedback = processRound(playerInput, getComputerChoice());

  playerScoreText.textContent = playerScore;
  cpuScoreText.textContent = cpuScore;
  resultText.textContent = feedback;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    game(button.textContent);
  });
});

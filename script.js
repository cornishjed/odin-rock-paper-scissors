function getComputerChoice() {
  const janken = ["Rock", "Paper", "Scissors"];
  const selection = janken[Math.floor(Math.random() * janken.length)];
  return selection;
}

function processRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  
  if (playerSelection == computerSelection) return "It's a draw";

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") return "You Lose! Paper beats Rock";
      else if (computerSelection === "Scissors")
        return "You Win! Rock beats Scissors";
      break;
    case "Paper":
      if (computerSelection === "Rock") return "You Win! Paper beats Rock";
      else if (computerSelection === "Scissors")
        return "You Lose! Scissors beats Paper";
      break;
    case "Scissors":
      if (computerSelection === "Rock") return "You Lose! Rock beats Scissors";
      else if (computerSelection === "Paper")
        return "You Win! Scissors beats Paper";
      break;
  }

  return "Input not recognised";
}

function capitalize(input) {
  input = input.toLowerCase();
  input = input[0].toUpperCase() + input.substr(1, input.length - 1);

  return input;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Enter Rock, Paper or Scissors: ");
    console.log(processRound(playerInput, getComputerChoice()));
  }
}

game();

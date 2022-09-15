// Randomly returns either 'rock', 'paper', or 'scissor'.
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
}

// Plays a single round of Rock Paper Scissor.
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
}

// Player's selection
const playerSelection = String(
  prompt("Rock, Paper, or Scissors?")
).toLowerCase();
// Computer's selection
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

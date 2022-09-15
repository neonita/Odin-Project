// Randomly returns either 'rock', 'paper', or 'scissor'.
function getComputerChoice() {
  let computerOptions = ["Rock", "Paper", "Scissor"];
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
}

// Plays a single round of Rock Paper Scissor.
function play(playerSelection, computerSelection) {}

// const playerSelection = String(
//   prompt("Rock, Paper, or Scissors?")
// ).toLowerCase();

console.log(getComputerChoice());

// Randomly returns either 'rock', 'paper', or 'scissor'.
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[computerChoice];
}

// Plays a single round of Rock Paper Scissor.
function playRound(playerSelection, computerSelection) {
  //   console.log(playerSelection, computerSelection);

  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie! 🗿🗿";
    // return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerPoints++;
    return "You Win! Rock beats scissor.";
    // return "win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    return "You Lose! Scissor beats rock.";
    // return "lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    return "You Win! Paper beats rock.";
    // return "win";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie! 📃📃";
    // return "tie";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerPoints++;
    return "You Lose! Paper beats rock.";
    // return "lose";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerPoints++;
    return "You Lose! Rock beats scissor.";
    // return "lose";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerPoints++;
    return "You Win! Scissor beats paper.";
    // return "win";
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "It's a tie! ✂️✂️";
    // return "tie";
  } else {
    alert("Please choose rock, paper, or scissor!");
  }

  console.log(`👤: ${playerPoints}, 🤖: ${computerPoints}`);
  return playerPoints && computerPoints;
}

function game() {
  let rounds = 3;
  for (let i = 0; i < rounds; i++) {
    // Player's selection
    const playerSelection = String(
      prompt("Rock, Paper, or Scissor?")
    ).toLowerCase();

    // Computer's selection
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerPoints, computerPoints);
  }
}

let playerPoints = 0;
let computerPoints = 0;

// Initalize game()
game();

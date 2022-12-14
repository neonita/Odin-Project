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
    return "It's a tie! πΏπΏ";
    // return "tie";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerPoints++;
    return "You WIN this round! Rock beats scissor.";
    // return "win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    return "You LOSE this round! Scissor beats rock.";
    // return "lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    return "You WIN this round! Paper beats rock.";
    // return "win";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie! ππ";
    // return "tie";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerPoints++;
    return "You LOSE this round! Paper beats rock.";
    // return "lose";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerPoints++;
    return "You LOSE this round! Rock beats scissor.";
    // return "lose";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerPoints++;
    return "You WIN this round! Scissor beats paper.";
    // return "win";
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "It's a tie! βοΈβοΈ";
    // return "tie";
  } else {
    alert("Please choose rock, paper, or scissor!");
  }

  console.log(`π€: ${playerPoints}, π€: ${computerPoints}`);
  return playerPoints && computerPoints;
}

// Displays player's and computer's points and displays who won & who lose.
function isGameOver() {
  console.log("GAME OVER π₯: " + playerPoints + " | " + computerPoints);
  if (playerPoints > computerPoints) {
    console.log("ππ YOU WIN! ππ");
  } else if (playerPoints < computerPoints) {
    console.log("βπ€ YOU LOSE! COMPUTER WINS π€β");
  } else {
    console.log("βοΈ IT'S A TIE! βοΈ");
  }
}

function game() {
  let rounds = 5;
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

  //   Executes after 5 rounds
  isGameOver();
}

let playerPoints = 0;
let computerPoints = 0;

// Initalize game()
game();

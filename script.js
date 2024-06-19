let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  //Generate number between 0-2
  randomNumber = Math.floor(Math.random()*3);
  //assign number to rock paper scissors value
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  //Capture human input
  let input = prompt("Rock, Paper, or Scissors?", "");
  input = input.toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissors") {
    return input;
  } else {
    alert("Please make a valid choice!");
    return getHumanChoice();
  }
}


function playRound() {
  //compare human vs computer choice
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    alert("It's a tie! Pick again!");
    return playRound();
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("You lose! Rock beats Scissors");
    computerScore++;
  } else  if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("You win! Scissors beats Paper");
    humanScore++;
  } else {
    alert("Unexpected Error");
  }
}

function playGame() {
  for (let i=0; i<5; i++) {
    playRound();
    alert("Player Score: " + humanScore +" \nComputer Score: " + computerScore);
  }
  if (humanScore > computerScore) {
    alert("You win the game with a score of " + humanScore + " to " + computerScore + "!")
  } else if (computerScore > humanScore) {
     alert("You lose the game with a score of " + humanScore + " to " + computerScore + "!")
  }
  if (confirm("Would you like to play again?") === true) {
    humanScore = 0;
    computerScore = 0;
    playGame();
  } else {
    alert("Goodbye!")
  }
}

playGame();
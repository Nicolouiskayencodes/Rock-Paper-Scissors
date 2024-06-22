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


function playRound(playerSelection) {
  //compare human vs computer choice
  let humanChoice = playerSelection;
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    round.textContent = "It's a tie! Pick again!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    round.textContent = "You lose! Paper beats Rock";
    computerScore++;
    playGame();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    round.textContent = "You lose! Scissors beats Paper";
    computerScore++;
    playGame();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    round.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    playGame();
  } else  if (humanChoice === "rock" && computerChoice === "scissors") {
    round.textContent = "You win! Rock beats Scissors";
    humanScore++;
    playGame();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    round.textContent = "You win! Paper beats Rock";
    humanScore++;
    playGame();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    round.textContent = "You win! Scissors beats Paper";
    humanScore++;
    playGame();
  } else {
    alert("Unexpected Error");
  }
}

function playGame() {
  if (humanScore < 3 && computerScore < 3) {
    score.textContent = "Player Score: " + humanScore + "\nComputer Score: " + computerScore;
  } else if (humanScore === 3) {
    score.textContent = "You win the game! " + humanScore + " : " + computerScore;
    let newGame = document.createElement("button");
    newGame.textContent = "New Game"
    buttons.style.display = "none";
    newG.appendChild(newGame);
    newGame.addEventListener("click", () =>{
      humanScore = 0;
      computerScore = 0;
      score.textContent = "";
      round.textContent = "";
      newGame.remove()
      buttons.style.display = "block";
    })
  } else if (computerScore === 3) {
    score.textContent = "You lose the game! " + humanScore + " : " + computerScore;
    let newGame = document.createElement("button");
    newGame.textContent = "New Game"
    buttons.style.display = "none";
    newG.appendChild(newGame);
    newGame.addEventListener("click", () =>{
      humanScore = 0;
      computerScore = 0;
      score.textContent = "";
      round.textContent = "";
      newGame.remove()
      buttons.style.display = "block";
    })
  }
}



let buttons = document.querySelector("#buttons");
let score = document.querySelector("#score");
let round = document.querySelector("#round");
let newG = document.querySelector("#newG");

buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch(target.id) {
    case "rock" :
      playRound("rock");
      break;
    case "paper" :
      playRound("paper");
      break;
    case "scissors" :
      playRound("scissors");
      break;
  }
});
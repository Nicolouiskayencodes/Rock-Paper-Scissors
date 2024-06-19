function getComputerChoice() {
  //Generate number between 0-2
  randomNumber = Math.floor(Math.random()*3);
  console.log(randomNumber);
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
  return input;
}
let x = getHumanChoice();
console.log(x);

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
  input = input.toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissors") {
    return input;
  } else {
    alert("Please make a valid choice!");
    return getHumanChoice();
  }

}
let x = getHumanChoice();
console.log(x);

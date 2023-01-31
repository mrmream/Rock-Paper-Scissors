const RPS = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}

const computerSelection = getComputerChoice(RPS)

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! rock beats scissors"}
        else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! paper beats rock"}
        else if (playerSelection === "rock" && computerSelection === "rock"){
        return "Tie game"}
        else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You Win! paper beats rock"
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You Lose! scissors beats paper"
            } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "Tie game"
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You Lose! rock beats scissors"
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You Win! scissors beats paper"
            } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "Tie game"
            } else 
            return "Invalid"
        
}

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", function() {
    const result = playRound("rock", computerSelection);
    alert(result);
  });
  
  paperButton.addEventListener("click", function() {
    const result = playRound("paper", computerSelection);
    alert(result);
  });
  
  scissorsButton.addEventListener("click", function() {
    const result = playRound("scissors", computerSelection);
    alert(result);
  });
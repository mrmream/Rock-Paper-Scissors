const RPS = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}

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

let playerWins = 0;
let computerWins = 0;
let totalRounds = 0;

const main = document.querySelector("div")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const scores = document.createElement("p")
scores.classList.add('scores')
main.appendChild(scores)

const checkForWinner = function() {
    if (totalRounds === 5) {
      if (playerWins > computerWins) {
        alert("You are a Winner!");
      } else if (computerWins > playerWins) {
        alert("You are a Loser!");
      }
    }
  };

rockButton.addEventListener("click", function() {
    const computerSelection = getComputerChoice(RPS)
    const result = playRound("rock", computerSelection);
    if (result.startsWith("You Win")) {
        playerWins++;
    } else if (result.startsWith("You Lose")) {
        computerWins++;
    } else if (result.startsWith("Tie")){
        totalRounds--
    }
    
    totalRounds++
    checkForWinner()
    scores.innerHTML = `Player wins
: ${playerWins} | Computer wins: ${computerWins}`;
    alert(result);
});

paperButton.addEventListener("click", function() {
    const computerSelection = getComputerChoice(RPS)
    const result = playRound("paper", computerSelection);
    if (result.startsWith("You Win")) {
        playerWins++;
    } else if (result.startsWith("You Lose")) {
        computerWins++;
    } else if (result.startsWith("Tie")){
        totalRounds--
    }
    totalRounds++
    checkForWinner()
    scores.innerHTML = `Player wins: ${playerWins} | Computer wins: ${computerWins}`;
    alert(result);
});

scissorsButton.addEventListener("click", function() {
    const computerSelection = getComputerChoice(RPS)
    const result = playRound("scissors", computerSelection);
    if (result.startsWith("You Win")) {
        playerWins++;
    } else if (result.startsWith("You Lose")) {
        computerWins++;
    } else if (result.startsWith("Tie")){
        totalRounds--
    }
    totalRounds++
    checkForWinner()
    scores.innerHTML = `Player wins: ${playerWins} | Computer wins: ${computerWins}`;
    alert(result);
});
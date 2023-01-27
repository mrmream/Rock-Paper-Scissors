const RPS = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}


const playerSelection = prompt("Please select rock, paper, or scissors:").toLowerCase()
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
            }
        
}



let rounds = 0;
let playerWins = 0;
let computerWins = 0;
while (rounds < 5) {
    const playerSelection = prompt("Please select rock, paper, or scissors:").toLowerCase();
    const computerSelection = getComputerChoice(RPS);
    const result = playRound(playerSelection, computerSelection);
    if (result.startsWith("You Win")) {
        playerWins++;
    } else if (result.startsWith("You Lose")) {
        computerWins++;
    } else if (result.startsWith("Tie")) {
        rounds--
    }
    console.log(result);
    rounds++;
}
console.log(`Player wins: ${playerWins} | Computer wins: ${computerWins}`);
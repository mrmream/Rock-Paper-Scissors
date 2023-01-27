const RPS = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}


const playerSelection = ("rock")
const computerSelection = getComputerChoice(RPS)

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! rock beats scissors"}
        else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! paper beats rock"}
        else if (playerSelection === "rock" && computerSelection === "rock"){
        return "Tie game"}
}

console.log(playRound(playerSelection, computerSelection))
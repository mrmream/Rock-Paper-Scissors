const RPS = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex]
}
console.log(getComputerChoice(RPS))



const choices = ["rock", "paper", "scissors"];

const human = {
    choice: null,
    score: 0,
}
const computer = {
    choice: null,
    score: 0,
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let userChoice = prompt("rock, paper or scissors?");
    if(!choices.includes(userChoice)) return "Ups! Something went wrong!"
    return userChoice.toLowerCase().trim()
}
function playRound(human, computer){
    if ((human.choice == 'rock' && computer.choice == 'scissors') ||
    (human.choice == 'scissors' && computer.choice  == 'paper') ||
    (human.choice == 'paper' && computer.choice  == 'rock')) {
        human.score++;
        console.log('You win a round!')
        return;
    }
    computer.score++;
    console.log('You lose a round');
        
}
function play(numberOfRounds) {
    for(let i = 0; i < numberOfRounds; i++) {
        computer.choice= getComputerChoice();
        human.choice = getHumanChoice();
        playRound(human, computer);
    }
    if(human.score ===computer.score) return "It's a tie!";
    return human.score > computer.score ? "You win!" : "Ohhh! You lose!";
}
console.log(play(2));
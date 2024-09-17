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
function playRound(){
    if ((human.choice == 'rock' && computer.choice == 'scissors') ||
    (human.choice == 'scissors' && computer.choice  == 'paper') ||
    (human.choice == 'paper' && computer.choice  == 'rock')) {
        human.score++;
    } else {
    computer.score++;  
    }
    displayScore();
}
function displayScore(result){
    const humanDisplay = document.querySelector('.human-score');
    const computerDisplay = document.querySelector('.computer-score');
    humanDisplay.textContent = human.score;
    computerDisplay.textContent = computer.score;
    if(result !==undefined) {
        const message = document.querySelector('.final-message')
        message.textContent = result;
        reset();
    }
}
function reset(){
    human.score = 0;
    human.choice = null;
    computer.score = 0;
    computer.choice = null;
}
function play() {
    playRound();
    let result = '';
    if(computer.score === 5 || human.score === 5){
    human.score > computer.score ? result = "You win!" : result = "Ohhh! You lose!";
    if(human.score === computer.score) result = "It's a tie!";
    displayScore(result);
    } else {
        const message = document.querySelector('.final-message')
        message.textContent = '';
    }
    
}

const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () =>{
        human.choice = button.id;
        computer.choice = getComputerChoice();
        play();
    })
})
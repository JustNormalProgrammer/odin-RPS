const choices = ["rock", "paper", "scissors"];

const human = {
    choice: null,
    score: 0,
}
const computer = {
    choice: null,
    score: 0,
}
const humanDisplay = document.querySelector('.human-score');
const computerDisplay = document.querySelector('.computer-score');
const finalMessage = document.querySelector('.final-message');
let isGameOver = false;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let userChoice = prompt("rock, paper or scissors?");
    if (!choices.includes(userChoice)) return "Ups! Something went wrong!"
    return userChoice.toLowerCase().trim()
}
function displayScore() {
    humanDisplay.textContent = human.score;
    computerDisplay.textContent = computer.score;
   
}
function showFinalMessage(){
        let result = '';

        human.score > computer.score ? result = "You win!" : result = "Ohhh! You lose!";
        if (human.score === computer.score) result = "It's a tie!";

        finalMessage.textContent = result;
        
    }
function reset() {
    isGameOver = false;
    human.score = 0;
    human.choice = null;
    computer.score = 0;
    computer.choice = null;
    finalMessage.textContent = '';
}
function play() {
    if ((human.choice == 'rock' && computer.choice == 'scissors') ||
        (human.choice == 'scissors' && computer.choice == 'paper') ||
        (human.choice == 'paper' && computer.choice == 'rock')) {
        human.score++;
    } else {
        computer.score++;
    }
    displayScore();
    
}

const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameOver) {
            reset();  
        }
        human.choice = button.id;
        computer.choice = getComputerChoice();
        play();
        if (computer.score === 5 || human.score === 5) {
            isGameOver = true;
            showFinalMessage();
        }
    })
})
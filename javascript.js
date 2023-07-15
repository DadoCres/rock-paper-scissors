let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const reload = document.querySelector('.reload');
const score = document.querySelector('.score');
const res = document.querySelector('.result');

function compPlay() {
    const choice = ['rock', 'paper', 'scissors'];

    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection) {
    let compChoice = compPlay();
    let result = "Press an icon to play!";

    if(playerScore+compScore < 5) {
        if(playerSelection === 'rock') {
            if(compChoice === 'paper') {
                compScore++;
            } else if(compChoice === 'scissors') {
                playerScore++;
            } else {
                result += "It's a tie!";
            }
        } else if(playerSelection === 'paper') {
            if(compChoice === 'scissors') {
                compScore++;
            } else if(compChoice === 'rock') {
                playerScore++;
            } else {
                result += "It's a tie!";
            }
        } else {
            if(compChoice === 'rock') {
                compScore++;
            } else if(compChoice === 'paper') {
                playerScore++;
            } else {
                result += "\nIt's a tie!";
            }
        }
    }

    
    score.textContent = playerScore + ' : ' + compScore;

    if(playerScore+compScore === 5) {
        if(playerScore > compScore) {
            result = "Player wins!";
        } else {
            result = "Computer wins!";
        }
    }

    res.textContent = result;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.class);
    });
});
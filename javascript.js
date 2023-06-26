let player = 0;
let comp = 0;



function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];

    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === "ROCK") {
        if(computerSelection.toUpperCase() === "PAPER") {
            comp++;
            //return comp;
        } else if(computerSelection.toUpperCase() === "SCISSORS") {
            player++;
            //return player;
        } else {
            return "Draw";
        }
    } else if(playerSelection.toUpperCase() === "SCISSORS") {
        if(computerSelection.toUpperCase() === "ROCK") {
            comp++;
            //return comp;
        } else if(computerSelection.toUpperCase() === "PAPER") {
            player++;
            //return player;
        } else {
            return "Draw";
        }
    } else {
        if(computerSelection.toUpperCase() === "SCISSORS") {
            comp++;
            //return comp;
        } else if(computerSelection.toUpperCase() === "ROCK") {
            player++;
            //return player;
        } else {
            return "Draw";
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log(player + ":" + comp);
    }
    
    if(player > comp) {
        return "Player wins!";
    } else if(comp > player) {
        return "Comp wins!";
    } else {
        return "Draw";
    }
}

console.log(game());

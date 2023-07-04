const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const playGame = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');

        const playerOptions = [rock, paper, scissors];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const randomIndex = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[randomIndex];
            })
        });
    }

    const winner = (player, comp) => {
        const playerScoreBoard = document.querySelector('.playerScore');
        const compScoreBoard = document.querySelector('.computerScore');
    }
}
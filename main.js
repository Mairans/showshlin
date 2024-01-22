const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScore()

function play(n) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
    }

    let result = '';

    if (computerMove === n) {
        result = 'Tie';
        score.ties += 1;
    } else if
        ((computerMove === 'paper' && n === 'rock') ||
        (computerMove === 'scissors' && n === 'paper') ||
        (computerMove === 'rock' && n === 'scissors')) {
        result = 'Lose';
        score.losses += 1;
    } else if
        ((computerMove === 'scissors' && n === 'rock') ||
        (computerMove === 'rock' && n === 'paper') ||
        (computerMove === 'paper' && n === 'scissors')) {
        result = 'Win';
        score.wins += 1;
    }


    updateScore()
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.move').innerHTML = `You <img src="images/${n}-emoji.png"> - <img src="images/${computerMove}-emoji.png"> Computer`
}


function updateScore() {
    document.querySelector('.score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScore()
}
let playerScore, computerScore, selection, comp;
playerScore = 0;
computerScore = 0;

newGame();

function computerPlay() {
    comp = Math.floor((Math.random() * 3) + 1);
    //console.log(computerPlay);
    document.querySelector('.computer-hand').setAttribute('src', comp + '.png');
    document.querySelector('.computer-hand').style.display = 'block';
    if (comp === 1) {
        document.querySelector('.computer-selection').textContent = 'Rock';
    } else if (comp === 2) {
        document.querySelector('.computer-selection').textContent = 'Scissors';
    } else {
        document.querySelector('.computer-selection').textContent = 'Paper';
    };
}

function rock() {
    document.querySelector('.player-selection').textContent = 'Rock';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'rock.png');

    computerPlay();

    if (comp === 1) {
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else if (comp === 2) {
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else {
        computerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    };

}

function paper() {
    document.querySelector('.player-selection').textContent = 'Paper';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'paper.png');

    computerPlay();

    if (comp === 1) {
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else if (comp === 2) {
        computerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else {
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    };
}

function scissors() {
    document.querySelector('.player-selection').textContent = 'Scissors';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'scissors.png');

    computerPlay();

    if (comp === 1) {
        computerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else if (comp === 2) {
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    } else {
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
    };
}

function newGame() {
    document.querySelector('.player-selection').textContent = '';
    document.querySelector('.computer-selection').textContent = '';
    document.querySelector('.player-hand').style.display = 'none';
    document.querySelector('.computer-hand').style.display = 'none';
    document.querySelector('.player-score').textContent = '0';
    document.querySelector('.computer-score').textContent = '0';
}

document.querySelector('.btn-rock').addEventListener('click', rock);
document.querySelector('.btn-paper').addEventListener('click', paper);
document.querySelector('.btn-scissors').addEventListener('click', scissors);
document.querySelector('.btn-new').addEventListener('click', newGame);
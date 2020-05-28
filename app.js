let score, selection, computerPlay;
score = [0, 0];
computerPlay = Math.floor((Math.random() * 3) + 1);
//console.log(computerPlay);


newGame();

function rock() {
    document.querySelector('.player-selection').textContent = 'Rock';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'rock.png');
}

function paper() {
    document.querySelector('.player-selection').textContent = 'Paper';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'paper.png');

    document.querySelector('.computer-hand').setAttribute('src', computerPlay + '.png');
    document.querySelector('.computer-hand').style.display = 'block';

}

function scissors() {
    document.querySelector('.player-selection').textContent = 'Scissors';
    document.querySelector('.player-hand').style.display = 'block';
    document.querySelector('.player-hand').setAttribute('src', 'scissors.png');
}

function newGame() {
    document.querySelector('.player-selection').textContent = '';
    document.querySelector('.computer-selection').textContent = '';
    document.querySelector('.player-hand').style.display = 'none';
    document.querySelector('.computer-hand').style.display = 'none';
}

document.querySelector('.btn-rock').addEventListener('click', rock);
document.querySelector('.btn-paper').addEventListener('click', paper);
document.querySelector('.btn-scissors').addEventListener('click', scissors);
document.querySelector('.btn-new').addEventListener('click', newGame);
/*function displayScore() {

            }

let game = function () {
    let userInput = prompt("Rock-Paper-Scissors");
    console.log(userInput);

    let correctedUserInput = userInput.toLowerCase();
    //console.log(correctedUserInput);

    const options = ["Rock", "Paper", "Scissors"];
    let computerPlay =
        options[Math.floor(Math.random() * options.length)];

    let correctedComputerPlay = computerPlay.toLowerCase();
    console.log(computerPlay);

    console.log(playRound(correctedUserInput, correctedComputerPlay));

    let score = (playerScore + " : " + computerScore);
    console.log(score);


};

let playerScore = 0;
let computerScore = 0;

let playRound = function (playerSelection, computerSelection) {
    if ((playerSelection == "rock") & (computerSelection == "scissors")) {
        ++playerScore;
        return ("You win! Rock beats scissors");
    } else if ((playerSelection == "scissors") & (computerSelection == "rock")) {
        ++computerScore;
        return ("You lose! Rock beats scissors");
    } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
        ++playerScore;
        return ("You win! Paper beats rock");
    } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
        ++computerScore;
        return ("You lose! Paper beats rock");
    } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
        ++playerScore;
        return ("You win! Scissors beats paper");
    } else if ((playerSelection == "paper") & (computerSelection == "scissors")) {
        ++computerScore;
        return ("You lose! Scissors beats paper");
    } else if ((playerSelection == "rock") & (computerSelection == "rock")) {
        return ("Tie! Try again");
    } else if ((playerSelection == "paper") & (computerSelection == "paper")) {
        return ("Tie! Try again");
    } else if ((playerSelection == "scissors") & (computerSelection == "scissors")) {
        return ("Tie! Try again");
    } else {
        return ("Something's wrong :(");
    }
    //console.log(playRound(correctedUserInput, correctedComputerPlay));          
};



let finalResult = function () {
    if (playerScore > computerScore) {
        alert("Master!");
    } else if (playerScore == computerScore) {
        alert("Meh :P");
    } else {
        alert("Amateur! Play again");
    }
};


game();
game();
game();
game();
game();
finalResult();*/
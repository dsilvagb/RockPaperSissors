let playerScore = 0;
let computerScore = 0;
let gameNumber = 1;

function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
        return ("rock");
    }
    else if (rand === 2) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Tie! " + computerSelection + " = " + playerSelection);
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
}

function winMessage (playerSelection, computerSelection) {
    playerScore = playerScore + 1;
    return ("You Win! " + playerSelection + " beats " + computerSelection);
}

function loseMessage (playerSelection, computerSelection) {
    computerScore = computerScore + 1;
    return ("You lose! " + computerSelection + " beats " + playerSelection);
  }

function game () {
    while (gameNumber <= 5) {
        let playerPrompt = prompt("Please enter your selection");
        let playerSelection = playerPrompt.toLowerCase();
        let computerSelection = computerPlay();
        console.log("Game Number - " + gameNumber);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score - Player = " + playerScore + " Computer = " + computerScore);
        gameNumber ++;
    }
    if (playerScore > computerScore) {
        console.log("Congratulations!!! You Win");
    }
    else if (playerScore < computerScore) {
        console.log("You Lose !!!  Better luck next time");
    }
    else {
        console.log("Draw!!!  Try again???")
    }
}


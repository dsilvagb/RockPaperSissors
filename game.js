let playerScore = 0;
let computerScore = 0;
let audio = new Audio('kick.wav');

// Display initial scores after page loads
window.addEventListener('load', function() {
    document.getElementById("score").innerHTML =  "Player = " + playerScore + " Computer = " + computerScore;
});

function game (selection) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = selection;
        let computerSelection = computerPlay();
        let id = "#" + selection.toLowerCase();
        document.querySelector(id).className = 'playing';
        audio.play();
        const gameResult = (playRound(playerSelection, computerSelection));
        document.getElementById("score").innerHTML = gameResult + `<br>` + "Player = " + playerScore + " Computer = " + computerScore;
        if (playerScore == 5 || computerScore == 5) {
            finalResult();
        }
        let img = document.querySelectorAll('.box img');
        img.forEach(img => img.addEventListener('transitionend', removeTransition));
    }
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Tie! " + computerSelection + " = " + playerSelection);
    }
    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return loseMessage(playerSelection, computerSelection);
        }
        else {
            return winMessage(playerSelection, computerSelection);
        }
    }
}

// Computer random selection 
function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
        return ("Rock");
    }
    else if (rand === 2) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}

// Winning and Losing messages
function winMessage (playerSelection, computerSelection) {
    playerScore = playerScore + 1;
    return ("You Win! " + playerSelection + " beats " + computerSelection);
}

function loseMessage (playerSelection, computerSelection) {
    computerScore = computerScore + 1;
    return ("You lose! " + computerSelection + " beats " + playerSelection);
  }

function finalResult() {
    let resultMsg = "";

    if (playerScore == 5) {
        resultMsg = "Congratulations, you win!!!";
    }
    else {
        resultMsg = "Computer wins.  Try Again?";
    }

    const currentScore = document.querySelector('#score');

    const finalScore = document.createElement('div');

    const resetBtn = document.createElement('button');
    resetBtn.className = "button";
    resetBtn.innerHTML = "Play Again?";
    resetBtn.setAttribute('onClick', 'gameReset()');

    currentScore.appendChild(finalScore);
    currentScore.appendChild(resetBtn);
    document.querySelector('h1').textContent = resultMsg;

}

function gameReset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML =  "Player = " + playerScore + " Computer = " + computerScore;
    document.querySelector('h1').textContent = "Rock, Paper, Scissors";
}


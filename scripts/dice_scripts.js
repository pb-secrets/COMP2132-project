let roll                = document.getElementById("roll");
let reset               = document.getElementById("reset");
let playerScoreOutput   = document.getElementById("player1Score"); 
let computerScoreOutput = document.getElementById("computerScore");
let playerRollTracker   = document.getElementById("playerRoundTracker")    
let computerRollTracker = document.getElementById("computerRoundTracker")
let gameOver            = document.getElementById("game-over");
const popup             = document.getElementById('pop-up');
const closePopup        = document.getElementById('close-popup');
let round               = 0;
let playerScore         = 0;
let computerScore       = 0;
let endGame            = false;

function rollDice(){
    let playerRoll1     = Math.floor(Math.random() * 6) + 1;
    let playerRoll2     = Math.floor(Math.random() * 6) + 1;
    let computerRoll1   = Math.floor(Math.random() * 6) + 1;
    let computerRoll2   = Math.floor(Math.random() * 6) + 1;
    
    round++;
    console.log(round);
    document.querySelector(".playerImage1").setAttribute("src", "images/" + playerRoll1 + ".png")
    document.querySelector(".playerImage2").setAttribute("src", "images/" + playerRoll2 + ".png")
    document.querySelector(".computerImage1").setAttribute("src", "images/" + computerRoll1 + ".png")
    document.querySelector(".computerImage2").setAttribute("src", "images/" + computerRoll2 + ".png")
   
      if (playerRoll1 == playerRoll2){
        playerRoundScore =  (playerRoll1 + playerRoll2) * 2; 
        playerScore += (playerRoll1 + playerRoll2) * 2;
        playerScoreOutput.innerHTML = `${playerScore}`;
        playerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${playerRoll1}</span> <span class="results">${playerRoll2} = ${playerRoundScore}</span></p>`
                                        
      
    } else if (playerRoll1 !== 1 && playerRoll2 !== 1) {
        playerRoundScore = playerRoll1 + playerRoll2;
        playerScore += playerRoll1 + playerRoll2;
        playerScoreOutput.innerHTML = `${playerScore}`;
        playerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${playerRoll1}</span> <span class="results">${playerRoll2} = ${playerRoundScore}</span></p>`
       
    } else if (playerRoll1 ==1 || playerRoll2 ==1){
        playerRoundScore = 0;
        playerScoreOutput.innerHTML + 0;
        playerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${playerRoll1}</span> <span class="results">${playerRoll2} = ${playerRoundScore}</span></p>`
    }
     if (computerRoll1 == computerRoll2){ 
        computerRoundScore = (computerRoll1 + computerRoll2) * 2;
        computerScore += (computerRoll1 + computerRoll2) * 2;
        computerScoreOutput.innerHTML = `${computerScore}`;
        computerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${computerRoll1}</span> <span class="results">${computerRoll2} = ${computerRoundScore}</span></p>`
        
    } else if (computerRoll1 !== 1 && computerRoll2 !== 1) {
        computerRoundScore = computerRoll1 + computerRoll2;
        computerScore += computerRoll1 + computerRoll2;
        computerScoreOutput.innerHTML = `${computerScore}`;
        computerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${computerRoll1}</span> <span class="results">${computerRoll2} = ${computerRoundScore}</span></p>`
         
    } else if (computerRoll1 ==1 || computerRoll2 == 1){
        computerRoundScore = 0
        computerRollTracker.innerHTML += `<p><span class="scoreTracker">Round ${round}</span> <span class="results">${computerRoll1}</span> <span class="results">${computerRoll2} = ${computerRoundScore}</span></p>`
    }
    
    if (round == 3) {
        popup.classList.toggle("fade");
        if (playerScore > computerScore){
            gameOver.innerHTML = `<p class="game-over">You WIN!</p> <p class="game-over">${playerScore} - ${computerScore}</p>`
        } if (playerScore < computerScore) {
            gameOver.innerHTML = `<p class="game-over">You LOSE!</p> <p class="game-over">${playerScore} - ${computerScore}</p>`
        } if (playerScore == computerScore) {
            gameOver.InnerHTML = `<p class="game-over">It's a TIE!</p> <p class="game-over">${playerScore} - ${computerScore}</p>`
        }
        endGame = true;
         
    }     

}



function resetGame() {
    if (round == 3) {}
    document.querySelector(".playerImage1").setAttribute("src", "images/1.png");
    document.querySelector(".playerImage2").setAttribute("src", "images/1.png");
    document.querySelector(".computerImage1").setAttribute("src", "images/1.png");
    document.querySelector(".computerImage2").setAttribute("src", "images/1.png");
    popup.classList.toggle("fade"); 
    round = 0;
    playerScore = 0;
    computerScore = 0;
    endGame = false;
    playerScoreOutput.innerHTML = `${playerScore}`;
    computerScoreOutput.innerHTML = `${computerScore}`;
    playerRollTracker.innerHTML = '';
    computerRollTracker.innerHTML = '';
}

roll.addEventListener("click", function() {
    if (endGame == false){
        setTimeout(rollDice, 250);
    }
});
reset.addEventListener("click", resetGame);
closePopup.addEventListener('click', resetGame);

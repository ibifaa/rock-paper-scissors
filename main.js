// images variables
const choice=  document.querySelectorAll(".image");

// scores varialbe
const computerScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");

// Winner variable
const winner = document.querySelector(".winner");

let computer = 0
let player = 0
let playSelection;
let computerSelection


for(let i=0; i<5; i++){
    choice.forEach((image) => {
        image.addEventListener("click", ()=>{
            const img = document.querySelector("img");
            playSelection = img.alt.toLocaleLowerCase();
            computerSelection = getComputerChoice();
            
            playRound(playSelection, computerSelection)
        })
    });
}
declareWinner();
   



 function getComputerChoice () {
    const myChoice = ["rock", "paper", "scissors"];
    const randomGenerator = Math.floor(Math.random()*choice.length);
     computerSelection = myChoice[randomGenerator];
    return computerSelection;
}
    

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
            player++;
            playerScore.textContent = player;
        }else if(playerSelection != computerSelection){
           computer++;
           computerScore.textContent = computer;

        }
}

function declareWinner(){
    if(computer>player){
            winner.textContent =  "Computer Won";
        }else{
            winner.textContent =  "Player Won";
        }
}

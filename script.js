let computer = 0
let player = 0
let computerGuess = function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const randomGenerator = Math.floor(Math.random()*choice.length);
    let result = choice[randomGenerator];
    return result;
}
    
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
            player = player+1;
        }else{
           computer = computer + 1;
        }
}

function game(){
    for(let i =0; i<5; i++){
    let computerSelection = computerGuess;
    let playerSelection = (prompt("Enter Rock, Paper or Scissors")).toLowerCase;
   
        playRound(playerSelection, computerSelection)
    }
    
    if(computer>player){
        return "Computer Won"
    }else{
        return "Player Won"
    }
}

console.log(game());
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const images = document.querySelectorAll(".image");
const winner = document.querySelector(".winner");

let mySelect = ""
let computer = 0
let player = 0

let computerGuess = function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const randomGenerator = Math.floor(Math.random()*choice.length);
    let result = choice[randomGenerator];
    return result;
}
    




function game(){
    for(let i =0; i<5; i++){

images.forEach((image) => {
    image.addEventListener("click", (e)=>{
        const selected = e.currentTarget.classList;
        if(selected == computerGuess){    
            player++;
            score2.textContent = player;
        }
        else{
            computer++;
            score1.textContent = computer;
        }
    })
});
    }
    
    if(computer>player){
        winner.textContent= "Computer Won";
    }else{
        winner.textContent= "Player Won"
    }
}


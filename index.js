//create counter for ties player and computer wins ouside of scope
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;

function gameChoices(){
    //ask user for their choice of rock paper scissor
    //store that in a value playerChoicefunction game(){
    const playerChoice = prompt("Choose rock paper or scissors");
    //get computer choice by running random gen 1-3 1rock 2 paper 3 scissor
    //store that in computerChoice
    let computerChoice="";
    // translate computerChoice to rock paper or scissors.
    switch(Math.floor(Math.random() *3)+1){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;            
    }
    //runs the game with choices.
    playGame(playerChoice, computerChoice);
}
//create a function of game() which will have game logic
function playGame(player,computer){
let playerChoice = player;
let computerChoice = computer
//Compare choices using case
//case1 userChoice is rock
//condition1 computer choice is paper: computer wins 
//condition2 computer choice is scissor: player wins 
//condition3 computer choice is rock: its a tie 
//add win counter for player and user
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper"){
                console.log("Computer chose paper, computer wins");
                computerCounter ++;
                break;
            }else if (computerChoice === "scissors"){
                console.log("Computer chose scissors, player wins");
                playerCounter ++ ;
                break;
            }
            else{
                console.log("Computer chose rock, its a tie");
                tieCounter ++;
                break;
            }
        case "paper":
            if (computerChoice === "scissors"){
                console.log("Computer scissors , computer wins")
                computerCounter ++;
                break;
            }else if (computerChoice === "rock"){
                console.log("Computer chose rock, player wins");
                playerCounter ++;
                break;
            }
            else{
                console.log("Computer chose paper, its a tie");
                tieCounter ++;
                break;
            }
        case "scissors":
            if (computerChoice === "rock"){
                console.log("Computer chose rock, computer wins");
                computerCounter ++;
                break;
            }else if (computerChoice === "paper"){
                console.log("Computer chose paper, player wins");
                playerCounter ++;
                break;
            }
            else{
                console.log("Computer chose scissors, its a tie");
                tieCounter ++;
                break;
            }
    }    
}

console.log("You will play 5 times");
for (let i = 0; i < 5; i++){
    gameChoices();
}
console.log("Player wins: " + playerCounter);
console.log("Computer wins: " + computerCounter);
console.log("Ties:" + tieCounter);


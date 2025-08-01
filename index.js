
//create a function of game() which will have game logic
function playGame(){
//ask user for their choice of rock paper scissor
//store that in a value playerChoicefunction game(){
    const playerChoice = prompt("Choose rock paper or scissors");
    console.log(playerChoice);

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
    console.log(computerChoice);
//Compare choices using case
//case1 userChoice is rock
//condition1 computer choice is paper: computer wins restart game()
//condition2 computer choice is scissor: player wins restart game()
//condition3 computer choice is rock: its a tie restart game()
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper"){
                console.log("Computer chose paper, computer wins");
                break;
            }else if (computerChoice === "scissors"){
                console.log("Computer chose scissors, player wins");
                break;
            }
            else{
                console.log("Computer chose rock, its a tie");
                break;
            }
        case "paper":
            if (computerChoice === "scissors"){
                console.log("Computer scissors , computer wins")
                break;
            }else if (computerChoice === "rock"){
                console.log("Computer chose rock, player wins");
                break;
            }
            else{
                console.log("Computer chose paper, its a tie");
                break;
            }
        case "scissors":
            if (computerChoice === "rock"){
                console.log("Computer chose rock, computer wins");
                break;
            }else if (computerChoice === "paper"){
                console.log("Computer chose paper, player wins");
                break;
            }
            else{
                console.log("Computer chose scissors, its a tie");
                break;
            }
    }    
}

console.log("You will play 5 times");
for (let i = 0; i < 5; i++){
    playGame();
}


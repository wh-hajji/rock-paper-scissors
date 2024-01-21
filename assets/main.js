const arr=["rock", "paper", "scissor"];
let playerScore=0;
let computerScore=0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
        return arr[
        Math.floor(Math.random()*3)
    ]
}

function getPlayerChoice() {
    let choice= '';
   while (!arr.includes(choice.toLowerCase())) {
    choice=prompt('rock, paper, scissor')

   }
   return choice.toLocaleLowerCase();

    
}

function lose() {
    computerScore++;
}

function win() {
    playerScore++;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection) {
        if (playerSelection === 'rock') {
            computerSelection === 'paper' ? lose() : win();
        } else if (playerSelection === 'paper') {
            computerSelection === 'scissor' ? lose() : win();
        } else {
            computerSelection === 'rock' ? lose() : win();
        }
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        
        console.log(`Round: Player = ${playerSelection} || CPU = ${computerSelection}`);
        playRound(playerSelection, computerSelection);
        console.log(`Score: Player = ${playerScore} || CPU = ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log('PLAYER WINS');
    } else {
        console.log('COMPUTER WINS');
    }
}

console.log('Player= ' + playerSelection);
console.log('CPU= ' + computerSelection);
console.log(`player = ${playerScore} || ${computerScore} = Cpu`);

game();
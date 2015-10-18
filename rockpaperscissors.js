////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var x=null;
if (x >null){
x=x;}
else if (x===null){
    x='getinput()';
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;

}

function getComputerMove(move) {
var x=null;
if (x >null){
x=x;}
else if (x===null){
    x='randomPlay()';
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    player= 'rock';
computer='scissors';
 if (player=='rock' && computer == 'scissors'){
       y='player';
 }
 else if (player=='rock'&& computer == 'paper'){
       y='computer';
 }
 else if (player=='rock'&& computer =='rock'){
     y='tie';
 }
 else if (player=='scissors' && computer=='rock'){
     y='computer';
 }
 else if (player=='scissors' && computer=='paper'){
     y='player';
 }
 else if (player=='scissors' && computer == 'scissors'){
     y='tie';
 }
 else if (player=='paper' && computer== 'rock'){
     y='player';
 }
 else if (player=='paper' && computer == 'scissors'){
     y='computer';
 }
 else if (player == 'paper' && computer == 'paper'){
     y='tie';
 }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins > 5 && computerWins > 5){
    var winner=getWinner(getPlayerMove(), getComputerMove());
    if (winner='player'){
        playerWins=playerWins + 1;
        console.log('Player has one this round, Well Done!');
        console.log ('player chose'+ playerMove + 'while computer chose'+ computerMove);
console.log('The score is currently'+ playerWins + 'to' + computerWins);
    }
    if (winner='computer'){
        computerWins=ConputerWins +1;
        console.log('Computer has one this round, Sorry!');
        console.log ('player chose'+ playerMove + 'while computer chose'+ computerMove);
console.log('The score is currently'+ playerWins + 'to' + computerWins);
    }
    else {console.log ('no change in scores');
}
if (playerWins===5){
    console.log('Player Wins!');
}
else {console.log ('Computer Wins!');
}
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


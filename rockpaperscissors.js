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
    var move=1;
if (move >null){
move=move;}
else if (move===0){
    move='getinput()';
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    var move=9;
if (move >null){
move=move;}
else if (move===0){
    move='randomPlay()';
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
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


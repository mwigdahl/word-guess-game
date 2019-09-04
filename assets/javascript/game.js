// pseudo coding notes


// Setup gloabl variables

var rivers = ["colorado", "columbia", "green", "yampa", "snake"];
var keyStroke = 15;
var wins = 0;

// Randomly select a word

var riverSelect = rivers[Math.floor(Math.random() * rivers.length)];
console.log(riverSelect);

// get selected words length

var riverArray = [];
for (var i = 0; i < riverSelect.length; i++) {
var riverSelect = riverArray[i] = "_";
console.log(riverArray);
}

// show selected word length with "_"

 //1. get user input "userGuess"

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    document.getElementById('user-input').textContent = userGuess + ', ';
    keyStroke--;
    console.log(keyStroke);
}

// var keyStroke = guessesLeft;
// console.log(guessesLeft);

// var guesses = function(event) {   
//     var guessLeft = keyStoke;
//     console.log("guessleft:", guessLeft);
//     // var guessesText = document.getElementById('guesses-left');
//     // return guessesText.textContext = event.keyStroke;
//     //console.log(keyStroke);
// }

// Replace the the div with the underscores for the word


// if letter is true post add to the screen

// else remove # of guesses left

//Score starts at 0



// Show letter typed
 //1. get user input and


// Count down the number of guess



// Replace the underscores with letter guess

//if true replace the underscore & minus # of guess left


// else remove # of guesses left


// Enter # of Wins










// pseudo coding notes


// Setup gloabl variables

var rivers = ["colorado", "columbia", "green", "yampa", "snake"];
var remainingChances = 15;
var wins = 0;

// Randomly select a word

var riverSelect = rivers[Math.floor(Math.random() * rivers.length)];
console.log(riverSelect);

// get selected words length

var riverArray = function (word) {
    var str = riverSelect; 
    var n = str.length;
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
        document.getElementById('letter-count').textContent = n[i] + "_";
        console.log(riverArray);
    };
}

riverArray(riverSelect);

// show selected word length with "_"

//1. get user input "userGuess"

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    document.getElementById('user-input').textContent = userGuess + ', ';
    remainingChances--;
    console.log(remainingChances);
}

// var remainingChances = guessesLeft;
// console.log(guessesLeft);

// var guesses = function(event) {   
//     var guessLeft = keyStoke;
//     console.log("guessleft:", guessLeft);
//     // var guessesText = document.getElementById('guesses-left');
//     // return guessesText.textContext = event.remainingChances;
//     //console.log(remainingChances);
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










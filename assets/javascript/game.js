// pseudo coding notes


// Randomly select a word - make array

var rivers = ["colorado", "columbia", "green", "yampa", "snake"];
console.log(rivers);

// Replace the the div with the underscores for the word

 //1. get user input "userGuess"

document.onkeyup = function(event) {
    var userGuess = event.key;
    var userText = document.getElementById('user-input');
    //console.log(userGuess);
 //2. create new variable that convert to lowercase() .toLowerCase() "userGuesslower"
    var userGuessLower = userGuess.toLowerCase();
    userText.textContent = event.key;
    //console.log(userGuessLower);
}

// Show letter typed

// var userText = document.getElementById('user-input');
// document.onkeyup = function(event) {
//     userGuessLower.textContent = event.key
// }
// // if letter is true post add to the screen

// else remove # of guesses left

//Score starts at 0
var score = 0;



// Show letter typed
 //1. get user input and


// Count down the number of guess



// Replace the underscores with letter guess

//if true replace the underscore & minus # of guess left


// else remove # of guesses left


// Enter # of Wins










/*----- constants -----*/
/*----- app's state (variables) -----*/
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let categories;         // Array of topics
  let chosenCategory;     // Selected catagory
  let getHint;          // Word getHint
  let word;     //can use replace ()         // Selected word
  let guess;             // guess
  let guesses = [ ];      // Stored incorrect guesses
  let lives;             // Lives
  let correctGuesses;    // Count correct geusses
  let underScores = '_';

word = ['PIKACHU', 'BULBASAUR', 'CHARMANDER', 'SQUIRTLE'];
wordIndex = Math.floor(Math.random() * word.length);
guess = word[wordIndex];
//guess.split('');
console.log(guess);


function drawUnderScores () {
  for (var i = 0; i < guess.length; i++) {
    $('.wordToGuess').html('_');
  }
}

for (var i = 0; i < guess.length; i++) {
  console.log(guess[i]);
}
// guess.forEach(function(element) {
//   console.log(guess[element]);
// });

//use //join() if word==guess, win;
//img0, img1, img2, img3, img4. img5, img6  //7 total images
//incorrect is an array to push,
//#also corresponds to # of incorrect guesses
//in underscore, can use letter spacing to increase/decrease spacing
/*----- cached element references -----*/
$('.wordToGuess').text(drawUnderScores());


/*----- event listeners -----*/
$('.alphabets').on('click', handleBetClick);

/*----- functions -----*/

function handleBetClick(e) {
  let letter = e.target.textContent;
  console.log(letter);
}



//select a random word from an Array
//split word into individual letters
//display letters onto screen as underscores_
//have an input box which accepts only letters
//if match guessed letter to Word
 //if letter not in word, store letter in guesses array, lives--
 //if letter is in word, change underscore to the letter, lives stay the same
 //




 //

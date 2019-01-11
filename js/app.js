/*------------- constants -------------*/

/*------------- app's state -------------*/
var pokeObj, secretWord, wrongCount, guess, words;

/*------------- cached element references -------------*/
let $guess = $('#guess');
let $img = $('#hang-img');
let $message = $('#message');
let $hint = $('#pokemonType span');

/*------------- event listeners -------------*/
$('#letters').on('click', handleLetterClick);

$('#reset').on('click', initialize);

/*------------- functions -------------*/
initialize();

function initialize() {


  $.ajax({   //because this is asynchynous, must be first or else rest of code won't run
    url: 'https://pokeapi.co/api/v2/pokemon',
    dataType: 'json',
    method: 'GET'
  }).done(function(data) { //when done, does something with the data:
    words = data.results
      .filter(poke => !poke.name.includes('-')) //taking out poke's with "-" in it's name.
      .map(poke => poke.name.toUpperCase()); //goes thru entire poke' names and upperCases

    wrongCount = 0;
    randomIndex = Math.floor(Math.random() * words.length);
    secretWord = words[randomIndex];

    console.log(secretWord);
    guess = "";
    for (var i = 0; i < secretWord.length; i++) {
      let currentLetter = secretWord.charAt(i);
      if (currentLetter === " ") {
        guess += " "
      } else {
        guess += "_";
      }
    };

    $('button.letter-button').prop('disabled', false);
    render();
  });
}

function render() {
  $guess.html(guess);
  $('#wrong').html(`WRONG GUESSES: ${wrongCount}`);
  $img.attr('src', 'images/img' + wrongCount + '.png')

  if (guess === secretWord) {
    $message.html("Congratulations! You win!");
    $message.fadeIn();
  } else if (wrongCount === 6) {
    $message.html("You lost! You've run out of chances.");
    $message.fadeIn();
  } else {
    $message.html("")
    $message.hide();
  }
}

function handleLetterClick(evt) {
  if (wrongCount === 6 || evt.target.tagName !== "BUTTON") return;
  var letter = evt.target.textContent;
  console.log(letter);
  if (secretWord.includes(letter)) {
    let guessArray = guess.split(''); // makes a copy of the array
    for (var i = 0; i < secretWord.length; i++) { //loop thru secretWord
      if (secretWord.charAt(i) === letter) guessArray[i] = letter;
      //if secretword's index character is === letter, replace with letter;
    }
    guess = guessArray.join(''); //rejoin the indiv chars as whole string;

  } else {
    if (evt.target.id !== "reset") {
      wrongCount++;
    }
  }

  $(evt.target).prop('disabled', true);
  render();
}

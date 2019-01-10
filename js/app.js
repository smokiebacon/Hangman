/*------------- constants -------------*/
let words = [
  'PIKACHU',
  'CHARMANDER',
  'SQUIRTLE',
  'BULBASAUR',
  'ZAPDOS',
  'MOLTRES',
  'ARTICUNO',
  'MEWTWO',
  'DRAGONITE',
  'NINETAILS',
  'LAPRAS'
];

/*------------- app's state -------------*/
var secretWord, wrongCount, guess;


/*------------- cached element references -------------*/
var $guess = $('#guess');
var $img = $('#hang-img');
var $message = $('#message');

/*------------- event listeners -------------*/
$('#letters').on('click', handleLetterClick);

$('#reset').on('click', initialize);

/*------------- functions -------------*/
initialize();

function initialize() {
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
}


function render() {
  $guess.html(guess);
  $('#wrong').html(`WRONG GUESSES: ${wrongCount}`);
  $img.attr('src', 'images/img' + wrongCount + '.png')

  if (guess === secretWord) {
    $message.html("Congratulations!! You win!");
    $message.fadeIn();
  } else if (wrongCount === 6) {
    $message.html("Sorry! You've run out of chances.");
    $message.fadeIn();
  } else {
    $message.html("")
    $message.hide();
  }
}


function handleLetterClick(evt) {
  if (wrongCount === 6) return;

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

  $(evt.target).prop('disabled', true).css('text-decoration', 'line-through');
  render();
}

// //GET NAME WITH POKEMON API
// let types = ['electric', 'normal'];
// let trainerTypes = types.map(function(type) {
// return $.ajax({
//   url: 'https://pokeapi.co/api/v2/pokemon/pikachu/',
//   dataType: 'json',
//   method: 'GET'
//     });
// });
//
// $.when.apply(null, trainerTypes)
//  .then(function() {
//    let pokemonTypes = Array.prototype.slice.call(arguments);//ARRAY-LIKE OBJECT TURNED INTO ARRAY
//    getTypeOfPokemon(pokemonTypes);
//    console.log(pokemonTypes);
//  });
//
//  function getTypeOfPokemon (pokemonTypes) {
//    pokemonTypes = pokemonTypes.map(function(types){
//      console.log(types[0].species.name); //GET NAME OF POKEMON
//    });
//  }

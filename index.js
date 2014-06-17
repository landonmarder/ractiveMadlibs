var ractive = new Ractive({
  // The `el` option can be a node, an ID, or a CSS selector.
  el: 'container',

  // We could pass in a string, but for the sake of convenience
  // we're passing the ID of the <script> tag above.
  template: '#template',

  // Here, we're passing in some initial data
  data: {
          seven: { placeholder: 'NUMBER (1)', correct: false },
          nation: { placeholder: 'NOUN (5)', correct: false },
          equal: { placeholder: 'ADJ (1)', correct: false },
          people: { placeholder: 'PLURAL NOUN (4)', correct: false },
          numberCorrect: 0,
          totalGuesses: 4,
          totalTries: 0,
          percentageCorrect: function(correct, guesses) {
              if (guesses > 0) {
              return correct / guesses * 100;
            } else {
              return '-';
            }
          }
        }
});
ractive.on('solution', function(event){
  ractive.set( 'totalTries', ractive.get( 'totalTries' ) + 1 );
  checkCorrect('seven');
  checkCorrect('nation');
  checkCorrect('equal');
  checkCorrect('people');
});

function checkCorrect(string) {
   if (isCorrect(string)) {
    $('.' + string).css('color', 'green');
    ractive.set( 'numberCorrect', ractive.get( 'numberCorrect' ) + 1 );
    ractive.set(string, { correct: true, placeholder: string })
  }
}

function isCorrect(string) {
  if (ractive.data[string].placeholder === string && ractive.data[string].correct === false) {
    return true;
  } else {
    return false;
  }
}

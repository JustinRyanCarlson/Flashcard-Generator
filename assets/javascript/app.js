// 
// VARIABLES 
// 

// Requires the basic and cloze flashcard constructors
var basicExport = require('./basic_flashcard');
var clozeExport = require('./cloze_flashcard');
var fs = require('fs');
var cardType;
var cardFront;
var cardBack;
var fullCardArr;
var cardCloze;
var cardClozeText;



//
// BASE CODE
//

// If else-if block used to create either a basic or cloze flashcard (or prompt the user to
// use a valid argument) depending on what is passed in from the command line
if (process.argv[2] === 'basic') {
    // Splices off all words after the 3rd argument as an array then joins them back together
    // as a string then splits the string at the comma into an array
    fullCardArr = process.argv.splice(3).join(' ').split(',');
    cardFront = fullCardArr[0];
    cardBack = fullCardArr[1];
    cardType = 'Basic';

    // Creates a new objects using the BasicFlashCard constructor located in the
    // basic_flashcard.js file, passes in the card parameters and type
    var basicCard = new basicExport.BasicFlashCard(cardFront, cardBack, cardType);
    // Converts the newly created basicCard object into a string to be written to the
    // saved_flashcards.txt file
    basicCard = JSON.stringify(basicCard);
    // Calls the saveFlashCard function and passes in the newly created basicCard object
    // as a string
    saveFlashCard(basicCard);

} else if (process.argv[2] === 'cloze') {
    var clozeWord = [];
    // Splices off all words after the 3rd argument as an array then joins them back together
    // as a string then splits the string at each character into an array
    fullCardArr = process.argv.splice(3).join(' ').split('');

    // For loop that interates through each letter in the fullCardArr array
    for (var i = 0; i < fullCardArr.length; i++) {
        // Looks for the open curly brace that denotes the start of the cloze word
        if (fullCardArr[i] === '{') {
            // Replaces the open curly brace with an underscore
            fullCardArr[i] = '_';
            // Increments i so that when the next for loop is run, the open curly brace
            // isnt stored as the first letter in the cloze word
            i++;
            // For loop that starts at i and continues running until the closing
            // curly brace (denotes end of cloze word) is found
            for (var j = i; fullCardArr[j] != '}'; j++) {
                // Pushes the current letter to the clozeWord array
                clozeWord.push(fullCardArr[j]);
                // Replaces the current letter with an underscore since it is part of 
                // the word that is to be clozed (hidden)
                fullCardArr[j] = '_';
            }
            // Once the for loop breaks the closing curley brace needs to be replaced,
            // this line increments the j counter (since it stopped incrementing one
            // index before the brace) and replaces it with an underscore
            fullCardArr[j++] = '_';
        }
    }

    // Joins the clozeWord array as a string (this is the cloze word)
    cardCloze = clozeWord.join('');
    // Joins the fullCardArr array as a string (this is the cloze text with underscores
    // where the cloze word was before)
    cardClozeText = fullCardArr.join('');
    cardType = 'Cloze';
    // Creates a new objects using the ClozeFlashCard constructor located in the
    // cloze_flashcard.js file, passes in the card parameters and type
    var clozeCard = new clozeExport.ClozeFlashCard(cardClozeText, cardCloze, cardType);
    // Converts the newly created clozeCard object into a string to be written to the
    // saved_flashcards.txt file
    clozeCard = JSON.stringify(clozeCard);
    // Calls the saveFlashCard function and passes in the newly created clozeCard object
    // as a string
    saveFlashCard(clozeCard);

} else {
    console.log('Please enter a valid flashcard argument');
}



//
// FUNCTIONS
//

// Function to append the created flashcard objects to a .txt file, can be cause to create an
// array of flashcard objects to be used later on
function saveFlashCard(cardObject) {
    fs.appendFile('../../saved_flashcards.txt', cardObject + ',', function(err) {
        if (err) throw err;
        console.log('Save Successful');
    });
}

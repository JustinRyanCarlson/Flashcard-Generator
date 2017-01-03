// 
// VARIABLES 
// 

// Requires the basic and cloze flashcard constructors
var basicExport = require('./basic_flashcard');
var clozeExport = require('./cloze_flashcard');
var fs = require('fs');



//
// BASE CODE
//

// If else-if block used to create either a basic or cloze flashcard (or prompt the user to
// use a valid argument) depending on what is passed in from the command line
if (process.argv[2] === 'basic') {
    // Creates a new objects using the BasicFlashCard constructor located in the
    // basic_flashcard.js file
    var basicCard = new basicExport.BasicFlashCard();

    // Calls the createBasicCard function for the new basic flashcard object that was just
    // created and passes in the raw data from the command line
    basicCard.createBasicCard(process.argv);

    // Converts the newly created basicCard object into a string to be written to the
    // saved_flashcards.txt file
    basicCard = JSON.stringify(basicCard);

    // Calls the saveFlashCard function and passes in the newly created basicCard object
    // as a string
    saveFlashCard(basicCard);
} else if (process.argv[2] === 'cloze') {
    // Creates a new objects using the ClozeFlashCard constructor located in the
    // cloze_flashcard.js file
    var clozeCard = new clozeExport.ClozeFlashCard();

    // Calls the createClozeCard function for the new cloze flashcard object that was just
    // created and passes in the raw data from the command line
    clozeCard.createClozeCard(process.argv);

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

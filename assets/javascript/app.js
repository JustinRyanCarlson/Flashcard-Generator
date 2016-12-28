var fs = require('fs');
var cardType;
var cardFront;
var cardBack;


function ClozeFlashCard(text, cloze) {
    this.clozeCardText = '';
    this.clozeCardCloze = '';
    this.clozeReturn = function() {
        return this.clozeCardCloze;
    };
}

function BasicFlashCard(front, back) {
    this.basicCardFront = '';
    this.basicCardBack = '';
}


// 5: Constructor and prototype used to hold methods for basic flash cards
// 5: Constructor and prototype used to hold basic methods for cloze-deleted flash cards
// 5: Properly fill out readme with examples of each constructor and the methods (use request's npm page as an example of the depth we're looking for)
// 5: 2 modules used to hold each constructor, and a 3rd file used as a single entry point which exports both.
// 5: ClozeCard has property or method that returns only the cloze-deleted portion of the text
// 5: ClozeCard has property or method that returns only the partial text
// 5: ClozeCard throws error if it is not able to figure out where the cloze-deletion should go.

console.log('');
console.log('Hello! Welcome to my flashcard node.js app');
console.log('');
console.log('To use this application use the arguments:');
console.log('1. node');
console.log('2. Path to app.js file');
console.log('3. Which type of flashcard you would like to create (basic or cloze)');
console.log('4. The front then back of the basic flashcard with a comma seperating them OR the cloze then the cloze card text with a comma seperating them');
console.log('');
console.log('Example: node app.js basic Who was the first president of the United States, George Washington');
console.log('');


if (process.argv[2] === 'basic') {
    var fullCardArr = process.argv.splice(3).join(' ').split(',');
    cardFront = fullCardArr[0];
    cardBack = fullCardArr[1];
    cardType = 'Basic';
    saveFlashCard(cardFront, cardBack, cardType);
} else if (process.argv[2] === 'cloze') {

} else {
    console.log('Please enter a valid flashcard argument');
}



function saveFlashCard(front, back, type) {
    fs.appendFile('../../saved_flashcards.txt', '\n' + 'Type: ' + type + '\n' + 'Front: ' + front + '\n' + 'Back: ' + back + '\n' + '------------------------------------------------------', function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}

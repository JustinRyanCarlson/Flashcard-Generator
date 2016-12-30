var basicExport = require('./basic_flashcard');
var fs = require('fs');
var clozeExport = require('./cloze_flashcard');
var cardType;
var cardFront;
var cardBack;
var fullCardArr;
var cardCloze;
var cardClozeText;







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
console.log('4. The front then back of the basic flashcard with a comma seperating them OR the cloze text with the statement you want to cloze delete inside curly braces ({})');
console.log('');
console.log('Example: node app.js basic Who was the first president of the United States, George Washington');
console.log('');


if (process.argv[2] === 'basic') {
    fullCardArr = process.argv.splice(3).join(' ').split(',');
    cardFront = fullCardArr[0];
    cardBack = fullCardArr[1];
    cardType = 'Basic';
    var basicCard = new basicExport.BasicFlashCard(cardFront, cardBack, cardType);
    basicCard = JSON.stringify(basicCard);
    saveFlashCard(basicCard);
} else if (process.argv[2] === 'cloze') {
    var clozeWord = [];
    fullCardArr = process.argv.splice(3).join(' ').split('');

    for (var i = 0; i < fullCardArr.length; i++) {
        if (fullCardArr[i] === '{') {
            fullCardArr[i] = '_';
            i++;
            for (var j = i; fullCardArr[j] != '}'; j++) {
                clozeWord.push(fullCardArr[j]);
                fullCardArr[j] = '_';
            }
            fullCardArr[j++] = '_';
        }
    }
    cardCloze = clozeWord.join('');
    cardClozeText = fullCardArr.join('');
    console.log(clozeWord, fullCardArr);

    cardType = 'Cloze';
    var clozeCard = new clozeExport.ClozeFlashCard(cardClozeText, cardCloze, cardType);
    clozeCard = JSON.stringify(clozeCard);
    saveFlashCard(clozeCard);
} else {
    console.log('Please enter a valid flashcard argument');
}


function saveFlashCard(cardObject) {
    fs.appendFile('../../saved_flashcards.txt', cardObject + ',', function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}

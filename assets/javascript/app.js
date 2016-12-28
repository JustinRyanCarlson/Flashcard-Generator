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


console.log('Hello! Welcome to my flashcard node.js app.');


// DONT FORGET TO ADD IN THE VARIABLES
fs.writeFile('PICK THE VARIABLES FOR FLASHCARDS YOU WANT TO ADD', '../../saved_flashcards.txt', function(err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

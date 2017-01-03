// CONSTRUCTOR TO CREATE THE BASIC STLYE FLASHCARD
function BasicFlashCard() {
    this.basicCardFront = '';
    this.basicCardBack = '';
    this.basicCardType = '';
    this.createBasicCard = function(rawCard) {
        // Splices off all words after the 3rd argument as an array then joins them back together
        // as a string then splits the string at the comma into an array
        var fullCardArr = rawCard.splice(3).join(' ').split(',');
        this.basicCardFront = fullCardArr[0];
        this.basicCardBack = fullCardArr[1];
        this.basicCardType = 'Basic';
    };
}

// USED TO HAND THE DATA BACK FROM THE MODULE
exports.BasicFlashCard = BasicFlashCard;

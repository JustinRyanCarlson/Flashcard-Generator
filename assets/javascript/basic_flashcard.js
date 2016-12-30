// CONSTRUCTOR TO CREATE THE BASIC STLYE FLASHCARD
function BasicFlashCard(front, back, type) {
    this.basicCardFront = front;
    this.basicCardBack = back;
    this.basicCardType = type;
}

// USED TO HAND THE DATA BACK FROM THE MODULE
exports.BasicFlashCard = BasicFlashCard;

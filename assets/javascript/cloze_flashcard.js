// CONSTRUCTOR TO CREATE THE CLOZE STLYE FLASHCARD
function ClozeFlashCard(text, cloze, type) {
    this.clozeCardText = text;
    this.clozeCardCloze = cloze;
    this.clozeCardType = type;
    this.clozeReturnCloze = function() {
        return this.clozeCardCloze;
    };
    this.clozeReturnText = function() {
        return this.clozeCardText;
    };
}

// USED TO HAND THE DATA BACK FROM THE MODULE
exports.ClozeFlashCard = ClozeFlashCard;

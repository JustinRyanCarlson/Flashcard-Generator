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

exports.ClozeFlashCard = ClozeFlashCard;

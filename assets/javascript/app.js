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

// CONSTRUCTOR TO CREATE THE CLOZE STLYE FLASHCARD
function ClozeFlashCard() {
    this.clozeCardText = '';
    this.clozeCardCloze = '';
    this.clozeCardType = '';
    this.createClozeCard = function(rawCard) {
        var clozeWord = [];
        // Splices off all words after the 3rd argument as an array then joins them back together
        // as a string then splits the string at each character into an array
        var fullCardArr = rawCard.splice(3).join(' ').split('');

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
        this.clozeCardCloze = clozeWord.join('');
        // Joins the fullCardArr array as a string (this is the cloze text with underscores
        // where the cloze word was before)
        this.clozeCardText = fullCardArr.join('');
        this.clozeCardType = 'Cloze';
    };
    this.clozeReturnCloze = function() {
        return this.clozeCardCloze;
    };
    this.clozeReturnText = function() {
        return this.clozeCardText;
    };
}

// USED TO HAND THE DATA BACK FROM THE MODULE
exports.ClozeFlashCard = ClozeFlashCard;

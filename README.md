#  Node Flashcard Generator

To use this application use the arguments:

1. node
2. Path to app.js file
3. Which type of flashcard you would like to create (basic or cloze)
4. The front then back of the basic flashcard with a comma seperating them OR the cloze text with the statement you want to cloze delete inside curly braces ({})

Example basic: node app.js basic Who was the first president of the United States, George Washington - creates a basic flashcard with "Who was the first president of the United States" as the front of the card and "George Washington" as the back.

Example cloze: node app.js cloze {George Washington} was the first president of the United States - creates a cloze flashcard with "George Washington" as the cloze of the card and "___________________ was the first president of the United States" as the text.

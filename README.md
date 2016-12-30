#  Node Flashcard-Generator

// 5: Constructor and prototype used to hold methods for basic flash cards
// 5: Constructor and prototype used to hold basic methods for cloze-deleted flash cards
// 5: Properly fill out readme with examples of each constructor and the methods (use request's npm page as an example of the depth we're looking for)
// 5: 2 modules used to hold each constructor, and a 3rd file used as a single entry point which exports both.
// 5: ClozeCard has property or method that returns only the cloze-deleted portion of the text
// 5: ClozeCard has property or method that returns only the partial text
// 5: ClozeCard throws error if it is not able to figure out where the cloze-deletion should go.

To use this application use the arguments:
1. node
2. Path to app.js file
3. Which type of flashcard you would like to create (basic or cloze)
4. The front then back of the basic flashcard with a comma seperating them OR the cloze text with the statement you want to cloze delete inside curly braces ({})

Example: node app.js basic Who was the first president of the United States, George Washington

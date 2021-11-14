# Word-Analyzer n

### What is Word Analyzer?
A Word Analyzer analyzes any word and determine number of consonants and vowels.

In this repository, you may refer to the App.js file to check out the coding
for this application. 


**Step 1**

Initialize constant list of Consonents and Vowels including,
- 'g' (find all matches, not just the first) 
- 'i' (case insensitive)

**Step 2**

Initialize all related variables for the application:- 
- word: " "
- consonent: 0
- vowels: 0
- char: 0

**Step 3**

Create a view of what the system will display to the user and that includes *prompting a text input by the user*,
*create a button to analyze* and *the results appear* after clicking the button.

**Step 4**

The button function 'onPress={this.analyzeWord}' will then be defined in the analyzeWord function.
As refer to the function,
1. Initialize all the variables to zero (except word)
2. Variable 'word' will be prompt by the user so we initialize  it as 'this.state.word'
3. Get the length of the word using '.length'
4. Use '.split' to convert the word into array of characters
5. Make a 'for' loop to get all the characters from beginning till end
6. Use 'if else' to differentiate consonents and vowels
7. Use another 'if' condition to find out the number of characters excluded the spaces.
8. Then, use this.state for every variable to get the updated value for each variable. 
9. Finally, insert the 'this.state...' into every respective text in render view.

**Step 5 (Final)**

Create a reference stylesheet based on your own design preference


*Example:-*

![alt text](https://github.com/farahatqah/Word-Analyzer/blob/master/images/Screenshot.PNG)

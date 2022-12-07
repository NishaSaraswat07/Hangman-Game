let words = ["arrays", "java", "kotlin", "dart", "python", "ruby"];
//Regex for validating user input
let inputPatern = /^[aA-zZ]*$/;
//message to user
let notify = " ";
let lives = 6;
//generating random words
let randomWord = words[Math.floor(Math.random() * words.length)];
let remainingLetters = randomWord.length;
let hiddenWord = [];
for (i = 0; i < randomWord.length; i++) {
    hiddenWord[i] = "_";
    console.log(hiddenWord[i]);
}
// check user input with the random word
const isLetterInWord = (letter, word) => {
    return word.includes(letter)
}

const replaceHidenWord = (userInput, randomWord, hiddenWord) => {
    if (hiddenWord.includes(userInput)) {
        notify = "You have already gussed the word!";
        userInput++;
    } else {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userInput) {
                hiddenWord[i] = userInput;
                remainingLetters--;
            }
        }
    }
    return hiddenWord;
}

const startGame = () => {
    while (remainingLetters > 0) {
        let userInput = prompt("Guess a letter to compleate the word!\n" +
            "  Or" + "\nCancel to quit \n\n" + notify + "  Lives: " + lives + "\n" + hiddenWord.join(" "));

        if (userInput === null) {
            alert("Come back again to paly!");
            break;
        }
        userInput = userInput.toLowerCase();

        if (userInput.length != 1 || !inputPatern.test(userInput)) {
            notify = "please enter a vallid single alphabet!";
        }
        else if (isLetterInWord(userInput, randomWord)) {
            notify = "Yae! Letter found in the word.";
            replaceHidenWord(userInput, randomWord, hiddenWord);
        } else {
            notify = "Nope! Letter not found in the word.";
            lives--;
            if (lives === 1) {
                notify = "Only one llife left!";
            } else if (lives === 0) {
                alert("Game Over!");
                break;
            }
        }
        if (remainingLetters === 0) {
            alert("Congratulations! YOU WON!\n" + "Right word: " + randomWord);
            break;
        }
    }
}

startGame()
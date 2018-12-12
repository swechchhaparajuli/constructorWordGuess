
var clc = require("cli-color");
var Word = require("./Word");
var inquirer = require("inquirer");
var arrayOfStrings = ["Lord of the Rings", "Lion King", "Little Mermaid"];
var arrayOfWords = [];

var count = 0;
addsWord();

 function addsWord(){
    for(var i = 0; i < arrayOfStrings.length; i++){
        arrayOfWords.push(new Word(arrayOfStrings[i]));
       // console.log(arrayOfWords[i]);
    }
  // console.log(arrayOfWords[0].wordConcat());
}

var printedWord = "";
var chosenWord = new Word("null");
var i = 0;


function startGame(){
    inquirer.prompt([
        {
        name: "choice",
        message: "Do you want to start a new game?"
        },
    ]).then(function(answers) {
        if (answers.choice == "y"){
            //var temp = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
            chosenWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
            printedWord = chosenWord.wordConcat();
            console.log(printedWord);
            i = 0;
            playingGame();
        }else{
            console.log(clc.blue("Come back when you want to play!"));
        }
    });
}

playingGame = function(){
    //console.log(chosenWord.word.length);
    if (i< chosenWord.word.length + 4){
        inquirer.prompt([
            {
            name: "letter",
            message: "Guess a Letter!"
            },
        ]).then(function(answers) {
            console.log(((chosenWord.word.length+3) - i) + " guesses remaining!");
            console.log(" ");
            chosenWord.letterGuess(answers.letter);
           // printedWord = "";
            if(chosenWord.bool){
                console.log(clc.green("CORRECT!!!")); 
            }else{
                console.log(clc.red("INCORRECT"));
            }

            printedWord = chosenWord.wordConcat();

            console.log(printedWord);
            console.log(chosenWord.spaceCount)
            if ((chosenWord.count + chosenWord.spaceCount) == chosenWord.word.length){
                console.log("You got that right!! Next Word!");
                i = chosenWord.word.length+4;
                startGame();
            }
            i++;
            playingGame();
        });
    }
}

startGame();


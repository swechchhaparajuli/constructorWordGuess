var Letter = require("./Letter");

var Word = function(word){

    this.word = word;
    this.count = 0;
    this.bool = false;
    var letterArray = [];

    for (var i = 0; i < word.length; i++){
        var temp = new Letter(this.word[i]);
        letterArray.push(temp);
    }

    //console.log(letterArray);
    this.wordConcat = function(){
        var temp = "";
        this.count = 0;
        for (var i = 0; i < word.length; i++){
            temp = temp + letterArray[i].ifGuessed()+ " ";

        }

        return temp;
    }

    this.letterGuess = function(guess){
        for (var i = 0; i < word.length; i++){
            letterArray[i].checkGuess(guess);
        }
       
    }
}

module.exports = Word;
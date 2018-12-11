
var Letter = require("./Letter");

var Word = function(word){

    this.word = word;
    this.count = 0;
    this.spaceCount = 0;
    var letterArray = [];
    this.bool = false;
    for (var i = 0; i < word.length; i++){
        var temp = new Letter(this.word[i]);
        letterArray.push(temp);
    }

    //console.log(letterArray);
    this.wordConcat = function(){
        var temp = "";
        this.count = 0;
        this.bool = false;
        this.spaceCount = 0;
        for (var i = 0; i < word.length; i++){
           if (letterArray[i] != " "){
                temp = temp + letterArray[i].ifGuessed()+ " ";
                this.spaceCount = letterArray[i].spaceCount + this.spaceCount;
            }
            if(letterArray[i].guessed){
                this.count++;
            }
        }
        return temp;
    }

    this.letterGuess = function(guess){
       this.bool = false;
        for (var i = 0; i < word.length; i++){
            letterArray[i].checkGuess(guess);
        }

    }
}

module.exports = Word;
var clc = require("cli-color");
 var Letter = function(char){
    this.char = char;
    this.guessed = false;
    this.spaceCount = 0;

    this.ifGuessed = function(){
        if (this.guessed){
            return this.char;
        }else if (this.char == " "){
            this.spaceCount = 1;
            return " ";
        }else{
            return "_";
        }
    }

    this.checkGuess = function(gChar){
        //console.log(gChar);
        //console.log(this.char)
        this.temp = false;
        if (gChar == this.char.toLowerCase()){
            this.guessed = true;  
        }
    }
    
}

module.exports = Letter;
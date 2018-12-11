
 var Letter = function(char){
    this.char = char;
    this.guessed = false;

    this.ifGuessed = function(){
        if (this.guessed){
            return this.char;
        }else{
            return "_";
        } 
    }

    this.checkGuess = function(gChar){
        //console.log(gChar);
        //console.log(this.char);
        if (gChar == this.char.toLowerCase()){
            this.guessed = true;
            console.log("CORRECT!!!");
        }
            
        
    }
    
}

module.exports = Letter;
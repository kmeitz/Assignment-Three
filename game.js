console.log("Beginning game.js code");
var y = Math.floor(Math.random() * 10) + 1;
let guess = 0;
const spinner = $("#spinner");
const score = $("#score");
const button = $("#button");
const guessT = $("#guess");
const correct = $("#correct");
const restart = $("#restart");
let number = guessT.val();
spinner.hide();


function correctNum() {
    guess++
            correct.html( "Congratulations! It took you " + guess + " attempts to guess the number correctly.");
            score.html(guess);
            restart.show();
            guessT.hide();
            guess = 0;
            newGame();
            button.show(); 
}

function numTooBig() {
    guess++;
            correct.html("Incorrect, the correct number is smaller than " + number);
            score.html(guess);
            button.show(); 
}
 
function numTooSmall() {
            guess++;
            correct.html("Incorrect, the correct number is bigger than " + number);
            score.html(guess);
            button.show(); 
}

button.click(function game() {

    number =     guessT.val();
    spinner.show();
    button.hide();
    setTimeout(() => {
        spinner.hide();
        
        3



        

        if (number == y) {
            correctNum();
           
        } else if (number > y) {
            numTooBig();
            
        } else {
            numTooSmall();
          

        }

    }, 3000)

  
});

restart.click(function restart() {
   button.show();
    guessT.show();


    score.html("0");
    correct.html("");
    y = Math.floor(Math.random() * 10 + 1);
    guess = 0;
    game();
    });
var y = Math.floor(Math.random() * 10 + 1);
console.log("Finished game.js code");
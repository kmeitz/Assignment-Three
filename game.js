console.log("Beginning game.js code");
var y = Math.floor(Math.random() * 10) + 1;
var guess = 0;
$("#spinner").hide();





function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    numberOfGuesses = 0;
    $("#score").innerHTML = ""


}


$("#button").click(function game() {


    $("#spinner").show();
    setTimeout(() => {
        $("#spinner").hide();

        3



        var number = $("#guess").val();

        if (number == y) {

            guess++
            $("#correct").html( "Congratulations! It took you " + guess + " attempts to guess the number correctly.");
            $("#score").html(guess);
            $("#restart").show();

            $("#button").hide() 
            $("#guess").hide();
            guess = 0;
            newGame();





        } else if (number > y) {
            guess++;
            $("#correct").html("Incorrect, the correct number is smaller than " + number);
            $("#score").html(guess);
        } else {
            guess++;
            $("#correct").html("Incorrect, the correct number is bigger than " + number);
            $("#score").html(guess);

        }

    }, 3000)


});







$("#restart").click(function restart() {
    $("#button").show();
    $("#guess").show();


    $("#score").html("0");
    $("#correct").html("");
    y = Math.floor(Math.random() * 10 + 1);
    guess = 0;
    game();
    });
var y = Math.floor(Math.random() * 10 + 1);
console.log("Finished game.js code");
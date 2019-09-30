console.log("Starting game.js code")
document.getElementById("restart").style.visibility = "hidden";
document.getElementById("spinner").style.visibility = "hidden";
let y = Math.floor(Math.random() * 100 + 1);
console.log(`Anwser is ${y}`);
let guess = 0;

///
function hide() {
    let x = document.getElementById("guess");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var w = document.getElementById("button");
    if (w.style.display === "none") {
        w.style.display = "block";
    } else {
        w.style.display = "none";
    }
}

spinner = getElementById("spinner");


function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    numberOfGuesses = 0;
    document.getElementById("score").innerHTML = ""


}




document.getElementById("button").onclick = function game() {
    console.log("Button clicked")


    document.getElementById("restart").style.visibility = "hidden";

    let number = document.getElementById("guess").value;

    if (number == y) {

        guess++
        document.getElementById("correct").innerHTML = "Congratulations! It took you " + guess + " attempts to guess the number correctly.";
        document.getElementById("score").innerHTML = guess;
        document.getElementById("restart").style.visibility = "visible";
        newGame();
        document.getElementById("button").style.visibility = "hidden";
        document.getElementById("guess").style.visibility = "guess";
        guess = 0;





    } else if (number > y) {
        guess++;
        document.getElementById("correct").innerHTML = "Incorrect, the correct number is smaller than " + number;
        document.getElementById("score").innerHTML = guess;
    } else {
        guess++;
        document.getElementById("correct").innerHTML = "Incorrect, the correct number is bigger than " + number;
        document.getElementById("score").innerHTML = guess;

    }


    setTimeout(() => {
        spinner.style.display = "inline";
    }, 3000)
}



document.getElementById("restart").onclick = function restart() {
    document.getElementById("button").style.visibility = "visible";
    document.getElementById("guess").style.visibility = "visible";
    document.getElementById("restart").style.visibility = "hidden"

    document.getElementById("score").innerHTML = "0";
    document.getElementById("correct").innerHTML = "";
    let y = Math.floor(Math.random() * 100 + 1);
    let guess = 0;
    game();
}
let y = Math.floor(Math.random() * 100 + 1);
console.log("End of game.js code");
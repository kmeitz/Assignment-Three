var y = Math.floor(Math.random() * 100 + 1); 
var guess = 0; 


function hide() {
    var x = document.getElementById("guess");
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

function newGame() {
	secretNumber = Math.floor(Math.random() * 100) + 1;
    numberOfGuesses = 0;
    document.getElementById("score").innerHTML = ""
}
	
    


   document.getElementById("button").onclick = function game(){
    
    var x = document.getElementById("restart");
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

    var number = document.getElementById("guess").value;

   if(number == y) 
   {     
    setTimeout("Hello",3000);
    guess++
    document.getElementById("correct").innerHTML = "Congratulations! It took you " + guess + " attempts to guess the number correctly.";
    document.getElementById("score").innerHTML = guess;
    hide();
    newGame();
    

   } 
   else if(number > y) 
   {   setTimeout("Hello",3000);
       guess++; 
       document.getElementById("correct").innerHTML = "Incorrect, the correct number is smaller than " + number ;
       document.getElementById("score").innerHTML = guess;
   } 
   else
   {    setTimeout("Hello",3000);
       guess++; 
       document.getElementById("correct").innerHTML = "Incorrect, the correct number is bigger than " + number ;
       document.getElementById("score").innerHTML = guess;

   } 
} 
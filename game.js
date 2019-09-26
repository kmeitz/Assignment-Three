var y = Math.floor(Math.random() * 100 + 1); 
      
   
    var guess = 1; 
    
      
       
   document.getElementById("button").onclick = function (){
       
    var number = document.getElementById("guess").value;
  
   if(number == y) 
   {     
    alert("correct")

        
   } 
   else if(number > y) 
   {     
       guess++; 
       alert("Wrong, the number is smaller.") ;
   } 
   else
   { 
       guess++; 
       alert("Wrong, the number is bigger")
       
   } 
}
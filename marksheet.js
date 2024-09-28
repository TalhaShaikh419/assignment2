let userInput =prompt("enter a marks")
 if(userInput >= 80 && userInput <101)
 {
    document.write("<h1>"+"Grade"+"</h1>"+"A 1")
 }
 else if(userInput > 100)
 {
    document.write("incorrect marks")
 }
 else if(userInput >= 70 && userInput <81)
 {
    document.write("<h1>"+"Grade"+"</h1>"+"A")
 }
 else if(userInput >= 60 && userInput <71)
 {
     document.write("<h1>"+"Grade"+"</h1>"+"B")
 }
 else if(userInput >= 50 && userInput <61)
 {
     document.write("<h1>"+"Grade"+"</h1>"+"C")
 }
 else if(userInput >= 40 && userInput <51)
 {
     document.write("<h1>"+"Grade"+"</h1>"+"D")
 }
 else 
 {
     document.write("<h1>"+"Grade"+"</h1>"+"Fail")
 }
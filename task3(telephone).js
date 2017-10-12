r=/[\+| |\(]?375[ |\-|\)]?(33|44|25|29)[ |\-]?[1-9][0-9]{2}[ |\-]?[0-9]{2}[ |\-]?[0-9]{2}/;
var tel=prompt("Enter the telephone:");
   if (r.test(tel)){
   	 console.log("It is telephone number.");}
   
   else{
   	console.log("It isn't telephone number.");}
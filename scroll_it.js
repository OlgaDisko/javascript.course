/*function func(){
window.scrollBy(0,5);
}
setInterval(func,40);*/
var id=setInterval(function() { 
window.scrollBy(0,50); 
},50); 

var x=window.innerHeight; 
var a=10000-x; 

setTimeout(function() { 
clearInterval(id); 
}, a);

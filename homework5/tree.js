var noftag = document.getElementsByTagName("*").length; 
var nofcomment = 0;
var noftext = 0; 
var childNodes = document.childNodes; 
var rec = function(obj){ 
if (obj === undefined) return false; 
for (var i = 0; i < obj.length; i++){ 
rec(obj[i].childNodes); 
if (obj[i].nodeType == 3) numberoftext++; 
if (obj[i].nodeType == 8) numberofcomment++; 
} 
} 
rec(childNodes); 
alert("Number of tag: "+numberoftag); 
alert("Number of text: "+numberoftext); 
alert("Number of comment: "+numberofcomment);
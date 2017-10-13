var coef=prompt("Enter coeffients of your polinom and x:\n");
var array=coef.split(",");
function ValueOfX(arr){
var poli=0;
var x=arr.pop();
for(var i=0;i<arr.length;i++){
   poli+=arr[i]* Math.pow (x,i);
}
return poli;
}
alert("Value of x equal:\n"+ValueOfX(array));

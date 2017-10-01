var x=Number(prompt());
var n=Number(prompt());
var sum;
for(var i = 0; i <= n; i++){
		sum += (factorial(2*i) / (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2*i+1))) * Math.pow(x, 2*i+1);
	}
function factorial(a){
	if (a==0 || a==1) {
		return 1;
	} 
	else {
		return a*factorial(a-1);
	} 
}

alert("Arcsin equal:"+sum);

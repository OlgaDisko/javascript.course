var x=Number(prompt());
var n=Number(prompt());
var sum;
function factorial(a) {
  if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
var number = document.getElementById('factInput').value;
document.getElementById('factResult').value = factorial(number);
sum=factorial(2*i)*Math.pow(x,2*i+1)/(Math.pow(4,i)*Math.pow(factorial(i),2)*(2*i+1));
for(var i=0;i<=n; i++){
		sum +=sum;
	}

alert("Arcsin equal:"+sum);
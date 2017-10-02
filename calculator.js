var n1=Number(prompt("Enter number one"));
var op=prompt("Enter operator");
var n2=Number(prompt("Enter numer two"));
var res,i;
if (isFinite(n1)==true && isFinite(n2)==true){
switch (op){
	case "+":
	res=n1+n2;
	break;
	case "-":
	res=n1-n2;
	break;
	case"%":
	res=n1%n2;
	break;
	case "*":
	res=n1*n2;
	break;
	case "/":
	res=n1/n2;
	break;
	default:
	alert("Error");
alert(res);
}}
else{
	alert("Error")
}

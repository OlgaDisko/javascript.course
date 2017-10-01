var n1=Number(prompt("Enter number one"));
var op=prompt("Enter operator");
var n2=Number(prompt("Enter numer two"));
var res,i;
if (isFinite(n1)==true && isFinite(n2)==true){
switch (op){
	case "+":
	alertalert("Your result equal:\n"+n1+"+"+n2+"="+(n1+n2));
	break;
	case "-":
	alert("Your result equal:\n"+n1+"-"+n2+"="+(n1-n2));
	break;
	case"%":
	alert("Your result equal:\n"+n1+"%"+n2+"="+(n1%n2));
	break;
	case "*":
	alert("Your result equal:\n"+n1+"*"+n2+"="+(n1*n2));
	break;
	case "/":
	alert("Your result equal:\n"+n1+"/"+n2+"="+(n1/n2));
	break;
	default:
	alert("Error");
}}
else{
	alert("Error")
}

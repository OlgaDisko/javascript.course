/*var n1=Number(prompt("Enter number one"));
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
	case "^":
	res=n1*n1
	default:
	alert("Error");
alert(res);
}}
else{
	alert("Error")
}*/
var a=new Date("1986-09-13 10:00:00");
var p=new Date("2033-08-13 14:00:00");
var s;
var c=a.getTime();
var d=p.getTime();
s=(d-c)/3600000;
alert(s);

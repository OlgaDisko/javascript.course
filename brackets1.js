var a=prompt();
var n=0,i;
var b="(";
var c=")";
for(i=0;i<=a.length;i++){
	if(a.charAt(i)==b){
		n+=1;
	}else if(a.charAt(i)==c){
		n-=1;
	}
}
if (n==0){
	alert("The order is correct.");
}
else{
	alert("The order is incorrect");
}
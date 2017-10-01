var a=prompt();
var n=0,i;
for(i=0;i<=a.length;i++){
	if(a.charAt(i)=="("){
		n+=1;
	}else if(a.charAt(i)==")"){
		n-=1;
	if(n==-1){
		alert("The order is incorrect.");
	}
	}
}
if (n==0){
	alert("The order is correct.");
}
else{
	alert("The order is incorrect.");
}

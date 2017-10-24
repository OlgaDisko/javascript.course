var but1=document.getElementById('but1');
var but2=document.getElementById('but2');


but1.addEventListener("click", function() {
	var str=document.getElementById('inp1').value;
	l=str.length;
	if(l%2==0){
	for(var i=0;i<l-1;i++){
    if (i%2!=0){
    	str[i]=str[i-1];
    }
    else{
    	str[i]=str[i+1];
    	}
    }
    else if{
    for(var i=0;i<l;i++){
    if (i%2!=0){
    	str[i]=str[i-1];
    }
    else{
    	str[i]=str[i+1];
    }
    
		
	str=str.join('');
	document.getElementById('inp2').value=str;
	document.getElementById('inp1').value=null;
    }
});


but2.addEventListener("click", function() {

	var inp=document.getElementById('inp2').value;
	var str=[];
	var str=document.getElementById('inp1').value;
	l=str.length;
	if(l%2==0){
	for(var i=0;i<l-1;i++){
    if (i%2!=0){
    	str[i]=str[i-1];
    }
    else{
    	str[i]=str[i+1];
    	}
    }
    else if{
    for(var i=0;i<l;i++){
    if (i%2!=0){
    	str[i]=str[i-1];
    }
    else{
    	str[i]=str[i+1];
    }
    
		
	str=str.join('');
	document.getElementById('inp2').value=str;
	document.getElementById('inp1').value=null;
    }
	str=str.join('');
	document.getElementById('inp1').value=str;
	document.getElementById('inp2').value=null;
});
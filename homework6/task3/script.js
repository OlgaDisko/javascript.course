var addbut=document.getElementById('add');
var delbut=document.getElementById('del');
var equalbut=document.getElementById('ent');
var p=document.getElementById('p');
var pol=0;

addbut.addEventListener("click", function() {
	p.innerHTML+="<input type='text'>";
});

delbut.addEventListener("click", function() {
	this.nextSibling.nextSibling.childNodes[0].remove();
});

equalbut.addEventListener("click", function() {
	var coef=document.getElementsByTagName('input');
	var x=document.getElementById('X').value;
	x=Number(x);
	var n=coef.length-1;
	var a=[];
	for(var i=0;i<n;i++)
	{
		a[i]=Number(p.childNodes[i].value);
	}
	for(var i=0;i<a.length;i++) 
	{
		pol+=a[i]*Math.pow(x,i);
	}
	alert("The value of the polynomial is: "+pol);
});
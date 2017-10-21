/*var w1=document.getElementById("window");
var i1=document.getElementById("inner");
var but=document.getElementById("button");
but.addEventListener('click',function(){
	 w1.setAttribute('class','opened');}
)
w1.addEventListener('click',function(){
	w1.setAttribute('class','');
})
i1.addEventListener('click',function(e){
	e.stopPropagation();})*/

var w1=document.getElementById("window");
var i1=document.getElementById("inner");
var but=document.getElementById("button");
but.addEventListener('click',function(){
	 w1.setAttribute('class','opened');}
	 )
w1.addEventListener('click',function(e){
	if(e.target==this){
		w1.removeAttribute('class')
	}
})

/*b="ihl;.nj";
var p=document.createElement("p");div.appendChild(p);
var hr=document.createElement("hr");
div.insertBefore(hr,p)
​
div.appendChild(hr);
​

div.insertBefore(hr,p)

p.innerText=123

div.appendChild(hr);
​
var hrClone=hr.cloneNode();
div.appendChild(hrClone);
*/


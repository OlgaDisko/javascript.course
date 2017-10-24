var n=Number(prompt());
var ul=document.getElementsByTagName('ul')[0];
for (i=0;i<=n;i++){

	var li=document.createElement('li');
	ul.appendChild(li);
}
ul.addEventListener('click',function(e){
	if(e.target.parentNode==this){
		e.target.classList.toggle('colored')
	}
})

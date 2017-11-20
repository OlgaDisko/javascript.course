var div=document.getElementsByTagName('div')[0];
div.contentEditable=true;
div.addEventListener('copy',function(e){
	var s=e.clipboardData.setData("text","gifi");
	console.log(s);
})
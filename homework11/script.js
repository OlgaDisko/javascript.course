var a=document.getElementById("la");
var settings={
	"#music":{
		path:"1.html",
		handler:function(){}
	},

	"#text":{
		path:"2.html",
		handler:function(){}
	},
	"#image":{
		path:"3.html",
		handler:function(){}
	},
	"#video":{
		path:"4.html",
		handler:function(){}
	},
	"#input":{
		path:"5.html",
		handler:function(){
			var but = document.getElementsByTagName("button")[0];
			but.addEventListener("click", function(){
				var inp = document.getElementsByTagName("input")[0];
				alert(inp.value);
			})
		}
	}
}
var change=function(){
	var path=settings[location.hash].path;
	var xhr=new XMLHttpRequest;
	xhr.open("GET",path,true);
	xhr.onload=function(){
		a.innerHTML=this.responseText;
		settings[location.hash].handler();
	}
	xhr.send(null);

}
window.onhashchange=function(){
	change();
}
if (location.hash in settings){
	change();
}
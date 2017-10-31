var inp=document.getElementById('bt');
var ul=document.getElementsByTagName('ul')[0];
inp.addEventListener('click', function(){
    
    var li=document.createElement('li');
    var str=document.getElementById('com').value;
    str=str.replace(/</g,'&lt');
    str=str.replace(/>/g,'&gt');
	r=/^((ftp|http|https)?(:\/{2}))?([\w\_\.-]+)\.([a-z]{2,6}\.?)([\/\w\.\&\#\%\_\?\=-]*)*\/?$/gm;
	str=str.replace(r,"<a href='$&'>$&</a>");
	r1=/^([\:\;т\<\>\o\3\-])([\)\(\_\: p D 3\*])([\(\) т-]?)$/gm;
	var smiles={};
	 array=[
	{name:":)",image:'<image src:"smiles/1.png" width="10" height="10">'},
	{name:":(",image:'<image src:"smiles/2.png" width="10" height="10">'},
	{name:":o",image:'<image src:"smiles/3.png" width="10" height="10">'},
	{name:";)",image:'<image src:"smiles/4.png" width="10" height="10">'},
	{name:"т_т",image:'<image src:"smiles/5.png" width="10" height="10">'},
	{name:"-_-",image:'<image src:"smiles/6.png" width="10" height="10">'},
	{name:"O:)",image:'<image src:"smiles/7.png" width="10" height="10">'},
	{name:"3:)",image:'<image src:"smiles/8.png" width="10" height="10">'},
	{name:":p",image:'<image src:"smiles/9.png" width="10" height="10">'},
	{name:":D",image:'<image src:"smiles/10.png" width="10" height="10">'},
	{name:"<3",image:'<image src:"smiles/11.png" width="10" height="10">'},
	{name:":*",image:'<image src:"smiles/12.png" width="10" height="10">'},
	{name:">:(",image:'<image src:"smiles/13.png" width="10" height="10">'},

	]
	for(var i=0;i<array.length;i++){
    	if(array[i].name==str.match(r1)){
    		str=str.replace(array[i].name,array[i].image);
    	}
	}
	r2=/^\*([a-z 0-9\&\?\:\-\.\!]+)\*$/gm;
	str=str.replace(r2,'<b>$1</b>');
	r3=/^\_([a-z 0-9\&\?\:\-\.\!]+)\_$/gm;
	str=str.replace(r3,'<u>$1</u>');
	r4=/^\~([a-z 0-9\&\?\:\-\.\!]+)\~$/gm;
	str=str.replace(r4,'<i>$1</i>');
    li.innerHTML=str+"<button>+</button><span id='pr'></span><button>-</button>";
    li.children[0].addEventListener('click',function(){
    	var span=this.parentNode.children[1];
    	span.innerHTML=span.innerHTML*1+1;
    })
    li.children[2].addEventListener('click',function(){
    	var span=this.parentNode.children[1];	
    	span.innerHTML=span.innerHTML*1-1;
    })
	ul.appendChild(li);
})

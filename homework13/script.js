var div=document.getElementsByTagName('div')[0];
div.contentEditable=true;
var bold=document.getElementById('b0');
var it=document.getElementById('b1');
var und=document.getElementById('b2');
var fn=document.getElementById('b3');
var fns=document.getElementById('b4');
var orl=document.getElementById('b5');
var unorl=document.getElementById('b6');

bold.addEventListener('click',function(){
	var str=document.getSelection().toString();
	var s=document.execCommand('bold',false,str);
})
it.addEventListener('click',function(){
	var str=document.getSelection().toString();
	var s=document.execCommand('italic',false,str);
})
und.addEventListener('click',function(){
	var str=document.getSelection().toString();
	var s=document.execCommand('underline',false,str);
})
fn.addEventListener('change',function(){
	var s=document.execCommand('fontname',false,fn.value);
})
fns.addEventListener('change',function(){
	var s=document.execCommand('fontsize',false,fns.value);
})
orl.addEventListener('click',function(){
	var str=document.getSelection().toString();
	var s=document.execCommand('insertorderedlist',false,str);
})
unorl.addEventListener('click',function(){
	var str=document.getSelection().toString();
	var s=document.execCommand('insertunorderedlist',false,str);
})


/*var N=Number(prompt("Enter the number of elements in the array:"));
var s=Number(prompt("Enter the mean value in:"));
var p=Number(prompt("Enter the departure from mean value in %:"));
var arr=[];
var sum=0;
function NewArray(num,value,dep){
var max=value+value*dep/100;
var min=value-value*dep/100;
  for(var i=0;i<N;i++){
        arr[i]=Math.floor(min-Math.random()*(max+1-min));
	}
   return arr;
}
function Compare(a, b){
  if (a > b){ 
    return 1;}
  if (a < b){
    return -1;
  }
}
for(var i=0;i<N;i++){
	sum+=Number(sortarr[i]);
}
var average=(sum/N).toFixed(2);

var myarr=NewArray(N,s,p);
var sortarr=myarr.sort(Compare);
alert("Generated array:\n"+myarr);
alert("Sorted array:\n"+sortarr);
alert("Average of array:\n"+average);*/
/*var coef=Number(prompt("Enter coeffients of your polinom and x:"))
var array=coef.split(',');
var N=array.length -1;
for(var i=0;i<N;i++){
	var x=array.pop();
	var polinom+=array[i]*Math.pow(var x,N);
}
alert("Value of x equal:\n"+x);*/
/*function Endofday(){
	var date=new Date();
	var now=date.getHours()*60+date.getMinutes();
	var minnow=24*60-now;
	return minnow;
}
var endofday=Endofday();
alert("Until end of day left "+endofday+" minutes.");*/
//work//
var arr=[];
for(i=0;i<=10;i++){
	(function(z){
	arr[i]=function(){
		console.log(z);
	}
})(i);
}
arr[7]();
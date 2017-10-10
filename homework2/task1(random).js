var N=Number(prompt("Enter the number of elements in the array:"));
var s=Number(prompt("Enter the mean value in:"));
var p=Number(prompt("Enter the departure from mean value in %:"));
var arr=[];
var sum=0;
function NewArray(num,value,dep){
var max=value+value*dep/100;
var min=value-value*dep/100;
  for(var i=0;i<N;i++){
        arr[i]=(min-Math.random()*(max-min)).toFixed(2);
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
var myarr=NewArray(N,s,p);
var sortarr=myarr.sort(Compare);
for(var i=0;i<N;i++){
	sum+=Number(sortarr[i]);
}
var average=(sum/N).toFixed(2);

var myarr=NewArray(N,s,p);
var sortarr=myarr.sort(Compare);
alert("Generated array:\n"+myarr);
alert("Sorted array:\n"+sortarr);
alert("Average of array:\n"+average);
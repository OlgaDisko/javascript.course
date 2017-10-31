var N=Number(prompt("Enter the quality of cities:"));
var M=Number(prompt("Enter the quality of names:"));
var city1=[];
for(var i=0;i<N;i++){
		city1[i]=prompt("Enter the city:");
        }
var name1=[];
for(var i=0;i<M;i++){
	name1[i]=prompt("Enter the name:");
}
var rhuman=[];
for (var i=0;i<name1.length;i++){
var human={};
rhuman[i]=human;
human.city=city1[Math.floor(Math.random()*(city1.length))];
human.name=name1[Math.floor(Math.random()*(name1.length))];
human.age=Math.floor(Math.random()*100);
human.print=function(){
	console.log("name:"+this.name+"city:"+this.city+"age:"+this.age);
	}
}
console.log(rhuman);
function compareNumeric(a, b){
    return a.age - b.age;
  }

var sort=rhuman.sort(compareNumeric);
console.log(sort);


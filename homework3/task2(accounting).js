var account={

worker:[
    {name:"A.S.Larin",
	 age:29,
	 timerec:60,
	 salary:1000,
	 depname:"marketing", 
	 print:function(){
	 	console.log("name:"+this.name+"age:"+this.age+"time record:"+this.timerec+"salary:"+this.salary+"department name:"+this.depname)
	 }
	},
    {name:"O.D.Rasputin",
     age:35,
	 timerec:120,
     salary:1500,
	 depname:"innovating", 
	 print:function(){
	 	console.log("name:"+this.name+"age:"+this.age+"time record:"+this.timerec+"salary:"+this.salary+"department name:"+this.depname)
	 }
	},
    {name:"L.D.Romanov",
	 age:41,
	 timerec:152,
     salary:2500,
	 depname:"finance", 
	 print:function(){
	 	console.log("name:"+this.name+"age:"+this.age+"time record:"+this.timerec+"salary:"+this.salary+"department name:"+this.depname)
	 }
	},
	{name:"T.L.Chichikov",
	 age:24,
	 timerec:2,
     salary:70,
	 depname:"communications", 
	 print:function(){
	 	console.log("name:"+this.name+"age:"+this.age+"time record:"+this.timerec+"salary:"+this.salary+"department name:"+this.depname)
	 }
	},
	]
}
//A//

account.AddorDell=function(elem){
	if (typeof(elem)=="string"){
		for(var i=0;i<len;i++)
		{
			if(account.worker[i].name == elem)
				account.worker.splice(i,1);

	}
    if (typeof(elem)=="object"){
    	account.worker[account.worker.lenght]=elem;
    }
}
//B//
    account.sortSalary = function(){
	account.worker.sort(function(a,b){
		return a.salary > b.salary? 1: -1;
	});
	account.worker.forEach(function(elem){
		elem.print();
	})
	account.sumSalary=function() {

		var sum=account.worker.reduce(function(prev, curr) {
			return prev+curr.salary;
		},0);
		return sum;
	
}
alert(account.sumSalary());
//C//
account.MaxMinSalary=function() {
	var arr=[];
	buk.worker.forEach(function(elem) {
		arr.push(elem.salary);
	});
	var max = Math.max.apply(null, arr);
	var min = Math.min.apply(null, arr);
	var a=arr.indexOf(max);
	var b=arr.indexOf(min);
	console.log("Worker with max salary: ");
	account.worker[a].print();
	console.log("Worker with min salary: ");
	account.worker[b].print();
	var average=account.sumSalary()/(account.worker.lenght);
	console.log("The average salary is: "+average);
}

alert(account.MaxMinSalary());
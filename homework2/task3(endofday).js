function Endofday(){
	var date=new Date();
	var now=date.getHours()*60+date.getMinutes();
	var minnow=24*60-now;
	return minnow;
}
var endofday=Endofday();
alert("Until end of day left "+endofday+" minutes.");
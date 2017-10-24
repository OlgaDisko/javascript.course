var country={}; 
 array=[
	{name:"China ", flag:'<img src="image/0.jpg" width="120" height="70">', code:"+86", people:"1 387 100 000"},
	{name:"India", flag:'<img src="image/1.jpg" width="120" height="70">', code:"+91", people:"1 322 970 000"},
	{name:"USA", flag:'<img src="image/2.jpg" width="120" height="70">', code:"+1 xxx", people:"325 987 000"},
	{name:"Indonesia", flag:'<img src="image/3.jpg" width="120" height="70">', code:"+380", people:"261 890 900"},
	{name:"Pakistan", flag:'<img src="image/4.jpg" width="120" height="70">', code:"+92", people:"209 343 000"},
	{name:"Brazil", flag:'<img src="image/5.jpg" width="120" height="70">', code:"+55", people:"208 168 000"},
	{name:"Nigeria", flag:'<img src="image/6.jpg" width="120" height="70">', code:"+234", people:"193 500 543"},
	{name:"Bangladesh", flag:'<img src="image/7.jpg" width="120" height="70">', code:"+880", people:"163 359 000"},
	{name:"Russia", flag:'<img src="image/8.jpg" width="120" height="70">', code:"+7 xxx", people:"146 804 000"},
	{name:"Japan", flag:'<img src="image/9.jpg" width="120" height="70">', code:"+81", people:"126 670 000"},
	{name:"Mexico", flag:'<img src="image/10.jpg" width="120" height="70">', code:"+52", people:"123 364 426"},
	{name:"Philippines", flag:'<img src="image/11.jpg" width="120" height="70">', code:"+63", people:"104 783 000"},
	]
document.write("<table border=1 bgcolor=#CFF4F2 width=100% ><tr><td>Name</th><td>Flag</td><td>Code</td><td>People</td></td>"); 
  for(var i = 0; i<array.length; i++){ 
 document.write("<tr><td>" + array[i].name + "</td><td>" + array[i].flag + "</td><td>" + array[i].code + "</td><td>" + array[i].people + "</td></tr>"); 
 
  }
  document.write("</table>");	

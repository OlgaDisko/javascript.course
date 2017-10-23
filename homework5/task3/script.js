var n=Number(prompt("Enter the number of cells and rows:"));
 document.write("<table border='1'>"); 
    for (var i=1; i<=n; i++) { 
        document.write("<tr>"); 
            for (var j=1; j<=n; j++) document.write("<td>"+i*j+"</td>"); 
        document.write("</tr>"); 
    } 
    document.write("</table>"); 


for (var a=0;a<=document.getElementsByTagName("td").length;a+=n+1) 
{
	document.getElementsByTagName("td")[a].style.backgroundColor= 'rgb(123, 194, 23)';
}
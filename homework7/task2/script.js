var i = document.getElementById('input');
i.addEventListener("keypress", function(e){
	if (((e.charCode>=48)&&(e.charCode<=57))||((e.charCode>=65)&&(e.charCode<=90))||((e.charCode>=97)&&(e.charCode<=122))||((e.charCode>45)&&(e.charCode<47))||(e.charCode==64)||(e.charCode==95)) {
	}
	else{
				e.preventDefault();

	}
}
)
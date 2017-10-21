var i = document.getElementById('input');
i.addEventListener("keypress", function(e){
	if (((e.charCode>=48)&&(e.charCode<=57))||((e.charCode>=65)&&(e.charCode<=90))||((e.charCode>=97)&&(e.charCode<=122))||(e.charCode==46)) {
	}
	else{
				e.preventDefault();

	}
}
)
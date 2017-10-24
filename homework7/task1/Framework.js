var Framework = {
	append: function(e1,e2){
		 e1.appendChild(e2);
	}
	prepend:function(e1,e2){
		 e1.insertBefore(e2,e1.FirstChild);
	}
	remove: function(e1){
		 e1.remove();
	}
	create:function(tag){
		return document.createElement(tag);
	}
	Get:{
		ById:function(id){
			return document.getElementById(id);
		}
		ByClass:function(cl,i){
			return document.getElementsByClassName(cl)[i];
		}
		ByName:function(name,i){
			return document.getElementsByName(name)[i];
		}
		BySelector:function(css){
			return document.querySelector(css);
		}
		BySelectorAll:function(css,i){
			return document.querySelectorAll(css)[i];
		}
	}	
	Event:{
		add:function(type,elem,f){
			if(typeof(elem.addEventListener)=="function"){
				 elem.addEventListener(type,f);
			}
			else {
				 elem.attachEvent('on' + type, f);
			}
		}
		remove:function(type,elem,f){
			if(typeof(elem.removeEventListener)="function"){
				 elem.removeEventListener(type,f);
			}
			else{
				 elem.detachEventListener('on'+type,f)
			}
		}
		dispatch:function(type,elem){
			 var event=new Event(type);
			 elem.dispatchEvent(event);
			}
		}
}
    
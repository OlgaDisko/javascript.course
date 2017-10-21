var Framework = {
	append: function(e1,e2){
		return e1.appendChild(e2);
	}
	prepend:function(e1,e2){
		return e1.insertBefore(e2,e1.FirstChild);
	}
	remove: function(e1){
		return e1.remove();
	}
	create:function(tag){
		return document.createElement(tag);
	}
	Get:{
		ById:function(id){
			return document.getElementById(id);
		}
		ByClass:function(cl){
			return document.getElementsByClassName(cl);
		}
		ByName:function(name){
			return document.getElementsByName(name);
		}
		BySelector:function(css){
			return document.querySelector(css);
		}
		BySelectorAll:function(css){
			return document.querySelectorAll(css);
		}
	}	
	Event:{
		add:function(type,elem,f){
			if(typeof elem.addEventListener=="function"){
				return elem.addEventListener(type,f);
			}
			else {
				return elem.attachEvent('on' + type, f);
			}
		}
		remove:function(type,elem,f){
			if(typeof elem.removeEventListener="function"){
				return elem.removeEventListener(type,f);
			}
			else{
				return elem.detachEventListener('on'+type,f)
			}
		}
		dispatch:function(type,elem){
			return elem.dispatchEvent(type);

			}
		}
}
    
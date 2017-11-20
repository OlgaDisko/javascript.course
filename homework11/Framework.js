var Framework = {
	width: function(el){
			el.scrollWidth;
	},
	height: function(el){
		el.scrollHeight;
	},
	css: function(el, prop, value) {
		if(arguments.length == 3)
			el.style[prop] = value;
		else
			return window.getComputedStyle(el)[prop];
	},
	pageTop: function(el) {
		return el.scrollTop;
	},
	pageLeft: function(el) {
		return el.scrollLeft;
	},
	append: function(e1,e2){
		 e1.appendChild(e2);
	},
	prepend:function(e1,e2){
		 e2.parentNode.insertBefore(e1,e2);
	},
	remove: function(e1){
		 e1.remove();
	},
	create:function(tag){
		return document.createElement(tag);
	},
	Get:{
		ById:function(id){
			return document.getElementById(id);
		},
		ByClass:function(cl,i){
			return document.getElementsByClassName(cl)[i];
		},
		ByName:function(name,i){
			return document.getElementsByName(name)[i];
		},
		BySelector:function(css){
			return document.querySelector(css);
		},
		BySelectorAll:function(css,i){
			return document.querySelectorAll(css)[i];
		},
	},	
	Event:{
		add:function(type,elem,f){
			if(typeof(elem.addEventListener)=="function"){
				 elem.addEventListener(type,f);
			}
			else {
				 elem.attachEvent('on' + type, f);
			}
		},
		remove:function(type,elem,f){
			if(typeof(elem.removeEventListener)=="function"){
				 elem.removeEventListener(type,f);
			}
			else{
				 elem.detachEventListener('on'+type,f)
			}
		},
		dispatch:function(type,elem){
			if(typeof(addEventListener == "function")){
				elem.dispatchEvent(new Event(type));
			}
			else{
			 elem.fireEvent('on' + type, new Event(type));
			}
		}
		
	},
	ajax:function(way,met,func){
			var change = function(){
			var xhr = new XMLHttpRequest();
			xhr.open(way, met, true);
			xhr.onload = function() {
				var text = this.responseText;
				func(text);
			}
			xhr.send(null);
		}

		window.onhashchange = function() {
			change();
		}
		
	}
}
    
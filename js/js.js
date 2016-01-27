'use strict';
var page = {
	'div': {
	  	'@class': 'red',
	  	'h3': 'welcome',
	    'b': 'bold text'
	},
	'b': 'one more bold text',
	'b': {
		'@class': 'red',
		'@value': 'one more bold text'
	},
	'h3': 'hello, this is a title',
	'section': {
		'@class': 'red',
		'i': 'text',
		'div': {
			'@class': 'blue',
			'i': 'test'
		}
	}
};
for (var i in page){
	console.log(i);
}
function createDomTree(obj, parentEl){
	// go through object to keys and values
	for (var i in obj){
		// if there is no parent element then create element 
		if(parentEl == undefined){
 			var el = document.createElement(i);
			document.getElementById('page').appendChild(el);
		// if there is a paprent element and key is not an attribute 
		// then create element inside parent element
		}else if(i.substring(0,1) != '@'){
			var el = document.createElement(i);
			parentEl.appendChild(el);
		}
		// if value is an object then call this function
		// and pass value as object and parent elment as parameters
		if(typeof obj[i] === 'object'){
			createDomTree(obj[i], el);
		}else{
			// if key is an attribute then add this attribute to parent el 
			if(i.substring(0,1) == '@'){
				var attributeName = i.substring(1);
				var attributeVal =  obj[i];
				parentEl.setAttribute(attributeName, obj[i]);
			}else{
				// if there is no parent element then append text to this element
				if(parentEl == undefined){
					var text = document.createTextNode(obj[i]);
					el.appendChild(text);
				}else{
					// if there is a parent element then append text to parent element
					var text = document.createTextNode(obj[i]);
					el.appendChild(text);				}		
			}
		}
	}
}
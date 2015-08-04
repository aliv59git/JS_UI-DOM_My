/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {

  return function (element, contents) {
<<<<<<< HEAD
  	var item,
  		len, 
  		currentContent,
  		newDiv,
  		divElement,
  		frag = document.createDocumentFragment();

  		if(typeof element !== 'string' || element.nodeType != 1){
  			throw new Error('Invalid element');
  		}
  		if(typeof element ==='string'){
  			item = document.getElementById(element);
	  		if(!item){
	  			throw new Error('Invalid element');
	  		}
  		} else {
  			item = element;
  		}

  		for (var i = 0, len = contents.length; i < len; i+=1) {
  			currentContent = contents[i];
  			if(typeof currentContent !== 'string' || typeof currentContent !== 'number'){
  				throw new Error();
  			}
  		}

  		item.innerHTML = '';
  		newDiv = document.createElement('div');

  		for (var i = 0, len=contents.length; i < len; i+=1) {
  			divElement = newDiv.cloneNode(true);
  			divElement.innerHTML = contents[i];
  			frag.appendChild(divElement);
  		}

  		item.appendChild(frag);
  };
};

module.exports =solve;

=======
    var item,
      len, 
      currentContent,
      newDiv,
      divElement,
      frag = document.createDocumentFragment();

      if(typeof element !== 'string' && element.nodeType != 1){
        throw new Error('Invalid element');
      }
      if(typeof element ==='string'){
        item = document.getElementById(element);
        if(!item){
          throw new Error('Invalid element');
        }
      } else {
        item = element;
      }

      for (var i = 0, len = contents.length; i < len; i+=1) {
        currentContent = contents[i];
        if(typeof currentContent !== 'string' && typeof currentContent !== 'number'){
          throw new Error();
        }
      }

      item.innerHTML = '';
      newDiv = document.createElement('div');

      for (var i = 0, len=contents.length; i < len; i+=1) {
        divElement = newDiv.cloneNode(true);
        divElement.innerHTML = contents[i];
        frag.appendChild(divElement);
      }

      item.appendChild(frag);
  };
};

module.exports = solve;
>>>>>>> 64dc4c25cb785b5605e0818fde73ee7f21a29254

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

module.exports = function () {

  return function (element, contents) {

    if (typeof element === 'string') {
      element = document.getElementById(element);
    } else if (!(element instanceof HTMLElement)) {
      throw Error;
    }

    var docFragment = document.createDocumentFragment();

    for (var i = 0; i < contents.length; i += 1) {
      if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
        throw Error;
      }
      var newEl = document.createElement('div');
      newEl.textContent = contents[i];
      docFragment.appendChild(newEl);
    }

    element.innerHTML = '';
    element.appendChild(docFragment);
  };
};
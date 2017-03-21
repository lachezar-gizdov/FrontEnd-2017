function solve() {
  return function (selector) {
    if (typeof selector === 'string') {
      selector = document.getElementById(selector);
      if (selector === null) {
        throw Error('selector cannot be found.');
      }
    } else if (!(selector instanceof HTMLElement)) {
      throw Error('Not a valid selector.');
    }

    var buttons = document.getElementsByClassName('button');
    //var contents = document.getElementsByClassName('content');

    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].textContent = 'hide';
    }

    $(selector).on('click', '.button', changeVisibility);

  };

  function changeVisibility(event) {
    var targetBtn = event.target;
    var targetBtnSibling = findContentSiblingIfExist(targetBtn);

    if (targetBtnSibling !== null) {
      if (targetBtnSibling.style.display === '') {
        targetBtnSibling.style.display = 'none';
        targetBtn.innerHTML = 'show';
      } else {
        targetBtnSibling.style.display = '';
        targetBtn.innerHTML = 'hide';
      }
    }
  }

  function findContentSiblingIfExist(targetEl) {

    var currSibling = targetEl.nextElementSibling;

    if (currSibling === null || currSibling === undefined || currSibling.className === 'button') {
      return null;
    } else if (currSibling.className === 'content') {
      return currSibling;
    }

    return findContentSiblingIfExist(currSibling);
  }
}

module.exports = solve;
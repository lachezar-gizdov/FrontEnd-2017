function solve() {
    return function (selector, tabs) {
        var element = document.querySelector(selector);
        var docFragment = document.createDocumentFragment();
        var nav = document.createElement('ul');
        nav.className += 'tabs-nav';

        var content = document.createElement('ul');
        content.className += 'tabs-content';

        tabs.forEach(function (tab, index) {
            var tabClass = 'tab-content';

            if (!index) {
                tabClass += ' visible';
            }

            nav.innerHTML += '<li> <a href="#" class="tab-link" tab-index="' + index + '">' + tab.title + '</a> </li>';
            content.innerHTML += '<li class="' + tabClass + '"><p>' + tab.content + '</p> <button class="btn-edit">Edit</button> </li>';
        });

        docFragment.appendChild(nav);
        docFragment.appendChild(content);

        tabs = [].slice.call(content.getElementsByClassName('tab-content'));

        nav.addEventListener('click', function (ev) {
            var index = +ev.target.getAttribute('tab-index');

            for (var i = 0; i < tabs.length; i += 1) {
                if (index !== i) {
                    tabs[i].className = 'tab-content';
                } else {
                    tabs[i].className = 'tab-index visible';
                }
            }
        });

        content.addEventListener('click', function (ev) {
            if (ev.target.tagName !== 'BUTTON') {
                return;
            }

            var target = event.target,
                parent = target.parentElement,
                currContent = parent.firstChild.innerHTML;

            if (target.innerHTML === 'Edit') {
                target.InnerHTML = 'Save';

                var editArea = document.createElement('textarea');
                editArea.ClassName += ' edit-content';
                editArea.value = currContent;
                parent.appendChild(editArea);
            } else if (target.innerHTML === 'Save') {
                target.innerHTML = 'Edit';
                parent.firstChild.innerHTML = parent.lastChild.value;
                parent.lastChild.remove();
            }
        });

        element.appendChild(docFragment);
    };
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}
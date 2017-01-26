'use strict';

function solve(args) {
    let input = args[0],
        index;

    while (index !== -1) {
        index = input.indexOf('href');

        input = input.replace('<a href="', '[our site](').replace('">our site</a>', ')').replace('">our forum</a>', ')');
    }


    console.log(input);
}

solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);
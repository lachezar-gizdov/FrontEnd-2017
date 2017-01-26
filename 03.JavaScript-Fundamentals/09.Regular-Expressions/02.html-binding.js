'use strict';

function solve(args) {
    let obj = JSON.parse(args[0]);
    let text = '' + args[1];
    text = text.replace(/'/, '"');
    let regex = /data-bind-(.*?)="(.*?)"/gi;
    let currentMatch;
    while (currentMatch = regex.exec(text)) {
        let index = text.indexOf('>');
        if (text[index - 1] === '/') {
            index--;
        }
        let field = currentMatch[1];
        if (field.toLowerCase() === 'content') {
            let arr = text.split('');
            let x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        } else {
            let arr2 = text.split('');
            let x2 = arr2.splice(index, 0, " " + field + '="' + obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }

    console.log(text);

}
solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);
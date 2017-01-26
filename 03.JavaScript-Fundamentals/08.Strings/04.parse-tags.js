'use strict';

function solve(args) {
    let arr = args[0].split(/[<|>)]/g),
        filter = ['orgcase'];

    for (let i in arr) {
        if (arr[i] === 'lowcase') {
            filter.push('lowcase');
        }
        else if (arr[i] === 'upcase') {
            filter.push('upcase');
        }
        else if (arr[i] === 'orgcase') {
            filter.push('orgcase');
        }
        else if (arr[i][0] === '/') {
            filter.pop();
        } else {
            if (filter[filter.length - 1] === 'lowcase') {
                arr[i] = arr[i].toLowerCase();
            }
            if (filter[filter.length - 1] === 'upcase') {
                arr[i] = arr[i].toUpperCase();
            }
        }
    }

    let str = arr.join('').replace(/[/]/g, '').replace(/(orgcase|upcase|lowcase)/g, '');

    console.log(str);
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
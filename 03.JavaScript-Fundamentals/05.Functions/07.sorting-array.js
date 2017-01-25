'use strict';

function solve(args) {
    let numbers = args[1].split(' ').map(Number),
        x = +args[2],
        sorted = [],
        maxValue,
        index;

    while (numbers.length !== 0) {
        maxValue = Math.max(...numbers);
        sorted.unshift(maxValue);
        index = numbers.indexOf(maxValue)
        numbers.splice(index, 1);
    }

    console.log(sorted.join(' '));
}

solve(['10', '36 10 1 34 28 38 31 27 30 20']);
'use strict';

function solve(args) {
    let num = +args[0],
        digit = num % 10,
        arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    console.log(arr[digit]);
}

solve(['42']);
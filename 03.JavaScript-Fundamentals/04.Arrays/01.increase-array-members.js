'use strict';

function solve(args) {
    let n = +args[0],
        arr = [n],
        multiplier = 5;

    for (let i = 0; i < n; i += 1){
        arr[i] = i * multiplier;
        console.log(arr[i]);
    }
}

solve(['5']);
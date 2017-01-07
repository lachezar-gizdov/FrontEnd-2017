'use strict';

function solve(args) {

    let number = +args[0],
        isPrime;

    for (let i = number; i >= 2; i -= 1) {
        isPrime = true;
        for (let j = 2; j <= Math.sqrt(number); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            return i;
        }
    }
    return -1;
}

solve(['126']);
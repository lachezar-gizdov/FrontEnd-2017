'use strict';

function solve(numbers) {
    let result = [],
        counter = 0,
    min = +numbers[0],
    max = +numbers[1];

    if (numbers.length !== 2 || isNaN(min) || isNaN(max)) {
        throw 'Error';
    }
    for (let i = min; i <= max; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            if (i % j === 0) {
                counter += 1;
            }
        }
        if (counter > 1 && counter <= 2) {
            result.push(i);
        }
        counter = 0;
    }
    console.log("Primes:", result);
}

solve([1, 5]);
solve(["1", "5"]);
solve([258, 262]);
solve(['pesho', 5]);
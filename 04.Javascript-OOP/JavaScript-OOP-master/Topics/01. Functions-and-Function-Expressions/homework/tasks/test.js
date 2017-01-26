'use strict';

function solve(numbers) {
    let result = [],
        counter = 0;
        numbers[0] = +numbers[0];
        numbers[1] = +numbers[1];

    if (numbers.length !== 2 || isNaN(numbers[0]) || isNaN(numbers[1])) {
        throw 'MyError';
    }
    for (let i = numbers[0]; i <= numbers[1]; i += 1) {
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
    console.log(result);
}

solve([1, 5]);
solve(["1", "5"]);
solve([258, 262]);
'use strict';

function solve(args) {
    let arr = [...args].map(Number),
        sorted = [],
        len = arr.length;

    for (let i = 0; i < len; i += 1) {
        let smallest = Math.min(...arr);

        if (smallest !== sorted[sorted.length - 1]) {
            sorted.push(smallest);
        }
        let index = arr.indexOf(smallest);
        arr.splice(index, 1);
    }
    console.log(sorted.join('\n'));
}

solve(['6', '3', '4', '1', '5', '2', '6']);
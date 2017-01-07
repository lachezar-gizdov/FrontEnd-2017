'use strict';

function solve(args) {
    let arr = args[0].split(' ').map(Number),
        largest;

    largest = GetMax(GetMax(arr[0], arr[1]), arr[2]);
    console.log(largest);

    function GetMax(a, b) {
        if (a > b) {
            return a;
        }
        return b;
    }
}

solve(['8 8 6']);
solve(['7 19 19']);
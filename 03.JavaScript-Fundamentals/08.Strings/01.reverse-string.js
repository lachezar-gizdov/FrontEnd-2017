'use strict';

function solve(args) {

    let inputString = args[0];

    function reverse(input) {
        let resultString = '';

        for (let i = inputString.length - 1; i >= 0; i -= 1) {
            resultString+= input[i];
        }
        return resultString;
    }

    console.log(reverse(inputString));
}

solve([ 'qwertytrewq' ]);
solve([ 'sample' ]);
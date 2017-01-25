'use strict';

function solve(args) {
    let inputString = args[0];

    function checkBrackets(input) {
        let leftBracket = 0,
            rightBracket = 0,
            result = 'Correct';

        for (let i = 0; i < input.length; i += 1) {
            if (input[i] === '(') {
                leftBracket += 1;
            }
            else if (input[i] === ')') {
                rightBracket += 1;
            }
        }
        if (leftBracket !== rightBracket) {
            result = 'Incorrect';
        }
        return result;
    }

    console.log(checkBrackets(inputString));
}

solve([ '((a+b)/5-d)' ]);
solve([ ')(a+b))' ]);
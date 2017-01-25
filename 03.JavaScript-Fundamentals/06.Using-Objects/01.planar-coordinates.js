'use strict';

function solve(args) {
    let lineP1x,
        lineP1y,
        lineP2x,
        lineP2y,
        distance,
        sides = [];

    for (let i = 0; i < 12; i += 4) {
        lineP1x = +args[i];
        lineP1y = +args[i + 1];
        lineP2x = +args[i + 2];
        lineP2y = +args[i + 3];
        distance = Math.sqrt(Math.pow(lineP2x - lineP1x, 2) + Math.pow(lineP2y - lineP1y, 2));
        sides.push(distance);
        console.log(distance.toFixed(2));
    }

    function triangle(sides) {
        if ((sides[0] + sides[1] < sides[2]) || (sides[0] + sides[2] < sides[1]) || (sides[1] + sides[2] < sides[0])) {

            console.log('Triangle can not be built');
        }
        else {
            console.log('Triangle can be built');
        }
    }

    triangle(sides);
}

solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);
solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);
'use strict';

function Solve(args){
    let x = +args[0],
        y = +args[1],
        r = 2,
        isInside = false,
        distance = Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - 0, 2));
    
    if (distance <= r){
        isInside = true;
    }

    if (isInside){
        console.log("yes " + distance.toFixed(2) );
    } else{
        console.log("no " + distance.toFixed(2));
    }
}

Solve(['-2', '0']);
Solve(['-1', '2']);
Solve(['1.5', '-1']);
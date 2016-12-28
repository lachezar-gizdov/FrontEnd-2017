'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1];

    if(a > b){
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }

    console.log(`${a} ${b}`);
}

solve(['5', '2'])
solve(['3', '4']);
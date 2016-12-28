'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2];

    if(a >= b && a >= c){
        console.log(a);
    } else if(b >= a && b >= c){
        console.log(b)
    } else{
        console.log(c);
    }
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
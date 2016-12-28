'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2];

    if(a >= b && a >= c){
        if(b >= c){
            console.log(`${a} ${b} ${c}`);
        } else{
            console.log(`${a} ${c} ${b}`);
        }
    } else if(b >= a && b >= c){
        if(a >= c){
            console.log(`${b} ${a} ${c}`);
        } else{
            console.log(`${b} ${c} ${a}`);
        }
    } else{
        if(a >= b){
            console.log(`${c} ${a} ${b}`);
        } else{
            console.log(`${c} ${b} ${a}`);
        }
    }
}

solve(['-1.1', '-0.5', '-0.1']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
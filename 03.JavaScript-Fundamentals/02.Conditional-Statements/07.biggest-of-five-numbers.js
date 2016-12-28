'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        ab = 0,
        cd = 0;

    if (a >= b){
        ab = a;
    } else {
        ab = b;
    } 
    if (c >= d){
        cd = c;
    } else{
        cd = d;
    } 
    if (ab >= cd){
        if (ab >= e){
            console.log(ab);
        } else {
            console.log(e);
        }
    } else {
        if (cd >= e){
            console.log(cd);
        } else {
            console.log(e);
        }
    }
}

solve(['5', '2', '2', '4', '1']);
solve(['-2', '-22', '1', '0', '0']);
solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);
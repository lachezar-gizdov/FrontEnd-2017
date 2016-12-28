'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        counter = 0;

    if(a < 0){
        counter+=1;
    } if(b < 0){
        counter+=1;
    } if(c < 0){
        counter+=1;
    } if(a === 0 || b === 0 || c === 0){
        console.log('0');
    } else if(counter === 1 || counter === 3){
        console.log('-');
    } else{
        console.log('+');
    }
}

solve(['5', '2', '2']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
'use strict';

function solve(args){
    let number = +args[0];

    if(number & 1 << 3){
        console.log("1");
    } else{
        console.log("0")
    }
}

solve(['15']);
solve(['1024']);
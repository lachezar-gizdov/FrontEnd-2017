'use strict';

function solve(args){
    let number = +args[0];

    let num = Math.floor(number / 100);

    if(num % 10 === 7){
        console.log("true");
    } else{
        let remainder = num % 10;
        console.log("false " + remainder);
    }
}

solve(['9999799']);
solve(['777877']);
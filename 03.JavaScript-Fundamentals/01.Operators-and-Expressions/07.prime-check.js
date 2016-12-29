'use strict';

function solve(args){
    let number = +args[0],
        counter = 0;

    for (let i = 2; i < number; i+= 1) {

        if(number % i === 0){
            counter+= 1;
        }
    }

    if(counter === 0 && number > 1){
        console.log("true");
    } else{
        console.log("false");
    }
}

solve(['2']);
solve(['23']);
solve(['-3']);
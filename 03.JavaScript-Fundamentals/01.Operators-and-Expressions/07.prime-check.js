'use strict';

function Solve(args){
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

Solve(['2']);
Solve(['23']);
Solve(['-3']);
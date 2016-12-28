'use strict';

function solve(args) {
	let number = +args[0]

    if(number % 7 === 0 && number % 5 === 0){
        console.log("true " + number)
    } else{
        console.log("false " + number)
    }
}

solve(['35']);
solve(['7']);
'use strict';

function solve(args) {
	let number = +args[0]

    if(number % 2){
        console.log("odd " + number);
        
    } else{
        console.log("even " + number);
    }
}

solve(['9']);
solve(['6']);
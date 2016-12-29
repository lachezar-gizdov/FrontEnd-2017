'use strict';

function solve(args){
    let x = +args[0],
        y = +args[1],
        r = 1.5,
        distance = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2)),
        circle = false,
        rectangle = false;

    if (distance <= r){
        circle = true;
    }
    if ((x <= 5 || x <= -1) && (y <= 1 || y <= -1)){
        rectangle = true;
    }

    if (circle && rectangle ){
        console.log("inside circle inside rectangle");
    }
    else if (circle && !rectangle ){
        console.log("inside circle outside rectangle");
    }
    else if (!circle && rectangle ){
        console.log("outside circle inside rectangle");
    }
    else if(!circle && !rectangle ){
        console.log("outside circle outside rectangle");
    }
}

solve(['2.5', '2']);
solve(['0', '1']);
solve(['1', '2']);
'use strict';

function Solve(args){
    let sideA = +args[0],
        sideB = +args[1],
        sideH = +args[2],
        area = ((sideA + sideB) / 2) * sideH;

    console.log(area.toFixed(7));
}

Solve(['5', '7', '12']);
Solve(['2', '1', '33']);
Solve(['0.222', '0.333', '0.555']);
'use strict';

function solve(args){
    let numbers = args.map(Number),
        min = Math.min(...numbers),
        max = Math.max(...numbers),
        sum = 0,
        avg = 0;

    for (let i = 0; i < numbers.length; i+=1){
        sum+= numbers[i];
    }
    avg = sum / numbers.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}

solve(['2', '5', '1']);
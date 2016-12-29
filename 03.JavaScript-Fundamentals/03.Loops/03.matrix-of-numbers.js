'use strict';

function solve(args){
    let num = +args[0],
        print = '',
        counter = 1;

    for (let i = 1; i <= num; i+=1){
        for (let j = 0; j < num; j+=1){
            print+= counter + ' ';
            counter+=1;
        }
        console.log(print);
        print = '';
        counter = i + 1;
    }
}

solve(['3']);
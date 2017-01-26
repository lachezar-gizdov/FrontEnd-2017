'use strict';

function solve(args) {
    let input = args[0],
        nbsp = '&nbsp;';

    while(true){
        let index = input.indexOf(' ', 0);
        if(index === -1){
            break;
        }
        input = input.replace(' ', nbsp);
    }

    console.log(input);
}
solve(['hello world']);
solve([ 'This text contains 4 spaces!!' ]);
'use strict';

function solve(args){
    let input = args[0],
        protocol = '',
        server = '',
        resource = '',
        startIndex,
        endIndex;

    protocol = input.substring(0, input.indexOf(':'));
    console.log(`protocol: ${protocol}`);

    startIndex = input.indexOf('//', 0) + 2;
    endIndex = input.indexOf('/', startIndex);
    server = input.substring(startIndex, endIndex);
    console.log(`server: ${server}`);
    
    resource = input.substring(endIndex, input.length);
    console.log(`resource: ${resource}`);
}

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);
'use strict';

function solve(args) {
    let first = args[0],
        second = args[1],
        isEqual = true,
        shorter;

    if (first.length < second.length) {
        shorter = first;
    }
    else {
        shorter = second;
    }

    for (let i = 0; i < shorter.length; i++) {
        if (first[i] !== second[i]) {
            if (first[i] > second[i]) {
                console.log('>');
            }
            else {
                console.log('<');
            }
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        if (first.Length > second.Length) {
            console.log('>');
        }
        else if (first.Length < second.Length) {
            console.log('<');
        }
        else if (first.Length == second.Length) {
            console.log('=');
        }
    }
}

solve(['food', 'food']);
solve(['hello', 'halo']);
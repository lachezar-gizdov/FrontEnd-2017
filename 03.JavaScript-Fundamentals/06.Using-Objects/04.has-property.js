'use strict';

function solve(args) {
    let obj = '...',
        hasProp = hasProperty(obj, 'length');

    function hasProperty(obj, property) {
        return obj.hasOwnProperty(property);
    }

    console.log(hasProp);
}

solve();
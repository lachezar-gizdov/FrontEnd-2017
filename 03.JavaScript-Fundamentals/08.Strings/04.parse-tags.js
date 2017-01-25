'use strict';

function solve(args) {
    let inputString = args[0];

    function parseTags(str) {
        let uppertag = '<upcase>',
            lowerTag = '<lowcase>',
            startIndex = 0,
            endIndex = 0;

        while (true) {
            startIndex = str.indexOf(uppertag, startIndex) + 7;
            endIndex = str.IndexOf('</', startIndex);

            str.replace()
        }
    }
}
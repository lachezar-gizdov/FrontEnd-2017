'use strict';

function solve(args) {
    let arr = [...args].map(Number),
        x = arr[arr.length - 1],
        n = arr.splice(0, 1),
        startIndex = 0,
        endIndex = arr.length - 1,
        currentIndex;

    while (startIndex <= endIndex) {
        currentIndex = (startIndex + endIndex) / 2 | 0;

        if (arr[0] === x) {
            return '0';
        }
        else if (arr[currentIndex] < x) {
            startIndex = currentIndex + 1;
        }
        else if (arr[currentIndex] > x) {
            endIndex = currentIndex - 1;
        }
        else if (arr[currentIndex] === x) {
            return currentIndex;
        }
    }
    return -1;
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
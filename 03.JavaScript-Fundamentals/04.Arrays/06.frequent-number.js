'use strict';

function solve(args) {
    let arr = [...args].map(Number),
        currCount = 1,
        maxCount = 0,
        freqNum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j <= arr.length; j += 1) {
            if (!(i === j)){
                if (arr[i] === arr[j]){
                    currCount+=1;
                }
            }
        }
        if(maxCount < currCount){
            maxCount = currCount;
            freqNum = arr[i];
        }
        currCount = 1;
    }

    console.log(`${freqNum} (${maxCount} times)`);
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
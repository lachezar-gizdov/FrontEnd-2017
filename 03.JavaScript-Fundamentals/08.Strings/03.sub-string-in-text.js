'use strict';

function solve(args) {
    let inputString = args[1].toLowerCase(),
        strToSearch = args[0].toLowerCase();

    function appearancesCount(inputStr, strToSearch) {
        let index = 0,
            count = 0;

        while (true) {
            index = inputStr.indexOf(strToSearch, index );
            if(index >= 0){
                count+=1;
                index+=1;
            }
            else{
                break;
            }
        }

        return count;
    }

    console.log(appearancesCount(inputString, strToSearch));
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);
'use strict';

function solve(args) {
    let arr = args,
        hoomanCount = arr.length,
        hoomans = [];

    function makeHooman(fname, lname, age) {
        return {
            fname: fname,
            lname: lname,
            age: age,
            fullname: fname + ' ' + lname
        };
    }

    for (let i = 0; i < hoomanCount; i += 3) {
        hoomans.push(makeHooman(arr[i], arr[i + 1], arr[i + 2]));
    }

    function youngest() {
        let youngest = hoomans[0];

        for (let hooman of hoomans) {
            if (hooman.age < youngest.age) {
                youngest = hooman;
            }
        }
        console.log(youngest.fullname);
        return youngest.fullname;
    }

    youngest();
}

solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]);

solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]);
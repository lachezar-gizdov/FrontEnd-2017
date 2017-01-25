'use strict';

function solve(args){
    let persons = [];

    function makePerson(fname, lname, age, gender){
        return {
            fname: fname,
            lname: lname,
            age: age,
            gender: gender
        };
    }

    persons.push(makePerson('Gosho', 'Goshev', 15, false));
    persons.push(makePerson('Pesho', 'Pesho', 16, false));
    persons.push(makePerson('Penka', 'Peneva', 17, true));
    persons.push(makePerson('Stamat', 'Stamatov', 19, false));
    persons.push(makePerson('Ani', 'Aneva', 25, true));

}
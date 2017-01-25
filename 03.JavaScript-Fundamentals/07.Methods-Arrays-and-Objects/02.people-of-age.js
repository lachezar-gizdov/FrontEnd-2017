'use strict';

function solve(args) {
    let persons = [];

    function makePerson(fname, lname, age, gender) {
        return {
            fname: fname,
            lname: lname,
            age: age,
            gender: gender
        };
    }
    persons.push(makePerson('Gosho', 'Goshev', 25, false));
    persons.push(makePerson('Pesho', 'Pesho', 26, false));
    persons.push(makePerson('Penka', 'Peneva', 17, true));
    persons.push(makePerson('Stamat', 'Stamatov', 19, false));
    persons.push(makePerson('Ani', 'Aneva', 25, true));

    function onlyAge(persons, ageTo = 18) {
        let ages = [];
        for (let i = 0; i < persons.length; i += 1) {
            ages.push(persons[i].age);
        }
        if (ages.every(age => age >= ageTo)) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false;

    }

    onlyAge(persons);
}

solve();
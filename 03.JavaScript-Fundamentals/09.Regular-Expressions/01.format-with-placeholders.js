'use strict';

function solve(args) {
    let value,
        options = JSON.parse(args[0]),
        template = args[1];

    for (const prop in options) {
        if (options.hasOwnProperty(prop)) {
            value = options[prop];
            let match = new RegExp('#{' + prop + '}', 'gi');

            template = template.replace(match, value);
        }
    }

    console.log(template);
}

solve([
'{ "name": "John" }',
"Hello, there! Are you #{name}?"
]);
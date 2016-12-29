'use strict';

function solve (args) {
  let hex = args[0],
    dec = 0,
    temp = 0,
    len = +hex.length,
    reversedString = reverse(hex);

  for (let i = 0; i <= len - 1; i += 1) {
    switch (reversedString[i]) {
      case 'A':
        temp = 10;
        break;
      case 'B':
        temp = 11;
        break;
      case 'C':
        temp = 12;
        break;
      case 'D':
        temp = 13;
        break;
      case 'E':
        temp = 14;
        break;
      case 'F':
        temp = 15;
        break;
      default:
        temp = reversedString[i];
        break;
    }

    dec += temp * Math.pow(16, i);
  }
  console.log(dec);

  function reverse (str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--)
      result += str[i];
    return result;
  }
}

solve(['FE']);
solve(['4ED528CBB4']);

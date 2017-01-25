'use strict';

function solve(args){
    let temp;

    let obj = { obekt: { obekt1: {}, obekt2: {}}, primitive: 5, pakobj: { obj: { ojb12: {}}}};

        function clone(obj) {
      if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

      if (obj instanceof Date)
        temp = new obj.constructor();
      else
        temp = obj.constructor();

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          obj['isActiveClone'] = null;
          temp[key] = clone(obj[key]);
          delete obj['isActiveClone'];
        }
      }

      return temp;
    }

    let newObj = clone(obj);
    console.log(newObj);
}

solve();
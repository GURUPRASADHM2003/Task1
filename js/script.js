// Using lodash for deep comparison
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

const _ = require('lodash');

function deepCompare(obj1, obj2) {
    return _.isEqual(obj1, obj2);
}

console.log(deepCompare(obj1, obj2)); // Output: true
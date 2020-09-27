var flight = require('./object-literals-nest');

console.log(typeof flight.toString); // 'function'
console.log(typeof flight.constructor); // 'function'

// using hasOwnProperty
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

console.log(flight.hasOwnProperty('number')) // true
console.log(flight.hasOwnProperty('constructor')) //false
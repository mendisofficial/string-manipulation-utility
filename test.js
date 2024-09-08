const { capitalizeFirstLetter, toCamelCase, reverseString } = require('./dist/index.js');

console.log(capitalizeFirstLetter('hello world')); // "Hello world"
console.log(toCamelCase('hello world')); // "helloWorld"
console.log(reverseString('hello')); // "olleh"
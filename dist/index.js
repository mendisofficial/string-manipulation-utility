"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = exports.toCamelCase = exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const toCamelCase = (str) => {
    return str
        .split(' ')
        .map((word, index) => index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};
exports.toCamelCase = toCamelCase;
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
exports.reverseString = reverseString;

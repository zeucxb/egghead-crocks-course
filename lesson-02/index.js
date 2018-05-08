const { inc, toUpper } = require("../utils");
const Maybe = require('crocks/Maybe');
const safe = require('crocks/Maybe/safe');
const isNumber = require('crocks/predicates/isNumber');
const isString = require('crocks/predicates/isString');

// const isNumber = val => typeof val === 'number';
// const isString = val => typeof val === 'string';

// const safe = (pred, val) =>
//   pred(val) ? Maybe.Just(val) : Maybe.Nothing();

const inputN = safe(isNumber, 5);
const resultN = inputN.map(inc);

const inputS = safe(isString, 'teste');
const resultS = inputS.map(toUpper);

console.log(resultN);
console.log(resultS);
const { inc, toUpper } = require("../utils");
const Maybe = require('crocks/Maybe');

const safeNumber = (val) =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing();

const input = safeNumber(5);
const result = input.map(inc);

console.log(result);
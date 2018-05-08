const crocks = require('crocks');
const { Maybe, isNumber, safe, liftA2 } = crocks;

const safeNum1 = safe(isNumber, 1);
const safeNum2 = safe(isNumber, 2);

const add = a => b => a + b;

// const sum = safeNum1.map(add)
//   .ap(safeNum2)
//   // .chain(fn => safeNum2.map(fn))

// const safeAdd = Maybe.of(add);
// const sum = safeAdd
//   .ap(safeNum1)
//   .ap(safeNum2)

const safeAdd = liftA2(add);
const sum = safeAdd(safeNum1, safeNum2);

console.log(sum);
// && (and)        || (or)
// true && true -> true
// true && false -> false

const x = 5;
const result = x  || 100; // 
console.log(result);

const y = 7;
const result3 = x < y && 'y가 큼';
console.log(result3);

// falsy: undefined, null, 0, false, '', NaN -> 다 거짓으로 인식

// let userColor = red
let userColor = undefined;
let defaultColor = 'green';
let currentColor = userColor || defaultColor;
console.log(currentColor);
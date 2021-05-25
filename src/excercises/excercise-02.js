console.log('Excercise 2');

const arr1 = [2, 3, 5, 6];
const arr2 = [7, 1, 4];
const arr3 = [1, 1, 1];
const arr4 = [8, 8, 8];
const arr5 = ['t', 'a', 's']

const concat = (a, b) => [ ...a, ...b];

console.log('concat: ', concat(arr1, arr2));

const concatMultiple = (...args) => args.flat();

console.log('concat multiple: ', concatMultiple(arr1, arr2, arr3, arr4, arr5));

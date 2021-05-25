console.log('Excercise 1');

const numbers = [2, 3, 7, 9, 1, 4];

const head = ([first]) => first;

console.log('head: ', head(numbers));

const tail = ([ , ...array]) => array;

console.log('tail: ', tail(numbers));

const init = (array) => array.slice(0, -1);

console.log('init: ', init(numbers));

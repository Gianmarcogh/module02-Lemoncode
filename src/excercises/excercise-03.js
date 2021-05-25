console.log('Excercise 3');

const user = {
  id: 0,
  name: 'Gianmarco',
  age: 25,
}

const clone = (obj) => ({ ...obj });

console.log('Clone:', clone(user));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (o1, o2) => ({ ...o2, ...o1});

console.log('Merge:', merge(a,b));


//                 Array Reduce

/* const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

 Some todos os números (reduce)

const total = numbers.reduce(function(accumulator, value){
  accumulator += value;
 return accumulator;
 }, 0);

 console.log(total)

 Retorne um array com os pares (Filter)

const total = numbers.reduce(function(accumulator, value, index, array){
  if(value % 2 === 0) accumulator.push(value);
 return accumulator;
 }, []);

 console.log(total);

 Retorne um array com o dobro dos valores (Map)

const total = numbers.reduce(function (accumulator, value) {
  accumulator.push(value * 2);
  return accumulator;
}, []);

console.log(total);

*/


const people = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Letícia', age: 19 },
    { name: 'Rosana', age: 64 },
    { name: 'Wallace', age: 47 },
];

// Retorne a pessoa mais velha

const olderPerson = people.reduce(function(accumulator, value){
    if(accumulator.age > value.age) return accumulator;
    return value;
});

console.log(olderPerson);




//       Filter, Map e Reduce

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne a soma do dobro de todos os pares

// -> Filtrar pares

// -> Dobrar os valores 

// Reduzir (somar tudo)


/* const evenNumbers = numbers.filter(function(value){
    return value % 2 === 0;
}).map(function(value){
    return value * 2;
}).reduce(function(accumulator, value){
    return accumulator + value;
});

*/

// codigo reduzido

const evenNumbers = numbers.filter(value => value % 2 ==0)
.map(value => value * 2)
.reduce((accumulator, value ) => accumulator + value);


console.log(evenNumbers);

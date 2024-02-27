//                 Array Filter

// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos
// ou menos.


// Retorne os números maiores que 10

/*

function callBackFilter(value) {
    if (value > 10) {
        return true;
    } else {
        return false;
    }
}

*/

/*

function callBackFilter(value) {
    return value > 10;
}

*/

/*

const filterNumbers = numbers.filter(function(value) {
    return value > 10;
});

*/

/*
const filterNumbers = numbers.filter(value => {
    return value > 10;
});
*/

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//  const filterNumbers = numbers.filter(value => value > 10);
//  console.log(filterNumbers);



// Retorne as pessoas cujo nome termina com A



const people = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Letícia', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 },
];

// Retorne as pessoas que tem o nome com 7 letras ou mais 

//const filterName = people.filter(value => value.name.length >= 7 );
//console.log(filterName);

// Retorne as pessoas com mais de 50 anos

//const filterAge = people.filter (value => value.age >= 50);
//console.log(filterAge);

// Retorne as pessoas cujo nome termina com A

const endWithA = people.filter(value => value.name.toLowerCase().endsWith('a'));
console.log(endWithA);

// length -> checa o tamanho de strings.

// toLowerCase () retorna o valor da string original convertido para minúsculo.





// Retorne os numeros maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numeros filtados  = numeros.filter(valor => {
// valor =>  10;
// });

// console.log(numeros filtrados)



//               Array Map 
// Map -> Alterar valores do meu array 
// e vai sempre manter o mesmo tamanho do array original


// Dobre os números 

//const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const doubledNumbers = numbers.map(value => value * 2);
//console.log(doubledNumbers);

// Separação de conteúdo 

const people = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Letícia', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 },
];


// Para cada elemento:

// Retorne apenas uma string com o nome da pessoa

const names = people.map(value => value.name);
console.log(names)

// Remova apenas a chave 'nome' do objeto

const age = people.map(value => ({idade: value.age}));
console.log(age);

// Adicione uma chave id em cada objeto
// com o código dessa forma, eu não altero o objeto original

const withIds = people.map(function(value, index) {
    const newObjt = {...value};
    newObjt.id = index;
    return newObjt;
})

console.log(withIds);





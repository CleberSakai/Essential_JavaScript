//            Atribuição via desestruturação (Objetos)

const person = {
    //name: 'Cleberson',
    surname: 'Rodrigues',
    age: '20',
    adress: {
        street: 'Av Brasil',
        number: 320
    }
};

const {name = '', surname} = person;
const {adress: {street, number}} = person;

console.log(name, surname);
//             Classes

class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;  
    }

    talk() {
        console.log(`${this.name} is talking`);
    }
}

const p1 = new Person('Cleberson', 'Rodrigues');
const p2 = new Person('Luziana', 'Rodrigues');
const p3 = new Person('Isabella', 'Rodrigues');


p3.talk();

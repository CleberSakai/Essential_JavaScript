//                 Funções 

//Declaração de função (Function hoisting)

function sayHello() {
    console.log('Hello');
}

sayHello();

// First-class objectes (Objetos de primeira classe)
// Function expression
const iamDice = function () {
    console.log('I am Dice. ');
};

iamDice();

/* 
function executesFunction(role) {
    role();
}

executesFunction(iamDice);
*/

// Arrow Function 
const arrowFunction = () => {
    console.log('I am an Arrow Function')
};

// Dentro de um objeto 

const obj = {
    talk() {
        console.log('Ok')
    }
}

obj.talk();
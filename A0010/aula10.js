//          Métodos estásticos 

class remoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    increaseVolume() {
        this.volume += 2;
    }

    // Método de instância

    decreaseVolume() {
        this.volume -= 2;
    }

    // Metódo estático 
    // -> Não tem acesso aos dados da instância.

    static addition(x, y) {
        return x + y;
    }
}

const controlOne = new remoteControl ('LG');

controlOne.increaseVolume();
controlOne.increaseVolume();
controlOne.increaseVolume();
console.log(controlOne);

console.log(remoteControl.addition(2, 4));


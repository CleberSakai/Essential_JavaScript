//                Promises

/*


// com Callback


function wait(msg, temp, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, temp);
}



wait('phrase-one', random(1, 3), function(){
    wait('phrase-two', random(1, 3), function(){
        wait('phrase-three', random(1, 3));
    });
});

*/

// essa função cria um número aleatorio

function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

wait("Phrase 1", random(1, 3))
  .then((response) => {
    console.log(response);
    return wait(10000, random(1, 3));
  })
  .then((response) => {
    console.log(response);
    return wait("Phrase 3", random(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    console.log("End");
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

// -> setTimeout () define um cronômetro que executa uma função
// ou trecho de código especificado assim que expira.

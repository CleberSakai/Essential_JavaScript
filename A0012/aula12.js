//            Métodos para promisse

function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");
    setTimeout(() => {
      resolve(msg + " Pass to promise");
    }, time);
  });
}

/* 

    // Promisse.all Promisse.race Promisse.resolve Promise.reject


 const promises = [
    wait('Promise 1', random(1, 5)),
    wait('Promise 2', random(1, 5)),
    wait('Promise 3', random(1, 5)),
    //wait(1000, 1000),
 ];

  
  Promise.all(promises)
 .then(function(value){
    console.log(value);     entrega os valores em uma array.
 })
.catch(function(error){
    console.log(error);
});

                      

Promise.race(promises)
.then(function(value){
   console.log(value);     // O primeiro a ser resolvido é entreg
})
.catch(function(error){
   console.log(error);
});




function downloadPage() {
  const cached = false;

  if (cached) {
    return Promise.resolve("Cached Page");
  } else {
    return wait('Ok', 3000);
  }
}

downloadPage()
.then(pageData => {
    console.log(pageData);
})
.catch(error => console.log(error));

*/

function downloadPage() {
  const cached = true;

  if (cached) {
    return Promise.reject("Cached Page");
  } else {
    return wait("Ok", 3000);
  }
}

downloadPage()
  .then((pageData) => {
    console.log(pageData);
  })
  .catch((error) => console.log(error));

// .resolve() promessa resolvida
// .reject() promessa rejeitada

//             Ansyc / Await

function random(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") reject("Bad Value");
      resolve(msg + " Pass to promise");
    }, time);
  });
}

/*

wait("Phase 1", random())
  .then((value) => {
    console.log(value);
    return wait("Phase 2", random());
  })
  .then((phase) => {
    console.log(phase);
    return wait("Phase 3", random());
  })
  .then((phase) => {
    console.log(phase);
    return phase
  })
    .then(phase => {
        console.log ('End');
    })
   .catch(error => console.log(error));

*/

async function execute() {
  try {
    const phase1 = wait("Phase 1", 1000);
    console.log(phase1);

    setTimeout(function () {
      console.log("I was pending", phase1);
    }, 1100);

    const phase2 = await wait("Phase", random());
    console.log(phase2);
    const phase3 = await wait("Phase 3", random());
    console.log(phase3);

    console.log("End");
  } catch (error) {
    console.log(error);
  }
}
execute();

// 3 estados de promises
// pendign -> pendente
// fullfilled -> resolvida
// reject -> rejeitada

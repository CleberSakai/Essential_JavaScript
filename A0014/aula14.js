//           fetch API

// fetch('Page1.html')
//    .then(answer => {
//      if(answer.status !== 200) throw new Error('My Error 404');
//        return answer.text();
//   })
//    .then(html => console.log(html))
//    .catch(e => console.error(e));

async function downloadPage(el) {
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();
        downloadResult(html);
    } catch(e) {
        console.log(e);
    }
}

function downloadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = reponse;
}

// fetch já retorna por padrão do JS uma Promise.
// a função .text() também.
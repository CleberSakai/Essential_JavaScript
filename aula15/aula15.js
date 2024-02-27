//fetch('people.json')
//.then(response => response.json())
//.then(json => donwloadPage(json));

axios('people.json')
.then(response => donwloadPage(response.data));


function donwloadPage(json) {
    const table = document.createElement('table');
    for(let person of json) {
        const tr = document.createElement('tr');

       let td = document.createElement('td');
        td.innerHTML = person.name;
        tr.appendChild(td)

       let td2 = document.createElement('td');
        td2.innerHTML = person.age;
        tr.appendChild(td2)

       let td3 = document.createElement('td');
        td3.innerHTML = person.salary;
        tr.appendChild(td3)

        table.appendChild(tr);

        const result = document.querySelector('.result');
        result.appendChild(table);
    }
}


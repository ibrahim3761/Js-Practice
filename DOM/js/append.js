const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = "Pahartoli bon";
placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');

console.log(mainContainer);


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Biriyani";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Borhani";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Korma";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly

const section2 = document.createElement('section');
section2.innerHTML = `
    <h1>My Dress List</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>Shoe</li>
    </ul>
    `;

mainContainer.appendChild(section2);



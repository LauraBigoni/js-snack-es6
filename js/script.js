/*
Snack 1:

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal

BONUS
Stampare in pagina oltre che in console!
*/

// # RECUPERO GLI ELEMENTI IN PAGINA
const display = document.getElementById('display');


// # CREO UN ARRAY DI OGGETTI DI BICICLETTE
const bici = [
    { nome: 'Tommasini', peso: 7.43 },
    { nome: 'Saccarelli', peso: 1.25 },
    { nome: 'Ridley', peso: 3.10 },
    { nome: 'Pedemonte', peso: 2.00 },
    { nome: 'Stelbel', peso: 0.96 },
    { nome: 'Vetta', peso: 1.98 },
    { nome: 'Trek', peso: 1.50 },
    { nome: 'MCipollini', peso: 4.10 },
    { nome: 'Formigli', peso: 1.40 },
    { nome: 'Bianchi', peso: 5.85 },
];

console.table(bici);


// # STAMPO IN CONSOLE LA BICI CON PESO MIN
let pesoMin = 0;

for (let i = 0; i < bici.length; i++) {
    console.log(bici[i]);
    if (bici[i].peso < bici[pesoMin].peso) {
        pesoMin = i;
    }
};

console.log(bici[pesoMin].peso);
console.log(bici[pesoMin].nome);

// Destructuring
// const {peso} = bici;
// const {nome} = minWeight;

// # soluzione alternativa con funzione
// const pesoMin = bici.reduce((val1, val2) => val1.peso < val2.peso ? val1 : val2);
// console.log(pesoMin);

// # FUNZIONE alternativa
// const getLowestItem = (arr, key) => {
//     let lowestItem = arr[0];
//     for ( let i = 1; i < arr.lenght; i++){
//         const item = arr[i];

//         if ( item[key] < lowestItem[key]) lowestItem = item;
//     }
//     return lowestItem;
// };


// # STAMPO IN PAGINA
display.innerHTML = `La bici col peso minore è: <strong> ${bici[pesoMin].nome.toUpperCase()} </strong> , con un peso di: <strong> ${bici[pesoMin].peso}</strong> kg`;


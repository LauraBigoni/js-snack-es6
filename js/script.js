/*
Snack 1:

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

// # CREO UN ARRAY DI OGGETTI DI BICICLETTE
const bikes = [
    { nome: 'Tommasini', peso: 0.43 },
    { nome: 'Saccarelli', peso: 1.25 },
    { nome: 'Ridley', peso: 1.10 },
    { nome: 'Pedemonte', peso: 2.00 },
    { nome: 'Stelbel', peso: 0.96 },
    { nome: 'Vetta', peso: 0.98 },
    { nome: 'Trek', peso: 1.50 },
    { nome: 'MCipollini', peso: 2.10 },
    { nome: 'Formigli', peso: 1.40 },
    { nome: 'Bianchi', peso: 1.85 },
];

console.table(bikes);

// # STAMPO IN CONSOLE LA BICI CON PESO MIN
const minWeight = bikes.reduce((val1, val2) => val1.peso < val2.peso ? val1 : val2);
console.log(minWeight)


//
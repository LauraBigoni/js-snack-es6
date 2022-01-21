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
const bikes = [
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
console.table(bikes);


// # STAMPO IN CONSOLE LA BICI CON PESO MIN
let minWeight = 0;
for (let i = 0; i < bikes.length; i++) {
const currentWeight = bikes[i].peso;
if (i == 0) {
    minWeight = currentWeight;
}
if (currentWeight < minWeight) {
    minWeight = currentWeight;
}
};
console.log(minWeight);


const bikeName = bikes.find(bikeName => bikeName.peso === minWeight.peso);
console.log(bikeName);



// # STAMPO IN PAGINA
display.innerHTML = `La bici col peso minore è:<strong> ${nome.toUpperCase()} </strong><br> con un peso di:<strong> ${minWeight} </strong>kg`; 

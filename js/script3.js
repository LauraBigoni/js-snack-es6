/*
SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

// # RECUPERO GLI ELEMENTI IN PAGINA
const display = document.getElementById('display');
const listaBici = document.createElement("div");
display.append(listaBici);


// # CREO UN ARRAY DI OGGETTI DI BICICLETTE
const bici = [
    { nome: 'Tommasini', peso: 7.43 },
    { nome: 'Saccarelli', peso: 1.25 },
    { nome: 'Ridley', peso: 3.10 },
    { nome: 'Pedemonte', peso: 2.00 },
    { nome: 'Stelbel', peso: 10.96 },
    { nome: 'Vetta', peso: 3.98 },
    { nome: 'Trek', peso: 11.50 },
    { nome: 'MCipollini', peso: 4.10 },
    { nome: 'Formigli', peso: 1.40 },
    { nome: 'Bianchi', peso: 5.85 },
];

console.table(bici);


// # CREO LA FUNZIONE CON FILTER
const getRange = (arr, min, max) => {
    return arr.filter((item) => (item.peso > min) && (item.peso < max));
}

const nuoveBici = getRange(bici,2,5);
console.log(nuoveBici);

// # CREO LA FUNZIONE CON FOR EACH E STAMPO IN PAGINA
nuoveBici.forEach((element) => {
    console.log(`${element.nome} con un peso di: ${element.peso}`);
    listaBici.innerHTML += `<div><strong>${element.nome}</strong> con un peso di: <strong>${element.peso}</strong></div>`;
});
/*
SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

// # RECUPERO GLI ELEMENTI IN PAGINA
const display = document.getElementById('display');


const studenti = [
    { id: 0, nome: 'luca bianchi', voto: 0 },
    { id: 0, nome: 'marco de iulio', voto: 0 },
    { id: 0, nome: 'stefano cesaroni', voto: 0 },
    { id: 0, nome: 'anna mazzoni', voto: 0 },
    { id: 0, nome: 'ilaria marini', voto: 0 },
    { id: 0, nome: 'stefano truncellito', voto: 0 },
    { id: 0, nome: 'davide sesto', voto: 0 },
    { id: 0, nome: 'stefania rosa', voto: 0 },
    { id: 0, nome: 'valentino rossi', voto: 0 },
    { id: 0, nome: 'maria lo iudice', voto: 0 },
];

console.log(studenti);


// # FUNZIONE NUM RANDOM
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// # GENERO NUM RANDOM DA INSERIRE NELLE PROPRIETA'
let id;
let voto;

for (let i = 0; i < studenti.length; i++) {
    let studente = studenti[i];
    studente.id = getRandomNumber(100, 150);
    studente.voto = getRandomNumber(10, 100);
}

console.table(studenti);


// # STUDENTI CON VOTI SUPERIORI A 70
// Funzione per recuperare il voto
const getVote = (arr, min) => {
    return arr.filter((item) => (item.voto > min));
}

console.log(getVote(studenti, 70))


// # STUDENTI ID MAGGIORE DI 120
const getId = (arr, min) => {
    return arr.filter((item) => (item.id > min));
}

console.log(getId(studenti, 120));


// # CREO UNA FUNZIONE PER DOPPIO CONTROLLO ID > 70 E ID > 120
const getIdAndVote = (arr, val1, val2) => {
    return arr.filter((item) => (item.id > val1 && item.voto > val2));
};
console.log(getIdAndVote(studenti, 120, 70))


// # CREO UNA FUNZIONE PER CAPITALIZE
const capitalize = (phrase) => {
    return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};


// # METTO I NOMI CON L'INIZIALE IN MAIUSCOLO
// # USO FOR EACH PER STAMPARE IN PAGINA I LORO DATI
(getIdAndVote(studenti,120,70)).forEach((element) => {
    element.nome = capitalize(element.nome);

    console.log(`${element.nome} (id: ${element.id}), con un voto di: ${element.voto}`);

    display.innerHTML += `<div><strong>${element.nome}</strong> ( id n: <strong>${element.id}</strong>) con un voto di: <strong>${element.voto}</strong><hr></div>`;
});
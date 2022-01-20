/*
Snack2:

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS
Stampare in pagina oltre che in console!
*/
// # RECUPERO GLI ELEMENTI IN PAGINA
const display = document.getElementById('display');


// # CREO UN ARRAY DI OGGETTI DI SQUADRE DI CALCIO
const footballTeams = [
    { nome: 'Salernitana', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Inter', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Fiorentina', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Milan', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Napoli', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Empoli', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Udinese', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Lazio', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Bologna', punti_fatti: 0, falli_subiti: 0 },
    { nome: 'Roma', punti_fatti: 0, falli_subiti: 0 },
];
console.table(footballTeams);


// # FUNZIONE NUM RANDOM
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// # GENERO NUM RANDOM DA INSERIRE NELLE PROPRIETA'
let punti_fatti;
let falli_subiti;
for (let i = 0; i < footballTeams.length; i++) {
    let currentItem = footballTeams[i];
        punti_fatti = getRandomNumber(1,100);
        falli_subiti = getRandomNumber(1,50);
        currentItem.punti_fatti = punti_fatti;
        currentItem.falli_subiti = falli_subiti;
    }
console.table(footballTeams);


// # CREO UN NUOVO ARRAY CON SOLO DUE PROPRIETA'
const newTeamsList = [];
for (let i = 0; i < footballTeams.length; i++) {
    let currentItem = footballTeams[i];
    const {nome, falli_subiti} = currentItem;
    const newObj = {
        nome: nome,
        falli_subiti: falli_subiti
    }
    newTeamsList.push(newObj);
}
console.table(newTeamsList);


// # STAMPO IN PAGINA
// display.innerHTML = `${}`;
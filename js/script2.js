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


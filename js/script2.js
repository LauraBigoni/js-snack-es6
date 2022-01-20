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
    { nome: 'Salernitana', punti_fatti: 11, falli_subiti: 12 },
    { nome: 'Inter', punti_fatti: 80, falli_subiti: 14 },
    { nome: 'Fiorentina', punti_fatti: 31, falli_subiti: 7 },
    { nome: 'Milan', punti_fatti: 63, falli_subiti: 9 },
    { nome: 'Napoli', punti_fatti: 59, falli_subiti: 11 },
    { nome: 'Empoli', punti_fatti: 19, falli_subiti: 6 },
    { nome: 'Udinese', punti_fatti: 15, falli_subiti: 10 },
    { nome: 'Lazio', punti_fatti: 41, falli_subiti: 18 },
    { nome: 'Bologna', punti_fatti: 21, falli_subiti: 5 },
    { nome: 'Roma', punti_fatti: 58, falli_subiti: 13 },
];
console.table(footballTeams);
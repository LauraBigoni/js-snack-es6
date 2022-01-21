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
    { nome: 'Salernitana', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Empoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Udinese', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Lazio', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Bologna', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
];

console.table(footballTeams);


// # FUNZIONE NUM RANDOM
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// # GENERO NUM RANDOM DA INSERIRE NELLE PROPRIETA'
let puntiFatti;
let falliSubiti;

for (let i = 0; i < footballTeams.length; i++) {
    let team = footballTeams[i];
    team.puntiFatti = getRandomNumber(1, 100);
    team.falliSubiti = getRandomNumber(1, 50);
}

console.table(footballTeams);


// # CREO UN NUOVO ARRAY CON SOLO DUE PROPRIETA'
const newTeamsList = [];

for (let i = 0; i < footballTeams.length; i++) {
    let Team = footballTeams[i];
    const { nome, falliSubiti } = Team;
    newTeamsList.push({ nome, falliSubiti });
};

console.table(newTeamsList);


// # STAMPO IN PAGINA
let content = '';

for (let i = 0; i < newTeamsList.length; i++) {
    let currentScore = newTeamsList[i];
    content += `<ul class="list-unstyled">`;
    for (let key in currentScore) {
        content += `<li>${key + ' ' + 'squadra'} : <span class="fw-bolder">${currentScore[key]}</span></li>`;
    }
    content += `</ul>`;
}

display.innerHTML = content;


// # STAMPIAMO IN TABELLA
// const tableData = document.querySelector('tbody');
// let content = ';'
// for (let i = 0; i < newTeamsList.lenght; i++) {
//     const {nome, falliSubiti} = newTeamsList[i];
//     content += `
//     <tr>
//         <td>${nome}</td>
//         <td>${falliSubiti}</td>
//     </tr>
//     `;
//     console.log(nome);
//     console.log(falliSubiti);
// };

// tableData.innerHTML = content;
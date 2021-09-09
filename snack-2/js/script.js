//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

/**
 * FUNZIONI
 */
//numero random
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



/**
 * PROGRAMMA 
 */

const squadreCalcio = [
    {
        nome: "A.S. Tronzi",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "AS Intomatici",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Avellino Banfi",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Rubentus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Herta Mpone",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

for (let i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].puntiFatti = getRandom(1, 70);
    squadreCalcio[i].falliSubiti = getRandom(1, 150);
};

console.log(squadreCalcio);




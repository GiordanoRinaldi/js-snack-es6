//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore

//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var biciclette = [
    {
        nome: "decathlon",
        peso: 7,
    },
    {
        nome: "bici rossi",
        peso: 10
    },
    {
        nome: "porsche",
        peso: 11
    },
    {
        nome: "xiaomi",
        peso: 8
    },
];

var bicileggera;

for (var i = 0; i < biciclette.length; i++) {
    if (i == 0) {
        bicileggera = biciclette[i];
    } else if (bicileggera.peso > biciclette[i].peso) {
        bicileggera = biciclette[i];
    };
};

var {nome, peso} = bicileggera;

console.log(`La bicicletta piu leggera é la bici ${nome} col peso di ${peso}kg`);
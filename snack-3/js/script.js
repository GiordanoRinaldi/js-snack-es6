//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
//quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione
//compresa tra “a” e “b”

let array = [1, 2, 3, 4, 5, 6]

let numA = 3;

let numB = 6;

const newArray = (arr, a, b) =>  arr.filter((elm, i) => i>=a && i<= b);


console.log(newArray(array, numA, numB));

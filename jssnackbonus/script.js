
/*
Snack Bonus
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let numDispari = [];


for (let i = 1; i <= 6; i++) {

    let numDigitato = Number(prompt('Digita un numero'));

    if (numDigitato%2 != 0) {
        console.log(numDigitato + ' è dispari');
        numDispari.push(numDigitato);    
    }
    
}

console.log(numDispari);
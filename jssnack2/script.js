
/*
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
let word1 = prompt('Digita la prima parola');
let word2 = prompt ('Digita la seconda parola');
let resultMessage;

if (word1.length > word2.length) {
    resultMessage = ('Parole in ordine di lunghezza: ' + word2 + ' ' + word1);
} else if (word1.length < word2.length) {
    resultMessage = ('Parole in ordine di lunghezza: ' + word1 + ' ' + word2);
} else {
    resultMessage = (word1 + ' e ' + word2 + ' hanno la stessa lunghezza');
}

console.log(resultMessage);
alert(resultMessage);
*/

/*
Bonus:
rifarlo usando ciclo while
*/


let i = 0;
let words = [];


while (i <= 1) {

    words[i] = prompt ('Digita una parola');
    i++

}

if (words[0].length > words[1].length) {
    console.log(words[0]);
} else if (words[0].length < words[1].length) {
    console.log(words[1]);
} else {
    console.log('parole lunghe uguali');
}
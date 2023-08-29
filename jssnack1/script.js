
/*
Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let number1 = prompt('Inserisci il primo numero');
let number2 = prompt ('Inserisci il secondo numero');
let resultMessage;

if (Number(number1) > Number(number2)) {
    resultMessage = (number1 + ' è maggiore di ' + number2);
} else if (Number(number1) < Number(number2)) {
    resultMessage = (number2 + ' è maggiore di ' + number1);
} else {
    resultMessage = ('I numeri sono uguali');
}

console.log(resultMessage);
alert(resultMessage);

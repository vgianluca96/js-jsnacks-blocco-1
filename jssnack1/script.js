
/*
Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*
let number1 = prompt('Inserisci il primo numero');
let number2 = prompt ('Inserisci il secondo numero');
let resultMessage;

if (Number(number1) > Number(number2)) {
    resultMessage = (number1 + ' è il maggiore');
} else if (Number(number1) < Number(number2)) {
    resultMessage = (number2 + ' è il maggiore');
} else {
    resultMessage = ('I numeri sono uguali');
}

console.log(resultMessage);
alert(resultMessage);
*/


/*
Bonus:
rifarlo usando ciclo while
*/

let numbers = [];
let i = 0;

while (i <= 1) {

    numbers[i] = Number(prompt('Inserisci un numero'));

    if (isNaN(numbers[i])) {
        console.log('Devi digitare un numero');
    } else {
        i++
    }
}

if (numbers[0] > numbers[1]) {
    console.log(numbers[0]);
} else if (numbers[0] < numbers[1]) {
    console.log(numbers[1]);
} else {
    console.log('sono uguali');
}
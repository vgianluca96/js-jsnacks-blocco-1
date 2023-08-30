
/*
Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
let numbersSum = 0;
let ulElem = document.querySelector('ul');
let liElem;

for (let i = 1; i<= 10; i++) {

    let number = Number(prompt('Digita un numero'));
    console.log(number);
    liElem = `<li>${number}</li>`;
    ulElem.insertAdjacentHTML('beforeend',liElem);

    numbersSum += number;

}

liElem = `<li>Somma numeri inseriti: ${numbersSum}</li>`;
ulElem.insertAdjacentHTML('beforeend',liElem);
console.log('Somma numeri inseriti: ' + numbersSum);
*/

/*
Bonus:
rifarlo usando ciclo while
*/

let numbersSum = 0;
let i = 0;

while (i < 10) {

    let number = Number(prompt('Digita un numero'));

    if (isNaN(number)) {
        alert('Devi digitare un numero');
    } else {
        i++;
        numbersSum +=number;
    }
}

console.log(numbersSum);
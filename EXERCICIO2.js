const prompt = require('prompt-sync')();

const number1 = parseInt(prompt('Digite o valor do primeiro número: '));

const number2 = parseInt(prompt('Digite o valor do segundo número: '));

const number3 = parseInt(prompt('Digite o valor do terceiro número: '));

if (number1 <= number2 && number1 <= number3) {
    console.log(`${number1}`)
    if (number2 <= number3) {
        console.log(` ${number2} \n${number3}`);
    } else {
        console.log(`${number3} \n${number2}`);
    }
} else if (number2 <= number3) {
    console.log(`${number2}`)
    if (number1 <= number3) {
        console.log(`${number1} \n${number3}`);
    } else {
        console.log(`${number3} \n${number1}`);
    }
} else {
    console.log(`${number3}`)
    if (number2 <= number1) {
        console.log(`${number2} \n${number1}`);
    } else {
        console.log(`${number1} \n${number2}`);
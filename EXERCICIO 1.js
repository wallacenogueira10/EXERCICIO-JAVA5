const prompt = require('prompt-sync')()

const numero1 = parseInt(prompt('Digite o valor do primeiro número: '));

const numero2 = parseInt(prompt('Digite o valor do segundo número: '));

const numero3 = parseInt(prompt('Digite o valor do terceiro número: '));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log(`O maior número é: ${numero1}`);

} else if (numero2 >= numero3) {
    console.log(`O maior número é: ${numero2}`);

} else {
    console.log(`O maior número é: ${numero3}`);

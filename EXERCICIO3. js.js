
const prompt = require('prompt-sync')();

const age = parseInt(prompt('Digite qual é sua idade: '));

if (age >= 10 && age <= 14) {
    console.log('Você está na categoria infantil\n');

} else if (age >= 15 && age <= 17) {
    console.log('Você está na categoria juvenil');

} else if (age >= 18 && age <= 25) {
    console.log('Você está na categoria adulto');
} else {
    console.log('Você inseriu um valor que não se enquadra nas categorias');
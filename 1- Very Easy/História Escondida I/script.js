/**
 * Escreve uma função que recebe uma string e retorna a
 * maior letra segundo a ordem alfabética em minúsculo.
 * Assuma que a string não possui nenhuma letra com acento,
 * número ou caractere especial, apenas letras e espaços.
 */

function maiorLetra(str) {
    const strLow = str.toLowerCase();
    const letras = strLow.split('');
    const ordenarArray = letras.sort();

    return ordenarArray[ordenarArray.length - 1];
}


console.log(maiorLetra('Lorem ipsum dolore sec avanti')); // v
console.log(maiorLetra('Hello')); // o
console.log(maiorLetra('May the force be with you')); // y
console.log(maiorLetra('It s over nine thousand')); // v
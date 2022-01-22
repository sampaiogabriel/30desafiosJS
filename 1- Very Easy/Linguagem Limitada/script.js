/**
 * Escreve uma função que recebe
 * um array e retorne um novo array
 * com todas posições invertidas do original sem alterá-lo. Nâo
 * utilize os métodos globais do objeto global Array do JS
 * (reserve, map, forEach, etc)
 */

function arrayReverse(array) {

    let arrayRev = [];

    for (let i = array.length - 1; i > -1; i--) {
        arrayRev.push(array[i]);
    }

    return arrayRev;
}

console.log(arrayReverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(arrayReverse(['Oh', 'Hi', 'Mark']));
console.log(arrayReverse([false, true, true, true]));
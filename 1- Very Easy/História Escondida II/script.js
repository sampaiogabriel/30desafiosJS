/**
 * Escreva uma função que recebe uma string e retorna cada palavra da 
 * string intertida e em letras minúsculas, porém com as palavras na mesma ordem
 * Assuma que a string não possui nenhuma letra com acento, número ou caractere especial
 * apenas letras e espaços.
 */

function revertPhrase(str) {
    let strReverted = str.split(' ');
    return strReverted.map(word => {
        return word.split('').reverse().join('');
    });
}

console.log(revertPhrase('Lorem ipsum dolore sec avanti'));
// merol muspi erolod ces itnava
console.log(revertPhrase('This is an apple'));
// siht si na elppa
console.log(revertPhrase('May the force be with you'));
// yam eht ecrof eb htiw uoy
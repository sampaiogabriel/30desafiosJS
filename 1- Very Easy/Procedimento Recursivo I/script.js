/**
 * Escreva uma função que recebe um número e retorna uma 
 * quantidade equilavente de "chunks" separados por traço "-"
 * sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc)
 */

function returnChunks(cont) {
    if (cont === 0) {
        return '';
    }

    if (cont === 1) {
        return 'chunk';
    } else {
        return 'chunk-' + returnChunks(cont - 1)
    }

}

console.log(returnChunks(4));
console.log(returnChunks(1));
console.log(returnChunks(8));
console.log(returnChunks(2));
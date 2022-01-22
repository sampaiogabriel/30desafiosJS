/**
 * Escreva uma função que recebe um número e retorna o seu fatorial sem utilizar
 * nenhuma estrutura de repetição (while, dowhile, for, etc). O fatorial de um número
 * é igual a sua multiplicação de todos os inteiros positivos menores ou iguais a ele.
 * Ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.
 */

function fatorial(num) {

    const bigNum = BigInt(num);

    if (bigNum === 0n) {
        return 1n
    } else {
        return bigNum * fatorial(bigNum - 1n)
    }
}

// !5 = 5 x 4 x 3 x 2 x 1
// !4 = 4 x 3 x 2 x 1
// !5 = 5 * 4!

// Necessário usar Big Int

console.log(fatorial(5));
// 120n
console.log(fatorial(0));
// 1n
console.log(fatorial(9));
// 362880n
console.log(fatorial(32));
// 263130836933693530167218012160000000n


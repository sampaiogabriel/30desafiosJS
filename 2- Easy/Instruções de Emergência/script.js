/**
 * Escreve uma função que recebe uma string,
 * verifica se ela possui a mesma quantidade de
 * cada letra que a compôe e retorna true caso
 * possua ou false caso não possua
 */

function verifyLettersEquals(params) {

    const charCount = {};

    for (let i = 0; i < params.length; i++) {
        charCount[params[i]] = charCount[params[i]] ? charCount[params[i]] + 1 : 1;
    }

    return Object.values(charCount).every((count, index, array) => index !== 0 ? count === array[index - 1] : true);
}

console.log(verifyLettersEquals('This is Thee'));
// true
console.log(verifyLettersEquals('ssd'));
// false
console.log(verifyLettersEquals('Lorem ipsum'));
// false
console.log(verifyLettersEquals('gaga'));
// true
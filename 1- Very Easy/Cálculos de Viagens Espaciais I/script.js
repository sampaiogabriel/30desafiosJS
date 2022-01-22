/**
 * Escreve uma função que recebe 
 * um número inteiro qualquer, eleve ao quadrado
 * cada um de seus algarismos e depois
 * concantene o resultado em um único número inteiro.
 */

function calc(...num) {
    const str = num.toString();

    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(Math.pow(Number.parseInt(str[i]), 2));
    }

    return result;
}

console.log(calc(3514));
console.log(calc(9945571));
console.log(calc(24));
console.log(calc(745821698));

// Obs: Decidi não utilizar as HOF do JS
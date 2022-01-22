//  Escreva uma função que recebe um número qualquer
//  de números inteiros como argumentos e retorne a
//  média aritmética entre eles

function media(...params) {
    let total = params.reduce((acc, n) => {
        acc = acc + n;
        return acc
    }, 0)

    return (total / params.length);
}

console.log(media(10, 9, 6, 8, 9, 1, 5, 7));

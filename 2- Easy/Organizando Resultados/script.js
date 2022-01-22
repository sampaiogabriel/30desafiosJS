/**
 * Escreve uma função que recebe um array bidimensional de inteiros
 * e retorna um único array contendo todos os números em ordem ascendente
 */

function matrixForArray(...params) {
    let newArray = [];

    params.map(n1 => {
        n1.map(n2 => {
            n2.map(n3 => {
                newArray.push(n3)
            })
        })
    })

    return newArray.sort((a, b) => a - b);
}

console.log(
    matrixForArray(
        [
            [1, 5, 3],
            [6, 19, 11],
            [47, 128, 5],
            [1, 93, 57, 42, 103]
        ]
    )
);

//// Resolução do Professor

function flatAndSort(arr) {
    const numbers = []

    arr.forEach(list => {
        numbers.push(...list)
    });

    return numbers.sort((a, b) => a - b);
}

console.log(
    flatAndSort(
        [
            [1, 5, 3],
            [6, 19, 11],
            [47, 128, 5],
            [1, 93, 57, 42, 103]
        ]
    )
);
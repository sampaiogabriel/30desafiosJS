/**
 * Escreve uma função que recebea um par ordenado (x , y) e retorne um array de pares (x , y)
 * onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente.
 * Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois o valor de x.
 * Apenas o quadrante onde x e y são positivos.
 */

function coordenadas(coord) {
    let resultado = []

    for (let i = 0; i <= coord[0]; i++) {
        for (let j = 0; j <= coord[1]; j++) {
            resultado.push([i, j]);
        }
    }

    return resultado;
}

console.log(coordenadas([2, 2]));
// [[0,0], [0, 1], [1, 1], [1, 2], [2, 0], [2, 1], [2 , 2]]


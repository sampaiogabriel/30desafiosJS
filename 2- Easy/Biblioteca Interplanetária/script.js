/**
 * Escreve uma função que recebe uma string contendo um nome completo e
 * retorna uma string com todos os nomes, exceto o último, abreviados e o últim nome
 * em letras maiúsculas antes das abreviações separado por vírgula.
 */

function sortFullName(params) {
    let arraySort = params.split(' ');
    let initials = '';

    for (let i = 0; i < arraySort.length - 1; i++) {
        initials += `${arraySort[i][0]}. `
    }

    return ` ${arraySort[arraySort.length - 1].toUpperCase()}, ${initials.toUpperCase()} `
}

console.log(sortFullName('Isaac Larrubia Ferreira Pontes'));
// 'PONTES, I. L . F.'
console.log(sortFullName('Gabriel Sampaio Lima Araújo'));
// 'ARAÚJO, G. S. L.
console.log(sortFullName('John Ronald Reuel Tolkien'));
// 'TOLKIEN, J. R. R.
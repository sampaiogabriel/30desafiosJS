/**
 * Escreva uma função que receba um valor inteiro e retorn e a 
 * quantidade de cada moeda para se chegar ao valor. 
 * Deve-se sempre priorizar as moedas de maior valor (o máximo possível de moedas
 *  de 500, depois o máximo possível de moedas de 100, etc)
 */

// Moedas: 1, 5, 10, 25, 100, 500 créditos.

function trocoMoeda(num) {
    let troco = {
        '1': 0,
        '5': 0,
        '10': 0,
        '25': 0,
        '100': 0,
        '500': 0
    }

    let rest = num;

    troco['500'] = Math.floor(rest / 500);
    rest -= 500 * Math.floor(rest / 500);

    troco['100'] = Math.floor(rest / 100);
    rest -= 100 * Math.floor(rest / 100);

    troco['25'] = Math.floor(rest / 25);
    rest -= 25 * Math.floor(rest / 25);

    troco['10'] = Math.floor(rest / 10);
    rest -= 10 * Math.floor(rest / 10);

    troco['5'] = Math.floor(rest / 5);
    rest -= 5 * Math.floor(rest / 5);

    troco['1'] = Math.floor(rest / 1);
    rest -= 1 * Math.floor(rest / 1);

    return troco;
}

console.log('501', trocoMoeda(501));
console.log('478', trocoMoeda(478));
console.log('384', trocoMoeda(3840));
console.log('50', trocoMoeda(50));

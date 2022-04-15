function digitarInput(valor) {
    let final = caixaInput.value[caixaInput.value.length - 1];

        //deletar valor no input
    if (valor === 'del') {
        caixaInput.value = caixaInput.value.substr(0, caixaInput.value.length - 1);

        // todos os números serão adicionados sem restrição
    } else if (typeof valor == 'number') {
        caixaInput.value += valor;

        //proibição de operadores iguais
    } else if (final === '+' || final === '-' || final === '.' || final === '*' || caixaInput.value === '') {
        console.error('Não é possível adicionar operadores no início ou em sequência.');

        //adicionando operadores no input
    } else if (valor === '+' || valor === '-' || valor === '*') {
        caixaInput.value += valor;

        //proibição de dois '.' por bloco no input
    } else if (valor === '.') {
        let operador = 0;
        let ponto = 0;
        for (let contador = caixaInput.value.length - 1; 0 <= contador; contador--) {
            let posicao = caixaInput.value[contador]
            if (posicao === '+' || posicao === '-' || posicao === '*') {
                operador = 1;
                break;
            }
            if (posicao === '.') {
                ponto = 1;
                break;
            }
        }
        if (operador === 1 && ponto === 0 || ponto === 0 && operador === 0) {
            caixaInput.value += valor

        } else {
            console.error('Não é possível adicionar mais de um "." por bloco.')
        }
    } else {
        console.error('Não reconhecido.')
    }
}

let caixaInput = document.querySelector('#input');
let numerosInput = document.querySelectorAll('.tecla');
let caracteresEspeciais = document.querySelectorAll('.simbolo');

for (let contador = 0; contador < numerosInput.length; contador++) {
    let tecla = numerosInput[contador];
    let numero = tecla.value;

    tecla.onclick = function () {

        digitarInput(Number(numero));

    }
}
       
for (let contador = 0; contador < caracteresEspeciais.length; contador++) {
    let tecla = caracteresEspeciais[contador];
    let simbolo = tecla.value;

    tecla.onclick = function () {

        let final = caixaInput.value[caixaInput.value.length - 1];
        if (simbolo !== '=') {
            digitarInput(simbolo);

        }
        else if (final === '+' || final === '-' || final === '.' || final === '*') {
            console.error('não é possivel apresentar o resultado.');

        }
        else {
            caixaInput.value = eval(caixaInput.value);

        }
    }
}




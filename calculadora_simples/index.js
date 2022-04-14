function digitarInput(valor) {

    let final = caixaInput.value[caixaInput.value.length - 1];
    if (valor === 'del') {
        caixaInput.value = caixaInput.value.substr(0, caixaInput.value.length - 1);

    } else if(typeof valor == 'number'){
        caixaInput.value += valor

    } else if(final === '+' || final === '-' || final === '.' || final === '*'){
        console.error('não se pode colocar 2 operadores seguidos ou o "." depois de um operador')
        
    } else {
        caixaInput.value += valor
    
    }
}

let caixaInput = document.querySelector('#input');
let numerosInput = document.querySelectorAll('.tecla');
let caracteresEspeciais = document.querySelectorAll('.simbolo');

for (let contador = 0; contador < numerosInput.length; contador++) {
    let tecla = numerosInput[contador];
    let numero = tecla.value;

    tecla.onclick = function () {
        
        digitarInput(Number(numero))

    }
}

for (let contador = 0; contador < caracteresEspeciais.length; contador++) {
    let tecla = caracteresEspeciais[contador];
    let simbolo = tecla.value;

    tecla.onclick = function () {

        let final = caixaInput.value[caixaInput.value.length - 1];
        if (simbolo !== '=')
            digitarInput(simbolo)
        else if (final === '+' || final === '-' || final === '.' || final === '*')
            console.error('não é possivel apresentar o resultado.')
        else
            caixaInput.value = eval(caixaInput.value)
    }

}



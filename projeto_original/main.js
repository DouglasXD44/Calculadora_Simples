function tocaSomPom(idAudios) {
    const som = document.querySelector(idAudios);

    if (som && som.localName === 'audio') {

        som.play();

    } else {
        alert('nao encontrado ou tag errada.');
    }

}

const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const instrumendo = tecla.classList[1];
    const idAudio = `#som_${instrumendo}`;

    tecla.onclick = function () {
        tocaSomPom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}


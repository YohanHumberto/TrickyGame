let GANADOR1 = 0;
let GANADOR2 = 0;
let contenedor = document.getElementById('container_hijo2');
let iterador = 1;
let span = '<span id="equi1" class="iconify" data-icon="ion:ellipse-outline" data-inline="false" style="color: rgb(115, 255, 0);"></span>';
let x = '<span id="equi2" class="iconify" data-icon="ion:close-sharp" data-inline="false" style="color: rgb(255, 0, 0);"></span>'
let estadoDelJugador = document.getElementById('equi1');
let span_texto = document.getElementById('textodemierda');
let botonvolverAJugar = document.getElementById('volverAJugar');


function disabledButton() {
    botones1234 = [];
    for (let i = 1; i <= 9; i++) {
        botones1234[i] = document.getElementById(`div${i}`);
        botones1234[i].disabled = true;
    }
}
function ActivarButton() {
    botones1234 = [];
    for (let i = 1; i <= 9; i++) {
        botones1234[i] = document.getElementById(`div${i}`);
        botones1234[i].disabled = false;
    }
}

document.addEventListener('click', function (e) {

    const JUGADOR1 = document.getElementById('GANADOR11');
    const JUGADOR2 = document.getElementById('GANADOR22');

    const ele = e.target.id;
    let pro = document.getElementById(ele).parentElement;

    if (pro.id == 'container_hijo2') {
        if (iterador % 2 == 0) {
            if (e.target.matches('#div1')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div2')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div3')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div4')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div5')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div6')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div7')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div8')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
            if (e.target.matches('#div9')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = span;
                    e.target.innerHTML = x;
                    e.target.value = "x";
                }
            }
        } else {
            if (e.target.matches('#div1')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div2')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div3')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div4')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div5')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div6')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div7')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div8')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
            if (e.target.matches('#div9')) {
                if (e.target.value == "") {
                    iterador++;
                    estadoDelJugador.innerHTML = x;
                    e.target.innerHTML = span;
                    e.target.value = "o";
                }
            }
        }

    }

    let arr = [document.getElementById('div1').value, document.getElementById('div2').value, document.getElementById('div3').value,
    document.getElementById('div4').value, document.getElementById('div5').value, document.getElementById('div6').value,
    document.getElementById('div7').value, document.getElementById('div8').value, document.getElementById('div9').value];

    if (e.target.matches('#volverAJugar')) {
        botonvolverAJugar.style = "display:none;";
        for (let i = 0; i < 9; i++) {
            arr.shift();
            document.getElementById(`div${i + 1}`).innerHTML = ``;
            document.getElementById(`div${i + 1}`).value = ``;
        }
        estadoDelJugador.innerHTML = span;
        span_texto.innerHTML = `Turno de: `;
        iterador = 1;
        ActivarButton();
    }

    if (arr[0] === arr[1] && arr[0] === arr[2]) {
        if (arr[0] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            disabledButton();
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[0] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[3] === arr[4] && arr[3] === arr[5]) {
        if (arr[3] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[3] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[6] === arr[7] && arr[6] === arr[8]) {
        if (arr[6] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[6] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[0] === arr[3] && arr[0] === arr[6]) {
        if (arr[0] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[0] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[1] === arr[4] && arr[1] === arr[7]) {
        if (arr[1] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[1] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[2] === arr[5] && arr[2] === arr[8]) {
        if (arr[2] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[2] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[0] === arr[4] && arr[0] === arr[8]) {
        if (arr[0] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[0] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else if (arr[2] === arr[4] && arr[2] === arr[6]) {
        if (arr[2] === 'o') {
            estadoDelJugador.innerHTML = span;
            span_texto.innerHTML = `Ganador :`;
            botonvolverAJugar.style = "display: unset;";
            GANADOR1++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        } else if (arr[2] === 'x') {
            span_texto.innerHTML = `Ganador :`;
            estadoDelJugador.innerHTML = x;
            botonvolverAJugar.style = "display: unset;";
            GANADOR2++;
            JUGADOR1.innerHTML = GANADOR1;
            JUGADOR2.innerHTML = GANADOR2;
            disabledButton();
        }
    } else {
        let conInterno = 0;
        for (let i = 0; i < 9; i++) {
            if (arr[i] !== '') {
                conInterno++;
            }
        }
        if (conInterno === 9) {
            botonvolverAJugar.style = "display: unset;";
            span_texto.innerHTML = `Empate..`;
            estadoDelJugador.innerHTML = "";
        }
    }
});
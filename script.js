let jugador, vencedor = null;
let jugadorSeleccionado = document.getElementById('jugador-seleccionado');
let vencedorSeleccionado = document.getElementById('vencedor-seleccionado');
let cuadrados = document.getElementsByClassName('cuadrado');


mudarJugador('x');

function escolherCuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    let cuadrado = document.getElementById(id);
    if (cuadrado.innerHTML !== '-') {
        return;
    }

    cuadrado.innerHTML = jugador;
    cuadrado.style.color = '#000';

    if (jugador === 'x') {
        jugador = 'O';
    } else {
        jugador = 'x';
    }

    mudarJugador(jugador);
    revisaVencedor();
}

function mudarJugador(valor) {
    jugador = valor;
    jugadorSeleccionado.innerHTML = jugador;
}

function revisaVencedor() {
    let cuadrado1 = document.getElementById(1);
    let cuadrado2 = document.getElementById(2);
    let cuadrado3 = document.getElementById(3);
    let cuadrado4 = document.getElementById(4);
    let cuadrado5 = document.getElementById(5);
    let cuadrado6 = document.getElementById(6);
    let cuadrado7 = document.getElementById(7);
    let cuadrado8 = document.getElementById(8);
    let cuadrado9 = document.getElementById(9);

    if (revisaSecuencia(cuadrado1, cuadrado2, cuadrado3)) {
        cambiaColorCuadrado(cuadrado1, cuadrado2, cuadrado3);
        mudarVencedor(cuadrado1);
        return;
    }
    if (revisaSecuencia(cuadrado4, cuadrado5, cuadrado6)) {
        cambiaColorCuadrado(cuadrado4, cuadrad5, cuadrado6);
        mudarVencedor(cuadrado4);
        return;
    }
    if (revisaSecuencia(cuadrado7, cuadrado8, cuadrado9)) {
        cambiaColorCuadrado(cuadrado7, cuadrado8, cuadrado9);
        mudarVencedor(cuadrado7);
        return;
    }
    if (revisaSecuencia(cuadrado1, cuadrado4, cuadrado7)) {
        cambiaColorCuadrado(cuadrado1, cuadrado4, cuadrado7);
        mudarVencedor(cuadrado4);
        return;
    }
    if (revisaSecuencia(cuadrado3, cuadrado5, cuadrado7)) {
        cambiaColorCuadrado(cuadrado3, cuadrado5, cuadrado7);
        mudarVencedor(cuadrado3);
        return;
    }
    if (revisaSecuencia(cuadrado2, cuadrado5, cuadrado8)) {
        cambiaColorCuadrado(cuadrado2, cuadrado5, cuadrado8);
        mudarVencedor(cuadrado2);
        return;
    }
    if (revisaSecuencia(cuadrado3, cuadrado6, cuadrado9)) {
        cambiaColorCuadrado(cuadrado3, cuadrado6, cuadrado9);
        mudarVencedor(cuadrado3);
        return;
    }
    if (revisaSecuencia(cuadrado1, cuadrado5, cuadrado9)) {
        cambiaColorCuadrado(cuadrado1, cuadrado5, cuadrado9);
        mudarVencedor(cuadrado1);

    }
}

function cambiarVencedor(cuadrado) {
    vencedor = cuadrado.innerHTML;
    vencedorSeleccionado.innerHTML = vencedor;
}

function cambiaColorCuadrado(cuadrado1, cuadrado2, cuadrado3) {
    cuadrado1.style.background = '#0f0';
    cuadrado2.style.background = '#0f0';
    cuadrado3.style.background = '#0f0';
}

function revisaSecuencia(cuadrado1, cuadrado2, cuadrado3) {
    let dioIgual = false;

    if (cuadrado1.innerHTML !== '-' && cuadrado1.innerHTML === cuadrado2.innerHTML && cuadrado2.innerHTML === cuadrado3.innerHTML) {
        dioIgual = true;
    }
    return dioIgual;
}
function reinicio() {
    vencedor = null;
    vencedorSeleccionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let cuadrado = document.getElementById(i);
        cuadrado.style.background = '#eee';
        cuadrado.style.color = '#eee';
        cuadrado.innerHTML = '-';

    }
    mudarJugador('x')
}
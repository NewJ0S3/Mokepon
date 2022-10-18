function aleatorio(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min )
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
         resultado = "Papel 📋"
     } else if (jugada == 3) {
          resultado = "Tijeras ✂"
    } else {
        resultado = "MALA ELECCION"
    }
        return resultado
}
// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0

while (victorias < 3 && derrotas < 3 ) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera")
    //alert("Elejiste " + jugador)

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE
    if(pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE")
        victorias = victorias + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        victorias = victorias + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        victorias = victorias + 1
    } else {
        alert("PERDISTE")
        derrotas = derrotas + 1
    }

}
alert("Ganaste " + victorias + " veces. Perdiste " + derrotas + " veces.")
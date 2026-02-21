// BLACKJACK SIMPLIFICADO CON TERNARIOS

// Función para generar una carta al azar (2-11)
function carta() {
    return Math.floor(Math.random() * 10) + 2;
}

// Repartir cartas
let jugador = carta() + carta();
let maquina = carta() + carta();

alert("BLACKJACK\n\nJugador: " + jugador + "\nMáquina: " + maquina);

// Determinar ganador con ternario
let resultado = jugador > 21 ? "¡Perdiste! Te pasaste de 21" :
                maquina > 21 ? "¡Ganaste! La máquina se pasó" :
                jugador > maquina ? "¡Ganaste!" :
                jugador < maquina ? "¡Perdiste!" :
                "¡Empate!";

alert(resultado);
// BLACKJACK
// Función para generar las cartas
function carta() {
    return Math.floor(Math.random() * 10) + 2;
}

// Repartir cartas
let jugador = carta() + carta();
let maquina = carta() + carta();

console.log("BLACKJACK\n\nJugador: " + jugador + "\nMáquina: " + maquina);

// Determinar ganador con ternario
let resultado = jugador > 21 ? "¡Perdiste! Te pasaste de 21" :
                maquina > 21 ? "¡Ganaste! La máquina se pasó" :
                jugador > maquina ? "¡Ganaste!" :
                jugador < maquina ? "¡Perdiste!" :
                "¡Empate!";

console.log(resultado);
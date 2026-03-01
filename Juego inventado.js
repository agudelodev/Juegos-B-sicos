// Pato pato ganso

let animal = "pato";
let edad = 3;
let peso = 2;

// Identificar el animal 
if (animal === "pato") {
    console.log("¡Es un pato!");
} else if (animal === "ganso") {
    console.log("¡Es un ganso!");
} else {
    console.log("No es pato ni ganso");
}

// Determinar tamaño 
let tamaño = peso > 3 ? "grande" : "pequeño";
console.log("El animal es " + tamaño);

// Verificar edad 
let esAdulto = edad >= 2 ? "adulto" : "joven";
console.log("Es " + esAdulto);

// Sonido del animal 
let sonido = animal === "pato" ? "cua cua" : animal === "ganso" ? "honk honk" : "sin sonido";
console.log("Sonido: " + sonido);

// Velocidad 
let velocidad;
if (animal === "pato") {
    velocidad = 20;
} else if (animal === "ganso") {
    velocidad = 25;
} else {
    velocidad = 0;
}
console.log("Velocidad: " + velocidad + " km/h");

// Determinar si puede volar usando ternario anidado
let puedeVolar = animal === "pato" ? (peso < 3 ? true : false) : (animal === "ganso" && peso < 4 ? true : false);
console.log("¿Puede volar? " + puedeVolar);

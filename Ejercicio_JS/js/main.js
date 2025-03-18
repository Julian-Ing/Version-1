function suma(a, b) {
    return a + b;
}

console.log(suma(5, 5));

// Funciones anonimas

const resta = function (a, b) {
    return a - b;
}

console.log(resta(10, 2));

// funciones flechas

// ()=>{}

// 1. con un solo parametro

const tabladel7 = (a) => { return a * 7 }

console.log(tabladel7(7));

// 2. sin parametros
const tabladel7_v2 = () => {
    for (let i = 1; i <= 10; i++) {
        console.log("7 X " + i + " = " + (7 * i));
    }
}

console.log(tabladel7_v2());

// 3. con una sola linea de cuerpo

const resta_v3 = (a, b) => { return a - b }
console.log(resta_v3(5, 1));

const resta_v31 = (a, b) => a - b
console.log(resta_v31(5, 1));

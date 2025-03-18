// let nombre = prompt("Ingrese su nombre"); 
// let edad = prompt("Ingrese su edad");
// const persona=(nombre: "Juan", apellido: "paramo", edad: 20);
// const arreglo=(1,234,"hqakshdk",[23,434],{nombre="juan", apellido="paramo"});
// alert("hola" + " " + nombre + Number(edad));
// console.log("hola" + " " + nombre);


// console.log(`hola + ${nombre}`)
// console.log('"hola + ${nombre}"')
// console.log("'hola + ${nombre}'")

let nombre1 = prompt("ingrese su nombre");
let edad1 = prompt("ingrese su edad");
let nombre2 = prompt("ingrese su nombre");
let edad2 = prompt("ingrese su edad");

if (edad1 > edad2) {
    alert(nombre1 + " Es mayor");
} else if (edad1 == edad2) {
    alert(nombre1 + " tiene la misma edad que " + nombre2);
} else{
    alert(nombre2 + " Es mayor");
}




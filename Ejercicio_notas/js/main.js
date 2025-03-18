let notas = [];
let suma = 0;
let promedio = 0;

function menu() {
    let opcion = prompt("Seleccione la accion a ejecutar \n1. Agregar nota \n2. Eliminar nota \n3. Modificar \n4. Salir");
    switch (opcion) {
        case '1': agregarNota();
            break;
        case '2': eliminarNota();
            break;
        case '3': modificarNota();
            break;
        case '4': salir();
            break;
        default:
            alert("Opción inválida, ingrese la acción correcta");
    }
}

function agregarNota() {
    let proceso = true;
    while (proceso) {
        let nota = prompt("Ingrese una nueva nota (0-5):");
        nota = parseFloat(nota);
        if (isNaN(nota)) {
            alert("Nota inválida. Por favor, ingrese un número.");
        } else if (nota < 0 || nota > 5) {
            alert("Nota inválida. Por favor, ingrese una nota entre 0 y 5.");
        } else {
            notas.push(nota);
            suma += nota;
            promedio = suma / notas.length;
            alert(`Nota agregada. Promedio actual: ${promedio.toFixed(2)}`);

            let respuesta = "";
            while (respuesta !== "s" && respuesta !== "n") {
                respuesta = prompt("¿Desea agregar otra nota? (S/N)").toLowerCase();
                if (respuesta !== "s" && respuesta !== "n") {
                    alert("Respuesta inválida. Por favor, ingrese 'S' o 'N'.");
                }
            }
            if (respuesta === "n") {
                proceso = false;
                menu();
            }
        }
    }
}

function eliminarNota() {
    if (notas.length == 0) {
        alert("No hay notas registradas para eliminar.");
        menu();
    } else {
        let mensaje = "Notas registradas:\n";
        notas.forEach((nota, index) => {
            mensaje += `${index + 1}) ${nota}\n`;
        });

        let opcion = prompt(mensaje + "\nIngrese el número de la nota a eliminar:");
        let indice = parseInt(opcion) - 1;
        if (indice >= 0 && indice < notas.length) {
            let notaEliminada = notas.splice(indice, 1);
            alert(`Nota ${notaEliminada} eliminada correctamente.`);
            if (notaEliminada > suma) {
                suma += notaEliminada - suma;
            } else {
                suma -= notaEliminada;
            }
            promedio = suma / notas.length;
            alert(`Nota eliminada. Promedio actual: ${promedio.toFixed(2)}`);
            menu();
        } else {
            alert("Opción inválida. No se eliminó ninguna nota.");
            eliminarNota();
        }
    }
}

function modificarNota() {
    if (notas.length == 0) {
        alert("No hay notas registradas para modificar.");
        menu();
    } else {
        let mensaje = "Notas registradas:\n";
        notas.forEach((nota, index) => {
            mensaje += `${index + 1}) ${nota}\n`;
        });

        let opcion = prompt(mensaje + "\nIngrese el número de la nota a modificar:");
        let indice = parseInt(opcion) - 1;

        if (indice >= 0 && indice < notas.length) {
            let nuevovalor = prompt("Ingrese el nuevo valor de la nota:");
            nuevovalor = parseFloat(nuevovalor);
            let notaModificada = notas.splice(indice, 1, nuevovalor);
            let notaAnterior = parseFloat(notaModificada[0]);
            suma -= notaAnterior;
            suma += nuevovalor;
            promedio = suma / notas.length;

            alert(`Nota ${notaAnterior} modificada correctamente a ${nuevovalor}.`);
            alert(`Nota modificada. Promedio actual: ${promedio.toFixed(2)}`);
            menu();
        } else {
            alert("Opción inválida. No se modificó ninguna nota.");
            modificarNota();
        }
    }
}

menu();
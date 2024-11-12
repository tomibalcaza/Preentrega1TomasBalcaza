// Array para almacenar las edades
const edades = [];

function agregarEdad() {
    const edadInput = document.getElementById("edad");
    const edad = parseInt(edadInput.value);
    const resultado = document.getElementById("resultado");
    const edadesRegistradas = document.getElementById("edades-registradas");

    // Validar que la edad sea un número positivo
    if (isNaN(edad) || edad <= 0) {
        resultado.innerText = "Por favor, introduce una edad válida.";
        return;
    }

    // Agregar edad al array y limpiar el campo
    edades.push(edad);
    edadInput.value = "";

    // Mostrar las edades registradas
    edadesRegistradas.innerText = "Edades registradas: " + edades.join(", ");
    resultado.innerText = "";
}

function calcularPromedio() {
    const resultado = document.getElementById("resultado");

    // Verificar si hay edades registradas
    if (edades.length === 0) {
        resultado.innerText = "No hay edades registradas.";
        return;
    }

    // Calcular el promedio
    const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    const promedio = sumaEdades / edades.length;

    // Mostrar el promedio
    resultado.innerHTML = `<strong>Edad promedio:</strong> ${promedio.toFixed(2)}`;
}

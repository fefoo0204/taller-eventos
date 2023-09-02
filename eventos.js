document.addEventListener("DOMContentLoaded", function() {
    const divSaludo = document.querySelector("#saludoDiv");
    const botonSaludar = document.querySelector("#saludarButton");

    divSaludo.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    botonSaludar.addEventListener("click", function(event) {
        alert("Hola!");
        event.stopPropagation(); // Evita que el evento se propague al div
    });
});

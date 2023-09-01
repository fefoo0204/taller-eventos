document.addEventListener("DOMContentLoaded", function() {
    const divSaludo = document.querySelector("#saludoDiv");

    divSaludo.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});

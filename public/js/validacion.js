document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensaje");

    form.addEventListener("submit", function (e) {
        let valid = true;

        const nombreValido = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!nombreValido.test(nombreInput.value)) {
            valid = false;
            alert("Por favor, ingresa un nombre válido sin números ni caracteres especiales.");
            nombreInput.focus();
        }


        const emailValido = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailValido.test(emailInput.value)) {
            valid = false;
            alert("Por favor, ingresa un correo electrónico válido.");
            emailInput.focus();
        }

        const asuntoValido = /^[a-zA-Z0-9\s.,!?¿¡-]+$/;
        if (!asuntoValido.test(asuntoInput.value)) {
            valid = false;
            alert("Por favor, ingresa un asunto válido sin caracteres especiales.");
            asuntoInput.focus();
        }


        if (mensajeInput.value.trim() === "") {
            valid = false;
            alert("El campo de mensaje no puede estar vacío.");
            mensajeInput.focus();
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        const Recontrasena = document.getElementById('Recontrasena').value;

        if (nombre === '') {
            alert('Por favor, introduce tu nombre.');
            return;
        }

        if (apellidos === '') {
            alert('Por favor, introduce tus apellidos.');
            return;
        }

        if (correo === '') {
            alert('Por favor, introduce tu correo electrónico.');
            return;
        } else if (!validateEmail(correo)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        if (contrasena === '') {
            alert('Por favor, introduce una contraseña.');
            return;
        }

        if (Recontrasena === '') {
            alert('Por favor, confirma tu contraseña.');
            return;
        }

        if (contrasena !== Recontrasena) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Aquí podrías agregar más validaciones, como verificar la fortaleza de la contraseña, etc.

        // Si todas las validaciones pasan, puedes enviar el formulario
        form.submit();
    });
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

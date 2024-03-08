document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '') {
            alert('Por favor, introduce un nombre de usuario.');
            return;
        }

        if (password === '') {
            alert('Por favor, introduce una contraseña.');
            return;
        }

        // Aquí podrías agregar más validaciones, como la longitud mínima de contraseña, etc.

        // Si todas las validaciones pasan, puedes enviar el formulario
        form.submit();
    });
});

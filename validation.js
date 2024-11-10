// Validación de formularios
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            if (!validateForm()) {
                e.preventDefault();
            }
        });
    }

    function validateForm() {
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const genero = document.getElementById('genero').value;

        // Validar nombres
        if (nombres.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }

        // Validar apellidos
        if (apellidos.length < 2) {
            alert('Los apellidos deben tener al menos 2 caracteres');
            return false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un email válido');
            return false;
        }

        // Validar contraseña
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return false;
        }

        // Validar género
        if (!genero) {
            alert('Por favor, selecciona un género');
            return false;
        }

        // Verificar si el email ya está registrado
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.email === email)) {
            alert('Este email ya está registrado');
            return false;
        }

        return true;
    }
});
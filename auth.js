// Manejo de autenticación
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userName = document.getElementById('userName');
    
    // Verificar si hay una sesión activa
    checkSession();

    // Función para verificar sesión
    function checkSession() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const user = JSON.parse(currentUser);
            showLoggedInState(user.nombres);
        }
    }

    // Mostrar estado de sesión iniciada
    function showLoggedInState(name) {
        loginBtn.style.display = 'none';
        userName.style.display = 'inline';
        logoutBtn.style.display = 'inline';
        userName.textContent = `¡Hola, ${name}!`;
    }

    // Manejar registro
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userData = {
                nombres: document.getElementById('nombres').value,
                apellidos: document.getElementById('apellidos').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                genero: document.getElementById('genero').value
            };

            // Guardar usuario en localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));

            // Redireccionar a login
            window.location.href = 'login.html';
        });
    }

    // Manejar login
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = '../index.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    // Manejar logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    }
});
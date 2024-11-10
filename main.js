document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Datos de ejemplo para servicios
    const servicios = [
        {
            titulo: 'Perfumes de Lujo',
            descripcion: 'Fragancias exclusivas de las mejores marcas',
            precio: '$150 - $500'
        },
        {
            titulo: 'Perfumes Artesanales',
            descripcion: 'Creaciones únicas hechas a mano',
            precio: '$80 - $200'
        },
        {
            titulo: 'Asesoría Personal',
            descripcion: 'Encuentra tu fragancia ideal',
            precio: '$50'
        },
        {
            titulo: 'Sets de Regalo',
            descripcion: 'Combinaciones perfectas para regalar',
            precio: '$100 - $300'
        }
    ];

    // Datos de ejemplo para reseñas
    const resenas = [
        {
            nombre: 'María González',
            comentario: 'Excelente servicio y productos de alta calidad.',
            puntuacion: 5
        },
        {
            nombre: 'Juan Pérez',
            comentario: 'La asesoría personalizada fue muy útil.',
            puntuacion: 4
        },
        {
            nombre: 'Ana López',
            comentario: 'Increíble variedad de fragancias.',
            puntuacion: 5
        }
    ];

    // Cargar servicios
    const serviciosGrid = document.querySelector('.services-grid');
    if (serviciosGrid) {
        servicios.forEach(servicio => {
            const servicioElement = document.createElement('div');
            servicioElement.className = 'service-card';
            servicioElement.setAttribute('data-aos', 'fade-up');
            servicioElement.innerHTML = `
                <h3>${servicio.titulo}</h3>
                <p>${servicio.descripcion}</p>
                <p class="precio">${servicio.precio}</p>
            `;
            serviciosGrid.appendChild(servicioElement);
        });
    }

    // Cargar reseñas
    const resenasGrid = document.querySelector('.reviews-grid');
    if (resenasGrid) {
        resenas.forEach(resena => {
            const resenaElement = document.createElement('div');
            resenaElement.className = 'review-card';
            resenaElement.setAttribute('data-aos', 'fade-up');
            resenaElement.innerHTML = `
                <div class="stars">
                    ${'★'.repeat(resena.puntuacion)}${'☆'.repeat(5-resena.puntuacion)}
                </div>
                <p>${resena.comentario}</p>
                <h4>${resena.nombre}</h4>
            `;
            resenasGrid.appendChild(resenaElement);
        });
    }

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
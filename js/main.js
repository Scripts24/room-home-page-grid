const hamburguer = document.getElementById('main-hamburguer');
const x = document.getElementById('main-x');
const links = document.getElementById('main-links');
const logo = document.getElementById('main-logo');

hamburguer.addEventListener('click', () => {
    links.classList.add('show');
    logo.classList.add('hide');
    x.style.display = 'block';
    hamburguer.style.display = 'none';
});

x.addEventListener('click', () => {
    links.classList.remove('show');
    logo.classList.remove('hide');
    x.style.display = 'none';
    hamburguer.style.display = 'block';
    
});

// Función para cerrar el menú móvil si la pantalla es lo suficientemente grande
function closeMobileMenuIfOpen() {
    const viewportWidth = window.innerWidth; // Obtener el ancho de la ventana cada vez que se llama a la función
    if (viewportWidth < 768 && links.classList.contains('show')) {
        links.classList.remove('show');
        logo.classList.remove('hide');
        x.style.display = 'none';
        hamburguer.style.display = 'none';
    }
}

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener('resize', closeMobileMenuIfOpen);

// Llamar a la función una vez al cargar la página para asegurarnos de que el menú móvil esté cerrado si es necesario
closeMobileMenuIfOpen();

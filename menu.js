const toggle  = document.getElementById('menuToggle');
const menu    = document.getElementById('navMenu');
const overlay = document.getElementById('menuOverlay');

function setMenu(abierto) {
    menu.classList.toggle('open', abierto);
    overlay.classList.toggle('show', abierto);
    document.body.style.overflow = abierto ? 'hidden' : '';
    toggle.innerHTML = abierto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    toggle.setAttribute('aria-expanded', abierto);
}

// Abrir / cerrar con el botón
toggle.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
});

// Cerrar al tocar fuera del panel
overlay.addEventListener('click', function () {
    setMenu(false);
});

// Cerrar al elegir un enlace
menu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        setMenu(false);
    });
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
});

// Si se agranda la pantalla, cerrar el panel
window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setMenu(false);
});
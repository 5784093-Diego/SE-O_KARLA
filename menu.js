document.addEventListener('DOMContentLoaded', function () {

    var toggle  = document.getElementById('menuToggle');
    var menu    = document.getElementById('navMenu');
    var overlay = document.getElementById('menuOverlay');

    if (!toggle || !menu || !overlay) {
        console.log('Falta menuToggle, navMenu o menuOverlay en el HTML');
        return;
    }

    function setMenu(abierto) {
        menu.classList.toggle('open', abierto);
        overlay.classList.toggle('show', abierto);
        document.body.style.overflow = abierto ? 'hidden' : '';
        toggle.innerHTML = abierto
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
        toggle.setAttribute('aria-expanded', abierto);
    }

    toggle.addEventListener('click', function () {
        setMenu(!menu.classList.contains('open'));
    });

    overlay.addEventListener('click', function () {
        setMenu(false);
    });

    menu.querySelectorAll('a').forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            setMenu(false);
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) setMenu(false);
    });
});
// script.js - control del menú hamburguesa y mejoras de accesibilidad
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      // Buscar el nav hermano (asumimos estructura del header)
      const header = btn.closest('.header-inner');
      if (!header) return;
      const nav = header.querySelector('.main-nav');
      if (!nav) return;
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Cerrar menú al hacer clic en link (mobile)
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const nav = link.closest('.main-nav');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Cerrar menú si se redimensiona a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      document.querySelectorAll('.main-nav').forEach(n => n.classList.remove('open'));
    }
  });
});

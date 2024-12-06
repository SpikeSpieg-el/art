// Интерактивность шапки
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    header.appendChild(navToggle);

    const nav = header.querySelector('nav');
    
    // Мобильное меню
    navToggle.addEventListener('click', () => {
        header.classList.toggle('menu-open');
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Прилипающая шапка с точной высотой
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;

    // Плавное появление тени
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Подсветка активного пункта меню
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('hover-effect');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('hover-effect');
        });
    });

    // Закрытие мобильного меню при клике вне
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target) && header.classList.contains('menu-open')) {
            header.classList.remove('menu-open');
            nav.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Адаптивность высоты при изменении размера окна
    window.addEventListener('resize', () => {
        const newHeaderHeight = header.offsetHeight;
        document.body.style.paddingTop = `${newHeaderHeight}px`;
    });
});

// Показать кнопку при прокрутке вниз
window.onscroll = function() { toggleScrollButton() };

function toggleScrollButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Функция для плавного скролла наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


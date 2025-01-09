
        // Функция для переключения видимости формы
        document.getElementById('toggleFormButton').onclick = function() {
            const form = document.getElementById('googleForm');
            if (form.style.display === 'none') {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
        };
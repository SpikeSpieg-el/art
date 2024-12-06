document.addEventListener('DOMContentLoaded', function() {
    const typingContainer = document.querySelector('.typing-container');
    const typingTexts = typingContainer.querySelectorAll('.typing-text');
    const cursor1 = document.querySelector('.typing-cursor1');
    const cursor2 = document.querySelector('.typing-cursor2');

    function typeText(element, cursor) {
        return new Promise((resolve) => {
            const text = element.textContent;
            element.textContent = '';
            cursor.style.opacity = '1';
            let index = 0;

            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 50);  // Typing speed
                } else {
                    // Hide the cursor after typing
                    cursor.style.opacity = '0';
                    resolve();
                }
            }

            type();
        });
    }

    async function animateTyping() {
        // Type first line
        await typeText(typingTexts[0], cursor1);

        // Reveal and type second line
        const secondLine = typingTexts[1];
        secondLine.classList.remove('hidden');
        await typeText(secondLine, cursor2);
    }

    // Start typing animation
    animateTyping();
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.getElementById('animated-text');
    const textContent = animatedText.innerText;
    animatedText.innerHTML = '';

    // Додайте "SPOUK" без анімації
    const spoukSpan = document.createElement('span');
    spoukSpan.textContent = 'SPOUK ';
    animatedText.appendChild(spoukSpan);

    for (let i = 0; i < textContent.length; i++) {
        const char = textContent[i];
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animation = `appear 0.3s ${(i + 1) * 0.08}s forwards`; // Зменшена тривалість анімації
        animatedText.appendChild(span);
    }
});

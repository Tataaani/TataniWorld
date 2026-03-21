const title = document.querySelector('#title');
const btn = document.querySelector('#toggleBtn');

btn.addEventListener('click', () => {
    // 1. Проверяем, скрыт ли заголовок сейчас
    if (title.style.display === 'none') {
        // Если скрыт — показываем его
        title.style.display = 'block';
        // И меняем текст кнопки на "Скрыть"
        btn.textContent = 'Скрыть';
    } else {
        // Если виден — скрываем
        title.style.display = 'none';
        // И меняем текст кнопки на "Показать"
        btn.textContent = 'Показать';
    }
});
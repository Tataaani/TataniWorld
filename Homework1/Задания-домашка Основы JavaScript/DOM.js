// Задание 1 Скрытие и показ текста

const title = document.querySelector('#title');
const btnHide = document.querySelector('.toggleBtn');

btnHide.addEventListener('click', () => {
    // 1. Проверяем, скрыт ли заголовок сейчас
    if (title.style.display === 'none') {
        // Если скрыт — показываем его
        title.style.display = 'block';
        // И меняем текст кнопки на "Скрыть"
        btnHide.textContent = 'Скрыть';
    } else {
        // Если виден — скрываем
        title.style.display = 'none';
        // И меняем текст кнопки на "Показать"
        btnHide.textContent = 'Показать';
    }
});

// Задание 2 Изменение стиля элемента

const paragraphEl = document.querySelector('.paragraph');
const btnColor = document.querySelector('#colorBtn');

btnColor.addEventListener('click', () => {
    paragraphEl.classList.toggle('paragraphColor');
});


// Задание 3 Динамическое изменение текста

const titleEl = document.querySelector('#dynamicsTitle');
const btnChange = document.querySelector('.changeTextBtn');

btnChange.addEventListener('click', () => {
    titleEl.textContent = 'Привет, мир!';
});

// Задание 4. Поиск и изменение элементов по классу

const pEl = document.querySelectorAll('#task-container .description');
pEl.forEach(description => {
    description.textContent = 'Измененный текст';
})

// Задание 5. Работа с querySelectorAll

const parentDiv = document.querySelector('.my-specific-div');
const prgphEl = parentDiv.querySelectorAll('.description');
prgphEl.forEach(description => {
    description.textContent = 'Новый текст';
});

// Задание 6. Добавление нового элемента в DOM

const btnNew = document.querySelector('.btnNew');
btnNew.addEventListener('click', () => {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);
});


// Задание 7. Удаление элемента

const btnRemove = document.querySelector('.btnRemove');
btnRemove.addEventListener('click', () => {
    const descriptionRemove = document.querySelector('#removeСontainer .description');
    descriptionRemove.remove();
});


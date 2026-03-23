// Описание игры для сайта («Генератор случайных цветов»)

randomColorGenerator = () => {
    const bgcMain = document.querySelector('.main');

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    bgcMain.style.backgroundColor = randomColor;
}
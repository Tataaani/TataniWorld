// Описание игры для сайта («Переверни текст»)

function reverseText() {
    alert(`🔄Переверни текст🔙`);
    let playAgain;
    do {
        const userText = prompt("Введите текст, который нужно перевернуть:");

        if (userText === null || userText.trim() === "") {
            alert(`Вы ничего не ввели, поэтому игра завершена. Возвращайтесь и попробуйте заново!`);
            return;
        }

        const flipped = userText.split('').reverse().join('');
        alert(`Ваш перевернутый текст: ${flipped}`);

        playAgain = confirm("Хотите продолжить играть?");

    } while (playAgain);

    alert("Спасибо за игру!");
}

reverseText();


// Описание игры для сайта («Простая викторина»)


function quiz() {

    alert(`✅Викторинааааа❎`);

    const quizMassif = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quizMassif.length; i++) {

        const messageForUser = `${quizMassif[i].question}\n${quizMassif[i].options.join('\n')}`;

        const userAnswer = prompt(messageForUser);

        if (userAnswer === null) {
            alert("А у кого-то нервы не выдержали🤪");
            return;
        }

        if (Number(userAnswer) === quizMassif[i].correctAnswer) {
            score++;
        }
    }

    alert(`Спасибо за игру! Викторина окончена!\nВаш результат: ${score} из ${quizMassif.length}`);
}
quiz();


// Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);


// Задание 2

function filterPrefix(array, searchString) {

    const lowerSearch = searchString.toLowerCase();
    return array.filter(item => {
        return item.toLowerCase().startsWith(lowerSearch);
    });
}
const sity = ['Москва', 'Мурманск', 'Санкт-Петербург', 'Магадан', 'казань'];
const result = filterPrefix(sity, 'М');
console.log(result);


// Задание 3

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));


// Задание 5

const num = Math.floor(Math.random() * 10) + 1;
console.log(num);


// Задание 6

function getRandomArray(n) {
    const result = [];
    const length = Math.floor(n / 2);

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (n + 1));
        result.push(randomNum);
    }
    return result;
}

const n = 10;
const randomArray = getRandomArray(n);

console.log(`Исходное число: ${n}`);
console.log(`Длина массива: ${randomArray.length}`);
console.log(`Массив: ${randomArray}`);


// Задание 7

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(5, 15));


// Задание 8

console.log(new Date().toLocaleDateString());


// Задание 9

const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log(`Текущая дета: ${currentDate.toLocaleDateString()}`);
console.log(`Дата через 73 дня: ${futureDate.toLocaleDateString()}`);


// Задание 10

function getFormattedDate(date) {

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const weekdayOptions = { weekday: 'long' };

    const dateString = date.toLocaleDateString('ru-RU', dateOptions);
    const weekdayString = date.toLocaleDateString('ru-RU', weekdayOptions);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${dateString} — это ${weekdayString}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(getFormattedDate(now));
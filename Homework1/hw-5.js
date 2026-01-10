// Описание игры для сайта («Простая арифметика»)

let simpleArithmetic = () => {
    alert(`😒Простая арифметика🥱`);

    const tasks = [
        { question: "Сколько будет 5 + 3 ?", answer: "8" },
        { question: "Какое число получится при вычитании 2 из 10 ?", answer: "8" },
        { question: "При умножнии 4 на 7 получится...", answer: "28" },
        { question: "Сколько будет, если 20 поделить на 4 ?", answer: "5" },
    ];

    let playAgain;

    // Генерация случайного индекса: Math.random() дает число от 0 до 0.999. Умножаем на длину массива, чтобы получить диапазон до 3.999. Math.floor() округляет вниз до целого числа (0, 1, 2, 3)

    do {

        const randomIndex = Math.floor(Math.random() * tasks.length);

        const randomTask = tasks[randomIndex];

        const userAnswer = prompt(`Ваша случайная задача: ${randomTask.question}
    Ваш ответ:`);

        if (userAnswer === randomTask.answer) {
            alert("Правильно!");
        } else {
            alert(`Неверно. Правильный ответ: ${randomTask.answer}`);
        }

        playAgain = confirm("Хотите продолжить играть?");

    } while (playAgain);

    alert("Спасибо за игру!");
}


// Задача 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
};

// Задача 2

const numbers = [1, 5, 4, 10, 0, 3];
const index = numbers.indexOf(4);
console.log(index);

// Задача 3
let massiv = [1, 3, 5, 10, 20];
massiv = massiv.join(` `);
console.log(massiv);

// Задача 4

let mainArray = [];
for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    mainArray.push(row);
}
console.log(mainArray);

// Задача 5

let ones = [1, 1, 1];
ones.push(2, 2, 2);
console.log(ones);

// Задача 6

let mas = [9, 8, 7, 'a', 6, 5];
let masSort = mas.sort();
let sortDelet = masSort.pop();
console.log(masSort);

// Задача 7
let task7 = [9, 8, 7, 6, 5];
let again;

do {
    let isFound = Number(prompt(`Попробуйте угадать число, которое мы загадали. Подсказка: число от 1 до 10.`));

    if (task7.includes(isFound)) {
        alert("Угадал!");
    } else {
        alert("Не угадал!");
    }
    again = confirm("Попробуешь заново?");
} while (again);

// Задача 8
let task8 = 'abcdef';
task8 = task8.split('');
task8 = task8.reverse();
task8 = task8.join('');
console.log(task8);

// Задача 9

const task9 = [[1, 2, 3], [4, 5, 6]];
const general = [].concat(...task9);
console.log(general);

// Задача 10

const task10 = [3, 7, 1, 9];

for (let i = 0; i < task10.length - 1; i++) {
    const current = task10[i];
    const next = task10[i + 1];
    const sum = current + next;
    console.log(`Итерация ${i}: Сумма ${current} + ${next} = ${sum}`);
}

// Задача 11

const getSquareNumber = (integersArray) => {
    return integersArray.map(integer => integer ** 2);
}

const integers = [5, 3, 8, 1];
const squares = getSquareNumber(integers)

console.log(squares);

// Задача 12

const getWordsLengths = (wordsArray) => {
    return wordsArray.map(word => word.length);
};

const words = ["Таня", "Ангелина", "Рамиль", "Оля"];
const lengths = getWordsLengths(words);

console.log(lengths);

// Задача 13

const getNegativeNumbers = (numbersArray) => {
    return numbersArray.filter(num => num < 0);
};

const whole = [-1, 5, 0, -3, 8];
const negativeNumbers = getNegativeNumbers(whole);

console.log(negativeNumbers);

// Задача 14

const originalArray = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    originalArray.push(randomNumber);
}

const evenNumbersArray = originalArray.filter(num => num % 2 === 0);

console.log(`Исходный массив: ${originalArray}`);
console.log(`Массив с четными значениями: ${evenNumbersArray}`);

// Задача 15

const task15 = [];

for (let i = 0; i < 6; i++) {
    const randomiNumber = Math.floor(Math.random() * 10) + 1;
    task15.push(randomiNumber);
}

const totalSum = task15.reduce((total, currentValue) => total + currentValue, 0);

const arithmeticMean = totalSum / task15.length;

console.log(`Сгенерированный массив: ${task15}`);
console.log(`Сумма всех элементов: ${totalSum}`);
console.log(`Среднее арифметическое: ${arithmeticMean}`); 
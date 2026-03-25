// // Описание игры для сайта («Простая арифметика»)

// let simpleArithmetic = () => {
//     alert(`😒Простая арифметика🥱`);
//     let playAgain;

//     do {
//         const operators = ['+', '-', '*', '/'];
//         const operator = operators[Math.floor(Math.random() * operators.length)];

//         let num1 = Math.floor(Math.random() * 10) + 1;
//         let num2 = Math.floor(Math.random() * 10) + 1;
//         let correctAnswer;
//         let taskString;

//         switch (operator) {
//             case '+':
//                 correctAnswer = num1 + num2;
//                 taskString = `${num1} + ${num2}`;
//                 break;
//             case '-':
//                 correctAnswer = num1 - num2;
//                 taskString = `${num1} - ${num2}`;
//                 break;
//             case '*':
//                 correctAnswer = num1 * num2;
//                 taskString = `${num1} * ${num2}`;
//                 break;
//             case '/':
//                 // Чтобы деление всегда было целое сначала перемножаем, чтобы получить делимое
//                 const product = num1 * num2;
//                 correctAnswer = num1;
//                 taskString = `${product} / ${num2}`;
//                 break;
//         }

//         const userAnswer = prompt(`Решите задачу: ${taskString}`);

//         if (userAnswer === null) {
//             alert("Игра окончена.");
//             return;
//         }

//         // Преобразуем ввод в число и сравниваем с правильным ответом
//         if (Number(userAnswer) === correctAnswer) {
//             alert("Верно! Поздравляю🥳");
//         } else {
//             alert(`Ошибка🤯. Правильный ответ был: ${correctAnswer}`);
//         }

//         playAgain = confirm("Хотите продолжить играть?");

//     } while (playAgain);

//     alert("Спасибо за игру!");
// }

{
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
    const squar = getSquareNumber(integers)

    console.log(squar);

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
}
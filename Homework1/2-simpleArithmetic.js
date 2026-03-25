// Описание игры для сайта («Простая арифметика»)

let simpleArithmetic = () => {
    alert(`😒Простая арифметика🥱`);
    let playAgain;

    do {
        const operators = ['+', '-', '*', '/'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let correctAnswer;
        let taskString;

        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                taskString = `${num1} + ${num2}`;
                break;
            case '-':
                correctAnswer = num1 - num2;
                taskString = `${num1} - ${num2}`;
                break;
            case '*':
                correctAnswer = num1 * num2;
                taskString = `${num1} * ${num2}`;
                break;
            case '/':
                // Чтобы деление всегда было целое сначала перемножаем, чтобы получить делимое
                const product = num1 * num2;
                correctAnswer = num1;
                taskString = `${product} / ${num2}`;
                break;
        }

        const userAnswer = prompt(`Решите задачу: ${taskString}`);

        if (userAnswer === null) {
            alert("Игра окончена.");
            return;
        }

        // Преобразуем ввод в число и сравниваем с правильным ответом
        if (Number(userAnswer) === correctAnswer) {
            alert("Верно! Поздравляю🥳");
        } else {
            alert(`Ошибка🤯. Правильный ответ был: ${correctAnswer}`);
        }

        playAgain = confirm("Хотите продолжить играть?");

    } while (playAgain);

    alert("Спасибо за игру!");
}
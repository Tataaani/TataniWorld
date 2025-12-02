// Описание игры для сайта («Угадай число»)

let guessTheNumber = () => {
    alert(`🧐Угадай чисто!🧐`);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    for (; ;) {
        let userInput = Number(prompt(`Введи число от 1 до 100`));

        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            alert(`😔Введено неверное значение!😔`);
            break;
        }
        if (userInput === randomNumber) {
            alert(`🎉УРА! Вы угадали! Загаданное число: ${randomNumber}🎉`);
            break;
        } else {
            alert(`😔Введенное число ${userInput > randomNumber ? 'больше 📈' : 'меньше 📉'} загаданного!😔`);
        }
    }
    if (confirm('🕹️Сыграть ещё раз?🕹️')) {
        guessTheNumber();
    }

}

// Задания на работу с кодом
// Задание 1

const smallerOfTwoNumber = (a, b) => {
    if (a > b || a === b) {
        return b
    } else {
        return a;
    }
}

let a = Number(prompt(`Введите первое число`));
let b = Number(prompt(`Введите второе число`));
alert(`Меньшее из двух чисел ${smallerOfTwoNumber(a, b)}`);


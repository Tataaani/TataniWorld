// // Описание игры для сайта («Угадай число»)

// window.guessTheNumber = () => {
//     alert(`🧐Угадай чисто!🧐`);

//     const randomNumber = Math.floor(Math.random() * 100) + 1;

//     for (; ;) {
//         let rawInput = prompt(`Введи число от 1 до 100 (или нажми "Отмена" для выхода)`);

//         if (rawInput === null) {
//             alert("Игра окончена. Заходи еще!");
//             return;
//         }

//         let userInput = Number(rawInput);

//         if (isNaN(userInput) || rawInput.trim() === "" || userInput < 1 || userInput > 100) {
//             alert(`😔Введено неверное значение! Введи ЧИСЛО от 1 до 100😔`);
//             continue;
//         }
//         if (userInput === randomNumber) {
//             alert(`🎉УРА! Вы угадали! Загаданное число: ${randomNumber}🎉`);
//             break;
//         } else {
//             alert(`😔Введенное число ${userInput > randomNumber ? 'больше 📈' : 'меньше 📉'} загаданного!😔`);
//         }
//     }
//     if (confirm('🕹️Сыграть ещё раз?🕹️')) {
//         guessTheNumber();
//     }
// }

{
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


    // Задание 2

    const evenOdd = (n) => {
        if (n % 2 == 0) {
            alert(`Число четное`);
        } else {
            alert(`Число нечетное`)
        }
    }

    evenOdd(Number(prompt(`Введите число для проверки четности`)));


    // Задание 3.1

    function SQUARE(c) {
        let squareNumber = c ** 2;
        console.log(`${c} в квадрате равна ${squareNumber}`)
    }

    SQUARE(Number(prompt(`Введите ваше число для возведения его в квадрат`)));


    // Задание 3.2

    function squares(num) {
        return num ** 2;
    }

    const result = squares(Number(prompt(`Введите еще раз ваше число для возведения его в квадрат и последующего сохранения`)));

    console.log(`Квадрат вашего числа равен ${result}`);

    // Задание 4

    // const howOld = (years) => {
    //     if (years < 0) {
    //         alert(`Вы ввели неправильное значение`);
    //         return;
    //     } else if (years >= 0 && years <= 12) {
    //         alert(`Привет, друг!`);
    //     } else {
    //         alert(`Добро пожаловать!`)
    //     }
    // }
    // howOld(Number(prompt(`Сколько Вам лет?`)));

    const howOld = () => {
        let years;
        let isValid = false;

        while (!isValid) {
            years = Number(prompt(`Сколько Вам лет?`));

            if (years < 0 || isNaN(years)) {
                alert(`Вы ввели неправильное значение`);
            } else if (years >= 0 && years <= 12) {
                alert(`Привет, друг!`);
                isValid = true;
            } else {
                alert(`Добро пожаловать!`);
                isValid = true;
            }
        }
    }
    howOld();

    // Задание 5

    function proNumbers() {
        const num1 = Number(prompt(`Введи любое число (ничего другого!)`));
        const num2 = Number(prompt(`Введи второе число (не абы что!)`));

        if (isNaN(num1) || isNaN(num2)) {
            console.log(`Одно или оба значения не являются числом`);
            return;
        } else {
            return num1 * num2;
        };
    }
    console.log(proNumbers());

    // Задание 6

    function isItNumber() {
        const ex6 = Number(prompt(`не кипятись, но нам снова от тебя нужно число😅`));

        if (isNaN(ex6)) {
            console.log(`Переданный параметр не является числом`);
            return;
        } else {
            const work = ex6 ** 3
            return `${ex6} в кубе равняется ${work}`
        };
    }
    console.log(isItNumber());

    // Задание 7

    const p = 3.14;

    function getArea() {
        return (this.radius ** 2) * p;
    };

    function getPerimeter() {
        return 2 * this.radius * p;
    };

    const circle1 = {
        radius: Number(prompt(`Придумай радиус для 1-го объекта`)),
        getArea: getArea,
        getPerimeter: getPerimeter,
    }

    const circle2 = {
        radius: Number(prompt(`Придумай радиус для 2-го объекта`)),
        getArea: getArea,
        getPerimeter: getPerimeter,
    }

    console.log(`С радиусом ${circle1.radius} площадь круга будет равна ${circle1.getArea()}, а периметр - ${circle1.getPerimeter()}`);

    console.log(`С радиусом ${circle2.radius} площадь круга будет равна ${circle2.getArea()}, а периметр - ${circle2.getPerimeter()}`);
}
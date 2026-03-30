// // Описание игры для сайта («Камень, ножницы, бумага»)

// let rockPaperScissors = () => {
//     alert(`Камень ✊, ножницы ✌️, бумага 🤚`);
//     const userName = prompt(`Как Вас зовут?`);
//     let playAgain;

//     do {
//         const options = ["камень", "ножницы", "бумага"];

//         const userChoice = prompt(`${userName}, выбери один вариант: камень, ножницы или бумага?`).toLowerCase();
//         // .toLowerCase(): "Камень" = "камень" 

//         if (!options.includes(userChoice)) {
//             alert(`${userName}, к сожалению Вы ввели что-то некорректное. Попробуйте снова!`);
//             playAgain = true;
//             continue;
//             // Для себя: "let playAgain" по умолчанию равна undefined. Для цикла while значение undefined — это всё равно что ложь (false). поэтому continue не начнет заново и попрощается без "playAgain = true;"
//         }

//         const randomIndex = Math.floor(Math.random() * options.length);
//         const computerChoice = options[randomIndex];

//         if (userChoice === computerChoice) {
//             alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nНичья! 🤝`);
//         } else if (
//             (userChoice === "камень" && computerChoice === "ножницы") ||
//             (userChoice === "ножницы" && computerChoice === "бумага") ||
//             (userChoice === "бумага" && computerChoice === "камень")
//         ) {
//             alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nПоздравляю, ${userName}! Ты победил(а)! 🎉`);
//         } else {
//             alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nВ этот раз компьютер оказался сильнее. 🤖`);
//         }

//         playAgain = confirm("Хотите продолжить играть?");

//     } while (playAgain);

//     alert("Спасибо за игру!");
// };

{
    // Задание 1
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];
    people.sort((a, b) => {
        return a.age - b.age;
    });
    console.log(people);


    // Задание 2

    function isPositive(number) {
        return number > 1;
    }
    function isMale(person) {
        return person.gender === 'female';
    }
    function filter(array, ruleFunction) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (ruleFunction(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }
    console.log(filter([3, -4, 1, 9], isPositive));
    const peoples = [
        { name: 'Глеб', gender: 'male' },
        { name: 'Анна', gender: 'female' },
        { name: 'Олег', gender: 'male' },
        { name: 'Оксана', gender: 'female' }
    ];
    console.log(filter(people, isMale));


    // Задание 3

    const timer = (deadline) => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            console.log(currentDate.toLocaleString());
        }, 3000);
        setTimeout(() => {
            clearInterval(interval);
            console.log(`30 секунд прошло`);
        }, deadline)
    };
    timer(30000);


    // Задание 4

    function delayForSecond(callback) {
        setTimeout(() => {
            callback();
        }, 1000)
    }
    delayForSecond(function () {
        console.log('Привет, Глеб!');
    })


    // Задание 5

    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if (cb) { cb(); }
        }, 1000)
    }
    function sayHi(name) {
        console.log(`Привет, ${name}!`);
    }
    delayForSecond(() => sayHi('Глеб'));
}
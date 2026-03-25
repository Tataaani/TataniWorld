// Описание игры для сайта («Камень, ножницы, бумага»)

let rockPaperScissors = () => {
    alert(`Камень ✊, ножницы ✌️, бумага 🤚`);
    const userName = prompt(`Как Вас зовут?`);
    let playAgain;

    do {
        const options = ["камень", "ножницы", "бумага"];

        const userChoice = prompt(`${userName}, выбери один вариант: камень, ножницы или бумага?`).toLowerCase();
        // .toLowerCase(): "Камень" = "камень" 

        if (!options.includes(userChoice)) {
            alert(`${userName}, к сожалению Вы ввели что-то некорректное. Попробуйте снова!`);
            playAgain = true;
            continue;
            // Для себя: "let playAgain" по умолчанию равна undefined. Для цикла while значение undefined — это всё равно что ложь (false). поэтому continue не начнет заново и попрощается без "playAgain = true;"
        }

        const randomIndex = Math.floor(Math.random() * options.length);
        const computerChoice = options[randomIndex];

        if (userChoice === computerChoice) {
            alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nНичья! 🤝`);
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nПоздравляю, ${userName}! Ты победил(а)! 🎉`);
        } else {
            alert(`Твой выбор: ${userChoice}.\nВыбор компьютера: ${computerChoice}.\nВ этот раз компьютер оказался сильнее. 🤖`);
        }

        playAgain = confirm("Хотите продолжить играть?");

    } while (playAgain);

    alert("Спасибо за игру!");
};
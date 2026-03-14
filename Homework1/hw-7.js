// Описание игры для сайта («Камень, ножницы, бумага»)

let rockPaperScissors = () => {
    alert(`Камень ✊, ножницы ✌️, бумага 🤚`);
    let playAgain;

    do {
        const options = ["камень", "ножницы", "бумага"];

        const userName = prompt(`Как Вас зовут?`);
        const userChoice = prompt(`Выберите один вариант: камень, ножницы или бумага?`).toLowerCase();
        // .toLowerCase(): "Камень" = "камень" 

        if (!options.includes(userChoice)) {
            console.log(`${userName}, выбери что-то из списка: камень, ножницы или бумага!`);
            return;
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
    } while (playAgain);

    alert("Спасибо за игру!");
};

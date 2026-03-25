// Описание игры для сайта («Угадай число»)

window.guessTheNumber = () => {
    alert(`🧐Угадай чисто!🧐`);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    for (; ;) {
        let rawInput = prompt(`Введи число от 1 до 100 (или нажми "Отмена" для выхода)`);

        if (rawInput === null) {
            alert("Игра окончена. Заходи еще!");
            return;
        }

        let userInput = Number(rawInput);

        if (isNaN(userInput) || rawInput.trim() === "" || userInput < 1 || userInput > 100) {
            alert(`😔Введено неверное значение! Введи ЧИСЛО от 1 до 100😔`);
            continue;
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
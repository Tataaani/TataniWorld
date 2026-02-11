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
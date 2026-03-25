// Описание игры для сайта («Простая викторина»)

quiz = () => {
    console.log("Кнопка нажата, функция вызвана!");
    alert(`✅Викторинааааа❎`);

    const quizMassif = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quizMassif.length; i++) {

        const messageForUser = `${quizMassif[i].question}\n${quizMassif[i].options.join('\n')}`;

        const userAnswer = prompt(messageForUser);

        if (userAnswer === null) {
            alert("А у кого-то нервы не выдержали🤪");
            return;
        }

        if (Number(userAnswer) === quizMassif[i].correctAnswer) {
            score++;
        }
    }

    alert(`Спасибо за игру! Викторина окончена!\nВаш результат: ${score} из ${quizMassif.length}`);
}
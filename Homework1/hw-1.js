// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
let iphone = 2007;
alert(`Год выпуска первого iPhone - ${iphone}`);

// Задание 3
let nameJS = "Брендан Эйх";
alert(`Имя создателя языка JavaScript - ${nameJS}`);

// Задание 4
let s = 10;
let b = 2;
// Можно так alert("Сумма: " + (s + b));

let sum = s + b;
alert(`Сумма переменных равна ${sum}`);

let difference = s - b;
alert(`Разность переменных равна ${difference}`);

let product = s * b;
alert(`Произведение  переменных равно ${product}`);

let quotient = s / b;
alert(`Частное переменных равно ${quotient}`);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
a = 9;
b = 2;
let remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;
num += 5;
// станет 6
num -= 3;
// станет 3
num *= 7;
// станет 21
num /= 3;
// станет 7
num++;
// станет 8
num--;
// станет 7 это и есть результат в конце
alert(num);

// Задание 8
let age = Number(prompt(`Сколько Вам лет?`));
alert(age);

// Задание 9
const user = {
    name: "Tatiana",
    age: 28,
    isAdmin: true,
}
let info = prompt(`Что Вы хотите узнать о пользователе? Варианты: name, age, isAdmin`)
alert(user[info]);

// Задание 10
let firstName = prompt(`Как Ваше имя?`);
alert(`Привет, ${firstName}`);

// Дополнительное задание
let number = Number(prompt(`Загадaйте любое число`));
let doubledNumber = number * 2;
alert(`Результат удвоения: ${doubledNumber}`);
let plus10 = doubledNumber + 10;
alert(`Если прибавить 10, то будет ${plus10}`);
let quotientDop = plus10 / 2;
alert(`Если полученное число разделить на 2, то будет ${quotientDop}`);
let ishod = quotientDop - number;
alert(`Если из него вычесть первоначальное загаданное Вами число, то получится ${ishod}`);
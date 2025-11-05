// Задание 1
let password = `пароль`;
let what = prompt(`Введите пароль`);
if (what === password) {
    console.log(`Пароль введен верно`);
}
else {
    console.log(`Пароль введен неправильно`);
};

// Задание 2
let c = 2;
(c > 0 && c < 10) ? console.log(`Верно`) : console.log(`Неверно`);

// Задание 3
let d = 105;
let e = 5;
(d > 100 || e > 100) ? console.log(`Верно`) : console.log(`Неверно`);

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = prompt(`Введите номер месяца (1-12)`);
switch (monthNumber) {
    case '1':
    case `2`:
    case `12`:
        console.log(`это зима`)
        break;
    case `3`:
    case `4`:
    case `5`:
        console.log(`это весна`)
        break;
    case `6`:
    case `7`:
    case `8`:
        console.log(`это лето`)
        break;
    case `9`:
    case `10`:
    case `11`:
        console.log(`это осень`)
        break;
    default:
        console.log(`Такого месяца не существует`)
        break;
}

// Дополнительные задания
// Задание 1
let chetNechet = prompt(`Пожалуйста, введите любое число`);

if (isNaN(chetNechet)) {
    console.log("не является корректным числом");
} else {
    console.log("является числом");
};

if (chetNechet % 2 === 0) {
    alert(`${chetNechet} - четное число`);
} else {
    alert(`${chetNechet} - нечетное число или некорректно введенные данные`);
};
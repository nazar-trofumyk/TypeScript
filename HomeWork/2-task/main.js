"use strict";
// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr.push('Hello');
arr.push(11);
arr.push(true);
console.log(arr);
let bookFirst = {
    title: "Колобок",
    pageCount: 90,
    genre: 'comic'
};
let bookSecond = {
    title: 'My life',
    pageCount: 19,
    genre: "Real Life"
};
console.log(bookFirst, bookSecond);
let bookOne = {
    title: 'Не падай духом',
    pageCount: 121,
    genre: 'Motivation',
    authors: {
        name: 'Хтось',
        age: 31
    }
};
console.log(bookOne);
let users = [
    { name: "Nazar", username: 'Gematogen', password: 'pas$swo09rd' },
    { name: "Nazar", username: 'Gema', password: 'pas$swo13d' },
    { name: "Nazar", username: 'gen', password: 'as$so09rd' },
    { name: "Nazar", username: 'Litak', password: 'pas$%w799r' }
];
for (const user of users) {
    console.log(user.password);
}
let weatherArr = [
    { day: 'Monday', tempInMorning: '18C', tempInDay: '19C', tempInEvening: '20C' },
    { day: 'Tuesday', tempInMorning: '18C', tempInDay: '19C', tempInEvening: '20C' },
    { day: 'Wednesday', tempInMorning: '18C', tempInDay: '18C', tempInEvening: '18C' },
    { day: 'Thursday', tempInMorning: '18C', tempInDay: '18C', tempInEvening: '18C' },
    { day: 'Friday', tempInMorning: '18C', tempInDay: '18C', tempInEvening: '18C' },
    { day: 'Saturday', tempInMorning: '18C', tempInDay: '18C', tempInEvening: '18C' },
    { day: 'Sunday', tempInMorning: '18C', tempInDay: '18C', tempInEvening: '18C' },
];
for (const days of weatherArr) {
    console.log(days);
}
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
x = 12;
x = -11;
if (x != 0) {
    console.log('Virno');
}
else {
    console.log('Ne virno');
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач
//     вводить
//     порядковий номер дня тижня і на екрані відображається інфа що \
//     заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//         За допомоги іф перевірити кожен його елемент на тривалість навчання.
//         У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
//

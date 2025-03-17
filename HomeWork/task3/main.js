"use strict";
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${i}Hello okten</div>`);
}
// #uzkt71dp
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let n = 0;
while (n < 20) {
    document.write(`<div>`);
    document.write(`<h1> ${n} Hello </h1>`);
    document.write(`</div>`);
    n++;
}
let userss = [
    { name: "vasya", age: 31, status: false },
    { name: "mxx", age: 23, status: true },
    { name: "dima", age: 32, status: false },
    { name: "oleg", age: 21, status: true },
    { name: "roman", age: 45, status: true },
    { name: "stas", age: 17, status: false },
    { name: "vasya", age: 33, status: false },
];
for (const user of userss) {
    if (user.status) {
        console.log(user.name, user.status);
    }
    else
        (!user.status);
    console.log(user.name, "Status - false");
    if (user.age > 30) {
        console.log(user.name, user.age);
    }
}
// WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль
let numbersArr = [1, 1, 13, 13, 24, 4];
console.log(numbersArr);
let stringArr = ["hello", 'Okten'];
console.log(stringArr);
let anyArr = [true, 11, 313, 'Nazar'];
console.log(anyArr);
let numb = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) {
        console.log(numb[i], 'Парні');
    }
    else if (numb[i] % 2 != 0) {
        console.log(numb[i], "Не парні");
    }
}
// – Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let masiv = [true, false, true, 12, 313, 13, 4, 4, "hello", 'ok', 12];
for (const masivElement of masiv) {
    if (typeof masivElement === 'boolean') {
        console.log(masivElement);
    }
}
let usersWithId = [
    { id: 1, name: 'max', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];
let cityWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: '‘Poland’', city: "‘Krakow’" },
    { user_id: 4, country: "‘USA’", city: '‘Miami’' }
];
let newArr = [];
for (const user of usersWithId) {
    for (const city of cityWithId) {
        if (user.id === city.user_id) {
            newArr.push(`${user.name} - ${user.age} - ${city.city} - ${city.country}`);
            for (const item of newArr) {
                document.write(`<div>`);
                document.write(`<h1> ${user.name}</h1>
<h2>${user.age}</h2>
<p>${city.city}-${city.country}</p>
`);
            }
        }
    }
}
console.log(newArr);

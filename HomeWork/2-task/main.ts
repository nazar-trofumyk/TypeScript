// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr:any[] =[]
arr.push('Hello')
arr.push(11)
arr.push(true)
console.log(arr)
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
type BookType ={
    title:string
pageCount:number
genre:string
}

let bookFirst:BookType ={
title:"Колобок",
pageCount:90,
genre:'comic'
}
let bookSecond:BookType ={
    title:'My life',
pageCount:19,
genre:"Real Life"
}

console.log(bookFirst,bookSecond)

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
type AutorType ={
name:string
age:number
}
type  BookSecondType ={
    title:string
    pageCount:number
genre:string
authors:AutorType
}

let bookOne:BookSecondType ={
    title:'Не падай духом',
    pageCount:121,
genre:'Motivation',
    authors:{
        name:'Хтось',
 age:31
    }
}
console.log(bookOne)
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
type UserType ={
    name:string
username:string
password:string
}

let users:UserType[] =[
    {name: "Nazar", username: 'Gematogen', password: 'pas$swo09rd'},
    {name: "Nazar", username: 'Gema', password: 'pas$swo13d'},
    {name: "Nazar", username: 'gen', password: 'as$so09rd'},
    {name: "Nazar", username: 'Litak', password: 'pas$%w799r'}
]
for (const user of users) {
    console.log(user.password)
}

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21
// значенням вичключаємо одразу
type WeatherType ={
 day:string
tempInMorning:string
    tempInDay:string
    tempInEvening:string
}

let weatherArr:WeatherType[]=[
    {day:'Monday',tempInMorning:'18C',tempInDay:'19C',tempInEvening:'20C'},
    {day:'Tuesday',tempInMorning:'18C',tempInDay:'19C',tempInEvening:'20C'},
    {day:'Wednesday',tempInMorning:'18C',tempInDay:'18C',tempInEvening:'18C'},
    {day:'Thursday',tempInMorning:'18C',tempInDay:'18C',tempInEvening:'18C'},
    {day:'Friday',tempInMorning:'18C',tempInDay:'18C',tempInEvening:'18C'},
    {day:'Saturday',tempInMorning:'18C',tempInDay:'18C',tempInEvening:'18C'},
    {day:'Sunday',tempInMorning:'18C',tempInDay:'18C',tempInEvening:'18C'},
]
for (const days of weatherArr) {
  console.log(days)
    }
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x:number = 0
x = 12
x = -11
if (x != 0){
    console.log('Virno')
}else {
    console.log('Ne virno')
}


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time:number = 0
time = 30
if (time >= 0 &&  time <= 15 ){
console.log('Перша чверть')

} else if (time > 15 && time <= 30 ){

    console.log('Друга чверть')
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач
//     вводить
//     порядковий номер дня тижня і на екрані відображається інфа що \
//     заплановано на цей день (можна замість плану на день, назву дня англійською).
let day:string | null = prompt('Enter day (1-7)')
switch (day){
    case  "Monday" :{
        alert( 'Monday:go to the gym')
   break }
        case "Tuesday":{
        alert("Tuesday:you will go lear TS")
}
}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//         За допомоги іф перевірити кожен його елемент на тривалість навчання.
//         У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
 if (item.monthDuration >= 5){

     console.log(item.monthDuration,'Super')

 }

}
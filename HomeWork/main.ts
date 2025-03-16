// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let c:string ='hello'
let a:number = -999
let b:boolean =true
console.log(a,b,c)
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName:string ='Nazar'
let middleName:string ='Romanovych'
let latName:string='Trofumyk'
let person:string = `${firstName}  ${middleName}  ${latName}`
console.log(person)
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let one:number = 100
let two:string ='100'
let three:boolean=true
console.log((typeof one) , (typeof two) ,(typeof three))
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const myName:string | null = prompt("Please Enter Your Name")
const myAge:string |null = prompt("Pls Enter your age")
if (myName && myAge){
    console.log(myName , myAge)

}else {
    console.log('Please Enter Again')
}

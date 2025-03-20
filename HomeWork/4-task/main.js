"use strict";
// #EKRNVPM
//
// – створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
function suma(arr) {
    let sum = 0;
    for (const numbers of arr) {
        sum += numbers;
    }
    return sum;
}
console.log(suma([11, 2, 3, 43]));
// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
function minNumber(arr) {
    let min = arr[0];
    for (const number of arr) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
console.log(minNumber([2, 3, 4, 5, 6, 7, 7, -1, 0]));
//
function exchange(sumUAH, currencyArr, exchangeCurrency) {
    let chosenCur;
    for (const currencyItem of currencyArr) {
        if (currencyItem.currency === exchangeCurrency) {
            chosenCur = currencyItem;
        }
        // let result:number = sumUAH/chosenCur.value
    }
    return chosenCur ? sumUAH / chosenCur.value : undefined;
}
console.log(exchange(2000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
//
// function exchange(sum:number,currency:CurrencyType[],exchangeCurrency:string):number{
//     let chosenCurrency:CurrencyType | undefined
//
//     for (const currencyElement of currency) {
//         if (currencyElement.currency ===exchangeCurrency){
//             chosenCurrency = currencyElement
//         }
//
//     }
//
//     return chosenCurrency ? sum /chosenCurrency.value :undefined
// }
//
//
//
// let curs :CurrencyType =[{currency: 'USD', value: 25},
//     {currency: 'EUR', value: 42}
// ]
// exchange(500,curs,'USD')
// console.log(exchange(500,curs,'USD'))
// //
//
// class User {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
//
//     constructor(id: number, name: string, surname: string, email: string, phone: string) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let users:User[] =[
//     new User(1,'Vasya','Kokos','kokos@gmail.com','+380128731873'),
//     new User(2,'Oleh','Tymochyk','Tym31@gmail.com','+380128731873'),
//     new User(4,'Petya','Likar','likos@gmail.com','+380128731873'),
//     new User(3,'Nazar','Petrunyak','petro@gmail.com','+380128731873'),
//     new User(6,'Stas','Kozak','kozak@gmail.com','+380128731873'),
//     new User(7,'Roman','Martrunyk','martin@gmail.com','+380128731873'),
//     new User(8,'Marta','Bereziak','Bereza@gmail.com','+380128731873'),
//     new User(5,'Rostik','Komarov','komar@gmail.com','+380128731873'),
//     new User(9,'Sergey','Zhykov','hekki@gmail.com','+380128731873'),
//     new User(10,'Olya','Pisotska','pisok@gmail.com','+380128731873'),
//     new User(10,'Olya','Pisotska','pisok@gmail.com','+380128731873'),
//
// ]
//
//

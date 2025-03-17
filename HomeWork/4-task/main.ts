// #EKRNVPM
//
// – створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
function suma (arr:number[]){
let sum:number = 0
    for (const numbers of arr) {

    sum += numbers

    }
    return sum
}

console.log(suma([11,2,3,43]))

// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

function minNumber(arr:number[]){
    let min:number =arr[0]
    for (const number of arr) {
                if (min > number){
                    min = number
                }
    }
    return min

}

console.log(minNumber([2,3,4,5,6,7,7,-1,0]))
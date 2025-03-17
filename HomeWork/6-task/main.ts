// #dFeorS3m7u
//
// – Знайти та вивести довижину настипних стрінгових значень

let word:string ='hello world'

//
let wordSecond:string ='lorem ipsum'
//
let wordThree:string='javascript is cool'
console.log(word.length,wordSecond.length,wordThree.length)
//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
let upCase:string ='hello world'

console.log(upCase.toUpperCase())
//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру настипні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
let lowerCase:string ='HELLO WORLD'
console.log(lowerCase.toLowerCase())
//
// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
    let slovo:string = 'Ревуть воли як ясла повні';
function stringToArray(str:string):string[] {

let arr:string[] = str.split(' ')

return arr
}

console.log(stringToArray(slovo))
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

//
// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//

let mas:number[] =[10,8,-7,55,987,-1011,0,1050,0]
let mapedMas:string[]=mas.map(item => item + '' )
console.log(mapedMas)

// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums:number[] = [11,21,3];

function sortNums(array:number[],direction:string){
if (direction ==='ascending') {
    let sortedArr: number[] = array.sort((a: number, b: number): number => a - b)
return sortedArr
} else if (direction ==='descending'){
let sortedArr:number[] = array.sort((a:number,b:number):number => b-a)
return sortedArr
}

}
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))


//
// – є масив
//

 type CoursesType ={
    title:string
     monthDuration:number
}
let coursesAndDurationArraySecond:CoursesType[] = [

    {title: '‘JavaScript Complex’', monthDuration: 5},

{title: '‘Java Complex’', monthDuration: 6},

{title: '‘Python Complex’', monthDuration: 6},

{title: '‘QA Complex’', monthDuration: 4},

{title: "‘FullStack’," ,monthDuration: 7},

{title: '‘Frontend’', monthDuration: 4}
];
//
//  — відсортувати його за спаданням за monthDuration
//
const sort:CoursesType[] =coursesAndDurationArraySecond.sort((a:CoursesType,b:CoursesType):number =>b.monthDuration - a.monthDuration)
console.log(sort)

//  — відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filter:CoursesType[] = coursesAndDurationArraySecond.filter(value =>value.monthDuration >= 5)
console.log(filter)
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArray:CoursesType[]=coursesAndDurationArraySecond.map(function (value:CoursesType, index:number){
    return{ ...value,id:index+1}

})
console.log(mapArray)
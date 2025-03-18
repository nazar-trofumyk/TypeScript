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


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

type CoursesArrType ={
    title:string
    monthDuration:number
   hourDuration:number
    modules:string[]
    logo:string
price:number
avgResult:number
rating?:number
}

let courses:CoursesArrType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];

let sass:CoursesArrType[]  =courses.filter(item =>item.modules.includes('sass'))
console.log(sass)
let docker:CoursesArrType[] = courses.filter(item=> item.modules.includes('docker'))
console.log(docker)


// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивіів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

let cardSuit:string[]= ['spade', 'diamond','heart','clubs']
let value:string[]=['6','7','8','9','10','ace', 'jack','queen',' king']
type CardType ={
    suitCard:string
cardValue:string
color:string
}
const cards:CardType[] =[]
for (const suit of cardSuit) {
    for (const val of value) {
        const card ={suitCard:suit,cardValue:val,color:''}
    if (suit ==='heart' ||suit ==='diamond' ){
        card.color ='red'

    }else if (suit ==='spade'|| suit === 'clubs'){
        card.color ='black'
    }

        cards.push(card)
    }

}
console.log(cards)

    // – знайти піковий туз
let ace:CardType | undefined = cards.find(item=>item.cardValue ==='ace' && item.suitCard ==='spade')
console.log(ace)
//
//  – всі шістки
let six:CardType [] | undefined = cards.filter(item =>item.cardValue ==='6')
console.log(six)
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
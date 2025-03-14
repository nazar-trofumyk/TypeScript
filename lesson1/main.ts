// let a:string ='hello okten'
// let b :number = 123
// let c :boolean = true
//
// function  foo (arg1:number,arg2:number):void{
//
//  // void if function result nema
// }
//
// function fooSecond(arg1:number,arg2:number):number{
//
//     return arg1 + arg2
// }
//
// console.log(fooSecond(12,12))
//
// // if we want tsc ARR
// let  arr:number[] =[]
// arr.push(1)
//
// // arr of mix type
// let arrMix:any[]=[]
// arrMix.push('Hello','Okten',12313,true)
//
// // TYPE LESSON
// // {name:string,age:number,status:boolean}
//
// // let users =[
// //     {name:'vasya',age:31,status:true},
// //     {name:'olya',age:34,status:false},
// //     {name:'Max',age:21,status:false},
// //     {name:'Nazar',age:19,status:true}
// // ]
// // let users :  {name:string,age:number,status:boolean} []=[
// //
// //
// // ]
// // let users :{   - JSON2TS!!!!
// //     name: string;
// //     age: number;
// //     status: boolean;
// // }
//
// //1-Variant Type
//
// type UserType ={
//     name:string
// age:number
// status:boolean
// }
//
// let users:UserType[] = [
//
// ]
// type ElvisType ={
//     name:string
//     age:number
//     status:boolean
//     asd?:string
// }
// //asd? - ми не знаємо точно чи він буде у нашому масиві з обєктами,або це поле є необовязкове
//
//
//
// //Метод TYPE
// type UserTypeFoo ={
//     name:string
//     age:number
//     status:boolean
//     greeting:(str:string) =>string
// }
// let usersSecond:UserTypeFoo[]=[
//     { greeting:(str) =>{return 'hello'}, name:'vasya',age:31,status:false,}
// ]
// //2-VARIANT interface

// interface IUserType {
//     name:string
// age:number
// status:boolean
// }
// let users:IUserType[]=[
//     {name:'vasya',age:31,status:false}
// ]
//
// //3-VARIANT CLASS
//  class UserType {
//     name:string
// age:number
// status:boolean
//
// }
// let users:UserType[]=[
//     {name:'vasya',age:31,status:false}
// ]
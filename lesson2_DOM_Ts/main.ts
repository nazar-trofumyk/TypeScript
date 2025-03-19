//  let target:HTMLCollectionOf<Element>= document.getElementsByClassName('target')
//  console.log(target)
//
//
//  let divTag:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div')
// console.log(divTag)
//  let forms:HTMLCollectionOf<HTMLFormElement> = document.forms
//  let f1:HTMLFormElement  = forms[0]
//  //
//  let f1Input:HTMLInputElement =f1['username']
//  console.log(f1Input)
//  let p:HTMLParagraphElement = document.createElement('p')
//  p.innerText ='Hello'
//
//   type UserTypeX ={
//  name:string
// age:number
// status:boolean
// }
//
// let usersX:UserTypeX[] = [
//  {name:'Vasya',age:31,status:false},
//  {name:'Vasya',age:31,status:false},
//  {name:'Vasya',age:31,status:false},
//  {name:'Vasya',age:31,status:false},
//  {name:'Vasya',age:31,status:false},
// ]
//  for (const userX of usersX) {
//   let container:HTMLDivElement =document.createElement('div')
//   container.innerText = userX.name
//   document.body.appendChild(container)
//  }
//
//  function  appender (tag:keyof HTMLElementTagNameMap){
//   document.createElement(tag)
//  }

//ASYNC TYPE

// interface IUser{
//  id:number
// name:string
// }
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => value.json())
// .then((users:IUser[]) => {
// console.log(users)
// })
//
// async function foobar():Promise<IUser[]>{
//  let users:IUser[] =await fetch('https://jsonplaceholder.typicode.com/users')
//      .then((value:Response) => value.json())
// return users
// }

// TYPE
type MyString = string
let s:MyString  ='hello'
type MyType = string | number |boolean
let y :MyType =true
type Falsy = 0|null|undefined|false|''
// let f:Falsy = 1
let f:Falsy = 0

type UserTypeY ={
 name:string
age:number
status:boolean
}
type UserType2 = UserTypeY & {id:number}
let usersY:UserType2[] = [
 {id:1, name:'Vasya',age:31,status:false},
 {id:1, name:'Vasya',age:31,status:false},
 {id:1, name:'Vasya',age:31,status:false},
 {id:1, name:'Vasya',age:31,status:false},
 {id:1, name:'Vasya',age:31,status:false},
]

//INTERFACE
interface IUser {
name:string
age:number
status:boolean
}
// interface IUser2 extends IUser{
//  id:number
// }
interface IUser {
 id:number
}
let interUsers:IUser[] =[
    {id:2,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false},
{id:1,name:'Nazar',age:14,status:false}
    ]






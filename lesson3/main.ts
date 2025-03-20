// CLASSS
// abstract class Animal {
//     isAlive:boolean
//
//
//
// constructor(isAlive:boolean) {
// this.isAlive = isAlive
//     }
// abstract back():void
// }
// // let animal = new Animal(true)
//
// class Bird extends Animal {
//   wings:boolean
//
//     constructor(isAlive: boolean, wings: boolean) {
//         super(isAlive);
//         this.wings = wings;
//     }
//     back() {
//       console.log('chik')
//     }
// }

// INTERFACE
// interface IAnimal{
//     isAlive:boolean
//   bark:() => void
// }
// interface Ix{
//     id:number
// }
//
// class Bird implements IAnimal,Ix{
//     isAlive: boolean;
// wings:boolean
//     id:number
//
//
//
//     constructor(isAlive: boolean, wings: boolean,id:number) {
//         this.isAlive = isAlive;
//         this.wings = wings;
// this.id = id
// }
//
//     bark(): void {}
// }
//
//
//
//TYPEE
// type AnimalType ={
//     isAlive:boolean
// bark:() =>void
// }
//
// class Bird implements AnimalType{
//     isAlive: boolean;
// wings:boolean
//
//
//     constructor(isAlive: boolean, wings: boolean) {
//         this.isAlive = isAlive;
//         this.wings = wings;
//     }
//
//     bark(): void {
//     }
//
// }

//GENERIC


class UserGen <Type1> {
    id:Type1
    name:string

    constructor(id: Type1, name: string) {
        this.id = id;
        this.name = name;
    }
}
let userGen1=new UserGen<number>(1,'nazar')
let userGen2=new UserGen<string>('1','nazar')
let userGen3=new UserGen<{x:number}>({x:100},'nazar')
let userGen4=new UserGen<boolean>(true,'nazar')

let arrX:number[] = [13,313,5,45,465]
//або
let arrY:Array<number> =[31,31,5,4,]
let arrZ:Array<{name:string,age:number}>=[
    {name:'nazar',age:31},
    {name:'roman',age:32},
    {name:'lox',age:31}
]

//////////---------------------function generic//


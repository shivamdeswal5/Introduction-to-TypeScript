// console.log("Hello");

// let age: number = 20;

// interface User {
//     name: string;
//     id: number;
// }

// const user: User = {
//     name: "Shivam",
//     id: 119
// }

// type myBool = true | "False";

// let ans: myBool = "False"

// function getLength(obj: string | string[]) {
//     console.log(obj.length)
// }

// getLength(["Shivam", "Deswal"]);

// //make function return different values bases on type
// function wrapInArray(obj: string | string[]) {
//     if (typeof obj === "string") {
//         return [obj];
//     }
//     return obj;
// }

// wrapInArray("fdb")

// //classes and object conform shapes in similar way
// interface Point {
//     x: number;
//     y: number;
// }
// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }
// const point = { x: 12, y: 26 };
// logPoint(point);

// class VirtualPoint {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint);

let Name: string = "Shivam";
let age:number = 25;
let isStudent : boolean = true;

let scores : number[] = [90,85,78];
let person: [string,number] = ["Shivam",21];

enum Day{
    Sunday = "blue",
    Monday = "black",
    Tuesday= "orange"
}

let today = Day.Monday;
console.log(today);

function greeMe(name: string): string{
    return `Good Morning ${name}`
    
}

// function combine(a:string | number, b: string | number) : string | number{
//     return a + b;
// }

// console.log(combine(5,5));
// console.log(combine("Shivam",5));


//Interface
interface User{
    name: string,
    age: number,
}

let person1 : User = {
    name:"Shivam Deswal",
    age: 21
}

// classes and objects
class Car{
    make: string;
    model: string;

    constructor (make: string , model: string){
        this.make = make;
        this.model = model;
    }

    displayInfo() : string{
        return `Car is: ${this.make} and model is: ${this.model}`
    }
}

let car1 = new Car("Mahindra","Scorpio");
console.log(car1)

//generics
function identity <T>(arg: T) : T{
    return arg;
}
let sum = identity(123);
let str = identity("Hello");

function printId(id: string | number){
    console.log(id);
}
printId(101);
printId("xya");

// intersection
interface Person{
    name: string;
}

interface Contact{
    phone: string;
}

type PersonWithContact = Person & Contact;

const contact : PersonWithContact ={
    name: "Shivam Deswal",
    phone:"8566665185"
}

// We can create our own type
type Point = {x:number, y:number};

// type assertions
let someValue : any = "Hello, Typescript"
let strLength : number = (someValue as string).length;
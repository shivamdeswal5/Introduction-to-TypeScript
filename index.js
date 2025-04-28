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
var Name = "Shivam";
var age = 25;
var isStudent = true;
var scores = [90, 85, 78];
var person = ["Shivam", 21];
var Day;
(function (Day) {
    Day["Sunday"] = "blue";
    Day["Monday"] = "black";
    Day["Tuesday"] = "orange";
})(Day || (Day = {}));
var today = Day.Monday;
console.log(today);
function greeMe(name) {
    return "Good Morning ".concat(name);
}
var person1 = {
    name: "Shivam Deswal",
    age: 21
};
// classes and objects
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.displayInfo = function () {
        return "Car is: ".concat(this.make, " and model is: ").concat(this.model);
    };
    return Car;
}());
var car1 = new Car("Mahindra", "Scorpio");
console.log(car1);
//generics
function identity(arg) {
    return arg;
}
var sum = identity(123);
var str = identity("Hello");
function printId(id) {
    console.log(id);
}
printId(101);
printId("xya");

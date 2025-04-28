console.log("Hello");

let age: number = 20;

interface User {
    name: string;
    id:number;
}

const user : User = {
    name: "Shivam",
    id: 119
}

type myBool =  true | "False";

let ans : myBool = "False"

function getLength(obj:string | string[]){
    console.log(obj.length)
}

getLength(["Shivam","Deswal"]);

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];         
    }
    return obj;
}

wrapInArray("fdb")
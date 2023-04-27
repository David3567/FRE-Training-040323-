// console.log('hello world');
// console.log('hello world2');
// let a = 5;

// let a;
// console.log(typeof a);

// interface Person {
//     name: string;
//     age: number;
//     email?: string;
// }

// function greet(person: Person) {
//     console.log('hello' + person.name);
// }

// const john: Person = {name: 'John', age: 30};

//------generic type----------
// function reverse<T>(list: T[]): T[] {
//   return list.reverse();
// }

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverse(numbers); // [5, 4, 3, 2, 1]

// const strings = ["apple", "banana", "orange"];
// const reversedStrings = reverse(strings); // ["orange", "banana", "apple"]

//--------any vs unknown------------
//1. type safety
// let myVar: any = 'hello world';
// let myVar2: number = myVar;

// let unknownVar: unknown = 'hello world2';
// let unknownVar2: number = unknownVar;

//2. interface
// let something: any;
// something.age;

// let something2: unknown;
// // console.log(typeof something2);
// something2.age;

//------union -------
// let myVariable: string | number;
// myVariable = "hello"; // OK
// myVariable = 42; // OK
// myVariable = true; // Error: Type 'boolean' is not assignable to type 'string | number'.


//-------as--------------
// function getLength(strOrArr: string | string[]) : number {
//     if (typeof strOrArr === 'string') {
//         return (strOrArr as string).length;
//     } else {
//         return (strOrArr as string[]).length;
//     }
// }

// console.log(getLength(['hello', 'world', 'hi']));


// function printObject(obj: unknown) {
//   const user = obj as { name: string; age: number };
//   console.log(`Name: ${user.name}, Age: ${user.age}`);
// }

// printObject({ name: "John", age: 30 }); // Output: "Name: John, Age: 30"

// -enum
// it is a type to represent a group of constants

// enum vs object
// 1. enum are not iteratble 
// 2. enums can not add or remove values once they are defined

// -decorator
// function enumerable (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): any {
//     descriptor.value = function(...args: any[]) {
//       console.log(...args);
//     }
//     return descriptor;
// }

// class Greeter {
//   // greeting: string;
//   // constructor(message: string) {
//   //   this.greeting = message;
//   // }
 
//   @enumerable
//   greet(num: number) {}
// }

// const g = new Greeter();
// g.greet(12);


function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const org = descriptor.value;

    descriptor.value = function(...args: any[]) {
      
      return org.apply(this, args);
    }

    return descriptor;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(true)
  greet() {
    return "Hello, " + this.greeting;
  }
}
const g = new Greeter('world');
console.log(g.greet());



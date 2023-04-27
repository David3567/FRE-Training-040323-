// function component(target: Function) {
// 	target.prototype.name = "David";
// }

// function component(name: string) {
// 	return function (target: Function) {
// 		target.prototype.name = name;
// 	};
// }

// @component({
// })
// class Person {}

// const p = new Person();
// console.log(p);

//interface, class, union, generic, enum

// let hello: "TT" | "HH" = "TT";

// // type fnType = (name: string, age: number) => [string, number];
// interface fnType {
// 	(name: string, age: number): [string, number];
// }

// const foo: fnType = function () {
// 	return ["hello", 34];
// };

// foo("hi", 56);

// generic

// function toStringArr(x: string, y: string): string[] {
// 	return [x, y];
// }
// function toNumbeArr(x: number, y: number): number[] {
// 	return [x, y];
// }
// function toArr<T, R>(x: T, y: R): [T, R] {
// 	return [x, y];
// }
// toArr<number, string>(12, "45");

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue(): T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];

//     enqueue(item: T): void {}
//     dequeue(): T {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): T[] {
//         throw new Error("Method not implemented.");
//     }
// }

// enum Role {
// 	USER = "user",
// 	SUPER = "super",
// 	ADMIN = 4,
// }

// const p: Role = Role.ADMIN;

// console.log(p);

// as
// const obj: User = {
//   id: 1,
//   age: 34
// };

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   age: number;
// }
// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// export interface Geo {
//   lat: string;
//   lng: string;
// }

// decorator
// function log(
// 	target: Object,
// 	name: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	// descriptor.value = function (...args: any) {
// 	// 	console.log(...args);
// 	// };
// 	// return descriptor;

// }

// class Person {
// 	@log
// 	print(a: number, b: number) {}
// }
// const p = new Person();
// p.print(1, 2);

// function course(name: string) {
// 	const coursename = name + "test";

// 	return function (target: Function) {
// 		target.prototype.coursename = coursename;
// 	};
// }

// @course("Dio")
// class Person {
// 	coursename: string;

// 	printcourse() {
// 		console.log(this.coursename); // name + test
// 	}
// }
// const p = new Person();
// p.printcourse();

// console.log();

// let myNumber: number = 42;
// let myString: string = "Howdy!";
// let myBool: boolean = true;

// let myAny: any;

// myAny = 42;
// myAny = "hi";
// myAny = true;
// myAny = [];

// myAny.whatever.under.the.sun();

// let myUnk: unknown;

// myUnk = 42;
// myUnk = "hi";
// myUnk = true;
// myUnk = [];

// if (typeof myUnk === "string") {
//   myUnk.length;
// }

// console.log(myBool, myNumber, myString);

// let myAdd = (a: number, b: number): number => {
//   return a + b;
// };
// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(5, 7));

// let myArray_1: number[];
// let myArray_2: Array<number>;

// let myNumberArray: Array<number> = [1, 3, 2, 5, 1];

// function isPalindrome(s: readonly number[]): boolean {
//   const sCopy: Array<number> = s.map((el) => el);
//   const sCopy2: Array<number> = Array.from(s);
//   return sCopy2.reverse().join("") === s.join("");
// }

// console.log(`${myNumberArray} - ${isPalindrome(myNumberArray)}`);

// type Point2D = {
//   x: number;
//   y: number;
// };

// function move(p: Point2D, offsetX: number, offsetY: number): Point2D {
//   return { x: p.x + offsetX, y: p.y + offsetY };
// }

// let myOrigin: Point2D = { x: 0, y: 0 };

// let newLocation = move(myOrigin, 10, 10);

// console.log(newLocation, myOrigin);

// type tPoint2D = [x: number, y: number];

// function move2(
//   p: readonly [x: number, y: number],
//   offsetX: number,
//   offsetY: number
// ): tPoint2D {
//   return [p[0] + offsetX, p[1] + offsetY];
// }

// let myNumboString: number | string;

// myNumboString = 42;
// console.log(myNumboString);
// myNumboString = "Ana are mere!";
// console.log(myNumboString);

import got from "got";
import { v4 as uuid } from "uuid";

class MyApiResponse {
  private id: string;
  private joke: string;
  private status: number;

  constructor(response: { id?: string; joke?: string; status?: number }) {
    this.id = uuid();
    this.joke = response.joke || "";
    this.status = response.status || 0;
  }
}

async function main(): Promise<void> {
  try {
    let response = new MyApiResponse(
      await got.get("https://icanhazdadjoke.com/").json()
    );

    console.log(response);
  } catch (error) {
    console.log("there wa an error");
  }
}

main();

// const myVar: unknown = 42;

// (myVar as string).length
// console.log((<string>myVar).length);

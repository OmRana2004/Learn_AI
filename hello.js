// const arr = [1, 2, 3, 4, 5]

// newAr = arr.map((sum) => sum+1)
// newArr = arr.map((multiply) => multiply*2)

// setTimeout(() => {
// console.log(newArr)
// }, 3000)

// console.log(newAr)

// const value = 5 < 12 ? "NICE" : "NOT NICE";
// console.log(value)

// const greeting = "I love You Baby";

// for (let i = 1; i<=20; i++) {
//     console.log(greeting)
// }

// const prompt = require("prompt-sync")();

// const input = prompt("enter you age :- ");
// const age = Number(input);

// if (age >= 18) {
//   console.log("You are eligible");
// } else {
//   console.log("You are not eligible");
// }

const prompt = require("prompt-sync")();

const input = prompt("enter your marks:- ");
const marks = Number(input);

if (marks>=90) {
    console.log("A+")
} else if (marks>=60) {
    console.log("B+")
} else {
    console.log("FAIL")
}
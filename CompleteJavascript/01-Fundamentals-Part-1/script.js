/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!');
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);

let person = 'jonas';
let PI = 3.1415;

// Better code
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

// Assignment 1
let country = 'Japan';
let continent = 'Eurasia';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

// dynamic typing
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
year = 2000;
console.log(typeof year);

console.log(typeof null); // object


let age = 38;
age = 31;

const birthYear = 1991;
// birthYear = 1999;
// const job;

var job = 'programmer';
job = 'teacher';


// Math Operators
const now = 2037;
const ageJonas= now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas/10, 2 ** 3); // 2 to the power of 2*2*2

const firstName = 'Jonas';
const lastName = 'Schemed';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


const now = 2037;
const ageJonas= now - 1991;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 -5; // x = y = 10, x = 10
console.log(x, y);


const averageAge= ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1
// const weightOfMark = 78;
// const heightOfMark = 1.69;
// const weightOfJohn = 92;
// const heightOfJohn = 1.95;

const weightOfMark = 95;
const heightOfMark = 1.88;
const weightOfJohn = 85;
const heightOfJohn = 1.76;

const BMIOfMark = weightOfMark / heightOfMark ** 2;
const BMIOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);

const markHigherBMI = BMIOfMark > BMIOfJohn;

console.log(BMIOfMark, BMIOfJohn, markHigherBMI);
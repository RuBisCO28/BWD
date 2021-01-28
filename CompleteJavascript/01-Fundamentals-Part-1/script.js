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



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas)

// template literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`)

console.log(`String 
multiple
lines`)

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log(`Sarah can start driving license`);
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



// Coding Challenge #2
const weightOfMark = 78;
const heightOfMark = 1.69;
const weightOfJohn = 92;
const heightOfJohn = 1.95;

//const weightOfMark = 95;
//const heightOfMark = 1.88;
//const weightOfJohn = 85;
//const heightOfJohn = 1.76;

const BMIOfMark = weightOfMark / heightOfMark ** 2;
const BMIOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);

if(BMIOfMark > BMIOfJohn) {
    console.log(`Mark's BMI(${BMIOfMark}) is higher than John's(${BMIOfJohn})!`);
} else {
    console.log(`John's BMI(${BMIOfJohn}) is higher than Mark's(${BMIOfMark})!`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); // invalid number

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // different type
console.log('I am ' + String(23) + ' years old'); 
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2+3+4+'5');

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!')
}

let height;
if(height) {
    console.log('Hight is not defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if(age === 18) console.log('You just become an adult :D (strict)');
if(age == 18) console.log('You just become an adult :D (loose)');

const favorite = prompt("What's your favorite number?")
console.log(favorite);
console.log(typeof favorite);

if ( favorite == 23){ // '23' == 23
    console.log('Cool! 23!');
} else if(favorite === 7){
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7');
}

if(favorite !== 23) console.log('Why not 23?')

const hasDriverLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision && isTired);
console.log(hasDriverLicense && hasGoodVision && !isTired);



let dolphinsScoreOne = 96;
let dolphinsScoreTwo = 108;
let dolphinsScoreThree = 89;

let koalasScoreOne = 88;
let koalasScoreTwo = 91;
let koalasScoreThree = 110;

let dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
let koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
    console.log('Winner is Dolphins');
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log('The result is draw');
} else {
    console.log('Winner is Koalas');
}

dolphinsScoreOne = 97;
dolphinsScoreTwo = 112;
dolphinsScoreThree = 101;
koalasScoreOne = 109;
koalasScoreTwo = 95;
koalasScoreThree = 123;

dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

if(dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log('Winner is Dolphins');
    } else if (dolphinsAverageScore === koalasAverageScore) {
        console.log('The result is draw');
    } else {
        console.log('Winner is Koalas');
    }
} else {
    console.log('No winner');
}

dolphinsScoreOne = 97;
dolphinsScoreTwo = 112;
dolphinsScoreThree = 101;
koalasScoreOne = 109;
koalasScoreTwo = 95;
koalasScoreThree = 106;

if(dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log('Winner is Dolphins');
    } else if (dolphinsAverageScore === koalasAverageScore) {
        console.log('The result is draw');
    } else {
        console.log('Winner is Koalas');
    }
} else {
    if (dolphinsAverageScore === 100){
        console.log('No winner(100)');
    } else {
        console.log('No winner');
    }
}

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log('Winner is Dolphins');
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log('Winner is Koalas');
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('Both are winner');
} else {
    console.log('No winner');
}

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare therory videos')
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code example');
      break;
    default:
      console.log('Not a valid day!');
}

// statement and expressions
console.log(`I'm ${2037-1991}` years old ${if(23>10){const str = '23 is bigger'}}``)

*/

// ternary operator for quick decision
const age = 23;
age >= 18 ? console.log('I like to drink wine') : 
console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// Coding Challenge #4
const bill = 430;
bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill * 1.15}`) : 
console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill * 1.2}`);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log();
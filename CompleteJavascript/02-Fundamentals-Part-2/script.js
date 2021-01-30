'use strict';

//let hasDriversLicense = false;
//const passTest = true;

// forget s
//if(passTest) hasDriverLicense = true;
//if(hasDriversLicense) console.log('I can drive');

//const interface = 'Audio';
//const private = 334;

/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / involving function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// function declareation
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// functino expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
        const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2 ,3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (firstScore, secondScore, thirdScore) => {
    return (firstScore+secondScore+thirdScore) / 3;
}

const checkWinner = (avgDolhins, avgKoalas) => {
    if(avgDolhins >= avgKoalas * 2){
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`;
    } else if(avgKoalas >= avgDolhins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
    } else {
        return 'No winner'
    }
}

// Data1
const dolphinsAverageScoreFirst = calcAverage(44,23,71);
const koalasAverageScoreFirst = calcAverage(65,54,49);
console.log(checkWinner(dolphinsAverageScoreFirst, koalasAverageScoreFirst));

// Data2
const dolphinsAverageScoreSecond = calcAverage(85,54,41);
const koalasAverageScoreSecond = calcAverage(23,34,27);
console.log(checkWinner(dolphinsAverageScoreSecond, koalasAverageScoreSecond));



const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2000, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schemedtmann', 2037 -1991, friends];
console.log(jonas);

const calcAge = (birthYear) => {
    return 2037 - birthYear;
}
const y = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(y)); // NaN
console.log(calcAge(y[0]));
console.log(calcAge(y[1]));
console.log(calcAge(y[years.length -1]));

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[years.length -1])];
console.log(ages);

// Add elements
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// Search element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


const calcTip = (bill) => {
    if(50 <= bill && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
    // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// const total = [bills[0]+calcTip(bills[0]), bills[1]+calcTip(bills[1]), bills[2]+calcTip(bills[2])];
console.log(total);

// access by index
// order ia important
const jonasArray = [
    'Jonas',
    'Schmedmann',
    2037 - 191,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

// access by name
// order is not important
const jonas = {
    firstName: 'Jonas',
    lastName : 'Schmedmann',
    age: 2037 -1991,
    job: 'teacher',
    friends:  ['Michael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.lastName + nameKey); // doesn't work

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
//
//if(jonas[interestedIn]){
//    console.log(jonas[interestedIn]);
//} else {
//    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
//}
//
//jonas.location = 'Portugal';
//jonas['twitter'] = '@twitter';
//console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName : 'Schmedmann',
    birthYear: 1991,
    job: 'teacher',
    friends:  ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,

    //calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function() {
    //    console.log(this);
        // return 2037 - jonas.birthYear; if object name is chaned, it'll be bug
    //    return 2037 - this.birthYear; // So this is better
    //}

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    haveLicense: function() {
        return this.hasDriverLicense ? "he has a driver's licenase" : "he has no driver's licenase";
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and ${this.haveLicense()}`
    }
}

//console.log(jonas.calcAge(1991));
//console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());

*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        //return this.mass / (this.height * this.height);
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        //return this.mass / (this.height * this.height);
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
    console.log(`Mark's BMI(${mark.bmi}) is higher than John's(${john.bmi})`);
} else if(john.bmi > mark.bmi) {
    console.log(`John's BMI(${john.bmi}) is higher than Mark's(${mark.bmi})`);
}

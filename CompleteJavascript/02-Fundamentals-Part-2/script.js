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

*/

const calcTip = (bill) => {
    if(50 <= bill && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0]+calcTip(bills[0]), bills[1]+calcTip(bills[1]), bills[2]+calcTip(bills[2])];
console.log(total);
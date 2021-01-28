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

*/

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
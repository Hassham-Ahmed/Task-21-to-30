// Equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple');

// Tests using the lower case function
let city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

// Numerical tests
let x = 10;
let y = 5;
console.log("Is x > y? I predict True.");
console.log(x > y);

console.log("Is x < y? I predict False.");
console.log(x < y);

console.log("Is x >= 10? I predict True.");
console.log(x >= 10);

console.log("Is y <= 5? I predict True.");
console.log(y <= 5);

// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm);

let isWeekend = false;
let isHoliday = true;
console.log("Is it a weekend or a holiday? I predict True.");
console.log(isWeekend || isHoliday);
let numbers=[1,2,3,4,5]
console.log("Is 5 in the array? I Predicted True")
console.log(numbers[4]);
console.log("Is 6 in the array? I Predicted False")
console.log(numbers[6])
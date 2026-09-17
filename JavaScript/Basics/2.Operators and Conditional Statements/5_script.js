// COMPARISON OPERATORS

// 1. EQUAL TO (==)

let a = 10;
let b = "10";

console.log("EQUAL TO (==)");
console.log(a == b);


// 2. STRICT EQUAL TO (===)

console.log("STRICT EQUAL TO (===)");
console.log(a === b);



// 3. NOT EQUAL TO (!=)

let x = 10;
let y = 5;

console.log("NOT EQUAL TO (!=)");
console.log(x != y);


// 4. STRICT NOT EQUAL TO (!==)

let p = 10;
let q = "10";

console.log("STRICT NOT EQUAL TO (!==)");
console.log(p !== q);


// 5. GREATER THAN (>)

let age = 20;

console.log("GREATER THAN (>)");
console.log(age > 18);


// 6. LESS THAN (<)

let marks = 40;

console.log("LESS THAN (<)");
console.log(marks < 50);


// 7. GREATER THAN OR EQUAL TO (>=)

let score = 80;

console.log("GREATER THAN OR EQUAL TO (>=)");
console.log(score >= 80);


// 8. LESS THAN OR EQUAL TO (<=)

let temperature = 30;

console.log("LESS THAN OR EQUAL TO (<=)");
console.log(temperature <= 35);



// COMPARING NUMBERS

let number1 = 100;
let number2 = 50;

console.log("number1 == number2:", number1 == number2);
console.log("number1 > number2:", number1 > number2);
console.log("number1 < number2:", number1 < number2);
console.log("number1 >= number2:", number1 >= number2);
console.log("number1 <= number2:", number1 <= number2);
console.log("number1 != number2:", number1 != number2);


// REAL WORLD EXAMPLE


let userAge = 20;

console.log("Is user an adult?");
console.log(userAge >= 18);

console.log("Is user under 18?");
console.log(userAge < 18);


// STRING COMPARISON


let password = "12345";
let userPassword = "12345";

console.log("Password correct?");
console.log(password === userPassword);
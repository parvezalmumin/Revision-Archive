// 1. IF STATEMENT

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}


// 2. IF ELSE STATEMENT

let number = 7;

if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


// 3. IF ELSE IF ELSE

let marks = 75;

if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 4. MULTIPLE CONDITIONS

let userAge = 20;
let hasID = true;

if (userAge >= 18 && hasID === true) {
    console.log("You can enter");
} else {
    console.log("You cannot enter");
}


// 5. SWITCH STATEMENT

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}


// 6. TERNARY OPERATOR

let temperature = 30;

let result = temperature > 25 ? "Hot" : "Cool";

console.log(result);
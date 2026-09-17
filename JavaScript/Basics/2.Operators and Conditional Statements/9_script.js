// 1. SIMPLE PROMPT

let name = prompt("What is your name?");

alert("Hello " + name);



// 2. PROMPT WITH AGE

let age = prompt("How old are you?");

alert("You are " + age + " years old.");



// 3. PROMPT + CONDITIONAL STATEMENT

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
    alert("You can enter.");
} else {
    alert("You cannot enter.");
}



// 4. PROMPT + CALCULATION

let number = prompt("Enter a number:");

let double = number * 2;

alert("Double of your number is " + double);
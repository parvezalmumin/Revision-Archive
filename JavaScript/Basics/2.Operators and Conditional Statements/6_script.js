// LOGICAL OPERATORS


// 1. AND OPERATOR (&&)

let age = 20;
let hasID = true;

console.log("AND OPERATOR");

console.log(age >= 18 && hasID === true);


// Both conditions must be true

let condition1 = true;
let condition2 = true;

console.log(condition1 && condition2);


// One condition is false

let condition3 = true;
let condition4 = false;

console.log(condition3 && condition4);



// 2. OR OPERATOR (||)

console.log("OR OPERATOR");

let hasEmail = true;
let hasPhone = false;

console.log(hasEmail || hasPhone);


// Both conditions are false

let condition5 = false;
let condition6 = false;

console.log(condition5 || condition6);



// 3. NOT OPERATOR (!)

console.log("NOT OPERATOR");

let isLoggedIn = true;

console.log(!isLoggedIn);


let isAdmin = false;

console.log(!isAdmin);


// REAL WORLD EXAMPLE


// Login system

let username = "masho";
let password = "12345";

let correctUsername = "masho";
let correctPassword = "12345";

let usernameCorrect = username === correctUsername;
let passwordCorrect = password === correctPassword;

console.log("Username correct:", usernameCorrect);
console.log("Password correct:", passwordCorrect);

console.log("Login successful:", usernameCorrect && passwordCorrect);


// ANOTHER REAL WORLD EXAMPLE


// Online shopping

let money = 1000;
let productPrice = 800;
let productAvailable = true;

let canBuy = money >= productPrice && productAvailable === true;

console.log("Can buy product:", canBuy);



// OR EXAMPLE


// User can login using email OR phone

let emailLogin = false;
let phoneLogin = true;

let canLogin = emailLogin || phoneLogin;

console.log("Can login:", canLogin);



// NOT EXAMPLE
 

let isBanned = false;

console.log("User is allowed:", !isBanned);
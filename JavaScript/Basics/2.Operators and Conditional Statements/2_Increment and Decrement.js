// INCREMENT AND DECREMENT OPERATORS

// 1. POST INCREMENT (x++)


let a = 10;

console.log("POST INCREMENT");
console.log("Before:", a);

console.log("Result:", a++);

console.log("After:", a);


// 2. POST DECREMENT (x--)

let b = 10;

console.log("POST DECREMENT");
console.log("Before:", b);

console.log("Result:", b--);

console.log("After:", b);


// 3. PRE INCREMENT (++x)

let c = 10;

console.log("PRE INCREMENT");
console.log("Before:", c);

console.log("Result:", ++c);

console.log("After:", c);


// 4. PRE DECREMENT (--x)

let d = 10;

console.log("PRE DECREMENT");
console.log("Before:", d);

console.log("Result:", --d);

console.log("After:", d);



// USING THEM WITH OTHER VARIABLES


// POST INCREMENT

let x = 5;
let y = x++;

console.log("POST INCREMENT WITH VARIABLE");
console.log("x:", x);
console.log("y:", y);


// POST DECREMENT

let p = 5;
let q = p--;

console.log("POST DECREMENT WITH VARIABLE");
console.log("p:", p);
console.log("q:", q);


// PRE INCREMENT

let m = 5;
let n = ++m;

console.log("PRE INCREMENT WITH VARIABLE");
console.log("m:", m);
console.log("n:", n);


// PRE DECREMENT

let r = 5;
let s = --r;

console.log("PRE DECREMENT WITH VARIABLE");
console.log("r:", r);
console.log("s:", s);
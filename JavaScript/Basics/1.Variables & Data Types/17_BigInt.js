let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint
//The n at the end makes it a BigInt.

let a = 1000000000000000000n;
let b = 2000000000000000000n;

console.log(a + b);


//You generally cannot directly mix Number and BigInt:
let x = 10;
let y = 20n;

// console.log(a + b); // Error
//Create a methode to check if a number is odd or even

function isOdd(number){
  let rem  = number % 2;
  let isOdd = rem == 1;
  return isOdd;
}


console.log(isOdd(9));
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(17));
console.log(isOdd(3));
console.log(isOdd(2005));
console.log(isOdd(2003));
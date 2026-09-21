let course = "JavaScript";

let result = course.slice(0, 4);
let result1 = course.slice(0); // Starts at index 0 and continues to the end.
let result2 = course.slice();  // When you don't provide any arguments, it copies the entire string.

console.log(result);
console.log(result1);
console.log(result2);
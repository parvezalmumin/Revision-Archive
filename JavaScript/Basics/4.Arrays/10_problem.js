/*
Question:
Given the following array of student marks:
[93, 92, 89, 79, 60, 77]

Write a JavaScript program to calculate and display the average mark
of all students using an array and a loop.
*/

let marks = [93, 92, 89, 79, 60, 77];

let total = 0;

// Loop through the array and calculate the total
for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

// Calculate the average
let average = total / marks.length;

console.log(`average is ${average}`)
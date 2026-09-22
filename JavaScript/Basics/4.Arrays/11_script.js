/*
Question:
Given the following array of product prices:

[130, 230, 340, 450, 456, 567, 789]

Write a JavaScript program to create a new array containing the prices
after applying a 10% discount to each price. Use a loop to process
every element of the original array.
*/

let price = [130, 230, 340, 450, 456, 567, 789];

let newPrice;

for (let i = 0; i < price.length; i++) {

    let discount = price[i] * 10 / 100;

    newPrice = price[i] - discount;
}

console.log(newPrice);
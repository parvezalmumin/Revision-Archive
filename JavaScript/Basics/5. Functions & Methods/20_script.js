// Original Array Doesn't Change
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(numbers);
console.log(doubled);
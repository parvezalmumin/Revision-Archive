//even number finding
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);
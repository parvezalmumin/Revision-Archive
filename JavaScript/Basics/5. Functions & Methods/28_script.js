// find the largest number

let numbers = [10, 50, 20, 80, 30];

let largest = numbers.reduce((max, number) => {
    if (number > max) {
        return number;
    } else {
        return max;
    }
}, 0);

console.log(largest);
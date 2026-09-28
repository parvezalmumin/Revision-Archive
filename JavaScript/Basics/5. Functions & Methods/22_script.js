// map() with Index
let fruits = ["Apple", "Mango", "Banana"];

let result = fruits.map((fruit, index) => {
    return index + " - " + fruit;
});

console.log(result);
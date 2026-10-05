let count = 0;

let countDisplay = document.getElementById("count");

let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", function() {
    count = count + 1;
    countDisplay.innerText = count;
});

decreaseButton.addEventListener("click", function() {
    count = count - 1;
    countDisplay.innerText = count;
});

resetButton.addEventListener("click", function() {
    count = 0;
    countDisplay.innerText = count;
});
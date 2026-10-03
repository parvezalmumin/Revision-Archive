let nameInput = document.getElementById("name");
let result = document.getElementById("result");

nameInput.oninput = function () {
    result.textContent = nameInput.value;
};
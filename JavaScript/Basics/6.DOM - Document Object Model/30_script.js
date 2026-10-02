let first = document.getElementById("first");

let second = document.createElement("p");

second.textContent = "Second paragraph";

first.after(second);
let second = document.getElementById("second");

let first = document.createElement("p");

first.textContent = "First paragraph";

second.before(first);
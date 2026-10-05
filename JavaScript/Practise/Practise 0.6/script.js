let name = prompt("Enter your full name:");

let words = name.split(" ");

let count = words.length;

document.getElementById("greeting").innerText =
    "Hello, " + name + "! Welcome to my website.";

document.getElementById("wordCount").innerText =
    "Your name has " + count + " words.";
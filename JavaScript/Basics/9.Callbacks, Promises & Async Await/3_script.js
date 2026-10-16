const timer = setTimeout(() => {
    console.log("Hello!");
}, 5000);

clearTimeout(timer); //Here, "Hello!" will not print because we cancel the timer before it executes.


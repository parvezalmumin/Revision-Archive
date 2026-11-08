function sayHello() {
  console.log("Hello Masho!");
}

// This function accepts another function
function process(callback) {
  console.log("Processing...");

  // Execute the callback
  callback();
}

// Passing sayHello as a callback
process(sayHello);

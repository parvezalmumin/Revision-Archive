
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }

});

// Handling the Promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

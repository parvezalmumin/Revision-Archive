
// Creating a Promise
function getData() {

    return new Promise((resolve) => {

        // Wait for 2 seconds
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);

    });

}

// Creating an async function
async function showData() {

    console.log("Loading...");

    // Wait until the Promise is fulfilled
    const result = await getData();

    console.log(result);

}

// Calling the function
showData();

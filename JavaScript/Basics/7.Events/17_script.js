let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    console.log("Event type:", event.type);
    console.log("Clicked element:", event.target);
});
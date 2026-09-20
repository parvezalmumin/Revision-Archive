let person = {
    name: "Mumin",
    age: 23,
    country: "Bangladesh"
};

for (let key in person) {
    console.log(key, "=", person[key]);
}
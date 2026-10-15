
class Animal {
  eat() {
    console.log("This animal eats food");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The dog barks");
  }
}

const dog1 = new Dog();

dog1.eat();
dog1.bark();

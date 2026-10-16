
class Parent {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

class Child extends Parent {
}

const child1 = new Child("Mumin");

console.log(child1.name);
child1.eat();

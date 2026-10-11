class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const student1 = new Student("Mumin", 23);

student1.introduce();
// Hi, I am Mumin
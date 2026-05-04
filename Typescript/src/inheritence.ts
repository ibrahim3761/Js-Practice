class Parent {
  name: string; //common
  age: number; //common
  address: string; //common

  constructor(name: string, age: number, address: string) {
    this.name = name; //common
    this.age = age; //common
    this.address = address; //common
  }
  //common
  getSleep(val: number) {
    console.log(`${this.name} sleeps for ${val} hours`);
  }
}

class Student extends Parent {}

const student1 = new Student("Harry", 24, "England");

student1.getSleep(12);

class Teacher extends Parent {
  designation: string; // own

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation; //own
  }
  //own
  takeClass(val: number) {
    console.log(`${this.name} takes class for ${val} hours`);
  }
}

const teacher1 = new Teacher("Mark", 28, "England", "Teacher");

teacher1.takeClass(8);

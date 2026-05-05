//polymorphism

class Person {
  getSleep() {
    console.log(`I am a peroson and I sleep for 8 hours`);
  }
}

class Stuent extends Person {
  getSleep() {
    console.log(`I am stuent and I sleep for 7 hours`);
  }
}
class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a next level developer and I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Stuent();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea(): number {
    return Math.PI * this.r * this.r;
  }
}

class Rectangle extends Shape {
  h: number;
  w: number;

  constructor(h: number, w: number) {
    super();
    this.h = h;
    this.w = w;
  }
  getArea(): number {
    return this.h * this.w;
  }
}


const getArea = (param:Shape)=>{
    console.log(param.getArea());
}

const shape1 = new Circle(5)
const shape2 = new Rectangle(5,4)

getArea(shape1)
getArea(shape2)

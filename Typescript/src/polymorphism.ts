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
  getSleep(){
    console.log(`I am a next level developer and I sleep for 6 hours`);
  }
}

const getSleepingHours = (param : Person)=>{
    param.getSleep();
}

const person1 = new Person()
const person2 = new Stuent()
const person3 = new NextLevelDeveloper()

getSleepingHours(person1)
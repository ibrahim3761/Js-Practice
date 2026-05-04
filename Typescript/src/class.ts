// oop - class - object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} is making ${this.sound} sound`);
//   }
// }

// parameter properties

class Animal {
//   public name: string;
//   public species: string;
//   public sound: string;

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} is making ${this.sound} sound`);
  }
}

const dog = new Animal("Dogesh", "Dog", "Ghew Ghew");
const cat = new Animal("Catesh", "Cat", "mew mew");

dog.makeSound();

const person = {
    name: 'sadar uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    maddied: true,
    'fav Places':['ctg','dhaka','rangamati']
}


// dot notation
console.log(person.age);

const income = person.salary;
console.log(income);

// bracket notation 
const nam = person['name'];
console.log(nam)

console.log(person['fav Places']);

const keyName = 'profession';
console.log(person[keyName]);

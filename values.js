const person = {
    name: 'sadar uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    maddied: true,
    'fav Places':['ctg','dhaka','rangamati']
}

person.salary = 30000;
person['age'] = 26;

const propName = 'profession';
person[propName] = 'devops';

console.log(person);
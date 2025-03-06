const hena = {
    name : 'hena',
    age : 25,
    friends:['BAPP','RAJ'],
    status: "not found"
}

// console.log(hena["name"]);

// for(let key in hena){
//     console.log(`key : ${key} value: ${hena[key]}`);
// }

for(let [key,value] of Object.entries(hena)){
    console.log(`key : ${key} value: ${value}`);
}

// const {name, age, friends, status} = hena;

// console.log(name);


const person = ['hero alam', {name : "ibra"}, "hena"];

const [a,b,c] = person;

// console.log(c);

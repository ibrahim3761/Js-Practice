//object destructuring
//array destructuring

const user = {
    id:1,
    name:{
        firstName: "Mohammad",
        middleName: "Ibrahim",
        lastName: "Abdullah"
    },
    gender: "Male",
    age: 25,
    favoriteColor: "Green"
};

const {favoriteColor, name:{middleName}}= user

console.log(favoriteColor, middleName);

const firends : string[] = ["Rahim", "Karim", "Jamal", "Babul", "Shamim", "Shahin"]

const[,,friend3] = firends

console.log(friend3);


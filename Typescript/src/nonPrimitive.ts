// array, objev

let bazarList = ['eggs', 'milk', 'bread']

let mixedArr = ['egss', 12, 'milk', 1, 'suger', 2];

let coordinates : [number, number] = [20,30]

let NameAndAge: [string, number] = ["Ibrahim", 25]

// reference type : object
//  optional property : middleName? (?)
// const user :{
//     organization: "Intelio Labs ltd"; // literal type
//     firstName: string;
//     middleName?: string; // optional property
//     lastName: string;
// } = {
//     organization: 'Intelio Labs ltd',
//     firstName: 'Mohammad',
//     middleName: 'Ibrahim',
//     lastName: 'Abdullah',
// }

// user.organization = "Intelio Labs"

const user :{
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; // optional property
    lastName: string;
} = {
    organization: 'Intelio Labs ltd',
    firstName: 'Mohammad',
    middleName: 'Ibrahim',
    lastName: 'Abdullah',
}

// user.organization = "Intelio Labs"


console.log(user);

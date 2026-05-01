// ? : turnary operator : decision making
// ?? : nullish coalescing operator : null or undefined
// ?. : optionaal chaining

const userAge = 21;

const biyerJonnoEligible = (age: number) => {
//   if (age >= 21) {
//     console.log("You aer eligible");
//   }
//   else{
//     console.log("You are not eligible");
//   }

    // using turnary operator
    return  age >= 21 ? console.log("You are eligible") : console.log("You are not eligible");
  
};


biyerJonnoEligible(20)


const userTheme = undefined;

const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme);

//optional chaining

const user : {
    address: {
        city: string;
        town: string;
        postalCode?: number;
    }
} = {
    address: {
        city: "Dhaka",
        town: "Dhanmondi",
        // postalCode: 1209
    }
}

const postalCode = user?.address?.postalCode ?? "Postal code not found";

console.log(postalCode);



type User = {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1 : User = {
  id: 1,
  name: {
    firstName: "Mohammad",
    middleName: "Ibrahim",
    lastName: "Abdullah",
  },
  gender: "male",
  contactNo: "01812345678",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

const user2: User = {
  id: 2,
  name: {
    firstName: "Mohammad",
    lastName: "Abdullah",
  },
  gender: "male",
  contactNo: "01812345678",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

console.log(user1);
console.log(user2);
type AddFunc = (num1 : number, num2 : number) => number;

const add : AddFunc = (num1, num2) =>{
    return num1 + num2;
}
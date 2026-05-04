//type gueradd

// in typeof

type Alpha = number | string;

const add = (num1: Alpha, num2: Alpha) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

console.log(add(2, 2));
console.log(add(2, "2"));

//inguard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This is ${user.name} and his role is : ${user.role}`);
  }
  else{
     console.log(`This is ${user.name} `);
  }
};

getUserInfo({name: "Ibrahim"})
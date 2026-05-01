// nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB : ${input}`);
  } else {
    console.log("From DB : ALL USER");
  }
};

getUser(null);

// unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    console.log(`Discounted price : ${input * 0.1} Taka`);
  } else if (typeof input === "string") {
    const price = input.split(" ")[0];
    console.log(`Discounted price : ${Number(price) * 0.1} Taka`);
  } else {
    console.log("Invalid input");
  }
};

discountCalculator(100);
discountCalculator("100 Taka");
discountCalculator(null);


// never/void type

const throwError = (msg: string) : never => {
    throw new Error(msg);
}

throwError("This is an error message");

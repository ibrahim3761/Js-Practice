// dynmicaally generalize

type GenericArraay<T> = Array<T>;

// const friends : string[] = ["Alice", "Bob", "Charlie"];
const friends: GenericArraay<string> = ["Alice", "Bob", "Charlie"];

// const rollNumbers : number[] = [1, 2, 3];
const rollNumbers: GenericArraay<number> = [1, 2, 3];

// const isEligibleList : boolean[] = [true, false, true];
const isEligibleList: GenericArraay<boolean> = [true, false, true];

type User = {
    name: string;
    age: number;
}

const userList: GenericArraay<User> = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
];

const sqFunc = (input: number): number => input * input;

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

console.log(coordinates1, coordinates2);


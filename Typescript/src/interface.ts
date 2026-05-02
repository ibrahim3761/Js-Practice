type User = {
    name: string;
    age : number;
}

// interface : object type : array , object , function

interface IUser {
    name: string;
    age: number;
}


type Role = {
    role: "admin" | "user"
}

type UserWithRole = User & Role;


interface IUserWithRole extends IUser {
    role: "admin" | "user"
}

const user1: IUserWithRole = {
    name: "John Doe",
    age: 30,
    role: "admin"
}

const user2: IUser = {
    name: "Jane Smith",
    age: 25
}


// function type interface
type Add = (a: number, b: number) => number;

interface IAdd {
    (a: number, b: number) : number;
}
const add: IAdd = (a, b) => a + b;


// inde sugnature

type Friends = string[];

interface IFreinds {
    [index: number] : string
}
const friends: IFreinds = ["Alice", "Bob", "Charlie"];

// keyof : type operator

type RIchPeoplesVehicle ={
    car: string,
    bike: string,
    cng: string
}
//1.
type myVehicle1 = "bike" | "car" | "cng";
//2.
type myVehicle2 = keyof RIchPeoplesVehicle;

const myVehicle : myVehicle2 = "bike";

// keyof constant


type User ={
    id: number,
    name: string,
    address: {
        city: string
    }
}

const user: User = {
    id : 1,
    name : "Alice",
    address : {
        city : "Chittagong",
    },
}

// const myId = user.id;

// const myId = user["id"];

// const myName = user["name"];
// const myAddress = user["address"];

//console.log({myId,myName,myAddress});

const getPropertyFromObj = <X>(obj:X, key: keyof X)=>{
    return obj[key];
}

const result = getPropertyFromObj(user, "name");

console.log(result);

const product = {
    brand: "hp",
    model: "Envy 15",
}

const result2 = getPropertyFromObj(product, "brand");
console.log(result2);




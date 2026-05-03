// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arraOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arraOfStringUsingMap);

const user = {
    id: 222
}

user["id"]

type AreaOfNum = {
  height: number;
  width: number;
};


type height = AreaOfNum["height"]

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area <T> = {
    [key in keyof T] : T[key];
}


const area1 : Area<{height: string; width: number}> = {height:"50", width: 40} 


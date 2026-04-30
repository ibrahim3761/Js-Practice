// function
// arrow function, normal function

function add (num1 : number,num2 : number) : number {
    return num1 + num2;
}

const addArrow=(num1 :number,num2 :number) : number =>{
    return num1 + num2;
}
console.log(addArrow(5,2));

// object => function as a method

const poorUser ={
    name: "Ibrahim",
    balance: 0,
    addBalance( value : number):number{
        this.balance+=value
        return this.balance
    }
}

poorUser.addBalance(100000)

console.log(poorUser);

const arr : number[] = [1,4,6]

const sqrArray = arr.map((elem: number) :number => elem * elem)


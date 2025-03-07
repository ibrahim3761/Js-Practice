class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    move(){
        console.log("ami choli");
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat=seat;
    }

    route(){
        console.log("Dhaka to Cox's");
    }
}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }

    route(){
        console.log("CTG to Cox's");
    }
}

const GreenLine = new Bus("greenline","12,50");
console.log(GreenLine);

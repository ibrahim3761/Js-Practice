// condition type : it depends on condition

type A = null
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false

type RichPeoplesVehicle = {
    bike : string;
    car : string;
    ship: string;
}

type CheckVehicel <T> = T extends keyof RichPeoplesVehicle ? true : false

type HasBike = CheckVehicel<"tractor">


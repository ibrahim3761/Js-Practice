// oop : instance of type guard / type narrowing

class Person{
    name : string;

    constructor(name: string){
        this.name = name;
    }

    doSleep(val:number){
        console.log(`${this.name} sleeps for ${val} of hours`);
    }
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(val:number){
        console.log(`${this.name} studies for ${val} of hours`);
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name);
    }

    takeClass(val:number){
        console.log(`${this.name} takes classes for ${val} of hours`);
    }
}

//function guard

const isStudent = (user : Person)=>{
    return user instanceof Student;
}
const isTeacher = (user : Person)=>{
    return user instanceof Teacher;
}

const getUserInfo = (user:Person)=>{
    if(isStudent(user)){
        user.doStudy(5)
    }
    else if(isTeacher(user)){
        user.takeClass(6)
    }
    else{
        user.doSleep(7)
    }
}

const student1 = new Student("Ibrahim")
const teacher1 = new Teacher("Ibrahim")
const person1 = new Person("Rahim")

getUserInfo(student1)
getUserInfo(teacher1)
getUserInfo(person1)
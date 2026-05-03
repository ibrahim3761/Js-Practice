// constraint : strict rules implemnet

type student = {
    id: number,
    name: string
}

const addStudentToCourse = <T extends student>(studentInfo :T)=>{
    return {
        course : "Next Level 2",
        ...studentInfo
    }
}

const student1 ={
    id: 1,
    name: "Alice",
    hasPen: true
}

const student2 ={
    id: 2,
    name: "Bob",
    hasCar: true,
    isMarried: true
}

const student3 ={
    hasWatch: true
}
const result = addStudentToCourse(student2);


console.log(result);
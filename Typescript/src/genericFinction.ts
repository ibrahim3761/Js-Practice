// Generic Function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};

// const arrString = createArrayWithString("Hello");

// const arrNumber = createArrayWithNumber(42);

// const arrUserObj = createArrayWithUserObj({
//     id: 1,
//     name: "Alice"
// });

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Hello");

const arrNumber = createArrayWithGeneric(42);

const arrUserObj = createArrayWithGeneric({
  id: 1,
  name: "Alice",
});

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];


const createArrayTupleWithGeneric = <X,Y>(param1: X, param2:Y)=>[
    param1,
    param2
]

const res1 = createArrayTupleWithGeneric("Hello", false);

console.log(res1);


const addStudentToCourse = <T>(studentInfo :T)=>{
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

const result = addStudentToCourse(student2);


console.log(result);
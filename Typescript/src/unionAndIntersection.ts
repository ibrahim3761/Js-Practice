// union |

type UserRole = "admin" | "user";

const getDashboard = (role : UserRole) =>{
    if(role === "admin"){
        return "Admin Dashboard";
    }
    else if(role === "user"){
        return "User Dashboard";
    }
    else{
        return "Guest Dashboard";
    }
};

console.log(getDashboard("admin"));

// intersection &

type Employee = {
    id: string;
    name : string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const Chowdhury : EmployeeManager = {
    id: "E001",
    name: "Chowdhury",
    phoneNo: "01812345678",
    designation: "Manager",
    teamSize: 10,
}
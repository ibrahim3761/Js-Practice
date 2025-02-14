// simple logic
// function isLeapYear(year){
//     if(year % 4 == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// const year = isLeapYear(2023);
// console.log(year);


function isLeapYear2(year){
    if (year % 100 !==0 && year % 4 == 0)
    {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const isLeap = isLeapYear2(2020);
const isLeap1 = isLeapYear2(2000);
const isLeap2 = isLeapYear2(2100);
const isLeap3 = isLeapYear2(2020);

console.log(isLeap,isLeap1,isLeap2,isLeap3);
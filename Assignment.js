
function calculateVAT( price ) {
    if (isNaN(price) || price < 0) {
        return "Invalid";
    }
    return price * (7.5/100);
}
//console.log(calculateVAT(200));
// console.log(calculateVAT(-50));  
// console.log(calculateVAT("abc")); 
// console.log(calculateVAT("foo"));



function  validContact( contact ) {
    if ( typeof contact!== "string") {
        return "Invalid";
    }

    if (isNaN(contact) || contact.includes(" ")) {
        return false;
    }

    if (contact.length !== 11) {
        return false;
    }
    if (contact[0] !== "0" || contact[1] !== "1") {
        return false;
    }

    return true;
}
// console.log(validContact(true));



function  willSuccess( marks ) {
    if (Array.isArray(marks) === false) {
        return "Invalid";
    }

    let pass=0;
    let fail=0;

    for(let i=0; i<marks.length; i++){
        if (marks[i] >= 50) {
            pass++;
        } else {
            fail++;
        }
    }

    if (pass > fail) {
        return true;
    }
     else {
        return false;
    }
}
// console.log(willSuccess(90));



function  validProposal( person1 , person2 ) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
    }

    if(person1.gender === person2.gender){
        return false;
    }

    if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }

    return true;
}
// const person1 = { name: "Ali", gender: "male", age: 28 };
// const person2 = { name: "Aisha", gender: "female", age: 21 };
// console.log(validProposal(person1, person2)); 



function  calculateSleepTime( times ) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
    }
    let totalSec=0;
    for (let time of times) {
        totalSec += time;
    }

    let hour = Math.floor(totalSec / 3600);
    let minute = Math.floor((totalSec % 3600) / 60);
    let second = totalSec % 60;

    return { hour: hour , minute: minute , second: second};
}
// console.log(calculateSleepTime([5600,"90"]));

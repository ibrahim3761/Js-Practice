
// function calculateVAT( price ) {
//     if (isNaN(price) || price < 0) {
//         return "Invalid";
//     }
//     return price * (7.5/100);
// }
// // console.log(calculateVAT(200));
// // console.log(calculateVAT(-50));  
// // console.log(calculateVAT("abc")); 
// // console.log(calculateVAT("foo"));



// function  validContact( contact ) {
//     if ( typeof contact!== "string") {
//         return "Invalid";
//     }

//     if (isNaN(contact) || contact.includes(" ")) {
//         return false;
//     }

//     if (contact.length !== 11) {
//         return false;
//     }
//     if (contact[0] !== "0" || contact[1] !== "1") {
//         return false;
//     }

//     return true;
// }
// // console.log(validContact(true));



// function  willSuccess( marks ) {
//     if (Array.isArray(marks) === false) {
//         return "Invalid";
//     }

//     let pass=0;
//     let fail=0;

//     for(let i=0; i<marks.length; i++){
//         if (marks[i] >= 50) {
//             pass++;
//         } else {
//             fail++;
//         }
//     }

//     if (pass > fail) {
//         return true;
//     }
//      else {
//         return false;
//     }
// }
// // console.log(willSuccess(90));

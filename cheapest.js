const mobiles = [
    {name:'Samsung', price: 20000, camera: '12 mp, color: black'},
    {name:'Mi', price: 18000, camera: '12 mp, color: black'},
    {name:'Oppo', price: 30000, camera: '12 mp, color: black'},
    {name:'Iphone', price: 100000, camera: '12 mp, color: black'},
    {name:'Walton', price: 31000, camera: '12 mp, color: black'},
]


function getPhone(phones) {
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getPhone(mobiles);
console.log(cheap);
// const numbers = [45,65,23,98,19];
// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1, name:'laptop', price: 50000},
    {id:2, name:'mi phone', price: 35500},
    {id:3, name:'car', price: 300500},
    {id:4, name:'hat', price: 500},
    {id:5, name:'apple phone', price: 100000},
    {id:5, name:'apple Phone 1', price: 110000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
       }
    }
    return matched;
}
const res = matchedProducts(products, 'phone');
console.log(res);
let products = [
    { name: 'shampoo', price: 300},
    { name: 'chiruni', price: 100},
    { name: 'shirt', price: 700},
    { name: 'pant', price: 1200},
]

function getShoppingTotal(products){
    let total = 0;
    for(let product of products){
        total = total + product.price
    }
    return total
}

let total = getShoppingTotal(products)
console.log('total price: ',total)
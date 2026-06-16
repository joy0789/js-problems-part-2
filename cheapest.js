let phones = [
    { name: 'samsung', price: 80000, camera: '12mp', color: 'black'},
    { name: 'vivo', price: 50000, camera: '12mp', color: 'black'},
    { name: 'oppo', price: 40000, camera: '12mp', color: 'black'},
    { name: 'iphone', price: 100000, camera: '12mp', color: 'black'},
    { name: 'redmi', price: 30000, camera: '12mp', color: 'black'},
]

function getcheapestPhone(phones){
    let min = phones[0]
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}

let cheap = getcheapestPhone(phones);
console.log('Cheapest phone is: ',cheap)
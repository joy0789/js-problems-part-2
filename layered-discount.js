/**
 * first: ---> 100
 * 101 to 200 --> 90
 * above 200: --> 70
*/

function layeredDiscountedTotal(quantity){
    let first100price = 100;
    let second100price = 90;
    let above200price = 70;

    if(quantity <= 100){
        let total = quantity * first100price
        return total
    }
    else if(quantity <= 200){
        let first100Total = 100* first100price
        let remainingQuantity = quantity - 100;
        let remainingTotal = remainingQuantity * second100price;

        let total = first100Total + remainingTotal 
        return total
    }
    else{
        let first100Total = 100* first100price
        let second100Total = 100* second100price
        let remainingQuantity = quantity - 200
        let remainingTotal = remainingQuantity * above200price
        let total = first100Total + second100Total + remainingTotal
        return total
    }
}

let total = discountedPrice(50);
console.log(total)
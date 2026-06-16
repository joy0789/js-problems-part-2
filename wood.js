
function woodQuantity(chairQuantity, tableQuantity, bedQuantity)
{
    const perChairwood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood= chairQuantity * perChairwood;
    const tableTotalwood= tableQuantity* perTableWood;
    const bedTotalwood = bedQuantity * perBedWood;
    
    const totalwood = chairTotalWood + tableTotalwood + bedTotalwood; 
    return totalwood;
}
const wood = woodQuantity(0,0,1)
console.log('wood needed', wood);

/**
 * shirt price  ---> 500
 * pant price  ---> 300
 * shoe price  ---> 900
*/

function totalPrice(shirtQuantity, pantQuantity, shoeQuantity){
    let shirtPrice = 500;
    let pantPrice = 300;
    let shoePrice = 900;

    let shirtTotal = shirtQuantity * shirtPrice
    let pantTotal = pantQuantity * pantPrice
    let shoeTotal = shoeQuantity * shoePrice

    let totalPrice = shirtTotal + pantTotal + shoeTotal

    return totalPrice
}
let total = totalPrice(1,1,1)
console.log('total price is: ' ,total)
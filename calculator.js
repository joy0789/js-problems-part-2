function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

function calculator(a ,b, operation){
    if(operation === 'add'){
        let result = add(a, b)
        return result
    }
    else if(operation === 'subtract'){
        let result = subtract(a, b)
    }
    else if(operation === 'multiply'){
        let result = multiply(a, b)
    }
    else if(operation === 'divide'){
        let result = divide(a, b)
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed"
    }
}

let result = calculator(50,20, 'add')
console.log(result)
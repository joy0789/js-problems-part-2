let heights = [65,66,68,72,78,60,65,66]

function getMax(numbers){
    let max = numbers[0]
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
let max = getMax(heights);
console.log('max value is ',max);
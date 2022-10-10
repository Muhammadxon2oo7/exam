//3.

function sumOfTwoArrays(a,b){
    
    const newArr=[...a,...b].reduce((a, b)=>a+b)
    return newArr
}
let result =sumOfTwoArrays([10,10],[-5,-1])
console.log(result);

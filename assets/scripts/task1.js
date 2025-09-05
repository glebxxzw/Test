const array = [];

let n = 80;      
array.push(-1);
array[n-1] = 1

for(let i = 1; i < n-2; i++){
    array[i] = array[i-1] + getLadderStep(array[n-1]-array[0], array.length);
}

function getLadderStep(res, n) {
    return Math.abs(res) / (n-2);
}

console.log(array);
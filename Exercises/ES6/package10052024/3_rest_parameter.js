function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3];
console.log(`Sum = ${sumNumbers(numbers)}`);


// su dung tham so rest
function totalNumbers(...numbers) {
    let total = 0;
    for (const iterator of numbers) {
        total += iterator;
    }
    return total;
}

console.log(`Total = ${totalNumbers(1, 2, 3, 4, 5)}`);
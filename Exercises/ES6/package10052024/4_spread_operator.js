//toan tu spread(toan tu rai)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, 7, 7, ...arr2, 10];
console.log(arr3)

function totalNumbers(...numbers) {
    let total = 0;
    for (const item of numbers) {
        total += item;
    }
    return total;
}

let numbers = [1, 2, 3];
console.log(`Total = ${totalNumbers(1, 3, 2)}`);
console.log(`Total = ${totalNumbers(...arr3)}`);

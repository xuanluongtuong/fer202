//dinh nghia mot doi tuong promise de quan ly ket qua cua 1 action bat dong bo nao do
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if(randomNum <0.5){
            resolve(randomNum);
        }else {
            reject(`Error: Random number ${randomNum} is greater than 0.5`);
        }

    }, 2000);
});

myPromise
    .then(result => {
        console.log(`Success: ${result}`)
    })
    .catch(error => {
        console.log(error);
    });

const anotherPromise = new Promise((resolve, reject) => {
    resolve('Another promise');
});

anotherPromise
    .then  (result => {
        console.log(result);
        return 'Chain promise';
    })
    .then (result => {
        console.log(result);
    });
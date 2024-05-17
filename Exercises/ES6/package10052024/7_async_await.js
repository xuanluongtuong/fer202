let myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve(`Success: ${randomNum}`);
        } else {
            reject(`Error: Random number ${randomNum} is greater than 0.5`);
        }

    }, 1000);
});

async function asyncFunction() {
    for (let i = 1; i <= 10; i++) {
        await myPromise()
            .then(result => {
                console.log(`${result} - ${i}`);
            })
            .catch(error => {
                console.log(`${error} - ${i}`);
            });
    }
}


asyncFunction()


    
    
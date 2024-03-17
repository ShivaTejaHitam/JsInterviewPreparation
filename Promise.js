

async function someFunction(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Executed successfully');
        },3000);
    });

    await promise;

    console.log('below promise definition');
}

console.log('Welcome to false promise');

someFunction();

console.log('Exiting false promise');




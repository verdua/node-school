'use strict'

let promise = Promise.resolve('I FIRED');
let otherPromise = new Promise((fulfill, reject) => {
    reject(new Error('I DID NOT FIRE'));
});

promise.then(console.log);
       
otherPromise.catch((error) => {
    console.log(error.message);
});
     
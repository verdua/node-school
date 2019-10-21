'use strict'

function all(p1, p2) {
    let counter = 0;
    let promise = new Promise((fulfill, reject) => {
        let results = new Array(2);

        p1.then(function (value) {
            results[0] = value;
            counter++
        
            if (counter === 2) {
                fulfill(results);
            }
        });

        p2.then(function (value) {
            results[1] = value;
            counter++
        
            if (counter === 2) {
                fulfill(results);
            }
        });
    });

    return promise
}

all(getPromise1(), getPromise2())
    .then(console.log);


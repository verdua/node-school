'use strict'

function parsePromised() {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(process.argv[2]));
        } catch (error) {
            reject(error);
        }
    });
};

function onReject(error) {
    console.log(error.message);
}

parsePromised().then(null, onReject);
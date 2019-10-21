'use strict'

function alwaysThrows() {
    throw new Error('OH NOES');
};

function iterates(number) {
    console.log(number++);

    return number;
};

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(iterates(1))
    .then(iterates)
    .then(iterates)
    .then(iterates)
    .then(iterates)
    .then(alwaysThrows)
    .then(iterates)
    .then(iterates)
    .then(iterates)
    .then(iterates)
    .then(iterates)
    .catch(onReject)
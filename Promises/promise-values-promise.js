'use strict'

function attachTitle(firstArgument) {
    return `DR. ${firstArgument}`;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);
'use strict';

import lib = require('./lib');

const printFunc = function(msg: string) {
    console.log(msg);
}

setTimeout(async () => {
    lib.getRequestPromise(); // no-floating-promises error
    const res1: string = lib.getRequestPromise(); // Will be detected by tsc 
    const res2 = lib.getRequestPromise(); // Will be detected by tsc
    const res3 = lib.getRequestPromise(); // Will NOT be detected by tsc
    console.log("res1: " + res1);
    printFunc(res2);
    printFunc("res3: " + res3);
});

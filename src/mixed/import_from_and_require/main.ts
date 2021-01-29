'use strict';

import {getRequestPromise} from './lib';
const lib1 = require("./lib1");

const printFunc = function(msg: string): void {
    console.log(msg);
};

setTimeout(async () => {
    getRequestPromise();                            // no-floating-promises error
    const res1: string = getRequestPromise();       // Will be detected by tsc 
    const res2 = getRequestPromise();               // Will be detected by tsc
    const res3 = getRequestPromise();               // Will NOT be detected by tsc
    lib1.getRequestPromise1();                      // no-floating-promises error
    const res4: string = lib1.getRequestPromise1(); // Will NOT be detected by tsc 
    const res5 = lib1.getRequestPromise1();         // Will NOT be detected by tsc
    const res6 = lib1.getRequestPromise1();         // Will NOT be detected by tsc
    console.log("res1: " + res1);
    printFunc(res2);
    printFunc("res3: " + res3);
    console.log("res4: " + res4);
    printFunc(res5);
    printFunc("res6: " + res6);
});
 

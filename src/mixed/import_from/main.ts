'use strict';

import {getRequestPromise} from './lib';


const printFunc = function(msg: string): void {
    console.log(msg);
};


setTimeout(async () => {
    getRequestPromise();                             // no-floating-promises error
    const res1: string = getRequestPromise(); // Will be detected by tsc 
    const res2 = getRequestPromise(); // Will be detected by tsc
    const res3 = getRequestPromise(); // Will NOT be detected by tsc
    console.log("res1: " + res1);
    printFunc(res2);
    printFunc("res3: " + res3);
});
 

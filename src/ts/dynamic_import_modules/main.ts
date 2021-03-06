'use strict';

const printFunc = function(msg: string): void {
    console.log(msg);
}

setTimeout(async () => {
    const lib = await import('./lib');
    lib.getRequestPromise(); // no-floating-promises error
    const res1: string = lib.getRequestPromise(); // Will be detected by tsc 
    const res2 = lib.getRequestPromise(); // Will be detected by tsc
    const res3 = lib.getRequestPromise(); // Will NOT be detected by tsc
    console.log("res1: " + res1);
    printFunc(res2);
    printFunc("res3: " + res3);
});

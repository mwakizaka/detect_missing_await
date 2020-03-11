'use strict';

const lib = require('./lib');
lib.getRequestPromise();                // no-floating-promises error
const result = lib.getRequestPromise(); // Unfortunately, probably impossible to detect

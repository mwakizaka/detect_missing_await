import lib = require('./lib');
import requestPromise = require("request-promise");

lib.getRequestPromise({}); // no-floating-promises
requestPromise({});        // Maybe necessary to add third party typings in order to detect this error

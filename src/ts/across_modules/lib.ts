import requestPromise = require("request-promise");

const getRequestPromise = async function(options) {
    return requestPromise(options);
};

export = {
    getRequestPromise: getRequestPromise,
};

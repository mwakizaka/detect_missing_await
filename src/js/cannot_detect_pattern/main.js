const PostClient = require('./postClient');

/**
 * @param {string} [result] it's a result
 */
function printResult(result) {
  console.log("result");
}

const client = PostClient({});

// We might rescue the following line when we use typescript as a linter.
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
client.postData("http://www.google.com", {"buffer": "data"});

'use strict';

const requestPromise = require("request-promise");

const PostClient = function(header) {
  this.header = header;
};

/**
 * @return {Promise<string>}
 */
PostClient.prototype.postData = async function(url, formData) {
  const options = {
    method: 'POST',
    headers: this.header,
    url: url,
    formData: formData
  };
  try {
    return await requestPromise(options, false);
  } catch (e) {
    console.log(e);
  }
};

module.exports = PostClient;


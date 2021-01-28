'use strict';

const requestPromise = require("request-promise");


const Client = function(header, url) {
  this.header = header;
  this.url = url;
}

Client.prototype.getRequest = async function() {
  const options = {
    method: 'GET',
    headers: this.header,
    url: this.url,
  };
  try {
    return await requestPromise(options);
  } catch (e) {
    console.log(e);
  }
}

module.exports = Client;


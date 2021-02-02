'use strict';

import requestPromise = require("request-promise");

export class Client {
  constructor(header, url) {
    this.header = header;
    this.url = url;
  }
  async getRequest() {
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
}


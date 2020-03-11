'use strict';

import requestPromise = require("request-promise");

class Client {
  header: string;
  url: string;
  constructor(header: string, url: string) {
    this.header = header;
    this.url = url;
  }
  getRequest(): Promise<string> {
    const options = {
      method: 'GET',
      headers: this.header,
      url: this.url,
    };
    try {
      return requestPromise(options);
    } catch (e) {
      console.log(e);
    }
  }
}

export = Client;


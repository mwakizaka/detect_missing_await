'use strict';

const Client = require('./client');

setTimeout(async () => {
  const client = new Client("", "https://randomuser.me/api?format=json");
    
  client.getRequest();                // no-floating-promises error
  const result = client.getRequest(); // You need to type to detect missing await error
  console.log(result);
});

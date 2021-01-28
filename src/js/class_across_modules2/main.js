'use strict';

const Client = require('./client');

setTimeout(async () => {
  const client = new Client("", "https://randomuser.me/api?format=json");
    
  client.getRequest();                // no-floating-promises error
  
  // You need some typing technique to detect missing await error
  const result = client.getRequest(); 
  console.log(result);
});

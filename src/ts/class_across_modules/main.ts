import {Client} from './client';

setTimeout(async () => {
  const client = new Client("", "https://randomuser.me/api?format=json");
    
  client.getRequest();                     // no-floating-promises error
  const res1: string = client.getRequest(); // missing await error will be detected by tsc
  const res2 = client.getRequest();        // no way to detect missing await 
  console.log(res1);
  console.log(res2);
});

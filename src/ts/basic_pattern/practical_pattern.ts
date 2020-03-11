// Based on https://github.com/Microsoft/TypeScript/issues/13376#issuecomment-478250993

async function sleepAndReturn<T extends any>(ms: number, returned: T): Promise<T>{
  return new Promise((resolve, _reject)=>{
    setInterval(function(){
      resolve(returned);
    },ms)
  });
}

async function practicalExample(): Promise<void> {
  sleepAndReturn(100, 'X');                 // no-unsued-promises error
  // By specifying void keyword, no error detected as intended
  void sleepAndReturn(100, 'X'); 
  const x = await sleepAndReturn(100, 'z'); // No error detected
  const y = sleepAndReturn(300, 3); // Not good but no error detected
  console.log(x, y);
}

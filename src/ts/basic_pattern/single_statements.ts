// Based on https://github.com/Microsoft/TypeScript/issues/13376#issuecomment-273044383

declare function f(): Promise<void>;

function printString(strToBePrinted: string): void {
  console.log(strToBePrinted);
}

async function singleStatements(): Promise<void> {
  f();                         // no-floating-promises Error by eslint
  f() as {};                   // No error detected
  await f();                   // No error detected
  const p = f();               // Not good but no error detected
  
  // A compie error raised like the following. By this error, you need to notice that there should be `await` keyword at line 13 
  // Argument of type 'Promise<void>' is not assignable to parameter of type 'string'.
  printString(p);               
 
  p as {};                     // no error detected
  Promise.all([f(), p]);       // no-floating-promises Error by eslint
  await Promise.all([f(), p]); // no error detected
  return f();                  // no error detected
}

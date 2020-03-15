// Based on https://github.com/Microsoft/TypeScript/issues/13376#issuecomment-273044383

declare function f(): Promise<void>;

async function bar(): Promise<void> {
  return false;
}

async function singleStatements(): Promise<void> {
  f();                         // no-floating-promises Error by eslint
  f() as {};                   // No error detected
  await f();                   // No error detected
  
  // A compie error raised like the following. By this error, you need to notice that there should be `await` keyword at line 13 
  // Argument of type 'Promise<void>' is not assignable to parameter of type 'boolean'.
  const result: boolean = bar();
 
  p as {};                     // no error detected
  Promise.all([f(), p]);       // no-floating-promises Error by eslint
  await Promise.all([f(), p]); // no error detected
  return f();                  // no error detected
}

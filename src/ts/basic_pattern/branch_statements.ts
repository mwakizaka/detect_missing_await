// Based on https://github.com/microsoft/TypeScript/pull/15195#issuecomment-296578284
async function bar(): Promise<boolean> {
  return false 
}  

async function branchStatements(): Promise<void> {
  if (bar()) { console.log(''); }                // no-unsued-promises error
  while (bar()) { console.log(''); }             // no-unsued-promises error
  do { console.log(''); } while (bar())          // no-unsued-promises error
  const x = bar() ? 1 : 2;                       // no-unsued-promises error
  for (let i = 1; bar(); i++){ console.log('') } // no-unsued-promises error
  

  // Not good but no error detected.
  // In order to detect this, you need to turn `@typescript-eslint/strict-boolean-expressions` rule on 
  switch (bar()) { case bar(): break; }          
}

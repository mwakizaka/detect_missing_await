'use strict';

const pathToAnotherNodeModule = function(moduleName) {
  return 'lodash/' + moduleName;
};

const packageJson = require(pathToAnotherNodeModule('package.json'));
console.log(packageJson.version);


import * as packageJson2 from pathToAnotherNodeModule('package.json');
console.log(packageJson2.version);



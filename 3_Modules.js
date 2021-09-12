//Modules

//Syntax for going through file structure would be to use multiple dots to go up more levels 
//'../4_Names' if that was sitting in a folder above.
const names = require('./4_Names');
const sayHi = require('./5_Utils');
const data = require('./6_AlternativeExport')
const does = require('./7_MindGrenade')
console.log(data);
console.log(names);
sayHi("Jonathan");
sayHi(names.name1);
sayHi(names.name2);

/* 
const ourImport = require('./6_AlternativeExport')


console.log(ourImport.GetOurItems);

 */

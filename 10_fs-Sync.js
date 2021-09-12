//This is an example of Synchronous code -- code is run from top to bottom.
//This can generally be fine until you have something that takes a long time.
//If you have anything that takes too long, then you need to make it async so the entire program doesn't stop.



//This uses "destructuring"
//It is the same as writing the following:
// const fs = require('fs');
// fs.readFileSync
const {readFileSync, writeFileSync} = require('fs');
console.log('this is the start');
const first =  readFileSync('./content/first.txt', 'utf8');
const second =  readFileSync('./content/second.txt', 'utf8');

console.log(first, second);


//The third argument is an object "Options" paramater. 
//This allows you to select a property on that object and then the writeFileSync file uses the property that we selected to alter the functionality of what we are doing.
//This selected "flag" uses the 'a' paramater which is basically a command to open files for appending.
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting the next task');

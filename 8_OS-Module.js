const os = require('os');
const { uptime } = require('process');

// info about current user

const user = os.userInfo();

console.log(user);


// method returns system uptime
var uptimeH = (os.uptime / 3600);
console.log(`The System has been running for: ${uptimeH.toFixed(0)} hours.`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

//Converts totalMem to GB
const totalGB = currentOS.totalMem / Math.pow(1024, 3);
const totalFreeGB = currentOS.freeMem / Math.pow(1024, 3);
console.log(`Memory: ${totalFreeGB.toFixed(2)}GB/${totalGB.toFixed(2)}GB`);

//How Async code works.
//The way this is structured allows our code to continue running while the computationally heavy task is run simultaneously.
//Code is run synchronously until it hits some async code -- in this case readFile.
//Any time async code is hit, the program branches off and that code is run simultaneously as the rest of the code runs.
//This code runs, hits readFile -- this branches off as async, and the rest of the code runs. This allows no downtime and allows the "next task" to be
//started while we wait on the code to finish. When the readFile is complete, it will return when it's done.



//This uses "destructuring"
//It is the same as writing the following:
// const fs = require('fs');
// fs.readFileSync
//This uses the async versions of these functions.
const {readFile, writeFile} = require('fs');

// async method requires callback (we run callback when we're done.)


console.log('Start');
//Callback Hell -- The alternative to this is to use async/await/promises
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task')
        })
    })
});
console.log('starting next task')



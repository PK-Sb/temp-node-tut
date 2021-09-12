//Globals -- We don't have windows in Node like vanilla JS. Globals are important for certain functionality in Node.

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about environment(env) where the program is being executed
    //This is very important because your code can be running in different environments and based on that environment you can make different decisions for your application.

//These are examples of things that are also available globally.
console.log("Hello!");

//Runs at 1 second intervals, make sure to exit the terminal and not let this run forever.
setInterval(()=>{
    console.log('Hello World!')
}, 1000)
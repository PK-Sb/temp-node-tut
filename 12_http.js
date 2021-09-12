//This is a basic example of how servers & http works & this is not supposed to be extremely in-depth, just a primer.
//When the server starts it will be running and you need to press ctrl+c in terminal to stop it.

const http = require('http');

//req and res are standard naming conventions here (request/result)
const server = http.createServer((req, res) =>{
// '/' is basically the home page (url with nothing after its)
if(req.url === '/'){
    res.end('Welcome!');
}
else if(req.url === '/about'){
    res.end('This is our about page!');
}else{
    //Gives error for any invalid URLs
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page! :/</p>
    <a href="/">back home</a>
    `)
    }
})

//Assings the localhost -- if you type localhost:number into web browser it will open what is written.
server.listen(5000)
